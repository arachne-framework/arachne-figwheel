(ns arachne.figwheel.dsl
  (:require [clojure.spec :as s]
            [arachne.error :as e :refer [deferror error]]
            [arachne.core.dsl :as core]
            [arachne.core.config :as cfg]
            [arachne.core.config.script :as script :refer [defdsl]]
            [arachne.core.util :as u]
            [arachne.cljs.dsl :as cljs]
            ))

(s/def ::open-file-command string?)
(s/def ::port integer?)

(defdsl server
  "Define a Figwheel server, an component that runs a Figwheel server and is also an asset consumer.

  Argumnents are:

  - arachne-id (optional): The Arachne ID of the component
  - compiler (mandatory): A ClojureScript compiler options map. See the ClojureScript documentation for
    possible values. The only difference is that options which specify paths (:output-to, :output-dir,
    :preamble, :externs, etc.) will relative to the asset fileset rather than the process as a whole.
  - options: A map (or kwargs) of additional options for Figwheel

  Currently supported options are:

  - :open-file-command
  - :port

  Returns the entity ID of the newly created component."
  (s/cat :arachne-id (s/? ::core/arachne-id)
         :compiler-opts ::cljs/compiler-options
         :opts (u/keys** :opt-un [::open-file-command
                                  ::port]))
  [<arachne-id> compiler-opts & opts]
  (let [tid (cfg/tempid)
        entity (u/mkeep {:db/id tid
                         :arachne/id (:arachne-id &args)
                         :arachne.component/constructor :arachne.figwheel.server/ctor
                         :arachne.figwheel.server/compiler-options (cljs/compiler-options (:compiler-opts &args))
                         :arachne.figwheel.server/open-file-command (-> &args :opts second :open-file-command)
                         :arachne.figwheel.server/port (-> &args :opts second :port)})]
    (script/transact [entity] tid)))