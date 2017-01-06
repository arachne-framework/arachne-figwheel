// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29752__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29752__auto__){
return or__29752__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29752__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35573_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35573_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35578 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35579 = null;
var count__35580 = (0);
var i__35581 = (0);
while(true){
if((i__35581 < count__35580)){
var n = cljs.core._nth.call(null,chunk__35579,i__35581);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35582 = seq__35578;
var G__35583 = chunk__35579;
var G__35584 = count__35580;
var G__35585 = (i__35581 + (1));
seq__35578 = G__35582;
chunk__35579 = G__35583;
count__35580 = G__35584;
i__35581 = G__35585;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__35578);
if(temp__6753__auto__){
var seq__35578__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35578__$1)){
var c__30658__auto__ = cljs.core.chunk_first.call(null,seq__35578__$1);
var G__35586 = cljs.core.chunk_rest.call(null,seq__35578__$1);
var G__35587 = c__30658__auto__;
var G__35588 = cljs.core.count.call(null,c__30658__auto__);
var G__35589 = (0);
seq__35578 = G__35586;
chunk__35579 = G__35587;
count__35580 = G__35588;
i__35581 = G__35589;
continue;
} else {
var n = cljs.core.first.call(null,seq__35578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35590 = cljs.core.next.call(null,seq__35578__$1);
var G__35591 = null;
var G__35592 = (0);
var G__35593 = (0);
seq__35578 = G__35590;
chunk__35579 = G__35591;
count__35580 = G__35592;
i__35581 = G__35593;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35644_35655 = cljs.core.seq.call(null,deps);
var chunk__35645_35656 = null;
var count__35646_35657 = (0);
var i__35647_35658 = (0);
while(true){
if((i__35647_35658 < count__35646_35657)){
var dep_35659 = cljs.core._nth.call(null,chunk__35645_35656,i__35647_35658);
topo_sort_helper_STAR_.call(null,dep_35659,(depth + (1)),state);

var G__35660 = seq__35644_35655;
var G__35661 = chunk__35645_35656;
var G__35662 = count__35646_35657;
var G__35663 = (i__35647_35658 + (1));
seq__35644_35655 = G__35660;
chunk__35645_35656 = G__35661;
count__35646_35657 = G__35662;
i__35647_35658 = G__35663;
continue;
} else {
var temp__6753__auto___35664 = cljs.core.seq.call(null,seq__35644_35655);
if(temp__6753__auto___35664){
var seq__35644_35665__$1 = temp__6753__auto___35664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35644_35665__$1)){
var c__30658__auto___35666 = cljs.core.chunk_first.call(null,seq__35644_35665__$1);
var G__35667 = cljs.core.chunk_rest.call(null,seq__35644_35665__$1);
var G__35668 = c__30658__auto___35666;
var G__35669 = cljs.core.count.call(null,c__30658__auto___35666);
var G__35670 = (0);
seq__35644_35655 = G__35667;
chunk__35645_35656 = G__35668;
count__35646_35657 = G__35669;
i__35647_35658 = G__35670;
continue;
} else {
var dep_35671 = cljs.core.first.call(null,seq__35644_35665__$1);
topo_sort_helper_STAR_.call(null,dep_35671,(depth + (1)),state);

var G__35672 = cljs.core.next.call(null,seq__35644_35665__$1);
var G__35673 = null;
var G__35674 = (0);
var G__35675 = (0);
seq__35644_35655 = G__35672;
chunk__35645_35656 = G__35673;
count__35646_35657 = G__35674;
i__35647_35658 = G__35675;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35648){
var vec__35652 = p__35648;
var seq__35653 = cljs.core.seq.call(null,vec__35652);
var first__35654 = cljs.core.first.call(null,seq__35653);
var seq__35653__$1 = cljs.core.next.call(null,seq__35653);
var x = first__35654;
var xs = seq__35653__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35652,seq__35653,first__35654,seq__35653__$1,x,xs,get_deps__$1){
return (function (p1__35594_SHARP_){
return clojure.set.difference.call(null,p1__35594_SHARP_,x);
});})(vec__35652,seq__35653,first__35654,seq__35653__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35688 = cljs.core.seq.call(null,provides);
var chunk__35689 = null;
var count__35690 = (0);
var i__35691 = (0);
while(true){
if((i__35691 < count__35690)){
var prov = cljs.core._nth.call(null,chunk__35689,i__35691);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35692_35700 = cljs.core.seq.call(null,requires);
var chunk__35693_35701 = null;
var count__35694_35702 = (0);
var i__35695_35703 = (0);
while(true){
if((i__35695_35703 < count__35694_35702)){
var req_35704 = cljs.core._nth.call(null,chunk__35693_35701,i__35695_35703);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35704,prov);

var G__35705 = seq__35692_35700;
var G__35706 = chunk__35693_35701;
var G__35707 = count__35694_35702;
var G__35708 = (i__35695_35703 + (1));
seq__35692_35700 = G__35705;
chunk__35693_35701 = G__35706;
count__35694_35702 = G__35707;
i__35695_35703 = G__35708;
continue;
} else {
var temp__6753__auto___35709 = cljs.core.seq.call(null,seq__35692_35700);
if(temp__6753__auto___35709){
var seq__35692_35710__$1 = temp__6753__auto___35709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35692_35710__$1)){
var c__30658__auto___35711 = cljs.core.chunk_first.call(null,seq__35692_35710__$1);
var G__35712 = cljs.core.chunk_rest.call(null,seq__35692_35710__$1);
var G__35713 = c__30658__auto___35711;
var G__35714 = cljs.core.count.call(null,c__30658__auto___35711);
var G__35715 = (0);
seq__35692_35700 = G__35712;
chunk__35693_35701 = G__35713;
count__35694_35702 = G__35714;
i__35695_35703 = G__35715;
continue;
} else {
var req_35716 = cljs.core.first.call(null,seq__35692_35710__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35716,prov);

var G__35717 = cljs.core.next.call(null,seq__35692_35710__$1);
var G__35718 = null;
var G__35719 = (0);
var G__35720 = (0);
seq__35692_35700 = G__35717;
chunk__35693_35701 = G__35718;
count__35694_35702 = G__35719;
i__35695_35703 = G__35720;
continue;
}
} else {
}
}
break;
}

var G__35721 = seq__35688;
var G__35722 = chunk__35689;
var G__35723 = count__35690;
var G__35724 = (i__35691 + (1));
seq__35688 = G__35721;
chunk__35689 = G__35722;
count__35690 = G__35723;
i__35691 = G__35724;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__35688);
if(temp__6753__auto__){
var seq__35688__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35688__$1)){
var c__30658__auto__ = cljs.core.chunk_first.call(null,seq__35688__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35688__$1);
var G__35726 = c__30658__auto__;
var G__35727 = cljs.core.count.call(null,c__30658__auto__);
var G__35728 = (0);
seq__35688 = G__35725;
chunk__35689 = G__35726;
count__35690 = G__35727;
i__35691 = G__35728;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35688__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35696_35729 = cljs.core.seq.call(null,requires);
var chunk__35697_35730 = null;
var count__35698_35731 = (0);
var i__35699_35732 = (0);
while(true){
if((i__35699_35732 < count__35698_35731)){
var req_35733 = cljs.core._nth.call(null,chunk__35697_35730,i__35699_35732);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35733,prov);

var G__35734 = seq__35696_35729;
var G__35735 = chunk__35697_35730;
var G__35736 = count__35698_35731;
var G__35737 = (i__35699_35732 + (1));
seq__35696_35729 = G__35734;
chunk__35697_35730 = G__35735;
count__35698_35731 = G__35736;
i__35699_35732 = G__35737;
continue;
} else {
var temp__6753__auto___35738__$1 = cljs.core.seq.call(null,seq__35696_35729);
if(temp__6753__auto___35738__$1){
var seq__35696_35739__$1 = temp__6753__auto___35738__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35696_35739__$1)){
var c__30658__auto___35740 = cljs.core.chunk_first.call(null,seq__35696_35739__$1);
var G__35741 = cljs.core.chunk_rest.call(null,seq__35696_35739__$1);
var G__35742 = c__30658__auto___35740;
var G__35743 = cljs.core.count.call(null,c__30658__auto___35740);
var G__35744 = (0);
seq__35696_35729 = G__35741;
chunk__35697_35730 = G__35742;
count__35698_35731 = G__35743;
i__35699_35732 = G__35744;
continue;
} else {
var req_35745 = cljs.core.first.call(null,seq__35696_35739__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35745,prov);

var G__35746 = cljs.core.next.call(null,seq__35696_35739__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35696_35729 = G__35746;
chunk__35697_35730 = G__35747;
count__35698_35731 = G__35748;
i__35699_35732 = G__35749;
continue;
}
} else {
}
}
break;
}

var G__35750 = cljs.core.next.call(null,seq__35688__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35688 = G__35750;
chunk__35689 = G__35751;
count__35690 = G__35752;
i__35691 = G__35753;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35758_35762 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35759_35763 = null;
var count__35760_35764 = (0);
var i__35761_35765 = (0);
while(true){
if((i__35761_35765 < count__35760_35764)){
var ns_35766 = cljs.core._nth.call(null,chunk__35759_35763,i__35761_35765);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35766);

var G__35767 = seq__35758_35762;
var G__35768 = chunk__35759_35763;
var G__35769 = count__35760_35764;
var G__35770 = (i__35761_35765 + (1));
seq__35758_35762 = G__35767;
chunk__35759_35763 = G__35768;
count__35760_35764 = G__35769;
i__35761_35765 = G__35770;
continue;
} else {
var temp__6753__auto___35771 = cljs.core.seq.call(null,seq__35758_35762);
if(temp__6753__auto___35771){
var seq__35758_35772__$1 = temp__6753__auto___35771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35758_35772__$1)){
var c__30658__auto___35773 = cljs.core.chunk_first.call(null,seq__35758_35772__$1);
var G__35774 = cljs.core.chunk_rest.call(null,seq__35758_35772__$1);
var G__35775 = c__30658__auto___35773;
var G__35776 = cljs.core.count.call(null,c__30658__auto___35773);
var G__35777 = (0);
seq__35758_35762 = G__35774;
chunk__35759_35763 = G__35775;
count__35760_35764 = G__35776;
i__35761_35765 = G__35777;
continue;
} else {
var ns_35778 = cljs.core.first.call(null,seq__35758_35772__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35778);

var G__35779 = cljs.core.next.call(null,seq__35758_35772__$1);
var G__35780 = null;
var G__35781 = (0);
var G__35782 = (0);
seq__35758_35762 = G__35779;
chunk__35759_35763 = G__35780;
count__35760_35764 = G__35781;
i__35761_35765 = G__35782;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29752__auto__ = goog.require__;
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35783__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35784__i = 0, G__35784__a = new Array(arguments.length -  0);
while (G__35784__i < G__35784__a.length) {G__35784__a[G__35784__i] = arguments[G__35784__i + 0]; ++G__35784__i;}
  args = new cljs.core.IndexedSeq(G__35784__a,0);
} 
return G__35783__delegate.call(this,args);};
G__35783.cljs$lang$maxFixedArity = 0;
G__35783.cljs$lang$applyTo = (function (arglist__35785){
var args = cljs.core.seq(arglist__35785);
return G__35783__delegate(args);
});
G__35783.cljs$core$IFn$_invoke$arity$variadic = G__35783__delegate;
return G__35783;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35787 = cljs.core._EQ_;
var expr__35788 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35787.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35788))){
var path_parts = ((function (pred__35787,expr__35788){
return (function (p1__35786_SHARP_){
return clojure.string.split.call(null,p1__35786_SHARP_,/[\/\\]/);
});})(pred__35787,expr__35788))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35787,expr__35788){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35790){if((e35790 instanceof Error)){
var e = e35790;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35790;

}
}})());
});
;})(path_parts,sep,root,pred__35787,expr__35788))
} else {
if(cljs.core.truth_(pred__35787.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35788))){
return ((function (pred__35787,expr__35788){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35787,expr__35788){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35787,expr__35788))
);

return deferred.addErrback(((function (deferred,pred__35787,expr__35788){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35787,expr__35788))
);
});
;})(pred__35787,expr__35788))
} else {
return ((function (pred__35787,expr__35788){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35787,expr__35788))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35791,callback){
var map__35794 = p__35791;
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var file_msg = map__35794__$1;
var request_url = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35794,map__35794__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35794,map__35794__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__){
return (function (state_35818){
var state_val_35819 = (state_35818[(1)]);
if((state_val_35819 === (7))){
var inst_35814 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35820_35840 = state_35818__$1;
(statearr_35820_35840[(2)] = inst_35814);

(statearr_35820_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (1))){
var state_35818__$1 = state_35818;
var statearr_35821_35841 = state_35818__$1;
(statearr_35821_35841[(2)] = null);

(statearr_35821_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (4))){
var inst_35798 = (state_35818[(7)]);
var inst_35798__$1 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35822 = state_35818;
(statearr_35822[(7)] = inst_35798__$1);

return statearr_35822;
})();
if(cljs.core.truth_(inst_35798__$1)){
var statearr_35823_35842 = state_35818__$1;
(statearr_35823_35842[(1)] = (5));

} else {
var statearr_35824_35843 = state_35818__$1;
(statearr_35824_35843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (6))){
var state_35818__$1 = state_35818;
var statearr_35825_35844 = state_35818__$1;
(statearr_35825_35844[(2)] = null);

(statearr_35825_35844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (3))){
var inst_35816 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35818__$1,inst_35816);
} else {
if((state_val_35819 === (2))){
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35819 === (11))){
var inst_35810 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35826 = state_35818;
(statearr_35826[(8)] = inst_35810);

return statearr_35826;
})();
var statearr_35827_35845 = state_35818__$1;
(statearr_35827_35845[(2)] = null);

(statearr_35827_35845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (9))){
var inst_35802 = (state_35818[(9)]);
var inst_35804 = (state_35818[(10)]);
var inst_35806 = inst_35804.call(null,inst_35802);
var state_35818__$1 = state_35818;
var statearr_35828_35846 = state_35818__$1;
(statearr_35828_35846[(2)] = inst_35806);

(statearr_35828_35846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (5))){
var inst_35798 = (state_35818[(7)]);
var inst_35800 = figwheel.client.file_reloading.blocking_load.call(null,inst_35798);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,(8),inst_35800);
} else {
if((state_val_35819 === (10))){
var inst_35802 = (state_35818[(9)]);
var inst_35808 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35802);
var state_35818__$1 = state_35818;
var statearr_35829_35847 = state_35818__$1;
(statearr_35829_35847[(2)] = inst_35808);

(statearr_35829_35847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (8))){
var inst_35798 = (state_35818[(7)]);
var inst_35804 = (state_35818[(10)]);
var inst_35802 = (state_35818[(2)]);
var inst_35803 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35804__$1 = cljs.core.get.call(null,inst_35803,inst_35798);
var state_35818__$1 = (function (){var statearr_35830 = state_35818;
(statearr_35830[(9)] = inst_35802);

(statearr_35830[(10)] = inst_35804__$1);

return statearr_35830;
})();
if(cljs.core.truth_(inst_35804__$1)){
var statearr_35831_35848 = state_35818__$1;
(statearr_35831_35848[(1)] = (9));

} else {
var statearr_35832_35849 = state_35818__$1;
(statearr_35832_35849[(1)] = (10));

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
});})(c__32651__auto__))
;
return ((function (switch__32537__auto__,c__32651__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32538__auto__ = null;
var figwheel$client$file_reloading$state_machine__32538__auto____0 = (function (){
var statearr_35836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35836[(0)] = figwheel$client$file_reloading$state_machine__32538__auto__);

(statearr_35836[(1)] = (1));

return statearr_35836;
});
var figwheel$client$file_reloading$state_machine__32538__auto____1 = (function (state_35818){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35837){if((e35837 instanceof Object)){
var ex__32541__auto__ = e35837;
var statearr_35838_35850 = state_35818;
(statearr_35838_35850[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35851 = state_35818;
state_35818 = G__35851;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32538__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32538__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32538__auto____0;
figwheel$client$file_reloading$state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32538__auto____1;
return figwheel$client$file_reloading$state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__))
})();
var state__32653__auto__ = (function (){var statearr_35839 = f__32652__auto__.call(null);
(statearr_35839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_35839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__))
);

return c__32651__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35852,callback){
var map__35855 = p__35852;
var map__35855__$1 = ((((!((map__35855 == null)))?((((map__35855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35855):map__35855);
var file_msg = map__35855__$1;
var namespace = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35855,map__35855__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35855,map__35855__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35857){
var map__35860 = p__35857;
var map__35860__$1 = ((((!((map__35860 == null)))?((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35860):map__35860);
var file_msg = map__35860__$1;
var namespace = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29740__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29740__auto__){
var or__29752__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29752__auto__)){
return or__29752__auto__;
} else {
var or__29752__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29752__auto____$1)){
return or__29752__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29740__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35862,callback){
var map__35865 = p__35862;
var map__35865__$1 = ((((!((map__35865 == null)))?((((map__35865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35865):map__35865);
var file_msg = map__35865__$1;
var request_url = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32651__auto___35969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto___35969,out){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto___35969,out){
return (function (state_35951){
var state_val_35952 = (state_35951[(1)]);
if((state_val_35952 === (1))){
var inst_35925 = cljs.core.seq.call(null,files);
var inst_35926 = cljs.core.first.call(null,inst_35925);
var inst_35927 = cljs.core.next.call(null,inst_35925);
var inst_35928 = files;
var state_35951__$1 = (function (){var statearr_35953 = state_35951;
(statearr_35953[(7)] = inst_35928);

(statearr_35953[(8)] = inst_35926);

(statearr_35953[(9)] = inst_35927);

return statearr_35953;
})();
var statearr_35954_35970 = state_35951__$1;
(statearr_35954_35970[(2)] = null);

(statearr_35954_35970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (2))){
var inst_35928 = (state_35951[(7)]);
var inst_35934 = (state_35951[(10)]);
var inst_35933 = cljs.core.seq.call(null,inst_35928);
var inst_35934__$1 = cljs.core.first.call(null,inst_35933);
var inst_35935 = cljs.core.next.call(null,inst_35933);
var inst_35936 = (inst_35934__$1 == null);
var inst_35937 = cljs.core.not.call(null,inst_35936);
var state_35951__$1 = (function (){var statearr_35955 = state_35951;
(statearr_35955[(10)] = inst_35934__$1);

(statearr_35955[(11)] = inst_35935);

return statearr_35955;
})();
if(inst_35937){
var statearr_35956_35971 = state_35951__$1;
(statearr_35956_35971[(1)] = (4));

} else {
var statearr_35957_35972 = state_35951__$1;
(statearr_35957_35972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (3))){
var inst_35949 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35951__$1,inst_35949);
} else {
if((state_val_35952 === (4))){
var inst_35934 = (state_35951[(10)]);
var inst_35939 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35934);
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35951__$1,(7),inst_35939);
} else {
if((state_val_35952 === (5))){
var inst_35945 = cljs.core.async.close_BANG_.call(null,out);
var state_35951__$1 = state_35951;
var statearr_35958_35973 = state_35951__$1;
(statearr_35958_35973[(2)] = inst_35945);

(statearr_35958_35973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (6))){
var inst_35947 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35959_35974 = state_35951__$1;
(statearr_35959_35974[(2)] = inst_35947);

(statearr_35959_35974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (7))){
var inst_35935 = (state_35951[(11)]);
var inst_35941 = (state_35951[(2)]);
var inst_35942 = cljs.core.async.put_BANG_.call(null,out,inst_35941);
var inst_35928 = inst_35935;
var state_35951__$1 = (function (){var statearr_35960 = state_35951;
(statearr_35960[(12)] = inst_35942);

(statearr_35960[(7)] = inst_35928);

return statearr_35960;
})();
var statearr_35961_35975 = state_35951__$1;
(statearr_35961_35975[(2)] = null);

(statearr_35961_35975[(1)] = (2));


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
});})(c__32651__auto___35969,out))
;
return ((function (switch__32537__auto__,c__32651__auto___35969,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____0 = (function (){
var statearr_35965 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____1 = (function (state_35951){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_35951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e35966){if((e35966 instanceof Object)){
var ex__32541__auto__ = e35966;
var statearr_35967_35976 = state_35951;
(statearr_35967_35976[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_35951;
state_35951 = G__35977;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__ = function(state_35951){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____1.call(this,state_35951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto___35969,out))
})();
var state__32653__auto__ = (function (){var statearr_35968 = f__32652__auto__.call(null);
(statearr_35968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto___35969);

return statearr_35968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto___35969,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35978,opts){
var map__35982 = p__35978;
var map__35982__$1 = ((((!((map__35982 == null)))?((((map__35982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35982):map__35982);
var eval_body = cljs.core.get.call(null,map__35982__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29740__auto__ = eval_body;
if(cljs.core.truth_(and__29740__auto__)){
return typeof eval_body === 'string';
} else {
return and__29740__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35984){var e = e35984;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35985_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35985_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35994){
var vec__35995 = p__35994;
var k = cljs.core.nth.call(null,vec__35995,(0),null);
var v = cljs.core.nth.call(null,vec__35995,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35998){
var vec__35999 = p__35998;
var k = cljs.core.nth.call(null,vec__35999,(0),null);
var v = cljs.core.nth.call(null,vec__35999,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36005,p__36006){
var map__36254 = p__36005;
var map__36254__$1 = ((((!((map__36254 == null)))?((((map__36254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36254):map__36254);
var opts = map__36254__$1;
var before_jsload = cljs.core.get.call(null,map__36254__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36254__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36254__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36255 = p__36006;
var map__36255__$1 = ((((!((map__36255 == null)))?((((map__36255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36255):map__36255);
var msg = map__36255__$1;
var files = cljs.core.get.call(null,map__36255__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36255__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36255__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32652__auto__ = (function (){var switch__32537__auto__ = ((function (c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36409){
var state_val_36410 = (state_36409[(1)]);
if((state_val_36410 === (7))){
var inst_36271 = (state_36409[(7)]);
var inst_36269 = (state_36409[(8)]);
var inst_36270 = (state_36409[(9)]);
var inst_36272 = (state_36409[(10)]);
var inst_36277 = cljs.core._nth.call(null,inst_36270,inst_36272);
var inst_36278 = figwheel.client.file_reloading.eval_body.call(null,inst_36277,opts);
var inst_36279 = (inst_36272 + (1));
var tmp36411 = inst_36271;
var tmp36412 = inst_36269;
var tmp36413 = inst_36270;
var inst_36269__$1 = tmp36412;
var inst_36270__$1 = tmp36413;
var inst_36271__$1 = tmp36411;
var inst_36272__$1 = inst_36279;
var state_36409__$1 = (function (){var statearr_36414 = state_36409;
(statearr_36414[(11)] = inst_36278);

(statearr_36414[(7)] = inst_36271__$1);

(statearr_36414[(8)] = inst_36269__$1);

(statearr_36414[(9)] = inst_36270__$1);

(statearr_36414[(10)] = inst_36272__$1);

return statearr_36414;
})();
var statearr_36415_36501 = state_36409__$1;
(statearr_36415_36501[(2)] = null);

(statearr_36415_36501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (20))){
var inst_36312 = (state_36409[(12)]);
var inst_36320 = figwheel.client.file_reloading.sort_files.call(null,inst_36312);
var state_36409__$1 = state_36409;
var statearr_36416_36502 = state_36409__$1;
(statearr_36416_36502[(2)] = inst_36320);

(statearr_36416_36502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (27))){
var state_36409__$1 = state_36409;
var statearr_36417_36503 = state_36409__$1;
(statearr_36417_36503[(2)] = null);

(statearr_36417_36503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (1))){
var inst_36261 = (state_36409[(13)]);
var inst_36258 = before_jsload.call(null,files);
var inst_36259 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36260 = (function (){return ((function (inst_36261,inst_36258,inst_36259,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36002_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36002_SHARP_);
});
;})(inst_36261,inst_36258,inst_36259,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36261__$1 = cljs.core.filter.call(null,inst_36260,files);
var inst_36262 = cljs.core.not_empty.call(null,inst_36261__$1);
var state_36409__$1 = (function (){var statearr_36418 = state_36409;
(statearr_36418[(13)] = inst_36261__$1);

(statearr_36418[(14)] = inst_36258);

(statearr_36418[(15)] = inst_36259);

return statearr_36418;
})();
if(cljs.core.truth_(inst_36262)){
var statearr_36419_36504 = state_36409__$1;
(statearr_36419_36504[(1)] = (2));

} else {
var statearr_36420_36505 = state_36409__$1;
(statearr_36420_36505[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (24))){
var state_36409__$1 = state_36409;
var statearr_36421_36506 = state_36409__$1;
(statearr_36421_36506[(2)] = null);

(statearr_36421_36506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (39))){
var inst_36362 = (state_36409[(16)]);
var state_36409__$1 = state_36409;
var statearr_36422_36507 = state_36409__$1;
(statearr_36422_36507[(2)] = inst_36362);

(statearr_36422_36507[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (46))){
var inst_36404 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36423_36508 = state_36409__$1;
(statearr_36423_36508[(2)] = inst_36404);

(statearr_36423_36508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (4))){
var inst_36306 = (state_36409[(2)]);
var inst_36307 = cljs.core.List.EMPTY;
var inst_36308 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36307);
var inst_36309 = (function (){return ((function (inst_36306,inst_36307,inst_36308,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36003_SHARP_){
var and__29740__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36003_SHARP_);
if(cljs.core.truth_(and__29740__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36003_SHARP_));
} else {
return and__29740__auto__;
}
});
;})(inst_36306,inst_36307,inst_36308,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36310 = cljs.core.filter.call(null,inst_36309,files);
var inst_36311 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36312 = cljs.core.concat.call(null,inst_36310,inst_36311);
var state_36409__$1 = (function (){var statearr_36424 = state_36409;
(statearr_36424[(12)] = inst_36312);

(statearr_36424[(17)] = inst_36306);

(statearr_36424[(18)] = inst_36308);

return statearr_36424;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36425_36509 = state_36409__$1;
(statearr_36425_36509[(1)] = (16));

} else {
var statearr_36426_36510 = state_36409__$1;
(statearr_36426_36510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (15))){
var inst_36296 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36427_36511 = state_36409__$1;
(statearr_36427_36511[(2)] = inst_36296);

(statearr_36427_36511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (21))){
var inst_36322 = (state_36409[(19)]);
var inst_36322__$1 = (state_36409[(2)]);
var inst_36323 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36322__$1);
var state_36409__$1 = (function (){var statearr_36428 = state_36409;
(statearr_36428[(19)] = inst_36322__$1);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36409__$1,(22),inst_36323);
} else {
if((state_val_36410 === (31))){
var inst_36407 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36409__$1,inst_36407);
} else {
if((state_val_36410 === (32))){
var inst_36362 = (state_36409[(16)]);
var inst_36367 = inst_36362.cljs$lang$protocol_mask$partition0$;
var inst_36368 = (inst_36367 & (64));
var inst_36369 = inst_36362.cljs$core$ISeq$;
var inst_36370 = (cljs.core.PROTOCOL_SENTINEL === inst_36369);
var inst_36371 = (inst_36368) || (inst_36370);
var state_36409__$1 = state_36409;
if(cljs.core.truth_(inst_36371)){
var statearr_36429_36512 = state_36409__$1;
(statearr_36429_36512[(1)] = (35));

} else {
var statearr_36430_36513 = state_36409__$1;
(statearr_36430_36513[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (40))){
var inst_36384 = (state_36409[(20)]);
var inst_36383 = (state_36409[(2)]);
var inst_36384__$1 = cljs.core.get.call(null,inst_36383,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36385 = cljs.core.get.call(null,inst_36383,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36386 = cljs.core.not_empty.call(null,inst_36384__$1);
var state_36409__$1 = (function (){var statearr_36431 = state_36409;
(statearr_36431[(20)] = inst_36384__$1);

(statearr_36431[(21)] = inst_36385);

return statearr_36431;
})();
if(cljs.core.truth_(inst_36386)){
var statearr_36432_36514 = state_36409__$1;
(statearr_36432_36514[(1)] = (41));

} else {
var statearr_36433_36515 = state_36409__$1;
(statearr_36433_36515[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (33))){
var state_36409__$1 = state_36409;
var statearr_36434_36516 = state_36409__$1;
(statearr_36434_36516[(2)] = false);

(statearr_36434_36516[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (13))){
var inst_36282 = (state_36409[(22)]);
var inst_36286 = cljs.core.chunk_first.call(null,inst_36282);
var inst_36287 = cljs.core.chunk_rest.call(null,inst_36282);
var inst_36288 = cljs.core.count.call(null,inst_36286);
var inst_36269 = inst_36287;
var inst_36270 = inst_36286;
var inst_36271 = inst_36288;
var inst_36272 = (0);
var state_36409__$1 = (function (){var statearr_36435 = state_36409;
(statearr_36435[(7)] = inst_36271);

(statearr_36435[(8)] = inst_36269);

(statearr_36435[(9)] = inst_36270);

(statearr_36435[(10)] = inst_36272);

return statearr_36435;
})();
var statearr_36436_36517 = state_36409__$1;
(statearr_36436_36517[(2)] = null);

(statearr_36436_36517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (22))){
var inst_36325 = (state_36409[(23)]);
var inst_36322 = (state_36409[(19)]);
var inst_36326 = (state_36409[(24)]);
var inst_36330 = (state_36409[(25)]);
var inst_36325__$1 = (state_36409[(2)]);
var inst_36326__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36325__$1);
var inst_36327 = (function (){var all_files = inst_36322;
var res_SINGLEQUOTE_ = inst_36325__$1;
var res = inst_36326__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36325,inst_36322,inst_36326,inst_36330,inst_36325__$1,inst_36326__$1,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36004_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36004_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36325,inst_36322,inst_36326,inst_36330,inst_36325__$1,inst_36326__$1,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36328 = cljs.core.filter.call(null,inst_36327,inst_36325__$1);
var inst_36329 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36330__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36329);
var inst_36331 = cljs.core.not_empty.call(null,inst_36330__$1);
var state_36409__$1 = (function (){var statearr_36437 = state_36409;
(statearr_36437[(23)] = inst_36325__$1);

(statearr_36437[(26)] = inst_36328);

(statearr_36437[(24)] = inst_36326__$1);

(statearr_36437[(25)] = inst_36330__$1);

return statearr_36437;
})();
if(cljs.core.truth_(inst_36331)){
var statearr_36438_36518 = state_36409__$1;
(statearr_36438_36518[(1)] = (23));

} else {
var statearr_36439_36519 = state_36409__$1;
(statearr_36439_36519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (36))){
var state_36409__$1 = state_36409;
var statearr_36440_36520 = state_36409__$1;
(statearr_36440_36520[(2)] = false);

(statearr_36440_36520[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (41))){
var inst_36384 = (state_36409[(20)]);
var inst_36388 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36389 = cljs.core.map.call(null,inst_36388,inst_36384);
var inst_36390 = cljs.core.pr_str.call(null,inst_36389);
var inst_36391 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36390)].join('');
var inst_36392 = figwheel.client.utils.log.call(null,inst_36391);
var state_36409__$1 = state_36409;
var statearr_36441_36521 = state_36409__$1;
(statearr_36441_36521[(2)] = inst_36392);

(statearr_36441_36521[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (43))){
var inst_36385 = (state_36409[(21)]);
var inst_36395 = (state_36409[(2)]);
var inst_36396 = cljs.core.not_empty.call(null,inst_36385);
var state_36409__$1 = (function (){var statearr_36442 = state_36409;
(statearr_36442[(27)] = inst_36395);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36396)){
var statearr_36443_36522 = state_36409__$1;
(statearr_36443_36522[(1)] = (44));

} else {
var statearr_36444_36523 = state_36409__$1;
(statearr_36444_36523[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (29))){
var inst_36325 = (state_36409[(23)]);
var inst_36328 = (state_36409[(26)]);
var inst_36322 = (state_36409[(19)]);
var inst_36326 = (state_36409[(24)]);
var inst_36362 = (state_36409[(16)]);
var inst_36330 = (state_36409[(25)]);
var inst_36358 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36361 = (function (){var all_files = inst_36322;
var res_SINGLEQUOTE_ = inst_36325;
var res = inst_36326;
var files_not_loaded = inst_36328;
var dependencies_that_loaded = inst_36330;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36362,inst_36330,inst_36358,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36360){
var map__36445 = p__36360;
var map__36445__$1 = ((((!((map__36445 == null)))?((((map__36445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36445):map__36445);
var namespace = cljs.core.get.call(null,map__36445__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36362,inst_36330,inst_36358,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36362__$1 = cljs.core.group_by.call(null,inst_36361,inst_36328);
var inst_36364 = (inst_36362__$1 == null);
var inst_36365 = cljs.core.not.call(null,inst_36364);
var state_36409__$1 = (function (){var statearr_36447 = state_36409;
(statearr_36447[(16)] = inst_36362__$1);

(statearr_36447[(28)] = inst_36358);

return statearr_36447;
})();
if(inst_36365){
var statearr_36448_36524 = state_36409__$1;
(statearr_36448_36524[(1)] = (32));

} else {
var statearr_36449_36525 = state_36409__$1;
(statearr_36449_36525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (44))){
var inst_36385 = (state_36409[(21)]);
var inst_36398 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36385);
var inst_36399 = cljs.core.pr_str.call(null,inst_36398);
var inst_36400 = [cljs.core.str("not required: "),cljs.core.str(inst_36399)].join('');
var inst_36401 = figwheel.client.utils.log.call(null,inst_36400);
var state_36409__$1 = state_36409;
var statearr_36450_36526 = state_36409__$1;
(statearr_36450_36526[(2)] = inst_36401);

(statearr_36450_36526[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (6))){
var inst_36303 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36451_36527 = state_36409__$1;
(statearr_36451_36527[(2)] = inst_36303);

(statearr_36451_36527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (28))){
var inst_36328 = (state_36409[(26)]);
var inst_36355 = (state_36409[(2)]);
var inst_36356 = cljs.core.not_empty.call(null,inst_36328);
var state_36409__$1 = (function (){var statearr_36452 = state_36409;
(statearr_36452[(29)] = inst_36355);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36356)){
var statearr_36453_36528 = state_36409__$1;
(statearr_36453_36528[(1)] = (29));

} else {
var statearr_36454_36529 = state_36409__$1;
(statearr_36454_36529[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (25))){
var inst_36326 = (state_36409[(24)]);
var inst_36342 = (state_36409[(2)]);
var inst_36343 = cljs.core.not_empty.call(null,inst_36326);
var state_36409__$1 = (function (){var statearr_36455 = state_36409;
(statearr_36455[(30)] = inst_36342);

return statearr_36455;
})();
if(cljs.core.truth_(inst_36343)){
var statearr_36456_36530 = state_36409__$1;
(statearr_36456_36530[(1)] = (26));

} else {
var statearr_36457_36531 = state_36409__$1;
(statearr_36457_36531[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (34))){
var inst_36378 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
if(cljs.core.truth_(inst_36378)){
var statearr_36458_36532 = state_36409__$1;
(statearr_36458_36532[(1)] = (38));

} else {
var statearr_36459_36533 = state_36409__$1;
(statearr_36459_36533[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (17))){
var state_36409__$1 = state_36409;
var statearr_36460_36534 = state_36409__$1;
(statearr_36460_36534[(2)] = recompile_dependents);

(statearr_36460_36534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (3))){
var state_36409__$1 = state_36409;
var statearr_36461_36535 = state_36409__$1;
(statearr_36461_36535[(2)] = null);

(statearr_36461_36535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (12))){
var inst_36299 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36462_36536 = state_36409__$1;
(statearr_36462_36536[(2)] = inst_36299);

(statearr_36462_36536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (2))){
var inst_36261 = (state_36409[(13)]);
var inst_36268 = cljs.core.seq.call(null,inst_36261);
var inst_36269 = inst_36268;
var inst_36270 = null;
var inst_36271 = (0);
var inst_36272 = (0);
var state_36409__$1 = (function (){var statearr_36463 = state_36409;
(statearr_36463[(7)] = inst_36271);

(statearr_36463[(8)] = inst_36269);

(statearr_36463[(9)] = inst_36270);

(statearr_36463[(10)] = inst_36272);

return statearr_36463;
})();
var statearr_36464_36537 = state_36409__$1;
(statearr_36464_36537[(2)] = null);

(statearr_36464_36537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (23))){
var inst_36325 = (state_36409[(23)]);
var inst_36328 = (state_36409[(26)]);
var inst_36322 = (state_36409[(19)]);
var inst_36326 = (state_36409[(24)]);
var inst_36330 = (state_36409[(25)]);
var inst_36333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36335 = (function (){var all_files = inst_36322;
var res_SINGLEQUOTE_ = inst_36325;
var res = inst_36326;
var files_not_loaded = inst_36328;
var dependencies_that_loaded = inst_36330;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36333,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36334){
var map__36465 = p__36334;
var map__36465__$1 = ((((!((map__36465 == null)))?((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36465):map__36465);
var request_url = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36333,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36336 = cljs.core.reverse.call(null,inst_36330);
var inst_36337 = cljs.core.map.call(null,inst_36335,inst_36336);
var inst_36338 = cljs.core.pr_str.call(null,inst_36337);
var inst_36339 = figwheel.client.utils.log.call(null,inst_36338);
var state_36409__$1 = (function (){var statearr_36467 = state_36409;
(statearr_36467[(31)] = inst_36333);

return statearr_36467;
})();
var statearr_36468_36538 = state_36409__$1;
(statearr_36468_36538[(2)] = inst_36339);

(statearr_36468_36538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (35))){
var state_36409__$1 = state_36409;
var statearr_36469_36539 = state_36409__$1;
(statearr_36469_36539[(2)] = true);

(statearr_36469_36539[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (19))){
var inst_36312 = (state_36409[(12)]);
var inst_36318 = figwheel.client.file_reloading.expand_files.call(null,inst_36312);
var state_36409__$1 = state_36409;
var statearr_36470_36540 = state_36409__$1;
(statearr_36470_36540[(2)] = inst_36318);

(statearr_36470_36540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (11))){
var state_36409__$1 = state_36409;
var statearr_36471_36541 = state_36409__$1;
(statearr_36471_36541[(2)] = null);

(statearr_36471_36541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (9))){
var inst_36301 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36472_36542 = state_36409__$1;
(statearr_36472_36542[(2)] = inst_36301);

(statearr_36472_36542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (5))){
var inst_36271 = (state_36409[(7)]);
var inst_36272 = (state_36409[(10)]);
var inst_36274 = (inst_36272 < inst_36271);
var inst_36275 = inst_36274;
var state_36409__$1 = state_36409;
if(cljs.core.truth_(inst_36275)){
var statearr_36473_36543 = state_36409__$1;
(statearr_36473_36543[(1)] = (7));

} else {
var statearr_36474_36544 = state_36409__$1;
(statearr_36474_36544[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (14))){
var inst_36282 = (state_36409[(22)]);
var inst_36291 = cljs.core.first.call(null,inst_36282);
var inst_36292 = figwheel.client.file_reloading.eval_body.call(null,inst_36291,opts);
var inst_36293 = cljs.core.next.call(null,inst_36282);
var inst_36269 = inst_36293;
var inst_36270 = null;
var inst_36271 = (0);
var inst_36272 = (0);
var state_36409__$1 = (function (){var statearr_36475 = state_36409;
(statearr_36475[(7)] = inst_36271);

(statearr_36475[(8)] = inst_36269);

(statearr_36475[(9)] = inst_36270);

(statearr_36475[(32)] = inst_36292);

(statearr_36475[(10)] = inst_36272);

return statearr_36475;
})();
var statearr_36476_36545 = state_36409__$1;
(statearr_36476_36545[(2)] = null);

(statearr_36476_36545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (45))){
var state_36409__$1 = state_36409;
var statearr_36477_36546 = state_36409__$1;
(statearr_36477_36546[(2)] = null);

(statearr_36477_36546[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (26))){
var inst_36325 = (state_36409[(23)]);
var inst_36328 = (state_36409[(26)]);
var inst_36322 = (state_36409[(19)]);
var inst_36326 = (state_36409[(24)]);
var inst_36330 = (state_36409[(25)]);
var inst_36345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36347 = (function (){var all_files = inst_36322;
var res_SINGLEQUOTE_ = inst_36325;
var res = inst_36326;
var files_not_loaded = inst_36328;
var dependencies_that_loaded = inst_36330;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36345,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36346){
var map__36478 = p__36346;
var map__36478__$1 = ((((!((map__36478 == null)))?((((map__36478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36478):map__36478);
var namespace = cljs.core.get.call(null,map__36478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36345,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36348 = cljs.core.map.call(null,inst_36347,inst_36326);
var inst_36349 = cljs.core.pr_str.call(null,inst_36348);
var inst_36350 = figwheel.client.utils.log.call(null,inst_36349);
var inst_36351 = (function (){var all_files = inst_36322;
var res_SINGLEQUOTE_ = inst_36325;
var res = inst_36326;
var files_not_loaded = inst_36328;
var dependencies_that_loaded = inst_36330;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36345,inst_36347,inst_36348,inst_36349,inst_36350,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36325,inst_36328,inst_36322,inst_36326,inst_36330,inst_36345,inst_36347,inst_36348,inst_36349,inst_36350,state_val_36410,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36352 = setTimeout(inst_36351,(10));
var state_36409__$1 = (function (){var statearr_36480 = state_36409;
(statearr_36480[(33)] = inst_36345);

(statearr_36480[(34)] = inst_36350);

return statearr_36480;
})();
var statearr_36481_36547 = state_36409__$1;
(statearr_36481_36547[(2)] = inst_36352);

(statearr_36481_36547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (16))){
var state_36409__$1 = state_36409;
var statearr_36482_36548 = state_36409__$1;
(statearr_36482_36548[(2)] = reload_dependents);

(statearr_36482_36548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (38))){
var inst_36362 = (state_36409[(16)]);
var inst_36380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36362);
var state_36409__$1 = state_36409;
var statearr_36483_36549 = state_36409__$1;
(statearr_36483_36549[(2)] = inst_36380);

(statearr_36483_36549[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (30))){
var state_36409__$1 = state_36409;
var statearr_36484_36550 = state_36409__$1;
(statearr_36484_36550[(2)] = null);

(statearr_36484_36550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (10))){
var inst_36282 = (state_36409[(22)]);
var inst_36284 = cljs.core.chunked_seq_QMARK_.call(null,inst_36282);
var state_36409__$1 = state_36409;
if(inst_36284){
var statearr_36485_36551 = state_36409__$1;
(statearr_36485_36551[(1)] = (13));

} else {
var statearr_36486_36552 = state_36409__$1;
(statearr_36486_36552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (18))){
var inst_36316 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
if(cljs.core.truth_(inst_36316)){
var statearr_36487_36553 = state_36409__$1;
(statearr_36487_36553[(1)] = (19));

} else {
var statearr_36488_36554 = state_36409__$1;
(statearr_36488_36554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (42))){
var state_36409__$1 = state_36409;
var statearr_36489_36555 = state_36409__$1;
(statearr_36489_36555[(2)] = null);

(statearr_36489_36555[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (37))){
var inst_36375 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36490_36556 = state_36409__$1;
(statearr_36490_36556[(2)] = inst_36375);

(statearr_36490_36556[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (8))){
var inst_36282 = (state_36409[(22)]);
var inst_36269 = (state_36409[(8)]);
var inst_36282__$1 = cljs.core.seq.call(null,inst_36269);
var state_36409__$1 = (function (){var statearr_36491 = state_36409;
(statearr_36491[(22)] = inst_36282__$1);

return statearr_36491;
})();
if(inst_36282__$1){
var statearr_36492_36557 = state_36409__$1;
(statearr_36492_36557[(1)] = (10));

} else {
var statearr_36493_36558 = state_36409__$1;
(statearr_36493_36558[(1)] = (11));

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
}
});})(c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32537__auto__,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____0 = (function (){
var statearr_36497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36497[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__);

(statearr_36497[(1)] = (1));

return statearr_36497;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____1 = (function (state_36409){
while(true){
var ret_value__32539__auto__ = (function (){try{while(true){
var result__32540__auto__ = switch__32537__auto__.call(null,state_36409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32540__auto__;
}
break;
}
}catch (e36498){if((e36498 instanceof Object)){
var ex__32541__auto__ = e36498;
var statearr_36499_36559 = state_36409;
(statearr_36499_36559[(5)] = ex__32541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36560 = state_36409;
state_36409 = G__36560;
continue;
} else {
return ret_value__32539__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__ = function(state_36409){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____1.call(this,state_36409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32538__auto__;
})()
;})(switch__32537__auto__,c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32653__auto__ = (function (){var statearr_36500 = f__32652__auto__.call(null);
(statearr_36500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32651__auto__);

return statearr_36500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32653__auto__);
});})(c__32651__auto__,map__36254,map__36254__$1,opts,before_jsload,on_jsload,reload_dependents,map__36255,map__36255__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32651__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36563,link){
var map__36566 = p__36563;
var map__36566__$1 = ((((!((map__36566 == null)))?((((map__36566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36566):map__36566);
var file = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__36566,map__36566__$1,file){
return (function (p1__36561_SHARP_,p2__36562_SHARP_){
if(cljs.core._EQ_.call(null,p1__36561_SHARP_,p2__36562_SHARP_)){
return p1__36561_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__36566,map__36566__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36572){
var map__36573 = p__36572;
var map__36573__$1 = ((((!((map__36573 == null)))?((((map__36573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36573):map__36573);
var match_length = cljs.core.get.call(null,map__36573__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36573__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36568_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36568_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args36575 = [];
var len__30968__auto___36578 = arguments.length;
var i__30969__auto___36579 = (0);
while(true){
if((i__30969__auto___36579 < len__30968__auto___36578)){
args36575.push((arguments[i__30969__auto___36579]));

var G__36580 = (i__30969__auto___36579 + (1));
i__30969__auto___36579 = G__36580;
continue;
} else {
}
break;
}

var G__36577 = args36575.length;
switch (G__36577) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36575.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36582_SHARP_,p2__36583_SHARP_){
return cljs.core.assoc.call(null,p1__36582_SHARP_,cljs.core.get.call(null,p2__36583_SHARP_,key),p2__36583_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36584){
var map__36587 = p__36584;
var map__36587__$1 = ((((!((map__36587 == null)))?((((map__36587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36587):map__36587);
var f_data = map__36587__$1;
var file = cljs.core.get.call(null,map__36587__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36589,p__36590){
var map__36599 = p__36589;
var map__36599__$1 = ((((!((map__36599 == null)))?((((map__36599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36599):map__36599);
var opts = map__36599__$1;
var on_cssload = cljs.core.get.call(null,map__36599__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36600 = p__36590;
var map__36600__$1 = ((((!((map__36600 == null)))?((((map__36600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36600):map__36600);
var files_msg = map__36600__$1;
var files = cljs.core.get.call(null,map__36600__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36603_36607 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36604_36608 = null;
var count__36605_36609 = (0);
var i__36606_36610 = (0);
while(true){
if((i__36606_36610 < count__36605_36609)){
var f_36611 = cljs.core._nth.call(null,chunk__36604_36608,i__36606_36610);
figwheel.client.file_reloading.reload_css_file.call(null,f_36611);

var G__36612 = seq__36603_36607;
var G__36613 = chunk__36604_36608;
var G__36614 = count__36605_36609;
var G__36615 = (i__36606_36610 + (1));
seq__36603_36607 = G__36612;
chunk__36604_36608 = G__36613;
count__36605_36609 = G__36614;
i__36606_36610 = G__36615;
continue;
} else {
var temp__6753__auto___36616 = cljs.core.seq.call(null,seq__36603_36607);
if(temp__6753__auto___36616){
var seq__36603_36617__$1 = temp__6753__auto___36616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36603_36617__$1)){
var c__30658__auto___36618 = cljs.core.chunk_first.call(null,seq__36603_36617__$1);
var G__36619 = cljs.core.chunk_rest.call(null,seq__36603_36617__$1);
var G__36620 = c__30658__auto___36618;
var G__36621 = cljs.core.count.call(null,c__30658__auto___36618);
var G__36622 = (0);
seq__36603_36607 = G__36619;
chunk__36604_36608 = G__36620;
count__36605_36609 = G__36621;
i__36606_36610 = G__36622;
continue;
} else {
var f_36623 = cljs.core.first.call(null,seq__36603_36617__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36623);

var G__36624 = cljs.core.next.call(null,seq__36603_36617__$1);
var G__36625 = null;
var G__36626 = (0);
var G__36627 = (0);
seq__36603_36607 = G__36624;
chunk__36604_36608 = G__36625;
count__36605_36609 = G__36626;
i__36606_36610 = G__36627;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36599,map__36599__$1,opts,on_cssload,map__36600,map__36600__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36599,map__36599__$1,opts,on_cssload,map__36600,map__36600__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483561369897