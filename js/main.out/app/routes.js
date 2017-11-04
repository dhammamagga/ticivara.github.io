// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.state');
goog.require('reagent.session');
goog.require('dommy.core');
goog.require('secretary.core');
goog.require('clojure.string');
app.routes.post_route = (function app$routes$post_route(lang,page_key){
var app_18558__$1 = document.body;
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18558__$1,cljs.core.cst$kw$en);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18558__$1,cljs.core.cst$kw$th);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18558__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,page_key);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18413__auto___18565 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18559 = params__18414__auto__;
var map__18559__$1 = ((((!((map__18559 == null)))?((((map__18559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18559):map__18559);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18559__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18561 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18561,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18413__auto___18565);

app.routes.home_path = ((function (action__18413__auto___18565){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18566 = arguments.length;
var i__9123__auto___18567 = (0);
while(true){
if((i__9123__auto___18567 < len__9122__auto___18566)){
args__9129__auto__.push((arguments[i__9123__auto___18567]));

var G__18568 = (i__9123__auto___18567 + (1));
i__9123__auto___18567 = G__18568;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18565))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18565){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18412__auto__);
});})(action__18413__auto___18565))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18413__auto___18565){
return (function (seq18564){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18564));
});})(action__18413__auto___18565))
;

var action__18413__auto___18575 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18569 = params__18414__auto__;
var map__18569__$1 = ((((!((map__18569 == null)))?((((map__18569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18569):map__18569);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18569__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18571 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__18413__auto___18575);

app.routes.home_alt_path = ((function (action__18413__auto___18575){
return (function app$routes$home_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18576 = arguments.length;
var i__9123__auto___18577 = (0);
while(true){
if((i__9123__auto___18577 < len__9122__auto___18576)){
args__9129__auto__.push((arguments[i__9123__auto___18577]));

var G__18578 = (i__9123__auto___18577 + (1));
i__9123__auto___18577 = G__18578;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18575))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18575){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__18412__auto__);
});})(action__18413__auto___18575))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__18413__auto___18575){
return (function (seq18574){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18574));
});})(action__18413__auto___18575))
;

var action__18413__auto___18585 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18579 = params__18414__auto__;
var map__18579__$1 = ((((!((map__18579 == null)))?((((map__18579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18579):map__18579);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18581 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18581,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-pattern",action__18413__auto___18585);

app.routes.sabong_pattern_path = ((function (action__18413__auto___18585){
return (function app$routes$sabong_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18586 = arguments.length;
var i__9123__auto___18587 = (0);
while(true){
if((i__9123__auto___18587 < len__9122__auto___18586)){
args__9129__auto__.push((arguments[i__9123__auto___18587]));

var G__18588 = (i__9123__auto___18587 + (1));
i__9123__auto___18587 = G__18588;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18585))
;

app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18585){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-pattern",args__18412__auto__);
});})(action__18413__auto___18585))
;

app.routes.sabong_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_path.cljs$lang$applyTo = ((function (action__18413__auto___18585){
return (function (seq18584){
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18584));
});})(action__18413__auto___18585))
;

var action__18413__auto___18595 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18589 = params__18414__auto__;
var map__18589__$1 = ((((!((map__18589 == null)))?((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18591 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18591,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18413__auto___18595);

app.routes.sabong_pattern_alt_path = ((function (action__18413__auto___18595){
return (function app$routes$sabong_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18596 = arguments.length;
var i__9123__auto___18597 = (0);
while(true){
if((i__9123__auto___18597 < len__9122__auto___18596)){
args__9129__auto__.push((arguments[i__9123__auto___18597]));

var G__18598 = (i__9123__auto___18597 + (1));
i__9123__auto___18597 = G__18598;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18595))
;

app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18595){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18412__auto__);
});})(action__18413__auto___18595))
;

app.routes.sabong_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_alt_path.cljs$lang$applyTo = ((function (action__18413__auto___18595){
return (function (seq18594){
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18594));
});})(action__18413__auto___18595))
;

var action__18413__auto___18605 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18599 = params__18414__auto__;
var map__18599__$1 = ((((!((map__18599 == null)))?((((map__18599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18599):map__18599);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18599__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18601 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-guide",action__18413__auto___18605);

app.routes.sabong_guide_path = ((function (action__18413__auto___18605){
return (function app$routes$sabong_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18606 = arguments.length;
var i__9123__auto___18607 = (0);
while(true){
if((i__9123__auto___18607 < len__9122__auto___18606)){
args__9129__auto__.push((arguments[i__9123__auto___18607]));

var G__18608 = (i__9123__auto___18607 + (1));
i__9123__auto___18607 = G__18608;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18605))
;

app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18605){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-guide",args__18412__auto__);
});})(action__18413__auto___18605))
;

app.routes.sabong_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_guide_path.cljs$lang$applyTo = ((function (action__18413__auto___18605){
return (function (seq18604){
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18604));
});})(action__18413__auto___18605))
;

var action__18413__auto___18615 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18609 = params__18414__auto__;
var map__18609__$1 = ((((!((map__18609 == null)))?((((map__18609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18609):map__18609);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18609__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18611 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18611,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-pattern",action__18413__auto___18615);

app.routes.civara_pattern_path = ((function (action__18413__auto___18615){
return (function app$routes$civara_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18616 = arguments.length;
var i__9123__auto___18617 = (0);
while(true){
if((i__9123__auto___18617 < len__9122__auto___18616)){
args__9129__auto__.push((arguments[i__9123__auto___18617]));

var G__18618 = (i__9123__auto___18617 + (1));
i__9123__auto___18617 = G__18618;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18615))
;

app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18615){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-pattern",args__18412__auto__);
});})(action__18413__auto___18615))
;

app.routes.civara_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_path.cljs$lang$applyTo = ((function (action__18413__auto___18615){
return (function (seq18614){
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18614));
});})(action__18413__auto___18615))
;

var action__18413__auto___18625 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18619 = params__18414__auto__;
var map__18619__$1 = ((((!((map__18619 == null)))?((((map__18619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18619):map__18619);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18619__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18621 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18413__auto___18625);

app.routes.civara_pattern_alt_path = ((function (action__18413__auto___18625){
return (function app$routes$civara_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18626 = arguments.length;
var i__9123__auto___18627 = (0);
while(true){
if((i__9123__auto___18627 < len__9122__auto___18626)){
args__9129__auto__.push((arguments[i__9123__auto___18627]));

var G__18628 = (i__9123__auto___18627 + (1));
i__9123__auto___18627 = G__18628;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18625))
;

app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18625){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18412__auto__);
});})(action__18413__auto___18625))
;

app.routes.civara_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_alt_path.cljs$lang$applyTo = ((function (action__18413__auto___18625){
return (function (seq18624){
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18624));
});})(action__18413__auto___18625))
;

var action__18413__auto___18635 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18629 = params__18414__auto__;
var map__18629__$1 = ((((!((map__18629 == null)))?((((map__18629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18629):map__18629);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18629__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18631 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18631,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-guide",action__18413__auto___18635);

app.routes.civara_guide_path = ((function (action__18413__auto___18635){
return (function app$routes$civara_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18636 = arguments.length;
var i__9123__auto___18637 = (0);
while(true){
if((i__9123__auto___18637 < len__9122__auto___18636)){
args__9129__auto__.push((arguments[i__9123__auto___18637]));

var G__18638 = (i__9123__auto___18637 + (1));
i__9123__auto___18637 = G__18638;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18635))
;

app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18635){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-guide",args__18412__auto__);
});})(action__18413__auto___18635))
;

app.routes.civara_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_guide_path.cljs$lang$applyTo = ((function (action__18413__auto___18635){
return (function (seq18634){
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18634));
});})(action__18413__auto___18635))
;

var action__18413__auto___18645 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18639 = params__18414__auto__;
var map__18639__$1 = ((((!((map__18639 == null)))?((((map__18639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18639):map__18639);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18639__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18641 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-pattern",action__18413__auto___18645);

app.routes.sanghati_pattern_path = ((function (action__18413__auto___18645){
return (function app$routes$sanghati_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18646 = arguments.length;
var i__9123__auto___18647 = (0);
while(true){
if((i__9123__auto___18647 < len__9122__auto___18646)){
args__9129__auto__.push((arguments[i__9123__auto___18647]));

var G__18648 = (i__9123__auto___18647 + (1));
i__9123__auto___18647 = G__18648;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18645))
;

app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18645){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-pattern",args__18412__auto__);
});})(action__18413__auto___18645))
;

app.routes.sanghati_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_path.cljs$lang$applyTo = ((function (action__18413__auto___18645){
return (function (seq18644){
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18644));
});})(action__18413__auto___18645))
;

var action__18413__auto___18655 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18649 = params__18414__auto__;
var map__18649__$1 = ((((!((map__18649 == null)))?((((map__18649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18649):map__18649);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18651 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18651,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18413__auto___18655);

app.routes.sanghati_pattern_alt_path = ((function (action__18413__auto___18655){
return (function app$routes$sanghati_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18656 = arguments.length;
var i__9123__auto___18657 = (0);
while(true){
if((i__9123__auto___18657 < len__9122__auto___18656)){
args__9129__auto__.push((arguments[i__9123__auto___18657]));

var G__18658 = (i__9123__auto___18657 + (1));
i__9123__auto___18657 = G__18658;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18655))
;

app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18655){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18412__auto__);
});})(action__18413__auto___18655))
;

app.routes.sanghati_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_alt_path.cljs$lang$applyTo = ((function (action__18413__auto___18655){
return (function (seq18654){
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18654));
});})(action__18413__auto___18655))
;

var action__18413__auto___18665 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18659 = params__18414__auto__;
var map__18659__$1 = ((((!((map__18659 == null)))?((((map__18659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18659):map__18659);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18661 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-guide",action__18413__auto___18665);

app.routes.sanghati_guide_path = ((function (action__18413__auto___18665){
return (function app$routes$sanghati_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18666 = arguments.length;
var i__9123__auto___18667 = (0);
while(true){
if((i__9123__auto___18667 < len__9122__auto___18666)){
args__9129__auto__.push((arguments[i__9123__auto___18667]));

var G__18668 = (i__9123__auto___18667 + (1));
i__9123__auto___18667 = G__18668;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18665))
;

app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18665){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-guide",args__18412__auto__);
});})(action__18413__auto___18665))
;

app.routes.sanghati_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_guide_path.cljs$lang$applyTo = ((function (action__18413__auto___18665){
return (function (seq18664){
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18664));
});})(action__18413__auto___18665))
;

var action__18413__auto___18675 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18669 = params__18414__auto__;
var map__18669__$1 = ((((!((map__18669 == null)))?((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18671 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18413__auto___18675);

app.routes.borders_path = ((function (action__18413__auto___18675){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18676 = arguments.length;
var i__9123__auto___18677 = (0);
while(true){
if((i__9123__auto___18677 < len__9122__auto___18676)){
args__9129__auto__.push((arguments[i__9123__auto___18677]));

var G__18678 = (i__9123__auto___18677 + (1));
i__9123__auto___18677 = G__18678;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18675))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18675){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18412__auto__);
});})(action__18413__auto___18675))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18413__auto___18675){
return (function (seq18674){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18674));
});})(action__18413__auto___18675))
;

var action__18413__auto___18685 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18679 = params__18414__auto__;
var map__18679__$1 = ((((!((map__18679 == null)))?((((map__18679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18679):map__18679);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18681 = params__18414__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18413__auto___18685);

app.routes.tools_path = ((function (action__18413__auto___18685){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18686 = arguments.length;
var i__9123__auto___18687 = (0);
while(true){
if((i__9123__auto___18687 < len__9122__auto___18686)){
args__9129__auto__.push((arguments[i__9123__auto___18687]));

var G__18688 = (i__9123__auto___18687 + (1));
i__9123__auto___18687 = G__18688;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18685))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18685){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18412__auto__);
});})(action__18413__auto___18685))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18413__auto___18685){
return (function (seq18684){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18684));
});})(action__18413__auto___18685))
;

var action__18413__auto___18695 = (function (params__18414__auto__){
if(cljs.core.map_QMARK_(params__18414__auto__)){
var map__18689 = params__18414__auto__;
var map__18689__$1 = ((((!((map__18689 == null)))?((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18689):map__18689);
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18414__auto__)){
var vec__18691 = params__18414__auto__;
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18413__auto___18695);

app.routes.default_path = ((function (action__18413__auto___18695){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18696 = arguments.length;
var i__9123__auto___18697 = (0);
while(true){
if((i__9123__auto___18697 < len__9122__auto___18696)){
args__9129__auto__.push((arguments[i__9123__auto___18697]));

var G__18698 = (i__9123__auto___18697 + (1));
i__9123__auto___18697 = G__18698;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18413__auto___18695))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18413__auto___18695){
return (function (args__18412__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18412__auto__);
});})(action__18413__auto___18695))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18413__auto___18695){
return (function (seq18694){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18694));
});})(action__18413__auto___18695))
;

