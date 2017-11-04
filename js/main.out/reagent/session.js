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
var len__9122__auto___14976 = arguments.length;
var i__9123__auto___14977 = (0);
while(true){
if((i__9123__auto___14977 < len__9122__auto___14976)){
args__9129__auto__.push((arguments[i__9123__auto___14977]));

var G__14978 = (i__9123__auto___14977 + (1));
i__9123__auto___14977 = G__14978;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14972){
var vec__14973 = p__14972;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14970){
var G__14971 = cljs.core.first(seq14970);
var seq14970__$1 = cljs.core.next(seq14970);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14971,seq14970__$1);
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
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14981){
var vec__14982 = p__14981;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14979){
var G__14980 = cljs.core.first(seq14979);
var seq14979__$1 = cljs.core.next(seq14979);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14980,seq14979__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14990 = arguments.length;
var i__9123__auto___14991 = (0);
while(true){
if((i__9123__auto___14991 < len__9122__auto___14990)){
args__9129__auto__.push((arguments[i__9123__auto___14991]));

var G__14992 = (i__9123__auto___14991 + (1));
i__9123__auto___14991 = G__14992;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14988){
var G__14989 = cljs.core.first(seq14988);
var seq14988__$1 = cljs.core.next(seq14988);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14989,seq14988__$1);
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
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14995){
var vec__14996 = p__14995;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14993){
var G__14994 = cljs.core.first(seq14993);
var seq14993__$1 = cljs.core.next(seq14993);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14994,seq14993__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
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
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15004){
var vec__15005 = p__15004;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq15002){
var G__15003 = cljs.core.first(seq15002);
var seq15002__$1 = cljs.core.next(seq15002);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15003,seq15002__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15015 = arguments.length;
var i__9123__auto___15016 = (0);
while(true){
if((i__9123__auto___15016 < len__9122__auto___15015)){
args__9129__auto__.push((arguments[i__9123__auto___15016]));

var G__15017 = (i__9123__auto___15016 + (1));
i__9123__auto___15016 = G__15017;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15011_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__15011_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq15012){
var G__15013 = cljs.core.first(seq15012);
var seq15012__$1 = cljs.core.next(seq15012);
var G__15014 = cljs.core.first(seq15012__$1);
var seq15012__$2 = cljs.core.next(seq15012__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15013,G__15014,seq15012__$2);
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
var len__9122__auto___15022 = arguments.length;
var i__9123__auto___15023 = (0);
while(true){
if((i__9123__auto___15023 < len__9122__auto___15022)){
args__9129__auto__.push((arguments[i__9123__auto___15023]));

var G__15024 = (i__9123__auto___15023 + (1));
i__9123__auto___15023 = G__15024;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15018_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__15018_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq15019){
var G__15020 = cljs.core.first(seq15019);
var seq15019__$1 = cljs.core.next(seq15019);
var G__15021 = cljs.core.first(seq15019__$1);
var seq15019__$2 = cljs.core.next(seq15019__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15020,G__15021,seq15019__$2);
});

