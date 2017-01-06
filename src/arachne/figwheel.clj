(ns arachne.figwheel
  (:require [arachne.figwheel.schema :as schema]
            [arachne.core.config :as cfg]
            [figwheel-sidecar.system :as fig]
            [figwheel-sidecar.config :as fig-cfg]
            [arachne.core.util :as u]
            [arachne.cljs :as cljs]))

(defn- figwheel-cfg-data
  "Extract Figwheel configuration data from the Arachne config, returning it in the Figwheel
   format (the same as would be used by by figwheel.edn)"
  [cfg eid]
  (let [m (cfg/pull cfg '[* {:arachne.figwheel.server/builds [*]}] eid)
        transform-build (fn [build]
                          (u/map-transform build {}
                            :arachne.figwheel.build/id :id identity
                            :arachne.figwheel.build/source-paths :source-paths identity
                            :arachne.figwheel.build/figwheel :figwheel identity
                            :arachne.figwheel.build/compiler-options :compiler #(cljs/cljs-config-map cfg (:db/id %))))]
    (u/map-transform m {}
      :arachne.figwheel.server/root :http-server-root identity
      :arachne.figwheel.server/port :server-port identity
      :arachne.figwheel.server/open-file-command :open-file-command identity
      :arachne.figwheel.server/builds :builds #(map transform-build %))))

(defrecord ConfigSource [arachne-cfg server-eid]
  fig-cfg/ConfigSource
  (-config-data [_]
    (fig-cfg/->FigwheelConfigData (figwheel-cfg-data arachne-cfg server-eid) nil)))

(defn server-ctor
  "Component constructor for a Figwheel server"
  [cfg eid]
  (fig/figwheel-system (-> (figwheel-cfg-data cfg eid)
                         fig-cfg/->config-source
                         fig-cfg/config-source->prepped-figwheel-internal
                         fig-cfg/adjust-to-internal-configuration-representation
                         :data)))
(defn schema
  "Return the schema for the module"
  []
  schema/schema)

(defn configure
  "Configure the module"
  [cfg]
  cfg)
