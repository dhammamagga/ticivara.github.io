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
var len__9122__auto___14985 = arguments.length;
var i__9123__auto___14986 = (0);
while(true){
if((i__9123__auto___14986 < len__9122__auto___14985)){
args__9129__auto__.push((arguments[i__9123__auto___14986]));

var G__14987 = (i__9123__auto___14986 + (1));
i__9123__auto___14986 = G__14987;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14981){
var vec__14982 = p__14981;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14979){
var G__14980 = cljs.core.first(seq14979);
var seq14979__$1 = cljs.core.next(seq14979);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14980,seq14979__$1);
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
var len__9122__auto___14994 = arguments.length;
var i__9123__auto___14995 = (0);
while(true){
if((i__9123__auto___14995 < len__9122__auto___14994)){
args__9129__auto__.push((arguments[i__9123__auto___14995]));

var G__14996 = (i__9123__auto___14995 + (1));
i__9123__auto___14995 = G__14996;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14990){
var vec__14991 = p__14990;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14988){
var G__14989 = cljs.core.first(seq14988);
var seq14988__$1 = cljs.core.next(seq14988);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14989,seq14988__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14999 = arguments.length;
var i__9123__auto___15000 = (0);
while(true){
if((i__9123__auto___15000 < len__9122__auto___14999)){
args__9129__auto__.push((arguments[i__9123__auto___15000]));

var G__15001 = (i__9123__auto___15000 + (1));
i__9123__auto___15000 = G__15001;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14997){
var G__14998 = cljs.core.first(seq14997);
var seq14997__$1 = cljs.core.next(seq14997);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14998,seq14997__$1);
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
var len__9122__auto___15008 = arguments.length;
var i__9123__auto___15009 = (0);
while(true){
if((i__9123__auto___15009 < len__9122__auto___15008)){
args__9129__auto__.push((arguments[i__9123__auto___15009]));

var G__15010 = (i__9123__auto___15009 + (1));
i__9123__auto___15009 = G__15010;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15004){
var vec__15005 = p__15004;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq15002){
var G__15003 = cljs.core.first(seq15002);
var seq15002__$1 = cljs.core.next(seq15002);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15003,seq15002__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15017 = arguments.length;
var i__9123__auto___15018 = (0);
while(true){
if((i__9123__auto___15018 < len__9122__auto___15017)){
args__9129__auto__.push((arguments[i__9123__auto___15018]));

var G__15019 = (i__9123__auto___15018 + (1));
i__9123__auto___15018 = G__15019;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15013){
var vec__15014 = p__15013;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15014,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq15011){
var G__15012 = cljs.core.first(seq15011);
var seq15011__$1 = cljs.core.next(seq15011);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15012,seq15011__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15024 = arguments.length;
var i__9123__auto___15025 = (0);
while(true){
if((i__9123__auto___15025 < len__9122__auto___15024)){
args__9129__auto__.push((arguments[i__9123__auto___15025]));

var G__15026 = (i__9123__auto___15025 + (1));
i__9123__auto___15025 = G__15026;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15020_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__15020_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq15021){
var G__15022 = cljs.core.first(seq15021);
var seq15021__$1 = cljs.core.next(seq15021);
var G__15023 = cljs.core.first(seq15021__$1);
var seq15021__$2 = cljs.core.next(seq15021__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15022,G__15023,seq15021__$2);
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
var len__9122__auto___15031 = arguments.length;
var i__9123__auto___15032 = (0);
while(true){
if((i__9123__auto___15032 < len__9122__auto___15031)){
args__9129__auto__.push((arguments[i__9123__auto___15032]));

var G__15033 = (i__9123__auto___15032 + (1));
i__9123__auto___15032 = G__15033;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15027_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__15027_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq15028){
var G__15029 = cljs.core.first(seq15028);
var seq15028__$1 = cljs.core.next(seq15028);
var G__15030 = cljs.core.first(seq15028__$1);
var seq15028__$2 = cljs.core.next(seq15028__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15029,G__15030,seq15028__$2);
});

