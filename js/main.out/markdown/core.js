// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14495){
var map__14496 = p__14495;
var map__14496__$1 = ((((!((map__14496 == null)))?((((map__14496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14496):map__14496);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14496__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14496__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14496__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__14496,map__14496__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_14498 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__14499 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_14498,map__14496,map__14496__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__14502,transformer){
var vec__14503 = p__14502;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14503,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14503,(1),null);
var G__14506 = text;
var G__14507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__14506,G__14507) : transformer.call(null,G__14506,G__14507));
});})(_STAR_inhibit_separator_STAR_14498,map__14496,map__14496__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_14498;
}});
;})(map__14496,map__14496__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14510 = arguments.length;
var i__9123__auto___14511 = (0);
while(true){
if((i__9123__auto___14511 < len__9122__auto___14510)){
args__9129__auto__.push((arguments[i__9123__auto___14511]));

var G__14512 = (i__9123__auto___14511 + (1));
i__9123__auto___14511 = G__14512;
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

markdown.core.format.cljs$lang$applyTo = (function (seq14508){
var G__14509 = cljs.core.first(seq14508);
var seq14508__$1 = cljs.core.next(seq14508);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14509,seq14508__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__14513_14517 = cljs.core.seq(lines);
var chunk__14514_14518 = null;
var count__14515_14519 = (0);
var i__14516_14520 = (0);
while(true){
if((i__14516_14520 < count__14515_14519)){
var line_14521 = chunk__14514_14518.cljs$core$IIndexed$_nth$arity$2(null,i__14516_14520);
markdown.links.parse_reference_link(line_14521,references);

var G__14522 = seq__14513_14517;
var G__14523 = chunk__14514_14518;
var G__14524 = count__14515_14519;
var G__14525 = (i__14516_14520 + (1));
seq__14513_14517 = G__14522;
chunk__14514_14518 = G__14523;
count__14515_14519 = G__14524;
i__14516_14520 = G__14525;
continue;
} else {
var temp__4657__auto___14526 = cljs.core.seq(seq__14513_14517);
if(temp__4657__auto___14526){
var seq__14513_14527__$1 = temp__4657__auto___14526;
if(cljs.core.chunked_seq_QMARK_(seq__14513_14527__$1)){
var c__8792__auto___14528 = cljs.core.chunk_first(seq__14513_14527__$1);
var G__14529 = cljs.core.chunk_rest(seq__14513_14527__$1);
var G__14530 = c__8792__auto___14528;
var G__14531 = cljs.core.count(c__8792__auto___14528);
var G__14532 = (0);
seq__14513_14517 = G__14529;
chunk__14514_14518 = G__14530;
count__14515_14519 = G__14531;
i__14516_14520 = G__14532;
continue;
} else {
var line_14533 = cljs.core.first(seq__14513_14527__$1);
markdown.links.parse_reference_link(line_14533,references);

var G__14534 = cljs.core.next(seq__14513_14527__$1);
var G__14535 = null;
var G__14536 = (0);
var G__14537 = (0);
seq__14513_14517 = G__14534;
chunk__14514_14518 = G__14535;
count__14515_14519 = G__14536;
i__14516_14520 = G__14537;
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
var seq__14538_14542 = cljs.core.seq(lines);
var chunk__14539_14543 = null;
var count__14540_14544 = (0);
var i__14541_14545 = (0);
while(true){
if((i__14541_14545 < count__14540_14544)){
var line_14546 = chunk__14539_14543.cljs$core$IIndexed$_nth$arity$2(null,i__14541_14545);
markdown.links.parse_footnote_link(line_14546,footnotes);

var G__14547 = seq__14538_14542;
var G__14548 = chunk__14539_14543;
var G__14549 = count__14540_14544;
var G__14550 = (i__14541_14545 + (1));
seq__14538_14542 = G__14547;
chunk__14539_14543 = G__14548;
count__14540_14544 = G__14549;
i__14541_14545 = G__14550;
continue;
} else {
var temp__4657__auto___14551 = cljs.core.seq(seq__14538_14542);
if(temp__4657__auto___14551){
var seq__14538_14552__$1 = temp__4657__auto___14551;
if(cljs.core.chunked_seq_QMARK_(seq__14538_14552__$1)){
var c__8792__auto___14553 = cljs.core.chunk_first(seq__14538_14552__$1);
var G__14554 = cljs.core.chunk_rest(seq__14538_14552__$1);
var G__14555 = c__8792__auto___14553;
var G__14556 = cljs.core.count(c__8792__auto___14553);
var G__14557 = (0);
seq__14538_14542 = G__14554;
chunk__14539_14543 = G__14555;
count__14540_14544 = G__14556;
i__14541_14545 = G__14557;
continue;
} else {
var line_14558 = cljs.core.first(seq__14538_14552__$1);
markdown.links.parse_footnote_link(line_14558,footnotes);

var G__14559 = cljs.core.next(seq__14538_14552__$1);
var G__14560 = null;
var G__14561 = (0);
var G__14562 = (0);
seq__14538_14542 = G__14559;
chunk__14539_14543 = G__14560;
count__14540_14544 = G__14561;
i__14541_14545 = G__14562;
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
var vec__14564 = cljs.core.split_with((function (p1__14563_SHARP_){
return cljs.core.not_empty(p1__14563_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14567 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_14568 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14567,_STAR_formatter_STAR_14568){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14567,_STAR_formatter_STAR_14568))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14569 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14569,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14569,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14575_14594 = lines__$1;
var vec__14576_14595 = G__14575_14594;
var seq__14577_14596 = cljs.core.seq(vec__14576_14595);
var first__14578_14597 = cljs.core.first(seq__14577_14596);
var seq__14577_14598__$1 = cljs.core.next(seq__14577_14596);
var line_14599 = first__14578_14597;
var more_14600 = seq__14577_14598__$1;
var state_14601 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14575_14602__$1 = G__14575_14594;
var state_14603__$1 = state_14601;
while(true){
var vec__14579_14604 = G__14575_14602__$1;
var seq__14580_14605 = cljs.core.seq(vec__14579_14604);
var first__14581_14606 = cljs.core.first(seq__14580_14605);
var seq__14580_14607__$1 = cljs.core.next(seq__14580_14605);
var line_14608__$1 = first__14581_14606;
var more_14609__$1 = seq__14580_14607__$1;
var state_14610__$2 = state_14603__$1;
var line_14611__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_14610__$2))?"":line_14608__$1);
var state_14612__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14610__$2))?(function (){var G__14582 = html;
var G__14583 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14610__$2);
var G__14584 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_14610__$2);
var G__14585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14610__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14582,G__14583,G__14584,G__14585) : transformer.call(null,G__14582,G__14583,G__14584,G__14585));
})():state_14610__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14609__$1))){
var G__14613 = more_14609__$1;
var G__14614 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14586 = html;
var G__14587 = line_14611__$2;
var G__14588 = cljs.core.first(more_14609__$1);
var G__14589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_14612__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14586,G__14587,G__14588,G__14589) : transformer.call(null,G__14586,G__14587,G__14588,G__14589));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14611__$2));
G__14575_14602__$1 = G__14613;
state_14603__$1 = G__14614;
continue;
} else {
var G__14590_14615 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14612__$3)));
var G__14591_14616 = line_14611__$2;
var G__14592_14617 = "";
var G__14593_14618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14612__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14590_14615,G__14591_14616,G__14592_14617,G__14593_14618) : transformer.call(null,G__14590_14615,G__14591_14616,G__14592_14617,G__14593_14618));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_14568;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14567;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14621 = arguments.length;
var i__9123__auto___14622 = (0);
while(true){
if((i__9123__auto___14622 < len__9122__auto___14621)){
args__9129__auto__.push((arguments[i__9123__auto___14622]));

var G__14623 = (i__9123__auto___14622 + (1));
i__9123__auto___14622 = G__14623;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14619){
var G__14620 = cljs.core.first(seq14619);
var seq14619__$1 = cljs.core.next(seq14619);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14620,seq14619__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14626 = arguments.length;
var i__9123__auto___14627 = (0);
while(true){
if((i__9123__auto___14627 < len__9122__auto___14626)){
args__9129__auto__.push((arguments[i__9123__auto___14627]));

var G__14628 = (i__9123__auto___14627 + (1));
i__9123__auto___14627 = G__14628;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14624){
var G__14625 = cljs.core.first(seq14624);
var seq14624__$1 = cljs.core.next(seq14624);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14625,seq14624__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14630 = arguments.length;
var i__9123__auto___14631 = (0);
while(true){
if((i__9123__auto___14631 < len__9122__auto___14630)){
args__9129__auto__.push((arguments[i__9123__auto___14631]));

var G__14632 = (i__9123__auto___14631 + (1));
i__9123__auto___14631 = G__14632;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14629){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14629));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14634 = arguments.length;
var i__9123__auto___14635 = (0);
while(true){
if((i__9123__auto___14635 < len__9122__auto___14634)){
args__9129__auto__.push((arguments[i__9123__auto___14635]));

var G__14636 = (i__9123__auto___14635 + (1));
i__9123__auto___14635 = G__14636;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14633){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14633));
});

