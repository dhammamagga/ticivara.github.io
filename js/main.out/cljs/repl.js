// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18423){
var map__18424 = p__18423;
var map__18424__$1 = ((((!((map__18424 == null)))?((((map__18424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18424):map__18424);
var m = map__18424__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18426_18448 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18427_18449 = null;
var count__18428_18450 = (0);
var i__18429_18451 = (0);
while(true){
if((i__18429_18451 < count__18428_18450)){
var f_18452 = chunk__18427_18449.cljs$core$IIndexed$_nth$arity$2(null,i__18429_18451);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18452], 0));

var G__18453 = seq__18426_18448;
var G__18454 = chunk__18427_18449;
var G__18455 = count__18428_18450;
var G__18456 = (i__18429_18451 + (1));
seq__18426_18448 = G__18453;
chunk__18427_18449 = G__18454;
count__18428_18450 = G__18455;
i__18429_18451 = G__18456;
continue;
} else {
var temp__4657__auto___18457 = cljs.core.seq(seq__18426_18448);
if(temp__4657__auto___18457){
var seq__18426_18458__$1 = temp__4657__auto___18457;
if(cljs.core.chunked_seq_QMARK_(seq__18426_18458__$1)){
var c__8792__auto___18459 = cljs.core.chunk_first(seq__18426_18458__$1);
var G__18460 = cljs.core.chunk_rest(seq__18426_18458__$1);
var G__18461 = c__8792__auto___18459;
var G__18462 = cljs.core.count(c__8792__auto___18459);
var G__18463 = (0);
seq__18426_18448 = G__18460;
chunk__18427_18449 = G__18461;
count__18428_18450 = G__18462;
i__18429_18451 = G__18463;
continue;
} else {
var f_18464 = cljs.core.first(seq__18426_18458__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18464], 0));

var G__18465 = cljs.core.next(seq__18426_18458__$1);
var G__18466 = null;
var G__18467 = (0);
var G__18468 = (0);
seq__18426_18448 = G__18465;
chunk__18427_18449 = G__18466;
count__18428_18450 = G__18467;
i__18429_18451 = G__18468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18469 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18469], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18469)))?cljs.core.second(arglists_18469):arglists_18469)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18430_18470 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18431_18471 = null;
var count__18432_18472 = (0);
var i__18433_18473 = (0);
while(true){
if((i__18433_18473 < count__18432_18472)){
var vec__18434_18474 = chunk__18431_18471.cljs$core$IIndexed$_nth$arity$2(null,i__18433_18473);
var name_18475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18434_18474,(0),null);
var map__18437_18476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18434_18474,(1),null);
var map__18437_18477__$1 = ((((!((map__18437_18476 == null)))?((((map__18437_18476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18437_18476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18437_18476):map__18437_18476);
var doc_18478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437_18477__$1,cljs.core.cst$kw$doc);
var arglists_18479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437_18477__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18475], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18479], 0));

if(cljs.core.truth_(doc_18478)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18478], 0));
} else {
}

var G__18480 = seq__18430_18470;
var G__18481 = chunk__18431_18471;
var G__18482 = count__18432_18472;
var G__18483 = (i__18433_18473 + (1));
seq__18430_18470 = G__18480;
chunk__18431_18471 = G__18481;
count__18432_18472 = G__18482;
i__18433_18473 = G__18483;
continue;
} else {
var temp__4657__auto___18484 = cljs.core.seq(seq__18430_18470);
if(temp__4657__auto___18484){
var seq__18430_18485__$1 = temp__4657__auto___18484;
if(cljs.core.chunked_seq_QMARK_(seq__18430_18485__$1)){
var c__8792__auto___18486 = cljs.core.chunk_first(seq__18430_18485__$1);
var G__18487 = cljs.core.chunk_rest(seq__18430_18485__$1);
var G__18488 = c__8792__auto___18486;
var G__18489 = cljs.core.count(c__8792__auto___18486);
var G__18490 = (0);
seq__18430_18470 = G__18487;
chunk__18431_18471 = G__18488;
count__18432_18472 = G__18489;
i__18433_18473 = G__18490;
continue;
} else {
var vec__18439_18491 = cljs.core.first(seq__18430_18485__$1);
var name_18492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439_18491,(0),null);
var map__18442_18493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439_18491,(1),null);
var map__18442_18494__$1 = ((((!((map__18442_18493 == null)))?((((map__18442_18493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18442_18493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18442_18493):map__18442_18493);
var doc_18495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442_18494__$1,cljs.core.cst$kw$doc);
var arglists_18496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442_18494__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18492], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18496], 0));

if(cljs.core.truth_(doc_18495)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18495], 0));
} else {
}

var G__18497 = cljs.core.next(seq__18430_18485__$1);
var G__18498 = null;
var G__18499 = (0);
var G__18500 = (0);
seq__18430_18470 = G__18497;
chunk__18431_18471 = G__18498;
count__18432_18472 = G__18499;
i__18433_18473 = G__18500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18444 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18445 = null;
var count__18446 = (0);
var i__18447 = (0);
while(true){
if((i__18447 < count__18446)){
var role = chunk__18445.cljs$core$IIndexed$_nth$arity$2(null,i__18447);
var temp__4657__auto___18501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18501__$1)){
var spec_18502 = temp__4657__auto___18501__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18502)], 0));
} else {
}

var G__18503 = seq__18444;
var G__18504 = chunk__18445;
var G__18505 = count__18446;
var G__18506 = (i__18447 + (1));
seq__18444 = G__18503;
chunk__18445 = G__18504;
count__18446 = G__18505;
i__18447 = G__18506;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18444);
if(temp__4657__auto____$1){
var seq__18444__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18444__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18444__$1);
var G__18507 = cljs.core.chunk_rest(seq__18444__$1);
var G__18508 = c__8792__auto__;
var G__18509 = cljs.core.count(c__8792__auto__);
var G__18510 = (0);
seq__18444 = G__18507;
chunk__18445 = G__18508;
count__18446 = G__18509;
i__18447 = G__18510;
continue;
} else {
var role = cljs.core.first(seq__18444__$1);
var temp__4657__auto___18511__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18511__$2)){
var spec_18512 = temp__4657__auto___18511__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18512)], 0));
} else {
}

var G__18513 = cljs.core.next(seq__18444__$1);
var G__18514 = null;
var G__18515 = (0);
var G__18516 = (0);
seq__18444 = G__18513;
chunk__18445 = G__18514;
count__18446 = G__18515;
i__18447 = G__18516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
