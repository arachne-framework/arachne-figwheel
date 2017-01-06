// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39979 = [];
var len__30968__auto___39982 = arguments.length;
var i__30969__auto___39983 = (0);
while(true){
if((i__30969__auto___39983 < len__30968__auto___39982)){
args39979.push((arguments[i__30969__auto___39983]));

var G__39984 = (i__30969__auto___39983 + (1));
i__30969__auto___39983 = G__39984;
continue;
} else {
}
break;
}

var G__39981 = args39979.length;
switch (G__39981) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39979.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__30975__auto__ = [];
var len__30968__auto___39987 = arguments.length;
var i__30969__auto___39988 = (0);
while(true){
if((i__30969__auto___39988 < len__30968__auto___39987)){
args__30975__auto__.push((arguments[i__30969__auto___39988]));

var G__39989 = (i__30969__auto___39988 + (1));
i__30969__auto___39988 = G__39989;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39986){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39986));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__30975__auto__ = [];
var len__30968__auto___39991 = arguments.length;
var i__30969__auto___39992 = (0);
while(true){
if((i__30969__auto___39992 < len__30968__auto___39991)){
args__30975__auto__.push((arguments[i__30969__auto___39992]));

var G__39993 = (i__30969__auto___39992 + (1));
i__30969__auto___39992 = G__39993;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39990){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39990));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39994 = cljs.core._EQ_;
var expr__39995 = (function (){var or__29752__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39998){if((e39998 instanceof Error)){
var e = e39998;
return false;
} else {
throw e39998;

}
}})();
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39994.call(null,"true",expr__39995))){
return true;
} else {
if(cljs.core.truth_(pred__39994.call(null,"false",expr__39995))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39995)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e40000){if((e40000 instanceof Error)){
var e = e40000;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e40000;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40001){
var map__40004 = p__40001;
var map__40004__$1 = ((((!((map__40004 == null)))?((((map__40004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40004):map__40004);
var message = cljs.core.get.call(null,map__40004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40004__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29752__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29740__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29740__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29740__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32651__auto___40166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___40166,ch){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___40166,ch){
return (function (state_40135){
var state_val_40136 = (state_40135[(1)]);
if((state_val_40136 === (7))){
var inst_40131 = (state_40135[(2)]);
var state_40135__$1 = state_40135;
var statearr_40137_40167 = state_40135__$1;
(statearr_40137_40167[(2)] = inst_40131);

(statearr_40137_40167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (1))){
var state_40135__$1 = state_40135;
var statearr_40138_40168 = state_40135__$1;
(statearr_40138_40168[(2)] = null);

(statearr_40138_40168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (4))){
var inst_40088 = (state_40135[(7)]);
var inst_40088__$1 = (state_40135[(2)]);
var state_40135__$1 = (function (){var statearr_40139 = state_40135;
(statearr_40139[(7)] = inst_40088__$1);

return statearr_40139;
})();
if(cljs.core.truth_(inst_40088__$1)){
var statearr_40140_40169 = state_40135__$1;
(statearr_40140_40169[(1)] = (5));

} else {
var statearr_40141_40170 = state_40135__$1;
(statearr_40141_40170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (15))){
var inst_40095 = (state_40135[(8)]);
var inst_40110 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40095);
var inst_40111 = cljs.core.first.call(null,inst_40110);
var inst_40112 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40111);
var inst_40113 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40112)].join('');
var inst_40114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40113);
var state_40135__$1 = state_40135;
var statearr_40142_40171 = state_40135__$1;
(statearr_40142_40171[(2)] = inst_40114);

(statearr_40142_40171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (13))){
var inst_40119 = (state_40135[(2)]);
var state_40135__$1 = state_40135;
var statearr_40143_40172 = state_40135__$1;
(statearr_40143_40172[(2)] = inst_40119);

(statearr_40143_40172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (6))){
var state_40135__$1 = state_40135;
var statearr_40144_40173 = state_40135__$1;
(statearr_40144_40173[(2)] = null);

(statearr_40144_40173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (17))){
var inst_40117 = (state_40135[(2)]);
var state_40135__$1 = state_40135;
var statearr_40145_40174 = state_40135__$1;
(statearr_40145_40174[(2)] = inst_40117);

(statearr_40145_40174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (3))){
var inst_40133 = (state_40135[(2)]);
var state_40135__$1 = state_40135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40135__$1,inst_40133);
} else {
if((state_val_40136 === (12))){
var inst_40094 = (state_40135[(9)]);
var inst_40108 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40094,opts);
var state_40135__$1 = state_40135;
if(cljs.core.truth_(inst_40108)){
var statearr_40146_40175 = state_40135__$1;
(statearr_40146_40175[(1)] = (15));

} else {
var statearr_40147_40176 = state_40135__$1;
(statearr_40147_40176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (2))){
var state_40135__$1 = state_40135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40135__$1,(4),ch);
} else {
if((state_val_40136 === (11))){
var inst_40095 = (state_40135[(8)]);
var inst_40100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40101 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40095);
var inst_40102 = cljs.core.async.timeout.call(null,(1000));
var inst_40103 = [inst_40101,inst_40102];
var inst_40104 = (new cljs.core.PersistentVector(null,2,(5),inst_40100,inst_40103,null));
var state_40135__$1 = state_40135;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40135__$1,(14),inst_40104);
} else {
if((state_val_40136 === (9))){
var inst_40095 = (state_40135[(8)]);
var inst_40121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40122 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40095);
var inst_40123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40122);
var inst_40124 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40123)].join('');
var inst_40125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40124);
var state_40135__$1 = (function (){var statearr_40148 = state_40135;
(statearr_40148[(10)] = inst_40121);

return statearr_40148;
})();
var statearr_40149_40177 = state_40135__$1;
(statearr_40149_40177[(2)] = inst_40125);

(statearr_40149_40177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (5))){
var inst_40088 = (state_40135[(7)]);
var inst_40090 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40091 = (new cljs.core.PersistentArrayMap(null,2,inst_40090,null));
var inst_40092 = (new cljs.core.PersistentHashSet(null,inst_40091,null));
var inst_40093 = figwheel.client.focus_msgs.call(null,inst_40092,inst_40088);
var inst_40094 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40093);
var inst_40095 = cljs.core.first.call(null,inst_40093);
var inst_40096 = figwheel.client.autoload_QMARK_.call(null);
var state_40135__$1 = (function (){var statearr_40150 = state_40135;
(statearr_40150[(9)] = inst_40094);

(statearr_40150[(8)] = inst_40095);

return statearr_40150;
})();
if(cljs.core.truth_(inst_40096)){
var statearr_40151_40178 = state_40135__$1;
(statearr_40151_40178[(1)] = (8));

} else {
var statearr_40152_40179 = state_40135__$1;
(statearr_40152_40179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (14))){
var inst_40106 = (state_40135[(2)]);
var state_40135__$1 = state_40135;
var statearr_40153_40180 = state_40135__$1;
(statearr_40153_40180[(2)] = inst_40106);

(statearr_40153_40180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (16))){
var state_40135__$1 = state_40135;
var statearr_40154_40181 = state_40135__$1;
(statearr_40154_40181[(2)] = null);

(statearr_40154_40181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (10))){
var inst_40127 = (state_40135[(2)]);
var state_40135__$1 = (function (){var statearr_40155 = state_40135;
(statearr_40155[(11)] = inst_40127);

return statearr_40155;
})();
var statearr_40156_40182 = state_40135__$1;
(statearr_40156_40182[(2)] = null);

(statearr_40156_40182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40136 === (8))){
var inst_40094 = (state_40135[(9)]);
var inst_40098 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40094,opts);
var state_40135__$1 = state_40135;
if(cljs.core.truth_(inst_40098)){
var statearr_40157_40183 = state_40135__$1;
(statearr_40157_40183[(1)] = (11));

} else {
var statearr_40158_40184 = state_40135__$1;
(statearr_40158_40184[(1)] = (12));

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
});})(c__32651__auto___40166,ch))
;
return ((function (switch__32537__auto__,c__32651__auto___40166,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____0 = (function (){
var statearr_40162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40162[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__);

(statearr_40162[(1)] = (1));

return statearr_40162;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____1 = (function (state_40135){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_40135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e40163){if((e40163 instanceof Object)){
var ex__32541__auto__ = e40163;
var statearr_40164_40185 = state_40135;
(statearr_40164_40185[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40186 = state_40135;
state_40135 = G__40186;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__ = function(state_40135){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____1.call(this,state_40135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32538__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___40166,ch))
})();
var state__32653__auto__ = (function (){var statearr_40165 = f__32652__auto__.call(null);
(statearr_40165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___40166);

return statearr_40165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___40166,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40187_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40187_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40190 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40190){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40189){if((e40189 instanceof Error)){
var e = e40189;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40190], null));
} else {
var e = e40189;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40190))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40191){
var map__40200 = p__40191;
var map__40200__$1 = ((((!((map__40200 == null)))?((((map__40200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40200):map__40200);
var opts = map__40200__$1;
var build_id = cljs.core.get.call(null,map__40200__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40200,map__40200__$1,opts,build_id){
return (function (p__40202){
var vec__40203 = p__40202;
var seq__40204 = cljs.core.seq.call(null,vec__40203);
var first__40205 = cljs.core.first.call(null,seq__40204);
var seq__40204__$1 = cljs.core.next.call(null,seq__40204);
var map__40206 = first__40205;
var map__40206__$1 = ((((!((map__40206 == null)))?((((map__40206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40206):map__40206);
var msg = map__40206__$1;
var msg_name = cljs.core.get.call(null,map__40206__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40204__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40203,seq__40204,first__40205,seq__40204__$1,map__40206,map__40206__$1,msg,msg_name,_,map__40200,map__40200__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40203,seq__40204,first__40205,seq__40204__$1,map__40206,map__40206__$1,msg,msg_name,_,map__40200,map__40200__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40200,map__40200__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40214){
var vec__40215 = p__40214;
var seq__40216 = cljs.core.seq.call(null,vec__40215);
var first__40217 = cljs.core.first.call(null,seq__40216);
var seq__40216__$1 = cljs.core.next.call(null,seq__40216);
var map__40218 = first__40217;
var map__40218__$1 = ((((!((map__40218 == null)))?((((map__40218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40218):map__40218);
var msg = map__40218__$1;
var msg_name = cljs.core.get.call(null,map__40218__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40216__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40220){
var map__40232 = p__40220;
var map__40232__$1 = ((((!((map__40232 == null)))?((((map__40232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40232):map__40232);
var on_compile_warning = cljs.core.get.call(null,map__40232__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40232__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40232,map__40232__$1,on_compile_warning,on_compile_fail){
return (function (p__40234){
var vec__40235 = p__40234;
var seq__40236 = cljs.core.seq.call(null,vec__40235);
var first__40237 = cljs.core.first.call(null,seq__40236);
var seq__40236__$1 = cljs.core.next.call(null,seq__40236);
var map__40238 = first__40237;
var map__40238__$1 = ((((!((map__40238 == null)))?((((map__40238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40238):map__40238);
var msg = map__40238__$1;
var msg_name = cljs.core.get.call(null,map__40238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40236__$1;
var pred__40240 = cljs.core._EQ_;
var expr__40241 = msg_name;
if(cljs.core.truth_(pred__40240.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40241))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40240.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40241))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40232,map__40232__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__,msg_hist,msg_names,msg){
return (function (state_40469){
var state_val_40470 = (state_40469[(1)]);
if((state_val_40470 === (7))){
var inst_40389 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40389)){
var statearr_40471_40521 = state_40469__$1;
(statearr_40471_40521[(1)] = (8));

} else {
var statearr_40472_40522 = state_40469__$1;
(statearr_40472_40522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (20))){
var inst_40463 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40473_40523 = state_40469__$1;
(statearr_40473_40523[(2)] = inst_40463);

(statearr_40473_40523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (27))){
var inst_40459 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40474_40524 = state_40469__$1;
(statearr_40474_40524[(2)] = inst_40459);

(statearr_40474_40524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (1))){
var inst_40382 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40382)){
var statearr_40475_40525 = state_40469__$1;
(statearr_40475_40525[(1)] = (2));

} else {
var statearr_40476_40526 = state_40469__$1;
(statearr_40476_40526[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (24))){
var inst_40461 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40477_40527 = state_40469__$1;
(statearr_40477_40527[(2)] = inst_40461);

(statearr_40477_40527[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (4))){
var inst_40467 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40469__$1,inst_40467);
} else {
if((state_val_40470 === (15))){
var inst_40465 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40478_40528 = state_40469__$1;
(statearr_40478_40528[(2)] = inst_40465);

(statearr_40478_40528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (21))){
var inst_40418 = (state_40469[(2)]);
var inst_40419 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40419);
var state_40469__$1 = (function (){var statearr_40479 = state_40469;
(statearr_40479[(7)] = inst_40418);

return statearr_40479;
})();
var statearr_40480_40529 = state_40469__$1;
(statearr_40480_40529[(2)] = inst_40420);

(statearr_40480_40529[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (31))){
var inst_40448 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40448)){
var statearr_40481_40530 = state_40469__$1;
(statearr_40481_40530[(1)] = (34));

} else {
var statearr_40482_40531 = state_40469__$1;
(statearr_40482_40531[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (32))){
var inst_40457 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40483_40532 = state_40469__$1;
(statearr_40483_40532[(2)] = inst_40457);

(statearr_40483_40532[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (33))){
var inst_40444 = (state_40469[(2)]);
var inst_40445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40446 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40445);
var state_40469__$1 = (function (){var statearr_40484 = state_40469;
(statearr_40484[(8)] = inst_40444);

return statearr_40484;
})();
var statearr_40485_40533 = state_40469__$1;
(statearr_40485_40533[(2)] = inst_40446);

(statearr_40485_40533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (13))){
var inst_40403 = figwheel.client.heads_up.clear.call(null);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(16),inst_40403);
} else {
if((state_val_40470 === (22))){
var inst_40424 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40425 = figwheel.client.heads_up.append_warning_message.call(null,inst_40424);
var state_40469__$1 = state_40469;
var statearr_40486_40534 = state_40469__$1;
(statearr_40486_40534[(2)] = inst_40425);

(statearr_40486_40534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (36))){
var inst_40455 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40487_40535 = state_40469__$1;
(statearr_40487_40535[(2)] = inst_40455);

(statearr_40487_40535[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (29))){
var inst_40435 = (state_40469[(2)]);
var inst_40436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40437 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40436);
var state_40469__$1 = (function (){var statearr_40488 = state_40469;
(statearr_40488[(9)] = inst_40435);

return statearr_40488;
})();
var statearr_40489_40536 = state_40469__$1;
(statearr_40489_40536[(2)] = inst_40437);

(statearr_40489_40536[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (6))){
var inst_40384 = (state_40469[(10)]);
var state_40469__$1 = state_40469;
var statearr_40490_40537 = state_40469__$1;
(statearr_40490_40537[(2)] = inst_40384);

(statearr_40490_40537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (28))){
var inst_40431 = (state_40469[(2)]);
var inst_40432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40433 = figwheel.client.heads_up.display_warning.call(null,inst_40432);
var state_40469__$1 = (function (){var statearr_40491 = state_40469;
(statearr_40491[(11)] = inst_40431);

return statearr_40491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(29),inst_40433);
} else {
if((state_val_40470 === (25))){
var inst_40429 = figwheel.client.heads_up.clear.call(null);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(28),inst_40429);
} else {
if((state_val_40470 === (34))){
var inst_40450 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(37),inst_40450);
} else {
if((state_val_40470 === (17))){
var inst_40409 = (state_40469[(2)]);
var inst_40410 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40411 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40410);
var state_40469__$1 = (function (){var statearr_40492 = state_40469;
(statearr_40492[(12)] = inst_40409);

return statearr_40492;
})();
var statearr_40493_40538 = state_40469__$1;
(statearr_40493_40538[(2)] = inst_40411);

(statearr_40493_40538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (3))){
var inst_40401 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40401)){
var statearr_40494_40539 = state_40469__$1;
(statearr_40494_40539[(1)] = (13));

} else {
var statearr_40495_40540 = state_40469__$1;
(statearr_40495_40540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (12))){
var inst_40397 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40496_40541 = state_40469__$1;
(statearr_40496_40541[(2)] = inst_40397);

(statearr_40496_40541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (2))){
var inst_40384 = (state_40469[(10)]);
var inst_40384__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40469__$1 = (function (){var statearr_40497 = state_40469;
(statearr_40497[(10)] = inst_40384__$1);

return statearr_40497;
})();
if(cljs.core.truth_(inst_40384__$1)){
var statearr_40498_40542 = state_40469__$1;
(statearr_40498_40542[(1)] = (5));

} else {
var statearr_40499_40543 = state_40469__$1;
(statearr_40499_40543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (23))){
var inst_40427 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40427)){
var statearr_40500_40544 = state_40469__$1;
(statearr_40500_40544[(1)] = (25));

} else {
var statearr_40501_40545 = state_40469__$1;
(statearr_40501_40545[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (35))){
var state_40469__$1 = state_40469;
var statearr_40502_40546 = state_40469__$1;
(statearr_40502_40546[(2)] = null);

(statearr_40502_40546[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (19))){
var inst_40422 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40422)){
var statearr_40503_40547 = state_40469__$1;
(statearr_40503_40547[(1)] = (22));

} else {
var statearr_40504_40548 = state_40469__$1;
(statearr_40504_40548[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (11))){
var inst_40393 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40505_40549 = state_40469__$1;
(statearr_40505_40549[(2)] = inst_40393);

(statearr_40505_40549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (9))){
var inst_40395 = figwheel.client.heads_up.clear.call(null);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(12),inst_40395);
} else {
if((state_val_40470 === (5))){
var inst_40386 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40469__$1 = state_40469;
var statearr_40506_40550 = state_40469__$1;
(statearr_40506_40550[(2)] = inst_40386);

(statearr_40506_40550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (14))){
var inst_40413 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40413)){
var statearr_40507_40551 = state_40469__$1;
(statearr_40507_40551[(1)] = (18));

} else {
var statearr_40508_40552 = state_40469__$1;
(statearr_40508_40552[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (26))){
var inst_40439 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40469__$1 = state_40469;
if(cljs.core.truth_(inst_40439)){
var statearr_40509_40553 = state_40469__$1;
(statearr_40509_40553[(1)] = (30));

} else {
var statearr_40510_40554 = state_40469__$1;
(statearr_40510_40554[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (16))){
var inst_40405 = (state_40469[(2)]);
var inst_40406 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40407 = figwheel.client.heads_up.display_exception.call(null,inst_40406);
var state_40469__$1 = (function (){var statearr_40511 = state_40469;
(statearr_40511[(13)] = inst_40405);

return statearr_40511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(17),inst_40407);
} else {
if((state_val_40470 === (30))){
var inst_40441 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40442 = figwheel.client.heads_up.display_warning.call(null,inst_40441);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(33),inst_40442);
} else {
if((state_val_40470 === (10))){
var inst_40399 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40512_40555 = state_40469__$1;
(statearr_40512_40555[(2)] = inst_40399);

(statearr_40512_40555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (18))){
var inst_40415 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40416 = figwheel.client.heads_up.display_exception.call(null,inst_40415);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(21),inst_40416);
} else {
if((state_val_40470 === (37))){
var inst_40452 = (state_40469[(2)]);
var state_40469__$1 = state_40469;
var statearr_40513_40556 = state_40469__$1;
(statearr_40513_40556[(2)] = inst_40452);

(statearr_40513_40556[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40470 === (8))){
var inst_40391 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40469__$1 = state_40469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40469__$1,(11),inst_40391);
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
});})(c__32651__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32537__auto__,c__32651__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____0 = (function (){
var statearr_40517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40517[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__);

(statearr_40517[(1)] = (1));

return statearr_40517;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____1 = (function (state_40469){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_40469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e40518){if((e40518 instanceof Object)){
var ex__32541__auto__ = e40518;
var statearr_40519_40557 = state_40469;
(statearr_40519_40557[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40558 = state_40469;
state_40469 = G__40558;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__ = function(state_40469){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____1.call(this,state_40469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__,msg_hist,msg_names,msg))
})();
var state__32653__auto__ = (function (){var statearr_40520 = f__32652__auto__.call(null);
(statearr_40520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_40520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__,msg_hist,msg_names,msg))
);

return c__32651__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32651__auto___40621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___40621,ch){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___40621,ch){
return (function (state_40604){
var state_val_40605 = (state_40604[(1)]);
if((state_val_40605 === (1))){
var state_40604__$1 = state_40604;
var statearr_40606_40622 = state_40604__$1;
(statearr_40606_40622[(2)] = null);

(statearr_40606_40622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40605 === (2))){
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40604__$1,(4),ch);
} else {
if((state_val_40605 === (3))){
var inst_40602 = (state_40604[(2)]);
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40604__$1,inst_40602);
} else {
if((state_val_40605 === (4))){
var inst_40592 = (state_40604[(7)]);
var inst_40592__$1 = (state_40604[(2)]);
var state_40604__$1 = (function (){var statearr_40607 = state_40604;
(statearr_40607[(7)] = inst_40592__$1);

return statearr_40607;
})();
if(cljs.core.truth_(inst_40592__$1)){
var statearr_40608_40623 = state_40604__$1;
(statearr_40608_40623[(1)] = (5));

} else {
var statearr_40609_40624 = state_40604__$1;
(statearr_40609_40624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40605 === (5))){
var inst_40592 = (state_40604[(7)]);
var inst_40594 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40592);
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40604__$1,(8),inst_40594);
} else {
if((state_val_40605 === (6))){
var state_40604__$1 = state_40604;
var statearr_40610_40625 = state_40604__$1;
(statearr_40610_40625[(2)] = null);

(statearr_40610_40625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40605 === (7))){
var inst_40600 = (state_40604[(2)]);
var state_40604__$1 = state_40604;
var statearr_40611_40626 = state_40604__$1;
(statearr_40611_40626[(2)] = inst_40600);

(statearr_40611_40626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40605 === (8))){
var inst_40596 = (state_40604[(2)]);
var state_40604__$1 = (function (){var statearr_40612 = state_40604;
(statearr_40612[(8)] = inst_40596);

return statearr_40612;
})();
var statearr_40613_40627 = state_40604__$1;
(statearr_40613_40627[(2)] = null);

(statearr_40613_40627[(1)] = (2));


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
});})(c__32651__auto___40621,ch))
;
return ((function (switch__32537__auto__,c__32651__auto___40621,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32538__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32538__auto____0 = (function (){
var statearr_40617 = [null,null,null,null,null,null,null,null,null];
(statearr_40617[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32538__auto__);

(statearr_40617[(1)] = (1));

return statearr_40617;
});
var figwheel$client$heads_up_plugin_$_state_machine__32538__auto____1 = (function (state_40604){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_40604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e40618){if((e40618 instanceof Object)){
var ex__32541__auto__ = e40618;
var statearr_40619_40628 = state_40604;
(statearr_40619_40628[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40629 = state_40604;
state_40604 = G__40629;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32538__auto__ = function(state_40604){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32538__auto____1.call(this,state_40604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32538__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32538__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___40621,ch))
})();
var state__32653__auto__ = (function (){var statearr_40620 = f__32652__auto__.call(null);
(statearr_40620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___40621);

return statearr_40620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___40621,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__){
return (function (state_40650){
var state_val_40651 = (state_40650[(1)]);
if((state_val_40651 === (1))){
var inst_40645 = cljs.core.async.timeout.call(null,(3000));
var state_40650__$1 = state_40650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40650__$1,(2),inst_40645);
} else {
if((state_val_40651 === (2))){
var inst_40647 = (state_40650[(2)]);
var inst_40648 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40650__$1 = (function (){var statearr_40652 = state_40650;
(statearr_40652[(7)] = inst_40647);

return statearr_40652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40650__$1,inst_40648);
} else {
return null;
}
}
});})(c__32651__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____0 = (function (){
var statearr_40656 = [null,null,null,null,null,null,null,null];
(statearr_40656[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__);

(statearr_40656[(1)] = (1));

return statearr_40656;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____1 = (function (state_40650){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_40650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e40657){if((e40657 instanceof Object)){
var ex__32541__auto__ = e40657;
var statearr_40658_40660 = state_40650;
(statearr_40658_40660[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40661 = state_40650;
state_40650 = G__40661;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__ = function(state_40650){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____1.call(this,state_40650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32538__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__))
})();
var state__32653__auto__ = (function (){var statearr_40659 = f__32652__auto__.call(null);
(statearr_40659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_40659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__))
);

return c__32651__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__,figwheel_version,temp__6753__auto__){
return (function (state_40684){
var state_val_40685 = (state_40684[(1)]);
if((state_val_40685 === (1))){
var inst_40678 = cljs.core.async.timeout.call(null,(2000));
var state_40684__$1 = state_40684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40684__$1,(2),inst_40678);
} else {
if((state_val_40685 === (2))){
var inst_40680 = (state_40684[(2)]);
var inst_40681 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_40682 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40681);
var state_40684__$1 = (function (){var statearr_40686 = state_40684;
(statearr_40686[(7)] = inst_40680);

return statearr_40686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40684__$1,inst_40682);
} else {
return null;
}
}
});})(c__32651__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____0 = (function (){
var statearr_40690 = [null,null,null,null,null,null,null,null];
(statearr_40690[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__);

(statearr_40690[(1)] = (1));

return statearr_40690;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____1 = (function (state_40684){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_40684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e40691){if((e40691 instanceof Object)){
var ex__32541__auto__ = e40691;
var statearr_40692_40694 = state_40684;
(statearr_40692_40694[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40695 = state_40684;
state_40684 = G__40695;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__ = function(state_40684){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____1.call(this,state_40684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__,figwheel_version,temp__6753__auto__))
})();
var state__32653__auto__ = (function (){var statearr_40693 = f__32652__auto__.call(null);
(statearr_40693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_40693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__,figwheel_version,temp__6753__auto__))
);

return c__32651__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40696){
var map__40700 = p__40696;
var map__40700__$1 = ((((!((map__40700 == null)))?((((map__40700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40700):map__40700);
var file = cljs.core.get.call(null,map__40700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40702 = "";
var G__40702__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__40702),cljs.core.str("file "),cljs.core.str(file)].join(''):G__40702);
var G__40702__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__40702__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40702__$1);
if(cljs.core.truth_((function (){var and__29740__auto__ = line;
if(cljs.core.truth_(and__29740__auto__)){
return column;
} else {
return and__29740__auto__;
}
})())){
return [cljs.core.str(G__40702__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__40702__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40703){
var map__40710 = p__40703;
var map__40710__$1 = ((((!((map__40710 == null)))?((((map__40710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40710):map__40710);
var ed = map__40710__$1;
var formatted_exception = cljs.core.get.call(null,map__40710__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40710__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40710__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40712_40716 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40713_40717 = null;
var count__40714_40718 = (0);
var i__40715_40719 = (0);
while(true){
if((i__40715_40719 < count__40714_40718)){
var msg_40720 = cljs.core._nth.call(null,chunk__40713_40717,i__40715_40719);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40720);

var G__40721 = seq__40712_40716;
var G__40722 = chunk__40713_40717;
var G__40723 = count__40714_40718;
var G__40724 = (i__40715_40719 + (1));
seq__40712_40716 = G__40721;
chunk__40713_40717 = G__40722;
count__40714_40718 = G__40723;
i__40715_40719 = G__40724;
continue;
} else {
var temp__6753__auto___40725 = cljs.core.seq.call(null,seq__40712_40716);
if(temp__6753__auto___40725){
var seq__40712_40726__$1 = temp__6753__auto___40725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40712_40726__$1)){
var c__30658__auto___40727 = cljs.core.chunk_first.call(null,seq__40712_40726__$1);
var G__40728 = cljs.core.chunk_rest.call(null,seq__40712_40726__$1);
var G__40729 = c__30658__auto___40727;
var G__40730 = cljs.core.count.call(null,c__30658__auto___40727);
var G__40731 = (0);
seq__40712_40716 = G__40728;
chunk__40713_40717 = G__40729;
count__40714_40718 = G__40730;
i__40715_40719 = G__40731;
continue;
} else {
var msg_40732 = cljs.core.first.call(null,seq__40712_40726__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40732);

var G__40733 = cljs.core.next.call(null,seq__40712_40726__$1);
var G__40734 = null;
var G__40735 = (0);
var G__40736 = (0);
seq__40712_40716 = G__40733;
chunk__40713_40717 = G__40734;
count__40714_40718 = G__40735;
i__40715_40719 = G__40736;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40737){
var map__40740 = p__40737;
var map__40740__$1 = ((((!((map__40740 == null)))?((((map__40740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40740):map__40740);
var w = map__40740__$1;
var message = cljs.core.get.call(null,map__40740__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"test/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"test/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29740__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29740__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29740__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40752 = cljs.core.seq.call(null,plugins);
var chunk__40753 = null;
var count__40754 = (0);
var i__40755 = (0);
while(true){
if((i__40755 < count__40754)){
var vec__40756 = cljs.core._nth.call(null,chunk__40753,i__40755);
var k = cljs.core.nth.call(null,vec__40756,(0),null);
var plugin = cljs.core.nth.call(null,vec__40756,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40762 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40752,chunk__40753,count__40754,i__40755,pl_40762,vec__40756,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40762.call(null,msg_hist);
});})(seq__40752,chunk__40753,count__40754,i__40755,pl_40762,vec__40756,k,plugin))
);
} else {
}

var G__40763 = seq__40752;
var G__40764 = chunk__40753;
var G__40765 = count__40754;
var G__40766 = (i__40755 + (1));
seq__40752 = G__40763;
chunk__40753 = G__40764;
count__40754 = G__40765;
i__40755 = G__40766;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__40752);
if(temp__6753__auto__){
var seq__40752__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40752__$1)){
var c__30658__auto__ = cljs.core.chunk_first.call(null,seq__40752__$1);
var G__40767 = cljs.core.chunk_rest.call(null,seq__40752__$1);
var G__40768 = c__30658__auto__;
var G__40769 = cljs.core.count.call(null,c__30658__auto__);
var G__40770 = (0);
seq__40752 = G__40767;
chunk__40753 = G__40768;
count__40754 = G__40769;
i__40755 = G__40770;
continue;
} else {
var vec__40759 = cljs.core.first.call(null,seq__40752__$1);
var k = cljs.core.nth.call(null,vec__40759,(0),null);
var plugin = cljs.core.nth.call(null,vec__40759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40771 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40752,chunk__40753,count__40754,i__40755,pl_40771,vec__40759,k,plugin,seq__40752__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40771.call(null,msg_hist);
});})(seq__40752,chunk__40753,count__40754,i__40755,pl_40771,vec__40759,k,plugin,seq__40752__$1,temp__6753__auto__))
);
} else {
}

var G__40772 = cljs.core.next.call(null,seq__40752__$1);
var G__40773 = null;
var G__40774 = (0);
var G__40775 = (0);
seq__40752 = G__40772;
chunk__40753 = G__40773;
count__40754 = G__40774;
i__40755 = G__40775;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40776 = [];
var len__30968__auto___40783 = arguments.length;
var i__30969__auto___40784 = (0);
while(true){
if((i__30969__auto___40784 < len__30968__auto___40783)){
args40776.push((arguments[i__30969__auto___40784]));

var G__40785 = (i__30969__auto___40784 + (1));
i__30969__auto___40784 = G__40785;
continue;
} else {
}
break;
}

var G__40778 = args40776.length;
switch (G__40778) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40776.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40779_40787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40780_40788 = null;
var count__40781_40789 = (0);
var i__40782_40790 = (0);
while(true){
if((i__40782_40790 < count__40781_40789)){
var msg_40791 = cljs.core._nth.call(null,chunk__40780_40788,i__40782_40790);
figwheel.client.socket.handle_incoming_message.call(null,msg_40791);

var G__40792 = seq__40779_40787;
var G__40793 = chunk__40780_40788;
var G__40794 = count__40781_40789;
var G__40795 = (i__40782_40790 + (1));
seq__40779_40787 = G__40792;
chunk__40780_40788 = G__40793;
count__40781_40789 = G__40794;
i__40782_40790 = G__40795;
continue;
} else {
var temp__6753__auto___40796 = cljs.core.seq.call(null,seq__40779_40787);
if(temp__6753__auto___40796){
var seq__40779_40797__$1 = temp__6753__auto___40796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40779_40797__$1)){
var c__30658__auto___40798 = cljs.core.chunk_first.call(null,seq__40779_40797__$1);
var G__40799 = cljs.core.chunk_rest.call(null,seq__40779_40797__$1);
var G__40800 = c__30658__auto___40798;
var G__40801 = cljs.core.count.call(null,c__30658__auto___40798);
var G__40802 = (0);
seq__40779_40787 = G__40799;
chunk__40780_40788 = G__40800;
count__40781_40789 = G__40801;
i__40782_40790 = G__40802;
continue;
} else {
var msg_40803 = cljs.core.first.call(null,seq__40779_40797__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40803);

var G__40804 = cljs.core.next.call(null,seq__40779_40797__$1);
var G__40805 = null;
var G__40806 = (0);
var G__40807 = (0);
seq__40779_40787 = G__40804;
chunk__40780_40788 = G__40805;
count__40781_40789 = G__40806;
i__40782_40790 = G__40807;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30975__auto__ = [];
var len__30968__auto___40812 = arguments.length;
var i__30969__auto___40813 = (0);
while(true){
if((i__30969__auto___40813 < len__30968__auto___40812)){
args__30975__auto__.push((arguments[i__30969__auto___40813]));

var G__40814 = (i__30969__auto___40813 + (1));
i__30969__auto___40813 = G__40814;
continue;
} else {
}
break;
}

var argseq__30976__auto__ = ((((0) < args__30975__auto__.length))?(new cljs.core.IndexedSeq(args__30975__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30976__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40809){
var map__40810 = p__40809;
var map__40810__$1 = ((((!((map__40810 == null)))?((((map__40810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40810):map__40810);
var opts = map__40810__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40808){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40808));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40816){if((e40816 instanceof Error)){
var e = e40816;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40816;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40820){
var map__40821 = p__40820;
var map__40821__$1 = ((((!((map__40821 == null)))?((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821):map__40821);
var msg_name = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1483561372772