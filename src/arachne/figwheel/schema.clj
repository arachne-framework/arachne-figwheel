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
        "The ClojureScript compiller options to use for the build."))))

(comment
  ;; Proposed API

  ;; minimal
  (figwheel/server :my/figwheel
    :compiler-options {:main 'foo.bar})

  ;; with full options
  (figwheel/server :my/figwheel
    :port 3449

    :open-file-command "emacsclient"
    :compiler-options {:main 'foo.bar})

  )
