// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__30404__auto__,writer__30405__auto__,opt__30406__auto__){
return cljs.core._write.call(null,writer__30405__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36683 = arguments.length;
var i__30969__auto___36684 = (0);
while(true){
if((i__30969__auto___36684 < len__30968__auto___36683)){
args__30975__auto__.push((arguments[i__30969__auto___36684]));

var G__36685 = (i__30969__auto___36684 + (1));
i__30969__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36682){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36682));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36687 = arguments.length;
var i__30969__auto___36688 = (0);
while(true){
if((i__30969__auto___36688 < len__30968__auto___36687)){
args__30975__auto__.push((arguments[i__30969__auto___36688]));

var G__36689 = (i__30969__auto___36688 + (1));
i__30969__auto___36688 = G__36689;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36686){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36686));
});

var g_QMARK__36690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36691 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36690){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36690))
,null));
var mkg_36692 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36690,g_36691){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36690,g_36691))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36690,g_36691,mkg_36692){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36690).call(null,x);
});})(g_QMARK__36690,g_36691,mkg_36692))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36690,g_36691,mkg_36692){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36692).call(null,gfn);
});})(g_QMARK__36690,g_36691,mkg_36692))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36690,g_36691,mkg_36692){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36691).call(null,generator);
});})(g_QMARK__36690,g_36691,mkg_36692))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36654__auto___36711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__36654__auto___36711){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36712 = arguments.length;
var i__30969__auto___36713 = (0);
while(true){
if((i__30969__auto___36713 < len__30968__auto___36712)){
args__30975__auto__.push((arguments[i__30969__auto___36713]));

var G__36714 = (i__30969__auto___36713 + (1));
i__30969__auto___36713 = G__36714;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36711))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36711),args);
});})(g__36654__auto___36711))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__36654__auto___36711){
return (function (seq36693){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36693));
});})(g__36654__auto___36711))
;


var g__36654__auto___36715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__36654__auto___36715){
return (function cljs$spec$impl$gen$list(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36716 = arguments.length;
var i__30969__auto___36717 = (0);
while(true){
if((i__30969__auto___36717 < len__30968__auto___36716)){
args__30975__auto__.push((arguments[i__30969__auto___36717]));

var G__36718 = (i__30969__auto___36717 + (1));
i__30969__auto___36717 = G__36718;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36715))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36715),args);
});})(g__36654__auto___36715))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__36654__auto___36715){
return (function (seq36694){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36694));
});})(g__36654__auto___36715))
;


var g__36654__auto___36719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__36654__auto___36719){
return (function cljs$spec$impl$gen$map(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36720 = arguments.length;
var i__30969__auto___36721 = (0);
while(true){
if((i__30969__auto___36721 < len__30968__auto___36720)){
args__30975__auto__.push((arguments[i__30969__auto___36721]));

var G__36722 = (i__30969__auto___36721 + (1));
i__30969__auto___36721 = G__36722;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36719))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36719),args);
});})(g__36654__auto___36719))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__36654__auto___36719){
return (function (seq36695){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36695));
});})(g__36654__auto___36719))
;


var g__36654__auto___36723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__36654__auto___36723){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36724 = arguments.length;
var i__30969__auto___36725 = (0);
while(true){
if((i__30969__auto___36725 < len__30968__auto___36724)){
args__30975__auto__.push((arguments[i__30969__auto___36725]));

var G__36726 = (i__30969__auto___36725 + (1));
i__30969__auto___36725 = G__36726;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36723))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36723),args);
});})(g__36654__auto___36723))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__36654__auto___36723){
return (function (seq36696){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36696));
});})(g__36654__auto___36723))
;


var g__36654__auto___36727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__36654__auto___36727){
return (function cljs$spec$impl$gen$set(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36728 = arguments.length;
var i__30969__auto___36729 = (0);
while(true){
if((i__30969__auto___36729 < len__30968__auto___36728)){
args__30975__auto__.push((arguments[i__30969__auto___36729]));

var G__36730 = (i__30969__auto___36729 + (1));
i__30969__auto___36729 = G__36730;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36727))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36727),args);
});})(g__36654__auto___36727))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__36654__auto___36727){
return (function (seq36697){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36697));
});})(g__36654__auto___36727))
;


var g__36654__auto___36731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__36654__auto___36731){
return (function cljs$spec$impl$gen$vector(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36732 = arguments.length;
var i__30969__auto___36733 = (0);
while(true){
if((i__30969__auto___36733 < len__30968__auto___36732)){
args__30975__auto__.push((arguments[i__30969__auto___36733]));

var G__36734 = (i__30969__auto___36733 + (1));
i__30969__auto___36733 = G__36734;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36731))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36731),args);
});})(g__36654__auto___36731))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__36654__auto___36731){
return (function (seq36698){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36698));
});})(g__36654__auto___36731))
;


var g__36654__auto___36735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__36654__auto___36735){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36736 = arguments.length;
var i__30969__auto___36737 = (0);
while(true){
if((i__30969__auto___36737 < len__30968__auto___36736)){
args__30975__auto__.push((arguments[i__30969__auto___36737]));

var G__36738 = (i__30969__auto___36737 + (1));
i__30969__auto___36737 = G__36738;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36735))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36735),args);
});})(g__36654__auto___36735))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__36654__auto___36735){
return (function (seq36699){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36699));
});})(g__36654__auto___36735))
;


var g__36654__auto___36739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__36654__auto___36739){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36740 = arguments.length;
var i__30969__auto___36741 = (0);
while(true){
if((i__30969__auto___36741 < len__30968__auto___36740)){
args__30975__auto__.push((arguments[i__30969__auto___36741]));

var G__36742 = (i__30969__auto___36741 + (1));
i__30969__auto___36741 = G__36742;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36739))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36739),args);
});})(g__36654__auto___36739))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__36654__auto___36739){
return (function (seq36700){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36700));
});})(g__36654__auto___36739))
;


var g__36654__auto___36743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__36654__auto___36743){
return (function cljs$spec$impl$gen$elements(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36744 = arguments.length;
var i__30969__auto___36745 = (0);
while(true){
if((i__30969__auto___36745 < len__30968__auto___36744)){
args__30975__auto__.push((arguments[i__30969__auto___36745]));

var G__36746 = (i__30969__auto___36745 + (1));
i__30969__auto___36745 = G__36746;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36743))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36743),args);
});})(g__36654__auto___36743))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__36654__auto___36743){
return (function (seq36701){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36701));
});})(g__36654__auto___36743))
;


var g__36654__auto___36747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__36654__auto___36747){
return (function cljs$spec$impl$gen$bind(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36748 = arguments.length;
var i__30969__auto___36749 = (0);
while(true){
if((i__30969__auto___36749 < len__30968__auto___36748)){
args__30975__auto__.push((arguments[i__30969__auto___36749]));

var G__36750 = (i__30969__auto___36749 + (1));
i__30969__auto___36749 = G__36750;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36747))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36747){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36747),args);
});})(g__36654__auto___36747))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__36654__auto___36747){
return (function (seq36702){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36702));
});})(g__36654__auto___36747))
;


var g__36654__auto___36751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__36654__auto___36751){
return (function cljs$spec$impl$gen$choose(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36752 = arguments.length;
var i__30969__auto___36753 = (0);
while(true){
if((i__30969__auto___36753 < len__30968__auto___36752)){
args__30975__auto__.push((arguments[i__30969__auto___36753]));

var G__36754 = (i__30969__auto___36753 + (1));
i__30969__auto___36753 = G__36754;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36751))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36751){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36751),args);
});})(g__36654__auto___36751))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__36654__auto___36751){
return (function (seq36703){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36703));
});})(g__36654__auto___36751))
;


var g__36654__auto___36755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__36654__auto___36755){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36756 = arguments.length;
var i__30969__auto___36757 = (0);
while(true){
if((i__30969__auto___36757 < len__30968__auto___36756)){
args__30975__auto__.push((arguments[i__30969__auto___36757]));

var G__36758 = (i__30969__auto___36757 + (1));
i__30969__auto___36757 = G__36758;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36755))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36755){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36755),args);
});})(g__36654__auto___36755))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__36654__auto___36755){
return (function (seq36704){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36704));
});})(g__36654__auto___36755))
;


var g__36654__auto___36759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__36654__auto___36759){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36760 = arguments.length;
var i__30969__auto___36761 = (0);
while(true){
if((i__30969__auto___36761 < len__30968__auto___36760)){
args__30975__auto__.push((arguments[i__30969__auto___36761]));

var G__36762 = (i__30969__auto___36761 + (1));
i__30969__auto___36761 = G__36762;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36759))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36759){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36759),args);
});})(g__36654__auto___36759))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__36654__auto___36759){
return (function (seq36705){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36705));
});})(g__36654__auto___36759))
;


var g__36654__auto___36763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__36654__auto___36763){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36764 = arguments.length;
var i__30969__auto___36765 = (0);
while(true){
if((i__30969__auto___36765 < len__30968__auto___36764)){
args__30975__auto__.push((arguments[i__30969__auto___36765]));

var G__36766 = (i__30969__auto___36765 + (1));
i__30969__auto___36765 = G__36766;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36763))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36763){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36763),args);
});})(g__36654__auto___36763))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__36654__auto___36763){
return (function (seq36706){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36706));
});})(g__36654__auto___36763))
;


var g__36654__auto___36767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__36654__auto___36767){
return (function cljs$spec$impl$gen$sample(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36768 = arguments.length;
var i__30969__auto___36769 = (0);
while(true){
if((i__30969__auto___36769 < len__30968__auto___36768)){
args__30975__auto__.push((arguments[i__30969__auto___36769]));

var G__36770 = (i__30969__auto___36769 + (1));
i__30969__auto___36769 = G__36770;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36767))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36767){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36767),args);
});})(g__36654__auto___36767))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__36654__auto___36767){
return (function (seq36707){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36707));
});})(g__36654__auto___36767))
;


var g__36654__auto___36771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__36654__auto___36771){
return (function cljs$spec$impl$gen$return(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36772 = arguments.length;
var i__30969__auto___36773 = (0);
while(true){
if((i__30969__auto___36773 < len__30968__auto___36772)){
args__30975__auto__.push((arguments[i__30969__auto___36773]));

var G__36774 = (i__30969__auto___36773 + (1));
i__30969__auto___36773 = G__36774;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36771))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36771),args);
});})(g__36654__auto___36771))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__36654__auto___36771){
return (function (seq36708){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36708));
});})(g__36654__auto___36771))
;


var g__36654__auto___36775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__36654__auto___36775){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36776 = arguments.length;
var i__30969__auto___36777 = (0);
while(true){
if((i__30969__auto___36777 < len__30968__auto___36776)){
args__30975__auto__.push((arguments[i__30969__auto___36777]));

var G__36778 = (i__30969__auto___36777 + (1));
i__30969__auto___36777 = G__36778;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36775))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36775),args);
});})(g__36654__auto___36775))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36654__auto___36775){
return (function (seq36709){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36709));
});})(g__36654__auto___36775))
;


var g__36654__auto___36779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__36654__auto___36779){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36780 = arguments.length;
var i__30969__auto___36781 = (0);
while(true){
if((i__30969__auto___36781 < len__30968__auto___36780)){
args__30975__auto__.push((arguments[i__30969__auto___36781]));

var G__36782 = (i__30969__auto___36781 + (1));
i__30969__auto___36781 = G__36782;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36654__auto___36779))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36654__auto___36779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36654__auto___36779),args);
});})(g__36654__auto___36779))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__36654__auto___36779){
return (function (seq36710){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36710));
});})(g__36654__auto___36779))
;

var g__36667__auto___36804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__36667__auto___36804){
return (function cljs$spec$impl$gen$any(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36805 = arguments.length;
var i__30969__auto___36806 = (0);
while(true){
if((i__30969__auto___36806 < len__30968__auto___36805)){
args__30975__auto__.push((arguments[i__30969__auto___36806]));

var G__36807 = (i__30969__auto___36806 + (1));
i__30969__auto___36806 = G__36807;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36804))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36804){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36804);
});})(g__36667__auto___36804))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__36667__auto___36804){
return (function (seq36783){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36783));
});})(g__36667__auto___36804))
;


var g__36667__auto___36808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__36667__auto___36808){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36809 = arguments.length;
var i__30969__auto___36810 = (0);
while(true){
if((i__30969__auto___36810 < len__30968__auto___36809)){
args__30975__auto__.push((arguments[i__30969__auto___36810]));

var G__36811 = (i__30969__auto___36810 + (1));
i__30969__auto___36810 = G__36811;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36808))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36808){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36808);
});})(g__36667__auto___36808))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__36667__auto___36808){
return (function (seq36784){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36784));
});})(g__36667__auto___36808))
;


var g__36667__auto___36812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__36667__auto___36812){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36813 = arguments.length;
var i__30969__auto___36814 = (0);
while(true){
if((i__30969__auto___36814 < len__30968__auto___36813)){
args__30975__auto__.push((arguments[i__30969__auto___36814]));

var G__36815 = (i__30969__auto___36814 + (1));
i__30969__auto___36814 = G__36815;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36812))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36812){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36812);
});})(g__36667__auto___36812))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__36667__auto___36812){
return (function (seq36785){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36785));
});})(g__36667__auto___36812))
;


var g__36667__auto___36816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__36667__auto___36816){
return (function cljs$spec$impl$gen$char(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36817 = arguments.length;
var i__30969__auto___36818 = (0);
while(true){
if((i__30969__auto___36818 < len__30968__auto___36817)){
args__30975__auto__.push((arguments[i__30969__auto___36818]));

var G__36819 = (i__30969__auto___36818 + (1));
i__30969__auto___36818 = G__36819;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36816))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36816){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36816);
});})(g__36667__auto___36816))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__36667__auto___36816){
return (function (seq36786){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36786));
});})(g__36667__auto___36816))
;


var g__36667__auto___36820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__36667__auto___36820){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36821 = arguments.length;
var i__30969__auto___36822 = (0);
while(true){
if((i__30969__auto___36822 < len__30968__auto___36821)){
args__30975__auto__.push((arguments[i__30969__auto___36822]));

var G__36823 = (i__30969__auto___36822 + (1));
i__30969__auto___36822 = G__36823;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36820))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36820){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36820);
});})(g__36667__auto___36820))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__36667__auto___36820){
return (function (seq36787){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36787));
});})(g__36667__auto___36820))
;


var g__36667__auto___36824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__36667__auto___36824){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36825 = arguments.length;
var i__30969__auto___36826 = (0);
while(true){
if((i__30969__auto___36826 < len__30968__auto___36825)){
args__30975__auto__.push((arguments[i__30969__auto___36826]));

var G__36827 = (i__30969__auto___36826 + (1));
i__30969__auto___36826 = G__36827;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36824))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36824){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36824);
});})(g__36667__auto___36824))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__36667__auto___36824){
return (function (seq36788){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36788));
});})(g__36667__auto___36824))
;


var g__36667__auto___36828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__36667__auto___36828){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36829 = arguments.length;
var i__30969__auto___36830 = (0);
while(true){
if((i__30969__auto___36830 < len__30968__auto___36829)){
args__30975__auto__.push((arguments[i__30969__auto___36830]));

var G__36831 = (i__30969__auto___36830 + (1));
i__30969__auto___36830 = G__36831;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36828))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36828){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36828);
});})(g__36667__auto___36828))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__36667__auto___36828){
return (function (seq36789){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36789));
});})(g__36667__auto___36828))
;


var g__36667__auto___36832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__36667__auto___36832){
return (function cljs$spec$impl$gen$double(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36833 = arguments.length;
var i__30969__auto___36834 = (0);
while(true){
if((i__30969__auto___36834 < len__30968__auto___36833)){
args__30975__auto__.push((arguments[i__30969__auto___36834]));

var G__36835 = (i__30969__auto___36834 + (1));
i__30969__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36832))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36832){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36832);
});})(g__36667__auto___36832))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__36667__auto___36832){
return (function (seq36790){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36790));
});})(g__36667__auto___36832))
;


var g__36667__auto___36836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__36667__auto___36836){
return (function cljs$spec$impl$gen$int(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36837 = arguments.length;
var i__30969__auto___36838 = (0);
while(true){
if((i__30969__auto___36838 < len__30968__auto___36837)){
args__30975__auto__.push((arguments[i__30969__auto___36838]));

var G__36839 = (i__30969__auto___36838 + (1));
i__30969__auto___36838 = G__36839;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36836))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36836){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36836);
});})(g__36667__auto___36836))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__36667__auto___36836){
return (function (seq36791){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36791));
});})(g__36667__auto___36836))
;


var g__36667__auto___36840 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__36667__auto___36840){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36841 = arguments.length;
var i__30969__auto___36842 = (0);
while(true){
if((i__30969__auto___36842 < len__30968__auto___36841)){
args__30975__auto__.push((arguments[i__30969__auto___36842]));

var G__36843 = (i__30969__auto___36842 + (1));
i__30969__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36840))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36840){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36840);
});})(g__36667__auto___36840))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__36667__auto___36840){
return (function (seq36792){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36792));
});})(g__36667__auto___36840))
;


var g__36667__auto___36844 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__36667__auto___36844){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36845 = arguments.length;
var i__30969__auto___36846 = (0);
while(true){
if((i__30969__auto___36846 < len__30968__auto___36845)){
args__30975__auto__.push((arguments[i__30969__auto___36846]));

var G__36847 = (i__30969__auto___36846 + (1));
i__30969__auto___36846 = G__36847;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36844))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36844){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36844);
});})(g__36667__auto___36844))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__36667__auto___36844){
return (function (seq36793){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36793));
});})(g__36667__auto___36844))
;


var g__36667__auto___36848 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__36667__auto___36848){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36849 = arguments.length;
var i__30969__auto___36850 = (0);
while(true){
if((i__30969__auto___36850 < len__30968__auto___36849)){
args__30975__auto__.push((arguments[i__30969__auto___36850]));

var G__36851 = (i__30969__auto___36850 + (1));
i__30969__auto___36850 = G__36851;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36848))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36848){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36848);
});})(g__36667__auto___36848))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__36667__auto___36848){
return (function (seq36794){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36794));
});})(g__36667__auto___36848))
;


var g__36667__auto___36852 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__36667__auto___36852){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36853 = arguments.length;
var i__30969__auto___36854 = (0);
while(true){
if((i__30969__auto___36854 < len__30968__auto___36853)){
args__30975__auto__.push((arguments[i__30969__auto___36854]));

var G__36855 = (i__30969__auto___36854 + (1));
i__30969__auto___36854 = G__36855;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36852))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36852){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36852);
});})(g__36667__auto___36852))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__36667__auto___36852){
return (function (seq36795){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36795));
});})(g__36667__auto___36852))
;


var g__36667__auto___36856 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__36667__auto___36856){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36857 = arguments.length;
var i__30969__auto___36858 = (0);
while(true){
if((i__30969__auto___36858 < len__30968__auto___36857)){
args__30975__auto__.push((arguments[i__30969__auto___36858]));

var G__36859 = (i__30969__auto___36858 + (1));
i__30969__auto___36858 = G__36859;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36856))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36856){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36856);
});})(g__36667__auto___36856))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__36667__auto___36856){
return (function (seq36796){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36796));
});})(g__36667__auto___36856))
;


var g__36667__auto___36860 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__36667__auto___36860){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36861 = arguments.length;
var i__30969__auto___36862 = (0);
while(true){
if((i__30969__auto___36862 < len__30968__auto___36861)){
args__30975__auto__.push((arguments[i__30969__auto___36862]));

var G__36863 = (i__30969__auto___36862 + (1));
i__30969__auto___36862 = G__36863;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36860))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36860){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36860);
});})(g__36667__auto___36860))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__36667__auto___36860){
return (function (seq36797){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36797));
});})(g__36667__auto___36860))
;


var g__36667__auto___36864 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__36667__auto___36864){
return (function cljs$spec$impl$gen$string(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36865 = arguments.length;
var i__30969__auto___36866 = (0);
while(true){
if((i__30969__auto___36866 < len__30968__auto___36865)){
args__30975__auto__.push((arguments[i__30969__auto___36866]));

var G__36867 = (i__30969__auto___36866 + (1));
i__30969__auto___36866 = G__36867;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36864))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36864){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36864);
});})(g__36667__auto___36864))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__36667__auto___36864){
return (function (seq36798){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36798));
});})(g__36667__auto___36864))
;


var g__36667__auto___36868 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__36667__auto___36868){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36869 = arguments.length;
var i__30969__auto___36870 = (0);
while(true){
if((i__30969__auto___36870 < len__30968__auto___36869)){
args__30975__auto__.push((arguments[i__30969__auto___36870]));

var G__36871 = (i__30969__auto___36870 + (1));
i__30969__auto___36870 = G__36871;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36868))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36868){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36868);
});})(g__36667__auto___36868))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__36667__auto___36868){
return (function (seq36799){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36799));
});})(g__36667__auto___36868))
;


var g__36667__auto___36872 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__36667__auto___36872){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36873 = arguments.length;
var i__30969__auto___36874 = (0);
while(true){
if((i__30969__auto___36874 < len__30968__auto___36873)){
args__30975__auto__.push((arguments[i__30969__auto___36874]));

var G__36875 = (i__30969__auto___36874 + (1));
i__30969__auto___36874 = G__36875;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36872))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36872){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36872);
});})(g__36667__auto___36872))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__36667__auto___36872){
return (function (seq36800){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36800));
});})(g__36667__auto___36872))
;


var g__36667__auto___36876 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__36667__auto___36876){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36877 = arguments.length;
var i__30969__auto___36878 = (0);
while(true){
if((i__30969__auto___36878 < len__30968__auto___36877)){
args__30975__auto__.push((arguments[i__30969__auto___36878]));

var G__36879 = (i__30969__auto___36878 + (1));
i__30969__auto___36878 = G__36879;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36876))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36876){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36876);
});})(g__36667__auto___36876))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__36667__auto___36876){
return (function (seq36801){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36801));
});})(g__36667__auto___36876))
;


var g__36667__auto___36880 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__36667__auto___36880){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36881 = arguments.length;
var i__30969__auto___36882 = (0);
while(true){
if((i__30969__auto___36882 < len__30968__auto___36881)){
args__30975__auto__.push((arguments[i__30969__auto___36882]));

var G__36883 = (i__30969__auto___36882 + (1));
i__30969__auto___36882 = G__36883;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36880))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36880){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36880);
});})(g__36667__auto___36880))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__36667__auto___36880){
return (function (seq36802){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36802));
});})(g__36667__auto___36880))
;


var g__36667__auto___36884 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__36667__auto___36884){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36885 = arguments.length;
var i__30969__auto___36886 = (0);
while(true){
if((i__30969__auto___36886 < len__30968__auto___36885)){
args__30975__auto__.push((arguments[i__30969__auto___36886]));

var G__36887 = (i__30969__auto___36886 + (1));
i__30969__auto___36886 = G__36887;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});})(g__36667__auto___36884))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36667__auto___36884){
return (function (args){
return cljs.core.deref.call(null,g__36667__auto___36884);
});})(g__36667__auto___36884))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__36667__auto___36884){
return (function (seq36803){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36803));
});})(g__36667__auto___36884))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__30975__auto__ = [];
var len__30968__auto___36890 = arguments.length;
var i__30969__auto___36891 = (0);
while(true){
if((i__30969__auto___36891 < len__30968__auto___36890)){
args__30975__auto__.push((arguments[i__30969__auto___36891]));

var G__36892 = (i__30969__auto___36891 + (1));
i__30969__auto___36891 = G__36892;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36888_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36888_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36889){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36889));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36893_SHARP_){
return (new Date(p1__36893_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1483561370153