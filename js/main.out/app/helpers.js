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
var seq__16321_16353 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$table], null)))));
var chunk__16322_16354 = null;
var count__16323_16355 = (0);
var i__16324_16356 = (0);
while(true){
if((i__16324_16356 < count__16323_16355)){
var table_16357 = chunk__16322_16354.cljs$core$IIndexed$_nth$arity$2(null,i__16324_16356);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16357,cljs.core.cst$kw$table);

var G__16358 = seq__16321_16353;
var G__16359 = chunk__16322_16354;
var G__16360 = count__16323_16355;
var G__16361 = (i__16324_16356 + (1));
seq__16321_16353 = G__16358;
chunk__16322_16354 = G__16359;
count__16323_16355 = G__16360;
i__16324_16356 = G__16361;
continue;
} else {
var temp__4657__auto___16362 = cljs.core.seq(seq__16321_16353);
if(temp__4657__auto___16362){
var seq__16321_16363__$1 = temp__4657__auto___16362;
if(cljs.core.chunked_seq_QMARK_(seq__16321_16363__$1)){
var c__8792__auto___16364 = cljs.core.chunk_first(seq__16321_16363__$1);
var G__16365 = cljs.core.chunk_rest(seq__16321_16363__$1);
var G__16366 = c__8792__auto___16364;
var G__16367 = cljs.core.count(c__8792__auto___16364);
var G__16368 = (0);
seq__16321_16353 = G__16365;
chunk__16322_16354 = G__16366;
count__16323_16355 = G__16367;
i__16324_16356 = G__16368;
continue;
} else {
var table_16369 = cljs.core.first(seq__16321_16363__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16369,cljs.core.cst$kw$table);

var G__16370 = cljs.core.next(seq__16321_16363__$1);
var G__16371 = null;
var G__16372 = (0);
var G__16373 = (0);
seq__16321_16353 = G__16370;
chunk__16322_16354 = G__16371;
count__16323_16355 = G__16372;
i__16324_16356 = G__16373;
continue;
}
} else {
}
}
break;
}

var seq__16325_16374 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h1], null)))));
var chunk__16326_16375 = null;
var count__16327_16376 = (0);
var i__16328_16377 = (0);
while(true){
if((i__16328_16377 < count__16327_16376)){
var header_16378 = chunk__16326_16375.cljs$core$IIndexed$_nth$arity$2(null,i__16328_16377);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16378,cljs.core.cst$kw$s_DASH_title);

var G__16379 = seq__16325_16374;
var G__16380 = chunk__16326_16375;
var G__16381 = count__16327_16376;
var G__16382 = (i__16328_16377 + (1));
seq__16325_16374 = G__16379;
chunk__16326_16375 = G__16380;
count__16327_16376 = G__16381;
i__16328_16377 = G__16382;
continue;
} else {
var temp__4657__auto___16383 = cljs.core.seq(seq__16325_16374);
if(temp__4657__auto___16383){
var seq__16325_16384__$1 = temp__4657__auto___16383;
if(cljs.core.chunked_seq_QMARK_(seq__16325_16384__$1)){
var c__8792__auto___16385 = cljs.core.chunk_first(seq__16325_16384__$1);
var G__16386 = cljs.core.chunk_rest(seq__16325_16384__$1);
var G__16387 = c__8792__auto___16385;
var G__16388 = cljs.core.count(c__8792__auto___16385);
var G__16389 = (0);
seq__16325_16374 = G__16386;
chunk__16326_16375 = G__16387;
count__16327_16376 = G__16388;
i__16328_16377 = G__16389;
continue;
} else {
var header_16390 = cljs.core.first(seq__16325_16384__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16390,cljs.core.cst$kw$s_DASH_title);

var G__16391 = cljs.core.next(seq__16325_16384__$1);
var G__16392 = null;
var G__16393 = (0);
var G__16394 = (0);
seq__16325_16374 = G__16391;
chunk__16326_16375 = G__16392;
count__16327_16376 = G__16393;
i__16328_16377 = G__16394;
continue;
}
} else {
}
}
break;
}

var seq__16329_16395 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h2], null)))));
var chunk__16330_16396 = null;
var count__16331_16397 = (0);
var i__16332_16398 = (0);
while(true){
if((i__16332_16398 < count__16331_16397)){
var header_16399 = chunk__16330_16396.cljs$core$IIndexed$_nth$arity$2(null,i__16332_16398);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16399,cljs.core.cst$kw$s_DASH_title);

var G__16400 = seq__16329_16395;
var G__16401 = chunk__16330_16396;
var G__16402 = count__16331_16397;
var G__16403 = (i__16332_16398 + (1));
seq__16329_16395 = G__16400;
chunk__16330_16396 = G__16401;
count__16331_16397 = G__16402;
i__16332_16398 = G__16403;
continue;
} else {
var temp__4657__auto___16404 = cljs.core.seq(seq__16329_16395);
if(temp__4657__auto___16404){
var seq__16329_16405__$1 = temp__4657__auto___16404;
if(cljs.core.chunked_seq_QMARK_(seq__16329_16405__$1)){
var c__8792__auto___16406 = cljs.core.chunk_first(seq__16329_16405__$1);
var G__16407 = cljs.core.chunk_rest(seq__16329_16405__$1);
var G__16408 = c__8792__auto___16406;
var G__16409 = cljs.core.count(c__8792__auto___16406);
var G__16410 = (0);
seq__16329_16395 = G__16407;
chunk__16330_16396 = G__16408;
count__16331_16397 = G__16409;
i__16332_16398 = G__16410;
continue;
} else {
var header_16411 = cljs.core.first(seq__16329_16405__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16411,cljs.core.cst$kw$s_DASH_title);

var G__16412 = cljs.core.next(seq__16329_16405__$1);
var G__16413 = null;
var G__16414 = (0);
var G__16415 = (0);
seq__16329_16395 = G__16412;
chunk__16330_16396 = G__16413;
count__16331_16397 = G__16414;
i__16332_16398 = G__16415;
continue;
}
} else {
}
}
break;
}

var seq__16333_16416 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h3], null)))));
var chunk__16334_16417 = null;
var count__16335_16418 = (0);
var i__16336_16419 = (0);
while(true){
if((i__16336_16419 < count__16335_16418)){
var header_16420 = chunk__16334_16417.cljs$core$IIndexed$_nth$arity$2(null,i__16336_16419);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16420,cljs.core.cst$kw$s_DASH_title);

var G__16421 = seq__16333_16416;
var G__16422 = chunk__16334_16417;
var G__16423 = count__16335_16418;
var G__16424 = (i__16336_16419 + (1));
seq__16333_16416 = G__16421;
chunk__16334_16417 = G__16422;
count__16335_16418 = G__16423;
i__16336_16419 = G__16424;
continue;
} else {
var temp__4657__auto___16425 = cljs.core.seq(seq__16333_16416);
if(temp__4657__auto___16425){
var seq__16333_16426__$1 = temp__4657__auto___16425;
if(cljs.core.chunked_seq_QMARK_(seq__16333_16426__$1)){
var c__8792__auto___16427 = cljs.core.chunk_first(seq__16333_16426__$1);
var G__16428 = cljs.core.chunk_rest(seq__16333_16426__$1);
var G__16429 = c__8792__auto___16427;
var G__16430 = cljs.core.count(c__8792__auto___16427);
var G__16431 = (0);
seq__16333_16416 = G__16428;
chunk__16334_16417 = G__16429;
count__16335_16418 = G__16430;
i__16336_16419 = G__16431;
continue;
} else {
var header_16432 = cljs.core.first(seq__16333_16426__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16432,cljs.core.cst$kw$s_DASH_title);

var G__16433 = cljs.core.next(seq__16333_16426__$1);
var G__16434 = null;
var G__16435 = (0);
var G__16436 = (0);
seq__16333_16416 = G__16433;
chunk__16334_16417 = G__16434;
count__16335_16418 = G__16435;
i__16336_16419 = G__16436;
continue;
}
} else {
}
}
break;
}

var seq__16337_16437 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h4], null)))));
var chunk__16338_16438 = null;
var count__16339_16439 = (0);
var i__16340_16440 = (0);
while(true){
if((i__16340_16440 < count__16339_16439)){
var header_16441 = chunk__16338_16438.cljs$core$IIndexed$_nth$arity$2(null,i__16340_16440);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16441,cljs.core.cst$kw$s_DASH_title);

var G__16442 = seq__16337_16437;
var G__16443 = chunk__16338_16438;
var G__16444 = count__16339_16439;
var G__16445 = (i__16340_16440 + (1));
seq__16337_16437 = G__16442;
chunk__16338_16438 = G__16443;
count__16339_16439 = G__16444;
i__16340_16440 = G__16445;
continue;
} else {
var temp__4657__auto___16446 = cljs.core.seq(seq__16337_16437);
if(temp__4657__auto___16446){
var seq__16337_16447__$1 = temp__4657__auto___16446;
if(cljs.core.chunked_seq_QMARK_(seq__16337_16447__$1)){
var c__8792__auto___16448 = cljs.core.chunk_first(seq__16337_16447__$1);
var G__16449 = cljs.core.chunk_rest(seq__16337_16447__$1);
var G__16450 = c__8792__auto___16448;
var G__16451 = cljs.core.count(c__8792__auto___16448);
var G__16452 = (0);
seq__16337_16437 = G__16449;
chunk__16338_16438 = G__16450;
count__16339_16439 = G__16451;
i__16340_16440 = G__16452;
continue;
} else {
var header_16453 = cljs.core.first(seq__16337_16447__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16453,cljs.core.cst$kw$s_DASH_title);

var G__16454 = cljs.core.next(seq__16337_16447__$1);
var G__16455 = null;
var G__16456 = (0);
var G__16457 = (0);
seq__16337_16437 = G__16454;
chunk__16338_16438 = G__16455;
count__16339_16439 = G__16456;
i__16340_16440 = G__16457;
continue;
}
} else {
}
}
break;
}

var seq__16341_16458 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h5], null)))));
var chunk__16342_16459 = null;
var count__16343_16460 = (0);
var i__16344_16461 = (0);
while(true){
if((i__16344_16461 < count__16343_16460)){
var header_16462 = chunk__16342_16459.cljs$core$IIndexed$_nth$arity$2(null,i__16344_16461);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16462,cljs.core.cst$kw$s_DASH_title);

var G__16463 = seq__16341_16458;
var G__16464 = chunk__16342_16459;
var G__16465 = count__16343_16460;
var G__16466 = (i__16344_16461 + (1));
seq__16341_16458 = G__16463;
chunk__16342_16459 = G__16464;
count__16343_16460 = G__16465;
i__16344_16461 = G__16466;
continue;
} else {
var temp__4657__auto___16467 = cljs.core.seq(seq__16341_16458);
if(temp__4657__auto___16467){
var seq__16341_16468__$1 = temp__4657__auto___16467;
if(cljs.core.chunked_seq_QMARK_(seq__16341_16468__$1)){
var c__8792__auto___16469 = cljs.core.chunk_first(seq__16341_16468__$1);
var G__16470 = cljs.core.chunk_rest(seq__16341_16468__$1);
var G__16471 = c__8792__auto___16469;
var G__16472 = cljs.core.count(c__8792__auto___16469);
var G__16473 = (0);
seq__16341_16458 = G__16470;
chunk__16342_16459 = G__16471;
count__16343_16460 = G__16472;
i__16344_16461 = G__16473;
continue;
} else {
var header_16474 = cljs.core.first(seq__16341_16468__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16474,cljs.core.cst$kw$s_DASH_title);

var G__16475 = cljs.core.next(seq__16341_16468__$1);
var G__16476 = null;
var G__16477 = (0);
var G__16478 = (0);
seq__16341_16458 = G__16475;
chunk__16342_16459 = G__16476;
count__16343_16460 = G__16477;
i__16344_16461 = G__16478;
continue;
}
} else {
}
}
break;
}

var seq__16345_16479 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_sel,cljs.core.cst$kw$h6], null)))));
var chunk__16346_16480 = null;
var count__16347_16481 = (0);
var i__16348_16482 = (0);
while(true){
if((i__16348_16482 < count__16347_16481)){
var header_16483 = chunk__16346_16480.cljs$core$IIndexed$_nth$arity$2(null,i__16348_16482);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16483,cljs.core.cst$kw$s_DASH_title);

var G__16484 = seq__16345_16479;
var G__16485 = chunk__16346_16480;
var G__16486 = count__16347_16481;
var G__16487 = (i__16348_16482 + (1));
seq__16345_16479 = G__16484;
chunk__16346_16480 = G__16485;
count__16347_16481 = G__16486;
i__16348_16482 = G__16487;
continue;
} else {
var temp__4657__auto___16488 = cljs.core.seq(seq__16345_16479);
if(temp__4657__auto___16488){
var seq__16345_16489__$1 = temp__4657__auto___16488;
if(cljs.core.chunked_seq_QMARK_(seq__16345_16489__$1)){
var c__8792__auto___16490 = cljs.core.chunk_first(seq__16345_16489__$1);
var G__16491 = cljs.core.chunk_rest(seq__16345_16489__$1);
var G__16492 = c__8792__auto___16490;
var G__16493 = cljs.core.count(c__8792__auto___16490);
var G__16494 = (0);
seq__16345_16479 = G__16491;
chunk__16346_16480 = G__16492;
count__16347_16481 = G__16493;
i__16348_16482 = G__16494;
continue;
} else {
var header_16495 = cljs.core.first(seq__16345_16489__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16495,cljs.core.cst$kw$s_DASH_title);

var G__16496 = cljs.core.next(seq__16345_16489__$1);
var G__16497 = null;
var G__16498 = (0);
var G__16499 = (0);
seq__16345_16479 = G__16496;
chunk__16346_16480 = G__16497;
count__16347_16481 = G__16498;
i__16348_16482 = G__16499;
continue;
}
} else {
}
}
break;
}

var seq__16349 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("p a img")));
var chunk__16350 = null;
var count__16351 = (0);
var i__16352 = (0);
while(true){
if((i__16352 < count__16351)){
var imagelink = chunk__16350.cljs$core$IIndexed$_nth$arity$2(null,i__16352);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16500 = seq__16349;
var G__16501 = chunk__16350;
var G__16502 = count__16351;
var G__16503 = (i__16352 + (1));
seq__16349 = G__16500;
chunk__16350 = G__16501;
count__16351 = G__16502;
i__16352 = G__16503;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16349);
if(temp__4657__auto__){
var seq__16349__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16349__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16349__$1);
var G__16504 = cljs.core.chunk_rest(seq__16349__$1);
var G__16505 = c__8792__auto__;
var G__16506 = cljs.core.count(c__8792__auto__);
var G__16507 = (0);
seq__16349 = G__16504;
chunk__16350 = G__16505;
count__16351 = G__16506;
i__16352 = G__16507;
continue;
} else {
var imagelink = cljs.core.first(seq__16349__$1);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.parent(imagelink),cljs.core.cst$kw$target,"_blank");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(imagelink),cljs.core.cst$kw$image_DASH_link);

var G__16508 = cljs.core.next(seq__16349__$1);
var G__16509 = null;
var G__16510 = (0);
var G__16511 = (0);
seq__16349 = G__16508;
chunk__16350 = G__16509;
count__16351 = G__16510;
i__16352 = G__16511;
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
var seq__16512 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__16513 = null;
var count__16514 = (0);
var i__16515 = (0);
while(true){
if((i__16515 < count__16514)){
var c = chunk__16513.cljs$core$IIndexed$_nth$arity$2(null,i__16515);
var txt_16516 = (c["innerHTML"]);
var html_16517 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16516,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16517);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16518 = seq__16512;
var G__16519 = chunk__16513;
var G__16520 = count__16514;
var G__16521 = (i__16515 + (1));
seq__16512 = G__16518;
chunk__16513 = G__16519;
count__16514 = G__16520;
i__16515 = G__16521;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16512);
if(temp__4657__auto__){
var seq__16512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16512__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__16512__$1);
var G__16522 = cljs.core.chunk_rest(seq__16512__$1);
var G__16523 = c__8792__auto__;
var G__16524 = cljs.core.count(c__8792__auto__);
var G__16525 = (0);
seq__16512 = G__16522;
chunk__16513 = G__16523;
count__16514 = G__16524;
i__16515 = G__16525;
continue;
} else {
var c = cljs.core.first(seq__16512__$1);
var txt_16526 = (c["innerHTML"]);
var html_16527 = markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(txt_16526,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading_DASH_anchors,true,cljs.core.cst$kw$reference_DASH_links,true,cljs.core.cst$kw$footnotes,true], 0));
(c["innerHTML"] = html_16527);

app.helpers.page_content_style(cljs.core.cst$kw$$render_DASH_markdown);

var G__16528 = cljs.core.next(seq__16512__$1);
var G__16529 = null;
var G__16530 = (0);
var G__16531 = (0);
seq__16512 = G__16528;
chunk__16513 = G__16529;
count__16514 = G__16530;
i__16515 = G__16531;
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
var final_width = (function (){var G__16532 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16532);
})();
var final_height = (function (){var G__16533 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16533);
})();
var buffer_width = (function (){var G__16534 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16534);
})();
var kusi_width = (function (){var G__16535 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16535);
})();
var orig_border_width = (function (){var G__16536 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16536);
})();
var vertical_buffer_width = (function (){var G__16537 = (((cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) == null))?cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe):cljs.core.cst$kw$vertical_DASH_buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe));
return Number(G__16537);
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
