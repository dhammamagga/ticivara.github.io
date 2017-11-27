(ns app.core
  (:require-macros [app.env :as env :refer [cljs-env]])
  (:require
   ;; core libs
   [reagent.core :as r]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   ;; browser repl
   [weasel.repl :as repl]
   ;; routing
   [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]
   [goog.events :as events]
   [goog.history.EventType :as HistoryEventType]
   ;; app
   [app.state :as state]
   [app.text :refer [text]]
   [app.helpers :as helpers]
   [app.routes :as routes]
   [app.elements :refer [<container>]]
   [app.sabong :refer [<content-sabong-pattern>]]
   [app.civara :refer [<content-civara-pattern>]]
   [app.sanghati :refer [<content-sanghati-pattern>]]
   [app.content-page :refer [<content-page>]])
  ;; history for routing
  (:import goog.History))

;; -------------------------
;; Pages

(defn <page-sabong-pattern> []
  (fn [] [<container> <content-sabong-pattern> state/state]))

(defn <page-civara-pattern> []
  (fn [] [<container> <content-civara-pattern> state/state]))

(defn <page-sanghati-pattern> []
  (fn [] [<container> <content-sanghati-pattern> state/state]))

;; The content is loaded by the session :page key.

(defn <page-key> []
  (fn [] [<container> <content-page> state/state]))

(def pages
  {:home #'<page-key>

   :sabong-pattern   #'<page-sabong-pattern>
   :sabong-guide     #'<page-key>

   :civara-pattern   #'<page-civara-pattern>
   :civara-guide     #'<page-key>

   :sanghati-pattern #'<page-sanghati-pattern>
   :sanghati-guide   #'<page-key>

   :borders #'<page-key>
   :tools #'<page-key>
   :dyeing #'<page-key>
   })

(defn get-pagekey []
  (let [p (session/get :page)]
    (cond (not (nil? p)) p
          :else :home)))

(defn <page> []
  (fn [] [(pages (get-pagekey))]))

(defn ga [& more]
  (when js/ga
    (.. (aget js/window "ga")
        (apply nil (clj->js more)))))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))
       ;; send a pageview event in production
       (when (= (cljs-env :mode) "production")
         (do (ga "create" "UA-3557338-12" "auto");
             (ga "set" "page" (.-token event))
             (ga "send" "pageview")))
       ))
    (.setEnabled true)))

(defn mount-components []
  (r/render [#'<page>] (.getElementById js/document "app")))

(defonce history
  (hook-browser-navigation!))

(defn main []
  (mount-components))

;;(when-not (repl/alive?)
;;  (repl/connect "ws://localhost:9001"))
