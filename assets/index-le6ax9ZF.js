(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function h_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},ru={},jm={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),p_=Symbol.for("react.portal"),m_=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),v_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),S_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),fh=Symbol.iterator;function w_(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var Xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,qm={};function as(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||Xm}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=as.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||Xm}var Vf=Gf.prototype=new $m;Vf.constructor=Gf;Ym(Vf,as.prototype);Vf.isPureReactComponent=!0;var dh=Array.isArray,Km=Object.prototype.hasOwnProperty,Wf={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Km.call(e,i)&&!Zm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:o,ref:s,props:r,_owner:Wf.current}}function T_(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function A_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hh=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A_(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ca:case p_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Du(s,0):i,dh(r)?(n="",t!=null&&(n=t.replace(hh,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(jf(r)&&(r=T_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(hh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",dh(t))for(var a=0;a<t.length;a++){o=t[a];var u=i+Du(o,a);s+=ml(o,e,n,u,r)}else if(u=w_(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=i+Du(o,a++),s+=ml(o,e,n,u,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(o){return e.call(n,o,r++)}),i}function R_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mn={current:null},gl={transition:null},C_={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Wf};function Jm(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=as;ot.Fragment=m_;ot.Profiler=v_;ot.PureComponent=Gf;ot.StrictMode=g_;ot.Suspense=S_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;ot.act=Jm;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ym({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Km.call(e,u)&&!Zm.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:o,props:i,_owner:s}};ot.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};ot.createElement=Qm;ot.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:x_,render:t}};ot.isValidElement=jf;ot.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:R_}};ot.memo=function(t,e){return{$$typeof:M_,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};ot.unstable_act=Jm;ot.useCallback=function(t,e){return Mn.current.useCallback(t,e)};ot.useContext=function(t){return Mn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Mn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Mn.current.useEffect(t,e)};ot.useId=function(){return Mn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Mn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Mn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Mn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Mn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Mn.current.useReducer(t,e,n)};ot.useRef=function(t){return Mn.current.useRef(t)};ot.useState=function(t){return Mn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Mn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Mn.current.useTransition()};ot.version="18.3.1";jm.exports=ot;var gt=jm.exports;const eg=h_(gt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=gt,b_=Symbol.for("react.element"),L_=Symbol.for("react.fragment"),D_=Object.prototype.hasOwnProperty,U_=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N_={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)D_.call(e,i)&&!N_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b_,type:t,key:o,ref:s,props:r,_owner:U_.current}}ru.Fragment=L_;ru.jsx=tg;ru.jsxs=tg;Wm.exports=ru;var nt=Wm.exports,Oc={},ng={exports:{}},Hn={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,Y){var $=V.length;V.push(Y);e:for(;0<$;){var B=$-1>>>1,q=V[B];if(0<r(q,Y))V[B]=Y,V[$]=q,$=B;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var Y=V[0],$=V.pop();if($!==Y){V[0]=$;e:for(var B=0,q=V.length,pe=q>>>1;B<pe;){var ge=2*(B+1)-1,Me=V[ge],be=ge+1,$e=V[be];if(0>r(Me,$))be<q&&0>r($e,Me)?(V[B]=$e,V[be]=$,B=be):(V[B]=Me,V[ge]=$,B=ge);else if(be<q&&0>r($e,$))V[B]=$e,V[be]=$,B=be;else break e}}return Y}function r(V,Y){var $=V.sortIndex-Y.sortIndex;return $!==0?$:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,m=null,p=3,_=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=V)i(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function T(V){if(y=!1,S(V),!w)if(n(u)!==null)w=!0,G(P);else{var Y=n(c);Y!==null&&j(T,Y.startTime-V)}}function P(V,Y){w=!1,y&&(y=!1,f(k),k=-1),_=!0;var $=p;try{for(S(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||V&&!F());){var B=m.callback;if(typeof B=="function"){m.callback=null,p=m.priorityLevel;var q=B(m.expirationTime<=Y);Y=t.unstable_now(),typeof q=="function"?m.callback=q:m===n(u)&&i(u),S(Y)}else i(u);m=n(u)}if(m!==null)var pe=!0;else{var ge=n(c);ge!==null&&j(T,ge.startTime-Y),pe=!1}return pe}finally{m=null,p=$,_=!1}}var D=!1,L=null,k=-1,R=5,M=-1;function F(){return!(t.unstable_now()-M<R)}function W(){if(L!==null){var V=t.unstable_now();M=V;var Y=!0;try{Y=L(!0,V)}finally{Y?Z():(D=!1,L=null)}}else D=!1}var Z;if(typeof x=="function")Z=function(){x(W)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,ne=O.port2;O.port1.onmessage=W,Z=function(){ne.postMessage(null)}}else Z=function(){v(W,0)};function G(V){L=V,D||(D=!0,Z())}function j(V,Y){k=v(function(){V(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){w||_||(w=!0,G(P))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var $=p;p=Y;try{return V()}finally{p=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var $=p;p=V;try{return Y()}finally{p=$}},t.unstable_scheduleCallback=function(V,Y,$){var B=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?B+$:B):$=B,V){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=$+q,V={id:h++,callback:Y,priorityLevel:V,startTime:$,expirationTime:q,sortIndex:-1},$>B?(V.sortIndex=$,e(c,V),n(u)===null&&V===n(c)&&(y?(f(k),k=-1):y=!0,j(T,$-B))):(V.sortIndex=q,e(u,V),w||_||(w=!0,G(P))),V},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(V){var Y=p;return function(){var $=p;p=Y;try{return V.apply(this,arguments)}finally{p=$}}}})(rg);ig.exports=rg;var I_=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=gt,Bn=I_;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,js={};function Jr(t,e){Ko(t,e),Ko(t+"Capture",e)}function Ko(t,e){for(js[t]=e,t=0;t<e.length;t++)og.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,O_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function z_(t){return zc.call(mh,t)?!0:zc.call(ph,t)?!1:O_.test(t)?mh[t]=!0:(ph[t]=!0,!1)}function k_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||k_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function En(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new En(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new En(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new En(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new En(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new En(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new En(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new En(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new En(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new En(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xf,Yf);ln[e]=new En(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xf,Yf);ln[e]=new En(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xf,Yf);ln[e]=new En(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new En(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new En("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new En(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,r,i)&&(n=null),i||r===null?z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Po=Symbol.for("react.portal"),bo=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),ag=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),gh=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Uu;function bs(t){if(Uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uu=e&&e[1]||""}return`
`+Uu+t}var Nu=!1;function Iu(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var u=`
`+r[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function H_(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bo:return"Fragment";case Po:return"Portal";case kc:return"Profiler";case $f:return"StrictMode";case Bc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case sg:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V_(t){var e=ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=V_(t))}function cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vc(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function Wc(t,e){fg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Vo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Ls(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function dg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W_=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){W_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j_=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Wo=null,jo=null;function Sh(t){if(t=ha(t)){if(typeof Zc!="function")throw Error(le(280));var e=t.stateNode;e&&(e=uu(e),Zc(t.stateNode,t.type,e))}}function vg(t){Wo?jo?jo.push(t):jo=[t]:Wo=t}function _g(){if(Wo){var t=Wo,e=jo;if(jo=Wo=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function yg(t,e){return t(e)}function xg(){}var Fu=!1;function Sg(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return yg(t,e,n)}finally{Fu=!1,(Wo!==null||jo!==null)&&(xg(),_g())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var i=uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Qc=!1;if(zi)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Qc=!1}function X_(t,e,n,i,r,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Fs=!1,Pl=null,bl=!1,Jc=null,Y_={onError:function(t){Fs=!0,Pl=t}};function q_(t,e,n,i,r,o,s,a,u){Fs=!1,Pl=null,X_.apply(Y_,arguments)}function $_(t,e,n,i,r,o,s,a,u){if(q_.apply(this,arguments),Fs){if(Fs){var c=Pl;Fs=!1,Pl=null}else throw Error(le(198));bl||(bl=!0,Jc=c)}}function eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(eo(t)!==t)throw Error(le(188))}function K_(t){var e=t.alternate;if(!e){if(e=eo(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Mh(r),t;if(o===i)return Mh(r),e;o=o.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Eg(t){return t=K_(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=Bn.unstable_scheduleCallback,Eh=Bn.unstable_cancelCallback,Z_=Bn.unstable_shouldYield,Q_=Bn.unstable_requestPaint,zt=Bn.unstable_now,J_=Bn.unstable_getCurrentPriorityLevel,Jf=Bn.unstable_ImmediatePriority,Ag=Bn.unstable_UserBlockingPriority,Ll=Bn.unstable_NormalPriority,ey=Bn.unstable_LowPriority,Rg=Bn.unstable_IdlePriority,ou=null,Si=null;function ty(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:ry,ny=Math.log,iy=Math.LN2;function ry(t){return t>>>=0,t===0?32:31-(ny(t)/iy|0)|0}var ba=64,La=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ds(a):(o&=s,o!==0&&(i=Ds(o)))}else s=n&~r,s!==0?i=Ds(s):o!==0&&(i=Ds(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-hi(e),r=1<<n,i|=t[n],e&=~r;return i}function oy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-hi(o),a=1<<s,u=r[s];u===-1?(!(a&n)||a&i)&&(r[s]=oy(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hi(e),t[e]=n}function ay(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-hi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-hi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function Pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,td,Lg,Dg,Ug,tf=!1,Da=[],lr=null,ur=null,cr=null,qs=new Map,$s=new Map,tr=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function ys(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uy(t,e,n,i,r){switch(e){case"focusin":return lr=ys(lr,t,e,n,i,r),!0;case"dragenter":return ur=ys(ur,t,e,n,i,r),!0;case"mouseover":return cr=ys(cr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return qs.set(o,ys(qs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$s.set(o,ys($s.get(o)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=Fr(t.target);if(e!==null){var n=eo(e);if(n!==null){if(e=n.tag,e===13){if(e=Mg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kc=i,n.target.dispatchEvent(i),Kc=null}else return e=ha(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){vl(t)&&n.delete(e)}function cy(){tf=!1,lr!==null&&vl(lr)&&(lr=null),ur!==null&&vl(ur)&&(ur=null),cr!==null&&vl(cr)&&(cr=null),qs.forEach(Th),$s.forEach(Th)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,cy)))}function Ks(t){function e(r){return xs(r,t)}if(0<Da.length){xs(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&xs(lr,t),ur!==null&&xs(ur,t),cr!==null&&xs(cr,t),qs.forEach(e),$s.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&tr.shift()}var Xo=Vi.ReactCurrentBatchConfig,Ul=!0;function fy(t,e,n,i){var r=ht,o=Xo.transition;Xo.transition=null;try{ht=1,nd(t,e,n,i)}finally{ht=r,Xo.transition=o}}function dy(t,e,n,i){var r=ht,o=Xo.transition;Xo.transition=null;try{ht=4,nd(t,e,n,i)}finally{ht=r,Xo.transition=o}}function nd(t,e,n,i){if(Ul){var r=nf(t,e,n,i);if(r===null)Yu(t,e,i,Nl,n),wh(t,i);else if(uy(r,t,e,n,i))i.stopPropagation();else if(wh(t,i),e&4&&-1<ly.indexOf(t)){for(;r!==null;){var o=ha(r);if(o!==null&&bg(o),o=nf(t,e,n,i),o===null&&Yu(t,e,i,Nl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Yu(t,e,i,null,n)}}var Nl=null;function nf(t,e,n,i){if(Nl=null,t=Qf(i),t=Fr(t),t!==null)if(e=eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J_()){case Jf:return 1;case Ag:return 4;case Ll:case ey:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var ir=null,id=null,_l=null;function Fg(){if(_l)return _l;var t,e=id,n=e.length,i,r="value"in ir?ir.value:ir.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function Ah(){return!1}function Gn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ua:Ah,this.isPropagationStopped=Ah,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=Gn(ls),da=Nt({},ls,{view:0,detail:0}),hy=Gn(da),zu,ku,Ss,su=Nt({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(zu=t.screenX-Ss.screenX,ku=t.screenY-Ss.screenY):ku=zu=0,Ss=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),Rh=Gn(su),py=Nt({},su,{dataTransfer:0}),my=Gn(py),gy=Nt({},da,{relatedTarget:0}),Bu=Gn(gy),vy=Nt({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Gn(vy),yy=Nt({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=Gn(yy),Sy=Nt({},ls,{data:0}),Ch=Gn(Sy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wy[t])?!!e[t]:!1}function od(){return Ty}var Ay=Nt({},da,{key:function(t){if(t.key){var e=My[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=Gn(Ay),Cy=Nt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Gn(Cy),Py=Nt({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),by=Gn(Py),Ly=Nt({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Gn(Ly),Uy=Nt({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Gn(Uy),Iy=[9,13,27,32],sd=zi&&"CompositionEvent"in window,Os=null;zi&&"documentMode"in document&&(Os=document.documentMode);var Fy=zi&&"TextEvent"in window&&!Os,Og=zi&&(!sd||Os&&8<Os&&11>=Os),bh=" ",Lh=!1;function zg(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lo=!1;function Oy(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(Lh=!0,bh);case"textInput":return t=e.data,t===bh&&Lh?null:t;default:return null}}function zy(t,e){if(Lo)return t==="compositionend"||!sd&&zg(t,e)?(t=Fg(),_l=id=ir=null,Lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ky[t.type]:e==="textarea"}function Bg(t,e,n,i){vg(i),e=Il(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zs=null,Zs=null;function By(t){Zg(t,0)}function au(t){var e=No(t);if(cg(e))return t}function Hy(t,e){if(t==="change")return e}var Hg=!1;if(zi){var Hu;if(zi){var Gu="oninput"in document;if(!Gu){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Gu=typeof Uh.oninput=="function"}Hu=Gu}else Hu=!1;Hg=Hu&&(!document.documentMode||9<document.documentMode)}function Nh(){zs&&(zs.detachEvent("onpropertychange",Gg),Zs=zs=null)}function Gg(t){if(t.propertyName==="value"&&au(Zs)){var e=[];Bg(e,Zs,t,Qf(t)),Sg(By,e)}}function Gy(t,e,n){t==="focusin"?(Nh(),zs=e,Zs=n,zs.attachEvent("onpropertychange",Gg)):t==="focusout"&&Nh()}function Vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Zs)}function Wy(t,e){if(t==="click")return au(e)}function jy(t,e){if(t==="input"||t==="change")return au(e)}function Xy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:Xy;function Qs(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zc.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yy(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&ad(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Fh(n,o);var s=Fh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qy=zi&&"documentMode"in document&&11>=document.documentMode,Do=null,rf=null,ks=null,of=!1;function Oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Do==null||Do!==Cl(i)||(i=Do,"selectionStart"in i&&ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ks&&Qs(ks,i)||(ks=i,i=Il(rf,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Do)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Uo={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Vu={},jg={};zi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function lu(t){if(Vu[t])return Vu[t];if(!Uo[t])return t;var e=Uo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Vu[t]=e[n];return t}var Xg=lu("animationend"),Yg=lu("animationiteration"),qg=lu("animationstart"),$g=lu("transitionend"),Kg=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Kg.set(t,e),Jr(e,[t])}for(var Wu=0;Wu<zh.length;Wu++){var ju=zh[Wu],$y=ju.toLowerCase(),Ky=ju[0].toUpperCase()+ju.slice(1);Mr($y,"on"+Ky)}Mr(Xg,"onAnimationEnd");Mr(Yg,"onAnimationIteration");Mr(qg,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr($g,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$_(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;kh(r,a,c),o=u}else for(s=0;s<i.length;s++){if(a=i[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;kh(r,a,c),o=u}}}if(bl)throw t=Jc,bl=!1,Jc=null,t}function Tt(t,e){var n=e[cf];n===void 0&&(n=e[cf]=new Set);var i=t+"__bubble";n.has(i)||(Qg(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),Qg(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[Ia]){t[Ia]=!0,og.forEach(function(n){n!=="selectionchange"&&(Zy.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Xu("selectionchange",!1,e))}}function Qg(t,e,n,i){switch(Ig(e)){case 1:var r=fy;break;case 4:r=dy;break;default:r=nd}n=r.bind(null,e,n,t),r=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Fr(a),s===null)return;if(u=s.tag,u===5||u===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Sg(function(){var c=o,h=Qf(n),m=[];e:{var p=Kg.get(t);if(p!==void 0){var _=rd,w=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":_=Ry;break;case"focusin":w="focus",_=Bu;break;case"focusout":w="blur",_=Bu;break;case"beforeblur":case"afterblur":_=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=by;break;case Xg:case Yg:case qg:_=_y;break;case $g:_=Dy;break;case"scroll":_=hy;break;case"wheel":_=Ny;break;case"copy":case"cut":case"paste":_=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ph}var y=(e&4)!==0,v=!y&&t==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var x=c,S;x!==null;){S=x;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,f!==null&&(T=Ys(x,f),T!=null&&y.push(ea(x,T,S)))),v)break;x=x.return}0<y.length&&(p=new _(p,w,null,n,h),m.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Kc&&(w=n.relatedTarget||n.fromElement)&&(Fr(w)||w[ki]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=c,w=w?Fr(w):null,w!==null&&(v=eo(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=c),_!==w)){if(y=Rh,T="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ph,T="onPointerLeave",f="onPointerEnter",x="pointer"),v=_==null?p:No(_),S=w==null?p:No(w),p=new y(T,x+"leave",_,n,h),p.target=v,p.relatedTarget=S,T=null,Fr(h)===c&&(y=new y(f,x+"enter",w,n,h),y.target=S,y.relatedTarget=v,T=y),v=T,_&&w)t:{for(y=_,f=w,x=0,S=y;S;S=co(S))x++;for(S=0,T=f;T;T=co(T))S++;for(;0<x-S;)y=co(y),x--;for(;0<S-x;)f=co(f),S--;for(;x--;){if(y===f||f!==null&&y===f.alternate)break t;y=co(y),f=co(f)}y=null}else y=null;_!==null&&Bh(m,p,_,y,!1),w!==null&&v!==null&&Bh(m,v,w,y,!0)}}e:{if(p=c?No(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var P=Hy;else if(Dh(p))if(Hg)P=jy;else{P=Vy;var D=Gy}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Wy);if(P&&(P=P(t,c))){Bg(m,P,n,h);break e}D&&D(t,p,c),t==="focusout"&&(D=p._wrapperState)&&D.controlled&&p.type==="number"&&jc(p,"number",p.value)}switch(D=c?No(c):window,t){case"focusin":(Dh(D)||D.contentEditable==="true")&&(Do=D,rf=c,ks=null);break;case"focusout":ks=rf=Do=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Oh(m,n,h);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":Oh(m,n,h)}var L;if(sd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Lo?zg(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Og&&n.locale!=="ko"&&(Lo||k!=="onCompositionStart"?k==="onCompositionEnd"&&Lo&&(L=Fg()):(ir=h,id="value"in ir?ir.value:ir.textContent,Lo=!0)),D=Il(c,k),0<D.length&&(k=new Ch(k,t,null,n,h),m.push({event:k,listeners:D}),L?k.data=L:(L=kg(n),L!==null&&(k.data=L)))),(L=Fy?Oy(t,n):zy(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(h=new Ch("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=L))}Zg(m,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ys(t,n),o!=null&&i.unshift(ea(t,o,r)),o=Ys(t,e),o!=null&&i.push(ea(t,o,r))),t=t.return}return i}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=Ys(n,o),u!=null&&s.unshift(ea(n,u,a))):r||(u=Ys(n,o),u!=null&&s.push(ea(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Qy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(Qy,`
`).replace(Jy,"")}function Fa(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(le(425))}function Fl(){}var sf=null,af=null;function lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(nx)}:uf;function nx(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ks(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ks(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),xi="__reactFiber$"+us,ta="__reactProps$"+us,ki="__reactContainer$"+us,cf="__reactEvents$"+us,ix="__reactListeners$"+us,rx="__reactHandles$"+us;function Fr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[xi])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[xi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function uu(t){return t[ta]||null}var ff=[],Io=-1;function Er(t){return{current:t}}function Rt(t){0>Io||(t.current=ff[Io],ff[Io]=null,Io--)}function St(t,e){Io++,ff[Io]=t.current,t.current=e}var xr={},gn=Er(xr),Pn=Er(!1),Xr=xr;function Zo(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Ol(){Rt(Pn),Rt(gn)}function Wh(t,e,n){if(gn.current!==xr)throw Error(le(168));St(gn,e),St(Pn,n)}function Jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,G_(t)||"Unknown",r));return Nt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Xr=gn.current,St(gn,t),St(Pn,Pn.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=Jg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,Rt(Pn),Rt(gn),St(gn,t)):Rt(Pn),St(Pn,n)}var Di=null,cu=!1,$u=!1;function ev(t){Di===null?Di=[t]:Di.push(t)}function ox(t){cu=!0,ev(t)}function wr(){if(!$u&&Di!==null){$u=!0;var t=0,e=ht;try{var n=Di;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,cu=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),Tg(Jf,wr),r}finally{ht=e,$u=!1}}return null}var Fo=[],Oo=0,kl=null,Bl=0,Yn=[],qn=0,Yr=null,Ni=1,Ii="";function br(t,e){Fo[Oo++]=Bl,Fo[Oo++]=kl,kl=t,Bl=e}function tv(t,e,n){Yn[qn++]=Ni,Yn[qn++]=Ii,Yn[qn++]=Yr,Yr=t;var i=Ni;t=Ii;var r=32-hi(i)-1;i&=~(1<<r),n+=1;var o=32-hi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ni=1<<32-hi(e)+r|n<<r|i,Ii=o+t}else Ni=1<<o|n<<r|i,Ii=t}function ld(t){t.return!==null&&(br(t,1),tv(t,1,0))}function ud(t){for(;t===kl;)kl=Fo[--Oo],Fo[Oo]=null,Bl=Fo[--Oo],Fo[Oo]=null;for(;t===Yr;)Yr=Yn[--qn],Yn[qn]=null,Ii=Yn[--qn],Yn[qn]=null,Ni=Yn[--qn],Yn[qn]=null}var On=null,Fn=null,bt=!1,ui=null;function nv(t,e){var n=Qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Fn=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Ni,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Fn=null,!0):!1;default:return!1}}function df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(bt){var e=Fn;if(e){var n=e;if(!Xh(t,e)){if(df(t))throw Error(le(418));e=fr(n.nextSibling);var i=On;e&&Xh(t,e)?nv(i,n):(t.flags=t.flags&-4097|2,bt=!1,On=t)}}else{if(df(t))throw Error(le(418));t.flags=t.flags&-4097|2,bt=!1,On=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Oa(t){if(t!==On)return!1;if(!bt)return Yh(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lf(t.type,t.memoizedProps)),e&&(e=Fn)){if(df(t))throw iv(),Error(le(418));for(;e;)nv(t,e),e=fr(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=On?fr(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=Fn;t;)t=fr(t.nextSibling)}function Qo(){Fn=On=null,bt=!1}function cd(t){ui===null?ui=[t]:ui.push(t)}var sx=Vi.ReactCurrentBatchConfig;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qh(t){var e=t._init;return e(t._payload)}function rv(t){function e(f,x){if(t){var S=f.deletions;S===null?(f.deletions=[x],f.flags|=16):S.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=mr(f,x),f.index=0,f.sibling=null,f}function o(f,x,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<x?(f.flags|=2,x):S):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,S,T){return x===null||x.tag!==6?(x=nc(S,f.mode,T),x.return=f,x):(x=r(x,S),x.return=f,x)}function u(f,x,S,T){var P=S.type;return P===bo?h(f,x,S.props.children,T,S.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&qh(P)===x.type)?(T=r(x,S.props),T.ref=Ms(f,x,S),T.return=f,T):(T=Al(S.type,S.key,S.props,null,f.mode,T),T.ref=Ms(f,x,S),T.return=f,T)}function c(f,x,S,T){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=ic(S,f.mode,T),x.return=f,x):(x=r(x,S.children||[]),x.return=f,x)}function h(f,x,S,T,P){return x===null||x.tag!==7?(x=Br(S,f.mode,T,P),x.return=f,x):(x=r(x,S),x.return=f,x)}function m(f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=nc(""+x,f.mode,S),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:return S=Al(x.type,x.key,x.props,null,f.mode,S),S.ref=Ms(f,null,x),S.return=f,S;case Po:return x=ic(x,f.mode,S),x.return=f,x;case Ji:var T=x._init;return m(f,T(x._payload),S)}if(Ls(x)||vs(x))return x=Br(x,f.mode,S,null),x.return=f,x;za(f,x)}return null}function p(f,x,S,T){var P=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:a(f,x,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ra:return S.key===P?u(f,x,S,T):null;case Po:return S.key===P?c(f,x,S,T):null;case Ji:return P=S._init,p(f,x,P(S._payload),T)}if(Ls(S)||vs(S))return P!==null?null:h(f,x,S,T,null);za(f,S)}return null}function _(f,x,S,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return f=f.get(S)||null,a(x,f,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ra:return f=f.get(T.key===null?S:T.key)||null,u(x,f,T,P);case Po:return f=f.get(T.key===null?S:T.key)||null,c(x,f,T,P);case Ji:var D=T._init;return _(f,x,S,D(T._payload),P)}if(Ls(T)||vs(T))return f=f.get(S)||null,h(x,f,T,P,null);za(x,T)}return null}function w(f,x,S,T){for(var P=null,D=null,L=x,k=x=0,R=null;L!==null&&k<S.length;k++){L.index>k?(R=L,L=null):R=L.sibling;var M=p(f,L,S[k],T);if(M===null){L===null&&(L=R);break}t&&L&&M.alternate===null&&e(f,L),x=o(M,x,k),D===null?P=M:D.sibling=M,D=M,L=R}if(k===S.length)return n(f,L),bt&&br(f,k),P;if(L===null){for(;k<S.length;k++)L=m(f,S[k],T),L!==null&&(x=o(L,x,k),D===null?P=L:D.sibling=L,D=L);return bt&&br(f,k),P}for(L=i(f,L);k<S.length;k++)R=_(L,f,k,S[k],T),R!==null&&(t&&R.alternate!==null&&L.delete(R.key===null?k:R.key),x=o(R,x,k),D===null?P=R:D.sibling=R,D=R);return t&&L.forEach(function(F){return e(f,F)}),bt&&br(f,k),P}function y(f,x,S,T){var P=vs(S);if(typeof P!="function")throw Error(le(150));if(S=P.call(S),S==null)throw Error(le(151));for(var D=P=null,L=x,k=x=0,R=null,M=S.next();L!==null&&!M.done;k++,M=S.next()){L.index>k?(R=L,L=null):R=L.sibling;var F=p(f,L,M.value,T);if(F===null){L===null&&(L=R);break}t&&L&&F.alternate===null&&e(f,L),x=o(F,x,k),D===null?P=F:D.sibling=F,D=F,L=R}if(M.done)return n(f,L),bt&&br(f,k),P;if(L===null){for(;!M.done;k++,M=S.next())M=m(f,M.value,T),M!==null&&(x=o(M,x,k),D===null?P=M:D.sibling=M,D=M);return bt&&br(f,k),P}for(L=i(f,L);!M.done;k++,M=S.next())M=_(L,f,k,M.value,T),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?k:M.key),x=o(M,x,k),D===null?P=M:D.sibling=M,D=M);return t&&L.forEach(function(W){return e(f,W)}),bt&&br(f,k),P}function v(f,x,S,T){if(typeof S=="object"&&S!==null&&S.type===bo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ra:e:{for(var P=S.key,D=x;D!==null;){if(D.key===P){if(P=S.type,P===bo){if(D.tag===7){n(f,D.sibling),x=r(D,S.props.children),x.return=f,f=x;break e}}else if(D.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&qh(P)===D.type){n(f,D.sibling),x=r(D,S.props),x.ref=Ms(f,D,S),x.return=f,f=x;break e}n(f,D);break}else e(f,D);D=D.sibling}S.type===bo?(x=Br(S.props.children,f.mode,T,S.key),x.return=f,f=x):(T=Al(S.type,S.key,S.props,null,f.mode,T),T.ref=Ms(f,x,S),T.return=f,f=T)}return s(f);case Po:e:{for(D=S.key;x!==null;){if(x.key===D)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(f,x.sibling),x=r(x,S.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=ic(S,f.mode,T),x.return=f,f=x}return s(f);case Ji:return D=S._init,v(f,x,D(S._payload),T)}if(Ls(S))return w(f,x,S,T);if(vs(S))return y(f,x,S,T);za(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,S),x.return=f,f=x):(n(f,x),x=nc(S,f.mode,T),x.return=f,f=x),s(f)):n(f,x)}return v}var Jo=rv(!0),ov=rv(!1),Hl=Er(null),Gl=null,zo=null,fd=null;function dd(){fd=zo=Gl=null}function hd(t){var e=Hl.current;Rt(Hl),t._currentValue=e}function pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Yo(t,e){Gl=t,fd=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},zo===null){if(Gl===null)throw Error(le(308));zo=t,Gl.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return e}var Or=null;function pd(t){Or===null?Or=[t]:Or.push(t)}function sv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}function $h(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;er=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=r.baseState;s=0,h=c=u=null,a=o;do{var p=a.lane,_=a.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(p=e,_=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){m=w.call(_,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(_,m,p):w,p==null)break e;m=Nt({},m,p);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=m):h=h.next=_,s|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(u=m),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);$r|=s,t.lanes=s,t.memoizedState=m}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var pa={},Mi=Er(pa),na=Er(pa),ia=Er(pa);function zr(t){if(t===pa)throw Error(le(174));return t}function gd(t,e){switch(St(ia,e),St(na,t),St(Mi,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}Rt(Mi),St(Mi,e)}function es(){Rt(Mi),Rt(na),Rt(ia)}function lv(t){zr(ia.current);var e=zr(Mi.current),n=Yc(e,t.type);e!==n&&(St(na,t),St(Mi,n))}function vd(t){na.current===t&&(Rt(Mi),Rt(na))}var Dt=Er(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function _d(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var Sl=Vi.ReactCurrentDispatcher,Zu=Vi.ReactCurrentBatchConfig,qr=0,Ut=null,Wt=null,Zt=null,jl=!1,Bs=!1,ra=0,ax=0;function fn(){throw Error(le(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function xd(t,e,n,i,r,o){if(qr=o,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?fx:dx,t=n(i,r),Bs){o=0;do{if(Bs=!1,ra=0,25<=o)throw Error(le(301));o+=1,Zt=Wt=null,e.updateQueue=null,Sl.current=hx,t=n(i,r)}while(Bs)}if(Sl.current=Xl,e=Wt!==null&&Wt.next!==null,qr=0,Zt=Wt=Ut=null,jl=!1,e)throw Error(le(300));return t}function Sd(){var t=ra!==0;return ra=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ti(){if(Wt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Zt===null?Ut.memoizedState:Zt.next;if(e!==null)Zt=e,Wt=t;else{if(t===null)throw Error(le(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function oa(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=ti(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,u=null,c=o;do{var h=c.lane;if((qr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,s=i):u=u.next=m,Ut.lanes|=h,$r|=h}c=c.next}while(c!==null&&c!==o);u===null?s=i:u.next=a,mi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Ut.lanes|=o,$r|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=ti(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);mi(o,e.memoizedState)||(Cn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function uv(){}function cv(t,e){var n=Ut,i=ti(),r=e(),o=!mi(i.memoizedState,r);if(o&&(i.memoizedState=r,Cn=!0),i=i.queue,Md(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,sa(9,dv.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(le(349));qr&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dv(t,e,n,i){e.value=n,e.getSnapshot=i,pv(e)&&mv(t)}function hv(t,e,n){return n(function(){pv(e)&&mv(t)})}function pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function mv(t){var e=Bi(t,1);e!==null&&pi(e,t,1,-1)}function Zh(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=cx.bind(null,Ut,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return ti().memoizedState}function Ml(t,e,n,i){var r=_i();Ut.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function fu(t,e,n,i){var r=ti();i=i===void 0?null:i;var o=void 0;if(Wt!==null){var s=Wt.memoizedState;if(o=s.destroy,i!==null&&yd(i,s.deps)){r.memoizedState=sa(e,n,o,i);return}}Ut.flags|=t,r.memoizedState=sa(1|e,n,o,i)}function Qh(t,e){return Ml(8390656,8,t,e)}function Md(t,e){return fu(2048,8,t,e)}function vv(t,e){return fu(4,2,t,e)}function _v(t,e){return fu(4,4,t,e)}function yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,yv.bind(null,e,t),n)}function Ed(){}function Sv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return qr&21?(mi(n,e)||(n=Cg(),Ut.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function lx(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{ht=n,Zu.transition=i}}function wv(){return ti().memoizedState}function ux(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))Av(e,n);else if(n=sv(t,e,n,i),n!==null){var r=Sn();pi(n,t,i,r),Rv(n,e,i)}}function cx(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))Av(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,s)){var u=e.interleaved;u===null?(r.next=r,pd(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=sv(t,e,r,i),n!==null&&(r=Sn(),pi(n,t,i,r),Rv(n,e,i))}}function Tv(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function Av(t,e){Bs=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}var Xl={readContext:ei,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},fx={readContext:ei,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:Qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ux.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:Ed,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=lx.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=_i();if(bt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Jt===null)throw Error(le(349));qr&30||fv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Qh(hv.bind(null,i,o,t),[t]),i.flags|=2048,sa(9,dv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=_i(),e=Jt.identifierPrefix;if(bt){var n=Ii,i=Ni;n=(i&~(1<<32-hi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ax++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dx={readContext:ei,useCallback:Sv,useContext:ei,useEffect:Md,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:Qu,useRef:gv,useState:function(){return Qu(oa)},useDebugValue:Ed,useDeferredValue:function(t){var e=ti();return Ev(e,Wt.memoizedState,t)},useTransition:function(){var t=Qu(oa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1},hx={readContext:ei,useCallback:Sv,useContext:ei,useEffect:Md,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:Ju,useRef:gv,useState:function(){return Ju(oa)},useDebugValue:Ed,useDeferredValue:function(t){var e=ti();return Wt===null?e.memoizedState=t:Ev(e,Wt.memoizedState,t)},useTransition:function(){var t=Ju(oa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=pr(t),o=Oi(i,r);o.payload=e,n!=null&&(o.callback=n),e=dr(t,o,r),e!==null&&(pi(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=pr(t),o=Oi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=dr(t,o,r),e!==null&&(pi(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=pr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(pi(e,t,i,n),xl(e,t,i))}};function Jh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,i)||!Qs(r,o):!0}function Cv(t,e,n){var i=!1,r=xr,o=e.contextType;return typeof o=="object"&&o!==null?o=ei(o):(r=bn(e)?Xr:gn.current,i=e.contextTypes,o=(i=i!=null)?Zo(t,r):xr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},md(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=ei(o):(o=bn(e)?Xr:gn.current,r.context=Zo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",i=e;do n+=H_(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var px=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Rf=i),vf(t,e)},n}function bv(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new px;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cx.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var mx=Vi.ReactCurrentOwner,Cn=!1;function yn(t,e,n,i){e.child=t===null?ov(e,null,n,i):Jo(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var o=e.ref;return Yo(e,r),i=xd(t,e,n,i,o,r),n=Sd(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(bt&&n&&ld(e),e.flags|=1,yn(t,e,i,r),e.child)}function op(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Ld(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Lv(t,e,o,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(s,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=mr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Qs(o,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return _f(t,e,n,i,r)}function Dv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Bo,In),In|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Bo,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,St(Bo,In),In|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,St(Bo,In),In|=i;return yn(t,e,r,n),e.child}function Uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var o=bn(n)?Xr:gn.current;return o=Zo(e,o),Yo(e,r),n=xd(t,e,n,i,o,r),i=Sd(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(bt&&i&&ld(e),e.flags|=1,yn(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(bn(n)){var o=!0;zl(e)}else o=!1;if(Yo(e,r),e.stateNode===null)El(t,e),Cv(e,n,i),gf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=bn(n)?Xr:gn.current,c=Zo(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||u!==c)&&ep(e,s,i,c),er=!1;var p=e.memoizedState;s.state=p,Vl(e,i,s,r),u=e.memoizedState,a!==i||p!==u||Pn.current||er?(typeof h=="function"&&(mf(e,n,h,i),u=e.memoizedState),(a=er||Jh(e,n,a,i,p,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,av(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),s.props=c,m=e.pendingProps,p=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ei(u):(u=bn(n)?Xr:gn.current,u=Zo(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||p!==u)&&ep(e,s,i,u),er=!1,p=e.memoizedState,s.state=p,Vl(e,i,s,r);var w=e.memoizedState;a!==m||p!==w||Pn.current||er?(typeof _=="function"&&(mf(e,n,_,i),w=e.memoizedState),(c=er||Jh(e,n,c,i,p,w,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,w,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),s.props=i,s.state=w,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,o,r)}function yf(t,e,n,i,r,o){Uv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&jh(e,n,!1),Hi(t,e,o);i=e.stateNode,mx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Jo(e,t.child,null,o),e.child=Jo(e,null,a,o)):yn(t,e,a,o),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function Nv(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),gd(t,e.containerInfo)}function ap(t,e,n,i,r){return Qo(),cd(r),e.flags|=256,yn(t,e,n,i),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var i=e.pendingProps,r=Dt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Dt,r&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=mu(s,i,0,null),t=Br(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Sf(n),e.memoizedState=xf,t):wd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=mr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=mr(a,o):(o=Br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Sf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=xf,i}return o=t.child,t=o.sibling,i=mr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&cd(i),Jo(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=ec(Error(le(422))),ka(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),o=Br(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Jo(e,t.child,null,s),e.child.memoizedState=Sf(s),e.memoizedState=xf,o);if(!(e.mode&1))return ka(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(le(419)),i=ec(o,i,void 0),ka(t,e,s,i)}if(a=(s&t.childLanes)!==0,Cn||a){if(i=Jt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Bi(t,r),pi(i,t,r,-1))}return bd(),i=ec(Error(le(421))),ka(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Px.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Fn=fr(r.nextSibling),On=e,bt=!0,ui=null,t!==null&&(Yn[qn++]=Ni,Yn[qn++]=Ii,Yn[qn++]=Yr,Ni=t.id,Ii=t.overflow,Yr=e),e=wd(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pf(t.return,e,n)}function tc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(yn(t,e,i.children,n),i=Dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tc(e,!0,n,null,o);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vx(t,e,n){switch(e.tag){case 3:Nv(e),Qo();break;case 5:lv(e);break;case 1:bn(e.type)&&zl(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?Iv(t,e,n):(St(Dt,Dt.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);St(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Hi(t,e,n)}var Ov,Mf,zv,kv;Ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};zv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(Mi.current);var o=null;switch(n){case"input":r=Vc(t,r),i=Vc(t,i),o=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),o=[];break;case"textarea":r=Xc(t,r),i=Xc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fl)}qc(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(js.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(js.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Tt("scroll",t),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Es(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function dn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _x(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return bn(e.type)&&Ol(),dn(e),null;case 3:return i=e.stateNode,es(),Rt(Pn),Rt(gn),_d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(bf(ui),ui=null))),Mf(t,e),dn(e),null;case 5:vd(e);var r=zr(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)zv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return dn(e),null}if(t=zr(Mi.current),Oa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[xi]=e,i[ta]=o,t=(e.mode&1)!==0,n){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<Us.length;r++)Tt(Us[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":vh(i,o),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Tt("invalid",i);break;case"textarea":yh(i,o),Tt("invalid",i)}qc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):js.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Tt("scroll",i)}switch(n){case"input":Ca(i),_h(i,o,!0);break;case"textarea":Ca(i),xh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[xi]=e,t[ta]=i,Ov(t,e,!1,!1),e.stateNode=t;e:{switch(s=$c(n,i),n){case"dialog":Tt("cancel",t),Tt("close",t),r=i;break;case"iframe":case"object":case"embed":Tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Us.length;r++)Tt(Us[r],t);r=i;break;case"source":Tt("error",t),r=i;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),r=i;break;case"details":Tt("toggle",t),r=i;break;case"input":vh(t,i),r=Vc(t,i),Tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Tt("invalid",t);break;case"textarea":yh(t,i),r=Xc(t,i),Tt("invalid",t);break;default:r=i}qc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?gg(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pg(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xs(t,u):typeof u=="number"&&Xs(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(js.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Tt("scroll",t):u!=null&&qf(t,o,u,s))}switch(n){case"input":Ca(t),_h(t,i,!1);break;case"textarea":Ca(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Vo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Vo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=zr(ia.current),zr(Mi.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(o=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return dn(e),null;case 13:if(Rt(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Fn!==null&&e.mode&1&&!(e.flags&128))iv(),Qo(),e.flags|=98560,o=!1;else if(o=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(le(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(le(317));o[xi]=e}else Qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),o=!1}else ui!==null&&(bf(ui),ui=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?jt===0&&(jt=3):bd())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return es(),Mf(t,e),t===null&&Js(e.stateNode.containerInfo),dn(e),null;case 10:return hd(e.type._context),dn(e),null;case 17:return bn(e.type)&&Ol(),dn(e),null;case 19:if(Rt(Dt),o=e.memoizedState,o===null)return dn(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Es(o,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Wl(t),s!==null){for(e.flags|=128,Es(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Dt,Dt.current&1|2),e.child}t=t.sibling}o.tail!==null&&zt()>ns&&(e.flags|=128,i=!0,Es(o,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!bt)return dn(e),null}else 2*zt()-o.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,i=!0,Es(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=zt(),e.sibling=null,n=Dt.current,St(Dt,i?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function yx(t,e){switch(ud(e),e.tag){case 1:return bn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),Rt(Pn),Rt(gn),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(Rt(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Rt(Dt),null;case 4:return es(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Ba=!1,mn=!1,xx=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ko(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ft(t,e,i)}else n.current=null}function Ef(t,e,n){try{n()}catch(i){Ft(t,e,i)}}var up=!1;function Sx(t,e){if(sf=Ul,t=Wg(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,m=t,p=null;t:for(;;){for(var _;m!==n||r!==0&&m.nodeType!==3||(a=s+r),m!==o||i!==0&&m.nodeType!==3||(u=s+i),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)p=m,m=_;for(;;){if(m===t)break t;if(p===n&&++c===r&&(a=s),p===o&&++h===i&&(u=s),(_=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(af={focusedElem:t,selectionRange:n},Ul=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,v=w.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:ai(e.type,y),v);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(T){Ft(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return w=up,up=!1,w}function Hs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ef(e,n,o)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bv(t){var e=t.alternate;e!==null&&(t.alternate=null,Bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[ta],delete e[cf],delete e[ix],delete e[rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hv(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}var rn=null,li=!1;function Yi(t,e,n){for(n=n.child;n!==null;)Gv(t,e,n),n=n.sibling}function Gv(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:mn||ko(n,e);case 6:var i=rn,r=li;rn=null,Yi(t,e,n),rn=i,li=r,rn!==null&&(li?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(li?(t=rn,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),Ks(t)):qu(rn,n.stateNode));break;case 4:i=rn,r=li,rn=n.stateNode.containerInfo,li=!0,Yi(t,e,n),rn=i,li=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ef(n,e,s),r=r.next}while(r!==i)}Yi(t,e,n);break;case 1:if(!mn&&(ko(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ft(n,e,a)}Yi(t,e,n);break;case 21:Yi(t,e,n);break;case 22:n.mode&1?(mn=(i=mn)||n.memoizedState!==null,Yi(t,e,n),mn=i):Yi(t,e,n);break;default:Yi(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xx),e.forEach(function(i){var r=bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,li=!1;break e;case 3:rn=a.stateNode.containerInfo,li=!0;break e;case 4:rn=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(rn===null)throw Error(le(160));Gv(o,s,r),rn=null,li=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),vi(t),i&4){try{Hs(3,t,t.return),hu(3,t)}catch(y){Ft(t,t.return,y)}try{Hs(5,t,t.return)}catch(y){Ft(t,t.return,y)}}break;case 1:ii(e,t),vi(t),i&512&&n!==null&&ko(n,n.return);break;case 5:if(ii(e,t),vi(t),i&512&&n!==null&&ko(n,n.return),t.flags&32){var r=t.stateNode;try{Xs(r,"")}catch(y){Ft(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fg(r,o),$c(a,s);var c=$c(a,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?gg(r,m):h==="dangerouslySetInnerHTML"?pg(r,m):h==="children"?Xs(r,m):qf(r,h,m,c)}switch(a){case"input":Wc(r,o);break;case"textarea":dg(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Vo(r,!!o.multiple,_,!1):p!==!!o.multiple&&(o.defaultValue!=null?Vo(r,!!o.multiple,o.defaultValue,!0):Vo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ta]=o}catch(y){Ft(t,t.return,y)}}break;case 6:if(ii(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){Ft(t,t.return,y)}}break;case 3:if(ii(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(y){Ft(t,t.return,y)}break;case 4:ii(e,t),vi(t);break;case 13:ii(e,t),vi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Rd=zt())),i&4&&fp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mn=(c=mn)||h,ii(e,t),mn=c):ii(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Re=t,h=t.child;h!==null;){for(m=Re=h;Re!==null;){switch(p=Re,_=p.child,p.tag){case 0:case 11:case 14:case 15:Hs(4,p,p.return);break;case 1:ko(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){Ft(i,n,y)}}break;case 5:ko(p,p.return);break;case 22:if(p.memoizedState!==null){hp(m);continue}}_!==null?(_.return=p,Re=_):hp(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=mg("display",s))}catch(y){Ft(t,t.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){Ft(t,t.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ii(e,t),vi(t),i&4&&fp(t);break;case 21:break;default:ii(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hv(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xs(r,""),i.flags&=-33);var o=cp(t);Af(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=cp(t);Tf(t,a,s);break;default:throw Error(le(161))}}catch(u){Ft(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mx(t,e,n){Re=t,Wv(t)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ba;if(!s){var a=r.alternate,u=a!==null&&a.memoizedState!==null||mn;a=Ba;var c=mn;if(Ba=s,(mn=u)&&!c)for(Re=r;Re!==null;)s=Re,u=s.child,s.tag===22&&s.memoizedState!==null?pp(r):u!==null?(u.return=s,Re=u):pp(r);for(;o!==null;)Re=o,Wv(o),o=o.sibling;Re=r,Ba=a,mn=c}dp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Re=o):dp(t)}}function dp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Kh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ks(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}mn||e.flags&512&&wf(e)}catch(p){Ft(e,e.return,p)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function hp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function pp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Ft(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){Ft(e,r,u)}}var o=e.return;try{wf(e)}catch(u){Ft(e,o,u)}break;case 5:var s=e.return;try{wf(e)}catch(u){Ft(e,s,u)}}}catch(u){Ft(e,e.return,u)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Ex=Math.ceil,Yl=Vi.ReactCurrentDispatcher,Td=Vi.ReactCurrentOwner,Jn=Vi.ReactCurrentBatchConfig,lt=0,Jt=null,Gt=null,sn=0,In=0,Bo=Er(0),jt=0,aa=null,$r=0,pu=0,Ad=0,Gs=null,An=null,Rd=0,ns=1/0,Li=null,ql=!1,Rf=null,hr=null,Ha=!1,rr=null,$l=0,Vs=0,Cf=null,wl=-1,Tl=0;function Sn(){return lt&6?zt():wl!==-1?wl:wl=zt()}function pr(t){return t.mode&1?lt&2&&sn!==0?sn&-sn:sx.transition!==null?(Tl===0&&(Tl=Cg()),Tl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function pi(t,e,n,i){if(50<Vs)throw Vs=0,Cf=null,Error(le(185));fa(t,n,i),(!(lt&2)||t!==Jt)&&(t===Jt&&(!(lt&2)&&(pu|=n),jt===4&&nr(t,sn)),Ln(t,i),n===1&&lt===0&&!(e.mode&1)&&(ns=zt()+500,cu&&wr()))}function Ln(t,e){var n=t.callbackNode;sy(t,e);var i=Dl(t,t===Jt?sn:0);if(i===0)n!==null&&Eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eh(n),e===1)t.tag===0?ox(mp.bind(null,t)):ev(mp.bind(null,t)),tx(function(){!(lt&6)&&wr()}),n=null;else{switch(Pg(i)){case 1:n=Jf;break;case 4:n=Ag;break;case 16:n=Ll;break;case 536870912:n=Rg;break;default:n=Ll}n=Qv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(wl=-1,Tl=0,lt&6)throw Error(le(327));var n=t.callbackNode;if(qo()&&t.callbackNode!==n)return null;var i=Dl(t,t===Jt?sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=lt;lt|=2;var o=Yv();(Jt!==t||sn!==e)&&(Li=null,ns=zt()+500,kr(t,e));do try{Ax();break}catch(a){Xv(t,a)}while(!0);dd(),Yl.current=o,lt=r,Gt!==null?e=0:(Jt=null,sn=0,e=jt)}if(e!==0){if(e===2&&(r=ef(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=aa,kr(t,0),nr(t,i),Ln(t,zt()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!wx(r)&&(e=Kl(t,i),e===2&&(o=ef(t),o!==0&&(i=o,e=Pf(t,o))),e===1))throw n=aa,kr(t,0),nr(t,i),Ln(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Lr(t,An,Li);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Rd+500-zt(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Lr.bind(null,t,An,Li),e);break}Lr(t,An,Li);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-hi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ex(i/1960))-i,10<i){t.timeoutHandle=uf(Lr.bind(null,t,An,Li),i);break}Lr(t,An,Li);break;case 5:Lr(t,An,Li);break;default:throw Error(le(329))}}}return Ln(t,zt()),t.callbackNode===n?jv.bind(null,t):null}function Pf(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=An,An=n,e!==null&&bf(e)),t}function bf(t){An===null?An=t:An.push.apply(An,t)}function wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!mi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Ad,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hi(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(lt&6)throw Error(le(327));qo();var e=Dl(t,0);if(!(e&1))return Ln(t,zt()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=ef(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=aa,kr(t,0),nr(t,e),Ln(t,zt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,An,Li),Ln(t,zt()),null}function Cd(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(ns=zt()+500,cu&&wr())}}function Kr(t){rr!==null&&rr.tag===0&&!(lt&6)&&qo();var e=lt;lt|=1;var n=Jn.transition,i=ht;try{if(Jn.transition=null,ht=1,t)return t()}finally{ht=i,Jn.transition=n,lt=e,!(lt&6)&&wr()}}function Pd(){In=Bo.current,Rt(Bo)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ex(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:es(),Rt(Pn),Rt(gn),_d();break;case 5:vd(i);break;case 4:es();break;case 13:Rt(Dt);break;case 19:Rt(Dt);break;case 10:hd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(Jt=t,Gt=t=mr(t.current,null),sn=In=e,jt=0,aa=null,Ad=pu=$r=0,An=Gs=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Or=null}return t}function Xv(t,e){do{var n=Gt;try{if(dd(),Sl.current=Xl,jl){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(qr=0,Zt=Wt=Ut=null,Bs=!1,ra=0,Td.current=null,n===null||n.return===null){jt=1,aa=e,Gt=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=sn,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=np(s);if(_!==null){_.flags&=-257,ip(_,s,a,o,e),_.mode&1&&tp(o,c,e),e=_,u=c;var w=e.updateQueue;if(w===null){var y=new Set;y.add(u),e.updateQueue=y}else w.add(u);break e}else{if(!(e&1)){tp(o,c,e),bd();break e}u=Error(le(426))}}else if(bt&&a.mode&1){var v=np(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ip(v,s,a,o,e),cd(ts(u,a));break e}}o=u=ts(u,a),jt!==4&&(jt=2),Gs===null?Gs=[o]:Gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Pv(o,u,e);$h(o,f);break e;case 1:a=u;var x=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(hr===null||!hr.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var T=bv(o,a,e);$h(o,T);break e}}o=o.return}while(o!==null)}$v(n)}catch(P){e=P,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function Yv(){var t=Yl.current;return Yl.current=Xl,t===null?Xl:t}function bd(){(jt===0||jt===3||jt===2)&&(jt=4),Jt===null||!($r&268435455)&&!(pu&268435455)||nr(Jt,sn)}function Kl(t,e){var n=lt;lt|=2;var i=Yv();(Jt!==t||sn!==e)&&(Li=null,kr(t,e));do try{Tx();break}catch(r){Xv(t,r)}while(!0);if(dd(),lt=n,Yl.current=i,Gt!==null)throw Error(le(261));return Jt=null,sn=0,jt}function Tx(){for(;Gt!==null;)qv(Gt)}function Ax(){for(;Gt!==null&&!Z_();)qv(Gt)}function qv(t){var e=Zv(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?$v(t):Gt=e,Td.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yx(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Gt=null;return}}else if(n=_x(n,e,In),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);jt===0&&(jt=5)}function Lr(t,e,n){var i=ht,r=Jn.transition;try{Jn.transition=null,ht=1,Rx(t,e,n,i)}finally{Jn.transition=r,ht=i}return null}function Rx(t,e,n,i){do qo();while(rr!==null);if(lt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ay(t,o),t===Jt&&(Gt=Jt=null,sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Qv(Ll,function(){return qo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Jn.transition,Jn.transition=null;var s=ht;ht=1;var a=lt;lt|=4,Td.current=null,Sx(t,n),Vv(n,t),Yy(af),Ul=!!sf,af=sf=null,t.current=n,Mx(n),Q_(),lt=a,ht=s,Jn.transition=o}else t.current=n;if(Ha&&(Ha=!1,rr=t,$l=r),o=t.pendingLanes,o===0&&(hr=null),ty(n.stateNode),Ln(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Rf,Rf=null,t;return $l&1&&t.tag!==0&&qo(),o=t.pendingLanes,o&1?t===Cf?Vs++:(Vs=0,Cf=t):Vs=0,wr(),null}function qo(){if(rr!==null){var t=Pg($l),e=Jn.transition,n=ht;try{if(Jn.transition=null,ht=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,$l=0,lt&6)throw Error(le(331));var r=lt;for(lt|=4,Re=t.current;Re!==null;){var o=Re,s=o.child;if(Re.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Re=c;Re!==null;){var h=Re;switch(h.tag){case 0:case 11:case 15:Hs(8,h,o)}var m=h.child;if(m!==null)m.return=h,Re=m;else for(;Re!==null;){h=Re;var p=h.sibling,_=h.return;if(Bv(h),h===c){Re=null;break}if(p!==null){p.return=_,Re=p;break}Re=_}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Re=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Re=s;else e:for(;Re!==null;){if(o=Re,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Re=f;break e}Re=o.return}}var x=t.current;for(Re=x;Re!==null;){s=Re;var S=s.child;if(s.subtreeFlags&2064&&S!==null)S.return=s,Re=S;else e:for(s=x;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(P){Ft(a,a.return,P)}if(a===s){Re=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,Re=T;break e}Re=a.return}}if(lt=r,wr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(ou,t)}catch{}i=!0}return i}finally{ht=n,Jn.transition=e}}return!1}function gp(t,e,n){e=ts(n,e),e=Pv(t,e,1),t=dr(t,e,1),e=Sn(),t!==null&&(fa(t,1,e),Ln(t,e))}function Ft(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=ts(n,t),t=bv(e,t,1),e=dr(e,t,1),t=Sn(),e!==null&&(fa(e,1,t),Ln(e,t));break}}e=e.return}}function Cx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(sn&n)===n&&(jt===4||jt===3&&(sn&130023424)===sn&&500>zt()-Rd?kr(t,0):Ad|=n),Ln(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=Sn();t=Bi(t,e),t!==null&&(fa(t,e,n),Ln(t,n))}function Px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Kv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,vx(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,bt&&e.flags&1048576&&tv(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=Zo(e,gn.current);Yo(e,n),r=xd(null,e,i,t,r,n);var o=Sd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(o=!0,zl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,md(e),r.updater=du,e.stateNode=r,r._reactInternals=e,gf(e,i,t,n),e=yf(null,e,i,!0,o,n)):(e.tag=0,bt&&o&&ld(e),yn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dx(i),t=ai(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=op(null,e,i,ai(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),sp(t,e,i,r,n);case 3:e:{if(Nv(e),t===null)throw Error(le(387));i=e.pendingProps,o=e.memoizedState,r=o.element,av(t,e),Vl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ts(Error(le(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=ts(Error(le(424)),e),e=ap(t,e,i,n,r);break e}else for(Fn=fr(e.stateNode.containerInfo.firstChild),On=e,bt=!0,ui=null,n=ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),i===r){e=Hi(t,e,n);break e}yn(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&hf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,lf(i,r)?s=null:o!==null&&lf(i,o)&&(e.flags|=32),Uv(t,e),yn(t,e,s,n),e.child;case 6:return t===null&&hf(e),null;case 13:return Iv(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Jo(e,null,i,n):yn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),rp(t,e,i,r,n);case 7:return yn(t,e,e.pendingProps,n),e.child;case 8:return yn(t,e,e.pendingProps.children,n),e.child;case 12:return yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,St(Hl,i._currentValue),i._currentValue=s,o!==null)if(mi(o.value,s)){if(o.children===r.children&&!Pn.current){e=Hi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=Oi(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pf(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(le(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}yn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yo(e,n),r=ei(r),i=i(r),e.flags|=1,yn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),op(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),El(t,e),e.tag=1,bn(i)?(t=!0,zl(e)):t=!1,Yo(e,n),Cv(e,i,r),gf(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return Fv(t,e,n);case 22:return Dv(t,e,n)}throw Error(le(156,e.tag))};function Qv(t,e){return Tg(t,e)}function Lx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,e,n,i){return new Lx(t,e,n,i)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dx(t){if(typeof t=="function")return Ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Zf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Ld(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case bo:return Br(n.children,r,o,e);case $f:s=8,r|=8;break;case kc:return t=Qn(12,n,e,r|2),t.elementType=kc,t.lanes=o,t;case Bc:return t=Qn(13,n,e,r),t.elementType=Bc,t.lanes=o,t;case Hc:return t=Qn(19,n,e,r),t.elementType=Hc,t.lanes=o,t;case lg:return mu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sg:s=10;break e;case ag:s=9;break e;case Kf:s=11;break e;case Zf:s=14;break e;case Ji:s=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Qn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Br(t,e,n,i){return t=Qn(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=Qn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=Qn(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=Qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ux(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,o,s,a,u){return t=new Ux(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Qn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(o),t}function Nx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jv(t){if(!t)return xr;t=t._reactInternals;e:{if(eo(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(bn(n))return Jg(t,n,e)}return e}function e0(t,e,n,i,r,o,s,a,u){return t=Dd(n,i,!0,t,r,o,s,a,u),t.context=Jv(null),n=t.current,i=Sn(),r=pr(n),o=Oi(i,r),o.callback=e??null,dr(n,o,r),t.current.lanes=r,fa(t,r,i),Ln(t,i),t}function gu(t,e,n,i){var r=e.current,o=Sn(),s=pr(r);return n=Jv(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,s),t!==null&&(pi(t,r,s,o),xl(t,r,s)),s}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function Ix(){return null}var t0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}vu.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));gu(t,e,null,null)};vu.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){gu(null,t,null,null)}),e[ki]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Ng(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function Fx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Zl(s);o.call(c)}}var s=e0(e,i,t,0,null,!1,!1,"",_p);return t._reactRootContainer=s,t[ki]=s.current,Js(t.nodeType===8?t.parentNode:t),Kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Zl(u);a.call(c)}}var u=Dd(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=u,t[ki]=u.current,Js(t.nodeType===8?t.parentNode:t),Kr(function(){gu(e,u,n,i)}),u}function yu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var u=Zl(s);a.call(u)}}gu(e,s,t,r)}else s=Fx(n,e,t,r,i);return Zl(s)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(ed(e,n|1),Ln(e,zt()),!(lt&6)&&(ns=zt()+500,wr()))}break;case 13:Kr(function(){var i=Bi(t,1);if(i!==null){var r=Sn();pi(i,t,1,r)}}),Ud(t,1)}};td=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=Sn();pi(e,t,134217728,n)}Ud(t,134217728)}};Lg=function(t){if(t.tag===13){var e=pr(t),n=Bi(t,e);if(n!==null){var i=Sn();pi(n,t,e,i)}Ud(t,e)}};Dg=function(){return ht};Ug=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uu(i);if(!r)throw Error(le(90));cg(i),Wc(i,r)}}}break;case"textarea":dg(t,n);break;case"select":e=n.value,e!=null&&Vo(t,!!n.multiple,e,!1)}};yg=Cd;xg=Kr;var Ox={usingClientEntryPoint:!1,Events:[ha,No,uu,vg,_g,Cd]},ws={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eg(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{ou=Ga.inject(zx),Si=Ga}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(le(200));return Nx(t,e,null,n)};Hn.createRoot=function(t,e){if(!Id(t))throw Error(le(299));var n=!1,i="",r=t0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Js(t.nodeType===8?t.parentNode:t),new Nd(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Eg(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return Kr(t)};Hn.hydrate=function(t,e,n){if(!_u(e))throw Error(le(200));return yu(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=t0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=e0(e,null,t,1,n??null,r,!1,o,s),t[ki]=e.current,Js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};Hn.render=function(t,e,n){if(!_u(e))throw Error(le(200));return yu(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!_u(t))throw Error(le(40));return t._reactRootContainer?(Kr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Hn.unstable_batchedUpdates=Cd;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return yu(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function n0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)}catch(t){console.error(t)}}n0(),ng.exports=Hn;var kx=ng.exports,yp=kx;Oc.createRoot=yp.createRoot,Oc.hydrateRoot=yp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="158",Bx=0,xp=1,Hx=2,i0=1,Gx=2,bi=3,Sr=0,Dn=1,Ui=2,gr=0,Hr=1,Sp=2,Mp=3,Ep=4,Vx=5,Nr=100,Wx=101,jx=102,wp=103,Tp=104,Xx=200,Yx=201,qx=202,$x=203,Lf=204,Df=205,Kx=206,Zx=207,Qx=208,Jx=209,eS=210,tS=211,nS=212,iS=213,rS=214,oS=0,sS=1,aS=2,Ql=3,lS=4,uS=5,cS=6,fS=7,r0=0,dS=1,hS=2,vr=0,pS=1,mS=2,gS=3,vS=4,_S=5,o0=300,is=301,rs=302,Uf=303,Nf=304,xu=306,If=1e3,fi=1001,Ff=1002,xn=1003,Ap=1004,rc=1005,$n=1006,yS=1007,la=1008,_r=1009,xS=1010,SS=1011,Od=1012,s0=1013,or=1014,sr=1015,ua=1016,a0=1017,l0=1018,Gr=1020,MS=1021,di=1023,ES=1024,wS=1025,Vr=1026,os=1027,TS=1028,u0=1029,AS=1030,c0=1031,f0=1033,oc=33776,sc=33777,ac=33778,lc=33779,Rp=35840,Cp=35841,Pp=35842,bp=35843,RS=36196,Lp=37492,Dp=37496,Up=37808,Np=37809,Ip=37810,Fp=37811,Op=37812,zp=37813,kp=37814,Bp=37815,Hp=37816,Gp=37817,Vp=37818,Wp=37819,jp=37820,Xp=37821,uc=36492,Yp=36494,qp=36495,CS=36283,$p=36284,Kp=36285,Zp=36286,d0=3e3,Wr=3001,PS=3200,bS=3201,LS=0,DS=1,Zn="",on="srgb",Gi="srgb-linear",zd="display-p3",Su="display-p3-linear",Jl="linear",At="srgb",eu="rec709",tu="p3",fo=7680,Qp=519,US=512,NS=513,IS=514,FS=515,OS=516,zS=517,kS=518,BS=519,Jp=35044,em="300 es",Of=1035,Fi=2e3,nu=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=Math.PI/180,zf=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function HS(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function tm(t){return(t&t-1)===0&&t!==0}function kf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,o,s,a,u,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,u,c)}set(e,n,i,r,o,s,a,u,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=o,h[5]=u,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],h=i[4],m=i[7],p=i[2],_=i[5],w=i[8],y=r[0],v=r[3],f=r[6],x=r[1],S=r[4],T=r[7],P=r[2],D=r[5],L=r[8];return o[0]=s*y+a*x+u*P,o[3]=s*v+a*S+u*D,o[6]=s*f+a*T+u*L,o[1]=c*y+h*x+m*P,o[4]=c*v+h*S+m*D,o[7]=c*f+h*T+m*L,o[2]=p*y+_*x+w*P,o[5]=p*v+_*S+w*D,o[8]=p*f+_*T+w*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8];return n*s*h-n*a*c-i*o*h+i*a*u+r*o*c-r*s*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8],m=h*s-a*c,p=a*u-h*o,_=c*o-s*u,w=n*m+i*p+r*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=m*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*s)*y,e[3]=p*y,e[4]=(h*n-r*u)*y,e[5]=(r*o-a*n)*y,e[6]=_*y,e[7]=(i*u-c*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-r*c,r*u,-r*(-c*s+u*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(dc.makeScale(e,n)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new it;function h0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GS(){const t=iu("canvas");return t.style.display="block",t}const nm={};function Ws(t){t in nm||(nm[t]=!0,console.warn(t))}const im=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rm=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Gi]:{transfer:Jl,primaries:eu,toReference:t=>t,fromReference:t=>t},[on]:{transfer:At,primaries:eu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Su]:{transfer:Jl,primaries:tu,toReference:t=>t.applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im)},[zd]:{transfer:At,primaries:tu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im).convertLinearToSRGB()}},VS=new Set([Gi,Su]),vt={enabled:!0,_workingColorSpace:Gi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!VS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Va[e].toReference,r=Va[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Va[t].primaries},getTransfer:function(t){return t===Zn?Jl:Va[t].transfer}};function $o(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ho;class p0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=iu("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=iu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=$o(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($o(n[i]/255)*255):n[i]=$o(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(pc(r[s].image)):o.push(pc(r[s]))}else o=pc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?p0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jS=0;class zn extends cs{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,i=fi,r=fi,o=$n,s=la,a=di,u=_r,c=zn.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ma(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wr?on:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?Wr:d0}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?on:Zn}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=o0;zn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,n=0,i=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const u=e.elements,c=u[0],h=u[4],m=u[8],p=u[1],_=u[5],w=u[9],y=u[2],v=u[6],f=u[10];if(Math.abs(h-p)<.01&&Math.abs(m-y)<.01&&Math.abs(w-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+y)<.1&&Math.abs(w+v)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,T=(_+1)/2,P=(f+1)/2,D=(h+p)/4,L=(m+y)/4,k=(w+v)/4;return S>T&&S>P?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=D/i,o=L/i):T>P?T<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),i=D/r,o=k/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=L/o,r=k/o),this.set(i,r,o,n),this}let x=Math.sqrt((v-w)*(v-w)+(m-y)*(m-y)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(v-w)/x,this.y=(m-y)/x,this.z=(p-h)/x,this.w=Math.acos((c+_+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wr?on:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends XS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g0 extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YS extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let u=i[r+0],c=i[r+1],h=i[r+2],m=i[r+3];const p=o[s+0],_=o[s+1],w=o[s+2],y=o[s+3];if(a===0){e[n+0]=u,e[n+1]=c,e[n+2]=h,e[n+3]=m;return}if(a===1){e[n+0]=p,e[n+1]=_,e[n+2]=w,e[n+3]=y;return}if(m!==y||u!==p||c!==_||h!==w){let v=1-a;const f=u*p+c*_+h*w+m*y,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const P=Math.sqrt(S),D=Math.atan2(P,f*x);v=Math.sin(v*D)/P,a=Math.sin(a*D)/P}const T=a*x;if(u=u*v+p*T,c=c*v+_*T,h=h*v+w*T,m=m*v+y*T,v===1-a){const P=1/Math.sqrt(u*u+c*c+h*h+m*m);u*=P,c*=P,h*=P,m*=P}}e[n]=u,e[n+1]=c,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],u=i[r+1],c=i[r+2],h=i[r+3],m=o[s],p=o[s+1],_=o[s+2],w=o[s+3];return e[n]=a*w+h*m+u*_-c*p,e[n+1]=u*w+h*p+c*m-a*_,e[n+2]=c*w+h*_+a*p-u*m,e[n+3]=h*w-a*m-u*p-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),h=a(r/2),m=a(o/2),p=u(i/2),_=u(r/2),w=u(o/2);switch(s){case"XYZ":this._x=p*h*m+c*_*w,this._y=c*_*m-p*h*w,this._z=c*h*w+p*_*m,this._w=c*h*m-p*_*w;break;case"YXZ":this._x=p*h*m+c*_*w,this._y=c*_*m-p*h*w,this._z=c*h*w-p*_*m,this._w=c*h*m+p*_*w;break;case"ZXY":this._x=p*h*m-c*_*w,this._y=c*_*m+p*h*w,this._z=c*h*w+p*_*m,this._w=c*h*m-p*_*w;break;case"ZYX":this._x=p*h*m-c*_*w,this._y=c*_*m+p*h*w,this._z=c*h*w-p*_*m,this._w=c*h*m+p*_*w;break;case"YZX":this._x=p*h*m+c*_*w,this._y=c*_*m+p*h*w,this._z=c*h*w-p*_*m,this._w=c*h*m-p*_*w;break;case"XZY":this._x=p*h*m-c*_*w,this._y=c*_*m-p*h*w,this._z=c*h*w+p*_*m,this._w=c*h*m+p*_*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],u=n[9],c=n[2],h=n[6],m=n[10],p=i+a+m;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(h-u)*_,this._y=(o-c)*_,this._z=(s-r)*_}else if(i>a&&i>m){const _=2*Math.sqrt(1+i-a-m);this._w=(h-u)/_,this._x=.25*_,this._y=(r+s)/_,this._z=(o+c)/_}else if(a>m){const _=2*Math.sqrt(1+a-i-m);this._w=(o-c)/_,this._x=(r+s)/_,this._y=.25*_,this._z=(u+h)/_}else{const _=2*Math.sqrt(1+m-i-a);this._w=(s-r)/_,this._x=(o+c)/_,this._y=(u+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,u=n._y,c=n._z,h=n._w;return this._x=i*h+s*a+r*c-o*u,this._y=r*h+s*u+o*a-i*c,this._z=o*h+s*c+i*u-r*a,this._w=s*h-i*a-r*u-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const _=1-n;return this._w=_*s+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),h=Math.atan2(c,a),m=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=s*m+this._w*p,this._x=i*m+this._x*p,this._y=r*m+this._y*p,this._z=o*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,u=e.w,c=2*(s*r-a*i),h=2*(a*n-o*r),m=2*(o*i-s*n);return this.x=n+u*c+s*m-a*h,this.y=i+u*h+a*c-o*m,this.z=r+u*m+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,u=n.z;return this.x=r*u-o*a,this.y=o*s-i*u,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new K,om=new ga;class va{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ri):ri.fromBufferAttribute(o,s),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ja.subVectors(this.max,As),po.subVectors(e.a,As),mo.subVectors(e.b,As),go.subVectors(e.c,As),qi.subVectors(mo,po),$i.subVectors(go,mo),Ar.subVectors(po,go);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-Ar.z,Ar.y,qi.z,0,-qi.x,$i.z,0,-$i.x,Ar.z,0,-Ar.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-Ar.y,Ar.x,0];return!gc(n,po,mo,go,ja)||(n=[1,0,0,0,1,0,0,0,1],!gc(n,po,mo,go,ja))?!1:(Xa.crossVectors(qi,$i),n=[Xa.x,Xa.y,Xa.z],gc(n,po,mo,go,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new K,new K,new K,new K,new K,new K,new K,new K],ri=new K,Wa=new va,po=new K,mo=new K,go=new K,qi=new K,$i=new K,Ar=new K,As=new K,ja=new K,Xa=new K,Rr=new K;function gc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Rr.fromArray(t,o);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),u=e.dot(Rr),c=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>a)return!1}return!0}const qS=new va,Rs=new K,vc=new K;class Mu{constructor(e=new K,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const n=Rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(vc)),this.expandByPoint(Rs.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new K,_c=new K,Ya=new K,Ki=new K,yc=new K,qa=new K,xc=new K;class v0{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_c.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(_c);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ya),a=Ki.dot(this.direction),u=-Ki.dot(Ya),c=Ki.lengthSq(),h=Math.abs(1-s*s);let m,p,_,w;if(h>0)if(m=s*u-a,p=s*a-u,w=o*h,m>=0)if(p>=-w)if(p<=w){const y=1/h;m*=y,p*=y,_=m*(m+s*p+2*a)+p*(s*m+p+2*u)+c}else p=o,m=Math.max(0,-(s*p+a)),_=-m*m+p*(p+2*u)+c;else p=-o,m=Math.max(0,-(s*p+a)),_=-m*m+p*(p+2*u)+c;else p<=-w?(m=Math.max(0,-(-s*o+a)),p=m>0?-o:Math.min(Math.max(-o,-u),o),_=-m*m+p*(p+2*u)+c):p<=w?(m=0,p=Math.min(Math.max(-o,-u),o),_=p*(p+2*u)+c):(m=Math.max(0,-(s*o+a)),p=m>0?o:Math.min(Math.max(-o,-u),o),_=-m*m+p*(p+2*u)+c);else p=s>0?-o:o,m=Math.max(0,-(s*p+a)),_=-m*m+p*(p+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(_c).addScaledVector(Ya,p),_}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,u=i+s;return u<0?null:a<0?this.at(u,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,u;const c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(o=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(o=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),m>=0?(a=(e.min.z-p.z)*m,u=(e.max.z-p.z)*m):(a=(e.max.z-p.z)*m,u=(e.min.z-p.z)*m),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,o){yc.subVectors(n,e),qa.subVectors(i,e),xc.crossVectors(yc,qa);let s=this.direction.dot(xc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ki.subVectors(this.origin,e);const u=a*this.direction.dot(qa.crossVectors(Ki,qa));if(u<0)return null;const c=a*this.direction.dot(yc.cross(Ki));if(c<0||u+c>s)return null;const h=-a*Ki.dot(xc);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,r,o,s,a,u,c,h,m,p,_,w,y,v){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,u,c,h,m,p,_,w,y,v)}set(e,n,i,r,o,s,a,u,c,h,m,p,_,w,y,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=u,f[2]=c,f[6]=h,f[10]=m,f[14]=p,f[3]=_,f[7]=w,f[11]=y,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),o=1/vo.setFromMatrixColumn(e,1).length(),s=1/vo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const p=s*h,_=s*m,w=a*h,y=a*m;n[0]=u*h,n[4]=-u*m,n[8]=c,n[1]=_+w*c,n[5]=p-y*c,n[9]=-a*u,n[2]=y-p*c,n[6]=w+_*c,n[10]=s*u}else if(e.order==="YXZ"){const p=u*h,_=u*m,w=c*h,y=c*m;n[0]=p+y*a,n[4]=w*a-_,n[8]=s*c,n[1]=s*m,n[5]=s*h,n[9]=-a,n[2]=_*a-w,n[6]=y+p*a,n[10]=s*u}else if(e.order==="ZXY"){const p=u*h,_=u*m,w=c*h,y=c*m;n[0]=p-y*a,n[4]=-s*m,n[8]=w+_*a,n[1]=_+w*a,n[5]=s*h,n[9]=y-p*a,n[2]=-s*c,n[6]=a,n[10]=s*u}else if(e.order==="ZYX"){const p=s*h,_=s*m,w=a*h,y=a*m;n[0]=u*h,n[4]=w*c-_,n[8]=p*c+y,n[1]=u*m,n[5]=y*c+p,n[9]=_*c-w,n[2]=-c,n[6]=a*u,n[10]=s*u}else if(e.order==="YZX"){const p=s*u,_=s*c,w=a*u,y=a*c;n[0]=u*h,n[4]=y-p*m,n[8]=w*m+_,n[1]=m,n[5]=s*h,n[9]=-a*h,n[2]=-c*h,n[6]=_*m+w,n[10]=p-y*m}else if(e.order==="XZY"){const p=s*u,_=s*c,w=a*u,y=a*c;n[0]=u*h,n[4]=-m,n[8]=c*h,n[1]=p*m+y,n[5]=s*h,n[9]=_*m-w,n[2]=w*m-_,n[6]=a*h,n[10]=y*m+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,KS)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Zi.crossVectors(i,Un),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Zi.crossVectors(i,Un)),Zi.normalize(),$a.crossVectors(Un,Zi),r[0]=Zi.x,r[4]=$a.x,r[8]=Un.x,r[1]=Zi.y,r[5]=$a.y,r[9]=Un.y,r[2]=Zi.z,r[6]=$a.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],h=i[1],m=i[5],p=i[9],_=i[13],w=i[2],y=i[6],v=i[10],f=i[14],x=i[3],S=i[7],T=i[11],P=i[15],D=r[0],L=r[4],k=r[8],R=r[12],M=r[1],F=r[5],W=r[9],Z=r[13],O=r[2],ne=r[6],G=r[10],j=r[14],V=r[3],Y=r[7],$=r[11],B=r[15];return o[0]=s*D+a*M+u*O+c*V,o[4]=s*L+a*F+u*ne+c*Y,o[8]=s*k+a*W+u*G+c*$,o[12]=s*R+a*Z+u*j+c*B,o[1]=h*D+m*M+p*O+_*V,o[5]=h*L+m*F+p*ne+_*Y,o[9]=h*k+m*W+p*G+_*$,o[13]=h*R+m*Z+p*j+_*B,o[2]=w*D+y*M+v*O+f*V,o[6]=w*L+y*F+v*ne+f*Y,o[10]=w*k+y*W+v*G+f*$,o[14]=w*R+y*Z+v*j+f*B,o[3]=x*D+S*M+T*O+P*V,o[7]=x*L+S*F+T*ne+P*Y,o[11]=x*k+S*W+T*G+P*$,o[15]=x*R+S*Z+T*j+P*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],u=e[9],c=e[13],h=e[2],m=e[6],p=e[10],_=e[14],w=e[3],y=e[7],v=e[11],f=e[15];return w*(+o*u*m-r*c*m-o*a*p+i*c*p+r*a*_-i*u*_)+y*(+n*u*_-n*c*p+o*s*p-r*s*_+r*c*h-o*u*h)+v*(+n*c*m-n*a*_-o*s*m+i*s*_+o*a*h-i*c*h)+f*(-r*a*h-n*u*m+n*a*p+r*s*m-i*s*p+i*u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8],m=e[9],p=e[10],_=e[11],w=e[12],y=e[13],v=e[14],f=e[15],x=m*v*c-y*p*c+y*u*_-a*v*_-m*u*f+a*p*f,S=w*p*c-h*v*c-w*u*_+s*v*_+h*u*f-s*p*f,T=h*y*c-w*m*c+w*a*_-s*y*_-h*a*f+s*m*f,P=w*m*u-h*y*u-w*a*p+s*y*p+h*a*v-s*m*v,D=n*x+i*S+r*T+o*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=x*L,e[1]=(y*p*o-m*v*o-y*r*_+i*v*_+m*r*f-i*p*f)*L,e[2]=(a*v*o-y*u*o+y*r*c-i*v*c-a*r*f+i*u*f)*L,e[3]=(m*u*o-a*p*o-m*r*c+i*p*c+a*r*_-i*u*_)*L,e[4]=S*L,e[5]=(h*v*o-w*p*o+w*r*_-n*v*_-h*r*f+n*p*f)*L,e[6]=(w*u*o-s*v*o-w*r*c+n*v*c+s*r*f-n*u*f)*L,e[7]=(s*p*o-h*u*o+h*r*c-n*p*c-s*r*_+n*u*_)*L,e[8]=T*L,e[9]=(w*m*o-h*y*o-w*i*_+n*y*_+h*i*f-n*m*f)*L,e[10]=(s*y*o-w*a*o+w*i*c-n*y*c-s*i*f+n*a*f)*L,e[11]=(h*a*o-s*m*o-h*i*c+n*m*c+s*i*_-n*a*_)*L,e[12]=P*L,e[13]=(h*y*r-w*m*r+w*i*p-n*y*p-h*i*v+n*m*v)*L,e[14]=(w*a*r-s*y*r-w*i*u+n*y*u+s*i*v-n*a*v)*L,e[15]=(s*m*r-h*a*r+h*i*u-n*m*u-s*i*p+n*a*p)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,u=e.z,c=o*s,h=o*a;return this.set(c*s+i,c*a-r*u,c*u+r*a,0,c*a+r*u,h*a+i,h*u-r*s,0,c*u-r*a,h*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,u=n._w,c=o+o,h=s+s,m=a+a,p=o*c,_=o*h,w=o*m,y=s*h,v=s*m,f=a*m,x=u*c,S=u*h,T=u*m,P=i.x,D=i.y,L=i.z;return r[0]=(1-(y+f))*P,r[1]=(_+T)*P,r[2]=(w-S)*P,r[3]=0,r[4]=(_-T)*D,r[5]=(1-(p+f))*D,r[6]=(v+x)*D,r[7]=0,r[8]=(w+S)*L,r[9]=(v-x)*L,r[10]=(1-(p+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=vo.set(r[0],r[1],r[2]).length();const s=vo.set(r[4],r[5],r[6]).length(),a=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const c=1/o,h=1/s,m=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=m,oi.elements[9]*=m,oi.elements[10]*=m,n.setFromRotationMatrix(oi),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Fi){const u=this.elements,c=2*o/(n-e),h=2*o/(i-r),m=(n+e)/(n-e),p=(i+r)/(i-r);let _,w;if(a===Fi)_=-(s+o)/(s-o),w=-2*s*o/(s-o);else if(a===nu)_=-s/(s-o),w=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=w,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Fi){const u=this.elements,c=1/(n-e),h=1/(i-r),m=1/(s-o),p=(n+e)*c,_=(i+r)*h;let w,y;if(a===Fi)w=(s+o)*m,y=-2*m;else if(a===nu)w=o*m,y=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=y,u[14]=-w,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vo=new K,oi=new Vt,$S=new K(0,0,0),KS=new K(1,1,1),Zi=new K,$a=new K,Un=new K,sm=new Vt,am=new ga;class Eu{constructor(e=0,n=0,i=0,r=Eu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],u=r[1],c=r[5],h=r[9],m=r[2],p=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Rn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eu.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZS=0;const lm=new K,_o=new ga,Ri=new Vt,Ka=new K,Cs=new K,QS=new K,JS=new ga,um=new K(1,0,0),cm=new K(0,1,0),fm=new K(0,0,1),eM={type:"added"},tM={type:"removed"};class an extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new K,n=new Eu,i=new ga,r=new K(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new it}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Cs,Ka,this.up):Ri.lookAt(Ka,Cs,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(Ri),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const m=u[c];o(e.shapes,m)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(n){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),h=s(e.images),m=s(e.shapes),p=s(e.skeletons),_=s(e.animations),w=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),w.length>0&&(i.nodes=w)}return i.object=r,i;function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new K(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new K,Ci=new K,Sc=new K,Pi=new K,yo=new K,xo=new K,dm=new K,Mc=new K,Ec=new K,wc=new K;let Za=!1;class ci{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){si.subVectors(r,n),Ci.subVectors(i,n),Sc.subVectors(e,n);const s=si.dot(si),a=si.dot(Ci),u=si.dot(Sc),c=Ci.dot(Ci),h=Ci.dot(Sc),m=s*c-a*a;if(m===0)return o.set(-2,-1,-1);const p=1/m,_=(c*u-a*h)*p,w=(s*h-a*u)*p;return o.set(1-_-w,w,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi),Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,n,i,r,o,s,a,u){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(e,n,i,r,o,s,a,u)}static getInterpolation(e,n,i,r,o,s,a,u){return this.getBarycoord(e,n,i,r,Pi),u.setScalar(0),u.addScaledVector(o,Pi.x),u.addScaledVector(s,Pi.y),u.addScaledVector(a,Pi.z),u}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Ci.subVectors(e,n),si.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;yo.subVectors(r,i),xo.subVectors(o,i),Mc.subVectors(e,i);const u=yo.dot(Mc),c=xo.dot(Mc);if(u<=0&&c<=0)return n.copy(i);Ec.subVectors(e,r);const h=yo.dot(Ec),m=xo.dot(Ec);if(h>=0&&m<=h)return n.copy(r);const p=u*m-h*c;if(p<=0&&u>=0&&h<=0)return s=u/(u-h),n.copy(i).addScaledVector(yo,s);wc.subVectors(e,o);const _=yo.dot(wc),w=xo.dot(wc);if(w>=0&&_<=w)return n.copy(o);const y=_*c-u*w;if(y<=0&&c>=0&&w<=0)return a=c/(c-w),n.copy(i).addScaledVector(xo,a);const v=h*w-_*m;if(v<=0&&m-h>=0&&_-w>=0)return dm.subVectors(o,r),a=(m-h)/(m-h+(_-w)),n.copy(r).addScaledVector(dm,a);const f=1/(v+y+p);return s=y*f,a=p*f,n.copy(i).addScaledVector(yo,s).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vt.workingColorSpace){return this.r=e,this.g=n,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vt.workingColorSpace){if(e=HS(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Tc(s,o,e+1/3),this.g=Tc(s,o,e),this.b=Tc(s,o,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,n=on){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=on){const i=y0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return vt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Rn(pn.r*255,0,255))*65536+Math.round(Rn(pn.g*255,0,255))*256+Math.round(Rn(pn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(pn.copy(this),n);const i=pn.r,r=pn.g,o=pn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let u,c;const h=(a+s)/2;if(a===s)u=0,c=0;else{const m=s-a;switch(c=h<=.5?m/(s+a):m/(2-s-a),s){case i:u=(r-o)/m+(r<o?6:0);break;case r:u=(o-i)/m+2;break;case o:u=(i-r)/m+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=on){vt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,r=pn.b;return e!==on?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Qa);const i=fc(Qi.h,Qa.h,n),r=fc(Qi.s,Qa.s,n),o=fc(Qi.l,Qa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ke;ke.NAMES=y0;let nM=0;class _a extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Hr,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Df,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const u=o[a];delete u.metadata,s.push(u)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class x0 extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new K,Ja=new pt;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this.updateRange={offset:0,count:-1},this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array),o=Tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class S0 extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class M0 extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jr extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iM=0;const Xn=new Vt,Ac=new an,So=new K,Nn=new va,Ps=new va,Kt=new K;class Wi extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?M0:S0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new it().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new jr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Nn.min,Ps.min),Nn.expandByPoint(Kt),Kt.addVectors(Nn.max,Ps.max),Nn.expandByPoint(Kt)):(Nn.expandByPoint(Ps.min),Nn.expandByPoint(Ps.max))}Nn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],u=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),u&&(So.fromBufferAttribute(e,c),Kt.add(So)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new K,h[M]=new K;const m=new K,p=new K,_=new K,w=new pt,y=new pt,v=new pt,f=new K,x=new K;function S(M,F,W){m.fromArray(r,M*3),p.fromArray(r,F*3),_.fromArray(r,W*3),w.fromArray(s,M*2),y.fromArray(s,F*2),v.fromArray(s,W*2),p.sub(m),_.sub(m),y.sub(w),v.sub(w);const Z=1/(y.x*v.y-v.x*y.y);isFinite(Z)&&(f.copy(p).multiplyScalar(v.y).addScaledVector(_,-y.y).multiplyScalar(Z),x.copy(_).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(Z),c[M].add(f),c[F].add(f),c[W].add(f),h[M].add(x),h[F].add(x),h[W].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let M=0,F=T.length;M<F;++M){const W=T[M],Z=W.start,O=W.count;for(let ne=Z,G=Z+O;ne<G;ne+=3)S(i[ne+0],i[ne+1],i[ne+2])}const P=new K,D=new K,L=new K,k=new K;function R(M){L.fromArray(o,M*3),k.copy(L);const F=c[M];P.copy(F),P.sub(L.multiplyScalar(L.dot(F))).normalize(),D.crossVectors(k,F);const Z=D.dot(h[M])<0?-1:1;u[M*4]=P.x,u[M*4+1]=P.y,u[M*4+2]=P.z,u[M*4+3]=Z}for(let M=0,F=T.length;M<F;++M){const W=T[M],Z=W.start,O=W.count;for(let ne=Z,G=Z+O;ne<G;ne+=3)R(i[ne+0]),R(i[ne+1]),R(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const r=new K,o=new K,s=new K,a=new K,u=new K,c=new K,h=new K,m=new K;if(e)for(let p=0,_=e.count;p<_;p+=3){const w=e.getX(p+0),y=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(n,w),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),h.subVectors(s,o),m.subVectors(r,o),h.cross(m),a.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(h),u.add(h),c.add(h),i.setXYZ(w,a.x,a.y,a.z),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,_=n.count;p<_;p+=3)r.fromBufferAttribute(n,p+0),o.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),h.subVectors(s,o),m.subVectors(r,o),h.cross(m),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,u){const c=a.array,h=a.itemSize,m=a.normalized,p=new c.constructor(u.length*h);let _=0,w=0;for(let y=0,v=u.length;y<v;y++){a.isInterleavedBufferAttribute?_=u[y]*a.data.stride+a.offset:_=u[y]*h;for(let f=0;f<h;f++)p[w++]=c[_++]}return new kn(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let h=0,m=c.length;h<m;h++){const p=c[h],_=e(p,i);u.push(_)}n.morphAttributes[a]=u}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let m=0,p=c.length;m<p;m++){const _=c[m];h.push(_.toJSON(e.data))}h.length>0&&(r[u]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const o=e.morphAttributes;for(const c in o){const h=[],m=o[c];for(let p=0,_=m.length;p<_;p++)h.push(m[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const m=s[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Vt,Cr=new v0,el=new Mu,pm=new K,Mo=new K,Eo=new K,wo=new K,Rc=new K,tl=new K,nl=new pt,il=new pt,rl=new pt,mm=new K,gm=new K,vm=new K,ol=new K,sl=new K;class ar extends an{constructor(e=new Wi,n=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){tl.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const h=a[u],m=o[u];h!==0&&(Rc.fromBufferAttribute(m,e),s?tl.addScaledVector(Rc,h):tl.addScaledVector(Rc.sub(n),h))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(o),Cr.copy(e.ray).recast(e.near),!(el.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(el,pm)===null||Cr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(o).invert(),Cr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,u=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,m=o.attributes.normal,p=o.groups,_=o.drawRange;if(a!==null)if(Array.isArray(s))for(let w=0,y=p.length;w<y;w++){const v=p[w],f=s[v.materialIndex],x=Math.max(v.start,_.start),S=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let T=x,P=S;T<P;T+=3){const D=a.getX(T),L=a.getX(T+1),k=a.getX(T+2);r=al(this,f,e,i,c,h,m,D,L,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const w=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let v=w,f=y;v<f;v+=3){const x=a.getX(v),S=a.getX(v+1),T=a.getX(v+2);r=al(this,s,e,i,c,h,m,x,S,T),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(s))for(let w=0,y=p.length;w<y;w++){const v=p[w],f=s[v.materialIndex],x=Math.max(v.start,_.start),S=Math.min(u.count,Math.min(v.start+v.count,_.start+_.count));for(let T=x,P=S;T<P;T+=3){const D=T,L=T+1,k=T+2;r=al(this,f,e,i,c,h,m,D,L,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const w=Math.max(0,_.start),y=Math.min(u.count,_.start+_.count);for(let v=w,f=y;v<f;v+=3){const x=v,S=v+1,T=v+2;r=al(this,s,e,i,c,h,m,x,S,T),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function rM(t,e,n,i,r,o,s,a){let u;if(e.side===Dn?u=i.intersectTriangle(s,o,r,!0,a):u=i.intersectTriangle(r,o,s,e.side===Sr,a),u===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function al(t,e,n,i,r,o,s,a,u,c){t.getVertexPosition(a,Mo),t.getVertexPosition(u,Eo),t.getVertexPosition(c,wo);const h=rM(t,e,n,i,Mo,Eo,wo,ol);if(h){r&&(nl.fromBufferAttribute(r,a),il.fromBufferAttribute(r,u),rl.fromBufferAttribute(r,c),h.uv=ci.getInterpolation(ol,Mo,Eo,wo,nl,il,rl,new pt)),o&&(nl.fromBufferAttribute(o,a),il.fromBufferAttribute(o,u),rl.fromBufferAttribute(o,c),h.uv1=ci.getInterpolation(ol,Mo,Eo,wo,nl,il,rl,new pt),h.uv2=h.uv1),s&&(mm.fromBufferAttribute(s,a),gm.fromBufferAttribute(s,u),vm.fromBufferAttribute(s,c),h.normal=ci.getInterpolation(ol,Mo,Eo,wo,mm,gm,vm,new K),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:u,c,normal:new K,materialIndex:0};ci.getNormal(Mo,Eo,wo,m.normal),h.face=m}return h}class ya extends Wi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],h=[],m=[];let p=0,_=0;w("z","y","x",-1,-1,i,n,e,s,o,0),w("z","y","x",1,-1,i,n,-e,s,o,1),w("x","z","y",1,1,e,i,n,r,s,2),w("x","z","y",1,-1,e,i,-n,r,s,3),w("x","y","z",1,-1,e,n,i,r,o,4),w("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new jr(c,3)),this.setAttribute("normal",new jr(h,3)),this.setAttribute("uv",new jr(m,2));function w(y,v,f,x,S,T,P,D,L,k,R){const M=T/L,F=P/k,W=T/2,Z=P/2,O=D/2,ne=L+1,G=k+1;let j=0,V=0;const Y=new K;for(let $=0;$<G;$++){const B=$*F-Z;for(let q=0;q<ne;q++){const pe=q*M-W;Y[y]=pe*x,Y[v]=B*S,Y[f]=O,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[v]=0,Y[f]=D>0?1:-1,h.push(Y.x,Y.y,Y.z),m.push(q/L),m.push(1-$/k),j+=1}}for(let $=0;$<k;$++)for(let B=0;B<L;B++){const q=p+B+ne*$,pe=p+B+ne*($+1),ge=p+(B+1)+ne*($+1),Me=p+(B+1)+ne*$;u.push(q,pe,Me),u.push(pe,ge,Me),V+=6}a.addGroup(_,V,R),_+=V,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function oM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E0(t){return t.getRenderTarget()===null?t.outputColorSpace:vt.workingColorSpace}const sM={clone:ss,merge:_n};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class w0 extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kn extends w0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,n-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const To=-90,Ao=1;class uM extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(To,Ao,e,n);r.layers=this.layers,this.add(r);const o=new Kn(To,Ao,e,n);o.layers=this.layers,this.add(o);const s=new Kn(To,Ao,e,n);s.layers=this.layers,this.add(s);const a=new Kn(To,Ao,e,n);a.layers=this.layers,this.add(a);const u=new Kn(To,Ao,e,n);u.layers=this.layers,this.add(u);const c=new Kn(To,Ao,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,u]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,u,c,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(m,p,_),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class T0 extends zn{constructor(e,n,i,r,o,s,a,u,c,h){e=e!==void 0?e:[],n=n!==void 0?n:is,super(e,n,i,r,o,s,a,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wr?on:Zn),this.texture=new T0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),o=new Qr({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:gr});o.uniforms.tEquirect.value=n;const s=new ar(r,o),a=n.minFilter;return n.minFilter===la&&(n.minFilter=$n),new uM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Cc=new K,fM=new K,dM=new it;class Dr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cc.subVectors(i,n).cross(fM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dM.getNormalMatrix(e),r=this.coplanarPoint(Cc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Mu,ll=new K;class kd{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr,s=new Dr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],u=r[3],c=r[4],h=r[5],m=r[6],p=r[7],_=r[8],w=r[9],y=r[10],v=r[11],f=r[12],x=r[13],S=r[14],T=r[15];if(i[0].setComponents(u-o,p-c,v-_,T-f).normalize(),i[1].setComponents(u+o,p+c,v+_,T+f).normalize(),i[2].setComponents(u+s,p+h,v+w,T+x).normalize(),i[3].setComponents(u-s,p-h,v-w,T-x).normalize(),i[4].setComponents(u-a,p-m,v-y,T-S).normalize(),n===Fi)i[5].setComponents(u+a,p+m,v+y,T+S).normalize();else if(n===nu)i[5].setComponents(a,m,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function hM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const m=c.array,p=c.usage,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,m,p),c.onUploadCallback();let w;if(m instanceof Float32Array)w=t.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)w=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=t.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=t.SHORT;else if(m instanceof Uint32Array)w=t.UNSIGNED_INT;else if(m instanceof Int32Array)w=t.INT;else if(m instanceof Int8Array)w=t.BYTE;else if(m instanceof Uint8Array)w=t.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version}}function o(c,h,m){const p=h.array,_=h.updateRange;t.bindBuffer(m,c),_.count===-1?t.bufferSubData(m,0,p):(n?t.bufferSubData(m,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):t.bufferSubData(m,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function u(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const m=i.get(c);m===void 0?i.set(c,r(c,h)):m.version<c.version&&(o(m.buffer,c,h),m.version=c.version)}return{get:s,remove:a,update:u}}class Bd extends Wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),u=Math.floor(r),c=a+1,h=u+1,m=e/a,p=n/u,_=[],w=[],y=[],v=[];for(let f=0;f<h;f++){const x=f*p-s;for(let S=0;S<c;S++){const T=S*m-o;w.push(T,-x,0),y.push(0,0,1),v.push(S/a),v.push(1-f/u)}}for(let f=0;f<u;f++)for(let x=0;x<a;x++){const S=x+c*f,T=x+c*(f+1),P=x+1+c*(f+1),D=x+1+c*f;_.push(S,T,D),_.push(T,P,D)}this.setIndex(_),this.setAttribute("position",new jr(w,3)),this.setAttribute("normal",new jr(y,3)),this.setAttribute("uv",new jr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.width,e.height,e.widthSegments,e.heightSegments)}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ME=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,RE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:gM,alphamap_pars_fragment:vM,alphatest_fragment:_M,alphatest_pars_fragment:yM,aomap_fragment:xM,aomap_pars_fragment:SM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:wM,iridescence_fragment:TM,bumpmap_pars_fragment:AM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:bM,color_fragment:LM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:NM,common:IM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:OM,displacementmap_pars_vertex:zM,displacementmap_vertex:kM,emissivemap_fragment:BM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:WM,envmap_common_pars_fragment:jM,envmap_pars_fragment:XM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:oE,envmap_vertex:qM,fog_vertex:$M,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_fragment:eE,lightmap_pars_fragment:tE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:rE,lights_toon_fragment:sE,lights_toon_pars_fragment:aE,lights_phong_fragment:lE,lights_phong_pars_fragment:uE,lights_physical_fragment:cE,lights_physical_pars_fragment:fE,lights_fragment_begin:dE,lights_fragment_maps:hE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:_E,map_fragment:yE,map_pars_fragment:xE,map_particle_fragment:SE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:wE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:RE,morphtarget_vertex:CE,normal_fragment_begin:PE,normal_fragment_maps:bE,normal_pars_fragment:LE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:zE,opaque_fragment:kE,packing:BE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:WE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:qE,shadowmap_vertex:$E,shadowmask_pars_fragment:KE,skinbase_vertex:ZE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:ew,specularmap_fragment:tw,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:ow,transmission_pars_fragment:sw,uv_pars_fragment:aw,uv_pars_vertex:lw,uv_vertex:uw,worldpos_vertex:cw,background_vert:fw,background_frag:dw,backgroundCube_vert:hw,backgroundCube_frag:pw,cube_vert:mw,cube_frag:gw,depth_vert:vw,depth_frag:_w,distanceRGBA_vert:yw,distanceRGBA_frag:xw,equirect_vert:Sw,equirect_frag:Mw,linedashed_vert:Ew,linedashed_frag:ww,meshbasic_vert:Tw,meshbasic_frag:Aw,meshlambert_vert:Rw,meshlambert_frag:Cw,meshmatcap_vert:Pw,meshmatcap_frag:bw,meshnormal_vert:Lw,meshnormal_frag:Dw,meshphong_vert:Uw,meshphong_frag:Nw,meshphysical_vert:Iw,meshphysical_frag:Fw,meshtoon_vert:Ow,meshtoon_frag:zw,points_vert:kw,points_frag:Bw,shadow_vert:Hw,shadow_frag:Gw,sprite_vert:Vw,sprite_frag:Ww},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},yi={basic:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:_n([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:_n([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:_n([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:_n([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:_n([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:_n([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:_n([ye.common,ye.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:_n([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};yi.physical={uniforms:_n([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ul={r:0,b:0,g:0};function jw(t,e,n,i,r,o,s){const a=new ke(0);let u=o===!0?0:1,c,h,m=null,p=0,_=null;function w(v,f){let x=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?n:e).get(S)),S===null?y(a,u):S&&S.isColor&&(y(S,1),x=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),S&&(S.isCubeTexture||S.mapping===xu)?(h===void 0&&(h=new ar(new ya(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:ss(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=vt.getTransfer(S.colorSpace)!==At,(m!==S||p!==S.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,m=S,p=S.version,_=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ar(new Bd(2,2),new Qr({name:"BackgroundMaterial",uniforms:ss(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=vt.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||p!==S.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,m=S,p=S.version,_=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function y(v,f){v.getRGB(ul,E0(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),u=f,y(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,y(a,u)},render:w}}function Xw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},u=v(null);let c=u,h=!1;function m(O,ne,G,j,V){let Y=!1;if(s){const $=y(j,G,ne);c!==$&&(c=$,_(c.object)),Y=f(O,j,G,V),Y&&x(O,j,G,V)}else{const $=ne.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=j.id,c.program=G.id,c.wireframe=$,Y=!0)}V!==null&&n.update(V,t.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,k(O,ne,G,j),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function p(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function _(O){return i.isWebGL2?t.bindVertexArray(O):o.bindVertexArrayOES(O)}function w(O){return i.isWebGL2?t.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function y(O,ne,G){const j=G.wireframe===!0;let V=a[O.id];V===void 0&&(V={},a[O.id]=V);let Y=V[ne.id];Y===void 0&&(Y={},V[ne.id]=Y);let $=Y[j];return $===void 0&&($=v(p()),Y[j]=$),$}function v(O){const ne=[],G=[],j=[];for(let V=0;V<r;V++)ne[V]=0,G[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:G,attributeDivisors:j,object:O,attributes:{},index:null}}function f(O,ne,G,j){const V=c.attributes,Y=ne.attributes;let $=0;const B=G.getAttributes();for(const q in B)if(B[q].location>=0){const ge=V[q];let Me=Y[q];if(Me===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor)),ge===void 0||ge.attribute!==Me||Me&&ge.data!==Me.data)return!0;$++}return c.attributesNum!==$||c.index!==j}function x(O,ne,G,j){const V={},Y=ne.attributes;let $=0;const B=G.getAttributes();for(const q in B)if(B[q].location>=0){let ge=Y[q];ge===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(ge=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(ge=O.instanceColor));const Me={};Me.attribute=ge,ge&&ge.data&&(Me.data=ge.data),V[q]=Me,$++}c.attributes=V,c.attributesNum=$,c.index=j}function S(){const O=c.newAttributes;for(let ne=0,G=O.length;ne<G;ne++)O[ne]=0}function T(O){P(O,0)}function P(O,ne){const G=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;G[O]=1,j[O]===0&&(t.enableVertexAttribArray(O),j[O]=1),V[O]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ne),V[O]=ne)}function D(){const O=c.newAttributes,ne=c.enabledAttributes;for(let G=0,j=ne.length;G<j;G++)ne[G]!==O[G]&&(t.disableVertexAttribArray(G),ne[G]=0)}function L(O,ne,G,j,V,Y,$){$===!0?t.vertexAttribIPointer(O,ne,G,V,Y):t.vertexAttribPointer(O,ne,G,j,V,Y)}function k(O,ne,G,j){if(i.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const V=j.attributes,Y=G.getAttributes(),$=ne.defaultAttributeValues;for(const B in Y){const q=Y[B];if(q.location>=0){let pe=V[B];if(pe===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),pe!==void 0){const ge=pe.normalized,Me=pe.itemSize,be=n.get(pe);if(be===void 0)continue;const $e=be.buffer,Be=be.type,Ye=be.bytesPerElement,yt=i.isWebGL2===!0&&(Be===t.INT||Be===t.UNSIGNED_INT||pe.gpuType===s0);if(pe.isInterleavedBufferAttribute){const je=pe.data,Q=je.stride,at=pe.offset;if(je.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)P(q.location+Te,je.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Te=0;Te<q.locationSize;Te++)T(q.location+Te);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Te=0;Te<q.locationSize;Te++)L(q.location+Te,Me/q.locationSize,Be,ge,Q*Ye,(at+Me/q.locationSize*Te)*Ye,yt)}else{if(pe.isInstancedBufferAttribute){for(let je=0;je<q.locationSize;je++)P(q.location+je,pe.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<q.locationSize;je++)T(q.location+je);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let je=0;je<q.locationSize;je++)L(q.location+je,Me/q.locationSize,Be,ge,Me*Ye,Me/q.locationSize*je*Ye,yt)}}else if($!==void 0){const ge=$[B];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(q.location,ge);break;case 3:t.vertexAttrib3fv(q.location,ge);break;case 4:t.vertexAttrib4fv(q.location,ge);break;default:t.vertexAttrib1fv(q.location,ge)}}}}D()}function R(){W();for(const O in a){const ne=a[O];for(const G in ne){const j=ne[G];for(const V in j)w(j[V].object),delete j[V];delete ne[G]}delete a[O]}}function M(O){if(a[O.id]===void 0)return;const ne=a[O.id];for(const G in ne){const j=ne[G];for(const V in j)w(j[V].object),delete j[V];delete ne[G]}delete a[O.id]}function F(O){for(const ne in a){const G=a[ne];if(G[O.id]===void 0)continue;const j=G[O.id];for(const V in j)w(j[V].object),delete j[V];delete G[O.id]}}function W(){Z(),h=!0,c!==u&&(c=u,_(c.object))}function Z(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:m,reset:W,resetDefaultState:Z,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:T,disableUnusedAttributes:D}}function Yw(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,h){t.drawArrays(o,c,h),n.update(h,o,1)}function u(c,h,m){if(m===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](o,c,h,m),n.update(h,o,m)}this.setMode=s,this.render=a,this.renderInstances=u}function qw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),w=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=s||e.has("OES_texture_float"),P=S&&T,D=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:m,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:D}}function $w(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Dr,a=new it,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const _=m.length!==0||p||i!==0||r;return r=p,i=m.length,_},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,p){n=h(m,p,0)},this.setState=function(m,p,_){const w=m.clippingPlanes,y=m.clipIntersection,v=m.clipShadows,f=t.get(m);if(!r||w===null||w.length===0||o&&!v)o?h(null):c();else{const x=o?0:i,S=x*4;let T=f.clippingState||null;u.value=T,T=h(w,p,S,_);for(let P=0;P!==S;++P)T[P]=n[P];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,p,_,w){const y=m!==null?m.length:0;let v=null;if(y!==0){if(v=u.value,w!==!0||v===null){const f=_+y*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<f)&&(v=new Float32Array(f));for(let S=0,T=_;S!==y;++S,T+=4)s.copy(m[S]).applyMatrix4(x,a),s.normal.toArray(v,T),v[T+3]=s.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Kw(t){let e=new WeakMap;function n(s,a){return a===Uf?s.mapping=is:a===Nf&&(s.mapping=rs),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Uf||a===Nf)if(e.has(s)){const u=e.get(s).texture;return n(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new cM(u.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class R0 extends w0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,u=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=4,_m=[.125,.215,.35,.446,.526,.582],Ir=20,Pc=new R0,ym=new ke;let bc=null,Lc=0,Dc=0;const Ur=(1+Math.sqrt(5))/2,Ro=1/Ur,xm=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Ur,Ro),new K(0,Ur,-Ro),new K(Ro,0,Ur),new K(-Ro,0,Ur),new K(Ur,Ro,0),new K(-Ur,Ro,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Lc,Dc),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ua,format:di,colorSpace:Gi,depthBuffer:!1},r=Mm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(o)),this._blurMaterial=Qw(o,e,n)}return r}_compileMaterial(e){const n=new ar(this._lodPlanes[0],e);this._renderer.compile(n,Pc)}_sceneToCubeUV(e,n,i,r){const a=new Kn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(ym),h.toneMapping=vr,h.autoClear=!1;const _=new x0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),w=new ar(new ya,_);let y=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,y=!0):(_.color.copy(ym),y=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,u[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,u[f]),a.lookAt(0,c[f],0)):(a.up.set(0,u[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;cl(r,x*S,f>2?S:0,S,S),h.setRenderTarget(r),y&&h.render(w,a),h.render(e,a)}w.geometry.dispose(),w.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ar(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;cl(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(s,Pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=xm[(r-1)%xm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ar(this._lodPlanes[r],c),p=c.uniforms,_=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*Ir-1),y=o/w,v=isFinite(o)?1+Math.floor(h*y):Ir;v>Ir&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ir}`);const f=[];let x=0;for(let L=0;L<Ir;++L){const k=L/y,R=Math.exp(-k*k/2);f.push(R),L===0?x+=R:L<v&&(x+=2*R)}for(let L=0;L<f.length;L++)f[L]=f[L]/x;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=f,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=w,p.mipInt.value=S-i;const T=this._sizeLods[r],P=3*T*(r>S-Ho?r-S+Ho:0),D=4*(this._cubeSize-T);cl(n,P,D,3*T,2*T),u.setRenderTarget(n),u.render(m,Pc)}}function Zw(t){const e=[],n=[],i=[];let r=t;const o=t-Ho+1+_m.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let u=1/a;s>t-Ho?u=_m[s-t+Ho-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),h=-c,m=1+c,p=[h,h,m,h,m,m,h,h,m,m,h,m],_=6,w=6,y=3,v=2,f=1,x=new Float32Array(y*w*_),S=new Float32Array(v*w*_),T=new Float32Array(f*w*_);for(let D=0;D<_;D++){const L=D%3*2/3-1,k=D>2?0:-1,R=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];x.set(R,y*w*D),S.set(p,v*w*D);const M=[D,D,D,D,D,D];T.set(M,f*w*D)}const P=new Wi;P.setAttribute("position",new kn(x,y)),P.setAttribute("uv",new kn(S,v)),P.setAttribute("faceIndex",new kn(T,f)),e.push(P),r>Ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mm(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(Ir),r=new K(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Em(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function wm(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Uf||u===Nf,h=u===is||u===rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let m=e.get(a);return n===null&&(n=new Sm(t)),m=c?n.fromEquirectangular(a,m):n.fromCubemap(a,m),e.set(a,m),m.texture}else{if(e.has(a))return e.get(a).texture;{const m=a.image;if(c&&m&&m.height>0||h&&m&&r(m)){n===null&&(n=new Sm(t));const p=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",o),p.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function e1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t1(t,e,n,i){const r={},o=new WeakMap;function s(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const w in p.attributes)e.remove(p.attributes[w]);for(const w in p.morphAttributes){const y=p.morphAttributes[w];for(let v=0,f=y.length;v<f;v++)e.remove(y[v])}p.removeEventListener("dispose",s),delete r[p.id];const _=o.get(p);_&&(e.remove(_),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(m,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function u(m){const p=m.attributes;for(const w in p)e.update(p[w],t.ARRAY_BUFFER);const _=m.morphAttributes;for(const w in _){const y=_[w];for(let v=0,f=y.length;v<f;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(m){const p=[],_=m.index,w=m.attributes.position;let y=0;if(_!==null){const x=_.array;y=_.version;for(let S=0,T=x.length;S<T;S+=3){const P=x[S+0],D=x[S+1],L=x[S+2];p.push(P,D,D,L,L,P)}}else if(w!==void 0){const x=w.array;y=w.version;for(let S=0,T=x.length/3-1;S<T;S+=3){const P=S+0,D=S+1,L=S+2;p.push(P,D,D,L,L,P)}}else return;const v=new(h0(p)?M0:S0)(p,1);v.version=y;const f=o.get(m);f&&e.remove(f),o.set(m,v)}function h(m){const p=o.get(m);if(p){const _=m.index;_!==null&&p.version<_.version&&c(m)}else c(m);return o.get(m)}return{get:a,update:u,getWireframeAttribute:h}}function n1(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,u;function c(p){a=p.type,u=p.bytesPerElement}function h(p,_){t.drawElements(o,_,a,p*u),n.update(_,o,1)}function m(p,_,w){if(w===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](o,_,a,p*u,w),n.update(_,o,w)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=m}function i1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function r1(t,e){return t[0]-e[0]}function o1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function s1(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,h,m){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const w=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=w!==void 0?w.length:0;let v=o.get(h);if(v===void 0||v.count!==y){let ne=function(){Z.dispose(),o.delete(h),h.removeEventListener("dispose",ne)};var _=ne;v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let R=0;S===!0&&(R=1),T===!0&&(R=2),P===!0&&(R=3);let M=h.attributes.position.count*R,F=1;M>e.maxTextureSize&&(F=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const W=new Float32Array(M*F*4*y),Z=new g0(W,M,F,y);Z.type=sr,Z.needsUpdate=!0;const O=R*4;for(let G=0;G<y;G++){const j=D[G],V=L[G],Y=k[G],$=M*F*4*G;for(let B=0;B<j.count;B++){const q=B*O;S===!0&&(s.fromBufferAttribute(j,B),W[$+q+0]=s.x,W[$+q+1]=s.y,W[$+q+2]=s.z,W[$+q+3]=0),T===!0&&(s.fromBufferAttribute(V,B),W[$+q+4]=s.x,W[$+q+5]=s.y,W[$+q+6]=s.z,W[$+q+7]=0),P===!0&&(s.fromBufferAttribute(Y,B),W[$+q+8]=s.x,W[$+q+9]=s.y,W[$+q+10]=s.z,W[$+q+11]=Y.itemSize===4?s.w:1)}}v={count:y,texture:Z,size:new pt(M,F)},o.set(h,v),h.addEventListener("dispose",ne)}let f=0;for(let S=0;S<p.length;S++)f+=p[S];const x=h.morphTargetsRelative?1:1-f;m.getUniforms().setValue(t,"morphTargetBaseInfluence",x),m.getUniforms().setValue(t,"morphTargetInfluences",p),m.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const w=p===void 0?0:p.length;let y=i[h.id];if(y===void 0||y.length!==w){y=[];for(let T=0;T<w;T++)y[T]=[T,0];i[h.id]=y}for(let T=0;T<w;T++){const P=y[T];P[0]=T,P[1]=p[T]}y.sort(o1);for(let T=0;T<8;T++)T<w&&y[T][1]?(a[T][0]=y[T][0],a[T][1]=y[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(r1);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let T=0;T<8;T++){const P=a[T],D=P[0],L=P[1];D!==Number.MAX_SAFE_INTEGER&&L?(v&&h.getAttribute("morphTarget"+T)!==v[D]&&h.setAttribute("morphTarget"+T,v[D]),f&&h.getAttribute("morphNormal"+T)!==f[D]&&h.setAttribute("morphNormal"+T,f[D]),r[T]=L,x+=L):(v&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),f&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),r[T]=0)}const S=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(t,"morphTargetBaseInfluence",S),m.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:u}}function a1(t,e,n,i){let r=new WeakMap;function o(u){const c=i.render.frame,h=u.geometry,m=e.get(u,h);if(r.get(m)!==c&&(e.update(m),r.set(m,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return m}function s(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const C0=new zn,P0=new g0,b0=new YS,L0=new T0,Tm=[],Am=[],Rm=new Float32Array(16),Cm=new Float32Array(9),Pm=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Tm[r];if(o===void 0&&(o=new Float32Array(r),Tm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wu(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function l1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function d1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Pm.set(i),t.uniformMatrix2fv(this.addr,!1,Pm),Yt(n,i)}}function h1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),Yt(n,i)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Rm.set(i),t.uniformMatrix4fv(this.addr,!1,Rm),Yt(n,i)}}function m1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||C0,r)}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||b0,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||L0,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P0,r)}function R1(t){switch(t){case 5126:return l1;case 35664:return u1;case 35665:return c1;case 35666:return f1;case 35674:return d1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return _1;case 5125:return y1;case 36294:return x1;case 36295:return S1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(t,e){t.uniform1fv(this.addr,e)}function P1(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function b1(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function L1(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function D1(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function U1(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function N1(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function I1(t,e){t.uniform1iv(this.addr,e)}function F1(t,e){t.uniform2iv(this.addr,e)}function O1(t,e){t.uniform3iv(this.addr,e)}function z1(t,e){t.uniform4iv(this.addr,e)}function k1(t,e){t.uniform1uiv(this.addr,e)}function B1(t,e){t.uniform2uiv(this.addr,e)}function H1(t,e){t.uniform3uiv(this.addr,e)}function G1(t,e){t.uniform4uiv(this.addr,e)}function V1(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||C0,o[s])}function W1(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||b0,o[s])}function j1(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||L0,o[s])}function X1(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||P0,o[s])}function Y1(t){switch(t){case 5126:return C1;case 35664:return P1;case 35665:return b1;case 35666:return L1;case 35674:return D1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return I1;case 35667:case 35671:return F1;case 35668:case 35672:return O1;case 35669:case 35673:return z1;case 5125:return k1;case 36294:return B1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return X1}}class q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=R1(n.type)}}class $1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Y1(n.type)}}class K1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function bm(t,e){t.seq.push(e),t.map[e.id]=e}function Z1(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const o=Uc.exec(i),s=Uc.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===r){bm(n,c===void 0?new q1(a,t,e):new $1(a,t,e));break}else{let m=n.map[a];m===void 0&&(m=new K1(a),bm(n,m)),n=m}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);Z1(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Q1=37297;let J1=0;function eT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function tT(t){const e=vt.getPrimaries(vt.workingColorSpace),n=vt.getPrimaries(t);let i;switch(e===n?i="":e===tu&&n===eu?i="LinearDisplayP3ToLinearSRGB":e===eu&&n===tu&&(i="LinearSRGBToLinearDisplayP3"),t){case Gi:case Su:return[i,"LinearTransferOETF"];case on:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+eT(t.getShaderSource(e),s)}else return r}function nT(t,e){const n=tT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function iT(t,e){let n;switch(e){case pS:n="Linear";break;case mS:n="Reinhard";break;case gS:n="OptimizedCineon";break;case vS:n="ACESFilmic";break;case _S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function rT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function oT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ns(t){return t!==""}function Um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(t){return t.replace(aT,uT)}const lT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function uT(t,e){let n=Je[e];if(n===void 0){const i=lT.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(cT,fT)}function fT(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Fm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function hT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function mT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case r0:e="ENVMAP_BLENDING_MULTIPLY";break;case dS:e="ENVMAP_BLENDING_MIX";break;case hS:e="ENVMAP_BLENDING_ADD";break}return e}function gT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const u=dT(n),c=hT(n),h=pT(n),m=mT(n),p=gT(n),_=n.isWebGL2?"":rT(n),w=oT(o),y=r.createProgram();let v,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ns).join(`
`),v.length>0&&(v+=`
`),f=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(v=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[_,Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?Je.tonemapping_pars_fragment:"",n.toneMapping!==vr?iT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,nT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),s=Bf(s),s=Um(s,n),s=Nm(s,n),a=Bf(a),a=Um(a,n),a=Nm(a,n),s=Im(s),a=Im(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+v+s,T=x+f+a,P=Lm(r,r.VERTEX_SHADER,S),D=Lm(r,r.FRAGMENT_SHADER,T);r.attachShader(y,P),r.attachShader(y,D),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(F){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),Z=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(D).trim();let ne=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,D);else{const j=Dm(r,P,"vertex"),V=Dm(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+j+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Z===""||O==="")&&(G=!1);G&&(F.diagnostics={runnable:ne,programLog:W,vertexShader:{log:Z,prefix:v},fragmentShader:{log:O,prefix:f}})}r.deleteShader(P),r.deleteShader(D),k=new Rl(r,y),R=sT(r,y)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,Q1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=D,this}let _T=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xT(e),n.set(e,i)),i}}class xT{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}}function ST(t,e,n,i,r,o,s){const a=new _0,u=new yT,c=[],h=r.isWebGL2,m=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(R){return R===0?"uv":`uv${R}`}function v(R,M,F,W,Z){const O=W.fog,ne=Z.geometry,G=R.isMeshStandardMaterial?W.environment:null,j=(R.isMeshStandardMaterial?n:e).get(R.envMap||G),V=j&&j.mapping===xu?j.image.height:null,Y=w[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const $=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,B=$!==void 0?$.length:0;let q=0;ne.morphAttributes.position!==void 0&&(q=1),ne.morphAttributes.normal!==void 0&&(q=2),ne.morphAttributes.color!==void 0&&(q=3);let pe,ge,Me,be;if(Y){const Et=yi[Y];pe=Et.vertexShader,ge=Et.fragmentShader}else pe=R.vertexShader,ge=R.fragmentShader,u.update(R),Me=u.getVertexShaderID(R),be=u.getFragmentShaderID(R);const $e=t.getRenderTarget(),Be=Z.isInstancedMesh===!0,Ye=!!R.map,yt=!!R.matcap,je=!!j,Q=!!R.aoMap,at=!!R.lightMap,Te=!!R.bumpMap,He=!!R.normalMap,Ge=!!R.displacementMap,Mt=!!R.emissiveMap,Ke=!!R.metalnessMap,Ze=!!R.roughnessMap,dt=R.anisotropy>0,Ot=R.clearcoat>0,kt=R.iridescence>0,N=R.sheen>0,A=R.transmission>0,ee=dt&&!!R.anisotropyMap,ue=Ot&&!!R.clearcoatMap,ae=Ot&&!!R.clearcoatNormalMap,he=Ot&&!!R.clearcoatRoughnessMap,Ce=kt&&!!R.iridescenceMap,me=kt&&!!R.iridescenceThicknessMap,we=N&&!!R.sheenColorMap,Ie=N&&!!R.sheenRoughnessMap,rt=!!R.specularMap,ce=!!R.specularColorMap,ft=!!R.specularIntensityMap,Xe=A&&!!R.transmissionMap,Fe=A&&!!R.thicknessMap,De=!!R.gradientMap,xe=!!R.alphaMap,Qe=R.alphaTest>0,H=!!R.alphaHash,Se=!!R.extensions,de=!!ne.attributes.uv1,oe=!!ne.attributes.uv2,fe=!!ne.attributes.uv3;let Ue=vr;return R.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(Ue=t.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:R.type,shaderName:R.name,vertexShader:pe,fragmentShader:ge,defines:R.defines,customVertexShaderID:Me,customFragmentShaderID:be,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,instancing:Be,instancingColor:Be&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:$e===null?t.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:Gi,map:Ye,matcap:yt,envMap:je,envMapMode:je&&j.mapping,envMapCubeUVHeight:V,aoMap:Q,lightMap:at,bumpMap:Te,normalMap:He,displacementMap:p&&Ge,emissiveMap:Mt,normalMapObjectSpace:He&&R.normalMapType===DS,normalMapTangentSpace:He&&R.normalMapType===LS,metalnessMap:Ke,roughnessMap:Ze,anisotropy:dt,anisotropyMap:ee,clearcoat:Ot,clearcoatMap:ue,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,iridescence:kt,iridescenceMap:Ce,iridescenceThicknessMap:me,sheen:N,sheenColorMap:we,sheenRoughnessMap:Ie,specularMap:rt,specularColorMap:ce,specularIntensityMap:ft,transmission:A,transmissionMap:Xe,thicknessMap:Fe,gradientMap:De,opaque:R.transparent===!1&&R.blending===Hr,alphaMap:xe,alphaTest:Qe,alphaHash:H,combine:R.combine,mapUv:Ye&&y(R.map.channel),aoMapUv:Q&&y(R.aoMap.channel),lightMapUv:at&&y(R.lightMap.channel),bumpMapUv:Te&&y(R.bumpMap.channel),normalMapUv:He&&y(R.normalMap.channel),displacementMapUv:Ge&&y(R.displacementMap.channel),emissiveMapUv:Mt&&y(R.emissiveMap.channel),metalnessMapUv:Ke&&y(R.metalnessMap.channel),roughnessMapUv:Ze&&y(R.roughnessMap.channel),anisotropyMapUv:ee&&y(R.anisotropyMap.channel),clearcoatMapUv:ue&&y(R.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(R.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(R.iridescenceThicknessMap.channel),sheenColorMapUv:we&&y(R.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(R.sheenRoughnessMap.channel),specularMapUv:rt&&y(R.specularMap.channel),specularColorMapUv:ce&&y(R.specularColorMap.channel),specularIntensityMapUv:ft&&y(R.specularIntensityMap.channel),transmissionMapUv:Xe&&y(R.transmissionMap.channel),thicknessMapUv:Fe&&y(R.thicknessMap.channel),alphaMapUv:xe&&y(R.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(He||dt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:oe,vertexUv3s:fe,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(Ye||xe),fog:!!O,useFog:R.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:Z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ye&&R.map.isVideoTexture===!0&&vt.getTransfer(R.map.colorSpace)===At,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ui,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Se&&R.extensions.derivatives===!0,extensionFragDepth:Se&&R.extensions.fragDepth===!0,extensionDrawBuffers:Se&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function f(R){const M=[];if(R.shaderID?M.push(R.shaderID):(M.push(R.customVertexShaderID),M.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)M.push(F),M.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(x(M,R),S(M,R),M.push(t.outputColorSpace)),M.push(R.customProgramCacheKey),M.join()}function x(R,M){R.push(M.precision),R.push(M.outputColorSpace),R.push(M.envMapMode),R.push(M.envMapCubeUVHeight),R.push(M.mapUv),R.push(M.alphaMapUv),R.push(M.lightMapUv),R.push(M.aoMapUv),R.push(M.bumpMapUv),R.push(M.normalMapUv),R.push(M.displacementMapUv),R.push(M.emissiveMapUv),R.push(M.metalnessMapUv),R.push(M.roughnessMapUv),R.push(M.anisotropyMapUv),R.push(M.clearcoatMapUv),R.push(M.clearcoatNormalMapUv),R.push(M.clearcoatRoughnessMapUv),R.push(M.iridescenceMapUv),R.push(M.iridescenceThicknessMapUv),R.push(M.sheenColorMapUv),R.push(M.sheenRoughnessMapUv),R.push(M.specularMapUv),R.push(M.specularColorMapUv),R.push(M.specularIntensityMapUv),R.push(M.transmissionMapUv),R.push(M.thicknessMapUv),R.push(M.combine),R.push(M.fogExp2),R.push(M.sizeAttenuation),R.push(M.morphTargetsCount),R.push(M.morphAttributeCount),R.push(M.numDirLights),R.push(M.numPointLights),R.push(M.numSpotLights),R.push(M.numSpotLightMaps),R.push(M.numHemiLights),R.push(M.numRectAreaLights),R.push(M.numDirLightShadows),R.push(M.numPointLightShadows),R.push(M.numSpotLightShadows),R.push(M.numSpotLightShadowsWithMaps),R.push(M.numLightProbes),R.push(M.shadowMapType),R.push(M.toneMapping),R.push(M.numClippingPlanes),R.push(M.numClipIntersection),R.push(M.depthPacking)}function S(R,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),R.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function T(R){const M=w[R.type];let F;if(M){const W=yi[M];F=sM.clone(W.uniforms)}else F=R.uniforms;return F}function P(R,M){let F;for(let W=0,Z=c.length;W<Z;W++){const O=c[W];if(O.cacheKey===M){F=O,++F.usedTimes;break}}return F===void 0&&(F=new vT(t,M,R,o),c.push(F)),F}function D(R){if(--R.usedTimes===0){const M=c.indexOf(R);c[M]=c[c.length-1],c.pop(),R.destroy()}}function L(R){u.remove(R)}function k(){u.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:T,acquireProgram:P,releaseProgram:D,releaseShaderCache:L,programs:c,dispose:k}}function MT(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ET(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(m,p,_,w,y,v){let f=t[e];return f===void 0?(f={id:m.id,object:m,geometry:p,material:_,groupOrder:w,renderOrder:m.renderOrder,z:y,group:v},t[e]=f):(f.id=m.id,f.object=m,f.geometry=p,f.material=_,f.groupOrder=w,f.renderOrder=m.renderOrder,f.z=y,f.group=v),e++,f}function a(m,p,_,w,y,v){const f=s(m,p,_,w,y,v);_.transmission>0?i.push(f):_.transparent===!0?r.push(f):n.push(f)}function u(m,p,_,w,y,v){const f=s(m,p,_,w,y,v);_.transmission>0?i.unshift(f):_.transparent===!0?r.unshift(f):n.unshift(f)}function c(m,p){n.length>1&&n.sort(m||ET),i.length>1&&i.sort(p||Om),r.length>1&&r.sort(p||Om)}function h(){for(let m=e,p=t.length;m<p;m++){const _=t[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:u,finish:h,sort:c}}function wT(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new zm,t.set(i,[s])):r>=o.length?(s=new zm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function TT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new ke};break;case"SpotLight":n={position:new K,direction:new K,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function AT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RT=0;function CT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PT(t,e){const n=new TT,i=AT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new K);const o=new K,s=new Vt,a=new Vt;function u(h,m){let p=0,_=0,w=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,v=0,f=0,x=0,S=0,T=0,P=0,D=0,L=0,k=0,R=0;h.sort(CT);const M=m===!0?Math.PI:1;for(let W=0,Z=h.length;W<Z;W++){const O=h[W],ne=O.color,G=O.intensity,j=O.distance,V=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=ne.r*G*M,_+=ne.g*G*M,w+=ne.b*G*M;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(O.sh.coefficients[Y],G);R++}else if(O.isDirectionalLight){const Y=n.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const $=O.shadow,B=i.get(O);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=V,r.directionalShadowMatrix[y]=O.shadow.matrix,T++}r.directional[y]=Y,y++}else if(O.isSpotLight){const Y=n.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(ne).multiplyScalar(G*M),Y.distance=j,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,r.spot[f]=Y;const $=O.shadow;if(O.map&&(r.spotLightMap[L]=O.map,L++,$.updateMatrices(O),O.castShadow&&k++),r.spotLightMatrix[f]=$.matrix,O.castShadow){const B=i.get(O);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,r.spotShadow[f]=B,r.spotShadowMap[f]=V,D++}f++}else if(O.isRectAreaLight){const Y=n.get(O);Y.color.copy(ne).multiplyScalar(G),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=Y,x++}else if(O.isPointLight){const Y=n.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*M),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const $=O.shadow,B=i.get(O);B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,r.pointShadow[v]=B,r.pointShadowMap[v]=V,r.pointShadowMatrix[v]=O.shadow.matrix,P++}r.point[v]=Y,v++}else if(O.isHemisphereLight){const Y=n.get(O);Y.skyColor.copy(O.color).multiplyScalar(G*M),Y.groundColor.copy(O.groundColor).multiplyScalar(G*M),r.hemi[S]=Y,S++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=w;const F=r.hash;(F.directionalLength!==y||F.pointLength!==v||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==S||F.numDirectionalShadows!==T||F.numPointShadows!==P||F.numSpotShadows!==D||F.numSpotMaps!==L||F.numLightProbes!==R)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=x,r.point.length=v,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+L-k,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=R,F.directionalLength=y,F.pointLength=v,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=S,F.numDirectionalShadows=T,F.numPointShadows=P,F.numSpotShadows=D,F.numSpotMaps=L,F.numLightProbes=R,r.version=RT++)}function c(h,m){let p=0,_=0,w=0,y=0,v=0;const f=m.matrixWorldInverse;for(let x=0,S=h.length;x<S;x++){const T=h[x];if(T.isDirectionalLight){const P=r.directional[p];P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(f),p++}else if(T.isSpotLight){const P=r.spot[w];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(f),w++}else if(T.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),a.identity(),s.copy(T.matrixWorld),s.premultiply(f),a.extractRotation(s),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),_++}else if(T.isHemisphereLight){const P=r.hemi[v];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(f),v++}}}return{setup:u,setupView:c,state:r}}function km(t,e){const n=new PT(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(m){i.push(m)}function a(m){r.push(m)}function u(m){n.setup(i,m)}function c(m){n.setupView(i,m)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:a}}function bT(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let u;return a===void 0?(u=new km(t,e),n.set(o,[u])):s>=a.length?(u=new km(t,e),a.push(u)):u=a[s],u}function r(){n=new WeakMap}return{get:i,dispose:r}}class LT extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DT extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IT(t,e,n){let i=new kd;const r=new pt,o=new pt,s=new Qt,a=new LT({depthPacking:bS}),u=new DT,c={},h=n.maxTextureSize,m={[Sr]:Dn,[Dn]:Sr,[Ui]:Ui},p=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:UT,fragmentShader:NT}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const w=new Wi;w.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ar(w,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let f=this.type;this.render=function(P,D,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const k=t.getRenderTarget(),R=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),F=t.state;F.setBlending(gr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=f!==bi&&this.type===bi,Z=f===bi&&this.type!==bi;for(let O=0,ne=P.length;O<ne;O++){const G=P[O],j=G.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const V=j.getFrameExtents();if(r.multiply(V),o.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/V.x),r.x=o.x*V.x,j.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/V.y),r.y=o.y*V.y,j.mapSize.y=o.y)),j.map===null||W===!0||Z===!0){const $=this.type!==bi?{minFilter:xn,magFilter:xn}:{};j.map!==null&&j.map.dispose(),j.map=new Zr(r.x,r.y,$),j.map.texture.name=G.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const Y=j.getViewportCount();for(let $=0;$<Y;$++){const B=j.getViewport($);s.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),F.viewport(s),j.updateMatrices(G,$),i=j.getFrustum(),T(D,L,j.camera,G,this.type)}j.isPointLightShadow!==!0&&this.type===bi&&x(j,L),j.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(k,R,M)};function x(P,D){const L=e.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zr(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,L,p,y,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,L,_,y,null)}function S(P,D,L,k){let R=null;const M=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)R=M;else if(R=L.isPointLight===!0?u:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const F=R.uuid,W=D.uuid;let Z=c[F];Z===void 0&&(Z={},c[F]=Z);let O=Z[W];O===void 0&&(O=R.clone(),Z[W]=O),R=O}if(R.visible=D.visible,R.wireframe=D.wireframe,k===bi?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:m[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=L}return R}function T(P,D,L,k,R){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===bi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const W=e.update(P),Z=P.material;if(Array.isArray(Z)){const O=W.groups;for(let ne=0,G=O.length;ne<G;ne++){const j=O[ne],V=Z[j.materialIndex];if(V&&V.visible){const Y=S(P,V,k,R);t.renderBufferDirect(L,null,W,Y,P,j)}}}else if(Z.visible){const O=S(P,Z,k,R);t.renderBufferDirect(L,null,W,O,P,null)}}const F=P.children;for(let W=0,Z=F.length;W<Z;W++)T(F[W],D,L,k,R)}}function FT(t,e,n){const i=n.isWebGL2;function r(){let H=!1;const Se=new Qt;let de=null;const oe=new Qt(0,0,0,0);return{setMask:function(fe){de!==fe&&!H&&(t.colorMask(fe,fe,fe,fe),de=fe)},setLocked:function(fe){H=fe},setClear:function(fe,Ue,st,Et,en){en===!0&&(fe*=Et,Ue*=Et,st*=Et),Se.set(fe,Ue,st,Et),oe.equals(Se)===!1&&(t.clearColor(fe,Ue,st,Et),oe.copy(Se))},reset:function(){H=!1,de=null,oe.set(-1,0,0,0)}}}function o(){let H=!1,Se=null,de=null,oe=null;return{setTest:function(fe){fe?Ye(t.DEPTH_TEST):yt(t.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!H&&(t.depthMask(fe),Se=fe)},setFunc:function(fe){if(de!==fe){switch(fe){case oS:t.depthFunc(t.NEVER);break;case sS:t.depthFunc(t.ALWAYS);break;case aS:t.depthFunc(t.LESS);break;case Ql:t.depthFunc(t.LEQUAL);break;case lS:t.depthFunc(t.EQUAL);break;case uS:t.depthFunc(t.GEQUAL);break;case cS:t.depthFunc(t.GREATER);break;case fS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=fe}},setLocked:function(fe){H=fe},setClear:function(fe){oe!==fe&&(t.clearDepth(fe),oe=fe)},reset:function(){H=!1,Se=null,de=null,oe=null}}}function s(){let H=!1,Se=null,de=null,oe=null,fe=null,Ue=null,st=null,Et=null,en=null;return{setTest:function(mt){H||(mt?Ye(t.STENCIL_TEST):yt(t.STENCIL_TEST))},setMask:function(mt){Se!==mt&&!H&&(t.stencilMask(mt),Se=mt)},setFunc:function(mt,It,Vn){(de!==mt||oe!==It||fe!==Vn)&&(t.stencilFunc(mt,It,Vn),de=mt,oe=It,fe=Vn)},setOp:function(mt,It,Vn){(Ue!==mt||st!==It||Et!==Vn)&&(t.stencilOp(mt,It,Vn),Ue=mt,st=It,Et=Vn)},setLocked:function(mt){H=mt},setClear:function(mt){en!==mt&&(t.clearStencil(mt),en=mt)},reset:function(){H=!1,Se=null,de=null,oe=null,fe=null,Ue=null,st=null,Et=null,en=null}}}const a=new r,u=new o,c=new s,h=new WeakMap,m=new WeakMap;let p={},_={},w=new WeakMap,y=[],v=null,f=!1,x=null,S=null,T=null,P=null,D=null,L=null,k=null,R=new ke(0,0,0),M=0,F=!1,W=null,Z=null,O=null,ne=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Y>=2);let B=null,q={};const pe=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Me=new Qt().fromArray(pe),be=new Qt().fromArray(ge);function $e(H,Se,de,oe){const fe=new Uint8Array(4),Ue=t.createTexture();t.bindTexture(H,Ue),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<de;st++)i&&(H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(Se+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Ue}const Be={};Be[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),Be[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Be[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ye(t.DEPTH_TEST),u.setFunc(Ql),Ke(!1),Ze(xp),Ye(t.CULL_FACE),Ge(gr);function Ye(H){p[H]!==!0&&(t.enable(H),p[H]=!0)}function yt(H){p[H]!==!1&&(t.disable(H),p[H]=!1)}function je(H,Se){return _[H]!==Se?(t.bindFramebuffer(H,Se),_[H]=Se,i&&(H===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=Se),H===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Q(H,Se){let de=y,oe=!1;if(H)if(de=w.get(Se),de===void 0&&(de=[],w.set(Se,de)),H.isWebGLMultipleRenderTargets){const fe=H.texture;if(de.length!==fe.length||de[0]!==t.COLOR_ATTACHMENT0){for(let Ue=0,st=fe.length;Ue<st;Ue++)de[Ue]=t.COLOR_ATTACHMENT0+Ue;de.length=fe.length,oe=!0}}else de[0]!==t.COLOR_ATTACHMENT0&&(de[0]=t.COLOR_ATTACHMENT0,oe=!0);else de[0]!==t.BACK&&(de[0]=t.BACK,oe=!0);oe&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function at(H){return v!==H?(t.useProgram(H),v=H,!0):!1}const Te={[Nr]:t.FUNC_ADD,[Wx]:t.FUNC_SUBTRACT,[jx]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[wp]=t.MIN,Te[Tp]=t.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Te[wp]=H.MIN_EXT,Te[Tp]=H.MAX_EXT)}const He={[Xx]:t.ZERO,[Yx]:t.ONE,[qx]:t.SRC_COLOR,[Lf]:t.SRC_ALPHA,[eS]:t.SRC_ALPHA_SATURATE,[Qx]:t.DST_COLOR,[Kx]:t.DST_ALPHA,[$x]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[Jx]:t.ONE_MINUS_DST_COLOR,[Zx]:t.ONE_MINUS_DST_ALPHA,[tS]:t.CONSTANT_COLOR,[nS]:t.ONE_MINUS_CONSTANT_COLOR,[iS]:t.CONSTANT_ALPHA,[rS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,Se,de,oe,fe,Ue,st,Et,en,mt){if(H===gr){f===!0&&(yt(t.BLEND),f=!1);return}if(f===!1&&(Ye(t.BLEND),f=!0),H!==Vx){if(H!==x||mt!==F){if((S!==Nr||D!==Nr)&&(t.blendEquation(t.FUNC_ADD),S=Nr,D=Nr),mt)switch(H){case Hr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Hr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,P=null,L=null,k=null,R.set(0,0,0),M=0,x=H,F=mt}return}fe=fe||Se,Ue=Ue||de,st=st||oe,(Se!==S||fe!==D)&&(t.blendEquationSeparate(Te[Se],Te[fe]),S=Se,D=fe),(de!==T||oe!==P||Ue!==L||st!==k)&&(t.blendFuncSeparate(He[de],He[oe],He[Ue],He[st]),T=de,P=oe,L=Ue,k=st),(Et.equals(R)===!1||en!==M)&&(t.blendColor(Et.r,Et.g,Et.b,en),R.copy(Et),M=en),x=H,F=!1}function Mt(H,Se){H.side===Ui?yt(t.CULL_FACE):Ye(t.CULL_FACE);let de=H.side===Dn;Se&&(de=!de),Ke(de),H.blending===Hr&&H.transparent===!1?Ge(gr):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const oe=H.stencilWrite;c.setTest(oe),oe&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ye(t.SAMPLE_ALPHA_TO_COVERAGE):yt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(H){W!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),W=H)}function Ze(H){H!==Bx?(Ye(t.CULL_FACE),H!==Z&&(H===xp?t.cullFace(t.BACK):H===Hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):yt(t.CULL_FACE),Z=H}function dt(H){H!==O&&(V&&t.lineWidth(H),O=H)}function Ot(H,Se,de){H?(Ye(t.POLYGON_OFFSET_FILL),(ne!==Se||G!==de)&&(t.polygonOffset(Se,de),ne=Se,G=de)):yt(t.POLYGON_OFFSET_FILL)}function kt(H){H?Ye(t.SCISSOR_TEST):yt(t.SCISSOR_TEST)}function N(H){H===void 0&&(H=t.TEXTURE0+j-1),B!==H&&(t.activeTexture(H),B=H)}function A(H,Se,de){de===void 0&&(B===null?de=t.TEXTURE0+j-1:de=B);let oe=q[de];oe===void 0&&(oe={type:void 0,texture:void 0},q[de]=oe),(oe.type!==H||oe.texture!==Se)&&(B!==de&&(t.activeTexture(de),B=de),t.bindTexture(H,Se||Be[H]),oe.type=H,oe.texture=Se)}function ee(){const H=q[B];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){Me.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function Fe(H){be.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function De(H,Se){let de=m.get(Se);de===void 0&&(de=new WeakMap,m.set(Se,de));let oe=de.get(H);oe===void 0&&(oe=t.getUniformBlockIndex(Se,H.name),de.set(H,oe))}function xe(H,Se){const oe=m.get(Se).get(H);h.get(Se)!==oe&&(t.uniformBlockBinding(Se,oe,H.__bindingPointIndex),h.set(Se,oe))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},B=null,q={},_={},w=new WeakMap,y=[],v=null,f=!1,x=null,S=null,T=null,P=null,D=null,L=null,k=null,R=new ke(0,0,0),M=0,F=!1,W=null,Z=null,O=null,ne=null,G=null,Me.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Ye,disable:yt,bindFramebuffer:je,drawBuffers:Q,useProgram:at,setBlending:Ge,setMaterial:Mt,setFlipSided:Ke,setCullFace:Ze,setLineWidth:dt,setPolygonOffset:Ot,setScissorTest:kt,activeTexture:N,bindTexture:A,unbindTexture:ee,compressedTexImage2D:ue,compressedTexImage3D:ae,texImage2D:ce,texImage3D:ft,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:Ie,texStorage3D:rt,texSubImage2D:he,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:we,scissor:Xe,viewport:Fe,reset:Qe}}function OT(t,e,n,i,r,o,s){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,m=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let y;const v=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,A){return f?new OffscreenCanvas(N,A):iu("canvas")}function S(N,A,ee,ue){let ae=1;if((N.width>ue||N.height>ue)&&(ae=ue/Math.max(N.width,N.height)),ae<1||A===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const he=A?kf:Math.floor,Ce=he(ae*N.width),me=he(ae*N.height);y===void 0&&(y=x(Ce,me));const we=ee?x(Ce,me):y;return we.width=Ce,we.height=me,we.getContext("2d").drawImage(N,0,0,Ce,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ce+"x"+me+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function T(N){return tm(N.width)&&tm(N.height)}function P(N){return a?!1:N.wrapS!==fi||N.wrapT!==fi||N.minFilter!==xn&&N.minFilter!==$n}function D(N,A){return N.generateMipmaps&&A&&N.minFilter!==xn&&N.minFilter!==$n}function L(N){t.generateMipmap(N)}function k(N,A,ee,ue,ae=!1){if(a===!1)return A;if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=A;if(A===t.RED&&(ee===t.FLOAT&&(he=t.R32F),ee===t.HALF_FLOAT&&(he=t.R16F),ee===t.UNSIGNED_BYTE&&(he=t.R8)),A===t.RED_INTEGER&&(ee===t.UNSIGNED_BYTE&&(he=t.R8UI),ee===t.UNSIGNED_SHORT&&(he=t.R16UI),ee===t.UNSIGNED_INT&&(he=t.R32UI),ee===t.BYTE&&(he=t.R8I),ee===t.SHORT&&(he=t.R16I),ee===t.INT&&(he=t.R32I)),A===t.RG&&(ee===t.FLOAT&&(he=t.RG32F),ee===t.HALF_FLOAT&&(he=t.RG16F),ee===t.UNSIGNED_BYTE&&(he=t.RG8)),A===t.RGBA){const Ce=ae?Jl:vt.getTransfer(ue);ee===t.FLOAT&&(he=t.RGBA32F),ee===t.HALF_FLOAT&&(he=t.RGBA16F),ee===t.UNSIGNED_BYTE&&(he=Ce===At?t.SRGB8_ALPHA8:t.RGBA8),ee===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),ee===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)}return(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(N,A,ee){return D(N,ee)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function M(N){return N===xn||N===Ap||N===rc?t.NEAREST:t.LINEAR}function F(N){const A=N.target;A.removeEventListener("dispose",F),Z(A),A.isVideoTexture&&w.delete(A)}function W(N){const A=N.target;A.removeEventListener("dispose",W),ne(A)}function Z(N){const A=i.get(N);if(A.__webglInit===void 0)return;const ee=N.source,ue=v.get(ee);if(ue){const ae=ue[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&O(N),Object.keys(ue).length===0&&v.delete(ee)}i.remove(N)}function O(N){const A=i.get(N);t.deleteTexture(A.__webglTexture);const ee=N.source,ue=v.get(ee);delete ue[A.__cacheKey],s.memory.textures--}function ne(N){const A=N.texture,ee=i.get(N),ue=i.get(A);if(ue.__webglTexture!==void 0&&(t.deleteTexture(ue.__webglTexture),s.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(ee.__webglFramebuffer[ae]))for(let he=0;he<ee.__webglFramebuffer[ae].length;he++)t.deleteFramebuffer(ee.__webglFramebuffer[ae][he]);else t.deleteFramebuffer(ee.__webglFramebuffer[ae]);ee.__webglDepthbuffer&&t.deleteRenderbuffer(ee.__webglDepthbuffer[ae])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ae=0;ae<ee.__webglFramebuffer.length;ae++)t.deleteFramebuffer(ee.__webglFramebuffer[ae]);else t.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&t.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ae=0;ae<ee.__webglColorRenderbuffer.length;ae++)ee.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(ee.__webglColorRenderbuffer[ae]);ee.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ae=0,he=A.length;ae<he;ae++){const Ce=i.get(A[ae]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),s.memory.textures--),i.remove(A[ae])}i.remove(A),i.remove(N)}let G=0;function j(){G=0}function V(){const N=G;return N>=u&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u),G+=1,N}function Y(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function $(N,A){const ee=i.get(N);if(N.isVideoTexture&&Ot(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(ee,N,A);return}}n.bindTexture(t.TEXTURE_2D,ee.__webglTexture,t.TEXTURE0+A)}function B(N,A){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){Ye(ee,N,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ee.__webglTexture,t.TEXTURE0+A)}function q(N,A){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){Ye(ee,N,A);return}n.bindTexture(t.TEXTURE_3D,ee.__webglTexture,t.TEXTURE0+A)}function pe(N,A){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){yt(ee,N,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture,t.TEXTURE0+A)}const ge={[If]:t.REPEAT,[fi]:t.CLAMP_TO_EDGE,[Ff]:t.MIRRORED_REPEAT},Me={[xn]:t.NEAREST,[Ap]:t.NEAREST_MIPMAP_NEAREST,[rc]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[yS]:t.LINEAR_MIPMAP_NEAREST,[la]:t.LINEAR_MIPMAP_LINEAR},be={[US]:t.NEVER,[BS]:t.ALWAYS,[NS]:t.LESS,[FS]:t.LEQUAL,[IS]:t.EQUAL,[kS]:t.GEQUAL,[OS]:t.GREATER,[zS]:t.NOTEQUAL};function $e(N,A,ee){if(ee?(t.texParameteri(N,t.TEXTURE_WRAP_S,ge[A.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,ge[A.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,ge[A.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Me[A.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Me[A.minFilter])):(t.texParameteri(N,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(N,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==fi||A.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(N,t.TEXTURE_MAG_FILTER,M(A.magFilter)),t.texParameteri(N,t.TEXTURE_MIN_FILTER,M(A.minFilter)),A.minFilter!==xn&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===xn||A.minFilter!==rc&&A.minFilter!==la||A.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ua&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(N,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Be(N,A){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",F));const ue=A.source;let ae=v.get(ue);ae===void 0&&(ae={},v.set(ue,ae));const he=Y(A);if(he!==N.__cacheKey){ae[he]===void 0&&(ae[he]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,ee=!0),ae[he].usedTimes++;const Ce=ae[N.__cacheKey];Ce!==void 0&&(ae[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(A)),N.__cacheKey=he,N.__webglTexture=ae[he].texture}return ee}function Ye(N,A,ee){let ue=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=t.TEXTURE_3D);const ae=Be(N,A),he=A.source;n.bindTexture(ue,N.__webglTexture,t.TEXTURE0+ee);const Ce=i.get(he);if(he.version!==Ce.__version||ae===!0){n.activeTexture(t.TEXTURE0+ee);const me=vt.getPrimaries(vt.workingColorSpace),we=A.colorSpace===Zn?null:vt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Zn||me===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const rt=P(A)&&T(A.image)===!1;let ce=S(A.image,rt,!1,h);ce=kt(A,ce);const ft=T(ce)||a,Xe=o.convert(A.format,A.colorSpace);let Fe=o.convert(A.type),De=k(A.internalFormat,Xe,Fe,A.colorSpace,A.isVideoTexture);$e(ue,A,ft);let xe;const Qe=A.mipmaps,H=a&&A.isVideoTexture!==!0,Se=Ce.__version===void 0||ae===!0,de=R(A,ce,ft);if(A.isDepthTexture)De=t.DEPTH_COMPONENT,a?A.type===sr?De=t.DEPTH_COMPONENT32F:A.type===or?De=t.DEPTH_COMPONENT24:A.type===Gr?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:A.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Vr&&De===t.DEPTH_COMPONENT&&A.type!==Od&&A.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=or,Fe=o.convert(A.type)),A.format===os&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,A.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Gr,Fe=o.convert(A.type))),Se&&(H?n.texStorage2D(t.TEXTURE_2D,1,De,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,Xe,Fe,null));else if(A.isDataTexture)if(Qe.length>0&&ft){H&&Se&&n.texStorage2D(t.TEXTURE_2D,de,De,Qe[0].width,Qe[0].height);for(let oe=0,fe=Qe.length;oe<fe;oe++)xe=Qe[oe],H?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,xe.width,xe.height,Xe,Fe,xe.data):n.texImage2D(t.TEXTURE_2D,oe,De,xe.width,xe.height,0,Xe,Fe,xe.data);A.generateMipmaps=!1}else H?(Se&&n.texStorage2D(t.TEXTURE_2D,de,De,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Xe,Fe,ce.data)):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,Xe,Fe,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){H&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,De,Qe[0].width,Qe[0].height,ce.depth);for(let oe=0,fe=Qe.length;oe<fe;oe++)xe=Qe[oe],A.format!==di?Xe!==null?H?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ce.depth,Xe,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,De,xe.width,xe.height,ce.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ce.depth,Xe,Fe,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,De,xe.width,xe.height,ce.depth,0,Xe,Fe,xe.data)}else{H&&Se&&n.texStorage2D(t.TEXTURE_2D,de,De,Qe[0].width,Qe[0].height);for(let oe=0,fe=Qe.length;oe<fe;oe++)xe=Qe[oe],A.format!==di?Xe!==null?H?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,xe.width,xe.height,Xe,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,xe.width,xe.height,Xe,Fe,xe.data):n.texImage2D(t.TEXTURE_2D,oe,De,xe.width,xe.height,0,Xe,Fe,xe.data)}else if(A.isDataArrayTexture)H?(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,De,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Xe,Fe,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,Xe,Fe,ce.data);else if(A.isData3DTexture)H?(Se&&n.texStorage3D(t.TEXTURE_3D,de,De,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Xe,Fe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,Xe,Fe,ce.data);else if(A.isFramebufferTexture){if(Se)if(H)n.texStorage2D(t.TEXTURE_2D,de,De,ce.width,ce.height);else{let oe=ce.width,fe=ce.height;for(let Ue=0;Ue<de;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,De,oe,fe,0,Xe,Fe,null),oe>>=1,fe>>=1}}else if(Qe.length>0&&ft){H&&Se&&n.texStorage2D(t.TEXTURE_2D,de,De,Qe[0].width,Qe[0].height);for(let oe=0,fe=Qe.length;oe<fe;oe++)xe=Qe[oe],H?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Xe,Fe,xe):n.texImage2D(t.TEXTURE_2D,oe,De,Xe,Fe,xe);A.generateMipmaps=!1}else H?(Se&&n.texStorage2D(t.TEXTURE_2D,de,De,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Fe,ce)):n.texImage2D(t.TEXTURE_2D,0,De,Xe,Fe,ce);D(A,ft)&&L(ue),Ce.__version=he.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function yt(N,A,ee){if(A.image.length!==6)return;const ue=Be(N,A),ae=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+ee);const he=i.get(ae);if(ae.version!==he.__version||ue===!0){n.activeTexture(t.TEXTURE0+ee);const Ce=vt.getPrimaries(vt.workingColorSpace),me=A.colorSpace===Zn?null:vt.getPrimaries(A.colorSpace),we=A.colorSpace===Zn||Ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let oe=0;oe<6;oe++)!Ie&&!rt?ce[oe]=S(A.image[oe],!1,!0,c):ce[oe]=rt?A.image[oe].image:A.image[oe],ce[oe]=kt(A,ce[oe]);const ft=ce[0],Xe=T(ft)||a,Fe=o.convert(A.format,A.colorSpace),De=o.convert(A.type),xe=k(A.internalFormat,Fe,De,A.colorSpace),Qe=a&&A.isVideoTexture!==!0,H=he.__version===void 0||ue===!0;let Se=R(A,ft,Xe);$e(t.TEXTURE_CUBE_MAP,A,Xe);let de;if(Ie){Qe&&H&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,xe,ft.width,ft.height);for(let oe=0;oe<6;oe++){de=ce[oe].mipmaps;for(let fe=0;fe<de.length;fe++){const Ue=de[fe];A.format!==di?Fe!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,0,0,Ue.width,Ue.height,Fe,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,xe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,0,0,Ue.width,Ue.height,Fe,De,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,xe,Ue.width,Ue.height,0,Fe,De,Ue.data)}}}else{de=A.mipmaps,Qe&&H&&(de.length>0&&Se++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,xe,ce[0].width,ce[0].height));for(let oe=0;oe<6;oe++)if(rt){Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ce[oe].width,ce[oe].height,Fe,De,ce[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,ce[oe].width,ce[oe].height,0,Fe,De,ce[oe].data);for(let fe=0;fe<de.length;fe++){const st=de[fe].image[oe].image;Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,0,0,st.width,st.height,Fe,De,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,xe,st.width,st.height,0,Fe,De,st.data)}}else{Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,De,ce[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,Fe,De,ce[oe]);for(let fe=0;fe<de.length;fe++){const Ue=de[fe];Qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,0,0,Fe,De,Ue.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,xe,Fe,De,Ue.image[oe])}}}D(A,Xe)&&L(t.TEXTURE_CUBE_MAP),he.__version=ae.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function je(N,A,ee,ue,ae,he){const Ce=o.convert(ee.format,ee.colorSpace),me=o.convert(ee.type),we=k(ee.internalFormat,Ce,me,ee.colorSpace);if(!i.get(A).__hasExternalTextures){const rt=Math.max(1,A.width>>he),ce=Math.max(1,A.height>>he);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,he,we,rt,ce,A.depth,0,Ce,me,null):n.texImage2D(ae,he,we,rt,ce,0,Ce,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),dt(A)?p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,ae,i.get(ee).__webglTexture,0,Ze(A)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,ae,i.get(ee).__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Q(N,A,ee){if(t.bindRenderbuffer(t.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let ue=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(ee||dt(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===sr?ue=t.DEPTH_COMPONENT32F:ae.type===or&&(ue=t.DEPTH_COMPONENT24));const he=Ze(A);dt(A)?p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ue,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ue,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,ue,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){const ue=Ze(A);ee&&dt(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,t.DEPTH24_STENCIL8,A.width,A.height):dt(A)?p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,N)}else{const ue=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0;ae<ue.length;ae++){const he=ue[ae],Ce=o.convert(he.format,he.colorSpace),me=o.convert(he.type),we=k(he.internalFormat,Ce,me,he.colorSpace),Ie=Ze(A);ee&&dt(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,we,A.width,A.height):dt(A)?p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,we,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,we,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function at(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const ue=i.get(A.depthTexture).__webglTexture,ae=Ze(A);if(A.depthTexture.format===Vr)dt(A)?p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0);else if(A.depthTexture.format===os)dt(A)?p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Te(N){const A=i.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");at(A.__webglFramebuffer,N)}else if(ee){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]=t.createRenderbuffer(),Q(A.__webglDepthbuffer[ue],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),Q(A.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(N,A,ee){const ue=i.get(N);A!==void 0&&je(ue.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ee!==void 0&&Te(N)}function Ge(N){const A=N.texture,ee=i.get(N),ue=i.get(A);N.addEventListener("dispose",W),N.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=A.version,s.memory.textures++);const ae=N.isWebGLCubeRenderTarget===!0,he=N.isWebGLMultipleRenderTargets===!0,Ce=T(N)||a;if(ae){ee.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[me]=[];for(let we=0;we<A.mipmaps.length;we++)ee.__webglFramebuffer[me][we]=t.createFramebuffer()}else ee.__webglFramebuffer[me]=t.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)ee.__webglFramebuffer[me]=t.createFramebuffer()}else ee.__webglFramebuffer=t.createFramebuffer();if(he)if(r.drawBuffers){const me=N.texture;for(let we=0,Ie=me.length;we<Ie;we++){const rt=i.get(me[we]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&dt(N)===!1){const me=he?A:[A];ee.__webglMultisampledFramebuffer=t.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const Ie=me[we];ee.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ee.__webglColorRenderbuffer[we]);const rt=o.convert(Ie.format,Ie.colorSpace),ce=o.convert(Ie.type),ft=k(Ie.internalFormat,rt,ce,Ie.colorSpace,N.isXRRenderTarget===!0),Xe=Ze(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ft,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ee.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=t.createRenderbuffer(),Q(ee.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),$e(t.TEXTURE_CUBE_MAP,A,Ce);for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)je(ee.__webglFramebuffer[me][we],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else je(ee.__webglFramebuffer[me],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);D(A,Ce)&&L(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const me=N.texture;for(let we=0,Ie=me.length;we<Ie;we++){const rt=me[we],ce=i.get(rt);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),$e(t.TEXTURE_2D,rt,Ce),je(ee.__webglFramebuffer,N,rt,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),D(rt,Ce)&&L(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?me=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,ue.__webglTexture),$e(me,A,Ce),a&&A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)je(ee.__webglFramebuffer[we],N,A,t.COLOR_ATTACHMENT0,me,we);else je(ee.__webglFramebuffer,N,A,t.COLOR_ATTACHMENT0,me,0);D(A,Ce)&&L(me),n.unbindTexture()}N.depthBuffer&&Te(N)}function Mt(N){const A=T(N)||a,ee=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ue=0,ae=ee.length;ue<ae;ue++){const he=ee[ue];if(D(he,A)){const Ce=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(he).__webglTexture;n.bindTexture(Ce,me),L(Ce),n.unbindTexture()}}}function Ke(N){if(a&&N.samples>0&&dt(N)===!1){const A=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ee=N.width,ue=N.height;let ae=t.COLOR_BUFFER_BIT;const he=[],Ce=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(N),we=N.isWebGLMultipleRenderTargets===!0;if(we)for(let Ie=0;Ie<A.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){he.push(t.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&he.push(Ce);const rt=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(rt===!1&&(N.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]),rt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ce])),we){const ce=i.get(A[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,ee,ue,0,0,ee,ue,ae,t.NEAREST),_&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let Ie=0;Ie<A.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);const rt=i.get(A[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Ze(N){return Math.min(m,N.samples)}function dt(N){const A=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ot(N){const A=s.render.frame;w.get(N)!==A&&(w.set(N,A),N.update())}function kt(N,A){const ee=N.colorSpace,ue=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Of||ee!==Gi&&ee!==Zn&&(vt.getTransfer(ee)===At?a===!1?e.has("EXT_sRGB")===!0&&ue===di?(N.format=Of,N.minFilter=$n,N.generateMipmaps=!1):A=p0.sRGBToLinear(A):(ue!==di||ae!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=pe,this.rebindTextures=He,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=je,this.useMultisampledRTT=dt}function zT(t,e,n){const i=n.isWebGL2;function r(o,s=Zn){let a;const u=vt.getTransfer(s);if(o===_r)return t.UNSIGNED_BYTE;if(o===a0)return t.UNSIGNED_SHORT_4_4_4_4;if(o===l0)return t.UNSIGNED_SHORT_5_5_5_1;if(o===xS)return t.BYTE;if(o===SS)return t.SHORT;if(o===Od)return t.UNSIGNED_SHORT;if(o===s0)return t.INT;if(o===or)return t.UNSIGNED_INT;if(o===sr)return t.FLOAT;if(o===ua)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===MS)return t.ALPHA;if(o===di)return t.RGBA;if(o===ES)return t.LUMINANCE;if(o===wS)return t.LUMINANCE_ALPHA;if(o===Vr)return t.DEPTH_COMPONENT;if(o===os)return t.DEPTH_STENCIL;if(o===Of)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===TS)return t.RED;if(o===u0)return t.RED_INTEGER;if(o===AS)return t.RG;if(o===c0)return t.RG_INTEGER;if(o===f0)return t.RGBA_INTEGER;if(o===oc||o===sc||o===ac||o===lc)if(u===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Rp||o===Cp||o===Pp||o===bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Rp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Pp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===RS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Lp||o===Dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Lp)return u===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Dp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Up||o===Np||o===Ip||o===Fp||o===Op||o===zp||o===kp||o===Bp||o===Hp||o===Gp||o===Vp||o===Wp||o===jp||o===Xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Up)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Np)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Ip)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Fp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Op)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===zp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===kp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Bp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Hp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Gp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Vp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Wp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===jp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Xp)return u===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===uc||o===Yp||o===qp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===uc)return u===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===qp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===CS||o===$p||o===Kp||o===Zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===$p)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class kT extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fl extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),f=this._getHandJoint(c,y);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=h.position.distanceTo(m.position),_=.02,w=.005;c.inputState.pinching&&p>_+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=_-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class HT extends zn{constructor(e,n,i,r,o,s,a,u,c,h){if(h=h!==void 0?h:Vr,h!==Vr&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vr&&(i=or),i===void 0&&h===os&&(i=Gr),super(null,r,o,s,a,u,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=u!==void 0?u:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GT extends cs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",u=1,c=null,h=null,m=null,p=null,_=null,w=null;const y=n.getContextAttributes();let v=null,f=null;const x=[],S=[],T=new Kn;T.layers.enable(1),T.viewport=new Qt;const P=new Kn;P.layers.enable(2),P.viewport=new Qt;const D=[T,P],L=new kT;L.layers.enable(1),L.layers.enable(2);let k=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=x[B];return q===void 0&&(q=new Nc,x[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=x[B];return q===void 0&&(q=new Nc,x[B]=q),q.getGripSpace()},this.getHand=function(B){let q=x[B];return q===void 0&&(q=new Nc,x[B]=q),q.getHandSpace()};function M(B){const q=S.indexOf(B.inputSource);if(q===-1)return;const pe=x[q];pe!==void 0&&(pe.update(B.inputSource,B.frame,c||s),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let B=0;B<x.length;B++){const q=S[B];q!==null&&(S[B]=null,x[B].disconnect(q))}k=null,R=null,e.setRenderTarget(v),_=null,p=null,m=null,r=null,f=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:_}),f=new Zr(_.framebufferWidth,_.framebufferHeight,{format:di,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let q=null,pe=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=y.stencil?os:Vr,pe=y.stencil?Gr:or);const Me={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:o};m=new XRWebGLBinding(r,n),p=m.createProjectionLayer(Me),r.updateRenderState({layers:[p]}),f=new Zr(p.textureWidth,p.textureHeight,{format:di,type:_r,depthTexture:new HT(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const be=e.properties.get(f);be.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(B){for(let q=0;q<B.removed.length;q++){const pe=B.removed[q],ge=S.indexOf(pe);ge>=0&&(S[ge]=null,x[ge].disconnect(pe))}for(let q=0;q<B.added.length;q++){const pe=B.added[q];let ge=S.indexOf(pe);if(ge===-1){for(let be=0;be<x.length;be++)if(be>=S.length){S.push(pe),ge=be;break}else if(S[be]===null){S[be]=pe,ge=be;break}if(ge===-1)break}const Me=x[ge];Me&&Me.connect(pe)}}const Z=new K,O=new K;function ne(B,q,pe){Z.setFromMatrixPosition(q.matrixWorld),O.setFromMatrixPosition(pe.matrixWorld);const ge=Z.distanceTo(O),Me=q.projectionMatrix.elements,be=pe.projectionMatrix.elements,$e=Me[14]/(Me[10]-1),Be=Me[14]/(Me[10]+1),Ye=(Me[9]+1)/Me[5],yt=(Me[9]-1)/Me[5],je=(Me[8]-1)/Me[0],Q=(be[8]+1)/be[0],at=$e*je,Te=$e*Q,He=ge/(-je+Q),Ge=He*-je;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ge),B.translateZ(He),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Mt=$e+He,Ke=Be+He,Ze=at-Ge,dt=Te+(ge-Ge),Ot=Ye*Be/Ke*Mt,kt=yt*Be/Ke*Mt;B.projectionMatrix.makePerspective(Ze,dt,Ot,kt,Mt,Ke),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function G(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;L.near=P.near=T.near=B.near,L.far=P.far=T.far=B.far,(k!==L.near||R!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,R=L.far);const q=B.parent,pe=L.cameras;G(L,q);for(let ge=0;ge<pe.length;ge++)G(pe[ge],q);pe.length===2?ne(L,T,P):L.projectionMatrix.copy(T.projectionMatrix),j(B,L,q)};function j(B,q,pe){pe===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=zf*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&_===null))return u},this.setFoveation=function(B){u=B,p!==null&&(p.fixedFoveation=B),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=B)};let V=null;function Y(B,q){if(h=q.getViewerPose(c||s),w=q,h!==null){const pe=h.views;_!==null&&(e.setRenderTargetFramebuffer(f,_.framebuffer),e.setRenderTarget(f));let ge=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,ge=!0);for(let Me=0;Me<pe.length;Me++){const be=pe[Me];let $e=null;if(_!==null)$e=_.getViewport(be);else{const Ye=m.getViewSubImage(p,be);$e=Ye.viewport,Me===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,p.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Be=D[Me];Be===void 0&&(Be=new Kn,Be.layers.enable(Me),Be.viewport=new Qt,D[Me]=Be),Be.matrix.fromArray(be.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(be.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set($e.x,$e.y,$e.width,$e.height),Me===0&&(L.matrix.copy(Be.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ge===!0&&L.cameras.push(Be)}}for(let pe=0;pe<x.length;pe++){const ge=S[pe],Me=x[pe];ge!==null&&Me!==void 0&&Me.update(ge,q,c||s)}V&&V(B,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),w=null}const $=new A0;$.setAnimationLoop(Y),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function VT(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,E0(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,x,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(v,f):f.isMeshToonMaterial?(o(v,f),m(v,f)):f.isMeshPhongMaterial?(o(v,f),h(v,f)):f.isMeshStandardMaterial?(o(v,f),p(v,f),f.isMeshPhysicalMaterial&&_(v,f,T)):f.isMeshMatcapMaterial?(o(v,f),w(v,f)):f.isMeshDepthMaterial?o(v,f):f.isMeshDistanceMaterial?(o(v,f),y(v,f)):f.isMeshNormalMaterial?o(v,f):f.isLineBasicMaterial?(s(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?u(v,f,x,S):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Dn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Dn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(v.envMap.value=x,v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const S=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*S,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function s(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function u(v,f,x,S){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*x,v.scale.value=S*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function m(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function p(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function _(v,f,x){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dn&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,f){f.matcap&&(v.matcap.value=f.matcap)}function y(v,f){const x=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WT(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,S){const T=S.program;i.uniformBlockBinding(x,T)}function c(x,S){let T=r[x.id];T===void 0&&(w(x),T=h(x),r[x.id]=T,x.addEventListener("dispose",v));const P=S.program;i.updateUBOMapping(x,P);const D=e.render.frame;o[x.id]!==D&&(p(x),o[x.id]=D)}function h(x){const S=m();x.__bindingPointIndex=S;const T=t.createBuffer(),P=x.__size,D=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,T),T}function m(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const S=r[x.id],T=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let D=0,L=T.length;D<L;D++){const k=T[D];if(_(k,D,P)===!0){const R=k.__offset,M=Array.isArray(k.value)?k.value:[k.value];let F=0;for(let W=0;W<M.length;W++){const Z=M[W],O=y(Z);typeof Z=="number"?(k.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,R+F,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=Z.elements[0],k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=Z.elements[0],k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=Z.elements[0]):(Z.toArray(k.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,k.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(x,S,T){const P=x.value;if(T[S]===void 0){if(typeof P=="number")T[S]=P;else{const D=Array.isArray(P)?P:[P],L=[];for(let k=0;k<D.length;k++)L.push(D[k].clone());T[S]=L}return!0}else if(typeof P=="number"){if(T[S]!==P)return T[S]=P,!0}else{const D=Array.isArray(T[S])?T[S]:[T[S]],L=Array.isArray(P)?P:[P];for(let k=0;k<D.length;k++){const R=D[k];if(R.equals(L[k])===!1)return R.copy(L[k]),!0}}return!1}function w(x){const S=x.uniforms;let T=0;const P=16;let D=0;for(let L=0,k=S.length;L<k;L++){const R=S[L],M={boundary:0,storage:0},F=Array.isArray(R.value)?R.value:[R.value];for(let W=0,Z=F.length;W<Z;W++){const O=F[W],ne=y(O);M.boundary+=ne.boundary,M.storage+=ne.storage}if(R.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,L>0){D=T%P;const W=P-D;D!==0&&W-M.boundary<0&&(T+=P-D,R.__offset=T)}T+=M.storage}return D=T%P,D>0&&(T+=P-D),x.__size=T,x.__cache={},this}function y(x){const S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function v(x){const S=x.target;S.removeEventListener("dispose",v);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:u,update:c,dispose:f}}class D0{constructor(e={}){const{canvas:n=GS(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=s;const _=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;const S=this;let T=!1,P=0,D=0,L=null,k=-1,R=null;const M=new Qt,F=new Qt;let W=null;const Z=new ke(0);let O=0,ne=n.width,G=n.height,j=1,V=null,Y=null;const $=new Qt(0,0,ne,G),B=new Qt(0,0,ne,G);let q=!1;const pe=new kd;let ge=!1,Me=!1,be=null;const $e=new Vt,Be=new pt,Ye=new K,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return L===null?j:1}let Q=i;function at(C,X){for(let te=0;te<C.length;te++){const ie=C[te],re=n.getContext(ie,X);if(re!==null)return re}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fd}`),n.addEventListener("webglcontextlost",Qe,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",Se,!1),Q===null){const X=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&X.shift(),Q=at(X,C),Q===null)throw at(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,He,Ge,Mt,Ke,Ze,dt,Ot,kt,N,A,ee,ue,ae,he,Ce,me,we,Ie,rt,ce,ft,Xe,Fe;function De(){Te=new e1(Q),He=new qw(Q,Te,e),Te.init(He),ft=new zT(Q,Te,He),Ge=new FT(Q,Te,He),Mt=new i1(Q),Ke=new MT,Ze=new OT(Q,Te,Ge,Ke,He,ft,Mt),dt=new Kw(S),Ot=new Jw(S),kt=new hM(Q,He),Xe=new Xw(Q,Te,kt,He),N=new t1(Q,kt,Mt,Xe),A=new a1(Q,N,kt,Mt),Ie=new s1(Q,He,Ze),Ce=new $w(Ke),ee=new ST(S,dt,Ot,Te,He,Xe,Ce),ue=new VT(S,Ke),ae=new wT,he=new bT(Te,He),we=new jw(S,dt,Ot,Ge,A,p,u),me=new IT(S,A,He),Fe=new WT(Q,Mt,He,Ge),rt=new Yw(Q,Te,Mt,He),ce=new n1(Q,Te,Mt,He),Mt.programs=ee.programs,S.capabilities=He,S.extensions=Te,S.properties=Ke,S.renderLists=ae,S.shadowMap=me,S.state=Ge,S.info=Mt}De();const xe=new GT(S,Q);this.xr=xe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(ne,G,!1))},this.getSize=function(C){return C.set(ne,G)},this.setSize=function(C,X,te=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,G=X,n.width=Math.floor(C*j),n.height=Math.floor(X*j),te===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ne*j,G*j).floor()},this.setDrawingBufferSize=function(C,X,te){ne=C,G=X,j=te,n.width=Math.floor(C*te),n.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,X,te,ie){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,te,ie),Ge.viewport(M.copy($).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(B)},this.setScissor=function(C,X,te,ie){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,X,te,ie),Ge.scissor(F.copy(B).multiplyScalar(j).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(C){Ge.setScissorTest(q=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(C=!0,X=!0,te=!0){let ie=0;if(C){let re=!1;if(L!==null){const _e=L.texture.format;re=_e===f0||_e===c0||_e===u0}if(re){const _e=L.texture.type,Ae=_e===_r||_e===or||_e===Od||_e===Gr||_e===a0||_e===l0,Le=we.getClearColor(),Ne=we.getClearAlpha(),qe=Le.r,We=Le.g,Ve=Le.b;Ae?(_[0]=qe,_[1]=We,_[2]=Ve,_[3]=Ne,Q.clearBufferuiv(Q.COLOR,0,_)):(w[0]=qe,w[1]=We,w[2]=Ve,w[3]=Ne,Q.clearBufferiv(Q.COLOR,0,w))}else ie|=Q.COLOR_BUFFER_BIT}X&&(ie|=Q.DEPTH_BUFFER_BIT),te&&(ie|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),ae.dispose(),he.dispose(),Ke.dispose(),dt.dispose(),Ot.dispose(),A.dispose(),Xe.dispose(),Fe.dispose(),ee.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",en),xe.removeEventListener("sessionend",mt),be&&(be.dispose(),be=null),It.stop()};function Qe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Mt.autoReset,X=me.enabled,te=me.autoUpdate,ie=me.needsUpdate,re=me.type;De(),Mt.autoReset=C,me.enabled=X,me.autoUpdate=te,me.needsUpdate=ie,me.type=re}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const X=C.target;X.removeEventListener("dispose",de),oe(X)}function oe(C){fe(C),Ke.remove(C)}function fe(C){const X=Ke.get(C).programs;X!==void 0&&(X.forEach(function(te){ee.releaseProgram(te)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,ie,re,_e){X===null&&(X=yt);const Ae=re.isMesh&&re.matrixWorld.determinant()<0,Le=no(C,X,te,ie,re);Ge.setMaterial(ie,Ae);let Ne=te.index,qe=1;if(ie.wireframe===!0){if(Ne=N.getWireframeAttribute(te),Ne===void 0)return;qe=2}const We=te.drawRange,Ve=te.attributes.position;let ut=We.start*qe,un=(We.start+We.count)*qe;_e!==null&&(ut=Math.max(ut,_e.start*qe),un=Math.min(un,(_e.start+_e.count)*qe)),Ne!==null?(ut=Math.max(ut,0),un=Math.min(un,Ne.count)):Ve!=null&&(ut=Math.max(ut,0),un=Math.min(un,Ve.count));const Lt=un-ut;if(Lt<0||Lt===1/0)return;Xe.setup(re,ie,Le,te,Ne);let Bt,_t=rt;if(Ne!==null&&(Bt=kt.get(Ne),_t=ce,_t.setIndex(Bt)),re.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*je()),_t.setMode(Q.LINES)):_t.setMode(Q.TRIANGLES);else if(re.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),Ge.setLineWidth(tt*je()),re.isLineSegments?_t.setMode(Q.LINES):re.isLineLoop?_t.setMode(Q.LINE_LOOP):_t.setMode(Q.LINE_STRIP)}else re.isPoints?_t.setMode(Q.POINTS):re.isSprite&&_t.setMode(Q.TRIANGLES);if(re.isInstancedMesh)_t.renderInstances(ut,Lt,re.count);else if(te.isInstancedBufferGeometry){const tt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ro=Math.min(te.instanceCount,tt);_t.renderInstances(ut,Lt,ro)}else _t.render(ut,Lt)};function Ue(C,X,te){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,vn(C,X,te),C.side=Sr,C.needsUpdate=!0,vn(C,X,te),C.side=Ui):vn(C,X,te)}this.compile=function(C,X,te=null){te===null&&(te=C),v=he.get(te),v.init(),x.push(v),te.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),C!==te&&C.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),v.setupLights(S._useLegacyLights);const ie=new Set;return C.traverse(function(re){const _e=re.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Le=_e[Ae];Ue(Le,te,re),ie.add(Le)}else Ue(_e,te,re),ie.add(_e)}),x.pop(),v=null,ie},this.compileAsync=function(C,X,te=null){const ie=this.compile(C,X,te);return new Promise(re=>{function _e(){if(ie.forEach(function(Ae){Ke.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){re(C);return}setTimeout(_e,10)}Te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let st=null;function Et(C){st&&st(C)}function en(){It.stop()}function mt(){It.start()}const It=new A0;It.setAnimationLoop(Et),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(C){st=C,xe.setAnimationLoop(C),C===null?It.stop():It.start()},xe.addEventListener("sessionstart",en),xe.addEventListener("sessionend",mt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(X),X=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,X,L),v=he.get(C,x.length),v.init(),x.push(v),$e.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),pe.setFromProjectionMatrix($e),Me=this.localClippingEnabled,ge=Ce.init(this.clippingPlanes,Me),y=ae.get(C,f.length),y.init(),f.push(y),Vn(C,X,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(V,Y),this.info.render.frame++,ge===!0&&Ce.beginShadows();const te=v.state.shadowsArray;if(me.render(te,C,X),ge===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),we.render(y,C),v.setupLights(S._useLegacyLights),X.isArrayCamera){const ie=X.cameras;for(let re=0,_e=ie.length;re<_e;re++){const Ae=ie[re];Wn(y,C,Ae,Ae.viewport)}}else Wn(y,C,X);L!==null&&(Ze.updateMultisampleRenderTarget(L),Ze.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(S,C,X),Xe.resetDefaultState(),k=-1,R=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Vn(C,X,te,ie){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pe.intersectsSprite(C)){ie&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4($e);const Ae=A.update(C),Le=C.material;Le.visible&&y.push(C,Ae,Le,te,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pe.intersectsObject(C))){const Ae=A.update(C),Le=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ye.copy(Ae.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4($e)),Array.isArray(Le)){const Ne=Ae.groups;for(let qe=0,We=Ne.length;qe<We;qe++){const Ve=Ne[qe],ut=Le[Ve.materialIndex];ut&&ut.visible&&y.push(C,Ae,ut,te,Ye.z,Ve)}}else Le.visible&&y.push(C,Ae,Le,te,Ye.z,null)}}const _e=C.children;for(let Ae=0,Le=_e.length;Ae<Le;Ae++)Vn(_e[Ae],X,te,ie)}function Wn(C,X,te,ie){const re=C.opaque,_e=C.transmissive,Ae=C.transparent;v.setupLightsView(te),ge===!0&&Ce.setGlobalState(S.clippingPlanes,te),_e.length>0&&Ei(re,_e,X,te),ie&&Ge.viewport(M.copy(ie)),re.length>0&&Tr(re,X,te),_e.length>0&&Tr(_e,X,te),Ae.length>0&&Tr(Ae,X,te),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ei(C,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const _e=He.isWebGL2;be===null&&(be=new Zr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ua:_r,minFilter:la,samples:_e?4:0})),S.getDrawingBufferSize(Be),_e?be.setSize(Be.x,Be.y):be.setSize(kf(Be.x),kf(Be.y));const Ae=S.getRenderTarget();S.setRenderTarget(be),S.getClearColor(Z),O=S.getClearAlpha(),O<1&&S.setClearColor(16777215,.5),S.clear();const Le=S.toneMapping;S.toneMapping=vr,Tr(C,te,ie),Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be);let Ne=!1;for(let qe=0,We=X.length;qe<We;qe++){const Ve=X[qe],ut=Ve.object,un=Ve.geometry,Lt=Ve.material,Bt=Ve.group;if(Lt.side===Ui&&ut.layers.test(ie.layers)){const _t=Lt.side;Lt.side=Dn,Lt.needsUpdate=!0,Ct(ut,te,ie,un,Lt,Bt),Lt.side=_t,Lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be)),S.setRenderTarget(Ae),S.setClearColor(Z,O),S.toneMapping=Le}function Tr(C,X,te){const ie=X.isScene===!0?X.overrideMaterial:null;for(let re=0,_e=C.length;re<_e;re++){const Ae=C[re],Le=Ae.object,Ne=Ae.geometry,qe=ie===null?Ae.material:ie,We=Ae.group;Le.layers.test(te.layers)&&Ct(Le,X,te,Ne,qe,We)}}function Ct(C,X,te,ie,re,_e){C.onBeforeRender(S,X,te,ie,re,_e),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(S,X,te,ie,C,_e),re.transparent===!0&&re.side===Ui&&re.forceSinglePass===!1?(re.side=Dn,re.needsUpdate=!0,S.renderBufferDirect(te,X,ie,re,C,_e),re.side=Sr,re.needsUpdate=!0,S.renderBufferDirect(te,X,ie,re,C,_e),re.side=Ui):S.renderBufferDirect(te,X,ie,re,C,_e),C.onAfterRender(S,X,te,ie,re,_e)}function vn(C,X,te){X.isScene!==!0&&(X=yt);const ie=Ke.get(C),re=v.state.lights,_e=v.state.shadowsArray,Ae=re.state.version,Le=ee.getParameters(C,re.state,_e,X,te),Ne=ee.getProgramCacheKey(Le);let qe=ie.programs;ie.environment=C.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(C.isMeshStandardMaterial?Ot:dt).get(C.envMap||ie.environment),qe===void 0&&(C.addEventListener("dispose",de),qe=new Map,ie.programs=qe);let We=qe.get(Ne);if(We!==void 0){if(ie.currentProgram===We&&ie.lightsStateVersion===Ae)return xa(C,Le),We}else Le.uniforms=ee.getUniforms(C),C.onBuild(te,Le,S),C.onBeforeCompile(Le,S),We=ee.acquireProgram(Le,Ne),qe.set(Ne,We),ie.uniforms=Le.uniforms;const Ve=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ce.uniform),xa(C,Le),ie.needsLights=io(C),ie.lightsStateVersion=Ae,ie.needsLights&&(Ve.ambientLightColor.value=re.state.ambient,Ve.lightProbe.value=re.state.probe,Ve.directionalLights.value=re.state.directional,Ve.directionalLightShadows.value=re.state.directionalShadow,Ve.spotLights.value=re.state.spot,Ve.spotLightShadows.value=re.state.spotShadow,Ve.rectAreaLights.value=re.state.rectArea,Ve.ltc_1.value=re.state.rectAreaLTC1,Ve.ltc_2.value=re.state.rectAreaLTC2,Ve.pointLights.value=re.state.point,Ve.pointLightShadows.value=re.state.pointShadow,Ve.hemisphereLights.value=re.state.hemi,Ve.directionalShadowMap.value=re.state.directionalShadowMap,Ve.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ve.spotShadowMap.value=re.state.spotShadowMap,Ve.spotLightMatrix.value=re.state.spotLightMatrix,Ve.spotLightMap.value=re.state.spotLightMap,Ve.pointShadowMap.value=re.state.pointShadowMap,Ve.pointShadowMatrix.value=re.state.pointShadowMatrix),ie.currentProgram=We,ie.uniformsList=null,We}function to(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Rl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function xa(C,X){const te=Ke.get(C);te.outputColorSpace=X.outputColorSpace,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function no(C,X,te,ie,re){X.isScene!==!0&&(X=yt),Ze.resetTextureUnits();const _e=X.fog,Ae=ie.isMeshStandardMaterial?X.environment:null,Le=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gi,Ne=(ie.isMeshStandardMaterial?Ot:dt).get(ie.envMap||Ae),qe=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!te.morphAttributes.position,ut=!!te.morphAttributes.normal,un=!!te.morphAttributes.color;let Lt=vr;ie.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=S.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=Bt!==void 0?Bt.length:0,tt=Ke.get(ie),ro=v.state.lights;if(ge===!0&&(Me===!0||C!==R)){const cn=C===R&&ie.id===k;Ce.setState(ie,C,cn)}let Pt=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ro.state.version||tt.outputColorSpace!==Le||re.isInstancedMesh&&tt.instancing===!1||!re.isInstancedMesh&&tt.instancing===!0||re.isSkinnedMesh&&tt.skinning===!1||!re.isSkinnedMesh&&tt.skinning===!0||re.isInstancedMesh&&tt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&tt.instancingColor===!1&&re.instanceColor!==null||tt.envMap!==Ne||ie.fog===!0&&tt.fog!==_e||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ce.numPlanes||tt.numIntersection!==Ce.numIntersection)||tt.vertexAlphas!==qe||tt.vertexTangents!==We||tt.morphTargets!==Ve||tt.morphNormals!==ut||tt.morphColors!==un||tt.toneMapping!==Lt||He.isWebGL2===!0&&tt.morphTargetsCount!==_t)&&(Pt=!0):(Pt=!0,tt.__version=ie.version);let wi=tt.currentProgram;Pt===!0&&(wi=vn(ie,X,re));let Sa=!1,ji=!1,oo=!1;const qt=wi.getUniforms(),gi=tt.uniforms;if(Ge.useProgram(wi.program)&&(Sa=!0,ji=!0,oo=!0),ie.id!==k&&(k=ie.id,ji=!0),Sa||R!==C){qt.setValue(Q,"projectionMatrix",C.projectionMatrix),qt.setValue(Q,"viewMatrix",C.matrixWorldInverse);const cn=qt.map.cameraPosition;cn!==void 0&&cn.setValue(Q,Ye.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&qt.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&qt.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,ji=!0,oo=!0)}if(re.isSkinnedMesh){qt.setOptional(Q,re,"bindMatrix"),qt.setOptional(Q,re,"bindMatrixInverse");const cn=re.skeleton;cn&&(He.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),qt.setValue(Q,"boneTexture",cn.boneTexture,Ze),qt.setValue(Q,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $t=te.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0&&He.isWebGL2===!0)&&Ie.update(re,te,wi),(ji||tt.receiveShadow!==re.receiveShadow)&&(tt.receiveShadow=re.receiveShadow,qt.setValue(Q,"receiveShadow",re.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(gi.envMap.value=Ne,gi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ji&&(qt.setValue(Q,"toneMappingExposure",S.toneMappingExposure),tt.needsLights&&ds(gi,oo),_e&&ie.fog===!0&&ue.refreshFogUniforms(gi,_e),ue.refreshMaterialUniforms(gi,ie,j,G,be),Rl.upload(Q,to(tt),gi,Ze)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Rl.upload(Q,to(tt),gi,Ze),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&qt.setValue(Q,"center",re.center),qt.setValue(Q,"modelViewMatrix",re.modelViewMatrix),qt.setValue(Q,"normalMatrix",re.normalMatrix),qt.setValue(Q,"modelMatrix",re.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const cn=ie.uniformsGroups;for(let so=0,ao=cn.length;so<ao;so++)if(He.isWebGL2){const hs=cn[so];Fe.update(hs,wi),Fe.bind(hs,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function ds(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function io(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,X,te){Ke.get(C.texture).__webglTexture=X,Ke.get(C.depthTexture).__webglTexture=te;const ie=Ke.get(C);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const te=Ke.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){L=C,P=X,D=te;let ie=!0,re=null,_e=!1,Ae=!1;if(C){const Ne=Ke.get(C);Ne.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(Q.FRAMEBUFFER,null),ie=!1):Ne.__webglFramebuffer===void 0?Ze.setupRenderTarget(C):Ne.__hasExternalTextures&&Ze.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ae=!0);const We=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[X])?re=We[X][te]:re=We[X],_e=!0):He.isWebGL2&&C.samples>0&&Ze.useMultisampledRTT(C)===!1?re=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?re=We[te]:re=We,M.copy(C.viewport),F.copy(C.scissor),W=C.scissorTest}else M.copy($).multiplyScalar(j).floor(),F.copy(B).multiplyScalar(j).floor(),W=q;if(Ge.bindFramebuffer(Q.FRAMEBUFFER,re)&&He.drawBuffers&&ie&&Ge.drawBuffers(C,re),Ge.viewport(M),Ge.scissor(F),Ge.setScissorTest(W),_e){const Ne=Ke.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,te)}else if(Ae){const Ne=Ke.get(C.texture),qe=X||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ne.__webglTexture,te||0,qe)}k=-1},this.readRenderTargetPixels=function(C,X,te,ie,re,_e,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){Ge.bindFramebuffer(Q.FRAMEBUFFER,Le);try{const Ne=C.texture,qe=Ne.format,We=Ne.type;if(qe!==di&&ft.convert(qe)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=We===ua&&(Te.has("EXT_color_buffer_half_float")||He.isWebGL2&&Te.has("EXT_color_buffer_float"));if(We!==_r&&ft.convert(We)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===sr&&(He.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ie&&te>=0&&te<=C.height-re&&Q.readPixels(X,te,ie,re,ft.convert(qe),ft.convert(We),_e)}finally{const Ne=L!==null?Ke.get(L).__webglFramebuffer:null;Ge.bindFramebuffer(Q.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,X,te=0){const ie=Math.pow(2,-te),re=Math.floor(X.image.width*ie),_e=Math.floor(X.image.height*ie);Ze.setTexture2D(X,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,te,0,0,C.x,C.y,re,_e),Ge.unbindTexture()},this.copyTextureToTexture=function(C,X,te,ie=0){const re=X.image.width,_e=X.image.height,Ae=ft.convert(te.format),Le=ft.convert(te.type);Ze.setTexture2D(te,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,te.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,ie,C.x,C.y,re,_e,Ae,Le,X.image.data):X.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,ie,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ae,X.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,ie,C.x,C.y,Ae,Le,X.image),ie===0&&te.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te,ie,re=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=C.max.x-C.min.x+1,Ae=C.max.y-C.min.y+1,Le=C.max.z-C.min.z+1,Ne=ft.convert(ie.format),qe=ft.convert(ie.type);let We;if(ie.isData3DTexture)Ze.setTexture3D(ie,0),We=Q.TEXTURE_3D;else if(ie.isDataArrayTexture)Ze.setTexture2DArray(ie,0),We=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ie.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ve=Q.getParameter(Q.UNPACK_ROW_LENGTH),ut=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),un=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Lt=Q.getParameter(Q.UNPACK_SKIP_ROWS),Bt=Q.getParameter(Q.UNPACK_SKIP_IMAGES),_t=te.isCompressedTexture?te.mipmaps[0]:te.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,_t.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,_t.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,C.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,C.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,C.min.z),te.isDataTexture||te.isData3DTexture?Q.texSubImage3D(We,re,X.x,X.y,X.z,_e,Ae,Le,Ne,qe,_t.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(We,re,X.x,X.y,X.z,_e,Ae,Le,Ne,_t.data)):Q.texSubImage3D(We,re,X.x,X.y,X.z,_e,Ae,Le,Ne,qe,_t),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Ve),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ut),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,un),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Lt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Bt),re===0&&ie.generateMipmaps&&Q.generateMipmap(We),Ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ze.setTextureCube(C,0):C.isData3DTexture?Ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ze.setTexture2DArray(C,0):Ze.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,Ge.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=vt.workingColorSpace===Su?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?Wr:d0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?on:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jT extends D0{}jT.prototype.isWebGL1Renderer=!0;class XT extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class U0 extends _a{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new Vt,Hf=new v0,dl=new Mu,hl=new K;class YT extends an{constructor(e=new Wi,n=new U0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(r),dl.radius+=o,e.ray.intersectsSphere(dl)===!1)return;Bm.copy(r).invert(),Hf.copy(e.ray).applyMatrix4(Bm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=i.index,m=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),_=Math.min(c.count,s.start+s.count);for(let w=p,y=_;w<y;w++){const v=c.getX(w);hl.fromBufferAttribute(m,v),Hm(hl,v,u,r,e,n,this)}}else{const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let w=p,y=_;w<y;w++)hl.fromBufferAttribute(m,w),Hm(hl,w,u,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Hm(t,e,n,i,r,o,s){const a=Hf.distanceSqToPoint(t);if(a<n){const u=new K;Hf.closestPointToPoint(t,u),u.applyMatrix4(i);const c=r.ray.origin.distanceTo(u);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:s})}}class N0 extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ic=new Vt,Gm=new K,Vm=new K;class qT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $T extends qT{constructor(){super(new R0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KT extends N0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $T}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZT extends N0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);class QT{constructor(e,n){this.scene=e,this.config=n,this.particles=null,this.particleGeometry=null,this.particleMaterial=null,this.particlePositions=[],this.particleVelocities=[],this.particleColors=[],this.basePositions=[],this.initialPositions=[],this.initialVelocities=[],this.baseScale=1,this.targetScale=1,this.isResetting=!1,this.resetProgress=0}createParticles(){console.log("[ParticleSystem] 🎨 开始创建粒子...");const e=this.config.count||1e3;console.log("[ParticleSystem] 📊 粒子数量:",e);const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e);this.particlePositions=[],this.particleVelocities=[],this.particleColors=[];for(let o=0;o<e;o++){const s=o*3,a=this.config.positionGenerator?this.config.positionGenerator(o,e):this.defaultPositionGenerator(o,e);n[s]=a.x,n[s+1]=a.y,n[s+2]=a.z;const u=this.config.colorGenerator?this.config.colorGenerator(o,e):this.config.color||new ke(1,1,1);i[s]=u.r,i[s+1]=u.g,i[s+2]=u.b,r[o]=this.config.size||.02;const c=new K(a.x,a.y,a.z),h=this.config.velocityGenerator?this.config.velocityGenerator(o,e):new K(0,0,0);this.particlePositions.push(new K(a.x,a.y,a.z)),this.basePositions.push(new K(a.x,a.y,a.z)),this.initialPositions.push(c.clone()),this.initialVelocities.push(h.clone()),this.particleVelocities.push(h.clone()),this.particleColors.push(u)}try{if(this.particleGeometry=new Wi,!n||n.length===0)throw new Error("粒子位置数组无效: "+n);if(!i||i.length===0)throw new Error("粒子颜色数组无效: "+i);if(!r||r.length===0)throw new Error("粒子大小数组无效: "+r);n instanceof Float32Array||console.warn("[ParticleSystem] ⚠️ positions 不是 Float32Array，类型:",typeof n),i instanceof Float32Array||console.warn("[ParticleSystem] ⚠️ colors 不是 Float32Array，类型:",typeof i),r instanceof Float32Array||console.warn("[ParticleSystem] ⚠️ sizes 不是 Float32Array，类型:",typeof r),console.log("[ParticleSystem] 📊 创建 BufferAttribute，数组长度:",{positions:n.length,colors:i.length,sizes:r.length});const o=new kn(n,3),s=new kn(i,3),a=new kn(r,1);if(!o||!o.array)throw new Error("position BufferAttribute 创建失败");if(!s||!s.array)throw new Error("color BufferAttribute 创建失败");if(!a||!a.array)throw new Error("size BufferAttribute 创建失败");this.particleGeometry.setAttribute("position",o),this.particleGeometry.setAttribute("color",s),this.particleGeometry.setAttribute("size",a),console.log("[ParticleSystem] ✅ 几何体创建成功")}catch(o){throw console.error("[ParticleSystem] ❌ 几何体创建失败:",o),console.error("[ParticleSystem] 错误堆栈:",o.stack),o}this.particleMaterial=new U0({size:this.config.size||.02,vertexColors:!0,transparent:!0,opacity:this.config.opacity||.8,blending:Hr,sizeAttenuation:!0}),this.particles=new YT(this.particleGeometry,this.particleMaterial),this.scene.add(this.particles),console.log("[ParticleSystem] ✅ 粒子创建完成:",{particleCount:e,geometryVertices:this.particleGeometry.attributes.position.count,materialSize:this.particleMaterial.size,sceneChildren:this.scene.children.length})}defaultPositionGenerator(e,n){return{x:(Math.random()-.5)*10,y:(Math.random()-.5)*10,z:(Math.random()-.5)*10}}update(e,n=1,i=!1,r=!1){if(!this.particles||!this.particleGeometry){Math.random()<.01&&console.warn("[ParticleSystem] ⚠️ 粒子系统未初始化，跳过更新");return}const o=this.particleGeometry.attributes.position,s=this.particleGeometry.attributes.color,a=this.particleGeometry.attributes.size;if(!o||!o.array){console.error("[ParticleSystem] ❌ position 属性不存在或无效");return}if(!s||!s.array){console.error("[ParticleSystem] ❌ color 属性不存在或无效");return}if(!a||!a.array){console.error("[ParticleSystem] ❌ size 属性不存在或无效");return}i?(this.isResetting||(this.isResetting=!0,this.resetProgress=0),this.resetProgress=Math.min(1,this.resetProgress+e*.5),this.resetProgress>=1&&(this.isResetting=!1)):this.isResetting&&(this.isResetting=!1,this.resetProgress=0);const u=this.baseScale;this.baseScale+=(n-this.baseScale)*.5,this.targetScale=this.baseScale,r&&(this.debugFrameCount||(this.debugFrameCount=0),this.debugFrameCount++,this.debugFrameCount%10===0&&console.log("[ParticleSystem] 🎨 缩放更新:",{gestureScale:n.toFixed(3),oldBaseScale:u.toFixed(3),newBaseScale:this.baseScale.toFixed(3),targetScale:this.targetScale.toFixed(3),hasGesture:r,scaleChange:Math.abs(this.targetScale-1).toFixed(3),scaleChanged:Math.abs(this.baseScale-u)>.001}));const c=r||Math.abs(this.targetScale-1)>.05,h=o.array,m=s.array,p=a.array,w=(this.config.size||.02)*this.targetScale;for(let y=0;y<p.length;y++)p[y]=w;for(let y=0;y<this.particlePositions.length;y++){const v=y*3,f=this.particlePositions[y],x=this.particleVelocities[y],S=this.basePositions[y],T=this.initialPositions[y];if(this.initialVelocities[y],this.isResetting&&this.resetProgress>0){const W=this.resetProgress;f.x+=(T.x-f.x)*W*e*2,f.y+=(T.y-f.y)*W*e*2,f.z+=(T.z-f.z)*W*e*2,x.x*=1-W*e*3,x.y*=1-W*e*3,x.z*=1-W*e*3}else c?(f.x+=x.x*e,f.y+=x.y*e,f.z+=x.z*e,this.config.updateFunction&&(this.config.updateFunction(f,x,y,e,this.targetScale),(Math.abs(f.x-S.x)>5||Math.abs(f.y-S.y)>5||Math.abs(f.z-S.z)>5)&&this.basePositions[y].copy(f))):(x.x*=.95,x.y*=.95,x.z*=.95,Math.abs(x.x)<1e-4&&(x.x=0),Math.abs(x.y)<1e-4&&(x.y=0),Math.abs(x.z)<1e-4&&(x.z=0),(Math.abs(x.x)>0||Math.abs(x.y)>0||Math.abs(x.z)>0)&&(f.x+=x.x*e,f.y+=x.y*e,f.z+=x.z*e));const P=this.initialPositions[y].x,D=this.initialPositions[y].y,L=this.initialPositions[y].z,k=isNaN(this.targetScale)||!isFinite(this.targetScale)?1:this.targetScale,R=P*k,M=D*k,F=L*k;if(y===0&&Math.random()<.01&&r&&console.log("[ParticleSystem] 📍 位置更新示例:",{initialX:P.toFixed(3),initialY:D.toFixed(3),scale:k.toFixed(3),finalX:R.toFixed(3),finalY:M.toFixed(3),scaleChanged:Math.abs(k-1)>.01}),h[v]=R,h[v+1]=M,h[v+2]=F,this.config.colorUpdateFunction){const W=this.config.colorUpdateFunction(y,f,e);m[v]=W.r,m[v+1]=W.g,m[v+2]=W.b}else{const W=this.particleColors[y];W&&(m[v]=W.r,m[v+1]=W.g,m[v+2]=W.b)}}this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0,this.particleGeometry.attributes.size.needsUpdate=!0}dispose(){this.particles&&(this.scene.remove(this.particles),this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.particles=null,this.particleGeometry=null,this.particleMaterial=null,this.particlePositions=[],this.basePositions=[],this.initialPositions=[],this.initialVelocities=[],this.particleVelocities=[],this.particleColors=[],this.isResetting=!1,this.resetProgress=0)}}function JT(t,e){const i=Math.floor(e/5),r=Math.floor(t/i),o=t%i,s=r/5*Math.PI*2,a=1.2,u=Math.cos(s)*a,c=Math.sin(s)*a,h=o/i*Math.PI*2,m=Math.random()*.8,p=u+Math.cos(h)*m,_=c+Math.sin(h)*m;if(Math.sqrt(p*p+_*_)<.3){const y=Math.random()*Math.PI*2,v=Math.random()*.2;return{x:Math.cos(y)*v,y:Math.sin(y)*v,z:(Math.random()-.5)*.05}}return{x:p,y:_,z:(Math.random()-.5)*.05}}const eA={backgroundColor:new ke(1710638),particleOptions:{count:5e3,size:.04,opacity:.9,color:new ke(1,.7,.8),positionGenerator:(t,e)=>JT(t,e),colorGenerator:(t,e)=>{const n=Math.random();return new ke(1,.6+n*.3,.7+n*.2)},velocityGenerator:(t,e)=>new K(0,0,0),updateFunction:(t,e,n,i,r)=>{Math.abs(t.z)>.1&&(t.z*=.9)}}},tA={backgroundColor:new ke(2763322),particleOptions:{count:12e3,size:.025,opacity:.95,positionGenerator:(t,e)=>t<e*.5?{x:(Math.random()-.5)*20,y:Math.random()*8+1,z:(Math.random()-.5)*.1}:{x:(Math.random()-.5)*20,y:Math.random()*8-7,z:(Math.random()-.5)*.1},colorGenerator:(t,e)=>{if(t<e*.5){const i=Math.random();return i<.4?new ke(.7,.6,1):i<.7?new ke(1,.7,.9):new ke(.6,.7,1)}else{const i=Math.random();return i<.3?new ke(1,.5,0):i<.6?new ke(1,.6,.1):i<.8?new ke(1,.7,.2):new ke(1,.8,.3)}},velocityGenerator:(t,e)=>t<e*.5?new K((Math.random()-.5)*.003,(Math.random()-.5)*.002,(Math.random()-.5)*.001):new K((Math.random()-.5)*.002,Math.sin(t*.1)*5e-4,(Math.random()-.5)*.001),updateFunction:(t,e,n,i,r)=>{n<6e3?(t.y<1&&(t.y=1+Math.random()*8),t.y>9&&(t.y=1+Math.random()*8),t.x>10&&(t.x=-10),t.x<-10&&(t.x=10),Math.abs(t.z)>.1&&(t.z*=.9)):(t.y>-1&&(t.y=-7+Math.random()*6),t.y<-9&&(t.y=-7+Math.random()*6),t.x>10&&(t.x=-10),t.x<-10&&(t.x=10),Math.abs(t.z)>.1&&(t.z*=.9))}}};function nA(t,e){const o=t/e,s=.8/(4+.8);if(o<s){const u=o/s,c=-4/2-.8+u*.8,h=.08,m=t%8/8*Math.PI*2,p=Math.random()*h;return{x:Math.cos(m)*p,y:c+(Math.random()-.5)*.05,z:(Math.random()-.5)*.03}}else{const u=(o-s)/(1-s),c=(u-.5)*4,m=2.5*Math.sqrt(1-Math.pow((u-.5)*2,2)),_=(t%20/20-.5)*m,w=Math.abs(_)<.3?0:(Math.random()-.5)*.15,y=Math.sin(c*1.5)*.08;return{x:_+w+y,y:c+(Math.random()-.5)*.1,z:(Math.random()-.5)*.05}}}const iA={backgroundColor:new ke(2763322),particleOptions:{count:6e3,size:.04,opacity:.9,positionGenerator:(t,e)=>nA(t,e),colorGenerator:(t,e)=>{const n=Math.random(),i=t/e,r=1-Math.abs(i-.5)*2;return n<.4?new ke(.5+n*.2,.3+n*.15,.1+n*.1):n<.7?new ke(.6+r*.2,.35+n*.15,.15+n*.1):new ke(.55+n*.15,.4+n*.1,.2+n*.1)},velocityGenerator:(t,e)=>new K(0,0,0),updateFunction:(t,e,n,i,r)=>{Math.abs(t.z)>.1&&(t.z*=.9)}}};function rA(t,e){const i=Math.floor(e/6),r=Math.floor(t/i),o=t%i,s=r/6*Math.PI*2,a=.1+o/i*4,u=Math.cos(s)*a,c=Math.sin(s)*a,h=(o%10-4.5)*.04,m=s+Math.PI/2,p=Math.cos(m)*h,_=Math.sin(m)*h;let w=0,y=0;if(o>5&&o<i*.3){const M=(o-5)%2,F=.4+M*.2,W=s+(M===0?1:-1)*Math.PI/4;if(w=Math.cos(W)*F,y=Math.sin(W)*F,(o-5)%3===2){const O=W+(M===0?1:-1)*Math.PI/6;w+=Math.cos(O)*.25,y+=Math.sin(O)*.25}}let v=0,f=0;if(o>i*.3&&o<i*.7){const M=(o-Math.floor(i*.3))%3,F=.7+M*.3,W=s+(M===0?1:M===1?-1:0)*Math.PI/3;if(v=Math.cos(W)*F,f=Math.sin(W)*F,(o-Math.floor(i*.3))%4===3){const O=W+(M===0?1:-1)*Math.PI/5;v+=Math.cos(O)*.3,f+=Math.sin(O)*.3}}let x=0,S=0;if(o>i*.7&&o<i-3){const M=(o-Math.floor(i*.7))%2,F=1+M*.4,W=s+(M===0?1:-1)*Math.PI/3.5;if(x=Math.cos(W)*F,S=Math.sin(W)*F,(o-Math.floor(i*.7))%5===4){const O=W+(M===0?1:-1)*Math.PI/4;x+=Math.cos(O)*.35,S+=Math.sin(O)*.35}}const T=Math.random()*.3,P=Math.random()*Math.PI*2,D=Math.cos(P)*T,L=Math.sin(P)*T;let k=0,R=0;if(o<5){const M=o/5*Math.PI*2,F=.15+Math.random()*.1;k=Math.cos(M)*F,R=Math.sin(M)*F}return{x:u+p+w*.5+v*.45+x*.4+D*.2+k,y:c+_+y*.5+f*.45+S*.4+L*.2+R,z:(Math.random()-.5)*.05}}const oA={backgroundColor:new ke(1710634),particleOptions:{count:8e3,size:.03,opacity:.95,positionGenerator:(t,e)=>rA(t,e),colorGenerator:(t,e)=>{const n=Math.random();return new ke(.95+n*.05,.95+n*.05,1)},velocityGenerator:(t,e)=>new K(0,0,0),updateFunction:(t,e,n,i,r)=>{Math.abs(t.z)>.1&&(t.z*=.9)}}},sA={spring:eA,summer:tA,autumn:iA,winter:oA},aA=({currentScene:t,gestureScale:e,gestureData:n})=>{const i=gt.useRef(null),r=gt.useRef(null),o=gt.useRef(null),s=gt.useRef(null),a=gt.useRef(null),u=gt.useRef(null),c=gt.useRef(Date.now());gt.useEffect(()=>{if(console.log("[SceneRenderer] 🎬 useEffect 被调用，mountRef.current:",!!i.current),!i.current){console.warn("[SceneRenderer] ⚠️ mountRef.current 不存在，等待 DOM 准备...");const T=setTimeout(()=>{i.current?console.log("[SceneRenderer] ✅ DOM 已准备，重新初始化"):console.error("[SceneRenderer] ❌ DOM 仍未准备，无法初始化")},1e3);return()=>clearTimeout(T)}console.log("[SceneRenderer] 🚀 开始初始化 Three.js 场景");const p=i.current.clientWidth,_=i.current.clientHeight;if(console.log("[SceneRenderer] 📐 容器尺寸:",{width:p,height:_}),p===0||_===0){console.warn("[SceneRenderer] ⚠️ 容器尺寸为0，使用窗口尺寸");const T=window.innerWidth,P=window.innerHeight;console.log("[SceneRenderer] 📐 使用窗口尺寸:",{width:T,height:P})}r.current=new XT;const w=p>0?p:window.innerWidth,y=_>0?_:window.innerHeight,v=y>0?w/y:16/9;console.log("[SceneRenderer] 📐 使用尺寸:",{width:w,height:y,aspect:v}),s.current=new Kn(75,v,.1,1e3),s.current.position.set(0,2,8),s.current.lookAt(0,0,0);try{o.current=new D0({antialias:!0,alpha:!0});const T=p>0?p:window.innerWidth,P=_>0?_:window.innerHeight;o.current.setSize(T,P),o.current.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.current.appendChild(o.current.domElement),console.log("[SceneRenderer] ✅ WebGL 渲染器创建成功")}catch(T){throw console.error("[SceneRenderer] ❌ WebGL 渲染器创建失败:",T),T}const f=new ZT(16777215,.5);r.current.add(f);const x=new KT(16777215,.5);x.position.set(5,5,5),r.current.add(x);const S=()=>{if(!i.current||!s.current||!o.current)return;const T=i.current.clientWidth,P=i.current.clientHeight;s.current.aspect=T/P,s.current.updateProjectionMatrix(),o.current.setSize(T,P)};return window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),u.current&&cancelAnimationFrame(u.current),a.current&&a.current.dispose(),o.current&&i.current&&(i.current.removeChild(o.current.domElement),o.current.dispose())}},[]),gt.useEffect(()=>{var _,w;if(!r.current){console.warn("[SceneRenderer] ⚠️ 场景未初始化，无法创建粒子系统");return}console.log("[SceneRenderer] 🎨 切换场景:",t),a.current&&(console.log("[SceneRenderer] 🗑️ 清理旧粒子系统"),a.current.dispose(),a.current=null);const p=sA[t];if(!p){console.error("[SceneRenderer] ❌ 未找到场景配置:",t);return}console.log("[SceneRenderer] ✅ 场景配置加载成功:",{scene:t,particleCount:((_=p.particleOptions)==null?void 0:_.count)||"N/A",backgroundColor:((w=p.backgroundColor)==null?void 0:w.getHexString())||"N/A"}),o.current&&(o.current.setClearColor(p.backgroundColor,1),console.log("[SceneRenderer] 🎨 背景色已设置"));try{console.log("[SceneRenderer] 🎨 开始创建粒子系统..."),a.current=new QT(r.current,p.particleOptions),console.log("[SceneRenderer] ✅ ParticleSystem 实例创建成功"),a.current.createParticles(),console.log("[SceneRenderer] ✅ 粒子创建完成"),c.current=Date.now()}catch(y){console.error("[SceneRenderer] ❌ 粒子系统创建失败:",y),console.error("[SceneRenderer] 错误详情:",{message:y.message,stack:y.stack,name:y.name}),a.current=null}},[t]);const h=gt.useRef(e||1),m=gt.useRef(n);return gt.useEffect(()=>{h.current=e||1,m.current=n},[e,n]),gt.useEffect(()=>{const p=()=>{if(u.current=requestAnimationFrame(p),!r.current||!s.current||!o.current)return;const _=Date.now(),w=(_-c.current)/1e3;c.current=_;const y=h.current||1,v=m.current||{},f=v.handsDetected||!1;if(a.current)try{a.current.update(w,y,v.shouldReset||!1,f)}catch(x){console.error("[SceneRenderer] ❌ 粒子系统更新失败:",x)}o.current.render(r.current,s.current)};return p(),()=>{u.current&&cancelAnimationFrame(u.current)}},[]),console.log("[SceneRenderer] 🎨 渲染 div 元素"),nt.jsx("div",{ref:i,style:{width:"100%",height:"100%",background:"#000",position:"absolute",top:0,left:0},children:nt.jsx("div",{style:{position:"absolute",top:"20px",left:"20px",color:"white",fontSize:"14px",zIndex:1e3,background:"rgba(0,0,0,0.7)",padding:"10px",borderRadius:"5px"},children:"Three.js 场景容器"})})},lA=({currentScene:t,onSceneChange:e})=>{const n=[{id:"spring",label:"Spring",emoji:"🌸"},{id:"summer",label:"Summer",emoji:"🌅"},{id:"autumn",label:"Autumn",emoji:"🍂"},{id:"winter",label:"Winter",emoji:"❄️"}];return nt.jsxs("div",{className:"control-panel",children:[nt.jsx("div",{className:"control-panel-title",children:"Scenes"}),nt.jsx("div",{className:"scene-buttons",children:n.map(i=>nt.jsxs("button",{className:`scene-button ${t===i.id?"active":""}`,onClick:()=>e(i.id),children:[nt.jsx("span",{className:"scene-emoji",children:i.emoji}),nt.jsx("span",{className:"scene-label",children:i.label})]},i.id))})]})},uA=()=>{const[t,e]=gt.useState(!1),n=()=>{document.fullscreenElement?document.exitFullscreen().then(()=>{e(!1)}).catch(i=>{console.error("Error attempting to exit fullscreen:",i)}):document.documentElement.requestFullscreen().then(()=>{e(!0)}).catch(i=>{console.error("Error attempting to enable fullscreen:",i)})};return eg.useEffect(()=>{const i=()=>{e(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",i),()=>{document.removeEventListener("fullscreenchange",i)}},[]),nt.jsx("button",{className:"fullscreen-button",onClick:n,title:t?"Exit Fullscreen":"Enter Fullscreen",children:t?"⤓":"⤢"})};var Co={};(function(){var t;function e(l){var d=0;return function(){return d<l.length?{done:!1,value:l[d++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function i(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=i(this);function o(l,d){if(d)e:{var g=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var b=l[E];if(!(b in g))break e;g=g[b]}l=l[l.length-1],E=g[l],d=d(E),d!=E&&d!=null&&n(g,l,{configurable:!0,writable:!0,value:d})}}o("Symbol",function(l){function d(I){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new g(E+(I||"")+"_"+b++,I)}function g(I,U){this.h=I,n(this,"description",{configurable:!0,writable:!0,value:U})}if(l)return l;g.prototype.toString=function(){return this.h};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",b=0;return d}),o("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<d.length;g++){var E=r[d[g]];typeof E=="function"&&typeof E.prototype[l]!="function"&&n(E.prototype,l,{configurable:!0,writable:!0,value:function(){return s(e(this))}})}return l});function s(l){return l={next:l},l[Symbol.iterator]=function(){return this},l}function a(l){var d=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return d?d.call(l):{next:e(l)}}function u(l){if(!(l instanceof Array)){l=a(l);for(var d,g=[];!(d=l.next()).done;)g.push(d.value);l=g}return l}var c=typeof Object.assign=="function"?Object.assign:function(l,d){for(var g=1;g<arguments.length;g++){var E=arguments[g];if(E)for(var b in E)Object.prototype.hasOwnProperty.call(E,b)&&(l[b]=E[b])}return l};o("Object.assign",function(l){return l||c});var h=typeof Object.create=="function"?Object.create:function(l){function d(){}return d.prototype=l,new d},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var p;e:{var _={a:!0},w={};try{w.__proto__=_,p=w.a;break e}catch{}p=!1}m=p?function(l,d){if(l.__proto__=d,l.__proto__!==d)throw new TypeError(l+" is not extensible");return l}:null}var y=m;function v(l,d){if(l.prototype=h(d.prototype),l.prototype.constructor=l,y)y(l,d);else for(var g in d)if(g!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(d,g);E&&Object.defineProperty(l,g,E)}else l[g]=d[g];l.ya=d.prototype}function f(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function x(l){if(l.m)throw new TypeError("Generator is already running");l.m=!0}f.prototype.u=function(l){this.i=l};function S(l,d){l.l={ma:d,na:!0},l.h=l.s||l.v}f.prototype.return=function(l){this.l={return:l},this.h=this.v};function T(l,d,g){return l.h=g,{value:d}}function P(l){this.h=new f,this.i=l}function D(l,d){x(l.h);var g=l.h.j;return g?L(l,"return"in g?g.return:function(E){return{value:E,done:!0}},d,l.h.return):(l.h.return(d),k(l))}function L(l,d,g,E){try{var b=d.call(l.h.j,g);if(!(b instanceof Object))throw new TypeError("Iterator result "+b+" is not an object");if(!b.done)return l.h.m=!1,b;var I=b.value}catch(U){return l.h.j=null,S(l.h,U),k(l)}return l.h.j=null,E.call(l.h,I),k(l)}function k(l){for(;l.h.h;)try{var d=l.i(l.h);if(d)return l.h.m=!1,{value:d.value,done:!1}}catch(g){l.h.i=void 0,S(l.h,g)}if(l.h.m=!1,l.h.l){if(d=l.h.l,l.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function R(l){this.next=function(d){return x(l.h),l.h.j?d=L(l,l.h.j.next,d,l.h.u):(l.h.u(d),d=k(l)),d},this.throw=function(d){return x(l.h),l.h.j?d=L(l,l.h.j.throw,d,l.h.u):(S(l.h,d),d=k(l)),d},this.return=function(d){return D(l,d)},this[Symbol.iterator]=function(){return this}}function M(l){function d(E){return l.next(E)}function g(E){return l.throw(E)}return new Promise(function(E,b){function I(U){U.done?E(U.value):Promise.resolve(U.value).then(d,g).then(I,b)}I(l.next())})}function F(l){return M(new R(new P(l)))}o("Promise",function(l){function d(U){this.i=0,this.j=void 0,this.h=[],this.u=!1;var z=this.l();try{U(z.resolve,z.reject)}catch(J){z.reject(J)}}function g(){this.h=null}function E(U){return U instanceof d?U:new d(function(z){z(U)})}if(l)return l;g.prototype.i=function(U){if(this.h==null){this.h=[];var z=this;this.j(function(){z.m()})}this.h.push(U)};var b=r.setTimeout;g.prototype.j=function(U){b(U,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var U=this.h;this.h=[];for(var z=0;z<U.length;++z){var J=U[z];U[z]=null;try{J()}catch(se){this.l(se)}}}this.h=null},g.prototype.l=function(U){this.j(function(){throw U})},d.prototype.l=function(){function U(se){return function(ve){J||(J=!0,se.call(z,ve))}}var z=this,J=!1;return{resolve:U(this.I),reject:U(this.m)}},d.prototype.I=function(U){if(U===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(U instanceof d)this.L(U);else{e:switch(typeof U){case"object":var z=U!=null;break e;case"function":z=!0;break e;default:z=!1}z?this.F(U):this.s(U)}},d.prototype.F=function(U){var z=void 0;try{z=U.then}catch(J){this.m(J);return}typeof z=="function"?this.M(z,U):this.s(U)},d.prototype.m=function(U){this.v(2,U)},d.prototype.s=function(U){this.v(1,U)},d.prototype.v=function(U,z){if(this.i!=0)throw Error("Cannot settle("+U+", "+z+"): Promise already settled in state"+this.i);this.i=U,this.j=z,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var U=this;b(function(){if(U.D()){var z=r.console;typeof z<"u"&&z.error(U.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var U=r.CustomEvent,z=r.Event,J=r.dispatchEvent;return typeof J>"u"?!0:(typeof U=="function"?U=new U("unhandledrejection",{cancelable:!0}):typeof z=="function"?U=new z("unhandledrejection",{cancelable:!0}):(U=r.document.createEvent("CustomEvent"),U.initCustomEvent("unhandledrejection",!1,!0,U)),U.promise=this,U.reason=this.j,J(U))},d.prototype.H=function(){if(this.h!=null){for(var U=0;U<this.h.length;++U)I.i(this.h[U]);this.h=null}};var I=new g;return d.prototype.L=function(U){var z=this.l();U.T(z.resolve,z.reject)},d.prototype.M=function(U,z){var J=this.l();try{U.call(z,J.resolve,J.reject)}catch(se){J.reject(se)}},d.prototype.then=function(U,z){function J(Pe,Ee){return typeof Pe=="function"?function(ze){try{se(Pe(ze))}catch(et){ve(et)}}:Ee}var se,ve,Oe=new d(function(Pe,Ee){se=Pe,ve=Ee});return this.T(J(U,se),J(z,ve)),Oe},d.prototype.catch=function(U){return this.then(void 0,U)},d.prototype.T=function(U,z){function J(){switch(se.i){case 1:U(se.j);break;case 2:z(se.j);break;default:throw Error("Unexpected state: "+se.i)}}var se=this;this.h==null?I.i(J):this.h.push(J),this.u=!0},d.resolve=E,d.reject=function(U){return new d(function(z,J){J(U)})},d.race=function(U){return new d(function(z,J){for(var se=a(U),ve=se.next();!ve.done;ve=se.next())E(ve.value).T(z,J)})},d.all=function(U){var z=a(U),J=z.next();return J.done?E([]):new d(function(se,ve){function Oe(ze){return function(et){Pe[ze]=et,Ee--,Ee==0&&se(Pe)}}var Pe=[],Ee=0;do Pe.push(void 0),Ee++,E(J.value).T(Oe(Pe.length-1),ve),J=z.next();while(!J.done)})},d});function W(l,d){l instanceof String&&(l+="");var g=0,E=!1,b={next:function(){if(!E&&g<l.length){var I=g++;return{value:d(I,l[I]),done:!1}}return E=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.keys",function(l){return l||function(){return W(this,function(d){return d})}}),o("Array.prototype.fill",function(l){return l||function(d,g,E){var b=this.length||0;for(0>g&&(g=Math.max(0,b+g)),(E==null||E>b)&&(E=b),E=Number(E),0>E&&(E=Math.max(0,b+E)),g=Number(g||0);g<E;g++)this[g]=d;return this}});function Z(l){return l||Array.prototype.fill}o("Int8Array.prototype.fill",Z),o("Uint8Array.prototype.fill",Z),o("Uint8ClampedArray.prototype.fill",Z),o("Int16Array.prototype.fill",Z),o("Uint16Array.prototype.fill",Z),o("Int32Array.prototype.fill",Z),o("Uint32Array.prototype.fill",Z),o("Float32Array.prototype.fill",Z),o("Float64Array.prototype.fill",Z),o("Object.is",function(l){return l||function(d,g){return d===g?d!==0||1/d===1/g:d!==d&&g!==g}}),o("Array.prototype.includes",function(l){return l||function(d,g){var E=this;E instanceof String&&(E=String(E));var b=E.length;for(g=g||0,0>g&&(g=Math.max(g+b,0));g<b;g++){var I=E[g];if(I===d||Object.is(I,d))return!0}return!1}}),o("String.prototype.includes",function(l){return l||function(d,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,g||0)!==-1}});var O=this||self;function ne(l,d){l=l.split(".");var g=O;l[0]in g||typeof g.execScript>"u"||g.execScript("var "+l[0]);for(var E;l.length&&(E=l.shift());)l.length||d===void 0?g[E]&&g[E]!==Object.prototype[E]?g=g[E]:g=g[E]={}:g[E]=d}function G(l){var d;e:{if((d=O.navigator)&&(d=d.userAgent))break e;d=""}return d.indexOf(l)!=-1}var j=Array.prototype.map?function(l,d){return Array.prototype.map.call(l,d,void 0)}:function(l,d){for(var g=l.length,E=Array(g),b=typeof l=="string"?l.split(""):l,I=0;I<g;I++)I in b&&(E[I]=d.call(void 0,b[I],I,l));return E},V={},Y=null;function $(l){var d=l.length,g=3*d/4;g%3?g=Math.floor(g):"=.".indexOf(l[d-1])!=-1&&(g="=.".indexOf(l[d-2])!=-1?g-2:g-1);var E=new Uint8Array(g),b=0;return B(l,function(I){E[b++]=I}),b!==g?E.subarray(0,b):E}function B(l,d){function g(J){for(;E<l.length;){var se=l.charAt(E++),ve=Y[se];if(ve!=null)return ve;if(!/^[\s\xa0]*$/.test(se))throw Error("Unknown base64 encoding at char: "+se)}return J}q();for(var E=0;;){var b=g(-1),I=g(0),U=g(64),z=g(64);if(z===64&&b===-1)break;d(b<<2|I>>4),U!=64&&(d(I<<4&240|U>>2),z!=64&&d(U<<6&192|z))}}function q(){if(!Y){Y={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var E=l.concat(d[g].split(""));V[g]=E;for(var b=0;b<E.length;b++){var I=E[b];Y[I]===void 0&&(Y[I]=b)}}}}var pe=typeof Uint8Array<"u",ge=!(G("Trident")||G("MSIE"))&&typeof O.btoa=="function";function Me(l){if(!ge){var d;d===void 0&&(d=0),q(),d=V[d];for(var g=Array(Math.floor(l.length/3)),E=d[64]||"",b=0,I=0;b<l.length-2;b+=3){var U=l[b],z=l[b+1],J=l[b+2],se=d[U>>2];U=d[(U&3)<<4|z>>4],z=d[(z&15)<<2|J>>6],J=d[J&63],g[I++]=se+U+z+J}switch(se=0,J=E,l.length-b){case 2:se=l[b+1],J=d[(se&15)<<2]||E;case 1:l=l[b],g[I]=d[l>>2]+d[(l&3)<<4|se>>4]+J+E}return g.join("")}for(d="";10240<l.length;)d+=String.fromCharCode.apply(null,l.subarray(0,10240)),l=l.subarray(10240);return d+=String.fromCharCode.apply(null,l),btoa(d)}var be=RegExp("[-_.]","g");function $e(l){switch(l){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Be(l){if(!ge)return $(l);be.test(l)&&(l=l.replace(be,$e)),l=atob(l);for(var d=new Uint8Array(l.length),g=0;g<l.length;g++)d[g]=l.charCodeAt(g);return d}var Ye;function yt(){return Ye||(Ye=new Uint8Array(0))}var je={},Q=typeof Uint8Array.prototype.slice=="function",at=0,Te=0;function He(l){var d=0>l;l=Math.abs(l);var g=l>>>0;l=Math.floor((l-g)/4294967296),d&&(g=a(Mt(g,l)),d=g.next().value,l=g.next().value,g=d),at=g>>>0,Te=l>>>0}var Ge=typeof BigInt=="function";function Mt(l,d){return d=~d,l?l=~l+1:d+=1,[l,d]}function Ke(l,d){this.i=l>>>0,this.h=d>>>0}function Ze(l){if(!l)return dt||(dt=new Ke(0,0));if(!/^-?\d+$/.test(l))return null;if(16>l.length)He(Number(l));else if(Ge)l=BigInt(l),at=Number(l&BigInt(4294967295))>>>0,Te=Number(l>>BigInt(32)&BigInt(4294967295));else{var d=+(l[0]==="-");Te=at=0;for(var g=l.length,E=d,b=(g-d)%6+d;b<=g;E=b,b+=6)E=Number(l.slice(E,b)),Te*=1e6,at=1e6*at+E,4294967296<=at&&(Te+=at/4294967296|0,at%=4294967296);d&&(d=a(Mt(at,Te)),l=d.next().value,d=d.next().value,at=l,Te=d)}return new Ke(at,Te)}var dt;function Ot(l,d){return Error("Invalid wire type: "+l+" (at position "+d+")")}function kt(){return Error("Failed to read varint, encoding is invalid.")}function N(l,d){return Error("Tried to read past the end of the data "+d+" > "+l)}function A(){throw Error("Invalid UTF8")}function ee(l,d){return d=String.fromCharCode.apply(null,d),l==null?d:l+d}var ue=void 0,ae,he=typeof TextDecoder<"u",Ce,me=typeof TextEncoder<"u",we;function Ie(l){if(l!==je)throw Error("illegal external caller")}function rt(l,d){if(Ie(d),this.V=l,l!=null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}function ce(){return we||(we=new rt(null,je))}function ft(l){Ie(je);var d=l.V;return d=d==null||pe&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?Be(d):null,d==null?d:l.V=d}function Xe(l){if(typeof l=="string")return{buffer:Be(l),C:!1};if(Array.isArray(l))return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Uint8Array)return{buffer:l,C:!1};if(l.constructor===ArrayBuffer)return{buffer:new Uint8Array(l),C:!1};if(l.constructor===rt)return{buffer:ft(l)||yt(),C:!0};if(l instanceof Uint8Array)return{buffer:new Uint8Array(l.buffer,l.byteOffset,l.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Fe(l,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,De(this,l,d)}function De(l,d,g){g=g===void 0?{}:g,l.S=g.S===void 0?!1:g.S,d&&(d=Xe(d),l.i=d.buffer,l.m=d.C,l.l=0,l.j=l.i.length,l.h=l.l)}Fe.prototype.reset=function(){this.h=this.l};function xe(l,d){if(l.h=d,d>l.j)throw N(l.j,d)}function Qe(l){var d=l.i,g=l.h,E=d[g++],b=E&127;if(E&128&&(E=d[g++],b|=(E&127)<<7,E&128&&(E=d[g++],b|=(E&127)<<14,E&128&&(E=d[g++],b|=(E&127)<<21,E&128&&(E=d[g++],b|=E<<28,E&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128)))))throw kt();return xe(l,g),b}function H(l,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var g=l.h,E=g+d;if(E>l.j)throw N(d,l.j-g);return l.h=E,g}var Se=[];function de(){this.h=[]}de.prototype.length=function(){return this.h.length},de.prototype.end=function(){var l=this.h;return this.h=[],l};function oe(l,d,g){for(;0<g||127<d;)l.h.push(d&127|128),d=(d>>>7|g<<25)>>>0,g>>>=7;l.h.push(d)}function fe(l,d){for(;127<d;)l.h.push(d&127|128),d>>>=7;l.h.push(d)}function Ue(l,d){if(Se.length){var g=Se.pop();De(g,l,d),l=g}else l=new Fe(l,d);this.h=l,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}Ue.prototype.setOptions=function(l){l=l===void 0?{}:l,this.ca=l.ca===void 0?!1:l.ca},Ue.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function st(l){var d=l.h;if(d.h==d.j)return!1;l.j=l.h.h;var g=Qe(l.h)>>>0;if(d=g>>>3,g&=7,!(0<=g&&5>=g))throw Ot(g,l.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+l.j+")");return l.l=d,l.i=g,!0}function Et(l){switch(l.i){case 0:if(l.i!=0)Et(l);else e:{l=l.h;for(var d=l.h,g=d+10,E=l.i;d<g;)if(!(E[d++]&128)){xe(l,d);break e}throw kt()}break;case 1:l=l.h,xe(l,l.h+8);break;case 2:l.i!=2?Et(l):(d=Qe(l.h)>>>0,l=l.h,xe(l,l.h+d));break;case 5:l=l.h,xe(l,l.h+4);break;case 3:d=l.l;do{if(!st(l))throw Error("Unmatched start-group tag: stream EOF");if(l.i==4){if(l.l!=d)throw Error("Unmatched end-group tag");break}Et(l)}while(!0);break;default:throw Ot(l.i,l.j)}}var en=[];function mt(){this.j=[],this.i=0,this.h=new de}function It(l,d){d.length!==0&&(l.j.push(d),l.i+=d.length)}function Vn(l,d){if(d=d.R){It(l,l.h.end());for(var g=0;g<d.length;g++)It(l,ft(d[g])||yt())}}var Wn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ei(l,d){return Wn?l[Wn]|=d:l.A!==void 0?l.A|=d:(Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function Tr(l,d){Wn?l[Wn]&&(l[Wn]&=~d):l.A!==void 0&&(l.A&=~d)}function Ct(l){var d;return Wn?d=l[Wn]:d=l.A,d??0}function vn(l,d){Wn?l[Wn]=d:l.A!==void 0?l.A=d:Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function to(l){return Ei(l,1),l}function xa(l,d){vn(d,(l|0)&-51)}function no(l,d){vn(d,(l|18)&-41)}var ds={};function io(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var C,X=[];vn(X,23),C=Object.freeze(X);function te(l){if(Ct(l.o)&2)throw Error("Cannot mutate an immutable Message")}function ie(l){var d=l.length;(d=d?l[d-1]:void 0)&&io(d)?d.g=1:(d={},l.push((d.g=1,d)))}function re(l){var d=l.i+l.G;return l.B||(l.B=l.o[d]={})}function _e(l,d){return d===-1?null:d>=l.i?l.B?l.B[d]:void 0:l.o[d+l.G]}function Ae(l,d,g,E){te(l),Le(l,d,g,E)}function Le(l,d,g,E){l.j&&(l.j=void 0),d>=l.i||E?re(l)[d]=g:(l.o[d+l.G]=g,(l=l.B)&&d in l&&delete l[d])}function Ne(l,d,g,E){var b=_e(l,d);Array.isArray(b)||(b=C);var I=Ct(b);if(I&1||to(b),E)I&2||Ei(b,2),g&1||Object.freeze(b);else{E=!(g&2);var U=I&2;g&1||!U?E&&I&16&&!U&&Tr(b,16):(b=to(Array.prototype.slice.call(b)),Le(l,d,b))}return b}function qe(l,d){var g=_e(l,d),E=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return E!=null&&E!==g&&Le(l,d,E),E}function We(l,d,g,E,b){l.h||(l.h={});var I=l.h[g],U=Ne(l,g,3,b);if(!I){var z=U;I=[];var J=!!(Ct(l.o)&16);U=!!(Ct(z)&2);var se=z;!b&&U&&(z=Array.prototype.slice.call(z));for(var ve=U,Oe=0;Oe<z.length;Oe++){var Pe=z[Oe],Ee=d,ze=!1;if(ze=ze===void 0?!1:ze,Pe=Array.isArray(Pe)?new Ee(Pe):ze?new Ee:void 0,Pe!==void 0){Ee=Pe.o;var et=ze=Ct(Ee);U&&(et|=2),J&&(et|=16),et!=ze&&vn(Ee,et),Ee=et,ve=ve||!!(2&Ee),I.push(Pe)}}return l.h[g]=I,J=Ct(z),d=J|33,d=ve?d&-9:d|8,J!=d&&(ve=z,Object.isFrozen(ve)&&(ve=Array.prototype.slice.call(ve)),vn(ve,d),z=ve),se!==z&&Le(l,g,z),(b||E&&U)&&Ei(I,2),E&&Object.freeze(I),I}return b||(b=Object.isFrozen(I),E&&!b?Object.freeze(I):!E&&b&&(I=Array.prototype.slice.call(I),l.h[g]=I)),I}function Ve(l,d,g){var E=!!(Ct(l.o)&2);if(d=We(l,d,g,E,E),l=Ne(l,g,3,E),!(E||Ct(l)&8)){for(E=0;E<d.length;E++){if(g=d[E],Ct(g.o)&2){var b=gi(g,!1);b.j=g}else b=g;g!==b&&(d[E]=b,l[E]=b.o)}Ei(l,8)}return d}function ut(l,d,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);Ae(l,d,g)}function un(l,d,g,E,b){te(l);var I=We(l,g,d,!1,!1);return g=E??new g,l=Ne(l,d,2,!1),b!=null?(I.splice(b,0,g),l.splice(b,0,g.o)):(I.push(g),l.push(g.o)),g.C()&&Tr(l,8),g}function Lt(l,d){return l??d}function Bt(l,d,g){return g=g===void 0?0:g,Lt(qe(l,d),g)}var _t;function tt(l){switch(typeof l){case"number":return isFinite(l)?l:String(l);case"object":if(l)if(Array.isArray(l)){if(Ct(l)&128)return l=Array.prototype.slice.call(l),ie(l),l}else{if(pe&&l!=null&&l instanceof Uint8Array)return Me(l);if(l instanceof rt){var d=l.V;return d==null?"":typeof d=="string"?d:l.V=Me(d)}}}return l}function ro(l,d,g,E){if(l!=null){if(Array.isArray(l))l=Pt(l,d,g,E!==void 0);else if(io(l)){var b={},I;for(I in l)b[I]=ro(l[I],d,g,E);l=b}else l=d(l,E);return l}}function Pt(l,d,g,E){var b=Ct(l);E=E?!!(b&16):void 0,l=Array.prototype.slice.call(l);for(var I=0;I<l.length;I++)l[I]=ro(l[I],d,g,E);return g(b,l),l}function wi(l){return l.ja===ds?l.toJSON():tt(l)}function Sa(l,d){l&128&&ie(d)}function ji(l,d,g){if(g=g===void 0?no:g,l!=null){if(pe&&l instanceof Uint8Array)return l.length?new rt(new Uint8Array(l),je):ce();if(Array.isArray(l)){var E=Ct(l);return E&2?l:d&&!(E&32)&&(E&16||E===0)?(vn(l,E|2),l):(l=Pt(l,ji,E&4?no:g,!0),d=Ct(l),d&4&&d&2&&Object.freeze(l),l)}return l.ja===ds?qt(l):l}}function oo(l,d,g,E,b,I,U){if(l=l.h&&l.h[g]){if(E=Ct(l),E&2?E=l:(I=j(l,qt),no(E,I),Object.freeze(I),E=I),te(d),U=E==null?C:to([]),E!=null){for(I=!!E.length,l=0;l<E.length;l++){var z=E[l];I=I&&!(Ct(z.o)&2),U[l]=z.o}I=(I?8:0)|1,l=Ct(U),(l&I)!==I&&(Object.isFrozen(U)&&(U=Array.prototype.slice.call(U)),vn(U,l|I)),d.h||(d.h={}),d.h[g]=E}else d.h&&(d.h[g]=void 0);Le(d,g,U,b)}else Ae(d,g,ji(E,I,U),b)}function qt(l){return Ct(l.o)&2||(l=gi(l,!0),Ei(l.o,2)),l}function gi(l,d){var g=l.o,E=[];Ei(E,16);var b=l.constructor.h;if(b&&E.push(b),b=l.B,b){E.length=g.length,E.fill(void 0,E.length,g.length);var I={};E[E.length-1]=I}Ct(g)&128&&ie(E),d=d||l.C()?no:xa,I=l.constructor,_t=E,E=new I(E),_t=void 0,l.R&&(E.R=l.R.slice()),I=!!(Ct(g)&16);for(var U=b?g.length-1:g.length,z=0;z<U;z++)oo(l,E,z-l.G,g[z],!1,I,d);if(b)for(var J in b)oo(l,E,+J,b[J],!0,I,d);return E}function $t(l,d,g){l==null&&(l=_t),_t=void 0;var E=this.constructor.i||0,b=0<E,I=this.constructor.h,U=!1;if(l==null){l=I?[I]:[];var z=48,J=!0;b&&(E=0,z|=128),vn(l,z)}else{if(!Array.isArray(l)||I&&I!==l[0])throw Error();var se=z=Ei(l,0);if((J=(16&se)!==0)&&((U=(32&se)!==0)||(se|=32)),b){if(128&se)E=0;else if(0<l.length){var ve=l[l.length-1];if(io(ve)&&"g"in ve){E=0,se|=128,delete ve.g;var Oe=!0,Pe;for(Pe in ve){Oe=!1;break}Oe&&l.pop()}}}else if(128&se)throw Error();z!==se&&vn(l,se)}this.G=(I?0:-1)-E,this.h=void 0,this.o=l;e:{if(I=this.o.length,E=I-1,I&&(I=this.o[E],io(I))){this.B=I,this.i=E-this.G;break e}d!==void 0&&-1<d?(this.i=Math.max(d,E+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!b&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){d=J&&!U&&!0,b=this.i;var Ee;for(J=0;J<g.length;J++)U=g[J],U<b?(U+=this.G,(E=l[U])?cn(E,d):l[U]=C):(Ee||(Ee=re(this)),(E=Ee[U])?cn(E,d):Ee[U]=C)}}$t.prototype.toJSON=function(){return Pt(this.o,wi,Sa)},$t.prototype.C=function(){return!!(Ct(this.o)&2)};function cn(l,d){if(Array.isArray(l)){var g=Ct(l),E=1;!d||g&2||(E|=16),(g&E)!==E&&vn(l,g|E)}}$t.prototype.ja=ds,$t.prototype.toString=function(){return this.o.toString()};function so(l,d,g){if(g){var E={},b;for(b in g){var I=g[b],U=I.qa;U||(E.J=I.wa||I.oa.W,I.ia?(E.aa=jd(I.ia),U=function(z){return function(J,se,ve){return z.J(J,se,ve,z.aa)}}(E)):I.ka?(E.Z=Xd(I.da.P,I.ka),U=function(z){return function(J,se,ve){return z.J(J,se,ve,z.Z)}}(E)):U=E.J,I.qa=U),U(d,l,I.da),E={J:E.J,aa:E.aa,Z:E.Z}}}Vn(d,l)}var ao=Symbol();function hs(l,d,g){return l[ao]||(l[ao]=function(E,b){return d(E,b,g)})}function Gd(l){var d=l[ao];if(!d){var g=Au(l);d=function(E,b){return Yd(E,b,g)},l[ao]=d}return d}function I0(l){var d=l.ia;if(d)return Gd(d);if(d=l.va)return hs(l.da.P,d,l.ka)}function F0(l){var d=I0(l),g=l.da,E=l.oa.U;return d?function(b,I){return E(b,I,g,d)}:function(b,I){return E(b,I,g)}}function Vd(l,d){var g=l[d];return typeof g=="function"&&g.length===0&&(g=g(),l[d]=g),Array.isArray(g)&&(ms in g||ps in g||0<g.length&&typeof g[0]=="function")?g:void 0}function Wd(l,d,g,E,b,I){d.P=l[0];var U=1;if(l.length>U&&typeof l[U]!="number"){var z=l[U++];g(d,z)}for(;U<l.length;){g=l[U++];for(var J=U+1;J<l.length&&typeof l[J]!="number";)J++;switch(z=l[U++],J-=U,J){case 0:E(d,g,z);break;case 1:(J=Vd(l,U))?(U++,b(d,g,z,J)):E(d,g,z,l[U++]);break;case 2:J=U++,J=Vd(l,J),b(d,g,z,J,l[U++]);break;case 3:I(d,g,z,l[U++],l[U++],l[U++]);break;case 4:I(d,g,z,l[U++],l[U++],l[U++],l[U++]);break;default:throw Error("unexpected number of binary field arguments: "+J)}}return d}var Ma=Symbol();function jd(l){var d=l[Ma];if(!d){var g=Tu(l);d=function(E,b){return qd(E,b,g)},l[Ma]=d}return d}function Xd(l,d){var g=l[Ma];return g||(g=function(E,b){return so(E,b,d)},l[Ma]=g),g}var ps=Symbol();function O0(l,d){l.push(d)}function z0(l,d,g){l.push(d,g.W)}function k0(l,d,g,E){var b=jd(E),I=Tu(E).P,U=g.W;l.push(d,function(z,J,se){return U(z,J,se,I,b)})}function B0(l,d,g,E,b,I){var U=Xd(E,I),z=g.W;l.push(d,function(J,se,ve){return z(J,se,ve,E,U)})}function Tu(l){var d=l[ps];return d||(d=Wd(l,l[ps]=[],O0,z0,k0,B0),ms in l&&ps in l&&(l.length=0),d)}var ms=Symbol();function H0(l,d){l[0]=d}function G0(l,d,g,E){var b=g.U;l[d]=E?function(I,U,z){return b(I,U,z,E)}:b}function V0(l,d,g,E,b){var I=g.U,U=Gd(E),z=Au(E).P;l[d]=function(J,se,ve){return I(J,se,ve,z,U,b)}}function W0(l,d,g,E,b,I,U){var z=g.U,J=hs(E,b,I);l[d]=function(se,ve,Oe){return z(se,ve,Oe,E,J,U)}}function Au(l){var d=l[ms];return d||(d=Wd(l,l[ms]={},H0,G0,V0,W0),ms in l&&ps in l&&(l.length=0),d)}function Yd(l,d,g){for(;st(d)&&d.i!=4;){var E=d.l,b=g[E];if(!b){var I=g[0];I&&(I=I[E])&&(b=g[E]=F0(I))}if(!b||!b(d,l,E)){b=d,E=l,I=b.j,Et(b);var U=b;if(!U.ca){if(b=U.h.h-I,U.h.h=I,U=U.h,b==0)b=ce();else{if(I=H(U,b),U.S&&U.m)b=U.i.subarray(I,I+b);else{U=U.i;var z=I;b=I+b,b=z===b?yt():Q?U.slice(z,b):new Uint8Array(U.subarray(z,b))}b=b.length==0?ce():new rt(b,je)}(I=E.R)?I.push(b):E.R=[b]}}}return l}function qd(l,d,g){for(var E=g.length,b=E%2==1,I=b?1:0;I<E;I+=2)(0,g[I+1])(d,l,g[I]);so(l,d,b?g[0]:void 0)}function gs(l,d){return{U:l,W:d}}var ni=gs(function(l,d,g){if(l.i!==5)return!1;l=l.h;var E=l.i,b=l.h,I=E[b],U=E[b+1],z=E[b+2];return E=E[b+3],xe(l,l.h+4),U=(I<<0|U<<8|z<<16|E<<24)>>>0,l=2*(U>>31)+1,I=U>>>23&255,U&=8388607,Ae(d,g,I==255?U?NaN:1/0*l:I==0?l*Math.pow(2,-149)*U:l*Math.pow(2,I-150)*(U+Math.pow(2,23))),!0},function(l,d,g){if(d=qe(d,g),d!=null){fe(l.h,8*g+5),l=l.h;var E=+d;E===0?0<1/E?at=Te=0:(Te=0,at=2147483648):isNaN(E)?(Te=0,at=2147483647):(E=(g=0>E?-2147483648:0)?-E:E,34028234663852886e22<E?(Te=0,at=(g|2139095040)>>>0):11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),Te=0,at=(g|E)>>>0):(d=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-d),E=Math.round(8388608*E),16777216<=E&&++d,Te=0,at=(g|d+127<<23|E&8388607)>>>0)),g=at,l.h.push(g>>>0&255),l.h.push(g>>>8&255),l.h.push(g>>>16&255),l.h.push(g>>>24&255)}}),j0=gs(function(l,d,g){if(l.i!==0)return!1;var E=l.h,b=0,I=l=0,U=E.i,z=E.h;do{var J=U[z++];b|=(J&127)<<I,I+=7}while(32>I&&J&128);for(32<I&&(l|=(J&127)>>4),I=3;32>I&&J&128;I+=7)J=U[z++],l|=(J&127)<<I;if(xe(E,z),128>J)E=b>>>0,J=l>>>0,(l=J&2147483648)&&(E=~E+1>>>0,J=~J>>>0,E==0&&(J=J+1>>>0)),E=4294967296*J+(E>>>0);else throw kt();return Ae(d,g,l?-E:E),!0},function(l,d,g){d=_e(d,g),d!=null&&(typeof d=="string"&&Ze(d),d!=null&&(fe(l.h,8*g),typeof d=="number"?(l=l.h,He(d),oe(l,at,Te)):(g=Ze(d),oe(l.h,g.i,g.h))))}),X0=gs(function(l,d,g){return l.i!==0?!1:(Ae(d,g,Qe(l.h)),!0)},function(l,d,g){if(d=_e(d,g),d!=null&&d!=null)if(fe(l.h,8*g),l=l.h,g=d,0<=g)fe(l,g);else{for(d=0;9>d;d++)l.h.push(g&127|128),g>>=7;l.h.push(1)}}),$d=gs(function(l,d,g){if(l.i!==2)return!1;var E=Qe(l.h)>>>0;l=l.h;var b=H(l,E);if(l=l.i,he){var I=l,U;(U=ae)||(U=ae=new TextDecoder("utf-8",{fatal:!0})),l=b+E,I=b===0&&l===I.length?I:I.subarray(b,l);try{var z=U.decode(I)}catch(Oe){if(ue===void 0){try{U.decode(new Uint8Array([128]))}catch{}try{U.decode(new Uint8Array([97])),ue=!0}catch{ue=!1}}throw!ue&&(ae=void 0),Oe}}else{z=b,E=z+E,b=[];for(var J=null,se,ve;z<E;)se=l[z++],128>se?b.push(se):224>se?z>=E?A():(ve=l[z++],194>se||(ve&192)!==128?(z--,A()):b.push((se&31)<<6|ve&63)):240>se?z>=E-1?A():(ve=l[z++],(ve&192)!==128||se===224&&160>ve||se===237&&160<=ve||((I=l[z++])&192)!==128?(z--,A()):b.push((se&15)<<12|(ve&63)<<6|I&63)):244>=se?z>=E-2?A():(ve=l[z++],(ve&192)!==128||(se<<28)+(ve-144)>>30||((I=l[z++])&192)!==128||((U=l[z++])&192)!==128?(z--,A()):(se=(se&7)<<18|(ve&63)<<12|(I&63)<<6|U&63,se-=65536,b.push((se>>10&1023)+55296,(se&1023)+56320))):A(),8192<=b.length&&(J=ee(J,b),b.length=0);z=ee(J,b)}return Ae(d,g,z),!0},function(l,d,g){if(d=_e(d,g),d!=null){var E=!1;if(E=E===void 0?!1:E,me){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Ce||(Ce=new TextEncoder)).encode(d)}else{for(var b=0,I=new Uint8Array(3*d.length),U=0;U<d.length;U++){var z=d.charCodeAt(U);if(128>z)I[b++]=z;else{if(2048>z)I[b++]=z>>6|192;else{if(55296<=z&&57343>=z){if(56319>=z&&U<d.length){var J=d.charCodeAt(++U);if(56320<=J&&57343>=J){z=1024*(z-55296)+J-56320+65536,I[b++]=z>>18|240,I[b++]=z>>12&63|128,I[b++]=z>>6&63|128,I[b++]=z&63|128;continue}else U--}if(E)throw Error("Found an unpaired surrogate");z=65533}I[b++]=z>>12|224,I[b++]=z>>6&63|128}I[b++]=z&63|128}}d=b===I.length?I:I.subarray(0,b)}fe(l.h,8*g+2),fe(l.h,d.length),It(l,l.h.end()),It(l,d)}}),Kd=gs(function(l,d,g,E,b){if(l.i!==2)return!1;d=un(d,g,E),g=l.h.j,E=Qe(l.h)>>>0;var I=l.h.h+E,U=I-g;if(0>=U&&(l.h.j=I,b(d,l,void 0,void 0,void 0),U=I-l.h.h),U)throw Error("Message parsing ended unexpectedly. Expected to read "+(E+" bytes, instead read "+(E-U)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return l.h.h=I,l.h.j=g,!0},function(l,d,g,E,b){if(d=Ve(d,E,g),d!=null)for(E=0;E<d.length;E++){var I=l;fe(I.h,8*g+2);var U=I.h.end();It(I,U),U.push(I.i),I=U,b(d[E],l),U=l;var z=I.pop();for(z=U.i+U.h.length()-z;127<z;)I.push(z&127|128),z>>>=7,U.i++;I.push(z),U.i++}});function Ru(l){return function(d,g){e:{if(en.length){var E=en.pop();E.setOptions(g),De(E.h,d,g),d=E}else d=new Ue(d,g);try{var b=Au(l),I=Yd(new b.P,d,b);break e}finally{b=d.h,b.i=null,b.m=!1,b.l=0,b.j=0,b.h=0,b.S=!1,d.l=-1,d.i=-1,100>en.length&&en.push(d)}I=void 0}return I}}function Cu(l){return function(){var d=new mt;qd(this,d,Tu(l)),It(d,d.h.end());for(var g=new Uint8Array(d.i),E=d.j,b=E.length,I=0,U=0;U<b;U++){var z=E[U];g.set(z,I),I+=z.length}return d.j=[g],g}}function lo(l){$t.call(this,l)}v(lo,$t);var Zd=[lo,1,X0,2,ni,3,$d,4,$d];lo.prototype.l=Cu(Zd);function Pu(l){$t.call(this,l,-1,Y0)}v(Pu,$t),Pu.prototype.addClassification=function(l,d){return un(this,1,lo,l,d),this};var Y0=[1],Qd=Ru([Pu,1,Kd,Zd]);function uo(l){$t.call(this,l)}v(uo,$t);var Jd=[uo,1,ni,2,ni,3,ni,4,ni,5,ni];uo.prototype.l=Cu(Jd);function eh(l){$t.call(this,l,-1,q0)}v(eh,$t);var q0=[1],th=Ru([eh,1,Kd,Jd]);function Ea(l){$t.call(this,l)}v(Ea,$t);var nh=[Ea,1,ni,2,ni,3,ni,4,ni,5,ni,6,j0],$0=Ru(nh);Ea.prototype.l=Cu(nh);function ih(l,d,g){if(g=l.createShader(g===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(g,d),l.compileShader(g),!l.getShaderParameter(g,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(g));return g}function rh(l){return Ve(l,lo,1).map(function(d){var g=_e(d,1);return{index:g??0,score:Bt(d,2),label:_e(d,3)!=null?Lt(_e(d,3),""):void 0,displayName:_e(d,4)!=null?Lt(_e(d,4),""):void 0}})}function oh(l){return{x:Bt(l,1),y:Bt(l,2),z:Bt(l,3),visibility:qe(l,4)!=null?Bt(l,4):void 0}}function sh(l){return l.map(function(d){return Ve(th(d),uo,1).map(oh)})}function bu(l,d){this.i=l,this.h=d,this.m=0}function ah(l,d,g){return K0(l,d),typeof l.h.canvas.transferToImageBitmap=="function"?Promise.resolve(l.h.canvas.transferToImageBitmap()):g?Promise.resolve(l.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.h.canvas):(l.j===void 0&&(l.j=document.createElement("canvas")),new Promise(function(E){l.j.height=l.h.canvas.height,l.j.width=l.h.canvas.width,l.j.getContext("2d",{}).drawImage(l.h.canvas,0,0,l.h.canvas.width,l.h.canvas.height),E(l.j)}))}function K0(l,d){var g=l.h;if(l.s===void 0){var E=ih(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),b=ih(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),I=g.createProgram();if(g.attachShader(I,E),g.attachShader(I,b),g.linkProgram(I),!g.getProgramParameter(I,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(I));E=l.s=I,g.useProgram(E),b=g.getUniformLocation(E,"sampler0"),l.l={O:g.getAttribLocation(E,"aVertex"),N:g.getAttribLocation(E,"aTex"),xa:b},l.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.enableVertexAttribArray(l.l.O),g.vertexAttribPointer(l.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),l.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.enableVertexAttribArray(l.l.N),g.vertexAttribPointer(l.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(b,0)}E=l.l,g.useProgram(l.s),g.canvas.width=d.width,g.canvas.height=d.height,g.viewport(0,0,d.width,d.height),g.activeTexture(g.TEXTURE0),l.i.bindTexture2d(d.glName),g.enableVertexAttribArray(E.O),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.vertexAttribPointer(E.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(E.N),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.vertexAttribPointer(E.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(E.O),g.disableVertexAttribArray(E.N),g.bindBuffer(g.ARRAY_BUFFER,null),l.i.bindTexture2d(0)}function Z0(l){this.h=l}var Q0=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function J0(l,d){return d+l}function lh(l,d){window[l]=d}function e_(l){var d=document.createElement("script");return d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),new Promise(function(g){d.addEventListener("load",function(){g()},!1),d.addEventListener("error",function(){g()},!1),document.body.appendChild(d)})}function t_(){return F(function(l){switch(l.h){case 1:return l.s=2,T(l,WebAssembly.instantiate(Q0),4);case 4:l.h=3,l.s=0;break;case 2:return l.s=0,l.l=null,l.return(!1);case 3:return l.return(!0)}})}function Lu(l){if(this.h=l,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=l&&l.locateFile||J0,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,l.options){d=a(Object.keys(l.options));for(var g=d.next();!g.done;g=d.next()){g=g.value;var E=l.options[g].default;E!==void 0&&(this.l[g]=typeof E=="function"?E():E)}}}t=Lu.prototype,t.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function n_(l){var d,g,E,b,I,U,z,J,se,ve,Oe;return F(function(Pe){switch(Pe.h){case 1:return l.ga?(d=l.h.files===void 0?[]:typeof l.h.files=="function"?l.h.files(l.l):l.h.files,T(Pe,t_(),2)):Pe.return();case 2:if(g=Pe.i,typeof window=="object")return lh("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),lh("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),U=d.filter(function(Ee){return Ee.data!==void 0}),z=d.filter(function(Ee){return Ee.data===void 0}),J=Promise.all(U.map(function(Ee){var ze=wa(l,Ee.url);if(Ee.path!==void 0){var et=Ee.path;ze=ze.then(function(wt){return l.overrideFile(et,wt),Promise.resolve(wt)})}return ze})),se=Promise.all(z.map(function(Ee){return Ee.simd===void 0||Ee.simd&&g||!Ee.simd&&!g?e_(l.locateFile(Ee.url,l.ha)):Promise.resolve()})).then(function(){var Ee,ze,et;return F(function(wt){if(wt.h==1)return Ee=window.createMediapipeSolutionsWasm,ze=window.createMediapipeSolutionsPackedAssets,et=l,T(wt,Ee(ze),2);et.i=wt.i,wt.h=0})}),ve=function(){return F(function(Ee){return l.h.graph&&l.h.graph.url?Ee=T(Ee,wa(l,l.h.graph.url),0):(Ee.h=0,Ee=void 0),Ee})}(),T(Pe,Promise.all([se,J,ve]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=d.filter(function(Ee){return Ee.simd===void 0||Ee.simd&&g||!Ee.simd&&!g}).map(function(Ee){return l.locateFile(Ee.url,l.ha)}),importScripts.apply(null,u(E)),b=l,T(Pe,createMediapipeSolutionsWasm(Module),6);case 6:b.i=Pe.i,l.m=new OffscreenCanvas(1,1),l.i.canvas=l.m,I=l.i.GL.createContext(l.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),l.i.GL.makeContextCurrent(I),Pe.h=4;break;case 7:if(l.m=document.createElement("canvas"),Oe=l.m.getContext("webgl2",{}),!Oe&&(Oe=l.m.getContext("webgl",{}),!Oe))return alert("Failed to create WebGL canvas context when passing video frame."),Pe.return();l.K=Oe,l.i.canvas=l.m,l.i.createContext(l.m,!0,!0,{});case 4:l.j=new l.i.SolutionWasm,l.ga=!1,Pe.h=0}})}function i_(l){var d,g,E,b,I,U,z,J;return F(function(se){if(se.h==1){if(l.h.graph&&l.h.graph.url&&l.fa===l.h.graph.url)return se.return();if(l.u=!0,!l.h.graph||!l.h.graph.url){se.h=2;return}return l.fa=l.h.graph.url,T(se,wa(l,l.h.graph.url),3)}for(se.h!=2&&(d=se.i,l.j.loadGraph(d)),g=a(Object.keys(l.D)),E=g.next();!E.done;E=g.next())b=E.value,l.j.overrideFile(b,l.D[b]);if(l.D={},l.h.listeners)for(I=a(l.h.listeners),U=I.next();!U.done;U=I.next())z=U.value,a_(l,z);J=l.l,l.l={},l.setOptions(J),se.h=0})}t.reset=function(){var l=this;return F(function(d){l.j&&(l.j.reset(),l.s={},l.v={}),d.h=0})},t.setOptions=function(l,d){var g=this;if(d=d||this.h.options){for(var E=[],b=[],I={},U=a(Object.keys(l)),z=U.next();!z.done;I={X:I.X,Y:I.Y},z=U.next())if(z=z.value,!(z in this.l&&this.l[z]===l[z])){this.l[z]=l[z];var J=d[z];J!==void 0&&(J.onChange&&(I.X=J.onChange,I.Y=l[z],E.push(function(se){return function(){var ve;return F(function(Oe){if(Oe.h==1)return T(Oe,se.X(se.Y),2);ve=Oe.i,ve===!0&&(g.u=!0),Oe.h=0})}}(I))),J.graphOptionXref&&(z=Object.assign({},{calculatorName:"",calculatorIndex:0},J.graphOptionXref,{valueNumber:J.type===1?l[z]:0,valueBoolean:J.type===0?l[z]:!1,valueString:J.type===2?l[z]:""}),b.push(z)))}(E.length!==0||b.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(b),this.F=(this.F===void 0?[]:this.F).concat(E))}};function r_(l){var d,g,E,b,I,U,z;return F(function(J){switch(J.h){case 1:if(!l.u)return J.return();if(!l.F){J.h=2;break}d=a(l.F),g=d.next();case 3:if(g.done){J.h=5;break}return E=g.value,T(J,E(),4);case 4:g=d.next(),J.h=3;break;case 5:l.F=void 0;case 2:if(l.H){for(b=new l.i.GraphOptionChangeRequestList,I=a(l.H),U=I.next();!U.done;U=I.next())z=U.value,b.push_back(z);l.j.changeOptions(b),b.delete(),l.H=void 0}l.u=!1,J.h=0}})}t.initialize=function(){var l=this;return F(function(d){return d.h==1?T(d,n_(l),2):d.h!=3?T(d,i_(l),3):T(d,r_(l),0)})};function wa(l,d){var g,E;return F(function(b){return d in l.L?b.return(l.L[d]):(g=l.locateFile(d,""),E=fetch(g).then(function(I){return I.arrayBuffer()}),l.L[d]=E,b.return(E))})}t.overrideFile=function(l,d){this.j?this.j.overrideFile(l,d):this.D[l]=d},t.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},t.send=function(l,d){var g=this,E,b,I,U,z,J,se,ve,Oe;return F(function(Pe){switch(Pe.h){case 1:return g.h.inputs?(E=1e3*(d??performance.now()),T(Pe,g.I,2)):Pe.return();case 2:return T(Pe,g.initialize(),3);case 3:for(b=new g.i.PacketDataList,I=a(Object.keys(l)),U=I.next();!U.done;U=I.next())if(z=U.value,J=g.h.inputs[z]){e:{var Ee=l[z];switch(J.type){case"video":var ze=g.s[J.stream];if(ze||(ze=new bu(g.i,g.K),g.s[J.stream]=ze),ze.m===0&&(ze.m=ze.i.createTexture()),typeof HTMLVideoElement<"u"&&Ee instanceof HTMLVideoElement)var et=Ee.videoWidth,wt=Ee.videoHeight;else typeof HTMLImageElement<"u"&&Ee instanceof HTMLImageElement?(et=Ee.naturalWidth,wt=Ee.naturalHeight):(et=Ee.width,wt=Ee.height);wt={glName:ze.m,width:et,height:wt},et=ze.h,et.canvas.width=wt.width,et.canvas.height=wt.height,et.activeTexture(et.TEXTURE0),ze.i.bindTexture2d(ze.m),et.texImage2D(et.TEXTURE_2D,0,et.RGBA,et.RGBA,et.UNSIGNED_BYTE,Ee),ze.i.bindTexture2d(0),ze=wt;break e;case"detections":for(ze=g.s[J.stream],ze||(ze=new Z0(g.i),g.s[J.stream]=ze),ze.data||(ze.data=new ze.h.DetectionListData),ze.data.reset(Ee.length),wt=0;wt<Ee.length;++wt){et=Ee[wt];var xt=ze.data,tn=xt.setBoundingBox,jn=wt,wn=et.la,ct=new Ea;if(ut(ct,1,wn.ra),ut(ct,2,wn.sa),ut(ct,3,wn.height),ut(ct,4,wn.width),ut(ct,5,wn.rotation),Ae(ct,6,wn.pa),wn=ct.l(),tn.call(xt,jn,wn),et.ea)for(xt=0;xt<et.ea.length;++xt){ct=et.ea[xt],tn=ze.data,jn=tn.addNormalizedLandmark,wn=wt,ct=Object.assign({},ct,{visibility:ct.visibility?ct.visibility:0});var nn=new uo;ut(nn,1,ct.x),ut(nn,2,ct.y),ut(nn,3,ct.z),ct.visibility&&ut(nn,4,ct.visibility),ct=nn.l(),jn.call(tn,wn,ct)}if(et.ba)for(xt=0;xt<et.ba.length;++xt)tn=ze.data,jn=tn.addClassification,wn=wt,ct=et.ba[xt],nn=new lo,ut(nn,2,ct.score),ct.index&&Ae(nn,1,ct.index),ct.label&&Ae(nn,3,ct.label),ct.displayName&&Ae(nn,4,ct.displayName),ct=nn.l(),jn.call(tn,wn,ct)}ze=ze.data;break e;default:ze={}}}switch(se=ze,ve=J.stream,J.type){case"video":b.pushTexture2d(Object.assign({},se,{stream:ve,timestamp:E}));break;case"detections":Oe=se,Oe.stream=ve,Oe.timestamp=E,b.pushDetectionList(Oe);break;default:throw Error("Unknown input config type: '"+J.type+"'")}}return g.j.send(b),T(Pe,g.I,4);case 4:b.delete(),Pe.h=0}})};function o_(l,d,g){var E,b,I,U,z,J,se,ve,Oe,Pe,Ee,ze,et,wt;return F(function(xt){switch(xt.h){case 1:if(!g)return xt.return(d);for(E={},b=0,I=a(Object.keys(g)),U=I.next();!U.done;U=I.next())z=U.value,J=g[z],typeof J!="string"&&J.type==="texture"&&d[J.stream]!==void 0&&++b;1<b&&(l.M=!1),se=a(Object.keys(g)),U=se.next();case 2:if(U.done){xt.h=4;break}if(ve=U.value,Oe=g[ve],typeof Oe=="string")return et=E,wt=ve,T(xt,s_(l,ve,d[Oe]),14);if(Pe=d[Oe.stream],Oe.type==="detection_list"){if(Pe){for(var tn=Pe.getRectList(),jn=Pe.getLandmarksList(),wn=Pe.getClassificationsList(),ct=[],nn=0;nn<tn.size();++nn){var Xi=$0(tn.get(nn)),l_=Bt(Xi,1),u_=Bt(Xi,2),c_=Bt(Xi,3),f_=Bt(Xi,4),d_=Bt(Xi,5,0),Ta=void 0;Ta=Ta===void 0?0:Ta,Xi={la:{ra:l_,sa:u_,height:c_,width:f_,rotation:d_,pa:Lt(_e(Xi,6),Ta)},ea:Ve(th(jn.get(nn)),uo,1).map(oh),ba:rh(Qd(wn.get(nn)))},ct.push(Xi)}tn=ct}else tn=[];E[ve]=tn,xt.h=7;break}if(Oe.type==="proto_list"){if(Pe){for(tn=Array(Pe.size()),jn=0;jn<Pe.size();jn++)tn[jn]=Pe.get(jn);Pe.delete()}else tn=[];E[ve]=tn,xt.h=7;break}if(Pe===void 0){xt.h=3;break}if(Oe.type==="float_list"){E[ve]=Pe,xt.h=7;break}if(Oe.type==="proto"){E[ve]=Pe,xt.h=7;break}if(Oe.type!=="texture")throw Error("Unknown output config type: '"+Oe.type+"'");return Ee=l.v[ve],Ee||(Ee=new bu(l.i,l.K),l.v[ve]=Ee),T(xt,ah(Ee,Pe,l.M),13);case 13:ze=xt.i,E[ve]=ze;case 7:Oe.transform&&E[ve]&&(E[ve]=Oe.transform(E[ve])),xt.h=3;break;case 14:et[wt]=xt.i;case 3:U=se.next(),xt.h=2;break;case 4:return xt.return(E)}})}function s_(l,d,g){var E;return F(function(b){return typeof g=="number"||g instanceof Uint8Array||g instanceof l.i.Uint8BlobList?b.return(g):g instanceof l.i.Texture2dDataOut?(E=l.v[d],E||(E=new bu(l.i,l.K),l.v[d]=E),b.return(ah(E,g,l.M))):b.return(void 0)})}function a_(l,d){for(var g=d.name||"$",E=[].concat(u(d.wants)),b=new l.i.StringList,I=a(d.wants),U=I.next();!U.done;U=I.next())b.push_back(U.value);I=l.i.PacketListener.implement({onResults:function(z){for(var J={},se=0;se<d.wants.length;++se)J[E[se]]=z.get(se);var ve=l.listeners[g];ve&&(l.I=o_(l,J,d.outs).then(function(Oe){Oe=ve(Oe);for(var Pe=0;Pe<d.wants.length;++Pe){var Ee=J[E[Pe]];typeof Ee=="object"&&Ee.hasOwnProperty&&Ee.hasOwnProperty("delete")&&Ee.delete()}Oe&&(l.I=Oe)}))}}),l.j.attachMultiListener(b,I),b.delete()}t.onResults=function(l,d){this.listeners[d||"$"]=l},ne("Solution",Lu),ne("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function uh(l){return l===void 0&&(l=0),l===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function ch(l){var d=this;l=l||{},this.h=new Lu({locateFile:l.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:uh(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:sh},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:sh},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(E){return rh(Qd(E))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var E,b,I;return F(function(U){return U.h==1?(E=uh(g),b="third_party/mediapipe/modules/hand_landmark/"+E,T(U,wa(d.h,E),2)):(I=U.i,d.h.overrideFile(b,I),U.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}t=ch.prototype,t.close=function(){return this.h.close(),Promise.resolve()},t.onResults=function(l){this.h.onResults(l)},t.initialize=function(){var l=this;return F(function(d){return T(d,l.h.initialize(),0)})},t.reset=function(){this.h.reset()},t.send=function(l){var d=this;return F(function(g){return T(g,d.h.send(l),0)})},t.setOptions=function(l){this.h.setOptions(l)},ne("Hands",ch),ne("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ne("VERSION","0.4.1675469240")}).call(Go);var pl={};(function(){function t(M){var F=0;return function(){return F<M.length?{done:!1,value:M[F++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(M,F,W){return M==Array.prototype||M==Object.prototype||(M[F]=W.value),M};function n(M){M=[typeof globalThis=="object"&&globalThis,M,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var F=0;F<M.length;++F){var W=M[F];if(W&&W.Math==Math)return W}throw Error("Cannot find global object")}var i=n(this);function r(M,F){if(F)e:{var W=i;M=M.split(".");for(var Z=0;Z<M.length-1;Z++){var O=M[Z];if(!(O in W))break e;W=W[O]}M=M[M.length-1],Z=W[M],F=F(Z),F!=Z&&F!=null&&e(W,M,{configurable:!0,writable:!0,value:F})}}r("Symbol",function(M){function F(ne){if(this instanceof F)throw new TypeError("Symbol is not a constructor");return new W(Z+(ne||"")+"_"+O++,ne)}function W(ne,G){this.g=ne,e(this,"description",{configurable:!0,writable:!0,value:G})}if(M)return M;W.prototype.toString=function(){return this.g};var Z="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",O=0;return F}),r("Symbol.iterator",function(M){if(M)return M;M=Symbol("Symbol.iterator");for(var F="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),W=0;W<F.length;W++){var Z=i[F[W]];typeof Z=="function"&&typeof Z.prototype[M]!="function"&&e(Z.prototype,M,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return M});function o(M){return M={next:M},M[Symbol.iterator]=function(){return this},M}function s(M){var F=typeof Symbol<"u"&&Symbol.iterator&&M[Symbol.iterator];return F?F.call(M):{next:t(M)}}function a(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(M){if(M.i)throw new TypeError("Generator is already running");M.i=!0}a.prototype.l=function(M){this.o=M};function c(M,F){M.h={F,G:!0},M.j=M.m}a.prototype.return=function(M){this.h={return:M},this.j=this.m};function h(M){this.g=new a,this.h=M}function m(M,F){u(M.g);var W=M.g.g;return W?p(M,"return"in W?W.return:function(Z){return{value:Z,done:!0}},F,M.g.return):(M.g.return(F),_(M))}function p(M,F,W,Z){try{var O=F.call(M.g.g,W);if(!(O instanceof Object))throw new TypeError("Iterator result "+O+" is not an object");if(!O.done)return M.g.i=!1,O;var ne=O.value}catch(G){return M.g.g=null,c(M.g,G),_(M)}return M.g.g=null,Z.call(M.g,ne),_(M)}function _(M){for(;M.g.j;)try{var F=M.h(M.g);if(F)return M.g.i=!1,{value:F.value,done:!1}}catch(W){M.g.o=void 0,c(M.g,W)}if(M.g.i=!1,M.g.h){if(F=M.g.h,M.g.h=null,F.G)throw F.F;return{value:F.return,done:!0}}return{value:void 0,done:!0}}function w(M){this.next=function(F){return u(M.g),M.g.g?F=p(M,M.g.g.next,F,M.g.l):(M.g.l(F),F=_(M)),F},this.throw=function(F){return u(M.g),M.g.g?F=p(M,M.g.g.throw,F,M.g.l):(c(M.g,F),F=_(M)),F},this.return=function(F){return m(M,F)},this[Symbol.iterator]=function(){return this}}function y(M){function F(Z){return M.next(Z)}function W(Z){return M.throw(Z)}return new Promise(function(Z,O){function ne(G){G.done?Z(G.value):Promise.resolve(G.value).then(F,W).then(ne,O)}ne(M.next())})}r("Promise",function(M){function F(G){this.h=0,this.i=void 0,this.g=[],this.o=!1;var j=this.j();try{G(j.resolve,j.reject)}catch(V){j.reject(V)}}function W(){this.g=null}function Z(G){return G instanceof F?G:new F(function(j){j(G)})}if(M)return M;W.prototype.h=function(G){if(this.g==null){this.g=[];var j=this;this.i(function(){j.l()})}this.g.push(G)};var O=i.setTimeout;W.prototype.i=function(G){O(G,0)},W.prototype.l=function(){for(;this.g&&this.g.length;){var G=this.g;this.g=[];for(var j=0;j<G.length;++j){var V=G[j];G[j]=null;try{V()}catch(Y){this.j(Y)}}}this.g=null},W.prototype.j=function(G){this.i(function(){throw G})},F.prototype.j=function(){function G(Y){return function($){V||(V=!0,Y.call(j,$))}}var j=this,V=!1;return{resolve:G(this.A),reject:G(this.l)}},F.prototype.A=function(G){if(G===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(G instanceof F)this.C(G);else{e:switch(typeof G){case"object":var j=G!=null;break e;case"function":j=!0;break e;default:j=!1}j?this.v(G):this.m(G)}},F.prototype.v=function(G){var j=void 0;try{j=G.then}catch(V){this.l(V);return}typeof j=="function"?this.D(j,G):this.m(G)},F.prototype.l=function(G){this.u(2,G)},F.prototype.m=function(G){this.u(1,G)},F.prototype.u=function(G,j){if(this.h!=0)throw Error("Cannot settle("+G+", "+j+"): Promise already settled in state"+this.h);this.h=G,this.i=j,this.h===2&&this.B(),this.H()},F.prototype.B=function(){var G=this;O(function(){if(G.I()){var j=i.console;typeof j<"u"&&j.error(G.i)}},1)},F.prototype.I=function(){if(this.o)return!1;var G=i.CustomEvent,j=i.Event,V=i.dispatchEvent;return typeof V>"u"?!0:(typeof G=="function"?G=new G("unhandledrejection",{cancelable:!0}):typeof j=="function"?G=new j("unhandledrejection",{cancelable:!0}):(G=i.document.createEvent("CustomEvent"),G.initCustomEvent("unhandledrejection",!1,!0,G)),G.promise=this,G.reason=this.i,V(G))},F.prototype.H=function(){if(this.g!=null){for(var G=0;G<this.g.length;++G)ne.h(this.g[G]);this.g=null}};var ne=new W;return F.prototype.C=function(G){var j=this.j();G.s(j.resolve,j.reject)},F.prototype.D=function(G,j){var V=this.j();try{G.call(j,V.resolve,V.reject)}catch(Y){V.reject(Y)}},F.prototype.then=function(G,j){function V(q,pe){return typeof q=="function"?function(ge){try{Y(q(ge))}catch(Me){$(Me)}}:pe}var Y,$,B=new F(function(q,pe){Y=q,$=pe});return this.s(V(G,Y),V(j,$)),B},F.prototype.catch=function(G){return this.then(void 0,G)},F.prototype.s=function(G,j){function V(){switch(Y.h){case 1:G(Y.i);break;case 2:j(Y.i);break;default:throw Error("Unexpected state: "+Y.h)}}var Y=this;this.g==null?ne.h(V):this.g.push(V),this.o=!0},F.resolve=Z,F.reject=function(G){return new F(function(j,V){V(G)})},F.race=function(G){return new F(function(j,V){for(var Y=s(G),$=Y.next();!$.done;$=Y.next())Z($.value).s(j,V)})},F.all=function(G){var j=s(G),V=j.next();return V.done?Z([]):new F(function(Y,$){function B(ge){return function(Me){q[ge]=Me,pe--,pe==0&&Y(q)}}var q=[],pe=0;do q.push(void 0),pe++,Z(V.value).s(B(q.length-1),$),V=j.next();while(!V.done)})},F});var v=typeof Object.assign=="function"?Object.assign:function(M,F){for(var W=1;W<arguments.length;W++){var Z=arguments[W];if(Z)for(var O in Z)Object.prototype.hasOwnProperty.call(Z,O)&&(M[O]=Z[O])}return M};r("Object.assign",function(M){return M||v});var f=this||self,x={facingMode:"user",width:640,height:480};function S(M,F){this.video=M,this.i=0,this.h=Object.assign(Object.assign({},x),F)}S.prototype.stop=function(){var M=this,F,W,Z,O;return y(new w(new h(function(ne){if(M.g){for(F=M.g.getTracks(),W=s(F),Z=W.next();!Z.done;Z=W.next())O=Z.value,O.stop();M.g=void 0}ne.j=0})))},S.prototype.start=function(){var M=this,F;return y(new w(new h(function(W){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),F=M.h,W.return(navigator.mediaDevices.getUserMedia({video:{facingMode:F.facingMode,width:F.width,height:F.height}}).then(function(Z){P(M,Z)}).catch(function(Z){var O="Failed to acquire camera feed: "+Z;throw console.error(O),alert(O),Z}))})))};function T(M){window.requestAnimationFrame(function(){D(M)})}function P(M,F){M.g=F,M.video.srcObject=F,M.video.onloadedmetadata=function(){M.video.play(),T(M)}}function D(M){var F=null;M.video.paused||M.video.currentTime===M.i||(M.i=M.video.currentTime,F=M.h.onFrame()),F?F.then(function(){T(M)}):T(M)}var L=["Camera"],k=f;L[0]in k||typeof k.execScript>"u"||k.execScript("var "+L[0]);for(var R;L.length&&(R=L.shift());)L.length||S===void 0?k[R]&&k[R]!==Object.prototype[R]?k=k[R]:k=k[R]={}:k[R]=S}).call(Go);class cA{constructor(e){this.onGestureUpdate=e,this.hands=null,this.camera=null,this.lastHandDistance=null,this.scale=1,this.smoothingFactor=.1,this.debugMode=!0,this.lastGestureTime=Date.now(),this.idleThreshold=3e3}async initialize(e){try{if(console.log("[GestureRecognizer] 开始初始化 MediaPipe Hands..."),!Co.Hands||typeof Co.Hands!="function"){const r="MediaPipe Hands 未正确导入。Hands 类型: "+typeof Co.Hands+", 值: "+Co.Hands;throw console.error("[GestureRecognizer] ❌",r),new Error(r)}console.log("[GestureRecognizer] ✅ Hands 构造函数可用，类型:",typeof Co.Hands);const i=window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1";this.hands=new Co.Hands({locateFile:r=>{const o="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240";let s=r;s.startsWith("/")&&(s=s.substring(1));const a=`${o}/${s}`;return(this.debugMode||i)&&console.log("[GestureRecognizer] 📦 加载 MediaPipe 文件:",r,"->",a,i?"(生产环境)":"(开发环境)"),a}}),this.hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.3,minTrackingConfidence:.3}),this.frameCount=0,this.detectionCount=0,this.hands.onResults(r=>{this.frameCount++;const o=r.multiHandLandmarks?r.multiHandLandmarks.length:0;if(this.debugMode&&this.frameCount%100===0){const s=(this.detectionCount/this.frameCount*100).toFixed(1);console.log(`[MediaPipe] 统计: 总帧数=${this.frameCount}, 检测到=${this.detectionCount}, 检测率=${s}%`)}o>0&&(this.detectionCount++,this.debugMode&&this.frameCount%30===0&&console.log(`[MediaPipe] ✅ 检测到 ${o} 只手`)),this.processResults(r)}),console.log("[GestureRecognizer] MediaPipe Hands 配置完成")}catch(i){throw console.error("[GestureRecognizer] MediaPipe Hands 创建失败:",i),i}const n=window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1";if(e.readyState<2&&await new Promise(i=>{const r=setTimeout(()=>{console.warn("[GestureRecognizer] 视频元数据加载超时，继续初始化"),i()},n?5e3:3e3);e.addEventListener("loadedmetadata",()=>{clearTimeout(r),i()},{once:!0})}),!pl.Camera||typeof pl.Camera!="function")throw new Error("MediaPipe Camera 未正确导入。Camera 类型: "+typeof pl.Camera);this.camera=new pl.Camera(e,{onFrame:async()=>{try{if(e.readyState>=2&&e.videoWidth>0&&this.hands)try{await this.hands.send({image:e})}catch(i){this.debugMode&&Math.random()<.01&&console.warn("[MediaPipe] 发送图像失败（可能资源未加载）:",i.message)}}catch(i){this.debugMode&&Math.random()<.01&&console.warn("[MediaPipe] 帧处理错误:",i.message)}},width:640,height:480});try{await this.camera.start(),console.log("[GestureRecognizer] 摄像头启动成功"),console.log("[GestureRecognizer] 视频尺寸:",e.videoWidth,"x",e.videoHeight)}catch(i){throw console.error("[GestureRecognizer] 摄像头启动失败:",i),i}}processResults(e){if(!e){this.debugMode&&Math.random()<.01&&console.warn("[Gesture] processResults 收到空结果");return}if(e.multiHandLandmarks&&e.multiHandLandmarks.length,e.multiHandLandmarks&&e.multiHandLandmarks.length===2){const n=e.multiHandLandmarks[0],i=e.multiHandLandmarks[1],r=this.getHandCenter(n),o=this.getHandCenter(i),s=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)+Math.pow(r.z-o.z,2));if(this.lastHandDistance!==null){s-this.lastHandDistance;const a=Math.max(.3,Math.min(1.5,s/.5));this.scale=this.scale*(1-this.smoothingFactor)+a*this.smoothingFactor}else this.scale=1;this.lastHandDistance=s,this.lastGestureTime=Date.now(),this.onGestureUpdate&&!isNaN(this.scale)&&isFinite(this.scale)&&this.onGestureUpdate({scale:this.scale,handsDetected:!0,handDistance:s})}else if(e.multiHandLandmarks&&e.multiHandLandmarks.length===1){const n=e.multiHandLandmarks[0],i=n[0],r=n[8];n[9];const o=n[12];n[13];const s=n[16],a=n[20];this.distance3D(r,i),this.distance3D(o,i),this.distance3D(s,i),this.distance3D(a,i),this.distance3D(r,o);const u=this.getHandCenter(n),c=[this.distance3D(r,u),this.distance3D(o,u),this.distance3D(s,u),this.distance3D(a,u)],h=c.reduce((f,x)=>f+x,0)/c.length;this.lastHandDistance===null&&(this.lastHandDistance=h,this.scale=1);const m=Math.max(.05,this.lastHandDistance),p=h/m;Math.abs(h-this.lastHandDistance)>this.lastHandDistance*.1&&(this.lastHandDistance=this.lastHandDistance*.98+h*.02);const y=Math.max(.5,Math.min(2,1+(p-1)*2)),v=.5;this.scale=this.scale*(1-v)+y*v,this.scale=Math.max(.5,Math.min(2,this.scale)),this.debugMode&&(this.debugFrameCount||(this.debugFrameCount=0),this.debugFrameCount++,this.debugFrameCount%5===0&&console.log("[Gesture] ✋ 单手控制:",{avgPalmDistance:h.toFixed(3),baseDistance:m.toFixed(3),distanceRatio:p.toFixed(3),rawScale:y.toFixed(3),currentScale:this.scale.toFixed(3),scaleChange:Math.abs(this.scale-1).toFixed(3),callbackExists:!!this.onGestureUpdate})),this.lastGestureTime=Date.now(),this.onGestureUpdate&&!isNaN(this.scale)&&isFinite(this.scale)?this.onGestureUpdate({scale:this.scale,handsDetected:!0,handDistance:h}):this.debugMode&&Math.random()<.01&&console.warn("[Gesture] 无效的 scale 值或回调函数不存在:",this.scale)}else Date.now()-this.lastGestureTime>this.idleThreshold?this.onGestureUpdate&&this.onGestureUpdate({scale:1,handsDetected:!1,handDistance:0,shouldReset:!0}):(this.scale=1,this.onGestureUpdate&&this.onGestureUpdate({scale:1,handsDetected:!1,handDistance:0,shouldReset:!1}))}getHandCenter(e){const n=e[0],i=e[9];return{x:(n.x+i.x)/2,y:(n.y+i.y)/2,z:(n.z+i.z)/2}}distance3D(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)+Math.pow(e.z-n.z,2))}stop(){this.camera&&this.camera.stop()}}const fA=()=>{console.log("[App] 🎨 App 组件开始渲染");const[t,e]=gt.useState("spring"),[n,i]=gt.useState({scale:1,handsDetected:!1}),[r,o]=gt.useState(null),[s,a]=gt.useState(!1),[u,c]=gt.useState("初始化中..."),h=gt.useRef(null),m=gt.useRef(null),p=gt.useRef("spring");console.log("[App] ✅ App 组件状态初始化完成"),gt.useEffect(()=>{const w=async()=>{try{console.log("[App] 🎬 开始初始化手势识别...");const y=document.createElement("video");if(y.autoplay=!0,y.playsInline=!0,y.style.display="none",y.style.position="fixed",y.style.top="10px",y.style.left="10px",y.style.width="160px",y.style.height="120px",y.style.border="2px solid #4caf50",y.style.borderRadius="8px",y.style.zIndex="10000",y.style.opacity="0",y.style.pointerEvents="none",y.id="camera-preview",document.body.appendChild(y),h.current=y,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Your browser does not support camera access. Please use a modern browser (Chrome, Firefox, Safari, Edge).");const v=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}});y.srcObject=v,await new Promise((D,L)=>{y.onloadedmetadata=()=>{console.log("[App] ✅ 视频元数据加载完成"),console.log("[App] 视频尺寸:",y.videoWidth,"x",y.videoHeight),D()},y.onerror=L,setTimeout(()=>L(new Error("视频加载超时")),5e3)}),await y.play(),console.log("[App] ✅ 摄像头启动，视频流已连接");const f=new cA(D=>{var L,k;if(!D||typeof D!="object"){console.warn("[App] ⚠️ 收到无效的手势数据:",D);return}D.scale!==void 0&&(isNaN(D.scale)||!isFinite(D.scale))&&(console.warn("[App] ⚠️ 无效的 scale 值:",D.scale),D.scale=1),D.handsDetected?console.log("[App] ✅ 手势数据更新:",{scale:((L=D.scale)==null?void 0:L.toFixed(3))||"N/A",handsDetected:D.handsDetected,handDistance:((k=D.handDistance)==null?void 0:k.toFixed(3))||"N/A",scaleChange:Math.abs((D.scale||1)-1).toFixed(3),timestamp:new Date().toLocaleTimeString()}):Math.random()<.05&&console.log("[App] ⚠️ 未检测到手部，请将手放在摄像头前"),i({...D})});console.log("[App] 正在初始化手势识别器...");const x=window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1";console.log("[App] 环境检测:",x?"生产环境 (GitHub Pages)":"开发环境"),c("正在加载 MediaPipe 模型...");const S=x?15e3:1e4,T=f.initialize(y),P=new Promise((D,L)=>setTimeout(()=>L(new Error("MediaPipe 初始化超时")),S));try{await Promise.race([T,P]),m.current=f,c("✅ MediaPipe 已就绪"),console.log("[App] ✅ 手势识别器初始化成功！"),console.log("[App] 💡 提示：将手放在摄像头前，张开/合拢手掌来控制粒子"),console.log("[App] 💡 调试：按 D 键切换摄像头预览显示")}catch(D){console.warn("[App] ⚠️ MediaPipe 初始化失败，但页面继续运行:",D.message),console.warn("[App] 环境:",x?"GitHub Pages":"本地开发"),c("❌ MediaPipe 加载失败")}}catch(y){console.error("[App] ❌ 手势识别初始化失败:",y),y.name==="NotAllowedError"||y.name==="PermissionDeniedError"?o("Camera permission denied. Please click the camera icon in the address bar to allow camera access."):y.name==="NotFoundError"||y.name==="DevicesNotFoundError"?o("Camera device not found. Please ensure a camera is connected."):(console.warn("[App] ⚠️ MediaPipe 加载失败，但页面将继续运行（无手势控制）:",y.message||y.name),c("❌ MediaPipe 加载失败"))}};return setTimeout(()=>{(async()=>{try{await w()}catch(y){console.warn("[App] ⚠️ 手势识别初始化失败（不影响页面）:",y.message),c("❌ MediaPipe 不可用")}})()},3e3),()=>{m.current&&m.current.stop(),h.current&&h.current.srcObject&&(h.current.srcObject.getTracks().forEach(y=>y.stop()),h.current.parentNode&&h.current.parentNode.removeChild(h.current))}},[]);const _=w=>{e(w),p.current=w};return gt.useEffect(()=>{p.current=t},[t]),gt.useEffect(()=>{const w=y=>{(y.key==="d"||y.key==="D")&&a(v=>{const f=!v;return h.current&&(h.current.style.opacity=f?"1":"0",h.current.style.display=f?"block":"none"),f})};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]),console.log("[App] 🎨 开始渲染 JSX，当前场景:",t),console.log("[App] 🎨 开始渲染 JSX，当前场景:",t),nt.jsxs("div",{className:"app-container",style:{background:"#1a1a2e",minHeight:"100vh"},children:[nt.jsx(aA,{currentScene:t,gestureScale:n.scale,gestureData:n}),nt.jsx(lA,{currentScene:t,onSceneChange:_}),nt.jsx(uA,{}),r&&nt.jsxs("div",{className:"camera-error",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(255, 0, 0, 0.9)",color:"white",padding:"20px",borderRadius:"10px",zIndex:1e4,maxWidth:"400px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"},children:[nt.jsx("p",{style:{margin:"0 0 10px 0",fontWeight:"bold"},children:"⚠️ Camera Error"}),nt.jsx("p",{style:{margin:0,fontSize:"14px"},children:r}),nt.jsx("button",{onClick:()=>{o(null),window.location.reload()},style:{marginTop:"15px",padding:"8px 16px",background:"white",color:"#d32f2f",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Reload"})]}),!n.handsDetected&&!r&&nt.jsxs("div",{className:"gesture-hint",children:[nt.jsx("p",{children:"👋 Use hand gestures to control particles"}),nt.jsx("p",{children:"Open/close hands to scale particles"}),nt.jsx("p",{style:{fontSize:"12px",marginTop:"10px",opacity:.8},children:"💡 First-time use requires camera permission"})]}),n.handsDetected&&nt.jsxs("div",{className:"gesture-status",children:[nt.jsxs("p",{children:["✅ Gesture Detected | Scale: ",n.scale.toFixed(2)]}),nt.jsx("p",{style:{fontSize:"10px",marginTop:"4px",opacity:.8},children:"Open hand to zoom in, close hand to zoom out"})]}),nt.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",background:"rgba(0,0,0,0.8)",color:"white",padding:"12px",borderRadius:"8px",fontSize:"11px",zIndex:9999,fontFamily:"monospace",minWidth:"200px"},children:[nt.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",borderBottom:"1px solid #555",paddingBottom:"4px"},children:"🔍 Debug Info"}),nt.jsxs("div",{style:{marginBottom:"4px"},children:["Gesture: ",nt.jsx("span",{style:{color:n.handsDetected?"#4caf50":"#f44336"},children:n.handsDetected?"✅ Yes":"❌ No"})]}),nt.jsxs("div",{style:{marginBottom:"4px"},children:["Scale: ",nt.jsxs("span",{style:{color:Math.abs(n.scale-1)>.1?"#ff9800":"#4caf50",fontWeight:Math.abs(n.scale-1)>.1?"bold":"normal"},children:[n.scale.toFixed(3),Math.abs(n.scale-1)>.1&&" ⚡"]})]}),nt.jsxs("div",{style:{marginBottom:"4px"},children:["Camera: ",nt.jsx("span",{style:{color:r?"#f44336":"#4caf50"},children:r?"❌ Error":"✅ OK"})]}),nt.jsxs("div",{style:{marginBottom:"4px",fontSize:"10px",opacity:.8},children:["MediaPipe: ",nt.jsx("span",{style:{color:"#4caf50"},children:u})]}),nt.jsx("div",{style:{marginTop:"8px",padding:"4px",background:"rgba(76,175,80,0.2)",borderRadius:"4px",fontSize:"9px",opacity:.8},children:"💡 按 D 键切换摄像头预览"}),r&&nt.jsx("div",{style:{marginTop:"8px",padding:"4px",background:"rgba(244,67,54,0.2)",borderRadius:"4px",fontSize:"10px"},children:r})]})]})};console.log("[main.jsx] 🚀 开始加载应用...");console.log("[main.jsx] ✅ 所有模块导入成功");const Fc=document.getElementById("root");if(!Fc)console.error("[main.jsx] ❌ 找不到 #root 元素！"),document.body.innerHTML+='<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; font-size: 24px; z-index: 99999; background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px;">找不到 #root 元素！</div>';else{console.log("[main.jsx] ✅ 找到 #root 元素");try{const t=Oc.createRoot(Fc);console.log("[main.jsx] ✅ React root 创建成功"),t.render(nt.jsx(eg.StrictMode,{children:nt.jsx(fA,{})})),console.log("[main.jsx] ✅ App 组件已渲染")}catch(t){console.error("[main.jsx] ❌ 渲染失败:",t),Fc.innerHTML=`
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; font-size: 24px; z-index: 99999; background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px;">
        <p>❌ React 渲染失败</p>
        <p style="font-size: 14px; margin-top: 10px;">${t.message}</p>
        <p style="font-size: 12px; margin-top: 10px; color: #999;">请查看控制台获取详细信息</p>
      </div>
    `}}
