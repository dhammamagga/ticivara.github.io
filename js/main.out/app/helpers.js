// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.session');
goog.require('markdown.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('decimal.core');
goog.require('app.canvas');
goog.require('app.state');
goog.require('app.text');
app.helpers.nav_BANG_ = (function app$helpers$nav_BANG_(loc){
return window.location.hash = loc;
});
app.helpers.page_content_style = (function app$helpers$page_content_style(dom_sel){
var seq__15924_15956 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$table], null)))));
var chunk__15925_15957 = null;
var count__15926_15958 = (0);
var i__15927_15959 = (0);
while(true){
if((i__15927_15959 < count__15926_15958)){
var table_15960 = chunk__15925_15957.cljs$core$IIndexed$_nth$arity$2(null,i__15927_15959);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15960,cljs.core.cst$kw$table);

var G__15961 = seq__15924_15956;
var G__15962 = chunk__15925_15957;
var G__15963 = count__15926_15958;
var G__15964 = (i__15927_15959 + (1));
seq__15924_15956 = G__15961;
chunk__15925_15957 = G__15962;
count__15926_15958 = G__15963;
i__15927_15959 = G__15964;
continue;
} else {
var temp__4657__auto___15965 = cljs.core.seq(seq__15924_15956);
if(temp__4657__auto___15965){
var seq__15924_15966__$1 = temp__4657__auto___15965;
if(cljs.core.chunked_seq_QMARK_(seq__15924_15966__$1)){
var c__8792__auto___15967 = cljs.core.chunk_first(seq__15924_15966__$1);
var G__15968 = cljs.core.chunk_rest(seq__15924_15966__$1);
var G__15969 = c__8792__auto___15967;
var G__15970 = cljs.core.count(c__8792__auto___15967);
var G__15971 = (0);
seq__15924_15956 = G__15968;
chunk__15925_15957 = G__15969;
count__15926_15958 = G__15970;
i__15927_15959 = G__15971;
continue;
} else {
var table_15972 = cljs.core.first(seq__15924_15966__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15972,cljs.core.cst$kw$table);

var G__15973 = cljs.core.next(seq__15924_15966__$1);
var G__15974 = null;
var G__15975 = (0);
var G__15976 = (0);
seq__15924_15956 = G__15973;
chunk__15925_15957 = G__15974;
count__15926_15958 = G__15975;
i__15927_15959 = G__15976;
continue;
}
} else {
}
}
break;
}

var seq__15928_15977 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h1], null)))));
var chunk__15929_15978 = null;
var count__15930_15979 = (0);
var i__15931_15980 = (0);
while(true){
if((i__15931_15980 < count__15930_15979)){
var header_15981 = chunk__15929_15978.cljs$core$IIndexed$_nth$arity$2(null,i__15931_15980);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15981,cljs.core.cst$kw$s_DASH_title);

var G__15982 = seq__15928_15977;
var G__15983 = chunk__15929_15978;
var G__15984 = count__15930_15979;
var G__15985 = (i__15931_15980 + (1));
seq__15928_15977 = G__15982;
chunk__15929_15978 = G__15983;
count__15930_15979 = G__15984;
i__15931_15980 = G__15985;
continue;
} else {
var temp__4657__auto___15986 = cljs.core.seq(seq__15928_15977);
if(temp__4657__auto___15986){
var seq__15928_15987__$1 = temp__4657__auto___15986;
if(cljs.core.chunked_seq_QMARK_(seq__15928_15987__$1)){
var c__8792__auto___15988 = cljs.core.chunk_first(seq__15928_15987__$1);
var G__15989 = cljs.core.chunk_rest(seq__15928_15987__$1);
var G__15990 = c__8792__auto___15988;
var G__15991 = cljs.core.count(c__8792__auto___15988);
var G__15992 = (0);
seq__15928_15977 = G__15989;
chunk__15929_15978 = G__15990;
count__15930_15979 = G__15991;
i__15931_15980 = G__15992;
continue;
} else {
var header_15993 = cljs.core.first(seq__15928_15987__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15993,cljs.core.cst$kw$s_DASH_title);

var G__15994 = cljs.core.next(seq__15928_15987__$1);
var G__15995 = null;
var G__15996 = (0);
var G__15997 = (0);
seq__15928_15977 = G__15994;
chunk__15929_15978 = G__15995;
count__15930_15979 = G__15996;
i__15931_15980 = G__15997;
continue;
}
} else {
}
}
break;
}

var seq__15932_15998 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h2], null)))));
var chunk__15933_15999 = null;
var count__15934_16000 = (0);
var i__15935_16001 = (0);
while(true){
if((i__15935_16001 < count__15934_16000)){
var header_16002 = chunk__15933_15999.cljs$core$IIndexed$_nth$arity$2(null,i__15935_16001);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16002,cljs.core.cst$kw$s_DASH_title);

var G__16003 = seq__15932_15998;
var G__16004 = chunk__15933_15999;
var G__16005 = count__15934_16000;
var G__16006 = (i__15935_16001 + (1));
seq__15932_15998 = G__16003;
chunk__15933_15999 = G__16004;
count__15934_16000 = G__16005;
i__15935_16001 = G__16006;
continue;
} else {
var temp__4657__auto___16007 = cljs.core.seq(seq__15932_15998);
if(temp__4657__auto___16007){
var seq__15932_16008__$1 = temp__4657__auto___16007;
if(cljs.core.chunked_seq_QMARK_(seq__15932_16008__$1)){
var c__8792__auto___16009 = cljs.core.chunk_first(seq__15932_16008__$1);
var G__16010 = cljs.core.chunk_rest(seq__15932_16008__$1);
var G__16011 = c__8792__auto___16009;
var G__16012 = cljs.core.count(c__8792__auto___16009);
var G__16013 = (0);
seq__15932_15998 = G__16010;
chunk__15933_15999 = G__16011;
count__15934_16000 = G__16012;
i__15935_16001 = G__16013;
continue;
} else {
var header_16014 = cljs.core.first(seq__15932_16008__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16014,cljs.core.cst$kw$s_DASH_title);

var G__16015 = cljs.core.next(seq__15932_16008__$1);
var G__16016 = null;
var G__16017 = (0);
var G__16018 = (0);
seq__15932_15998 = G__16015;
chunk__15933_15999 = G__16016;
count__15934_16000 = G__16017;
i__15935_16001 = G__16018;
continue;
}
} else {
}
}
break;
}

var seq__15936_16019 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h3], null)))));
var chunk__15937_16020 = null;
var count__15938_16021 = (0);
var i__15939_16022 = (0);
while(true){
if((i__15939_16022 < count__15938_16021)){
var header_16023 = chunk__15937_16020.cljs$core$IIndexed$_nth$arity$2(null,i__15939_16022);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16023,cljs.core.cst$kw$s_DASH_title);

var G__16024 = seq__15936_16019;
var G__16025 = chunk__15937_16020;
var G__16026 = count__15938_16021;
var G__16027 = (i__15939_16022 + (1));
seq__15936_16019 = G__16024;
chunk__15937_16020 = G__16025;
count__15938_16021 = G__16026;
i__15939_16022 = G__16027;
continue;
} else {
var temp__4657__auto___16028 = cljs.core.seq(seq__15936_16019);
if(temp__4657__auto___16028){
var seq__15936_16029__$1 = temp__4657__auto___16028;
if(cljs.core.chunked_seq_QMARK_(seq__15936_16029__$1)){
var c__8792__auto___16030 = cljs.core.chunk_first(seq__15936_16029__$1);
var G__16031 = cljs.core.chunk_rest(seq__15936_16029__$1);
var G__16032 = c__8792__auto___16030;
var G__16033 = cljs.core.count(c__8792__auto___16030);
var G__16034 = (0);
seq__15936_16019 = G__16031;
chunk__15937_16020 = G__16032;
count__15938_16021 = G__16033;
i__15939_16022 = G__16034;
continue;
} else {
var header_16035 = cljs.core.first(seq__15936_16029__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16035,cljs.core.cst$kw$s_DASH_title);

var G__16036 = cljs.core.next(seq__15936_16029__$1);
var G__16037 = null;
var G__16038 = (0);
var G__16039 = (0);
seq__15936_16019 = G__16036;
chunk__15937_16020 = G__16037;
count__15938_16021 = G__16038;
i__15939_16022 = G__16039;
continue;
}
} else {
}
}
break;
}

var seq__15940_16040 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h4], null)))));
var chunk__15941_16041 = null;
var count__15942_16042 = (0);
var i__15943_16043 = (0);
while(true){
if((i__15943_16043 < count__15942_16042)){
var header_16044 = chunk__15941_16041.cljs$core$IIndexed$_nth$arity$2(null,i__15943_16043);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16044,cljs.core.cst$kw$s_DASH_title);

var G__16045 = seq__15940_16040;
var G__16046 = chunk__15941_16041;
var G__16047 = count__15942_16042;
var G__16048 = (i__15943_16043 + (1));
seq__15940_16040 = G__16045;
chunk__15941_16041 = G__16046;
count__15942_16042 = G__16047;
i__15943_16043 = G__16048;
continue;
} else {
var temp__4657__auto___16049 = cljs.core.seq(seq__15940_16040);
if(temp__4657__auto___16049){
var seq__15940_16050__$1 = temp__4657__auto___16049;
if(cljs.core.chunked_seq_QMARK_(seq__15940_16050__$1)){
var c__8792__auto___16051 = cljs.core.chunk_first(seq__15940_16050__$1);
var G__16052 = cljs.core.chunk_rest(seq__15940_16050__$1);
var G__16053 = c__8792__auto___16051;
var G__16054 = cljs.core.count(c__8792__auto___16051);
var G__16055 = (0);
seq__15940_16040 = G__16052;
chunk__15941_16041 = G__16053;
count__15942_16042 = G__16054;
i__15943_16043 = G__16055;
continue;
} else {
var header_16056 = cljs.core.first(seq__15940_16050__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16056,cljs.core.cst$kw$s_DASH_title);

var G__16057 = cljs.core.next(seq__15940_16050__$1);
var G__16058 = null;
var G__16059 = (0);
var G__16060 = (0);
seq__15940_16040 = G__16057;
chunk__15941_16041 = G__16058;
count__15942_16042 = G__16059;
i__15943_16043 = G__16060;
continue;
}
} else {
}
}
break;
}

var seq__15944_16061 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h5], null)))));
var chunk__15945_16062 = null;
var count__15946_16063 = (0);
var i__15947_16064 = (0);
while(true){
if((i__15947_16064 < count__15946_16063)){
var header_16065 = chunk__15945_16062.cljs$core$IIndexed$_nth$arity$2(null,i__15947_16064);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16065,cljs.core.cst$kw$s_DASH_title);

var G__16066 = seq__15944_16061;
var G__16067 = chunk__15945_16062;
var G__16068 = count__15946_16063;
var G__16069 = (i__15947_16064 + (1));
seq__15944_16061 = G__16066;
chunk__15945_16062 = G__16067;
count__15946_16063 = G__16068;
i__15947_16064 = G__16069;
continue;
} else {
var temp__4657__auto___16070 = cljs.core.seq(seq__15944_16061);
if(temp__4657__auto___16070){
var seq__15944_16071__$1 = temp__4657__auto___16070;
if(cljs.core.chunked_seq_QMARK_(seq__15944_16071__$1)){
var c__8792__auto___16072 = cljs.core.chunk_first(seq__15944_16071__$1);
var G__16073 = cljs.core.chunk_rest(seq__15944_16071__$1);
var G__16074 = c__8792__auto___16072;
var G__16075 = cljs.core.count(c__8792__auto___16072);
var G__16076 = (0);
seq__15944_16061 = G__16073;
chunk__15945_16062 = G__16074;
count__15946_16063 = G__16075;
i__15947_16064 = G__16076;
continue;
} else {
var header_16077 = cljs.core.first(seq__15944_16071__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16077,cljs.core.cst$kw$s_DASH_title);

var G__16078 = cljs.core.next(seq__15944_16071__$1);
var G__16079 = null;
var G__16080 = (0);
var G__16081 = (0);
seq__15944_16061 = G__16078;
chunk__15945_16062 = G__16079;
count__15946_16063 = G__16080;
i__15947_16064 = G__16081;
continue;
}
} else {
}
}
break;
}

var seq__15948_16082 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h6], null)))));
var chunk__15949_16083 = null;
var count__15950_16084 = (0);
var i__15951_16085 = (0);
while(true){
if((i__15951_16085 < count__15950_16084)){
var header_16086 = chunk__15949_16083.cljs$core$IIndexed$_nth$arity$2(null,i__15951_16085);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16086,cljs.core.cst$kw$s_DASH_title);

var G__16087 = seq__15948_16082;
var G__16088 = chunk__15949_16083;
var G__16089 = count__15950_16084;
var G__16090 = (i__15951_16085 + (1));
seq__15948_16082 = G__16087;
chunk__15949_16083 = G__16088;
count__15950_16084 = G__16089;
i__15951_16085 = G__16090;
continue;
} else {
var temp__4657__auto___16091 = cljs.core.seq(seq__15948_16082);
if(temp__4657__auto___16091){
var seq__15948_16092__$1 = temp__4657__auto___16091;
if(cljs.core.chunked_seq_QMARK_(seq__15948_16092__$1)){
var c__8792__auto___16093 = cljs.core.chunk_first(seq__15948_16092__$1);
var G__16094 = cljs.core.chunk_rest(seq__15948_16092__$1);
var G__16095 = c__8792__auto___16093;
var G__16096 = cljs.core.count(c__8792__auto___16093);
var G__16097 = (0);
seq__15948_16082 = G__16094;
chunk__15949_16083 = G__16095;
count__15950_16084 = G__16096;
i__15951_16085 = G__16097;
continue;
} else {
var header_16098 = cljs.core.first(seq__15948_16092__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16098,cljs.core.cst$kw$s_DASH_title);

var G__16099 = cljs.core.next(seq__15948_16092__$1);
var G__16100 = null;
var G__16101 = (0);
var G__16102 = (0);
seq__15948_16082 = G__16099;
chunk__15949_16083 = G__16100;
count__15950_16084 = G__16101;
i__15951_16085 = G__16102;
continue;
}
} else {
}
}
break;
}

var seq__15952 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("p a img")));
var chunk__15953 = null;
var count__15954 = (0);
var i__15955 = (0);
while(true){
if((i__15955 < count__15954)){
var imagelink = chunk__15953.cljs$core$IIndexed$_nth$arity$2(null,i__15955);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16103 = seq__15952;
var G__16104 = chunk__15953;
var G__16105 = count__15954;
var G__16106 = (i__15955 + (1));
seq__15952 = G__16103;
chunk__15953 = G__16104;
count__15954 = G__16105;
i__15955 = G__16106;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15952);
if(temp__4657__auto__){
var seq__15952__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15952__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15952__$1);
var G__16107 = cljs.core.chunk_rest(seq__15952__$1);
var G__16108 = c__8792__auto__;
var G__16109 = cljs.core.count(c__8792__auto__);
var G__16110 = (0);
seq__15952 = G__16107;
chunk__15953 = G__16108;
count__15954 = G__16109;
i__15955 = G__16110;
continue;
} else {
var imagelink = cljs.core.first(seq__15952__$1);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16111 = cljs.core.next(seq__15952__$1);
var G__16112 = null;
var G__16113 = (0);
var G__16114 = (0);
seq__15952 = G__16111;
chunk__15953 = G__16112;
count__15954 = G__16113;
i__15955 = G__16114;
continue;
}
} else {
return null;
}
}
break;
}
});
app.helpers.render_markdown = (function app$helpers$render_markdown(){
var seq__16115 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__16116 = null;
var count__16117 = (0);
var i__16118 = (0);
while(true){
if((i__16118 < count__16117)){
var c = chunk__16116.cljs$core$IIndexed$_nth$arity$2(null,i__16118);
var txt_16119 = (c["innerHTML"]);
var html_16120 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16119,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16120);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16121 = seq__16115;
var G__16122 = chunk__16116;
var G__16123 = count__16117;
var G__16124 = (i__16118 + (1));
seq__16115 = G__16121;
chunk__16116 = G__16122;
count__16117 = G__16123;
i__16118 = G__16124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16115);
if(temp__4657__auto__){
var seq__16115__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16115__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16115__$1);
var G__16125 = cljs.core.chunk_rest(seq__16115__$1);
var G__16126 = c__8792__auto__;
var G__16127 = cljs.core.count(c__8792__auto__);
var G__16128 = (0);
seq__16115 = G__16125;
chunk__16116 = G__16126;
count__16117 = G__16127;
i__16118 = G__16128;
continue;
} else {
var c = cljs.core.first(seq__16115__$1);
var txt_16129 = (c["innerHTML"]);
var html_16130 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16129,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16130);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16131 = cljs.core.next(seq__16115__$1);
var G__16132 = null;
var G__16133 = (0);
var G__16134 = (0);
seq__16115 = G__16131;
chunk__16116 = G__16132;
count__16117 = G__16133;
i__16118 = G__16134;
continue;
}
} else {
return null;
}
}
break;
}
});
app.helpers.download_pdf = (function app$helpers$download_pdf(dom_id,title,page_margins){
var canvas_dom = document.querySelector(dommy.core.selector(dom_id));
var img = canvas_dom.toDataURL();
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,page_margins,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,img,cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});
app.helpers.download_pdf_fourpage = (function app$helpers$download_pdf_fourpage(dom_ids,title,page_margins){
var canvas_doms = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((0)) : dom_ids.call(null,(0))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((1)) : dom_ids.call(null,(1))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((2)) : dom_ids.call(null,(2))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((3)) : dom_ids.call(null,(3)))))], null);
var imgs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((0)) : canvas_doms.call(null,(0))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((1)) : canvas_doms.call(null,(1))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((2)) : canvas_doms.call(null,(2))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((3)) : canvas_doms.call(null,(3))).toDataURL()], null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,page_margins,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((0)) : imgs.call(null,(0))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((1)) : imgs.call(null,(1))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((2)) : imgs.call(null,(2))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((3)) : imgs.call(null,(3))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});
app.helpers.init_canvas = (function app$helpers$init_canvas(dom_id,svg_path){
var canvas_dom = document.querySelector(dommy.core.selector(dom_id));
var monet_canvas = app.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = app.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
(img["src"] = svg_path);

(img["onload"] = ((function (canvas_dom,monet_canvas,ctx,img){
return (function (){
return app.canvas.draw_once(monet_canvas);
});})(canvas_dom,monet_canvas,ctx,img))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [monet_canvas,img], null);
});
app.helpers.num_pad = (function app$helpers$num_pad(n){
var x = decimal.core.decimal(n);
var s = decimal.core.to_string(decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2(x,(1)));
var res = (cljs.core.truth_(cljs.core.re_find(/\./,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),".0"].join(''));
return res;
});
app.helpers.calc_shrinking_lengths = (function app$helpers$calc_shrinking_lengths(robe,khandhas){
var final_width = (function (){var G__16135 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16135);
})();
var final_height = (function (){var G__16136 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16136);
})();
var buffer_width = (function (){var G__16137 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16137);
})();
var kusi_width = (function (){var G__16138 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16138);
})();
var orig_border_width = (function (){var G__16139 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16139);
})();
var vertical_buffer_width = (function (){var G__16140 = (((cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) == null))?cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe):cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe));
return Number(G__16140);
})();
var inner_width = (final_width * ((1) + (cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) / (100))));
var inner_height = (final_height * ((1) + (cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(robe) / (100))));
var cut_width = (inner_width + ((2) * buffer_width));
var cut_height = (inner_height + ((2) * vertical_buffer_width));
var orig_mandala_width = (((final_width - ((2) * orig_border_width)) - (((-1) + khandhas) * kusi_width)) / khandhas);
var orig_mandala_height = (((final_height - ((2) * orig_border_width)) - ((2) * kusi_width)) / (3));
var b2m_w = (orig_border_width / orig_mandala_width);
var b2m_h = (orig_border_width / orig_mandala_height);
var rem_w = (inner_width - (((-1) + khandhas) * kusi_width));
var rem_h = (inner_height - ((2) * kusi_width));
var mandala_width = (rem_w / (khandhas + ((2) * b2m_w)));
var mandala_height = (rem_h / ((3) + ((2) * b2m_h)));
var border_width = (mandala_width * b2m_w);
var border_height = (mandala_height * b2m_h);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cut_width,cut_height,mandala_width,mandala_height,border_width,border_height], null);
});
app.helpers.calc_sabong_shrinking_lengths = (function app$helpers$calc_sabong_shrinking_lengths(robe){
return app.helpers.calc_shrinking_lengths(robe,(5));
});
app.helpers.calc_civara_shrinking_lengths = (function app$helpers$calc_civara_shrinking_lengths(robe){
return app.helpers.calc_shrinking_lengths(robe,(9));
});
app.helpers.calc_sanghati_shrinking_lengths = (function app$helpers$calc_sanghati_shrinking_lengths(robe){
return app.helpers.calc_shrinking_lengths(robe,(9));
});
app.helpers.draw_text = (function app$helpers$draw_text(ctx,s,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
app.canvas.font_style(ctx,"28px \"Fira Sans\"");

app.canvas.fill_style(ctx,"#000000");

return app.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});
app.helpers.draw_text_title = (function app$helpers$draw_text_title(ctx,s,size,x,y,pattern_scale,pos_text_offset_x,pos_text_offset_y,pos_pattern_height){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
app.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

app.canvas.fill_style(ctx,"#000000");

return app.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});
app.helpers.href_to = (function app$helpers$href_to(page){
return ["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null)))].join(''),(1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('');
});
app.helpers.this_page_str = (function app$helpers$this_page_str(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$page))].join(''),(1));
});
