(ns app.civara
  (:require
   ;; core libs
   [reagent.core :as r]
   [clojure.string :as string]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

;; FIXME Cannot read property 'call' of undefined
(defn civara-update [data]
  (h/render-markdown))

(defn <content-civara-pattern> [data]
  (r/create-class
   {:component-did-mount (fn [] (civara-update data))
    :component-did-update (fn [] (civara-update data))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))]

        [:div.container {:id "civara"}
         [:h2.s-title (text :civara)]
         [:div.docs-note
          [:h3.s-title {:id "civara-pattern"} (text :pattern)]
          [:p "..."]]

         [:div.render-markdown ""];; FIXME at least one markdown item keeps h/render-markdown happy
         ]
        ))}))
