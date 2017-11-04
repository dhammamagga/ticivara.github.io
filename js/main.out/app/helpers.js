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
var seq__16004_16036 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$table], null)))));
var chunk__16005_16037 = null;
var count__16006_16038 = (0);
var i__16007_16039 = (0);
while(true){
if((i__16007_16039 < count__16006_16038)){
var table_16040 = chunk__16005_16037.cljs$core$IIndexed$_nth$arity$2(null,i__16007_16039);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16040,cljs.core.cst$kw$table);

var G__16041 = seq__16004_16036;
var G__16042 = chunk__16005_16037;
var G__16043 = count__16006_16038;
var G__16044 = (i__16007_16039 + (1));
seq__16004_16036 = G__16041;
chunk__16005_16037 = G__16042;
count__16006_16038 = G__16043;
i__16007_16039 = G__16044;
continue;
} else {
var temp__4657__auto___16045 = cljs.core.seq(seq__16004_16036);
if(temp__4657__auto___16045){
var seq__16004_16046__$1 = temp__4657__auto___16045;
if(cljs.core.chunked_seq_QMARK_(seq__16004_16046__$1)){
var c__8792__auto___16047 = cljs.core.chunk_first(seq__16004_16046__$1);
var G__16048 = cljs.core.chunk_rest(seq__16004_16046__$1);
var G__16049 = c__8792__auto___16047;
var G__16050 = cljs.core.count(c__8792__auto___16047);
var G__16051 = (0);
seq__16004_16036 = G__16048;
chunk__16005_16037 = G__16049;
count__16006_16038 = G__16050;
i__16007_16039 = G__16051;
continue;
} else {
var table_16052 = cljs.core.first(seq__16004_16046__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16052,cljs.core.cst$kw$table);

var G__16053 = cljs.core.next(seq__16004_16046__$1);
var G__16054 = null;
var G__16055 = (0);
var G__16056 = (0);
seq__16004_16036 = G__16053;
chunk__16005_16037 = G__16054;
count__16006_16038 = G__16055;
i__16007_16039 = G__16056;
continue;
}
} else {
}
}
break;
}

var seq__16008_16057 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h1], null)))));
var chunk__16009_16058 = null;
var count__16010_16059 = (0);
var i__16011_16060 = (0);
while(true){
if((i__16011_16060 < count__16010_16059)){
var header_16061 = chunk__16009_16058.cljs$core$IIndexed$_nth$arity$2(null,i__16011_16060);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16061,cljs.core.cst$kw$s_DASH_title);

var G__16062 = seq__16008_16057;
var G__16063 = chunk__16009_16058;
var G__16064 = count__16010_16059;
var G__16065 = (i__16011_16060 + (1));
seq__16008_16057 = G__16062;
chunk__16009_16058 = G__16063;
count__16010_16059 = G__16064;
i__16011_16060 = G__16065;
continue;
} else {
var temp__4657__auto___16066 = cljs.core.seq(seq__16008_16057);
if(temp__4657__auto___16066){
var seq__16008_16067__$1 = temp__4657__auto___16066;
if(cljs.core.chunked_seq_QMARK_(seq__16008_16067__$1)){
var c__8792__auto___16068 = cljs.core.chunk_first(seq__16008_16067__$1);
var G__16069 = cljs.core.chunk_rest(seq__16008_16067__$1);
var G__16070 = c__8792__auto___16068;
var G__16071 = cljs.core.count(c__8792__auto___16068);
var G__16072 = (0);
seq__16008_16057 = G__16069;
chunk__16009_16058 = G__16070;
count__16010_16059 = G__16071;
i__16011_16060 = G__16072;
continue;
} else {
var header_16073 = cljs.core.first(seq__16008_16067__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16073,cljs.core.cst$kw$s_DASH_title);

var G__16074 = cljs.core.next(seq__16008_16067__$1);
var G__16075 = null;
var G__16076 = (0);
var G__16077 = (0);
seq__16008_16057 = G__16074;
chunk__16009_16058 = G__16075;
count__16010_16059 = G__16076;
i__16011_16060 = G__16077;
continue;
}
} else {
}
}
break;
}

var seq__16012_16078 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h2], null)))));
var chunk__16013_16079 = null;
var count__16014_16080 = (0);
var i__16015_16081 = (0);
while(true){
if((i__16015_16081 < count__16014_16080)){
var header_16082 = chunk__16013_16079.cljs$core$IIndexed$_nth$arity$2(null,i__16015_16081);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16082,cljs.core.cst$kw$s_DASH_title);

var G__16083 = seq__16012_16078;
var G__16084 = chunk__16013_16079;
var G__16085 = count__16014_16080;
var G__16086 = (i__16015_16081 + (1));
seq__16012_16078 = G__16083;
chunk__16013_16079 = G__16084;
count__16014_16080 = G__16085;
i__16015_16081 = G__16086;
continue;
} else {
var temp__4657__auto___16087 = cljs.core.seq(seq__16012_16078);
if(temp__4657__auto___16087){
var seq__16012_16088__$1 = temp__4657__auto___16087;
if(cljs.core.chunked_seq_QMARK_(seq__16012_16088__$1)){
var c__8792__auto___16089 = cljs.core.chunk_first(seq__16012_16088__$1);
var G__16090 = cljs.core.chunk_rest(seq__16012_16088__$1);
var G__16091 = c__8792__auto___16089;
var G__16092 = cljs.core.count(c__8792__auto___16089);
var G__16093 = (0);
seq__16012_16078 = G__16090;
chunk__16013_16079 = G__16091;
count__16014_16080 = G__16092;
i__16015_16081 = G__16093;
continue;
} else {
var header_16094 = cljs.core.first(seq__16012_16088__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16094,cljs.core.cst$kw$s_DASH_title);

var G__16095 = cljs.core.next(seq__16012_16088__$1);
var G__16096 = null;
var G__16097 = (0);
var G__16098 = (0);
seq__16012_16078 = G__16095;
chunk__16013_16079 = G__16096;
count__16014_16080 = G__16097;
i__16015_16081 = G__16098;
continue;
}
} else {
}
}
break;
}

var seq__16016_16099 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h3], null)))));
var chunk__16017_16100 = null;
var count__16018_16101 = (0);
var i__16019_16102 = (0);
while(true){
if((i__16019_16102 < count__16018_16101)){
var header_16103 = chunk__16017_16100.cljs$core$IIndexed$_nth$arity$2(null,i__16019_16102);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16103,cljs.core.cst$kw$s_DASH_title);

var G__16104 = seq__16016_16099;
var G__16105 = chunk__16017_16100;
var G__16106 = count__16018_16101;
var G__16107 = (i__16019_16102 + (1));
seq__16016_16099 = G__16104;
chunk__16017_16100 = G__16105;
count__16018_16101 = G__16106;
i__16019_16102 = G__16107;
continue;
} else {
var temp__4657__auto___16108 = cljs.core.seq(seq__16016_16099);
if(temp__4657__auto___16108){
var seq__16016_16109__$1 = temp__4657__auto___16108;
if(cljs.core.chunked_seq_QMARK_(seq__16016_16109__$1)){
var c__8792__auto___16110 = cljs.core.chunk_first(seq__16016_16109__$1);
var G__16111 = cljs.core.chunk_rest(seq__16016_16109__$1);
var G__16112 = c__8792__auto___16110;
var G__16113 = cljs.core.count(c__8792__auto___16110);
var G__16114 = (0);
seq__16016_16099 = G__16111;
chunk__16017_16100 = G__16112;
count__16018_16101 = G__16113;
i__16019_16102 = G__16114;
continue;
} else {
var header_16115 = cljs.core.first(seq__16016_16109__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16115,cljs.core.cst$kw$s_DASH_title);

var G__16116 = cljs.core.next(seq__16016_16109__$1);
var G__16117 = null;
var G__16118 = (0);
var G__16119 = (0);
seq__16016_16099 = G__16116;
chunk__16017_16100 = G__16117;
count__16018_16101 = G__16118;
i__16019_16102 = G__16119;
continue;
}
} else {
}
}
break;
}

var seq__16020_16120 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h4], null)))));
var chunk__16021_16121 = null;
var count__16022_16122 = (0);
var i__16023_16123 = (0);
while(true){
if((i__16023_16123 < count__16022_16122)){
var header_16124 = chunk__16021_16121.cljs$core$IIndexed$_nth$arity$2(null,i__16023_16123);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16124,cljs.core.cst$kw$s_DASH_title);

var G__16125 = seq__16020_16120;
var G__16126 = chunk__16021_16121;
var G__16127 = count__16022_16122;
var G__16128 = (i__16023_16123 + (1));
seq__16020_16120 = G__16125;
chunk__16021_16121 = G__16126;
count__16022_16122 = G__16127;
i__16023_16123 = G__16128;
continue;
} else {
var temp__4657__auto___16129 = cljs.core.seq(seq__16020_16120);
if(temp__4657__auto___16129){
var seq__16020_16130__$1 = temp__4657__auto___16129;
if(cljs.core.chunked_seq_QMARK_(seq__16020_16130__$1)){
var c__8792__auto___16131 = cljs.core.chunk_first(seq__16020_16130__$1);
var G__16132 = cljs.core.chunk_rest(seq__16020_16130__$1);
var G__16133 = c__8792__auto___16131;
var G__16134 = cljs.core.count(c__8792__auto___16131);
var G__16135 = (0);
seq__16020_16120 = G__16132;
chunk__16021_16121 = G__16133;
count__16022_16122 = G__16134;
i__16023_16123 = G__16135;
continue;
} else {
var header_16136 = cljs.core.first(seq__16020_16130__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16136,cljs.core.cst$kw$s_DASH_title);

var G__16137 = cljs.core.next(seq__16020_16130__$1);
var G__16138 = null;
var G__16139 = (0);
var G__16140 = (0);
seq__16020_16120 = G__16137;
chunk__16021_16121 = G__16138;
count__16022_16122 = G__16139;
i__16023_16123 = G__16140;
continue;
}
} else {
}
}
break;
}

var seq__16024_16141 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h5], null)))));
var chunk__16025_16142 = null;
var count__16026_16143 = (0);
var i__16027_16144 = (0);
while(true){
if((i__16027_16144 < count__16026_16143)){
var header_16145 = chunk__16025_16142.cljs$core$IIndexed$_nth$arity$2(null,i__16027_16144);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16145,cljs.core.cst$kw$s_DASH_title);

var G__16146 = seq__16024_16141;
var G__16147 = chunk__16025_16142;
var G__16148 = count__16026_16143;
var G__16149 = (i__16027_16144 + (1));
seq__16024_16141 = G__16146;
chunk__16025_16142 = G__16147;
count__16026_16143 = G__16148;
i__16027_16144 = G__16149;
continue;
} else {
var temp__4657__auto___16150 = cljs.core.seq(seq__16024_16141);
if(temp__4657__auto___16150){
var seq__16024_16151__$1 = temp__4657__auto___16150;
if(cljs.core.chunked_seq_QMARK_(seq__16024_16151__$1)){
var c__8792__auto___16152 = cljs.core.chunk_first(seq__16024_16151__$1);
var G__16153 = cljs.core.chunk_rest(seq__16024_16151__$1);
var G__16154 = c__8792__auto___16152;
var G__16155 = cljs.core.count(c__8792__auto___16152);
var G__16156 = (0);
seq__16024_16141 = G__16153;
chunk__16025_16142 = G__16154;
count__16026_16143 = G__16155;
i__16027_16144 = G__16156;
continue;
} else {
var header_16157 = cljs.core.first(seq__16024_16151__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16157,cljs.core.cst$kw$s_DASH_title);

var G__16158 = cljs.core.next(seq__16024_16151__$1);
var G__16159 = null;
var G__16160 = (0);
var G__16161 = (0);
seq__16024_16141 = G__16158;
chunk__16025_16142 = G__16159;
count__16026_16143 = G__16160;
i__16027_16144 = G__16161;
continue;
}
} else {
}
}
break;
}

var seq__16028_16162 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h6], null)))));
var chunk__16029_16163 = null;
var count__16030_16164 = (0);
var i__16031_16165 = (0);
while(true){
if((i__16031_16165 < count__16030_16164)){
var header_16166 = chunk__16029_16163.cljs$core$IIndexed$_nth$arity$2(null,i__16031_16165);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16166,cljs.core.cst$kw$s_DASH_title);

var G__16167 = seq__16028_16162;
var G__16168 = chunk__16029_16163;
var G__16169 = count__16030_16164;
var G__16170 = (i__16031_16165 + (1));
seq__16028_16162 = G__16167;
chunk__16029_16163 = G__16168;
count__16030_16164 = G__16169;
i__16031_16165 = G__16170;
continue;
} else {
var temp__4657__auto___16171 = cljs.core.seq(seq__16028_16162);
if(temp__4657__auto___16171){
var seq__16028_16172__$1 = temp__4657__auto___16171;
if(cljs.core.chunked_seq_QMARK_(seq__16028_16172__$1)){
var c__8792__auto___16173 = cljs.core.chunk_first(seq__16028_16172__$1);
var G__16174 = cljs.core.chunk_rest(seq__16028_16172__$1);
var G__16175 = c__8792__auto___16173;
var G__16176 = cljs.core.count(c__8792__auto___16173);
var G__16177 = (0);
seq__16028_16162 = G__16174;
chunk__16029_16163 = G__16175;
count__16030_16164 = G__16176;
i__16031_16165 = G__16177;
continue;
} else {
var header_16178 = cljs.core.first(seq__16028_16172__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16178,cljs.core.cst$kw$s_DASH_title);

var G__16179 = cljs.core.next(seq__16028_16172__$1);
var G__16180 = null;
var G__16181 = (0);
var G__16182 = (0);
seq__16028_16162 = G__16179;
chunk__16029_16163 = G__16180;
count__16030_16164 = G__16181;
i__16031_16165 = G__16182;
continue;
}
} else {
}
}
break;
}

var seq__16032 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("p a img")));
var chunk__16033 = null;
var count__16034 = (0);
var i__16035 = (0);
while(true){
if((i__16035 < count__16034)){
var imagelink = chunk__16033.cljs$core$IIndexed$_nth$arity$2(null,i__16035);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16183 = seq__16032;
var G__16184 = chunk__16033;
var G__16185 = count__16034;
var G__16186 = (i__16035 + (1));
seq__16032 = G__16183;
chunk__16033 = G__16184;
count__16034 = G__16185;
i__16035 = G__16186;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16032);
if(temp__4657__auto__){
var seq__16032__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16032__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16032__$1);
var G__16187 = cljs.core.chunk_rest(seq__16032__$1);
var G__16188 = c__8792__auto__;
var G__16189 = cljs.core.count(c__8792__auto__);
var G__16190 = (0);
seq__16032 = G__16187;
chunk__16033 = G__16188;
count__16034 = G__16189;
i__16035 = G__16190;
continue;
} else {
var imagelink = cljs.core.first(seq__16032__$1);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16191 = cljs.core.next(seq__16032__$1);
var G__16192 = null;
var G__16193 = (0);
var G__16194 = (0);
seq__16032 = G__16191;
chunk__16033 = G__16192;
count__16034 = G__16193;
i__16035 = G__16194;
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
var seq__16195 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__16196 = null;
var count__16197 = (0);
var i__16198 = (0);
while(true){
if((i__16198 < count__16197)){
var c = chunk__16196.cljs$core$IIndexed$_nth$arity$2(null,i__16198);
var txt_16199 = (c["innerHTML"]);
var html_16200 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16199,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16200);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16201 = seq__16195;
var G__16202 = chunk__16196;
var G__16203 = count__16197;
var G__16204 = (i__16198 + (1));
seq__16195 = G__16201;
chunk__16196 = G__16202;
count__16197 = G__16203;
i__16198 = G__16204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16195);
if(temp__4657__auto__){
var seq__16195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16195__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16195__$1);
var G__16205 = cljs.core.chunk_rest(seq__16195__$1);
var G__16206 = c__8792__auto__;
var G__16207 = cljs.core.count(c__8792__auto__);
var G__16208 = (0);
seq__16195 = G__16205;
chunk__16196 = G__16206;
count__16197 = G__16207;
i__16198 = G__16208;
continue;
} else {
var c = cljs.core.first(seq__16195__$1);
var txt_16209 = (c["innerHTML"]);
var html_16210 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16209,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16210);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16211 = cljs.core.next(seq__16195__$1);
var G__16212 = null;
var G__16213 = (0);
var G__16214 = (0);
seq__16195 = G__16211;
chunk__16196 = G__16212;
count__16197 = G__16213;
i__16198 = G__16214;
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
var final_width = (function (){var G__16215 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16215);
})();
var final_height = (function (){var G__16216 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16216);
})();
var buffer_width = (function (){var G__16217 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16217);
})();
var kusi_width = (function (){var G__16218 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16218);
})();
var orig_border_width = (function (){var G__16219 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16219);
})();
var vertical_buffer_width = (function (){var G__16220 = (((cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) == null))?cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe):cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe));
return Number(G__16220);
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
