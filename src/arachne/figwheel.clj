(ns arachne.figwheel
  (:require [arachne.figwheel.schema :as schema]))

(defn schema
  "Return the schema for the module"
  []
  schema/schema)

(defn configure
  "Configure the module"
  [cfg]
  cfg)
