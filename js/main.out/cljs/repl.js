// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18106){
var map__18107 = p__18106;
var map__18107__$1 = ((((!((map__18107 == null)))?((((map__18107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18107):map__18107);
var m = map__18107__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18107__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18107__$1,cljs.core.cst$kw$name);
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
var seq__18109_18131 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18110_18132 = null;
var count__18111_18133 = (0);
var i__18112_18134 = (0);
while(true){
if((i__18112_18134 < count__18111_18133)){
var f_18135 = chunk__18110_18132.cljs$core$IIndexed$_nth$arity$2(null,i__18112_18134);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18135], 0));

var G__18136 = seq__18109_18131;
var G__18137 = chunk__18110_18132;
var G__18138 = count__18111_18133;
var G__18139 = (i__18112_18134 + (1));
seq__18109_18131 = G__18136;
chunk__18110_18132 = G__18137;
count__18111_18133 = G__18138;
i__18112_18134 = G__18139;
continue;
} else {
var temp__4657__auto___18140 = cljs.core.seq(seq__18109_18131);
if(temp__4657__auto___18140){
var seq__18109_18141__$1 = temp__4657__auto___18140;
if(cljs.core.chunked_seq_QMARK_(seq__18109_18141__$1)){
var c__8792__auto___18142 = cljs.core.chunk_first(seq__18109_18141__$1);
var G__18143 = cljs.core.chunk_rest(seq__18109_18141__$1);
var G__18144 = c__8792__auto___18142;
var G__18145 = cljs.core.count(c__8792__auto___18142);
var G__18146 = (0);
seq__18109_18131 = G__18143;
chunk__18110_18132 = G__18144;
count__18111_18133 = G__18145;
i__18112_18134 = G__18146;
continue;
} else {
var f_18147 = cljs.core.first(seq__18109_18141__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18147], 0));

var G__18148 = cljs.core.next(seq__18109_18141__$1);
var G__18149 = null;
var G__18150 = (0);
var G__18151 = (0);
seq__18109_18131 = G__18148;
chunk__18110_18132 = G__18149;
count__18111_18133 = G__18150;
i__18112_18134 = G__18151;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18152 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18152], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18152)))?cljs.core.second(arglists_18152):arglists_18152)], 0));
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
var seq__18113_18153 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18114_18154 = null;
var count__18115_18155 = (0);
var i__18116_18156 = (0);
while(true){
if((i__18116_18156 < count__18115_18155)){
var vec__18117_18157 = chunk__18114_18154.cljs$core$IIndexed$_nth$arity$2(null,i__18116_18156);
var name_18158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117_18157,(0),null);
var map__18120_18159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117_18157,(1),null);
var map__18120_18160__$1 = ((((!((map__18120_18159 == null)))?((((map__18120_18159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18120_18159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18120_18159):map__18120_18159);
var doc_18161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18120_18160__$1,cljs.core.cst$kw$doc);
var arglists_18162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18120_18160__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18158], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18162], 0));

if(cljs.core.truth_(doc_18161)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18161], 0));
} else {
}

var G__18163 = seq__18113_18153;
var G__18164 = chunk__18114_18154;
var G__18165 = count__18115_18155;
var G__18166 = (i__18116_18156 + (1));
seq__18113_18153 = G__18163;
chunk__18114_18154 = G__18164;
count__18115_18155 = G__18165;
i__18116_18156 = G__18166;
continue;
} else {
var temp__4657__auto___18167 = cljs.core.seq(seq__18113_18153);
if(temp__4657__auto___18167){
var seq__18113_18168__$1 = temp__4657__auto___18167;
if(cljs.core.chunked_seq_QMARK_(seq__18113_18168__$1)){
var c__8792__auto___18169 = cljs.core.chunk_first(seq__18113_18168__$1);
var G__18170 = cljs.core.chunk_rest(seq__18113_18168__$1);
var G__18171 = c__8792__auto___18169;
var G__18172 = cljs.core.count(c__8792__auto___18169);
var G__18173 = (0);
seq__18113_18153 = G__18170;
chunk__18114_18154 = G__18171;
count__18115_18155 = G__18172;
i__18116_18156 = G__18173;
continue;
} else {
var vec__18122_18174 = cljs.core.first(seq__18113_18168__$1);
var name_18175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122_18174,(0),null);
var map__18125_18176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122_18174,(1),null);
var map__18125_18177__$1 = ((((!((map__18125_18176 == null)))?((((map__18125_18176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18125_18176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18125_18176):map__18125_18176);
var doc_18178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125_18177__$1,cljs.core.cst$kw$doc);
var arglists_18179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125_18177__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18175], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18179], 0));

if(cljs.core.truth_(doc_18178)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18178], 0));
} else {
}

var G__18180 = cljs.core.next(seq__18113_18168__$1);
var G__18181 = null;
var G__18182 = (0);
var G__18183 = (0);
seq__18113_18153 = G__18180;
chunk__18114_18154 = G__18181;
count__18115_18155 = G__18182;
i__18116_18156 = G__18183;
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

var seq__18127 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18128 = null;
var count__18129 = (0);
var i__18130 = (0);
while(true){
if((i__18130 < count__18129)){
var role = chunk__18128.cljs$core$IIndexed$_nth$arity$2(null,i__18130);
var temp__4657__auto___18184__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18184__$1)){
var spec_18185 = temp__4657__auto___18184__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18185)], 0));
} else {
}

var G__18186 = seq__18127;
var G__18187 = chunk__18128;
var G__18188 = count__18129;
var G__18189 = (i__18130 + (1));
seq__18127 = G__18186;
chunk__18128 = G__18187;
count__18129 = G__18188;
i__18130 = G__18189;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18127);
if(temp__4657__auto____$1){
var seq__18127__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18127__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18127__$1);
var G__18190 = cljs.core.chunk_rest(seq__18127__$1);
var G__18191 = c__8792__auto__;
var G__18192 = cljs.core.count(c__8792__auto__);
var G__18193 = (0);
seq__18127 = G__18190;
chunk__18128 = G__18191;
count__18129 = G__18192;
i__18130 = G__18193;
continue;
} else {
var role = cljs.core.first(seq__18127__$1);
var temp__4657__auto___18194__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18194__$2)){
var spec_18195 = temp__4657__auto___18194__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18195)], 0));
} else {
}

var G__18196 = cljs.core.next(seq__18127__$1);
var G__18197 = null;
var G__18198 = (0);
var G__18199 = (0);
seq__18127 = G__18196;
chunk__18128 = G__18197;
count__18129 = G__18198;
i__18130 = G__18199;
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
