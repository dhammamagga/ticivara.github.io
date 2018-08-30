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
var app_15044__$1 = document.body;
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_15044__$1,cljs.core.cst$kw$en);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_15044__$1,cljs.core.cst$kw$th);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(app_15044__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,page_key);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__14899__auto___15051 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15045 = params__14900__auto__;
var map__15045__$1 = ((((!((map__15045 == null)))?((((map__15045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15045):map__15045);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15047 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15047,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__14899__auto___15051);

app.routes.home_path = ((function (action__14899__auto___15051){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15052 = arguments.length;
var i__9123__auto___15053 = (0);
while(true){
if((i__9123__auto___15053 < len__9122__auto___15052)){
args__9129__auto__.push((arguments[i__9123__auto___15053]));

var G__15054 = (i__9123__auto___15053 + (1));
i__9123__auto___15053 = G__15054;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15051))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15051){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__14898__auto__);
});})(action__14899__auto___15051))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__14899__auto___15051){
return (function (seq15050){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15050));
});})(action__14899__auto___15051))
;

var action__14899__auto___15061 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15055 = params__14900__auto__;
var map__15055__$1 = ((((!((map__15055 == null)))?((((map__15055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15055):map__15055);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15055__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15057 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__14899__auto___15061);

app.routes.home_alt_path = ((function (action__14899__auto___15061){
return (function app$routes$home_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15062 = arguments.length;
var i__9123__auto___15063 = (0);
while(true){
if((i__9123__auto___15063 < len__9122__auto___15062)){
args__9129__auto__.push((arguments[i__9123__auto___15063]));

var G__15064 = (i__9123__auto___15063 + (1));
i__9123__auto___15063 = G__15064;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15061))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15061){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__14898__auto__);
});})(action__14899__auto___15061))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__14899__auto___15061){
return (function (seq15060){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15060));
});})(action__14899__auto___15061))
;

var action__14899__auto___15071 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15065 = params__14900__auto__;
var map__15065__$1 = ((((!((map__15065 == null)))?((((map__15065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15065):map__15065);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15065__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15067 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15067,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-pattern",action__14899__auto___15071);

app.routes.sabong_pattern_path = ((function (action__14899__auto___15071){
return (function app$routes$sabong_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15072 = arguments.length;
var i__9123__auto___15073 = (0);
while(true){
if((i__9123__auto___15073 < len__9122__auto___15072)){
args__9129__auto__.push((arguments[i__9123__auto___15073]));

var G__15074 = (i__9123__auto___15073 + (1));
i__9123__auto___15073 = G__15074;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15071))
;

app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15071){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-pattern",args__14898__auto__);
});})(action__14899__auto___15071))
;

app.routes.sabong_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_path.cljs$lang$applyTo = ((function (action__14899__auto___15071){
return (function (seq15070){
return app.routes.sabong_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15070));
});})(action__14899__auto___15071))
;

var action__14899__auto___15081 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15075 = params__14900__auto__;
var map__15075__$1 = ((((!((map__15075 == null)))?((((map__15075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15075):map__15075);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15075__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15077 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__14899__auto___15081);

app.routes.sabong_pattern_alt_path = ((function (action__14899__auto___15081){
return (function app$routes$sabong_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15082 = arguments.length;
var i__9123__auto___15083 = (0);
while(true){
if((i__9123__auto___15083 < len__9122__auto___15082)){
args__9129__auto__.push((arguments[i__9123__auto___15083]));

var G__15084 = (i__9123__auto___15083 + (1));
i__9123__auto___15083 = G__15084;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15081))
;

app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15081){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__14898__auto__);
});})(action__14899__auto___15081))
;

app.routes.sabong_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_pattern_alt_path.cljs$lang$applyTo = ((function (action__14899__auto___15081){
return (function (seq15080){
return app.routes.sabong_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15080));
});})(action__14899__auto___15081))
;

var action__14899__auto___15091 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15085 = params__14900__auto__;
var map__15085__$1 = ((((!((map__15085 == null)))?((((map__15085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15085):map__15085);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15085__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15087 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sabong_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong-guide",action__14899__auto___15091);

app.routes.sabong_guide_path = ((function (action__14899__auto___15091){
return (function app$routes$sabong_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15092 = arguments.length;
var i__9123__auto___15093 = (0);
while(true){
if((i__9123__auto___15093 < len__9122__auto___15092)){
args__9129__auto__.push((arguments[i__9123__auto___15093]));

var G__15094 = (i__9123__auto___15093 + (1));
i__9123__auto___15093 = G__15094;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15091))
;

app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15091){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong-guide",args__14898__auto__);
});})(action__14899__auto___15091))
;

app.routes.sabong_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_guide_path.cljs$lang$applyTo = ((function (action__14899__auto___15091){
return (function (seq15090){
return app.routes.sabong_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15090));
});})(action__14899__auto___15091))
;

var action__14899__auto___15101 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15095 = params__14900__auto__;
var map__15095__$1 = ((((!((map__15095 == null)))?((((map__15095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15095):map__15095);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15095__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15097 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-pattern",action__14899__auto___15101);

app.routes.civara_pattern_path = ((function (action__14899__auto___15101){
return (function app$routes$civara_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15102 = arguments.length;
var i__9123__auto___15103 = (0);
while(true){
if((i__9123__auto___15103 < len__9122__auto___15102)){
args__9129__auto__.push((arguments[i__9123__auto___15103]));

var G__15104 = (i__9123__auto___15103 + (1));
i__9123__auto___15103 = G__15104;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15101))
;

app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15101){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-pattern",args__14898__auto__);
});})(action__14899__auto___15101))
;

app.routes.civara_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_path.cljs$lang$applyTo = ((function (action__14899__auto___15101){
return (function (seq15100){
return app.routes.civara_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15100));
});})(action__14899__auto___15101))
;

var action__14899__auto___15111 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15105 = params__14900__auto__;
var map__15105__$1 = ((((!((map__15105 == null)))?((((map__15105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15105):map__15105);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15105__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15107 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15107,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__14899__auto___15111);

app.routes.civara_pattern_alt_path = ((function (action__14899__auto___15111){
return (function app$routes$civara_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15112 = arguments.length;
var i__9123__auto___15113 = (0);
while(true){
if((i__9123__auto___15113 < len__9122__auto___15112)){
args__9129__auto__.push((arguments[i__9123__auto___15113]));

var G__15114 = (i__9123__auto___15113 + (1));
i__9123__auto___15113 = G__15114;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15111))
;

app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15111){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__14898__auto__);
});})(action__14899__auto___15111))
;

app.routes.civara_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_pattern_alt_path.cljs$lang$applyTo = ((function (action__14899__auto___15111){
return (function (seq15110){
return app.routes.civara_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15110));
});})(action__14899__auto___15111))
;

var action__14899__auto___15121 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15115 = params__14900__auto__;
var map__15115__$1 = ((((!((map__15115 == null)))?((((map__15115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15115):map__15115);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15115__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15117 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15117,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$civara_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara-guide",action__14899__auto___15121);

app.routes.civara_guide_path = ((function (action__14899__auto___15121){
return (function app$routes$civara_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15122 = arguments.length;
var i__9123__auto___15123 = (0);
while(true){
if((i__9123__auto___15123 < len__9122__auto___15122)){
args__9129__auto__.push((arguments[i__9123__auto___15123]));

var G__15124 = (i__9123__auto___15123 + (1));
i__9123__auto___15123 = G__15124;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15121))
;

app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15121){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara-guide",args__14898__auto__);
});})(action__14899__auto___15121))
;

app.routes.civara_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_guide_path.cljs$lang$applyTo = ((function (action__14899__auto___15121){
return (function (seq15120){
return app.routes.civara_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15120));
});})(action__14899__auto___15121))
;

var action__14899__auto___15131 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15125 = params__14900__auto__;
var map__15125__$1 = ((((!((map__15125 == null)))?((((map__15125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15125):map__15125);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15127 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-pattern",action__14899__auto___15131);

app.routes.sanghati_pattern_path = ((function (action__14899__auto___15131){
return (function app$routes$sanghati_pattern_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15132 = arguments.length;
var i__9123__auto___15133 = (0);
while(true){
if((i__9123__auto___15133 < len__9122__auto___15132)){
args__9129__auto__.push((arguments[i__9123__auto___15133]));

var G__15134 = (i__9123__auto___15133 + (1));
i__9123__auto___15133 = G__15134;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15131))
;

app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15131){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-pattern",args__14898__auto__);
});})(action__14899__auto___15131))
;

app.routes.sanghati_pattern_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_path.cljs$lang$applyTo = ((function (action__14899__auto___15131){
return (function (seq15130){
return app.routes.sanghati_pattern_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15130));
});})(action__14899__auto___15131))
;

var action__14899__auto___15141 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15135 = params__14900__auto__;
var map__15135__$1 = ((((!((map__15135 == null)))?((((map__15135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15135):map__15135);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15137 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_pattern);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__14899__auto___15141);

app.routes.sanghati_pattern_alt_path = ((function (action__14899__auto___15141){
return (function app$routes$sanghati_pattern_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15142 = arguments.length;
var i__9123__auto___15143 = (0);
while(true){
if((i__9123__auto___15143 < len__9122__auto___15142)){
args__9129__auto__.push((arguments[i__9123__auto___15143]));

var G__15144 = (i__9123__auto___15143 + (1));
i__9123__auto___15143 = G__15144;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15141))
;

app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15141){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__14898__auto__);
});})(action__14899__auto___15141))
;

app.routes.sanghati_pattern_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_pattern_alt_path.cljs$lang$applyTo = ((function (action__14899__auto___15141){
return (function (seq15140){
return app.routes.sanghati_pattern_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15140));
});})(action__14899__auto___15141))
;

var action__14899__auto___15151 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15145 = params__14900__auto__;
var map__15145__$1 = ((((!((map__15145 == null)))?((((map__15145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15145):map__15145);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15145__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15147 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$sanghati_DASH_guide);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati-guide",action__14899__auto___15151);

app.routes.sanghati_guide_path = ((function (action__14899__auto___15151){
return (function app$routes$sanghati_guide_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15152 = arguments.length;
var i__9123__auto___15153 = (0);
while(true){
if((i__9123__auto___15153 < len__9122__auto___15152)){
args__9129__auto__.push((arguments[i__9123__auto___15153]));

var G__15154 = (i__9123__auto___15153 + (1));
i__9123__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15151))
;

app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15151){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati-guide",args__14898__auto__);
});})(action__14899__auto___15151))
;

app.routes.sanghati_guide_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_guide_path.cljs$lang$applyTo = ((function (action__14899__auto___15151){
return (function (seq15150){
return app.routes.sanghati_guide_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15150));
});})(action__14899__auto___15151))
;

var action__14899__auto___15161 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15155 = params__14900__auto__;
var map__15155__$1 = ((((!((map__15155 == null)))?((((map__15155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15155):map__15155);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15155__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15157 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15157,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__14899__auto___15161);

app.routes.borders_path = ((function (action__14899__auto___15161){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15162 = arguments.length;
var i__9123__auto___15163 = (0);
while(true){
if((i__9123__auto___15163 < len__9122__auto___15162)){
args__9129__auto__.push((arguments[i__9123__auto___15163]));

var G__15164 = (i__9123__auto___15163 + (1));
i__9123__auto___15163 = G__15164;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15161))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15161){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__14898__auto__);
});})(action__14899__auto___15161))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__14899__auto___15161){
return (function (seq15160){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15160));
});})(action__14899__auto___15161))
;

var action__14899__auto___15171 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15165 = params__14900__auto__;
var map__15165__$1 = ((((!((map__15165 == null)))?((((map__15165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15165):map__15165);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15165__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15167 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__14899__auto___15171);

app.routes.tools_path = ((function (action__14899__auto___15171){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15172 = arguments.length;
var i__9123__auto___15173 = (0);
while(true){
if((i__9123__auto___15173 < len__9122__auto___15172)){
args__9129__auto__.push((arguments[i__9123__auto___15173]));

var G__15174 = (i__9123__auto___15173 + (1));
i__9123__auto___15173 = G__15174;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15171))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15171){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__14898__auto__);
});})(action__14899__auto___15171))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__14899__auto___15171){
return (function (seq15170){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15170));
});})(action__14899__auto___15171))
;

var action__14899__auto___15181 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15175 = params__14900__auto__;
var map__15175__$1 = ((((!((map__15175 == null)))?((((map__15175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15175):map__15175);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,cljs.core.cst$kw$lang);
return app.routes.post_route(lang,cljs.core.cst$kw$dyeing);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15177 = params__14900__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(0),null);
return app.routes.post_route(lang,cljs.core.cst$kw$dyeing);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/dyeing",action__14899__auto___15181);

app.routes.dyeing_path = ((function (action__14899__auto___15181){
return (function app$routes$dyeing_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15182 = arguments.length;
var i__9123__auto___15183 = (0);
while(true){
if((i__9123__auto___15183 < len__9122__auto___15182)){
args__9129__auto__.push((arguments[i__9123__auto___15183]));

var G__15184 = (i__9123__auto___15183 + (1));
i__9123__auto___15183 = G__15184;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.dyeing_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15181))
;

app.routes.dyeing_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15181){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/dyeing",args__14898__auto__);
});})(action__14899__auto___15181))
;

app.routes.dyeing_path.cljs$lang$maxFixedArity = (0);

app.routes.dyeing_path.cljs$lang$applyTo = ((function (action__14899__auto___15181){
return (function (seq15180){
return app.routes.dyeing_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15180));
});})(action__14899__auto___15181))
;

var action__14899__auto___15191 = (function (params__14900__auto__){
if(cljs.core.map_QMARK_(params__14900__auto__)){
var map__15185 = params__14900__auto__;
var map__15185__$1 = ((((!((map__15185 == null)))?((((map__15185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15185):map__15185);
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__14900__auto__)){
var vec__15187 = params__14900__auto__;
return app.routes.post_route("en",cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__14899__auto___15191);

app.routes.default_path = ((function (action__14899__auto___15191){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15192 = arguments.length;
var i__9123__auto___15193 = (0);
while(true){
if((i__9123__auto___15193 < len__9122__auto___15192)){
args__9129__auto__.push((arguments[i__9123__auto___15193]));

var G__15194 = (i__9123__auto___15193 + (1));
i__9123__auto___15193 = G__15194;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__14899__auto___15191))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14899__auto___15191){
return (function (args__14898__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__14898__auto__);
});})(action__14899__auto___15191))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__14899__auto___15191){
return (function (seq15190){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15190));
});})(action__14899__auto___15191))
;

