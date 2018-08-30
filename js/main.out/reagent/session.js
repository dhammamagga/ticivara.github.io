// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14015 = arguments.length;
var i__9123__auto___14016 = (0);
while(true){
if((i__9123__auto___14016 < len__9122__auto___14015)){
args__9129__auto__.push((arguments[i__9123__auto___14016]));

var G__14017 = (i__9123__auto___14016 + (1));
i__9123__auto___14016 = G__14017;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14011){
var vec__14012 = p__14011;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14012,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14009){
var G__14010 = cljs.core.first(seq14009);
var seq14009__$1 = cljs.core.next(seq14009);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14010,seq14009__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14024 = arguments.length;
var i__9123__auto___14025 = (0);
while(true){
if((i__9123__auto___14025 < len__9122__auto___14024)){
args__9129__auto__.push((arguments[i__9123__auto___14025]));

var G__14026 = (i__9123__auto___14025 + (1));
i__9123__auto___14025 = G__14026;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14020){
var vec__14021 = p__14020;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14021,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14018){
var G__14019 = cljs.core.first(seq14018);
var seq14018__$1 = cljs.core.next(seq14018);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14019,seq14018__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14029 = arguments.length;
var i__9123__auto___14030 = (0);
while(true){
if((i__9123__auto___14030 < len__9122__auto___14029)){
args__9129__auto__.push((arguments[i__9123__auto___14030]));

var G__14031 = (i__9123__auto___14030 + (1));
i__9123__auto___14030 = G__14031;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14027){
var G__14028 = cljs.core.first(seq14027);
var seq14027__$1 = cljs.core.next(seq14027);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14028,seq14027__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14038 = arguments.length;
var i__9123__auto___14039 = (0);
while(true){
if((i__9123__auto___14039 < len__9122__auto___14038)){
args__9129__auto__.push((arguments[i__9123__auto___14039]));

var G__14040 = (i__9123__auto___14039 + (1));
i__9123__auto___14039 = G__14040;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14034){
var vec__14035 = p__14034;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14035,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14032){
var G__14033 = cljs.core.first(seq14032);
var seq14032__$1 = cljs.core.next(seq14032);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14033,seq14032__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14047 = arguments.length;
var i__9123__auto___14048 = (0);
while(true){
if((i__9123__auto___14048 < len__9122__auto___14047)){
args__9129__auto__.push((arguments[i__9123__auto___14048]));

var G__14049 = (i__9123__auto___14048 + (1));
i__9123__auto___14048 = G__14049;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14043){
var vec__14044 = p__14043;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14044,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14041){
var G__14042 = cljs.core.first(seq14041);
var seq14041__$1 = cljs.core.next(seq14041);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14042,seq14041__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14054 = arguments.length;
var i__9123__auto___14055 = (0);
while(true){
if((i__9123__auto___14055 < len__9122__auto___14054)){
args__9129__auto__.push((arguments[i__9123__auto___14055]));

var G__14056 = (i__9123__auto___14055 + (1));
i__9123__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14050_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14050_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14051){
var G__14052 = cljs.core.first(seq14051);
var seq14051__$1 = cljs.core.next(seq14051);
var G__14053 = cljs.core.first(seq14051__$1);
var seq14051__$2 = cljs.core.next(seq14051__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14052,G__14053,seq14051__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14061 = arguments.length;
var i__9123__auto___14062 = (0);
while(true){
if((i__9123__auto___14062 < len__9122__auto___14061)){
args__9129__auto__.push((arguments[i__9123__auto___14062]));

var G__14063 = (i__9123__auto___14062 + (1));
i__9123__auto___14062 = G__14063;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14057_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14057_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14058){
var G__14059 = cljs.core.first(seq14058);
var seq14058__$1 = cljs.core.next(seq14058);
var G__14060 = cljs.core.first(seq14058__$1);
var seq14058__$2 = cljs.core.next(seq14058__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14059,G__14060,seq14058__$2);
});

