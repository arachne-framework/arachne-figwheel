(ns arachne.figwheel-test
  (:require [clojure.test :refer :all]
            [arachne.core :as arachne]
            [arachne.core.runtime :as rt]
            [arachne.core.dsl :as a]
            [arachne.figwheel.dsl :as fig]
            [arachne.cljs.dsl :as cljs]
            [com.stuartsierra.component :as component]))

(defn test-config
  "DSL function to build test config"
  []

  (fig/build :test/example-build
    :id "example"
    :source-paths ["test"]
    :figwheel true
    :build-options {:main 'arachne.figwheel.example,
                    :asset-path "js/out",
                    :output-to "test/public/js/example.js",
                    :output-dir "test/public/js/out",
                    :source-map-timestamp true})

  (fig/server :test/figwheel
    :http-server-root "public"
    :server-port 3449
    :open-file-command "emacsclient"
    :builds [:test/example-build])

  (a/runtime :test/rt [:test/figwheel]))

(comment

  (def cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
             '(arachne.figwheel-test/test-config)))

  (def rt (rt/init cfg [:arachne/id :test/rt]))

  (def rt (component/start rt))

  (def rt (component/stop rt))

  )

(comment

  (require '[arachne.core.config :as cfg])

  (def cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
             '(arachne.figwheel-test/test-config)))

  (use 'clojure.pprint)
  (pprint
    (arachne.figwheel/figwheel-cfg-data cfg :test/figwheel))

  )



