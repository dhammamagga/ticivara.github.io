(ns app.helpers
  (:require
   [reagent.session :as session]
   [markdown.core :refer [md->html]]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   [cljsjs.pdfmake]
   [cljsjs.pdfmakefonts]
   [decimal.core :as dc]
   [app.canvas :as canvas]
   [app.state :as state]
   [app.text :refer [text]]
   ))

(defn nav! [loc]
  (set! (.-hash js/window.location) loc))

;; FIXME this has a bug when there are no .render-markdown elements on the page.

(defn page-content-style [dom-sel]
  (do (doseq [table  (sel [dom-sel :table])] (dommy/add-class! table :table))
      (doseq [header (sel [dom-sel :h1])] (dommy/add-class! header :s-title))
      (doseq [header (sel [dom-sel :h2])] (dommy/add-class! header :s-title))
      (doseq [header (sel [dom-sel :h3])] (dommy/add-class! header :s-title))
      (doseq [header (sel [dom-sel :h4])] (dommy/add-class! header :s-title))
      (doseq [header (sel [dom-sel :h5])] (dommy/add-class! header :s-title))
      (doseq [header (sel [dom-sel :h6])] (dommy/add-class! header :s-title))
      (doseq [imagelink (sel [:p :a :img])]
        (dommy/set-attr! (dommy/parent imagelink) :target "_blank")
        (dommy/add-class! (dommy/parent imagelink) :image-link))))

(defn render-markdown []
  (doseq [c (sel :.render-markdown)]
    (let [txt (aget c "innerHTML")
          html (md->html txt
                         :heading-anchors true
                         :reference-links true
                         :footnotes true)]
      (aset c "innerHTML" html)
      (page-content-style :.render-markdown))))

;; page-margins: [left, top, right, bottom]

(defn download-pdf [dom-id title page-margins]
  (let [canvas-dom (sel1 dom-id)
        img (.toDataURL canvas-dom)
        filename (str (if (string/blank? title) "pattern" title) ".pdf")
        doc (clj->js {:pageSize "A4"
                      :pageOrientation "landscape"
                      :pageMargins page-margins
                      :content [{:image img
                                 :width 860
                                 :margin [0 0 0 0]}]
                      :info {:title title}})]
    (.download (.createPdf js/pdfMake doc) filename)))

;; TODO refactor with map
(defn download-pdf-fourpage [dom-ids title page-margins]
  (let [canvas-doms [(sel1 (dom-ids 0))
                     (sel1 (dom-ids 1))
                     (sel1 (dom-ids 2))
                     (sel1 (dom-ids 3))]
        imgs [(.toDataURL (canvas-doms 0))
              (.toDataURL (canvas-doms 1))
              (.toDataURL (canvas-doms 2))
              (.toDataURL (canvas-doms 3))]
        filename (str (if (string/blank? title) "pattern" title) ".pdf")
        doc (clj->js {:pageSize "A4"
                      :pageOrientation "landscape"
                      :pageMargins page-margins
                      :content [{:image (imgs 0) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 1) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 2) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 3) :width 860 :margin [0 0 0 0]}]
                      :info {:title title}})]
    (.download (.createPdf js/pdfMake doc) filename)))

(defn init-canvas [dom-id svg-path]
  (let [canvas-dom (sel1 dom-id)
        monet-canvas (canvas/init canvas-dom "2d")
        ctx (canvas/get-context canvas-dom "2d")
        img (js/Image.)]
    (aset img "src" svg-path)
    (aset img "onload" (fn [] (canvas/draw-once monet-canvas)))
    [monet-canvas img]))

(defn num-pad [n]
  (let [x (dc/decimal n)
        s (dc/to-string (dc/to-decimal-places x 1))
        res (if (re-find #"\." (str s)) (str s) (str s ".0"))]
    res))

(defn calc-shrinking-lengths [robe khandhas]
  (let [final-width       (js/Number (:width robe))
        final-height      (js/Number (:height robe))
        buffer-width      (js/Number (:buffer-width robe))
        kusi-width        (js/Number (:kusi-width robe))
        orig-border-width (js/Number (:border-width robe))
        vertical-buffer-width (js/Number (if (nil? (:vertical-buffer-width robe))
                                           (:buffer-width robe)
                                           (:vertical-buffer-width robe)))
        ;; inner width: scaled final width, not including the edge buffers
        ;; iw = fw * (1 + sc / 100)
        inner-width (* final-width (+ 1 (/ (:shrink-percent-width robe) 100)))
        inner-height (* final-height (+ 1 (/ (:shrink-percent-height robe) 100)))
        ;; cut width includes the edge buffers
        cut-width (+ inner-width (* 2 buffer-width))
        cut-height (+ inner-height (* 2 vertical-buffer-width))
        ;; mandala width without scaling
        ;; m = (fw - 2b - (khandhas - 1)k) / khandhas
        orig-mandala-width   (/ (- final-width (* 2 orig-border-width) (* (+ -1 khandhas) kusi-width)) khandhas)
        orig-mandala-height (/ (- final-height (* 2 orig-border-width) (* 2 kusi-width)) 3)
        ;; orig border to mandala ratio, width and height
        ;; i.e. one border equals this much of a mandala
        ;; r = b / m
        b2m-w (/ orig-border-width orig-mandala-width)
        b2m-h (/ orig-border-width orig-mandala-height)
        ;; remainder cut width, taking the kusi off the cut size
        ;; rw = iw - (khandhas - 1)k
        rem-w (- inner-width (* (+ -1 khandhas) kusi-width))
        rem-h (- inner-height (* 2 kusi-width))
        ;; five mandalas in the remainder width, plus two borders expressed as mandalas
        ;; for five khandhas:
        ;; w = 5m + 2b = 5m + 2rm
        ;; w = (5+2r)m
        ;; w / (5+2r) = m
        mandala-width (/ rem-w (+ khandhas (* 2 b2m-w)))
        mandala-height (/ rem-h (+ 3 (* 2 b2m-h)))
        border-width (* mandala-width b2m-w)
        border-height (* mandala-height b2m-h)]

    [cut-width cut-height mandala-width mandala-height border-width border-height]))

(defn calc-sabong-shrinking-lengths [robe]
  (calc-shrinking-lengths robe 5))

(defn calc-civara-shrinking-lengths [robe]
  (calc-shrinking-lengths robe 9))

;; draws text with x y from the bottom left corner of the pattern image
;; bottom-left corner is 0,0 in Inkscape as well
(defn draw-text [ctx s x y
                 pattern-scale
                 pos-text-offset-x
                 pos-text-offset-y
                 pos-pattern-height]
  (let [sc pattern-scale
        x (* (+ x pos-text-offset-x) sc)
        y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
    (canvas/font-style ctx "28px \"Fira Sans\"")
    (canvas/fill-style ctx "#000000")
    (canvas/text ctx {:text s :x x :y y})))

(defn draw-text-title [ctx s size x y
                       pattern-scale
                       pos-text-offset-x
                       pos-text-offset-y
                       pos-pattern-height]
  (let [sc pattern-scale
        x (* (+ x pos-text-offset-x) sc)
        y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
    (canvas/font-style ctx (str size " \"Butler\""))
    (canvas/fill-style ctx "#000000")
    (canvas/text ctx {:text s :x x :y y})))

(defn href-to [page]
  (str "/#/" (subs (str (get-in @state/state [:params :lang])) 1) "/" page))

(defn this-page-str []
  (subs (str (session/get :page)) 1))


