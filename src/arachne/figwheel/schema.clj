(ns arachne.figwheel.schema
  (:require [arachne.core.config.model :as m]))

(def schema
  "Schema for the module"
  (concat

    (m/type :arachne.figwheel/Server [:arachne.assets/Consumer]
      "A figwheel server"
      (m/attr :arachne.figwheel.server/port :one-or-none :long
        "The HTTP port that figwheel will use (if different from the default)")
      (m/attr :arachne.figwheel.server/open-file-command :one-or-none :string
        "The command-line program used to launch a source code editor when it is clicked on in the Figwheel UI")
      (m/attr :arachne.figwheel.server/compiler-options :one :component :arachne.cljs/CompilerOptions
        "The ClojureScript compiller options to use for the build.")
      (m/attr :arachne.figwheel.server/css? :one-or-none :boolean
        "Indicate whether the figwheel server should automatially watch for changed CSS files as well."))))
