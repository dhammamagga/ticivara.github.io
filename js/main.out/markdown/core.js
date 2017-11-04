// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14473){
var map__14474 = p__14473;
var map__14474__$1 = ((((!((map__14474 == null)))?((((map__14474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14474):map__14474);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14474__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14474__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14474__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__14474,map__14474__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_14476 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__14477 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_14476,map__14474,map__14474__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__14480,transformer){
var vec__14481 = p__14480;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14481,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14481,(1),null);
var G__14484 = text;
var G__14485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__14484,G__14485) : transformer.call(null,G__14484,G__14485));
});})(_STAR_inhibit_separator_STAR_14476,map__14474,map__14474__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_14476;
}});
;})(map__14474,map__14474__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14488 = arguments.length;
var i__9123__auto___14489 = (0);
while(true){
if((i__9123__auto___14489 < len__9122__auto___14488)){
args__9129__auto__.push((arguments[i__9123__auto___14489]));

var G__14490 = (i__9123__auto___14489 + (1));
i__9123__auto___14489 = G__14490;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq14486){
var G__14487 = cljs.core.first(seq14486);
var seq14486__$1 = cljs.core.next(seq14486);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14487,seq14486__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__14491_14495 = cljs.core.seq(lines);
var chunk__14492_14496 = null;
var count__14493_14497 = (0);
var i__14494_14498 = (0);
while(true){
if((i__14494_14498 < count__14493_14497)){
var line_14499 = chunk__14492_14496.cljs$core$IIndexed$_nth$arity$2(null,i__14494_14498);
markdown.links.parse_reference_link(line_14499,references);

var G__14500 = seq__14491_14495;
var G__14501 = chunk__14492_14496;
var G__14502 = count__14493_14497;
var G__14503 = (i__14494_14498 + (1));
seq__14491_14495 = G__14500;
chunk__14492_14496 = G__14501;
count__14493_14497 = G__14502;
i__14494_14498 = G__14503;
continue;
} else {
var temp__4657__auto___14504 = cljs.core.seq(seq__14491_14495);
if(temp__4657__auto___14504){
var seq__14491_14505__$1 = temp__4657__auto___14504;
if(cljs.core.chunked_seq_QMARK_(seq__14491_14505__$1)){
var c__8792__auto___14506 = cljs.core.chunk_first(seq__14491_14505__$1);
var G__14507 = cljs.core.chunk_rest(seq__14491_14505__$1);
var G__14508 = c__8792__auto___14506;
var G__14509 = cljs.core.count(c__8792__auto___14506);
var G__14510 = (0);
seq__14491_14495 = G__14507;
chunk__14492_14496 = G__14508;
count__14493_14497 = G__14509;
i__14494_14498 = G__14510;
continue;
} else {
var line_14511 = cljs.core.first(seq__14491_14505__$1);
markdown.links.parse_reference_link(line_14511,references);

var G__14512 = cljs.core.next(seq__14491_14505__$1);
var G__14513 = null;
var G__14514 = (0);
var G__14515 = (0);
seq__14491_14495 = G__14512;
chunk__14492_14496 = G__14513;
count__14493_14497 = G__14514;
i__14494_14498 = G__14515;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null));
var seq__14516_14520 = cljs.core.seq(lines);
var chunk__14517_14521 = null;
var count__14518_14522 = (0);
var i__14519_14523 = (0);
while(true){
if((i__14519_14523 < count__14518_14522)){
var line_14524 = chunk__14517_14521.cljs$core$IIndexed$_nth$arity$2(null,i__14519_14523);
markdown.links.parse_footnote_link(line_14524,footnotes);

var G__14525 = seq__14516_14520;
var G__14526 = chunk__14517_14521;
var G__14527 = count__14518_14522;
var G__14528 = (i__14519_14523 + (1));
seq__14516_14520 = G__14525;
chunk__14517_14521 = G__14526;
count__14518_14522 = G__14527;
i__14519_14523 = G__14528;
continue;
} else {
var temp__4657__auto___14529 = cljs.core.seq(seq__14516_14520);
if(temp__4657__auto___14529){
var seq__14516_14530__$1 = temp__4657__auto___14529;
if(cljs.core.chunked_seq_QMARK_(seq__14516_14530__$1)){
var c__8792__auto___14531 = cljs.core.chunk_first(seq__14516_14530__$1);
var G__14532 = cljs.core.chunk_rest(seq__14516_14530__$1);
var G__14533 = c__8792__auto___14531;
var G__14534 = cljs.core.count(c__8792__auto___14531);
var G__14535 = (0);
seq__14516_14520 = G__14532;
chunk__14517_14521 = G__14533;
count__14518_14522 = G__14534;
i__14519_14523 = G__14535;
continue;
} else {
var line_14536 = cljs.core.first(seq__14516_14530__$1);
markdown.links.parse_footnote_link(line_14536,footnotes);

var G__14537 = cljs.core.next(seq__14516_14530__$1);
var G__14538 = null;
var G__14539 = (0);
var G__14540 = (0);
seq__14516_14520 = G__14537;
chunk__14517_14521 = G__14538;
count__14518_14522 = G__14539;
i__14519_14523 = G__14540;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__14542 = cljs.core.split_with((function (p1__14541_SHARP_){
return cljs.core.not_empty(p1__14541_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14545 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_14546 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14545,_STAR_formatter_STAR_14546){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14545,_STAR_formatter_STAR_14546))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14547 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14553_14572 = lines__$1;
var vec__14554_14573 = G__14553_14572;
var seq__14555_14574 = cljs.core.seq(vec__14554_14573);
var first__14556_14575 = cljs.core.first(seq__14555_14574);
var seq__14555_14576__$1 = cljs.core.next(seq__14555_14574);
var line_14577 = first__14556_14575;
var more_14578 = seq__14555_14576__$1;
var state_14579 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14553_14580__$1 = G__14553_14572;
var state_14581__$1 = state_14579;
while(true){
var vec__14557_14582 = G__14553_14580__$1;
var seq__14558_14583 = cljs.core.seq(vec__14557_14582);
var first__14559_14584 = cljs.core.first(seq__14558_14583);
var seq__14558_14585__$1 = cljs.core.next(seq__14558_14583);
var line_14586__$1 = first__14559_14584;
var more_14587__$1 = seq__14558_14585__$1;
var state_14588__$2 = state_14581__$1;
var line_14589__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_14588__$2))?"":line_14586__$1);
var state_14590__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14588__$2))?(function (){var G__14560 = html;
var G__14561 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14588__$2);
var G__14562 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_14588__$2);
var G__14563 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14588__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14560,G__14561,G__14562,G__14563) : transformer.call(null,G__14560,G__14561,G__14562,G__14563));
})():state_14588__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14587__$1))){
var G__14591 = more_14587__$1;
var G__14592 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14564 = html;
var G__14565 = line_14589__$2;
var G__14566 = cljs.core.first(more_14587__$1);
var G__14567 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_14590__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14564,G__14565,G__14566,G__14567) : transformer.call(null,G__14564,G__14565,G__14566,G__14567));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14589__$2));
G__14553_14580__$1 = G__14591;
state_14581__$1 = G__14592;
continue;
} else {
var G__14568_14593 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14590__$3)));
var G__14569_14594 = line_14589__$2;
var G__14570_14595 = "";
var G__14571_14596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14590__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14568_14593,G__14569_14594,G__14570_14595,G__14571_14596) : transformer.call(null,G__14568_14593,G__14569_14594,G__14570_14595,G__14571_14596));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_14546;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14545;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14599 = arguments.length;
var i__9123__auto___14600 = (0);
while(true){
if((i__9123__auto___14600 < len__9122__auto___14599)){
args__9129__auto__.push((arguments[i__9123__auto___14600]));

var G__14601 = (i__9123__auto___14600 + (1));
i__9123__auto___14600 = G__14601;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14597){
var G__14598 = cljs.core.first(seq14597);
var seq14597__$1 = cljs.core.next(seq14597);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14598,seq14597__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14604 = arguments.length;
var i__9123__auto___14605 = (0);
while(true){
if((i__9123__auto___14605 < len__9122__auto___14604)){
args__9129__auto__.push((arguments[i__9123__auto___14605]));

var G__14606 = (i__9123__auto___14605 + (1));
i__9123__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14602){
var G__14603 = cljs.core.first(seq14602);
var seq14602__$1 = cljs.core.next(seq14602);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14603,seq14602__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14608 = arguments.length;
var i__9123__auto___14609 = (0);
while(true){
if((i__9123__auto___14609 < len__9122__auto___14608)){
args__9129__auto__.push((arguments[i__9123__auto___14609]));

var G__14610 = (i__9123__auto___14609 + (1));
i__9123__auto___14609 = G__14610;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14607){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14607));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14612 = arguments.length;
var i__9123__auto___14613 = (0);
while(true){
if((i__9123__auto___14613 < len__9122__auto___14612)){
args__9129__auto__.push((arguments[i__9123__auto___14613]));

var G__14614 = (i__9123__auto___14613 + (1));
i__9123__auto___14613 = G__14614;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14611){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14611));
});

