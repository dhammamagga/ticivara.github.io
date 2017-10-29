(ns app.state
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:sabong {:title (str "Sabong " (.getFullYear (js/Date.)))
                    :width 228
                    :height 99
                    :buffer-width 1
                    :border-width 12
                    :kusi-width 6.0
                    :shrink-percent-width 0
                    :shrink-percent-height 0}
           :civara {:title (str "Civara " (.getFullYear (js/Date.)))
                    :width 355
                    :height 214
                    :buffer-width 1
                    :vertical-buffer-width 10
                    :border-width 14
                    :kusi-width 6.0
                    :shrink-percent-width 0
                    :shrink-percent-height 0}
           :sanghati {:title (str "Sanghati " (.getFullYear (js/Date.)))
                      :width 355
                      :height 214
                      :buffer-width 1
                      :vertical-buffer-width 10
                      :border-width 14.0
                      :kusi-width 6.0
                      :shrink-percent-width 0
                      :shrink-percent-height 0}
           :params {:lang :en}}))
