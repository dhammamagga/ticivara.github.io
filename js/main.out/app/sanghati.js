// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.sanghati');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('app.canvas');
goog.require('app.helpers');
goog.require('app.text');
app.sanghati.draw_guide = (function app$sanghati$draw_guide(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati);
var pos_pattern_width = (260);
var pos_pattern_height = (170);
var pos_border_width = 5.91;
var pos_kusi_width = 2.53;
var pos_mandala_width = 13.09;
var pos_mandala_height = 24.43;
var pos_img_offset_x = (10);
var pos_img_offset_y = (10);
var pos_text_offset_x = (0.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18444 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18444);
})();
var val_vertical_buffer_width = (function (){var G__18445 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18445);
})();
var val_inner_width = (function (){var G__18446 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18446);
})();
var val_inner_height = (function (){var G__18447 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18447);
})();
var val_kusi_width = (function (){var G__18448 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18448);
})();
var vec__18438 = app.helpers.calc_sanghati_shrinking_lengths(cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(5),null);
var text = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_title = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,size,x,y){
return app.helpers.draw_text_title(ctx,s,size,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_num = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title))
;
var vec__18441 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_canvas,"img/sanghati-guide.svg");
var canvas_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(0),null);
var img_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(1),null);
app.canvas.add_entity(canvas_guide,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,vec__18441,canvas_guide,img_guide){
return (function (ctx,val){
return text_num(text_num(text_num(text_num(text_num(text_num(text_num(text(text(text(text(text(text(text(text(text(text(text(text_title(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_guide,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),title,"120px",-0.5,(168)),["Final width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_inner_width))].join(''),(5),(140)),["Final height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_inner_height))].join(''),(5),(136)),["Cut width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_width))].join(''),(5),(132)),["Cut height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_height))].join(''),(5),(128)),["a, border width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_border_width))].join(''),(5),(122)),["b, border height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_border_height))].join(''),(5),(118)),["cutting buffer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_buffer_width))].join(''),(5),(114)),["vertical cutting buffer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_vertical_buffer_width))].join(''),(5),(110)),["k, kusi width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_kusi_width))].join(''),(5),(106)),["m, mandala width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_mandala_width))].join(''),(5),(102)),["d, mandala height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_mandala_height))].join(''),(5),(98)),val_cut_width,(245),(164)),val_cut_height,(255),(155)),val_border_width,104.5,(82)),val_border_height,(112),74.2),val_kusi_width,(122),74.2),val_mandala_width,(130),(82)),val_mandala_height,(130),(89));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18438,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,vec__18441,canvas_guide,img_guide))
));

return app.canvas.draw_once(canvas_guide);
});
app.sanghati.draw_panels_1 = (function app$sanghati$draw_panels_1(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (270);
var pos_pattern_height = (140);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (5);
var pos_img_offset_y = (20);
var pos_text_offset_x = (5.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18455 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18455);
})();
var val_vertical_buffer_width = (function (){var G__18456 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18456);
})();
var val_inner_width = (function (){var G__18457 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18457);
})();
var val_inner_height = (function (){var G__18458 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18458);
})();
var val_kusi_width = (function (){var G__18459 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18459);
})();
var vec__18449 = app.helpers.calc_sanghati_shrinking_lengths(cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(5),null);
var text = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),-2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(-9.0 + pos_pattern_width),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18452 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,"img/sanghati-panels-1-2-3.svg");
var canvas_panels_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18452,(0),null);
var img_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18452,(1),null);
app.canvas.add_entity(canvas_panels_1,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18452,canvas_panels_1,img_1){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(-1)),(1),(0),(1),(3),(0)),(1),(1),(1),(3),(0)),(2),(1),(1),(3),(-1)),(2),(1),(1),(5),(0)),(2),(2),(1),(5),(0)),(3),(2),(1),(5),(0)),(3),(2),(1),(6),2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18449,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18452,canvas_panels_1,img_1))
));

return app.canvas.draw_once(canvas_panels_1);
});
app.sanghati.draw_panels_4 = (function app$sanghati$draw_panels_4(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (270);
var pos_pattern_height = (137);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (5);
var pos_img_offset_y = (20);
var pos_text_offset_x = (5.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18466 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18466);
})();
var val_vertical_buffer_width = (function (){var G__18467 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18467);
})();
var val_inner_width = (function (){var G__18468 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18468);
})();
var val_inner_height = (function (){var G__18469 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18469);
})();
var val_kusi_width = (function (){var G__18470 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18470);
})();
var vec__18460 = app.helpers.calc_sanghati_shrinking_lengths(cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(5),null);
var text = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),-2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(-9.0 + pos_pattern_width),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18463 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,"img/sanghati-panels-4-5-6.svg");
var canvas_panels_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(0),null);
var img_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(1),null);
app.canvas.add_entity(canvas_panels_4,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18463,canvas_panels_4,img_4){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_4,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(1),(0),(1),(0)),(1),(1),(0),(1),(-2)),(1),(1),(0),(3),(0)),(1),(2),(0),(3),(0)),(2),(2),(0),(3),(0)),(2),(3),(0),(3),(-2)),(2),(3),(0),(5),(0)),(3),(3),(0),(5),(0)),(3),(4),(0),(5),(0)),(3),(4),(0),(6),2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18460,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18463,canvas_panels_4,img_4))
));

return app.canvas.draw_once(canvas_panels_4);
});
app.sanghati.draw_panels_7 = (function app$sanghati$draw_panels_7(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (270);
var pos_pattern_height = (140);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (5);
var pos_img_offset_y = (20);
var pos_text_offset_x = (5.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18477 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18477);
})();
var val_vertical_buffer_width = (function (){var G__18478 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18478);
})();
var val_inner_width = (function (){var G__18479 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18479);
})();
var val_inner_height = (function (){var G__18480 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18480);
})();
var val_kusi_width = (function (){var G__18481 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18481);
})();
var vec__18471 = app.helpers.calc_sanghati_shrinking_lengths(cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18471,(5),null);
var text = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),-2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(-9.0 + pos_pattern_width),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18474 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas,"img/sanghati-panels-7-8-9.svg");
var canvas_panels_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18474,(0),null);
var img_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18474,(1),null);
app.canvas.add_entity(canvas_panels_7,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18474,canvas_panels_7,img_7){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_7,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(-1)),(1),(0),(1),(3),(0)),(1),(1),(1),(3),(0)),(2),(1),(1),(3),(-1)),(2),(1),(1),(5),(0)),(2),(2),(1),(5),(0)),(3),(2),(1),(5),(0)),(3),(2),(1),(6),2.0);
});})(sanghati,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18471,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18474,canvas_panels_7,img_7))
));

return app.canvas.draw_once(canvas_panels_7);
});
app.sanghati.draw_sanghati_pattern = (function app$sanghati$draw_sanghati_pattern(data){
app.helpers.render_markdown();

app.sanghati.draw_guide(data);

app.sanghati.draw_panels_1(data);

app.sanghati.draw_panels_4(data);

return app.sanghati.draw_panels_7(data);
});
app.sanghati.sanghati_update = (function app$sanghati$sanghati_update(data){
app.helpers.render_markdown();

return app.sanghati.draw_sanghati_pattern(data);
});
app.sanghati._LT_content_sanghati_pattern_GT_ = (function app$sanghati$_LT_content_sanghati_pattern_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.sanghati.sanghati_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.sanghati.sanghati_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$s_DASH_title,app.text.text(cljs.core.cst$kw$sanghati)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,app.text.text(cljs.core.cst$kw$notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$s_DASH_content$render_DASH_markdown$pattern_DASH_notes,app.text.text(cljs.core.cst$kw$robe_DASH_size_DASH_note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati-pattern"], null),app.text.text(cljs.core.cst$kw$pattern)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xl_DASH_12$col_DASH_xxl_DASH_8$col_DASH_xxxl_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pattern_title"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$title)),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"pattern_title",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$title], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_width)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_height"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_height)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_height",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$height], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_width_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_width_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_width_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$shrink_DASH_percent_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_height_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_height_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_height_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$shrink_DASH_percent_DASH_height], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"kusi_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$kusi_DASH_width)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"kusi_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$kusi_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"border_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$border)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"border_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$border_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"buffer_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$cutting_DASH_buffer)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$buffer_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"vertical_buffer_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$vertical_DASH_cutting_DASH_buffer)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"vertical_buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$vertical_DASH_buffer_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (sanghati){
return (function (_){
return app.helpers.download_pdf_fourpage(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
});})(sanghati))
], null),app.text.text(cljs.core.cst$kw$download_DASH_pdf)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-guide-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-1-2-3-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-4-5-6-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-7-8-9-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null)], null)], null);
})], null));
});
