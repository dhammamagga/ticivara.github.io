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
var app_18638__$1 = document.body;
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18638__$1,cljs.core.cst$kw$en);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18638__$1,cljs.core.cst$kw$th);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_18638__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,page_key);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18493__auto___18645 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18639 = params__18494__auto__;
var map__18639__$1 = ((((!((map__18639 == null)))?((((map__18639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18639):map__18639);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18639__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18641 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18493__auto___18645);

app.routes.home_path = ((function (action__18493__auto___18645){
return (function app$routes$home_path(var_args){
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
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18645))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18645){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18492__auto__);
});})(action__18493__auto___18645))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18493__auto___18645){
return (function (seq18644){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18644));
});})(action__18493__auto___18645))
;

var action__18493__auto___18655 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18649 = params__18494__auto__;
var map__18649__$1 = ((((!((map__18649 == null)))?((((map__18649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18649):map__18649);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18651 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18651,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__18493__auto___18655);

app.routes.home_alt_path = ((function (action__18493__auto___18655){
return (function app$routes$home_alt_path(var_args){
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
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18655))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18655){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__18492__auto__);
});})(action__18493__auto___18655))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__18493__auto___18655){
return (function (seq18654){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18654));
});})(action__18493__auto___18655))
;

var action__18493__auto___18665 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18659 = params__18494__auto__;
var map__18659__$1 = ((((!((map__18659 == null)))?((((map__18659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18659):map__18659);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18661 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-pattern",action__18493__auto___18665);

app.routes.sabong_pattern_path = ((function (action__18493__auto___18665){
return (function app$routes$sabong_pattern_path(var_args){
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
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18665))
;

app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18665){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-pattern",args__18492__auto__);
});})(action__18493__auto___18665))
;

app.routes.sabong_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_path.cljs$lang$applyTo = ((function (action__18493__auto___18665){
return (function (seq18664){
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18664));
});})(action__18493__auto___18665))
;

var action__18493__auto___18675 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18669 = params__18494__auto__;
var map__18669__$1 = ((((!((map__18669 == null)))?((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18671 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18493__auto___18675);

app.routes.sabong_pattern_alt_path = ((function (action__18493__auto___18675){
return (function app$routes$sabong_pattern_alt_path(var_args){
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
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18675))
;

app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18675){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18492__auto__);
});})(action__18493__auto___18675))
;

app.routes.sabong_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_alt_path.cljs$lang$applyTo = ((function (action__18493__auto___18675){
return (function (seq18674){
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18674));
});})(action__18493__auto___18675))
;

var action__18493__auto___18685 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18679 = params__18494__auto__;
var map__18679__$1 = ((((!((map__18679 == null)))?((((map__18679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18679):map__18679);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18681 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-guide",action__18493__auto___18685);

app.routes.sabong_guide_path = ((function (action__18493__auto___18685){
return (function app$routes$sabong_guide_path(var_args){
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
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18685))
;

app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18685){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-guide",args__18492__auto__);
});})(action__18493__auto___18685))
;

app.routes.sabong_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_guide_path.cljs$lang$applyTo = ((function (action__18493__auto___18685){
return (function (seq18684){
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18684));
});})(action__18493__auto___18685))
;

var action__18493__auto___18695 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18689 = params__18494__auto__;
var map__18689__$1 = ((((!((map__18689 == null)))?((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18689):map__18689);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18691 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18691,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-pattern",action__18493__auto___18695);

app.routes.civara_pattern_path = ((function (action__18493__auto___18695){
return (function app$routes$civara_pattern_path(var_args){
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
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18695))
;

app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18695){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-pattern",args__18492__auto__);
});})(action__18493__auto___18695))
;

app.routes.civara_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_path.cljs$lang$applyTo = ((function (action__18493__auto___18695){
return (function (seq18694){
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18694));
});})(action__18493__auto___18695))
;

var action__18493__auto___18705 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18699 = params__18494__auto__;
var map__18699__$1 = ((((!((map__18699 == null)))?((((map__18699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18699):map__18699);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18699__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18701 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18493__auto___18705);

app.routes.civara_pattern_alt_path = ((function (action__18493__auto___18705){
return (function app$routes$civara_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18706 = arguments.length;
var i__9123__auto___18707 = (0);
while(true){
if((i__9123__auto___18707 < len__9122__auto___18706)){
args__9129__auto__.push((arguments[i__9123__auto___18707]));

var G__18708 = (i__9123__auto___18707 + (1));
i__9123__auto___18707 = G__18708;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18705))
;

app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18705){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18492__auto__);
});})(action__18493__auto___18705))
;

app.routes.civara_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_alt_path.cljs$lang$applyTo = ((function (action__18493__auto___18705){
return (function (seq18704){
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18704));
});})(action__18493__auto___18705))
;

var action__18493__auto___18715 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18709 = params__18494__auto__;
var map__18709__$1 = ((((!((map__18709 == null)))?((((map__18709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18709):map__18709);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18711 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-guide",action__18493__auto___18715);

app.routes.civara_guide_path = ((function (action__18493__auto___18715){
return (function app$routes$civara_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18716 = arguments.length;
var i__9123__auto___18717 = (0);
while(true){
if((i__9123__auto___18717 < len__9122__auto___18716)){
args__9129__auto__.push((arguments[i__9123__auto___18717]));

var G__18718 = (i__9123__auto___18717 + (1));
i__9123__auto___18717 = G__18718;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18715))
;

app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18715){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-guide",args__18492__auto__);
});})(action__18493__auto___18715))
;

app.routes.civara_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_guide_path.cljs$lang$applyTo = ((function (action__18493__auto___18715){
return (function (seq18714){
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18714));
});})(action__18493__auto___18715))
;

var action__18493__auto___18725 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18719 = params__18494__auto__;
var map__18719__$1 = ((((!((map__18719 == null)))?((((map__18719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18719):map__18719);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18719__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18721 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18721,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-pattern",action__18493__auto___18725);

app.routes.sanghati_pattern_path = ((function (action__18493__auto___18725){
return (function app$routes$sanghati_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18726 = arguments.length;
var i__9123__auto___18727 = (0);
while(true){
if((i__9123__auto___18727 < len__9122__auto___18726)){
args__9129__auto__.push((arguments[i__9123__auto___18727]));

var G__18728 = (i__9123__auto___18727 + (1));
i__9123__auto___18727 = G__18728;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18725))
;

app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18725){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-pattern",args__18492__auto__);
});})(action__18493__auto___18725))
;

app.routes.sanghati_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_path.cljs$lang$applyTo = ((function (action__18493__auto___18725){
return (function (seq18724){
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18724));
});})(action__18493__auto___18725))
;

var action__18493__auto___18735 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18729 = params__18494__auto__;
var map__18729__$1 = ((((!((map__18729 == null)))?((((map__18729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18729):map__18729);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18731 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18493__auto___18735);

app.routes.sanghati_pattern_alt_path = ((function (action__18493__auto___18735){
return (function app$routes$sanghati_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18736 = arguments.length;
var i__9123__auto___18737 = (0);
while(true){
if((i__9123__auto___18737 < len__9122__auto___18736)){
args__9129__auto__.push((arguments[i__9123__auto___18737]));

var G__18738 = (i__9123__auto___18737 + (1));
i__9123__auto___18737 = G__18738;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18735))
;

app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18735){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18492__auto__);
});})(action__18493__auto___18735))
;

app.routes.sanghati_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_alt_path.cljs$lang$applyTo = ((function (action__18493__auto___18735){
return (function (seq18734){
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18734));
});})(action__18493__auto___18735))
;

var action__18493__auto___18745 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18739 = params__18494__auto__;
var map__18739__$1 = ((((!((map__18739 == null)))?((((map__18739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18739):map__18739);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18741 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18741,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-guide",action__18493__auto___18745);

app.routes.sanghati_guide_path = ((function (action__18493__auto___18745){
return (function app$routes$sanghati_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18746 = arguments.length;
var i__9123__auto___18747 = (0);
while(true){
if((i__9123__auto___18747 < len__9122__auto___18746)){
args__9129__auto__.push((arguments[i__9123__auto___18747]));

var G__18748 = (i__9123__auto___18747 + (1));
i__9123__auto___18747 = G__18748;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18745))
;

app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18745){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-guide",args__18492__auto__);
});})(action__18493__auto___18745))
;

app.routes.sanghati_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_guide_path.cljs$lang$applyTo = ((function (action__18493__auto___18745){
return (function (seq18744){
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18744));
});})(action__18493__auto___18745))
;

var action__18493__auto___18755 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18749 = params__18494__auto__;
var map__18749__$1 = ((((!((map__18749 == null)))?((((map__18749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18749):map__18749);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18749__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18751 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18493__auto___18755);

app.routes.borders_path = ((function (action__18493__auto___18755){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18756 = arguments.length;
var i__9123__auto___18757 = (0);
while(true){
if((i__9123__auto___18757 < len__9122__auto___18756)){
args__9129__auto__.push((arguments[i__9123__auto___18757]));

var G__18758 = (i__9123__auto___18757 + (1));
i__9123__auto___18757 = G__18758;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18755))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18755){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18492__auto__);
});})(action__18493__auto___18755))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18493__auto___18755){
return (function (seq18754){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18754));
});})(action__18493__auto___18755))
;

var action__18493__auto___18765 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18759 = params__18494__auto__;
var map__18759__$1 = ((((!((map__18759 == null)))?((((map__18759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18759):map__18759);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18759__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18761 = params__18494__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18493__auto___18765);

app.routes.tools_path = ((function (action__18493__auto___18765){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18766 = arguments.length;
var i__9123__auto___18767 = (0);
while(true){
if((i__9123__auto___18767 < len__9122__auto___18766)){
args__9129__auto__.push((arguments[i__9123__auto___18767]));

var G__18768 = (i__9123__auto___18767 + (1));
i__9123__auto___18767 = G__18768;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18765))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18765){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18492__auto__);
});})(action__18493__auto___18765))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18493__auto___18765){
return (function (seq18764){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18764));
});})(action__18493__auto___18765))
;

var action__18493__auto___18775 = (function (params__18494__auto__){
if(cljs.core.map_QMARK_(params__18494__auto__)){
var map__18769 = params__18494__auto__;
var map__18769__$1 = ((((!((map__18769 == null)))?((((map__18769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18769):map__18769);
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18494__auto__)){
var vec__18771 = params__18494__auto__;
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18493__auto___18775);

app.routes.default_path = ((function (action__18493__auto___18775){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18776 = arguments.length;
var i__9123__auto___18777 = (0);
while(true){
if((i__9123__auto___18777 < len__9122__auto___18776)){
args__9129__auto__.push((arguments[i__9123__auto___18777]));

var G__18778 = (i__9123__auto___18777 + (1));
i__9123__auto___18777 = G__18778;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18493__auto___18775))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18493__auto___18775){
return (function (args__18492__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18492__auto__);
});})(action__18493__auto___18775))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18493__auto___18775){
return (function (seq18774){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18774));
});})(action__18493__auto___18775))
;

