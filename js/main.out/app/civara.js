// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.civara');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('app.canvas');
goog.require('app.helpers');
goog.require('app.text');
app.civara.draw_guide = (function app$civara$draw_guide(data){
var civara = cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(civara);
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
var val_buffer_width = (function (){var G__18389 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18389);
})();
var val_vertical_buffer_width = (function (){var G__18390 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18390);
})();
var val_inner_width = (function (){var G__18391 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18391);
})();
var val_inner_height = (function (){var G__18392 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18392);
})();
var val_kusi_width = (function (){var G__18393 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18393);
})();
var vec__18383 = app.helpers.calc_civara_shrinking_lengths(cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18383,(5),null);
var text = ((function (civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_title = ((function (civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,size,x,y){
return app.helpers.draw_text_title(ctx,s,size,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_num = ((function (civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title))
;
var vec__18386 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_civara_DASH_guide_DASH_canvas,"img/civara-guide.svg");
var canvas_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18386,(0),null);
var img_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18386,(1),null);
app.canvas.add_entity(canvas_guide,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,vec__18386,canvas_guide,img_guide){
return (function (ctx,val){
return text_num(text_num(text_num(text_num(text_num(text_num(text_num(text(text(text(text(text(text(text(text(text(text(text(text_title(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_guide,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),title,"120px",-0.5,(168)),["Final width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_inner_width))].join(''),(5),(140)),["Final height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_inner_height))].join(''),(5),(136)),["Cut width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_width))].join(''),(5),(132)),["Cut height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_height))].join(''),(5),(128)),["a, border width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_border_width))].join(''),(5),(122)),["b, border height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_border_height))].join(''),(5),(118)),["cutting buffer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_buffer_width))].join(''),(5),(114)),["vertical cutting buffer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_vertical_buffer_width))].join(''),(5),(110)),["k, kusi width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_kusi_width))].join(''),(5),(106)),["m, mandala width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_mandala_width))].join(''),(5),(102)),["d, mandala height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_mandala_height))].join(''),(5),(98)),val_cut_width,(245),(164)),val_cut_height,(255),(155)),val_border_width,104.5,(82)),val_border_height,(112),74.2),val_kusi_width,(122),74.2),val_mandala_width,(130),(82)),val_mandala_height,(130),(89));
});})(civara,title,pos_pattern_width,pos_pattern_height,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18383,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,vec__18386,canvas_guide,img_guide))
));

return app.canvas.draw_once(canvas_guide);
});
app.civara.draw_panels_1 = (function app$civara$draw_panels_1(data){
var civara = cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (260);
var pos_pattern_height = (135);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (10);
var pos_img_offset_y = (20);
var pos_text_offset_x = (0.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18400 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18400);
})();
var val_vertical_buffer_width = (function (){var G__18401 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18401);
})();
var val_inner_width = (function (){var G__18402 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18402);
})();
var val_inner_height = (function (){var G__18403 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18403);
})();
var val_kusi_width = (function (){var G__18404 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18404);
})();
var vec__18394 = app.helpers.calc_civara_shrinking_lengths(cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394,(5),null);
var text = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),-2.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(1.0 + pos_pattern_width),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18397 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,"img/civara-panels-1-2-3.svg");
var canvas_panels_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18397,(0),null);
var img_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18397,(1),null);
app.canvas.add_entity(canvas_panels_1,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18397,canvas_panels_1,img_1){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(1),(2),2.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18394,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18397,canvas_panels_1,img_1))
));

return app.canvas.draw_once(canvas_panels_1);
});
app.civara.draw_panels_4 = (function app$civara$draw_panels_4(data){
var civara = cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (260);
var pos_pattern_height = (135);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (10);
var pos_img_offset_y = (20);
var pos_text_offset_x = (0.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18411 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18411);
})();
var val_vertical_buffer_width = (function (){var G__18412 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18412);
})();
var val_inner_width = (function (){var G__18413 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18413);
})();
var val_inner_height = (function (){var G__18414 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18414);
})();
var val_kusi_width = (function (){var G__18415 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18415);
})();
var vec__18405 = app.helpers.calc_civara_shrinking_lengths(cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(5),null);
var text = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),0.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(1.0 + pos_pattern_width),(((((3.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18408 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,"img/civara-panels-4-5-6.svg");
var canvas_panels_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(0),null);
var img_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(1),null);
app.canvas.add_entity(canvas_panels_4,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18408,canvas_panels_4,img_4){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_4,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(1),(0),(1),(0)),(1),(1),(0),(1),(0)),(1),(2),(0),(1),(0)),(2),(2),(0),(1),(0)),(2),(3),(0),(1),(0)),(3),(3),(0),(1),(0)),(3),(4),(0),(1),(0)),(3),(4),(0),(2),2.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18405,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18408,canvas_panels_4,img_4))
));

return app.canvas.draw_once(canvas_panels_4);
});
app.civara.draw_panels_7 = (function app$civara$draw_panels_7(data){
var civara = cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (260);
var pos_pattern_height = (135);
var pos_buffer_width = 1.11;
var pos_vertical_buffer_width = 11.1;
var pos_border_width = 15.54;
var pos_kusi_width = 6.66;
var pos_mandala_width = 64.37;
var pos_mandala_height = 34.4;
var pos_img_offset_x = (10);
var pos_img_offset_y = (20);
var pos_text_offset_x = (0.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pattern_scale = (12);
var val_buffer_width = (function (){var G__18422 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18422);
})();
var val_vertical_buffer_width = (function (){var G__18423 = cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18423);
})();
var val_inner_width = (function (){var G__18424 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18424);
})();
var val_inner_height = (function (){var G__18425 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18425);
})();
var val_kusi_width = (function (){var G__18426 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(civara);
return Number(G__18426);
})();
var vec__18416 = app.helpers.calc_civara_shrinking_lengths(cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(5),null);
var text = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
return app.helpers.draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_num = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_accumulate_horiz = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_vertical_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_vertical_buffer_width)),-2.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num))
;
var text_accumulate_vert = ((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(1.0 + pos_pattern_width),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz))
;
var vec__18419 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas,"img/civara-panels-7-8-9.svg");
var canvas_panels_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(0),null);
var img_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(1),null);
app.canvas.add_entity(canvas_panels_7,cljs.core.cst$kw$background,app.canvas.entity(null,null,((function (civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18419,canvas_panels_7,img_7){
return (function (ctx,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_7,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),(0)),(3),(2),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(1),(2),2.0);
});})(civara,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_vertical_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,val_buffer_width,val_vertical_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__18416,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_num,text_accumulate_horiz,text_accumulate_vert,vec__18419,canvas_panels_7,img_7))
));

return app.canvas.draw_once(canvas_panels_7);
});
app.civara.draw_civara_pattern = (function app$civara$draw_civara_pattern(data){
app.helpers.render_markdown();

app.civara.draw_guide(data);

app.civara.draw_panels_1(data);

app.civara.draw_panels_4(data);

return app.civara.draw_panels_7(data);
});
app.civara.civara_update = (function app$civara$civara_update(data){
app.helpers.render_markdown();

return app.civara.draw_civara_pattern(data);
});
app.civara._LT_content_civara_pattern_GT_ = (function app$civara$_LT_content_civara_pattern_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.civara.civara_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.civara.civara_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var civara = cljs.core.cst$kw$civara.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"civara"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$s_DASH_title,app.text.text(cljs.core.cst$kw$civara)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,app.text.text(cljs.core.cst$kw$notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$s_DASH_content$render_DASH_markdown$pattern_DASH_notes,app.text.text(cljs.core.cst$kw$robe_DASH_size_DASH_note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"civara-pattern"], null),app.text.text(cljs.core.cst$kw$pattern)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xl_DASH_12$col_DASH_xxl_DASH_8$col_DASH_xxxl_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pattern_title"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$title)),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"pattern_title",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$title], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_width)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_height"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_height)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_height",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$height], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_width_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_width_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_width_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$shrink_DASH_percent_DASH_width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_height_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_height_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_height_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$shrink_DASH_percent_DASH_height], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"kusi_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$kusi_DASH_width)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"kusi_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$kusi_DASH_width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"border_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$border)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"border_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$border_DASH_width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"buffer_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$cutting_DASH_buffer)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$buffer_DASH_width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"vertical_buffer_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$vertical_DASH_cutting_DASH_buffer)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"vertical_buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(civara),cljs.core.cst$kw$on_DASH_change,((function (civara){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$civara,cljs.core.cst$kw$vertical_DASH_buffer_DASH_width], null),e.target.value);

return app.civara.draw_civara_pattern(data);
});})(civara))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (civara){
return (function (_){
return app.helpers.download_pdf_fourpage(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_civara_DASH_guide_DASH_canvas,cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,cljs.core.cst$kw$_SHARP_civara_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(civara),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
});})(civara))
], null),app.text.text(cljs.core.cst$kw$download_DASH_pdf)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"civara-guide-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"civara-panels-1-2-3-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"civara-panels-4-5-6-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"civara-panels-7-8-9-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null)], null)], null);
})], null));
});
