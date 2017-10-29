(ns app.civara
  (:require
   ;; core libs
   [reagent.core :as r]
   [clojure.string :as string]
   ;; app
   [app.canvas :as canvas]
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn draw-guide [data]
  (let [civara (:civara @data)
        title (:title civara)
        ;; values from the SVG for positioning
        pos-pattern-width 260
        pos-pattern-height 170
        pos-border-width 5.91
        pos-kusi-width 2.53
        pos-mandala-width 13.09
        pos-mandala-height 24.43
        pos-img-offset-x 10
        pos-img-offset-y 10
        pos-text-offset-x (+ 0.0 pos-img-offset-x)
        pos-text-offset-y (+ 0.0 pos-img-offset-y)
        ;; scale
        pattern-scale 12

        ;; calcualted size values to display
        val-buffer-width (js/Number (:buffer-width civara))
        val-vertical-buffer-width (js/Number (:vertical-buffer-width civara))
        val-inner-width (js/Number (:width civara))
        val-inner-height (js/Number (:height civara))
        val-kusi-width (js/Number (:kusi-width civara))
        [val-cut-width
         val-cut-height
         val-mandala-width
         val-mandala-height
         val-border-width
         val-border-height] (h/calc-civara-shrinking-lengths (:civara @data))

        text (fn [ctx s x y]
               (h/draw-text
                ctx s x y pattern-scale pos-text-offset-x pos-text-offset-y pos-pattern-height))

        text-title (fn [ctx s size x y]
                     (h/draw-text-title
                      ctx s size x y pattern-scale pos-text-offset-x pos-text-offset-y pos-pattern-height))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        [canvas-guide img-guide] (h/init-canvas :#civara-guide-canvas "img/civara-guide.svg")]

    (canvas/add-entity canvas-guide :background
     (canvas/entity nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-guide {:x (* pos-img-offset-x pattern-scale)
                                          :y (* pos-img-offset-y pattern-scale)
                                          :w (* pos-pattern-width pattern-scale)
                                          :h (* pos-pattern-height pattern-scale)})

            (text-title title "120px" -0.5 168)

            (text (str "Final width: " (h/num-pad val-inner-width))   5 140)
            (text (str "Final height: " (h/num-pad val-inner-height)) 5 136)
            (text (str "Cut width: " (h/num-pad val-cut-width))       5 132)
            (text (str "Cut height: " (h/num-pad val-cut-height))     5 128)

            (text (str "a, border width: " (h/num-pad val-border-width))     5 122)
            (text (str "b, border height: " (h/num-pad val-border-height))   5 118)
            (text (str "cutting buffer: " (h/num-pad val-buffer-width))      5 114)
            (text (str "vertical cutting buffer: "
                       (h/num-pad val-vertical-buffer-width))                5 110)
            (text (str "k, kusi width: " (h/num-pad val-kusi-width))         5 106)
            (text (str "m, mandala width: " (h/num-pad val-mandala-width))   5 102)
            (text (str "d, mandala height: " (h/num-pad val-mandala-height)) 5 98)

            (text-num val-cut-width  245 164)
            (text-num val-cut-height 255 155)

            (text-num val-border-width   104.5 82)
            (text-num val-border-height  112 74.2)
            (text-num val-kusi-width     122 74.2)
            (text-num val-mandala-width  130 82)
            (text-num val-mandala-height 130 89)

            ))))

    (canvas/draw-once canvas-guide)
    ))

(defn draw-panels-1 [data]
  (let [civara (:civara @data)
        ;; values from the SVG for positioning
        pos-pattern-width 260
        pos-pattern-height 135
        pos-buffer-width 1.11
        pos-vertical-buffer-width 11.1
        pos-border-width 15.54
        pos-kusi-width 6.66
        pos-mandala-width 64.37
        pos-mandala-height 34.4
        pos-img-offset-x 10
        pos-img-offset-y 20
        pos-text-offset-x (+ 0.0 pos-img-offset-x)
        pos-text-offset-y (+ 0.0 pos-img-offset-y)
        ;; scale
        pattern-scale 12

        ;; calcualted size values to display
        val-buffer-width (js/Number (:buffer-width civara))
        val-vertical-buffer-width (js/Number (:vertical-buffer-width civara))
        val-inner-width (js/Number (:width civara))
        val-inner-height (js/Number (:height civara))
        val-kusi-width (js/Number (:kusi-width civara))
        [val-cut-width
         val-cut-height
         val-mandala-width
         val-mandala-height
         val-border-width
         val-border-height] (h/calc-civara-shrinking-lengths (:civara @data))

        text (fn [ctx s x y]
               (h/draw-text
                ctx s x y pattern-scale pos-text-offset-x pos-text-offset-y pos-pattern-height))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-horiz (fn [ctx m k b c x-offset]
                                (text-num ctx (+ (* m val-mandala-height)
                                                 (* k val-kusi-width)
                                                 (* b val-border-height)
                                                 (* c val-vertical-buffer-width))
                                          (+ 0.5 x-offset
                                             (* m pos-mandala-width)
                                             (* k pos-kusi-width)
                                             (* b pos-border-width)
                                             (* c pos-vertical-buffer-width))
                                          -2.0))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-vert (fn [ctx m k b c y-offset]
                               (text-num ctx (+ (* m val-mandala-width)
                                                (* k val-kusi-width)
                                                (* b val-border-width)
                                                (* c val-buffer-width))
                                         (+ 1.0 pos-pattern-width)
                                         (+ 1.0 y-offset
                                            (* m pos-mandala-height)
                                            (* k pos-kusi-width)
                                            (* b pos-border-width)
                                            (* c pos-buffer-width))))

        [canvas-panels-1 img-1] (h/init-canvas :#civara-panels-1-2-3-canvas "img/civara-panels-1-2-3.svg")]

    (canvas/add-entity canvas-panels-1 :background
     (canvas/entity nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-1 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-accumulate-horiz 0 0 0 1 0)
            (text-accumulate-horiz 0 0 1 1 0)
            (text-accumulate-horiz 1 0 1 1 0)
            (text-accumulate-horiz 1 1 1 1 0)
            (text-accumulate-horiz 2 1 1 1 0)
            (text-accumulate-horiz 2 2 1 1 0)
            (text-accumulate-horiz 3 2 1 1 0)
            (text-accumulate-horiz 3 2 2 1 0)
            (text-accumulate-horiz 3 2 2 2 0)

            (text-accumulate-vert 0 0 0 1 0)
            (text-accumulate-vert 0 0 1 1 0)
            (text-accumulate-vert 1 0 1 1 0)
            (text-accumulate-vert 1 1 1 1 0)
            (text-accumulate-vert 2 1 1 1 0)
            (text-accumulate-vert 2 2 1 1 0)
            (text-accumulate-vert 3 2 1 1 0)
            (text-accumulate-vert 3 2 1 2 2.0)

            ))))

    (canvas/draw-once canvas-panels-1)
    ))

(defn draw-panels-4 [data]
  (let [civara (:civara @data)
        ;; values from the SVG for positioning
        pos-pattern-width 260
        pos-pattern-height 135
        pos-buffer-width 1.11
        pos-vertical-buffer-width 11.1
        pos-border-width 15.54
        pos-kusi-width 6.66
        pos-mandala-width 64.37
        pos-mandala-height 34.4
        pos-img-offset-x 10
        pos-img-offset-y 20
        pos-text-offset-x (+ 0.0 pos-img-offset-x)
        pos-text-offset-y (+ 0.0 pos-img-offset-y)
        ;; scale
        pattern-scale 12

        ;; calcualted size values to display
        val-buffer-width (js/Number (:buffer-width civara))
        val-vertical-buffer-width (js/Number (:vertical-buffer-width civara))
        val-inner-width (js/Number (:width civara))
        val-inner-height (js/Number (:height civara))
        val-kusi-width (js/Number (:kusi-width civara))
        [val-cut-width
         val-cut-height
         val-mandala-width
         val-mandala-height
         val-border-width
         val-border-height] (h/calc-civara-shrinking-lengths (:civara @data))

        text (fn [ctx s x y]
               (h/draw-text
                ctx s x y pattern-scale pos-text-offset-x pos-text-offset-y pos-pattern-height))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-horiz (fn [ctx m k b c x-offset]
                                (text-num ctx (+ (* m val-mandala-height)
                                                 (* k val-kusi-width)
                                                 (* b val-border-height)
                                                 (* c val-vertical-buffer-width))
                                          (+ 0.5 x-offset
                                             (* m pos-mandala-width)
                                             (* k pos-kusi-width)
                                             (* b pos-border-width)
                                             (* c pos-vertical-buffer-width))
                                          0.0))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-vert (fn [ctx m k b c y-offset]
                               (text-num ctx (+ (* m val-mandala-width)
                                                (* k val-kusi-width)
                                                (* b val-border-width)
                                                (* c val-buffer-width))
                                         (+ 1.0 pos-pattern-width)
                                         (+ 3.0 y-offset
                                            (* m pos-mandala-height)
                                            (* k pos-kusi-width)
                                            (* b pos-border-width)
                                            (* c pos-buffer-width))))

        [canvas-panels-4 img-4] (h/init-canvas :#civara-panels-4-5-6-canvas "img/civara-panels-4-5-6.svg")]

    (canvas/add-entity canvas-panels-4 :background
     (canvas/entity nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-4 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-accumulate-horiz 0 0 0 1 0)
            (text-accumulate-horiz 0 0 1 1 0)
            (text-accumulate-horiz 1 0 1 1 0)
            (text-accumulate-horiz 1 1 1 1 0)
            (text-accumulate-horiz 2 1 1 1 0)
            (text-accumulate-horiz 2 2 1 1 0)
            (text-accumulate-horiz 3 2 1 1 0)
            (text-accumulate-horiz 3 2 2 1 0)
            (text-accumulate-horiz 3 2 2 2 0)

            (text-accumulate-vert 0 0 0 1 0)
            (text-accumulate-vert 0 1 0 1 0)
            (text-accumulate-vert 1 1 0 1 0)
            (text-accumulate-vert 1 2 0 1 0)
            (text-accumulate-vert 2 2 0 1 0)
            (text-accumulate-vert 2 3 0 1 0)
            (text-accumulate-vert 3 3 0 1 0)
            (text-accumulate-vert 3 4 0 1 0)
            (text-accumulate-vert 3 4 0 2 2.0)

            ))))

    (canvas/draw-once canvas-panels-4)
    ))

(defn draw-panels-7 [data]
  (let [civara (:civara @data)
        ;; values from the SVG for positioning
        pos-pattern-width 260
        pos-pattern-height 135
        pos-buffer-width 1.11
        pos-vertical-buffer-width 11.1
        pos-border-width 15.54
        pos-kusi-width 6.66
        pos-mandala-width 64.37
        pos-mandala-height 34.4
        pos-img-offset-x 10
        pos-img-offset-y 20
        pos-text-offset-x (+ 0.0 pos-img-offset-x)
        pos-text-offset-y (+ 0.0 pos-img-offset-y)
        ;; scale
        pattern-scale 12

        ;; calcualted size values to display
        val-buffer-width (js/Number (:buffer-width civara))
        val-vertical-buffer-width (js/Number (:vertical-buffer-width civara))
        val-inner-width (js/Number (:width civara))
        val-inner-height (js/Number (:height civara))
        val-kusi-width (js/Number (:kusi-width civara))
        [val-cut-width
         val-cut-height
         val-mandala-width
         val-mandala-height
         val-border-width
         val-border-height] (h/calc-civara-shrinking-lengths (:civara @data))

        text (fn [ctx s x y]
               (h/draw-text
                ctx s x y pattern-scale pos-text-offset-x pos-text-offset-y pos-pattern-height))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-horiz (fn [ctx m k b c x-offset]
                                (text-num ctx (+ (* m val-mandala-height)
                                                 (* k val-kusi-width)
                                                 (* b val-border-height)
                                                 (* c val-vertical-buffer-width))
                                          (+ 0.5 x-offset
                                             (* m pos-mandala-width)
                                             (* k pos-kusi-width)
                                             (* b pos-border-width)
                                             (* c pos-vertical-buffer-width))
                                          -2.0))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-vert (fn [ctx m k b c y-offset]
                               (text-num ctx (+ (* m val-mandala-width)
                                                (* k val-kusi-width)
                                                (* b val-border-width)
                                                (* c val-buffer-width))
                                         (+ 1.0 pos-pattern-width)
                                         (+ 1.0 y-offset
                                            (* m pos-mandala-height)
                                            (* k pos-kusi-width)
                                            (* b pos-border-width)
                                            (* c pos-buffer-width))))

        [canvas-panels-7 img-7] (h/init-canvas :#civara-panels-7-8-9-canvas "img/civara-panels-7-8-9.svg")]

    (canvas/add-entity canvas-panels-7 :background
     (canvas/entity nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-7 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-accumulate-horiz 0 0 0 1 0)
            (text-accumulate-horiz 0 0 1 1 0)
            (text-accumulate-horiz 1 0 1 1 0)
            (text-accumulate-horiz 1 1 1 1 0)
            (text-accumulate-horiz 2 1 1 1 0)
            (text-accumulate-horiz 2 2 1 1 0)
            (text-accumulate-horiz 3 2 1 1 0)
            (text-accumulate-horiz 3 2 2 1 0)
            (text-accumulate-horiz 3 2 2 2 0)

            (text-accumulate-vert 0 0 0 1 0)
            (text-accumulate-vert 0 0 1 1 0)
            (text-accumulate-vert 1 0 1 1 0)
            (text-accumulate-vert 1 1 1 1 0)
            (text-accumulate-vert 2 1 1 1 0)
            (text-accumulate-vert 2 2 1 1 0)
            (text-accumulate-vert 3 2 1 1 0)
            (text-accumulate-vert 3 2 1 2 2.0)

            ))))

    (canvas/draw-once canvas-panels-7)
    ))

(defn draw-civara-pattern [data]
  (h/render-markdown)
  (draw-guide data)
  (draw-panels-1 data)
  (draw-panels-4 data)
  (draw-panels-7 data))

(defn civara-update [data]
  (h/render-markdown)
  (draw-civara-pattern data))

(defn <content-civara-pattern> [data]
  (r/create-class
   {:component-did-mount (fn [] (civara-update data))
    :component-did-update (fn [] (civara-update data))

    :reagent-render
    (fn []
      (let [civara (:civara @data)]

        [:div.container {:id "civara"}
         [:h2.s-title (text :civara)]
         [:div.docs-note

          [:h3.s-title (text :notes)]
          [:div.s-content.render-markdown.pattern-notes
           (text :robe-size-note)]

          [:h3.s-title {:id "civara-pattern"} (text :pattern)]

          ;; Forms
          [:div.columns
           [:div.col-xl-12.col-xxl-8.col-xxxl-6

            [:form
             [:div.form-group
              [:label.form-label {:for "pattern_title"} (str (text :title) ":")]
              [:input.form-input {:id "pattern_title" :type "text"
                                  :value (:title civara)
                                  :on-change (fn [e]
                                               (do (swap! data assoc-in [:civara :title] (.-target.value e))
                                                   (draw-civara-pattern data)))}]]]

            [:div.columns
             [:div.col-4
              [:form.form-horizontal

               [:div.form-group
                [:div.col-6
                 [:label.form-label {:for "robe_width"} (str (text :final-width) ":")]]
                [:div.col-6
                 [:input.form-input {:id "robe_width" :type "number"
                                     :value (:width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :width] (.-target.value e))
                                                      (draw-civara-pattern data)))}]]]

               [:div.form-group
                [:div.col-6
                 [:label.form-label {:for "robe_height"} (str (text :final-height) ":")]]
                [:div.col-6
                 [:input.form-input {:id "robe_height" :type "number"
                                     :value (:height civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :height] (.-target.value e))
                                                      (draw-civara-pattern data)))
                                     }]]]]]

             [:div.col-8
              [:form.form-horizontal
               [:div.form-group
                [:div.col-8
                 [:label.form-label {:for "shrinking_width_percent"} (str (text :shrinking-width-percent) ":")]]
                [:div.col-4
                 [:input.form-input {:id "shrinking_width_percent" :type "number"
                                     :value (:shrink-percent-width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :shrink-percent-width] (.-target.value e))
                                                      (draw-civara-pattern data)))
                                     }]]]

               [:div.form-group
                [:div.col-8
                 [:label.form-label {:for "shrinking_height_percent"} (str (text :shrinking-height-percent) ":")]]
                [:div.col-4
                 [:input.form-input {:id "shrinking_height_percent" :type "number"
                                     :value (:shrink-percent-height civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :shrink-percent-height] (.-target.value e))
                                                      (draw-civara-pattern data)))
                                     }]]]]
              ]]

            [:div.columns

             [:div.col-4
              [:form.form-horizontal

               [:div.form-group
                [:div.col-6
                 [:label.form-label {:for "kusi_width"} (str (text :kusi-width) ":")]]
                [:div.col-6
                 [:input.form-input {:id "kusi_width" :type "number"
                                     :value (:kusi-width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :kusi-width] (.-target.value e))
                                                      (draw-civara-pattern data)))}]]]

               [:div.form-group
                [:div.col-6
                 [:label.form-label {:for "border_width"} (str (text :border) ":")]]
                [:div.col-6
                 [:input.form-input {:id "border_width" :type "number"
                                     :value (:border-width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :border-width] (.-target.value e))
                                                      (draw-civara-pattern data)))}]]]
               ]]

             [:div.col-8
              [:form.form-horizontal

               [:div.form-group
                [:div.col-8
                 [:label.form-label {:for "buffer_width"} (str (text :cutting-buffer) ":")]]
                [:div.col-4
                 [:input.form-input {:id "buffer_width" :type "number"
                                     :value (:buffer-width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :buffer-width] (.-target.value e))
                                                      (draw-civara-pattern data)))}]]]

               [:div.form-group
                [:div.col-8
                 [:label.form-label {:for "vertical_buffer_width"} (str (text :vertical-cutting-buffer) ":")]]
                [:div.col-4
                 [:input.form-input {:id "vertical_buffer_width" :type "number"
                                     :value (:vertical-buffer-width civara)
                                     :on-change (fn [e]
                                                  (do (swap! data assoc-in [:civara :vertical-buffer-width] (.-target.value e))
                                                      (draw-civara-pattern data)))}]]]
               ]]

             ]

            [:div.docs-note
             [:button.btn.btn-primary
              {:on-click (fn [_] (h/download-pdf-fourpage
                                  [:#civara-guide-canvas
                                   :#civara-panels-1-2-3-canvas
                                   :#civara-panels-4-5-6-canvas
                                   :#civara-panels-7-8-9-canvas]
                                  (:title civara)
                                  [0 0 0 0]))}
              (text :download-pdf)]]]

           ]
          ;; end of Forms

          [:canvas.pattern {:id "civara-guide-canvas" :width 3500 :height 2400}]
          [:canvas.pattern {:id "civara-panels-1-2-3-canvas" :width 3500 :height 2400}]
          [:canvas.pattern {:id "civara-panels-4-5-6-canvas" :width 3500 :height 2400}]
          [:canvas.pattern {:id "civara-panels-7-8-9-canvas" :width 3500 :height 2400}]
          ]

         ]
        ))
    }))
