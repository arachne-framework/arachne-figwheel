(ns arachne.figwheel-test
  (:require [clojure.test :refer :all]
            [arachne.core :as arachne]
            [arachne.core.config :as cfg]
            [arachne.core.runtime :as rt]
            [arachne.core.dsl :as a]
            [arachne.assets.dsl :as aa]
            [arachne.fileset :as fs]
            [arachne.figwheel.dsl :as fig]
            [arachne.figwheel :as afig]
            [arachne.cljs.dsl :as cljs]
            [com.stuartsierra.component :as component]
            [clojure.java.io :as io]))

(defn basic-figwheel-cfg
  "DSL function to build test config"
  [output-dir]

  (a/id :test/src (aa/input-dir "test" :watch? true))
  (a/id :test/public (aa/input-dir "test/public" :watch? true))

  (a/id :test/figwheel
    (fig/server {:main 'arachne.figwheel.example
                 :output-to "js/example.js"
                 :output-dir "js"
                 :asset-path "js"
                 :optimizations :none
                 :source-map-timestamp true}
      :on-jsload 'arachne.figwheel.example/reload-hook
      :port 8888
      :css? true))

  (aa/pipeline [:test/src :test/figwheel #{:src}]
               [:test/public :test/figwheel #{:public}])

  (when output-dir
    (a/id :test/output (aa/output-dir output-dir))
    (aa/pipeline [:test/figwheel :test/output]))

  (a/id :test/rt (if output-dir
                   (a/runtime [:test/output])
                   (a/runtime [:test/figwheel]))))

(deftest ^:integration basic-figwheel
  (let [cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
              `(basic-figwheel-cfg nil))
        rt (atom (rt/init cfg [:arachne/id :test/rt]))]
    (try
      (swap! rt component/start)

      (is (re-find #"js/example.js" (slurp "http://localhost:8888/")))
      (is (re-find #"Hello, world!" (slurp "http://localhost:8888/js/arachne/figwheel/example.js")))
      (finally
        (swap! rt component/stop)))))

(deftest ^:integration figwheel-producer
  (let [output-dir (fs/tmpdir!)
        cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
              `(basic-figwheel-cfg ~(.getPath output-dir)))]
    (try
      (component/stop (component/start (rt/init cfg [:arachne/id :test/rt])))
      (is (.exists (io/file output-dir "js/example.js")))
      (is (re-find #"figwheel\.connect" (slurp (io/file output-dir "js/example.js")))))))


(comment

  (def rt (atom nil))

  (defn restart []
    (when @rt (component/stop @rt))
    (let [cfg (arachne/build-config [:org.arachne-framework/arachne-figwheel]
                `(basic-figwheel-cfg nil))]
      (reset! rt (component/start (rt/init cfg [:arachne/id :test/rt])))))

  (restart)
  (swap! rt component/stop)

  (require '[arachne.figwheel :as figwheel])

  (figwheel/repl @rt)

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




