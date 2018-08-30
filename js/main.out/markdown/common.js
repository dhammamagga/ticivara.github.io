// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15327 = arguments.length;
var i__9123__auto___15328 = (0);
while(true){
if((i__9123__auto___15328 < len__9122__auto___15327)){
args__9129__auto__.push((arguments[i__9123__auto___15328]));

var G__15329 = (i__9123__auto___15328 + (1));
i__9123__auto___15328 = G__15329;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last(args);
var token = markdown.common.gen_token(cljs.core.count(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frozen_DASH_strings,token], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(args))))], null);
});

markdown.common.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.common.freeze_string.cljs$lang$applyTo = (function (seq15326){
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15326));
});

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__4655__auto__ = cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),"\\d+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('')),text);
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var G__15332 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (text,state,matches,temp__4655__auto__){
return (function (s,r){
return clojure.string.replace(s,cljs.core.re_pattern(r),((function (text,state,matches,temp__4655__auto__){
return (function (p1__15330_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state),p1__15330_SHARP_,p1__15330_SHARP_);
});})(text,state,matches,temp__4655__auto__))
);
});})(text,state,matches,temp__4655__auto__))
,text,matches);
var G__15333 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$frozen_DASH_strings,((function (text,state,matches,temp__4655__auto__){
return (function (p1__15331_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__15331_SHARP_,matches);
});})(text,state,matches,temp__4655__auto__))
);
text = G__15332;
state = G__15333;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if(!(cljs.core.empty_QMARK_(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state)))){
return markdown.common.thaw_string(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var G__15335 = arguments.length;
switch (G__15335) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,cljs.core.identity);
});

markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq(separator);
return ((function (separator__$1){
return (function (text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$found_DASH_token,false);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,cljs.core.cst$kw$found_DASH_token)], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var vec__15336 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__15339 = (function (){var G__15342 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf);
var G__15343 = cur_state;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__15342,G__15343) : transformer.call(null,G__15342,G__15343));
})();
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(s),new_state], null);
})());
var new_buf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15336,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15336,(1),null);
var G__15345 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_buf,cljs.core.seq(close)], 0)));
var G__15346 = cljs.core.PersistentVector.EMPTY;
var G__15347 = cljs.core.rest(tokens);
var G__15348 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$found_DASH_token,false);
out = G__15345;
buf = G__15346;
tokens = G__15347;
cur_state = G__15348;
continue;
} else {
var G__15349 = out;
var G__15350 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__15351 = cljs.core.rest(tokens);
var G__15352 = cur_state;
out = G__15349;
buf = G__15350;
tokens = G__15351;
cur_state = G__15352;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__15353 = out;
var G__15354 = buf;
var G__15355 = cljs.core.rest(tokens);
var G__15356 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.cst$kw$found_DASH_token,true);
out = G__15353;
buf = G__15354;
tokens = G__15355;
cur_state = G__15356;
continue;
} else {
var G__15357 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__15358 = buf;
var G__15359 = cljs.core.rest(tokens);
var G__15360 = cur_state;
out = G__15357;
buf = G__15358;
tokens = G__15359;
cur_state = G__15360;
continue;

}
}
}
break;
}
}
});
;})(separator__$1))
});

markdown.common.make_separator.cljs$lang$maxFixedArity = 4;

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code(text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
var fexpr__15361 = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity));
return (fexpr__15361.cljs$core$IFn$_invoke$arity$2 ? fexpr__15361.cljs$core$IFn$_invoke$arity$2(text,state) : fexpr__15361.call(null,text,state));
});
markdown.common.strong = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("**","<strong>","</strong>");
markdown.common.bold_italic = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("***","<b><i>","</i></b>");
markdown.common.bold = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4("`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
var fexpr__15362 = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string);
return (fexpr__15362.cljs$core$IFn$_invoke$arity$2 ? fexpr__15362.cljs$core$IFn$_invoke$arity$2(text,state) : fexpr__15362.call(null,text,state));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace(text,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.cljs$core$IFn$_invoke$arity$1(markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15363_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__15363_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15364_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__15364_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__15364_SHARP_));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__4657__auto__ = markdown.common.heading_level(text);
if(cljs.core.truth_(temp__4657__auto__)){
var heading = temp__4657__auto__;
var text__$1 = markdown.common.heading_text(text);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(heading_anchors)?[" id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;")),"\""].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text__$1),"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;")),state], null);
});
