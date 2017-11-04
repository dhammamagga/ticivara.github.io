// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('weasel.repl');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('app.state');
goog.require('app.text');
goog.require('app.helpers');
goog.require('app.routes');
goog.require('app.elements');
goog.require('app.sabong');
goog.require('app.civara');
goog.require('app.sanghati');
goog.require('app.content_page');
goog.require('goog.History');
app.core._LT_page_sabong_pattern_GT_ = (function app$core$_LT_page_sabong_pattern_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.sabong._LT_content_sabong_pattern_GT_,app.state.state], null);
});
});
app.core._LT_page_civara_pattern_GT_ = (function app$core$_LT_page_civara_pattern_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.civara._LT_content_civara_pattern_GT_,app.state.state], null);
});
});
app.core._LT_page_sanghati_pattern_GT_ = (function app$core$_LT_page_sanghati_pattern_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.sanghati._LT_content_sanghati_pattern_GT_,app.state.state], null);
});
});
app.core._LT_page_key_GT_ = (function app$core$_LT_page_key_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.content_page._LT_content_page_GT_,app.state.state], null);
});
});
app.core.pages = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$home,cljs.core.cst$kw$civara_DASH_guide,cljs.core.cst$kw$sanghati_DASH_pattern,cljs.core.cst$kw$tools,cljs.core.cst$kw$civara_DASH_pattern,cljs.core.cst$kw$borders,cljs.core.cst$kw$sabong_DASH_pattern,cljs.core.cst$kw$sanghati_DASH_guide,cljs.core.cst$kw$sabong_DASH_guide],[new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_sanghati_pattern_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_sanghati_DASH_pattern_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_sanghati_DASH_pattern_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",30,1,37,37,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_sanghati_pattern_GT_)?app.core._LT_page_sanghati_pattern_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_civara_pattern_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_civara_DASH_pattern_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_civara_DASH_pattern_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",28,1,34,34,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_civara_pattern_GT_)?app.core._LT_page_civara_pattern_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_sabong_pattern_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_sabong_DASH_pattern_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_sabong_DASH_pattern_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",28,1,31,31,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_sabong_pattern_GT_)?app.core._LT_page_sabong_pattern_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return app.core._LT_page_key_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_key_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_key_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_key_GT_)?app.core._LT_page_key_GT_.cljs$lang$test:null)]))]);
app.core.get_pagekey = (function app$core$get_pagekey(){
var p = reagent.session.get(cljs.core.cst$kw$page);
if(!((p == null))){
return p;
} else {
return cljs.core.cst$kw$home;

}
});
app.core._LT_page_GT_ = (function app$core$_LT_page_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18766 = app.core.get_pagekey();
return (app.core.pages.cljs$core$IFn$_invoke$arity$1 ? app.core.pages.cljs$core$IFn$_invoke$arity$1(G__18766) : app.core.pages.call(null,G__18766));
})()], null);
});
});
app.core.ga = (function app$core$ga(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18768 = arguments.length;
var i__9123__auto___18769 = (0);
while(true){
if((i__9123__auto___18769 < len__9122__auto___18768)){
args__9129__auto__.push((arguments[i__9123__auto___18769]));

var G__18770 = (i__9123__auto___18769 + (1));
i__9123__auto___18769 = G__18770;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.core.ga.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

app.core.ga.cljs$core$IFn$_invoke$arity$variadic = (function (more){
if(cljs.core.truth_(ga)){
return (window["ga"]).apply(null,cljs.core.clj__GT_js(more));
} else {
return null;
}
});

app.core.ga.cljs$lang$maxFixedArity = (0);

app.core.ga.cljs$lang$applyTo = (function (seq18767){
return app.core.ga.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18767));
});

app.core.hook_browser_navigation_BANG_ = (function app$core$hook_browser_navigation_BANG_(){
var G__18771 = (new goog.History());
var G__18772_18775 = G__18771;
var G__18773_18776 = goog.history.EventType.NAVIGATE;
var G__18774_18777 = ((function (G__18772_18775,G__18773_18776,G__18771){
return (function (event){
secretary.core.dispatch_BANG_(event.token);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("production","production")){
app.core.ga.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["create","UA-3557338-12","auto"], 0));

app.core.ga.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set","page",event.token], 0));

return app.core.ga.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["send","pageview"], 0));
} else {
return null;
}
});})(G__18772_18775,G__18773_18776,G__18771))
;
goog.events.listen(G__18772_18775,G__18773_18776,G__18774_18777);

G__18771.setEnabled(true);

return G__18771;
});
app.core.mount_components = (function app$core$mount_components(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core._LT_page_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/a0i/-of1h48/app/core.cljs",13,1,66,66,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_GT_)?app.core._LT_page_GT_.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
if(typeof app.core.history !== 'undefined'){
} else {
app.core.history = app.core.hook_browser_navigation_BANG_();
}
app.core.main = (function app$core$main(){
return app.core.mount_components();
});
