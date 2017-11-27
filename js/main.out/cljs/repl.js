// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18116){
var map__18117 = p__18116;
var map__18117__$1 = ((((!((map__18117 == null)))?((((map__18117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18117):map__18117);
var m = map__18117__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,cljs.core.cst$kw$name);
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
var seq__18119_18141 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18120_18142 = null;
var count__18121_18143 = (0);
var i__18122_18144 = (0);
while(true){
if((i__18122_18144 < count__18121_18143)){
var f_18145 = chunk__18120_18142.cljs$core$IIndexed$_nth$arity$2(null,i__18122_18144);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18145], 0));

var G__18146 = seq__18119_18141;
var G__18147 = chunk__18120_18142;
var G__18148 = count__18121_18143;
var G__18149 = (i__18122_18144 + (1));
seq__18119_18141 = G__18146;
chunk__18120_18142 = G__18147;
count__18121_18143 = G__18148;
i__18122_18144 = G__18149;
continue;
} else {
var temp__4657__auto___18150 = cljs.core.seq(seq__18119_18141);
if(temp__4657__auto___18150){
var seq__18119_18151__$1 = temp__4657__auto___18150;
if(cljs.core.chunked_seq_QMARK_(seq__18119_18151__$1)){
var c__8792__auto___18152 = cljs.core.chunk_first(seq__18119_18151__$1);
var G__18153 = cljs.core.chunk_rest(seq__18119_18151__$1);
var G__18154 = c__8792__auto___18152;
var G__18155 = cljs.core.count(c__8792__auto___18152);
var G__18156 = (0);
seq__18119_18141 = G__18153;
chunk__18120_18142 = G__18154;
count__18121_18143 = G__18155;
i__18122_18144 = G__18156;
continue;
} else {
var f_18157 = cljs.core.first(seq__18119_18151__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18157], 0));

var G__18158 = cljs.core.next(seq__18119_18151__$1);
var G__18159 = null;
var G__18160 = (0);
var G__18161 = (0);
seq__18119_18141 = G__18158;
chunk__18120_18142 = G__18159;
count__18121_18143 = G__18160;
i__18122_18144 = G__18161;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18162 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18162], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18162)))?cljs.core.second(arglists_18162):arglists_18162)], 0));
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
var seq__18123_18163 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18124_18164 = null;
var count__18125_18165 = (0);
var i__18126_18166 = (0);
while(true){
if((i__18126_18166 < count__18125_18165)){
var vec__18127_18167 = chunk__18124_18164.cljs$core$IIndexed$_nth$arity$2(null,i__18126_18166);
var name_18168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127_18167,(0),null);
var map__18130_18169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127_18167,(1),null);
var map__18130_18170__$1 = ((((!((map__18130_18169 == null)))?((((map__18130_18169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18130_18169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18130_18169):map__18130_18169);
var doc_18171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18130_18170__$1,cljs.core.cst$kw$doc);
var arglists_18172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18130_18170__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18168], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18172], 0));

if(cljs.core.truth_(doc_18171)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18171], 0));
} else {
}

var G__18173 = seq__18123_18163;
var G__18174 = chunk__18124_18164;
var G__18175 = count__18125_18165;
var G__18176 = (i__18126_18166 + (1));
seq__18123_18163 = G__18173;
chunk__18124_18164 = G__18174;
count__18125_18165 = G__18175;
i__18126_18166 = G__18176;
continue;
} else {
var temp__4657__auto___18177 = cljs.core.seq(seq__18123_18163);
if(temp__4657__auto___18177){
var seq__18123_18178__$1 = temp__4657__auto___18177;
if(cljs.core.chunked_seq_QMARK_(seq__18123_18178__$1)){
var c__8792__auto___18179 = cljs.core.chunk_first(seq__18123_18178__$1);
var G__18180 = cljs.core.chunk_rest(seq__18123_18178__$1);
var G__18181 = c__8792__auto___18179;
var G__18182 = cljs.core.count(c__8792__auto___18179);
var G__18183 = (0);
seq__18123_18163 = G__18180;
chunk__18124_18164 = G__18181;
count__18125_18165 = G__18182;
i__18126_18166 = G__18183;
continue;
} else {
var vec__18132_18184 = cljs.core.first(seq__18123_18178__$1);
var name_18185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18132_18184,(0),null);
var map__18135_18186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18132_18184,(1),null);
var map__18135_18187__$1 = ((((!((map__18135_18186 == null)))?((((map__18135_18186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18135_18186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18135_18186):map__18135_18186);
var doc_18188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135_18187__$1,cljs.core.cst$kw$doc);
var arglists_18189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135_18187__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18185], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18189], 0));

if(cljs.core.truth_(doc_18188)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18188], 0));
} else {
}

var G__18190 = cljs.core.next(seq__18123_18178__$1);
var G__18191 = null;
var G__18192 = (0);
var G__18193 = (0);
seq__18123_18163 = G__18190;
chunk__18124_18164 = G__18191;
count__18125_18165 = G__18192;
i__18126_18166 = G__18193;
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

var seq__18137 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18138 = null;
var count__18139 = (0);
var i__18140 = (0);
while(true){
if((i__18140 < count__18139)){
var role = chunk__18138.cljs$core$IIndexed$_nth$arity$2(null,i__18140);
var temp__4657__auto___18194__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18194__$1)){
var spec_18195 = temp__4657__auto___18194__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18195)], 0));
} else {
}

var G__18196 = seq__18137;
var G__18197 = chunk__18138;
var G__18198 = count__18139;
var G__18199 = (i__18140 + (1));
seq__18137 = G__18196;
chunk__18138 = G__18197;
count__18139 = G__18198;
i__18140 = G__18199;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18137);
if(temp__4657__auto____$1){
var seq__18137__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18137__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18137__$1);
var G__18200 = cljs.core.chunk_rest(seq__18137__$1);
var G__18201 = c__8792__auto__;
var G__18202 = cljs.core.count(c__8792__auto__);
var G__18203 = (0);
seq__18137 = G__18200;
chunk__18138 = G__18201;
count__18139 = G__18202;
i__18140 = G__18203;
continue;
} else {
var role = cljs.core.first(seq__18137__$1);
var temp__4657__auto___18204__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18204__$2)){
var spec_18205 = temp__4657__auto___18204__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18205)], 0));
} else {
}

var G__18206 = cljs.core.next(seq__18137__$1);
var G__18207 = null;
var G__18208 = (0);
var G__18209 = (0);
seq__18137 = G__18206;
chunk__18138 = G__18207;
count__18139 = G__18208;
i__18140 = G__18209;
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
