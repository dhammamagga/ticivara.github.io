(ns app.routes
  (:require
   [app.state :as state]
   [reagent.session :as session]
   [secretary.core :as secretary :include-macros true]
   [clojure.string :as string]))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute home-path "/:lang" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :home))

(secretary/defroute home-alt-path "/:lang/home" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :home))

(secretary/defroute sabong-pattern-path "/:lang/sabong-pattern" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sabong-pattern))

(secretary/defroute sabong-pattern-alt-path "/:lang/sabong" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sabong-pattern))

(secretary/defroute sabong-guide-path "/:lang/sabong-guide" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sabong-guide))

(secretary/defroute civara-pattern-path "/:lang/civara-pattern" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :civara-pattern))

(secretary/defroute civara-pattern-alt-path "/:lang/civara" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :civara-pattern))

(secretary/defroute civara-guide-path "/:lang/civara-guide" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :civara-guide))

(secretary/defroute sanghati-pattern-path "/:lang/sanghati-pattern" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sanghati-pattern))

(secretary/defroute sanghati-pattern-alt-path "/:lang/sanghati" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sanghati-pattern))

(secretary/defroute sanghati-guide-path "/:lang/sanghati-guide" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sanghati-guide))

(secretary/defroute borders-path "/:lang/borders" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :borders))

(secretary/defroute tools-path "/:lang/tools" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :tools))

;; === Default path ===

(secretary/defroute default-path "*" []
  (swap! state/state assoc-in [:params :lang] :en)
  (session/put! :page :home))
