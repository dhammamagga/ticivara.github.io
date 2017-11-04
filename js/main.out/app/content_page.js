// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.content_page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('dommy.core');
goog.require('markdown.core');
goog.require('clojure.string');
goog.require('app.helpers');
goog.require('app.text');
app.content_page.page_update = (function app$content_page$page_update(data){
var text_key_18701 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$page))].join(''),(1))),"-content"].join(''));
var txt_18702 = app.text.text(text_key_18701);
var html_18703 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_18702,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
var c_18704 = document.getElementById("page");
(c_18704["innerHTML"] = html_18703);

app.helpers.page_content_style(cljs.core.cst$kw$_SHARP_page);

return app.helpers.render_markdown();
});
app.content_page._LT_content_page_GT_ = (function app$content_page$_LT_content_page_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.content_page.page_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.content_page.page_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var _ = cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"page"], null)], null);
})], null));
});
