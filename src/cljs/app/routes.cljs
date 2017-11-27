(ns app.routes
  (:require
   [app.state :as state]
   [reagent.session :as session]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [secretary.core :as secretary :include-macros true]
   [clojure.string :as string]))

(defn post-route [lang page-key]
  (let [app (sel1 :body)]
    (dommy/remove-class! app :en)
    (dommy/remove-class! app :th)
    (dommy/add-class! app (keyword lang)))
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page page-key))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute home-path "/:lang" [lang]
  (post-route lang :home))

(secretary/defroute home-alt-path "/:lang/home" [lang]
  (post-route lang :home))

(secretary/defroute sabong-pattern-path "/:lang/sabong-pattern" [lang]
  (post-route lang :sabong-pattern))

(secretary/defroute sabong-pattern-alt-path "/:lang/sabong" [lang]
  (post-route lang :sabong-pattern))

(secretary/defroute sabong-guide-path "/:lang/sabong-guide" [lang]
  (post-route lang :sabong-guide))

(secretary/defroute civara-pattern-path "/:lang/civara-pattern" [lang]
  (post-route lang :civara-pattern))

(secretary/defroute civara-pattern-alt-path "/:lang/civara" [lang]
  (post-route lang :civara-pattern))

(secretary/defroute civara-guide-path "/:lang/civara-guide" [lang]
  (post-route lang :civara-guide))

(secretary/defroute sanghati-pattern-path "/:lang/sanghati-pattern" [lang]
  (post-route lang :sanghati-pattern))

(secretary/defroute sanghati-pattern-alt-path "/:lang/sanghati" [lang]
  (post-route lang :sanghati-pattern))

(secretary/defroute sanghati-guide-path "/:lang/sanghati-guide" [lang]
  (post-route lang :sanghati-guide))

(secretary/defroute borders-path "/:lang/borders" [lang]
  (post-route lang :borders))

(secretary/defroute tools-path "/:lang/tools" [lang]
  (post-route lang :tools))

(secretary/defroute dyeing-path "/:lang/dyeing" [lang]
  (post-route lang :dyeing))

;; === Default path ===

(secretary/defroute default-path "*" []
  (post-route "en" :home))
