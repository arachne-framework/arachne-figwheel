(ns arachne.figwheel.example)
(.log js/console "Hello, world!")

(defn reload-hook []
  (.log js/console "Reload hook fired!"))
