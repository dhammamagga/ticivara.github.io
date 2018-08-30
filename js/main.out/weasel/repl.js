// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('weasel.impls.websocket');
weasel.repl.ws_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
weasel.repl.alive_QMARK_ = (function weasel$repl$alive_QMARK_(){

return !((cljs.core.deref(weasel.repl.ws_connection) == null));
});
if(typeof weasel.repl.process_message !== 'undefined'){
} else {
weasel.repl.process_message = (function (){var method_table__8908__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8909__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8910__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8911__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8912__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("weasel.repl","process-message"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__8912__auto__,method_table__8908__auto__,prefer_table__8909__auto__,method_cache__8910__auto__,cached_hierarchy__8911__auto__));
})();
}
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (message){
return console.error(["Websocket REPL error ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$eval_DASH_js,(function (message){
var code = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$result,cljs.core.cst$kw$value,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code))].join('')], null);
}catch (e18683){if((e18683 instanceof Error)){
var e = e18683;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),cljs.core.cst$kw$stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e18683;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function weasel$repl$repl_print(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18685 = arguments.length;
var i__9123__auto___18686 = (0);
while(true){
if((i__9123__auto___18686 < len__9122__auto___18685)){
args__9129__auto__.push((arguments[i__9123__auto___18686]));

var G__18687 = (i__9123__auto___18686 + (1));
i__9123__auto___18686 = G__18687;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = cljs.core.deref(weasel.repl.ws_connection);
if(cljs.core.truth_(temp__4655__auto__)){
var conn = temp__4655__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$print,cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else {
return null;
}
});

weasel.repl.repl_print.cljs$lang$maxFixedArity = (0);

weasel.repl.repl_print.cljs$lang$applyTo = (function (seq18684){
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18684));
});

weasel.repl.console_print = (function weasel$repl$console_print(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18689 = arguments.length;
var i__9123__auto___18690 = (0);
while(true){
if((i__9123__auto___18690 < len__9122__auto___18689)){
args__9129__auto__.push((arguments[i__9123__auto___18690]));

var G__18691 = (i__9123__auto___18690 + (1));
i__9123__auto___18690 = G__18691;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

weasel.repl.console_print.cljs$lang$maxFixedArity = (0);

weasel.repl.console_print.cljs$lang$applyTo = (function (seq18688){
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18688));
});

weasel.repl.print_fns = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$repl,weasel.repl.repl_print,cljs.core.cst$kw$console,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repl,null,cljs.core.cst$kw$console,null], null), null),(function() { 
var G__18692__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__18692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18693__i = 0, G__18693__a = new Array(arguments.length -  0);
while (G__18693__i < G__18693__a.length) {G__18693__a[G__18693__i] = arguments[G__18693__i + 0]; ++G__18693__i;}
  args = new cljs.core.IndexedSeq(G__18693__a,0,null);
} 
return G__18692__delegate.call(this,args);};
G__18692.cljs$lang$maxFixedArity = 0;
G__18692.cljs$lang$applyTo = (function (arglist__18694){
var args = cljs.core.seq(arglist__18694);
return G__18692__delegate(args);
});
G__18692.cljs$core$IFn$_invoke$arity$variadic = G__18692__delegate;
return G__18692;
})()
]);
weasel.repl.connect = (function weasel$repl$connect(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18702 = arguments.length;
var i__9123__auto___18703 = (0);
while(true){
if((i__9123__auto___18703 < len__9122__auto___18702)){
args__9129__auto__.push((arguments[i__9123__auto___18703]));

var G__18704 = (i__9123__auto___18703 + (1));
i__9123__auto___18703 = G__18704;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (repl_server_url,p__18697){
var map__18698 = p__18697;
var map__18698__$1 = ((((!((map__18698 == null)))?((((map__18698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18698):map__18698);
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18698__$1,cljs.core.cst$kw$verbose,true);
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,cljs.core.cst$kw$on_DASH_open);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,cljs.core.cst$kw$on_DASH_error);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,cljs.core.cst$kw$on_DASH_close);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18698__$1,cljs.core.cst$kw$print,cljs.core.cst$kw$repl);
var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$opened,((function (repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$ready], null)], 0)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_open)){
return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else {
return null;
}
});})(repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$message,((function (repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
var map__18700 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(evt.message);
var map__18700__$1 = ((((!((map__18700 == null)))?((((map__18700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18700):map__18700);
var message = map__18700__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18700__$1,cljs.core.cst$kw$op);
var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$closed,((function (repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.reset_BANG_(weasel.repl.ws_connection,null);

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});})(repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$error,((function (repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else {
return null;
}
});})(repl_connection,map__18698,map__18698__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.repl.bootstrap();

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
});

weasel.repl.connect.cljs$lang$maxFixedArity = (1);

weasel.repl.connect.cljs$lang$applyTo = (function (seq18695){
var G__18696 = cljs.core.first(seq18695);
var seq18695__$1 = cljs.core.next(seq18695);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(G__18696,seq18695__$1);
});

