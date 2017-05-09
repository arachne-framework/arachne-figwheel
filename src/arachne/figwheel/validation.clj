(ns arachne.figwheel.validation
  (:require [arachne.core.config :as cfg]
            [arachne.core.config.validation :as v]
            [arachne.figwheel.server :as fig-server]
            [clojure.set :as set]
            [arachne.error :as e]))

(def ^:private validators [::figwheel-server-inputs])

(defn add-validators
  "Add  config validator functions to the config"
  [cfg]
  (v/add-validators cfg validators))

(defn- server-input-roles
  [cfg server-eid]
  (set (cfg/q cfg '[:find [?role ...]
                    :in $ ?server
                    :where
                    [?server :arachne.assets.consumer/inputs ?input]
                    [?input :arachne.assets.input/roles ?role]]
         server-eid)))

(defn figwheel-server-inputs
  "Ensure ahead of time that all figwheel servers have :src and :public pipeline inputs."
  [cfg]
  (let [servers (cfg/q cfg '[:find [?server ...]
                             :in $
                             :where
                             [?server :arachne.figwheel.server/compiler-options _]])]
    (filter identity
      (for [server servers role [:src :public]]
        (let [roles (server-input-roles cfg server)]
          (when-not (roles role)
            (e/arachne-ex ::fig-server/missing-input
              {:eid server
               :aid (cfg/attr cfg server :arachne/id)
               :role role})))))))
