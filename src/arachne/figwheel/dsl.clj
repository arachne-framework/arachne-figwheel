(ns arachne.figwheel.dsl
  (:require [clojure.spec :as s]
            [arachne.error :as e :refer [deferror error]]
            [arachne.core.dsl.specs :as core-specs]
            [arachne.core.config :as cfg]
            [arachne.core.config.init :as script :refer [defdsl]]
            [arachne.core.util :as u]
            [arachne.cljs.dsl :as cljs]
            ))

(s/def ::source-paths (s/coll-of string?))
(s/def ::figwheel boolean?)
(s/def ::id string?)

(s/def ::build-options ::cljs/compiler-options)

(s/def ::build-opt-args
  (s/keys*
    :req-un [::build-options
             ::source-paths]
    :opt-un [::figwheel
             ::id]))

(s/fdef build
  :args (s/cat
          :arachne-id ::core-specs/id
          :opts ::build-opt-args))

(defdsl build
  "Define a Figwheel build"
  [arachne-id & opts]
  (let [conformed (s/conform ::build-opt-args opts)
        build-options (cljs/compiler-options (:build-options conformed))
        entity (u/map-transform conformed {:arachne/id arachne-id
                                           :arachne.figwheel.build/compiler-options build-options}
                 :id :arachne.figwheel.build/id identity
                 :source-paths :arachne.figwheel.build/source-paths vec
                 :figwheel :arachne.figwheel.build/figwheel boolean)]
    (script/transact [entity])))

(s/def ::server-port integer?)
(s/def ::http-server-root string?)
(s/def ::open-file-command string?)
(s/def ::builds (s/coll-of ::core-specs/id :min-count 1))

(s/def ::server-opt-args
  (s/keys*
    :req-un [::http-server-root
             ::server-port
             ::builds]
    :opt-un [::open-file-command]))

(s/fdef server
  :args (s/cat
          :arachne-id ::core-specs/id
          :opts ::server-opt-args))

(defdsl server
  "Define a Figwheel server"
  [arachne-id & opts]
  (let [conformed (s/conform ::server-opt-args opts)
        build-entities (fn [ids] (map #(hash-map :arachne/id %) ids))
        entity (u/map-transform conformed {:arachne/id arachne-id
                                           :arachne.component/constructor :arachne.figwheel/server-ctor}
                 :server-port :arachne.figwheel.server/port identity
                 :http-server-root :arachne.figwheel.server/root identity
                 :open-file-command :arachne.figwheel.server/open-file-command identity
                 :builds :arachne.figwheel.server/builds build-entities)]
    (script/transact [entity])))