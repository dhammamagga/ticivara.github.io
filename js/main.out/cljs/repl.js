// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18097){
var map__18098 = p__18097;
var map__18098__$1 = ((((!((map__18098 == null)))?((((map__18098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18098):map__18098);
var m = map__18098__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,cljs.core.cst$kw$name);
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
var seq__18100_18122 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18101_18123 = null;
var count__18102_18124 = (0);
var i__18103_18125 = (0);
while(true){
if((i__18103_18125 < count__18102_18124)){
var f_18126 = chunk__18101_18123.cljs$core$IIndexed$_nth$arity$2(null,i__18103_18125);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18126], 0));

var G__18127 = seq__18100_18122;
var G__18128 = chunk__18101_18123;
var G__18129 = count__18102_18124;
var G__18130 = (i__18103_18125 + (1));
seq__18100_18122 = G__18127;
chunk__18101_18123 = G__18128;
count__18102_18124 = G__18129;
i__18103_18125 = G__18130;
continue;
} else {
var temp__4657__auto___18131 = cljs.core.seq(seq__18100_18122);
if(temp__4657__auto___18131){
var seq__18100_18132__$1 = temp__4657__auto___18131;
if(cljs.core.chunked_seq_QMARK_(seq__18100_18132__$1)){
var c__8792__auto___18133 = cljs.core.chunk_first(seq__18100_18132__$1);
var G__18134 = cljs.core.chunk_rest(seq__18100_18132__$1);
var G__18135 = c__8792__auto___18133;
var G__18136 = cljs.core.count(c__8792__auto___18133);
var G__18137 = (0);
seq__18100_18122 = G__18134;
chunk__18101_18123 = G__18135;
count__18102_18124 = G__18136;
i__18103_18125 = G__18137;
continue;
} else {
var f_18138 = cljs.core.first(seq__18100_18132__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18138], 0));

var G__18139 = cljs.core.next(seq__18100_18132__$1);
var G__18140 = null;
var G__18141 = (0);
var G__18142 = (0);
seq__18100_18122 = G__18139;
chunk__18101_18123 = G__18140;
count__18102_18124 = G__18141;
i__18103_18125 = G__18142;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18143 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18143], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18143)))?cljs.core.second(arglists_18143):arglists_18143)], 0));
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
var seq__18104_18144 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18105_18145 = null;
var count__18106_18146 = (0);
var i__18107_18147 = (0);
while(true){
if((i__18107_18147 < count__18106_18146)){
var vec__18108_18148 = chunk__18105_18145.cljs$core$IIndexed$_nth$arity$2(null,i__18107_18147);
var name_18149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108_18148,(0),null);
var map__18111_18150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108_18148,(1),null);
var map__18111_18151__$1 = ((((!((map__18111_18150 == null)))?((((map__18111_18150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18111_18150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18111_18150):map__18111_18150);
var doc_18152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111_18151__$1,cljs.core.cst$kw$doc);
var arglists_18153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111_18151__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18149], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18153], 0));

if(cljs.core.truth_(doc_18152)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18152], 0));
} else {
}

var G__18154 = seq__18104_18144;
var G__18155 = chunk__18105_18145;
var G__18156 = count__18106_18146;
var G__18157 = (i__18107_18147 + (1));
seq__18104_18144 = G__18154;
chunk__18105_18145 = G__18155;
count__18106_18146 = G__18156;
i__18107_18147 = G__18157;
continue;
} else {
var temp__4657__auto___18158 = cljs.core.seq(seq__18104_18144);
if(temp__4657__auto___18158){
var seq__18104_18159__$1 = temp__4657__auto___18158;
if(cljs.core.chunked_seq_QMARK_(seq__18104_18159__$1)){
var c__8792__auto___18160 = cljs.core.chunk_first(seq__18104_18159__$1);
var G__18161 = cljs.core.chunk_rest(seq__18104_18159__$1);
var G__18162 = c__8792__auto___18160;
var G__18163 = cljs.core.count(c__8792__auto___18160);
var G__18164 = (0);
seq__18104_18144 = G__18161;
chunk__18105_18145 = G__18162;
count__18106_18146 = G__18163;
i__18107_18147 = G__18164;
continue;
} else {
var vec__18113_18165 = cljs.core.first(seq__18104_18159__$1);
var name_18166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18113_18165,(0),null);
var map__18116_18167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18113_18165,(1),null);
var map__18116_18168__$1 = ((((!((map__18116_18167 == null)))?((((map__18116_18167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18116_18167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18116_18167):map__18116_18167);
var doc_18169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116_18168__$1,cljs.core.cst$kw$doc);
var arglists_18170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116_18168__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18166], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18170], 0));

if(cljs.core.truth_(doc_18169)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18169], 0));
} else {
}

var G__18171 = cljs.core.next(seq__18104_18159__$1);
var G__18172 = null;
var G__18173 = (0);
var G__18174 = (0);
seq__18104_18144 = G__18171;
chunk__18105_18145 = G__18172;
count__18106_18146 = G__18173;
i__18107_18147 = G__18174;
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

var seq__18118 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18119 = null;
var count__18120 = (0);
var i__18121 = (0);
while(true){
if((i__18121 < count__18120)){
var role = chunk__18119.cljs$core$IIndexed$_nth$arity$2(null,i__18121);
var temp__4657__auto___18175__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18175__$1)){
var spec_18176 = temp__4657__auto___18175__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18176)], 0));
} else {
}

var G__18177 = seq__18118;
var G__18178 = chunk__18119;
var G__18179 = count__18120;
var G__18180 = (i__18121 + (1));
seq__18118 = G__18177;
chunk__18119 = G__18178;
count__18120 = G__18179;
i__18121 = G__18180;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18118);
if(temp__4657__auto____$1){
var seq__18118__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18118__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18118__$1);
var G__18181 = cljs.core.chunk_rest(seq__18118__$1);
var G__18182 = c__8792__auto__;
var G__18183 = cljs.core.count(c__8792__auto__);
var G__18184 = (0);
seq__18118 = G__18181;
chunk__18119 = G__18182;
count__18120 = G__18183;
i__18121 = G__18184;
continue;
} else {
var role = cljs.core.first(seq__18118__$1);
var temp__4657__auto___18185__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18185__$2)){
var spec_18186 = temp__4657__auto___18185__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18186)], 0));
} else {
}

var G__18187 = cljs.core.next(seq__18118__$1);
var G__18188 = null;
var G__18189 = (0);
var G__18190 = (0);
seq__18118 = G__18187;
chunk__18119 = G__18188;
count__18120 = G__18189;
i__18121 = G__18190;
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
