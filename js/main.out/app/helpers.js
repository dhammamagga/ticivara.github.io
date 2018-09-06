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
var seq__16014_16046 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$table], null)))));
var chunk__16015_16047 = null;
var count__16016_16048 = (0);
var i__16017_16049 = (0);
while(true){
if((i__16017_16049 < count__16016_16048)){
var table_16050 = chunk__16015_16047.cljs$core$IIndexed$_nth$arity$2(null,i__16017_16049);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16050,cljs.core.cst$kw$table);

var G__16051 = seq__16014_16046;
var G__16052 = chunk__16015_16047;
var G__16053 = count__16016_16048;
var G__16054 = (i__16017_16049 + (1));
seq__16014_16046 = G__16051;
chunk__16015_16047 = G__16052;
count__16016_16048 = G__16053;
i__16017_16049 = G__16054;
continue;
} else {
var temp__4657__auto___16055 = cljs.core.seq(seq__16014_16046);
if(temp__4657__auto___16055){
var seq__16014_16056__$1 = temp__4657__auto___16055;
if(cljs.core.chunked_seq_QMARK_(seq__16014_16056__$1)){
var c__8792__auto___16057 = cljs.core.chunk_first(seq__16014_16056__$1);
var G__16058 = cljs.core.chunk_rest(seq__16014_16056__$1);
var G__16059 = c__8792__auto___16057;
var G__16060 = cljs.core.count(c__8792__auto___16057);
var G__16061 = (0);
seq__16014_16046 = G__16058;
chunk__16015_16047 = G__16059;
count__16016_16048 = G__16060;
i__16017_16049 = G__16061;
continue;
} else {
var table_16062 = cljs.core.first(seq__16014_16056__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16062,cljs.core.cst$kw$table);

var G__16063 = cljs.core.next(seq__16014_16056__$1);
var G__16064 = null;
var G__16065 = (0);
var G__16066 = (0);
seq__16014_16046 = G__16063;
chunk__16015_16047 = G__16064;
count__16016_16048 = G__16065;
i__16017_16049 = G__16066;
continue;
}
} else {
}
}
break;
}

var seq__16018_16067 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h1], null)))));
var chunk__16019_16068 = null;
var count__16020_16069 = (0);
var i__16021_16070 = (0);
while(true){
if((i__16021_16070 < count__16020_16069)){
var header_16071 = chunk__16019_16068.cljs$core$IIndexed$_nth$arity$2(null,i__16021_16070);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16071,cljs.core.cst$kw$s_DASH_title);

var G__16072 = seq__16018_16067;
var G__16073 = chunk__16019_16068;
var G__16074 = count__16020_16069;
var G__16075 = (i__16021_16070 + (1));
seq__16018_16067 = G__16072;
chunk__16019_16068 = G__16073;
count__16020_16069 = G__16074;
i__16021_16070 = G__16075;
continue;
} else {
var temp__4657__auto___16076 = cljs.core.seq(seq__16018_16067);
if(temp__4657__auto___16076){
var seq__16018_16077__$1 = temp__4657__auto___16076;
if(cljs.core.chunked_seq_QMARK_(seq__16018_16077__$1)){
var c__8792__auto___16078 = cljs.core.chunk_first(seq__16018_16077__$1);
var G__16079 = cljs.core.chunk_rest(seq__16018_16077__$1);
var G__16080 = c__8792__auto___16078;
var G__16081 = cljs.core.count(c__8792__auto___16078);
var G__16082 = (0);
seq__16018_16067 = G__16079;
chunk__16019_16068 = G__16080;
count__16020_16069 = G__16081;
i__16021_16070 = G__16082;
continue;
} else {
var header_16083 = cljs.core.first(seq__16018_16077__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16083,cljs.core.cst$kw$s_DASH_title);

var G__16084 = cljs.core.next(seq__16018_16077__$1);
var G__16085 = null;
var G__16086 = (0);
var G__16087 = (0);
seq__16018_16067 = G__16084;
chunk__16019_16068 = G__16085;
count__16020_16069 = G__16086;
i__16021_16070 = G__16087;
continue;
}
} else {
}
}
break;
}

var seq__16022_16088 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h2], null)))));
var chunk__16023_16089 = null;
var count__16024_16090 = (0);
var i__16025_16091 = (0);
while(true){
if((i__16025_16091 < count__16024_16090)){
var header_16092 = chunk__16023_16089.cljs$core$IIndexed$_nth$arity$2(null,i__16025_16091);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16092,cljs.core.cst$kw$s_DASH_title);

var G__16093 = seq__16022_16088;
var G__16094 = chunk__16023_16089;
var G__16095 = count__16024_16090;
var G__16096 = (i__16025_16091 + (1));
seq__16022_16088 = G__16093;
chunk__16023_16089 = G__16094;
count__16024_16090 = G__16095;
i__16025_16091 = G__16096;
continue;
} else {
var temp__4657__auto___16097 = cljs.core.seq(seq__16022_16088);
if(temp__4657__auto___16097){
var seq__16022_16098__$1 = temp__4657__auto___16097;
if(cljs.core.chunked_seq_QMARK_(seq__16022_16098__$1)){
var c__8792__auto___16099 = cljs.core.chunk_first(seq__16022_16098__$1);
var G__16100 = cljs.core.chunk_rest(seq__16022_16098__$1);
var G__16101 = c__8792__auto___16099;
var G__16102 = cljs.core.count(c__8792__auto___16099);
var G__16103 = (0);
seq__16022_16088 = G__16100;
chunk__16023_16089 = G__16101;
count__16024_16090 = G__16102;
i__16025_16091 = G__16103;
continue;
} else {
var header_16104 = cljs.core.first(seq__16022_16098__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16104,cljs.core.cst$kw$s_DASH_title);

var G__16105 = cljs.core.next(seq__16022_16098__$1);
var G__16106 = null;
var G__16107 = (0);
var G__16108 = (0);
seq__16022_16088 = G__16105;
chunk__16023_16089 = G__16106;
count__16024_16090 = G__16107;
i__16025_16091 = G__16108;
continue;
}
} else {
}
}
break;
}

var seq__16026_16109 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h3], null)))));
var chunk__16027_16110 = null;
var count__16028_16111 = (0);
var i__16029_16112 = (0);
while(true){
if((i__16029_16112 < count__16028_16111)){
var header_16113 = chunk__16027_16110.cljs$core$IIndexed$_nth$arity$2(null,i__16029_16112);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16113,cljs.core.cst$kw$s_DASH_title);

var G__16114 = seq__16026_16109;
var G__16115 = chunk__16027_16110;
var G__16116 = count__16028_16111;
var G__16117 = (i__16029_16112 + (1));
seq__16026_16109 = G__16114;
chunk__16027_16110 = G__16115;
count__16028_16111 = G__16116;
i__16029_16112 = G__16117;
continue;
} else {
var temp__4657__auto___16118 = cljs.core.seq(seq__16026_16109);
if(temp__4657__auto___16118){
var seq__16026_16119__$1 = temp__4657__auto___16118;
if(cljs.core.chunked_seq_QMARK_(seq__16026_16119__$1)){
var c__8792__auto___16120 = cljs.core.chunk_first(seq__16026_16119__$1);
var G__16121 = cljs.core.chunk_rest(seq__16026_16119__$1);
var G__16122 = c__8792__auto___16120;
var G__16123 = cljs.core.count(c__8792__auto___16120);
var G__16124 = (0);
seq__16026_16109 = G__16121;
chunk__16027_16110 = G__16122;
count__16028_16111 = G__16123;
i__16029_16112 = G__16124;
continue;
} else {
var header_16125 = cljs.core.first(seq__16026_16119__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16125,cljs.core.cst$kw$s_DASH_title);

var G__16126 = cljs.core.next(seq__16026_16119__$1);
var G__16127 = null;
var G__16128 = (0);
var G__16129 = (0);
seq__16026_16109 = G__16126;
chunk__16027_16110 = G__16127;
count__16028_16111 = G__16128;
i__16029_16112 = G__16129;
continue;
}
} else {
}
}
break;
}

var seq__16030_16130 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h4], null)))));
var chunk__16031_16131 = null;
var count__16032_16132 = (0);
var i__16033_16133 = (0);
while(true){
if((i__16033_16133 < count__16032_16132)){
var header_16134 = chunk__16031_16131.cljs$core$IIndexed$_nth$arity$2(null,i__16033_16133);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16134,cljs.core.cst$kw$s_DASH_title);

var G__16135 = seq__16030_16130;
var G__16136 = chunk__16031_16131;
var G__16137 = count__16032_16132;
var G__16138 = (i__16033_16133 + (1));
seq__16030_16130 = G__16135;
chunk__16031_16131 = G__16136;
count__16032_16132 = G__16137;
i__16033_16133 = G__16138;
continue;
} else {
var temp__4657__auto___16139 = cljs.core.seq(seq__16030_16130);
if(temp__4657__auto___16139){
var seq__16030_16140__$1 = temp__4657__auto___16139;
if(cljs.core.chunked_seq_QMARK_(seq__16030_16140__$1)){
var c__8792__auto___16141 = cljs.core.chunk_first(seq__16030_16140__$1);
var G__16142 = cljs.core.chunk_rest(seq__16030_16140__$1);
var G__16143 = c__8792__auto___16141;
var G__16144 = cljs.core.count(c__8792__auto___16141);
var G__16145 = (0);
seq__16030_16130 = G__16142;
chunk__16031_16131 = G__16143;
count__16032_16132 = G__16144;
i__16033_16133 = G__16145;
continue;
} else {
var header_16146 = cljs.core.first(seq__16030_16140__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16146,cljs.core.cst$kw$s_DASH_title);

var G__16147 = cljs.core.next(seq__16030_16140__$1);
var G__16148 = null;
var G__16149 = (0);
var G__16150 = (0);
seq__16030_16130 = G__16147;
chunk__16031_16131 = G__16148;
count__16032_16132 = G__16149;
i__16033_16133 = G__16150;
continue;
}
} else {
}
}
break;
}

var seq__16034_16151 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h5], null)))));
var chunk__16035_16152 = null;
var count__16036_16153 = (0);
var i__16037_16154 = (0);
while(true){
if((i__16037_16154 < count__16036_16153)){
var header_16155 = chunk__16035_16152.cljs$core$IIndexed$_nth$arity$2(null,i__16037_16154);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16155,cljs.core.cst$kw$s_DASH_title);

var G__16156 = seq__16034_16151;
var G__16157 = chunk__16035_16152;
var G__16158 = count__16036_16153;
var G__16159 = (i__16037_16154 + (1));
seq__16034_16151 = G__16156;
chunk__16035_16152 = G__16157;
count__16036_16153 = G__16158;
i__16037_16154 = G__16159;
continue;
} else {
var temp__4657__auto___16160 = cljs.core.seq(seq__16034_16151);
if(temp__4657__auto___16160){
var seq__16034_16161__$1 = temp__4657__auto___16160;
if(cljs.core.chunked_seq_QMARK_(seq__16034_16161__$1)){
var c__8792__auto___16162 = cljs.core.chunk_first(seq__16034_16161__$1);
var G__16163 = cljs.core.chunk_rest(seq__16034_16161__$1);
var G__16164 = c__8792__auto___16162;
var G__16165 = cljs.core.count(c__8792__auto___16162);
var G__16166 = (0);
seq__16034_16151 = G__16163;
chunk__16035_16152 = G__16164;
count__16036_16153 = G__16165;
i__16037_16154 = G__16166;
continue;
} else {
var header_16167 = cljs.core.first(seq__16034_16161__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16167,cljs.core.cst$kw$s_DASH_title);

var G__16168 = cljs.core.next(seq__16034_16161__$1);
var G__16169 = null;
var G__16170 = (0);
var G__16171 = (0);
seq__16034_16151 = G__16168;
chunk__16035_16152 = G__16169;
count__16036_16153 = G__16170;
i__16037_16154 = G__16171;
continue;
}
} else {
}
}
break;
}

var seq__16038_16172 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h6], null)))));
var chunk__16039_16173 = null;
var count__16040_16174 = (0);
var i__16041_16175 = (0);
while(true){
if((i__16041_16175 < count__16040_16174)){
var header_16176 = chunk__16039_16173.cljs$core$IIndexed$_nth$arity$2(null,i__16041_16175);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16176,cljs.core.cst$kw$s_DASH_title);

var G__16177 = seq__16038_16172;
var G__16178 = chunk__16039_16173;
var G__16179 = count__16040_16174;
var G__16180 = (i__16041_16175 + (1));
seq__16038_16172 = G__16177;
chunk__16039_16173 = G__16178;
count__16040_16174 = G__16179;
i__16041_16175 = G__16180;
continue;
} else {
var temp__4657__auto___16181 = cljs.core.seq(seq__16038_16172);
if(temp__4657__auto___16181){
var seq__16038_16182__$1 = temp__4657__auto___16181;
if(cljs.core.chunked_seq_QMARK_(seq__16038_16182__$1)){
var c__8792__auto___16183 = cljs.core.chunk_first(seq__16038_16182__$1);
var G__16184 = cljs.core.chunk_rest(seq__16038_16182__$1);
var G__16185 = c__8792__auto___16183;
var G__16186 = cljs.core.count(c__8792__auto___16183);
var G__16187 = (0);
seq__16038_16172 = G__16184;
chunk__16039_16173 = G__16185;
count__16040_16174 = G__16186;
i__16041_16175 = G__16187;
continue;
} else {
var header_16188 = cljs.core.first(seq__16038_16182__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16188,cljs.core.cst$kw$s_DASH_title);

var G__16189 = cljs.core.next(seq__16038_16182__$1);
var G__16190 = null;
var G__16191 = (0);
var G__16192 = (0);
seq__16038_16172 = G__16189;
chunk__16039_16173 = G__16190;
count__16040_16174 = G__16191;
i__16041_16175 = G__16192;
continue;
}
} else {
}
}
break;
}

var seq__16042 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("p a img")));
var chunk__16043 = null;
var count__16044 = (0);
var i__16045 = (0);
while(true){
if((i__16045 < count__16044)){
var imagelink = chunk__16043.cljs$core$IIndexed$_nth$arity$2(null,i__16045);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16193 = seq__16042;
var G__16194 = chunk__16043;
var G__16195 = count__16044;
var G__16196 = (i__16045 + (1));
seq__16042 = G__16193;
chunk__16043 = G__16194;
count__16044 = G__16195;
i__16045 = G__16196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16042);
if(temp__4657__auto__){
var seq__16042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16042__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16042__$1);
var G__16197 = cljs.core.chunk_rest(seq__16042__$1);
var G__16198 = c__8792__auto__;
var G__16199 = cljs.core.count(c__8792__auto__);
var G__16200 = (0);
seq__16042 = G__16197;
chunk__16043 = G__16198;
count__16044 = G__16199;
i__16045 = G__16200;
continue;
} else {
var imagelink = cljs.core.first(seq__16042__$1);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16201 = cljs.core.next(seq__16042__$1);
var G__16202 = null;
var G__16203 = (0);
var G__16204 = (0);
seq__16042 = G__16201;
chunk__16043 = G__16202;
count__16044 = G__16203;
i__16045 = G__16204;
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
var seq__16205 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__16206 = null;
var count__16207 = (0);
var i__16208 = (0);
while(true){
if((i__16208 < count__16207)){
var c = chunk__16206.cljs$core$IIndexed$_nth$arity$2(null,i__16208);
var txt_16209 = (c["innerHTML"]);
var html_16210 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16209,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16210);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16211 = seq__16205;
var G__16212 = chunk__16206;
var G__16213 = count__16207;
var G__16214 = (i__16208 + (1));
seq__16205 = G__16211;
chunk__16206 = G__16212;
count__16207 = G__16213;
i__16208 = G__16214;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16205);
if(temp__4657__auto__){
var seq__16205__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16205__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16205__$1);
var G__16215 = cljs.core.chunk_rest(seq__16205__$1);
var G__16216 = c__8792__auto__;
var G__16217 = cljs.core.count(c__8792__auto__);
var G__16218 = (0);
seq__16205 = G__16215;
chunk__16206 = G__16216;
count__16207 = G__16217;
i__16208 = G__16218;
continue;
} else {
var c = cljs.core.first(seq__16205__$1);
var txt_16219 = (c["innerHTML"]);
var html_16220 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16219,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16220);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16221 = cljs.core.next(seq__16205__$1);
var G__16222 = null;
var G__16223 = (0);
var G__16224 = (0);
seq__16205 = G__16221;
chunk__16206 = G__16222;
count__16207 = G__16223;
i__16208 = G__16224;
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
var final_width = (function (){var G__16225 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16225);
})();
var final_height = (function (){var G__16226 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16226);
})();
var buffer_width = (function (){var G__16227 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16227);
})();
var kusi_width = (function (){var G__16228 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16228);
})();
var orig_border_width = (function (){var G__16229 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16229);
})();
var vertical_buffer_width = (function (){var G__16230 = (((cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) == null))?cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe):cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe));
return Number(G__16230);
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
