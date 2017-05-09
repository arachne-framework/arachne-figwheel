(ns arachne.figwheel.dsl
  (:require [clojure.spec.alpha :as s]
            [arachne.error :as e :refer [deferror error]]
            [arachne.core.dsl :as core]
            [arachne.core.config :as cfg]
            [arachne.core.config.script :as script :refer [defdsl]]
            [arachne.core.util :as u]
            [arachne.cljs.dsl :as cljs]
            ))

(s/def ::open-file-command string?)
(s/def ::port integer?)
(s/def ::css? boolean?)
(s/def ::on-jsload qualified-symbol?)

(defdsl server
  "Define a Figwheel server, a component that runs a Figwheel server and is also a consumer/producer in the
   asset pipeline.

  Argumnents are:

  - compiler (mandatory): A ClojureScript compiler options map. See the ClojureScript documentation for
    possible values. The only difference is that options which specify paths (:output-to, :output-dir,
    :preamble, :externs, etc.) will relative to the asset fileset rather than the process as a whole.
  - options: A map (or kwargs) of additional options for Figwheel

  Currently supported options are:

  - :open-file-command - Passed through to figwheel.
  - :port - The port on which to run the Figwheel server
  - :css? - Set to true if the Figwheel server should automatically reload modified CSS files.
    Still requires :watch set to true on Input
  - :on-jsload - A fully-qualified symbol identifiying a client-side function
    that will be called after Figwheel reloads the page's Javascript code.

  Requires inputs to be tagged with either `src` or `public` roles, indicating whether the input
  is source files ( compilation) or static files that should be merely be served. See the
  documentation for `arachne.assets.dsl/pipeline` for more information about how to tag roles.

  Returns the entity ID of the newly created component."
  (s/cat :compiler-opts ::cljs/compiler-options
         :opts (u/keys** :opt-un [::open-file-command
                                  ::port
                                  ::css?
                                  ::on-jsload]))
  [compiler-opts & opts]
  (let [tid (cfg/tempid)
        entity (u/mkeep {:db/id tid
                         :arachne.component/constructor :arachne.figwheel.server/ctor
                         :arachne.figwheel.server/compiler-options (cljs/compiler-options (:compiler-opts &args))
                         :arachne.figwheel.server/open-file-command (-> &args :opts second :open-file-command)
                         :arachne.figwheel.server/css? (-> &args :opts second :css?)
                         :arachne.figwheel.server/port (-> &args :opts second :port)
                         :arachne.figwheel.server/on-jsload (-> &args :opts second :on-jsload keyword)})]
    (script/transact [entity] tid)))
