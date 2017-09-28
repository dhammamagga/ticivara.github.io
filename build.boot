(set-env!
 :source-paths #{"src/clj" "src/cljs" "sass"}
 :resource-paths #{"html" "content"}
 :dependencies '[[org.clojure/clojure         "1.8.0"]
                 [org.clojure/clojurescript   "1.9.908"]
                 [reagent                     "0.7.0"                   :exclusions [org.clojure/clojurescript]]
                 [reagent-utils               "0.2.1"]
                 [secretary                   "1.2.3"]
                 [markdown-clj                "1.0.1"]
                 [prismatic/dommy             "1.1.0"]
                 [cljsjs/pdfmake              "0.1.26-0"]
                 [funcool/decimal             "1.0.1"]
                 [hiccup                      "1.0.5"]
                 [environ                     "1.1.0"]
                 [boot-environ                "1.1.0"]
                 [adzerk/boot-cljs            "2.1.3"    :scope "test"]
                 [adzerk/boot-cljs-repl       "0.3.3"    :scope "test"]
                 [adzerk/boot-reload          "0.5.2"    :scope "test"]
                 [pandeiro/boot-http          "0.8.3"    :scope "test"]
                 [deraen/boot-sass            "0.3.1"    :scope "test"]
                 [org.slf4j/slf4j-nop         "1.7.13"   :scope "test"]
                 [com.cemerick/piggieback     "0.2.1"    :scope "test"]
                 [weasel                      "0.7.0"    :scope "test"  :exclusions [org.clojure/clojurescript]]
                 [org.clojure/tools.nrepl     "0.2.12"   :scope "test"]])

(require
  '[environ.boot          :refer [environ]]
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl-env start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
  '[deraen.boot-sass      :refer [sass]])

(deftask dev []
  (comp (environ :env {:mode "development"})
        (serve :dir "target/")
        (watch)
        (sass)
        (reload :on-jsload 'app.core/main)
        (cljs-repl-env) ;; doesn't start a REPL server, use with cider-jack-in
        (cljs :source-map true :optimizations :none)
        (target :dir #{"target/"})))

(deftask dist []
  (comp (environ :env {:mode "production"})
        (sass :output-style :compressed)
        (cljs :optimizations :advanced)
        (target :dir #{"dist"} :no-clean true)))
