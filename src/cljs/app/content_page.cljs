(ns app.content-page
  (:require
   ;; core libs
   [reagent.core :as r]
   [reagent.session :as session]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [markdown.core :refer [md->html]]
   [clojure.string :as string]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn page-update [data]
  (let [text-key (keyword (str (subs (str (session/get :page)) 1)
                               "-content"))
        txt (text text-key)
        html (md->html txt
                       :heading-anchors true
                       :reference-links true
                       :footnotes true)
        c (sel1 :#page)]
    (aset c "innerHTML" html)
    (h/page-content-style :#page))
  (h/render-markdown))

(defn <content-page> [data]
  (r/create-class
   {:component-did-mount (fn [] (page-update data))
    :component-did-update (fn [] (page-update data))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))]

        [:div.container {:id "page"}]
        ))}))
