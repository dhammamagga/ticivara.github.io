(ns app.elements
  (:require
   [reagent.session :as session]
   [app.text :refer [text]]
   [app.helpers :as h]))

(declare <sidebar> <navbar> <footer> <container> <lang-links>)

(defn <container> [content data]
  (fn []
    [:div.s-container.container
     [:div.columns

      [<sidebar>]
      [:a#sidebar-close.docs-nav-clear {:href "#sidebar-close"}]
      [<navbar>]

      [:div#content.s-content {:class (subs (str (session/get :page)) 1)}
       [content data]

       [<footer>]]]]
    )
  )

(defn <sidebar> []
  [:div {:id "sidebar", :class "s-sidebar"}
   [:div.s-brand
    [:a {:href "https://ticivara.github.io/"} "ticivara.github.io"]
    [:br]
    [:a {:href "/"}
     #_[:img {:src "img/spectre-logo.svg", :alt "Spectre.css CSS Framework"}]
     [:h2  (text :robe-sewing)] ] ]
   [:div.s-nav
    [:ul.menu.menu-nav

     [:li.divider {:data-content (text :sabong)}]
     [:li.menu-item
      [:a {:href (h/href-to "sabong-pattern")} (text :pattern)]]
     [:li.menu-item
      [:a {:href (h/href-to "sabong-guide")} (text :guide)]]

     [:li.divider {:data-content (text :civara)}]
     [:li.menu-item
      [:a {:href (h/href-to "civara-pattern")} (text :pattern)]]
     [:li.menu-item
      [:a {:href (h/href-to "civara-guide")} (text :guide)]]

     [:li.divider {:data-content (text :sanghati)}]
     [:li.menu-item
      [:a {:href (h/href-to "sanghati-pattern")} (text :pattern)]]
     [:li.menu-item
      [:a {:href (h/href-to "sanghati-guide")} (text :guide)]]

     [:li.divider {:data-content (text :borders)}]
     [:li.menu-item
      [:a {:href (h/href-to "borders")} (text :guide)]]

     [:li.divider]
     [:li.menu-item
      [:a {:href (h/href-to "tools")} (text :tools)]]
     [:li.menu-item
      [:a {:href (h/href-to "dyeing")} (text :dyeing)]]

     [:li.menu-item
      [<lang-links>]]]]
   ])

(defn <navbar> []
  [:div.s-navbar
   [:div.menu-btn
    [:a {:href "#sidebar", :class "btn btn-link btn-action"}
     [:i.icon.icon-menu]] ]
   #_[:a {:href "index.html", :class "s-logo"}
      [:img {:src "img/spectre-logo.svg", :alt "Spectre.css CSS Framework"}] ]
   #_[:div.float-btn
      [:a {:href "https://github.com/picturepan2/spectre", :target "_blank", :class "btn btn-primary"} "GitHub"]]])

(defn <footer> []
  [:footer.s-footer])

(defn <lang-links> []
  (fn []
    (let [s (h/this-page-str)]
      [:div.flag-links
       [:img {:src "/img/flag-united-kingdom.png"
              :on-click (fn [_] (h/nav! (str "/en/" s)))}]

       [:img {:src "/img/flag-thailand.png"
              :on-click (fn [_] (h/nav! (str "/th/" s)))}]
       ])))
