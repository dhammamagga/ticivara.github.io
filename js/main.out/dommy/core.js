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
var G__15267 = arguments.length;
switch (G__15267) {
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
var G__15270 = arguments.length;
switch (G__15270) {
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
var G__15274 = arguments.length;
switch (G__15274) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15272_SHARP_){
return !((p1__15272_SHARP_ === base));
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
var len__9122__auto___15288 = arguments.length;
var i__9123__auto___15289 = (0);
while(true){
if((i__9123__auto___15289 < len__9122__auto___15288)){
args__9129__auto__.push((arguments[i__9123__auto___15289]));

var G__15290 = (i__9123__auto___15289 + (1));
i__9123__auto___15289 = G__15290;
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
var seq__15278_15291 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15279_15292 = null;
var count__15280_15293 = (0);
var i__15281_15294 = (0);
while(true){
if((i__15281_15294 < count__15280_15293)){
var vec__15282_15295 = chunk__15279_15292.cljs$core$IIndexed$_nth$arity$2(null,i__15281_15294);
var k_15296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282_15295,(0),null);
var v_15297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282_15295,(1),null);
style.setProperty(dommy.utils.as_str(k_15296),v_15297);

var G__15298 = seq__15278_15291;
var G__15299 = chunk__15279_15292;
var G__15300 = count__15280_15293;
var G__15301 = (i__15281_15294 + (1));
seq__15278_15291 = G__15298;
chunk__15279_15292 = G__15299;
count__15280_15293 = G__15300;
i__15281_15294 = G__15301;
continue;
} else {
var temp__4657__auto___15302 = cljs.core.seq(seq__15278_15291);
if(temp__4657__auto___15302){
var seq__15278_15303__$1 = temp__4657__auto___15302;
if(cljs.core.chunked_seq_QMARK_(seq__15278_15303__$1)){
var c__8792__auto___15304 = cljs.core.chunk_first(seq__15278_15303__$1);
var G__15305 = cljs.core.chunk_rest(seq__15278_15303__$1);
var G__15306 = c__8792__auto___15304;
var G__15307 = cljs.core.count(c__8792__auto___15304);
var G__15308 = (0);
seq__15278_15291 = G__15305;
chunk__15279_15292 = G__15306;
count__15280_15293 = G__15307;
i__15281_15294 = G__15308;
continue;
} else {
var vec__15285_15309 = cljs.core.first(seq__15278_15303__$1);
var k_15310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15285_15309,(0),null);
var v_15311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15285_15309,(1),null);
style.setProperty(dommy.utils.as_str(k_15310),v_15311);

var G__15312 = cljs.core.next(seq__15278_15303__$1);
var G__15313 = null;
var G__15314 = (0);
var G__15315 = (0);
seq__15278_15291 = G__15312;
chunk__15279_15292 = G__15313;
count__15280_15293 = G__15314;
i__15281_15294 = G__15315;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15276){
var G__15277 = cljs.core.first(seq15276);
var seq15276__$1 = cljs.core.next(seq15276);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15277,seq15276__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15322 = arguments.length;
var i__9123__auto___15323 = (0);
while(true){
if((i__9123__auto___15323 < len__9122__auto___15322)){
args__9129__auto__.push((arguments[i__9123__auto___15323]));

var G__15324 = (i__9123__auto___15323 + (1));
i__9123__auto___15323 = G__15324;
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
var seq__15318_15325 = cljs.core.seq(keywords);
var chunk__15319_15326 = null;
var count__15320_15327 = (0);
var i__15321_15328 = (0);
while(true){
if((i__15321_15328 < count__15320_15327)){
var kw_15329 = chunk__15319_15326.cljs$core$IIndexed$_nth$arity$2(null,i__15321_15328);
style.removeProperty(dommy.utils.as_str(kw_15329));

var G__15330 = seq__15318_15325;
var G__15331 = chunk__15319_15326;
var G__15332 = count__15320_15327;
var G__15333 = (i__15321_15328 + (1));
seq__15318_15325 = G__15330;
chunk__15319_15326 = G__15331;
count__15320_15327 = G__15332;
i__15321_15328 = G__15333;
continue;
} else {
var temp__4657__auto___15334 = cljs.core.seq(seq__15318_15325);
if(temp__4657__auto___15334){
var seq__15318_15335__$1 = temp__4657__auto___15334;
if(cljs.core.chunked_seq_QMARK_(seq__15318_15335__$1)){
var c__8792__auto___15336 = cljs.core.chunk_first(seq__15318_15335__$1);
var G__15337 = cljs.core.chunk_rest(seq__15318_15335__$1);
var G__15338 = c__8792__auto___15336;
var G__15339 = cljs.core.count(c__8792__auto___15336);
var G__15340 = (0);
seq__15318_15325 = G__15337;
chunk__15319_15326 = G__15338;
count__15320_15327 = G__15339;
i__15321_15328 = G__15340;
continue;
} else {
var kw_15341 = cljs.core.first(seq__15318_15335__$1);
style.removeProperty(dommy.utils.as_str(kw_15341));

var G__15342 = cljs.core.next(seq__15318_15335__$1);
var G__15343 = null;
var G__15344 = (0);
var G__15345 = (0);
seq__15318_15325 = G__15342;
chunk__15319_15326 = G__15343;
count__15320_15327 = G__15344;
i__15321_15328 = G__15345;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15316){
var G__15317 = cljs.core.first(seq15316);
var seq15316__$1 = cljs.core.next(seq15316);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15317,seq15316__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15358 = arguments.length;
var i__9123__auto___15359 = (0);
while(true){
if((i__9123__auto___15359 < len__9122__auto___15358)){
args__9129__auto__.push((arguments[i__9123__auto___15359]));

var G__15360 = (i__9123__auto___15359 + (1));
i__9123__auto___15359 = G__15360;
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

var seq__15348_15361 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15349_15362 = null;
var count__15350_15363 = (0);
var i__15351_15364 = (0);
while(true){
if((i__15351_15364 < count__15350_15363)){
var vec__15352_15365 = chunk__15349_15362.cljs$core$IIndexed$_nth$arity$2(null,i__15351_15364);
var k_15366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352_15365,(0),null);
var v_15367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352_15365,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15366,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15367),"px"].join('')], 0));

var G__15368 = seq__15348_15361;
var G__15369 = chunk__15349_15362;
var G__15370 = count__15350_15363;
var G__15371 = (i__15351_15364 + (1));
seq__15348_15361 = G__15368;
chunk__15349_15362 = G__15369;
count__15350_15363 = G__15370;
i__15351_15364 = G__15371;
continue;
} else {
var temp__4657__auto___15372 = cljs.core.seq(seq__15348_15361);
if(temp__4657__auto___15372){
var seq__15348_15373__$1 = temp__4657__auto___15372;
if(cljs.core.chunked_seq_QMARK_(seq__15348_15373__$1)){
var c__8792__auto___15374 = cljs.core.chunk_first(seq__15348_15373__$1);
var G__15375 = cljs.core.chunk_rest(seq__15348_15373__$1);
var G__15376 = c__8792__auto___15374;
var G__15377 = cljs.core.count(c__8792__auto___15374);
var G__15378 = (0);
seq__15348_15361 = G__15375;
chunk__15349_15362 = G__15376;
count__15350_15363 = G__15377;
i__15351_15364 = G__15378;
continue;
} else {
var vec__15355_15379 = cljs.core.first(seq__15348_15373__$1);
var k_15380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_15379,(0),null);
var v_15381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_15379,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15380,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15381),"px"].join('')], 0));

var G__15382 = cljs.core.next(seq__15348_15373__$1);
var G__15383 = null;
var G__15384 = (0);
var G__15385 = (0);
seq__15348_15361 = G__15382;
chunk__15349_15362 = G__15383;
count__15350_15363 = G__15384;
i__15351_15364 = G__15385;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15346){
var G__15347 = cljs.core.first(seq15346);
var seq15346__$1 = cljs.core.next(seq15346);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15347,seq15346__$1);
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
var G__15391 = arguments.length;
switch (G__15391) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15405 = arguments.length;
var i__9123__auto___15406 = (0);
while(true){
if((i__9123__auto___15406 < len__9122__auto___15405)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15406]));

var G__15407 = (i__9123__auto___15406 + (1));
i__9123__auto___15406 = G__15407;
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
var G__15392 = elem;
(G__15392[k__$1] = v);

return G__15392;
} else {
var G__15393 = elem;
G__15393.setAttribute(k__$1,v);

return G__15393;
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

var seq__15394_15408 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15395_15409 = null;
var count__15396_15410 = (0);
var i__15397_15411 = (0);
while(true){
if((i__15397_15411 < count__15396_15410)){
var vec__15398_15412 = chunk__15395_15409.cljs$core$IIndexed$_nth$arity$2(null,i__15397_15411);
var k_15413__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398_15412,(0),null);
var v_15414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398_15412,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15413__$1,v_15414__$1);

var G__15415 = seq__15394_15408;
var G__15416 = chunk__15395_15409;
var G__15417 = count__15396_15410;
var G__15418 = (i__15397_15411 + (1));
seq__15394_15408 = G__15415;
chunk__15395_15409 = G__15416;
count__15396_15410 = G__15417;
i__15397_15411 = G__15418;
continue;
} else {
var temp__4657__auto___15419 = cljs.core.seq(seq__15394_15408);
if(temp__4657__auto___15419){
var seq__15394_15420__$1 = temp__4657__auto___15419;
if(cljs.core.chunked_seq_QMARK_(seq__15394_15420__$1)){
var c__8792__auto___15421 = cljs.core.chunk_first(seq__15394_15420__$1);
var G__15422 = cljs.core.chunk_rest(seq__15394_15420__$1);
var G__15423 = c__8792__auto___15421;
var G__15424 = cljs.core.count(c__8792__auto___15421);
var G__15425 = (0);
seq__15394_15408 = G__15422;
chunk__15395_15409 = G__15423;
count__15396_15410 = G__15424;
i__15397_15411 = G__15425;
continue;
} else {
var vec__15401_15426 = cljs.core.first(seq__15394_15420__$1);
var k_15427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401_15426,(0),null);
var v_15428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401_15426,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15427__$1,v_15428__$1);

var G__15429 = cljs.core.next(seq__15394_15420__$1);
var G__15430 = null;
var G__15431 = (0);
var G__15432 = (0);
seq__15394_15408 = G__15429;
chunk__15395_15409 = G__15430;
count__15396_15410 = G__15431;
i__15397_15411 = G__15432;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15387){
var G__15388 = cljs.core.first(seq15387);
var seq15387__$1 = cljs.core.next(seq15387);
var G__15389 = cljs.core.first(seq15387__$1);
var seq15387__$2 = cljs.core.next(seq15387__$1);
var G__15390 = cljs.core.first(seq15387__$2);
var seq15387__$3 = cljs.core.next(seq15387__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15388,G__15389,G__15390,seq15387__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15437 = arguments.length;
switch (G__15437) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15444 = arguments.length;
var i__9123__auto___15445 = (0);
while(true){
if((i__9123__auto___15445 < len__9122__auto___15444)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15445]));

var G__15446 = (i__9123__auto___15445 + (1));
i__9123__auto___15445 = G__15446;
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
var k_15447__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15438.cljs$core$IFn$_invoke$arity$1 ? fexpr__15438.cljs$core$IFn$_invoke$arity$1(k_15447__$1) : fexpr__15438.call(null,k_15447__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15447__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15439_15448 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15440_15449 = null;
var count__15441_15450 = (0);
var i__15442_15451 = (0);
while(true){
if((i__15442_15451 < count__15441_15450)){
var k_15452__$1 = chunk__15440_15449.cljs$core$IIndexed$_nth$arity$2(null,i__15442_15451);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15452__$1);

var G__15453 = seq__15439_15448;
var G__15454 = chunk__15440_15449;
var G__15455 = count__15441_15450;
var G__15456 = (i__15442_15451 + (1));
seq__15439_15448 = G__15453;
chunk__15440_15449 = G__15454;
count__15441_15450 = G__15455;
i__15442_15451 = G__15456;
continue;
} else {
var temp__4657__auto___15457 = cljs.core.seq(seq__15439_15448);
if(temp__4657__auto___15457){
var seq__15439_15458__$1 = temp__4657__auto___15457;
if(cljs.core.chunked_seq_QMARK_(seq__15439_15458__$1)){
var c__8792__auto___15459 = cljs.core.chunk_first(seq__15439_15458__$1);
var G__15460 = cljs.core.chunk_rest(seq__15439_15458__$1);
var G__15461 = c__8792__auto___15459;
var G__15462 = cljs.core.count(c__8792__auto___15459);
var G__15463 = (0);
seq__15439_15448 = G__15460;
chunk__15440_15449 = G__15461;
count__15441_15450 = G__15462;
i__15442_15451 = G__15463;
continue;
} else {
var k_15464__$1 = cljs.core.first(seq__15439_15458__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15464__$1);

var G__15465 = cljs.core.next(seq__15439_15458__$1);
var G__15466 = null;
var G__15467 = (0);
var G__15468 = (0);
seq__15439_15448 = G__15465;
chunk__15440_15449 = G__15466;
count__15441_15450 = G__15467;
i__15442_15451 = G__15468;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15434){
var G__15435 = cljs.core.first(seq15434);
var seq15434__$1 = cljs.core.next(seq15434);
var G__15436 = cljs.core.first(seq15434__$1);
var seq15434__$2 = cljs.core.next(seq15434__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15435,G__15436,seq15434__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15470 = arguments.length;
switch (G__15470) {
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
var G__15476 = arguments.length;
switch (G__15476) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15490 = arguments.length;
var i__9123__auto___15491 = (0);
while(true){
if((i__9123__auto___15491 < len__9122__auto___15490)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15491]));

var G__15492 = (i__9123__auto___15491 + (1));
i__9123__auto___15491 = G__15492;
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
var temp__4655__auto___15493 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15493)){
var class_list_15494 = temp__4655__auto___15493;
var seq__15477_15495 = cljs.core.seq(classes__$1);
var chunk__15478_15496 = null;
var count__15479_15497 = (0);
var i__15480_15498 = (0);
while(true){
if((i__15480_15498 < count__15479_15497)){
var c_15499 = chunk__15478_15496.cljs$core$IIndexed$_nth$arity$2(null,i__15480_15498);
class_list_15494.add(c_15499);

var G__15500 = seq__15477_15495;
var G__15501 = chunk__15478_15496;
var G__15502 = count__15479_15497;
var G__15503 = (i__15480_15498 + (1));
seq__15477_15495 = G__15500;
chunk__15478_15496 = G__15501;
count__15479_15497 = G__15502;
i__15480_15498 = G__15503;
continue;
} else {
var temp__4657__auto___15504 = cljs.core.seq(seq__15477_15495);
if(temp__4657__auto___15504){
var seq__15477_15505__$1 = temp__4657__auto___15504;
if(cljs.core.chunked_seq_QMARK_(seq__15477_15505__$1)){
var c__8792__auto___15506 = cljs.core.chunk_first(seq__15477_15505__$1);
var G__15507 = cljs.core.chunk_rest(seq__15477_15505__$1);
var G__15508 = c__8792__auto___15506;
var G__15509 = cljs.core.count(c__8792__auto___15506);
var G__15510 = (0);
seq__15477_15495 = G__15507;
chunk__15478_15496 = G__15508;
count__15479_15497 = G__15509;
i__15480_15498 = G__15510;
continue;
} else {
var c_15511 = cljs.core.first(seq__15477_15505__$1);
class_list_15494.add(c_15511);

var G__15512 = cljs.core.next(seq__15477_15505__$1);
var G__15513 = null;
var G__15514 = (0);
var G__15515 = (0);
seq__15477_15495 = G__15512;
chunk__15478_15496 = G__15513;
count__15479_15497 = G__15514;
i__15480_15498 = G__15515;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15481_15516 = cljs.core.seq(classes__$1);
var chunk__15482_15517 = null;
var count__15483_15518 = (0);
var i__15484_15519 = (0);
while(true){
if((i__15484_15519 < count__15483_15518)){
var c_15520 = chunk__15482_15517.cljs$core$IIndexed$_nth$arity$2(null,i__15484_15519);
var class_name_15521 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15521,c_15520))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15521 === ""))?c_15520:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15521)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15520)].join('')));
}

var G__15522 = seq__15481_15516;
var G__15523 = chunk__15482_15517;
var G__15524 = count__15483_15518;
var G__15525 = (i__15484_15519 + (1));
seq__15481_15516 = G__15522;
chunk__15482_15517 = G__15523;
count__15483_15518 = G__15524;
i__15484_15519 = G__15525;
continue;
} else {
var temp__4657__auto___15526 = cljs.core.seq(seq__15481_15516);
if(temp__4657__auto___15526){
var seq__15481_15527__$1 = temp__4657__auto___15526;
if(cljs.core.chunked_seq_QMARK_(seq__15481_15527__$1)){
var c__8792__auto___15528 = cljs.core.chunk_first(seq__15481_15527__$1);
var G__15529 = cljs.core.chunk_rest(seq__15481_15527__$1);
var G__15530 = c__8792__auto___15528;
var G__15531 = cljs.core.count(c__8792__auto___15528);
var G__15532 = (0);
seq__15481_15516 = G__15529;
chunk__15482_15517 = G__15530;
count__15483_15518 = G__15531;
i__15484_15519 = G__15532;
continue;
} else {
var c_15533 = cljs.core.first(seq__15481_15527__$1);
var class_name_15534 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15534,c_15533))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15534 === ""))?c_15533:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15534)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15533)].join('')));
}

var G__15535 = cljs.core.next(seq__15481_15527__$1);
var G__15536 = null;
var G__15537 = (0);
var G__15538 = (0);
seq__15481_15516 = G__15535;
chunk__15482_15517 = G__15536;
count__15483_15518 = G__15537;
i__15484_15519 = G__15538;
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
var seq__15485_15539 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15486_15540 = null;
var count__15487_15541 = (0);
var i__15488_15542 = (0);
while(true){
if((i__15488_15542 < count__15487_15541)){
var c_15543 = chunk__15486_15540.cljs$core$IIndexed$_nth$arity$2(null,i__15488_15542);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15543);

var G__15544 = seq__15485_15539;
var G__15545 = chunk__15486_15540;
var G__15546 = count__15487_15541;
var G__15547 = (i__15488_15542 + (1));
seq__15485_15539 = G__15544;
chunk__15486_15540 = G__15545;
count__15487_15541 = G__15546;
i__15488_15542 = G__15547;
continue;
} else {
var temp__4657__auto___15548 = cljs.core.seq(seq__15485_15539);
if(temp__4657__auto___15548){
var seq__15485_15549__$1 = temp__4657__auto___15548;
if(cljs.core.chunked_seq_QMARK_(seq__15485_15549__$1)){
var c__8792__auto___15550 = cljs.core.chunk_first(seq__15485_15549__$1);
var G__15551 = cljs.core.chunk_rest(seq__15485_15549__$1);
var G__15552 = c__8792__auto___15550;
var G__15553 = cljs.core.count(c__8792__auto___15550);
var G__15554 = (0);
seq__15485_15539 = G__15551;
chunk__15486_15540 = G__15552;
count__15487_15541 = G__15553;
i__15488_15542 = G__15554;
continue;
} else {
var c_15555 = cljs.core.first(seq__15485_15549__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15555);

var G__15556 = cljs.core.next(seq__15485_15549__$1);
var G__15557 = null;
var G__15558 = (0);
var G__15559 = (0);
seq__15485_15539 = G__15556;
chunk__15486_15540 = G__15557;
count__15487_15541 = G__15558;
i__15488_15542 = G__15559;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15473){
var G__15474 = cljs.core.first(seq15473);
var seq15473__$1 = cljs.core.next(seq15473);
var G__15475 = cljs.core.first(seq15473__$1);
var seq15473__$2 = cljs.core.next(seq15473__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15474,G__15475,seq15473__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15564 = arguments.length;
switch (G__15564) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15570 = arguments.length;
var i__9123__auto___15571 = (0);
while(true){
if((i__9123__auto___15571 < len__9122__auto___15570)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15571]));

var G__15572 = (i__9123__auto___15571 + (1));
i__9123__auto___15571 = G__15572;
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
var temp__4655__auto___15573 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15573)){
var class_list_15574 = temp__4655__auto___15573;
class_list_15574.remove(c__$1);
} else {
var class_name_15575 = dommy.core.class$(elem);
var new_class_name_15576 = dommy.utils.remove_class_str(class_name_15575,c__$1);
if((class_name_15575 === new_class_name_15576)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15576);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15565 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15566 = null;
var count__15567 = (0);
var i__15568 = (0);
while(true){
if((i__15568 < count__15567)){
var c = chunk__15566.cljs$core$IIndexed$_nth$arity$2(null,i__15568);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15577 = seq__15565;
var G__15578 = chunk__15566;
var G__15579 = count__15567;
var G__15580 = (i__15568 + (1));
seq__15565 = G__15577;
chunk__15566 = G__15578;
count__15567 = G__15579;
i__15568 = G__15580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15565);
if(temp__4657__auto__){
var seq__15565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15565__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15565__$1);
var G__15581 = cljs.core.chunk_rest(seq__15565__$1);
var G__15582 = c__8792__auto__;
var G__15583 = cljs.core.count(c__8792__auto__);
var G__15584 = (0);
seq__15565 = G__15581;
chunk__15566 = G__15582;
count__15567 = G__15583;
i__15568 = G__15584;
continue;
} else {
var c = cljs.core.first(seq__15565__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15585 = cljs.core.next(seq__15565__$1);
var G__15586 = null;
var G__15587 = (0);
var G__15588 = (0);
seq__15565 = G__15585;
chunk__15566 = G__15586;
count__15567 = G__15587;
i__15568 = G__15588;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15561){
var G__15562 = cljs.core.first(seq15561);
var seq15561__$1 = cljs.core.next(seq15561);
var G__15563 = cljs.core.first(seq15561__$1);
var seq15561__$2 = cljs.core.next(seq15561__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15562,G__15563,seq15561__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15590 = arguments.length;
switch (G__15590) {
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
var temp__4655__auto___15592 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15592)){
var class_list_15593 = temp__4655__auto___15592;
class_list_15593.toggle(c__$1);
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
var G__15595 = arguments.length;
switch (G__15595) {
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
var G__15598 = arguments.length;
switch (G__15598) {
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
var G__15604 = arguments.length;
switch (G__15604) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15611 = arguments.length;
var i__9123__auto___15612 = (0);
while(true){
if((i__9123__auto___15612 < len__9122__auto___15611)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15612]));

var G__15613 = (i__9123__auto___15612 + (1));
i__9123__auto___15612 = G__15613;
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
var G__15605 = parent;
G__15605.appendChild(child);

return G__15605;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15606_15614 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15607_15615 = null;
var count__15608_15616 = (0);
var i__15609_15617 = (0);
while(true){
if((i__15609_15617 < count__15608_15616)){
var c_15618 = chunk__15607_15615.cljs$core$IIndexed$_nth$arity$2(null,i__15609_15617);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15618);

var G__15619 = seq__15606_15614;
var G__15620 = chunk__15607_15615;
var G__15621 = count__15608_15616;
var G__15622 = (i__15609_15617 + (1));
seq__15606_15614 = G__15619;
chunk__15607_15615 = G__15620;
count__15608_15616 = G__15621;
i__15609_15617 = G__15622;
continue;
} else {
var temp__4657__auto___15623 = cljs.core.seq(seq__15606_15614);
if(temp__4657__auto___15623){
var seq__15606_15624__$1 = temp__4657__auto___15623;
if(cljs.core.chunked_seq_QMARK_(seq__15606_15624__$1)){
var c__8792__auto___15625 = cljs.core.chunk_first(seq__15606_15624__$1);
var G__15626 = cljs.core.chunk_rest(seq__15606_15624__$1);
var G__15627 = c__8792__auto___15625;
var G__15628 = cljs.core.count(c__8792__auto___15625);
var G__15629 = (0);
seq__15606_15614 = G__15626;
chunk__15607_15615 = G__15627;
count__15608_15616 = G__15628;
i__15609_15617 = G__15629;
continue;
} else {
var c_15630 = cljs.core.first(seq__15606_15624__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15630);

var G__15631 = cljs.core.next(seq__15606_15624__$1);
var G__15632 = null;
var G__15633 = (0);
var G__15634 = (0);
seq__15606_15614 = G__15631;
chunk__15607_15615 = G__15632;
count__15608_15616 = G__15633;
i__15609_15617 = G__15634;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15601){
var G__15602 = cljs.core.first(seq15601);
var seq15601__$1 = cljs.core.next(seq15601);
var G__15603 = cljs.core.first(seq15601__$1);
var seq15601__$2 = cljs.core.next(seq15601__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15602,G__15603,seq15601__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15639 = arguments.length;
switch (G__15639) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15646 = arguments.length;
var i__9123__auto___15647 = (0);
while(true){
if((i__9123__auto___15647 < len__9122__auto___15646)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15647]));

var G__15648 = (i__9123__auto___15647 + (1));
i__9123__auto___15647 = G__15648;
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
var G__15640 = parent;
G__15640.insertBefore(child,parent.firstChild);

return G__15640;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15641_15649 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15642_15650 = null;
var count__15643_15651 = (0);
var i__15644_15652 = (0);
while(true){
if((i__15644_15652 < count__15643_15651)){
var c_15653 = chunk__15642_15650.cljs$core$IIndexed$_nth$arity$2(null,i__15644_15652);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15653);

var G__15654 = seq__15641_15649;
var G__15655 = chunk__15642_15650;
var G__15656 = count__15643_15651;
var G__15657 = (i__15644_15652 + (1));
seq__15641_15649 = G__15654;
chunk__15642_15650 = G__15655;
count__15643_15651 = G__15656;
i__15644_15652 = G__15657;
continue;
} else {
var temp__4657__auto___15658 = cljs.core.seq(seq__15641_15649);
if(temp__4657__auto___15658){
var seq__15641_15659__$1 = temp__4657__auto___15658;
if(cljs.core.chunked_seq_QMARK_(seq__15641_15659__$1)){
var c__8792__auto___15660 = cljs.core.chunk_first(seq__15641_15659__$1);
var G__15661 = cljs.core.chunk_rest(seq__15641_15659__$1);
var G__15662 = c__8792__auto___15660;
var G__15663 = cljs.core.count(c__8792__auto___15660);
var G__15664 = (0);
seq__15641_15649 = G__15661;
chunk__15642_15650 = G__15662;
count__15643_15651 = G__15663;
i__15644_15652 = G__15664;
continue;
} else {
var c_15665 = cljs.core.first(seq__15641_15659__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15665);

var G__15666 = cljs.core.next(seq__15641_15659__$1);
var G__15667 = null;
var G__15668 = (0);
var G__15669 = (0);
seq__15641_15649 = G__15666;
chunk__15642_15650 = G__15667;
count__15643_15651 = G__15668;
i__15644_15652 = G__15669;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15636){
var G__15637 = cljs.core.first(seq15636);
var seq15636__$1 = cljs.core.next(seq15636);
var G__15638 = cljs.core.first(seq15636__$1);
var seq15636__$2 = cljs.core.next(seq15636__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15637,G__15638,seq15636__$2);
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
var temp__4655__auto___15670 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15670)){
var next_15671 = temp__4655__auto___15670;
dommy.core.insert_before_BANG_(elem,next_15671);
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
var G__15673 = arguments.length;
switch (G__15673) {
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
var G__15674 = p;
G__15674.removeChild(elem);

return G__15674;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15676){
var vec__15677 = p__15676;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15677,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15677,special_mouse_event,real_mouse_event){
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
;})(vec__15677,special_mouse_event,real_mouse_event))
});})(vec__15677,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15683 = arguments.length;
var i__9123__auto___15684 = (0);
while(true){
if((i__9123__auto___15684 < len__9122__auto___15683)){
args__9129__auto__.push((arguments[i__9123__auto___15684]));

var G__15685 = (i__9123__auto___15684 + (1));
i__9123__auto___15684 = G__15685;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15680){
var G__15681 = cljs.core.first(seq15680);
var seq15680__$1 = cljs.core.next(seq15680);
var G__15682 = cljs.core.first(seq15680__$1);
var seq15680__$2 = cljs.core.next(seq15680__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15681,G__15682,seq15680__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15686 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15686.cljs$core$IFn$_invoke$arity$1 ? fexpr__15686.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15686.call(null,elem_sel));
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
var len__9122__auto___15734 = arguments.length;
var i__9123__auto___15735 = (0);
while(true){
if((i__9123__auto___15735 < len__9122__auto___15734)){
args__9129__auto__.push((arguments[i__9123__auto___15735]));

var G__15736 = (i__9123__auto___15735 + (1));
i__9123__auto___15735 = G__15736;
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

var vec__15689_15737 = dommy.core.elem_and_selector(elem_sel);
var elem_15738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15689_15737,(0),null);
var selector_15739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15689_15737,(1),null);
var seq__15692_15740 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15699_15741 = null;
var count__15700_15742 = (0);
var i__15701_15743 = (0);
while(true){
if((i__15701_15743 < count__15700_15742)){
var vec__15708_15744 = chunk__15699_15741.cljs$core$IIndexed$_nth$arity$2(null,i__15701_15743);
var orig_type_15745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15708_15744,(0),null);
var f_15746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15708_15744,(1),null);
var seq__15702_15747 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15745,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15745,cljs.core.identity])));
var chunk__15704_15748 = null;
var count__15705_15749 = (0);
var i__15706_15750 = (0);
while(true){
if((i__15706_15750 < count__15705_15749)){
var vec__15711_15751 = chunk__15704_15748.cljs$core$IIndexed$_nth$arity$2(null,i__15706_15750);
var actual_type_15752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15711_15751,(0),null);
var factory_15753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15711_15751,(1),null);
var canonical_f_15754 = (function (){var G__15715 = (factory_15753.cljs$core$IFn$_invoke$arity$1 ? factory_15753.cljs$core$IFn$_invoke$arity$1(f_15746) : factory_15753.call(null,f_15746));
var fexpr__15714 = (cljs.core.truth_(selector_15739)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15738,selector_15739):cljs.core.identity);
return (fexpr__15714.cljs$core$IFn$_invoke$arity$1 ? fexpr__15714.cljs$core$IFn$_invoke$arity$1(G__15715) : fexpr__15714.call(null,G__15715));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15738,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15739,actual_type_15752,f_15746], null),canonical_f_15754], 0));

if(cljs.core.truth_(elem_15738.addEventListener)){
elem_15738.addEventListener(cljs.core.name(actual_type_15752),canonical_f_15754);
} else {
elem_15738.attachEvent(cljs.core.name(actual_type_15752),canonical_f_15754);
}

var G__15755 = seq__15702_15747;
var G__15756 = chunk__15704_15748;
var G__15757 = count__15705_15749;
var G__15758 = (i__15706_15750 + (1));
seq__15702_15747 = G__15755;
chunk__15704_15748 = G__15756;
count__15705_15749 = G__15757;
i__15706_15750 = G__15758;
continue;
} else {
var temp__4657__auto___15759 = cljs.core.seq(seq__15702_15747);
if(temp__4657__auto___15759){
var seq__15702_15760__$1 = temp__4657__auto___15759;
if(cljs.core.chunked_seq_QMARK_(seq__15702_15760__$1)){
var c__8792__auto___15761 = cljs.core.chunk_first(seq__15702_15760__$1);
var G__15762 = cljs.core.chunk_rest(seq__15702_15760__$1);
var G__15763 = c__8792__auto___15761;
var G__15764 = cljs.core.count(c__8792__auto___15761);
var G__15765 = (0);
seq__15702_15747 = G__15762;
chunk__15704_15748 = G__15763;
count__15705_15749 = G__15764;
i__15706_15750 = G__15765;
continue;
} else {
var vec__15716_15766 = cljs.core.first(seq__15702_15760__$1);
var actual_type_15767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716_15766,(0),null);
var factory_15768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716_15766,(1),null);
var canonical_f_15769 = (function (){var G__15720 = (factory_15768.cljs$core$IFn$_invoke$arity$1 ? factory_15768.cljs$core$IFn$_invoke$arity$1(f_15746) : factory_15768.call(null,f_15746));
var fexpr__15719 = (cljs.core.truth_(selector_15739)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15738,selector_15739):cljs.core.identity);
return (fexpr__15719.cljs$core$IFn$_invoke$arity$1 ? fexpr__15719.cljs$core$IFn$_invoke$arity$1(G__15720) : fexpr__15719.call(null,G__15720));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15738,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15739,actual_type_15767,f_15746], null),canonical_f_15769], 0));

if(cljs.core.truth_(elem_15738.addEventListener)){
elem_15738.addEventListener(cljs.core.name(actual_type_15767),canonical_f_15769);
} else {
elem_15738.attachEvent(cljs.core.name(actual_type_15767),canonical_f_15769);
}

var G__15770 = cljs.core.next(seq__15702_15760__$1);
var G__15771 = null;
var G__15772 = (0);
var G__15773 = (0);
seq__15702_15747 = G__15770;
chunk__15704_15748 = G__15771;
count__15705_15749 = G__15772;
i__15706_15750 = G__15773;
continue;
}
} else {
}
}
break;
}

var G__15774 = seq__15692_15740;
var G__15775 = chunk__15699_15741;
var G__15776 = count__15700_15742;
var G__15777 = (i__15701_15743 + (1));
seq__15692_15740 = G__15774;
chunk__15699_15741 = G__15775;
count__15700_15742 = G__15776;
i__15701_15743 = G__15777;
continue;
} else {
var temp__4657__auto___15778 = cljs.core.seq(seq__15692_15740);
if(temp__4657__auto___15778){
var seq__15692_15779__$1 = temp__4657__auto___15778;
if(cljs.core.chunked_seq_QMARK_(seq__15692_15779__$1)){
var c__8792__auto___15780 = cljs.core.chunk_first(seq__15692_15779__$1);
var G__15781 = cljs.core.chunk_rest(seq__15692_15779__$1);
var G__15782 = c__8792__auto___15780;
var G__15783 = cljs.core.count(c__8792__auto___15780);
var G__15784 = (0);
seq__15692_15740 = G__15781;
chunk__15699_15741 = G__15782;
count__15700_15742 = G__15783;
i__15701_15743 = G__15784;
continue;
} else {
var vec__15721_15785 = cljs.core.first(seq__15692_15779__$1);
var orig_type_15786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15721_15785,(0),null);
var f_15787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15721_15785,(1),null);
var seq__15693_15788 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15786,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15786,cljs.core.identity])));
var chunk__15695_15789 = null;
var count__15696_15790 = (0);
var i__15697_15791 = (0);
while(true){
if((i__15697_15791 < count__15696_15790)){
var vec__15724_15792 = chunk__15695_15789.cljs$core$IIndexed$_nth$arity$2(null,i__15697_15791);
var actual_type_15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15724_15792,(0),null);
var factory_15794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15724_15792,(1),null);
var canonical_f_15795 = (function (){var G__15728 = (factory_15794.cljs$core$IFn$_invoke$arity$1 ? factory_15794.cljs$core$IFn$_invoke$arity$1(f_15787) : factory_15794.call(null,f_15787));
var fexpr__15727 = (cljs.core.truth_(selector_15739)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15738,selector_15739):cljs.core.identity);
return (fexpr__15727.cljs$core$IFn$_invoke$arity$1 ? fexpr__15727.cljs$core$IFn$_invoke$arity$1(G__15728) : fexpr__15727.call(null,G__15728));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15738,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15739,actual_type_15793,f_15787], null),canonical_f_15795], 0));

if(cljs.core.truth_(elem_15738.addEventListener)){
elem_15738.addEventListener(cljs.core.name(actual_type_15793),canonical_f_15795);
} else {
elem_15738.attachEvent(cljs.core.name(actual_type_15793),canonical_f_15795);
}

var G__15796 = seq__15693_15788;
var G__15797 = chunk__15695_15789;
var G__15798 = count__15696_15790;
var G__15799 = (i__15697_15791 + (1));
seq__15693_15788 = G__15796;
chunk__15695_15789 = G__15797;
count__15696_15790 = G__15798;
i__15697_15791 = G__15799;
continue;
} else {
var temp__4657__auto___15800__$1 = cljs.core.seq(seq__15693_15788);
if(temp__4657__auto___15800__$1){
var seq__15693_15801__$1 = temp__4657__auto___15800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15693_15801__$1)){
var c__8792__auto___15802 = cljs.core.chunk_first(seq__15693_15801__$1);
var G__15803 = cljs.core.chunk_rest(seq__15693_15801__$1);
var G__15804 = c__8792__auto___15802;
var G__15805 = cljs.core.count(c__8792__auto___15802);
var G__15806 = (0);
seq__15693_15788 = G__15803;
chunk__15695_15789 = G__15804;
count__15696_15790 = G__15805;
i__15697_15791 = G__15806;
continue;
} else {
var vec__15729_15807 = cljs.core.first(seq__15693_15801__$1);
var actual_type_15808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15729_15807,(0),null);
var factory_15809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15729_15807,(1),null);
var canonical_f_15810 = (function (){var G__15733 = (factory_15809.cljs$core$IFn$_invoke$arity$1 ? factory_15809.cljs$core$IFn$_invoke$arity$1(f_15787) : factory_15809.call(null,f_15787));
var fexpr__15732 = (cljs.core.truth_(selector_15739)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15738,selector_15739):cljs.core.identity);
return (fexpr__15732.cljs$core$IFn$_invoke$arity$1 ? fexpr__15732.cljs$core$IFn$_invoke$arity$1(G__15733) : fexpr__15732.call(null,G__15733));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15738,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15739,actual_type_15808,f_15787], null),canonical_f_15810], 0));

if(cljs.core.truth_(elem_15738.addEventListener)){
elem_15738.addEventListener(cljs.core.name(actual_type_15808),canonical_f_15810);
} else {
elem_15738.attachEvent(cljs.core.name(actual_type_15808),canonical_f_15810);
}

var G__15811 = cljs.core.next(seq__15693_15801__$1);
var G__15812 = null;
var G__15813 = (0);
var G__15814 = (0);
seq__15693_15788 = G__15811;
chunk__15695_15789 = G__15812;
count__15696_15790 = G__15813;
i__15697_15791 = G__15814;
continue;
}
} else {
}
}
break;
}

var G__15815 = cljs.core.next(seq__15692_15779__$1);
var G__15816 = null;
var G__15817 = (0);
var G__15818 = (0);
seq__15692_15740 = G__15815;
chunk__15699_15741 = G__15816;
count__15700_15742 = G__15817;
i__15701_15743 = G__15818;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15687){
var G__15688 = cljs.core.first(seq15687);
var seq15687__$1 = cljs.core.next(seq15687);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15688,seq15687__$1);
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
var len__9122__auto___15858 = arguments.length;
var i__9123__auto___15859 = (0);
while(true){
if((i__9123__auto___15859 < len__9122__auto___15858)){
args__9129__auto__.push((arguments[i__9123__auto___15859]));

var G__15860 = (i__9123__auto___15859 + (1));
i__9123__auto___15859 = G__15860;
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

var vec__15821_15861 = dommy.core.elem_and_selector(elem_sel);
var elem_15862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821_15861,(0),null);
var selector_15863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821_15861,(1),null);
var seq__15824_15864 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15831_15865 = null;
var count__15832_15866 = (0);
var i__15833_15867 = (0);
while(true){
if((i__15833_15867 < count__15832_15866)){
var vec__15840_15868 = chunk__15831_15865.cljs$core$IIndexed$_nth$arity$2(null,i__15833_15867);
var orig_type_15869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15868,(0),null);
var f_15870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15868,(1),null);
var seq__15834_15871 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15869,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15869,cljs.core.identity])));
var chunk__15836_15872 = null;
var count__15837_15873 = (0);
var i__15838_15874 = (0);
while(true){
if((i__15838_15874 < count__15837_15873)){
var vec__15843_15875 = chunk__15836_15872.cljs$core$IIndexed$_nth$arity$2(null,i__15838_15874);
var actual_type_15876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843_15875,(0),null);
var __15877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843_15875,(1),null);
var keys_15878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15863,actual_type_15876,f_15870], null);
var canonical_f_15879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15862),keys_15878);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15878], 0));

if(cljs.core.truth_(elem_15862.removeEventListener)){
elem_15862.removeEventListener(cljs.core.name(actual_type_15876),canonical_f_15879);
} else {
elem_15862.detachEvent(cljs.core.name(actual_type_15876),canonical_f_15879);
}

var G__15880 = seq__15834_15871;
var G__15881 = chunk__15836_15872;
var G__15882 = count__15837_15873;
var G__15883 = (i__15838_15874 + (1));
seq__15834_15871 = G__15880;
chunk__15836_15872 = G__15881;
count__15837_15873 = G__15882;
i__15838_15874 = G__15883;
continue;
} else {
var temp__4657__auto___15884 = cljs.core.seq(seq__15834_15871);
if(temp__4657__auto___15884){
var seq__15834_15885__$1 = temp__4657__auto___15884;
if(cljs.core.chunked_seq_QMARK_(seq__15834_15885__$1)){
var c__8792__auto___15886 = cljs.core.chunk_first(seq__15834_15885__$1);
var G__15887 = cljs.core.chunk_rest(seq__15834_15885__$1);
var G__15888 = c__8792__auto___15886;
var G__15889 = cljs.core.count(c__8792__auto___15886);
var G__15890 = (0);
seq__15834_15871 = G__15887;
chunk__15836_15872 = G__15888;
count__15837_15873 = G__15889;
i__15838_15874 = G__15890;
continue;
} else {
var vec__15846_15891 = cljs.core.first(seq__15834_15885__$1);
var actual_type_15892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15846_15891,(0),null);
var __15893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15846_15891,(1),null);
var keys_15894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15863,actual_type_15892,f_15870], null);
var canonical_f_15895 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15862),keys_15894);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15894], 0));

if(cljs.core.truth_(elem_15862.removeEventListener)){
elem_15862.removeEventListener(cljs.core.name(actual_type_15892),canonical_f_15895);
} else {
elem_15862.detachEvent(cljs.core.name(actual_type_15892),canonical_f_15895);
}

var G__15896 = cljs.core.next(seq__15834_15885__$1);
var G__15897 = null;
var G__15898 = (0);
var G__15899 = (0);
seq__15834_15871 = G__15896;
chunk__15836_15872 = G__15897;
count__15837_15873 = G__15898;
i__15838_15874 = G__15899;
continue;
}
} else {
}
}
break;
}

var G__15900 = seq__15824_15864;
var G__15901 = chunk__15831_15865;
var G__15902 = count__15832_15866;
var G__15903 = (i__15833_15867 + (1));
seq__15824_15864 = G__15900;
chunk__15831_15865 = G__15901;
count__15832_15866 = G__15902;
i__15833_15867 = G__15903;
continue;
} else {
var temp__4657__auto___15904 = cljs.core.seq(seq__15824_15864);
if(temp__4657__auto___15904){
var seq__15824_15905__$1 = temp__4657__auto___15904;
if(cljs.core.chunked_seq_QMARK_(seq__15824_15905__$1)){
var c__8792__auto___15906 = cljs.core.chunk_first(seq__15824_15905__$1);
var G__15907 = cljs.core.chunk_rest(seq__15824_15905__$1);
var G__15908 = c__8792__auto___15906;
var G__15909 = cljs.core.count(c__8792__auto___15906);
var G__15910 = (0);
seq__15824_15864 = G__15907;
chunk__15831_15865 = G__15908;
count__15832_15866 = G__15909;
i__15833_15867 = G__15910;
continue;
} else {
var vec__15849_15911 = cljs.core.first(seq__15824_15905__$1);
var orig_type_15912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849_15911,(0),null);
var f_15913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849_15911,(1),null);
var seq__15825_15914 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15912,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15912,cljs.core.identity])));
var chunk__15827_15915 = null;
var count__15828_15916 = (0);
var i__15829_15917 = (0);
while(true){
if((i__15829_15917 < count__15828_15916)){
var vec__15852_15918 = chunk__15827_15915.cljs$core$IIndexed$_nth$arity$2(null,i__15829_15917);
var actual_type_15919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852_15918,(0),null);
var __15920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852_15918,(1),null);
var keys_15921 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15863,actual_type_15919,f_15913], null);
var canonical_f_15922 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15862),keys_15921);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15921], 0));

if(cljs.core.truth_(elem_15862.removeEventListener)){
elem_15862.removeEventListener(cljs.core.name(actual_type_15919),canonical_f_15922);
} else {
elem_15862.detachEvent(cljs.core.name(actual_type_15919),canonical_f_15922);
}

var G__15923 = seq__15825_15914;
var G__15924 = chunk__15827_15915;
var G__15925 = count__15828_15916;
var G__15926 = (i__15829_15917 + (1));
seq__15825_15914 = G__15923;
chunk__15827_15915 = G__15924;
count__15828_15916 = G__15925;
i__15829_15917 = G__15926;
continue;
} else {
var temp__4657__auto___15927__$1 = cljs.core.seq(seq__15825_15914);
if(temp__4657__auto___15927__$1){
var seq__15825_15928__$1 = temp__4657__auto___15927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15825_15928__$1)){
var c__8792__auto___15929 = cljs.core.chunk_first(seq__15825_15928__$1);
var G__15930 = cljs.core.chunk_rest(seq__15825_15928__$1);
var G__15931 = c__8792__auto___15929;
var G__15932 = cljs.core.count(c__8792__auto___15929);
var G__15933 = (0);
seq__15825_15914 = G__15930;
chunk__15827_15915 = G__15931;
count__15828_15916 = G__15932;
i__15829_15917 = G__15933;
continue;
} else {
var vec__15855_15934 = cljs.core.first(seq__15825_15928__$1);
var actual_type_15935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855_15934,(0),null);
var __15936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855_15934,(1),null);
var keys_15937 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15863,actual_type_15935,f_15913], null);
var canonical_f_15938 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15862),keys_15937);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15937], 0));

if(cljs.core.truth_(elem_15862.removeEventListener)){
elem_15862.removeEventListener(cljs.core.name(actual_type_15935),canonical_f_15938);
} else {
elem_15862.detachEvent(cljs.core.name(actual_type_15935),canonical_f_15938);
}

var G__15939 = cljs.core.next(seq__15825_15928__$1);
var G__15940 = null;
var G__15941 = (0);
var G__15942 = (0);
seq__15825_15914 = G__15939;
chunk__15827_15915 = G__15940;
count__15828_15916 = G__15941;
i__15829_15917 = G__15942;
continue;
}
} else {
}
}
break;
}

var G__15943 = cljs.core.next(seq__15824_15905__$1);
var G__15944 = null;
var G__15945 = (0);
var G__15946 = (0);
seq__15824_15864 = G__15943;
chunk__15831_15865 = G__15944;
count__15832_15866 = G__15945;
i__15833_15867 = G__15946;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15819){
var G__15820 = cljs.core.first(seq15819);
var seq15819__$1 = cljs.core.next(seq15819);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15820,seq15819__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15962 = arguments.length;
var i__9123__auto___15963 = (0);
while(true){
if((i__9123__auto___15963 < len__9122__auto___15962)){
args__9129__auto__.push((arguments[i__9123__auto___15963]));

var G__15964 = (i__9123__auto___15963 + (1));
i__9123__auto___15963 = G__15964;
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

var vec__15949_15965 = dommy.core.elem_and_selector(elem_sel);
var elem_15966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949_15965,(0),null);
var selector_15967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949_15965,(1),null);
var seq__15952_15968 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15953_15969 = null;
var count__15954_15970 = (0);
var i__15955_15971 = (0);
while(true){
if((i__15955_15971 < count__15954_15970)){
var vec__15956_15972 = chunk__15953_15969.cljs$core$IIndexed$_nth$arity$2(null,i__15955_15971);
var type_15973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15956_15972,(0),null);
var f_15974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15956_15972,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15973,((function (seq__15952_15968,chunk__15953_15969,count__15954_15970,i__15955_15971,vec__15956_15972,type_15973,f_15974,vec__15949_15965,elem_15966,selector_15967){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15973,dommy$core$this_fn], 0));

return (f_15974.cljs$core$IFn$_invoke$arity$1 ? f_15974.cljs$core$IFn$_invoke$arity$1(e) : f_15974.call(null,e));
});})(seq__15952_15968,chunk__15953_15969,count__15954_15970,i__15955_15971,vec__15956_15972,type_15973,f_15974,vec__15949_15965,elem_15966,selector_15967))
], 0));

var G__15975 = seq__15952_15968;
var G__15976 = chunk__15953_15969;
var G__15977 = count__15954_15970;
var G__15978 = (i__15955_15971 + (1));
seq__15952_15968 = G__15975;
chunk__15953_15969 = G__15976;
count__15954_15970 = G__15977;
i__15955_15971 = G__15978;
continue;
} else {
var temp__4657__auto___15979 = cljs.core.seq(seq__15952_15968);
if(temp__4657__auto___15979){
var seq__15952_15980__$1 = temp__4657__auto___15979;
if(cljs.core.chunked_seq_QMARK_(seq__15952_15980__$1)){
var c__8792__auto___15981 = cljs.core.chunk_first(seq__15952_15980__$1);
var G__15982 = cljs.core.chunk_rest(seq__15952_15980__$1);
var G__15983 = c__8792__auto___15981;
var G__15984 = cljs.core.count(c__8792__auto___15981);
var G__15985 = (0);
seq__15952_15968 = G__15982;
chunk__15953_15969 = G__15983;
count__15954_15970 = G__15984;
i__15955_15971 = G__15985;
continue;
} else {
var vec__15959_15986 = cljs.core.first(seq__15952_15980__$1);
var type_15987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15959_15986,(0),null);
var f_15988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15959_15986,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15987,((function (seq__15952_15968,chunk__15953_15969,count__15954_15970,i__15955_15971,vec__15959_15986,type_15987,f_15988,seq__15952_15980__$1,temp__4657__auto___15979,vec__15949_15965,elem_15966,selector_15967){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15987,dommy$core$this_fn], 0));

return (f_15988.cljs$core$IFn$_invoke$arity$1 ? f_15988.cljs$core$IFn$_invoke$arity$1(e) : f_15988.call(null,e));
});})(seq__15952_15968,chunk__15953_15969,count__15954_15970,i__15955_15971,vec__15959_15986,type_15987,f_15988,seq__15952_15980__$1,temp__4657__auto___15979,vec__15949_15965,elem_15966,selector_15967))
], 0));

var G__15989 = cljs.core.next(seq__15952_15980__$1);
var G__15990 = null;
var G__15991 = (0);
var G__15992 = (0);
seq__15952_15968 = G__15989;
chunk__15953_15969 = G__15990;
count__15954_15970 = G__15991;
i__15955_15971 = G__15992;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15947){
var G__15948 = cljs.core.first(seq15947);
var seq15947__$1 = cljs.core.next(seq15947);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15948,seq15947__$1);
});

