// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__7953__auto__ = elem.textContent;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__14162 = arguments.length;
switch (G__14162) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__14165 = arguments.length;
switch (G__14165) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__14169 = arguments.length;
switch (G__14169) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14167_SHARP_){
return !((p1__14167_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14183 = arguments.length;
var i__9123__auto___14184 = (0);
while(true){
if((i__9123__auto___14184 < len__9122__auto___14183)){
args__9129__auto__.push((arguments[i__9123__auto___14184]));

var G__14185 = (i__9123__auto___14184 + (1));
i__9123__auto___14184 = G__14185;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__14173_14186 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14174_14187 = null;
var count__14175_14188 = (0);
var i__14176_14189 = (0);
while(true){
if((i__14176_14189 < count__14175_14188)){
var vec__14177_14190 = chunk__14174_14187.cljs$core$IIndexed$_nth$arity$2(null,i__14176_14189);
var k_14191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177_14190,(0),null);
var v_14192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177_14190,(1),null);
style.setProperty(dommy.utils.as_str(k_14191),v_14192);

var G__14193 = seq__14173_14186;
var G__14194 = chunk__14174_14187;
var G__14195 = count__14175_14188;
var G__14196 = (i__14176_14189 + (1));
seq__14173_14186 = G__14193;
chunk__14174_14187 = G__14194;
count__14175_14188 = G__14195;
i__14176_14189 = G__14196;
continue;
} else {
var temp__4657__auto___14197 = cljs.core.seq(seq__14173_14186);
if(temp__4657__auto___14197){
var seq__14173_14198__$1 = temp__4657__auto___14197;
if(cljs.core.chunked_seq_QMARK_(seq__14173_14198__$1)){
var c__8792__auto___14199 = cljs.core.chunk_first(seq__14173_14198__$1);
var G__14200 = cljs.core.chunk_rest(seq__14173_14198__$1);
var G__14201 = c__8792__auto___14199;
var G__14202 = cljs.core.count(c__8792__auto___14199);
var G__14203 = (0);
seq__14173_14186 = G__14200;
chunk__14174_14187 = G__14201;
count__14175_14188 = G__14202;
i__14176_14189 = G__14203;
continue;
} else {
var vec__14180_14204 = cljs.core.first(seq__14173_14198__$1);
var k_14205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180_14204,(0),null);
var v_14206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180_14204,(1),null);
style.setProperty(dommy.utils.as_str(k_14205),v_14206);

var G__14207 = cljs.core.next(seq__14173_14198__$1);
var G__14208 = null;
var G__14209 = (0);
var G__14210 = (0);
seq__14173_14186 = G__14207;
chunk__14174_14187 = G__14208;
count__14175_14188 = G__14209;
i__14176_14189 = G__14210;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14171){
var G__14172 = cljs.core.first(seq14171);
var seq14171__$1 = cljs.core.next(seq14171);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14172,seq14171__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14217 = arguments.length;
var i__9123__auto___14218 = (0);
while(true){
if((i__9123__auto___14218 < len__9122__auto___14217)){
args__9129__auto__.push((arguments[i__9123__auto___14218]));

var G__14219 = (i__9123__auto___14218 + (1));
i__9123__auto___14218 = G__14219;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__14213_14220 = cljs.core.seq(keywords);
var chunk__14214_14221 = null;
var count__14215_14222 = (0);
var i__14216_14223 = (0);
while(true){
if((i__14216_14223 < count__14215_14222)){
var kw_14224 = chunk__14214_14221.cljs$core$IIndexed$_nth$arity$2(null,i__14216_14223);
style.removeProperty(dommy.utils.as_str(kw_14224));

var G__14225 = seq__14213_14220;
var G__14226 = chunk__14214_14221;
var G__14227 = count__14215_14222;
var G__14228 = (i__14216_14223 + (1));
seq__14213_14220 = G__14225;
chunk__14214_14221 = G__14226;
count__14215_14222 = G__14227;
i__14216_14223 = G__14228;
continue;
} else {
var temp__4657__auto___14229 = cljs.core.seq(seq__14213_14220);
if(temp__4657__auto___14229){
var seq__14213_14230__$1 = temp__4657__auto___14229;
if(cljs.core.chunked_seq_QMARK_(seq__14213_14230__$1)){
var c__8792__auto___14231 = cljs.core.chunk_first(seq__14213_14230__$1);
var G__14232 = cljs.core.chunk_rest(seq__14213_14230__$1);
var G__14233 = c__8792__auto___14231;
var G__14234 = cljs.core.count(c__8792__auto___14231);
var G__14235 = (0);
seq__14213_14220 = G__14232;
chunk__14214_14221 = G__14233;
count__14215_14222 = G__14234;
i__14216_14223 = G__14235;
continue;
} else {
var kw_14236 = cljs.core.first(seq__14213_14230__$1);
style.removeProperty(dommy.utils.as_str(kw_14236));

var G__14237 = cljs.core.next(seq__14213_14230__$1);
var G__14238 = null;
var G__14239 = (0);
var G__14240 = (0);
seq__14213_14220 = G__14237;
chunk__14214_14221 = G__14238;
count__14215_14222 = G__14239;
i__14216_14223 = G__14240;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14211){
var G__14212 = cljs.core.first(seq14211);
var seq14211__$1 = cljs.core.next(seq14211);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14212,seq14211__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14253 = arguments.length;
var i__9123__auto___14254 = (0);
while(true){
if((i__9123__auto___14254 < len__9122__auto___14253)){
args__9129__auto__.push((arguments[i__9123__auto___14254]));

var G__14255 = (i__9123__auto___14254 + (1));
i__9123__auto___14254 = G__14255;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__14243_14256 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14244_14257 = null;
var count__14245_14258 = (0);
var i__14246_14259 = (0);
while(true){
if((i__14246_14259 < count__14245_14258)){
var vec__14247_14260 = chunk__14244_14257.cljs$core$IIndexed$_nth$arity$2(null,i__14246_14259);
var k_14261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247_14260,(0),null);
var v_14262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247_14260,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14261,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14262),"px"].join('')], 0));

var G__14263 = seq__14243_14256;
var G__14264 = chunk__14244_14257;
var G__14265 = count__14245_14258;
var G__14266 = (i__14246_14259 + (1));
seq__14243_14256 = G__14263;
chunk__14244_14257 = G__14264;
count__14245_14258 = G__14265;
i__14246_14259 = G__14266;
continue;
} else {
var temp__4657__auto___14267 = cljs.core.seq(seq__14243_14256);
if(temp__4657__auto___14267){
var seq__14243_14268__$1 = temp__4657__auto___14267;
if(cljs.core.chunked_seq_QMARK_(seq__14243_14268__$1)){
var c__8792__auto___14269 = cljs.core.chunk_first(seq__14243_14268__$1);
var G__14270 = cljs.core.chunk_rest(seq__14243_14268__$1);
var G__14271 = c__8792__auto___14269;
var G__14272 = cljs.core.count(c__8792__auto___14269);
var G__14273 = (0);
seq__14243_14256 = G__14270;
chunk__14244_14257 = G__14271;
count__14245_14258 = G__14272;
i__14246_14259 = G__14273;
continue;
} else {
var vec__14250_14274 = cljs.core.first(seq__14243_14268__$1);
var k_14275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14250_14274,(0),null);
var v_14276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14250_14274,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14275,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14276),"px"].join('')], 0));

var G__14277 = cljs.core.next(seq__14243_14268__$1);
var G__14278 = null;
var G__14279 = (0);
var G__14280 = (0);
seq__14243_14256 = G__14277;
chunk__14244_14257 = G__14278;
count__14245_14258 = G__14279;
i__14246_14259 = G__14280;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14241){
var G__14242 = cljs.core.first(seq14241);
var seq14241__$1 = cljs.core.next(seq14241);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14242,seq14241__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__14286 = arguments.length;
switch (G__14286) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14300 = arguments.length;
var i__9123__auto___14301 = (0);
while(true){
if((i__9123__auto___14301 < len__9122__auto___14300)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14301]));

var G__14302 = (i__9123__auto___14301 + (1));
i__9123__auto___14301 = G__14302;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9142__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__14287 = elem;
(G__14287[k__$1] = v);

return G__14287;
} else {
var G__14288 = elem;
G__14288.setAttribute(k__$1,v);

return G__14288;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__14289_14303 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__14290_14304 = null;
var count__14291_14305 = (0);
var i__14292_14306 = (0);
while(true){
if((i__14292_14306 < count__14291_14305)){
var vec__14293_14307 = chunk__14290_14304.cljs$core$IIndexed$_nth$arity$2(null,i__14292_14306);
var k_14308__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14293_14307,(0),null);
var v_14309__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14293_14307,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14308__$1,v_14309__$1);

var G__14310 = seq__14289_14303;
var G__14311 = chunk__14290_14304;
var G__14312 = count__14291_14305;
var G__14313 = (i__14292_14306 + (1));
seq__14289_14303 = G__14310;
chunk__14290_14304 = G__14311;
count__14291_14305 = G__14312;
i__14292_14306 = G__14313;
continue;
} else {
var temp__4657__auto___14314 = cljs.core.seq(seq__14289_14303);
if(temp__4657__auto___14314){
var seq__14289_14315__$1 = temp__4657__auto___14314;
if(cljs.core.chunked_seq_QMARK_(seq__14289_14315__$1)){
var c__8792__auto___14316 = cljs.core.chunk_first(seq__14289_14315__$1);
var G__14317 = cljs.core.chunk_rest(seq__14289_14315__$1);
var G__14318 = c__8792__auto___14316;
var G__14319 = cljs.core.count(c__8792__auto___14316);
var G__14320 = (0);
seq__14289_14303 = G__14317;
chunk__14290_14304 = G__14318;
count__14291_14305 = G__14319;
i__14292_14306 = G__14320;
continue;
} else {
var vec__14296_14321 = cljs.core.first(seq__14289_14315__$1);
var k_14322__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14296_14321,(0),null);
var v_14323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14296_14321,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14322__$1,v_14323__$1);

var G__14324 = cljs.core.next(seq__14289_14315__$1);
var G__14325 = null;
var G__14326 = (0);
var G__14327 = (0);
seq__14289_14303 = G__14324;
chunk__14290_14304 = G__14325;
count__14291_14305 = G__14326;
i__14292_14306 = G__14327;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14282){
var G__14283 = cljs.core.first(seq14282);
var seq14282__$1 = cljs.core.next(seq14282);
var G__14284 = cljs.core.first(seq14282__$1);
var seq14282__$2 = cljs.core.next(seq14282__$1);
var G__14285 = cljs.core.first(seq14282__$2);
var seq14282__$3 = cljs.core.next(seq14282__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14283,G__14284,G__14285,seq14282__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__14332 = arguments.length;
switch (G__14332) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14339 = arguments.length;
var i__9123__auto___14340 = (0);
while(true){
if((i__9123__auto___14340 < len__9122__auto___14339)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14340]));

var G__14341 = (i__9123__auto___14340 + (1));
i__9123__auto___14340 = G__14341;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_14342__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__14333 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__14333.cljs$core$IFn$_invoke$arity$1 ? fexpr__14333.cljs$core$IFn$_invoke$arity$1(k_14342__$1) : fexpr__14333.call(null,k_14342__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_14342__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14334_14343 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__14335_14344 = null;
var count__14336_14345 = (0);
var i__14337_14346 = (0);
while(true){
if((i__14337_14346 < count__14336_14345)){
var k_14347__$1 = chunk__14335_14344.cljs$core$IIndexed$_nth$arity$2(null,i__14337_14346);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_14347__$1);

var G__14348 = seq__14334_14343;
var G__14349 = chunk__14335_14344;
var G__14350 = count__14336_14345;
var G__14351 = (i__14337_14346 + (1));
seq__14334_14343 = G__14348;
chunk__14335_14344 = G__14349;
count__14336_14345 = G__14350;
i__14337_14346 = G__14351;
continue;
} else {
var temp__4657__auto___14352 = cljs.core.seq(seq__14334_14343);
if(temp__4657__auto___14352){
var seq__14334_14353__$1 = temp__4657__auto___14352;
if(cljs.core.chunked_seq_QMARK_(seq__14334_14353__$1)){
var c__8792__auto___14354 = cljs.core.chunk_first(seq__14334_14353__$1);
var G__14355 = cljs.core.chunk_rest(seq__14334_14353__$1);
var G__14356 = c__8792__auto___14354;
var G__14357 = cljs.core.count(c__8792__auto___14354);
var G__14358 = (0);
seq__14334_14343 = G__14355;
chunk__14335_14344 = G__14356;
count__14336_14345 = G__14357;
i__14337_14346 = G__14358;
continue;
} else {
var k_14359__$1 = cljs.core.first(seq__14334_14353__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_14359__$1);

var G__14360 = cljs.core.next(seq__14334_14353__$1);
var G__14361 = null;
var G__14362 = (0);
var G__14363 = (0);
seq__14334_14343 = G__14360;
chunk__14335_14344 = G__14361;
count__14336_14345 = G__14362;
i__14337_14346 = G__14363;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14329){
var G__14330 = cljs.core.first(seq14329);
var seq14329__$1 = cljs.core.next(seq14329);
var G__14331 = cljs.core.first(seq14329__$1);
var seq14329__$2 = cljs.core.next(seq14329__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14330,G__14331,seq14329__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__14365 = arguments.length;
switch (G__14365) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14385 = arguments.length;
var i__9123__auto___14386 = (0);
while(true){
if((i__9123__auto___14386 < len__9122__auto___14385)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14386]));

var G__14387 = (i__9123__auto___14386 + (1));
i__9123__auto___14386 = G__14387;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___14388 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14388)){
var class_list_14389 = temp__4655__auto___14388;
var seq__14372_14390 = cljs.core.seq(classes__$1);
var chunk__14373_14391 = null;
var count__14374_14392 = (0);
var i__14375_14393 = (0);
while(true){
if((i__14375_14393 < count__14374_14392)){
var c_14394 = chunk__14373_14391.cljs$core$IIndexed$_nth$arity$2(null,i__14375_14393);
class_list_14389.add(c_14394);

var G__14395 = seq__14372_14390;
var G__14396 = chunk__14373_14391;
var G__14397 = count__14374_14392;
var G__14398 = (i__14375_14393 + (1));
seq__14372_14390 = G__14395;
chunk__14373_14391 = G__14396;
count__14374_14392 = G__14397;
i__14375_14393 = G__14398;
continue;
} else {
var temp__4657__auto___14399 = cljs.core.seq(seq__14372_14390);
if(temp__4657__auto___14399){
var seq__14372_14400__$1 = temp__4657__auto___14399;
if(cljs.core.chunked_seq_QMARK_(seq__14372_14400__$1)){
var c__8792__auto___14401 = cljs.core.chunk_first(seq__14372_14400__$1);
var G__14402 = cljs.core.chunk_rest(seq__14372_14400__$1);
var G__14403 = c__8792__auto___14401;
var G__14404 = cljs.core.count(c__8792__auto___14401);
var G__14405 = (0);
seq__14372_14390 = G__14402;
chunk__14373_14391 = G__14403;
count__14374_14392 = G__14404;
i__14375_14393 = G__14405;
continue;
} else {
var c_14406 = cljs.core.first(seq__14372_14400__$1);
class_list_14389.add(c_14406);

var G__14407 = cljs.core.next(seq__14372_14400__$1);
var G__14408 = null;
var G__14409 = (0);
var G__14410 = (0);
seq__14372_14390 = G__14407;
chunk__14373_14391 = G__14408;
count__14374_14392 = G__14409;
i__14375_14393 = G__14410;
continue;
}
} else {
}
}
break;
}
} else {
var seq__14376_14411 = cljs.core.seq(classes__$1);
var chunk__14377_14412 = null;
var count__14378_14413 = (0);
var i__14379_14414 = (0);
while(true){
if((i__14379_14414 < count__14378_14413)){
var c_14415 = chunk__14377_14412.cljs$core$IIndexed$_nth$arity$2(null,i__14379_14414);
var class_name_14416 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_14416,c_14415))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_14416 === ""))?c_14415:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14416)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14415)].join('')));
}

var G__14417 = seq__14376_14411;
var G__14418 = chunk__14377_14412;
var G__14419 = count__14378_14413;
var G__14420 = (i__14379_14414 + (1));
seq__14376_14411 = G__14417;
chunk__14377_14412 = G__14418;
count__14378_14413 = G__14419;
i__14379_14414 = G__14420;
continue;
} else {
var temp__4657__auto___14421 = cljs.core.seq(seq__14376_14411);
if(temp__4657__auto___14421){
var seq__14376_14422__$1 = temp__4657__auto___14421;
if(cljs.core.chunked_seq_QMARK_(seq__14376_14422__$1)){
var c__8792__auto___14423 = cljs.core.chunk_first(seq__14376_14422__$1);
var G__14424 = cljs.core.chunk_rest(seq__14376_14422__$1);
var G__14425 = c__8792__auto___14423;
var G__14426 = cljs.core.count(c__8792__auto___14423);
var G__14427 = (0);
seq__14376_14411 = G__14424;
chunk__14377_14412 = G__14425;
count__14378_14413 = G__14426;
i__14379_14414 = G__14427;
continue;
} else {
var c_14428 = cljs.core.first(seq__14376_14422__$1);
var class_name_14429 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_14429,c_14428))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_14429 === ""))?c_14428:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14429)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14428)].join('')));
}

var G__14430 = cljs.core.next(seq__14376_14422__$1);
var G__14431 = null;
var G__14432 = (0);
var G__14433 = (0);
seq__14376_14411 = G__14430;
chunk__14377_14412 = G__14431;
count__14378_14413 = G__14432;
i__14379_14414 = G__14433;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__14380_14434 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__14381_14435 = null;
var count__14382_14436 = (0);
var i__14383_14437 = (0);
while(true){
if((i__14383_14437 < count__14382_14436)){
var c_14438 = chunk__14381_14435.cljs$core$IIndexed$_nth$arity$2(null,i__14383_14437);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_14438);

var G__14439 = seq__14380_14434;
var G__14440 = chunk__14381_14435;
var G__14441 = count__14382_14436;
var G__14442 = (i__14383_14437 + (1));
seq__14380_14434 = G__14439;
chunk__14381_14435 = G__14440;
count__14382_14436 = G__14441;
i__14383_14437 = G__14442;
continue;
} else {
var temp__4657__auto___14443 = cljs.core.seq(seq__14380_14434);
if(temp__4657__auto___14443){
var seq__14380_14444__$1 = temp__4657__auto___14443;
if(cljs.core.chunked_seq_QMARK_(seq__14380_14444__$1)){
var c__8792__auto___14445 = cljs.core.chunk_first(seq__14380_14444__$1);
var G__14446 = cljs.core.chunk_rest(seq__14380_14444__$1);
var G__14447 = c__8792__auto___14445;
var G__14448 = cljs.core.count(c__8792__auto___14445);
var G__14449 = (0);
seq__14380_14434 = G__14446;
chunk__14381_14435 = G__14447;
count__14382_14436 = G__14448;
i__14383_14437 = G__14449;
continue;
} else {
var c_14450 = cljs.core.first(seq__14380_14444__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_14450);

var G__14451 = cljs.core.next(seq__14380_14444__$1);
var G__14452 = null;
var G__14453 = (0);
var G__14454 = (0);
seq__14380_14434 = G__14451;
chunk__14381_14435 = G__14452;
count__14382_14436 = G__14453;
i__14383_14437 = G__14454;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq14368){
var G__14369 = cljs.core.first(seq14368);
var seq14368__$1 = cljs.core.next(seq14368);
var G__14370 = cljs.core.first(seq14368__$1);
var seq14368__$2 = cljs.core.next(seq14368__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14369,G__14370,seq14368__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__14459 = arguments.length;
switch (G__14459) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14465 = arguments.length;
var i__9123__auto___14466 = (0);
while(true){
if((i__9123__auto___14466 < len__9122__auto___14465)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14466]));

var G__14467 = (i__9123__auto___14466 + (1));
i__9123__auto___14466 = G__14467;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___14468 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14468)){
var class_list_14469 = temp__4655__auto___14468;
class_list_14469.remove(c__$1);
} else {
var class_name_14470 = dommy.core.class$(elem);
var new_class_name_14471 = dommy.utils.remove_class_str(class_name_14470,c__$1);
if((class_name_14470 === new_class_name_14471)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_14471);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__14460 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__14461 = null;
var count__14462 = (0);
var i__14463 = (0);
while(true){
if((i__14463 < count__14462)){
var c = chunk__14461.cljs$core$IIndexed$_nth$arity$2(null,i__14463);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__14472 = seq__14460;
var G__14473 = chunk__14461;
var G__14474 = count__14462;
var G__14475 = (i__14463 + (1));
seq__14460 = G__14472;
chunk__14461 = G__14473;
count__14462 = G__14474;
i__14463 = G__14475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14460);
if(temp__4657__auto__){
var seq__14460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14460__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__14460__$1);
var G__14476 = cljs.core.chunk_rest(seq__14460__$1);
var G__14477 = c__8792__auto__;
var G__14478 = cljs.core.count(c__8792__auto__);
var G__14479 = (0);
seq__14460 = G__14476;
chunk__14461 = G__14477;
count__14462 = G__14478;
i__14463 = G__14479;
continue;
} else {
var c = cljs.core.first(seq__14460__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__14480 = cljs.core.next(seq__14460__$1);
var G__14481 = null;
var G__14482 = (0);
var G__14483 = (0);
seq__14460 = G__14480;
chunk__14461 = G__14481;
count__14462 = G__14482;
i__14463 = G__14483;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq14456){
var G__14457 = cljs.core.first(seq14456);
var seq14456__$1 = cljs.core.next(seq14456);
var G__14458 = cljs.core.first(seq14456__$1);
var seq14456__$2 = cljs.core.next(seq14456__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14457,G__14458,seq14456__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__14485 = arguments.length;
switch (G__14485) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___14487 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14487)){
var class_list_14488 = temp__4655__auto___14487;
class_list_14488.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__14493 = arguments.length;
switch (G__14493) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__14499 = arguments.length;
switch (G__14499) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14506 = arguments.length;
var i__9123__auto___14507 = (0);
while(true){
if((i__9123__auto___14507 < len__9122__auto___14506)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14507]));

var G__14508 = (i__9123__auto___14507 + (1));
i__9123__auto___14507 = G__14508;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__14500 = parent;
G__14500.appendChild(child);

return G__14500;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__14501_14509 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__14502_14510 = null;
var count__14503_14511 = (0);
var i__14504_14512 = (0);
while(true){
if((i__14504_14512 < count__14503_14511)){
var c_14513 = chunk__14502_14510.cljs$core$IIndexed$_nth$arity$2(null,i__14504_14512);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_14513);

var G__14514 = seq__14501_14509;
var G__14515 = chunk__14502_14510;
var G__14516 = count__14503_14511;
var G__14517 = (i__14504_14512 + (1));
seq__14501_14509 = G__14514;
chunk__14502_14510 = G__14515;
count__14503_14511 = G__14516;
i__14504_14512 = G__14517;
continue;
} else {
var temp__4657__auto___14518 = cljs.core.seq(seq__14501_14509);
if(temp__4657__auto___14518){
var seq__14501_14519__$1 = temp__4657__auto___14518;
if(cljs.core.chunked_seq_QMARK_(seq__14501_14519__$1)){
var c__8792__auto___14520 = cljs.core.chunk_first(seq__14501_14519__$1);
var G__14521 = cljs.core.chunk_rest(seq__14501_14519__$1);
var G__14522 = c__8792__auto___14520;
var G__14523 = cljs.core.count(c__8792__auto___14520);
var G__14524 = (0);
seq__14501_14509 = G__14521;
chunk__14502_14510 = G__14522;
count__14503_14511 = G__14523;
i__14504_14512 = G__14524;
continue;
} else {
var c_14525 = cljs.core.first(seq__14501_14519__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_14525);

var G__14526 = cljs.core.next(seq__14501_14519__$1);
var G__14527 = null;
var G__14528 = (0);
var G__14529 = (0);
seq__14501_14509 = G__14526;
chunk__14502_14510 = G__14527;
count__14503_14511 = G__14528;
i__14504_14512 = G__14529;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq14496){
var G__14497 = cljs.core.first(seq14496);
var seq14496__$1 = cljs.core.next(seq14496);
var G__14498 = cljs.core.first(seq14496__$1);
var seq14496__$2 = cljs.core.next(seq14496__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14497,G__14498,seq14496__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__14534 = arguments.length;
switch (G__14534) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14541 = arguments.length;
var i__9123__auto___14542 = (0);
while(true){
if((i__9123__auto___14542 < len__9122__auto___14541)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14542]));

var G__14543 = (i__9123__auto___14542 + (1));
i__9123__auto___14542 = G__14543;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__14535 = parent;
G__14535.insertBefore(child,parent.firstChild);

return G__14535;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__14536_14544 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__14537_14545 = null;
var count__14538_14546 = (0);
var i__14539_14547 = (0);
while(true){
if((i__14539_14547 < count__14538_14546)){
var c_14548 = chunk__14537_14545.cljs$core$IIndexed$_nth$arity$2(null,i__14539_14547);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_14548);

var G__14549 = seq__14536_14544;
var G__14550 = chunk__14537_14545;
var G__14551 = count__14538_14546;
var G__14552 = (i__14539_14547 + (1));
seq__14536_14544 = G__14549;
chunk__14537_14545 = G__14550;
count__14538_14546 = G__14551;
i__14539_14547 = G__14552;
continue;
} else {
var temp__4657__auto___14553 = cljs.core.seq(seq__14536_14544);
if(temp__4657__auto___14553){
var seq__14536_14554__$1 = temp__4657__auto___14553;
if(cljs.core.chunked_seq_QMARK_(seq__14536_14554__$1)){
var c__8792__auto___14555 = cljs.core.chunk_first(seq__14536_14554__$1);
var G__14556 = cljs.core.chunk_rest(seq__14536_14554__$1);
var G__14557 = c__8792__auto___14555;
var G__14558 = cljs.core.count(c__8792__auto___14555);
var G__14559 = (0);
seq__14536_14544 = G__14556;
chunk__14537_14545 = G__14557;
count__14538_14546 = G__14558;
i__14539_14547 = G__14559;
continue;
} else {
var c_14560 = cljs.core.first(seq__14536_14554__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_14560);

var G__14561 = cljs.core.next(seq__14536_14554__$1);
var G__14562 = null;
var G__14563 = (0);
var G__14564 = (0);
seq__14536_14544 = G__14561;
chunk__14537_14545 = G__14562;
count__14538_14546 = G__14563;
i__14539_14547 = G__14564;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq14531){
var G__14532 = cljs.core.first(seq14531);
var seq14531__$1 = cljs.core.next(seq14531);
var G__14533 = cljs.core.first(seq14531__$1);
var seq14531__$2 = cljs.core.next(seq14531__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14532,G__14533,seq14531__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___14565 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___14565)){
var next_14566 = temp__4655__auto___14565;
dommy.core.insert_before_BANG_(elem,next_14566);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__14568 = arguments.length;
switch (G__14568) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__14569 = p;
G__14569.removeChild(elem);

return G__14569;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14571){
var vec__14572 = p__14571;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14572,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14572,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__14572,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__14572,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__7953__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__7941__auto__ = related_target;
if(cljs.core.truth_(and__7941__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__7941__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__14572,special_mouse_event,real_mouse_event))
});})(vec__14572,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__7941__auto__ = selected_target;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__7941__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__7953__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14578 = arguments.length;
var i__9123__auto___14579 = (0);
while(true){
if((i__9123__auto___14579 < len__9122__auto___14578)){
args__9129__auto__.push((arguments[i__9123__auto___14579]));

var G__14580 = (i__9123__auto___14579 + (1));
i__9123__auto___14579 = G__14580;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq14575){
var G__14576 = cljs.core.first(seq14575);
var seq14575__$1 = cljs.core.next(seq14575);
var G__14577 = cljs.core.first(seq14575__$1);
var seq14575__$2 = cljs.core.next(seq14575__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14576,G__14577,seq14575__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__14581 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__14581.cljs$core$IFn$_invoke$arity$1 ? fexpr__14581.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__14581.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14629 = arguments.length;
var i__9123__auto___14630 = (0);
while(true){
if((i__9123__auto___14630 < len__9122__auto___14629)){
args__9129__auto__.push((arguments[i__9123__auto___14630]));

var G__14631 = (i__9123__auto___14630 + (1));
i__9123__auto___14630 = G__14631;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__14584_14632 = dommy.core.elem_and_selector(elem_sel);
var elem_14633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14584_14632,(0),null);
var selector_14634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14584_14632,(1),null);
var seq__14587_14635 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__14594_14636 = null;
var count__14595_14637 = (0);
var i__14596_14638 = (0);
while(true){
if((i__14596_14638 < count__14595_14637)){
var vec__14603_14639 = chunk__14594_14636.cljs$core$IIndexed$_nth$arity$2(null,i__14596_14638);
var orig_type_14640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603_14639,(0),null);
var f_14641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603_14639,(1),null);
var seq__14597_14642 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14640,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_14640,cljs.core.identity])));
var chunk__14599_14643 = null;
var count__14600_14644 = (0);
var i__14601_14645 = (0);
while(true){
if((i__14601_14645 < count__14600_14644)){
var vec__14606_14646 = chunk__14599_14643.cljs$core$IIndexed$_nth$arity$2(null,i__14601_14645);
var actual_type_14647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14606_14646,(0),null);
var factory_14648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14606_14646,(1),null);
var canonical_f_14649 = (function (){var G__14610 = (factory_14648.cljs$core$IFn$_invoke$arity$1 ? factory_14648.cljs$core$IFn$_invoke$arity$1(f_14641) : factory_14648.call(null,f_14641));
var fexpr__14609 = (cljs.core.truth_(selector_14634)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14633,selector_14634):cljs.core.identity);
return (fexpr__14609.cljs$core$IFn$_invoke$arity$1 ? fexpr__14609.cljs$core$IFn$_invoke$arity$1(G__14610) : fexpr__14609.call(null,G__14610));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14633,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14634,actual_type_14647,f_14641], null),canonical_f_14649], 0));

if(cljs.core.truth_(elem_14633.addEventListener)){
elem_14633.addEventListener(cljs.core.name(actual_type_14647),canonical_f_14649);
} else {
elem_14633.attachEvent(cljs.core.name(actual_type_14647),canonical_f_14649);
}

var G__14650 = seq__14597_14642;
var G__14651 = chunk__14599_14643;
var G__14652 = count__14600_14644;
var G__14653 = (i__14601_14645 + (1));
seq__14597_14642 = G__14650;
chunk__14599_14643 = G__14651;
count__14600_14644 = G__14652;
i__14601_14645 = G__14653;
continue;
} else {
var temp__4657__auto___14654 = cljs.core.seq(seq__14597_14642);
if(temp__4657__auto___14654){
var seq__14597_14655__$1 = temp__4657__auto___14654;
if(cljs.core.chunked_seq_QMARK_(seq__14597_14655__$1)){
var c__8792__auto___14656 = cljs.core.chunk_first(seq__14597_14655__$1);
var G__14657 = cljs.core.chunk_rest(seq__14597_14655__$1);
var G__14658 = c__8792__auto___14656;
var G__14659 = cljs.core.count(c__8792__auto___14656);
var G__14660 = (0);
seq__14597_14642 = G__14657;
chunk__14599_14643 = G__14658;
count__14600_14644 = G__14659;
i__14601_14645 = G__14660;
continue;
} else {
var vec__14611_14661 = cljs.core.first(seq__14597_14655__$1);
var actual_type_14662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14611_14661,(0),null);
var factory_14663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14611_14661,(1),null);
var canonical_f_14664 = (function (){var G__14615 = (factory_14663.cljs$core$IFn$_invoke$arity$1 ? factory_14663.cljs$core$IFn$_invoke$arity$1(f_14641) : factory_14663.call(null,f_14641));
var fexpr__14614 = (cljs.core.truth_(selector_14634)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14633,selector_14634):cljs.core.identity);
return (fexpr__14614.cljs$core$IFn$_invoke$arity$1 ? fexpr__14614.cljs$core$IFn$_invoke$arity$1(G__14615) : fexpr__14614.call(null,G__14615));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14633,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14634,actual_type_14662,f_14641], null),canonical_f_14664], 0));

if(cljs.core.truth_(elem_14633.addEventListener)){
elem_14633.addEventListener(cljs.core.name(actual_type_14662),canonical_f_14664);
} else {
elem_14633.attachEvent(cljs.core.name(actual_type_14662),canonical_f_14664);
}

var G__14665 = cljs.core.next(seq__14597_14655__$1);
var G__14666 = null;
var G__14667 = (0);
var G__14668 = (0);
seq__14597_14642 = G__14665;
chunk__14599_14643 = G__14666;
count__14600_14644 = G__14667;
i__14601_14645 = G__14668;
continue;
}
} else {
}
}
break;
}

var G__14669 = seq__14587_14635;
var G__14670 = chunk__14594_14636;
var G__14671 = count__14595_14637;
var G__14672 = (i__14596_14638 + (1));
seq__14587_14635 = G__14669;
chunk__14594_14636 = G__14670;
count__14595_14637 = G__14671;
i__14596_14638 = G__14672;
continue;
} else {
var temp__4657__auto___14673 = cljs.core.seq(seq__14587_14635);
if(temp__4657__auto___14673){
var seq__14587_14674__$1 = temp__4657__auto___14673;
if(cljs.core.chunked_seq_QMARK_(seq__14587_14674__$1)){
var c__8792__auto___14675 = cljs.core.chunk_first(seq__14587_14674__$1);
var G__14676 = cljs.core.chunk_rest(seq__14587_14674__$1);
var G__14677 = c__8792__auto___14675;
var G__14678 = cljs.core.count(c__8792__auto___14675);
var G__14679 = (0);
seq__14587_14635 = G__14676;
chunk__14594_14636 = G__14677;
count__14595_14637 = G__14678;
i__14596_14638 = G__14679;
continue;
} else {
var vec__14616_14680 = cljs.core.first(seq__14587_14674__$1);
var orig_type_14681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616_14680,(0),null);
var f_14682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616_14680,(1),null);
var seq__14588_14683 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14681,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_14681,cljs.core.identity])));
var chunk__14590_14684 = null;
var count__14591_14685 = (0);
var i__14592_14686 = (0);
while(true){
if((i__14592_14686 < count__14591_14685)){
var vec__14619_14687 = chunk__14590_14684.cljs$core$IIndexed$_nth$arity$2(null,i__14592_14686);
var actual_type_14688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14619_14687,(0),null);
var factory_14689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14619_14687,(1),null);
var canonical_f_14690 = (function (){var G__14623 = (factory_14689.cljs$core$IFn$_invoke$arity$1 ? factory_14689.cljs$core$IFn$_invoke$arity$1(f_14682) : factory_14689.call(null,f_14682));
var fexpr__14622 = (cljs.core.truth_(selector_14634)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14633,selector_14634):cljs.core.identity);
return (fexpr__14622.cljs$core$IFn$_invoke$arity$1 ? fexpr__14622.cljs$core$IFn$_invoke$arity$1(G__14623) : fexpr__14622.call(null,G__14623));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14633,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14634,actual_type_14688,f_14682], null),canonical_f_14690], 0));

if(cljs.core.truth_(elem_14633.addEventListener)){
elem_14633.addEventListener(cljs.core.name(actual_type_14688),canonical_f_14690);
} else {
elem_14633.attachEvent(cljs.core.name(actual_type_14688),canonical_f_14690);
}

var G__14691 = seq__14588_14683;
var G__14692 = chunk__14590_14684;
var G__14693 = count__14591_14685;
var G__14694 = (i__14592_14686 + (1));
seq__14588_14683 = G__14691;
chunk__14590_14684 = G__14692;
count__14591_14685 = G__14693;
i__14592_14686 = G__14694;
continue;
} else {
var temp__4657__auto___14695__$1 = cljs.core.seq(seq__14588_14683);
if(temp__4657__auto___14695__$1){
var seq__14588_14696__$1 = temp__4657__auto___14695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14588_14696__$1)){
var c__8792__auto___14697 = cljs.core.chunk_first(seq__14588_14696__$1);
var G__14698 = cljs.core.chunk_rest(seq__14588_14696__$1);
var G__14699 = c__8792__auto___14697;
var G__14700 = cljs.core.count(c__8792__auto___14697);
var G__14701 = (0);
seq__14588_14683 = G__14698;
chunk__14590_14684 = G__14699;
count__14591_14685 = G__14700;
i__14592_14686 = G__14701;
continue;
} else {
var vec__14624_14702 = cljs.core.first(seq__14588_14696__$1);
var actual_type_14703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624_14702,(0),null);
var factory_14704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624_14702,(1),null);
var canonical_f_14705 = (function (){var G__14628 = (factory_14704.cljs$core$IFn$_invoke$arity$1 ? factory_14704.cljs$core$IFn$_invoke$arity$1(f_14682) : factory_14704.call(null,f_14682));
var fexpr__14627 = (cljs.core.truth_(selector_14634)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14633,selector_14634):cljs.core.identity);
return (fexpr__14627.cljs$core$IFn$_invoke$arity$1 ? fexpr__14627.cljs$core$IFn$_invoke$arity$1(G__14628) : fexpr__14627.call(null,G__14628));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14633,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14634,actual_type_14703,f_14682], null),canonical_f_14705], 0));

if(cljs.core.truth_(elem_14633.addEventListener)){
elem_14633.addEventListener(cljs.core.name(actual_type_14703),canonical_f_14705);
} else {
elem_14633.attachEvent(cljs.core.name(actual_type_14703),canonical_f_14705);
}

var G__14706 = cljs.core.next(seq__14588_14696__$1);
var G__14707 = null;
var G__14708 = (0);
var G__14709 = (0);
seq__14588_14683 = G__14706;
chunk__14590_14684 = G__14707;
count__14591_14685 = G__14708;
i__14592_14686 = G__14709;
continue;
}
} else {
}
}
break;
}

var G__14710 = cljs.core.next(seq__14587_14674__$1);
var G__14711 = null;
var G__14712 = (0);
var G__14713 = (0);
seq__14587_14635 = G__14710;
chunk__14594_14636 = G__14711;
count__14595_14637 = G__14712;
i__14596_14638 = G__14713;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq14582){
var G__14583 = cljs.core.first(seq14582);
var seq14582__$1 = cljs.core.next(seq14582);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14583,seq14582__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14753 = arguments.length;
var i__9123__auto___14754 = (0);
while(true){
if((i__9123__auto___14754 < len__9122__auto___14753)){
args__9129__auto__.push((arguments[i__9123__auto___14754]));

var G__14755 = (i__9123__auto___14754 + (1));
i__9123__auto___14754 = G__14755;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__14716_14756 = dommy.core.elem_and_selector(elem_sel);
var elem_14757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14716_14756,(0),null);
var selector_14758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14716_14756,(1),null);
var seq__14719_14759 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__14726_14760 = null;
var count__14727_14761 = (0);
var i__14728_14762 = (0);
while(true){
if((i__14728_14762 < count__14727_14761)){
var vec__14735_14763 = chunk__14726_14760.cljs$core$IIndexed$_nth$arity$2(null,i__14728_14762);
var orig_type_14764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735_14763,(0),null);
var f_14765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735_14763,(1),null);
var seq__14729_14766 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14764,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_14764,cljs.core.identity])));
var chunk__14731_14767 = null;
var count__14732_14768 = (0);
var i__14733_14769 = (0);
while(true){
if((i__14733_14769 < count__14732_14768)){
var vec__14738_14770 = chunk__14731_14767.cljs$core$IIndexed$_nth$arity$2(null,i__14733_14769);
var actual_type_14771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738_14770,(0),null);
var __14772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738_14770,(1),null);
var keys_14773 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14758,actual_type_14771,f_14765], null);
var canonical_f_14774 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_14757),keys_14773);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14757,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_14773], 0));

if(cljs.core.truth_(elem_14757.removeEventListener)){
elem_14757.removeEventListener(cljs.core.name(actual_type_14771),canonical_f_14774);
} else {
elem_14757.detachEvent(cljs.core.name(actual_type_14771),canonical_f_14774);
}

var G__14775 = seq__14729_14766;
var G__14776 = chunk__14731_14767;
var G__14777 = count__14732_14768;
var G__14778 = (i__14733_14769 + (1));
seq__14729_14766 = G__14775;
chunk__14731_14767 = G__14776;
count__14732_14768 = G__14777;
i__14733_14769 = G__14778;
continue;
} else {
var temp__4657__auto___14779 = cljs.core.seq(seq__14729_14766);
if(temp__4657__auto___14779){
var seq__14729_14780__$1 = temp__4657__auto___14779;
if(cljs.core.chunked_seq_QMARK_(seq__14729_14780__$1)){
var c__8792__auto___14781 = cljs.core.chunk_first(seq__14729_14780__$1);
var G__14782 = cljs.core.chunk_rest(seq__14729_14780__$1);
var G__14783 = c__8792__auto___14781;
var G__14784 = cljs.core.count(c__8792__auto___14781);
var G__14785 = (0);
seq__14729_14766 = G__14782;
chunk__14731_14767 = G__14783;
count__14732_14768 = G__14784;
i__14733_14769 = G__14785;
continue;
} else {
var vec__14741_14786 = cljs.core.first(seq__14729_14780__$1);
var actual_type_14787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14741_14786,(0),null);
var __14788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14741_14786,(1),null);
var keys_14789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14758,actual_type_14787,f_14765], null);
var canonical_f_14790 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_14757),keys_14789);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14757,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_14789], 0));

if(cljs.core.truth_(elem_14757.removeEventListener)){
elem_14757.removeEventListener(cljs.core.name(actual_type_14787),canonical_f_14790);
} else {
elem_14757.detachEvent(cljs.core.name(actual_type_14787),canonical_f_14790);
}

var G__14791 = cljs.core.next(seq__14729_14780__$1);
var G__14792 = null;
var G__14793 = (0);
var G__14794 = (0);
seq__14729_14766 = G__14791;
chunk__14731_14767 = G__14792;
count__14732_14768 = G__14793;
i__14733_14769 = G__14794;
continue;
}
} else {
}
}
break;
}

var G__14795 = seq__14719_14759;
var G__14796 = chunk__14726_14760;
var G__14797 = count__14727_14761;
var G__14798 = (i__14728_14762 + (1));
seq__14719_14759 = G__14795;
chunk__14726_14760 = G__14796;
count__14727_14761 = G__14797;
i__14728_14762 = G__14798;
continue;
} else {
var temp__4657__auto___14799 = cljs.core.seq(seq__14719_14759);
if(temp__4657__auto___14799){
var seq__14719_14800__$1 = temp__4657__auto___14799;
if(cljs.core.chunked_seq_QMARK_(seq__14719_14800__$1)){
var c__8792__auto___14801 = cljs.core.chunk_first(seq__14719_14800__$1);
var G__14802 = cljs.core.chunk_rest(seq__14719_14800__$1);
var G__14803 = c__8792__auto___14801;
var G__14804 = cljs.core.count(c__8792__auto___14801);
var G__14805 = (0);
seq__14719_14759 = G__14802;
chunk__14726_14760 = G__14803;
count__14727_14761 = G__14804;
i__14728_14762 = G__14805;
continue;
} else {
var vec__14744_14806 = cljs.core.first(seq__14719_14800__$1);
var orig_type_14807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14744_14806,(0),null);
var f_14808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14744_14806,(1),null);
var seq__14720_14809 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14807,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_14807,cljs.core.identity])));
var chunk__14722_14810 = null;
var count__14723_14811 = (0);
var i__14724_14812 = (0);
while(true){
if((i__14724_14812 < count__14723_14811)){
var vec__14747_14813 = chunk__14722_14810.cljs$core$IIndexed$_nth$arity$2(null,i__14724_14812);
var actual_type_14814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747_14813,(0),null);
var __14815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747_14813,(1),null);
var keys_14816 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14758,actual_type_14814,f_14808], null);
var canonical_f_14817 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_14757),keys_14816);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14757,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_14816], 0));

if(cljs.core.truth_(elem_14757.removeEventListener)){
elem_14757.removeEventListener(cljs.core.name(actual_type_14814),canonical_f_14817);
} else {
elem_14757.detachEvent(cljs.core.name(actual_type_14814),canonical_f_14817);
}

var G__14818 = seq__14720_14809;
var G__14819 = chunk__14722_14810;
var G__14820 = count__14723_14811;
var G__14821 = (i__14724_14812 + (1));
seq__14720_14809 = G__14818;
chunk__14722_14810 = G__14819;
count__14723_14811 = G__14820;
i__14724_14812 = G__14821;
continue;
} else {
var temp__4657__auto___14822__$1 = cljs.core.seq(seq__14720_14809);
if(temp__4657__auto___14822__$1){
var seq__14720_14823__$1 = temp__4657__auto___14822__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14720_14823__$1)){
var c__8792__auto___14824 = cljs.core.chunk_first(seq__14720_14823__$1);
var G__14825 = cljs.core.chunk_rest(seq__14720_14823__$1);
var G__14826 = c__8792__auto___14824;
var G__14827 = cljs.core.count(c__8792__auto___14824);
var G__14828 = (0);
seq__14720_14809 = G__14825;
chunk__14722_14810 = G__14826;
count__14723_14811 = G__14827;
i__14724_14812 = G__14828;
continue;
} else {
var vec__14750_14829 = cljs.core.first(seq__14720_14823__$1);
var actual_type_14830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750_14829,(0),null);
var __14831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750_14829,(1),null);
var keys_14832 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14758,actual_type_14830,f_14808], null);
var canonical_f_14833 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_14757),keys_14832);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14757,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_14832], 0));

if(cljs.core.truth_(elem_14757.removeEventListener)){
elem_14757.removeEventListener(cljs.core.name(actual_type_14830),canonical_f_14833);
} else {
elem_14757.detachEvent(cljs.core.name(actual_type_14830),canonical_f_14833);
}

var G__14834 = cljs.core.next(seq__14720_14823__$1);
var G__14835 = null;
var G__14836 = (0);
var G__14837 = (0);
seq__14720_14809 = G__14834;
chunk__14722_14810 = G__14835;
count__14723_14811 = G__14836;
i__14724_14812 = G__14837;
continue;
}
} else {
}
}
break;
}

var G__14838 = cljs.core.next(seq__14719_14800__$1);
var G__14839 = null;
var G__14840 = (0);
var G__14841 = (0);
seq__14719_14759 = G__14838;
chunk__14726_14760 = G__14839;
count__14727_14761 = G__14840;
i__14728_14762 = G__14841;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq14714){
var G__14715 = cljs.core.first(seq14714);
var seq14714__$1 = cljs.core.next(seq14714);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14715,seq14714__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14857 = arguments.length;
var i__9123__auto___14858 = (0);
while(true){
if((i__9123__auto___14858 < len__9122__auto___14857)){
args__9129__auto__.push((arguments[i__9123__auto___14858]));

var G__14859 = (i__9123__auto___14858 + (1));
i__9123__auto___14858 = G__14859;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__14844_14860 = dommy.core.elem_and_selector(elem_sel);
var elem_14861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844_14860,(0),null);
var selector_14862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844_14860,(1),null);
var seq__14847_14863 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__14848_14864 = null;
var count__14849_14865 = (0);
var i__14850_14866 = (0);
while(true){
if((i__14850_14866 < count__14849_14865)){
var vec__14851_14867 = chunk__14848_14864.cljs$core$IIndexed$_nth$arity$2(null,i__14850_14866);
var type_14868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851_14867,(0),null);
var f_14869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851_14867,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_14868,((function (seq__14847_14863,chunk__14848_14864,count__14849_14865,i__14850_14866,vec__14851_14867,type_14868,f_14869,vec__14844_14860,elem_14861,selector_14862){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_14868,dommy$core$this_fn], 0));

return (f_14869.cljs$core$IFn$_invoke$arity$1 ? f_14869.cljs$core$IFn$_invoke$arity$1(e) : f_14869.call(null,e));
});})(seq__14847_14863,chunk__14848_14864,count__14849_14865,i__14850_14866,vec__14851_14867,type_14868,f_14869,vec__14844_14860,elem_14861,selector_14862))
], 0));

var G__14870 = seq__14847_14863;
var G__14871 = chunk__14848_14864;
var G__14872 = count__14849_14865;
var G__14873 = (i__14850_14866 + (1));
seq__14847_14863 = G__14870;
chunk__14848_14864 = G__14871;
count__14849_14865 = G__14872;
i__14850_14866 = G__14873;
continue;
} else {
var temp__4657__auto___14874 = cljs.core.seq(seq__14847_14863);
if(temp__4657__auto___14874){
var seq__14847_14875__$1 = temp__4657__auto___14874;
if(cljs.core.chunked_seq_QMARK_(seq__14847_14875__$1)){
var c__8792__auto___14876 = cljs.core.chunk_first(seq__14847_14875__$1);
var G__14877 = cljs.core.chunk_rest(seq__14847_14875__$1);
var G__14878 = c__8792__auto___14876;
var G__14879 = cljs.core.count(c__8792__auto___14876);
var G__14880 = (0);
seq__14847_14863 = G__14877;
chunk__14848_14864 = G__14878;
count__14849_14865 = G__14879;
i__14850_14866 = G__14880;
continue;
} else {
var vec__14854_14881 = cljs.core.first(seq__14847_14875__$1);
var type_14882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854_14881,(0),null);
var f_14883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854_14881,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_14882,((function (seq__14847_14863,chunk__14848_14864,count__14849_14865,i__14850_14866,vec__14854_14881,type_14882,f_14883,seq__14847_14875__$1,temp__4657__auto___14874,vec__14844_14860,elem_14861,selector_14862){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_14882,dommy$core$this_fn], 0));

return (f_14883.cljs$core$IFn$_invoke$arity$1 ? f_14883.cljs$core$IFn$_invoke$arity$1(e) : f_14883.call(null,e));
});})(seq__14847_14863,chunk__14848_14864,count__14849_14865,i__14850_14866,vec__14854_14881,type_14882,f_14883,seq__14847_14875__$1,temp__4657__auto___14874,vec__14844_14860,elem_14861,selector_14862))
], 0));

var G__14884 = cljs.core.next(seq__14847_14875__$1);
var G__14885 = null;
var G__14886 = (0);
var G__14887 = (0);
seq__14847_14863 = G__14884;
chunk__14848_14864 = G__14885;
count__14849_14865 = G__14886;
i__14850_14866 = G__14887;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq14842){
var G__14843 = cljs.core.first(seq14842);
var seq14842__$1 = cljs.core.next(seq14842);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14843,seq14842__$1);
});

