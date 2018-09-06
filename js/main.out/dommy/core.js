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
var G__15286 = arguments.length;
switch (G__15286) {
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
var G__15289 = arguments.length;
switch (G__15289) {
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
var G__15293 = arguments.length;
switch (G__15293) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15291_SHARP_){
return !((p1__15291_SHARP_ === base));
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
var len__9122__auto___15307 = arguments.length;
var i__9123__auto___15308 = (0);
while(true){
if((i__9123__auto___15308 < len__9122__auto___15307)){
args__9129__auto__.push((arguments[i__9123__auto___15308]));

var G__15309 = (i__9123__auto___15308 + (1));
i__9123__auto___15308 = G__15309;
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
var seq__15297_15310 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15298_15311 = null;
var count__15299_15312 = (0);
var i__15300_15313 = (0);
while(true){
if((i__15300_15313 < count__15299_15312)){
var vec__15301_15314 = chunk__15298_15311.cljs$core$IIndexed$_nth$arity$2(null,i__15300_15313);
var k_15315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301_15314,(0),null);
var v_15316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301_15314,(1),null);
style.setProperty(dommy.utils.as_str(k_15315),v_15316);

var G__15317 = seq__15297_15310;
var G__15318 = chunk__15298_15311;
var G__15319 = count__15299_15312;
var G__15320 = (i__15300_15313 + (1));
seq__15297_15310 = G__15317;
chunk__15298_15311 = G__15318;
count__15299_15312 = G__15319;
i__15300_15313 = G__15320;
continue;
} else {
var temp__4657__auto___15321 = cljs.core.seq(seq__15297_15310);
if(temp__4657__auto___15321){
var seq__15297_15322__$1 = temp__4657__auto___15321;
if(cljs.core.chunked_seq_QMARK_(seq__15297_15322__$1)){
var c__8792__auto___15323 = cljs.core.chunk_first(seq__15297_15322__$1);
var G__15324 = cljs.core.chunk_rest(seq__15297_15322__$1);
var G__15325 = c__8792__auto___15323;
var G__15326 = cljs.core.count(c__8792__auto___15323);
var G__15327 = (0);
seq__15297_15310 = G__15324;
chunk__15298_15311 = G__15325;
count__15299_15312 = G__15326;
i__15300_15313 = G__15327;
continue;
} else {
var vec__15304_15328 = cljs.core.first(seq__15297_15322__$1);
var k_15329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15328,(0),null);
var v_15330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15328,(1),null);
style.setProperty(dommy.utils.as_str(k_15329),v_15330);

var G__15331 = cljs.core.next(seq__15297_15322__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__15297_15310 = G__15331;
chunk__15298_15311 = G__15332;
count__15299_15312 = G__15333;
i__15300_15313 = G__15334;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15295){
var G__15296 = cljs.core.first(seq15295);
var seq15295__$1 = cljs.core.next(seq15295);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15296,seq15295__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15341 = arguments.length;
var i__9123__auto___15342 = (0);
while(true){
if((i__9123__auto___15342 < len__9122__auto___15341)){
args__9129__auto__.push((arguments[i__9123__auto___15342]));

var G__15343 = (i__9123__auto___15342 + (1));
i__9123__auto___15342 = G__15343;
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
var seq__15337_15344 = cljs.core.seq(keywords);
var chunk__15338_15345 = null;
var count__15339_15346 = (0);
var i__15340_15347 = (0);
while(true){
if((i__15340_15347 < count__15339_15346)){
var kw_15348 = chunk__15338_15345.cljs$core$IIndexed$_nth$arity$2(null,i__15340_15347);
style.removeProperty(dommy.utils.as_str(kw_15348));

var G__15349 = seq__15337_15344;
var G__15350 = chunk__15338_15345;
var G__15351 = count__15339_15346;
var G__15352 = (i__15340_15347 + (1));
seq__15337_15344 = G__15349;
chunk__15338_15345 = G__15350;
count__15339_15346 = G__15351;
i__15340_15347 = G__15352;
continue;
} else {
var temp__4657__auto___15353 = cljs.core.seq(seq__15337_15344);
if(temp__4657__auto___15353){
var seq__15337_15354__$1 = temp__4657__auto___15353;
if(cljs.core.chunked_seq_QMARK_(seq__15337_15354__$1)){
var c__8792__auto___15355 = cljs.core.chunk_first(seq__15337_15354__$1);
var G__15356 = cljs.core.chunk_rest(seq__15337_15354__$1);
var G__15357 = c__8792__auto___15355;
var G__15358 = cljs.core.count(c__8792__auto___15355);
var G__15359 = (0);
seq__15337_15344 = G__15356;
chunk__15338_15345 = G__15357;
count__15339_15346 = G__15358;
i__15340_15347 = G__15359;
continue;
} else {
var kw_15360 = cljs.core.first(seq__15337_15354__$1);
style.removeProperty(dommy.utils.as_str(kw_15360));

var G__15361 = cljs.core.next(seq__15337_15354__$1);
var G__15362 = null;
var G__15363 = (0);
var G__15364 = (0);
seq__15337_15344 = G__15361;
chunk__15338_15345 = G__15362;
count__15339_15346 = G__15363;
i__15340_15347 = G__15364;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15335){
var G__15336 = cljs.core.first(seq15335);
var seq15335__$1 = cljs.core.next(seq15335);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15336,seq15335__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15377 = arguments.length;
var i__9123__auto___15378 = (0);
while(true){
if((i__9123__auto___15378 < len__9122__auto___15377)){
args__9129__auto__.push((arguments[i__9123__auto___15378]));

var G__15379 = (i__9123__auto___15378 + (1));
i__9123__auto___15378 = G__15379;
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

var seq__15367_15380 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15368_15381 = null;
var count__15369_15382 = (0);
var i__15370_15383 = (0);
while(true){
if((i__15370_15383 < count__15369_15382)){
var vec__15371_15384 = chunk__15368_15381.cljs$core$IIndexed$_nth$arity$2(null,i__15370_15383);
var k_15385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15371_15384,(0),null);
var v_15386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15371_15384,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15385,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15386),"px"].join('')], 0));

var G__15387 = seq__15367_15380;
var G__15388 = chunk__15368_15381;
var G__15389 = count__15369_15382;
var G__15390 = (i__15370_15383 + (1));
seq__15367_15380 = G__15387;
chunk__15368_15381 = G__15388;
count__15369_15382 = G__15389;
i__15370_15383 = G__15390;
continue;
} else {
var temp__4657__auto___15391 = cljs.core.seq(seq__15367_15380);
if(temp__4657__auto___15391){
var seq__15367_15392__$1 = temp__4657__auto___15391;
if(cljs.core.chunked_seq_QMARK_(seq__15367_15392__$1)){
var c__8792__auto___15393 = cljs.core.chunk_first(seq__15367_15392__$1);
var G__15394 = cljs.core.chunk_rest(seq__15367_15392__$1);
var G__15395 = c__8792__auto___15393;
var G__15396 = cljs.core.count(c__8792__auto___15393);
var G__15397 = (0);
seq__15367_15380 = G__15394;
chunk__15368_15381 = G__15395;
count__15369_15382 = G__15396;
i__15370_15383 = G__15397;
continue;
} else {
var vec__15374_15398 = cljs.core.first(seq__15367_15392__$1);
var k_15399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15374_15398,(0),null);
var v_15400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15374_15398,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15399,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15400),"px"].join('')], 0));

var G__15401 = cljs.core.next(seq__15367_15392__$1);
var G__15402 = null;
var G__15403 = (0);
var G__15404 = (0);
seq__15367_15380 = G__15401;
chunk__15368_15381 = G__15402;
count__15369_15382 = G__15403;
i__15370_15383 = G__15404;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15365){
var G__15366 = cljs.core.first(seq15365);
var seq15365__$1 = cljs.core.next(seq15365);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15366,seq15365__$1);
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
var G__15410 = arguments.length;
switch (G__15410) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15424 = arguments.length;
var i__9123__auto___15425 = (0);
while(true){
if((i__9123__auto___15425 < len__9122__auto___15424)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15425]));

var G__15426 = (i__9123__auto___15425 + (1));
i__9123__auto___15425 = G__15426;
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
var G__15411 = elem;
(G__15411[k__$1] = v);

return G__15411;
} else {
var G__15412 = elem;
G__15412.setAttribute(k__$1,v);

return G__15412;
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

var seq__15413_15427 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15414_15428 = null;
var count__15415_15429 = (0);
var i__15416_15430 = (0);
while(true){
if((i__15416_15430 < count__15415_15429)){
var vec__15417_15431 = chunk__15414_15428.cljs$core$IIndexed$_nth$arity$2(null,i__15416_15430);
var k_15432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417_15431,(0),null);
var v_15433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417_15431,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15432__$1,v_15433__$1);

var G__15434 = seq__15413_15427;
var G__15435 = chunk__15414_15428;
var G__15436 = count__15415_15429;
var G__15437 = (i__15416_15430 + (1));
seq__15413_15427 = G__15434;
chunk__15414_15428 = G__15435;
count__15415_15429 = G__15436;
i__15416_15430 = G__15437;
continue;
} else {
var temp__4657__auto___15438 = cljs.core.seq(seq__15413_15427);
if(temp__4657__auto___15438){
var seq__15413_15439__$1 = temp__4657__auto___15438;
if(cljs.core.chunked_seq_QMARK_(seq__15413_15439__$1)){
var c__8792__auto___15440 = cljs.core.chunk_first(seq__15413_15439__$1);
var G__15441 = cljs.core.chunk_rest(seq__15413_15439__$1);
var G__15442 = c__8792__auto___15440;
var G__15443 = cljs.core.count(c__8792__auto___15440);
var G__15444 = (0);
seq__15413_15427 = G__15441;
chunk__15414_15428 = G__15442;
count__15415_15429 = G__15443;
i__15416_15430 = G__15444;
continue;
} else {
var vec__15420_15445 = cljs.core.first(seq__15413_15439__$1);
var k_15446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15420_15445,(0),null);
var v_15447__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15420_15445,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15446__$1,v_15447__$1);

var G__15448 = cljs.core.next(seq__15413_15439__$1);
var G__15449 = null;
var G__15450 = (0);
var G__15451 = (0);
seq__15413_15427 = G__15448;
chunk__15414_15428 = G__15449;
count__15415_15429 = G__15450;
i__15416_15430 = G__15451;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15406){
var G__15407 = cljs.core.first(seq15406);
var seq15406__$1 = cljs.core.next(seq15406);
var G__15408 = cljs.core.first(seq15406__$1);
var seq15406__$2 = cljs.core.next(seq15406__$1);
var G__15409 = cljs.core.first(seq15406__$2);
var seq15406__$3 = cljs.core.next(seq15406__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15407,G__15408,G__15409,seq15406__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15456 = arguments.length;
switch (G__15456) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15463 = arguments.length;
var i__9123__auto___15464 = (0);
while(true){
if((i__9123__auto___15464 < len__9122__auto___15463)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15464]));

var G__15465 = (i__9123__auto___15464 + (1));
i__9123__auto___15464 = G__15465;
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
var k_15466__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15457.cljs$core$IFn$_invoke$arity$1 ? fexpr__15457.cljs$core$IFn$_invoke$arity$1(k_15466__$1) : fexpr__15457.call(null,k_15466__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15466__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15458_15467 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15459_15468 = null;
var count__15460_15469 = (0);
var i__15461_15470 = (0);
while(true){
if((i__15461_15470 < count__15460_15469)){
var k_15471__$1 = chunk__15459_15468.cljs$core$IIndexed$_nth$arity$2(null,i__15461_15470);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15471__$1);

var G__15472 = seq__15458_15467;
var G__15473 = chunk__15459_15468;
var G__15474 = count__15460_15469;
var G__15475 = (i__15461_15470 + (1));
seq__15458_15467 = G__15472;
chunk__15459_15468 = G__15473;
count__15460_15469 = G__15474;
i__15461_15470 = G__15475;
continue;
} else {
var temp__4657__auto___15476 = cljs.core.seq(seq__15458_15467);
if(temp__4657__auto___15476){
var seq__15458_15477__$1 = temp__4657__auto___15476;
if(cljs.core.chunked_seq_QMARK_(seq__15458_15477__$1)){
var c__8792__auto___15478 = cljs.core.chunk_first(seq__15458_15477__$1);
var G__15479 = cljs.core.chunk_rest(seq__15458_15477__$1);
var G__15480 = c__8792__auto___15478;
var G__15481 = cljs.core.count(c__8792__auto___15478);
var G__15482 = (0);
seq__15458_15467 = G__15479;
chunk__15459_15468 = G__15480;
count__15460_15469 = G__15481;
i__15461_15470 = G__15482;
continue;
} else {
var k_15483__$1 = cljs.core.first(seq__15458_15477__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15483__$1);

var G__15484 = cljs.core.next(seq__15458_15477__$1);
var G__15485 = null;
var G__15486 = (0);
var G__15487 = (0);
seq__15458_15467 = G__15484;
chunk__15459_15468 = G__15485;
count__15460_15469 = G__15486;
i__15461_15470 = G__15487;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15453){
var G__15454 = cljs.core.first(seq15453);
var seq15453__$1 = cljs.core.next(seq15453);
var G__15455 = cljs.core.first(seq15453__$1);
var seq15453__$2 = cljs.core.next(seq15453__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15454,G__15455,seq15453__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15489 = arguments.length;
switch (G__15489) {
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
var G__15495 = arguments.length;
switch (G__15495) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15509 = arguments.length;
var i__9123__auto___15510 = (0);
while(true){
if((i__9123__auto___15510 < len__9122__auto___15509)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15510]));

var G__15511 = (i__9123__auto___15510 + (1));
i__9123__auto___15510 = G__15511;
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
var temp__4655__auto___15512 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15512)){
var class_list_15513 = temp__4655__auto___15512;
var seq__15496_15514 = cljs.core.seq(classes__$1);
var chunk__15497_15515 = null;
var count__15498_15516 = (0);
var i__15499_15517 = (0);
while(true){
if((i__15499_15517 < count__15498_15516)){
var c_15518 = chunk__15497_15515.cljs$core$IIndexed$_nth$arity$2(null,i__15499_15517);
class_list_15513.add(c_15518);

var G__15519 = seq__15496_15514;
var G__15520 = chunk__15497_15515;
var G__15521 = count__15498_15516;
var G__15522 = (i__15499_15517 + (1));
seq__15496_15514 = G__15519;
chunk__15497_15515 = G__15520;
count__15498_15516 = G__15521;
i__15499_15517 = G__15522;
continue;
} else {
var temp__4657__auto___15523 = cljs.core.seq(seq__15496_15514);
if(temp__4657__auto___15523){
var seq__15496_15524__$1 = temp__4657__auto___15523;
if(cljs.core.chunked_seq_QMARK_(seq__15496_15524__$1)){
var c__8792__auto___15525 = cljs.core.chunk_first(seq__15496_15524__$1);
var G__15526 = cljs.core.chunk_rest(seq__15496_15524__$1);
var G__15527 = c__8792__auto___15525;
var G__15528 = cljs.core.count(c__8792__auto___15525);
var G__15529 = (0);
seq__15496_15514 = G__15526;
chunk__15497_15515 = G__15527;
count__15498_15516 = G__15528;
i__15499_15517 = G__15529;
continue;
} else {
var c_15530 = cljs.core.first(seq__15496_15524__$1);
class_list_15513.add(c_15530);

var G__15531 = cljs.core.next(seq__15496_15524__$1);
var G__15532 = null;
var G__15533 = (0);
var G__15534 = (0);
seq__15496_15514 = G__15531;
chunk__15497_15515 = G__15532;
count__15498_15516 = G__15533;
i__15499_15517 = G__15534;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15500_15535 = cljs.core.seq(classes__$1);
var chunk__15501_15536 = null;
var count__15502_15537 = (0);
var i__15503_15538 = (0);
while(true){
if((i__15503_15538 < count__15502_15537)){
var c_15539 = chunk__15501_15536.cljs$core$IIndexed$_nth$arity$2(null,i__15503_15538);
var class_name_15540 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15540,c_15539))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15540 === ""))?c_15539:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15540)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15539)].join('')));
}

var G__15541 = seq__15500_15535;
var G__15542 = chunk__15501_15536;
var G__15543 = count__15502_15537;
var G__15544 = (i__15503_15538 + (1));
seq__15500_15535 = G__15541;
chunk__15501_15536 = G__15542;
count__15502_15537 = G__15543;
i__15503_15538 = G__15544;
continue;
} else {
var temp__4657__auto___15545 = cljs.core.seq(seq__15500_15535);
if(temp__4657__auto___15545){
var seq__15500_15546__$1 = temp__4657__auto___15545;
if(cljs.core.chunked_seq_QMARK_(seq__15500_15546__$1)){
var c__8792__auto___15547 = cljs.core.chunk_first(seq__15500_15546__$1);
var G__15548 = cljs.core.chunk_rest(seq__15500_15546__$1);
var G__15549 = c__8792__auto___15547;
var G__15550 = cljs.core.count(c__8792__auto___15547);
var G__15551 = (0);
seq__15500_15535 = G__15548;
chunk__15501_15536 = G__15549;
count__15502_15537 = G__15550;
i__15503_15538 = G__15551;
continue;
} else {
var c_15552 = cljs.core.first(seq__15500_15546__$1);
var class_name_15553 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15553,c_15552))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15553 === ""))?c_15552:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15553)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15552)].join('')));
}

var G__15554 = cljs.core.next(seq__15500_15546__$1);
var G__15555 = null;
var G__15556 = (0);
var G__15557 = (0);
seq__15500_15535 = G__15554;
chunk__15501_15536 = G__15555;
count__15502_15537 = G__15556;
i__15503_15538 = G__15557;
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
var seq__15504_15558 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15505_15559 = null;
var count__15506_15560 = (0);
var i__15507_15561 = (0);
while(true){
if((i__15507_15561 < count__15506_15560)){
var c_15562 = chunk__15505_15559.cljs$core$IIndexed$_nth$arity$2(null,i__15507_15561);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15562);

var G__15563 = seq__15504_15558;
var G__15564 = chunk__15505_15559;
var G__15565 = count__15506_15560;
var G__15566 = (i__15507_15561 + (1));
seq__15504_15558 = G__15563;
chunk__15505_15559 = G__15564;
count__15506_15560 = G__15565;
i__15507_15561 = G__15566;
continue;
} else {
var temp__4657__auto___15567 = cljs.core.seq(seq__15504_15558);
if(temp__4657__auto___15567){
var seq__15504_15568__$1 = temp__4657__auto___15567;
if(cljs.core.chunked_seq_QMARK_(seq__15504_15568__$1)){
var c__8792__auto___15569 = cljs.core.chunk_first(seq__15504_15568__$1);
var G__15570 = cljs.core.chunk_rest(seq__15504_15568__$1);
var G__15571 = c__8792__auto___15569;
var G__15572 = cljs.core.count(c__8792__auto___15569);
var G__15573 = (0);
seq__15504_15558 = G__15570;
chunk__15505_15559 = G__15571;
count__15506_15560 = G__15572;
i__15507_15561 = G__15573;
continue;
} else {
var c_15574 = cljs.core.first(seq__15504_15568__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15574);

var G__15575 = cljs.core.next(seq__15504_15568__$1);
var G__15576 = null;
var G__15577 = (0);
var G__15578 = (0);
seq__15504_15558 = G__15575;
chunk__15505_15559 = G__15576;
count__15506_15560 = G__15577;
i__15507_15561 = G__15578;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15492){
var G__15493 = cljs.core.first(seq15492);
var seq15492__$1 = cljs.core.next(seq15492);
var G__15494 = cljs.core.first(seq15492__$1);
var seq15492__$2 = cljs.core.next(seq15492__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15493,G__15494,seq15492__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15583 = arguments.length;
switch (G__15583) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15589 = arguments.length;
var i__9123__auto___15590 = (0);
while(true){
if((i__9123__auto___15590 < len__9122__auto___15589)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15590]));

var G__15591 = (i__9123__auto___15590 + (1));
i__9123__auto___15590 = G__15591;
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
var temp__4655__auto___15592 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15592)){
var class_list_15593 = temp__4655__auto___15592;
class_list_15593.remove(c__$1);
} else {
var class_name_15594 = dommy.core.class$(elem);
var new_class_name_15595 = dommy.utils.remove_class_str(class_name_15594,c__$1);
if((class_name_15594 === new_class_name_15595)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15595);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15584 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15585 = null;
var count__15586 = (0);
var i__15587 = (0);
while(true){
if((i__15587 < count__15586)){
var c = chunk__15585.cljs$core$IIndexed$_nth$arity$2(null,i__15587);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15596 = seq__15584;
var G__15597 = chunk__15585;
var G__15598 = count__15586;
var G__15599 = (i__15587 + (1));
seq__15584 = G__15596;
chunk__15585 = G__15597;
count__15586 = G__15598;
i__15587 = G__15599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15584);
if(temp__4657__auto__){
var seq__15584__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15584__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15584__$1);
var G__15600 = cljs.core.chunk_rest(seq__15584__$1);
var G__15601 = c__8792__auto__;
var G__15602 = cljs.core.count(c__8792__auto__);
var G__15603 = (0);
seq__15584 = G__15600;
chunk__15585 = G__15601;
count__15586 = G__15602;
i__15587 = G__15603;
continue;
} else {
var c = cljs.core.first(seq__15584__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15604 = cljs.core.next(seq__15584__$1);
var G__15605 = null;
var G__15606 = (0);
var G__15607 = (0);
seq__15584 = G__15604;
chunk__15585 = G__15605;
count__15586 = G__15606;
i__15587 = G__15607;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15580){
var G__15581 = cljs.core.first(seq15580);
var seq15580__$1 = cljs.core.next(seq15580);
var G__15582 = cljs.core.first(seq15580__$1);
var seq15580__$2 = cljs.core.next(seq15580__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15581,G__15582,seq15580__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15609 = arguments.length;
switch (G__15609) {
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
var temp__4655__auto___15611 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15611)){
var class_list_15612 = temp__4655__auto___15611;
class_list_15612.toggle(c__$1);
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
var G__15614 = arguments.length;
switch (G__15614) {
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
var G__15617 = arguments.length;
switch (G__15617) {
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
var G__15623 = arguments.length;
switch (G__15623) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15630 = arguments.length;
var i__9123__auto___15631 = (0);
while(true){
if((i__9123__auto___15631 < len__9122__auto___15630)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15631]));

var G__15632 = (i__9123__auto___15631 + (1));
i__9123__auto___15631 = G__15632;
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
var G__15624 = parent;
G__15624.appendChild(child);

return G__15624;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15625_15633 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15626_15634 = null;
var count__15627_15635 = (0);
var i__15628_15636 = (0);
while(true){
if((i__15628_15636 < count__15627_15635)){
var c_15637 = chunk__15626_15634.cljs$core$IIndexed$_nth$arity$2(null,i__15628_15636);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15637);

var G__15638 = seq__15625_15633;
var G__15639 = chunk__15626_15634;
var G__15640 = count__15627_15635;
var G__15641 = (i__15628_15636 + (1));
seq__15625_15633 = G__15638;
chunk__15626_15634 = G__15639;
count__15627_15635 = G__15640;
i__15628_15636 = G__15641;
continue;
} else {
var temp__4657__auto___15642 = cljs.core.seq(seq__15625_15633);
if(temp__4657__auto___15642){
var seq__15625_15643__$1 = temp__4657__auto___15642;
if(cljs.core.chunked_seq_QMARK_(seq__15625_15643__$1)){
var c__8792__auto___15644 = cljs.core.chunk_first(seq__15625_15643__$1);
var G__15645 = cljs.core.chunk_rest(seq__15625_15643__$1);
var G__15646 = c__8792__auto___15644;
var G__15647 = cljs.core.count(c__8792__auto___15644);
var G__15648 = (0);
seq__15625_15633 = G__15645;
chunk__15626_15634 = G__15646;
count__15627_15635 = G__15647;
i__15628_15636 = G__15648;
continue;
} else {
var c_15649 = cljs.core.first(seq__15625_15643__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15649);

var G__15650 = cljs.core.next(seq__15625_15643__$1);
var G__15651 = null;
var G__15652 = (0);
var G__15653 = (0);
seq__15625_15633 = G__15650;
chunk__15626_15634 = G__15651;
count__15627_15635 = G__15652;
i__15628_15636 = G__15653;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15620){
var G__15621 = cljs.core.first(seq15620);
var seq15620__$1 = cljs.core.next(seq15620);
var G__15622 = cljs.core.first(seq15620__$1);
var seq15620__$2 = cljs.core.next(seq15620__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15621,G__15622,seq15620__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15658 = arguments.length;
switch (G__15658) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15665 = arguments.length;
var i__9123__auto___15666 = (0);
while(true){
if((i__9123__auto___15666 < len__9122__auto___15665)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15666]));

var G__15667 = (i__9123__auto___15666 + (1));
i__9123__auto___15666 = G__15667;
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
var G__15659 = parent;
G__15659.insertBefore(child,parent.firstChild);

return G__15659;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15660_15668 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15661_15669 = null;
var count__15662_15670 = (0);
var i__15663_15671 = (0);
while(true){
if((i__15663_15671 < count__15662_15670)){
var c_15672 = chunk__15661_15669.cljs$core$IIndexed$_nth$arity$2(null,i__15663_15671);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15672);

var G__15673 = seq__15660_15668;
var G__15674 = chunk__15661_15669;
var G__15675 = count__15662_15670;
var G__15676 = (i__15663_15671 + (1));
seq__15660_15668 = G__15673;
chunk__15661_15669 = G__15674;
count__15662_15670 = G__15675;
i__15663_15671 = G__15676;
continue;
} else {
var temp__4657__auto___15677 = cljs.core.seq(seq__15660_15668);
if(temp__4657__auto___15677){
var seq__15660_15678__$1 = temp__4657__auto___15677;
if(cljs.core.chunked_seq_QMARK_(seq__15660_15678__$1)){
var c__8792__auto___15679 = cljs.core.chunk_first(seq__15660_15678__$1);
var G__15680 = cljs.core.chunk_rest(seq__15660_15678__$1);
var G__15681 = c__8792__auto___15679;
var G__15682 = cljs.core.count(c__8792__auto___15679);
var G__15683 = (0);
seq__15660_15668 = G__15680;
chunk__15661_15669 = G__15681;
count__15662_15670 = G__15682;
i__15663_15671 = G__15683;
continue;
} else {
var c_15684 = cljs.core.first(seq__15660_15678__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15684);

var G__15685 = cljs.core.next(seq__15660_15678__$1);
var G__15686 = null;
var G__15687 = (0);
var G__15688 = (0);
seq__15660_15668 = G__15685;
chunk__15661_15669 = G__15686;
count__15662_15670 = G__15687;
i__15663_15671 = G__15688;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15655){
var G__15656 = cljs.core.first(seq15655);
var seq15655__$1 = cljs.core.next(seq15655);
var G__15657 = cljs.core.first(seq15655__$1);
var seq15655__$2 = cljs.core.next(seq15655__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15656,G__15657,seq15655__$2);
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
var temp__4655__auto___15689 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15689)){
var next_15690 = temp__4655__auto___15689;
dommy.core.insert_before_BANG_(elem,next_15690);
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
var G__15692 = arguments.length;
switch (G__15692) {
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
var G__15693 = p;
G__15693.removeChild(elem);

return G__15693;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15695){
var vec__15696 = p__15695;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15696,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15696,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15696,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15696,special_mouse_event,real_mouse_event){
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
;})(vec__15696,special_mouse_event,real_mouse_event))
});})(vec__15696,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15702 = arguments.length;
var i__9123__auto___15703 = (0);
while(true){
if((i__9123__auto___15703 < len__9122__auto___15702)){
args__9129__auto__.push((arguments[i__9123__auto___15703]));

var G__15704 = (i__9123__auto___15703 + (1));
i__9123__auto___15703 = G__15704;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15699){
var G__15700 = cljs.core.first(seq15699);
var seq15699__$1 = cljs.core.next(seq15699);
var G__15701 = cljs.core.first(seq15699__$1);
var seq15699__$2 = cljs.core.next(seq15699__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15700,G__15701,seq15699__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15705 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15705.cljs$core$IFn$_invoke$arity$1 ? fexpr__15705.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15705.call(null,elem_sel));
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
var len__9122__auto___15753 = arguments.length;
var i__9123__auto___15754 = (0);
while(true){
if((i__9123__auto___15754 < len__9122__auto___15753)){
args__9129__auto__.push((arguments[i__9123__auto___15754]));

var G__15755 = (i__9123__auto___15754 + (1));
i__9123__auto___15754 = G__15755;
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

var vec__15708_15756 = dommy.core.elem_and_selector(elem_sel);
var elem_15757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15708_15756,(0),null);
var selector_15758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15708_15756,(1),null);
var seq__15711_15759 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15718_15760 = null;
var count__15719_15761 = (0);
var i__15720_15762 = (0);
while(true){
if((i__15720_15762 < count__15719_15761)){
var vec__15727_15763 = chunk__15718_15760.cljs$core$IIndexed$_nth$arity$2(null,i__15720_15762);
var orig_type_15764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15727_15763,(0),null);
var f_15765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15727_15763,(1),null);
var seq__15721_15766 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15764,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15764,cljs.core.identity])));
var chunk__15723_15767 = null;
var count__15724_15768 = (0);
var i__15725_15769 = (0);
while(true){
if((i__15725_15769 < count__15724_15768)){
var vec__15730_15770 = chunk__15723_15767.cljs$core$IIndexed$_nth$arity$2(null,i__15725_15769);
var actual_type_15771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15730_15770,(0),null);
var factory_15772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15730_15770,(1),null);
var canonical_f_15773 = (function (){var G__15734 = (factory_15772.cljs$core$IFn$_invoke$arity$1 ? factory_15772.cljs$core$IFn$_invoke$arity$1(f_15765) : factory_15772.call(null,f_15765));
var fexpr__15733 = (cljs.core.truth_(selector_15758)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15757,selector_15758):cljs.core.identity);
return (fexpr__15733.cljs$core$IFn$_invoke$arity$1 ? fexpr__15733.cljs$core$IFn$_invoke$arity$1(G__15734) : fexpr__15733.call(null,G__15734));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15757,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15758,actual_type_15771,f_15765], null),canonical_f_15773], 0));

if(cljs.core.truth_(elem_15757.addEventListener)){
elem_15757.addEventListener(cljs.core.name(actual_type_15771),canonical_f_15773);
} else {
elem_15757.attachEvent(cljs.core.name(actual_type_15771),canonical_f_15773);
}

var G__15774 = seq__15721_15766;
var G__15775 = chunk__15723_15767;
var G__15776 = count__15724_15768;
var G__15777 = (i__15725_15769 + (1));
seq__15721_15766 = G__15774;
chunk__15723_15767 = G__15775;
count__15724_15768 = G__15776;
i__15725_15769 = G__15777;
continue;
} else {
var temp__4657__auto___15778 = cljs.core.seq(seq__15721_15766);
if(temp__4657__auto___15778){
var seq__15721_15779__$1 = temp__4657__auto___15778;
if(cljs.core.chunked_seq_QMARK_(seq__15721_15779__$1)){
var c__8792__auto___15780 = cljs.core.chunk_first(seq__15721_15779__$1);
var G__15781 = cljs.core.chunk_rest(seq__15721_15779__$1);
var G__15782 = c__8792__auto___15780;
var G__15783 = cljs.core.count(c__8792__auto___15780);
var G__15784 = (0);
seq__15721_15766 = G__15781;
chunk__15723_15767 = G__15782;
count__15724_15768 = G__15783;
i__15725_15769 = G__15784;
continue;
} else {
var vec__15735_15785 = cljs.core.first(seq__15721_15779__$1);
var actual_type_15786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15735_15785,(0),null);
var factory_15787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15735_15785,(1),null);
var canonical_f_15788 = (function (){var G__15739 = (factory_15787.cljs$core$IFn$_invoke$arity$1 ? factory_15787.cljs$core$IFn$_invoke$arity$1(f_15765) : factory_15787.call(null,f_15765));
var fexpr__15738 = (cljs.core.truth_(selector_15758)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15757,selector_15758):cljs.core.identity);
return (fexpr__15738.cljs$core$IFn$_invoke$arity$1 ? fexpr__15738.cljs$core$IFn$_invoke$arity$1(G__15739) : fexpr__15738.call(null,G__15739));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15757,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15758,actual_type_15786,f_15765], null),canonical_f_15788], 0));

if(cljs.core.truth_(elem_15757.addEventListener)){
elem_15757.addEventListener(cljs.core.name(actual_type_15786),canonical_f_15788);
} else {
elem_15757.attachEvent(cljs.core.name(actual_type_15786),canonical_f_15788);
}

var G__15789 = cljs.core.next(seq__15721_15779__$1);
var G__15790 = null;
var G__15791 = (0);
var G__15792 = (0);
seq__15721_15766 = G__15789;
chunk__15723_15767 = G__15790;
count__15724_15768 = G__15791;
i__15725_15769 = G__15792;
continue;
}
} else {
}
}
break;
}

var G__15793 = seq__15711_15759;
var G__15794 = chunk__15718_15760;
var G__15795 = count__15719_15761;
var G__15796 = (i__15720_15762 + (1));
seq__15711_15759 = G__15793;
chunk__15718_15760 = G__15794;
count__15719_15761 = G__15795;
i__15720_15762 = G__15796;
continue;
} else {
var temp__4657__auto___15797 = cljs.core.seq(seq__15711_15759);
if(temp__4657__auto___15797){
var seq__15711_15798__$1 = temp__4657__auto___15797;
if(cljs.core.chunked_seq_QMARK_(seq__15711_15798__$1)){
var c__8792__auto___15799 = cljs.core.chunk_first(seq__15711_15798__$1);
var G__15800 = cljs.core.chunk_rest(seq__15711_15798__$1);
var G__15801 = c__8792__auto___15799;
var G__15802 = cljs.core.count(c__8792__auto___15799);
var G__15803 = (0);
seq__15711_15759 = G__15800;
chunk__15718_15760 = G__15801;
count__15719_15761 = G__15802;
i__15720_15762 = G__15803;
continue;
} else {
var vec__15740_15804 = cljs.core.first(seq__15711_15798__$1);
var orig_type_15805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15740_15804,(0),null);
var f_15806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15740_15804,(1),null);
var seq__15712_15807 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15805,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15805,cljs.core.identity])));
var chunk__15714_15808 = null;
var count__15715_15809 = (0);
var i__15716_15810 = (0);
while(true){
if((i__15716_15810 < count__15715_15809)){
var vec__15743_15811 = chunk__15714_15808.cljs$core$IIndexed$_nth$arity$2(null,i__15716_15810);
var actual_type_15812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15743_15811,(0),null);
var factory_15813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15743_15811,(1),null);
var canonical_f_15814 = (function (){var G__15747 = (factory_15813.cljs$core$IFn$_invoke$arity$1 ? factory_15813.cljs$core$IFn$_invoke$arity$1(f_15806) : factory_15813.call(null,f_15806));
var fexpr__15746 = (cljs.core.truth_(selector_15758)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15757,selector_15758):cljs.core.identity);
return (fexpr__15746.cljs$core$IFn$_invoke$arity$1 ? fexpr__15746.cljs$core$IFn$_invoke$arity$1(G__15747) : fexpr__15746.call(null,G__15747));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15757,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15758,actual_type_15812,f_15806], null),canonical_f_15814], 0));

if(cljs.core.truth_(elem_15757.addEventListener)){
elem_15757.addEventListener(cljs.core.name(actual_type_15812),canonical_f_15814);
} else {
elem_15757.attachEvent(cljs.core.name(actual_type_15812),canonical_f_15814);
}

var G__15815 = seq__15712_15807;
var G__15816 = chunk__15714_15808;
var G__15817 = count__15715_15809;
var G__15818 = (i__15716_15810 + (1));
seq__15712_15807 = G__15815;
chunk__15714_15808 = G__15816;
count__15715_15809 = G__15817;
i__15716_15810 = G__15818;
continue;
} else {
var temp__4657__auto___15819__$1 = cljs.core.seq(seq__15712_15807);
if(temp__4657__auto___15819__$1){
var seq__15712_15820__$1 = temp__4657__auto___15819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15712_15820__$1)){
var c__8792__auto___15821 = cljs.core.chunk_first(seq__15712_15820__$1);
var G__15822 = cljs.core.chunk_rest(seq__15712_15820__$1);
var G__15823 = c__8792__auto___15821;
var G__15824 = cljs.core.count(c__8792__auto___15821);
var G__15825 = (0);
seq__15712_15807 = G__15822;
chunk__15714_15808 = G__15823;
count__15715_15809 = G__15824;
i__15716_15810 = G__15825;
continue;
} else {
var vec__15748_15826 = cljs.core.first(seq__15712_15820__$1);
var actual_type_15827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15826,(0),null);
var factory_15828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15826,(1),null);
var canonical_f_15829 = (function (){var G__15752 = (factory_15828.cljs$core$IFn$_invoke$arity$1 ? factory_15828.cljs$core$IFn$_invoke$arity$1(f_15806) : factory_15828.call(null,f_15806));
var fexpr__15751 = (cljs.core.truth_(selector_15758)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15757,selector_15758):cljs.core.identity);
return (fexpr__15751.cljs$core$IFn$_invoke$arity$1 ? fexpr__15751.cljs$core$IFn$_invoke$arity$1(G__15752) : fexpr__15751.call(null,G__15752));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15757,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15758,actual_type_15827,f_15806], null),canonical_f_15829], 0));

if(cljs.core.truth_(elem_15757.addEventListener)){
elem_15757.addEventListener(cljs.core.name(actual_type_15827),canonical_f_15829);
} else {
elem_15757.attachEvent(cljs.core.name(actual_type_15827),canonical_f_15829);
}

var G__15830 = cljs.core.next(seq__15712_15820__$1);
var G__15831 = null;
var G__15832 = (0);
var G__15833 = (0);
seq__15712_15807 = G__15830;
chunk__15714_15808 = G__15831;
count__15715_15809 = G__15832;
i__15716_15810 = G__15833;
continue;
}
} else {
}
}
break;
}

var G__15834 = cljs.core.next(seq__15711_15798__$1);
var G__15835 = null;
var G__15836 = (0);
var G__15837 = (0);
seq__15711_15759 = G__15834;
chunk__15718_15760 = G__15835;
count__15719_15761 = G__15836;
i__15720_15762 = G__15837;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15706){
var G__15707 = cljs.core.first(seq15706);
var seq15706__$1 = cljs.core.next(seq15706);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15707,seq15706__$1);
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
var len__9122__auto___15877 = arguments.length;
var i__9123__auto___15878 = (0);
while(true){
if((i__9123__auto___15878 < len__9122__auto___15877)){
args__9129__auto__.push((arguments[i__9123__auto___15878]));

var G__15879 = (i__9123__auto___15878 + (1));
i__9123__auto___15878 = G__15879;
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

var vec__15840_15880 = dommy.core.elem_and_selector(elem_sel);
var elem_15881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15880,(0),null);
var selector_15882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15880,(1),null);
var seq__15843_15883 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15850_15884 = null;
var count__15851_15885 = (0);
var i__15852_15886 = (0);
while(true){
if((i__15852_15886 < count__15851_15885)){
var vec__15859_15887 = chunk__15850_15884.cljs$core$IIndexed$_nth$arity$2(null,i__15852_15886);
var orig_type_15888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859_15887,(0),null);
var f_15889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859_15887,(1),null);
var seq__15853_15890 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15888,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15888,cljs.core.identity])));
var chunk__15855_15891 = null;
var count__15856_15892 = (0);
var i__15857_15893 = (0);
while(true){
if((i__15857_15893 < count__15856_15892)){
var vec__15862_15894 = chunk__15855_15891.cljs$core$IIndexed$_nth$arity$2(null,i__15857_15893);
var actual_type_15895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862_15894,(0),null);
var __15896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862_15894,(1),null);
var keys_15897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15882,actual_type_15895,f_15889], null);
var canonical_f_15898 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15881),keys_15897);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15881,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15897], 0));

if(cljs.core.truth_(elem_15881.removeEventListener)){
elem_15881.removeEventListener(cljs.core.name(actual_type_15895),canonical_f_15898);
} else {
elem_15881.detachEvent(cljs.core.name(actual_type_15895),canonical_f_15898);
}

var G__15899 = seq__15853_15890;
var G__15900 = chunk__15855_15891;
var G__15901 = count__15856_15892;
var G__15902 = (i__15857_15893 + (1));
seq__15853_15890 = G__15899;
chunk__15855_15891 = G__15900;
count__15856_15892 = G__15901;
i__15857_15893 = G__15902;
continue;
} else {
var temp__4657__auto___15903 = cljs.core.seq(seq__15853_15890);
if(temp__4657__auto___15903){
var seq__15853_15904__$1 = temp__4657__auto___15903;
if(cljs.core.chunked_seq_QMARK_(seq__15853_15904__$1)){
var c__8792__auto___15905 = cljs.core.chunk_first(seq__15853_15904__$1);
var G__15906 = cljs.core.chunk_rest(seq__15853_15904__$1);
var G__15907 = c__8792__auto___15905;
var G__15908 = cljs.core.count(c__8792__auto___15905);
var G__15909 = (0);
seq__15853_15890 = G__15906;
chunk__15855_15891 = G__15907;
count__15856_15892 = G__15908;
i__15857_15893 = G__15909;
continue;
} else {
var vec__15865_15910 = cljs.core.first(seq__15853_15904__$1);
var actual_type_15911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865_15910,(0),null);
var __15912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865_15910,(1),null);
var keys_15913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15882,actual_type_15911,f_15889], null);
var canonical_f_15914 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15881),keys_15913);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15881,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15913], 0));

if(cljs.core.truth_(elem_15881.removeEventListener)){
elem_15881.removeEventListener(cljs.core.name(actual_type_15911),canonical_f_15914);
} else {
elem_15881.detachEvent(cljs.core.name(actual_type_15911),canonical_f_15914);
}

var G__15915 = cljs.core.next(seq__15853_15904__$1);
var G__15916 = null;
var G__15917 = (0);
var G__15918 = (0);
seq__15853_15890 = G__15915;
chunk__15855_15891 = G__15916;
count__15856_15892 = G__15917;
i__15857_15893 = G__15918;
continue;
}
} else {
}
}
break;
}

var G__15919 = seq__15843_15883;
var G__15920 = chunk__15850_15884;
var G__15921 = count__15851_15885;
var G__15922 = (i__15852_15886 + (1));
seq__15843_15883 = G__15919;
chunk__15850_15884 = G__15920;
count__15851_15885 = G__15921;
i__15852_15886 = G__15922;
continue;
} else {
var temp__4657__auto___15923 = cljs.core.seq(seq__15843_15883);
if(temp__4657__auto___15923){
var seq__15843_15924__$1 = temp__4657__auto___15923;
if(cljs.core.chunked_seq_QMARK_(seq__15843_15924__$1)){
var c__8792__auto___15925 = cljs.core.chunk_first(seq__15843_15924__$1);
var G__15926 = cljs.core.chunk_rest(seq__15843_15924__$1);
var G__15927 = c__8792__auto___15925;
var G__15928 = cljs.core.count(c__8792__auto___15925);
var G__15929 = (0);
seq__15843_15883 = G__15926;
chunk__15850_15884 = G__15927;
count__15851_15885 = G__15928;
i__15852_15886 = G__15929;
continue;
} else {
var vec__15868_15930 = cljs.core.first(seq__15843_15924__$1);
var orig_type_15931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868_15930,(0),null);
var f_15932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868_15930,(1),null);
var seq__15844_15933 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15931,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15931,cljs.core.identity])));
var chunk__15846_15934 = null;
var count__15847_15935 = (0);
var i__15848_15936 = (0);
while(true){
if((i__15848_15936 < count__15847_15935)){
var vec__15871_15937 = chunk__15846_15934.cljs$core$IIndexed$_nth$arity$2(null,i__15848_15936);
var actual_type_15938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15871_15937,(0),null);
var __15939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15871_15937,(1),null);
var keys_15940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15882,actual_type_15938,f_15932], null);
var canonical_f_15941 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15881),keys_15940);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15881,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15940], 0));

if(cljs.core.truth_(elem_15881.removeEventListener)){
elem_15881.removeEventListener(cljs.core.name(actual_type_15938),canonical_f_15941);
} else {
elem_15881.detachEvent(cljs.core.name(actual_type_15938),canonical_f_15941);
}

var G__15942 = seq__15844_15933;
var G__15943 = chunk__15846_15934;
var G__15944 = count__15847_15935;
var G__15945 = (i__15848_15936 + (1));
seq__15844_15933 = G__15942;
chunk__15846_15934 = G__15943;
count__15847_15935 = G__15944;
i__15848_15936 = G__15945;
continue;
} else {
var temp__4657__auto___15946__$1 = cljs.core.seq(seq__15844_15933);
if(temp__4657__auto___15946__$1){
var seq__15844_15947__$1 = temp__4657__auto___15946__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15844_15947__$1)){
var c__8792__auto___15948 = cljs.core.chunk_first(seq__15844_15947__$1);
var G__15949 = cljs.core.chunk_rest(seq__15844_15947__$1);
var G__15950 = c__8792__auto___15948;
var G__15951 = cljs.core.count(c__8792__auto___15948);
var G__15952 = (0);
seq__15844_15933 = G__15949;
chunk__15846_15934 = G__15950;
count__15847_15935 = G__15951;
i__15848_15936 = G__15952;
continue;
} else {
var vec__15874_15953 = cljs.core.first(seq__15844_15947__$1);
var actual_type_15954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874_15953,(0),null);
var __15955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874_15953,(1),null);
var keys_15956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15882,actual_type_15954,f_15932], null);
var canonical_f_15957 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15881),keys_15956);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15881,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15956], 0));

if(cljs.core.truth_(elem_15881.removeEventListener)){
elem_15881.removeEventListener(cljs.core.name(actual_type_15954),canonical_f_15957);
} else {
elem_15881.detachEvent(cljs.core.name(actual_type_15954),canonical_f_15957);
}

var G__15958 = cljs.core.next(seq__15844_15947__$1);
var G__15959 = null;
var G__15960 = (0);
var G__15961 = (0);
seq__15844_15933 = G__15958;
chunk__15846_15934 = G__15959;
count__15847_15935 = G__15960;
i__15848_15936 = G__15961;
continue;
}
} else {
}
}
break;
}

var G__15962 = cljs.core.next(seq__15843_15924__$1);
var G__15963 = null;
var G__15964 = (0);
var G__15965 = (0);
seq__15843_15883 = G__15962;
chunk__15850_15884 = G__15963;
count__15851_15885 = G__15964;
i__15852_15886 = G__15965;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15838){
var G__15839 = cljs.core.first(seq15838);
var seq15838__$1 = cljs.core.next(seq15838);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15839,seq15838__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15981 = arguments.length;
var i__9123__auto___15982 = (0);
while(true){
if((i__9123__auto___15982 < len__9122__auto___15981)){
args__9129__auto__.push((arguments[i__9123__auto___15982]));

var G__15983 = (i__9123__auto___15982 + (1));
i__9123__auto___15982 = G__15983;
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

var vec__15968_15984 = dommy.core.elem_and_selector(elem_sel);
var elem_15985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15968_15984,(0),null);
var selector_15986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15968_15984,(1),null);
var seq__15971_15987 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15972_15988 = null;
var count__15973_15989 = (0);
var i__15974_15990 = (0);
while(true){
if((i__15974_15990 < count__15973_15989)){
var vec__15975_15991 = chunk__15972_15988.cljs$core$IIndexed$_nth$arity$2(null,i__15974_15990);
var type_15992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975_15991,(0),null);
var f_15993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975_15991,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15992,((function (seq__15971_15987,chunk__15972_15988,count__15973_15989,i__15974_15990,vec__15975_15991,type_15992,f_15993,vec__15968_15984,elem_15985,selector_15986){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15992,dommy$core$this_fn], 0));

return (f_15993.cljs$core$IFn$_invoke$arity$1 ? f_15993.cljs$core$IFn$_invoke$arity$1(e) : f_15993.call(null,e));
});})(seq__15971_15987,chunk__15972_15988,count__15973_15989,i__15974_15990,vec__15975_15991,type_15992,f_15993,vec__15968_15984,elem_15985,selector_15986))
], 0));

var G__15994 = seq__15971_15987;
var G__15995 = chunk__15972_15988;
var G__15996 = count__15973_15989;
var G__15997 = (i__15974_15990 + (1));
seq__15971_15987 = G__15994;
chunk__15972_15988 = G__15995;
count__15973_15989 = G__15996;
i__15974_15990 = G__15997;
continue;
} else {
var temp__4657__auto___15998 = cljs.core.seq(seq__15971_15987);
if(temp__4657__auto___15998){
var seq__15971_15999__$1 = temp__4657__auto___15998;
if(cljs.core.chunked_seq_QMARK_(seq__15971_15999__$1)){
var c__8792__auto___16000 = cljs.core.chunk_first(seq__15971_15999__$1);
var G__16001 = cljs.core.chunk_rest(seq__15971_15999__$1);
var G__16002 = c__8792__auto___16000;
var G__16003 = cljs.core.count(c__8792__auto___16000);
var G__16004 = (0);
seq__15971_15987 = G__16001;
chunk__15972_15988 = G__16002;
count__15973_15989 = G__16003;
i__15974_15990 = G__16004;
continue;
} else {
var vec__15978_16005 = cljs.core.first(seq__15971_15999__$1);
var type_16006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15978_16005,(0),null);
var f_16007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15978_16005,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16006,((function (seq__15971_15987,chunk__15972_15988,count__15973_15989,i__15974_15990,vec__15978_16005,type_16006,f_16007,seq__15971_15999__$1,temp__4657__auto___15998,vec__15968_15984,elem_15985,selector_15986){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16006,dommy$core$this_fn], 0));

return (f_16007.cljs$core$IFn$_invoke$arity$1 ? f_16007.cljs$core$IFn$_invoke$arity$1(e) : f_16007.call(null,e));
});})(seq__15971_15987,chunk__15972_15988,count__15973_15989,i__15974_15990,vec__15978_16005,type_16006,f_16007,seq__15971_15999__$1,temp__4657__auto___15998,vec__15968_15984,elem_15985,selector_15986))
], 0));

var G__16008 = cljs.core.next(seq__15971_15999__$1);
var G__16009 = null;
var G__16010 = (0);
var G__16011 = (0);
seq__15971_15987 = G__16008;
chunk__15972_15988 = G__16009;
count__15973_15989 = G__16010;
i__15974_15990 = G__16011;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15966){
var G__15967 = cljs.core.first(seq15966);
var seq15966__$1 = cljs.core.next(seq15966);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15967,seq15966__$1);
});

