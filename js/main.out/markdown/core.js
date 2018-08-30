// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__15579){
var map__15580 = p__15579;
var map__15580__$1 = ((((!((map__15580 == null)))?((((map__15580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15580):map__15580);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15580__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15580__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15580__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__15580,map__15580__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_15582 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__15583 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_15582,map__15580,map__15580__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__15586,transformer){
var vec__15587 = p__15586;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(1),null);
var G__15590 = text;
var G__15591 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__15590,G__15591) : transformer.call(null,G__15590,G__15591));
});})(_STAR_inhibit_separator_STAR_15582,map__15580,map__15580__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15583,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15583,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_15582;
}});
;})(map__15580,map__15580__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15594 = arguments.length;
var i__9123__auto___15595 = (0);
while(true){
if((i__9123__auto___15595 < len__9122__auto___15594)){
args__9129__auto__.push((arguments[i__9123__auto___15595]));

var G__15596 = (i__9123__auto___15595 + (1));
i__9123__auto___15595 = G__15596;
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

markdown.core.format.cljs$lang$applyTo = (function (seq15592){
var G__15593 = cljs.core.first(seq15592);
var seq15592__$1 = cljs.core.next(seq15592);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__15593,seq15592__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__15597_15601 = cljs.core.seq(lines);
var chunk__15598_15602 = null;
var count__15599_15603 = (0);
var i__15600_15604 = (0);
while(true){
if((i__15600_15604 < count__15599_15603)){
var line_15605 = chunk__15598_15602.cljs$core$IIndexed$_nth$arity$2(null,i__15600_15604);
markdown.links.parse_reference_link(line_15605,references);

var G__15606 = seq__15597_15601;
var G__15607 = chunk__15598_15602;
var G__15608 = count__15599_15603;
var G__15609 = (i__15600_15604 + (1));
seq__15597_15601 = G__15606;
chunk__15598_15602 = G__15607;
count__15599_15603 = G__15608;
i__15600_15604 = G__15609;
continue;
} else {
var temp__4657__auto___15610 = cljs.core.seq(seq__15597_15601);
if(temp__4657__auto___15610){
var seq__15597_15611__$1 = temp__4657__auto___15610;
if(cljs.core.chunked_seq_QMARK_(seq__15597_15611__$1)){
var c__8792__auto___15612 = cljs.core.chunk_first(seq__15597_15611__$1);
var G__15613 = cljs.core.chunk_rest(seq__15597_15611__$1);
var G__15614 = c__8792__auto___15612;
var G__15615 = cljs.core.count(c__8792__auto___15612);
var G__15616 = (0);
seq__15597_15601 = G__15613;
chunk__15598_15602 = G__15614;
count__15599_15603 = G__15615;
i__15600_15604 = G__15616;
continue;
} else {
var line_15617 = cljs.core.first(seq__15597_15611__$1);
markdown.links.parse_reference_link(line_15617,references);

var G__15618 = cljs.core.next(seq__15597_15611__$1);
var G__15619 = null;
var G__15620 = (0);
var G__15621 = (0);
seq__15597_15601 = G__15618;
chunk__15598_15602 = G__15619;
count__15599_15603 = G__15620;
i__15600_15604 = G__15621;
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
var seq__15622_15626 = cljs.core.seq(lines);
var chunk__15623_15627 = null;
var count__15624_15628 = (0);
var i__15625_15629 = (0);
while(true){
if((i__15625_15629 < count__15624_15628)){
var line_15630 = chunk__15623_15627.cljs$core$IIndexed$_nth$arity$2(null,i__15625_15629);
markdown.links.parse_footnote_link(line_15630,footnotes);

var G__15631 = seq__15622_15626;
var G__15632 = chunk__15623_15627;
var G__15633 = count__15624_15628;
var G__15634 = (i__15625_15629 + (1));
seq__15622_15626 = G__15631;
chunk__15623_15627 = G__15632;
count__15624_15628 = G__15633;
i__15625_15629 = G__15634;
continue;
} else {
var temp__4657__auto___15635 = cljs.core.seq(seq__15622_15626);
if(temp__4657__auto___15635){
var seq__15622_15636__$1 = temp__4657__auto___15635;
if(cljs.core.chunked_seq_QMARK_(seq__15622_15636__$1)){
var c__8792__auto___15637 = cljs.core.chunk_first(seq__15622_15636__$1);
var G__15638 = cljs.core.chunk_rest(seq__15622_15636__$1);
var G__15639 = c__8792__auto___15637;
var G__15640 = cljs.core.count(c__8792__auto___15637);
var G__15641 = (0);
seq__15622_15626 = G__15638;
chunk__15623_15627 = G__15639;
count__15624_15628 = G__15640;
i__15625_15629 = G__15641;
continue;
} else {
var line_15642 = cljs.core.first(seq__15622_15636__$1);
markdown.links.parse_footnote_link(line_15642,footnotes);

var G__15643 = cljs.core.next(seq__15622_15636__$1);
var G__15644 = null;
var G__15645 = (0);
var G__15646 = (0);
seq__15622_15626 = G__15643;
chunk__15623_15627 = G__15644;
count__15624_15628 = G__15645;
i__15625_15629 = G__15646;
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
var vec__15648 = cljs.core.split_with((function (p1__15647_SHARP_){
return cljs.core.not_empty(p1__15647_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_15651 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_15652 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_15651,_STAR_formatter_STAR_15652){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_15651,_STAR_formatter_STAR_15652))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__15653 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15653,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15653,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__15659_15678 = lines__$1;
var vec__15660_15679 = G__15659_15678;
var seq__15661_15680 = cljs.core.seq(vec__15660_15679);
var first__15662_15681 = cljs.core.first(seq__15661_15680);
var seq__15661_15682__$1 = cljs.core.next(seq__15661_15680);
var line_15683 = first__15662_15681;
var more_15684 = seq__15661_15682__$1;
var state_15685 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__15659_15686__$1 = G__15659_15678;
var state_15687__$1 = state_15685;
while(true){
var vec__15663_15688 = G__15659_15686__$1;
var seq__15664_15689 = cljs.core.seq(vec__15663_15688);
var first__15665_15690 = cljs.core.first(seq__15664_15689);
var seq__15664_15691__$1 = cljs.core.next(seq__15664_15689);
var line_15692__$1 = first__15665_15690;
var more_15693__$1 = seq__15664_15691__$1;
var state_15694__$2 = state_15687__$1;
var line_15695__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_15694__$2))?"":line_15692__$1);
var state_15696__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_15694__$2))?(function (){var G__15666 = html;
var G__15667 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_15694__$2);
var G__15668 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_15694__$2);
var G__15669 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_15694__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__15666,G__15667,G__15668,G__15669) : transformer.call(null,G__15666,G__15667,G__15668,G__15669));
})():state_15694__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_15693__$1))){
var G__15697 = more_15693__$1;
var G__15698 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15670 = html;
var G__15671 = line_15695__$2;
var G__15672 = cljs.core.first(more_15693__$1);
var G__15673 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_15696__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__15670,G__15671,G__15672,G__15673) : transformer.call(null,G__15670,G__15671,G__15672,G__15673));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_15695__$2));
G__15659_15686__$1 = G__15697;
state_15687__$1 = G__15698;
continue;
} else {
var G__15674_15699 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_15696__$3)));
var G__15675_15700 = line_15695__$2;
var G__15676_15701 = "";
var G__15677_15702 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_15696__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__15674_15699,G__15675_15700,G__15676_15701,G__15677_15702) : transformer.call(null,G__15674_15699,G__15675_15700,G__15676_15701,G__15677_15702));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_15652;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_15651;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15705 = arguments.length;
var i__9123__auto___15706 = (0);
while(true){
if((i__9123__auto___15706 < len__9122__auto___15705)){
args__9129__auto__.push((arguments[i__9123__auto___15706]));

var G__15707 = (i__9123__auto___15706 + (1));
i__9123__auto___15706 = G__15707;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq15703){
var G__15704 = cljs.core.first(seq15703);
var seq15703__$1 = cljs.core.next(seq15703);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__15704,seq15703__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15710 = arguments.length;
var i__9123__auto___15711 = (0);
while(true){
if((i__9123__auto___15711 < len__9122__auto___15710)){
args__9129__auto__.push((arguments[i__9123__auto___15711]));

var G__15712 = (i__9123__auto___15711 + (1));
i__9123__auto___15711 = G__15712;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq15708){
var G__15709 = cljs.core.first(seq15708);
var seq15708__$1 = cljs.core.next(seq15708);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__15709,seq15708__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15714 = arguments.length;
var i__9123__auto___15715 = (0);
while(true){
if((i__9123__auto___15715 < len__9122__auto___15714)){
args__9129__auto__.push((arguments[i__9123__auto___15715]));

var G__15716 = (i__9123__auto___15715 + (1));
i__9123__auto___15715 = G__15716;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq15713){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15713));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15718 = arguments.length;
var i__9123__auto___15719 = (0);
while(true){
if((i__9123__auto___15719 < len__9122__auto___15718)){
args__9129__auto__.push((arguments[i__9123__auto___15719]));

var G__15720 = (i__9123__auto___15719 + (1));
i__9123__auto___15719 = G__15720;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq15717){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15717));
});

