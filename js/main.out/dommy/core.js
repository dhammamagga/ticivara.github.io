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
var G__15276 = arguments.length;
switch (G__15276) {
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
var G__15279 = arguments.length;
switch (G__15279) {
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
var G__15283 = arguments.length;
switch (G__15283) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15281_SHARP_){
return !((p1__15281_SHARP_ === base));
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
var len__9122__auto___15297 = arguments.length;
var i__9123__auto___15298 = (0);
while(true){
if((i__9123__auto___15298 < len__9122__auto___15297)){
args__9129__auto__.push((arguments[i__9123__auto___15298]));

var G__15299 = (i__9123__auto___15298 + (1));
i__9123__auto___15298 = G__15299;
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
var seq__15287_15300 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15288_15301 = null;
var count__15289_15302 = (0);
var i__15290_15303 = (0);
while(true){
if((i__15290_15303 < count__15289_15302)){
var vec__15291_15304 = chunk__15288_15301.cljs$core$IIndexed$_nth$arity$2(null,i__15290_15303);
var k_15305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291_15304,(0),null);
var v_15306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291_15304,(1),null);
style.setProperty(dommy.utils.as_str(k_15305),v_15306);

var G__15307 = seq__15287_15300;
var G__15308 = chunk__15288_15301;
var G__15309 = count__15289_15302;
var G__15310 = (i__15290_15303 + (1));
seq__15287_15300 = G__15307;
chunk__15288_15301 = G__15308;
count__15289_15302 = G__15309;
i__15290_15303 = G__15310;
continue;
} else {
var temp__4657__auto___15311 = cljs.core.seq(seq__15287_15300);
if(temp__4657__auto___15311){
var seq__15287_15312__$1 = temp__4657__auto___15311;
if(cljs.core.chunked_seq_QMARK_(seq__15287_15312__$1)){
var c__8792__auto___15313 = cljs.core.chunk_first(seq__15287_15312__$1);
var G__15314 = cljs.core.chunk_rest(seq__15287_15312__$1);
var G__15315 = c__8792__auto___15313;
var G__15316 = cljs.core.count(c__8792__auto___15313);
var G__15317 = (0);
seq__15287_15300 = G__15314;
chunk__15288_15301 = G__15315;
count__15289_15302 = G__15316;
i__15290_15303 = G__15317;
continue;
} else {
var vec__15294_15318 = cljs.core.first(seq__15287_15312__$1);
var k_15319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15294_15318,(0),null);
var v_15320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15294_15318,(1),null);
style.setProperty(dommy.utils.as_str(k_15319),v_15320);

var G__15321 = cljs.core.next(seq__15287_15312__$1);
var G__15322 = null;
var G__15323 = (0);
var G__15324 = (0);
seq__15287_15300 = G__15321;
chunk__15288_15301 = G__15322;
count__15289_15302 = G__15323;
i__15290_15303 = G__15324;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15285){
var G__15286 = cljs.core.first(seq15285);
var seq15285__$1 = cljs.core.next(seq15285);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15286,seq15285__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15331 = arguments.length;
var i__9123__auto___15332 = (0);
while(true){
if((i__9123__auto___15332 < len__9122__auto___15331)){
args__9129__auto__.push((arguments[i__9123__auto___15332]));

var G__15333 = (i__9123__auto___15332 + (1));
i__9123__auto___15332 = G__15333;
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
var seq__15327_15334 = cljs.core.seq(keywords);
var chunk__15328_15335 = null;
var count__15329_15336 = (0);
var i__15330_15337 = (0);
while(true){
if((i__15330_15337 < count__15329_15336)){
var kw_15338 = chunk__15328_15335.cljs$core$IIndexed$_nth$arity$2(null,i__15330_15337);
style.removeProperty(dommy.utils.as_str(kw_15338));

var G__15339 = seq__15327_15334;
var G__15340 = chunk__15328_15335;
var G__15341 = count__15329_15336;
var G__15342 = (i__15330_15337 + (1));
seq__15327_15334 = G__15339;
chunk__15328_15335 = G__15340;
count__15329_15336 = G__15341;
i__15330_15337 = G__15342;
continue;
} else {
var temp__4657__auto___15343 = cljs.core.seq(seq__15327_15334);
if(temp__4657__auto___15343){
var seq__15327_15344__$1 = temp__4657__auto___15343;
if(cljs.core.chunked_seq_QMARK_(seq__15327_15344__$1)){
var c__8792__auto___15345 = cljs.core.chunk_first(seq__15327_15344__$1);
var G__15346 = cljs.core.chunk_rest(seq__15327_15344__$1);
var G__15347 = c__8792__auto___15345;
var G__15348 = cljs.core.count(c__8792__auto___15345);
var G__15349 = (0);
seq__15327_15334 = G__15346;
chunk__15328_15335 = G__15347;
count__15329_15336 = G__15348;
i__15330_15337 = G__15349;
continue;
} else {
var kw_15350 = cljs.core.first(seq__15327_15344__$1);
style.removeProperty(dommy.utils.as_str(kw_15350));

var G__15351 = cljs.core.next(seq__15327_15344__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__15327_15334 = G__15351;
chunk__15328_15335 = G__15352;
count__15329_15336 = G__15353;
i__15330_15337 = G__15354;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15325){
var G__15326 = cljs.core.first(seq15325);
var seq15325__$1 = cljs.core.next(seq15325);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15326,seq15325__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15367 = arguments.length;
var i__9123__auto___15368 = (0);
while(true){
if((i__9123__auto___15368 < len__9122__auto___15367)){
args__9129__auto__.push((arguments[i__9123__auto___15368]));

var G__15369 = (i__9123__auto___15368 + (1));
i__9123__auto___15368 = G__15369;
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

var seq__15357_15370 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15358_15371 = null;
var count__15359_15372 = (0);
var i__15360_15373 = (0);
while(true){
if((i__15360_15373 < count__15359_15372)){
var vec__15361_15374 = chunk__15358_15371.cljs$core$IIndexed$_nth$arity$2(null,i__15360_15373);
var k_15375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361_15374,(0),null);
var v_15376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361_15374,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15375,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15376),"px"].join('')], 0));

var G__15377 = seq__15357_15370;
var G__15378 = chunk__15358_15371;
var G__15379 = count__15359_15372;
var G__15380 = (i__15360_15373 + (1));
seq__15357_15370 = G__15377;
chunk__15358_15371 = G__15378;
count__15359_15372 = G__15379;
i__15360_15373 = G__15380;
continue;
} else {
var temp__4657__auto___15381 = cljs.core.seq(seq__15357_15370);
if(temp__4657__auto___15381){
var seq__15357_15382__$1 = temp__4657__auto___15381;
if(cljs.core.chunked_seq_QMARK_(seq__15357_15382__$1)){
var c__8792__auto___15383 = cljs.core.chunk_first(seq__15357_15382__$1);
var G__15384 = cljs.core.chunk_rest(seq__15357_15382__$1);
var G__15385 = c__8792__auto___15383;
var G__15386 = cljs.core.count(c__8792__auto___15383);
var G__15387 = (0);
seq__15357_15370 = G__15384;
chunk__15358_15371 = G__15385;
count__15359_15372 = G__15386;
i__15360_15373 = G__15387;
continue;
} else {
var vec__15364_15388 = cljs.core.first(seq__15357_15382__$1);
var k_15389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364_15388,(0),null);
var v_15390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364_15388,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15389,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15390),"px"].join('')], 0));

var G__15391 = cljs.core.next(seq__15357_15382__$1);
var G__15392 = null;
var G__15393 = (0);
var G__15394 = (0);
seq__15357_15370 = G__15391;
chunk__15358_15371 = G__15392;
count__15359_15372 = G__15393;
i__15360_15373 = G__15394;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15355){
var G__15356 = cljs.core.first(seq15355);
var seq15355__$1 = cljs.core.next(seq15355);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15356,seq15355__$1);
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
var G__15400 = arguments.length;
switch (G__15400) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15414 = arguments.length;
var i__9123__auto___15415 = (0);
while(true){
if((i__9123__auto___15415 < len__9122__auto___15414)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15415]));

var G__15416 = (i__9123__auto___15415 + (1));
i__9123__auto___15415 = G__15416;
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
var G__15401 = elem;
(G__15401[k__$1] = v);

return G__15401;
} else {
var G__15402 = elem;
G__15402.setAttribute(k__$1,v);

return G__15402;
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

var seq__15403_15417 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15404_15418 = null;
var count__15405_15419 = (0);
var i__15406_15420 = (0);
while(true){
if((i__15406_15420 < count__15405_15419)){
var vec__15407_15421 = chunk__15404_15418.cljs$core$IIndexed$_nth$arity$2(null,i__15406_15420);
var k_15422__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15407_15421,(0),null);
var v_15423__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15407_15421,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15422__$1,v_15423__$1);

var G__15424 = seq__15403_15417;
var G__15425 = chunk__15404_15418;
var G__15426 = count__15405_15419;
var G__15427 = (i__15406_15420 + (1));
seq__15403_15417 = G__15424;
chunk__15404_15418 = G__15425;
count__15405_15419 = G__15426;
i__15406_15420 = G__15427;
continue;
} else {
var temp__4657__auto___15428 = cljs.core.seq(seq__15403_15417);
if(temp__4657__auto___15428){
var seq__15403_15429__$1 = temp__4657__auto___15428;
if(cljs.core.chunked_seq_QMARK_(seq__15403_15429__$1)){
var c__8792__auto___15430 = cljs.core.chunk_first(seq__15403_15429__$1);
var G__15431 = cljs.core.chunk_rest(seq__15403_15429__$1);
var G__15432 = c__8792__auto___15430;
var G__15433 = cljs.core.count(c__8792__auto___15430);
var G__15434 = (0);
seq__15403_15417 = G__15431;
chunk__15404_15418 = G__15432;
count__15405_15419 = G__15433;
i__15406_15420 = G__15434;
continue;
} else {
var vec__15410_15435 = cljs.core.first(seq__15403_15429__$1);
var k_15436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410_15435,(0),null);
var v_15437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410_15435,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15436__$1,v_15437__$1);

var G__15438 = cljs.core.next(seq__15403_15429__$1);
var G__15439 = null;
var G__15440 = (0);
var G__15441 = (0);
seq__15403_15417 = G__15438;
chunk__15404_15418 = G__15439;
count__15405_15419 = G__15440;
i__15406_15420 = G__15441;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15396){
var G__15397 = cljs.core.first(seq15396);
var seq15396__$1 = cljs.core.next(seq15396);
var G__15398 = cljs.core.first(seq15396__$1);
var seq15396__$2 = cljs.core.next(seq15396__$1);
var G__15399 = cljs.core.first(seq15396__$2);
var seq15396__$3 = cljs.core.next(seq15396__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15397,G__15398,G__15399,seq15396__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15446 = arguments.length;
switch (G__15446) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15453 = arguments.length;
var i__9123__auto___15454 = (0);
while(true){
if((i__9123__auto___15454 < len__9122__auto___15453)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15454]));

var G__15455 = (i__9123__auto___15454 + (1));
i__9123__auto___15454 = G__15455;
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
var k_15456__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15447 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15447.cljs$core$IFn$_invoke$arity$1 ? fexpr__15447.cljs$core$IFn$_invoke$arity$1(k_15456__$1) : fexpr__15447.call(null,k_15456__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15456__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15448_15457 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15449_15458 = null;
var count__15450_15459 = (0);
var i__15451_15460 = (0);
while(true){
if((i__15451_15460 < count__15450_15459)){
var k_15461__$1 = chunk__15449_15458.cljs$core$IIndexed$_nth$arity$2(null,i__15451_15460);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15461__$1);

var G__15462 = seq__15448_15457;
var G__15463 = chunk__15449_15458;
var G__15464 = count__15450_15459;
var G__15465 = (i__15451_15460 + (1));
seq__15448_15457 = G__15462;
chunk__15449_15458 = G__15463;
count__15450_15459 = G__15464;
i__15451_15460 = G__15465;
continue;
} else {
var temp__4657__auto___15466 = cljs.core.seq(seq__15448_15457);
if(temp__4657__auto___15466){
var seq__15448_15467__$1 = temp__4657__auto___15466;
if(cljs.core.chunked_seq_QMARK_(seq__15448_15467__$1)){
var c__8792__auto___15468 = cljs.core.chunk_first(seq__15448_15467__$1);
var G__15469 = cljs.core.chunk_rest(seq__15448_15467__$1);
var G__15470 = c__8792__auto___15468;
var G__15471 = cljs.core.count(c__8792__auto___15468);
var G__15472 = (0);
seq__15448_15457 = G__15469;
chunk__15449_15458 = G__15470;
count__15450_15459 = G__15471;
i__15451_15460 = G__15472;
continue;
} else {
var k_15473__$1 = cljs.core.first(seq__15448_15467__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15473__$1);

var G__15474 = cljs.core.next(seq__15448_15467__$1);
var G__15475 = null;
var G__15476 = (0);
var G__15477 = (0);
seq__15448_15457 = G__15474;
chunk__15449_15458 = G__15475;
count__15450_15459 = G__15476;
i__15451_15460 = G__15477;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15443){
var G__15444 = cljs.core.first(seq15443);
var seq15443__$1 = cljs.core.next(seq15443);
var G__15445 = cljs.core.first(seq15443__$1);
var seq15443__$2 = cljs.core.next(seq15443__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15444,G__15445,seq15443__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15479 = arguments.length;
switch (G__15479) {
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
var G__15485 = arguments.length;
switch (G__15485) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15499 = arguments.length;
var i__9123__auto___15500 = (0);
while(true){
if((i__9123__auto___15500 < len__9122__auto___15499)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15500]));

var G__15501 = (i__9123__auto___15500 + (1));
i__9123__auto___15500 = G__15501;
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
var temp__4655__auto___15502 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15502)){
var class_list_15503 = temp__4655__auto___15502;
var seq__15486_15504 = cljs.core.seq(classes__$1);
var chunk__15487_15505 = null;
var count__15488_15506 = (0);
var i__15489_15507 = (0);
while(true){
if((i__15489_15507 < count__15488_15506)){
var c_15508 = chunk__15487_15505.cljs$core$IIndexed$_nth$arity$2(null,i__15489_15507);
class_list_15503.add(c_15508);

var G__15509 = seq__15486_15504;
var G__15510 = chunk__15487_15505;
var G__15511 = count__15488_15506;
var G__15512 = (i__15489_15507 + (1));
seq__15486_15504 = G__15509;
chunk__15487_15505 = G__15510;
count__15488_15506 = G__15511;
i__15489_15507 = G__15512;
continue;
} else {
var temp__4657__auto___15513 = cljs.core.seq(seq__15486_15504);
if(temp__4657__auto___15513){
var seq__15486_15514__$1 = temp__4657__auto___15513;
if(cljs.core.chunked_seq_QMARK_(seq__15486_15514__$1)){
var c__8792__auto___15515 = cljs.core.chunk_first(seq__15486_15514__$1);
var G__15516 = cljs.core.chunk_rest(seq__15486_15514__$1);
var G__15517 = c__8792__auto___15515;
var G__15518 = cljs.core.count(c__8792__auto___15515);
var G__15519 = (0);
seq__15486_15504 = G__15516;
chunk__15487_15505 = G__15517;
count__15488_15506 = G__15518;
i__15489_15507 = G__15519;
continue;
} else {
var c_15520 = cljs.core.first(seq__15486_15514__$1);
class_list_15503.add(c_15520);

var G__15521 = cljs.core.next(seq__15486_15514__$1);
var G__15522 = null;
var G__15523 = (0);
var G__15524 = (0);
seq__15486_15504 = G__15521;
chunk__15487_15505 = G__15522;
count__15488_15506 = G__15523;
i__15489_15507 = G__15524;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15490_15525 = cljs.core.seq(classes__$1);
var chunk__15491_15526 = null;
var count__15492_15527 = (0);
var i__15493_15528 = (0);
while(true){
if((i__15493_15528 < count__15492_15527)){
var c_15529 = chunk__15491_15526.cljs$core$IIndexed$_nth$arity$2(null,i__15493_15528);
var class_name_15530 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15530,c_15529))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15530 === ""))?c_15529:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15530)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15529)].join('')));
}

var G__15531 = seq__15490_15525;
var G__15532 = chunk__15491_15526;
var G__15533 = count__15492_15527;
var G__15534 = (i__15493_15528 + (1));
seq__15490_15525 = G__15531;
chunk__15491_15526 = G__15532;
count__15492_15527 = G__15533;
i__15493_15528 = G__15534;
continue;
} else {
var temp__4657__auto___15535 = cljs.core.seq(seq__15490_15525);
if(temp__4657__auto___15535){
var seq__15490_15536__$1 = temp__4657__auto___15535;
if(cljs.core.chunked_seq_QMARK_(seq__15490_15536__$1)){
var c__8792__auto___15537 = cljs.core.chunk_first(seq__15490_15536__$1);
var G__15538 = cljs.core.chunk_rest(seq__15490_15536__$1);
var G__15539 = c__8792__auto___15537;
var G__15540 = cljs.core.count(c__8792__auto___15537);
var G__15541 = (0);
seq__15490_15525 = G__15538;
chunk__15491_15526 = G__15539;
count__15492_15527 = G__15540;
i__15493_15528 = G__15541;
continue;
} else {
var c_15542 = cljs.core.first(seq__15490_15536__$1);
var class_name_15543 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15543,c_15542))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15543 === ""))?c_15542:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15543)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15542)].join('')));
}

var G__15544 = cljs.core.next(seq__15490_15536__$1);
var G__15545 = null;
var G__15546 = (0);
var G__15547 = (0);
seq__15490_15525 = G__15544;
chunk__15491_15526 = G__15545;
count__15492_15527 = G__15546;
i__15493_15528 = G__15547;
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
var seq__15494_15548 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15495_15549 = null;
var count__15496_15550 = (0);
var i__15497_15551 = (0);
while(true){
if((i__15497_15551 < count__15496_15550)){
var c_15552 = chunk__15495_15549.cljs$core$IIndexed$_nth$arity$2(null,i__15497_15551);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15552);

var G__15553 = seq__15494_15548;
var G__15554 = chunk__15495_15549;
var G__15555 = count__15496_15550;
var G__15556 = (i__15497_15551 + (1));
seq__15494_15548 = G__15553;
chunk__15495_15549 = G__15554;
count__15496_15550 = G__15555;
i__15497_15551 = G__15556;
continue;
} else {
var temp__4657__auto___15557 = cljs.core.seq(seq__15494_15548);
if(temp__4657__auto___15557){
var seq__15494_15558__$1 = temp__4657__auto___15557;
if(cljs.core.chunked_seq_QMARK_(seq__15494_15558__$1)){
var c__8792__auto___15559 = cljs.core.chunk_first(seq__15494_15558__$1);
var G__15560 = cljs.core.chunk_rest(seq__15494_15558__$1);
var G__15561 = c__8792__auto___15559;
var G__15562 = cljs.core.count(c__8792__auto___15559);
var G__15563 = (0);
seq__15494_15548 = G__15560;
chunk__15495_15549 = G__15561;
count__15496_15550 = G__15562;
i__15497_15551 = G__15563;
continue;
} else {
var c_15564 = cljs.core.first(seq__15494_15558__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15564);

var G__15565 = cljs.core.next(seq__15494_15558__$1);
var G__15566 = null;
var G__15567 = (0);
var G__15568 = (0);
seq__15494_15548 = G__15565;
chunk__15495_15549 = G__15566;
count__15496_15550 = G__15567;
i__15497_15551 = G__15568;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15482){
var G__15483 = cljs.core.first(seq15482);
var seq15482__$1 = cljs.core.next(seq15482);
var G__15484 = cljs.core.first(seq15482__$1);
var seq15482__$2 = cljs.core.next(seq15482__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15483,G__15484,seq15482__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15573 = arguments.length;
switch (G__15573) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15579 = arguments.length;
var i__9123__auto___15580 = (0);
while(true){
if((i__9123__auto___15580 < len__9122__auto___15579)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15580]));

var G__15581 = (i__9123__auto___15580 + (1));
i__9123__auto___15580 = G__15581;
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
var temp__4655__auto___15582 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15582)){
var class_list_15583 = temp__4655__auto___15582;
class_list_15583.remove(c__$1);
} else {
var class_name_15584 = dommy.core.class$(elem);
var new_class_name_15585 = dommy.utils.remove_class_str(class_name_15584,c__$1);
if((class_name_15584 === new_class_name_15585)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15585);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15574 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15575 = null;
var count__15576 = (0);
var i__15577 = (0);
while(true){
if((i__15577 < count__15576)){
var c = chunk__15575.cljs$core$IIndexed$_nth$arity$2(null,i__15577);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15586 = seq__15574;
var G__15587 = chunk__15575;
var G__15588 = count__15576;
var G__15589 = (i__15577 + (1));
seq__15574 = G__15586;
chunk__15575 = G__15587;
count__15576 = G__15588;
i__15577 = G__15589;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15574);
if(temp__4657__auto__){
var seq__15574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15574__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15574__$1);
var G__15590 = cljs.core.chunk_rest(seq__15574__$1);
var G__15591 = c__8792__auto__;
var G__15592 = cljs.core.count(c__8792__auto__);
var G__15593 = (0);
seq__15574 = G__15590;
chunk__15575 = G__15591;
count__15576 = G__15592;
i__15577 = G__15593;
continue;
} else {
var c = cljs.core.first(seq__15574__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15594 = cljs.core.next(seq__15574__$1);
var G__15595 = null;
var G__15596 = (0);
var G__15597 = (0);
seq__15574 = G__15594;
chunk__15575 = G__15595;
count__15576 = G__15596;
i__15577 = G__15597;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15570){
var G__15571 = cljs.core.first(seq15570);
var seq15570__$1 = cljs.core.next(seq15570);
var G__15572 = cljs.core.first(seq15570__$1);
var seq15570__$2 = cljs.core.next(seq15570__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15571,G__15572,seq15570__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15599 = arguments.length;
switch (G__15599) {
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
var temp__4655__auto___15601 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15601)){
var class_list_15602 = temp__4655__auto___15601;
class_list_15602.toggle(c__$1);
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
var G__15604 = arguments.length;
switch (G__15604) {
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
var G__15607 = arguments.length;
switch (G__15607) {
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
var G__15613 = arguments.length;
switch (G__15613) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15620 = arguments.length;
var i__9123__auto___15621 = (0);
while(true){
if((i__9123__auto___15621 < len__9122__auto___15620)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15621]));

var G__15622 = (i__9123__auto___15621 + (1));
i__9123__auto___15621 = G__15622;
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
var G__15614 = parent;
G__15614.appendChild(child);

return G__15614;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15615_15623 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15616_15624 = null;
var count__15617_15625 = (0);
var i__15618_15626 = (0);
while(true){
if((i__15618_15626 < count__15617_15625)){
var c_15627 = chunk__15616_15624.cljs$core$IIndexed$_nth$arity$2(null,i__15618_15626);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15627);

var G__15628 = seq__15615_15623;
var G__15629 = chunk__15616_15624;
var G__15630 = count__15617_15625;
var G__15631 = (i__15618_15626 + (1));
seq__15615_15623 = G__15628;
chunk__15616_15624 = G__15629;
count__15617_15625 = G__15630;
i__15618_15626 = G__15631;
continue;
} else {
var temp__4657__auto___15632 = cljs.core.seq(seq__15615_15623);
if(temp__4657__auto___15632){
var seq__15615_15633__$1 = temp__4657__auto___15632;
if(cljs.core.chunked_seq_QMARK_(seq__15615_15633__$1)){
var c__8792__auto___15634 = cljs.core.chunk_first(seq__15615_15633__$1);
var G__15635 = cljs.core.chunk_rest(seq__15615_15633__$1);
var G__15636 = c__8792__auto___15634;
var G__15637 = cljs.core.count(c__8792__auto___15634);
var G__15638 = (0);
seq__15615_15623 = G__15635;
chunk__15616_15624 = G__15636;
count__15617_15625 = G__15637;
i__15618_15626 = G__15638;
continue;
} else {
var c_15639 = cljs.core.first(seq__15615_15633__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15639);

var G__15640 = cljs.core.next(seq__15615_15633__$1);
var G__15641 = null;
var G__15642 = (0);
var G__15643 = (0);
seq__15615_15623 = G__15640;
chunk__15616_15624 = G__15641;
count__15617_15625 = G__15642;
i__15618_15626 = G__15643;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15610){
var G__15611 = cljs.core.first(seq15610);
var seq15610__$1 = cljs.core.next(seq15610);
var G__15612 = cljs.core.first(seq15610__$1);
var seq15610__$2 = cljs.core.next(seq15610__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15611,G__15612,seq15610__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15648 = arguments.length;
switch (G__15648) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15655 = arguments.length;
var i__9123__auto___15656 = (0);
while(true){
if((i__9123__auto___15656 < len__9122__auto___15655)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15656]));

var G__15657 = (i__9123__auto___15656 + (1));
i__9123__auto___15656 = G__15657;
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
var G__15649 = parent;
G__15649.insertBefore(child,parent.firstChild);

return G__15649;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15650_15658 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15651_15659 = null;
var count__15652_15660 = (0);
var i__15653_15661 = (0);
while(true){
if((i__15653_15661 < count__15652_15660)){
var c_15662 = chunk__15651_15659.cljs$core$IIndexed$_nth$arity$2(null,i__15653_15661);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15662);

var G__15663 = seq__15650_15658;
var G__15664 = chunk__15651_15659;
var G__15665 = count__15652_15660;
var G__15666 = (i__15653_15661 + (1));
seq__15650_15658 = G__15663;
chunk__15651_15659 = G__15664;
count__15652_15660 = G__15665;
i__15653_15661 = G__15666;
continue;
} else {
var temp__4657__auto___15667 = cljs.core.seq(seq__15650_15658);
if(temp__4657__auto___15667){
var seq__15650_15668__$1 = temp__4657__auto___15667;
if(cljs.core.chunked_seq_QMARK_(seq__15650_15668__$1)){
var c__8792__auto___15669 = cljs.core.chunk_first(seq__15650_15668__$1);
var G__15670 = cljs.core.chunk_rest(seq__15650_15668__$1);
var G__15671 = c__8792__auto___15669;
var G__15672 = cljs.core.count(c__8792__auto___15669);
var G__15673 = (0);
seq__15650_15658 = G__15670;
chunk__15651_15659 = G__15671;
count__15652_15660 = G__15672;
i__15653_15661 = G__15673;
continue;
} else {
var c_15674 = cljs.core.first(seq__15650_15668__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15674);

var G__15675 = cljs.core.next(seq__15650_15668__$1);
var G__15676 = null;
var G__15677 = (0);
var G__15678 = (0);
seq__15650_15658 = G__15675;
chunk__15651_15659 = G__15676;
count__15652_15660 = G__15677;
i__15653_15661 = G__15678;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15645){
var G__15646 = cljs.core.first(seq15645);
var seq15645__$1 = cljs.core.next(seq15645);
var G__15647 = cljs.core.first(seq15645__$1);
var seq15645__$2 = cljs.core.next(seq15645__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15646,G__15647,seq15645__$2);
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
var temp__4655__auto___15679 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15679)){
var next_15680 = temp__4655__auto___15679;
dommy.core.insert_before_BANG_(elem,next_15680);
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
var G__15682 = arguments.length;
switch (G__15682) {
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
var G__15683 = p;
G__15683.removeChild(elem);

return G__15683;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15685){
var vec__15686 = p__15685;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15686,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15686,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15686,special_mouse_event,real_mouse_event){
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
;})(vec__15686,special_mouse_event,real_mouse_event))
});})(vec__15686,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15692 = arguments.length;
var i__9123__auto___15693 = (0);
while(true){
if((i__9123__auto___15693 < len__9122__auto___15692)){
args__9129__auto__.push((arguments[i__9123__auto___15693]));

var G__15694 = (i__9123__auto___15693 + (1));
i__9123__auto___15693 = G__15694;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15689){
var G__15690 = cljs.core.first(seq15689);
var seq15689__$1 = cljs.core.next(seq15689);
var G__15691 = cljs.core.first(seq15689__$1);
var seq15689__$2 = cljs.core.next(seq15689__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15690,G__15691,seq15689__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15695 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15695.cljs$core$IFn$_invoke$arity$1 ? fexpr__15695.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15695.call(null,elem_sel));
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
var len__9122__auto___15743 = arguments.length;
var i__9123__auto___15744 = (0);
while(true){
if((i__9123__auto___15744 < len__9122__auto___15743)){
args__9129__auto__.push((arguments[i__9123__auto___15744]));

var G__15745 = (i__9123__auto___15744 + (1));
i__9123__auto___15744 = G__15745;
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

var vec__15698_15746 = dommy.core.elem_and_selector(elem_sel);
var elem_15747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698_15746,(0),null);
var selector_15748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698_15746,(1),null);
var seq__15701_15749 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15708_15750 = null;
var count__15709_15751 = (0);
var i__15710_15752 = (0);
while(true){
if((i__15710_15752 < count__15709_15751)){
var vec__15717_15753 = chunk__15708_15750.cljs$core$IIndexed$_nth$arity$2(null,i__15710_15752);
var orig_type_15754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717_15753,(0),null);
var f_15755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717_15753,(1),null);
var seq__15711_15756 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15754,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15754,cljs.core.identity])));
var chunk__15713_15757 = null;
var count__15714_15758 = (0);
var i__15715_15759 = (0);
while(true){
if((i__15715_15759 < count__15714_15758)){
var vec__15720_15760 = chunk__15713_15757.cljs$core$IIndexed$_nth$arity$2(null,i__15715_15759);
var actual_type_15761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720_15760,(0),null);
var factory_15762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720_15760,(1),null);
var canonical_f_15763 = (function (){var G__15724 = (factory_15762.cljs$core$IFn$_invoke$arity$1 ? factory_15762.cljs$core$IFn$_invoke$arity$1(f_15755) : factory_15762.call(null,f_15755));
var fexpr__15723 = (cljs.core.truth_(selector_15748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15747,selector_15748):cljs.core.identity);
return (fexpr__15723.cljs$core$IFn$_invoke$arity$1 ? fexpr__15723.cljs$core$IFn$_invoke$arity$1(G__15724) : fexpr__15723.call(null,G__15724));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15748,actual_type_15761,f_15755], null),canonical_f_15763], 0));

if(cljs.core.truth_(elem_15747.addEventListener)){
elem_15747.addEventListener(cljs.core.name(actual_type_15761),canonical_f_15763);
} else {
elem_15747.attachEvent(cljs.core.name(actual_type_15761),canonical_f_15763);
}

var G__15764 = seq__15711_15756;
var G__15765 = chunk__15713_15757;
var G__15766 = count__15714_15758;
var G__15767 = (i__15715_15759 + (1));
seq__15711_15756 = G__15764;
chunk__15713_15757 = G__15765;
count__15714_15758 = G__15766;
i__15715_15759 = G__15767;
continue;
} else {
var temp__4657__auto___15768 = cljs.core.seq(seq__15711_15756);
if(temp__4657__auto___15768){
var seq__15711_15769__$1 = temp__4657__auto___15768;
if(cljs.core.chunked_seq_QMARK_(seq__15711_15769__$1)){
var c__8792__auto___15770 = cljs.core.chunk_first(seq__15711_15769__$1);
var G__15771 = cljs.core.chunk_rest(seq__15711_15769__$1);
var G__15772 = c__8792__auto___15770;
var G__15773 = cljs.core.count(c__8792__auto___15770);
var G__15774 = (0);
seq__15711_15756 = G__15771;
chunk__15713_15757 = G__15772;
count__15714_15758 = G__15773;
i__15715_15759 = G__15774;
continue;
} else {
var vec__15725_15775 = cljs.core.first(seq__15711_15769__$1);
var actual_type_15776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15725_15775,(0),null);
var factory_15777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15725_15775,(1),null);
var canonical_f_15778 = (function (){var G__15729 = (factory_15777.cljs$core$IFn$_invoke$arity$1 ? factory_15777.cljs$core$IFn$_invoke$arity$1(f_15755) : factory_15777.call(null,f_15755));
var fexpr__15728 = (cljs.core.truth_(selector_15748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15747,selector_15748):cljs.core.identity);
return (fexpr__15728.cljs$core$IFn$_invoke$arity$1 ? fexpr__15728.cljs$core$IFn$_invoke$arity$1(G__15729) : fexpr__15728.call(null,G__15729));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15748,actual_type_15776,f_15755], null),canonical_f_15778], 0));

if(cljs.core.truth_(elem_15747.addEventListener)){
elem_15747.addEventListener(cljs.core.name(actual_type_15776),canonical_f_15778);
} else {
elem_15747.attachEvent(cljs.core.name(actual_type_15776),canonical_f_15778);
}

var G__15779 = cljs.core.next(seq__15711_15769__$1);
var G__15780 = null;
var G__15781 = (0);
var G__15782 = (0);
seq__15711_15756 = G__15779;
chunk__15713_15757 = G__15780;
count__15714_15758 = G__15781;
i__15715_15759 = G__15782;
continue;
}
} else {
}
}
break;
}

var G__15783 = seq__15701_15749;
var G__15784 = chunk__15708_15750;
var G__15785 = count__15709_15751;
var G__15786 = (i__15710_15752 + (1));
seq__15701_15749 = G__15783;
chunk__15708_15750 = G__15784;
count__15709_15751 = G__15785;
i__15710_15752 = G__15786;
continue;
} else {
var temp__4657__auto___15787 = cljs.core.seq(seq__15701_15749);
if(temp__4657__auto___15787){
var seq__15701_15788__$1 = temp__4657__auto___15787;
if(cljs.core.chunked_seq_QMARK_(seq__15701_15788__$1)){
var c__8792__auto___15789 = cljs.core.chunk_first(seq__15701_15788__$1);
var G__15790 = cljs.core.chunk_rest(seq__15701_15788__$1);
var G__15791 = c__8792__auto___15789;
var G__15792 = cljs.core.count(c__8792__auto___15789);
var G__15793 = (0);
seq__15701_15749 = G__15790;
chunk__15708_15750 = G__15791;
count__15709_15751 = G__15792;
i__15710_15752 = G__15793;
continue;
} else {
var vec__15730_15794 = cljs.core.first(seq__15701_15788__$1);
var orig_type_15795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15730_15794,(0),null);
var f_15796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15730_15794,(1),null);
var seq__15702_15797 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15795,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15795,cljs.core.identity])));
var chunk__15704_15798 = null;
var count__15705_15799 = (0);
var i__15706_15800 = (0);
while(true){
if((i__15706_15800 < count__15705_15799)){
var vec__15733_15801 = chunk__15704_15798.cljs$core$IIndexed$_nth$arity$2(null,i__15706_15800);
var actual_type_15802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15733_15801,(0),null);
var factory_15803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15733_15801,(1),null);
var canonical_f_15804 = (function (){var G__15737 = (factory_15803.cljs$core$IFn$_invoke$arity$1 ? factory_15803.cljs$core$IFn$_invoke$arity$1(f_15796) : factory_15803.call(null,f_15796));
var fexpr__15736 = (cljs.core.truth_(selector_15748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15747,selector_15748):cljs.core.identity);
return (fexpr__15736.cljs$core$IFn$_invoke$arity$1 ? fexpr__15736.cljs$core$IFn$_invoke$arity$1(G__15737) : fexpr__15736.call(null,G__15737));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15748,actual_type_15802,f_15796], null),canonical_f_15804], 0));

if(cljs.core.truth_(elem_15747.addEventListener)){
elem_15747.addEventListener(cljs.core.name(actual_type_15802),canonical_f_15804);
} else {
elem_15747.attachEvent(cljs.core.name(actual_type_15802),canonical_f_15804);
}

var G__15805 = seq__15702_15797;
var G__15806 = chunk__15704_15798;
var G__15807 = count__15705_15799;
var G__15808 = (i__15706_15800 + (1));
seq__15702_15797 = G__15805;
chunk__15704_15798 = G__15806;
count__15705_15799 = G__15807;
i__15706_15800 = G__15808;
continue;
} else {
var temp__4657__auto___15809__$1 = cljs.core.seq(seq__15702_15797);
if(temp__4657__auto___15809__$1){
var seq__15702_15810__$1 = temp__4657__auto___15809__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15702_15810__$1)){
var c__8792__auto___15811 = cljs.core.chunk_first(seq__15702_15810__$1);
var G__15812 = cljs.core.chunk_rest(seq__15702_15810__$1);
var G__15813 = c__8792__auto___15811;
var G__15814 = cljs.core.count(c__8792__auto___15811);
var G__15815 = (0);
seq__15702_15797 = G__15812;
chunk__15704_15798 = G__15813;
count__15705_15799 = G__15814;
i__15706_15800 = G__15815;
continue;
} else {
var vec__15738_15816 = cljs.core.first(seq__15702_15810__$1);
var actual_type_15817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738_15816,(0),null);
var factory_15818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738_15816,(1),null);
var canonical_f_15819 = (function (){var G__15742 = (factory_15818.cljs$core$IFn$_invoke$arity$1 ? factory_15818.cljs$core$IFn$_invoke$arity$1(f_15796) : factory_15818.call(null,f_15796));
var fexpr__15741 = (cljs.core.truth_(selector_15748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15747,selector_15748):cljs.core.identity);
return (fexpr__15741.cljs$core$IFn$_invoke$arity$1 ? fexpr__15741.cljs$core$IFn$_invoke$arity$1(G__15742) : fexpr__15741.call(null,G__15742));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15748,actual_type_15817,f_15796], null),canonical_f_15819], 0));

if(cljs.core.truth_(elem_15747.addEventListener)){
elem_15747.addEventListener(cljs.core.name(actual_type_15817),canonical_f_15819);
} else {
elem_15747.attachEvent(cljs.core.name(actual_type_15817),canonical_f_15819);
}

var G__15820 = cljs.core.next(seq__15702_15810__$1);
var G__15821 = null;
var G__15822 = (0);
var G__15823 = (0);
seq__15702_15797 = G__15820;
chunk__15704_15798 = G__15821;
count__15705_15799 = G__15822;
i__15706_15800 = G__15823;
continue;
}
} else {
}
}
break;
}

var G__15824 = cljs.core.next(seq__15701_15788__$1);
var G__15825 = null;
var G__15826 = (0);
var G__15827 = (0);
seq__15701_15749 = G__15824;
chunk__15708_15750 = G__15825;
count__15709_15751 = G__15826;
i__15710_15752 = G__15827;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15696){
var G__15697 = cljs.core.first(seq15696);
var seq15696__$1 = cljs.core.next(seq15696);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15697,seq15696__$1);
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
var len__9122__auto___15867 = arguments.length;
var i__9123__auto___15868 = (0);
while(true){
if((i__9123__auto___15868 < len__9122__auto___15867)){
args__9129__auto__.push((arguments[i__9123__auto___15868]));

var G__15869 = (i__9123__auto___15868 + (1));
i__9123__auto___15868 = G__15869;
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

var vec__15830_15870 = dommy.core.elem_and_selector(elem_sel);
var elem_15871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15870,(0),null);
var selector_15872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15870,(1),null);
var seq__15833_15873 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15840_15874 = null;
var count__15841_15875 = (0);
var i__15842_15876 = (0);
while(true){
if((i__15842_15876 < count__15841_15875)){
var vec__15849_15877 = chunk__15840_15874.cljs$core$IIndexed$_nth$arity$2(null,i__15842_15876);
var orig_type_15878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849_15877,(0),null);
var f_15879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849_15877,(1),null);
var seq__15843_15880 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15878,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15878,cljs.core.identity])));
var chunk__15845_15881 = null;
var count__15846_15882 = (0);
var i__15847_15883 = (0);
while(true){
if((i__15847_15883 < count__15846_15882)){
var vec__15852_15884 = chunk__15845_15881.cljs$core$IIndexed$_nth$arity$2(null,i__15847_15883);
var actual_type_15885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852_15884,(0),null);
var __15886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852_15884,(1),null);
var keys_15887 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15872,actual_type_15885,f_15879], null);
var canonical_f_15888 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15871),keys_15887);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15871,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15887], 0));

if(cljs.core.truth_(elem_15871.removeEventListener)){
elem_15871.removeEventListener(cljs.core.name(actual_type_15885),canonical_f_15888);
} else {
elem_15871.detachEvent(cljs.core.name(actual_type_15885),canonical_f_15888);
}

var G__15889 = seq__15843_15880;
var G__15890 = chunk__15845_15881;
var G__15891 = count__15846_15882;
var G__15892 = (i__15847_15883 + (1));
seq__15843_15880 = G__15889;
chunk__15845_15881 = G__15890;
count__15846_15882 = G__15891;
i__15847_15883 = G__15892;
continue;
} else {
var temp__4657__auto___15893 = cljs.core.seq(seq__15843_15880);
if(temp__4657__auto___15893){
var seq__15843_15894__$1 = temp__4657__auto___15893;
if(cljs.core.chunked_seq_QMARK_(seq__15843_15894__$1)){
var c__8792__auto___15895 = cljs.core.chunk_first(seq__15843_15894__$1);
var G__15896 = cljs.core.chunk_rest(seq__15843_15894__$1);
var G__15897 = c__8792__auto___15895;
var G__15898 = cljs.core.count(c__8792__auto___15895);
var G__15899 = (0);
seq__15843_15880 = G__15896;
chunk__15845_15881 = G__15897;
count__15846_15882 = G__15898;
i__15847_15883 = G__15899;
continue;
} else {
var vec__15855_15900 = cljs.core.first(seq__15843_15894__$1);
var actual_type_15901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855_15900,(0),null);
var __15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855_15900,(1),null);
var keys_15903 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15872,actual_type_15901,f_15879], null);
var canonical_f_15904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15871),keys_15903);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15871,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15903], 0));

if(cljs.core.truth_(elem_15871.removeEventListener)){
elem_15871.removeEventListener(cljs.core.name(actual_type_15901),canonical_f_15904);
} else {
elem_15871.detachEvent(cljs.core.name(actual_type_15901),canonical_f_15904);
}

var G__15905 = cljs.core.next(seq__15843_15894__$1);
var G__15906 = null;
var G__15907 = (0);
var G__15908 = (0);
seq__15843_15880 = G__15905;
chunk__15845_15881 = G__15906;
count__15846_15882 = G__15907;
i__15847_15883 = G__15908;
continue;
}
} else {
}
}
break;
}

var G__15909 = seq__15833_15873;
var G__15910 = chunk__15840_15874;
var G__15911 = count__15841_15875;
var G__15912 = (i__15842_15876 + (1));
seq__15833_15873 = G__15909;
chunk__15840_15874 = G__15910;
count__15841_15875 = G__15911;
i__15842_15876 = G__15912;
continue;
} else {
var temp__4657__auto___15913 = cljs.core.seq(seq__15833_15873);
if(temp__4657__auto___15913){
var seq__15833_15914__$1 = temp__4657__auto___15913;
if(cljs.core.chunked_seq_QMARK_(seq__15833_15914__$1)){
var c__8792__auto___15915 = cljs.core.chunk_first(seq__15833_15914__$1);
var G__15916 = cljs.core.chunk_rest(seq__15833_15914__$1);
var G__15917 = c__8792__auto___15915;
var G__15918 = cljs.core.count(c__8792__auto___15915);
var G__15919 = (0);
seq__15833_15873 = G__15916;
chunk__15840_15874 = G__15917;
count__15841_15875 = G__15918;
i__15842_15876 = G__15919;
continue;
} else {
var vec__15858_15920 = cljs.core.first(seq__15833_15914__$1);
var orig_type_15921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858_15920,(0),null);
var f_15922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858_15920,(1),null);
var seq__15834_15923 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15921,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15921,cljs.core.identity])));
var chunk__15836_15924 = null;
var count__15837_15925 = (0);
var i__15838_15926 = (0);
while(true){
if((i__15838_15926 < count__15837_15925)){
var vec__15861_15927 = chunk__15836_15924.cljs$core$IIndexed$_nth$arity$2(null,i__15838_15926);
var actual_type_15928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861_15927,(0),null);
var __15929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861_15927,(1),null);
var keys_15930 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15872,actual_type_15928,f_15922], null);
var canonical_f_15931 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15871),keys_15930);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15871,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15930], 0));

if(cljs.core.truth_(elem_15871.removeEventListener)){
elem_15871.removeEventListener(cljs.core.name(actual_type_15928),canonical_f_15931);
} else {
elem_15871.detachEvent(cljs.core.name(actual_type_15928),canonical_f_15931);
}

var G__15932 = seq__15834_15923;
var G__15933 = chunk__15836_15924;
var G__15934 = count__15837_15925;
var G__15935 = (i__15838_15926 + (1));
seq__15834_15923 = G__15932;
chunk__15836_15924 = G__15933;
count__15837_15925 = G__15934;
i__15838_15926 = G__15935;
continue;
} else {
var temp__4657__auto___15936__$1 = cljs.core.seq(seq__15834_15923);
if(temp__4657__auto___15936__$1){
var seq__15834_15937__$1 = temp__4657__auto___15936__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15834_15937__$1)){
var c__8792__auto___15938 = cljs.core.chunk_first(seq__15834_15937__$1);
var G__15939 = cljs.core.chunk_rest(seq__15834_15937__$1);
var G__15940 = c__8792__auto___15938;
var G__15941 = cljs.core.count(c__8792__auto___15938);
var G__15942 = (0);
seq__15834_15923 = G__15939;
chunk__15836_15924 = G__15940;
count__15837_15925 = G__15941;
i__15838_15926 = G__15942;
continue;
} else {
var vec__15864_15943 = cljs.core.first(seq__15834_15937__$1);
var actual_type_15944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15864_15943,(0),null);
var __15945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15864_15943,(1),null);
var keys_15946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15872,actual_type_15944,f_15922], null);
var canonical_f_15947 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15871),keys_15946);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15871,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15946], 0));

if(cljs.core.truth_(elem_15871.removeEventListener)){
elem_15871.removeEventListener(cljs.core.name(actual_type_15944),canonical_f_15947);
} else {
elem_15871.detachEvent(cljs.core.name(actual_type_15944),canonical_f_15947);
}

var G__15948 = cljs.core.next(seq__15834_15937__$1);
var G__15949 = null;
var G__15950 = (0);
var G__15951 = (0);
seq__15834_15923 = G__15948;
chunk__15836_15924 = G__15949;
count__15837_15925 = G__15950;
i__15838_15926 = G__15951;
continue;
}
} else {
}
}
break;
}

var G__15952 = cljs.core.next(seq__15833_15914__$1);
var G__15953 = null;
var G__15954 = (0);
var G__15955 = (0);
seq__15833_15873 = G__15952;
chunk__15840_15874 = G__15953;
count__15841_15875 = G__15954;
i__15842_15876 = G__15955;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15828){
var G__15829 = cljs.core.first(seq15828);
var seq15828__$1 = cljs.core.next(seq15828);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15829,seq15828__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15971 = arguments.length;
var i__9123__auto___15972 = (0);
while(true){
if((i__9123__auto___15972 < len__9122__auto___15971)){
args__9129__auto__.push((arguments[i__9123__auto___15972]));

var G__15973 = (i__9123__auto___15972 + (1));
i__9123__auto___15972 = G__15973;
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

var vec__15958_15974 = dommy.core.elem_and_selector(elem_sel);
var elem_15975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15958_15974,(0),null);
var selector_15976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15958_15974,(1),null);
var seq__15961_15977 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15962_15978 = null;
var count__15963_15979 = (0);
var i__15964_15980 = (0);
while(true){
if((i__15964_15980 < count__15963_15979)){
var vec__15965_15981 = chunk__15962_15978.cljs$core$IIndexed$_nth$arity$2(null,i__15964_15980);
var type_15982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965_15981,(0),null);
var f_15983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965_15981,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15982,((function (seq__15961_15977,chunk__15962_15978,count__15963_15979,i__15964_15980,vec__15965_15981,type_15982,f_15983,vec__15958_15974,elem_15975,selector_15976){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15982,dommy$core$this_fn], 0));

return (f_15983.cljs$core$IFn$_invoke$arity$1 ? f_15983.cljs$core$IFn$_invoke$arity$1(e) : f_15983.call(null,e));
});})(seq__15961_15977,chunk__15962_15978,count__15963_15979,i__15964_15980,vec__15965_15981,type_15982,f_15983,vec__15958_15974,elem_15975,selector_15976))
], 0));

var G__15984 = seq__15961_15977;
var G__15985 = chunk__15962_15978;
var G__15986 = count__15963_15979;
var G__15987 = (i__15964_15980 + (1));
seq__15961_15977 = G__15984;
chunk__15962_15978 = G__15985;
count__15963_15979 = G__15986;
i__15964_15980 = G__15987;
continue;
} else {
var temp__4657__auto___15988 = cljs.core.seq(seq__15961_15977);
if(temp__4657__auto___15988){
var seq__15961_15989__$1 = temp__4657__auto___15988;
if(cljs.core.chunked_seq_QMARK_(seq__15961_15989__$1)){
var c__8792__auto___15990 = cljs.core.chunk_first(seq__15961_15989__$1);
var G__15991 = cljs.core.chunk_rest(seq__15961_15989__$1);
var G__15992 = c__8792__auto___15990;
var G__15993 = cljs.core.count(c__8792__auto___15990);
var G__15994 = (0);
seq__15961_15977 = G__15991;
chunk__15962_15978 = G__15992;
count__15963_15979 = G__15993;
i__15964_15980 = G__15994;
continue;
} else {
var vec__15968_15995 = cljs.core.first(seq__15961_15989__$1);
var type_15996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15968_15995,(0),null);
var f_15997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15968_15995,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15996,((function (seq__15961_15977,chunk__15962_15978,count__15963_15979,i__15964_15980,vec__15968_15995,type_15996,f_15997,seq__15961_15989__$1,temp__4657__auto___15988,vec__15958_15974,elem_15975,selector_15976){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15996,dommy$core$this_fn], 0));

return (f_15997.cljs$core$IFn$_invoke$arity$1 ? f_15997.cljs$core$IFn$_invoke$arity$1(e) : f_15997.call(null,e));
});})(seq__15961_15977,chunk__15962_15978,count__15963_15979,i__15964_15980,vec__15968_15995,type_15996,f_15997,seq__15961_15989__$1,temp__4657__auto___15988,vec__15958_15974,elem_15975,selector_15976))
], 0));

var G__15998 = cljs.core.next(seq__15961_15989__$1);
var G__15999 = null;
var G__16000 = (0);
var G__16001 = (0);
seq__15961_15977 = G__15998;
chunk__15962_15978 = G__15999;
count__15963_15979 = G__16000;
i__15964_15980 = G__16001;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15956){
var G__15957 = cljs.core.first(seq15956);
var seq15956__$1 = cljs.core.next(seq15956);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15957,seq15956__$1);
});

