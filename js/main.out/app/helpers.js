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
var seq__15995_16027 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$table], null)))));
var chunk__15996_16028 = null;
var count__15997_16029 = (0);
var i__15998_16030 = (0);
while(true){
if((i__15998_16030 < count__15997_16029)){
var table_16031 = chunk__15996_16028.cljs$core$IIndexed$_nth$arity$2(null,i__15998_16030);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16031,cljs.core.cst$kw$table);

var G__16032 = seq__15995_16027;
var G__16033 = chunk__15996_16028;
var G__16034 = count__15997_16029;
var G__16035 = (i__15998_16030 + (1));
seq__15995_16027 = G__16032;
chunk__15996_16028 = G__16033;
count__15997_16029 = G__16034;
i__15998_16030 = G__16035;
continue;
} else {
var temp__4657__auto___16036 = cljs.core.seq(seq__15995_16027);
if(temp__4657__auto___16036){
var seq__15995_16037__$1 = temp__4657__auto___16036;
if(cljs.core.chunked_seq_QMARK_(seq__15995_16037__$1)){
var c__8792__auto___16038 = cljs.core.chunk_first(seq__15995_16037__$1);
var G__16039 = cljs.core.chunk_rest(seq__15995_16037__$1);
var G__16040 = c__8792__auto___16038;
var G__16041 = cljs.core.count(c__8792__auto___16038);
var G__16042 = (0);
seq__15995_16027 = G__16039;
chunk__15996_16028 = G__16040;
count__15997_16029 = G__16041;
i__15998_16030 = G__16042;
continue;
} else {
var table_16043 = cljs.core.first(seq__15995_16037__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16043,cljs.core.cst$kw$table);

var G__16044 = cljs.core.next(seq__15995_16037__$1);
var G__16045 = null;
var G__16046 = (0);
var G__16047 = (0);
seq__15995_16027 = G__16044;
chunk__15996_16028 = G__16045;
count__15997_16029 = G__16046;
i__15998_16030 = G__16047;
continue;
}
} else {
}
}
break;
}

var seq__15999_16048 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h1], null)))));
var chunk__16000_16049 = null;
var count__16001_16050 = (0);
var i__16002_16051 = (0);
while(true){
if((i__16002_16051 < count__16001_16050)){
var header_16052 = chunk__16000_16049.cljs$core$IIndexed$_nth$arity$2(null,i__16002_16051);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16052,cljs.core.cst$kw$s_DASH_title);

var G__16053 = seq__15999_16048;
var G__16054 = chunk__16000_16049;
var G__16055 = count__16001_16050;
var G__16056 = (i__16002_16051 + (1));
seq__15999_16048 = G__16053;
chunk__16000_16049 = G__16054;
count__16001_16050 = G__16055;
i__16002_16051 = G__16056;
continue;
} else {
var temp__4657__auto___16057 = cljs.core.seq(seq__15999_16048);
if(temp__4657__auto___16057){
var seq__15999_16058__$1 = temp__4657__auto___16057;
if(cljs.core.chunked_seq_QMARK_(seq__15999_16058__$1)){
var c__8792__auto___16059 = cljs.core.chunk_first(seq__15999_16058__$1);
var G__16060 = cljs.core.chunk_rest(seq__15999_16058__$1);
var G__16061 = c__8792__auto___16059;
var G__16062 = cljs.core.count(c__8792__auto___16059);
var G__16063 = (0);
seq__15999_16048 = G__16060;
chunk__16000_16049 = G__16061;
count__16001_16050 = G__16062;
i__16002_16051 = G__16063;
continue;
} else {
var header_16064 = cljs.core.first(seq__15999_16058__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16064,cljs.core.cst$kw$s_DASH_title);

var G__16065 = cljs.core.next(seq__15999_16058__$1);
var G__16066 = null;
var G__16067 = (0);
var G__16068 = (0);
seq__15999_16048 = G__16065;
chunk__16000_16049 = G__16066;
count__16001_16050 = G__16067;
i__16002_16051 = G__16068;
continue;
}
} else {
}
}
break;
}

var seq__16003_16069 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h2], null)))));
var chunk__16004_16070 = null;
var count__16005_16071 = (0);
var i__16006_16072 = (0);
while(true){
if((i__16006_16072 < count__16005_16071)){
var header_16073 = chunk__16004_16070.cljs$core$IIndexed$_nth$arity$2(null,i__16006_16072);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16073,cljs.core.cst$kw$s_DASH_title);

var G__16074 = seq__16003_16069;
var G__16075 = chunk__16004_16070;
var G__16076 = count__16005_16071;
var G__16077 = (i__16006_16072 + (1));
seq__16003_16069 = G__16074;
chunk__16004_16070 = G__16075;
count__16005_16071 = G__16076;
i__16006_16072 = G__16077;
continue;
} else {
var temp__4657__auto___16078 = cljs.core.seq(seq__16003_16069);
if(temp__4657__auto___16078){
var seq__16003_16079__$1 = temp__4657__auto___16078;
if(cljs.core.chunked_seq_QMARK_(seq__16003_16079__$1)){
var c__8792__auto___16080 = cljs.core.chunk_first(seq__16003_16079__$1);
var G__16081 = cljs.core.chunk_rest(seq__16003_16079__$1);
var G__16082 = c__8792__auto___16080;
var G__16083 = cljs.core.count(c__8792__auto___16080);
var G__16084 = (0);
seq__16003_16069 = G__16081;
chunk__16004_16070 = G__16082;
count__16005_16071 = G__16083;
i__16006_16072 = G__16084;
continue;
} else {
var header_16085 = cljs.core.first(seq__16003_16079__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16085,cljs.core.cst$kw$s_DASH_title);

var G__16086 = cljs.core.next(seq__16003_16079__$1);
var G__16087 = null;
var G__16088 = (0);
var G__16089 = (0);
seq__16003_16069 = G__16086;
chunk__16004_16070 = G__16087;
count__16005_16071 = G__16088;
i__16006_16072 = G__16089;
continue;
}
} else {
}
}
break;
}

var seq__16007_16090 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h3], null)))));
var chunk__16008_16091 = null;
var count__16009_16092 = (0);
var i__16010_16093 = (0);
while(true){
if((i__16010_16093 < count__16009_16092)){
var header_16094 = chunk__16008_16091.cljs$core$IIndexed$_nth$arity$2(null,i__16010_16093);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16094,cljs.core.cst$kw$s_DASH_title);

var G__16095 = seq__16007_16090;
var G__16096 = chunk__16008_16091;
var G__16097 = count__16009_16092;
var G__16098 = (i__16010_16093 + (1));
seq__16007_16090 = G__16095;
chunk__16008_16091 = G__16096;
count__16009_16092 = G__16097;
i__16010_16093 = G__16098;
continue;
} else {
var temp__4657__auto___16099 = cljs.core.seq(seq__16007_16090);
if(temp__4657__auto___16099){
var seq__16007_16100__$1 = temp__4657__auto___16099;
if(cljs.core.chunked_seq_QMARK_(seq__16007_16100__$1)){
var c__8792__auto___16101 = cljs.core.chunk_first(seq__16007_16100__$1);
var G__16102 = cljs.core.chunk_rest(seq__16007_16100__$1);
var G__16103 = c__8792__auto___16101;
var G__16104 = cljs.core.count(c__8792__auto___16101);
var G__16105 = (0);
seq__16007_16090 = G__16102;
chunk__16008_16091 = G__16103;
count__16009_16092 = G__16104;
i__16010_16093 = G__16105;
continue;
} else {
var header_16106 = cljs.core.first(seq__16007_16100__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16106,cljs.core.cst$kw$s_DASH_title);

var G__16107 = cljs.core.next(seq__16007_16100__$1);
var G__16108 = null;
var G__16109 = (0);
var G__16110 = (0);
seq__16007_16090 = G__16107;
chunk__16008_16091 = G__16108;
count__16009_16092 = G__16109;
i__16010_16093 = G__16110;
continue;
}
} else {
}
}
break;
}

var seq__16011_16111 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h4], null)))));
var chunk__16012_16112 = null;
var count__16013_16113 = (0);
var i__16014_16114 = (0);
while(true){
if((i__16014_16114 < count__16013_16113)){
var header_16115 = chunk__16012_16112.cljs$core$IIndexed$_nth$arity$2(null,i__16014_16114);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16115,cljs.core.cst$kw$s_DASH_title);

var G__16116 = seq__16011_16111;
var G__16117 = chunk__16012_16112;
var G__16118 = count__16013_16113;
var G__16119 = (i__16014_16114 + (1));
seq__16011_16111 = G__16116;
chunk__16012_16112 = G__16117;
count__16013_16113 = G__16118;
i__16014_16114 = G__16119;
continue;
} else {
var temp__4657__auto___16120 = cljs.core.seq(seq__16011_16111);
if(temp__4657__auto___16120){
var seq__16011_16121__$1 = temp__4657__auto___16120;
if(cljs.core.chunked_seq_QMARK_(seq__16011_16121__$1)){
var c__8792__auto___16122 = cljs.core.chunk_first(seq__16011_16121__$1);
var G__16123 = cljs.core.chunk_rest(seq__16011_16121__$1);
var G__16124 = c__8792__auto___16122;
var G__16125 = cljs.core.count(c__8792__auto___16122);
var G__16126 = (0);
seq__16011_16111 = G__16123;
chunk__16012_16112 = G__16124;
count__16013_16113 = G__16125;
i__16014_16114 = G__16126;
continue;
} else {
var header_16127 = cljs.core.first(seq__16011_16121__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16127,cljs.core.cst$kw$s_DASH_title);

var G__16128 = cljs.core.next(seq__16011_16121__$1);
var G__16129 = null;
var G__16130 = (0);
var G__16131 = (0);
seq__16011_16111 = G__16128;
chunk__16012_16112 = G__16129;
count__16013_16113 = G__16130;
i__16014_16114 = G__16131;
continue;
}
} else {
}
}
break;
}

var seq__16015_16132 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h5], null)))));
var chunk__16016_16133 = null;
var count__16017_16134 = (0);
var i__16018_16135 = (0);
while(true){
if((i__16018_16135 < count__16017_16134)){
var header_16136 = chunk__16016_16133.cljs$core$IIndexed$_nth$arity$2(null,i__16018_16135);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16136,cljs.core.cst$kw$s_DASH_title);

var G__16137 = seq__16015_16132;
var G__16138 = chunk__16016_16133;
var G__16139 = count__16017_16134;
var G__16140 = (i__16018_16135 + (1));
seq__16015_16132 = G__16137;
chunk__16016_16133 = G__16138;
count__16017_16134 = G__16139;
i__16018_16135 = G__16140;
continue;
} else {
var temp__4657__auto___16141 = cljs.core.seq(seq__16015_16132);
if(temp__4657__auto___16141){
var seq__16015_16142__$1 = temp__4657__auto___16141;
if(cljs.core.chunked_seq_QMARK_(seq__16015_16142__$1)){
var c__8792__auto___16143 = cljs.core.chunk_first(seq__16015_16142__$1);
var G__16144 = cljs.core.chunk_rest(seq__16015_16142__$1);
var G__16145 = c__8792__auto___16143;
var G__16146 = cljs.core.count(c__8792__auto___16143);
var G__16147 = (0);
seq__16015_16132 = G__16144;
chunk__16016_16133 = G__16145;
count__16017_16134 = G__16146;
i__16018_16135 = G__16147;
continue;
} else {
var header_16148 = cljs.core.first(seq__16015_16142__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16148,cljs.core.cst$kw$s_DASH_title);

var G__16149 = cljs.core.next(seq__16015_16142__$1);
var G__16150 = null;
var G__16151 = (0);
var G__16152 = (0);
seq__16015_16132 = G__16149;
chunk__16016_16133 = G__16150;
count__16017_16134 = G__16151;
i__16018_16135 = G__16152;
continue;
}
} else {
}
}
break;
}

var seq__16019_16153 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h6], null)))));
var chunk__16020_16154 = null;
var count__16021_16155 = (0);
var i__16022_16156 = (0);
while(true){
if((i__16022_16156 < count__16021_16155)){
var header_16157 = chunk__16020_16154.cljs$core$IIndexed$_nth$arity$2(null,i__16022_16156);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16157,cljs.core.cst$kw$s_DASH_title);

var G__16158 = seq__16019_16153;
var G__16159 = chunk__16020_16154;
var G__16160 = count__16021_16155;
var G__16161 = (i__16022_16156 + (1));
seq__16019_16153 = G__16158;
chunk__16020_16154 = G__16159;
count__16021_16155 = G__16160;
i__16022_16156 = G__16161;
continue;
} else {
var temp__4657__auto___16162 = cljs.core.seq(seq__16019_16153);
if(temp__4657__auto___16162){
var seq__16019_16163__$1 = temp__4657__auto___16162;
if(cljs.core.chunked_seq_QMARK_(seq__16019_16163__$1)){
var c__8792__auto___16164 = cljs.core.chunk_first(seq__16019_16163__$1);
var G__16165 = cljs.core.chunk_rest(seq__16019_16163__$1);
var G__16166 = c__8792__auto___16164;
var G__16167 = cljs.core.count(c__8792__auto___16164);
var G__16168 = (0);
seq__16019_16153 = G__16165;
chunk__16020_16154 = G__16166;
count__16021_16155 = G__16167;
i__16022_16156 = G__16168;
continue;
} else {
var header_16169 = cljs.core.first(seq__16019_16163__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16169,cljs.core.cst$kw$s_DASH_title);

var G__16170 = cljs.core.next(seq__16019_16163__$1);
var G__16171 = null;
var G__16172 = (0);
var G__16173 = (0);
seq__16019_16153 = G__16170;
chunk__16020_16154 = G__16171;
count__16021_16155 = G__16172;
i__16022_16156 = G__16173;
continue;
}
} else {
}
}
break;
}

var seq__16023 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("p a img")));
var chunk__16024 = null;
var count__16025 = (0);
var i__16026 = (0);
while(true){
if((i__16026 < count__16025)){
var imagelink = chunk__16024.cljs$core$IIndexed$_nth$arity$2(null,i__16026);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16174 = seq__16023;
var G__16175 = chunk__16024;
var G__16176 = count__16025;
var G__16177 = (i__16026 + (1));
seq__16023 = G__16174;
chunk__16024 = G__16175;
count__16025 = G__16176;
i__16026 = G__16177;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16023);
if(temp__4657__auto__){
var seq__16023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16023__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16023__$1);
var G__16178 = cljs.core.chunk_rest(seq__16023__$1);
var G__16179 = c__8792__auto__;
var G__16180 = cljs.core.count(c__8792__auto__);
var G__16181 = (0);
seq__16023 = G__16178;
chunk__16024 = G__16179;
count__16025 = G__16180;
i__16026 = G__16181;
continue;
} else {
var imagelink = cljs.core.first(seq__16023__$1);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16182 = cljs.core.next(seq__16023__$1);
var G__16183 = null;
var G__16184 = (0);
var G__16185 = (0);
seq__16023 = G__16182;
chunk__16024 = G__16183;
count__16025 = G__16184;
i__16026 = G__16185;
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
var seq__16186 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__16187 = null;
var count__16188 = (0);
var i__16189 = (0);
while(true){
if((i__16189 < count__16188)){
var c = chunk__16187.cljs$core$IIndexed$_nth$arity$2(null,i__16189);
var txt_16190 = (c["innerHTML"]);
var html_16191 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16190,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16191);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16192 = seq__16186;
var G__16193 = chunk__16187;
var G__16194 = count__16188;
var G__16195 = (i__16189 + (1));
seq__16186 = G__16192;
chunk__16187 = G__16193;
count__16188 = G__16194;
i__16189 = G__16195;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16186);
if(temp__4657__auto__){
var seq__16186__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16186__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16186__$1);
var G__16196 = cljs.core.chunk_rest(seq__16186__$1);
var G__16197 = c__8792__auto__;
var G__16198 = cljs.core.count(c__8792__auto__);
var G__16199 = (0);
seq__16186 = G__16196;
chunk__16187 = G__16197;
count__16188 = G__16198;
i__16189 = G__16199;
continue;
} else {
var c = cljs.core.first(seq__16186__$1);
var txt_16200 = (c["innerHTML"]);
var html_16201 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16200,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16201);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16202 = cljs.core.next(seq__16186__$1);
var G__16203 = null;
var G__16204 = (0);
var G__16205 = (0);
seq__16186 = G__16202;
chunk__16187 = G__16203;
count__16188 = G__16204;
i__16189 = G__16205;
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
var final_width = (function (){var G__16206 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16206);
})();
var final_height = (function (){var G__16207 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16207);
})();
var buffer_width = (function (){var G__16208 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16208);
})();
var kusi_width = (function (){var G__16209 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16209);
})();
var orig_border_width = (function (){var G__16210 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16210);
})();
var vertical_buffer_width = (function (){var G__16211 = (((cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) == null))?cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe):cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe));
return Number(G__16211);
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
