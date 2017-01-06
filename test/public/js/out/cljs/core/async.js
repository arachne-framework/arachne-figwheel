// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32710 = [];
var len__30968__auto___32716 = arguments.length;
var i__30969__auto___32717 = (0);
while(true){
if((i__30969__auto___32717 < len__30968__auto___32716)){
args32710.push((arguments[i__30969__auto___32717]));

var G__32718 = (i__30969__auto___32717 + (1));
i__30969__auto___32717 = G__32718;
continue;
} else {
}
break;
}

var G__32712 = args32710.length;
switch (G__32712) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32710.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32713 = (function (f,blockable,meta32714){
this.f = f;
this.blockable = blockable;
this.meta32714 = meta32714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32715,meta32714__$1){
var self__ = this;
var _32715__$1 = this;
return (new cljs.core.async.t_cljs$core$async32713(self__.f,self__.blockable,meta32714__$1));
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32715){
var self__ = this;
var _32715__$1 = this;
return self__.meta32714;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32714","meta32714",-477947632,null)], null);
});

cljs.core.async.t_cljs$core$async32713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32713";

cljs.core.async.t_cljs$core$async32713.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async32713");
});

cljs.core.async.__GT_t_cljs$core$async32713 = (function cljs$core$async$__GT_t_cljs$core$async32713(f__$1,blockable__$1,meta32714){
return (new cljs.core.async.t_cljs$core$async32713(f__$1,blockable__$1,meta32714));
});

}

return (new cljs.core.async.t_cljs$core$async32713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32722 = [];
var len__30968__auto___32725 = arguments.length;
var i__30969__auto___32726 = (0);
while(true){
if((i__30969__auto___32726 < len__30968__auto___32725)){
args32722.push((arguments[i__30969__auto___32726]));

var G__32727 = (i__30969__auto___32726 + (1));
i__30969__auto___32726 = G__32727;
continue;
} else {
}
break;
}

var G__32724 = args32722.length;
switch (G__32724) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32722.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args32729 = [];
var len__30968__auto___32732 = arguments.length;
var i__30969__auto___32733 = (0);
while(true){
if((i__30969__auto___32733 < len__30968__auto___32732)){
args32729.push((arguments[i__30969__auto___32733]));

var G__32734 = (i__30969__auto___32733 + (1));
i__30969__auto___32733 = G__32734;
continue;
} else {
}
break;
}

var G__32731 = args32729.length;
switch (G__32731) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32729.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32736 = [];
var len__30968__auto___32739 = arguments.length;
var i__30969__auto___32740 = (0);
while(true){
if((i__30969__auto___32740 < len__30968__auto___32739)){
args32736.push((arguments[i__30969__auto___32740]));

var G__32741 = (i__30969__auto___32740 + (1));
i__30969__auto___32740 = G__32741;
continue;
} else {
}
break;
}

var G__32738 = args32736.length;
switch (G__32738) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32736.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32743 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32743);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32743,ret){
return (function (){
return fn1.call(null,val_32743);
});})(val_32743,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32744 = [];
var len__30968__auto___32747 = arguments.length;
var i__30969__auto___32748 = (0);
while(true){
if((i__30969__auto___32748 < len__30968__auto___32747)){
args32744.push((arguments[i__30969__auto___32748]));

var G__32749 = (i__30969__auto___32748 + (1));
i__30969__auto___32748 = G__32749;
continue;
} else {
}
break;
}

var G__32746 = args32744.length;
switch (G__32746) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32744.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30768__auto___32751 = n;
var x_32752 = (0);
while(true){
if((x_32752 < n__30768__auto___32751)){
(a[x_32752] = (0));

var G__32753 = (x_32752 + (1));
x_32752 = G__32753;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32754 = (i + (1));
i = G__32754;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32758 = (function (flag,meta32759){
this.flag = flag;
this.meta32759 = meta32759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32760,meta32759__$1){
var self__ = this;
var _32760__$1 = this;
return (new cljs.core.async.t_cljs$core$async32758(self__.flag,meta32759__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32760){
var self__ = this;
var _32760__$1 = this;
return self__.meta32759;
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32759","meta32759",594614158,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32758";

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async32758");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32758 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32758(flag__$1,meta32759){
return (new cljs.core.async.t_cljs$core$async32758(flag__$1,meta32759));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32758(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32764 = (function (flag,cb,meta32765){
this.flag = flag;
this.cb = cb;
this.meta32765 = meta32765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32766,meta32765__$1){
var self__ = this;
var _32766__$1 = this;
return (new cljs.core.async.t_cljs$core$async32764(self__.flag,self__.cb,meta32765__$1));
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32766){
var self__ = this;
var _32766__$1 = this;
return self__.meta32765;
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32765","meta32765",110403638,null)], null);
});

cljs.core.async.t_cljs$core$async32764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32764";

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async32764");
});

cljs.core.async.__GT_t_cljs$core$async32764 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32764(flag__$1,cb__$1,meta32765){
return (new cljs.core.async.t_cljs$core$async32764(flag__$1,cb__$1,meta32765));
});

}

return (new cljs.core.async.t_cljs$core$async32764(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29752__auto__ = wport;
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32769 = (i + (1));
i = G__32769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29752__auto__ = ret;
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__29740__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29740__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29740__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30975__auto__ = [];
var len__30968__auto___32775 = arguments.length;
var i__30969__auto___32776 = (0);
while(true){
if((i__30969__auto___32776 < len__30968__auto___32775)){
args__30975__auto__.push((arguments[i__30969__auto___32776]));

var G__32777 = (i__30969__auto___32776 + (1));
i__30969__auto___32776 = G__32777;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((1) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30976__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32772){
var map__32773 = p__32772;
var map__32773__$1 = ((((!((map__32773 == null)))?((((map__32773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32773):map__32773);
var opts = map__32773__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32770){
var G__32771 = cljs.core.first.call(null,seq32770);
var seq32770__$1 = cljs.core.next.call(null,seq32770);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32771,seq32770__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32778 = [];
var len__30968__auto___32828 = arguments.length;
var i__30969__auto___32829 = (0);
while(true){
if((i__30969__auto___32829 < len__30968__auto___32828)){
args32778.push((arguments[i__30969__auto___32829]));

var G__32830 = (i__30969__auto___32829 + (1));
i__30969__auto___32829 = G__32830;
continue;
} else {
}
break;
}

var G__32780 = args32778.length;
switch (G__32780) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32778.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32651__auto___32832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___32832){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___32832){
return (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_32833 = state_32804__$1;
(statearr_32806_32833[(2)] = inst_32800);

(statearr_32806_32833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32807_32834 = state_32804__$1;
(statearr_32807_32834[(2)] = null);

(statearr_32807_32834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32783 = (state_32804[(7)]);
var inst_32783__$1 = (state_32804[(2)]);
var inst_32784 = (inst_32783__$1 == null);
var state_32804__$1 = (function (){var statearr_32808 = state_32804;
(statearr_32808[(7)] = inst_32783__$1);

return statearr_32808;
})();
if(cljs.core.truth_(inst_32784)){
var statearr_32809_32835 = state_32804__$1;
(statearr_32809_32835[(1)] = (5));

} else {
var statearr_32810_32836 = state_32804__$1;
(statearr_32810_32836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (13))){
var state_32804__$1 = state_32804;
var statearr_32811_32837 = state_32804__$1;
(statearr_32811_32837[(2)] = null);

(statearr_32811_32837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32783 = (state_32804[(7)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32804__$1,(11),to,inst_32783);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (12))){
var state_32804__$1 = state_32804;
var statearr_32812_32838 = state_32804__$1;
(statearr_32812_32838[(2)] = null);

(statearr_32812_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32804__$1,(4),from);
} else {
if((state_val_32805 === (11))){
var inst_32793 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32793)){
var statearr_32813_32839 = state_32804__$1;
(statearr_32813_32839[(1)] = (12));

} else {
var statearr_32814_32840 = state_32804__$1;
(statearr_32814_32840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var state_32804__$1 = state_32804;
var statearr_32815_32841 = state_32804__$1;
(statearr_32815_32841[(2)] = null);

(statearr_32815_32841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var state_32804__$1 = state_32804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32816_32842 = state_32804__$1;
(statearr_32816_32842[(1)] = (8));

} else {
var statearr_32817_32843 = state_32804__$1;
(statearr_32817_32843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (14))){
var inst_32798 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32818_32844 = state_32804__$1;
(statearr_32818_32844[(2)] = inst_32798);

(statearr_32818_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32790 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32819_32845 = state_32804__$1;
(statearr_32819_32845[(2)] = inst_32790);

(statearr_32819_32845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32787 = cljs.core.async.close_BANG_.call(null,to);
var state_32804__$1 = state_32804;
var statearr_32820_32846 = state_32804__$1;
(statearr_32820_32846[(2)] = inst_32787);

(statearr_32820_32846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___32832))
;
return ((function (switch__32537__auto__,c__32651__auto___32832){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null,null];
(statearr_32824[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_32804){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_32804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e32825){if((e32825 instanceof Object)){
var ex__32541__auto__ = e32825;
var statearr_32826_32847 = state_32804;
(statearr_32826_32847[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32848 = state_32804;
state_32804 = G__32848;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___32832))
})();
var state__32653__auto__ = (function (){var statearr_32827 = f__32652__auto__.call(null);
(statearr_32827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___32832);

return statearr_32827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___32832))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33036){
var vec__33037 = p__33036;
var v = cljs.core.nth.call(null,vec__33037,(0),null);
var p = cljs.core.nth.call(null,vec__33037,(1),null);
var job = vec__33037;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32651__auto___33223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results){
return (function (state_33044){
var state_val_33045 = (state_33044[(1)]);
if((state_val_33045 === (1))){
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33044__$1,(2),res,v);
} else {
if((state_val_33045 === (2))){
var inst_33041 = (state_33044[(2)]);
var inst_33042 = cljs.core.async.close_BANG_.call(null,res);
var state_33044__$1 = (function (){var statearr_33046 = state_33044;
(statearr_33046[(7)] = inst_33041);

return statearr_33046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33044__$1,inst_33042);
} else {
return null;
}
}
});})(c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results))
;
return ((function (switch__32537__auto__,c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_33050 = [null,null,null,null,null,null,null,null];
(statearr_33050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__);

(statearr_33050[(1)] = (1));

return statearr_33050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1 = (function (state_33044){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33051){if((e33051 instanceof Object)){
var ex__32541__auto__ = e33051;
var statearr_33052_33224 = state_33044;
(statearr_33052_33224[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33225 = state_33044;
state_33044 = G__33225;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results))
})();
var state__32653__auto__ = (function (){var statearr_33053 = f__32652__auto__.call(null);
(statearr_33053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33223);

return statearr_33053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___33223,res,vec__33037,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33054){
var vec__33055 = p__33054;
var v = cljs.core.nth.call(null,vec__33055,(0),null);
var p = cljs.core.nth.call(null,vec__33055,(1),null);
var job = vec__33055;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30768__auto___33226 = n;
var __33227 = (0);
while(true){
if((__33227 < n__30768__auto___33226)){
var G__33058_33228 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33058_33228) {
case "compute":
var c__32651__auto___33230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33227,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (__33227,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function (state_33071){
var state_val_33072 = (state_33071[(1)]);
if((state_val_33072 === (1))){
var state_33071__$1 = state_33071;
var statearr_33073_33231 = state_33071__$1;
(statearr_33073_33231[(2)] = null);

(statearr_33073_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33072 === (2))){
var state_33071__$1 = state_33071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33071__$1,(4),jobs);
} else {
if((state_val_33072 === (3))){
var inst_33069 = (state_33071[(2)]);
var state_33071__$1 = state_33071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33071__$1,inst_33069);
} else {
if((state_val_33072 === (4))){
var inst_33061 = (state_33071[(2)]);
var inst_33062 = process.call(null,inst_33061);
var state_33071__$1 = state_33071;
if(cljs.core.truth_(inst_33062)){
var statearr_33074_33232 = state_33071__$1;
(statearr_33074_33232[(1)] = (5));

} else {
var statearr_33075_33233 = state_33071__$1;
(statearr_33075_33233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33072 === (5))){
var state_33071__$1 = state_33071;
var statearr_33076_33234 = state_33071__$1;
(statearr_33076_33234[(2)] = null);

(statearr_33076_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33072 === (6))){
var state_33071__$1 = state_33071;
var statearr_33077_33235 = state_33071__$1;
(statearr_33077_33235[(2)] = null);

(statearr_33077_33235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33072 === (7))){
var inst_33067 = (state_33071[(2)]);
var state_33071__$1 = state_33071;
var statearr_33078_33236 = state_33071__$1;
(statearr_33078_33236[(2)] = inst_33067);

(statearr_33078_33236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33227,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
;
return ((function (__33227,switch__32537__auto__,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_33082 = [null,null,null,null,null,null,null];
(statearr_33082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__);

(statearr_33082[(1)] = (1));

return statearr_33082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1 = (function (state_33071){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33083){if((e33083 instanceof Object)){
var ex__32541__auto__ = e33083;
var statearr_33084_33237 = state_33071;
(statearr_33084_33237[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33238 = state_33071;
state_33071 = G__33238;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = function(state_33071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1.call(this,state_33071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__;
})()
;})(__33227,switch__32537__auto__,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
})();
var state__32653__auto__ = (function (){var statearr_33085 = f__32652__auto__.call(null);
(statearr_33085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33230);

return statearr_33085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(__33227,c__32651__auto___33230,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
);


break;
case "async":
var c__32651__auto___33239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33227,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (__33227,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function (state_33098){
var state_val_33099 = (state_33098[(1)]);
if((state_val_33099 === (1))){
var state_33098__$1 = state_33098;
var statearr_33100_33240 = state_33098__$1;
(statearr_33100_33240[(2)] = null);

(statearr_33100_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (2))){
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33098__$1,(4),jobs);
} else {
if((state_val_33099 === (3))){
var inst_33096 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33098__$1,inst_33096);
} else {
if((state_val_33099 === (4))){
var inst_33088 = (state_33098[(2)]);
var inst_33089 = async.call(null,inst_33088);
var state_33098__$1 = state_33098;
if(cljs.core.truth_(inst_33089)){
var statearr_33101_33241 = state_33098__$1;
(statearr_33101_33241[(1)] = (5));

} else {
var statearr_33102_33242 = state_33098__$1;
(statearr_33102_33242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (5))){
var state_33098__$1 = state_33098;
var statearr_33103_33243 = state_33098__$1;
(statearr_33103_33243[(2)] = null);

(statearr_33103_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (6))){
var state_33098__$1 = state_33098;
var statearr_33104_33244 = state_33098__$1;
(statearr_33104_33244[(2)] = null);

(statearr_33104_33244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (7))){
var inst_33094 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33105_33245 = state_33098__$1;
(statearr_33105_33245[(2)] = inst_33094);

(statearr_33105_33245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33227,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
;
return ((function (__33227,switch__32537__auto__,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_33109 = [null,null,null,null,null,null,null];
(statearr_33109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__);

(statearr_33109[(1)] = (1));

return statearr_33109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1 = (function (state_33098){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33110){if((e33110 instanceof Object)){
var ex__32541__auto__ = e33110;
var statearr_33111_33246 = state_33098;
(statearr_33111_33246[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33247 = state_33098;
state_33098 = G__33247;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = function(state_33098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1.call(this,state_33098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__;
})()
;})(__33227,switch__32537__auto__,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
})();
var state__32653__auto__ = (function (){var statearr_33112 = f__32652__auto__.call(null);
(statearr_33112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33239);

return statearr_33112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(__33227,c__32651__auto___33239,G__33058_33228,n__30768__auto___33226,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33248 = (__33227 + (1));
__33227 = G__33248;
continue;
} else {
}
break;
}

var c__32651__auto___33249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___33249,jobs,results,process,async){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___33249,jobs,results,process,async){
return (function (state_33134){
var state_val_33135 = (state_33134[(1)]);
if((state_val_33135 === (1))){
var state_33134__$1 = state_33134;
var statearr_33136_33250 = state_33134__$1;
(statearr_33136_33250[(2)] = null);

(statearr_33136_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (2))){
var state_33134__$1 = state_33134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33134__$1,(4),from);
} else {
if((state_val_33135 === (3))){
var inst_33132 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33134__$1,inst_33132);
} else {
if((state_val_33135 === (4))){
var inst_33115 = (state_33134[(7)]);
var inst_33115__$1 = (state_33134[(2)]);
var inst_33116 = (inst_33115__$1 == null);
var state_33134__$1 = (function (){var statearr_33137 = state_33134;
(statearr_33137[(7)] = inst_33115__$1);

return statearr_33137;
})();
if(cljs.core.truth_(inst_33116)){
var statearr_33138_33251 = state_33134__$1;
(statearr_33138_33251[(1)] = (5));

} else {
var statearr_33139_33252 = state_33134__$1;
(statearr_33139_33252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (5))){
var inst_33118 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33134__$1 = state_33134;
var statearr_33140_33253 = state_33134__$1;
(statearr_33140_33253[(2)] = inst_33118);

(statearr_33140_33253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (6))){
var inst_33115 = (state_33134[(7)]);
var inst_33120 = (state_33134[(8)]);
var inst_33120__$1 = cljs.core.async.chan.call(null,(1));
var inst_33121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33122 = [inst_33115,inst_33120__$1];
var inst_33123 = (new cljs.core.PersistentVector(null,2,(5),inst_33121,inst_33122,null));
var state_33134__$1 = (function (){var statearr_33141 = state_33134;
(statearr_33141[(8)] = inst_33120__$1);

return statearr_33141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33134__$1,(8),jobs,inst_33123);
} else {
if((state_val_33135 === (7))){
var inst_33130 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
var statearr_33142_33254 = state_33134__$1;
(statearr_33142_33254[(2)] = inst_33130);

(statearr_33142_33254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (8))){
var inst_33120 = (state_33134[(8)]);
var inst_33125 = (state_33134[(2)]);
var state_33134__$1 = (function (){var statearr_33143 = state_33134;
(statearr_33143[(9)] = inst_33125);

return statearr_33143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33134__$1,(9),results,inst_33120);
} else {
if((state_val_33135 === (9))){
var inst_33127 = (state_33134[(2)]);
var state_33134__$1 = (function (){var statearr_33144 = state_33134;
(statearr_33144[(10)] = inst_33127);

return statearr_33144;
})();
var statearr_33145_33255 = state_33134__$1;
(statearr_33145_33255[(2)] = null);

(statearr_33145_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___33249,jobs,results,process,async))
;
return ((function (switch__32537__auto__,c__32651__auto___33249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_33149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__);

(statearr_33149[(1)] = (1));

return statearr_33149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1 = (function (state_33134){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33150){if((e33150 instanceof Object)){
var ex__32541__auto__ = e33150;
var statearr_33151_33256 = state_33134;
(statearr_33151_33256[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33257 = state_33134;
state_33134 = G__33257;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = function(state_33134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1.call(this,state_33134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___33249,jobs,results,process,async))
})();
var state__32653__auto__ = (function (){var statearr_33152 = f__32652__auto__.call(null);
(statearr_33152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33249);

return statearr_33152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___33249,jobs,results,process,async))
);


var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__,jobs,results,process,async){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__,jobs,results,process,async){
return (function (state_33190){
var state_val_33191 = (state_33190[(1)]);
if((state_val_33191 === (7))){
var inst_33186 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33192_33258 = state_33190__$1;
(statearr_33192_33258[(2)] = inst_33186);

(statearr_33192_33258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (20))){
var state_33190__$1 = state_33190;
var statearr_33193_33259 = state_33190__$1;
(statearr_33193_33259[(2)] = null);

(statearr_33193_33259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (1))){
var state_33190__$1 = state_33190;
var statearr_33194_33260 = state_33190__$1;
(statearr_33194_33260[(2)] = null);

(statearr_33194_33260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (4))){
var inst_33155 = (state_33190[(7)]);
var inst_33155__$1 = (state_33190[(2)]);
var inst_33156 = (inst_33155__$1 == null);
var state_33190__$1 = (function (){var statearr_33195 = state_33190;
(statearr_33195[(7)] = inst_33155__$1);

return statearr_33195;
})();
if(cljs.core.truth_(inst_33156)){
var statearr_33196_33261 = state_33190__$1;
(statearr_33196_33261[(1)] = (5));

} else {
var statearr_33197_33262 = state_33190__$1;
(statearr_33197_33262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (15))){
var inst_33168 = (state_33190[(8)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33190__$1,(18),to,inst_33168);
} else {
if((state_val_33191 === (21))){
var inst_33181 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33198_33263 = state_33190__$1;
(statearr_33198_33263[(2)] = inst_33181);

(statearr_33198_33263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (13))){
var inst_33183 = (state_33190[(2)]);
var state_33190__$1 = (function (){var statearr_33199 = state_33190;
(statearr_33199[(9)] = inst_33183);

return statearr_33199;
})();
var statearr_33200_33264 = state_33190__$1;
(statearr_33200_33264[(2)] = null);

(statearr_33200_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (6))){
var inst_33155 = (state_33190[(7)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33190__$1,(11),inst_33155);
} else {
if((state_val_33191 === (17))){
var inst_33176 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
if(cljs.core.truth_(inst_33176)){
var statearr_33201_33265 = state_33190__$1;
(statearr_33201_33265[(1)] = (19));

} else {
var statearr_33202_33266 = state_33190__$1;
(statearr_33202_33266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (3))){
var inst_33188 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33190__$1,inst_33188);
} else {
if((state_val_33191 === (12))){
var inst_33165 = (state_33190[(10)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33190__$1,(14),inst_33165);
} else {
if((state_val_33191 === (2))){
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33190__$1,(4),results);
} else {
if((state_val_33191 === (19))){
var state_33190__$1 = state_33190;
var statearr_33203_33267 = state_33190__$1;
(statearr_33203_33267[(2)] = null);

(statearr_33203_33267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (11))){
var inst_33165 = (state_33190[(2)]);
var state_33190__$1 = (function (){var statearr_33204 = state_33190;
(statearr_33204[(10)] = inst_33165);

return statearr_33204;
})();
var statearr_33205_33268 = state_33190__$1;
(statearr_33205_33268[(2)] = null);

(statearr_33205_33268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (9))){
var state_33190__$1 = state_33190;
var statearr_33206_33269 = state_33190__$1;
(statearr_33206_33269[(2)] = null);

(statearr_33206_33269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (5))){
var state_33190__$1 = state_33190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33207_33270 = state_33190__$1;
(statearr_33207_33270[(1)] = (8));

} else {
var statearr_33208_33271 = state_33190__$1;
(statearr_33208_33271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (14))){
var inst_33170 = (state_33190[(11)]);
var inst_33168 = (state_33190[(8)]);
var inst_33168__$1 = (state_33190[(2)]);
var inst_33169 = (inst_33168__$1 == null);
var inst_33170__$1 = cljs.core.not.call(null,inst_33169);
var state_33190__$1 = (function (){var statearr_33209 = state_33190;
(statearr_33209[(11)] = inst_33170__$1);

(statearr_33209[(8)] = inst_33168__$1);

return statearr_33209;
})();
if(inst_33170__$1){
var statearr_33210_33272 = state_33190__$1;
(statearr_33210_33272[(1)] = (15));

} else {
var statearr_33211_33273 = state_33190__$1;
(statearr_33211_33273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (16))){
var inst_33170 = (state_33190[(11)]);
var state_33190__$1 = state_33190;
var statearr_33212_33274 = state_33190__$1;
(statearr_33212_33274[(2)] = inst_33170);

(statearr_33212_33274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (10))){
var inst_33162 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33213_33275 = state_33190__$1;
(statearr_33213_33275[(2)] = inst_33162);

(statearr_33213_33275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (18))){
var inst_33173 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33214_33276 = state_33190__$1;
(statearr_33214_33276[(2)] = inst_33173);

(statearr_33214_33276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (8))){
var inst_33159 = cljs.core.async.close_BANG_.call(null,to);
var state_33190__$1 = state_33190;
var statearr_33215_33277 = state_33190__$1;
(statearr_33215_33277[(2)] = inst_33159);

(statearr_33215_33277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto__,jobs,results,process,async))
;
return ((function (switch__32537__auto__,c__32651__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_33219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__);

(statearr_33219[(1)] = (1));

return statearr_33219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1 = (function (state_33190){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33220){if((e33220 instanceof Object)){
var ex__32541__auto__ = e33220;
var statearr_33221_33278 = state_33190;
(statearr_33221_33278[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33279 = state_33190;
state_33190 = G__33279;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__ = function(state_33190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1.call(this,state_33190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__,jobs,results,process,async))
})();
var state__32653__auto__ = (function (){var statearr_33222 = f__32652__auto__.call(null);
(statearr_33222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_33222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__,jobs,results,process,async))
);

return c__32651__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33280 = [];
var len__30968__auto___33283 = arguments.length;
var i__30969__auto___33284 = (0);
while(true){
if((i__30969__auto___33284 < len__30968__auto___33283)){
args33280.push((arguments[i__30969__auto___33284]));

var G__33285 = (i__30969__auto___33284 + (1));
i__30969__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var G__33282 = args33280.length;
switch (G__33282) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33280.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args33287 = [];
var len__30968__auto___33290 = arguments.length;
var i__30969__auto___33291 = (0);
while(true){
if((i__30969__auto___33291 < len__30968__auto___33290)){
args33287.push((arguments[i__30969__auto___33291]));

var G__33292 = (i__30969__auto___33291 + (1));
i__30969__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var G__33289 = args33287.length;
switch (G__33289) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33287.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args33294 = [];
var len__30968__auto___33347 = arguments.length;
var i__30969__auto___33348 = (0);
while(true){
if((i__30969__auto___33348 < len__30968__auto___33347)){
args33294.push((arguments[i__30969__auto___33348]));

var G__33349 = (i__30969__auto___33348 + (1));
i__30969__auto___33348 = G__33349;
continue;
} else {
}
break;
}

var G__33296 = args33294.length;
switch (G__33296) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33294.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32651__auto___33351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___33351,tc,fc){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___33351,tc,fc){
return (function (state_33322){
var state_val_33323 = (state_33322[(1)]);
if((state_val_33323 === (7))){
var inst_33318 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33324_33352 = state_33322__$1;
(statearr_33324_33352[(2)] = inst_33318);

(statearr_33324_33352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (1))){
var state_33322__$1 = state_33322;
var statearr_33325_33353 = state_33322__$1;
(statearr_33325_33353[(2)] = null);

(statearr_33325_33353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (4))){
var inst_33299 = (state_33322[(7)]);
var inst_33299__$1 = (state_33322[(2)]);
var inst_33300 = (inst_33299__$1 == null);
var state_33322__$1 = (function (){var statearr_33326 = state_33322;
(statearr_33326[(7)] = inst_33299__$1);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33327_33354 = state_33322__$1;
(statearr_33327_33354[(1)] = (5));

} else {
var statearr_33328_33355 = state_33322__$1;
(statearr_33328_33355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (13))){
var state_33322__$1 = state_33322;
var statearr_33329_33356 = state_33322__$1;
(statearr_33329_33356[(2)] = null);

(statearr_33329_33356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (6))){
var inst_33299 = (state_33322[(7)]);
var inst_33305 = p.call(null,inst_33299);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33305)){
var statearr_33330_33357 = state_33322__$1;
(statearr_33330_33357[(1)] = (9));

} else {
var statearr_33331_33358 = state_33322__$1;
(statearr_33331_33358[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (3))){
var inst_33320 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33322__$1,inst_33320);
} else {
if((state_val_33323 === (12))){
var state_33322__$1 = state_33322;
var statearr_33332_33359 = state_33322__$1;
(statearr_33332_33359[(2)] = null);

(statearr_33332_33359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (2))){
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(4),ch);
} else {
if((state_val_33323 === (11))){
var inst_33299 = (state_33322[(7)]);
var inst_33309 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33322__$1,(8),inst_33309,inst_33299);
} else {
if((state_val_33323 === (9))){
var state_33322__$1 = state_33322;
var statearr_33333_33360 = state_33322__$1;
(statearr_33333_33360[(2)] = tc);

(statearr_33333_33360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (5))){
var inst_33302 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33303 = cljs.core.async.close_BANG_.call(null,fc);
var state_33322__$1 = (function (){var statearr_33334 = state_33322;
(statearr_33334[(8)] = inst_33302);

return statearr_33334;
})();
var statearr_33335_33361 = state_33322__$1;
(statearr_33335_33361[(2)] = inst_33303);

(statearr_33335_33361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (14))){
var inst_33316 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33336_33362 = state_33322__$1;
(statearr_33336_33362[(2)] = inst_33316);

(statearr_33336_33362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (10))){
var state_33322__$1 = state_33322;
var statearr_33337_33363 = state_33322__$1;
(statearr_33337_33363[(2)] = fc);

(statearr_33337_33363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (8))){
var inst_33311 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33311)){
var statearr_33338_33364 = state_33322__$1;
(statearr_33338_33364[(1)] = (12));

} else {
var statearr_33339_33365 = state_33322__$1;
(statearr_33339_33365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___33351,tc,fc))
;
return ((function (switch__32537__auto__,c__32651__auto___33351,tc,fc){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_33343 = [null,null,null,null,null,null,null,null,null];
(statearr_33343[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_33343[(1)] = (1));

return statearr_33343;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_33322){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33344){if((e33344 instanceof Object)){
var ex__32541__auto__ = e33344;
var statearr_33345_33366 = state_33322;
(statearr_33345_33366[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33367 = state_33322;
state_33322 = G__33367;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_33322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_33322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___33351,tc,fc))
})();
var state__32653__auto__ = (function (){var statearr_33346 = f__32652__auto__.call(null);
(statearr_33346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33351);

return statearr_33346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___33351,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__){
return (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33427 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33433_33454 = state_33431__$1;
(statearr_33433_33454[(2)] = inst_33427);

(statearr_33433_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var inst_33411 = init;
var state_33431__$1 = (function (){var statearr_33434 = state_33431;
(statearr_33434[(7)] = inst_33411);

return statearr_33434;
})();
var statearr_33435_33455 = state_33431__$1;
(statearr_33435_33455[(2)] = null);

(statearr_33435_33455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33414 = (state_33431[(8)]);
var inst_33414__$1 = (state_33431[(2)]);
var inst_33415 = (inst_33414__$1 == null);
var state_33431__$1 = (function (){var statearr_33436 = state_33431;
(statearr_33436[(8)] = inst_33414__$1);

return statearr_33436;
})();
if(cljs.core.truth_(inst_33415)){
var statearr_33437_33456 = state_33431__$1;
(statearr_33437_33456[(1)] = (5));

} else {
var statearr_33438_33457 = state_33431__$1;
(statearr_33438_33457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var inst_33411 = (state_33431[(7)]);
var inst_33414 = (state_33431[(8)]);
var inst_33418 = (state_33431[(9)]);
var inst_33418__$1 = f.call(null,inst_33411,inst_33414);
var inst_33419 = cljs.core.reduced_QMARK_.call(null,inst_33418__$1);
var state_33431__$1 = (function (){var statearr_33439 = state_33431;
(statearr_33439[(9)] = inst_33418__$1);

return statearr_33439;
})();
if(inst_33419){
var statearr_33440_33458 = state_33431__$1;
(statearr_33440_33458[(1)] = (8));

} else {
var statearr_33441_33459 = state_33431__$1;
(statearr_33441_33459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (3))){
var inst_33429 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33429);
} else {
if((state_val_33432 === (2))){
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33431__$1,(4),ch);
} else {
if((state_val_33432 === (9))){
var inst_33418 = (state_33431[(9)]);
var inst_33411 = inst_33418;
var state_33431__$1 = (function (){var statearr_33442 = state_33431;
(statearr_33442[(7)] = inst_33411);

return statearr_33442;
})();
var statearr_33443_33461 = state_33431__$1;
(statearr_33443_33461[(2)] = null);

(statearr_33443_33461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (5))){
var inst_33411 = (state_33431[(7)]);
var state_33431__$1 = state_33431;
var statearr_33444_33462 = state_33431__$1;
(statearr_33444_33462[(2)] = inst_33411);

(statearr_33444_33462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (10))){
var inst_33425 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33445_33463 = state_33431__$1;
(statearr_33445_33463[(2)] = inst_33425);

(statearr_33445_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33418 = (state_33431[(9)]);
var inst_33421 = cljs.core.deref.call(null,inst_33418);
var state_33431__$1 = state_33431;
var statearr_33446_33464 = state_33431__$1;
(statearr_33446_33464[(2)] = inst_33421);

(statearr_33446_33464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32538__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32538__auto____0 = (function (){
var statearr_33450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33450[(0)] = cljs$core$async$reduce_$_state_machine__32538__auto__);

(statearr_33450[(1)] = (1));

return statearr_33450;
});
var cljs$core$async$reduce_$_state_machine__32538__auto____1 = (function (state_33431){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33451){if((e33451 instanceof Object)){
var ex__32541__auto__ = e33451;
var statearr_33452_33465 = state_33431;
(statearr_33452_33465[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33466 = state_33431;
state_33431 = G__33466;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32538__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32538__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32538__auto____0;
cljs$core$async$reduce_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32538__auto____1;
return cljs$core$async$reduce_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__))
})();
var state__32653__auto__ = (function (){var statearr_33453 = f__32652__auto__.call(null);
(statearr_33453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_33453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__))
);

return c__32651__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33467 = [];
var len__30968__auto___33519 = arguments.length;
var i__30969__auto___33520 = (0);
while(true){
if((i__30969__auto___33520 < len__30968__auto___33519)){
args33467.push((arguments[i__30969__auto___33520]));

var G__33521 = (i__30969__auto___33520 + (1));
i__30969__auto___33520 = G__33521;
continue;
} else {
}
break;
}

var G__33469 = args33467.length;
switch (G__33469) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33467.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__){
return (function (state_33494){
var state_val_33495 = (state_33494[(1)]);
if((state_val_33495 === (7))){
var inst_33476 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33496_33523 = state_33494__$1;
(statearr_33496_33523[(2)] = inst_33476);

(statearr_33496_33523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (1))){
var inst_33470 = cljs.core.seq.call(null,coll);
var inst_33471 = inst_33470;
var state_33494__$1 = (function (){var statearr_33497 = state_33494;
(statearr_33497[(7)] = inst_33471);

return statearr_33497;
})();
var statearr_33498_33524 = state_33494__$1;
(statearr_33498_33524[(2)] = null);

(statearr_33498_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (4))){
var inst_33471 = (state_33494[(7)]);
var inst_33474 = cljs.core.first.call(null,inst_33471);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33494__$1,(7),ch,inst_33474);
} else {
if((state_val_33495 === (13))){
var inst_33488 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33499_33525 = state_33494__$1;
(statearr_33499_33525[(2)] = inst_33488);

(statearr_33499_33525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (6))){
var inst_33479 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
if(cljs.core.truth_(inst_33479)){
var statearr_33500_33526 = state_33494__$1;
(statearr_33500_33526[(1)] = (8));

} else {
var statearr_33501_33527 = state_33494__$1;
(statearr_33501_33527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (3))){
var inst_33492 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else {
if((state_val_33495 === (12))){
var state_33494__$1 = state_33494;
var statearr_33502_33528 = state_33494__$1;
(statearr_33502_33528[(2)] = null);

(statearr_33502_33528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (2))){
var inst_33471 = (state_33494[(7)]);
var state_33494__$1 = state_33494;
if(cljs.core.truth_(inst_33471)){
var statearr_33503_33529 = state_33494__$1;
(statearr_33503_33529[(1)] = (4));

} else {
var statearr_33504_33530 = state_33494__$1;
(statearr_33504_33530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (11))){
var inst_33485 = cljs.core.async.close_BANG_.call(null,ch);
var state_33494__$1 = state_33494;
var statearr_33505_33531 = state_33494__$1;
(statearr_33505_33531[(2)] = inst_33485);

(statearr_33505_33531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (9))){
var state_33494__$1 = state_33494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33506_33532 = state_33494__$1;
(statearr_33506_33532[(1)] = (11));

} else {
var statearr_33507_33533 = state_33494__$1;
(statearr_33507_33533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (5))){
var inst_33471 = (state_33494[(7)]);
var state_33494__$1 = state_33494;
var statearr_33508_33534 = state_33494__$1;
(statearr_33508_33534[(2)] = inst_33471);

(statearr_33508_33534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (10))){
var inst_33490 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33509_33535 = state_33494__$1;
(statearr_33509_33535[(2)] = inst_33490);

(statearr_33509_33535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (8))){
var inst_33471 = (state_33494[(7)]);
var inst_33481 = cljs.core.next.call(null,inst_33471);
var inst_33471__$1 = inst_33481;
var state_33494__$1 = (function (){var statearr_33510 = state_33494;
(statearr_33510[(7)] = inst_33471__$1);

return statearr_33510;
})();
var statearr_33511_33536 = state_33494__$1;
(statearr_33511_33536[(2)] = null);

(statearr_33511_33536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_33515 = [null,null,null,null,null,null,null,null];
(statearr_33515[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_33515[(1)] = (1));

return statearr_33515;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_33494){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33516){if((e33516 instanceof Object)){
var ex__32541__auto__ = e33516;
var statearr_33517_33537 = state_33494;
(statearr_33517_33537[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33538 = state_33494;
state_33494 = G__33538;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__))
})();
var state__32653__auto__ = (function (){var statearr_33518 = f__32652__auto__.call(null);
(statearr_33518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_33518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__))
);

return c__32651__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30465__auto__ = (((_ == null))?null:_);
var m__30466__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,_);
} else {
var m__30466__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30466__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,ch);
} else {
var m__30466__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m);
} else {
var m__30466__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33764 = (function (ch,cs,meta33765){
this.ch = ch;
this.cs = cs;
this.meta33765 = meta33765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33766,meta33765__$1){
var self__ = this;
var _33766__$1 = this;
return (new cljs.core.async.t_cljs$core$async33764(self__.ch,self__.cs,meta33765__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33766){
var self__ = this;
var _33766__$1 = this;
return self__.meta33765;
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33765","meta33765",1194397618,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33764";

cljs.core.async.t_cljs$core$async33764.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async33764");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33764 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33764(ch__$1,cs__$1,meta33765){
return (new cljs.core.async.t_cljs$core$async33764(ch__$1,cs__$1,meta33765));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33764(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32651__auto___33989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___33989,cs,m,dchan,dctr,done){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___33989,cs,m,dchan,dctr,done){
return (function (state_33901){
var state_val_33902 = (state_33901[(1)]);
if((state_val_33902 === (7))){
var inst_33897 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33903_33990 = state_33901__$1;
(statearr_33903_33990[(2)] = inst_33897);

(statearr_33903_33990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (20))){
var inst_33800 = (state_33901[(7)]);
var inst_33812 = cljs.core.first.call(null,inst_33800);
var inst_33813 = cljs.core.nth.call(null,inst_33812,(0),null);
var inst_33814 = cljs.core.nth.call(null,inst_33812,(1),null);
var state_33901__$1 = (function (){var statearr_33904 = state_33901;
(statearr_33904[(8)] = inst_33813);

return statearr_33904;
})();
if(cljs.core.truth_(inst_33814)){
var statearr_33905_33991 = state_33901__$1;
(statearr_33905_33991[(1)] = (22));

} else {
var statearr_33906_33992 = state_33901__$1;
(statearr_33906_33992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (27))){
var inst_33769 = (state_33901[(9)]);
var inst_33849 = (state_33901[(10)]);
var inst_33844 = (state_33901[(11)]);
var inst_33842 = (state_33901[(12)]);
var inst_33849__$1 = cljs.core._nth.call(null,inst_33842,inst_33844);
var inst_33850 = cljs.core.async.put_BANG_.call(null,inst_33849__$1,inst_33769,done);
var state_33901__$1 = (function (){var statearr_33907 = state_33901;
(statearr_33907[(10)] = inst_33849__$1);

return statearr_33907;
})();
if(cljs.core.truth_(inst_33850)){
var statearr_33908_33993 = state_33901__$1;
(statearr_33908_33993[(1)] = (30));

} else {
var statearr_33909_33994 = state_33901__$1;
(statearr_33909_33994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (1))){
var state_33901__$1 = state_33901;
var statearr_33910_33995 = state_33901__$1;
(statearr_33910_33995[(2)] = null);

(statearr_33910_33995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (24))){
var inst_33800 = (state_33901[(7)]);
var inst_33819 = (state_33901[(2)]);
var inst_33820 = cljs.core.next.call(null,inst_33800);
var inst_33778 = inst_33820;
var inst_33779 = null;
var inst_33780 = (0);
var inst_33781 = (0);
var state_33901__$1 = (function (){var statearr_33911 = state_33901;
(statearr_33911[(13)] = inst_33779);

(statearr_33911[(14)] = inst_33780);

(statearr_33911[(15)] = inst_33778);

(statearr_33911[(16)] = inst_33781);

(statearr_33911[(17)] = inst_33819);

return statearr_33911;
})();
var statearr_33912_33996 = state_33901__$1;
(statearr_33912_33996[(2)] = null);

(statearr_33912_33996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (39))){
var state_33901__$1 = state_33901;
var statearr_33916_33997 = state_33901__$1;
(statearr_33916_33997[(2)] = null);

(statearr_33916_33997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (4))){
var inst_33769 = (state_33901[(9)]);
var inst_33769__$1 = (state_33901[(2)]);
var inst_33770 = (inst_33769__$1 == null);
var state_33901__$1 = (function (){var statearr_33917 = state_33901;
(statearr_33917[(9)] = inst_33769__$1);

return statearr_33917;
})();
if(cljs.core.truth_(inst_33770)){
var statearr_33918_33998 = state_33901__$1;
(statearr_33918_33998[(1)] = (5));

} else {
var statearr_33919_33999 = state_33901__$1;
(statearr_33919_33999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (15))){
var inst_33779 = (state_33901[(13)]);
var inst_33780 = (state_33901[(14)]);
var inst_33778 = (state_33901[(15)]);
var inst_33781 = (state_33901[(16)]);
var inst_33796 = (state_33901[(2)]);
var inst_33797 = (inst_33781 + (1));
var tmp33913 = inst_33779;
var tmp33914 = inst_33780;
var tmp33915 = inst_33778;
var inst_33778__$1 = tmp33915;
var inst_33779__$1 = tmp33913;
var inst_33780__$1 = tmp33914;
var inst_33781__$1 = inst_33797;
var state_33901__$1 = (function (){var statearr_33920 = state_33901;
(statearr_33920[(13)] = inst_33779__$1);

(statearr_33920[(14)] = inst_33780__$1);

(statearr_33920[(18)] = inst_33796);

(statearr_33920[(15)] = inst_33778__$1);

(statearr_33920[(16)] = inst_33781__$1);

return statearr_33920;
})();
var statearr_33921_34000 = state_33901__$1;
(statearr_33921_34000[(2)] = null);

(statearr_33921_34000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (21))){
var inst_33823 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33925_34001 = state_33901__$1;
(statearr_33925_34001[(2)] = inst_33823);

(statearr_33925_34001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (31))){
var inst_33849 = (state_33901[(10)]);
var inst_33853 = done.call(null,null);
var inst_33854 = cljs.core.async.untap_STAR_.call(null,m,inst_33849);
var state_33901__$1 = (function (){var statearr_33926 = state_33901;
(statearr_33926[(19)] = inst_33853);

return statearr_33926;
})();
var statearr_33927_34002 = state_33901__$1;
(statearr_33927_34002[(2)] = inst_33854);

(statearr_33927_34002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (32))){
var inst_33841 = (state_33901[(20)]);
var inst_33844 = (state_33901[(11)]);
var inst_33843 = (state_33901[(21)]);
var inst_33842 = (state_33901[(12)]);
var inst_33856 = (state_33901[(2)]);
var inst_33857 = (inst_33844 + (1));
var tmp33922 = inst_33841;
var tmp33923 = inst_33843;
var tmp33924 = inst_33842;
var inst_33841__$1 = tmp33922;
var inst_33842__$1 = tmp33924;
var inst_33843__$1 = tmp33923;
var inst_33844__$1 = inst_33857;
var state_33901__$1 = (function (){var statearr_33928 = state_33901;
(statearr_33928[(22)] = inst_33856);

(statearr_33928[(20)] = inst_33841__$1);

(statearr_33928[(11)] = inst_33844__$1);

(statearr_33928[(21)] = inst_33843__$1);

(statearr_33928[(12)] = inst_33842__$1);

return statearr_33928;
})();
var statearr_33929_34003 = state_33901__$1;
(statearr_33929_34003[(2)] = null);

(statearr_33929_34003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (40))){
var inst_33869 = (state_33901[(23)]);
var inst_33873 = done.call(null,null);
var inst_33874 = cljs.core.async.untap_STAR_.call(null,m,inst_33869);
var state_33901__$1 = (function (){var statearr_33930 = state_33901;
(statearr_33930[(24)] = inst_33873);

return statearr_33930;
})();
var statearr_33931_34004 = state_33901__$1;
(statearr_33931_34004[(2)] = inst_33874);

(statearr_33931_34004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (33))){
var inst_33860 = (state_33901[(25)]);
var inst_33862 = cljs.core.chunked_seq_QMARK_.call(null,inst_33860);
var state_33901__$1 = state_33901;
if(inst_33862){
var statearr_33932_34005 = state_33901__$1;
(statearr_33932_34005[(1)] = (36));

} else {
var statearr_33933_34006 = state_33901__$1;
(statearr_33933_34006[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (13))){
var inst_33790 = (state_33901[(26)]);
var inst_33793 = cljs.core.async.close_BANG_.call(null,inst_33790);
var state_33901__$1 = state_33901;
var statearr_33934_34007 = state_33901__$1;
(statearr_33934_34007[(2)] = inst_33793);

(statearr_33934_34007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (22))){
var inst_33813 = (state_33901[(8)]);
var inst_33816 = cljs.core.async.close_BANG_.call(null,inst_33813);
var state_33901__$1 = state_33901;
var statearr_33935_34008 = state_33901__$1;
(statearr_33935_34008[(2)] = inst_33816);

(statearr_33935_34008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (36))){
var inst_33860 = (state_33901[(25)]);
var inst_33864 = cljs.core.chunk_first.call(null,inst_33860);
var inst_33865 = cljs.core.chunk_rest.call(null,inst_33860);
var inst_33866 = cljs.core.count.call(null,inst_33864);
var inst_33841 = inst_33865;
var inst_33842 = inst_33864;
var inst_33843 = inst_33866;
var inst_33844 = (0);
var state_33901__$1 = (function (){var statearr_33936 = state_33901;
(statearr_33936[(20)] = inst_33841);

(statearr_33936[(11)] = inst_33844);

(statearr_33936[(21)] = inst_33843);

(statearr_33936[(12)] = inst_33842);

return statearr_33936;
})();
var statearr_33937_34009 = state_33901__$1;
(statearr_33937_34009[(2)] = null);

(statearr_33937_34009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (41))){
var inst_33860 = (state_33901[(25)]);
var inst_33876 = (state_33901[(2)]);
var inst_33877 = cljs.core.next.call(null,inst_33860);
var inst_33841 = inst_33877;
var inst_33842 = null;
var inst_33843 = (0);
var inst_33844 = (0);
var state_33901__$1 = (function (){var statearr_33938 = state_33901;
(statearr_33938[(20)] = inst_33841);

(statearr_33938[(27)] = inst_33876);

(statearr_33938[(11)] = inst_33844);

(statearr_33938[(21)] = inst_33843);

(statearr_33938[(12)] = inst_33842);

return statearr_33938;
})();
var statearr_33939_34010 = state_33901__$1;
(statearr_33939_34010[(2)] = null);

(statearr_33939_34010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (43))){
var state_33901__$1 = state_33901;
var statearr_33940_34011 = state_33901__$1;
(statearr_33940_34011[(2)] = null);

(statearr_33940_34011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (29))){
var inst_33885 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33941_34012 = state_33901__$1;
(statearr_33941_34012[(2)] = inst_33885);

(statearr_33941_34012[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (44))){
var inst_33894 = (state_33901[(2)]);
var state_33901__$1 = (function (){var statearr_33942 = state_33901;
(statearr_33942[(28)] = inst_33894);

return statearr_33942;
})();
var statearr_33943_34013 = state_33901__$1;
(statearr_33943_34013[(2)] = null);

(statearr_33943_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (6))){
var inst_33833 = (state_33901[(29)]);
var inst_33832 = cljs.core.deref.call(null,cs);
var inst_33833__$1 = cljs.core.keys.call(null,inst_33832);
var inst_33834 = cljs.core.count.call(null,inst_33833__$1);
var inst_33835 = cljs.core.reset_BANG_.call(null,dctr,inst_33834);
var inst_33840 = cljs.core.seq.call(null,inst_33833__$1);
var inst_33841 = inst_33840;
var inst_33842 = null;
var inst_33843 = (0);
var inst_33844 = (0);
var state_33901__$1 = (function (){var statearr_33944 = state_33901;
(statearr_33944[(20)] = inst_33841);

(statearr_33944[(11)] = inst_33844);

(statearr_33944[(30)] = inst_33835);

(statearr_33944[(21)] = inst_33843);

(statearr_33944[(12)] = inst_33842);

(statearr_33944[(29)] = inst_33833__$1);

return statearr_33944;
})();
var statearr_33945_34014 = state_33901__$1;
(statearr_33945_34014[(2)] = null);

(statearr_33945_34014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (28))){
var inst_33860 = (state_33901[(25)]);
var inst_33841 = (state_33901[(20)]);
var inst_33860__$1 = cljs.core.seq.call(null,inst_33841);
var state_33901__$1 = (function (){var statearr_33946 = state_33901;
(statearr_33946[(25)] = inst_33860__$1);

return statearr_33946;
})();
if(inst_33860__$1){
var statearr_33947_34015 = state_33901__$1;
(statearr_33947_34015[(1)] = (33));

} else {
var statearr_33948_34016 = state_33901__$1;
(statearr_33948_34016[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (25))){
var inst_33844 = (state_33901[(11)]);
var inst_33843 = (state_33901[(21)]);
var inst_33846 = (inst_33844 < inst_33843);
var inst_33847 = inst_33846;
var state_33901__$1 = state_33901;
if(cljs.core.truth_(inst_33847)){
var statearr_33949_34017 = state_33901__$1;
(statearr_33949_34017[(1)] = (27));

} else {
var statearr_33950_34018 = state_33901__$1;
(statearr_33950_34018[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (34))){
var state_33901__$1 = state_33901;
var statearr_33951_34019 = state_33901__$1;
(statearr_33951_34019[(2)] = null);

(statearr_33951_34019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (17))){
var state_33901__$1 = state_33901;
var statearr_33952_34020 = state_33901__$1;
(statearr_33952_34020[(2)] = null);

(statearr_33952_34020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (3))){
var inst_33899 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33901__$1,inst_33899);
} else {
if((state_val_33902 === (12))){
var inst_33828 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33953_34021 = state_33901__$1;
(statearr_33953_34021[(2)] = inst_33828);

(statearr_33953_34021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (2))){
var state_33901__$1 = state_33901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33901__$1,(4),ch);
} else {
if((state_val_33902 === (23))){
var state_33901__$1 = state_33901;
var statearr_33954_34022 = state_33901__$1;
(statearr_33954_34022[(2)] = null);

(statearr_33954_34022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (35))){
var inst_33883 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33955_34023 = state_33901__$1;
(statearr_33955_34023[(2)] = inst_33883);

(statearr_33955_34023[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (19))){
var inst_33800 = (state_33901[(7)]);
var inst_33804 = cljs.core.chunk_first.call(null,inst_33800);
var inst_33805 = cljs.core.chunk_rest.call(null,inst_33800);
var inst_33806 = cljs.core.count.call(null,inst_33804);
var inst_33778 = inst_33805;
var inst_33779 = inst_33804;
var inst_33780 = inst_33806;
var inst_33781 = (0);
var state_33901__$1 = (function (){var statearr_33956 = state_33901;
(statearr_33956[(13)] = inst_33779);

(statearr_33956[(14)] = inst_33780);

(statearr_33956[(15)] = inst_33778);

(statearr_33956[(16)] = inst_33781);

return statearr_33956;
})();
var statearr_33957_34024 = state_33901__$1;
(statearr_33957_34024[(2)] = null);

(statearr_33957_34024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (11))){
var inst_33778 = (state_33901[(15)]);
var inst_33800 = (state_33901[(7)]);
var inst_33800__$1 = cljs.core.seq.call(null,inst_33778);
var state_33901__$1 = (function (){var statearr_33958 = state_33901;
(statearr_33958[(7)] = inst_33800__$1);

return statearr_33958;
})();
if(inst_33800__$1){
var statearr_33959_34025 = state_33901__$1;
(statearr_33959_34025[(1)] = (16));

} else {
var statearr_33960_34026 = state_33901__$1;
(statearr_33960_34026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (9))){
var inst_33830 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33961_34027 = state_33901__$1;
(statearr_33961_34027[(2)] = inst_33830);

(statearr_33961_34027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (5))){
var inst_33776 = cljs.core.deref.call(null,cs);
var inst_33777 = cljs.core.seq.call(null,inst_33776);
var inst_33778 = inst_33777;
var inst_33779 = null;
var inst_33780 = (0);
var inst_33781 = (0);
var state_33901__$1 = (function (){var statearr_33962 = state_33901;
(statearr_33962[(13)] = inst_33779);

(statearr_33962[(14)] = inst_33780);

(statearr_33962[(15)] = inst_33778);

(statearr_33962[(16)] = inst_33781);

return statearr_33962;
})();
var statearr_33963_34028 = state_33901__$1;
(statearr_33963_34028[(2)] = null);

(statearr_33963_34028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (14))){
var state_33901__$1 = state_33901;
var statearr_33964_34029 = state_33901__$1;
(statearr_33964_34029[(2)] = null);

(statearr_33964_34029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (45))){
var inst_33891 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33965_34030 = state_33901__$1;
(statearr_33965_34030[(2)] = inst_33891);

(statearr_33965_34030[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (26))){
var inst_33833 = (state_33901[(29)]);
var inst_33887 = (state_33901[(2)]);
var inst_33888 = cljs.core.seq.call(null,inst_33833);
var state_33901__$1 = (function (){var statearr_33966 = state_33901;
(statearr_33966[(31)] = inst_33887);

return statearr_33966;
})();
if(inst_33888){
var statearr_33967_34031 = state_33901__$1;
(statearr_33967_34031[(1)] = (42));

} else {
var statearr_33968_34032 = state_33901__$1;
(statearr_33968_34032[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (16))){
var inst_33800 = (state_33901[(7)]);
var inst_33802 = cljs.core.chunked_seq_QMARK_.call(null,inst_33800);
var state_33901__$1 = state_33901;
if(inst_33802){
var statearr_33969_34033 = state_33901__$1;
(statearr_33969_34033[(1)] = (19));

} else {
var statearr_33970_34034 = state_33901__$1;
(statearr_33970_34034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (38))){
var inst_33880 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33971_34035 = state_33901__$1;
(statearr_33971_34035[(2)] = inst_33880);

(statearr_33971_34035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (30))){
var state_33901__$1 = state_33901;
var statearr_33972_34036 = state_33901__$1;
(statearr_33972_34036[(2)] = null);

(statearr_33972_34036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (10))){
var inst_33779 = (state_33901[(13)]);
var inst_33781 = (state_33901[(16)]);
var inst_33789 = cljs.core._nth.call(null,inst_33779,inst_33781);
var inst_33790 = cljs.core.nth.call(null,inst_33789,(0),null);
var inst_33791 = cljs.core.nth.call(null,inst_33789,(1),null);
var state_33901__$1 = (function (){var statearr_33973 = state_33901;
(statearr_33973[(26)] = inst_33790);

return statearr_33973;
})();
if(cljs.core.truth_(inst_33791)){
var statearr_33974_34037 = state_33901__$1;
(statearr_33974_34037[(1)] = (13));

} else {
var statearr_33975_34038 = state_33901__$1;
(statearr_33975_34038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (18))){
var inst_33826 = (state_33901[(2)]);
var state_33901__$1 = state_33901;
var statearr_33976_34039 = state_33901__$1;
(statearr_33976_34039[(2)] = inst_33826);

(statearr_33976_34039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (42))){
var state_33901__$1 = state_33901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33901__$1,(45),dchan);
} else {
if((state_val_33902 === (37))){
var inst_33860 = (state_33901[(25)]);
var inst_33869 = (state_33901[(23)]);
var inst_33769 = (state_33901[(9)]);
var inst_33869__$1 = cljs.core.first.call(null,inst_33860);
var inst_33870 = cljs.core.async.put_BANG_.call(null,inst_33869__$1,inst_33769,done);
var state_33901__$1 = (function (){var statearr_33977 = state_33901;
(statearr_33977[(23)] = inst_33869__$1);

return statearr_33977;
})();
if(cljs.core.truth_(inst_33870)){
var statearr_33978_34040 = state_33901__$1;
(statearr_33978_34040[(1)] = (39));

} else {
var statearr_33979_34041 = state_33901__$1;
(statearr_33979_34041[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33902 === (8))){
var inst_33780 = (state_33901[(14)]);
var inst_33781 = (state_33901[(16)]);
var inst_33783 = (inst_33781 < inst_33780);
var inst_33784 = inst_33783;
var state_33901__$1 = state_33901;
if(cljs.core.truth_(inst_33784)){
var statearr_33980_34042 = state_33901__$1;
(statearr_33980_34042[(1)] = (10));

} else {
var statearr_33981_34043 = state_33901__$1;
(statearr_33981_34043[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___33989,cs,m,dchan,dctr,done))
;
return ((function (switch__32537__auto__,c__32651__auto___33989,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32538__auto__ = null;
var cljs$core$async$mult_$_state_machine__32538__auto____0 = (function (){
var statearr_33985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33985[(0)] = cljs$core$async$mult_$_state_machine__32538__auto__);

(statearr_33985[(1)] = (1));

return statearr_33985;
});
var cljs$core$async$mult_$_state_machine__32538__auto____1 = (function (state_33901){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_33901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e33986){if((e33986 instanceof Object)){
var ex__32541__auto__ = e33986;
var statearr_33987_34044 = state_33901;
(statearr_33987_34044[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_33901;
state_33901 = G__34045;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32538__auto__ = function(state_33901){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32538__auto____1.call(this,state_33901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32538__auto____0;
cljs$core$async$mult_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32538__auto____1;
return cljs$core$async$mult_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___33989,cs,m,dchan,dctr,done))
})();
var state__32653__auto__ = (function (){var statearr_33988 = f__32652__auto__.call(null);
(statearr_33988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___33989);

return statearr_33988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___33989,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34046 = [];
var len__30968__auto___34049 = arguments.length;
var i__30969__auto___34050 = (0);
while(true){
if((i__30969__auto___34050 < len__30968__auto___34049)){
args34046.push((arguments[i__30969__auto___34050]));

var G__34051 = (i__30969__auto___34050 + (1));
i__30969__auto___34050 = G__34051;
continue;
} else {
}
break;
}

var G__34048 = args34046.length;
switch (G__34048) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34046.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,ch);
} else {
var m__30466__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,ch);
} else {
var m__30466__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m);
} else {
var m__30466__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,state_map);
} else {
var m__30466__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30465__auto__ = (((m == null))?null:m);
var m__30466__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,m,mode);
} else {
var m__30466__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30975__auto__ = [];
var len__30968__auto___34063 = arguments.length;
var i__30969__auto___34064 = (0);
while(true){
if((i__30969__auto___34064 < len__30968__auto___34063)){
args__30975__auto__.push((arguments[i__30969__auto___34064]));

var G__34065 = (i__30969__auto___34064 + (1));
i__30969__auto___34064 = G__34065;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((3) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30976__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34057){
var map__34058 = p__34057;
var map__34058__$1 = ((((!((map__34058 == null)))?((((map__34058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34058):map__34058);
var opts = map__34058__$1;
var statearr_34060_34066 = state;
(statearr_34060_34066[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__34058,map__34058__$1,opts){
return (function (val){
var statearr_34061_34067 = state;
(statearr_34061_34067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34058,map__34058__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_34062_34068 = state;
(statearr_34062_34068[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34053){
var G__34054 = cljs.core.first.call(null,seq34053);
var seq34053__$1 = cljs.core.next.call(null,seq34053);
var G__34055 = cljs.core.first.call(null,seq34053__$1);
var seq34053__$2 = cljs.core.next.call(null,seq34053__$1);
var G__34056 = cljs.core.first.call(null,seq34053__$2);
var seq34053__$3 = cljs.core.next.call(null,seq34053__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34054,G__34055,G__34056,seq34053__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34236 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34237){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34237 = meta34237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34238,meta34237__$1){
var self__ = this;
var _34238__$1 = this;
return (new cljs.core.async.t_cljs$core$async34236(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34238){
var self__ = this;
var _34238__$1 = this;
return self__.meta34237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34237","meta34237",729631938,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34236";

cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34236(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34237){
return (new cljs.core.async.t_cljs$core$async34236(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34236(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32651__auto___34403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34340){
var state_val_34341 = (state_34340[(1)]);
if((state_val_34341 === (7))){
var inst_34255 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34342_34404 = state_34340__$1;
(statearr_34342_34404[(2)] = inst_34255);

(statearr_34342_34404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (20))){
var inst_34267 = (state_34340[(7)]);
var state_34340__$1 = state_34340;
var statearr_34343_34405 = state_34340__$1;
(statearr_34343_34405[(2)] = inst_34267);

(statearr_34343_34405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (27))){
var state_34340__$1 = state_34340;
var statearr_34344_34406 = state_34340__$1;
(statearr_34344_34406[(2)] = null);

(statearr_34344_34406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (1))){
var inst_34242 = (state_34340[(8)]);
var inst_34242__$1 = calc_state.call(null);
var inst_34244 = (inst_34242__$1 == null);
var inst_34245 = cljs.core.not.call(null,inst_34244);
var state_34340__$1 = (function (){var statearr_34345 = state_34340;
(statearr_34345[(8)] = inst_34242__$1);

return statearr_34345;
})();
if(inst_34245){
var statearr_34346_34407 = state_34340__$1;
(statearr_34346_34407[(1)] = (2));

} else {
var statearr_34347_34408 = state_34340__$1;
(statearr_34347_34408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (24))){
var inst_34291 = (state_34340[(9)]);
var inst_34314 = (state_34340[(10)]);
var inst_34300 = (state_34340[(11)]);
var inst_34314__$1 = inst_34291.call(null,inst_34300);
var state_34340__$1 = (function (){var statearr_34348 = state_34340;
(statearr_34348[(10)] = inst_34314__$1);

return statearr_34348;
})();
if(cljs.core.truth_(inst_34314__$1)){
var statearr_34349_34409 = state_34340__$1;
(statearr_34349_34409[(1)] = (29));

} else {
var statearr_34350_34410 = state_34340__$1;
(statearr_34350_34410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (4))){
var inst_34258 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34258)){
var statearr_34351_34411 = state_34340__$1;
(statearr_34351_34411[(1)] = (8));

} else {
var statearr_34352_34412 = state_34340__$1;
(statearr_34352_34412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (15))){
var inst_34285 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34285)){
var statearr_34353_34413 = state_34340__$1;
(statearr_34353_34413[(1)] = (19));

} else {
var statearr_34354_34414 = state_34340__$1;
(statearr_34354_34414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (21))){
var inst_34290 = (state_34340[(12)]);
var inst_34290__$1 = (state_34340[(2)]);
var inst_34291 = cljs.core.get.call(null,inst_34290__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34292 = cljs.core.get.call(null,inst_34290__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34293 = cljs.core.get.call(null,inst_34290__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34340__$1 = (function (){var statearr_34355 = state_34340;
(statearr_34355[(13)] = inst_34292);

(statearr_34355[(9)] = inst_34291);

(statearr_34355[(12)] = inst_34290__$1);

return statearr_34355;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34340__$1,(22),inst_34293);
} else {
if((state_val_34341 === (31))){
var inst_34322 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34322)){
var statearr_34356_34415 = state_34340__$1;
(statearr_34356_34415[(1)] = (32));

} else {
var statearr_34357_34416 = state_34340__$1;
(statearr_34357_34416[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (32))){
var inst_34299 = (state_34340[(14)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34340__$1,(35),out,inst_34299);
} else {
if((state_val_34341 === (33))){
var inst_34290 = (state_34340[(12)]);
var inst_34267 = inst_34290;
var state_34340__$1 = (function (){var statearr_34358 = state_34340;
(statearr_34358[(7)] = inst_34267);

return statearr_34358;
})();
var statearr_34359_34417 = state_34340__$1;
(statearr_34359_34417[(2)] = null);

(statearr_34359_34417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (13))){
var inst_34267 = (state_34340[(7)]);
var inst_34274 = inst_34267.cljs$lang$protocol_mask$partition0$;
var inst_34275 = (inst_34274 & (64));
var inst_34276 = inst_34267.cljs$core$ISeq$;
var inst_34277 = (cljs.core.PROTOCOL_SENTINEL === inst_34276);
var inst_34278 = (inst_34275) || (inst_34277);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34278)){
var statearr_34360_34418 = state_34340__$1;
(statearr_34360_34418[(1)] = (16));

} else {
var statearr_34361_34419 = state_34340__$1;
(statearr_34361_34419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (22))){
var inst_34299 = (state_34340[(14)]);
var inst_34300 = (state_34340[(11)]);
var inst_34298 = (state_34340[(2)]);
var inst_34299__$1 = cljs.core.nth.call(null,inst_34298,(0),null);
var inst_34300__$1 = cljs.core.nth.call(null,inst_34298,(1),null);
var inst_34301 = (inst_34299__$1 == null);
var inst_34302 = cljs.core._EQ_.call(null,inst_34300__$1,change);
var inst_34303 = (inst_34301) || (inst_34302);
var state_34340__$1 = (function (){var statearr_34362 = state_34340;
(statearr_34362[(14)] = inst_34299__$1);

(statearr_34362[(11)] = inst_34300__$1);

return statearr_34362;
})();
if(cljs.core.truth_(inst_34303)){
var statearr_34363_34420 = state_34340__$1;
(statearr_34363_34420[(1)] = (23));

} else {
var statearr_34364_34421 = state_34340__$1;
(statearr_34364_34421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (36))){
var inst_34290 = (state_34340[(12)]);
var inst_34267 = inst_34290;
var state_34340__$1 = (function (){var statearr_34365 = state_34340;
(statearr_34365[(7)] = inst_34267);

return statearr_34365;
})();
var statearr_34366_34422 = state_34340__$1;
(statearr_34366_34422[(2)] = null);

(statearr_34366_34422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (29))){
var inst_34314 = (state_34340[(10)]);
var state_34340__$1 = state_34340;
var statearr_34367_34423 = state_34340__$1;
(statearr_34367_34423[(2)] = inst_34314);

(statearr_34367_34423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (6))){
var state_34340__$1 = state_34340;
var statearr_34368_34424 = state_34340__$1;
(statearr_34368_34424[(2)] = false);

(statearr_34368_34424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (28))){
var inst_34310 = (state_34340[(2)]);
var inst_34311 = calc_state.call(null);
var inst_34267 = inst_34311;
var state_34340__$1 = (function (){var statearr_34369 = state_34340;
(statearr_34369[(15)] = inst_34310);

(statearr_34369[(7)] = inst_34267);

return statearr_34369;
})();
var statearr_34370_34425 = state_34340__$1;
(statearr_34370_34425[(2)] = null);

(statearr_34370_34425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (25))){
var inst_34336 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34371_34426 = state_34340__$1;
(statearr_34371_34426[(2)] = inst_34336);

(statearr_34371_34426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (34))){
var inst_34334 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34372_34427 = state_34340__$1;
(statearr_34372_34427[(2)] = inst_34334);

(statearr_34372_34427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (17))){
var state_34340__$1 = state_34340;
var statearr_34373_34428 = state_34340__$1;
(statearr_34373_34428[(2)] = false);

(statearr_34373_34428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (3))){
var state_34340__$1 = state_34340;
var statearr_34374_34429 = state_34340__$1;
(statearr_34374_34429[(2)] = false);

(statearr_34374_34429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (12))){
var inst_34338 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34340__$1,inst_34338);
} else {
if((state_val_34341 === (2))){
var inst_34242 = (state_34340[(8)]);
var inst_34247 = inst_34242.cljs$lang$protocol_mask$partition0$;
var inst_34248 = (inst_34247 & (64));
var inst_34249 = inst_34242.cljs$core$ISeq$;
var inst_34250 = (cljs.core.PROTOCOL_SENTINEL === inst_34249);
var inst_34251 = (inst_34248) || (inst_34250);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34251)){
var statearr_34375_34430 = state_34340__$1;
(statearr_34375_34430[(1)] = (5));

} else {
var statearr_34376_34431 = state_34340__$1;
(statearr_34376_34431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (23))){
var inst_34299 = (state_34340[(14)]);
var inst_34305 = (inst_34299 == null);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34305)){
var statearr_34377_34432 = state_34340__$1;
(statearr_34377_34432[(1)] = (26));

} else {
var statearr_34378_34433 = state_34340__$1;
(statearr_34378_34433[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (35))){
var inst_34325 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34325)){
var statearr_34379_34434 = state_34340__$1;
(statearr_34379_34434[(1)] = (36));

} else {
var statearr_34380_34435 = state_34340__$1;
(statearr_34380_34435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (19))){
var inst_34267 = (state_34340[(7)]);
var inst_34287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34267);
var state_34340__$1 = state_34340;
var statearr_34381_34436 = state_34340__$1;
(statearr_34381_34436[(2)] = inst_34287);

(statearr_34381_34436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (11))){
var inst_34267 = (state_34340[(7)]);
var inst_34271 = (inst_34267 == null);
var inst_34272 = cljs.core.not.call(null,inst_34271);
var state_34340__$1 = state_34340;
if(inst_34272){
var statearr_34382_34437 = state_34340__$1;
(statearr_34382_34437[(1)] = (13));

} else {
var statearr_34383_34438 = state_34340__$1;
(statearr_34383_34438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (9))){
var inst_34242 = (state_34340[(8)]);
var state_34340__$1 = state_34340;
var statearr_34384_34439 = state_34340__$1;
(statearr_34384_34439[(2)] = inst_34242);

(statearr_34384_34439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (5))){
var state_34340__$1 = state_34340;
var statearr_34385_34440 = state_34340__$1;
(statearr_34385_34440[(2)] = true);

(statearr_34385_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (14))){
var state_34340__$1 = state_34340;
var statearr_34386_34441 = state_34340__$1;
(statearr_34386_34441[(2)] = false);

(statearr_34386_34441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (26))){
var inst_34300 = (state_34340[(11)]);
var inst_34307 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34300);
var state_34340__$1 = state_34340;
var statearr_34387_34442 = state_34340__$1;
(statearr_34387_34442[(2)] = inst_34307);

(statearr_34387_34442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (16))){
var state_34340__$1 = state_34340;
var statearr_34388_34443 = state_34340__$1;
(statearr_34388_34443[(2)] = true);

(statearr_34388_34443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (38))){
var inst_34330 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34389_34444 = state_34340__$1;
(statearr_34389_34444[(2)] = inst_34330);

(statearr_34389_34444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (30))){
var inst_34292 = (state_34340[(13)]);
var inst_34291 = (state_34340[(9)]);
var inst_34300 = (state_34340[(11)]);
var inst_34317 = cljs.core.empty_QMARK_.call(null,inst_34291);
var inst_34318 = inst_34292.call(null,inst_34300);
var inst_34319 = cljs.core.not.call(null,inst_34318);
var inst_34320 = (inst_34317) && (inst_34319);
var state_34340__$1 = state_34340;
var statearr_34390_34445 = state_34340__$1;
(statearr_34390_34445[(2)] = inst_34320);

(statearr_34390_34445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (10))){
var inst_34242 = (state_34340[(8)]);
var inst_34263 = (state_34340[(2)]);
var inst_34264 = cljs.core.get.call(null,inst_34263,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34265 = cljs.core.get.call(null,inst_34263,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34266 = cljs.core.get.call(null,inst_34263,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34267 = inst_34242;
var state_34340__$1 = (function (){var statearr_34391 = state_34340;
(statearr_34391[(16)] = inst_34266);

(statearr_34391[(17)] = inst_34264);

(statearr_34391[(18)] = inst_34265);

(statearr_34391[(7)] = inst_34267);

return statearr_34391;
})();
var statearr_34392_34446 = state_34340__$1;
(statearr_34392_34446[(2)] = null);

(statearr_34392_34446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (18))){
var inst_34282 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34393_34447 = state_34340__$1;
(statearr_34393_34447[(2)] = inst_34282);

(statearr_34393_34447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (37))){
var state_34340__$1 = state_34340;
var statearr_34394_34448 = state_34340__$1;
(statearr_34394_34448[(2)] = null);

(statearr_34394_34448[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (8))){
var inst_34242 = (state_34340[(8)]);
var inst_34260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34242);
var state_34340__$1 = state_34340;
var statearr_34395_34449 = state_34340__$1;
(statearr_34395_34449[(2)] = inst_34260);

(statearr_34395_34449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32537__auto__,c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32538__auto__ = null;
var cljs$core$async$mix_$_state_machine__32538__auto____0 = (function (){
var statearr_34399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34399[(0)] = cljs$core$async$mix_$_state_machine__32538__auto__);

(statearr_34399[(1)] = (1));

return statearr_34399;
});
var cljs$core$async$mix_$_state_machine__32538__auto____1 = (function (state_34340){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34400){if((e34400 instanceof Object)){
var ex__32541__auto__ = e34400;
var statearr_34401_34450 = state_34340;
(statearr_34401_34450[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34451 = state_34340;
state_34340 = G__34451;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32538__auto__ = function(state_34340){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32538__auto____1.call(this,state_34340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32538__auto____0;
cljs$core$async$mix_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32538__auto____1;
return cljs$core$async$mix_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32653__auto__ = (function (){var statearr_34402 = f__32652__auto__.call(null);
(statearr_34402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34403);

return statearr_34402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30465__auto__ = (((p == null))?null:p);
var m__30466__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30466__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30465__auto__ = (((p == null))?null:p);
var m__30466__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,p,v,ch);
} else {
var m__30466__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34452 = [];
var len__30968__auto___34455 = arguments.length;
var i__30969__auto___34456 = (0);
while(true){
if((i__30969__auto___34456 < len__30968__auto___34455)){
args34452.push((arguments[i__30969__auto___34456]));

var G__34457 = (i__30969__auto___34456 + (1));
i__30969__auto___34456 = G__34457;
continue;
} else {
}
break;
}

var G__34454 = args34452.length;
switch (G__34454) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34452.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30465__auto__ = (((p == null))?null:p);
var m__30466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,p);
} else {
var m__30466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30465__auto__ = (((p == null))?null:p);
var m__30466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30465__auto__)]);
if(!((m__30466__auto__ == null))){
return m__30466__auto__.call(null,p,v);
} else {
var m__30466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30466__auto____$1 == null))){
return m__30466__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34460 = [];
var len__30968__auto___34585 = arguments.length;
var i__30969__auto___34586 = (0);
while(true){
if((i__30969__auto___34586 < len__30968__auto___34585)){
args34460.push((arguments[i__30969__auto___34586]));

var G__34587 = (i__30969__auto___34586 + (1));
i__30969__auto___34586 = G__34587;
continue;
} else {
}
break;
}

var G__34462 = args34460.length;
switch (G__34462) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34460.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29752__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29752__auto__,mults){
return (function (p1__34459_SHARP_){
if(cljs.core.truth_(p1__34459_SHARP_.call(null,topic))){
return p1__34459_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34459_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29752__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34463 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34464){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34464 = meta34464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34465,meta34464__$1){
var self__ = this;
var _34465__$1 = this;
return (new cljs.core.async.t_cljs$core$async34463(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34464__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34465){
var self__ = this;
var _34465__$1 = this;
return self__.meta34464;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34464","meta34464",24082378,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34463";

cljs.core.async.t_cljs$core$async34463.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34463");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34463 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34464){
return (new cljs.core.async.t_cljs$core$async34463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34464));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34463(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32651__auto___34589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34589,mults,ensure_mult,p){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34589,mults,ensure_mult,p){
return (function (state_34537){
var state_val_34538 = (state_34537[(1)]);
if((state_val_34538 === (7))){
var inst_34533 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34539_34590 = state_34537__$1;
(statearr_34539_34590[(2)] = inst_34533);

(statearr_34539_34590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (20))){
var state_34537__$1 = state_34537;
var statearr_34540_34591 = state_34537__$1;
(statearr_34540_34591[(2)] = null);

(statearr_34540_34591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (1))){
var state_34537__$1 = state_34537;
var statearr_34541_34592 = state_34537__$1;
(statearr_34541_34592[(2)] = null);

(statearr_34541_34592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (24))){
var inst_34516 = (state_34537[(7)]);
var inst_34525 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34516);
var state_34537__$1 = state_34537;
var statearr_34542_34593 = state_34537__$1;
(statearr_34542_34593[(2)] = inst_34525);

(statearr_34542_34593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (4))){
var inst_34468 = (state_34537[(8)]);
var inst_34468__$1 = (state_34537[(2)]);
var inst_34469 = (inst_34468__$1 == null);
var state_34537__$1 = (function (){var statearr_34543 = state_34537;
(statearr_34543[(8)] = inst_34468__$1);

return statearr_34543;
})();
if(cljs.core.truth_(inst_34469)){
var statearr_34544_34594 = state_34537__$1;
(statearr_34544_34594[(1)] = (5));

} else {
var statearr_34545_34595 = state_34537__$1;
(statearr_34545_34595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (15))){
var inst_34510 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34546_34596 = state_34537__$1;
(statearr_34546_34596[(2)] = inst_34510);

(statearr_34546_34596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (21))){
var inst_34530 = (state_34537[(2)]);
var state_34537__$1 = (function (){var statearr_34547 = state_34537;
(statearr_34547[(9)] = inst_34530);

return statearr_34547;
})();
var statearr_34548_34597 = state_34537__$1;
(statearr_34548_34597[(2)] = null);

(statearr_34548_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (13))){
var inst_34492 = (state_34537[(10)]);
var inst_34494 = cljs.core.chunked_seq_QMARK_.call(null,inst_34492);
var state_34537__$1 = state_34537;
if(inst_34494){
var statearr_34549_34598 = state_34537__$1;
(statearr_34549_34598[(1)] = (16));

} else {
var statearr_34550_34599 = state_34537__$1;
(statearr_34550_34599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (22))){
var inst_34522 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
if(cljs.core.truth_(inst_34522)){
var statearr_34551_34600 = state_34537__$1;
(statearr_34551_34600[(1)] = (23));

} else {
var statearr_34552_34601 = state_34537__$1;
(statearr_34552_34601[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (6))){
var inst_34468 = (state_34537[(8)]);
var inst_34516 = (state_34537[(7)]);
var inst_34518 = (state_34537[(11)]);
var inst_34516__$1 = topic_fn.call(null,inst_34468);
var inst_34517 = cljs.core.deref.call(null,mults);
var inst_34518__$1 = cljs.core.get.call(null,inst_34517,inst_34516__$1);
var state_34537__$1 = (function (){var statearr_34553 = state_34537;
(statearr_34553[(7)] = inst_34516__$1);

(statearr_34553[(11)] = inst_34518__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34518__$1)){
var statearr_34554_34602 = state_34537__$1;
(statearr_34554_34602[(1)] = (19));

} else {
var statearr_34555_34603 = state_34537__$1;
(statearr_34555_34603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (25))){
var inst_34527 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34556_34604 = state_34537__$1;
(statearr_34556_34604[(2)] = inst_34527);

(statearr_34556_34604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (17))){
var inst_34492 = (state_34537[(10)]);
var inst_34501 = cljs.core.first.call(null,inst_34492);
var inst_34502 = cljs.core.async.muxch_STAR_.call(null,inst_34501);
var inst_34503 = cljs.core.async.close_BANG_.call(null,inst_34502);
var inst_34504 = cljs.core.next.call(null,inst_34492);
var inst_34478 = inst_34504;
var inst_34479 = null;
var inst_34480 = (0);
var inst_34481 = (0);
var state_34537__$1 = (function (){var statearr_34557 = state_34537;
(statearr_34557[(12)] = inst_34503);

(statearr_34557[(13)] = inst_34478);

(statearr_34557[(14)] = inst_34479);

(statearr_34557[(15)] = inst_34481);

(statearr_34557[(16)] = inst_34480);

return statearr_34557;
})();
var statearr_34558_34605 = state_34537__$1;
(statearr_34558_34605[(2)] = null);

(statearr_34558_34605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (3))){
var inst_34535 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34537__$1,inst_34535);
} else {
if((state_val_34538 === (12))){
var inst_34512 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34559_34606 = state_34537__$1;
(statearr_34559_34606[(2)] = inst_34512);

(statearr_34559_34606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (2))){
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34537__$1,(4),ch);
} else {
if((state_val_34538 === (23))){
var state_34537__$1 = state_34537;
var statearr_34560_34607 = state_34537__$1;
(statearr_34560_34607[(2)] = null);

(statearr_34560_34607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (19))){
var inst_34468 = (state_34537[(8)]);
var inst_34518 = (state_34537[(11)]);
var inst_34520 = cljs.core.async.muxch_STAR_.call(null,inst_34518);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34537__$1,(22),inst_34520,inst_34468);
} else {
if((state_val_34538 === (11))){
var inst_34478 = (state_34537[(13)]);
var inst_34492 = (state_34537[(10)]);
var inst_34492__$1 = cljs.core.seq.call(null,inst_34478);
var state_34537__$1 = (function (){var statearr_34561 = state_34537;
(statearr_34561[(10)] = inst_34492__$1);

return statearr_34561;
})();
if(inst_34492__$1){
var statearr_34562_34608 = state_34537__$1;
(statearr_34562_34608[(1)] = (13));

} else {
var statearr_34563_34609 = state_34537__$1;
(statearr_34563_34609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (9))){
var inst_34514 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34564_34610 = state_34537__$1;
(statearr_34564_34610[(2)] = inst_34514);

(statearr_34564_34610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (5))){
var inst_34475 = cljs.core.deref.call(null,mults);
var inst_34476 = cljs.core.vals.call(null,inst_34475);
var inst_34477 = cljs.core.seq.call(null,inst_34476);
var inst_34478 = inst_34477;
var inst_34479 = null;
var inst_34480 = (0);
var inst_34481 = (0);
var state_34537__$1 = (function (){var statearr_34565 = state_34537;
(statearr_34565[(13)] = inst_34478);

(statearr_34565[(14)] = inst_34479);

(statearr_34565[(15)] = inst_34481);

(statearr_34565[(16)] = inst_34480);

return statearr_34565;
})();
var statearr_34566_34611 = state_34537__$1;
(statearr_34566_34611[(2)] = null);

(statearr_34566_34611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (14))){
var state_34537__$1 = state_34537;
var statearr_34570_34612 = state_34537__$1;
(statearr_34570_34612[(2)] = null);

(statearr_34570_34612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (16))){
var inst_34492 = (state_34537[(10)]);
var inst_34496 = cljs.core.chunk_first.call(null,inst_34492);
var inst_34497 = cljs.core.chunk_rest.call(null,inst_34492);
var inst_34498 = cljs.core.count.call(null,inst_34496);
var inst_34478 = inst_34497;
var inst_34479 = inst_34496;
var inst_34480 = inst_34498;
var inst_34481 = (0);
var state_34537__$1 = (function (){var statearr_34571 = state_34537;
(statearr_34571[(13)] = inst_34478);

(statearr_34571[(14)] = inst_34479);

(statearr_34571[(15)] = inst_34481);

(statearr_34571[(16)] = inst_34480);

return statearr_34571;
})();
var statearr_34572_34613 = state_34537__$1;
(statearr_34572_34613[(2)] = null);

(statearr_34572_34613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (10))){
var inst_34478 = (state_34537[(13)]);
var inst_34479 = (state_34537[(14)]);
var inst_34481 = (state_34537[(15)]);
var inst_34480 = (state_34537[(16)]);
var inst_34486 = cljs.core._nth.call(null,inst_34479,inst_34481);
var inst_34487 = cljs.core.async.muxch_STAR_.call(null,inst_34486);
var inst_34488 = cljs.core.async.close_BANG_.call(null,inst_34487);
var inst_34489 = (inst_34481 + (1));
var tmp34567 = inst_34478;
var tmp34568 = inst_34479;
var tmp34569 = inst_34480;
var inst_34478__$1 = tmp34567;
var inst_34479__$1 = tmp34568;
var inst_34480__$1 = tmp34569;
var inst_34481__$1 = inst_34489;
var state_34537__$1 = (function (){var statearr_34573 = state_34537;
(statearr_34573[(13)] = inst_34478__$1);

(statearr_34573[(17)] = inst_34488);

(statearr_34573[(14)] = inst_34479__$1);

(statearr_34573[(15)] = inst_34481__$1);

(statearr_34573[(16)] = inst_34480__$1);

return statearr_34573;
})();
var statearr_34574_34614 = state_34537__$1;
(statearr_34574_34614[(2)] = null);

(statearr_34574_34614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (18))){
var inst_34507 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34575_34615 = state_34537__$1;
(statearr_34575_34615[(2)] = inst_34507);

(statearr_34575_34615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (8))){
var inst_34481 = (state_34537[(15)]);
var inst_34480 = (state_34537[(16)]);
var inst_34483 = (inst_34481 < inst_34480);
var inst_34484 = inst_34483;
var state_34537__$1 = state_34537;
if(cljs.core.truth_(inst_34484)){
var statearr_34576_34616 = state_34537__$1;
(statearr_34576_34616[(1)] = (10));

} else {
var statearr_34577_34617 = state_34537__$1;
(statearr_34577_34617[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34589,mults,ensure_mult,p))
;
return ((function (switch__32537__auto__,c__32651__auto___34589,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_34581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34581[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_34581[(1)] = (1));

return statearr_34581;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_34537){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34582){if((e34582 instanceof Object)){
var ex__32541__auto__ = e34582;
var statearr_34583_34618 = state_34537;
(statearr_34583_34618[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34619 = state_34537;
state_34537 = G__34619;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_34537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_34537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34589,mults,ensure_mult,p))
})();
var state__32653__auto__ = (function (){var statearr_34584 = f__32652__auto__.call(null);
(statearr_34584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34589);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34589,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34620 = [];
var len__30968__auto___34623 = arguments.length;
var i__30969__auto___34624 = (0);
while(true){
if((i__30969__auto___34624 < len__30968__auto___34623)){
args34620.push((arguments[i__30969__auto___34624]));

var G__34625 = (i__30969__auto___34624 + (1));
i__30969__auto___34624 = G__34625;
continue;
} else {
}
break;
}

var G__34622 = args34620.length;
switch (G__34622) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34620.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34627 = [];
var len__30968__auto___34630 = arguments.length;
var i__30969__auto___34631 = (0);
while(true){
if((i__30969__auto___34631 < len__30968__auto___34630)){
args34627.push((arguments[i__30969__auto___34631]));

var G__34632 = (i__30969__auto___34631 + (1));
i__30969__auto___34631 = G__34632;
continue;
} else {
}
break;
}

var G__34629 = args34627.length;
switch (G__34629) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34627.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34634 = [];
var len__30968__auto___34705 = arguments.length;
var i__30969__auto___34706 = (0);
while(true){
if((i__30969__auto___34706 < len__30968__auto___34705)){
args34634.push((arguments[i__30969__auto___34706]));

var G__34707 = (i__30969__auto___34706 + (1));
i__30969__auto___34706 = G__34707;
continue;
} else {
}
break;
}

var G__34636 = args34634.length;
switch (G__34636) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34634.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32651__auto___34709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (7))){
var state_34675__$1 = state_34675;
var statearr_34677_34710 = state_34675__$1;
(statearr_34677_34710[(2)] = null);

(statearr_34677_34710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (1))){
var state_34675__$1 = state_34675;
var statearr_34678_34711 = state_34675__$1;
(statearr_34678_34711[(2)] = null);

(statearr_34678_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (4))){
var inst_34639 = (state_34675[(7)]);
var inst_34641 = (inst_34639 < cnt);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34641)){
var statearr_34679_34712 = state_34675__$1;
(statearr_34679_34712[(1)] = (6));

} else {
var statearr_34680_34713 = state_34675__$1;
(statearr_34680_34713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (15))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34681_34714 = state_34675__$1;
(statearr_34681_34714[(2)] = inst_34671);

(statearr_34681_34714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (13))){
var inst_34664 = cljs.core.async.close_BANG_.call(null,out);
var state_34675__$1 = state_34675;
var statearr_34682_34715 = state_34675__$1;
(statearr_34682_34715[(2)] = inst_34664);

(statearr_34682_34715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var state_34675__$1 = state_34675;
var statearr_34683_34716 = state_34675__$1;
(statearr_34683_34716[(2)] = null);

(statearr_34683_34716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (12))){
var inst_34661 = (state_34675[(8)]);
var inst_34661__$1 = (state_34675[(2)]);
var inst_34662 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34661__$1);
var state_34675__$1 = (function (){var statearr_34684 = state_34675;
(statearr_34684[(8)] = inst_34661__$1);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34685_34717 = state_34675__$1;
(statearr_34685_34717[(1)] = (13));

} else {
var statearr_34686_34718 = state_34675__$1;
(statearr_34686_34718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (2))){
var inst_34638 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34639 = (0);
var state_34675__$1 = (function (){var statearr_34687 = state_34675;
(statearr_34687[(7)] = inst_34639);

(statearr_34687[(9)] = inst_34638);

return statearr_34687;
})();
var statearr_34688_34719 = state_34675__$1;
(statearr_34688_34719[(2)] = null);

(statearr_34688_34719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (11))){
var inst_34639 = (state_34675[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34675,(10),Object,null,(9));
var inst_34648 = chs__$1.call(null,inst_34639);
var inst_34649 = done.call(null,inst_34639);
var inst_34650 = cljs.core.async.take_BANG_.call(null,inst_34648,inst_34649);
var state_34675__$1 = state_34675;
var statearr_34689_34720 = state_34675__$1;
(statearr_34689_34720[(2)] = inst_34650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (9))){
var inst_34639 = (state_34675[(7)]);
var inst_34652 = (state_34675[(2)]);
var inst_34653 = (inst_34639 + (1));
var inst_34639__$1 = inst_34653;
var state_34675__$1 = (function (){var statearr_34690 = state_34675;
(statearr_34690[(7)] = inst_34639__$1);

(statearr_34690[(10)] = inst_34652);

return statearr_34690;
})();
var statearr_34691_34721 = state_34675__$1;
(statearr_34691_34721[(2)] = null);

(statearr_34691_34721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (5))){
var inst_34659 = (state_34675[(2)]);
var state_34675__$1 = (function (){var statearr_34692 = state_34675;
(statearr_34692[(11)] = inst_34659);

return statearr_34692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34675__$1,(12),dchan);
} else {
if((state_val_34676 === (14))){
var inst_34661 = (state_34675[(8)]);
var inst_34666 = cljs.core.apply.call(null,f,inst_34661);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34675__$1,(16),out,inst_34666);
} else {
if((state_val_34676 === (16))){
var inst_34668 = (state_34675[(2)]);
var state_34675__$1 = (function (){var statearr_34693 = state_34675;
(statearr_34693[(12)] = inst_34668);

return statearr_34693;
})();
var statearr_34694_34722 = state_34675__$1;
(statearr_34694_34722[(2)] = null);

(statearr_34694_34722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (10))){
var inst_34643 = (state_34675[(2)]);
var inst_34644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34675__$1 = (function (){var statearr_34695 = state_34675;
(statearr_34695[(13)] = inst_34643);

return statearr_34695;
})();
var statearr_34696_34723 = state_34675__$1;
(statearr_34696_34723[(2)] = inst_34644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (8))){
var inst_34657 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34697_34724 = state_34675__$1;
(statearr_34697_34724[(2)] = inst_34657);

(statearr_34697_34724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32537__auto__,c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_34701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34701[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_34701[(1)] = (1));

return statearr_34701;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_34675){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34702){if((e34702 instanceof Object)){
var ex__32541__auto__ = e34702;
var statearr_34703_34725 = state_34675;
(statearr_34703_34725[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34675;
state_34675 = G__34726;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32653__auto__ = (function (){var statearr_34704 = f__32652__auto__.call(null);
(statearr_34704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34709);

return statearr_34704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34709,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34728 = [];
var len__30968__auto___34786 = arguments.length;
var i__30969__auto___34787 = (0);
while(true){
if((i__30969__auto___34787 < len__30968__auto___34786)){
args34728.push((arguments[i__30969__auto___34787]));

var G__34788 = (i__30969__auto___34787 + (1));
i__30969__auto___34787 = G__34788;
continue;
} else {
}
break;
}

var G__34730 = args34728.length;
switch (G__34730) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34728.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___34790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34790,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34790,out){
return (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (7))){
var inst_34741 = (state_34762[(7)]);
var inst_34742 = (state_34762[(8)]);
var inst_34741__$1 = (state_34762[(2)]);
var inst_34742__$1 = cljs.core.nth.call(null,inst_34741__$1,(0),null);
var inst_34743 = cljs.core.nth.call(null,inst_34741__$1,(1),null);
var inst_34744 = (inst_34742__$1 == null);
var state_34762__$1 = (function (){var statearr_34764 = state_34762;
(statearr_34764[(7)] = inst_34741__$1);

(statearr_34764[(8)] = inst_34742__$1);

(statearr_34764[(9)] = inst_34743);

return statearr_34764;
})();
if(cljs.core.truth_(inst_34744)){
var statearr_34765_34791 = state_34762__$1;
(statearr_34765_34791[(1)] = (8));

} else {
var statearr_34766_34792 = state_34762__$1;
(statearr_34766_34792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (1))){
var inst_34731 = cljs.core.vec.call(null,chs);
var inst_34732 = inst_34731;
var state_34762__$1 = (function (){var statearr_34767 = state_34762;
(statearr_34767[(10)] = inst_34732);

return statearr_34767;
})();
var statearr_34768_34793 = state_34762__$1;
(statearr_34768_34793[(2)] = null);

(statearr_34768_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (4))){
var inst_34732 = (state_34762[(10)]);
var state_34762__$1 = state_34762;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34762__$1,(7),inst_34732);
} else {
if((state_val_34763 === (6))){
var inst_34758 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34769_34794 = state_34762__$1;
(statearr_34769_34794[(2)] = inst_34758);

(statearr_34769_34794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (3))){
var inst_34760 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34762__$1,inst_34760);
} else {
if((state_val_34763 === (2))){
var inst_34732 = (state_34762[(10)]);
var inst_34734 = cljs.core.count.call(null,inst_34732);
var inst_34735 = (inst_34734 > (0));
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34735)){
var statearr_34771_34795 = state_34762__$1;
(statearr_34771_34795[(1)] = (4));

} else {
var statearr_34772_34796 = state_34762__$1;
(statearr_34772_34796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (11))){
var inst_34732 = (state_34762[(10)]);
var inst_34751 = (state_34762[(2)]);
var tmp34770 = inst_34732;
var inst_34732__$1 = tmp34770;
var state_34762__$1 = (function (){var statearr_34773 = state_34762;
(statearr_34773[(11)] = inst_34751);

(statearr_34773[(10)] = inst_34732__$1);

return statearr_34773;
})();
var statearr_34774_34797 = state_34762__$1;
(statearr_34774_34797[(2)] = null);

(statearr_34774_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (9))){
var inst_34742 = (state_34762[(8)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34762__$1,(11),out,inst_34742);
} else {
if((state_val_34763 === (5))){
var inst_34756 = cljs.core.async.close_BANG_.call(null,out);
var state_34762__$1 = state_34762;
var statearr_34775_34798 = state_34762__$1;
(statearr_34775_34798[(2)] = inst_34756);

(statearr_34775_34798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (10))){
var inst_34754 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34776_34799 = state_34762__$1;
(statearr_34776_34799[(2)] = inst_34754);

(statearr_34776_34799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (8))){
var inst_34741 = (state_34762[(7)]);
var inst_34742 = (state_34762[(8)]);
var inst_34743 = (state_34762[(9)]);
var inst_34732 = (state_34762[(10)]);
var inst_34746 = (function (){var cs = inst_34732;
var vec__34737 = inst_34741;
var v = inst_34742;
var c = inst_34743;
return ((function (cs,vec__34737,v,c,inst_34741,inst_34742,inst_34743,inst_34732,state_val_34763,c__32651__auto___34790,out){
return (function (p1__34727_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34727_SHARP_);
});
;})(cs,vec__34737,v,c,inst_34741,inst_34742,inst_34743,inst_34732,state_val_34763,c__32651__auto___34790,out))
})();
var inst_34747 = cljs.core.filterv.call(null,inst_34746,inst_34732);
var inst_34732__$1 = inst_34747;
var state_34762__$1 = (function (){var statearr_34777 = state_34762;
(statearr_34777[(10)] = inst_34732__$1);

return statearr_34777;
})();
var statearr_34778_34800 = state_34762__$1;
(statearr_34778_34800[(2)] = null);

(statearr_34778_34800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34790,out))
;
return ((function (switch__32537__auto__,c__32651__auto___34790,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_34782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34782[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_34782[(1)] = (1));

return statearr_34782;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_34762){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34783){if((e34783 instanceof Object)){
var ex__32541__auto__ = e34783;
var statearr_34784_34801 = state_34762;
(statearr_34784_34801[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34802 = state_34762;
state_34762 = G__34802;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34790,out))
})();
var state__32653__auto__ = (function (){var statearr_34785 = f__32652__auto__.call(null);
(statearr_34785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34790);

return statearr_34785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34790,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34803 = [];
var len__30968__auto___34852 = arguments.length;
var i__30969__auto___34853 = (0);
while(true){
if((i__30969__auto___34853 < len__30968__auto___34852)){
args34803.push((arguments[i__30969__auto___34853]));

var G__34854 = (i__30969__auto___34853 + (1));
i__30969__auto___34853 = G__34854;
continue;
} else {
}
break;
}

var G__34805 = args34803.length;
switch (G__34805) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34803.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___34856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34856,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34856,out){
return (function (state_34829){
var state_val_34830 = (state_34829[(1)]);
if((state_val_34830 === (7))){
var inst_34811 = (state_34829[(7)]);
var inst_34811__$1 = (state_34829[(2)]);
var inst_34812 = (inst_34811__$1 == null);
var inst_34813 = cljs.core.not.call(null,inst_34812);
var state_34829__$1 = (function (){var statearr_34831 = state_34829;
(statearr_34831[(7)] = inst_34811__$1);

return statearr_34831;
})();
if(inst_34813){
var statearr_34832_34857 = state_34829__$1;
(statearr_34832_34857[(1)] = (8));

} else {
var statearr_34833_34858 = state_34829__$1;
(statearr_34833_34858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (1))){
var inst_34806 = (0);
var state_34829__$1 = (function (){var statearr_34834 = state_34829;
(statearr_34834[(8)] = inst_34806);

return statearr_34834;
})();
var statearr_34835_34859 = state_34829__$1;
(statearr_34835_34859[(2)] = null);

(statearr_34835_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (4))){
var state_34829__$1 = state_34829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34829__$1,(7),ch);
} else {
if((state_val_34830 === (6))){
var inst_34824 = (state_34829[(2)]);
var state_34829__$1 = state_34829;
var statearr_34836_34860 = state_34829__$1;
(statearr_34836_34860[(2)] = inst_34824);

(statearr_34836_34860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (3))){
var inst_34826 = (state_34829[(2)]);
var inst_34827 = cljs.core.async.close_BANG_.call(null,out);
var state_34829__$1 = (function (){var statearr_34837 = state_34829;
(statearr_34837[(9)] = inst_34826);

return statearr_34837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34829__$1,inst_34827);
} else {
if((state_val_34830 === (2))){
var inst_34806 = (state_34829[(8)]);
var inst_34808 = (inst_34806 < n);
var state_34829__$1 = state_34829;
if(cljs.core.truth_(inst_34808)){
var statearr_34838_34861 = state_34829__$1;
(statearr_34838_34861[(1)] = (4));

} else {
var statearr_34839_34862 = state_34829__$1;
(statearr_34839_34862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (11))){
var inst_34806 = (state_34829[(8)]);
var inst_34816 = (state_34829[(2)]);
var inst_34817 = (inst_34806 + (1));
var inst_34806__$1 = inst_34817;
var state_34829__$1 = (function (){var statearr_34840 = state_34829;
(statearr_34840[(10)] = inst_34816);

(statearr_34840[(8)] = inst_34806__$1);

return statearr_34840;
})();
var statearr_34841_34863 = state_34829__$1;
(statearr_34841_34863[(2)] = null);

(statearr_34841_34863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (9))){
var state_34829__$1 = state_34829;
var statearr_34842_34864 = state_34829__$1;
(statearr_34842_34864[(2)] = null);

(statearr_34842_34864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (5))){
var state_34829__$1 = state_34829;
var statearr_34843_34865 = state_34829__$1;
(statearr_34843_34865[(2)] = null);

(statearr_34843_34865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (10))){
var inst_34821 = (state_34829[(2)]);
var state_34829__$1 = state_34829;
var statearr_34844_34866 = state_34829__$1;
(statearr_34844_34866[(2)] = inst_34821);

(statearr_34844_34866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34830 === (8))){
var inst_34811 = (state_34829[(7)]);
var state_34829__$1 = state_34829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34829__$1,(11),out,inst_34811);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34856,out))
;
return ((function (switch__32537__auto__,c__32651__auto___34856,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_34848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34848[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_34848[(1)] = (1));

return statearr_34848;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_34829){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34849){if((e34849 instanceof Object)){
var ex__32541__auto__ = e34849;
var statearr_34850_34867 = state_34829;
(statearr_34850_34867[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34868 = state_34829;
state_34829 = G__34868;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_34829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_34829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34856,out))
})();
var state__32653__auto__ = (function (){var statearr_34851 = f__32652__auto__.call(null);
(statearr_34851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34856);

return statearr_34851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34856,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34876 = (function (f,ch,meta34877){
this.f = f;
this.ch = ch;
this.meta34877 = meta34877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34878,meta34877__$1){
var self__ = this;
var _34878__$1 = this;
return (new cljs.core.async.t_cljs$core$async34876(self__.f,self__.ch,meta34877__$1));
});

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34878){
var self__ = this;
var _34878__$1 = this;
return self__.meta34877;
});

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34879 = (function (f,ch,meta34877,_,fn1,meta34880){
this.f = f;
this.ch = ch;
this.meta34877 = meta34877;
this._ = _;
this.fn1 = fn1;
this.meta34880 = meta34880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34881,meta34880__$1){
var self__ = this;
var _34881__$1 = this;
return (new cljs.core.async.t_cljs$core$async34879(self__.f,self__.ch,self__.meta34877,self__._,self__.fn1,meta34880__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34881){
var self__ = this;
var _34881__$1 = this;
return self__.meta34880;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34869_SHARP_){
return f1.call(null,(((p1__34869_SHARP_ == null))?null:self__.f.call(null,p1__34869_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34877","meta34877",1983283533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34876","cljs.core.async/t_cljs$core$async34876",1999544334,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34880","meta34880",97906322,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34879";

cljs.core.async.t_cljs$core$async34879.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34879");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34879 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34879(f__$1,ch__$1,meta34877__$1,___$2,fn1__$1,meta34880){
return (new cljs.core.async.t_cljs$core$async34879(f__$1,ch__$1,meta34877__$1,___$2,fn1__$1,meta34880));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34879(self__.f,self__.ch,self__.meta34877,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29740__auto__ = ret;
if(cljs.core.truth_(and__29740__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29740__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34877","meta34877",1983283533,null)], null);
});

cljs.core.async.t_cljs$core$async34876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34876";

cljs.core.async.t_cljs$core$async34876.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34876");
});

cljs.core.async.__GT_t_cljs$core$async34876 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34876(f__$1,ch__$1,meta34877){
return (new cljs.core.async.t_cljs$core$async34876(f__$1,ch__$1,meta34877));
});

}

return (new cljs.core.async.t_cljs$core$async34876(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34885 = (function (f,ch,meta34886){
this.f = f;
this.ch = ch;
this.meta34886 = meta34886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34887,meta34886__$1){
var self__ = this;
var _34887__$1 = this;
return (new cljs.core.async.t_cljs$core$async34885(self__.f,self__.ch,meta34886__$1));
});

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34887){
var self__ = this;
var _34887__$1 = this;
return self__.meta34886;
});

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34886","meta34886",970477317,null)], null);
});

cljs.core.async.t_cljs$core$async34885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34885";

cljs.core.async.t_cljs$core$async34885.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34885");
});

cljs.core.async.__GT_t_cljs$core$async34885 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34885(f__$1,ch__$1,meta34886){
return (new cljs.core.async.t_cljs$core$async34885(f__$1,ch__$1,meta34886));
});

}

return (new cljs.core.async.t_cljs$core$async34885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34891 = (function (p,ch,meta34892){
this.p = p;
this.ch = ch;
this.meta34892 = meta34892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34893,meta34892__$1){
var self__ = this;
var _34893__$1 = this;
return (new cljs.core.async.t_cljs$core$async34891(self__.p,self__.ch,meta34892__$1));
});

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34893){
var self__ = this;
var _34893__$1 = this;
return self__.meta34892;
});

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34892","meta34892",-217237774,null)], null);
});

cljs.core.async.t_cljs$core$async34891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34891";

cljs.core.async.t_cljs$core$async34891.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.core.async/t_cljs$core$async34891");
});

cljs.core.async.__GT_t_cljs$core$async34891 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34891(p__$1,ch__$1,meta34892){
return (new cljs.core.async.t_cljs$core$async34891(p__$1,ch__$1,meta34892));
});

}

return (new cljs.core.async.t_cljs$core$async34891(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34894 = [];
var len__30968__auto___34938 = arguments.length;
var i__30969__auto___34939 = (0);
while(true){
if((i__30969__auto___34939 < len__30968__auto___34938)){
args34894.push((arguments[i__30969__auto___34939]));

var G__34940 = (i__30969__auto___34939 + (1));
i__30969__auto___34939 = G__34940;
continue;
} else {
}
break;
}

var G__34896 = args34894.length;
switch (G__34896) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34894.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___34942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___34942,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___34942,out){
return (function (state_34917){
var state_val_34918 = (state_34917[(1)]);
if((state_val_34918 === (7))){
var inst_34913 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34919_34943 = state_34917__$1;
(statearr_34919_34943[(2)] = inst_34913);

(statearr_34919_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (1))){
var state_34917__$1 = state_34917;
var statearr_34920_34944 = state_34917__$1;
(statearr_34920_34944[(2)] = null);

(statearr_34920_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (4))){
var inst_34899 = (state_34917[(7)]);
var inst_34899__$1 = (state_34917[(2)]);
var inst_34900 = (inst_34899__$1 == null);
var state_34917__$1 = (function (){var statearr_34921 = state_34917;
(statearr_34921[(7)] = inst_34899__$1);

return statearr_34921;
})();
if(cljs.core.truth_(inst_34900)){
var statearr_34922_34945 = state_34917__$1;
(statearr_34922_34945[(1)] = (5));

} else {
var statearr_34923_34946 = state_34917__$1;
(statearr_34923_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (6))){
var inst_34899 = (state_34917[(7)]);
var inst_34904 = p.call(null,inst_34899);
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34904)){
var statearr_34924_34947 = state_34917__$1;
(statearr_34924_34947[(1)] = (8));

} else {
var statearr_34925_34948 = state_34917__$1;
(statearr_34925_34948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (3))){
var inst_34915 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34917__$1,inst_34915);
} else {
if((state_val_34918 === (2))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34917__$1,(4),ch);
} else {
if((state_val_34918 === (11))){
var inst_34907 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34926_34949 = state_34917__$1;
(statearr_34926_34949[(2)] = inst_34907);

(statearr_34926_34949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (9))){
var state_34917__$1 = state_34917;
var statearr_34927_34950 = state_34917__$1;
(statearr_34927_34950[(2)] = null);

(statearr_34927_34950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (5))){
var inst_34902 = cljs.core.async.close_BANG_.call(null,out);
var state_34917__$1 = state_34917;
var statearr_34928_34951 = state_34917__$1;
(statearr_34928_34951[(2)] = inst_34902);

(statearr_34928_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (10))){
var inst_34910 = (state_34917[(2)]);
var state_34917__$1 = (function (){var statearr_34929 = state_34917;
(statearr_34929[(8)] = inst_34910);

return statearr_34929;
})();
var statearr_34930_34952 = state_34917__$1;
(statearr_34930_34952[(2)] = null);

(statearr_34930_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (8))){
var inst_34899 = (state_34917[(7)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34917__$1,(11),out,inst_34899);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___34942,out))
;
return ((function (switch__32537__auto__,c__32651__auto___34942,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_34934 = [null,null,null,null,null,null,null,null,null];
(statearr_34934[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_34934[(1)] = (1));

return statearr_34934;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_34917){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_34917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e34935){if((e34935 instanceof Object)){
var ex__32541__auto__ = e34935;
var statearr_34936_34953 = state_34917;
(statearr_34936_34953[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_34917;
state_34917 = G__34954;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_34917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_34917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___34942,out))
})();
var state__32653__auto__ = (function (){var statearr_34937 = f__32652__auto__.call(null);
(statearr_34937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___34942);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___34942,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34955 = [];
var len__30968__auto___34958 = arguments.length;
var i__30969__auto___34959 = (0);
while(true){
if((i__30969__auto___34959 < len__30968__auto___34958)){
args34955.push((arguments[i__30969__auto___34959]));

var G__34960 = (i__30969__auto___34959 + (1));
i__30969__auto___34959 = G__34960;
continue;
} else {
}
break;
}

var G__34957 = args34955.length;
switch (G__34957) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34955.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__){
return (function (state_35127){
var state_val_35128 = (state_35127[(1)]);
if((state_val_35128 === (7))){
var inst_35123 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35129_35170 = state_35127__$1;
(statearr_35129_35170[(2)] = inst_35123);

(statearr_35129_35170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (20))){
var inst_35093 = (state_35127[(7)]);
var inst_35104 = (state_35127[(2)]);
var inst_35105 = cljs.core.next.call(null,inst_35093);
var inst_35079 = inst_35105;
var inst_35080 = null;
var inst_35081 = (0);
var inst_35082 = (0);
var state_35127__$1 = (function (){var statearr_35130 = state_35127;
(statearr_35130[(8)] = inst_35104);

(statearr_35130[(9)] = inst_35080);

(statearr_35130[(10)] = inst_35079);

(statearr_35130[(11)] = inst_35081);

(statearr_35130[(12)] = inst_35082);

return statearr_35130;
})();
var statearr_35131_35171 = state_35127__$1;
(statearr_35131_35171[(2)] = null);

(statearr_35131_35171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (1))){
var state_35127__$1 = state_35127;
var statearr_35132_35172 = state_35127__$1;
(statearr_35132_35172[(2)] = null);

(statearr_35132_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (4))){
var inst_35068 = (state_35127[(13)]);
var inst_35068__$1 = (state_35127[(2)]);
var inst_35069 = (inst_35068__$1 == null);
var state_35127__$1 = (function (){var statearr_35133 = state_35127;
(statearr_35133[(13)] = inst_35068__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35069)){
var statearr_35134_35173 = state_35127__$1;
(statearr_35134_35173[(1)] = (5));

} else {
var statearr_35135_35174 = state_35127__$1;
(statearr_35135_35174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (15))){
var state_35127__$1 = state_35127;
var statearr_35139_35175 = state_35127__$1;
(statearr_35139_35175[(2)] = null);

(statearr_35139_35175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (21))){
var state_35127__$1 = state_35127;
var statearr_35140_35176 = state_35127__$1;
(statearr_35140_35176[(2)] = null);

(statearr_35140_35176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (13))){
var inst_35080 = (state_35127[(9)]);
var inst_35079 = (state_35127[(10)]);
var inst_35081 = (state_35127[(11)]);
var inst_35082 = (state_35127[(12)]);
var inst_35089 = (state_35127[(2)]);
var inst_35090 = (inst_35082 + (1));
var tmp35136 = inst_35080;
var tmp35137 = inst_35079;
var tmp35138 = inst_35081;
var inst_35079__$1 = tmp35137;
var inst_35080__$1 = tmp35136;
var inst_35081__$1 = tmp35138;
var inst_35082__$1 = inst_35090;
var state_35127__$1 = (function (){var statearr_35141 = state_35127;
(statearr_35141[(9)] = inst_35080__$1);

(statearr_35141[(10)] = inst_35079__$1);

(statearr_35141[(11)] = inst_35081__$1);

(statearr_35141[(14)] = inst_35089);

(statearr_35141[(12)] = inst_35082__$1);

return statearr_35141;
})();
var statearr_35142_35177 = state_35127__$1;
(statearr_35142_35177[(2)] = null);

(statearr_35142_35177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (22))){
var state_35127__$1 = state_35127;
var statearr_35143_35178 = state_35127__$1;
(statearr_35143_35178[(2)] = null);

(statearr_35143_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (6))){
var inst_35068 = (state_35127[(13)]);
var inst_35077 = f.call(null,inst_35068);
var inst_35078 = cljs.core.seq.call(null,inst_35077);
var inst_35079 = inst_35078;
var inst_35080 = null;
var inst_35081 = (0);
var inst_35082 = (0);
var state_35127__$1 = (function (){var statearr_35144 = state_35127;
(statearr_35144[(9)] = inst_35080);

(statearr_35144[(10)] = inst_35079);

(statearr_35144[(11)] = inst_35081);

(statearr_35144[(12)] = inst_35082);

return statearr_35144;
})();
var statearr_35145_35179 = state_35127__$1;
(statearr_35145_35179[(2)] = null);

(statearr_35145_35179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (17))){
var inst_35093 = (state_35127[(7)]);
var inst_35097 = cljs.core.chunk_first.call(null,inst_35093);
var inst_35098 = cljs.core.chunk_rest.call(null,inst_35093);
var inst_35099 = cljs.core.count.call(null,inst_35097);
var inst_35079 = inst_35098;
var inst_35080 = inst_35097;
var inst_35081 = inst_35099;
var inst_35082 = (0);
var state_35127__$1 = (function (){var statearr_35146 = state_35127;
(statearr_35146[(9)] = inst_35080);

(statearr_35146[(10)] = inst_35079);

(statearr_35146[(11)] = inst_35081);

(statearr_35146[(12)] = inst_35082);

return statearr_35146;
})();
var statearr_35147_35180 = state_35127__$1;
(statearr_35147_35180[(2)] = null);

(statearr_35147_35180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (3))){
var inst_35125 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35127__$1,inst_35125);
} else {
if((state_val_35128 === (12))){
var inst_35113 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35148_35181 = state_35127__$1;
(statearr_35148_35181[(2)] = inst_35113);

(statearr_35148_35181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (2))){
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35127__$1,(4),in$);
} else {
if((state_val_35128 === (23))){
var inst_35121 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35149_35182 = state_35127__$1;
(statearr_35149_35182[(2)] = inst_35121);

(statearr_35149_35182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (19))){
var inst_35108 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35150_35183 = state_35127__$1;
(statearr_35150_35183[(2)] = inst_35108);

(statearr_35150_35183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (11))){
var inst_35093 = (state_35127[(7)]);
var inst_35079 = (state_35127[(10)]);
var inst_35093__$1 = cljs.core.seq.call(null,inst_35079);
var state_35127__$1 = (function (){var statearr_35151 = state_35127;
(statearr_35151[(7)] = inst_35093__$1);

return statearr_35151;
})();
if(inst_35093__$1){
var statearr_35152_35184 = state_35127__$1;
(statearr_35152_35184[(1)] = (14));

} else {
var statearr_35153_35185 = state_35127__$1;
(statearr_35153_35185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (9))){
var inst_35115 = (state_35127[(2)]);
var inst_35116 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35127__$1 = (function (){var statearr_35154 = state_35127;
(statearr_35154[(15)] = inst_35115);

return statearr_35154;
})();
if(cljs.core.truth_(inst_35116)){
var statearr_35155_35186 = state_35127__$1;
(statearr_35155_35186[(1)] = (21));

} else {
var statearr_35156_35187 = state_35127__$1;
(statearr_35156_35187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (5))){
var inst_35071 = cljs.core.async.close_BANG_.call(null,out);
var state_35127__$1 = state_35127;
var statearr_35157_35188 = state_35127__$1;
(statearr_35157_35188[(2)] = inst_35071);

(statearr_35157_35188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (14))){
var inst_35093 = (state_35127[(7)]);
var inst_35095 = cljs.core.chunked_seq_QMARK_.call(null,inst_35093);
var state_35127__$1 = state_35127;
if(inst_35095){
var statearr_35158_35189 = state_35127__$1;
(statearr_35158_35189[(1)] = (17));

} else {
var statearr_35159_35190 = state_35127__$1;
(statearr_35159_35190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (16))){
var inst_35111 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35160_35191 = state_35127__$1;
(statearr_35160_35191[(2)] = inst_35111);

(statearr_35160_35191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (10))){
var inst_35080 = (state_35127[(9)]);
var inst_35082 = (state_35127[(12)]);
var inst_35087 = cljs.core._nth.call(null,inst_35080,inst_35082);
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35127__$1,(13),out,inst_35087);
} else {
if((state_val_35128 === (18))){
var inst_35093 = (state_35127[(7)]);
var inst_35102 = cljs.core.first.call(null,inst_35093);
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35127__$1,(20),out,inst_35102);
} else {
if((state_val_35128 === (8))){
var inst_35081 = (state_35127[(11)]);
var inst_35082 = (state_35127[(12)]);
var inst_35084 = (inst_35082 < inst_35081);
var inst_35085 = inst_35084;
var state_35127__$1 = state_35127;
if(cljs.core.truth_(inst_35085)){
var statearr_35161_35192 = state_35127__$1;
(statearr_35161_35192[(1)] = (10));

} else {
var statearr_35162_35193 = state_35127__$1;
(statearr_35162_35193[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____0 = (function (){
var statearr_35166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35166[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__);

(statearr_35166[(1)] = (1));

return statearr_35166;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____1 = (function (state_35127){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35167){if((e35167 instanceof Object)){
var ex__32541__auto__ = e35167;
var statearr_35168_35194 = state_35127;
(statearr_35168_35194[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35195 = state_35127;
state_35127 = G__35195;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__ = function(state_35127){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____1.call(this,state_35127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32538__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__))
})();
var state__32653__auto__ = (function (){var statearr_35169 = f__32652__auto__.call(null);
(statearr_35169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__))
);

return c__32651__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35196 = [];
var len__30968__auto___35199 = arguments.length;
var i__30969__auto___35200 = (0);
while(true){
if((i__30969__auto___35200 < len__30968__auto___35199)){
args35196.push((arguments[i__30969__auto___35200]));

var G__35201 = (i__30969__auto___35200 + (1));
i__30969__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var G__35198 = args35196.length;
switch (G__35198) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35196.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35203 = [];
var len__30968__auto___35206 = arguments.length;
var i__30969__auto___35207 = (0);
while(true){
if((i__30969__auto___35207 < len__30968__auto___35206)){
args35203.push((arguments[i__30969__auto___35207]));

var G__35208 = (i__30969__auto___35207 + (1));
i__30969__auto___35207 = G__35208;
continue;
} else {
}
break;
}

var G__35205 = args35203.length;
switch (G__35205) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35203.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35210 = [];
var len__30968__auto___35261 = arguments.length;
var i__30969__auto___35262 = (0);
while(true){
if((i__30969__auto___35262 < len__30968__auto___35261)){
args35210.push((arguments[i__30969__auto___35262]));

var G__35263 = (i__30969__auto___35262 + (1));
i__30969__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var G__35212 = args35210.length;
switch (G__35212) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35210.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___35265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___35265,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___35265,out){
return (function (state_35236){
var state_val_35237 = (state_35236[(1)]);
if((state_val_35237 === (7))){
var inst_35231 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
var statearr_35238_35266 = state_35236__$1;
(statearr_35238_35266[(2)] = inst_35231);

(statearr_35238_35266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (1))){
var inst_35213 = null;
var state_35236__$1 = (function (){var statearr_35239 = state_35236;
(statearr_35239[(7)] = inst_35213);

return statearr_35239;
})();
var statearr_35240_35267 = state_35236__$1;
(statearr_35240_35267[(2)] = null);

(statearr_35240_35267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (4))){
var inst_35216 = (state_35236[(8)]);
var inst_35216__$1 = (state_35236[(2)]);
var inst_35217 = (inst_35216__$1 == null);
var inst_35218 = cljs.core.not.call(null,inst_35217);
var state_35236__$1 = (function (){var statearr_35241 = state_35236;
(statearr_35241[(8)] = inst_35216__$1);

return statearr_35241;
})();
if(inst_35218){
var statearr_35242_35268 = state_35236__$1;
(statearr_35242_35268[(1)] = (5));

} else {
var statearr_35243_35269 = state_35236__$1;
(statearr_35243_35269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (6))){
var state_35236__$1 = state_35236;
var statearr_35244_35270 = state_35236__$1;
(statearr_35244_35270[(2)] = null);

(statearr_35244_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (3))){
var inst_35233 = (state_35236[(2)]);
var inst_35234 = cljs.core.async.close_BANG_.call(null,out);
var state_35236__$1 = (function (){var statearr_35245 = state_35236;
(statearr_35245[(9)] = inst_35233);

return statearr_35245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35236__$1,inst_35234);
} else {
if((state_val_35237 === (2))){
var state_35236__$1 = state_35236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35236__$1,(4),ch);
} else {
if((state_val_35237 === (11))){
var inst_35216 = (state_35236[(8)]);
var inst_35225 = (state_35236[(2)]);
var inst_35213 = inst_35216;
var state_35236__$1 = (function (){var statearr_35246 = state_35236;
(statearr_35246[(7)] = inst_35213);

(statearr_35246[(10)] = inst_35225);

return statearr_35246;
})();
var statearr_35247_35271 = state_35236__$1;
(statearr_35247_35271[(2)] = null);

(statearr_35247_35271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (9))){
var inst_35216 = (state_35236[(8)]);
var state_35236__$1 = state_35236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35236__$1,(11),out,inst_35216);
} else {
if((state_val_35237 === (5))){
var inst_35213 = (state_35236[(7)]);
var inst_35216 = (state_35236[(8)]);
var inst_35220 = cljs.core._EQ_.call(null,inst_35216,inst_35213);
var state_35236__$1 = state_35236;
if(inst_35220){
var statearr_35249_35272 = state_35236__$1;
(statearr_35249_35272[(1)] = (8));

} else {
var statearr_35250_35273 = state_35236__$1;
(statearr_35250_35273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (10))){
var inst_35228 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
var statearr_35251_35274 = state_35236__$1;
(statearr_35251_35274[(2)] = inst_35228);

(statearr_35251_35274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (8))){
var inst_35213 = (state_35236[(7)]);
var tmp35248 = inst_35213;
var inst_35213__$1 = tmp35248;
var state_35236__$1 = (function (){var statearr_35252 = state_35236;
(statearr_35252[(7)] = inst_35213__$1);

return statearr_35252;
})();
var statearr_35253_35275 = state_35236__$1;
(statearr_35253_35275[(2)] = null);

(statearr_35253_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___35265,out))
;
return ((function (switch__32537__auto__,c__32651__auto___35265,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_35257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35257[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_35257[(1)] = (1));

return statearr_35257;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_35236){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35258){if((e35258 instanceof Object)){
var ex__32541__auto__ = e35258;
var statearr_35259_35276 = state_35236;
(statearr_35259_35276[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35277 = state_35236;
state_35236 = G__35277;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_35236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_35236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___35265,out))
})();
var state__32653__auto__ = (function (){var statearr_35260 = f__32652__auto__.call(null);
(statearr_35260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___35265);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___35265,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35278 = [];
var len__30968__auto___35348 = arguments.length;
var i__30969__auto___35349 = (0);
while(true){
if((i__30969__auto___35349 < len__30968__auto___35348)){
args35278.push((arguments[i__30969__auto___35349]));

var G__35350 = (i__30969__auto___35349 + (1));
i__30969__auto___35349 = G__35350;
continue;
} else {
}
break;
}

var G__35280 = args35278.length;
switch (G__35280) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35278.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___35352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___35352,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___35352,out){
return (function (state_35318){
var state_val_35319 = (state_35318[(1)]);
if((state_val_35319 === (7))){
var inst_35314 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35320_35353 = state_35318__$1;
(statearr_35320_35353[(2)] = inst_35314);

(statearr_35320_35353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (1))){
var inst_35281 = (new Array(n));
var inst_35282 = inst_35281;
var inst_35283 = (0);
var state_35318__$1 = (function (){var statearr_35321 = state_35318;
(statearr_35321[(7)] = inst_35282);

(statearr_35321[(8)] = inst_35283);

return statearr_35321;
})();
var statearr_35322_35354 = state_35318__$1;
(statearr_35322_35354[(2)] = null);

(statearr_35322_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (4))){
var inst_35286 = (state_35318[(9)]);
var inst_35286__$1 = (state_35318[(2)]);
var inst_35287 = (inst_35286__$1 == null);
var inst_35288 = cljs.core.not.call(null,inst_35287);
var state_35318__$1 = (function (){var statearr_35323 = state_35318;
(statearr_35323[(9)] = inst_35286__$1);

return statearr_35323;
})();
if(inst_35288){
var statearr_35324_35355 = state_35318__$1;
(statearr_35324_35355[(1)] = (5));

} else {
var statearr_35325_35356 = state_35318__$1;
(statearr_35325_35356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (15))){
var inst_35308 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35326_35357 = state_35318__$1;
(statearr_35326_35357[(2)] = inst_35308);

(statearr_35326_35357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (13))){
var state_35318__$1 = state_35318;
var statearr_35327_35358 = state_35318__$1;
(statearr_35327_35358[(2)] = null);

(statearr_35327_35358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (6))){
var inst_35283 = (state_35318[(8)]);
var inst_35304 = (inst_35283 > (0));
var state_35318__$1 = state_35318;
if(cljs.core.truth_(inst_35304)){
var statearr_35328_35359 = state_35318__$1;
(statearr_35328_35359[(1)] = (12));

} else {
var statearr_35329_35360 = state_35318__$1;
(statearr_35329_35360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (3))){
var inst_35316 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35318__$1,inst_35316);
} else {
if((state_val_35319 === (12))){
var inst_35282 = (state_35318[(7)]);
var inst_35306 = cljs.core.vec.call(null,inst_35282);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35318__$1,(15),out,inst_35306);
} else {
if((state_val_35319 === (2))){
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35318__$1,(4),ch);
} else {
if((state_val_35319 === (11))){
var inst_35298 = (state_35318[(2)]);
var inst_35299 = (new Array(n));
var inst_35282 = inst_35299;
var inst_35283 = (0);
var state_35318__$1 = (function (){var statearr_35330 = state_35318;
(statearr_35330[(10)] = inst_35298);

(statearr_35330[(7)] = inst_35282);

(statearr_35330[(8)] = inst_35283);

return statearr_35330;
})();
var statearr_35331_35361 = state_35318__$1;
(statearr_35331_35361[(2)] = null);

(statearr_35331_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (9))){
var inst_35282 = (state_35318[(7)]);
var inst_35296 = cljs.core.vec.call(null,inst_35282);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35318__$1,(11),out,inst_35296);
} else {
if((state_val_35319 === (5))){
var inst_35286 = (state_35318[(9)]);
var inst_35282 = (state_35318[(7)]);
var inst_35291 = (state_35318[(11)]);
var inst_35283 = (state_35318[(8)]);
var inst_35290 = (inst_35282[inst_35283] = inst_35286);
var inst_35291__$1 = (inst_35283 + (1));
var inst_35292 = (inst_35291__$1 < n);
var state_35318__$1 = (function (){var statearr_35332 = state_35318;
(statearr_35332[(12)] = inst_35290);

(statearr_35332[(11)] = inst_35291__$1);

return statearr_35332;
})();
if(cljs.core.truth_(inst_35292)){
var statearr_35333_35362 = state_35318__$1;
(statearr_35333_35362[(1)] = (8));

} else {
var statearr_35334_35363 = state_35318__$1;
(statearr_35334_35363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (14))){
var inst_35311 = (state_35318[(2)]);
var inst_35312 = cljs.core.async.close_BANG_.call(null,out);
var state_35318__$1 = (function (){var statearr_35336 = state_35318;
(statearr_35336[(13)] = inst_35311);

return statearr_35336;
})();
var statearr_35337_35364 = state_35318__$1;
(statearr_35337_35364[(2)] = inst_35312);

(statearr_35337_35364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (10))){
var inst_35302 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35338_35365 = state_35318__$1;
(statearr_35338_35365[(2)] = inst_35302);

(statearr_35338_35365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (8))){
var inst_35282 = (state_35318[(7)]);
var inst_35291 = (state_35318[(11)]);
var tmp35335 = inst_35282;
var inst_35282__$1 = tmp35335;
var inst_35283 = inst_35291;
var state_35318__$1 = (function (){var statearr_35339 = state_35318;
(statearr_35339[(7)] = inst_35282__$1);

(statearr_35339[(8)] = inst_35283);

return statearr_35339;
})();
var statearr_35340_35366 = state_35318__$1;
(statearr_35340_35366[(2)] = null);

(statearr_35340_35366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___35352,out))
;
return ((function (switch__32537__auto__,c__32651__auto___35352,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_35344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35344[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_35344[(1)] = (1));

return statearr_35344;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_35318){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35345){if((e35345 instanceof Object)){
var ex__32541__auto__ = e35345;
var statearr_35346_35367 = state_35318;
(statearr_35346_35367[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_35318;
state_35318 = G__35368;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_35318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_35318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___35352,out))
})();
var state__32653__auto__ = (function (){var statearr_35347 = f__32652__auto__.call(null);
(statearr_35347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___35352);

return statearr_35347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___35352,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35369 = [];
var len__30968__auto___35443 = arguments.length;
var i__30969__auto___35444 = (0);
while(true){
if((i__30969__auto___35444 < len__30968__auto___35443)){
args35369.push((arguments[i__30969__auto___35444]));

var G__35445 = (i__30969__auto___35444 + (1));
i__30969__auto___35444 = G__35445;
continue;
} else {
}
break;
}

var G__35371 = args35369.length;
switch (G__35371) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35369.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32651__auto___35447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___35447,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___35447,out){
return (function (state_35413){
var state_val_35414 = (state_35413[(1)]);
if((state_val_35414 === (7))){
var inst_35409 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35415_35448 = state_35413__$1;
(statearr_35415_35448[(2)] = inst_35409);

(statearr_35415_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (1))){
var inst_35372 = [];
var inst_35373 = inst_35372;
var inst_35374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35413__$1 = (function (){var statearr_35416 = state_35413;
(statearr_35416[(7)] = inst_35374);

(statearr_35416[(8)] = inst_35373);

return statearr_35416;
})();
var statearr_35417_35449 = state_35413__$1;
(statearr_35417_35449[(2)] = null);

(statearr_35417_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (4))){
var inst_35377 = (state_35413[(9)]);
var inst_35377__$1 = (state_35413[(2)]);
var inst_35378 = (inst_35377__$1 == null);
var inst_35379 = cljs.core.not.call(null,inst_35378);
var state_35413__$1 = (function (){var statearr_35418 = state_35413;
(statearr_35418[(9)] = inst_35377__$1);

return statearr_35418;
})();
if(inst_35379){
var statearr_35419_35450 = state_35413__$1;
(statearr_35419_35450[(1)] = (5));

} else {
var statearr_35420_35451 = state_35413__$1;
(statearr_35420_35451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (15))){
var inst_35403 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35421_35452 = state_35413__$1;
(statearr_35421_35452[(2)] = inst_35403);

(statearr_35421_35452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (13))){
var state_35413__$1 = state_35413;
var statearr_35422_35453 = state_35413__$1;
(statearr_35422_35453[(2)] = null);

(statearr_35422_35453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (6))){
var inst_35373 = (state_35413[(8)]);
var inst_35398 = inst_35373.length;
var inst_35399 = (inst_35398 > (0));
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35399)){
var statearr_35423_35454 = state_35413__$1;
(statearr_35423_35454[(1)] = (12));

} else {
var statearr_35424_35455 = state_35413__$1;
(statearr_35424_35455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (3))){
var inst_35411 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35413__$1,inst_35411);
} else {
if((state_val_35414 === (12))){
var inst_35373 = (state_35413[(8)]);
var inst_35401 = cljs.core.vec.call(null,inst_35373);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35413__$1,(15),out,inst_35401);
} else {
if((state_val_35414 === (2))){
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(4),ch);
} else {
if((state_val_35414 === (11))){
var inst_35381 = (state_35413[(10)]);
var inst_35377 = (state_35413[(9)]);
var inst_35391 = (state_35413[(2)]);
var inst_35392 = [];
var inst_35393 = inst_35392.push(inst_35377);
var inst_35373 = inst_35392;
var inst_35374 = inst_35381;
var state_35413__$1 = (function (){var statearr_35425 = state_35413;
(statearr_35425[(11)] = inst_35391);

(statearr_35425[(7)] = inst_35374);

(statearr_35425[(8)] = inst_35373);

(statearr_35425[(12)] = inst_35393);

return statearr_35425;
})();
var statearr_35426_35456 = state_35413__$1;
(statearr_35426_35456[(2)] = null);

(statearr_35426_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (9))){
var inst_35373 = (state_35413[(8)]);
var inst_35389 = cljs.core.vec.call(null,inst_35373);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35413__$1,(11),out,inst_35389);
} else {
if((state_val_35414 === (5))){
var inst_35381 = (state_35413[(10)]);
var inst_35374 = (state_35413[(7)]);
var inst_35377 = (state_35413[(9)]);
var inst_35381__$1 = f.call(null,inst_35377);
var inst_35382 = cljs.core._EQ_.call(null,inst_35381__$1,inst_35374);
var inst_35383 = cljs.core.keyword_identical_QMARK_.call(null,inst_35374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35384 = (inst_35382) || (inst_35383);
var state_35413__$1 = (function (){var statearr_35427 = state_35413;
(statearr_35427[(10)] = inst_35381__$1);

return statearr_35427;
})();
if(cljs.core.truth_(inst_35384)){
var statearr_35428_35457 = state_35413__$1;
(statearr_35428_35457[(1)] = (8));

} else {
var statearr_35429_35458 = state_35413__$1;
(statearr_35429_35458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (14))){
var inst_35406 = (state_35413[(2)]);
var inst_35407 = cljs.core.async.close_BANG_.call(null,out);
var state_35413__$1 = (function (){var statearr_35431 = state_35413;
(statearr_35431[(13)] = inst_35406);

return statearr_35431;
})();
var statearr_35432_35459 = state_35413__$1;
(statearr_35432_35459[(2)] = inst_35407);

(statearr_35432_35459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (10))){
var inst_35396 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35433_35460 = state_35413__$1;
(statearr_35433_35460[(2)] = inst_35396);

(statearr_35433_35460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (8))){
var inst_35381 = (state_35413[(10)]);
var inst_35373 = (state_35413[(8)]);
var inst_35377 = (state_35413[(9)]);
var inst_35386 = inst_35373.push(inst_35377);
var tmp35430 = inst_35373;
var inst_35373__$1 = tmp35430;
var inst_35374 = inst_35381;
var state_35413__$1 = (function (){var statearr_35434 = state_35413;
(statearr_35434[(7)] = inst_35374);

(statearr_35434[(8)] = inst_35373__$1);

(statearr_35434[(14)] = inst_35386);

return statearr_35434;
})();
var statearr_35435_35461 = state_35413__$1;
(statearr_35435_35461[(2)] = null);

(statearr_35435_35461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32651__auto___35447,out))
;
return ((function (switch__32537__auto__,c__32651__auto___35447,out){
return (function() {
var cljs$core$async$state_machine__32538__auto__ = null;
var cljs$core$async$state_machine__32538__auto____0 = (function (){
var statearr_35439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35439[(0)] = cljs$core$async$state_machine__32538__auto__);

(statearr_35439[(1)] = (1));

return statearr_35439;
});
var cljs$core$async$state_machine__32538__auto____1 = (function (state_35413){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35440){if((e35440 instanceof Object)){
var ex__32541__auto__ = e35440;
var statearr_35441_35462 = state_35413;
(statearr_35441_35462[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35463 = state_35413;
state_35413 = G__35463;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
cljs$core$async$state_machine__32538__auto__ = function(state_35413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32538__auto____1.call(this,state_35413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32538__auto____0;
cljs$core$async$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32538__auto____1;
return cljs$core$async$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___35447,out))
})();
var state__32653__auto__ = (function (){var statearr_35442 = f__32652__auto__.call(null);
(statearr_35442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___35447);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___35447,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1483561369248