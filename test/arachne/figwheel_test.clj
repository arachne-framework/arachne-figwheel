(ns arachne.figwheel-test
  (:require [clojure.test :refer :all]
            [arachne.core :as arachne]
            [arachne.core.config :as cfg]
            [arachne.core.runtime :as rt]
            [arachne.core.dsl :as a]
            [arachne.assets.dsl :as aa]
            [arachne.figwheel.dsl :as fig]
            [arachne.figwheel :as afig]
            [arachne.cljs.dsl :as cljs]
            [com.stuartsierra.component :as component]))

(defn basic-figwheel-cfg
  "DSL function to build test config"
  []

  (aa/input-dir :test/src "test")
  (aa/input-dir :test/public "test/public")

  (fig/server :test/figwheel
    {:main 'arachne.figwheel.example
     :output-to "js/example.js"
     :output-dir "js"
     :asset-path "js"
     :optimizations :none
     :source-map-timestamp true}
    :port 8888)

  (aa/pipeline [:test/src :test/figwheel #{:src}]
               [:test/public :test/figwheel #{:public}])

  (a/runtime :test/rt [:test/figwheel]))

(deftest ^:integration basic-figwheel
  (let [cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
              `(basic-figwheel-cfg))
        rt (atom (rt/init cfg [:arachne/id :test/rt]))]
    (try
      (swap! rt component/start)

      (is (re-find #"js/example.js" (slurp "http://localhost:8888/")))
      (is (re-find #"Hello, world!" (slurp "http://localhost:8888/js/arachne/figwheel/example.js")))
      (finally
        (swap! rt component/stop)))))


(comment

  (def cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
             '(arachne.figwheel-test/test-config)))

  (def rt (rt/init cfg [:arachne/id :test/rt]))

  (def rt (component/start rt))

  (def rt (component/stop rt))

  (afig/repl rt)

  )

(comment

  (require '[arachne.core.config :as cfg])

  (def cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
             '(arachne.figwheel-test/test-config)))

  (use 'clojure.pprint)
  (pprint
    (arachne.figwheel/figwheel-cfg-data cfg :test/figwheel))

  )

;; Problem

; Three dirs: compile-src, server-base, compile-output
; compile output can't be in compile output or infinite builds will trigger
;

; options: multiple discrete inputs
; options: solve with roles




