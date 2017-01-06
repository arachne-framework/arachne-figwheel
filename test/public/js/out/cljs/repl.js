// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37964){
var map__37989 = p__37964;
var map__37989__$1 = ((((!((map__37989 == null)))?((((map__37989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37989):map__37989);
var m = map__37989__$1;
var n = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37991_38013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37992_38014 = null;
var count__37993_38015 = (0);
var i__37994_38016 = (0);
while(true){
if((i__37994_38016 < count__37993_38015)){
var f_38017 = cljs.core._nth.call(null,chunk__37992_38014,i__37994_38016);
cljs.core.println.call(null,"  ",f_38017);

var G__38018 = seq__37991_38013;
var G__38019 = chunk__37992_38014;
var G__38020 = count__37993_38015;
var G__38021 = (i__37994_38016 + (1));
seq__37991_38013 = G__38018;
chunk__37992_38014 = G__38019;
count__37993_38015 = G__38020;
i__37994_38016 = G__38021;
continue;
} else {
var temp__6753__auto___38022 = cljs.core.seq.call(null,seq__37991_38013);
if(temp__6753__auto___38022){
var seq__37991_38023__$1 = temp__6753__auto___38022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37991_38023__$1)){
var c__30658__auto___38024 = cljs.core.chunk_first.call(null,seq__37991_38023__$1);
var G__38025 = cljs.core.chunk_rest.call(null,seq__37991_38023__$1);
var G__38026 = c__30658__auto___38024;
var G__38027 = cljs.core.count.call(null,c__30658__auto___38024);
var G__38028 = (0);
seq__37991_38013 = G__38025;
chunk__37992_38014 = G__38026;
count__37993_38015 = G__38027;
i__37994_38016 = G__38028;
continue;
} else {
var f_38029 = cljs.core.first.call(null,seq__37991_38023__$1);
cljs.core.println.call(null,"  ",f_38029);

var G__38030 = cljs.core.next.call(null,seq__37991_38023__$1);
var G__38031 = null;
var G__38032 = (0);
var G__38033 = (0);
seq__37991_38013 = G__38030;
chunk__37992_38014 = G__38031;
count__37993_38015 = G__38032;
i__37994_38016 = G__38033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29752__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38034);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38034)))?cljs.core.second.call(null,arglists_38034):arglists_38034));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37995_38035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37996_38036 = null;
var count__37997_38037 = (0);
var i__37998_38038 = (0);
while(true){
if((i__37998_38038 < count__37997_38037)){
var vec__37999_38039 = cljs.core._nth.call(null,chunk__37996_38036,i__37998_38038);
var name_38040 = cljs.core.nth.call(null,vec__37999_38039,(0),null);
var map__38002_38041 = cljs.core.nth.call(null,vec__37999_38039,(1),null);
var map__38002_38042__$1 = ((((!((map__38002_38041 == null)))?((((map__38002_38041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38002_38041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38002_38041):map__38002_38041);
var doc_38043 = cljs.core.get.call(null,map__38002_38042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38044 = cljs.core.get.call(null,map__38002_38042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38040);

cljs.core.println.call(null," ",arglists_38044);

if(cljs.core.truth_(doc_38043)){
cljs.core.println.call(null," ",doc_38043);
} else {
}

var G__38045 = seq__37995_38035;
var G__38046 = chunk__37996_38036;
var G__38047 = count__37997_38037;
var G__38048 = (i__37998_38038 + (1));
seq__37995_38035 = G__38045;
chunk__37996_38036 = G__38046;
count__37997_38037 = G__38047;
i__37998_38038 = G__38048;
continue;
} else {
var temp__6753__auto___38049 = cljs.core.seq.call(null,seq__37995_38035);
if(temp__6753__auto___38049){
var seq__37995_38050__$1 = temp__6753__auto___38049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37995_38050__$1)){
var c__30658__auto___38051 = cljs.core.chunk_first.call(null,seq__37995_38050__$1);
var G__38052 = cljs.core.chunk_rest.call(null,seq__37995_38050__$1);
var G__38053 = c__30658__auto___38051;
var G__38054 = cljs.core.count.call(null,c__30658__auto___38051);
var G__38055 = (0);
seq__37995_38035 = G__38052;
chunk__37996_38036 = G__38053;
count__37997_38037 = G__38054;
i__37998_38038 = G__38055;
continue;
} else {
var vec__38004_38056 = cljs.core.first.call(null,seq__37995_38050__$1);
var name_38057 = cljs.core.nth.call(null,vec__38004_38056,(0),null);
var map__38007_38058 = cljs.core.nth.call(null,vec__38004_38056,(1),null);
var map__38007_38059__$1 = ((((!((map__38007_38058 == null)))?((((map__38007_38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38007_38058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38007_38058):map__38007_38058);
var doc_38060 = cljs.core.get.call(null,map__38007_38059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38061 = cljs.core.get.call(null,map__38007_38059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38057);

cljs.core.println.call(null," ",arglists_38061);

if(cljs.core.truth_(doc_38060)){
cljs.core.println.call(null," ",doc_38060);
} else {
}

var G__38062 = cljs.core.next.call(null,seq__37995_38050__$1);
var G__38063 = null;
var G__38064 = (0);
var G__38065 = (0);
seq__37995_38035 = G__38062;
chunk__37996_38036 = G__38063;
count__37997_38037 = G__38064;
i__37998_38038 = G__38065;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__38009 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38010 = null;
var count__38011 = (0);
var i__38012 = (0);
while(true){
if((i__38012 < count__38011)){
var role = cljs.core._nth.call(null,chunk__38010,i__38012);
var temp__6753__auto___38066__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___38066__$1)){
var spec_38067 = temp__6753__auto___38066__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38067));
} else {
}

var G__38068 = seq__38009;
var G__38069 = chunk__38010;
var G__38070 = count__38011;
var G__38071 = (i__38012 + (1));
seq__38009 = G__38068;
chunk__38010 = G__38069;
count__38011 = G__38070;
i__38012 = G__38071;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__38009);
if(temp__6753__auto____$1){
var seq__38009__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38009__$1)){
var c__30658__auto__ = cljs.core.chunk_first.call(null,seq__38009__$1);
var G__38072 = cljs.core.chunk_rest.call(null,seq__38009__$1);
var G__38073 = c__30658__auto__;
var G__38074 = cljs.core.count.call(null,c__30658__auto__);
var G__38075 = (0);
seq__38009 = G__38072;
chunk__38010 = G__38073;
count__38011 = G__38074;
i__38012 = G__38075;
continue;
} else {
var role = cljs.core.first.call(null,seq__38009__$1);
var temp__6753__auto___38076__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___38076__$2)){
var spec_38077 = temp__6753__auto___38076__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38077));
} else {
}

var G__38078 = cljs.core.next.call(null,seq__38009__$1);
var G__38079 = null;
var G__38080 = (0);
var G__38081 = (0);
seq__38009 = G__38078;
chunk__38010 = G__38079;
count__38011 = G__38080;
i__38012 = G__38081;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1483561371034