(ns arachne.cljs-test
  (:require [clojure.test :refer :all]
            [arachne.core :as arachne]
            [arachne.core.runtime :as rt]
            [arachne.core.dsl :as a]
            [arachne.figwheel.dsl :as fig]
            [arachne.cljs]
            [arachne.cljs.dsl]
            [clojure.spec :as s]
            [clojure.spec.gen :as gen]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer [defspec]]
            [arachne.core.config :as cfg]
            [com.stuartsierra.component :as component]
            [clojure.walk :as w]))

;; Used to smuggle a value into the config script
(def ^:dynamic *build-opts*)

(defn build-cfg
  "DSL function to build test config"
  []

  (fig/build :test/build
    :id "example"
    :source-paths ["test"]
    :figwheel true
    :build-options *build-opts*
    )

  (fig/server :test/figwheel
    :http-server-root "public"
    :server-port 3449
    :open-file-command "emacsclient"
    :builds [:test/build])

  (a/runtime :test/rt [:test/figwheel]))

(defn- normalize
  "Convert all nested sequences to sets so items can be compared in an order-agnostic way"
  [o]
  (w/prewalk (fn [f]
               (if (and (not (map-entry? f)) (sequential? f))
                 (into #{} f)
                 f)) o))

(defn- roundtrip
  [compile-opts]
  (binding [*build-opts* compile-opts]
    (let [cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
                '(arachne.cljs-test/build-cfg))
          opts-entity (cfg/q cfg '[:find ?opts .
                                   :where
                                   [?b :arachne/id :test/build]
                                   [?b :arachne.figwheel.build/compiler-options ?opts]])]
      (arachne.cljs/cljs-config-map cfg opts-entity))))

(defspec cljs-configs-roundtrip-through-arachne 70
  (prop/for-all [compile-opts (s/gen :arachne.cljs.dsl/compiler-options)]
    (let [output (roundtrip compile-opts)]
      (= (normalize output)
         (normalize compile-opts)))))
