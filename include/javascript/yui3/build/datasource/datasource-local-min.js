/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 3.0.0
 build: 1549
 */
YUI.add("datasource-local",function(C){var B=C.Lang,A=function(){A.superclass.constructor.apply(this,arguments);};C.mix(A,{NAME:"dataSourceLocal",ATTRS:{source:{value:null}},_tId:0,issueCallback:function(E){if(E.callback){var D=(E.error&&E.callback.failure)||E.callback.success;if(D){D(E);}}}});C.extend(A,C.Base,{initializer:function(D){this._initEvents();},_initEvents:function(){this.publish("request",{defaultFn:C.bind("_defRequestFn",this),queuable:true});this.publish("data",{defaultFn:C.bind("_defDataFn",this),queuable:true});this.publish("response",{defaultFn:C.bind("_defResponseFn",this),queuable:true});},_defRequestFn:function(E){var D=this.get("source");if(B.isUndefined(D)){E.error=new Error("Local source undefined");}if(E.error){this.fire("error",E);}this.fire("data",C.mix({data:D},E));},_defDataFn:function(G){var E=G.data,F=G.meta,D={results:(B.isArray(E))?E:[E],meta:(F)?F:{}};this.fire("response",C.mix({response:D},G));},_defResponseFn:function(D){A.issueCallback(D);},sendRequest:function(E,G,D){var F=A._tId++;this.fire("request",{tId:F,request:E,callback:G,cfg:D||{}});return F;}});C.namespace("DataSource").Local=A;},"3.0.0",{requires:["base"]});