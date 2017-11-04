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
var app_18629__$1 = document.body;
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18629__$1,cljs.core.cst$kw$en);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18629__$1,cljs.core.cst$kw$th);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18629__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,page_key);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18484__auto___18636 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18630 = params__18485__auto__;
var map__18630__$1 = ((((!((map__18630 == null)))?((((map__18630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18630):map__18630);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18630__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18632 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18632,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18484__auto___18636);

app.routes.home_path = ((function (action__18484__auto___18636){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18637 = arguments.length;
var i__9123__auto___18638 = (0);
while(true){
if((i__9123__auto___18638 < len__9122__auto___18637)){
args__9129__auto__.push((arguments[i__9123__auto___18638]));

var G__18639 = (i__9123__auto___18638 + (1));
i__9123__auto___18638 = G__18639;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18636))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18636){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18483__auto__);
});})(action__18484__auto___18636))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18484__auto___18636){
return (function (seq18635){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18635));
});})(action__18484__auto___18636))
;

var action__18484__auto___18646 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18640 = params__18485__auto__;
var map__18640__$1 = ((((!((map__18640 == null)))?((((map__18640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18640):map__18640);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18642 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18642,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__18484__auto___18646);

app.routes.home_alt_path = ((function (action__18484__auto___18646){
return (function app$routes$home_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18647 = arguments.length;
var i__9123__auto___18648 = (0);
while(true){
if((i__9123__auto___18648 < len__9122__auto___18647)){
args__9129__auto__.push((arguments[i__9123__auto___18648]));

var G__18649 = (i__9123__auto___18648 + (1));
i__9123__auto___18648 = G__18649;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18646))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18646){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__18483__auto__);
});})(action__18484__auto___18646))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__18484__auto___18646){
return (function (seq18645){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18645));
});})(action__18484__auto___18646))
;

var action__18484__auto___18656 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18650 = params__18485__auto__;
var map__18650__$1 = ((((!((map__18650 == null)))?((((map__18650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18650):map__18650);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18650__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18652 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18652,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-pattern",action__18484__auto___18656);

app.routes.sabong_pattern_path = ((function (action__18484__auto___18656){
return (function app$routes$sabong_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18657 = arguments.length;
var i__9123__auto___18658 = (0);
while(true){
if((i__9123__auto___18658 < len__9122__auto___18657)){
args__9129__auto__.push((arguments[i__9123__auto___18658]));

var G__18659 = (i__9123__auto___18658 + (1));
i__9123__auto___18658 = G__18659;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18656))
;

app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18656){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-pattern",args__18483__auto__);
});})(action__18484__auto___18656))
;

app.routes.sabong_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_path.cljs$lang$applyTo = ((function (action__18484__auto___18656){
return (function (seq18655){
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18655));
});})(action__18484__auto___18656))
;

var action__18484__auto___18666 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18660 = params__18485__auto__;
var map__18660__$1 = ((((!((map__18660 == null)))?((((map__18660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18660):map__18660);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18662 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18484__auto___18666);

app.routes.sabong_pattern_alt_path = ((function (action__18484__auto___18666){
return (function app$routes$sabong_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18667 = arguments.length;
var i__9123__auto___18668 = (0);
while(true){
if((i__9123__auto___18668 < len__9122__auto___18667)){
args__9129__auto__.push((arguments[i__9123__auto___18668]));

var G__18669 = (i__9123__auto___18668 + (1));
i__9123__auto___18668 = G__18669;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18666))
;

app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18666){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18483__auto__);
});})(action__18484__auto___18666))
;

app.routes.sabong_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_alt_path.cljs$lang$applyTo = ((function (action__18484__auto___18666){
return (function (seq18665){
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18665));
});})(action__18484__auto___18666))
;

var action__18484__auto___18676 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18670 = params__18485__auto__;
var map__18670__$1 = ((((!((map__18670 == null)))?((((map__18670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18670):map__18670);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18670__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18672 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18672,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-guide",action__18484__auto___18676);

app.routes.sabong_guide_path = ((function (action__18484__auto___18676){
return (function app$routes$sabong_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18677 = arguments.length;
var i__9123__auto___18678 = (0);
while(true){
if((i__9123__auto___18678 < len__9122__auto___18677)){
args__9129__auto__.push((arguments[i__9123__auto___18678]));

var G__18679 = (i__9123__auto___18678 + (1));
i__9123__auto___18678 = G__18679;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18676))
;

app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18676){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-guide",args__18483__auto__);
});})(action__18484__auto___18676))
;

app.routes.sabong_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_guide_path.cljs$lang$applyTo = ((function (action__18484__auto___18676){
return (function (seq18675){
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18675));
});})(action__18484__auto___18676))
;

var action__18484__auto___18686 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18680 = params__18485__auto__;
var map__18680__$1 = ((((!((map__18680 == null)))?((((map__18680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18680):map__18680);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18680__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18682 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-pattern",action__18484__auto___18686);

app.routes.civara_pattern_path = ((function (action__18484__auto___18686){
return (function app$routes$civara_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18687 = arguments.length;
var i__9123__auto___18688 = (0);
while(true){
if((i__9123__auto___18688 < len__9122__auto___18687)){
args__9129__auto__.push((arguments[i__9123__auto___18688]));

var G__18689 = (i__9123__auto___18688 + (1));
i__9123__auto___18688 = G__18689;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18686))
;

app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18686){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-pattern",args__18483__auto__);
});})(action__18484__auto___18686))
;

app.routes.civara_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_path.cljs$lang$applyTo = ((function (action__18484__auto___18686){
return (function (seq18685){
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18685));
});})(action__18484__auto___18686))
;

var action__18484__auto___18696 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18690 = params__18485__auto__;
var map__18690__$1 = ((((!((map__18690 == null)))?((((map__18690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18690):map__18690);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18690__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18692 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18692,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18484__auto___18696);

app.routes.civara_pattern_alt_path = ((function (action__18484__auto___18696){
return (function app$routes$civara_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18697 = arguments.length;
var i__9123__auto___18698 = (0);
while(true){
if((i__9123__auto___18698 < len__9122__auto___18697)){
args__9129__auto__.push((arguments[i__9123__auto___18698]));

var G__18699 = (i__9123__auto___18698 + (1));
i__9123__auto___18698 = G__18699;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18696))
;

app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18696){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18483__auto__);
});})(action__18484__auto___18696))
;

app.routes.civara_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_alt_path.cljs$lang$applyTo = ((function (action__18484__auto___18696){
return (function (seq18695){
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18695));
});})(action__18484__auto___18696))
;

var action__18484__auto___18706 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18700 = params__18485__auto__;
var map__18700__$1 = ((((!((map__18700 == null)))?((((map__18700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18700):map__18700);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18700__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18702 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-guide",action__18484__auto___18706);

app.routes.civara_guide_path = ((function (action__18484__auto___18706){
return (function app$routes$civara_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18707 = arguments.length;
var i__9123__auto___18708 = (0);
while(true){
if((i__9123__auto___18708 < len__9122__auto___18707)){
args__9129__auto__.push((arguments[i__9123__auto___18708]));

var G__18709 = (i__9123__auto___18708 + (1));
i__9123__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18706))
;

app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18706){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-guide",args__18483__auto__);
});})(action__18484__auto___18706))
;

app.routes.civara_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_guide_path.cljs$lang$applyTo = ((function (action__18484__auto___18706){
return (function (seq18705){
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18705));
});})(action__18484__auto___18706))
;

var action__18484__auto___18716 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18710 = params__18485__auto__;
var map__18710__$1 = ((((!((map__18710 == null)))?((((map__18710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18710):map__18710);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18712 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18712,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-pattern",action__18484__auto___18716);

app.routes.sanghati_pattern_path = ((function (action__18484__auto___18716){
return (function app$routes$sanghati_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18717 = arguments.length;
var i__9123__auto___18718 = (0);
while(true){
if((i__9123__auto___18718 < len__9122__auto___18717)){
args__9129__auto__.push((arguments[i__9123__auto___18718]));

var G__18719 = (i__9123__auto___18718 + (1));
i__9123__auto___18718 = G__18719;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18716))
;

app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18716){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-pattern",args__18483__auto__);
});})(action__18484__auto___18716))
;

app.routes.sanghati_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_path.cljs$lang$applyTo = ((function (action__18484__auto___18716){
return (function (seq18715){
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18715));
});})(action__18484__auto___18716))
;

var action__18484__auto___18726 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18720 = params__18485__auto__;
var map__18720__$1 = ((((!((map__18720 == null)))?((((map__18720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18720):map__18720);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18722 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18722,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18484__auto___18726);

app.routes.sanghati_pattern_alt_path = ((function (action__18484__auto___18726){
return (function app$routes$sanghati_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18727 = arguments.length;
var i__9123__auto___18728 = (0);
while(true){
if((i__9123__auto___18728 < len__9122__auto___18727)){
args__9129__auto__.push((arguments[i__9123__auto___18728]));

var G__18729 = (i__9123__auto___18728 + (1));
i__9123__auto___18728 = G__18729;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18726))
;

app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18726){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18483__auto__);
});})(action__18484__auto___18726))
;

app.routes.sanghati_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_alt_path.cljs$lang$applyTo = ((function (action__18484__auto___18726){
return (function (seq18725){
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18725));
});})(action__18484__auto___18726))
;

var action__18484__auto___18736 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18730 = params__18485__auto__;
var map__18730__$1 = ((((!((map__18730 == null)))?((((map__18730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18730):map__18730);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18732 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-guide",action__18484__auto___18736);

app.routes.sanghati_guide_path = ((function (action__18484__auto___18736){
return (function app$routes$sanghati_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18737 = arguments.length;
var i__9123__auto___18738 = (0);
while(true){
if((i__9123__auto___18738 < len__9122__auto___18737)){
args__9129__auto__.push((arguments[i__9123__auto___18738]));

var G__18739 = (i__9123__auto___18738 + (1));
i__9123__auto___18738 = G__18739;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18736))
;

app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18736){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-guide",args__18483__auto__);
});})(action__18484__auto___18736))
;

app.routes.sanghati_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_guide_path.cljs$lang$applyTo = ((function (action__18484__auto___18736){
return (function (seq18735){
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18735));
});})(action__18484__auto___18736))
;

var action__18484__auto___18746 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18740 = params__18485__auto__;
var map__18740__$1 = ((((!((map__18740 == null)))?((((map__18740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18740):map__18740);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18740__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18742 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18742,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18484__auto___18746);

app.routes.borders_path = ((function (action__18484__auto___18746){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18747 = arguments.length;
var i__9123__auto___18748 = (0);
while(true){
if((i__9123__auto___18748 < len__9122__auto___18747)){
args__9129__auto__.push((arguments[i__9123__auto___18748]));

var G__18749 = (i__9123__auto___18748 + (1));
i__9123__auto___18748 = G__18749;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18746))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18746){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18483__auto__);
});})(action__18484__auto___18746))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18484__auto___18746){
return (function (seq18745){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18745));
});})(action__18484__auto___18746))
;

var action__18484__auto___18756 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18750 = params__18485__auto__;
var map__18750__$1 = ((((!((map__18750 == null)))?((((map__18750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18750):map__18750);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18750__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18752 = params__18485__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18752,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18484__auto___18756);

app.routes.tools_path = ((function (action__18484__auto___18756){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18757 = arguments.length;
var i__9123__auto___18758 = (0);
while(true){
if((i__9123__auto___18758 < len__9122__auto___18757)){
args__9129__auto__.push((arguments[i__9123__auto___18758]));

var G__18759 = (i__9123__auto___18758 + (1));
i__9123__auto___18758 = G__18759;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18756))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18756){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18483__auto__);
});})(action__18484__auto___18756))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18484__auto___18756){
return (function (seq18755){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18755));
});})(action__18484__auto___18756))
;

var action__18484__auto___18766 = (function (params__18485__auto__){
if(cljs.core.map_QMARK_(params__18485__auto__)){
var map__18760 = params__18485__auto__;
var map__18760__$1 = ((((!((map__18760 == null)))?((((map__18760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18760):map__18760);
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18485__auto__)){
var vec__18762 = params__18485__auto__;
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18484__auto___18766);

app.routes.default_path = ((function (action__18484__auto___18766){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18767 = arguments.length;
var i__9123__auto___18768 = (0);
while(true){
if((i__9123__auto___18768 < len__9122__auto___18767)){
args__9129__auto__.push((arguments[i__9123__auto___18768]));

var G__18769 = (i__9123__auto___18768 + (1));
i__9123__auto___18768 = G__18769;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18484__auto___18766))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18484__auto___18766){
return (function (args__18483__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18483__auto__);
});})(action__18484__auto___18766))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18484__auto___18766){
return (function (seq18765){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18765));
});})(action__18484__auto___18766))
;

