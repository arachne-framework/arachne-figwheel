(ns arachne.figwheel.server
  (:require [clojure.spec.alpha :as s]
            [arachne.log :as log]
            [arachne.error :as e :refer [deferror error]]
            [arachne.core.config :as cfg]
            [arachne.core.util :as u]
            [arachne.fileset :as fs]
            [arachne.assets :as aa]
            [arachne.assets.pipeline :as pipeline]
            [arachne.assets.util :as autil]
            [arachne.cljs.build :as cljs]
            [com.stuartsierra.component :as component]
            [figwheel-sidecar.system :as fig]
            [figwheel-sidecar.config :as fig-cfg]
            [figwheel-sidecar.components.figwheel-server :as fig-server]
            [figwheel-sidecar.components.cljs-autobuild :as cljs-autobuild]
            [figwheel-sidecar.build-middleware.injection :as injection]
            [figwheel-sidecar.build-middleware.notifications :as notifications]
            [figwheel-sidecar.build-middleware.clj-reloading :as clj-reloading]
            [figwheel-sidecar.build-middleware.javascript-reloading :as javascript-reloading]
            [clojure.core.async :as a :refer [go go-loop >! <! <!! >!!]]
            [ring.middleware.file-info :as file-info]
            [ring.middleware.file :as ring-file])
  (:import [org.apache.commons.io FileUtils]))

(defn- figwheel-cfg-data
  "Extract Figwheel configuration data from the Arachne config, returning it in the Figwheel
   format (the same as would be used by by figwheel.edn)"
  [entity src-dir compile-dir handler build-fn]
  (let [compiler-options (cljs/compiler-options (::compiler-options entity) compile-dir)
        build {:id "figwheel-build"
               :source-paths [(.getPath src-dir)]
               :figwheel (if-let [on-jsload (:arachne.figwheel.server/on-jsload entity)]
                           {:on-jsload (.substring (str on-jsload) 1)}
                           true)
               :compiler compiler-options}
        fig-cfg (u/map-transform entity {:builds [build]
                                         :cljs-build-fn build-fn
                                         :validate-config false
                                         :resolved-ring-handler handler
                                         :http-server-root (.getPath compile-dir)}
                  :arachne.figwheel.server/port :server-port identity
                  :arachne.figwheel.server/open-file-command :open-file-command identity)]
    fig-cfg))

(defn- figwheel-internal-cfg
  "Prep input data (in the same way that figwheel does internally)"
  [cfg-data]
  (-> cfg-data
    (fig-cfg/->figwheel-config-source)
    (fig-cfg/config-source->prepped-figwheel-internal)))

(defn- figwheel-system
  "Return an unstarted Figwheel system based on the provided cfg"
  [entity src-dir compile-dir handler build-fn]
  (-> (figwheel-cfg-data entity src-dir compile-dir handler build-fn)
    (figwheel-internal-cfg)
    (fig/figwheel-system)))

(deferror ::missing-input
  :message "Input with role `:role` not found for Figwheel Server `:eid` (Arachne ID: `:aid`)"
  :explanation "The Figwheel server requires two different types of inputs, wired together using
                the Arachne asset pipeline.

  - Inputs with the `:src` role contain ClojureScript source files to be compiled
  - Inputs with the `:public` role contain files that should be made available via HTTP

  In this case, no inputs with a role of `:role` could be found, and so Figwheel could not be started.

  If you are using the standard asset pipeline DSL, the form to wire up a figwheel server with its
  dependencies should look something like this:

      (a/pipeline [:my/source-code :my/figwheel-server #{:src}
                   :my/html-files  :my/figwheel-server #{:public}])
  "
  :suggestions ["Ensure that your Figwheel Server has at least one `:src` and one `:public` input."]
  :ex-data-docs {:eid "The entity ID of the Figwheel server"
                 :aid "The arachne ID of the Figwheel server"
                 :role "The missing role"})

(defn- input-by-role
  "Given a seq of [channel #{roles}] tuples (such as returned by
   `arachne.assets.pipeline/input-channels`, return the channel with the specified role. If no
   channels are found, throw an error. If multiple channels are found, merge them before
   returning."
  [component inputs role]
  (let [chans (->> inputs
                   (filter #(contains? (set (second %)) role))
                   (map first))]
    (case (count chans)
      0 (error ::missing-input {:role role
                                :eid (:db/id component)
                                :aid (:arachne/id component)})
      1 (first chans)
      (pipeline/merge-inputs chans))))

(defn css-changed
  "Return a transducer that only passes through modified CSS files"
  []
  (fn [xf]
    (let [prev (volatile! nil)]
      (fn
        ([] (xf))
        ([result] (xf result))
        ([result fs]
         (let [css-fs (fs/filter fs #(re-matches #".*\.css$" (:path %)))
               changed-fs (if-let [old @prev]
                            (fs/changed old css-fs)
                            css-fs)
               filenames (set (keys (:tree changed-fs)))]
           (vreset! prev css-fs)
           (if (empty? filenames)
             result
             (xf result filenames))))))))

(defn- watch-css
  "Given a dist of public filesets, start a watcher that will notify whenever the CSS files change"
  [public-dist figwheel-system]
  (let [changes-ch (a/chan 3 (css-changed))]
    (a/tap public-dist changes-ch)
    (a/go-loop []
      (when-let [changes (<! changes-ch)]
        (let [files (map (fn [f]
                           {:file f, :type :css})
                      changes)]
          (doseq [f files]
            (println "Arachne Figwheel: Notifying browser of changed CSS file:" (:file f)))
          (fig-server/send-message figwheel-system ::fig-server/broadcast {:msg-name :css-files-changed
                                                                           :files files}))
        (recur)))))

(defn- construct-build-fn
  "Return Figwheel's :cljs-build-fn, adding the specified middleware right inside notification."
  [middleware]
  (-> cljs-autobuild/cljs-build
    injection/hook
    cljs-autobuild/notify-command-hook
    cljs-autobuild/figwheel-start-and-end-messages
    middleware
    notifications/hook
    ;; the following two hooks have to be called before the notifications
    ;; a they modify the message on the way down
    clj-reloading/hook
    javascript-reloading/hook
    cljs-autobuild/color-output))


(defrecord FigwheelServer [fig-system fsview dist]
  pipeline/Producer
  (-observe [_] (a/tap dist (a/chan (a/sliding-buffer 1))))
  component/Lifecycle
  (start [this]
    (let [inputs (pipeline/input-channels this)
          src-ch (input-by-role this inputs :src)
          public-dist (autil/dist (input-by-role this inputs :public))
          src-dir (fs/tmpdir!)
          compile-dir (fs/tmpdir!)
          compile-ch (a/chan (a/sliding-buffer 1))
          compile-dist (autil/dist compile-ch)
          fsview (atom (pipeline/map->FSViewComponent
                         {:inputs [(a/tap public-dist (a/chan (a/sliding-buffer 1)))
                                   (a/tap compile-dist (a/chan (a/sliding-buffer 1)))]}))
          handler (fn [req]
                    (let [fsview @fsview]
                      (when (:state fsview)
                        (aa/ring-response fsview req "/" true))))

          middleware (fn [build-fn]
                       (fn [build-state]
                         (let [next-state (build-fn build-state)
                               fs (fs/add (fs/fileset) compile-dir)]
                           ;; Blocking put... several times
                           ;; This is hacky, but greatly reduces the chance that the page
                           ;; attempts to refresh before the new files are erady to be served.
                           ;; Because of how core.async works, strict coordination is impossible.
                           ;; It doesn't really hurt preformance
                           (dotimes [_ 5]
                             (a/>!! compile-ch fs))
                           next-state)))

          build-fn (construct-build-fn middleware)
          fig-system (component/start (figwheel-system this src-dir compile-dir handler build-fn))]

      (when (:arachne.figwheel.server/css? this)
        (watch-css public-dist fig-system))

      ;; continuously copy from source ch to source dir
      (a/go-loop []
        (when-let [fs (<! src-ch)]
          (fs/commit! fs src-dir)
          (recur)))

      (assoc this :fsview (swap! fsview component/start)
                  :fig-system fig-system
                  :dist compile-dist)))
  (stop [this]
    (assoc this
       :fsview (component/stop fsview)
       :fig-system (component/stop fig-system))))

(defn ctor
  "Constructor for a figwheel server component"
  [entity]
  (map->FigwheelServer {}))
