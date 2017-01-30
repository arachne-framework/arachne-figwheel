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


(defn build-handler
  "Build a Ring handler function to serve all figwheel resources.

  Attempts to load a JS file from the compile directory. Failing that, serve from the public
  fileset handler."
  [compile-dir fsview]
  (let [publics-handler (fn [req]
                          (aa/ring-response fsview req "/" true))
        compile-handler (file-info/wrap-file-info
                          #(ring-file/file-request % (.getPath compile-dir)))]
    (fn [req]
      (or (compile-handler req) (publics-handler req) nil))))

(defrecord FigwheelServer [figwheel-system fsview]
  component/Lifecycle
  (start [this]
    (let [inputs (pipeline/input-channels this)
          src-ch (input-by-role this inputs :src)
          public-ch (input-by-role this inputs :public)
          fsview (component/start (pipeline/map->FSViewComponent {:inputs [public-ch]}))
          src-dir (fs/tmpdir!)
          compile-dir (fs/tmpdir!)
          handler (build-handler compile-dir fsview)
          figwheel-cfg (figwheel-cfg-data this src-dir compile-dir handler)
          figwheel-internal (figwheel-internal-cfg figwheel-cfg)
          figwheel-system (fig/figwheel-system figwheel-internal)]

      ;; continuously copy from source ch to source dir
      (a/go-loop []
        (when-let [fs (<! src-ch)]
          (fs/commit! fs src-dir)
          (recur)))

      (assoc this :figwheel-system (component/start figwheel-system)
                  :fsview fsview)))
  (stop [this]
    (assoc this :figwheel-system (component/stop figwheel-system)
                :fsview (component/stop fsview))))

(defn ctor
  "Constructor for a figwheel server component"
  [entity]
  (map->FigwheelServer {}))