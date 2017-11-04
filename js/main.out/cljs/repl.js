// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18026){
var map__18027 = p__18026;
var map__18027__$1 = ((((!((map__18027 == null)))?((((map__18027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18027):map__18027);
var m = map__18027__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18027__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18027__$1,cljs.core.cst$kw$name);
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
var seq__18029_18051 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18030_18052 = null;
var count__18031_18053 = (0);
var i__18032_18054 = (0);
while(true){
if((i__18032_18054 < count__18031_18053)){
var f_18055 = chunk__18030_18052.cljs$core$IIndexed$_nth$arity$2(null,i__18032_18054);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18055], 0));

var G__18056 = seq__18029_18051;
var G__18057 = chunk__18030_18052;
var G__18058 = count__18031_18053;
var G__18059 = (i__18032_18054 + (1));
seq__18029_18051 = G__18056;
chunk__18030_18052 = G__18057;
count__18031_18053 = G__18058;
i__18032_18054 = G__18059;
continue;
} else {
var temp__4657__auto___18060 = cljs.core.seq(seq__18029_18051);
if(temp__4657__auto___18060){
var seq__18029_18061__$1 = temp__4657__auto___18060;
if(cljs.core.chunked_seq_QMARK_(seq__18029_18061__$1)){
var c__8792__auto___18062 = cljs.core.chunk_first(seq__18029_18061__$1);
var G__18063 = cljs.core.chunk_rest(seq__18029_18061__$1);
var G__18064 = c__8792__auto___18062;
var G__18065 = cljs.core.count(c__8792__auto___18062);
var G__18066 = (0);
seq__18029_18051 = G__18063;
chunk__18030_18052 = G__18064;
count__18031_18053 = G__18065;
i__18032_18054 = G__18066;
continue;
} else {
var f_18067 = cljs.core.first(seq__18029_18061__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18067], 0));

var G__18068 = cljs.core.next(seq__18029_18061__$1);
var G__18069 = null;
var G__18070 = (0);
var G__18071 = (0);
seq__18029_18051 = G__18068;
chunk__18030_18052 = G__18069;
count__18031_18053 = G__18070;
i__18032_18054 = G__18071;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18072 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18072], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18072)))?cljs.core.second(arglists_18072):arglists_18072)], 0));
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
var seq__18033_18073 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18034_18074 = null;
var count__18035_18075 = (0);
var i__18036_18076 = (0);
while(true){
if((i__18036_18076 < count__18035_18075)){
var vec__18037_18077 = chunk__18034_18074.cljs$core$IIndexed$_nth$arity$2(null,i__18036_18076);
var name_18078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037_18077,(0),null);
var map__18040_18079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037_18077,(1),null);
var map__18040_18080__$1 = ((((!((map__18040_18079 == null)))?((((map__18040_18079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18040_18079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18040_18079):map__18040_18079);
var doc_18081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18040_18080__$1,cljs.core.cst$kw$doc);
var arglists_18082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18040_18080__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18078], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18082], 0));

if(cljs.core.truth_(doc_18081)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18081], 0));
} else {
}

var G__18083 = seq__18033_18073;
var G__18084 = chunk__18034_18074;
var G__18085 = count__18035_18075;
var G__18086 = (i__18036_18076 + (1));
seq__18033_18073 = G__18083;
chunk__18034_18074 = G__18084;
count__18035_18075 = G__18085;
i__18036_18076 = G__18086;
continue;
} else {
var temp__4657__auto___18087 = cljs.core.seq(seq__18033_18073);
if(temp__4657__auto___18087){
var seq__18033_18088__$1 = temp__4657__auto___18087;
if(cljs.core.chunked_seq_QMARK_(seq__18033_18088__$1)){
var c__8792__auto___18089 = cljs.core.chunk_first(seq__18033_18088__$1);
var G__18090 = cljs.core.chunk_rest(seq__18033_18088__$1);
var G__18091 = c__8792__auto___18089;
var G__18092 = cljs.core.count(c__8792__auto___18089);
var G__18093 = (0);
seq__18033_18073 = G__18090;
chunk__18034_18074 = G__18091;
count__18035_18075 = G__18092;
i__18036_18076 = G__18093;
continue;
} else {
var vec__18042_18094 = cljs.core.first(seq__18033_18088__$1);
var name_18095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042_18094,(0),null);
var map__18045_18096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042_18094,(1),null);
var map__18045_18097__$1 = ((((!((map__18045_18096 == null)))?((((map__18045_18096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18045_18096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18045_18096):map__18045_18096);
var doc_18098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045_18097__$1,cljs.core.cst$kw$doc);
var arglists_18099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045_18097__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18095], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18099], 0));

if(cljs.core.truth_(doc_18098)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18098], 0));
} else {
}

var G__18100 = cljs.core.next(seq__18033_18088__$1);
var G__18101 = null;
var G__18102 = (0);
var G__18103 = (0);
seq__18033_18073 = G__18100;
chunk__18034_18074 = G__18101;
count__18035_18075 = G__18102;
i__18036_18076 = G__18103;
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

var seq__18047 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18048 = null;
var count__18049 = (0);
var i__18050 = (0);
while(true){
if((i__18050 < count__18049)){
var role = chunk__18048.cljs$core$IIndexed$_nth$arity$2(null,i__18050);
var temp__4657__auto___18104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18104__$1)){
var spec_18105 = temp__4657__auto___18104__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18105)], 0));
} else {
}

var G__18106 = seq__18047;
var G__18107 = chunk__18048;
var G__18108 = count__18049;
var G__18109 = (i__18050 + (1));
seq__18047 = G__18106;
chunk__18048 = G__18107;
count__18049 = G__18108;
i__18050 = G__18109;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18047);
if(temp__4657__auto____$1){
var seq__18047__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18047__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18047__$1);
var G__18110 = cljs.core.chunk_rest(seq__18047__$1);
var G__18111 = c__8792__auto__;
var G__18112 = cljs.core.count(c__8792__auto__);
var G__18113 = (0);
seq__18047 = G__18110;
chunk__18048 = G__18111;
count__18049 = G__18112;
i__18050 = G__18113;
continue;
} else {
var role = cljs.core.first(seq__18047__$1);
var temp__4657__auto___18114__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18114__$2)){
var spec_18115 = temp__4657__auto___18114__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18115)], 0));
} else {
}

var G__18116 = cljs.core.next(seq__18047__$1);
var G__18117 = null;
var G__18118 = (0);
var G__18119 = (0);
seq__18047 = G__18116;
chunk__18048 = G__18117;
count__18049 = G__18118;
i__18050 = G__18119;
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
