(ns arachne.figwheel
  (:require [arachne.figwheel.schema :as schema]
            [arachne.figwheel.validation :as v]
            [arachne.core.config :as cfg]
            [arachne.core.runtime :as rt]
            [figwheel-sidecar.system :as fig]
            [figwheel-sidecar.config :as fig-cfg]
            [arachne.core.util :as u]
            [arachne.cljs :as cljs]
            [arachne.error :as e :refer [error deferror]]))

(defn repl
  "Given a running Arachne runtime which includes a Figwheel system, start a Figwheel REPL.

  Note that because this function 'takes over' the primary REPL, it is incompatible with
  nREPL-based Clojure REPLs. If you are in emacs, consider using an inferior-lisp based REPL (such
  as inf-clojure). If you are in Cursive, consider switching your repl to \"clojure.main in normal
  JVM process\""
  [rt]
  (let [cfg (:config rt)
        figs (cfg/q cfg '[:find [?fig ...]
                          :where
                          [?fig :arachne.figwheel.server/compiler-options _]])
        figwheel (some #(rt/lookup rt %) figs)
        sys (:figwheel-system figwheel)]
    (if-not sys
      (println "Could not find running figwheel system")
      (fig/cljs-repl sys))))

(defn ^:no-doc schema
  "Return the schema for the module"
  []
  schema/schema)

(defn ^:no-doc configure
  "Configure the module"
  [cfg]
  (v/add-validators cfg))
