(ns arachne.figwheel.server
  (:require [clojure.spec :as s]
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
            [clojure.core.async :as a :refer [go go-loop >! <! <!! >!!]]
            [ring.middleware.file-info :as file-info]
            [ring.middleware.file :as ring-file])
  (:import [org.apache.commons.io FileUtils]))

(defn- figwheel-cfg-data
  "Extract Figwheel configuration data from the Arachne config, returning it in the Figwheel
   format (the same as would be used by by figwheel.edn)"
  [entity src-dir compile-dir handler]
  (let [compiler-options (cljs/compiler-options (::compiler-options entity) compile-dir)
        build {:id "figwheel-build"
               :source-paths [(.getPath src-dir)]
               :figwheel true
               :compiler compiler-options}
        fig-cfg (u/map-transform entity {:builds [build]
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
  [entity src-dir compile-dir handler]
  (-> (figwheel-cfg-data entity src-dir compile-dir handler)
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

;; TODO: make Figwheel a producer
;; expose compile-dist for consumption

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

(defrecord FigwheelServer [fig-system fsview]
  component/Lifecycle
  (start [this]
    (let [inputs (pipeline/input-channels this)
          src-ch (input-by-role this inputs :src)
          public-dist (autil/dist (input-by-role this inputs :public))
          src-dir (fs/tmpdir!)
          compile-dir (fs/tmpdir!)
          compile-dist (autil/dist (pipeline/watch-dir compile-dir))
          serve-ch (pipeline/merge-inputs [(let [ch (a/chan (a/sliding-buffer 1))]
                                             (a/tap public-dist ch)
                                             ch)
                                           (let [ch (a/chan (a/sliding-buffer 1))]
                                             (a/tap compile-dist ch)
                                             ch)])
          fsview (component/start (pipeline/map->FSViewComponent {:inputs [serve-ch]}))
          handler (fn [req] (aa/ring-response fsview req "/" true))
          fig-system (component/start (figwheel-system this src-dir compile-dir handler))]

      (when (:arachne.figwheel.server/css? this)
        (watch-css public-dist fig-system))

      ;; continuously copy from source ch to source dir
      (a/go-loop []
        (when-let [fs (<! src-ch)]
          (fs/commit! fs src-dir)
          (recur)))

      (assoc this :fig-system fig-system
                  :fsview fsview)))
  (stop [this]
    (assoc this :fig-system (component/stop fig-system))))

(defn ctor
  "Constructor for a figwheel server component"
  [entity]
  (map->FigwheelServer {}))