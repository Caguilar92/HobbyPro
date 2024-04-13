(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vp(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const at={},wo=[],Qn=()=>{},bP=()=>!1,Qu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fp=t=>t.startsWith("onUpdate:"),Kt=Object.assign,Up=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IP=Object.prototype.hasOwnProperty,Le=(t,e)=>IP.call(t,e),pe=Array.isArray,Eo=t=>Yu(t)==="[object Map]",qE=t=>Yu(t)==="[object Set]",Ee=t=>typeof t=="function",Ot=t=>typeof t=="string",Qo=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",zE=t=>(gt(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),KE=Object.prototype.toString,Yu=t=>KE.call(t),AP=t=>Yu(t).slice(8,-1),GE=t=>Yu(t)==="[object Object]",$p=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$a=Vp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},CP=/-(\w)/g,Us=Xu(t=>t.replace(CP,(e,n)=>n?n.toUpperCase():"")),SP=/\B([A-Z])/g,Fr=Xu(t=>t.replace(SP,"-$1").toLowerCase()),Ju=Xu(t=>t.charAt(0).toUpperCase()+t.slice(1)),xd=Xu(t=>t?`on${Ju(t)}`:""),Mi=(t,e)=>!Object.is(t,e),Kc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},lu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cy;const QE=()=>Cy||(Cy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jp(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ot(s)?NP(s):jp(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ot(t)||gt(t))return t}const RP=/;(?![^(]*\))/g,PP=/:([^]+)/,kP=/\/\*[^]*?\*\//g;function NP(t){const e={};return t.replace(kP,"").split(RP).forEach(n=>{if(n){const s=n.split(PP);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bp(t){let e="";if(Ot(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const s=Bp(t[n]);s&&(e+=s+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const OP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DP=Vp(OP);function YE(t){return!!t||t===""}const Vt=t=>Ot(t)?t:t==null?"":pe(t)||gt(t)&&(t.toString===KE||!Ee(t.toString))?JSON.stringify(t,XE,2):String(t),XE=(t,e)=>e&&e.__v_isRef?XE(t,e.value):Eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ld(s,r)+" =>"]=i,n),{})}:qE(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ld(n))}:Qo(e)?Ld(e):gt(e)&&!pe(e)&&!GE(e)?String(e):e,Ld=(t,e="")=>{var n;return Qo(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;class JE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=is,!e&&is&&(this.index=(is.scopes||(is.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=is;try{return is=this,e()}finally{is=n}}}on(){is=this}off(){is=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function xP(t){return new JE(t)}function LP(t,e=is){e&&e.active&&e.effects.push(t)}function MP(){return is}let wr;class Hp{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,LP(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ur();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(VP(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$r()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ki,n=wr;try{return ki=!0,wr=this,this._runnings++,Sy(this),this.fn()}finally{Ry(this),this._runnings--,wr=n,ki=e}}stop(){var e;this.active&&(Sy(this),Ry(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function VP(t){return t.value}function Sy(t){t._trackId++,t._depsLength=0}function Ry(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ZE(t.deps[e],t);t.deps.length=t._depsLength}}function ZE(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ki=!0,If=0;const eT=[];function Ur(){eT.push(ki),ki=!1}function $r(){const t=eT.pop();ki=t===void 0?!0:t}function Wp(){If++}function qp(){for(If--;!If&&Af.length;)Af.shift()()}function tT(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&ZE(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Af=[];function nT(t,e,n){Wp();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Af.push(s.scheduler)))}qp()}const sT=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Cf=new WeakMap,Er=Symbol(""),Sf=Symbol("");function In(t,e,n){if(ki&&wr){let s=Cf.get(t);s||Cf.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=sT(()=>s.delete(n))),tT(wr,i)}}function ti(t,e,n,s,i,r){const o=Cf.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&pe(t)){const l=Number(s);o.forEach((u,h)=>{(h==="length"||!Qo(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":pe(t)?$p(n)&&a.push(o.get("length")):(a.push(o.get(Er)),Eo(t)&&a.push(o.get(Sf)));break;case"delete":pe(t)||(a.push(o.get(Er)),Eo(t)&&a.push(o.get(Sf)));break;case"set":Eo(t)&&a.push(o.get(Er));break}Wp();for(const l of a)l&&nT(l,4);qp()}const FP=Vp("__proto__,__v_isRef,__isVue"),iT=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qo)),Py=UP();function UP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=We(this);for(let r=0,o=this.length;r<o;r++)In(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(We)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ur(),Wp();const s=We(this)[e].apply(this,n);return qp(),$r(),s}}),t}function $P(t){const e=We(this);return In(e,"has",t),e.hasOwnProperty(t)}class rT{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?ZP:cT:r?lT:aT).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=pe(e);if(!i){if(o&&Le(Py,n))return Reflect.get(Py,n,s);if(n==="hasOwnProperty")return $P}const a=Reflect.get(e,n,s);return(Qo(n)?iT.has(n):FP(n))||(i||In(e,"get",n),r)?a:ut(a)?o&&$p(n)?a:a.value:gt(a)?i?hT(a):eh(a):a}}class oT extends rT{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=Do(r);if(!cu(s)&&!Do(s)&&(r=We(r),s=We(s)),!pe(e)&&ut(r)&&!ut(s))return l?!1:(r.value=s,!0)}const o=pe(e)&&$p(n)?Number(n)<e.length:Le(e,n),a=Reflect.set(e,n,s,i);return e===We(i)&&(o?Mi(s,r)&&ti(e,"set",n,s):ti(e,"add",n,s)),a}deleteProperty(e,n){const s=Le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ti(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Qo(n)||!iT.has(n))&&In(e,"has",n),s}ownKeys(e){return In(e,"iterate",pe(e)?"length":Er),Reflect.ownKeys(e)}}class jP extends rT{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const BP=new oT,HP=new jP,WP=new oT(!0),zp=t=>t,Zu=t=>Reflect.getPrototypeOf(t);function Rc(t,e,n=!1,s=!1){t=t.__v_raw;const i=We(t),r=We(e);n||(Mi(e,r)&&In(i,"get",e),In(i,"get",r));const{has:o}=Zu(i),a=s?zp:n?Yp:rl;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Pc(t,e=!1){const n=this.__v_raw,s=We(n),i=We(t);return e||(Mi(t,i)&&In(s,"has",t),In(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function kc(t,e=!1){return t=t.__v_raw,!e&&In(We(t),"iterate",Er),Reflect.get(t,"size",t)}function ky(t){t=We(t);const e=We(this);return Zu(e).has.call(e,t)||(e.add(t),ti(e,"add",t,t)),this}function Ny(t,e){e=We(e);const n=We(this),{has:s,get:i}=Zu(n);let r=s.call(n,t);r||(t=We(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Mi(e,o)&&ti(n,"set",t,e):ti(n,"add",t,e),this}function Oy(t){const e=We(this),{has:n,get:s}=Zu(e);let i=n.call(e,t);i||(t=We(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ti(e,"delete",t,void 0),r}function Dy(){const t=We(this),e=t.size!==0,n=t.clear();return e&&ti(t,"clear",void 0,void 0),n}function Nc(t,e){return function(s,i){const r=this,o=r.__v_raw,a=We(o),l=e?zp:t?Yp:rl;return!t&&In(a,"iterate",Er),o.forEach((u,h)=>s.call(i,l(u),l(h),r))}}function Oc(t,e,n){return function(...s){const i=this.__v_raw,r=We(i),o=Eo(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...s),h=n?zp:e?Yp:rl;return!e&&In(r,"iterate",l?Sf:Er),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function _i(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qP(){const t={get(r){return Rc(this,r)},get size(){return kc(this)},has:Pc,add:ky,set:Ny,delete:Oy,clear:Dy,forEach:Nc(!1,!1)},e={get(r){return Rc(this,r,!1,!0)},get size(){return kc(this)},has:Pc,add:ky,set:Ny,delete:Oy,clear:Dy,forEach:Nc(!1,!0)},n={get(r){return Rc(this,r,!0)},get size(){return kc(this,!0)},has(r){return Pc.call(this,r,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:Nc(!0,!1)},s={get(r){return Rc(this,r,!0,!0)},get size(){return kc(this,!0)},has(r){return Pc.call(this,r,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:Nc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oc(r,!1,!1),n[r]=Oc(r,!0,!1),e[r]=Oc(r,!1,!0),s[r]=Oc(r,!0,!0)}),[t,n,e,s]}const[zP,KP,GP,QP]=qP();function Kp(t,e){const n=e?t?QP:GP:t?KP:zP;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Le(n,i)&&i in s?n:s,i,r)}const YP={get:Kp(!1,!1)},XP={get:Kp(!1,!0)},JP={get:Kp(!0,!1)},aT=new WeakMap,lT=new WeakMap,cT=new WeakMap,ZP=new WeakMap;function ek(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tk(t){return t.__v_skip||!Object.isExtensible(t)?0:ek(AP(t))}function eh(t){return Do(t)?t:Gp(t,!1,BP,YP,aT)}function uT(t){return Gp(t,!1,WP,XP,lT)}function hT(t){return Gp(t,!0,HP,JP,cT)}function Gp(t,e,n,s,i){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=tk(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function To(t){return Do(t)?To(t.__v_raw):!!(t&&t.__v_isReactive)}function Do(t){return!!(t&&t.__v_isReadonly)}function cu(t){return!!(t&&t.__v_isShallow)}function dT(t){return To(t)||Do(t)}function We(t){const e=t&&t.__v_raw;return e?We(e):t}function Qp(t){return Object.isExtensible(t)&&lu(t,"__v_skip",!0),t}const rl=t=>gt(t)?eh(t):t,Yp=t=>gt(t)?hT(t):t;class fT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Hp(()=>e(this._value),()=>Gc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=We(this);return(!e._cacheable||e.effect.dirty)&&Mi(e._value,e._value=e.effect.run())&&Gc(e,4),pT(e),e.effect._dirtyLevel>=2&&Gc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function nk(t,e,n=!1){let s,i;const r=Ee(t);return r?(s=t,i=Qn):(s=t.get,i=t.set),new fT(s,i,r||!i,n)}function pT(t){var e;ki&&wr&&(t=We(t),tT(wr,(e=t.dep)!=null?e:t.dep=sT(()=>t.dep=void 0,t instanceof fT?t:void 0)))}function Gc(t,e=4,n){t=We(t);const s=t.dep;s&&nT(s,e)}function ut(t){return!!(t&&t.__v_isRef===!0)}function ze(t){return mT(t,!1)}function sk(t){return mT(t,!0)}function mT(t,e){return ut(t)?t:new ik(t,e)}class ik{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:We(e),this._value=n?e:rl(e)}get value(){return pT(this),this._value}set value(e){const n=this.__v_isShallow||cu(e)||Do(e);e=n?e:We(e),Mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rl(e),Gc(this,4))}}function ht(t){return ut(t)?t.value:t}const rk={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ut(i)&&!ut(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function gT(t){return To(t)?t:new Proxy(t,rk)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,s){try{return s?t(...s):t()}catch(i){th(i,e,n)}}function cs(t,e,n,s){if(Ee(t)){const r=Ni(t,e,n,s);return r&&zE(r)&&r.catch(o=>{th(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(cs(t[r],e,n,s));return i}function th(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ni(l,null,10,[t,o,a]);return}}ok(t,n,i,s)}function ok(t,e,n,s=!0){console.error(t)}let ol=!1,Rf=!1;const en=[];let Is=0;const bo=[];let wi=null,ur=0;const _T=Promise.resolve();let Xp=null;function yT(t){const e=Xp||_T;return t?e.then(this?t.bind(this):t):e}function ak(t){let e=Is+1,n=en.length;for(;e<n;){const s=e+n>>>1,i=en[s],r=al(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Jp(t){(!en.length||!en.includes(t,ol&&t.allowRecurse?Is+1:Is))&&(t.id==null?en.push(t):en.splice(ak(t.id),0,t),vT())}function vT(){!ol&&!Rf&&(Rf=!0,Xp=_T.then(ET))}function lk(t){const e=en.indexOf(t);e>Is&&en.splice(e,1)}function ck(t){pe(t)?bo.push(...t):(!wi||!wi.includes(t,t.allowRecurse?ur+1:ur))&&bo.push(t),vT()}function xy(t,e,n=ol?Is+1:0){for(;n<en.length;n++){const s=en[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;en.splice(n,1),n--,s()}}}function wT(t){if(bo.length){const e=[...new Set(bo)].sort((n,s)=>al(n)-al(s));if(bo.length=0,wi){wi.push(...e);return}for(wi=e,ur=0;ur<wi.length;ur++)wi[ur]();wi=null,ur=0}}const al=t=>t.id==null?1/0:t.id,uk=(t,e)=>{const n=al(t)-al(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ET(t){Rf=!1,ol=!0,en.sort(uk);try{for(Is=0;Is<en.length;Is++){const e=en[Is];e&&e.active!==!1&&Ni(e,null,14)}}finally{Is=0,en.length=0,wT(),ol=!1,Xp=null,(en.length||bo.length)&&ET()}}function hk(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||at;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:m}=s[h]||at;m&&(i=n.map(_=>Ot(_)?_.trim():_)),f&&(i=n.map(bf))}let a,l=s[a=xd(e)]||s[a=xd(Us(e))];!l&&r&&(l=s[a=xd(Fr(e))]),l&&cs(l,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,cs(u,t,6,i)}}function TT(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Ee(t)){const l=u=>{const h=TT(u,e,!0);h&&(a=!0,Kt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(gt(t)&&s.set(t,null),null):(pe(r)?r.forEach(l=>o[l]=null):Kt(o,r),gt(t)&&s.set(t,o),o)}function nh(t,e){return!t||!Qu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,Fr(e))||Le(t,e))}let Tn=null,sh=null;function uu(t){const e=Tn;return Tn=t,sh=t&&t.type.__scopeId||null,e}function jr(t){sh=t}function Br(){sh=null}function Be(t,e=Tn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&qy(-1);const r=uu(e);let o;try{o=t(...i)}finally{uu(r),s._d&&qy(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Md(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:h,renderCache:f,data:m,setupState:_,ctx:b,inheritAttrs:C}=t;let I,O;const D=uu(t);try{if(n.shapeFlag&4){const J=i||s,Ae=J;I=bs(h.call(Ae,J,f,r,_,m,b)),O=l}else{const J=e;I=bs(J.length>1?J(r,{attrs:l,slots:a,emit:u}):J(r,null)),O=e.props?l:dk(l)}}catch(J){Wa.length=0,th(J,t,1),I=le(Ar)}let B=I;if(O&&C!==!1){const J=Object.keys(O),{shapeFlag:Ae}=B;J.length&&Ae&7&&(o&&J.some(Fp)&&(O=fk(O,o)),B=xo(B,O))}return n.dirs&&(B=xo(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),I=B,uu(D),I}const dk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qu(n))&&((e||(e={}))[n]=t[n]);return e},fk=(t,e)=>{const n={};for(const s in t)(!Fp(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pk(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ly(s,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!nh(u,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ly(s,o,u):!0:!!o;return!1}function Ly(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!nh(n,r))return!0}return!1}function mk({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bT="components";function Bi(t,e){return _k(bT,t,!0,e)||t}const gk=Symbol.for("v-ndc");function _k(t,e,n=!0,s=!1){const i=Tn||tn;if(i){const r=i.type;if(t===bT){const a=c1(r,!1);if(a&&(a===e||a===Us(e)||a===Ju(Us(e))))return r}const o=My(i[t]||r[t],e)||My(i.appContext[t],e);return!o&&s?r:o}}function My(t,e){return t&&(t[e]||t[Us(e)]||t[Ju(Us(e))])}const yk=t=>t.__isSuspense;function vk(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):ck(t)}const wk=Symbol.for("v-scx"),Ek=()=>Os(wk),Dc={};function ja(t,e,n){return IT(t,e,n)}function IT(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=at){if(e&&r){const W=e;e=(...me)=>{W(...me),Ae()}}const l=tn,u=W=>s===!0?W:fr(W,s===!1?1:void 0);let h,f=!1,m=!1;if(ut(t)?(h=()=>t.value,f=cu(t)):To(t)?(h=()=>u(t),f=!0):pe(t)?(m=!0,f=t.some(W=>To(W)||cu(W)),h=()=>t.map(W=>{if(ut(W))return W.value;if(To(W))return u(W);if(Ee(W))return Ni(W,l,2)})):Ee(t)?e?h=()=>Ni(t,l,2):h=()=>(_&&_(),cs(t,l,3,[b])):h=Qn,e&&s){const W=h;h=()=>fr(W())}let _,b=W=>{_=B.onStop=()=>{Ni(W,l,4),_=B.onStop=void 0}},C;if(ah)if(b=Qn,e?n&&cs(e,l,3,[h(),m?[]:void 0,b]):h(),i==="sync"){const W=Ek();C=W.__watcherHandles||(W.__watcherHandles=[])}else return Qn;let I=m?new Array(t.length).fill(Dc):Dc;const O=()=>{if(!(!B.active||!B.dirty))if(e){const W=B.run();(s||f||(m?W.some((me,ue)=>Mi(me,I[ue])):Mi(W,I)))&&(_&&_(),cs(e,l,3,[W,I===Dc?void 0:m&&I[0]===Dc?[]:I,b]),I=W)}else B.run()};O.allowRecurse=!!e;let D;i==="sync"?D=O:i==="post"?D=()=>wn(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),D=()=>Jp(O));const B=new Hp(h,Qn,D),J=MP(),Ae=()=>{B.stop(),J&&Up(J.effects,B)};return e?n?O():I=B.run():i==="post"?wn(B.run.bind(B),l&&l.suspense):B.run(),C&&C.push(Ae),Ae}function Tk(t,e,n){const s=this.proxy,i=Ot(t)?t.includes(".")?AT(s,t):()=>s[t]:t.bind(s,s);let r;Ee(e)?r=e:(r=e.handler,n=e);const o=Ol(this),a=IT(i,r.bind(s),n);return o(),a}function AT(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fr(t,e,n=0,s){if(!gt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),ut(t))fr(t.value,e,n,s);else if(pe(t))for(let i=0;i<t.length;i++)fr(t[i],e,n,s);else if(qE(t)||Eo(t))t.forEach(i=>{fr(i,e,n,s)});else if(GE(t))for(const i in t)fr(t[i],e,n,s);return t}function gn(t,e){if(Tn===null)return t;const n=lh(Tn)||Tn.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=at]=e[i];r&&(Ee(r)&&(r={mounted:r,updated:r}),r.deep&&fr(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function or(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ur(),cs(l,n,8,[t.el,a,t,e]),$r())}}/*! #__NO_SIDE_EFFECTS__ */function CT(t,e){return Ee(t)?Kt({name:t.name},e,{setup:t}):t}const Qc=t=>!!t.type.__asyncLoader,ST=t=>t.type.__isKeepAlive;function bk(t,e){RT(t,"a",e)}function Ik(t,e){RT(t,"da",e)}function RT(t,e,n=tn){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ih(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ST(i.parent.vnode)&&Ak(s,e,n,i),i=i.parent}}function Ak(t,e,n,s){const i=ih(e,t,s,!0);PT(()=>{Up(s[e],i)},n)}function ih(t,e,n=tn,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ur();const a=Ol(n),l=cs(e,n,t,o);return a(),$r(),l});return s?i.unshift(r):i.push(r),r}}const li=t=>(e,n=tn)=>(!ah||t==="sp")&&ih(t,(...s)=>e(...s),n),Ck=li("bm"),Nl=li("m"),Sk=li("bu"),Rk=li("u"),Pk=li("bum"),PT=li("um"),kk=li("sp"),Nk=li("rtg"),Ok=li("rtc");function Dk(t,e=tn){ih("ec",t,e)}function hu(t,e,n,s){let i;const r=n&&n[s];if(pe(t)||Ot(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(gt(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Pf=t=>t?BT(t)?lh(t)||t.proxy:Pf(t.parent):null,Ba=Kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pf(t.parent),$root:t=>Pf(t.root),$emit:t=>t.emit,$options:t=>Zp(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Jp(t.update)}),$nextTick:t=>t.n||(t.n=yT.bind(t.proxy)),$watch:t=>Tk.bind(t)}),Vd=(t,e)=>t!==at&&!t.__isScriptSetup&&Le(t,e),xk={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Vd(s,e))return o[e]=1,s[e];if(i!==at&&Le(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,r[e];if(n!==at&&Le(n,e))return o[e]=4,n[e];kf&&(o[e]=0)}}const h=Ba[e];let f,m;if(h)return e==="$attrs"&&In(t,"get",e),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==at&&Le(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Le(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Vd(i,e)?(i[e]=n,!0):s!==at&&Le(s,e)?(s[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==at&&Le(t,o)||Vd(e,o)||(a=r[0])&&Le(a,o)||Le(s,o)||Le(Ba,o)||Le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vy(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kf=!0;function Lk(t){const e=Zp(t),n=t.proxy,s=t.ctx;kf=!1,e.beforeCreate&&Fy(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:_,updated:b,activated:C,deactivated:I,beforeDestroy:O,beforeUnmount:D,destroyed:B,unmounted:J,render:Ae,renderTracked:W,renderTriggered:me,errorCaptured:ue,serverPrefetch:qe,expose:bt,inheritAttrs:Fn,components:ps,directives:An,filters:fi}=e;if(u&&Mk(u,s,null),o)for(const Ve in o){const Fe=o[Ve];Ee(Fe)&&(s[Ve]=Fe.bind(n))}if(i){const Ve=i.call(n,n);gt(Ve)&&(t.data=eh(Ve))}if(kf=!0,r)for(const Ve in r){const Fe=r[Ve],Un=Ee(Fe)?Fe.bind(n,n):Ee(Fe.get)?Fe.get.bind(n,n):Qn,x=!Ee(Fe)&&Ee(Fe.set)?Fe.set.bind(n):Qn,vn=zn({get:Un,set:x});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>vn.value,set:$t=>vn.value=$t})}if(a)for(const Ve in a)kT(a[Ve],s,n,Ve);if(l){const Ve=Ee(l)?l.call(n):l;Reflect.ownKeys(Ve).forEach(Fe=>{Yc(Fe,Ve[Fe])})}h&&Fy(h,t,"c");function It(Ve,Fe){pe(Fe)?Fe.forEach(Un=>Ve(Un.bind(n))):Fe&&Ve(Fe.bind(n))}if(It(Ck,f),It(Nl,m),It(Sk,_),It(Rk,b),It(bk,C),It(Ik,I),It(Dk,ue),It(Ok,W),It(Nk,me),It(Pk,D),It(PT,J),It(kk,qe),pe(bt))if(bt.length){const Ve=t.exposed||(t.exposed={});bt.forEach(Fe=>{Object.defineProperty(Ve,Fe,{get:()=>n[Fe],set:Un=>n[Fe]=Un})})}else t.exposed||(t.exposed={});Ae&&t.render===Qn&&(t.render=Ae),Fn!=null&&(t.inheritAttrs=Fn),ps&&(t.components=ps),An&&(t.directives=An)}function Mk(t,e,n=Qn){pe(t)&&(t=Nf(t));for(const s in t){const i=t[s];let r;gt(i)?"default"in i?r=Os(i.from||s,i.default,!0):r=Os(i.from||s):r=Os(i),ut(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Fy(t,e,n){cs(pe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kT(t,e,n,s){const i=s.includes(".")?AT(n,s):()=>n[s];if(Ot(t)){const r=e[t];Ee(r)&&ja(i,r)}else if(Ee(t))ja(i,t.bind(n));else if(gt(t))if(pe(t))t.forEach(r=>kT(r,e,n,s));else{const r=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(r)&&ja(i,r,t)}}function Zp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(u=>du(l,u,o,!0)),du(l,e,o)),gt(e)&&r.set(e,l),l}function du(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&du(t,r,n,!0),i&&i.forEach(o=>du(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Vk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vk={data:Uy,props:$y,emits:$y,methods:ka,computed:ka,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:ka,directives:ka,watch:Uk,provide:Uy,inject:Fk};function Uy(t,e){return e?t?function(){return Kt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function Fk(t,e){return ka(Nf(t),Nf(e))}function Nf(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mn(t,e){return t?[...new Set([].concat(t,e))]:e}function ka(t,e){return t?Kt(Object.create(null),t,e):e}function $y(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:Kt(Object.create(null),Vy(t),Vy(e??{})):e}function Uk(t,e){if(!t)return e;if(!e)return t;const n=Kt(Object.create(null),t);for(const s in e)n[s]=mn(t[s],e[s]);return n}function NT(){return{app:null,config:{isNativeTag:bP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $k=0;function jk(t,e){return function(s,i=null){Ee(s)||(s=Kt({},s)),i!=null&&!gt(i)&&(i=null);const r=NT(),o=new WeakSet;let a=!1;const l=r.app={_uid:$k++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:h1,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ee(u.install)?(o.add(u),u.install(l,...h)):Ee(u)&&(o.add(u),u(l,...h))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,h){return h?(r.components[u]=h,l):r.components[u]},directive(u,h){return h?(r.directives[u]=h,l):r.directives[u]},mount(u,h,f){if(!a){const m=le(s,i);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(m,u):t(m,u,f),a=!0,l._container=u,u.__vue_app__=l,lh(m.component)||m.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return r.provides[u]=h,l},runWithContext(u){const h=Ha;Ha=l;try{return u()}finally{Ha=h}}};return l}}let Ha=null;function Yc(t,e){if(tn){let n=tn.provides;const s=tn.parent&&tn.parent.provides;s===n&&(n=tn.provides=Object.create(s)),n[t]=e}}function Os(t,e,n=!1){const s=tn||Tn;if(s||Ha){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ha._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ee(e)?e.call(s&&s.proxy):e}}function Bk(t,e,n,s=!1){const i={},r={};lu(r,oh,1),t.propsDefaults=Object.create(null),OT(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uT(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Hk(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=We(i),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(nh(t.emitsOptions,m))continue;const _=e[m];if(l)if(Le(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const b=Us(m);i[b]=Of(l,a,b,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{OT(t,e,i,r)&&(u=!0);let h;for(const f in a)(!e||!Le(e,f)&&((h=Fr(f))===f||!Le(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=Of(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Le(e,f))&&(delete r[f],u=!0)}u&&ti(t,"set","$attrs")}function OT(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($a(l))continue;const u=e[l];let h;i&&Le(i,h=Us(l))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:nh(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=We(n),u=a||at;for(let h=0;h<r.length;h++){const f=r[h];n[f]=Of(i,l,f,u[f],t,!Le(u,f))}}return o}function Of(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(l)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=Ol(i);s=u[n]=l.call(null,e),h()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Fr(n))&&(s=!0))}return s}function DT(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Ee(t)){const h=f=>{l=!0;const[m,_]=DT(f,e,!0);Kt(o,m),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return gt(t)&&s.set(t,wo),wo;if(pe(r))for(let h=0;h<r.length;h++){const f=Us(r[h]);jy(f)&&(o[f]=at)}else if(r)for(const h in r){const f=Us(h);if(jy(f)){const m=r[h],_=o[f]=pe(m)||Ee(m)?{type:m}:Kt({},m);if(_){const b=Wy(Boolean,_.type),C=Wy(String,_.type);_[0]=b>-1,_[1]=C<0||b<C,(b>-1||Le(_,"default"))&&a.push(f)}}}const u=[o,a];return gt(t)&&s.set(t,u),u}function jy(t){return t[0]!=="$"&&!$a(t)}function By(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Hy(t,e){return By(t)===By(e)}function Wy(t,e){return pe(e)?e.findIndex(n=>Hy(n,t)):Ee(e)&&Hy(e,t)?0:-1}const xT=t=>t[0]==="_"||t==="$stable",em=t=>pe(t)?t.map(bs):[bs(t)],Wk=(t,e,n)=>{if(e._n)return e;const s=Be((...i)=>em(e(...i)),n);return s._c=!1,s},LT=(t,e,n)=>{const s=t._ctx;for(const i in t){if(xT(i))continue;const r=t[i];if(Ee(r))e[i]=Wk(i,r,s);else if(r!=null){const o=em(r);e[i]=()=>o}}},MT=(t,e)=>{const n=em(e);t.slots.default=()=>n},qk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=We(e),lu(e,"_",n)):LT(e,t.slots={})}else t.slots={},e&&MT(t,e);lu(t.slots,oh,1)},zk=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=at;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Kt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,LT(e,i)),o=e}else e&&(MT(t,e),o={default:1});if(r)for(const a in i)!xT(a)&&o[a]==null&&delete i[a]};function Df(t,e,n,s,i=!1){if(pe(t)){t.forEach((m,_)=>Df(m,e&&(pe(e)?e[_]:e),n,s,i));return}if(Qc(s)&&!i)return;const r=s.shapeFlag&4?lh(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,u=e&&e.r,h=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ot(u)?(h[u]=null,Le(f,u)&&(f[u]=null)):ut(u)&&(u.value=null)),Ee(l))Ni(l,a,12,[o,h]);else{const m=Ot(l),_=ut(l);if(m||_){const b=()=>{if(t.f){const C=m?Le(f,l)?f[l]:h[l]:l.value;i?pe(C)&&Up(C,r):pe(C)?C.includes(r)||C.push(r):m?(h[l]=[r],Le(f,l)&&(f[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else m?(h[l]=o,Le(f,l)&&(f[l]=o)):_&&(l.value=o,t.k&&(h[t.k]=o))};o?(b.id=-1,wn(b,n)):b()}}}const wn=vk;function Kk(t){return Gk(t)}function Gk(t,e){const n=QE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:_=Qn,insertStaticContent:b}=t,C=(y,w,A,N=null,P=null,$=null,Q=void 0,U=null,H=!!w.dynamicChildren)=>{if(y===w)return;y&&!ya(y,w)&&(N=k(y),$t(y,P,$,!0),y=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:F,ref:X,shapeFlag:ie}=w;switch(F){case rh:I(y,w,A,N);break;case Ar:O(y,w,A,N);break;case Xc:y==null&&D(w,A,N,Q);break;case Pt:ps(y,w,A,N,P,$,Q,U,H);break;default:ie&1?Ae(y,w,A,N,P,$,Q,U,H):ie&6?An(y,w,A,N,P,$,Q,U,H):(ie&64||ie&128)&&F.process(y,w,A,N,P,$,Q,U,H,ne)}X!=null&&P&&Df(X,y&&y.ref,$,w||y,!w)},I=(y,w,A,N)=>{if(y==null)s(w.el=a(w.children),A,N);else{const P=w.el=y.el;w.children!==y.children&&u(P,w.children)}},O=(y,w,A,N)=>{y==null?s(w.el=l(w.children||""),A,N):w.el=y.el},D=(y,w,A,N)=>{[y.el,y.anchor]=b(y.children,w,A,N,y.el,y.anchor)},B=({el:y,anchor:w},A,N)=>{let P;for(;y&&y!==w;)P=m(y),s(y,A,N),y=P;s(w,A,N)},J=({el:y,anchor:w})=>{let A;for(;y&&y!==w;)A=m(y),i(y),y=A;i(w)},Ae=(y,w,A,N,P,$,Q,U,H)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),y==null?W(w,A,N,P,$,Q,U,H):qe(y,w,P,$,Q,U,H)},W=(y,w,A,N,P,$,Q,U)=>{let H,F;const{props:X,shapeFlag:ie,transition:te,dirs:ce}=y;if(H=y.el=o(y.type,$,X&&X.is,X),ie&8?h(H,y.children):ie&16&&ue(y.children,H,null,N,P,Fd(y,$),Q,U),ce&&or(y,null,N,"created"),me(H,y,y.scopeId,Q,N),X){for(const Re in X)Re!=="value"&&!$a(Re)&&r(H,Re,null,X[Re],$,y.children,N,P,Je);"value"in X&&r(H,"value",null,X.value,$),(F=X.onVnodeBeforeMount)&&Ts(F,N,y)}ce&&or(y,null,N,"beforeMount");const we=Qk(P,te);we&&te.beforeEnter(H),s(H,w,A),((F=X&&X.onVnodeMounted)||we||ce)&&wn(()=>{F&&Ts(F,N,y),we&&te.enter(H),ce&&or(y,null,N,"mounted")},P)},me=(y,w,A,N,P)=>{if(A&&_(y,A),N)for(let $=0;$<N.length;$++)_(y,N[$]);if(P){let $=P.subTree;if(w===$){const Q=P.vnode;me(y,Q,Q.scopeId,Q.slotScopeIds,P.parent)}}},ue=(y,w,A,N,P,$,Q,U,H=0)=>{for(let F=H;F<y.length;F++){const X=y[F]=U?Ei(y[F]):bs(y[F]);C(null,X,w,A,N,P,$,Q,U)}},qe=(y,w,A,N,P,$,Q)=>{const U=w.el=y.el;let{patchFlag:H,dynamicChildren:F,dirs:X}=w;H|=y.patchFlag&16;const ie=y.props||at,te=w.props||at;let ce;if(A&&ar(A,!1),(ce=te.onVnodeBeforeUpdate)&&Ts(ce,A,w,y),X&&or(w,y,A,"beforeUpdate"),A&&ar(A,!0),F?bt(y.dynamicChildren,F,U,A,N,Fd(w,P),$):Q||Fe(y,w,U,null,A,N,Fd(w,P),$,!1),H>0){if(H&16)Fn(U,w,ie,te,A,N,P);else if(H&2&&ie.class!==te.class&&r(U,"class",null,te.class,P),H&4&&r(U,"style",ie.style,te.style,P),H&8){const we=w.dynamicProps;for(let Re=0;Re<we.length;Re++){const $e=we[Re],_t=ie[$e],Cn=te[$e];(Cn!==_t||$e==="value")&&r(U,$e,_t,Cn,P,y.children,A,N,Je)}}H&1&&y.children!==w.children&&h(U,w.children)}else!Q&&F==null&&Fn(U,w,ie,te,A,N,P);((ce=te.onVnodeUpdated)||X)&&wn(()=>{ce&&Ts(ce,A,w,y),X&&or(w,y,A,"updated")},N)},bt=(y,w,A,N,P,$,Q)=>{for(let U=0;U<w.length;U++){const H=y[U],F=w[U],X=H.el&&(H.type===Pt||!ya(H,F)||H.shapeFlag&70)?f(H.el):A;C(H,F,X,null,N,P,$,Q,!0)}},Fn=(y,w,A,N,P,$,Q)=>{if(A!==N){if(A!==at)for(const U in A)!$a(U)&&!(U in N)&&r(y,U,A[U],null,Q,w.children,P,$,Je);for(const U in N){if($a(U))continue;const H=N[U],F=A[U];H!==F&&U!=="value"&&r(y,U,F,H,Q,w.children,P,$,Je)}"value"in N&&r(y,"value",A.value,N.value,Q)}},ps=(y,w,A,N,P,$,Q,U,H)=>{const F=w.el=y?y.el:a(""),X=w.anchor=y?y.anchor:a("");let{patchFlag:ie,dynamicChildren:te,slotScopeIds:ce}=w;ce&&(U=U?U.concat(ce):ce),y==null?(s(F,A,N),s(X,A,N),ue(w.children||[],A,X,P,$,Q,U,H)):ie>0&&ie&64&&te&&y.dynamicChildren?(bt(y.dynamicChildren,te,A,P,$,Q,U),(w.key!=null||P&&w===P.subTree)&&VT(y,w,!0)):Fe(y,w,A,X,P,$,Q,U,H)},An=(y,w,A,N,P,$,Q,U,H)=>{w.slotScopeIds=U,y==null?w.shapeFlag&512?P.ctx.activate(w,A,N,Q,H):fi(w,A,N,P,$,Q,H):qs(y,w,H)},fi=(y,w,A,N,P,$,Q)=>{const U=y.component=i1(y,N,P);if(ST(y)&&(U.ctx.renderer=ne),r1(U),U.asyncDep){if(P&&P.registerDep(U,It),!y.el){const H=U.subTree=le(Ar);O(null,H,w,A)}}else It(U,y,w,A,P,$,Q)},qs=(y,w,A)=>{const N=w.component=y.component;if(pk(y,w,A))if(N.asyncDep&&!N.asyncResolved){Ve(N,w,A);return}else N.next=w,lk(N.update),N.effect.dirty=!0,N.update();else w.el=y.el,N.vnode=w},It=(y,w,A,N,P,$,Q)=>{const U=()=>{if(y.isMounted){let{next:X,bu:ie,u:te,parent:ce,vnode:we}=y;{const _s=FT(y);if(_s){X&&(X.el=we.el,Ve(y,X,Q)),_s.asyncDep.then(()=>{y.isUnmounted||U()});return}}let Re=X,$e;ar(y,!1),X?(X.el=we.el,Ve(y,X,Q)):X=we,ie&&Kc(ie),($e=X.props&&X.props.onVnodeBeforeUpdate)&&Ts($e,ce,X,we),ar(y,!0);const _t=Md(y),Cn=y.subTree;y.subTree=_t,C(Cn,_t,f(Cn.el),k(Cn),y,P,$),X.el=_t.el,Re===null&&mk(y,_t.el),te&&wn(te,P),($e=X.props&&X.props.onVnodeUpdated)&&wn(()=>Ts($e,ce,X,we),P)}else{let X;const{el:ie,props:te}=w,{bm:ce,m:we,parent:Re}=y,$e=Qc(w);if(ar(y,!1),ce&&Kc(ce),!$e&&(X=te&&te.onVnodeBeforeMount)&&Ts(X,Re,w),ar(y,!0),ie&&st){const _t=()=>{y.subTree=Md(y),st(ie,y.subTree,y,P,null)};$e?w.type.__asyncLoader().then(()=>!y.isUnmounted&&_t()):_t()}else{const _t=y.subTree=Md(y);C(null,_t,A,N,y,P,$),w.el=_t.el}if(we&&wn(we,P),!$e&&(X=te&&te.onVnodeMounted)){const _t=w;wn(()=>Ts(X,Re,_t),P)}(w.shapeFlag&256||Re&&Qc(Re.vnode)&&Re.vnode.shapeFlag&256)&&y.a&&wn(y.a,P),y.isMounted=!0,w=A=N=null}},H=y.effect=new Hp(U,Qn,()=>Jp(F),y.scope),F=y.update=()=>{H.dirty&&H.run()};F.id=y.uid,ar(y,!0),F()},Ve=(y,w,A)=>{w.component=y;const N=y.vnode.props;y.vnode=w,y.next=null,Hk(y,w.props,N,A),zk(y,w.children,A),Ur(),xy(y),$r()},Fe=(y,w,A,N,P,$,Q,U,H=!1)=>{const F=y&&y.children,X=y?y.shapeFlag:0,ie=w.children,{patchFlag:te,shapeFlag:ce}=w;if(te>0){if(te&128){x(F,ie,A,N,P,$,Q,U,H);return}else if(te&256){Un(F,ie,A,N,P,$,Q,U,H);return}}ce&8?(X&16&&Je(F,P,$),ie!==F&&h(A,ie)):X&16?ce&16?x(F,ie,A,N,P,$,Q,U,H):Je(F,P,$,!0):(X&8&&h(A,""),ce&16&&ue(ie,A,N,P,$,Q,U,H))},Un=(y,w,A,N,P,$,Q,U,H)=>{y=y||wo,w=w||wo;const F=y.length,X=w.length,ie=Math.min(F,X);let te;for(te=0;te<ie;te++){const ce=w[te]=H?Ei(w[te]):bs(w[te]);C(y[te],ce,A,null,P,$,Q,U,H)}F>X?Je(y,P,$,!0,!1,ie):ue(w,A,N,P,$,Q,U,H,ie)},x=(y,w,A,N,P,$,Q,U,H)=>{let F=0;const X=w.length;let ie=y.length-1,te=X-1;for(;F<=ie&&F<=te;){const ce=y[F],we=w[F]=H?Ei(w[F]):bs(w[F]);if(ya(ce,we))C(ce,we,A,null,P,$,Q,U,H);else break;F++}for(;F<=ie&&F<=te;){const ce=y[ie],we=w[te]=H?Ei(w[te]):bs(w[te]);if(ya(ce,we))C(ce,we,A,null,P,$,Q,U,H);else break;ie--,te--}if(F>ie){if(F<=te){const ce=te+1,we=ce<X?w[ce].el:N;for(;F<=te;)C(null,w[F]=H?Ei(w[F]):bs(w[F]),A,we,P,$,Q,U,H),F++}}else if(F>te)for(;F<=ie;)$t(y[F],P,$,!0),F++;else{const ce=F,we=F,Re=new Map;for(F=we;F<=te;F++){const cn=w[F]=H?Ei(w[F]):bs(w[F]);cn.key!=null&&Re.set(cn.key,F)}let $e,_t=0;const Cn=te-we+1;let _s=!1,ac=0;const Gi=new Array(Cn);for(F=0;F<Cn;F++)Gi[F]=0;for(F=ce;F<=ie;F++){const cn=y[F];if(_t>=Cn){$t(cn,P,$,!0);continue}let $n;if(cn.key!=null)$n=Re.get(cn.key);else for($e=we;$e<=te;$e++)if(Gi[$e-we]===0&&ya(cn,w[$e])){$n=$e;break}$n===void 0?$t(cn,P,$,!0):(Gi[$n-we]=F+1,$n>=ac?ac=$n:_s=!0,C(cn,w[$n],A,null,P,$,Q,U,H),_t++)}const lc=_s?Yk(Gi):wo;for($e=lc.length-1,F=Cn-1;F>=0;F--){const cn=we+F,$n=w[cn],cc=cn+1<X?w[cn+1].el:N;Gi[F]===0?C(null,$n,A,cc,P,$,Q,U,H):_s&&($e<0||F!==lc[$e]?vn($n,A,cc,2):$e--)}}},vn=(y,w,A,N,P=null)=>{const{el:$,type:Q,transition:U,children:H,shapeFlag:F}=y;if(F&6){vn(y.component.subTree,w,A,N);return}if(F&128){y.suspense.move(w,A,N);return}if(F&64){Q.move(y,w,A,ne);return}if(Q===Pt){s($,w,A);for(let ie=0;ie<H.length;ie++)vn(H[ie],w,A,N);s(y.anchor,w,A);return}if(Q===Xc){B(y,w,A);return}if(N!==2&&F&1&&U)if(N===0)U.beforeEnter($),s($,w,A),wn(()=>U.enter($),P);else{const{leave:ie,delayLeave:te,afterLeave:ce}=U,we=()=>s($,w,A),Re=()=>{ie($,()=>{we(),ce&&ce()})};te?te($,we,Re):Re()}else s($,w,A)},$t=(y,w,A,N=!1,P=!1)=>{const{type:$,props:Q,ref:U,children:H,dynamicChildren:F,shapeFlag:X,patchFlag:ie,dirs:te}=y;if(U!=null&&Df(U,null,A,y,!0),X&256){w.ctx.deactivate(y);return}const ce=X&1&&te,we=!Qc(y);let Re;if(we&&(Re=Q&&Q.onVnodeBeforeUnmount)&&Ts(Re,w,y),X&6)gs(y.component,A,N);else{if(X&128){y.suspense.unmount(A,N);return}ce&&or(y,null,w,"beforeUnmount"),X&64?y.type.remove(y,w,A,P,ne,N):F&&($!==Pt||ie>0&&ie&64)?Je(F,w,A,!1,!0):($===Pt&&ie&384||!P&&X&16)&&Je(H,w,A),N&&ms(y)}(we&&(Re=Q&&Q.onVnodeUnmounted)||ce)&&wn(()=>{Re&&Ts(Re,w,y),ce&&or(y,null,w,"unmounted")},A)},ms=y=>{const{type:w,el:A,anchor:N,transition:P}=y;if(w===Pt){Gt(A,N);return}if(w===Xc){J(y);return}const $=()=>{i(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(y.shapeFlag&1&&P&&!P.persisted){const{leave:Q,delayLeave:U}=P,H=()=>Q(A,$);U?U(y.el,$,H):H()}else $()},Gt=(y,w)=>{let A;for(;y!==w;)A=m(y),i(y),y=A;i(w)},gs=(y,w,A)=>{const{bum:N,scope:P,update:$,subTree:Q,um:U}=y;N&&Kc(N),P.stop(),$&&($.active=!1,$t(Q,y,w,A)),U&&wn(U,w),wn(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Je=(y,w,A,N=!1,P=!1,$=0)=>{for(let Q=$;Q<y.length;Q++)$t(y[Q],w,A,N,P)},k=y=>y.shapeFlag&6?k(y.component.subTree):y.shapeFlag&128?y.suspense.next():m(y.anchor||y.el);let R=!1;const q=(y,w,A)=>{y==null?w._vnode&&$t(w._vnode,null,null,!0):C(w._vnode||null,y,w,null,null,null,A),R||(R=!0,xy(),wT(),R=!1),w._vnode=y},ne={p:C,um:$t,m:vn,r:ms,mt:fi,mc:ue,pc:Fe,pbc:bt,n:k,o:t};let Ue,st;return e&&([Ue,st]=e(ne)),{render:q,hydrate:Ue,createApp:jk(q,Ue)}}function Fd({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qk(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function VT(t,e,n=!1){const s=t.children,i=e.children;if(pe(s)&&pe(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ei(i[r]),a.el=o.el),n||VT(o,a)),a.type===rh&&(a.el=o.el)}}function Yk(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function FT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:FT(e)}const Xk=t=>t.__isTeleport,Pt=Symbol.for("v-fgt"),rh=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),Xc=Symbol.for("v-stc"),Wa=[];let os=null;function ke(t=!1){Wa.push(os=t?null:[])}function Jk(){Wa.pop(),os=Wa[Wa.length-1]||null}let ll=1;function qy(t){ll+=t}function UT(t){return t.dynamicChildren=ll>0?os||wo:null,Jk(),ll>0&&os&&os.push(t),t}function Me(t,e,n,s,i,r){return UT(v(t,e,n,s,i,r,!0))}function $T(t,e,n,s,i){return UT(le(t,e,n,s,i,!0))}function xf(t){return t?t.__v_isVNode===!0:!1}function ya(t,e){return t.type===e.type&&t.key===e.key}const oh="__vInternal",jT=({key:t})=>t??null,Jc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||ut(t)||Ee(t)?{i:Tn,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,i=null,r=t===Pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jT(e),ref:e&&Jc(e),scopeId:sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tn};return a?(tm(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),ll>0&&!o&&os&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&os.push(l),l}const le=Zk;function Zk(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===gk)&&(t=Ar),xf(t)){const a=xo(t,e,!0);return n&&tm(a,n),ll>0&&!r&&os&&(a.shapeFlag&6?os[os.indexOf(t)]=a:os.push(a)),a.patchFlag|=-2,a}if(u1(t)&&(t=t.__vccOpts),e){e=e1(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=Bp(a)),gt(l)&&(dT(l)&&!pe(l)&&(l=Kt({},l)),e.style=jp(l))}const o=Ot(t)?1:yk(t)?128:Xk(t)?64:gt(t)?4:Ee(t)?2:0;return v(t,e,n,s,i,o,r,!0)}function e1(t){return t?dT(t)||oh in t?Kt({},t):t:null}function xo(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?t1(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jT(a),ref:e&&e.ref?n&&i?pe(i)?i.concat(Jc(e)):[i,Jc(e)]:Jc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xo(t.ssContent),ssFallback:t.ssFallback&&xo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pt(t=" ",e=0){return le(rh,null,t,e)}function Yo(t,e){const n=le(Xc,null,t);return n.staticCount=e,n}function hr(t="",e=!1){return e?(ke(),$T(Ar,null,t)):le(Ar,null,t)}function bs(t){return t==null||typeof t=="boolean"?le(Ar):pe(t)?le(Pt,null,t.slice()):typeof t=="object"?Ei(t):le(rh,null,String(t))}function Ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xo(t)}function tm(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),tm(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(oh in e)?e._ctx=Tn:i===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:Tn},n=32):(e=String(e),s&64?(n=16,e=[pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function t1(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Bp([e.class,s.class]));else if(i==="style")e.style=jp([e.style,s.style]);else if(Qu(i)){const r=e[i],o=s[i];o&&r!==o&&!(pe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ts(t,e,n,s=null){cs(t,e,7,[n,s])}const n1=NT();let s1=0;function i1(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||n1,r={uid:s1++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new JE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:DT(s,i),emitsOptions:TT(s,i),emit:null,emitted:null,propsDefaults:at,inheritAttrs:s.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hk.bind(null,r),t.ce&&t.ce(r),r}let tn=null,fu,Lf;{const t=QE(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};fu=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),Lf=e("__VUE_SSR_SETTERS__",n=>ah=n)}const Ol=t=>{const e=tn;return fu(t),t.scope.on(),()=>{t.scope.off(),fu(e)}},zy=()=>{tn&&tn.scope.off(),fu(null)};function BT(t){return t.vnode.shapeFlag&4}let ah=!1;function r1(t,e=!1){e&&Lf(e);const{props:n,children:s}=t.vnode,i=BT(t);Bk(t,n,i,e),qk(t,s);const r=i?o1(t,e):void 0;return e&&Lf(!1),r}function o1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qp(new Proxy(t.ctx,xk));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?l1(t):null,r=Ol(t);Ur();const o=Ni(s,t,0,[t.props,i]);if($r(),r(),zE(o)){if(o.then(zy,zy),e)return o.then(a=>{Ky(t,a,e)}).catch(a=>{th(a,t,0)});t.asyncDep=o}else Ky(t,o,e)}else HT(t,e)}function Ky(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=gT(e)),HT(t,n)}let Gy;function HT(t,e,n){const s=t.type;if(!t.render){if(!e&&Gy&&!s.render){const i=s.template||Zp(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Kt(Kt({isCustomElement:r,delimiters:a},o),l);s.render=Gy(i,u)}}t.render=s.render||Qn}{const i=Ol(t);Ur();try{Lk(t)}finally{$r(),i()}}}function a1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return In(t,"get","$attrs"),e[n]}}))}function l1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return a1(t)},slots:t.slots,emit:t.emit,expose:e}}function lh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gT(Qp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ba)return Ba[n](t)},has(e,n){return n in e||n in Ba}}))}function c1(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function u1(t){return Ee(t)&&"__vccOpts"in t}const zn=(t,e)=>nk(t,e,ah);function WT(t,e,n){const s=arguments.length;return s===2?gt(e)&&!pe(e)?xf(e)?le(t,null,[e]):le(t,e):le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xf(n)&&(n=[n]),le(t,e,n))}const h1="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const d1="http://www.w3.org/2000/svg",f1="http://www.w3.org/1998/Math/MathML",Ti=typeof document<"u"?document:null,Qy=Ti&&Ti.createElement("template"),p1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Ti.createElementNS(d1,t):e==="mathml"?Ti.createElementNS(f1,t):Ti.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ti.createTextNode(t),createComment:t=>Ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Qy.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Qy.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},m1=Symbol("_vtc");function g1(t,e,n){const s=t[m1];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cl=Symbol("_vod"),_1={beforeMount(t,{value:e},{transition:n}){t[cl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):va(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e==!n&&(t.style.display===t[cl]||!e)||(s?e?(s.beforeEnter(t),va(t,!0),s.enter(t)):s.leave(t,()=>{va(t,!1)}):va(t,e))},beforeUnmount(t,{value:e}){va(t,e)}};function va(t,e){t.style.display=e?t[cl]:"none"}const y1=Symbol(""),v1=/(^|;)\s*display\s*:/;function w1(t,e,n){const s=t.style,i=Ot(n),r=s.display;let o=!1;if(n&&!i){if(e&&!Ot(e))for(const a in e)n[a]==null&&Mf(s,a,"");for(const a in n)a==="display"&&(o=!0),Mf(s,a,n[a])}else if(i){if(e!==n){const a=s[y1];a&&(n+=";"+a),s.cssText=n,o=v1.test(n)}}else e&&t.removeAttribute("style");cl in t&&(t[cl]=o?s.display:"",s.display=r)}const Yy=/\s*!important$/;function Mf(t,e,n){if(pe(n))n.forEach(s=>Mf(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=E1(t,e);Yy.test(n)?t.setProperty(Fr(s),n.replace(Yy,""),"important"):t[s]=n}}const Xy=["Webkit","Moz","ms"],Ud={};function E1(t,e){const n=Ud[e];if(n)return n;let s=Us(e);if(s!=="filter"&&s in t)return Ud[e]=s;s=Ju(s);for(let i=0;i<Xy.length;i++){const r=Xy[i]+s;if(r in t)return Ud[e]=r}return e}const Jy="http://www.w3.org/1999/xlink";function T1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jy,e.slice(6,e.length)):t.setAttributeNS(Jy,e,n);else{const r=DP(e);n==null||r&&!YE(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function b1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";u!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=YE(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function uo(t,e,n,s){t.addEventListener(e,n,s)}function I1(t,e,n,s){t.removeEventListener(e,n,s)}const Zy=Symbol("_vei");function A1(t,e,n,s,i=null){const r=t[Zy]||(t[Zy]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=C1(e);if(s){const u=r[e]=P1(s,i);uo(t,a,u,l)}else o&&(I1(t,a,o,l),r[e]=void 0)}}const ev=/(?:Once|Passive|Capture)$/;function C1(t){let e;if(ev.test(t)){e={};let s;for(;s=t.match(ev);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let $d=0;const S1=Promise.resolve(),R1=()=>$d||(S1.then(()=>$d=0),$d=Date.now());function P1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;cs(k1(s,n.value),e,5,[s])};return n.value=t,n.attached=R1(),n}function k1(t,e){if(pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tv=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,N1=(t,e,n,s,i,r,o,a,l)=>{const u=i==="svg";e==="class"?g1(t,s,u):e==="style"?w1(t,n,s):Qu(e)?Fp(e)||A1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O1(t,e,s,u))?b1(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),T1(t,e,s,u))};function O1(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&tv(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return tv(e)&&Ot(n)?!1:e in t}const nv=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>Kc(e,n):e};function D1(t){t.target.composing=!0}function sv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jd=Symbol("_assign"),En={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[jd]=nv(i);const r=s||i.props&&i.props.type==="number";uo(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bf(a)),t[jd](a)}),n&&uo(t,"change",()=>{t.value=t.value.trim()}),e||(uo(t,"compositionstart",D1),uo(t,"compositionend",sv),uo(t,"change",sv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[jd]=nv(r),t.composing)return;const o=i||t.type==="number"?bf(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},x1=["ctrl","shift","alt","meta"],L1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>x1.some(n=>t[`${n}Key`]&&!e.includes(n))},Na=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=L1[e[o]];if(a&&a(i,e))return}return t(i,...r)})},M1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},V1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Fr(i.key);if(e.some(o=>o===r||M1[o]===r))return t(i)})},F1=Kt({patchProp:N1},p1);let iv;function U1(){return iv||(iv=Kk(F1))}const $1=(...t)=>{const e=U1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=B1(s);if(!i)return;const r=e._component;!Ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,j1(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function j1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B1(t){return Ot(t)?document.querySelector(t):t}var H1=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const W1=Symbol();var rv;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rv||(rv={}));function q1(){const t=xP(!0),e=t.run(()=>ze({}));let n=[],s=[];const i=Qp({install(r){i._a=r,r.provide(W1,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!H1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ho=typeof window<"u";function z1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Bd(t,e){const n={};for(const s in e){const i=e[s];n[s]=hs(i)?i.map(t):t(i)}return n}const qa=()=>{},hs=Array.isArray,K1=/\/$/,G1=t=>t.replace(K1,"");function Hd(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=J1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Q1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ov(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Y1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Lo(e.matched[s],n.matched[i])&&qT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Lo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!X1(t[n],e[n]))return!1;return!0}function X1(t,e){return hs(t)?av(t,e):hs(e)?av(e,t):t===e}function av(t,e){return hs(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function J1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ul;(function(t){t.pop="pop",t.push="push"})(ul||(ul={}));var za;(function(t){t.back="back",t.forward="forward",t.unknown=""})(za||(za={}));function Z1(t){if(!t)if(ho){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),G1(t)}const eN=/^[^#]+#/;function tN(t,e){return t.replace(eN,"#")+e}function nN(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ch=()=>({left:window.pageXOffset,top:window.pageYOffset});function sN(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=nN(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lv(t,e){return(history.state?history.state.position-e:-1)+t}const Vf=new Map;function iN(t,e){Vf.set(t,e)}function rN(t){const e=Vf.get(t);return Vf.delete(t),e}let oN=()=>location.protocol+"//"+location.host;function zT(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ov(l,"")}return ov(n,t)+s+i}function aN(t,e,n,s){let i=[],r=[],o=null;const a=({state:m})=>{const _=zT(t,location),b=n.value,C=e.value;let I=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}I=C?m.position-C.position:0}else s(_);i.forEach(O=>{O(n.value,b,{delta:I,type:ul.pop,direction:I?I>0?za.forward:za.back:za.unknown})})};function l(){o=n.value}function u(m){i.push(m);const _=()=>{const b=i.indexOf(m);b>-1&&i.splice(b,1)};return r.push(_),_}function h(){const{history:m}=window;m.state&&m.replaceState(Ye({},m.state,{scroll:ch()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function cv(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ch():null}}function lN(t){const{history:e,location:n}=window,s={value:zT(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:oN()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[h?"replace":"assign"](m)}}function o(l,u){const h=Ye({},e.state,cv(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});r(l,h,!0),s.value=l}function a(l,u){const h=Ye({},i.value,e.state,{forward:l,scroll:ch()});r(h.current,h,!0);const f=Ye({},cv(s.value,l,null),{position:h.position+1},u);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function cN(t){t=Z1(t);const e=lN(t),n=aN(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ye({location:"",base:t,go:s,createHref:tN.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function uN(t){return typeof t=="string"||t&&typeof t=="object"}function KT(t){return typeof t=="string"||typeof t=="symbol"}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},GT=Symbol("");var uv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(uv||(uv={}));function Mo(t,e){return Ye(new Error,{type:t,[GT]:!0},e)}function Qs(t,e){return t instanceof Error&&GT in t&&(e==null||!!(t.type&e))}const hv="[^/]+?",hN={sensitive:!1,strict:!1,start:!0,end:!0},dN=/[.+*?^${}()[\]/\\]/g;function fN(t,e){const n=Ye({},hN,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let _=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(dN,"\\$&"),_+=40;else if(m.type===1){const{value:b,repeatable:C,optional:I,regexp:O}=m;r.push({name:b,repeatable:C,optional:I});const D=O||hv;if(D!==hv){_+=10;try{new RegExp(`(${D})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${b}" (${D}): `+J.message)}}let B=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(B=I&&u.length<2?`(?:/${B})`:"/"+B),I&&(B+="?"),i+=B,_+=20,I&&(_+=-8),C&&(_+=-20),D===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const _=h[m]||"",b=r[m-1];f[b.name]=_&&b.repeatable?_.split("/"):_}return f}function l(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of m)if(_.type===0)h+=_.value;else if(_.type===1){const{value:b,repeatable:C,optional:I}=_,O=b in u?u[b]:"";if(hs(O)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const D=hs(O)?O.join("/"):O;if(!D)if(I)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);h+=D}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function pN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function mN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=pN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(dv(s))return 1;if(dv(i))return-1}return i.length-s.length}function dv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gN={type:0,value:""},_N=/[a-zA-Z0-9_]/;function yN(t){if(!t)return[[]];if(t==="/")return[[gN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,u="",h="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):m();break;case 4:m(),n=s;break;case 1:l==="("?n=2:_N.test(l)?m():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function vN(t,e,n){const s=fN(yN(t.path),n),i=Ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function wN(t,e){const n=[],s=new Map;e=mv({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,m){const _=!m,b=EN(h);b.aliasOf=m&&m.record;const C=mv(e,h),I=[b];if("alias"in h){const B=typeof h.alias=="string"?[h.alias]:h.alias;for(const J of B)I.push(Ye({},b,{components:m?m.record.components:b.components,path:J,aliasOf:m?m.record:b}))}let O,D;for(const B of I){const{path:J}=B;if(f&&J[0]!=="/"){const Ae=f.record.path,W=Ae[Ae.length-1]==="/"?"":"/";B.path=f.record.path+(J&&W+J)}if(O=vN(B,f,C),m?m.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),_&&h.name&&!pv(O)&&o(h.name)),b.children){const Ae=b.children;for(let W=0;W<Ae.length;W++)r(Ae[W],O,m&&m.children[W])}m=m||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return D?()=>{o(D)}:qa}function o(h){if(KT(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let f=0;for(;f<n.length&&mN(h,n[f])>=0&&(h.record.path!==n[f].record.path||!QT(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!pv(h)&&s.set(h.record.name,h)}function u(h,f){let m,_={},b,C;if("name"in h&&h.name){if(m=s.get(h.name),!m)throw Mo(1,{location:h});C=m.record.name,_=Ye(fv(f.params,m.keys.filter(D=>!D.optional).map(D=>D.name)),h.params&&fv(h.params,m.keys.map(D=>D.name))),b=m.stringify(_)}else if("path"in h)b=h.path,m=n.find(D=>D.re.test(b)),m&&(_=m.parse(b),C=m.record.name);else{if(m=f.name?s.get(f.name):n.find(D=>D.re.test(f.path)),!m)throw Mo(1,{location:h,currentLocation:f});C=m.record.name,_=Ye({},f.params,h.params),b=m.stringify(_)}const I=[];let O=m;for(;O;)I.unshift(O.record),O=O.parent;return{name:C,path:b,params:_,matched:I,meta:bN(I)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fv(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function EN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:TN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function TN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function pv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bN(t){return t.reduce((e,n)=>Ye(e,n.meta),{})}function mv(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function QT(t,e){return e.children.some(n=>n===t||QT(t,n))}const YT=/#/g,IN=/&/g,AN=/\//g,CN=/=/g,SN=/\?/g,XT=/\+/g,RN=/%5B/g,PN=/%5D/g,JT=/%5E/g,kN=/%60/g,ZT=/%7B/g,NN=/%7C/g,eb=/%7D/g,ON=/%20/g;function nm(t){return encodeURI(""+t).replace(NN,"|").replace(RN,"[").replace(PN,"]")}function DN(t){return nm(t).replace(ZT,"{").replace(eb,"}").replace(JT,"^")}function Ff(t){return nm(t).replace(XT,"%2B").replace(ON,"+").replace(YT,"%23").replace(IN,"%26").replace(kN,"`").replace(ZT,"{").replace(eb,"}").replace(JT,"^")}function xN(t){return Ff(t).replace(CN,"%3D")}function LN(t){return nm(t).replace(YT,"%23").replace(SN,"%3F")}function MN(t){return t==null?"":LN(t).replace(AN,"%2F")}function pu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function VN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(XT," "),o=r.indexOf("="),a=pu(o<0?r:r.slice(0,o)),l=o<0?null:pu(r.slice(o+1));if(a in e){let u=e[a];hs(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function gv(t){let e="";for(let n in t){const s=t[n];if(n=xN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(hs(s)?s.map(r=>r&&Ff(r)):[s&&Ff(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function FN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=hs(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const UN=Symbol(""),_v=Symbol(""),uh=Symbol(""),tb=Symbol(""),Uf=Symbol("");function wa(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bi(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Mo(4,{from:n,to:e})):f instanceof Error?a(f):uN(f)?a(Mo(2,{from:e,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},u=t.call(s&&s.instances[i],e,n,l);let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(f=>a(f))})}function Wd(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if($N(a)){const u=(a.__vccOpts||a)[e];u&&i.push(bi(u,n,s,r,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=z1(u)?u.default:u;r.components[o]=h;const m=(h.__vccOpts||h)[e];return m&&bi(m,n,s,r,o)()}))}}return i}function $N(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yv(t){const e=Os(uh),n=Os(tb),s=zn(()=>e.resolve(ht(t.to))),i=zn(()=>{const{matched:l}=s.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(Lo.bind(null,h));if(m>-1)return m;const _=vv(l[u-2]);return u>1&&vv(h)===_&&f[f.length-1].path!==_?f.findIndex(Lo.bind(null,l[u-2])):m}),r=zn(()=>i.value>-1&&WN(n.params,s.value.params)),o=zn(()=>i.value>-1&&i.value===n.matched.length-1&&qT(n.params,s.value.params));function a(l={}){return HN(l)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(qa):Promise.resolve()}return{route:s,href:zn(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const jN=CT({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yv,setup(t,{slots:e}){const n=eh(yv(t)),{options:s}=Os(uh),i=zn(()=>({[wv(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wv(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:WT("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),BN=jN;function HN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!hs(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function vv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wv=(t,e,n)=>t??e??n,qN=CT({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Os(Uf),i=zn(()=>t.route||s.value),r=Os(_v,0),o=zn(()=>{let u=ht(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=zn(()=>i.value.matched[o.value]);Yc(_v,zn(()=>o.value+1)),Yc(UN,a),Yc(Uf,i);const l=ze();return ja(()=>[l.value,a.value,t.name],([u,h,f],[m,_,b])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!Lo(h,_)||!m)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return Ev(n.default,{Component:m,route:u});const _=f.props[h],b=_?_===!0?u.params:typeof _=="function"?_(u):_:null,I=WT(m,Ye({},b,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return Ev(n.default,{Component:I,route:u})||I}}});function Ev(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zN=qN;function KN(t){const e=wN(t.routes,t),n=t.parseQuery||VN,s=t.stringifyQuery||gv,i=t.history,r=wa(),o=wa(),a=wa(),l=sk(yi);let u=yi;ho&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Bd.bind(null,k=>""+k),f=Bd.bind(null,MN),m=Bd.bind(null,pu);function _(k,R){let q,ne;return KT(k)?(q=e.getRecordMatcher(k),ne=R):ne=k,e.addRoute(ne,q)}function b(k){const R=e.getRecordMatcher(k);R&&e.removeRoute(R)}function C(){return e.getRoutes().map(k=>k.record)}function I(k){return!!e.getRecordMatcher(k)}function O(k,R){if(R=Ye({},R||l.value),typeof k=="string"){const w=Hd(n,k,R.path),A=e.resolve({path:w.path},R),N=i.createHref(w.fullPath);return Ye(w,A,{params:m(A.params),hash:pu(w.hash),redirectedFrom:void 0,href:N})}let q;if("path"in k)q=Ye({},k,{path:Hd(n,k.path,R.path).path});else{const w=Ye({},k.params);for(const A in w)w[A]==null&&delete w[A];q=Ye({},k,{params:f(w)}),R.params=f(R.params)}const ne=e.resolve(q,R),Ue=k.hash||"";ne.params=h(m(ne.params));const st=Q1(s,Ye({},k,{hash:DN(Ue),path:ne.path})),y=i.createHref(st);return Ye({fullPath:st,hash:Ue,query:s===gv?FN(k.query):k.query||{}},ne,{redirectedFrom:void 0,href:y})}function D(k){return typeof k=="string"?Hd(n,k,l.value.path):Ye({},k)}function B(k,R){if(u!==k)return Mo(8,{from:R,to:k})}function J(k){return me(k)}function Ae(k){return J(Ye(D(k),{replace:!0}))}function W(k){const R=k.matched[k.matched.length-1];if(R&&R.redirect){const{redirect:q}=R;let ne=typeof q=="function"?q(k):q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=D(ne):{path:ne},ne.params={}),Ye({query:k.query,hash:k.hash,params:"path"in ne?{}:k.params},ne)}}function me(k,R){const q=u=O(k),ne=l.value,Ue=k.state,st=k.force,y=k.replace===!0,w=W(q);if(w)return me(Ye(D(w),{state:typeof w=="object"?Ye({},Ue,w.state):Ue,force:st,replace:y}),R||q);const A=q;A.redirectedFrom=R;let N;return!st&&Y1(s,ne,q)&&(N=Mo(16,{to:A,from:ne}),vn(ne,ne,!0,!1)),(N?Promise.resolve(N):bt(A,ne)).catch(P=>Qs(P)?Qs(P,2)?P:x(P):Fe(P,A,ne)).then(P=>{if(P){if(Qs(P,2))return me(Ye({replace:y},D(P.to),{state:typeof P.to=="object"?Ye({},Ue,P.to.state):Ue,force:st}),R||A)}else P=ps(A,ne,!0,y,Ue);return Fn(A,ne,P),P})}function ue(k,R){const q=B(k,R);return q?Promise.reject(q):Promise.resolve()}function qe(k){const R=Gt.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(k):k()}function bt(k,R){let q;const[ne,Ue,st]=GN(k,R);q=Wd(ne.reverse(),"beforeRouteLeave",k,R);for(const w of ne)w.leaveGuards.forEach(A=>{q.push(bi(A,k,R))});const y=ue.bind(null,k,R);return q.push(y),Je(q).then(()=>{q=[];for(const w of r.list())q.push(bi(w,k,R));return q.push(y),Je(q)}).then(()=>{q=Wd(Ue,"beforeRouteUpdate",k,R);for(const w of Ue)w.updateGuards.forEach(A=>{q.push(bi(A,k,R))});return q.push(y),Je(q)}).then(()=>{q=[];for(const w of st)if(w.beforeEnter)if(hs(w.beforeEnter))for(const A of w.beforeEnter)q.push(bi(A,k,R));else q.push(bi(w.beforeEnter,k,R));return q.push(y),Je(q)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),q=Wd(st,"beforeRouteEnter",k,R),q.push(y),Je(q))).then(()=>{q=[];for(const w of o.list())q.push(bi(w,k,R));return q.push(y),Je(q)}).catch(w=>Qs(w,8)?w:Promise.reject(w))}function Fn(k,R,q){a.list().forEach(ne=>qe(()=>ne(k,R,q)))}function ps(k,R,q,ne,Ue){const st=B(k,R);if(st)return st;const y=R===yi,w=ho?history.state:{};q&&(ne||y?i.replace(k.fullPath,Ye({scroll:y&&w&&w.scroll},Ue)):i.push(k.fullPath,Ue)),l.value=k,vn(k,R,q,y),x()}let An;function fi(){An||(An=i.listen((k,R,q)=>{if(!gs.listening)return;const ne=O(k),Ue=W(ne);if(Ue){me(Ye(Ue,{replace:!0}),ne).catch(qa);return}u=ne;const st=l.value;ho&&iN(lv(st.fullPath,q.delta),ch()),bt(ne,st).catch(y=>Qs(y,12)?y:Qs(y,2)?(me(y.to,ne).then(w=>{Qs(w,20)&&!q.delta&&q.type===ul.pop&&i.go(-1,!1)}).catch(qa),Promise.reject()):(q.delta&&i.go(-q.delta,!1),Fe(y,ne,st))).then(y=>{y=y||ps(ne,st,!1),y&&(q.delta&&!Qs(y,8)?i.go(-q.delta,!1):q.type===ul.pop&&Qs(y,20)&&i.go(-1,!1)),Fn(ne,st,y)}).catch(qa)}))}let qs=wa(),It=wa(),Ve;function Fe(k,R,q){x(k);const ne=It.list();return ne.length?ne.forEach(Ue=>Ue(k,R,q)):console.error(k),Promise.reject(k)}function Un(){return Ve&&l.value!==yi?Promise.resolve():new Promise((k,R)=>{qs.add([k,R])})}function x(k){return Ve||(Ve=!k,fi(),qs.list().forEach(([R,q])=>k?q(k):R()),qs.reset()),k}function vn(k,R,q,ne){const{scrollBehavior:Ue}=t;if(!ho||!Ue)return Promise.resolve();const st=!q&&rN(lv(k.fullPath,0))||(ne||!q)&&history.state&&history.state.scroll||null;return yT().then(()=>Ue(k,R,st)).then(y=>y&&sN(y)).catch(y=>Fe(y,k,R))}const $t=k=>i.go(k);let ms;const Gt=new Set,gs={currentRoute:l,listening:!0,addRoute:_,removeRoute:b,hasRoute:I,getRoutes:C,resolve:O,options:t,push:J,replace:Ae,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:It.add,isReady:Un,install(k){const R=this;k.component("RouterLink",BN),k.component("RouterView",zN),k.config.globalProperties.$router=R,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),ho&&!ms&&l.value===yi&&(ms=!0,J(i.location).catch(Ue=>{}));const q={};for(const Ue in yi)Object.defineProperty(q,Ue,{get:()=>l.value[Ue],enumerable:!0});k.provide(uh,R),k.provide(tb,uT(q)),k.provide(Uf,l);const ne=k.unmount;Gt.add(k),k.unmount=function(){Gt.delete(k),Gt.size<1&&(u=yi,An&&An(),An=null,l.value=yi,ms=!1,Ve=!1),ne()}}};function Je(k){return k.reduce((R,q)=>R.then(()=>qe(q)),Promise.resolve())}return gs}function GN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Lo(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Lo(u,l))||i.push(l))}return[n,s,i]}function ci(){return Os(uh)}var Tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Xo(e)},Xo=function(t){return new Error("Firebase Database ("+nb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QN=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),s.push(n[h],n[f],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new YN;const m=r<<2|a>>4;if(s.push(m),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const b=u<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ib=function(t){const e=sb(t);return sm.encodeByteArray(e,!0)},mu=function(t){return ib(t).replace(/\./g,"")},gu=function(t){try{return sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){return rb(void 0,t)}function rb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!JN(n)||(t[n]=rb(t[n],e[n]));return t}function JN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=()=>ZN().__FIREBASE_DEFAULTS__,tO=()=>{if(typeof process>"u"||typeof Tv>"u")return;const t=Tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gu(t[1]);return e&&JSON.parse(e)},hh=()=>{try{return eO()||tO()||nO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ob=t=>{var e,n;return(n=(e=hh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},im=t=>{const e=ob(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ab=()=>{var t;return(t=hh())===null||t===void 0?void 0:t.config},lb=t=>{var e;return(e=hh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function sO(){var t;const e=(t=hh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ub(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iO(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hb(){return nb.NODE_ADMIN===!0}function rO(){return!sO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function db(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function oO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="FirebaseError";class Zn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aO,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,s)}}function lO(t,e){return t.replace(cO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const cO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return JSON.parse(t)}function Ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hl(gu(r[0])||""),n=hl(gu(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},uO=function(t){const e=fb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hO=function(t){const e=fb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _u(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bv(r)&&bv(o)){if(!dl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Da(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):f<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const m=(i<<5|i>>>27)+u+l+h+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fO(t,e){const n=new pO(t,e);return n.subscribe.bind(n)}class pO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}function gO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,K(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dh=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=1e3,vO=2,wO=4*60*60*1e3,EO=.5;function Iv(t,e=yO,n=vO){const s=e*Math.pow(n,t),i=Math.round(EO*s*(Math.random()-.5)*2);return Math.min(wO,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IO(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bO(t){return t===lr?void 0:t}function IO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const CO={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},SO=Ce.INFO,RO={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},PO=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=RO[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=SO,this._logHandler=PO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const kO=(t,e)=>e.some(n=>t instanceof n);let Av,Cv;function NO(){return Av||(Av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OO(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pb=new WeakMap,jf=new WeakMap,mb=new WeakMap,zd=new WeakMap,cm=new WeakMap;function DO(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Oi(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pb.set(n,t)}).catch(()=>{}),cm.set(e,t),e}function xO(t){if(jf.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jf.set(t,e)}let Bf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LO(t){Bf=t(Bf)}function MO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kd(this),e,...n);return mb.set(s,e.sort?e.sort():[e]),Oi(s)}:OO().includes(t)?function(...e){return t.apply(Kd(this),e),Oi(pb.get(this))}:function(...e){return Oi(t.apply(Kd(this),e))}}function VO(t){return typeof t=="function"?MO(t):(t instanceof IDBTransaction&&xO(t),kO(t,NO())?new Proxy(t,Bf):t)}function Oi(t){if(t instanceof IDBRequest)return DO(t);if(zd.has(t))return zd.get(t);const e=VO(t);return e!==t&&(zd.set(t,e),cm.set(e,t)),e}const Kd=t=>cm.get(t);function gb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Oi(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Oi(o.result),l.oldVersion,l.newVersion,Oi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FO=["get","getKey","getAll","getAllKeys","count"],UO=["put","add","delete","clear"],Gd=new Map;function Sv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=UO.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||FO.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gd.set(e,r),r}LO(t=>({...t,get:(e,n,s)=>Sv(e,n)||t.get(e,n,s),has:(e,n)=>!!Sv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jO(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hf="@firebase/app",Rv="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Dl("@firebase/app"),BO="@firebase/app-compat",HO="@firebase/analytics-compat",WO="@firebase/analytics",qO="@firebase/app-check-compat",zO="@firebase/app-check",KO="@firebase/auth",GO="@firebase/auth-compat",QO="@firebase/database",YO="@firebase/database-compat",XO="@firebase/functions",JO="@firebase/functions-compat",ZO="@firebase/installations",eD="@firebase/installations-compat",tD="@firebase/messaging",nD="@firebase/messaging-compat",sD="@firebase/performance",iD="@firebase/performance-compat",rD="@firebase/remote-config",oD="@firebase/remote-config-compat",aD="@firebase/storage",lD="@firebase/storage-compat",cD="@firebase/firestore",uD="@firebase/firestore-compat",hD="firebase",dD="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="[DEFAULT]",fD={[Hf]:"fire-core",[BO]:"fire-core-compat",[WO]:"fire-analytics",[HO]:"fire-analytics-compat",[zO]:"fire-app-check",[qO]:"fire-app-check-compat",[KO]:"fire-auth",[GO]:"fire-auth-compat",[QO]:"fire-rtdb",[YO]:"fire-rtdb-compat",[XO]:"fire-fn",[JO]:"fire-fn-compat",[ZO]:"fire-iid",[eD]:"fire-iid-compat",[tD]:"fire-fcm",[nD]:"fire-fcm-compat",[sD]:"fire-perf",[iD]:"fire-perf-compat",[rD]:"fire-rc",[oD]:"fire-rc-compat",[aD]:"fire-gcs",[lD]:"fire-gcs-compat",[cD]:"fire-fst",[uD]:"fire-fst-compat","fire-js":"fire-js",[hD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Map,pD=new Map,qf=new Map;function Pv(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(qf.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;qf.set(e,t);for(const n of yu.values())Pv(n,t);for(const n of pD.values())Pv(n,t);return!0}function hi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cs(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new Hr("app","Firebase",mD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=dD;function _b(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wf,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Di.create("bad-app-name",{appName:String(i)});if(n||(n=ab()),!n)throw Di.create("no-options");const r=yu.get(i);if(r){if(dl(n,r.options)&&dl(s,r.config))return r;throw Di.create("duplicate-app",{appName:i})}const o=new AO(i);for(const l of qf.values())o.addComponent(l);const a=new gD(n,s,o);return yu.set(i,a),a}function xl(t=Wf){const e=yu.get(t);if(!e&&t===Wf&&ab())return _b();if(!e)throw Di.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let i=(s=fD[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Xn(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="firebase-heartbeat-database",yD=1,fl="firebase-heartbeat-store";let Qd=null;function yb(){return Qd||(Qd=gb(_D,yD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Di.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function vD(t){try{const n=(await yb()).transaction(fl),s=await n.objectStore(fl).get(vb(t));return await n.done,s}catch(e){if(e instanceof Zn)Cr.warn(e.message);else{const n=Di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function kv(t,e){try{const s=(await yb()).transaction(fl,"readwrite");await s.objectStore(fl).put(e,vb(t)),await s.done}catch(n){if(n instanceof Zn)Cr.warn(n.message);else{const s=Di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(s.message)}}}function vb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=1024,ED=30*24*60*60*1e3;class TD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ID(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ED}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nv(),{heartbeatsToSend:s,unsentEntries:i}=bD(this._heartbeatsCache.heartbeats),r=mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nv(){return new Date().toISOString().substring(0,10)}function bD(t,e=wD){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ov(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ov(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ID{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?db().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ov(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){Xn(new Ln("platform-logger",e=>new $O(e),"PRIVATE")),Xn(new Ln("heartbeat",e=>new TD(e),"PRIVATE")),sn(Hf,Rv,t),sn(Hf,Rv,"esm2017"),sn("fire-js","")}AD("");function um(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function wb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CD=wb,Eb=new Hr("auth","Firebase",wb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Dl("@firebase/auth");function SD(t,...e){vu.logLevel<=Ce.WARN&&vu.warn(`Auth (${Hi}): ${t}`,...e)}function Zc(t,...e){vu.logLevel<=Ce.ERROR&&vu.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,...e){throw hm(t,...e)}function Ds(t,...e){return hm(t,...e)}function Tb(t,e,n){const s=Object.assign(Object.assign({},CD()),{[e]:n});return new Hr("auth","Firebase",s).create(e,{appName:t.name})}function ni(t){return Tb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hm(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Eb.create(t,...e)}function re(t,e,...n){if(!t)throw hm(e,...n)}function Ys(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zc(e),new Error(e)}function ii(t,e){t||Ys(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RD(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RD()||cb()||"connection"in navigator)?navigator.onLine:!0}function kD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,ii(n>e,"Short delay should be less than long delay!"),this.isMobile=am()||ub()}get(){return PD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){ii(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new Ll(3e4,6e4);function di(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hs(t,e,n,s,i={}){return Ib(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bb.fetch()(Ab(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ib(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ND),e);try{const i=new xD(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xc(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tb(t,h,u);ds(t,h)}}catch(i){if(i instanceof Zn)throw i;ds(t,"network-request-failed",{message:String(i)})}}async function Ml(t,e,n,s,i={}){const r=await Hs(t,e,n,s,i);return"mfaPendingCredential"in r&&ds(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ab(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?dm(t.config,i):`${t.config.apiScheme}://${i}`}function DD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ds(this.auth,"network-request-failed")),OD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xc(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ds(t,e,s);return i.customData._tokenResponse=n,i}function xv(t){return t!==void 0&&t.enterprise!==void 0}class LD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MD(t,e){return Hs(t,"GET","/v2/recaptchaConfig",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){return Hs(t,"POST","/v1/accounts:delete",e)}async function Cb(t,e){return Hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FD(t,e=!1){const n=dt(t),s=await n.getIdToken(e),i=fm(s);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ka(Yd(i.auth_time)),issuedAtTime:Ka(Yd(i.iat)),expirationTime:Ka(Yd(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yd(t){return Number(t)*1e3}function fm(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const i=gu(n);return i?JSON.parse(i):(Zc("Failed to decode base64 JWT payload"),null)}catch(i){return Zc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lv(t){const e=fm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zn&&UD(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function UD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Fo(t,Cb(n,{idToken:s}));re(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Sb(r.providerUserInfo):[],a=BD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Kf(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function jD(t){const e=dt(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BD(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Sb(t){return t.map(e=>{var{providerId:n}=e,s=um(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e){const n=await Ib(t,{},async()=>{const s=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ab(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bb.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WD(t,e){return Hs(t,"POST","/v2/accounts:revokeToken",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Lv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await HD(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Io;return s&&(re(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(re(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Ys("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $D(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FD(this,e)}reload(){return jD(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cs(this.auth.app))return Promise.reject(ni(this.auth));const e=await this.getIdToken();return await Fo(this,VD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:B,emailVerified:J,isAnonymous:Ae,providerData:W,stsTokenManager:me}=n;re(B&&me,e,"internal-error");const ue=Io.fromJSON(this.name,me);re(typeof B=="string",e,"internal-error"),vi(f,e.name),vi(m,e.name),re(typeof J=="boolean",e,"internal-error"),re(typeof Ae=="boolean",e,"internal-error"),vi(_,e.name),vi(b,e.name),vi(C,e.name),vi(I,e.name),vi(O,e.name),vi(D,e.name);const qe=new Xs({uid:B,auth:e,email:m,emailVerified:J,displayName:f,isAnonymous:Ae,photoURL:b,phoneNumber:_,tenantId:C,stsTokenManager:ue,createdAt:O,lastLoginAt:D});return W&&Array.isArray(W)&&(qe.providerData=W.map(bt=>Object.assign({},bt))),I&&(qe._redirectEventId=I),qe}static async _fromIdTokenResponse(e,n,s=!1){const i=new Io;i.updateFromServerResponse(n);const r=new Xs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await wu(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];re(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Sb(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Io;a.updateFromIdToken(s);const l=new Xs({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function Js(t){ii(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(ii(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rb.type="NONE";const Vv=Rb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ao{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=eu(this.userKey,i.apiKey,r),this.fullPersistenceKey=eu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ao(Js(Vv),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Js(Vv);const o=eu(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Xs._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ao(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ao(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Db(e))return"Blackberry";if(xb(e))return"Webos";if(pm(e))return"Safari";if((e.includes("chrome/")||kb(e))&&!e.includes("edge/"))return"Chrome";if(Ob(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pb(t=Rt()){return/firefox\//i.test(t)}function pm(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kb(t=Rt()){return/crios\//i.test(t)}function Nb(t=Rt()){return/iemobile/i.test(t)}function Ob(t=Rt()){return/android/i.test(t)}function Db(t=Rt()){return/blackberry/i.test(t)}function xb(t=Rt()){return/webos/i.test(t)}function fh(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qD(t=Rt()){var e;return fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zD(){return iO()&&document.documentMode===10}function Lb(t=Rt()){return fh(t)||Ob(t)||xb(t)||Db(t)||/windows phone/i.test(t)||Nb(t)}function KD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t,e=[]){let n;switch(t){case"Browser":n=Fv(Rt());break;case"Worker":n=`${Fv(Rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e={}){return Hs(t,"GET","/v2/passwordPolicy",di(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=6;class XD{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uv(this),this.idTokenSubscription=new Uv(this),this.beforeStateQueue=new GD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Js(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cb(this,{idToken:e}),s=await Xs._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cs(this.app))return Promise.reject(ni(this));const n=e?dt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cs(this.app)?Promise.reject(ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cs(this.app)?Promise.reject(ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Js(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QD(this),n=new XD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await WD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Js(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Js(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wi(t){return dt(t)}class Uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=fO(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZD(t){ph=t}function Vb(t){return ph.loadJS(t)}function ex(){return ph.recaptchaEnterpriseScript}function tx(){return ph.gapiScript}function nx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sx="recaptcha-enterprise",ix="NO_RECAPTCHA";class rx{constructor(e){this.type=sx,this.auth=Wi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{MD(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new LD(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;xv(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(ix)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&xv(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ex();l.length!==0&&(l+=a),Vb(l).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function $v(t,e,n,s=!1){const i=new rx(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Eu(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await $v(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $v(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t,e){const n=hi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(dl(r,e??{}))return i;ds(i,"already-initialized")}return n.initialize({options:e})}function ax(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Js);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lx(t,e,n){const s=Wi(t);re(s._canInitEmulator,s,"emulator-config-failed"),re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Fb(e),{host:o,port:a}=cx(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ux()}function Fb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cx(t){const e=Fb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:jv(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:jv(o)}}}function jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ux(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ys("not implemented")}_getIdTokenResponse(e){return Ys("not implemented")}_linkToIdToken(e,n){return Ys("not implemented")}_getReauthenticationResolver(e){return Ys("not implemented")}}async function hx(t,e){return Hs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",di(t,e))}async function fx(t,e){return Hs(t,"POST","/v1/accounts:sendOobCode",di(t,e))}async function px(t,e){return fx(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}async function gx(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends mm{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,n,"signInWithPassword",dx);case"emailLink":return mx(e,{email:this._email,oobCode:this._password});default:ds(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,s,"signUpPassword",hx);case"emailLink":return gx(e,{idToken:n,email:this._email,oobCode:this._password});default:ds(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="http://localhost";class Sr extends mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ds("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=um(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Sr(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Co(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:_x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vx(t){const e=Oa(Da(t)).link,n=e?Oa(Da(e)).deep_link_id:null,s=Oa(Da(t)).deep_link_id;return(s?Oa(Da(s)).link:null)||s||n||e||t}class gm{constructor(e){var n,s,i,r,o,a;const l=Oa(Da(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=yx((i=l.mode)!==null&&i!==void 0?i:null);re(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vx(e);try{return new gm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,n){return pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gm.parseLink(n);return re(s,"argument-error"),pl._fromEmailAndCode(e,s.code,s.tenantId)}}Zo.PROVIDER_ID="password";Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Ub{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Vl{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ai.credential(n,s)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Vl{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com";Ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Vl{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Si.credential(n,s)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){return Ml(t,"POST","/v1/accounts:signUp",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Xs._fromIdTokenResponse(e,s,i),o=Bv(s);return new Rr({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Bv(s);return new Rr({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Zn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Tu(e,n,s,i)}}function $b(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(t,r,e,s):r})}async function Ex(t,e,n=!1){const s=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e,n=!1){const{auth:s}=t;if(Cs(s.app))return Promise.reject(ni(s));const i="reauthenticate";try{const r=await Fo(t,$b(s,i,e,t),n);re(r.idToken,s,"internal-error");const o=fm(r.idToken);re(o,s,"internal-error");const{sub:a}=o;return re(t.uid===a,s,"user-mismatch"),Rr._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ds(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e,n=!1){if(Cs(t.app))return Promise.reject(ni(t));const s="signIn",i=await $b(t,s,e),r=await Rr._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function bx(t,e){return jb(Wi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e,n){var s;re(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),re(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(re(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(re(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t){const e=Wi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ax(t,e,n){const s=Wi(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ix(s,i,n),await Eu(s,i,"getOobCode",px)}async function Cx(t,e,n){if(Cs(t.app))return Promise.reject(ni(t));const s=Wi(t),o=await Eu(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wx).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bb(t),l}),a=await Rr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Sx(t,e,n){return Cs(t.app)?Promise.reject(ni(t)):bx(dt(t),Zo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Bb(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,e){return Hs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=dt(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fo(s,Rx(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function kx(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function Nx(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function Ox(t,e,n,s){return dt(t).onAuthStateChanged(e,n,s)}function Hb(t){return dt(t).signOut()}const bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){const t=Rt();return pm(t)||fh(t)}const xx=1e3,Lx=10;class qb extends Wb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dx()&&KD(),this.fallbackToPolling=Lb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);zD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qb.type="LOCAL";const Mx=qb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb extends Wb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zb.type="SESSION";const Kb=zb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new mh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await Vx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=_m("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(m.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){return window}function Ux(t){xs().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof xs().WorkerGlobalScope<"u"&&typeof xs().importScripts=="function"}async function $x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bx(){return Gb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="firebaseLocalStorageDb",Hx=1,Iu="firebaseLocalStorage",Yb="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function Wx(){const t=indexedDB.deleteDatabase(Qb);return new Fl(t).toPromise()}function Gf(){const t=indexedDB.open(Qb,Hx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Iu,{keyPath:Yb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Iu)?e(s):(s.close(),await Wx(),e(await Gf()))})})}async function Hv(t,e,n){const s=gh(t,!0).put({[Yb]:e,value:n});return new Fl(s).toPromise()}async function qx(t,e){const n=gh(t,!1).get(e),s=await new Fl(n).toPromise();return s===void 0?null:s.value}function Wv(t,e){const n=gh(t,!0).delete(e);return new Fl(n).toPromise()}const zx=800,Kx=3;class Xb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Kx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(Bx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $x(),!this.activeServiceWorker)return;this.sender=new Fx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await Hv(e,bu,"1"),await Wv(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gh(i,!1).getAll();return new Fl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xb.type="LOCAL";const Gx=Xb;new Ll(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e){return e?Js(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yx(t){return jb(t.auth,new ym(t),t.bypassAuthState)}function Xx(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Tx(n,new ym(t),t.bypassAuthState)}async function Jx(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Ex(n,new ym(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yx;case"linkViaPopup":case"linkViaRedirect":return Jx;case"reauthViaPopup":case"reauthViaRedirect":return Xx;default:ds(this.auth,"internal-error")}}resolve(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new Ll(2e3,1e4);class go extends Jb{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){ii(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ds(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ds(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ds(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zx.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL="pendingRedirect",tu=new Map;class tL extends Jb{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const s=await nL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nL(t,e){const n=rL(e),s=iL(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function sL(t,e){tu.set(t._key(),e)}function iL(t){return Js(t._redirectPersistence)}function rL(t){return eu(eL,t.config.apiKey,t.name)}async function oL(t,e,n=!1){if(Cs(t.app))return Promise.reject(ni(t));const s=Wi(t),i=Qx(s,e),o=await new tL(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=10*60*1e3;class lL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zb(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ds(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aL&&this.cachedEventUids.clear(),this.cachedEventUids.has(qv(e))}saveEventToCache(e){this.cachedEventUids.add(qv(e)),this.lastProcessedEventTime=Date.now()}}function qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(t,e={}){return Hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dL=/^https?/;async function fL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uL(t);for(const n of e)try{if(pL(n))return}catch{}ds(t,"unauthorized-domain")}function pL(t){const e=zf(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!dL.test(n))return!1;if(hL.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=new Ll(3e4,6e4);function zv(){const t=xs().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gL(t){return new Promise((e,n)=>{var s,i,r;function o(){zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zv(),n(Ds(t,"network-request-failed"))},timeout:mL.get()})}if(!((i=(s=xs().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=xs().gapi)===null||r===void 0)&&r.load)o();else{const a=nx("iframefcb");return xs()[a]=()=>{gapi.load?o():n(Ds(t,"network-request-failed"))},Vb(`${tx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nu=null,e})}let nu=null;function _L(t){return nu=nu||gL(t),nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=new Ll(5e3,15e3),vL="__/auth/iframe",wL="emulator/auth/iframe",EL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bL(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dm(e,wL):`https://${t.config.authDomain}/${vL}`,s={apiKey:e.apiKey,appName:t.name,v:Hi},i=TL.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Jo(s).slice(1)}`}async function IL(t){const e=await _L(t),n=xs().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:bL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EL,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ds(t,"network-request-failed"),a=xs().setTimeout(()=>{r(o)},yL.get());function l(){xs().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CL=500,SL=600,RL="_blank",PL="http://localhost";class Kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kL(t,e,n,s=CL,i=SL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AL),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Rt().toLowerCase();n&&(a=kb(u)?RL:n),Pb(u)&&(e=e||PL,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(qD(u)&&a!=="_self")return NL(e||"",a),new Kv(null);const f=window.open(e||"",a,h);re(f,t,"popup-blocked");try{f.focus()}catch{}return new Kv(f)}function NL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL="__/auth/handler",DL="emulator/auth/handler",xL=encodeURIComponent("fac");async function Gv(t,e,n,s,i,r){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hi,eventId:i};if(e instanceof Ub){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$f(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(r||{}))o[h]=f}if(e instanceof Vl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${xL}=${encodeURIComponent(l)}`:"";return`${LL(t)}?${Jo(a).slice(1)}${u}`}function LL({config:t}){return t.emulator?dm(t,DL):`https://${t.authDomain}/${OL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class ML{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kb,this._completeRedirectFn=oL,this._overrideRedirectResult=sL}async _openPopup(e,n,s,i){var r;ii((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Gv(e,n,s,zf(),i);return kL(e,o,_m())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Gv(e,n,s,zf(),i);return Ux(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ii(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await IL(e),s=new lL(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Xd];o!==void 0&&n(!!o),ds(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lb()||pm()||fh()}}const VL=ML;var Qv="@firebase/auth",Yv="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $L(t){Xn(new Ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mb(t)},u=new JD(s,i,r,l);return ax(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xn(new Ln("auth-internal",e=>{const n=Wi(e.getProvider("auth").getImmediate());return(s=>new FL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Qv,Yv,UL(t)),sn(Qv,Yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=5*60,BL=lb("authIdTokenMaxAge")||jL;let Xv=null;const HL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>BL)return;const i=n==null?void 0:n.token;Xv!==i&&(Xv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function an(t=xl()){const e=hi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ox(t,{popupRedirectResolver:VL,persistence:[Gx,Mx,Kb]}),s=lb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=HL(r.toString());Nx(n,o,()=>o(n.currentUser)),kx(n,a=>o(a))}}const i=ob("auth");return i&&lx(n,`http://${i}`),n}function WL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZD({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ds("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",WL().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$L("Browser");var qL="firebase",zL="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(qL,zL,"app");const eI="@firebase/installations",vm="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=1e4,nI=`w:${vm}`,sI="FIS_v2",KL="https://firebaseinstallations.googleapis.com/v1",GL=60*60*1e3,QL="installations",YL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pr=new Hr(QL,YL,XL);function iI(t){return t instanceof Zn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI({projectId:t}){return`${KL}/projects/${t}/installations`}function oI(t){return{token:t.token,requestStatus:2,expiresIn:ZL(t.expiresIn),creationTime:Date.now()}}async function aI(t,e){const s=(await e.json()).error;return Pr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function lI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JL(t,{refreshToken:e}){const n=lI(t);return n.append("Authorization",eM(e)),n}async function cI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ZL(t){return Number(t.replace("s","000"))}function eM(t){return`${sI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=rI(t),i=lI(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:sI,appId:t.appId,sdkVersion:nI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cI(()=>fetch(s,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:oI(u.authToken)}}else throw await aI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=/^[cdef][\w-]{21}$/,Qf="";function iM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rM(t);return sM.test(n)?n:Qf}catch{return Qf}}function rM(t){return nM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Map;function dI(t,e){const n=_h(t);fI(n,e),oM(n,e)}function fI(t,e){const n=hI.get(t);if(n)for(const s of n)s(e)}function oM(t,e){const n=aM();n&&n.postMessage({key:t,fid:e}),lM()}let pr=null;function aM(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=t=>{fI(t.data.key,t.data.fid)}),pr}function lM(){hI.size===0&&pr&&(pr.close(),pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="firebase-installations-database",uM=1,kr="firebase-installations-store";let Jd=null;function wm(){return Jd||(Jd=gb(cM,uM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}})),Jd}async function Au(t,e){const n=_h(t),i=(await wm()).transaction(kr,"readwrite"),r=i.objectStore(kr),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&dI(t,e.fid),e}async function pI(t){const e=_h(t),s=(await wm()).transaction(kr,"readwrite");await s.objectStore(kr).delete(e),await s.done}async function yh(t,e){const n=_h(t),i=(await wm()).transaction(kr,"readwrite"),r=i.objectStore(kr),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&dI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t){let e;const n=await yh(t.appConfig,s=>{const i=hM(s),r=dM(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Qf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hM(t){const e=t||{fid:iM(),registrationStatus:0};return mI(e)}function dM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fM(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pM(t)}:{installationEntry:e}}async function fM(t,e){try{const n=await tM(t,e);return Au(t.appConfig,n)}catch(n){throw iI(n)&&n.customData.serverCode===409?await pI(t.appConfig):await Au(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pM(t){let e=await Jv(t.appConfig);for(;e.registrationStatus===1;)await uI(100),e=await Jv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Em(t);return s||n}return e}function Jv(t){return yh(t,e=>{if(!e)throw Pr.create("installation-not-found");return mI(e)})}function mI(t){return mM(t)?{fid:t.fid,registrationStatus:0}:t}function mM(t){return t.registrationStatus===1&&t.registrationTime+tI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM({appConfig:t,heartbeatServiceProvider:e},n){const s=_M(t,n),i=JL(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:nI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cI(()=>fetch(s,a));if(l.ok){const u=await l.json();return oI(u)}else throw await aI("Generate Auth Token",l)}function _M(t,{fid:e}){return`${rI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e=!1){let n;const s=await yh(t.appConfig,r=>{if(!gI(r))throw Pr.create("not-registered");const o=r.authToken;if(!e&&wM(o))return r;if(o.requestStatus===1)return n=yM(t,e),r;{if(!navigator.onLine)throw Pr.create("app-offline");const a=TM(r);return n=vM(t,a),a}});return n?await n:s.authToken}async function yM(t,e){let n=await Zv(t.appConfig);for(;n.authToken.requestStatus===1;)await uI(100),n=await Zv(t.appConfig);const s=n.authToken;return s.requestStatus===0?Tm(t,e):s}function Zv(t){return yh(t,e=>{if(!gI(e))throw Pr.create("not-registered");const n=e.authToken;return bM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vM(t,e){try{const n=await gM(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Au(t.appConfig,s),n}catch(n){if(iI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pI(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Au(t.appConfig,s)}throw n}}function gI(t){return t!==void 0&&t.registrationStatus===2}function wM(t){return t.requestStatus===2&&!EM(t)}function EM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+GL}function TM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bM(t){return t.requestStatus===1&&t.requestTime+tI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IM(t){const e=t,{installationEntry:n,registrationPromise:s}=await Em(e);return s?s.catch(console.error):Tm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e=!1){const n=t;return await CM(n),(await Tm(n,e)).token}async function CM(t){const{registrationPromise:e}=await Em(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){if(!t||!t.options)throw Zd("App Configuration");if(!t.name)throw Zd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zd(t){return Pr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="installations",RM="installations-internal",PM=t=>{const e=t.getProvider("app").getImmediate(),n=SM(e),s=hi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kM=t=>{const e=t.getProvider("app").getImmediate(),n=hi(e,_I).getImmediate();return{getId:()=>IM(n),getToken:i=>AM(n,i)}};function NM(){Xn(new Ln(_I,PM,"PUBLIC")),Xn(new Ln(RM,kM,"PRIVATE"))}NM();sn(eI,vm);sn(eI,vm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="analytics",OM="firebase_id",DM="origin",xM=60*1e3,LM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Dl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},On=new Hr("analytics","Analytics",MM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(t){if(!t.startsWith(bm)){const e=On.create("invalid-gtag-resource",{gtagURL:t});return bn.warn(e.message),""}return t}function yI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function FM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function UM(t,e){const n=FM("firebase-js-sdk-policy",{createScriptURL:VM}),s=document.createElement("script"),i=`${bm}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function $M(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jM(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await yI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){bn.error(a)}t("config",i,r)}async function BM(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await yI(n);for(const l of o){const u=a.find(f=>f.measurementId===l),h=u&&e[u.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){bn.error(r)}}function HM(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await BM(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await jM(t,e,n,s,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){bn.error(a)}}return i}function WM(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=HM(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function qM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=30,KM=1e3;class GM{constructor(e={},n=KM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vI=new GM;function QM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YM(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:QM(s)},r=LM.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw On.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function XM(t,e=vI,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw On.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw On.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new eV;return setTimeout(async()=>{a.abort()},n!==void 0?n:xM),wI({appId:s,apiKey:i,measurementId:r},o,a,e)}async function wI(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=vI){var r;const{appId:o,measurementId:a}=t;try{await JM(s,e)}catch(l){if(a)return bn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await YM(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!ZM(u)){if(i.deleteThrottleMetadata(o),a)return bn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?Iv(n,i.intervalMillis,zM):Iv(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),bn.debug(`Calling attemptFetch again in ${h} millis`),wI(t,f,s,i)}}function JM(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(On.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZM(t){if(!(t instanceof Zn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tV(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nV(){if(lm())try{await db()}catch(t){return bn.warn(On.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bn.warn(On.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sV(t,e,n,s,i,r,o){var a;const l=XM(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&bn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>bn.error(_)),e.push(l);const u=nV().then(_=>{if(_)return s.getId()}),[h,f]=await Promise.all([l,u]);qM(r)||UM(r,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[DM]="firebase",m.update=!0,f!=null&&(m[OM]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.app=e}_delete(){return delete Ga[this.app.options.appId],Promise.resolve()}}let Ga={},ew=[];const tw={};let ef="dataLayer",rV="gtag",nw,EI,sw=!1;function oV(){const t=[];if(cb()&&t.push("This is a browser extension environment."),oO()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=On.create("invalid-analytics-context",{errorInfo:e});bn.warn(n.message)}}function aV(t,e,n){oV();const s=t.options.appId;if(!s)throw On.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw On.create("no-api-key");if(Ga[s]!=null)throw On.create("already-exists",{id:s});if(!sw){$M(ef);const{wrappedGtag:r,gtagCore:o}=WM(Ga,ew,tw,ef,rV);EI=r,nw=o,sw=!0}return Ga[s]=sV(t,ew,tw,e,nw,ef,n),new iV(t)}function lV(t=xl()){t=dt(t);const e=hi(t,Cu);return e.isInitialized()?e.getImmediate():cV(t)}function cV(t,e={}){const n=hi(t,Cu);if(n.isInitialized()){const i=n.getImmediate();if(dl(e,n.getOptions()))return i;throw On.create("already-initialized")}return n.initialize({options:e})}function uV(t,e,n,s){t=dt(t),tV(EI,Ga[t.app.options.appId],e,n,s).catch(i=>bn.error(i))}const iw="@firebase/analytics",rw="0.10.2";function hV(){Xn(new Ln(Cu,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aV(s,i,n)},"PUBLIC")),Xn(new Ln("analytics-internal",t,"PRIVATE")),sn(iw,rw),sn(iw,rw,"esm2017");function t(e){try{const n=e.getProvider(Cu).getImmediate();return{logEvent:(s,i,r)=>uV(n,s,i,r)}}catch(n){throw On.create("interop-component-reg-failed",{reason:n})}}}hV();var ow={};const aw="@firebase/database",lw="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TI="";function dV(t){TI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ui(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fV(e)}}catch{}return new pV},mr=bI("localStorage"),Yf=bI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Dl("@firebase/database"),mV=function(){let t=1;return function(){return t++}}(),II=function(t){const e=_O(t),n=new dO;n.update(e);const s=n.digest();return sm.encodeByteArray(s)},Ul=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ul.apply(null,s):typeof s=="object"?e+=Ht(s):e+=s,e+=" "}return e};let Tr=null,cw=!0;const gV=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(So.logLevel=Ce.VERBOSE,Tr=So.log.bind(So),e&&Yf.set("logging_enabled",!0)):typeof t=="function"?Tr=t:(Tr=null,Yf.remove("logging_enabled"))},Xt=function(...t){if(cw===!0&&(cw=!1,Tr===null&&Yf.get("logging_enabled")===!0&&gV(!0)),Tr){const e=Ul.apply(null,t);Tr(e)}},$l=function(t){return function(...e){Xt(t,...e)}},Xf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ul(...t);So.error(e)},ri=function(...t){const e=`FIREBASE FATAL ERROR: ${Ul(...t)}`;throw So.error(e),new Error(e)},Dn=function(...t){const e="FIREBASE WARNING: "+Ul(...t);So.warn(e)},_V=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},AI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Uo="[MIN_NAME]",Nr="[MAX_NAME]",ea=function(t,e){if(t===e)return 0;if(t===Uo||e===Nr)return-1;if(e===Uo||t===Nr)return 1;{const n=uw(t),s=uw(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vV=function(t,e){return t===e?0:t<e?-1:1},Ea=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ht(e))},Im=function(t){if(typeof t!="object"||t===null)return Ht(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ht(e[s]),n+=":",n+=Im(t[e[s]]);return n+="}",n},CI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Jn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const SI=function(t){K(!AI(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},wV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},TV=new RegExp("^-?(0*)\\d{1,10}$"),bV=-2147483648,IV=2147483647,uw=function(t){if(TV.test(t)){const e=Number(t);if(e>=bV&&e<=IV)return e}return null},jl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dn("Exception was thrown by user callback.",n),e},Math.floor(0))}},AV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Dn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dn(e)}}class Ro{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ro.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="5",RI="v",PI="s",kI="r",NI="f",OI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DI="ls",xI="p",Jf="ac",LI="websocket",MI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function FI(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let s;if(e===LI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===MI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RV(t)&&(n.ns=t.namespace);const i=[];return Jn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(){this.counters_={}}incrementCounter(e,n=1){ui(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return XN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={},nf={};function Cm(t){const e=t.toString();return tf[e]||(tf[e]=new PV),tf[e]}function kV(t,e){const n=t.toString();return nf[n]||(nf[n]=e()),nf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&jl(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="start",OV="close",DV="pLPCommand",xV="pRTLPCB",UI="id",$I="pw",jI="ser",LV="cb",MV="seg",VV="ts",FV="d",UV="dframe",BI=1870,HI=30,$V=BI-HI,jV=25e3,BV=3e4;class _o{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$l(e),this.stats_=Cm(n),this.urlFn=l=>(this.appCheckToken&&(l[Jf]=this.appCheckToken),FI(n,MI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BV)),yV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sm((...r)=>{const[o,a,l,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hw)this.id=a,this.password=l;else if(o===OV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[hw]="t",s[jI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[LV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[RI]=Am,this.transportSessionId&&(s[PI]=this.transportSessionId),this.lastSessionId&&(s[DI]=this.lastSessionId),this.applicationId&&(s[xI]=this.applicationId),this.appCheckToken&&(s[Jf]=this.appCheckToken),typeof location<"u"&&location.hostname&&OI.test(location.hostname)&&(s[kI]=NI);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_o.forceAllow_=!0}static forceDisallow(){_o.forceDisallow_=!0}static isAvailable(){return _o.forceAllow_?!0:!_o.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wV()&&!EV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ib(n),i=CI(s,$V);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[UV]="t",s[UI]=e,s[$I]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sm{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mV(),window[DV+this.uniqueCallbackIdentifier]=e,window[xV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xt("frame writing exception"),a.stack&&Xt(a.stack),Xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[UI]=this.myID,e[$I]=this.myPW,e[jI]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+HI+s.length<=BI;){const o=this.pendingSegs.shift();s=s+"&"+MV+i+"="+o.seg+"&"+VV+i+"="+o.ts+"&"+FV+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jV)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=16384,WV=45e3;let Su=null;typeof MozWebSocket<"u"?Su=MozWebSocket:typeof WebSocket<"u"&&(Su=WebSocket);class rs{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$l(this.connId),this.stats_=Cm(n),this.connURL=rs.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[RI]=Am,typeof location<"u"&&location.hostname&&OI.test(location.hostname)&&(o[kI]=NI),n&&(o[PI]=n),s&&(o[DI]=s),i&&(o[Jf]=i),r&&(o[xI]=r),FI(e,LI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mr.set("previous_websocket_failure",!0);try{let s;hb(),this.mySock=new Su(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Su!==null&&!rs.forceDisallow_}static previouslyFailed(){return mr.isInMemoryStorage||mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hl(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=CI(n,HV);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rs.responsesRequiredToBeHealthy=2;rs.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_o,rs]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rs&&rs.isAvailable();let s=n&&!rs.previouslyFailed();if(e.webSocketOnly&&(n||Dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rs];else{const i=this.transports_=[];for(const r of ml.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ml.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ml.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=6e4,zV=5e3,KV=10*1024,GV=100*1024,sf="t",dw="d",QV="s",fw="r",YV="e",pw="o",mw="a",gw="n",_w="p",XV="h";class JV{constructor(e,n,s,i,r,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$l("c:"+this.id+":"),this.transportManager_=new ml(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sf in e){const n=e[sf];n===mw?this.upgradeIfSecondaryHealthy_():n===fw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ea("t",e),s=Ea("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_w,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ea("t",e),s=Ea("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ea(sf,e);if(dw in e){const s=e[dw];if(n===XV){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QV?this.onConnectionShutdown_(s):n===fw?this.onReset_(s):n===YV?Xf("Server Error: "+s):n===pw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Am!==s&&Dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_w,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends qI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!am()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ru}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=32,vw=768;class ft{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function tt(){return new ft("")}function De(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vi(t){return t.pieces_.length-t.pieceNum_}function lt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ft(t.pieces_,e)}function zI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function KI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function GI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ft(e,0)}function Mt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ft)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ft(n,0)}function Ne(t){return t.pieceNum_>=t.pieces_.length}function Yn(t,e){const n=De(t),s=De(e);if(n===null)return e;if(n===s)return Yn(lt(t),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QI(t,e){if(Vi(t)!==Vi(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function as(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vi(t)>Vi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class eF{constructor(e,n){this.errorPrefix_=n,this.parts_=KI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dh(this.parts_[s]);YI(this)}}function tF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dh(e),YI(t)}function nF(t){const e=t.parts_.pop();t.byteLength_-=dh(e),t.parts_.length>0&&(t.byteLength_-=1)}function YI(t){if(t.byteLength_>vw)throw new Error(t.errorPrefix_+"has a key path longer than "+vw+" bytes ("+t.byteLength_+").");if(t.parts_.length>yw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yw+") or object contains a cycle "+cr(t))}function cr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends qI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Rm}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=1e3,sF=60*5*1e3,ww=30*1e3,iF=1.3,rF=3e4,oF="server_kill",Ew=3;class si extends WI{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=si.nextPersistentConnectionId_++,this.log_=$l("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ta,this.maxReconnectDelay_=sF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ru.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ht(r)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new rm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;si.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ui(e,"w")){const s=Vo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ht(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xf("Unrecognized action received from server: "+Ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ta,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ta,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rF&&(this.reconnectDelay_=Ta),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+si.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new JV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Dn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(oF)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Dn(f),l())}}}interrupt(e){Xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$f(this.interruptReasons_)&&(this.reconnectDelay_=Ta,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Im(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ft(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Xt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ew&&(this.reconnectDelay_=ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ew&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+TI.replace(/\./g,"-")]=1,am()?e["framework.cordova"]=1:ub()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ru.getInstance().currentlyOnline();return $f(this.interruptReasons_)&&e}}si.nextPersistentConnectionId_=0;si.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new xe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new xe(Uo,e),i=new xe(Uo,n);return this.compare(s,i)!==0}minPost(){return xe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;class XI extends vh{static get __EMPTY_NODE(){return Lc}static set __EMPTY_NODE(e){Lc=e}compare(e,n){return ea(e.name,n.name)}isDefinedOn(e){throw Xo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return xe.MIN}maxPost(){return new xe(Nr,Lc)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new xe(e,Lc)}toString(){return".key"}}const Po=new XI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Nn=class xa{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??xa.RED,this.left=i??Ss.EMPTY_NODE,this.right=r??Ss.EMPTY_NODE}copy(e,n,s,i,r){return new xa(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ss.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ss.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Nn.RED=!0;Nn.BLACK=!1;class aF{copy(e,n,s,i,r){return this}insert(e,n,s){return new Nn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ss=class su{constructor(e,n=su.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new su(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Nn.BLACK,null,null))}remove(e){return new su(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Nn.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mc(this.root_,null,this.comparator_,!0,e)}};Ss.EMPTY_NODE=new aF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(t,e){return ea(t.name,e.name)}function Pm(t,e){return ea(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;function cF(t){Zf=t}const JI=function(t){return typeof t=="number"?"number:"+SI(t):"string:"+t},ZI=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ui(e,".sv"),"Priority must be a string or number.")}else K(t===Zf||t.isEmpty(),"priority of unexpected type.");K(t===Zf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tw;class xt{constructor(e,n=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ZI(this.priorityNode_)}static set __childrenNodeConstructor(e){Tw=e}static get __childrenNodeConstructor(){return Tw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ne(e)?this:De(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=De(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||Vi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+JI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=SI(this.value_):e+=this.value_,this.lazyHash_=II(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=xt.VALUE_TYPE_ORDER.indexOf(n),r=xt.VALUE_TYPE_ORDER.indexOf(s);return K(i>=0,"Unknown leaf type: "+n),K(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA,tA;function uF(t){eA=t}function hF(t){tA=t}class dF extends vh{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ea(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return xe.MIN}maxPost(){return new xe(Nr,new xt("[PRIORITY-POST]",tA))}makePost(e,n){const s=eA(e);return new xe(n,new xt("[PRIORITY-POST]",s))}toString(){return".priority"}}const nn=new dF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=Math.log(2);class pF{constructor(e){const n=r=>parseInt(Math.log(r)/fF,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pu=function(t,e,n,s){t.sort(e);const i=function(l,u){const h=u-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new Nn(m,f.node,Nn.BLACK,null,null);{const _=parseInt(h/2,10)+l,b=i(l,_),C=i(_+1,u);return f=t[_],m=n?n(f):f,new Nn(m,f.node,Nn.BLACK,b,C)}},r=function(l){let u=null,h=null,f=t.length;const m=function(b,C){const I=f-b,O=f;f-=b;const D=i(I+1,O),B=t[I],J=n?n(B):B;_(new Nn(J,B.node,C,null,D))},_=function(b){u?(u.left=b,u=b):(h=b,u=b)};for(let b=0;b<l.count;++b){const C=l.nextBitIsOne(),I=Math.pow(2,l.count-(b+1));C?m(I,Nn.BLACK):(m(I,Nn.BLACK),m(I,Nn.RED))}return h},o=new pF(t.length),a=r(o);return new Ss(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;const lo={};class Zs{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(lo&&nn,"ChildrenNode.ts has not been loaded"),rf=rf||new Zs({".priority":lo},{".priority":nn}),rf}get(e){const n=Vo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ss?n:null}hasIndex(e){return ui(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Po,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(xe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Pu(s,e.getCompare()):a=lo;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Zs(h,u)}addToIndexes(e,n){const s=_u(this.indexes_,(i,r)=>{const o=Vo(this.indexSet_,r);if(K(o,"Missing index implementation for "+r),i===lo)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(xe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Pu(a,o.getCompare())}else return lo;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new xe(e.name,a))),l.insert(e,e.node)}});return new Zs(s,this.indexSet_)}removeFromIndexes(e,n){const s=_u(this.indexes_,i=>{if(i===lo)return i;{const r=n.get(e.name);return r?i.remove(new xe(e.name,r)):i}});return new Zs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;class Ke{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ZI(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ba||(ba=new Ke(new Ss(Pm),null,Zs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ba}updatePriority(e){return this.children_.isEmpty()?this:new Ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ba:n}}getChild(e){const n=De(e);return n===null?this:this.getImmediateChild(n).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new xe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ba:this.priorityNode_;return new Ke(i,o,r)}}updateChild(e,n){const s=De(e);if(s===null)return n;{K(De(e)!==".priority"||Vi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(lt(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(nn,(o,a)=>{n[o]=a.val(e),s++,r&&Ke.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+JI(this.getPriority().val())+":"),this.forEachChild(nn,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":II(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new xe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new xe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new xe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,xe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,xe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bl?-1:0}withIndex(e){if(e===Po||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Po||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(nn),i=n.getIterator(nn);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Po?null:this.indexMap_.get(e.toString())}}Ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mF extends Ke{constructor(){super(new Ss(Pm),Ke.EMPTY_NODE,Zs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ke.EMPTY_NODE}isEmpty(){return!1}}const Bl=new mF;Object.defineProperties(xe,{MIN:{value:new xe(Uo,Ke.EMPTY_NODE)},MAX:{value:new xe(Nr,Bl)}});XI.__EMPTY_NODE=Ke.EMPTY_NODE;xt.__childrenNodeConstructor=Ke;cF(Bl);hF(Bl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=!0;function Jt(t,e=null){if(t===null)return Ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xt(n,Jt(e))}if(!(t instanceof Array)&&gF){const n=[];let s=!1;if(Jn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Jt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new xe(o,l)))}}),n.length===0)return Ke.EMPTY_NODE;const r=Pu(n,lF,o=>o.name,Pm);if(s){const o=Pu(n,nn.getCompare());return new Ke(r,Jt(e),new Zs({".priority":o},{".priority":nn}))}else return new Ke(r,Jt(e),Zs.Default)}else{let n=Ke.EMPTY_NODE;return Jn(t,(s,i)=>{if(ui(t,s)&&s.substring(0,1)!=="."){const r=Jt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Jt(e))}}uF(Jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F extends vh{constructor(e){super(),this.indexPath_=e,K(!Ne(e)&&De(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ea(e.name,n.name):r}makePost(e,n){const s=Jt(e),i=Ke.EMPTY_NODE.updateChild(this.indexPath_,s);return new xe(n,i)}maxPost(){const e=Ke.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new xe(Nr,e)}toString(){return KI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF extends vh{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ea(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return xe.MIN}maxPost(){return xe.MAX}makePost(e,n){const s=Jt(e);return new xe(n,s)}toString(){return".value"}}const vF=new yF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wF(t){return{type:"value",snapshotNode:t}}function EF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function TF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Uo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nn}copy(){const e=new km;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Iw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===nn?n="$priority":t.index_===vF?n="$value":t.index_===Po?n="$key":(K(t.index_ instanceof _F,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ht(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ht(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ht(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ht(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Aw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==nn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends WI{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$l("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ku.getListenId_(e,s),a={};this.listens_[o]=a;const l=Iw(e._queryParams);this.restRequest_(r+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),Vo(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const s=ku.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Iw(e._queryParams),s=e._path.toString(),i=new rm;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hl(a.responseText)}catch{Dn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Dn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(){this.rootNode_=Ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){return{value:null,children:new Map}}function nA(t,e,n){if(Ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=De(e);t.children.has(s)||t.children.set(s,Nu());const i=t.children.get(s);e=lt(e),nA(i,e,n)}}function ep(t,e,n){t.value!==null?n(e,t.value):AF(t,(s,i)=>{const r=new ft(e.toString()+"/"+s);ep(i,r,n)})}function AF(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=10*1e3,SF=30*1e3,RF=5*60*1e3;class PF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CF(e);const s=Cw+(SF-Cw)*Math.random();Qa(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Jn(e,(i,r)=>{r>0&&ui(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qa(this.reportStats_.bind(this),Math.floor(Math.random()*2*RF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rs;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rs||(Rs={}));function sA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Rs.ACK_USER_WRITE,this.source=sA()}operationForChild(e){if(Ne(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ft(e));return new Ou(tt(),n,this.revert)}}else return K(De(this.path)===e,"operationForChild called for unrelated child."),new Ou(lt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Rs.OVERWRITE}operationForChild(e){return Ne(this.path)?new Or(this.source,tt(),this.snap.getImmediateChild(e)):new Or(this.source,lt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Rs.MERGE}operationForChild(e){if(Ne(this.path)){const n=this.children.subtree(new ft(e));return n.isEmpty()?null:n.value?new Or(this.source,tt(),n.value):new gl(this.source,tt(),n)}else return K(De(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gl(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=De(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kF(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bF(o.childName,o.snapshotNode))}),Ia(t,i,"child_removed",e,s,n),Ia(t,i,"child_added",e,s,n),Ia(t,i,"child_moved",r,s,n),Ia(t,i,"child_changed",e,s,n),Ia(t,i,"value",e,s,n),i}function Ia(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>OF(t,a,l)),o.forEach(a=>{const l=NF(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function NF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OF(t,e,n){if(e.childName==null||n.childName==null)throw Xo("Should only compare child_ events.");const s=new xe(e.childName,e.snapshotNode),i=new xe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e){return{eventCache:t,serverCache:e}}function Ya(t,e,n,s){return oA(new Nm(e,n,s),t.serverCache)}function aA(t,e,n,s){return oA(t.eventCache,new Nm(e,n,s))}function tp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const DF=()=>(of||(of=new Ss(vV)),of);class ot{constructor(e,n=DF()){this.value=e,this.children=n}static fromObject(e){let n=new ot(null);return Jn(e,(s,i)=>{n=n.set(new ft(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:tt(),value:this.value};if(Ne(e))return null;{const s=De(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(lt(e),n);return r!=null?{path:Mt(new ft(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ne(e))return this;{const n=De(e),s=this.children.get(n);return s!==null?s.subtree(lt(e)):new ot(null)}}set(e,n){if(Ne(e))return new ot(n,this.children);{const s=De(e),r=(this.children.get(s)||new ot(null)).set(lt(e),n),o=this.children.insert(s,r);return new ot(this.value,o)}}remove(e){if(Ne(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const n=De(e),s=this.children.get(n);if(s){const i=s.remove(lt(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ot(null):new ot(this.value,r)}else return this}}get(e){if(Ne(e))return this.value;{const n=De(e),s=this.children.get(n);return s?s.get(lt(e)):null}}setTree(e,n){if(Ne(e))return n;{const s=De(e),r=(this.children.get(s)||new ot(null)).setTree(lt(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ot(this.value,o)}}fold(e){return this.fold_(tt(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Mt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,tt(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Ne(e))return null;{const r=De(e),o=this.children.get(r);return o?o.findOnPath_(lt(e),Mt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,tt(),n)}foreachOnPath_(e,n,s){if(Ne(e))return this;{this.value&&s(n,this.value);const i=De(e),r=this.children.get(i);return r?r.foreachOnPath_(lt(e),Mt(n,i),s):new ot(null)}}foreach(e){this.foreach_(tt(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Mt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.writeTree_=e}static empty(){return new us(new ot(null))}}function Xa(t,e,n){if(Ne(e))return new us(new ot(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Yn(i,e);return r=r.updateChild(o,n),new us(t.writeTree_.set(i,r))}else{const i=new ot(n),r=t.writeTree_.setTree(e,i);return new us(r)}}}function Sw(t,e,n){let s=t;return Jn(n,(i,r)=>{s=Xa(s,Mt(e,i),r)}),s}function Rw(t,e){if(Ne(e))return us.empty();{const n=t.writeTree_.setTree(e,new ot(null));return new us(n)}}function np(t,e){return Wr(t,e)!=null}function Wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Yn(n.path,e)):null}function Pw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nn,(s,i)=>{e.push(new xe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new xe(s,i.value))}),e}function xi(t,e){if(Ne(e))return t;{const n=Wr(t,e);return n!=null?new us(new ot(n)):new us(t.writeTree_.subtree(e))}}function sp(t){return t.writeTree_.isEmpty()}function $o(t,e){return lA(tt(),t.writeTree_,e)}function lA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(K(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=lA(Mt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Mt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t,e){return pA(e,t)}function xF(t,e,n,s,i){K(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xa(t.visibleWrites,e,n)),t.lastWriteId=s}function LF(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function MF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&VF(a,s.path)?i=!1:as(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return FF(t),!0;if(s.snap)t.visibleWrites=Rw(t.visibleWrites,s.path);else{const a=s.children;Jn(a,l=>{t.visibleWrites=Rw(t.visibleWrites,Mt(s.path,l))})}return!0}else return!1}function VF(t,e){if(t.snap)return as(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&as(Mt(t.path,n),e))return!0;return!1}function FF(t){t.visibleWrites=uA(t.allWrites,UF,tt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UF(t){return t.visible}function uA(t,e,n){let s=us.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)as(n,o)?(a=Yn(n,o),s=Xa(s,a,r.snap)):as(o,n)&&(a=Yn(o,n),s=Xa(s,tt(),r.snap.getChild(a)));else if(r.children){if(as(n,o))a=Yn(n,o),s=Sw(s,a,r.children);else if(as(o,n))if(a=Yn(o,n),Ne(a))s=Sw(s,tt(),r.children);else{const l=Vo(r.children,De(a));if(l){const u=l.getChild(lt(a));s=Xa(s,tt(),u)}}}else throw Xo("WriteRecord should have .snap or .children")}}return s}function hA(t,e,n,s,i){if(!s&&!i){const r=Wr(t.visibleWrites,e);if(r!=null)return r;{const o=xi(t.visibleWrites,e);if(sp(o))return n;if(n==null&&!np(o,tt()))return null;{const a=n||Ke.EMPTY_NODE;return $o(o,a)}}}else{const r=xi(t.visibleWrites,e);if(!i&&sp(r))return n;if(!i&&n==null&&!np(r,tt()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(as(u.path,e)||as(e,u.path))},a=uA(t.allWrites,o,e),l=n||Ke.EMPTY_NODE;return $o(a,l)}}}function $F(t,e,n){let s=Ke.EMPTY_NODE;const i=Wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(nn,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xi(t.visibleWrites,e);return n.forEachChild(nn,(o,a)=>{const l=$o(xi(r,new ft(o)),a);s=s.updateImmediateChild(o,l)}),Pw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xi(t.visibleWrites,e);return Pw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jF(t,e,n,s,i){K(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Mt(e,n);if(np(t.visibleWrites,r))return null;{const o=xi(t.visibleWrites,r);return sp(o)?i.getChild(n):$o(o,i.getChild(n))}}function BF(t,e,n,s){const i=Mt(e,n),r=Wr(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xi(t.visibleWrites,i);return $o(o,s.getNode().getImmediateChild(n))}else return null}function HF(t,e){return Wr(t.visibleWrites,e)}function WF(t,e,n,s,i,r,o){let a;const l=xi(t.visibleWrites,e),u=Wr(l,tt());if(u!=null)a=u;else if(n!=null)a=$o(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=m.getNext();for(;_&&h.length<i;)f(_,s)!==0&&h.push(_),_=m.getNext();return h}else return[]}function qF(){return{visibleWrites:us.empty(),allWrites:[],lastWriteId:-1}}function ip(t,e,n,s){return hA(t.writeTree,t.treePath,e,n,s)}function dA(t,e){return $F(t.writeTree,t.treePath,e)}function kw(t,e,n,s){return jF(t.writeTree,t.treePath,e,n,s)}function Du(t,e){return HF(t.writeTree,Mt(t.treePath,e))}function zF(t,e,n,s,i,r){return WF(t.writeTree,t.treePath,e,n,s,i,r)}function Om(t,e,n){return BF(t.writeTree,t.treePath,e,n)}function fA(t,e){return pA(Mt(t.treePath,e),t.writeTree)}function pA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,bw(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,TF(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,EF(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,bw(s,e.snapshotNode,i.oldSnap));else throw Xo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mA=new GF;class Dm{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Om(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dr(this.viewCache_),r=zF(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function QF(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function YF(t,e,n,s,i){const r=new KF;let o,a;if(n.type===Rs.OVERWRITE){const u=n;u.source.fromUser?o=rp(t,e,u.path,u.snap,s,i,r):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ne(u.path),o=xu(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===Rs.MERGE){const u=n;u.source.fromUser?o=JF(t,e,u.path,u.children,s,i,r):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=op(t,e,u.path,u.children,s,i,a,r))}else if(n.type===Rs.ACK_USER_WRITE){const u=n;u.revert?o=t2(t,e,u.path,s,i,r):o=ZF(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Rs.LISTEN_COMPLETE)o=e2(t,e,n.path,s,r);else throw Xo("Unknown operation type: "+n.type);const l=r.getChanges();return XF(e,o,l),{viewCache:o,changes:l}}function XF(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(wF(tp(e)))}}function gA(t,e,n,s,i,r){const o=e.eventCache;if(Du(s,n)!=null)return e;{let a,l;if(Ne(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Dr(e),h=u instanceof Ke?u:Ke.EMPTY_NODE,f=dA(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=ip(s,Dr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=De(n);if(u===".priority"){K(Vi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=kw(s,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=lt(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=kw(s,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=Om(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,i,r):a=o.getNode()}}return Ya(e,a,o.isFullyInitialized()||Ne(n),t.filter.filtersNodes())}}function xu(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ne(n))u=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);u=h.updateFullNode(l.getNode(),_,null)}else{const _=De(n);if(!l.isCompleteForPath(n)&&Vi(n)>1)return e;const b=lt(n),I=l.getNode().getImmediateChild(_).updateChild(b,s);_===".priority"?u=h.updatePriority(l.getNode(),I):u=h.updateChild(l.getNode(),_,I,b,mA,null)}const f=aA(e,u,l.isFullyInitialized()||Ne(n),h.filtersNodes()),m=new Dm(i,f,r);return gA(t,f,n,i,m,a)}function rp(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const h=new Dm(i,e,r);if(Ne(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ya(e,u,!0,t.filter.filtersNodes());else{const f=De(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ya(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=lt(n),_=a.getNode().getImmediateChild(f);let b;if(Ne(m))b=s;else{const C=h.getCompleteChild(f);C!=null?zI(m)===".priority"&&C.getChild(GI(m)).isEmpty()?b=C:b=C.updateChild(m,s):b=Ke.EMPTY_NODE}if(_.equals(b))l=e;else{const C=t.filter.updateChild(a.getNode(),f,b,m,h,o);l=Ya(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nw(t,e){return t.eventCache.isCompleteForChild(e)}function JF(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const h=Mt(n,l);Nw(e,De(h))&&(a=rp(t,a,h,u,i,r,o))}),s.foreach((l,u)=>{const h=Mt(n,l);Nw(e,De(h))||(a=rp(t,a,h,u,i,r,o))}),a}function Ow(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function op(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Ne(n)?u=s:u=new ot(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),b=Ow(t,_,m);l=xu(t,l,new ft(f),b,i,r,o,a)}}),u.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const b=e.serverCache.getNode().getImmediateChild(f),C=Ow(t,b,m);l=xu(t,l,new ft(f),C,i,r,o,a)}}),l}function ZF(t,e,n,s,i,r,o){if(Du(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xu(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Ne(n)){let u=new ot(null);return l.getNode().forEachChild(Po,(h,f)=>{u=u.set(new ft(h),f)}),op(t,e,n,u,i,r,a,o)}else return e}else{let u=new ot(null);return s.foreach((h,f)=>{const m=Mt(n,h);l.isCompleteForPath(m)&&(u=u.set(h,l.getNode().getChild(m)))}),op(t,e,n,u,i,r,a,o)}}function e2(t,e,n,s,i){const r=e.serverCache,o=aA(e,r.getNode(),r.isFullyInitialized()||Ne(n),r.isFiltered());return gA(t,o,n,s,mA,i)}function t2(t,e,n,s,i,r){let o;if(Du(s,n)!=null)return e;{const a=new Dm(s,e,i),l=e.eventCache.getNode();let u;if(Ne(n)||De(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ip(s,Dr(e));else{const f=e.serverCache.getNode();K(f instanceof Ke,"serverChildren would be complete if leaf node"),h=dA(s,f)}h=h,u=t.filter.updateFullNode(l,h,r)}else{const h=De(n);let f=Om(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,lt(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,Ke.EMPTY_NODE,lt(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ip(s,Dr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Du(s,tt())!=null,Ya(e,u,o,t.filter.filtersNodes())}}function n2(t,e){const n=Dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ne(e)&&!n.getImmediateChild(De(e)).isEmpty())?n.getChild(e):null}function Dw(t,e,n,s){e.type===Rs.MERGE&&e.source.queryId!==null&&(K(Dr(t.viewCache_),"We should always have a full cache before handling merges"),K(tp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=YF(t.processor_,i,e,n,s);return QF(t.processor_,r.viewCache),K(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,s2(t,r.changes,r.viewCache.eventCache.getNode(),null)}function s2(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return kF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xw;function i2(t){K(!xw,"__referenceConstructor has already been defined"),xw=t}function xm(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return K(r!=null,"SyncTree gave us an op for an invalid query."),Dw(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dw(o,e,n,s));return r}}function Lm(t,e){let n=null;for(const s of t.views.values())n=n||n2(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lw;function r2(t){K(!Lw,"__referenceConstructor has already been defined"),Lw=t}class Mw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=qF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o2(t,e,n,s,i){return xF(t.pendingWriteTree_,e,n,s,i),i?Eh(t,new Or(sA(),e,n)):[]}function yo(t,e,n=!1){const s=LF(t.pendingWriteTree_,e);if(MF(t.pendingWriteTree_,e)){let r=new ot(null);return s.snap!=null?r=r.set(tt(),!0):Jn(s.children,o=>{r=r.set(new ft(o),!0)}),Eh(t,new Ou(s.path,r,n))}else return[]}function wh(t,e,n){return Eh(t,new Or(iA(),e,n))}function a2(t,e,n){const s=ot.fromObject(n);return Eh(t,new gl(iA(),e,s))}function l2(t,e,n,s){const i=wA(t,s);if(i!=null){const r=EA(i),o=r.path,a=r.queryId,l=Yn(o,e),u=new Or(rA(a),l,n);return TA(t,o,u)}else return[]}function c2(t,e,n,s){const i=wA(t,s);if(i){const r=EA(i),o=r.path,a=r.queryId,l=Yn(o,e),u=ot.fromObject(n),h=new gl(rA(a),l,u);return TA(t,o,h)}else return[]}function _A(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Yn(o,e),u=Lm(a,l);if(u)return u});return hA(i,e,r,n,!0)}function Eh(t,e){return yA(e,t.syncPointTree_,null,cA(t.pendingWriteTree_,tt()))}function yA(t,e,n,s){if(Ne(t.path))return vA(t,e,n,s);{const i=e.get(tt());n==null&&i!=null&&(n=Lm(i,tt()));let r=[];const o=De(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=fA(s,o);r=r.concat(yA(a,l,u,h))}return i&&(r=r.concat(xm(i,t,s,n))),r}}function vA(t,e,n,s){const i=e.get(tt());n==null&&i!=null&&(n=Lm(i,tt()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=fA(s,o),h=t.operationForChild(o);h&&(r=r.concat(vA(h,a,l,u)))}),i&&(r=r.concat(xm(i,t,s,n))),r}function wA(t,e){return t.tagToQueryMap.get(e)}function EA(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ft(t.substr(0,e))}}function TA(t,e,n){const s=t.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const i=cA(t.pendingWriteTree_,e);return xm(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mm(n)}node(){return this.node_}}class Vm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Mt(this.path_,e);return new Vm(this.syncTree_,n)}node(){return _A(this.syncTree_,this.path_)}}const u2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vw=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return h2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return d2(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},h2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},d2=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},f2=function(t,e,n,s){return Fm(e,new Vm(n,t),s)},p2=function(t,e,n){return Fm(t,new Mm(e),n)};function Fm(t,e,n){const s=t.getPriority().val(),i=Vw(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xt(a,Jt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new xt(i))),o.forEachChild(nn,(a,l)=>{const u=Fm(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $m(t,e){let n=e instanceof ft?e:new ft(e),s=t,i=De(n);for(;i!==null;){const r=Vo(s.node.children,i)||{children:{},childCount:0};s=new Um(i,s,r),n=lt(n),i=De(n)}return s}function ta(t){return t.node.value}function bA(t,e){t.node.value=e,ap(t)}function IA(t){return t.node.childCount>0}function m2(t){return ta(t)===void 0&&!IA(t)}function Th(t,e){Jn(t.node.children,(n,s)=>{e(new Um(n,t,s))})}function AA(t,e,n,s){n&&!s&&e(t),Th(t,i=>{AA(i,e,!0,s)}),n&&s&&e(t)}function g2(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hl(t){return new ft(t.parent===null?t.name:Hl(t.parent)+"/"+t.name)}function ap(t){t.parent!==null&&_2(t.parent,t.name,t)}function _2(t,e,n){const s=m2(n),i=ui(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ap(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ap(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/[\[\].#$\/\u0000-\u001F\u007F]/,v2=/[\[\].#$\u0000-\u001F\u007F]/,af=10*1024*1024,CA=function(t){return typeof t=="string"&&t.length!==0&&!y2.test(t)},w2=function(t){return typeof t=="string"&&t.length!==0&&!v2.test(t)},E2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),w2(t)},SA=function(t,e,n){const s=n instanceof ft?new eF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cr(s));if(typeof e=="function")throw new Error(t+"contains a function "+cr(s)+" with contents = "+e.toString());if(AI(e))throw new Error(t+"contains "+e.toString()+" "+cr(s));if(typeof e=="string"&&e.length>af/3&&dh(e)>af)throw new Error(t+"contains a string greater than "+af+" utf8 bytes "+cr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Jn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!CA(o)))throw new Error(t+" contains an invalid key ("+o+") "+cr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tF(s,o),SA(t,a,s),nF(s)}),i&&r)throw new Error(t+' contains ".value" child '+cr(s)+" in addition to actual children.")}},T2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!CA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!E2(n))throw new Error(gO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function I2(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!QI(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qr(t,e,n){I2(t,n),A2(t,s=>as(s,e)||as(e,s))}function A2(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(C2(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function C2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Tr&&Xt("event: "+n.toString()),jl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="repo_interrupt",R2=25;class P2{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nu(),this.transactionQueueTree_=new Um,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function k2(t,e,n){if(t.stats_=Cm(t.repoInfo_),t.forceRestClient_||AV())t.server_=new ku(t.repoInfo_,(s,i,r,o)=>{Fw(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ht(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new si(t.repoInfo_,e,(s,i,r,o)=>{Fw(t,s,i,r,o)},s=>{Uw(t,s)},s=>{O2(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=kV(t.repoInfo_,()=>new PF(t.stats_,t.server_)),t.infoData_=new IF,t.infoSyncTree_=new Mw({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=wh(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jm(t,"connected",!1),t.serverSyncTree_=new Mw({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);qr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function N2(t){const n=t.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function RA(t){return u2({timestamp:N2(t)})}function Fw(t,e,n,s,i){t.dataUpdateCount++;const r=new ft(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=_u(n,u=>Jt(u));o=c2(t.serverSyncTree_,r,l,i)}else{const l=Jt(n);o=l2(t.serverSyncTree_,r,l,i)}else if(s){const l=_u(n,u=>Jt(u));o=a2(t.serverSyncTree_,r,l)}else{const l=Jt(n);o=wh(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Hm(t,r)),qr(t.eventQueue_,a,o)}function Uw(t,e){jm(t,"connected",e),e===!1&&x2(t)}function O2(t,e){Jn(e,(n,s)=>{jm(t,n,s)})}function jm(t,e,n){const s=new ft("/.info/"+e),i=Jt(n);t.infoData_.updateSnapshot(s,i);const r=wh(t.infoSyncTree_,s,i);qr(t.eventQueue_,s,r)}function D2(t){return t.nextWriteId_++}function x2(t){PA(t,"onDisconnectEvents");const e=RA(t),n=Nu();ep(t.onDisconnect_,tt(),(i,r)=>{const o=f2(i,r,t.serverSyncTree_,e);nA(n,i,o)});let s=[];ep(n,tt(),(i,r)=>{s=s.concat(wh(t.serverSyncTree_,i,r));const o=F2(t,i);Hm(t,o)}),t.onDisconnect_=Nu(),qr(t.eventQueue_,tt(),s)}function L2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(S2)}function PA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xt(n,...e)}function kA(t,e,n){return _A(t.serverSyncTree_,e,n)||Ke.EMPTY_NODE}function Bm(t,e=t.transactionQueueTree_){if(e||bh(t,e),ta(e)){const n=OA(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&M2(t,Hl(e),n)}else IA(e)&&Th(e,n=>{Bm(t,n)})}function M2(t,e,n){const s=n.map(u=>u.currentWriteId),i=kA(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];K(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Yn(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{PA(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(yo(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();bh(t,$m(t.transactionQueueTree_,e)),Bm(t,t.transactionQueueTree_),qr(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)jl(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Dn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Hm(t,e)}},o)}function Hm(t,e){const n=NA(t,e),s=Hl(n),i=OA(t,n);return V2(t,i,s),s}function V2(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Yn(n,l.path);let h=!1,f;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(yo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=R2)h=!0,f="maxretry",i=i.concat(yo(t.serverSyncTree_,l.currentWriteId,!0));else{const m=kA(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){SA("transaction failed: Data returned ",_,l.path);let b=Jt(_);typeof _=="object"&&_!=null&&ui(_,".priority")||(b=b.updatePriority(m.getPriority()));const I=l.currentWriteId,O=RA(t),D=p2(b,m,O);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=D,l.currentWriteId=D2(t),o.splice(o.indexOf(I),1),i=i.concat(o2(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),i=i.concat(yo(t.serverSyncTree_,I,!0))}else h=!0,f="nodata",i=i.concat(yo(t.serverSyncTree_,l.currentWriteId,!0))}qr(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}bh(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)jl(s[a]);Bm(t,t.transactionQueueTree_)}function NA(t,e){let n,s=t.transactionQueueTree_;for(n=De(e);n!==null&&ta(s)===void 0;)s=$m(s,n),e=lt(e),n=De(e);return s}function OA(t,e){const n=[];return DA(t,e,n),n.sort((s,i)=>s.order-i.order),n}function DA(t,e,n){const s=ta(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Th(e,i=>{DA(t,i,n)})}function bh(t,e){const n=ta(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,bA(e,n.length>0?n:void 0)}Th(e,s=>{bh(t,s)})}function F2(t,e){const n=Hl(NA(t,e)),s=$m(t.transactionQueueTree_,e);return g2(s,i=>{lf(t,i)}),lf(t,s),AA(s,i=>{lf(t,i)}),n}function lf(t,e){const n=ta(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?bA(e,void 0):n.length=r+1,qr(t.eventQueue_,Hl(e),i);for(let o=0;o<s.length;o++)jl(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dn(`Invalid query segment '${n}' in query '${t}'`)}return e}const $w=function(t,e){const n=j2(t),s=n.namespace;n.domain==="firebase.com"&&ri(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_V();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new VI(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ft(n.pathString)}},j2=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=U2(t.substring(h,f)));const m=$2(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Ne(this._path)?null:zI(this._path)}get ref(){return new na(this._repo,this._path)}get _queryIdentifier(){const e=Aw(this._queryParams),n=Im(e);return n==="{}"?"default":n}get _queryObject(){return Aw(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof Wm))return!1;const n=this._repo===e._repo,s=QI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZV(this._path)}}class na extends Wm{constructor(e,n){super(e,n,new km,!1)}get parent(){const e=GI(this._path);return e===null?null:new na(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}i2(na);r2(na);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2="FIREBASE_DATABASE_EMULATOR_HOST",lp={};let H2=!1;function W2(t,e,n,s){t.repoInfo_=new VI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function q2(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$w(r,i),a=o.repoInfo,l,u;typeof process<"u"&&ow&&(u=ow[B2]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=$w(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Ro(Ro.OWNER):new SV(t.name,t.options,e);T2("Invalid Firebase Database URL",o),Ne(o.path)||ri("Database URL must point to the root of a Firebase Database (not including a child path).");const f=K2(a,t,h,new CV(t.name,n));return new G2(f,t)}function z2(t,e){const n=lp[e];(!n||n[t.key]!==t)&&ri(`Database ${e}(${t.repoInfo_}) has already been deleted.`),L2(t),delete n[t.key]}function K2(t,e,n,s){let i=lp[e.name];i||(i={},lp[e.name]=i);let r=i[t.toURLString()];return r&&ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new P2(t,H2,n,s),i[t.toURLString()]=r,r}class G2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(k2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new na(this._repo,tt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(z2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ri("Cannot call "+e+" on a deleted database.")}}function Q2(t=xl(),e){const n=hi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=im("database");s&&Y2(n,...s)}return n}function Y2(t,e,n,s={}){t=dt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ri("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ri('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ro(Ro.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:om(s.mockUserToken,t.app.options.projectId);r=new Ro(o)}W2(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){dV(Hi),Xn(new Ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q2(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(aw,lw,t),sn(aw,lw,"esm2017")}si.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};si.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};X2();var J2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,qm=qm||{},fe=J2||self;function Ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z2(t){return Object.prototype.hasOwnProperty.call(t,cf)&&t[cf]||(t[cf]=++eU)}var cf="closure_uid_"+(1e9*Math.random()>>>0),eU=0;function tU(t,e,n){return t.call.apply(t.bind,arguments)}function nU(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rn=tU:rn=nU,rn.apply(null,arguments)}function Vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ut(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function qi(){this.s=this.s,this.o=this.o}var sU=0;qi.prototype.s=!1;qi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sU!=0)&&Z2(this)};qi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zm(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jw(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ih(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function on(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}on.prototype.h=function(){this.defaultPrevented=!0};var iU=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};fe.addEventListener("test",n,e),fe.removeEventListener("test",n,e)}catch{}return t}();function _l(t){return/^[\s\xa0]*$/.test(t)}function Ah(){var t=fe.navigator;return t&&(t=t.userAgent)?t:""}function As(t){return Ah().indexOf(t)!=-1}function Km(t){return Km[" "](t),t}Km[" "]=function(){};function rU(t,e){var n=XU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oU=As("Opera"),jo=As("Trident")||As("MSIE"),LA=As("Edge"),cp=LA||jo,MA=As("Gecko")&&!(Ah().toLowerCase().indexOf("webkit")!=-1&&!As("Edge"))&&!(As("Trident")||As("MSIE"))&&!As("Edge"),aU=Ah().toLowerCase().indexOf("webkit")!=-1&&!As("Edge");function VA(){var t=fe.document;return t?t.documentMode:void 0}var up;e:{var uf="",hf=function(){var t=Ah();if(MA)return/rv:([^\);]+)(\)|;)/.exec(t);if(LA)return/Edge\/([\d\.]+)/.exec(t);if(jo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aU)return/WebKit\/(\S+)/.exec(t);if(oU)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hf&&(uf=hf?hf[1]:""),jo){var df=VA();if(df!=null&&df>parseFloat(uf)){up=String(df);break e}}up=uf}var hp;if(fe.document&&jo){var Bw=VA();hp=Bw||parseInt(up,10)||void 0}else hp=void 0;var lU=hp;function yl(t,e){if(on.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(MA){e:{try{Km(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cU[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yl.$.h.call(this)}}Ut(yl,on);var cU={2:"touch",3:"pen",4:"mouse"};yl.prototype.h=function(){yl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ql="closure_listenable_"+(1e6*Math.random()|0),uU=0;function hU(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++uU,this.fa=this.ia=!1}function Ch(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gm(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function dU(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function FA(t){const e={};for(const n in t)e[n]=t[n];return e}const Hw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function UA(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hw.length;r++)n=Hw[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Sh(t){this.src=t,this.g={},this.h=0}Sh.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=fp(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hU(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function dp(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=xA(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fp(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Qm="closure_lm_"+(1e6*Math.random()|0),ff={};function $A(t,e,n,s,i){if(s&&s.once)return BA(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)$A(t,e[r],n,s,i);return null}return n=Jm(n),t&&t[ql]?t.O(e,n,Wl(s)?!!s.capture:!!s,i):jA(t,e,n,!1,s,i)}function jA(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Wl(i)?!!i.capture:!!i,a=Xm(t);if(a||(t[Qm]=a=new Sh(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=fU(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)iU||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(WA(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fU(){function t(n){return e.call(t.src,t.listener,n)}const e=pU;return t}function BA(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)BA(t,e[r],n,s,i);return null}return n=Jm(n),t&&t[ql]?t.P(e,n,Wl(s)?!!s.capture:!!s,i):jA(t,e,n,!0,s,i)}function HA(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)HA(t,e[r],n,s,i);else s=Wl(s)?!!s.capture:!!s,n=Jm(n),t&&t[ql]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=fp(r,n,s,i),-1<n&&(Ch(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fp(e,n,s,i)),(n=-1<t?e[t]:null)&&Ym(n))}function Ym(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ql])dp(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(WA(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xm(e))?(dp(n,t),n.h==0&&(n.src=null,e[Qm]=null)):Ch(t)}}}function WA(t){return t in ff?ff[t]:ff[t]="on"+t}function pU(t,e){if(t.fa)t=!0;else{e=new yl(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Ym(t),t=n.call(s,e)}return t}function Xm(t){return t=t[Qm],t instanceof Sh?t:null}var pf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jm(t){return typeof t=="function"?t:(t[pf]||(t[pf]=function(e){return t.handleEvent(e)}),t[pf])}function Ft(){qi.call(this),this.i=new Sh(this),this.S=this,this.J=null}Ut(Ft,qi);Ft.prototype[ql]=!0;Ft.prototype.removeEventListener=function(t,e,n,s){HA(this,t,e,n,s)};function qt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new on(e,t);else if(e instanceof on)e.target=e.target||t;else{var i=e;e=new on(s,t),UA(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Fc(o,s,!0,e)&&i}if(o=e.g=t,i=Fc(o,s,!0,e)&&i,i=Fc(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Fc(o,s,!1,e)&&i}Ft.prototype.N=function(){if(Ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ch(n[s]);delete t.g[e],t.h--}}this.J=null};Ft.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ft.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Fc(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&dp(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Zm=fe.JSON.stringify;class mU{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gU(){var t=eg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _U{constructor(){this.h=this.g=null}add(e,n){const s=qA.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qA=new mU(()=>new yU,t=>t.reset());class yU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vU(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wU(t){fe.setTimeout(()=>{throw t},0)}let vl,wl=!1,eg=new _U,zA=()=>{const t=fe.Promise.resolve(void 0);vl=()=>{t.then(EU)}};var EU=()=>{for(var t;t=gU();){try{t.h.call(t.g)}catch(n){wU(n)}var e=qA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wl=!1};function Rh(t,e){Ft.call(this),this.h=t||1,this.g=e||fe,this.j=rn(this.qb,this),this.l=Date.now()}Ut(Rh,Ft);G=Rh.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qt(this,"tick"),this.ga&&(tg(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){Rh.$.N.call(this),tg(this),delete this.g};function ng(t,e,n){if(typeof t=="function")n&&(t=rn(t,n));else if(t&&typeof t.handleEvent=="function")t=rn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(t,e||0)}function KA(t){t.g=ng(()=>{t.g=null,t.i&&(t.i=!1,KA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class TU extends qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KA(this)}N(){super.N(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function El(t){qi.call(this),this.h=t,this.g={}}Ut(El,qi);var Ww=[];function GA(t,e,n,s){Array.isArray(n)||(n&&(Ww[0]=n.toString()),n=Ww);for(var i=0;i<n.length;i++){var r=$A(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function QA(t){Gm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ym(e)},t),t.g={}}El.prototype.N=function(){El.$.N.call(this),QA(this)};El.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ph(){this.g=!0}Ph.prototype.Ea=function(){this.g=!1};function bU(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function IU(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function vo(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CU(t,n)+(s?" "+s:"")})}function AU(t,e){t.info(function(){return"TIMEOUT: "+e})}Ph.prototype.info=function(){};function CU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zm(n)}catch{return e}}var zr={},qw=null;function kh(){return qw=qw||new Ft}zr.Ta="serverreachability";function YA(t){on.call(this,zr.Ta,t)}Ut(YA,on);function Tl(t){const e=kh();qt(e,new YA(e))}zr.STAT_EVENT="statevent";function XA(t,e){on.call(this,zr.STAT_EVENT,t),this.stat=e}Ut(XA,on);function _n(t){const e=kh();qt(e,new XA(e,t))}zr.Ua="timingevent";function JA(t,e){on.call(this,zr.Ua,t),this.size=e}Ut(JA,on);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){t()},e)}var Nh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ZA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sg(){}sg.prototype.h=null;function zw(t){return t.h||(t.h=t.i())}function e0(){}var Kl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ig(){on.call(this,"d")}Ut(ig,on);function rg(){on.call(this,"c")}Ut(rg,on);var pp;function Oh(){}Ut(Oh,sg);Oh.prototype.g=function(){return new XMLHttpRequest};Oh.prototype.i=function(){return{}};pp=new Oh;function Gl(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new El(this),this.P=SU,t=cp?125:void 0,this.V=new Rh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new t0}function t0(){this.i=null,this.g="",this.h=!1}var SU=45e3,n0={},mp={};G=Gl.prototype;G.setTimeout=function(t){this.P=t};function gp(t,e,n){t.L=1,t.A=xh(oi(e)),t.u=n,t.S=!0,s0(t,null)}function s0(t,e){t.G=Date.now(),Ql(t),t.B=oi(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),h0(n.i,"t",s),t.o=0,n=t.l.J,t.h=new t0,t.g=O0(t.l,n?e:null,!t.u),0<t.O&&(t.M=new TU(rn(t.Pa,t,t.g),t.O)),GA(t.U,t.g,"readystatechange",t.nb),e=t.I?FA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Tl(),bU(t.j,t.v,t.B,t.m,t.W,t.u)}G.nb=function(t){t=t.target;const e=this.M;e&&Ps(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const h=Ps(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>h)&&(h!=3||cp||this.g&&(this.h.h||this.g.ja()||Yw(this.g)))){this.J||h!=4||e==7||(e==8||0>=f?Tl(3):Tl(2)),Dh(this);var n=this.g.da();this.ca=n;t:if(i0(this)){var s=Yw(this.g);t="";var i=s.length,r=Ps(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Ja(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,IU(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_l(a)){var u=a;break t}}u=null}if(n=u)vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_p(this,n);else{this.i=!1,this.s=3,_n(12),gr(this),Ja(this);break e}}this.S?(r0(this,h,o),cp&&this.i&&h==3&&(GA(this.U,this.V,"tick",this.mb),this.V.start())):(vo(this.j,this.m,o,null),_p(this,o)),h==4&&gr(this),this.i&&!this.J&&(h==4?R0(this.l,this):(this.i=!1,Ql(this)))}else GU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_n(12)):(this.s=0,_n(13)),gr(this),Ja(this)}}}catch{}finally{}};function i0(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function r0(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=RU(t,n),i==mp){e==4&&(t.s=4,_n(14),s=!1),vo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==n0){t.s=4,_n(15),vo(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vo(t.j,t.m,i,null),_p(t,i);i0(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_n(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hg(e),e.M=!0,_n(11))):(vo(t.j,t.m,n,"[Invalid Chunked Response]"),gr(t),Ja(t))}G.mb=function(){if(this.g){var t=Ps(this.g),e=this.g.ja();this.o<e.length&&(Dh(this),r0(this,t,e),this.i&&t!=4&&Ql(this))}};function RU(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?mp:(n=Number(e.substring(n,s)),isNaN(n)?n0:(s+=1,s+n>e.length?mp:(e=e.slice(s,s+n),t.o=s+n,e)))}G.cancel=function(){this.J=!0,gr(this)};function Ql(t){t.Y=Date.now()+t.P,o0(t,t.P)}function o0(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=zl(rn(t.lb,t),e)}function Dh(t){t.C&&(fe.clearTimeout(t.C),t.C=null)}G.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(AU(this.j,this.B),this.L!=2&&(Tl(),_n(17)),gr(this),this.s=2,Ja(this)):o0(this,this.Y-t)};function Ja(t){t.l.H==0||t.J||R0(t.l,t)}function gr(t){Dh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tg(t.V),QA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _p(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yp(n.i,t))){if(!t.K&&yp(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vu(n),Fh(n);else break e;ug(n),_n(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=zl(rn(n.ib,n),6e3));if(1>=p0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _r(n,11)}else if((t.K||n.g==t)&&Vu(n),!_l(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const _=t.g;if(_){const b=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var r=s.i;r.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(og(r,r.h),r.h=null))}if(s.F){const C=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.Da=C,ct(s.I,s.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=N0(s,s.J?s.pa:null,s.Y),o.K){m0(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Dh(a),Ql(a)),s.g=o}else C0(s);0<n.j.length&&Uh(n)}else u[0]!="stop"&&u[0]!="close"||_r(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_r(n,7):cg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Tl(4)}catch{}}function PU(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ih(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kU(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function a0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kU(t),s=PU(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var l0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function br(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof br){this.h=t.h,Lu(this,t.j),this.s=t.s,this.g=t.g,Mu(this,t.m),this.l=t.l;var e=t.i,n=new bl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kw(this,n),this.o=t.o}else t&&(e=String(t).match(l0))?(this.h=!1,Lu(this,e[1]||"",!0),this.s=La(e[2]||""),this.g=La(e[3]||"",!0),Mu(this,e[4]),this.l=La(e[5]||"",!0),Kw(this,e[6]||"",!0),this.o=La(e[7]||"")):(this.h=!1,this.i=new bl(null,this.h))}br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ma(e,Gw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ma(e,Gw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ma(n,n.charAt(0)=="/"?xU:DU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ma(n,MU)),t.join("")};function oi(t){return new br(t)}function Lu(t,e,n){t.j=n?La(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kw(t,e,n){e instanceof bl?(t.i=e,VU(t.i,t.h)):(n||(e=Ma(e,LU)),t.i=new bl(e,t.h))}function ct(t,e,n){t.i.set(e,n)}function xh(t){return ct(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function La(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ma(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gw=/[#\/\?@]/g,DU=/[#\?:]/g,xU=/[#\?]/g,LU=/[#\?@]/g,MU=/#/g;function bl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zi(t){t.g||(t.g=new Map,t.h=0,t.i&&NU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=bl.prototype;G.add=function(t,e){zi(this),this.i=null,t=sa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function c0(t,e){zi(t),e=sa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function u0(t,e){return zi(t),e=sa(t,e),t.g.has(e)}G.forEach=function(t,e){zi(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};G.ta=function(){zi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};G.Z=function(t){zi(this);let e=[];if(typeof t=="string")u0(this,t)&&(e=e.concat(this.g.get(sa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return zi(this),this.i=null,t=sa(this,t),u0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function h0(t,e,n){c0(t,e),0<n.length&&(t.i=null,t.g.set(sa(t,e),zm(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function sa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VU(t,e){e&&!t.j&&(zi(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(c0(this,s),h0(this,i,n))},t)),t.j=e}var FU=class{constructor(t,e){this.g=t,this.map=e}};function d0(t){this.l=t||UU,fe.PerformanceNavigationTiming?(t=fe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(fe.g&&fe.g.Ka&&fe.g.Ka()&&fe.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UU=10;function f0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function p0(t){return t.h?1:t.g?t.g.size:0}function yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function og(t,e){t.g?t.g.add(e):t.h=e}function m0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}d0.prototype.cancel=function(){if(this.i=g0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function g0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return zm(t.i)}var $U=class{stringify(t){return fe.JSON.stringify(t,void 0)}parse(t){return fe.JSON.parse(t,void 0)}};function jU(){this.g=new $U}function BU(t,e,n){const s=n||"";try{a0(t,function(i,r){let o=i;Wl(i)&&(o=Zm(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function HU(t,e){const n=new Ph;if(fe.Image){const s=new Image;s.onload=Vc(Uc,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Vc(Uc,n,s,"TestLoadImage: error",!1,e),s.onabort=Vc(Uc,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Vc(Uc,n,s,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Uc(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Lh(t){this.l=t.ec||null,this.j=t.ob||!1}Ut(Lh,sg);Lh.prototype.g=function(){return new Mh(this.l,this.j)};Lh.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){Ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ag,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ut(Mh,Ft);var ag=0;G=Mh.prototype;G.open=function(t,e){if(this.readyState!=ag)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Il(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||fe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yl(this)),this.readyState=ag};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof fe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yl(this):Il(this),this.readyState==3&&_0(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Yl(this))};G.Ya=function(t){this.g&&(this.response=t,Yl(this))};G.ka=function(){this.g&&Yl(this)};function Yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Il(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WU=fe.JSON.parse;function wt(t){Ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=y0,this.L=this.M=!1}Ut(wt,Ft);var y0="",qU=/^https?$/i,zU=["POST","PUT"];G=wt.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pp.g(),this.C=this.u?zw(this.u):zw(pp),this.g.onreadystatechange=rn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Qw(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=fe.FormData&&t instanceof fe.FormData,!(0<=xA(zU,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{E0(this),0<this.B&&((this.L=KU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rn(this.ua,this)):this.A=ng(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qw(this,r)}};function KU(t){return jo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof qm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qt(this,"timeout"),this.abort(8))};function Qw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,v0(t),Vh(t)}function v0(t){t.F||(t.F=!0,qt(t,"complete"),qt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qt(this,"complete"),qt(this,"abort"),Vh(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vh(this,!0)),wt.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?w0(this):this.kb())};G.kb=function(){w0(this)};function w0(t){if(t.h&&typeof qm<"u"&&(!t.C[1]||Ps(t)!=4||t.da()!=2)){if(t.v&&Ps(t)==4)ng(t.La,0,t);else if(qt(t,"readystatechange"),Ps(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(l0)[1]||null;!i&&fe.self&&fe.self.location&&(i=fe.self.location.protocol.slice(0,-1)),s=!qU.test(i?i.toLowerCase():"")}n=s}if(n)qt(t,"complete"),qt(t,"success");else{t.m=6;try{var r=2<Ps(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",v0(t)}}finally{Vh(t)}}}}function Vh(t,e){if(t.g){E0(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qt(t,"ready");try{n.onreadystatechange=s}catch{}}}function E0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(fe.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function Ps(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<Ps(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WU(e)}};function Yw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case y0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function GU(t){const e={};t=(t.g&&2<=Ps(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(_l(t[s]))continue;var n=vU(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}dU(e,function(s){return s.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function T0(t){let e="";return Gm(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function lg(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=T0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ct(t,e,n))}function Aa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function b0(t){this.Ga=0,this.j=[],this.l=new Ph,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Aa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Aa("baseRetryDelayMs",5e3,t),this.hb=Aa("retryDelaySeedMs",1e4,t),this.eb=Aa("forwardChannelMaxRetries",2,t),this.xa=Aa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new d0(t&&t.concurrentRequestLimit),this.Ja=new jU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=b0.prototype;G.ra=8;G.H=1;function cg(t){if(I0(t),t.H==3){var e=t.W++,n=oi(t.I);if(ct(n,"SID",t.K),ct(n,"RID",e),ct(n,"TYPE","terminate"),Xl(t,n),e=new Gl(t,t.l,e),e.L=2,e.A=xh(oi(n)),n=!1,fe.navigator&&fe.navigator.sendBeacon)try{n=fe.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&fe.Image&&(new Image().src=e.A,n=!0),n||(e.g=O0(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ql(e)}k0(t)}function Fh(t){t.g&&(hg(t),t.g.cancel(),t.g=null)}function I0(t){Fh(t),t.u&&(fe.clearTimeout(t.u),t.u=null),Vu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&fe.clearTimeout(t.m),t.m=null)}function Uh(t){if(!f0(t.i)&&!t.m){t.m=!0;var e=t.Na;vl||zA(),wl||(vl(),wl=!0),eg.add(e,t),t.C=0}}function QU(t,e){return p0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zl(rn(t.Na,t,e),P0(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Gl(this,this.l,t);let r=this.s;if(this.U&&(r?(r=FA(r),UA(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=A0(this,i,e),n=oi(this.I),ct(n,"RID",t),ct(n,"CVER",22),this.F&&ct(n,"X-HTTP-Session-Id",this.F),Xl(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(T0(r)))+"&"+e:this.o&&lg(n,this.o,r)),og(this.i,i),this.bb&&ct(n,"TYPE","init"),this.P?(ct(n,"$req",e),ct(n,"SID","null"),i.aa=!0,gp(i,n,null)):gp(i,n,e),this.H=2}}else this.H==3&&(t?Xw(this,t):this.j.length==0||f0(this.i)||Xw(this))};function Xw(t,e){var n;e?n=e.m:n=t.W++;const s=oi(t.I);ct(s,"SID",t.K),ct(s,"RID",n),ct(s,"AID",t.V),Xl(t,s),t.o&&t.s&&lg(s,t.o,t.s),n=new Gl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=A0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),og(t.i,n),gp(n,s,e)}function Xl(t,e){t.na&&Gm(t.na,function(n,s){ct(e,s,n)}),t.h&&a0({},function(n,s){ct(e,s,n)})}function A0(t,e,n){n=Math.min(t.j.length,n);var s=t.h?rn(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=r,0>u)r=Math.max(0,i[l].g-100),a=!1;else try{BU(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function C0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vl||zA(),wl||(vl(),wl=!0),eg.add(e,t),t.A=0}}function ug(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zl(rn(t.Ma,t),P0(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,S0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zl(rn(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_n(10),Fh(this),S0(this))};function hg(t){t.B!=null&&(fe.clearTimeout(t.B),t.B=null)}function S0(t){t.g=new Gl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=oi(t.wa);ct(e,"RID","rpc"),ct(e,"SID",t.K),ct(e,"AID",t.V),ct(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ct(e,"TO",t.qa),ct(e,"TYPE","xmlhttp"),Xl(t,e),t.o&&t.s&&lg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=xh(oi(e)),n.u=null,n.S=!0,s0(n,t)}G.ib=function(){this.v!=null&&(this.v=null,Fh(this),ug(this),_n(19))};function Vu(t){t.v!=null&&(fe.clearTimeout(t.v),t.v=null)}function R0(t,e){var n=null;if(t.g==e){Vu(t),hg(t),t.g=null;var s=2}else if(yp(t.i,e))n=e.F,m0(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=kh(),qt(s,new JA(s,n)),Uh(t)}else C0(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&QU(t,e)||s==2&&ug(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}}function P0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function _r(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=rn(t.pb,t);n||(n=new br("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||Lu(n,"https"),xh(n)),HU(n.toString(),s)}else _n(2);t.H=0,t.h&&t.h.za(e),k0(t),I0(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_n(2)):(this.l.info("Failed to ping google.com"),_n(1))};function k0(t){if(t.H=0,t.ma=[],t.h){const e=g0(t.i);(e.length!=0||t.j.length!=0)&&(jw(t.ma,e),jw(t.ma,t.j),t.i.i.length=0,zm(t.j),t.j.length=0),t.h.ya()}}function N0(t,e,n){var s=n instanceof br?oi(n):new br(n);if(s.g!="")e&&(s.g=e+"."+s.g),Mu(s,s.m);else{var i=fe.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new br(null);s&&Lu(r,s),e&&(r.g=e),i&&Mu(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ct(s,n,e),ct(s,"VER",t.ra),Xl(t,s),s}function O0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new wt(new Lh({ob:n})):new wt(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function D0(){}G=D0.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Fu(){if(jo&&!(10<=Number(lU)))throw Error("Environmental error: no available transport.")}Fu.prototype.g=function(t,e){return new Mn(t,e)};function Mn(t,e){Ft.call(this),this.g=new b0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_l(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ia(this)}Ut(Mn,Ft);Mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_n(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=N0(t,null,t.Y),Uh(t)};Mn.prototype.close=function(){cg(this.g)};Mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zm(t),t=n);e.j.push(new FU(e.fb++,t)),e.H==3&&Uh(e)};Mn.prototype.N=function(){this.g.h=null,delete this.j,cg(this.g),delete this.g,Mn.$.N.call(this)};function x0(t){ig.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ut(x0,ig);function L0(){rg.call(this),this.status=1}Ut(L0,rg);function ia(t){this.g=t}Ut(ia,D0);ia.prototype.Ba=function(){qt(this.g,"a")};ia.prototype.Aa=function(t){qt(this.g,new x0(t))};ia.prototype.za=function(t){qt(this.g,new L0)};ia.prototype.ya=function(){qt(this.g,"b")};function YU(){this.blockSize=-1}function fs(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ut(fs,YU);fs.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mf(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}fs.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)mf(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){mf(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){mf(this,s),i=0;break}}this.h=i,this.i+=e};fs.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Xe(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var XU={};function dg(t){return-128<=t&&128>t?rU(t,function(e){return new Xe([e|0],0>e?-1:0)}):new Xe([t|0],0>t?-1:0)}function ks(t){if(isNaN(t)||!isFinite(t))return ko;if(0>t)return Bt(ks(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=vp;return new Xe(e,0)}function M0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Bt(M0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ks(Math.pow(e,8)),s=ko,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=ks(Math.pow(e,r)),s=s.R(r).add(ks(o))):(s=s.R(n),s=s.add(ks(o)))}return s}var vp=4294967296,ko=dg(0),wp=dg(1),Jw=dg(16777216);G=Xe.prototype;G.ea=function(){if(Kn(this))return-Bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:vp+s)*e,e*=vp}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ei(this))return"0";if(Kn(this))return"-"+Bt(this).toString(t);for(var e=ks(Math.pow(t,6)),n=this,s="";;){var i=$u(n,e).g;n=Uu(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ei(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ei(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kn(t){return t.h==-1}G.X=function(t){return t=Uu(this,t),Kn(t)?-1:ei(t)?0:1};function Bt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Xe(n,~t.h).add(wp)}G.abs=function(){return Kn(this)?Bt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Xe(n,n[n.length-1]&-2147483648?-1:0)};function Uu(t,e){return t.add(Bt(e))}G.R=function(t){if(ei(this)||ei(t))return ko;if(Kn(this))return Kn(t)?Bt(this).R(Bt(t)):Bt(Bt(this).R(t));if(Kn(t))return Bt(this.R(Bt(t)));if(0>this.X(Jw)&&0>t.X(Jw))return ks(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,$c(n,2*s+2*i),n[2*s+2*i+1]+=r*l,$c(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,$c(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,$c(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Xe(n,0)};function $c(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ca(t,e){this.g=t,this.h=e}function $u(t,e){if(ei(e))throw Error("division by zero");if(ei(t))return new Ca(ko,ko);if(Kn(t))return e=$u(Bt(t),e),new Ca(Bt(e.g),Bt(e.h));if(Kn(e))return e=$u(t,Bt(e)),new Ca(Bt(e.g),e.h);if(30<t.g.length){if(Kn(t)||Kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wp,s=e;0>=s.X(t);)n=Zw(n),s=Zw(s);var i=co(n,1),r=co(s,1);for(s=co(s,2),n=co(n,2);!ei(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=co(s,1),n=co(n,1)}return e=Uu(t,i.R(e)),new Ca(i,e)}for(i=ko;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=ks(n),o=r.R(e);Kn(o)||0<o.X(t);)n-=s,r=ks(n),o=r.R(e);ei(r)&&(r=wp),i=i.add(r),t=Uu(t,o)}return new Ca(i,t)}G.gb=function(t){return $u(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Xe(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Xe(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Xe(n,this.h^t.h)};function Zw(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Xe(n,t.h)}function co(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Xe(i,t.h)}Fu.prototype.createWebChannel=Fu.prototype.g;Mn.prototype.send=Mn.prototype.u;Mn.prototype.open=Mn.prototype.m;Mn.prototype.close=Mn.prototype.close;Nh.NO_ERROR=0;Nh.TIMEOUT=8;Nh.HTTP_ERROR=6;ZA.COMPLETE="complete";e0.EventType=Kl;Kl.OPEN="a";Kl.CLOSE="b";Kl.ERROR="c";Kl.MESSAGE="d";Ft.prototype.listen=Ft.prototype.O;wt.prototype.listenOnce=wt.prototype.P;wt.prototype.getLastError=wt.prototype.Sa;wt.prototype.getLastErrorCode=wt.prototype.Ia;wt.prototype.getStatus=wt.prototype.da;wt.prototype.getResponseJson=wt.prototype.Wa;wt.prototype.getResponseText=wt.prototype.ja;wt.prototype.send=wt.prototype.ha;wt.prototype.setWithCredentials=wt.prototype.Oa;fs.prototype.digest=fs.prototype.l;fs.prototype.reset=fs.prototype.reset;fs.prototype.update=fs.prototype.j;Xe.prototype.add=Xe.prototype.add;Xe.prototype.multiply=Xe.prototype.R;Xe.prototype.modulo=Xe.prototype.gb;Xe.prototype.compare=Xe.prototype.X;Xe.prototype.toNumber=Xe.prototype.ea;Xe.prototype.toString=Xe.prototype.toString;Xe.prototype.getBits=Xe.prototype.D;Xe.fromNumber=ks;Xe.fromString=M0;var JU=function(){return new Fu},ZU=function(){return kh()},gf=Nh,e$=ZA,t$=zr,eE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jc=e0,n$=wt,s$=fs,No=Xe;const tE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Dl("@firebase/firestore");function Sa(){return xr.logLevel}function z(t,...e){if(xr.logLevel<=Ce.DEBUG){const n=e.map(fg);xr.debug(`Firestore (${ra}): ${t}`,...n)}}function $s(t,...e){if(xr.logLevel<=Ce.ERROR){const n=e.map(fg);xr.error(`Firestore (${ra}): ${t}`,...n)}}function Bo(t,...e){if(xr.logLevel<=Ce.WARN){const n=e.map(fg);xr.warn(`Firestore (${ra}): ${t}`,...n)}}function fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw $s(e),new Error(e)}function rt(t,e){t||de()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class r${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o${constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ls,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ls)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string"),new V0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new Yt(e)}}class a${constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class l${constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new a$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string"),this.R=n.token,new c$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=h$(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function He(t,e){return t<e?-1:t>e?1:0}function Ho(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Nt.fromMillis(Date.now())}static fromDate(e){return Nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Nt(0,0))}static max(){return new ye(new Nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Al.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Al?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class mt extends Al{construct(e,n,s){return new mt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const d$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Al{construct(e,n,s){return new Wt(e,n,s)}static isValidIdentifier(e){return d$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Wt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new se(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new se(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(mt.fromString(e))}static fromName(e){return new oe(mt.fromString(e).popFirst(5))}static empty(){return new oe(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new mt(e.slice()))}}function f$(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(s===1e9?new Nt(n+1,0):new Nt(n,s));return new Fi(i,oe.empty(),e)}function p$(t){return new Fi(t.readTime,t.key,-1)}class Fi{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fi(ye.min(),oe.empty(),-1)}static max(){return new Fi(ye.max(),oe.empty(),-1)}}function m$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:He(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==g$)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(i=>i?M.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new M((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new M((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ls,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Za(e,n.error)):this.V.resolve()},this.transaction.onerror=s=>{const i=mg(s.target.error);this.V.reject(new Za(e,i))}}static open(e,n,s,i){try{return new pg(n,e.transaction(i,s))}catch(r){throw new Za(n,r)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new v$(n)}}class yr{constructor(e,n,s){this.name=e,this.version=n,this.p=s,yr.S(Rt())===12.2&&$s("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),dr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lm())return!1;if(yr.C())return!0;const e=Rt(),n=yr.S(e),s=0<n&&n<10,i=yr.v(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static v(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async O(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;n(o)},i.onblocked=()=>{s(new Za(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new se(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new se(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Za(e,o))},i.onupgradeneeded=r=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,i.transaction,r.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,i){const r=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=pg.open(this.db,e,r?"readonly":"readwrite",s),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),M.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class y${constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return dr(this.k.delete())}}class Za extends se{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Zl(t){return t.name==="IndexedDbTransactionError"}class v${constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(z("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),dr(s)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),dr(this.store.add(e))}get(e){return dr(this.store.get(e)).next(n=>(n===void 0&&(n=null),z("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),dr(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),dr(this.store.count())}W(e,n){const s=this.options(e,n),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){const r=i.getAll(s.range);return new M((o,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{const r=this.cursor(s),o=[];return this.G(r,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new M((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}H(e,n){z("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.J=!1;const i=this.cursor(s);return this.G(i,(r,o,a)=>a.delete())}Y(e,n){let s;n?s=e:(s={},n=e);const i=this.cursor(s);return this.G(i,n)}Z(e){const n=this.cursor({});return new M((s,i)=>{n.onerror=r=>{const o=mg(r.target.error);i(o)},n.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,n){const s=[];return new M((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new y$(a),u=n(a.primaryKey,a.value,l);if(u instanceof M){const h=u.catch(f=>(l.done(),M.reject(f)));s.push(h)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>M.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.J?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function dr(t){return new M((e,n)=>{t.onsuccess=s=>{const i=s.target.result;e(i)},t.onerror=s=>{const i=mg(s.target.error);n(i)}})}let nE=!1;function mg(t){const e=yr.S(Rt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new se("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return nE||(nE=!0,setTimeout(()=>{throw s},0)),s}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}gg._e=-1;function $h(t){return t==null}function ju(t){return t===0&&1/t==-1/0}function w$(t){return typeof t=="number"&&Number.isInteger(t)&&!ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??jt.RED,this.left=i??jt.EMPTY,this.right=r??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new jt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,s,i,r){return this}insert(e,n,s){return new jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iE(this.data.getIterator())}getIteratorFrom(e){return new iE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new zt(this.comparator);return n.data=e,n}}class iE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new ls([])}unionWith(e){let n=new zt(Wt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ls(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new $0("Invalid base64 string: "+r):r}}(e);return new ln(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new ln(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const E$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(rt(!!t),typeof t=="string"){let e=0;const n=E$.exec(t);if(rt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:St(t.seconds),nanos:St(t.nanos)}}function St(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?ln.fromBase64String(t):ln.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yg(t){const e=t.mapValue.fields.__previous_value__;return _g(e)?yg(e):e}function Cl(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(e,n,s,i,r,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_g(t)?4:b$(t)?9007199254740991:10:de()}function js(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cl(t).isEqual(Cl(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ui(i.timestampValue),a=Ui(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Lr(i.bytesValue).isEqual(Lr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return St(i.geoPointValue.latitude)===St(r.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return St(i.integerValue)===St(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=St(i.doubleValue),a=St(r.doubleValue);return o===a?ju(o)===ju(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],js);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(sE(o)!==sE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!js(o[l],a[l])))return!1;return!0}(t,e);default:return de()}}function Rl(t,e){return(t.values||[]).find(n=>js(n,e))!==void 0}function Wo(t,e){if(t===e)return 0;const n=Mr(t),s=Mr(e);if(n!==s)return He(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=St(r.integerValue||r.doubleValue),l=St(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rE(t.timestampValue,e.timestampValue);case 4:return rE(Cl(t),Cl(e));case 5:return He(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Lr(r),l=Lr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=He(a[u],l[u]);if(h!==0)return h}return He(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=He(St(r.latitude),St(o.latitude));return a!==0?a:He(St(r.longitude),St(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Wo(a[u],l[u]);if(h)return h}return He(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Hc.mapValue&&o===Hc.mapValue)return 0;if(r===Hc.mapValue)return 1;if(o===Hc.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=He(l[f],h[f]);if(m!==0)return m;const _=Wo(a[l[f]],u[h[f]]);if(_!==0)return _}return He(l.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function rE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return He(t,e);const n=Ui(t),s=Ui(e),i=He(n.seconds,s.seconds);return i!==0?i:He(n.nanos,s.nanos)}function qo(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ui(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Ep(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Ep(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Tp(t){return!!t&&"integerValue"in t}function vg(t){return!!t&&"arrayValue"in t}function oE(t){return!!t&&"nullValue"in t}function aE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function el(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oa(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=el(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return Object.assign({},t)}function b$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.value=e}static empty(){return new Gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=Wt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=el(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return js(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){oa(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Gn(el(this.value))}}function j0(t){const e=[];return oa(t.fields,(n,s)=>{const i=new Wt([n]);if(iu(s)){const r=j0(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ls(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Zt(e,0,ye.min(),ye.min(),ye.min(),Gn.empty(),0)}static newFoundDocument(e,n,s,i){return new Zt(e,1,n,ye.min(),s,i,0)}static newNoDocument(e,n){return new Zt(e,2,n,ye.min(),ye.min(),Gn.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,ye.min(),ye.min(),Gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this.position=e,this.inclusive=n}}function lE(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=Wo(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function cE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!js(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function I$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{}class kt extends B0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new C$(e,n,s):n==="array-contains"?new P$(e,s):n==="in"?new k$(e,s):n==="not-in"?new N$(e,s):n==="array-contains-any"?new O$(e,s):new kt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new S$(e,s):new R$(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wo(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bs extends B0{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Bs(e,n)}matches(e){return H0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function H0(t){return t.op==="and"}function W0(t){return A$(t)&&H0(t)}function A$(t){for(const e of t.filters)if(e instanceof Bs)return!1;return!0}function bp(t){if(t instanceof kt)return t.field.canonicalString()+t.op.toString()+qo(t.value);if(W0(t))return t.filters.map(e=>bp(e)).join(",");{const e=t.filters.map(n=>bp(n)).join(",");return`${t.op}(${e})`}}function q0(t,e){return t instanceof kt?function(s,i){return i instanceof kt&&s.op===i.op&&s.field.isEqual(i.field)&&js(s.value,i.value)}(t,e):t instanceof Bs?function(s,i){return i instanceof Bs&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&q0(o,i.filters[a]),!0):!1}(t,e):void de()}function z0(t){return t instanceof kt?function(n){return`${n.field.canonicalString()} ${n.op} ${qo(n.value)}`}(t):t instanceof Bs?function(n){return n.op.toString()+" {"+n.getFilters().map(z0).join(" ,")+"}"}(t):"Filter"}class C$ extends kt{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class S$ extends kt{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R$ extends kt{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>oe.fromName(s.referenceValue))}class P$ extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vg(n)&&Rl(n.arrayValue,this.value)}}class k$ extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rl(this.value.arrayValue,n)}}class N$ extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rl(this.value.arrayValue,n)}}class O$ extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D${constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function uE(t,e=null,n=[],s=[],i=null,r=null,o=null){return new D$(t,e,n,s,i,r,o)}function wg(t){const e=ve(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bp(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qo(s)).join(",")),e.ce=n}return e.ce}function Eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cE(t.startAt,e.startAt)&&cE(t.endAt,e.endAt)}function Ip(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function x$(t,e,n,s,i,r,o,a){return new jh(t,e,n,s,i,r,o,a)}function Tg(t){return new jh(t)}function hE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L$(t){return t.collectionGroup!==null}function tl(t){const e=ve(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new zt(Wt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Hu(r,s))}),n.has(Wt.keyField().canonicalString())||e.le.push(new Hu(Wt.keyField(),s))}return e.le}function Ms(t){const e=ve(t);return e.he||(e.he=M$(e,tl(t))),e.he}function M$(t,e){if(t.limitType==="F")return uE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Hu(i.field,r)});const n=t.endAt?new Bu(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Bu(t.startAt.position,t.startAt.inclusive):null;return uE(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Ap(t,e,n){return new jh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bh(t,e){return Eg(Ms(t),Ms(e))&&t.limitType===e.limitType}function G0(t){return`${wg(Ms(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>z0(i)).join(", ")}]`),$h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>qo(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>qo(i)).join(",")),`Target(${s})`}(Ms(t))}; limitType=${t.limitType})`}function Hh(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):oe.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of tl(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const u=lE(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,tl(s),i)||s.endAt&&!function(o,a,l){const u=lE(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,tl(s),i))}(t,e)}function V$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q0(t){return(e,n)=>{let s=!1;for(const i of tl(t)){const r=F$(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function F$(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?Wo(l,u):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oa(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return U0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=new yt(oe.comparator);function ai(){return U$}const Y0=new yt(oe.comparator);function Va(...t){let e=Y0;for(const n of t)e=e.insert(n.key,n);return e}function X0(t){let e=Y0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vr(){return nl()}function J0(){return nl()}function nl(){return new aa(t=>t.toString(),(t,e)=>t.isEqual(e))}const $$=new yt(oe.comparator),j$=new zt(oe.comparator);function Se(...t){let e=j$;for(const n of t)e=e.add(n);return e}const B$=new zt(He);function H$(){return B$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(e)?"-0":e}}function eC(t){return{integerValue:""+t}}function W$(t,e){return w$(e)?eC(e):Z0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._=void 0}}function q$(t,e,n){return t instanceof Wu?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&_g(r)&&(r=yg(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Pl?nC(t,e):t instanceof kl?sC(t,e):function(i,r){const o=tC(i,r),a=dE(o)+dE(i.Ie);return Tp(o)&&Tp(i.Ie)?eC(a):Z0(i.serializer,a)}(t,e)}function z$(t,e,n){return t instanceof Pl?nC(t,e):t instanceof kl?sC(t,e):n}function tC(t,e){return t instanceof qu?function(s){return Tp(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Wu extends Wh{}class Pl extends Wh{constructor(e){super(),this.elements=e}}function nC(t,e){const n=iC(e);for(const s of t.elements)n.some(i=>js(i,s))||n.push(s);return{arrayValue:{values:n}}}class kl extends Wh{constructor(e){super(),this.elements=e}}function sC(t,e){let n=iC(e);for(const s of t.elements)n=n.filter(i=>!js(i,s));return{arrayValue:{values:n}}}class qu extends Wh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function dE(t){return St(t.integerValue||t.doubleValue)}function iC(t){return vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function K$(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Pl&&i instanceof Pl||s instanceof kl&&i instanceof kl?Ho(s.elements,i.elements,js):s instanceof qu&&i instanceof qu?js(s.Ie,i.Ie):s instanceof Wu&&i instanceof Wu}(t.transform,e.transform)}class G${constructor(e,n){this.version=e,this.transformResults=n}}class Vs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vs}static exists(e){return new Vs(void 0,e)}static updateTime(e){return new Vs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function rC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aC(t.key,Vs.none()):new ec(t.key,t.data,Vs.none());{const n=t.data,s=Gn.empty();let i=new zt(Wt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Kr(t.key,s,new ls(i.toArray()),Vs.none())}}function Q$(t,e,n){t instanceof ec?function(i,r,o){const a=i.value.clone(),l=pE(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,r,o){if(!ru(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=pE(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(oC(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sl(t,e,n,s){return t instanceof ec?function(r,o,a,l){if(!ru(r.precondition,o))return a;const u=r.value.clone(),h=mE(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Kr?function(r,o,a,l){if(!ru(r.precondition,o))return a;const u=mE(r.fieldTransforms,l,o),h=o.data;return h.setAll(oC(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(r,o,a){return ru(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Y$(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=tC(s.transform,i||null);r!=null&&(n===null&&(n=Gn.empty()),n.set(s.field,r))}return n||null}function fE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ho(s,i,(r,o)=>K$(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ec extends qh{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends qh{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function oC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pE(t,e,n){const s=new Map;rt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,z$(o,a,n[i]))}return s}function mE(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,q$(r,o,e))}return s}class aC extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class X$ extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Q$(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=sl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=sl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=J0();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=rC(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ye.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(n,s)=>fE(n,s))&&Ho(this.baseMutations,e.baseMutations,(n,s)=>fE(n,s))}}class bg{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){rt(e.mutations.length===s.length);let i=function(){return $$}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new bg(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,Oe;function t4(t){switch(t){default:return de();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function lC(t){if(t===void 0)return $s("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ct.OK:return V.OK;case Ct.CANCELLED:return V.CANCELLED;case Ct.UNKNOWN:return V.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return V.INTERNAL;case Ct.UNAVAILABLE:return V.UNAVAILABLE;case Ct.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ct.NOT_FOUND:return V.NOT_FOUND;case Ct.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ct.ABORTED:return V.ABORTED;case Ct.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ct.DATA_LOSS:return V.DATA_LOSS;default:return de()}}(Oe=Ct||(Ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=new No([4294967295,4294967295],0);function gE(t){const e=n4().encode(t),n=new s$;return n.update(e),new Uint8Array(n.digest())}function _E(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new No([n,s],0),new No([i,r],0)]}class Ig{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Fa(`Invalid padding: ${n}`);if(s<0)throw new Fa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fa(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Fa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=No.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(No.fromNumber(s)));return i.compare(s4)===1&&(i=new No([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=gE(e),[s,i]=_E(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ig(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=gE(e),[s,i]=_E(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new zh(ye.min(),i,new yt(He),ai(),Se())}}class tc{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new tc(s,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class cC{constructor(e,n){this.targetId=e,this.fe=n}}class uC{constructor(e,n,s=ln.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class yE{constructor(){this.ge=0,this.pe=wE(),this.ye=ln.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Se(),n=Se(),s=Se();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:de()}}),new tc(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=wE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,rt(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class i4{constructor(e){this.Be=e,this.ke=new Map,this.qe=ai(),this.Qe=vE(),this.Ke=new yt(He)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(Ip(r))if(s===0){const o=new oe(r.path);this.We(n,o,Zt.newNoDocument(o,ye.min()))}else rt(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=Lr(s).toUint8Array()}catch(l){if(l instanceof $0)return Bo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ig(o,i,r)}catch(l){return Bo(l instanceof Fa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Ip(a.target)){const l=new oe(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Zt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=Se();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new zh(e,n,this.Ke,this.qe,s);return this.qe=ai(),this.Qe=vE(),this.Ke=new yt(He),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new yE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new zt(He),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new yE),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function vE(){return new yt(oe.comparator)}function wE(){return new yt(oe.comparator)}const r4={asc:"ASCENDING",desc:"DESCENDING"},o4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a4={and:"AND",or:"OR"};class l4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cp(t,e){return t.useProto3Json||$h(e)?e:{value:e}}function zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c4(t,e){return zu(t,e.toTimestamp())}function Fs(t){return rt(!!t),ye.fromTimestamp(function(n){const s=Ui(n);return new Nt(s.seconds,s.nanos)}(t))}function Ag(t,e){return Sp(t,e).canonicalString()}function Sp(t,e){const n=function(i){return new mt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dC(t){const e=mt.fromString(t);return rt(_C(e)),e}function Rp(t,e){return Ag(t.databaseId,e.path)}function _f(t,e){const n=dC(e);if(n.get(1)!==t.databaseId.projectId)throw new se(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(pC(n))}function fC(t,e){return Ag(t.databaseId,e)}function u4(t){const e=dC(t);return e.length===4?mt.emptyPath():pC(e)}function Pp(t){return new mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pC(t){return rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function EE(t,e,n){return{name:Rp(t,e),fields:n.value.mapValue.fields}}function h4(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(rt(h===void 0||typeof h=="string"),ln.fromBase64String(h||"")):(rt(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ln.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?V.UNKNOWN:lC(u.code);return new se(h,u.message||"")}(o);n=new uC(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=_f(t,s.document.name),r=Fs(s.document.updateTime),o=s.document.createTime?Fs(s.document.createTime):ye.min(),a=new Gn({mapValue:{fields:s.document.fields}}),l=Zt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new ou(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=_f(t,s.document),r=s.readTime?Fs(s.readTime):ye.min(),o=Zt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ou([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=_f(t,s.document),r=s.removedTargetIds||[];n=new ou([],r,i,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new e4(i,r),a=s.targetId;n=new cC(a,o)}}return n}function d4(t,e){let n;if(e instanceof ec)n={update:EE(t,e.key,e.value)};else if(e instanceof aC)n={delete:Rp(t,e.key)};else if(e instanceof Kr)n={update:EE(t,e.key,e.data),updateMask:E4(e.fieldMask)};else{if(!(e instanceof X$))return de();n={verify:Rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof kl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qu)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:c4(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:de()}(t,e.precondition)),n}function f4(t,e){return t&&t.length>0?(rt(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Fs(i.updateTime):Fs(r);return o.isEqual(ye.min())&&(o=Fs(r)),new G$(o,i.transformResults||[])}(n,e))):[]}function p4(t,e){return{documents:[fC(t,e.path)]}}function m4(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=fC(t,i);const r=function(u){if(u.length!==0)return gC(Bs.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:po(m.field),direction:y4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function g4(t){let e=u4(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){rt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(f){const m=mC(f);return m instanceof Bs&&W0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(b){return new Hu(mo(b.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,$h(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new Bu(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new Bu(_,m)}(n.endAt)),x$(e,i,o,r,a,"F",l,u)}function _4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=mo(n.unaryFilter.field);return kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=mo(n.unaryFilter.field);return kt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mo(n.unaryFilter.field);return kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mo(n.unaryFilter.field);return kt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return kt.create(mo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bs.create(n.compositeFilter.filters.map(s=>mC(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function y4(t){return r4[t]}function v4(t){return o4[t]}function w4(t){return a4[t]}function po(t){return{fieldPath:t.canonicalString()}}function mo(t){return Wt.fromServerFormat(t.fieldPath)}function gC(t){return t instanceof kt?function(n){if(n.op==="=="){if(aE(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NAN"}};if(oE(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(aE(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NAN"}};if(oE(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(n.field),op:v4(n.op),value:n.value}}}(t):t instanceof Bs?function(n){const s=n.getFilters().map(i=>gC(i));return s.length===1?s[0]:{compositeFilter:{op:w4(n.op),filters:s}}}(t):de()}function E4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _C(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,s,i,r=ye.min(),o=ye.min(),a=ln.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.ct=e}}function b4(t){const e=g4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ap(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(){this._n=new A4}addToCollectionParentIndex(e,n){return this._n.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Fi.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class A4{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new zt(mt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new zt(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new zo(0)}static Ln(){return new zo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(){this.changes=new aa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&sl(s.mutation,i,ls.empty(),Nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Se()){const i=vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Va();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Se()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ai();const o=nl(),a=function(){return nl()}();return n.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Kr)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),sl(h.mutation,u,h.mutation.getFieldMask(),Nt.now())):o.set(u.key,ls.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new S4(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=nl();let i=new yt((o,a)=>o-a),r=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||ls.empty();h=a.applyToLocalView(u,h),s.set(l,h);const f=(i.get(a.batchId)||Se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=J0();h.forEach(m=>{if(!r.has(m)){const _=rC(n.get(m),s.get(m));_!==null&&f.set(m,_),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):M.resolve(vr());let a=-1,l=r;return o.next(u=>M.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,Se())).next(h=>({batchId:a,changes:X0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(s=>{let i=Va();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Va();return this.indexManager.getCollectionParents(e,r).next(a=>M.forEach(a,l=>{const u=function(f,m){return new jh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Zt.newInvalidDocument(h)))});let a=Va();return o.forEach((l,u)=>{const h=r.get(l);h!==void 0&&sl(h.mutation,u,ls.empty(),Nt.now()),Hh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return M.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fs(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:b4(i.bundledQuery),readTime:Fs(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(){this.overlays=new yt(oe.comparator),this.hr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vr();return M.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const i=vr(),r=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new yt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=vr(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=vr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return M.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Z$(n,s));let r=this.hr.get(n);r===void 0&&(r=Se(),this.hr.set(n,r)),this.hr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Pr=new zt(Lt.Ir),this.Tr=new zt(Lt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ar(new Lt(e,n))}Rr(e,n){e.forEach(s=>this.removeReference(s,n))}Vr(e){const n=new oe(new mt([])),s=new Lt(n,e),i=new Lt(n,e+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new mt([])),s=new Lt(n,e),i=new Lt(n,e+1);let r=Se();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Lt(e,0),s=this.Pr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||He(e.pr,n.pr)}static Er(e,n){return He(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new zt(Lt.Ir)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new J$(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Lt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.br(s),r=i<0?0:i;return M.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),i=new Lt(n,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const a=this.Sr(o.pr);r.push(a)}),M.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new zt(He);return n.forEach(i=>{const r=new Lt(i,0),o=new Lt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{s=s.add(a.pr)})}),M.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;oe.isDocumentKey(r)||(r=r.child(""));const o=new Lt(new oe(r),0);let a=new zt(He);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),M.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){rt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return M.forEach(n.mutations,i=>{const r=new Lt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,n){const s=new Lt(n,0),i=this.wr.firstAfterOrEqual(s);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e){this.vr=e,this.docs=function(){return new yt(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let s=ai();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Zt.newInvalidDocument(i))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ai();const o=n.path,a=new oe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||m$(p$(h),s)<=0||(i.has(h.key)||Hh(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,s,i){de()}Fr(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new D4(this)}getSize(e){return M.resolve(this.size)}}class D4 extends C4{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.persistence=e,this.Mr=new aa(n=>wg(n),Eg),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Cg,this.targetCount=0,this.Lr=zo.Nn()}forEachTarget(e,n){return this.Mr.forEach((s,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Or&&(this.Or=n),M.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new zo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.qn(n),M.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(r).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.Mr.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.Nr.dr(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.Nr.Rr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Nr.gr(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n){this.Br={},this.overlays={},this.kr=new gg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new x4(this),this.indexManager=new I4,this.remoteDocumentCache=function(i){return new O4(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new T4(n),this.$r=new P4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new N4(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const i=new M4(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,n){return M.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class M4 extends _${constructor(e){super(),this.currentSequenceNumber=e}}class Sg{constructor(e){this.persistence=e,this.zr=new Cg,this.jr=null}static Hr(e){return new Sg(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,s){return this.zr.addReference(s,n),this.Jr.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.zr.removeReference(s,n),this.Jr.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),M.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jr,s=>{const i=oe.fromPath(s);return this.Yr(e,i).next(r=>{r||n.removeEntry(i,ye.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(s=>{s?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return M.or([()=>M.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.qi=s,this.Qi=i}static Ki(e,n){let s=Se(),i=Se();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Rg(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return rO()?8:yr.v(Rt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ji(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new V4;return this.Ji(e,n,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>r.result)}Yi(e,n,s,i){return s.documentReadCount<this.Wi?(Sa()<=Ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),M.resolve()):(Sa()<=Ce.DEBUG&&z("QueryEngine","Query:",fo(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(Sa()<=Ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ms(n))):M.resolve())}ji(e,n){if(hE(n))return M.resolve(null);let s=Ms(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ap(n,null,"F"),s=Ms(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Se(...r);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Ap(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,s,i){return hE(n)||i.isEqual(ye.min())?M.resolve(null):this.zi.getDocuments(e,s).next(r=>{const o=this.Zi(n,r);return this.Xi(n,o,s,i)?M.resolve(null):(Sa()<=Ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fo(n)),this.es(e,o,n,f$(i,-1)).next(a=>a))})}Zi(e,n){let s=new zt(Q0(e));return n.forEach((i,r)=>{Hh(e,r)&&(s=s.add(r))}),s}Xi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,n,s){return Sa()<=Ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",fo(n)),this.zi.getDocumentsMatchingQuery(e,n,Fi.min(),s)}es(e,n,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,n,s,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new yt(He),this.rs=new aa(r=>wg(r),Eg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R4(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function $4(t,e,n,s){return new U4(t,e,n,s)}async function yC(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Se();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function j4(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,m=f.keys();let _=M.resolve();return m.forEach(b=>{_=_.next(()=>h.getEntry(l,b)).next(C=>{const I=u.docVersions.get(b);rt(I!==null),C.version.compareTo(I)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=Se();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function vC(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function B4(t,e){const n=ve(t),s=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(r,h.addedDocuments,f)));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ln.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),i=i.insert(f,_),function(C,I,O){return C.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,_,h)&&a.push(n.Qr.updateTargetData(r,_))});let l=ai(),u=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(H4(r,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!s.isEqual(ye.min())){const h=n.Qr.getLastRemoteSnapshotVersion(r).next(f=>n.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return M.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.ns=i,r))}function H4(t,e,n){let s=Se(),i=Se();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ai();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function W4(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function q4(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Qr.getTargetData(s,e).next(r=>r?(i=r,M.resolve(i)):n.Qr.allocateTargetId(s).next(o=>(i=new Pi(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(s.targetId,s),n.rs.set(e,s.targetId)),s})}async function kp(t,e,n){const s=ve(t),i=s.ns.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zl(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function TE(t,e,n){const s=ve(t);let i=ye.min(),r=Se();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=ve(l),m=f.rs.get(h);return m!==void 0?M.resolve(f.ns.get(m)):f.Qr.getTargetData(u,h)}(s,o,Ms(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ts.getDocumentsMatchingQuery(o,e,n?i:ye.min(),n?r:Se())).next(a=>(z4(s,V$(e),a),{documents:a,hs:r})))}function z4(t,e,n){let s=t.ss.get(e)||ye.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.ss.set(e,s)}class bE{constructor(){this.activeTargetIds=H$()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K4{constructor(){this.no=new bE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,s){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new bE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc=null;function yf(){return Wc===null?Wc=function(){return 268435456+Math.round(2147483648*Math.random())}():Wc++,"0x"+Wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class X4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=s+"://"+n.host,this.po=`projects/${i}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get wo(){return!1}So(n,s,i,r,o){const a=yf(),l=this.bo(n,s.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,r,o),this.Co(n,l,u,i).then(h=>(z("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Bo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}vo(n,s,i,r,o,a){return this.So(n,s,i,r,o)}Do(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}bo(n,s){const i=Q4[n];return`${this.fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,s,i){const r=yf();return new Promise((o,a)=>{const l=new n$;l.setWithCredentials(!0),l.listenOnce(e$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gf.NO_ERROR:const h=l.getResponseJson();z(Qt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case gf.TIMEOUT:z(Qt,`RPC '${e}' ${r} timed out`),a(new se(V.DEADLINE_EXCEEDED,"Request time out"));break;case gf.HTTP_ERROR:const f=l.getStatus();if(z(Qt,`RPC '${e}' ${r} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const b=function(I){const O=I.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(_.status);a(new se(b,_.message))}else a(new se(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new se(V.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{z(Qt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);z(Qt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",u,s,15)})}Fo(e,n,s){const i=yf(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JU(),a=ZU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=r.join("");z(Qt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,_=!1;const b=new Y4({lo:I=>{_?z(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(m||(z(Qt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),z(Qt,`RPC '${e}' stream ${i} sending:`,I),f.send(I))},ho:()=>f.close()}),C=(I,O,D)=>{I.listen(O,B=>{try{D(B)}catch(J){setTimeout(()=>{throw J},0)}})};return C(f,jc.EventType.OPEN,()=>{_||z(Qt,`RPC '${e}' stream ${i} transport opened.`)}),C(f,jc.EventType.CLOSE,()=>{_||(_=!0,z(Qt,`RPC '${e}' stream ${i} transport closed`),b.Vo())}),C(f,jc.EventType.ERROR,I=>{_||(_=!0,Bo(Qt,`RPC '${e}' stream ${i} transport errored:`,I),b.Vo(new se(V.UNAVAILABLE,"The operation could not be completed")))}),C(f,jc.EventType.MESSAGE,I=>{var O;if(!_){const D=I.data[0];rt(!!D);const B=D,J=B.error||((O=B[0])===null||O===void 0?void 0:O.error);if(J){z(Qt,`RPC '${e}' stream ${i} received error:`,J);const Ae=J.status;let W=function(qe){const bt=Ct[qe];if(bt!==void 0)return lC(bt)}(Ae),me=J.message;W===void 0&&(W=V.INTERNAL,me="Unknown error status: "+Ae+" with message "+J.message),_=!0,b.Vo(new se(W,me)),f.close()}else z(Qt,`RPC '${e}' stream ${i} received:`,D),b.mo(D)}}),C(a,t$.STAT_EVENT,I=>{I.stat===eE.PROXY?z(Qt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===eE.NOPROXY&&z(Qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.Ro()},0),b}}function vf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return new l4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=s,this.xo=i,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s,i,r,o,a,l){this.oi=e,this.$o=s,this.Uo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new wC(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?($s(n.toString()),$s("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Wo===n&&this.o_(s,i)},s=>{e(()=>{const i=new se(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.__(i)})})}o_(e,n){const s=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{s(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{s(()=>this.__(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J4 extends EC{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=h4(this.serializer,e),s=function(r){if(!("targetChange"in r))return ye.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?Fs(o.readTime):ye.min()}(e);return this.listener.u_(n,s)}c_(e){const n={};n.database=Pp(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Ip(l)?{documents:p4(r,l)}:{query:m4(r,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hC(r,o.resumeToken);const u=Cp(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=zu(r,o.snapshotVersion.toTimestamp());const u=Cp(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=_4(this.serializer,e);s&&(n.labels=s),this.t_(n)}l_(e){const n={};n.database=Pp(this.serializer),n.removeTarget=e,this.t_(n)}}class Z4 extends EC{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=f4(e.writeResults,e.commitTime),s=Fs(e.commitTime);return this.listener.T_(s,n)}return rt(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Pp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>d4(this.serializer,s))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new se(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Sp(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new se(V.UNKNOWN,r.toString())})}vo(e,n,s,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Sp(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(V.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class tj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?($s(n),this.g_=!1):z("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{s.enqueueAndForget(async()=>{Gr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ve(l);u.v_.add(4),await nc(u),u.x_.set("Unknown"),u.v_.delete(4),await Gh(u)}(this))})}),this.x_=new tj(s,i)}}async function Gh(t){if(Gr(t))for(const e of t.F_)await e(!0)}async function nc(t){for(const e of t.F_)await e(!1)}function TC(t,e){const n=ve(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Og(n)?Ng(n):la(n).Jo()&&kg(n,e))}function Pg(t,e){const n=ve(t),s=la(n);n.C_.delete(e),s.Jo()&&bC(n,e),n.C_.size===0&&(s.Jo()?s.Xo():Gr(n)&&n.x_.set("Unknown"))}function kg(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}la(t).c_(e)}function bC(t,e){t.O_.Oe(e),la(t).l_(e)}function Ng(t){t.O_=new i4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),la(t).start(),t.x_.p_()}function Og(t){return Gr(t)&&!la(t).Ho()&&t.C_.size>0}function Gr(t){return ve(t).v_.size===0}function IC(t){t.O_=void 0}async function sj(t){t.C_.forEach((e,n)=>{kg(t,e)})}async function ij(t,e){IC(t),Og(t)?(t.x_.S_(e),Ng(t)):t.x_.set("Unknown")}async function rj(t,e,n){if(t.x_.set("Online"),e instanceof uC&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ku(t,s)}else if(e instanceof ou?t.O_.$e(e):e instanceof cC?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ye.min()))try{const s=await vC(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.C_.get(u);h&&r.C_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=r.C_.get(l);if(!h)return;r.C_.set(l,h.withResumeToken(ln.EMPTY_BYTE_STRING,h.snapshotVersion)),bC(r,l);const f=new Pi(h.target,l,u,h.sequenceNumber);kg(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Ku(t,s)}}async function Ku(t,e,n){if(!Zl(e))throw e;t.v_.add(1),await nc(t),t.x_.set("Offline"),n||(n=()=>vC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Gh(t)})}function AC(t,e){return e().catch(n=>Ku(t,n,e))}async function Qh(t){const e=ve(t),n=$i(e);let s=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;oj(e);)try{const i=await W4(e.localStore,s);if(i===null){e.D_.length===0&&n.Xo();break}s=i.batchId,aj(e,i)}catch(i){await Ku(e,i)}CC(e)&&SC(e)}function oj(t){return Gr(t)&&t.D_.length<10}function aj(t,e){t.D_.push(e);const n=$i(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function CC(t){return Gr(t)&&!$i(t).Ho()&&t.D_.length>0}function SC(t){$i(t).start()}async function lj(t){$i(t).d_()}async function cj(t){const e=$i(t);for(const n of t.D_)e.I_(n.mutations)}async function uj(t,e,n){const s=t.D_.shift(),i=bg.from(s,e,n);await AC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qh(t)}async function hj(t,e){e&&$i(t).P_&&await async function(s,i){if(function(o){return t4(o)&&o!==V.ABORTED}(i.code)){const r=s.D_.shift();$i(s).Zo(),await AC(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Qh(s)}}(t,e),CC(t)&&SC(t)}async function AE(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=Gr(n);n.v_.add(3),await nc(n),s&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Gh(n)}async function dj(t,e){const n=ve(t);e?(n.v_.delete(2),await Gh(n)):e||(n.v_.add(2),await nc(n),n.x_.set("Unknown"))}function la(t){return t.N_||(t.N_=function(n,s,i){const r=ve(n);return r.R_(),new J4(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:sj.bind(null,t),To:ij.bind(null,t),u_:rj.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Og(t)?Ng(t):t.x_.set("Unknown")):(await t.N_.stop(),IC(t))})),t.N_}function $i(t){return t.L_||(t.L_=function(n,s,i){const r=ve(n);return r.R_(),new Z4(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:lj.bind(null,t),To:hj.bind(null,t),E_:cj.bind(null,t),T_:uj.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Qh(t)):(await t.L_.stop(),t.D_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Dg(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(t,e){if($s("AsyncQueue",`${e}: ${t}`),Zl(t))return new se(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=Va(),this.sortedSet=new yt(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.B_=new yt(oe.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):de():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ko{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(e,n,Oo.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class pj{constructor(){this.queries=new aa(e=>G0(e),Bh),this.onlineState="Unknown",this.W_=new Set}}async function RC(t,e){const n=ve(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.K_()&&e.U_()&&(s=2):(r=new fj,s=e.U_()?0:1);try{switch(s){case 0:r.q_=await n.onListen(i,!0);break;case 1:r.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=xg(o,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.Q_.push(e),e.G_(n.onlineState),r.q_&&e.z_(r.q_)&&Lg(n)}async function PC(t,e){const n=ve(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Q_.indexOf(e);o>=0&&(r.Q_.splice(o,1),r.Q_.length===0?i=e.U_()?0:1:!r.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function mj(t,e){const n=ve(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.Q_)a.z_(i)&&(s=!0);o.q_=i}}s&&Lg(n)}function gj(t,e,n){const s=ve(t),i=s.queries.get(e);if(i)for(const r of i.Q_)r.onError(n);s.queries.delete(e)}function Lg(t){t.W_.forEach(e=>{e.next()})}var Np,SE;(SE=Np||(Np={})).j_="default",SE.Cache="cache";class kC{constructor(e,n,s){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=s||{}}z_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const s=n!=="Offline";return(!this.options.ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.key=e}}class OC{constructor(e){this.key=e}}class _j{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Se(),this.mutatedKeys=Se(),this.ha=Q0(e),this.Pa=new Oo(this.ha)}get Ia(){return this.ua}Ta(e,n){const s=n?n.Ea:new CE,i=n?n.Pa:this.Pa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=Hh(this.query,f)?f:null,b=!!m&&this.mutatedKeys.has(m.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;m&&_?m.data.isEqual(_.data)?b!==C&&(s.track({type:3,doc:_}),I=!0):this.da(m,_)||(s.track({type:2,doc:_}),I=!0,(l&&this.ha(_,l)>0||u&&this.ha(_,u)<0)&&(a=!0)):!m&&_?(s.track({type:0,doc:_}),I=!0):m&&!_&&(s.track({type:1,doc:m}),I=!0,(l||u)&&(a=!0)),I&&(_?(o=o.add(_),r=C?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Pa:o,Ea:s,Xi:a,mutatedKeys:r}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((h,f)=>function(_,b){const C=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return C(_)-C(b)}(h.type,f.type)||this.ha(h.doc,f.doc)),this.Aa(s),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new Ko(this.query,e.Pa,r,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new CE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=Se(),this.Pa.forEach(s=>{this.ma(s.key)&&(this.la=this.la.add(s.key))});const n=[];return e.forEach(s=>{this.la.has(s)||n.push(new OC(s))}),this.la.forEach(s=>{e.has(s)||n.push(new NC(s))}),n}fa(e){this.ua=e.hs,this.la=Se();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Ko.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class yj{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class vj{constructor(e){this.key=e,this.pa=!1}}class wj{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new aa(a=>G0(a),Bh),this.Sa=new Map,this.ba=new Set,this.Da=new yt(oe.comparator),this.Ca=new Map,this.va=new Cg,this.Fa={},this.Ma=new Map,this.xa=zo.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Ej(t,e,n=!0){const s=FC(t);let i;const r=s.wa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ga()):i=await DC(s,e,n,!0),i}async function Tj(t,e){const n=FC(t);await DC(n,e,!0,!1)}async function DC(t,e,n,s){const i=await q4(t.localStore,Ms(e)),r=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return s&&(a=await bj(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TC(t.remoteStore,i),a}async function bj(t,e,n,s,i){t.Na=(f,m,_)=>async function(C,I,O,D){let B=I.view.Ta(O);B.Xi&&(B=await TE(C.localStore,I.query,!1).then(({documents:me})=>I.view.Ta(me,B)));const J=D&&D.targetChanges.get(I.targetId),Ae=D&&D.targetMismatches.get(I.targetId)!=null,W=I.view.applyChanges(B,C.isPrimaryClient,J,Ae);return PE(C,I.targetId,W.Va),W.snapshot}(t,f,m,_);const r=await TE(t.localStore,e,!0),o=new _j(e,r.hs),a=o.Ta(r.documents),l=tc.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);PE(t,n,u.Va);const h=new yj(e,n,o);return t.wa.set(e,h),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function Ij(t,e,n){const s=ve(t),i=s.wa.get(e),r=s.Sa.get(i.targetId);if(r.length>1)return s.Sa.set(i.targetId,r.filter(o=>!Bh(o,e))),void s.wa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await kp(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Pg(s.remoteStore,i.targetId),Op(s,i.targetId)}).catch(Jl)):(Op(s,i.targetId),await kp(s.localStore,i.targetId,!0))}async function Aj(t,e){const n=ve(t),s=n.wa.get(e),i=n.Sa.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Pg(n.remoteStore,s.targetId))}async function Cj(t,e,n){const s=Dj(t);try{const i=await function(o,a){const l=ve(o),u=Nt.now(),h=a.reduce((_,b)=>_.add(b.key),Se());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let b=ai(),C=Se();return l.os.getEntries(_,h).next(I=>{b=I,b.forEach((O,D)=>{D.isValidDocument()||(C=C.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,b)).next(I=>{f=I;const O=[];for(const D of a){const B=Y$(D,f.get(D.key).overlayedDocument);B!=null&&O.push(new Kr(D.key,B,j0(B.value.mapValue),Vs.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,O,a)}).next(I=>{m=I;const O=I.applyToLocalDocumentSet(f,C);return l.documentOverlayCache.saveOverlays(_,I.batchId,O)})}).then(()=>({batchId:m.batchId,changes:X0(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new yt(He)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(s,i.batchId,n),await sc(s,i.changes),await Qh(s.remoteStore)}catch(i){const r=xg(i,"Failed to persist write");n.reject(r)}}async function xC(t,e){const n=ve(t);try{const s=await B4(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Ca.get(r);o&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?rt(o.pa):i.removedDocuments.size>0&&(rt(o.pa),o.pa=!1))}),await sc(n,s,e)}catch(s){await Jl(s)}}function RE(t,e,n){const s=ve(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wa.forEach((r,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ve(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const m of f.Q_)m.G_(a)&&(u=!0)}),u&&Lg(l)}(s.eventManager,e),i.length&&s.ya.u_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Sj(t,e,n){const s=ve(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Ca.get(e),r=i&&i.key;if(r){let o=new yt(oe.comparator);o=o.insert(r,Zt.newNoDocument(r,ye.min()));const a=Se().add(r),l=new zh(ye.min(),new Map,new yt(He),o,a);await xC(s,l),s.Da=s.Da.remove(r),s.Ca.delete(e),Mg(s)}else await kp(s.localStore,e,!1).then(()=>Op(s,e,n)).catch(Jl)}async function Rj(t,e){const n=ve(t),s=e.batch.batchId;try{const i=await j4(n.localStore,e);MC(n,s,null),LC(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sc(n,i)}catch(i){await Jl(i)}}async function Pj(t,e,n){const s=ve(t);try{const i=await function(o,a){const l=ve(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(rt(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(s.localStore,e);MC(s,e,n),LC(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await sc(s,i)}catch(i){await Jl(i)}}function LC(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function MC(t,e,n){const s=ve(t);let i=s.Fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Fa[s.currentUser.toKey()]=i}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Sa.get(e))t.wa.delete(s),n&&t.ya.La(s,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(s=>{t.va.containsKey(s)||VC(t,s)})}function VC(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Pg(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Mg(t))}function PE(t,e,n){for(const s of n)s instanceof NC?(t.va.addReference(s.key,e),kj(t,s)):s instanceof OC?(z("SyncEngine","Document no longer in limbo: "+s.key),t.va.removeReference(s.key,e),t.va.containsKey(s.key)||VC(t,s.key)):de()}function kj(t,e){const n=e.key,s=n.path.canonicalString();t.Da.get(n)||t.ba.has(s)||(z("SyncEngine","New document in limbo: "+n),t.ba.add(s),Mg(t))}function Mg(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new oe(mt.fromString(e)),s=t.xa.next();t.Ca.set(s,new vj(n)),t.Da=t.Da.insert(n,s),TC(t.remoteStore,new Pi(Ms(Tg(n.path)),s,"TargetPurposeLimboResolution",gg._e))}}async function sc(t,e,n){const s=ve(t),i=[],r=[],o=[];s.wa.isEmpty()||(s.wa.forEach((a,l)=>{o.push(s.Na(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Rg.Ki(l.targetId,u);r.push(h)}}))}),await Promise.all(o),s.ya.u_(i),await async function(l,u){const h=ve(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,m=>M.forEach(m.qi,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>M.forEach(m.Qi,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Zl(f))throw f;z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=h.ns.get(m),b=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(b);h.ns=h.ns.insert(m,C)}}}(s.localStore,r))}async function Nj(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const s=await yC(n.localStore,e);n.currentUser=e,function(r,o){r.Ma.forEach(a=>{a.forEach(l=>{l.reject(new se(V.CANCELLED,o))})}),r.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sc(n,s.us)}}function Oj(t,e){const n=ve(t),s=n.Ca.get(e);if(s&&s.pa)return Se().add(s.key);{let i=Se();const r=n.Sa.get(e);if(!r)return i;for(const o of r){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function FC(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Oj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sj.bind(null,e),e.ya.u_=mj.bind(null,e.eventManager),e.ya.La=gj.bind(null,e.eventManager),e}function Dj(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pj.bind(null,e),e}class kE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Kh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $4(this.persistence,new F4,e.initialUser,this.serializer)}createPersistence(e){return new L4(Sg.Hr,this.serializer)}createSharedClientState(e){return new K4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xj{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>RE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nj.bind(null,this.syncEngine),await dj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pj}()}createDatastore(e){const n=Kh(e.databaseInfo.databaseId),s=function(r){return new X4(r)}(e.databaseInfo);return function(r,o,a,l){return new ej(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new nj(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>RE(this.syncEngine,n,0),function(){return IE.D()?new IE:new G4}())}createSyncEngine(e,n){return function(i,r,o,a,l,u,h){const f=new wj(i,r,o,a,l,u);return h&&(f.Oa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const i=ve(s);z("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await nc(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):$s("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Yt.UNAUTHENTICATED,this.clientId=F0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{z("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(z("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wf(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await yC(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function NE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vj(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>AE(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>AE(e.remoteStore,i)),t._onlineComponents=e}function Mj(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Vj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await wf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Mj(n))throw n;Bo("Error using user provided cache. Falling back to memory cache: "+n),await wf(t,new kE)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await wf(t,new kE);return t._offlineComponents}async function $C(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await NE(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await NE(t,new xj))),t._onlineComponents}function Fj(t){return $C(t).then(e=>e.syncEngine)}async function jC(t){const e=await $C(t),n=e.eventManager;return n.onListen=Ej.bind(null,e.syncEngine),n.onUnlisten=Ij.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Tj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Aj.bind(null,e.syncEngine),n}function Uj(t,e,n={}){const s=new Ls;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new UC({next:m=>{o.enqueueAndForget(()=>PC(r,f));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new se(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new se(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new kC(Tg(a.path),h,{includeMetadataChanges:!0,ta:!0});return RC(r,f)}(await jC(t),t.asyncQueue,e,n,s)),s.promise}function $j(t,e,n={}){const s=new Ls;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new UC({next:m=>{o.enqueueAndForget(()=>PC(r,f)),m.fromCache&&l.source==="server"?u.reject(new se(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new kC(a,h,{includeMetadataChanges:!0,ta:!0});return RC(r,f)}(await jC(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e,n){if(!n)throw new se(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jj(t,e,n,s){if(e===!0&&s===!0)throw new se(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function DE(t){if(!oe.isDocumentKey(t))throw new se(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xE(t){if(oe.isDocumentKey(t))throw new se(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vg(t);throw new se(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BC((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new i$;switch(s.type){case"firstParty":return new l$(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=OE.get(n);s&&(z("ComponentProvider","Removing Datastore"),OE.delete(n),s.terminate())}(this),Promise.resolve()}}function Bj(t,e,n,s={}){var i;const r=(t=ji(t,Yh))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Yt.MOCK_USER;else{a=om(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new se(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Yt(u)}t._authCredentials=new r$(new V0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xh(this.firestore,e,this._query)}}class xn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class Li extends Xh{constructor(e,n,s){super(e,n,Tg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new oe(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Dp(t,e,...n){if(t=dt(t),HC("collection","path",e),t instanceof Yh){const s=mt.fromString(e,...n);return xE(s),new Li(t,null,s)}{if(!(t instanceof xn||t instanceof Li))throw new se(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return xE(s),new Li(t.firestore,null,s)}}function Jh(t,e,...n){if(t=dt(t),arguments.length===1&&(e=F0.newId()),HC("doc","path",e),t instanceof Yh){const s=mt.fromString(e,...n);return DE(s),new xn(t,null,new oe(s))}{if(!(t instanceof xn||t instanceof Li))throw new se(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return DE(s),new xn(t.firestore,t instanceof Li?t.converter:null,new oe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new wC(this,"async_queue_retry"),this.cu=()=>{const n=vf();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=vf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=vf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Ls;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Zl(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(s=>{this.ou=s,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw $s("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this._u=!1,s))));return this.nu=n,n}enqueueAfterDelay(e,n,s){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Dg.createAndSchedule(this,e,n,s,r=>this.Iu(r));return this.su.push(i),i}lu(){this.ou&&de()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ic extends Yh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new Hj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WC(this),this._firestoreClient.terminate()}}function ca(t,e){const n=typeof t=="object"?t:xl(),s=typeof t=="string"?t:e||"(default)",i=hi(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=im("firestore");r&&Bj(i,...r)}return i}function Fg(t){return t._firestoreClient||WC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WC(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,u,h){return new T$(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,BC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lj(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Go(ln.fromBase64String(e))}catch(n){throw new se(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Go(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wj=/^__.*__$/;class qj{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ec(e,this.data,n,this.fieldTransforms)}}function zC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class jg{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ru(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new jg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:s,gu:!1});return i.pu(e),i}yu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:s,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Gu(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(zC(this.Vu)&&Wj.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class zj{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Kh(e)}Cu(e,n,s,i=!1){return new jg({Vu:e,methodName:n,Du:s,path:Wt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KC(t){const e=t._freezeSettings(),n=Kh(t._databaseId);return new zj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GC(t,e,n,s,i,r={}){const o=t.Cu(r.merge||r.mergeFields?2:0,e,n,i);JC("Data must be an object, but it was:",o,s);const a=YC(s,o);let l,u;if(r.merge)l=new ls(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const m=Kj(e,f,n);if(!o.contains(m))throw new se(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qj(h,m)||h.push(m)}l=new ls(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new qj(new Gn(a),l,u)}function QC(t,e){if(XC(t=dt(t)))return JC("Unsupported field value:",e,t),YC(t,e);if(t instanceof qC)return function(s,i){if(!zC(i.Vu))throw i.Su(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=QC(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return W$(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Nt.fromDate(s);return{timestampValue:zu(i.serializer,r)}}if(s instanceof Nt){const r=new Nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:zu(i.serializer,r)}}if(s instanceof $g)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Go)return{bytesValue:hC(i.serializer,s._byteString)};if(s instanceof xn){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ag(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Su(`Unsupported field value: ${Vg(s)}`)}(t,e)}function YC(t,e){const n={};return U0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oa(t,(s,i)=>{const r=QC(i,e.fu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function XC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Nt||t instanceof $g||t instanceof Go||t instanceof xn||t instanceof qC)}function JC(t,e,n){if(!XC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Vg(n);throw s==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+s)}}function Kj(t,e,n){if((e=dt(e))instanceof Ug)return e._internalPath;if(typeof e=="string")return ZC(t,e);throw Gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gj=new RegExp("[~\\*/\\[\\]]");function ZC(t,e,n){if(e.search(Gj)>=0)throw Gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ug(...e.split("."))._internalPath}catch{throw Gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new se(V.INVALID_ARGUMENT,a+t+l)}function Qj(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Yj extends eS{data(){return super.data()}}function tS(t,e){return typeof e=="string"?ZC(t,e):e instanceof Ug?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jj{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return oa(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new $g(St(e.latitude),St(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=yg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cl(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new Nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=mt.fromString(e);rt(_C(s));const i=new Sl(s.get(1),s.get(3)),r=new oe(s.popFirst(5));return i.isEqual(n)||$s(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sS extends eS{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tS("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class au extends sS{data(e={}){return super.data(e)}}class Zj{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ua(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new au(this._firestore,this._userDataWriter,s.key,s,new Ua(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new au(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ua(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new au(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ua(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:eB(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){t=ji(t,xn);const e=ji(t.firestore,ic);return Uj(Fg(e),t._key).then(n=>sB(e,t,n))}class rS extends Jj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,n)}}function tB(t){t=ji(t,Xh);const e=ji(t.firestore,ic),n=Fg(e),s=new rS(e);return Xj(t._query),$j(n,t._query).then(i=>new Zj(e,s,t,i))}function nB(t,e,n){t=ji(t,xn);const s=ji(t.firestore,ic),i=nS(t.converter,e,n);return oS(s,[GC(KC(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vs.none())])}function ME(t,e){const n=ji(t.firestore,ic),s=Jh(t),i=nS(t.converter,e);return oS(n,[GC(KC(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Vs.exists(!1))]).then(()=>s)}function oS(t,e){return function(s,i){const r=new Ls;return s.asyncQueue.enqueueAndForget(async()=>Cj(await Fj(s),i,r)),r.promise}(Fg(t),e)}function sB(t,e,n){const s=n.docs.get(e._key),i=new rS(t);return new sS(t,i,e._key,s,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ra=i})(Hi),Xn(new Ln("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ic(new o$(s.getProvider("auth-internal")),new u$(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),sn(tE,"4.6.0",e),sn(tE,"4.6.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebasestorage.googleapis.com",lS="storageBucket",iB=2*60*1e3,rB=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Zn{constructor(e,n,s=0){super(Ef(e),`Firebase Storage: ${n} (${Ef(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ef(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function Ef(t){return"storage/"+t}function Bg(){const t="An unknown error occurred, please check the error payload for server response.";return new Tt(Et.UNKNOWN,t)}function oB(t){return new Tt(Et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function aB(t){return new Tt(Et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lB(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Tt(Et.UNAUTHENTICATED,t)}function cB(){return new Tt(Et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uB(t){return new Tt(Et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function hB(){return new Tt(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dB(){return new Tt(Et.CANCELED,"User canceled the upload/download.")}function fB(t){return new Tt(Et.INVALID_URL,"Invalid URL '"+t+"'.")}function pB(t){return new Tt(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mB(){return new Tt(Et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lS+"' property when initializing the app?")}function gB(){return new Tt(Et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _B(){return new Tt(Et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yB(t){return new Tt(Et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xp(t){return new Tt(Et.INVALID_ARGUMENT,t)}function cS(){return new Tt(Et.APP_DELETED,"The Firebase app was deleted.")}function vB(t){return new Tt(Et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(t,e){return new Tt(Et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ra(t){throw new Tt(Et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(s.path==="")return s;throw pB(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(J){J.path_=decodeURIComponent(J.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),b={bucket:1,path:3},C=n===aS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",O=new RegExp(`^https?://${C}/${i}/${I}`,"i"),B=[{regex:a,indices:l,postModify:r},{regex:_,indices:b,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let J=0;J<B.length;J++){const Ae=B[J],W=Ae.regex.exec(e);if(W){const me=W[Ae.indices.bucket];let ue=W[Ae.indices.path];ue||(ue=""),s=new yn(me,ue),Ae.postModify(s);break}}if(s==null)throw fB(e);return s}}class wB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...I){u||(u=!0,e.apply(null,I))}function f(I){i=setTimeout(()=>{i=null,t(_,l())},I)}function m(){r&&clearTimeout(r)}function _(I,...O){if(u){m();return}if(I){m(),h.call(null,I,...O);return}if(l()||o){m(),h.call(null,I,...O);return}s<64&&(s*=2);let B;a===1?(a=2,B=0):B=(s+Math.random())*1e3,f(B)}let b=!1;function C(I){b||(b=!0,m(),!u&&(i!==null?(I||(a=2),clearTimeout(i),f(0)):I||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function TB(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bB(t){return t!==void 0}function IB(t){return typeof t=="object"&&!Array.isArray(t)}function Hg(t){return typeof t=="string"||t instanceof String}function VE(t){return Wg()&&t instanceof Blob}function Wg(){return typeof Blob<"u"}function Lp(t,e,n,s){if(s<e)throw xp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw xp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function uS(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ir||(Ir={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AB(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{constructor(e,n,s,i,r,o,a,l,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,b)=>{this.resolve_=_,this.reject_=b,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new qc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ir.NO_ERROR,l=r.getStatus();if(!a||AB(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Ir.ABORT;s(!1,new qc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new qc(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());bB(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Bg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?cS():dB();o(l)}else{const l=hB();o(l)}};this.canceled_?n(!1,new qc(!1,null,!0)):this.backoffId_=EB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function SB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NB(t,e,n,s,i,r,o=!0){const a=uS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return PB(u,e),SB(u,n),RB(u,r),kB(u,s),new CB(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DB(...t){const e=OB();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Wg())return new Blob(t);throw new Tt(Et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LB(t){if(typeof atob>"u")throw yB("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tf{constructor(e,n){this.data=e,this.contentType=n||null}}function MB(t,e){switch(t){case Ns.RAW:return new Tf(hS(e));case Ns.BASE64:case Ns.BASE64URL:return new Tf(dS(t,e));case Ns.DATA_URL:return new Tf(FB(e),UB(e))}throw Bg()}function hS(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function VB(t){let e;try{e=decodeURIComponent(t)}catch{throw il(Ns.DATA_URL,"Malformed data URL.")}return hS(e)}function dS(t,e){switch(t){case Ns.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw il(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ns.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw il(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LB(e)}catch(i){throw i.message.includes("polyfill")?i:il(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class fS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw il(Ns.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=$B(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function FB(t){const e=new fS(t);return e.base64?dS(Ns.BASE64,e.rest):VB(e.rest)}function UB(t){return new fS(t).contentType}function $B(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){let s=0,i="";VE(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(VE(this.data_)){const s=this.data_,i=xB(s,e,n);return i===null?null:new Ri(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Ri(s,!0)}}static getBlob(...e){if(Wg()){const n=e.map(s=>s instanceof Ri?s.data_:s);return new Ri(DB.apply(null,n))}else{const n=e.map(o=>Hg(o)?MB(Ns.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Ri(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){let e;try{e=JSON.parse(t)}catch{return null}return IB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BB(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function pS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB(t,e){return e}class pn{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||HB}}let zc=null;function WB(t){return!Hg(t)||t.length<2?t:pS(t)}function mS(){if(zc)return zc;const t=[];t.push(new pn("bucket")),t.push(new pn("generation")),t.push(new pn("metageneration")),t.push(new pn("name","fullPath",!0));function e(r,o){return WB(o)}const n=new pn("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new pn("size");return i.xform=s,t.push(i),t.push(new pn("timeCreated")),t.push(new pn("updated")),t.push(new pn("md5Hash",null,!0)),t.push(new pn("cacheControl",null,!0)),t.push(new pn("contentDisposition",null,!0)),t.push(new pn("contentEncoding",null,!0)),t.push(new pn("contentLanguage",null,!0)),t.push(new pn("contentType",null,!0)),t.push(new pn("metadata","customMetadata",!0)),zc=t,zc}function qB(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new yn(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function zB(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return qB(s,t),s}function gS(t,e,n){const s=qg(e);return s===null?null:zB(t,s,n)}function KB(t,e,n,s){const i=qg(e);if(i===null||!Hg(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),_=rc(m,n,s),b=uS({alt:"media",token:u});return _+b})[0]}function GB(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="prefixes",UE="items";function QB(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[FE])for(const i of n[FE]){const r=i.replace(/\/$/,""),o=t._makeStorageReference(new yn(e,r));s.prefixes.push(o)}if(n[UE])for(const i of n[UE]){const r=t._makeStorageReference(new yn(e,i.name));s.items.push(r)}return s}function YB(t,e,n){const s=qg(n);return s===null?null:QB(t,e,s)}class Zh{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){if(!t)throw Bg()}function XB(t,e){function n(s,i){const r=gS(t,i,e);return zg(r!==null),r}return n}function JB(t,e){function n(s,i){const r=YB(t,e,i);return zg(r!==null),r}return n}function ZB(t,e){function n(s,i){const r=gS(t,i,e);return zg(r!==null),KB(r,i,t.host,t._protocol)}return n}function Kg(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cB():i=lB():n.getStatus()===402?i=aB(t.bucket):n.getStatus()===403?i=uB(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function _S(t){const e=Kg(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=oB(t.path)),r.serverResponse=i.serverResponse,r}return n}function e9(t,e,n,s,i){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",n&&n.length>0&&(r.delimiter=n),s&&(r.pageToken=s),i&&(r.maxResults=i);const o=e.bucketOnlyServerUrl(),a=rc(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,h=new Zh(a,l,JB(t,e.bucket),u);return h.urlParams=r,h.errorHandler=Kg(e),h}function t9(t,e,n){const s=e.fullServerUrl(),i=rc(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Zh(i,r,ZB(t,n),o);return a.errorHandler=_S(e),a}function n9(t,e){const n=e.fullServerUrl(),s=rc(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(l,u){}const a=new Zh(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=_S(e),a}function s9(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function i9(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=s9(null,e)),s}function r9(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let B="";for(let J=0;J<2;J++)B=B+Math.random().toString().slice(2);return B}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=i9(e,s,i),h=GB(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Ri.getBlob(f,s,m);if(_===null)throw gB();const b={name:u.fullPath},C=rc(r,t.host,t._protocol),I="POST",O=t.maxUploadRetryTime,D=new Zh(C,I,XB(t,n),O);return D.urlParams=b,D.headers=o,D.body=_.uploadData(),D.errorHandler=Kg(e),D}class o9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ir.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ir.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ir.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Ra("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class a9 extends o9{initXhr(){this.xhr_.responseType="text"}}function ed(){return new a9}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vr(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pS(this._location.path)}get storage(){return this._service}get parent(){const e=jB(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new Vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vB(e)}}function l9(t,e,n){t._throwIfRoot("uploadBytes");const s=r9(t.storage,t._location,mS(),new Ri(e,!0),n);return t.storage.makeRequestWithTokens(s,ed).then(i=>({metadata:i,ref:t}))}function c9(t){const e={prefixes:[],items:[]};return yS(t,e).then(()=>e)}async function yS(t,e,n){const i=await u9(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await yS(t,e,i.nextPageToken)}function u9(t,e){e!=null&&typeof e.maxResults=="number"&&Lp("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=e9(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,ed)}function h9(t){t._throwIfRoot("getDownloadURL");const e=t9(t.storage,t._location,mS());return t.storage.makeRequestWithTokens(e,ed).then(n=>{if(n===null)throw _B();return n})}function d9(t){t._throwIfRoot("deleteObject");const e=n9(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ed)}function f9(t,e){const n=BB(t._location.path,e),s=new yn(t._location.bucket,n);return new Vr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p9(t){return/^[A-Za-z]+:\/\//.test(t)}function m9(t,e){return new Vr(t,e)}function vS(t,e){if(t instanceof Gg){const n=t;if(n._bucket==null)throw mB();const s=new Vr(n,n._bucket);return e!=null?vS(s,e):s}else return e!==void 0?f9(t,e):t}function g9(t,e){if(e&&p9(e)){if(t instanceof Gg)return m9(t,e);throw xp("To use ref(service, url), the first argument must be a Storage instance.")}else return vS(t,e)}function $E(t,e){const n=e==null?void 0:e[lS];return n==null?null:yn.makeFromBucketSpec(n,t)}function _9(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:om(i,t.app.options.projectId))}class Gg{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=aS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iB,this._maxUploadRetryTime=rB,this._requests=new Set,i!=null?this._bucket=yn.makeFromBucketSpec(i,this._host):this._bucket=$E(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=$E(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vr(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new wB(cS());{const o=NB(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const jE="@firebase/storage",BE="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="storage";function y9(t,e,n){return t=dt(t),l9(t,e,n)}function HE(t){return t=dt(t),c9(t)}function WE(t){return t=dt(t),h9(t)}function v9(t){return t=dt(t),d9(t)}function Pa(t,e){return t=dt(t),g9(t,e)}function ES(t=xl(),e){t=dt(t);const s=hi(t,wS).getImmediate({identifier:e}),i=im("storage");return i&&w9(s,...i),s}function w9(t,e,n,s={}){_9(t,e,n,s)}function E9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gg(n,s,i,e,Hi)}function T9(){Xn(new Ln(wS,E9,"PUBLIC").setMultipleInstances(!0)),sn(jE,BE,""),sn(jE,BE,"esm2017")}T9();const b9={apiKey:"AIzaSyBZHHgzBsvnpHA5Vd8Ak8dgMm764e8DS_o",authDomain:"hobbypro-7fa90.firebaseapp.com",projectId:"hobbypro-7fa90",storageBucket:"hobbypro-7fa90.appspot.com",messagingSenderId:"712636777336",appId:"1:712636777336:web:3aab6ea364039d003fbe8d",measurementId:"G-CL61H6M0JN",databaseURL:"https://hobbypro-7fa90-default-rtdb.firebaseio.com"},oc=_b(b9);lV(oc);an(oc);Q2(oc);ca(oc);ES(oc);const es=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ua=t=>(jr("data-v-2e2452a6"),t=t(),Br(),t),I9=ua(()=>v("h1",{class:"mt-5 text-center"},"Hobby Pro",-1)),A9={class:"justify-content-around d-flex mt-5"},C9={class:"border border-lg p-5"},S9=ua(()=>v("h4",{class:"text-center"},"Log In",-1)),R9={class:"text-center text-danger"},P9={class:"mb-3"},k9=ua(()=>v("label",{for:"email",class:"form-label"},"Email address",-1)),N9=ua(()=>v("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1)),O9={class:"mb-3"},D9=ua(()=>v("label",{for:"password",class:"form-label"},"Password",-1)),x9={class:"text-center mb-1"},L9={class:"text-center mb-3 text-decoration-none"},M9={class:"text-center"},V9={key:1,class:"text-center d-flex justify-content-center"},F9=ua(()=>v("button",{id:"spinner",class:"btn btn-primary",type:"button",disabled:""},[v("span",{class:"spinner-border",role:"status","aria-hidden":"true"})],-1)),U9=[F9],$9={__name:"LogInView",setup(t){const e=ze(""),n=ze(""),s=ze(""),i=an(),r=ci();let o=ze(!1);function a(u){u.preventDefault(),o.value=!0,s.value="",setTimeout(function(){Sx(i,e.value,n.value).then(h=>{h.user,r.replace("/dashboard")}).catch(h=>{o.value=!1,s.value=l(h.code),n.value=""})},250)}function l(u){return u.substring(u.indexOf("/")+1,u.length)}return(u,h)=>{const f=Bi("router-link");return ke(),Me(Pt,null,[I9,v("div",A9,[v("form",C9,[S9,v("div",R9,Vt(s.value),1),v("div",P9,[k9,gn(v("input",{"onUpdate:modelValue":h[0]||(h[0]=m=>e.value=m),type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp"},null,512),[[En,e.value]]),N9]),v("div",O9,[D9,gn(v("input",{"onUpdate:modelValue":h[1]||(h[1]=m=>n.value=m),type:"password",class:"form-control",id:"password"},null,512),[[En,n.value]])]),v("div",x9,[le(f,{to:"register",class:"text-decoration-none"},{default:Be(()=>[pt("Register")]),_:1})]),v("div",L9,[le(f,{to:"forgot-password"},{default:Be(()=>[pt("forgot password?")]),_:1})]),v("div",M9,[ht(o)?(ke(),Me("div",V9,U9)):(ke(),Me("button",{key:0,onClick:a,class:"btn btn-primary"},"Submit"))])])])],64)}}},j9=es($9,[["__scopeId","data-v-2e2452a6"]]),B9="/assets/defaultProjectImage-CRmmRth6.png",Qg=t=>(jr("data-v-7e106d45"),t=t(),Br(),t),H9={class:"MP_formatting"},W9=Yo('<div class="container-fluid" data-v-7e106d45><div class="row" data-v-7e106d45><div class="col-12" data-v-7e106d45><header data-v-7e106d45><h1 data-v-7e106d45>Main Dashboard</h1></header><div class="dashboardInfo" data-v-7e106d45><div class="dashboardItems" data-v-7e106d45><label data-v-7e106d45>All </label><button class="btn btn-secondary" data-v-7e106d45>Filter</button><button class="btn btn-secondary" data-v-7e106d45>Sort</button></div></div></div></div></div>',1),q9={id:"cardTest",class:"container-fluid mt-3"},z9={class:"content-grid"},K9=Qg(()=>v("img",{class:"image-fluid",src:B9,alt:"image here"},null,-1)),G9={class:"info"},Q9={class:"tagarea"},Y9=["disabled"],X9=Qg(()=>v("p",null,"Last updated: 03/15/2024",-1)),J9=Qg(()=>v("div",{class:"progress"},[v("div",{class:"progress-bar",style:{width:"20%"}})],-1)),Z9={id:"projectDetailsButtonWrapper"},e6=Yo('<div class="cardHidden" data-v-7e106d45><div class="info" data-v-7e106d45><div class="tagarea" data-v-7e106d45></div><p id="progressBar" data-v-7e106d45>Test progress bar layout</p></div></div><div class="cardHidden" data-v-7e106d45><div class="info" data-v-7e106d45><div class="tagarea" data-v-7e106d45></div><p id="progressBar" data-v-7e106d45>Test progress bar layout</p></div></div>',2),t6={__name:"MainDashboard",setup(t){const e=ca(),n=ze([]),s=an();ci();const i=s.currentUser.email+"_Projects";async function r(){try{const o=Dp(e,i),a=await tB(o),l=[];return a.forEach(u=>{const f={...u.data(),uid:u.id};l.push(f)}),l}catch(o){return console.error("Error fetching projects:",o),[]}}return Nl(async()=>{n.value=await r()}),(o,a)=>{const l=Bi("router-link");return ke(),Me("div",H9,[W9,v("div",q9,[v("div",z9,[(ke(!0),Me(Pt,null,hu(n.value,u=>(ke(),Me("div",{class:"card",key:u.uid},[K9,v("div",G9,[v("div",Q9,[v("button",{id:"tagName",disabled:o.disabled},"Crochet",8,Y9)]),v("h3",null,Vt(u.projectName),1),v("h5",null,"Start Date:"+Vt(u.startDate),1),X9,v("p",null,"Deadline: "+Vt(u.endDate)+" Days Left: 40",1),J9,v("div",Z9,[le(l,{id:"projectDetailsButton",to:{name:"Overview",params:{uid:u.uid}}},{default:Be(()=>[pt(" See Project ")]),_:2},1032,["to"])])])]))),128)),e6])])])}}},n6=es(t6,[["__scopeId","data-v-7e106d45"]]),Mp="/assets/jo-szczepanska-unsplash-XwemOGqJ.jpg",s6={class:"about"},i6=Yo('<div class="container-fluid mt-3"><div class="row"><div id="gutter" class="col-sm-2 p-3"></div><div id="profileLayout" class="col-sm-8 p-3"><p class="h1 text-center pb-4">Profile</p><form class="row"><div class="col-md-4"><img id="imgIconProfile" src="'+Mp+'" alt="avatar" class="img-fluid"><button type="button" class="col-12 mt-3 btn btn-secondary btn-sm">Change Profile Image</button><div class="row"></div></div><div class="col-md-8"><div class="row"><div class="col-6"><label for="firstName" class="form-label">First Name</label><input type="text" class="form-control" id="firstName" readonly></div><div class="col-6"><label for="lastName" class="form-label">Last Name</label><input type="text" class="form-control" id="lastName" readonly></div><div class="col-12"><label for="email" class="form-label">Email</label><input type="text" class="form-control" id="email" readonly></div><div class="row"><div class="col-12 mt-2"><label class="form-label">Your Statistics</label><ul class="list-unstyled"><li>Total Ongoing Project:</li><li>Total Completed Projects:</li><li>Overal Total: </li></ul></div></div></div></div></form></div><div id="gutter" class="col-sm-2 p-3"></div></div></div>',1),r6=[i6],o6={__name:"Profile",setup(t){return(e,n)=>(ke(),Me("div",s6,r6))}},a6={class:"completed"},l6=Yo('<div class="container-fluid"><div class="row"><div class="col-12"><header><h1>Completed Projects</h1></header><div class="dashInfo"><div class="dashItems"><label>All </label><button class="btn btn-secondary">Filter</button><button class="btn btn-secondary">Sort</button></div></div></div></div><div class="card text-dark bg-light mb-3"><div class="row g-0"><div class="col-xs-4 col-md-3"><img id="imgIcon" src="'+Mp+'" class="img-fluid rounded-start" alt="..."></div><div class="col-xs-8 col-md-9"><div class="card-body"><h5 class="card-title">Project Name</h5><p class="card-text">This is where the lesson learned will go</p><p class="card-text"><small class="text-muted">Completed Date: April 2, 2024</small></p></div></div></div></div><div class="card text-dark bg-light mb-3"><div class="row g-0"><div class="col-xs-4 col-md-3"><img id="imgIcon" src="'+Mp+'" class="img-fluid rounded-start" alt="..."></div><div class="col-xs-8 col-md-9"><div class="card-body"><h5 class="card-title">Project Name</h5><p class="card-text">This is where the lesson learned will go</p><p class="card-text"><small class="text-muted">Completed Date: April 2, 2024</small></p></div></div></div></div></div>',1),c6=[l6],u6={__name:"CompletedProject",setup(t){return an(),(e,n)=>(ke(),Me("div",a6,c6))}},TS="/assets/HobbyProLogo_only_logo-CbO1owNc.png",h6={data(){return{dropdownOpen:{1:!1,2:!1},auth:an(),router:ci(),displayName:"Welcome, "+an().currentUser.displayName.toString()}},methods:{toggleDropdown(t){for(let e in this.dropdownOpen)e!=t&&(this.dropdownOpen[e]=!1);this.dropdownOpen[t]=!this.dropdownOpen[t]},log_out(t){t.preventDefault(),Hb(this.auth).then(()=>{this.router.replace("/login")}).catch(e=>{console.log("something went wrong")})}}},ts=t=>(jr("data-v-baa6c20c"),t=t(),Br(),t),d6={class:"container-fluid"},f6={class:"row align-items-start"},p6=ts(()=>v("div",{class:"logoColumn col-1"},[v("picture",null,[v("img",{src:TS,alt:"Hobby Pro Logo"})])],-1)),m6={class:"titleColumn col-1"},g6={class:"title text-left"},_6=ts(()=>v("div",{class:"searchBarColumnFull col-3"},[v("div",{class:"searchBarFull"},[v("input",{type:"text",placeholder:"Search..."})])],-1)),y6={class:"displayNameFull col-3 ms-auto mt-2 text-align-right"},v6={class:"displayNameFull"},w6={class:"text-end"},E6=ts(()=>v("div",{class:"displayNameColumnSmall col-5 ms-auto text-align-right"},[v("div",{class:"displayNameSmall"})],-1)),T6=ts(()=>v("div",{class:"profileIcon"},null,-1)),b6=ts(()=>v("div",{class:"searchBarColumnShrink col-11"},[v("div",{class:"searchBarShrink"},[v("input",{type:"text",placeholder:"Search..."})])],-1)),I6=ts(()=>v("button",{class:"hamburger"},"☰",-1)),A6=ts(()=>v("div",null,"Main Dashboard",-1)),C6=ts(()=>v("div",null,"Library",-1)),S6=ts(()=>v("div",null,"Completed Project",-1)),R6={class:"container-fluid text-align-center"},P6={class:"row margin-60"},k6={class:"NavList col-12"},N6={class:""},O6=ts(()=>v("div",null,[v("i",{class:"bi bi-grid"}),pt(" Main Dashboard")],-1)),D6=ts(()=>v("div",null,[v("i",{class:"bi bi-book"}),pt(" Library")],-1)),x6=ts(()=>v("div",null,[v("i",{class:"bi bi-folder-check"}),pt(" Completed Project")],-1));function L6(t,e,n,s,i,r){const o=Bi("router-link");return ke(),Me(Pt,null,[v("header",null,[v("div",d6,[v("div",f6,[p6,v("div",m6,[v("h3",g6,[le(o,{to:"/dashboard/main"},{default:Be(()=>[pt("Hobby Pro")]),_:1})])]),_6,v("div",y6,[v("div",v6,[v("p",w6,Vt(i.displayName),1)])]),E6,v("div",{class:"profileColumn col-1",onMouseover:e[3]||(e[3]=a=>i.dropdownOpen[2]=!0),onMouseleave:e[4]||(e[4]=a=>i.dropdownOpen[2]=!1)},[T6,i.dropdownOpen[2]?(ke(),Me("div",{key:0,class:"dropDownProfileMenu",onMouseover:e[1]||(e[1]=a=>i.dropdownOpen[2]=!0),onMouseleave:e[2]||(e[2]=a=>i.dropdownOpen[2]=!1)},[v("ul",null,[v("li",null,[le(o,{to:"/dashboard/profile"},{default:Be(()=>[pt("Profile")]),_:1})]),v("li",null,[v("button",{onClick:e[0]||(e[0]=(...a)=>r.log_out&&r.log_out(...a)),class:"btn btnPrimary"},"Sign Out")])])],32)):hr("",!0)],32),b6,v("div",{class:"hamburgerColumn col-1",onMouseover:e[7]||(e[7]=a=>i.dropdownOpen[1]=!0),onMouseleave:e[8]||(e[8]=a=>i.dropdownOpen[1]=!1)},[I6,i.dropdownOpen[1]?(ke(),Me("div",{key:0,class:"dropDownRouterMenu",onMouseover:e[5]||(e[5]=a=>i.dropdownOpen[1]=!0),onMouseleave:e[6]||(e[6]=a=>i.dropdownOpen[1]=!1)},[v("ul",null,[v("li",null,[le(o,{to:"/dashboard/main"},{default:Be(()=>[A6]),_:1})]),v("li",null,[le(o,{to:"/dashboard/library"},{default:Be(()=>[C6]),_:1})]),v("li",null,[le(o,{to:"/dashboard/completed_projects"},{default:Be(()=>[S6]),_:1})]),v("li",null,[le(o,{to:"/dashboard/create_project"},{default:Be(()=>[pt("Create Project")]),_:1})])])],32)):hr("",!0)],32)])])]),v("nav",null,[v("div",R6,[v("div",P6,[v("div",k6,[v("ul",N6,[v("li",null,[le(o,{to:"/dashboard/main"},{default:Be(()=>[O6]),_:1})]),v("li",null,[le(o,{to:"/dashboard/library"},{default:Be(()=>[D6]),_:1})]),v("li",null,[le(o,{to:"/dashboard/completed_projects"},{default:Be(()=>[x6]),_:1})])]),le(o,{class:"cpButton",to:"/dashboard/create_project"},{default:Be(()=>[pt("Create a Project")]),_:1})])])])])],64)}const M6=es(h6,[["render",L6],["__scopeId","data-v-baa6c20c"]]),V6={class:"content"},F6={__name:"DashBoardView",setup(t){return(e,n)=>{const s=Bi("router-view");return ke(),Me("div",null,[le(M6),v("div",V6,[le(s)])])}}},U6=es(F6,[["__scopeId","data-v-e8b17f74"]]),Ws=t=>(jr("data-v-455c44ba"),t=t(),Br(),t),$6={class:"CP_formatting"},j6={class:"container-fluid mt-3"},B6={class:"row"},H6=Ws(()=>v("div",{class:"col-sm-2 p-3"},null,-1)),W6={id:"createLayout",class:"col-sm-8 p-3"},q6=Ws(()=>v("p",{class:"h1 text-center"},"Create a New Project",-1)),z6={class:"row g-3"},K6={class:"col-12"},G6=Ws(()=>v("label",{for:"projectName",class:"form-label"},"Project Name",-1)),Q6={class:"col-md-6"},Y6=Ws(()=>v("label",{for:"startDate",class:"form-label"},"Start Date",-1)),X6={class:"col-md-6"},J6=Ws(()=>v("label",{for:"setDeadline",class:"form-label"},"Deadline",-1)),Z6={class:"input-group mb-3"},eH=["min"],tH={class:"col-12"},nH=Ws(()=>v("label",{for:"tagName",class:"form-label"},"Tag Name",-1)),sH={class:"input-group mb-3"},iH=Ws(()=>v("span",null,null,-1)),rH=Yo('<button class="btn btn-secondary" type="addTagBtn" id="addTagBtn" data-v-455c44ba>Add</button><datalist id="datalistOptions" data-v-455c44ba><option value="Quilting" data-v-455c44ba></option><option value="Sewing" data-v-455c44ba></option><option value="Crochet" data-v-455c44ba></option></datalist>',2),oH={class:"col-12"},aH=Ws(()=>v("label",{for:"details",class:"form-label"},"Comments",-1)),lH=Ws(()=>v("div",{class:"col-12"},[v("input",{type:"file",class:"form-control",name:"fileName",id:"fileName",accept:".png, .jpeg, jpg, .gif, .pdf"})],-1)),cH=Ws(()=>v("div",{class:"col-sm-2 p-3"},null,-1)),uH={__name:"CreateProject",setup(t){const e=an();let n=ze(""),s=ze(""),i=ze(""),r=ze("");const o=ca();let a=e.currentUser.email+"_Projects";const l=ci(),u=zn(()=>s.value);function h(m){m>i&&ja(m,_=>{i.value<_&&(i.value=_)})}async function f(m){m.preventDefault();try{const _=Dp(o,a),b=await ME(_,{projectName:n.value,startDate:s.value,deadline:i.value,description:r.value,isFavorite:!1}),C=Dp(b,"Stages");await ME(C,{stageName:"Initial Stage",isDone:!1}),console.log("Document written with ID: ",b.id),console.log("Project uploaded:",n.value),l.push("/")}catch(_){console.error("Error adding document: ",_),location.reload()}}return(m,_)=>(ke(),Me("div",$6,[v("div",j6,[v("div",B6,[H6,v("div",W6,[q6,v("form",z6,[v("div",K6,[G6,gn(v("input",{"onUpdate:modelValue":_[0]||(_[0]=b=>ut(n)?n.value=b:n=b),type:"text",class:"form-control",id:"projectName",required:""},null,512),[[En,ht(n)]])]),v("div",Q6,[Y6,gn(v("input",{"onUpdate:modelValue":_[1]||(_[1]=b=>ut(s)?s.value=b:s=b),type:"date",class:"form-control",id:"startDate",required:""},null,512),[[En,ht(s)]])]),v("div",X6,[J6,v("div",Z6,[gn(v("input",{"onUpdate:modelValue":_[2]||(_[2]=b=>ut(i)?i.value=b:i=b),type:"date",class:"form-control",id:"setDeadline",min:u.value,onClick:h},null,8,eH),[[En,ht(i)]])])]),v("div",tH,[nH,v("div",sH,[iH,gn(v("input",{"onUpdate:modelValue":_[3]||(_[3]=b=>m.tagname=b),type:"text",class:"form-control",id:"tagName",list:"datalistOptions",placeholder:"example: Sewing"},null,512),[[En,m.tagname]]),rH])]),v("div",oH,[aH,gn(v("textarea",{"onUpdate:modelValue":_[4]||(_[4]=b=>ut(r)?r.value=b:r=b),class:"form-control",rows:"5",id:"details",name:"details",placeholder:"Add a description or some helpful notes"},null,512),[[En,ht(r)]])]),lH,v("div",{class:"col-12 text-center"},[v("button",{onClick:f,type:"submit",class:"btn btn-secondary"},"Create Project")])])]),cH])])]))}},hH=es(uH,[["__scopeId","data-v-455c44ba"]]),dH="/assets/folder-icon-Dwk3Vi4C.png",fH=Yo('<h2 class="mt-3">Library</h2><div class="container-fluid"><div class="row"><div class="col-6"><div class="library_formatting"><div class="dropdown"></div></div></div></div></div><hr class="m-0">',3),pH={class:"modal fade",id:"create-folder-modal",tabindex:"-1","aria-labelledby":"create-folder-modal","aria-hidden":"true"},mH={class:"modal-dialog"},gH={class:"modal-content"},_H=v("div",{class:"modal-header"},[v("h1",{class:"modal-title fs-5"},"New Folder"),v("button",{id:"close-button",type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),yH={class:"modal-body"},vH={class:"mb-3"},wH=v("label",{for:"folder-name",class:"col-form-label"},"Name:",-1),EH=["onKeydown"],TH={class:"modal-footer"},bH=v("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),IH={id:"delete-folder-modal",class:"modal",tabindex:"-1"},AH={class:"modal-dialog"},CH={class:"modal-content"},SH=v("div",{class:"modal-header"},[v("h5",{class:"modal-title"},"Confirm Delete"),v("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),RH=v("div",{class:"modal-body"},[v("p",null,"Are You Sure You Want To Delete This Folder?")],-1),PH={class:"modal-footer"},kH=v("button",{id:"delete-close-button",type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),NH={class:"container-fluid mt-5"},OH={class:"row"},DH={class:"col-sm-12 col-md-6 mb-2"},xH={class:"mt-2"},LH=v("button",{type:"button",class:"btn btn-primary ms-3","data-bs-toggle":"modal","data-bs-target":"#create-folder-modal"},"New folder +",-1),MH={class:"container mt-5"},VH={id:"folders",class:"row d-flex"},FH={href:"#",class:"text-decoration-none text-secondary"},UH={class:"btn card-icon border-0"},$H={class:"mb-3"},jH=["onClick"],BH=v("i",{class:"bi bi-trash-fill"},null,-1),HH=[BH],WH=v("img",{class:"drag0-el card-img-top",src:dH,alt:"Image icon",width:"100",height:"100"},null,-1),qH={class:"card-body"},zH={class:"badge-container"},KH={class:"badge text-black text-wrap text-break",style:{width:"6rem"}},GH={__name:"Library",setup(t){const e=ES(),n=an();let s=ze([]),i=ze([]),r=ze([]),o=ze([n.currentUser.uid+"/"]),a=ze("");ze(null);let l=ze(""),u=ze(!1),h=ze(""),f="/folder.ghost";async function m(){if(D(a.value)){I("name cannot be blank"),document.getElementById("close-button").click();return}if(await _(a.value)){I("folder already exists"),document.getElementById("close-button").click();return}O();let W=B()+a.value+f;const me=Pa(e,W);y9(me,null).then(ue=>{document.getElementById("close-button").click(),window.location.reload()}).catch(ue=>{document.getElementById("close-button").click()})}async function _(W){const me=B()+W+f,ue=Pa(e,me);try{const qe=await WE(ue);return!0}catch{return!1}}function b(W){l.value=W}async function C(){const W=B()+l.value+"/",me=Pa(e,W);await HE(me).then(ue=>{ue.items.forEach(qe=>{let bt=W+qe.name,Fn=Pa(e,bt);v9(Fn)})}),document.getElementById("delete-close-button").click(),window.location.reload()}function I(W){u.value=!0,h.value="Error: "+W,a.value=""}function O(){u.value=!1,h.value=""}function D(W){return W.trim().length===0}function B(){return o.value[o.value.length-1]}function J(W){const me=W.target.files[0].name,ue=me.lastIndexOf("."),qe=me.substring(ue+1);return console.log("is an image: "+qe=="png"||qe==="jpeg"||qe==="jpg"),qe==="png"||qe==="jpeg"||qe===".jpg"}function Ae(){const W=Pa(e,n.currentUser.uid);HE(W).then(me=>{me.prefixes.map(ue=>{ue.name.endsWith(".ghost")||s.value.push(ue.name)}),me.items.map(ue=>{ue.name.endsWith(".ghost")||i.value.push(ue.name),WE(ue).then(qe=>{r.value.push(qe)})})})}return Nl(()=>{Ae()}),(W,me)=>(ke(),Me(Pt,null,[fH,v("div",pH,[v("div",mH,[v("div",gH,[_H,v("div",yH,[v("form",null,[v("div",vH,[wH,gn(v("input",{onKeydown:V1(Na(m,["prevent"]),["enter"]),"onUpdate:modelValue":me[0]||(me[0]=ue=>ut(a)?a.value=ue:a=ue),type:"text",class:"form-control",id:"folder-name"},null,40,EH),[[En,ht(a)]])])])]),v("div",TH,[bH,v("button",{onClick:Na(m,["prevent"]),type:"button","data-bs-dismiss":"modal",class:"btn btn-primary"},"Save")])])])]),v("div",IH,[v("div",AH,[v("div",CH,[SH,RH,v("div",PH,[kH,v("button",{onClick:Na(C,["prevent"]),type:"button",class:"btn btn-danger"},"Delete")])])])]),v("div",NH,[v("div",OH,[v("div",DH,[v("input",{class:"form-control",type:"file",accept:"image/jpeg,image/png,application/pdf",id:"item-file-input",onChange:J},null,32)]),v("div",xH,[v("button",{onClick:me[1]||(me[1]=Na((...ue)=>W.uploadFile&&W.uploadFile(...ue),["prevent"])),type:"button",class:"btn btn-primary"},"Upload"),LH])])]),gn(v("h2",{class:"text-center text-danger"},Vt(ht(h)),513),[[_1,ht(u)]]),v("div",MH,[v("div",VH,[(ke(!0),Me(Pt,null,hu(ht(s),(ue,qe)=>(ke(),Me("div",{class:"image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5",key:qe},[v("a",FH,[v("div",UH,[v("div",$H,[v("button",{id:"trash-btn",type:"button",class:"btn trash-can border-0 position-absolute ms-3",onClick:bt=>b(ue),"data-bs-toggle":"modal","data-bs-target":"#delete-folder-modal"},HH,8,jH)]),WH,v("div",qH,[v("div",zH,[v("div",KH,Vt(ue),1)])])])])]))),128))])])],64))}},td=t=>(jr("data-v-554143c4"),t=t(),Br(),t),QH=td(()=>v("h1",{class:"mt-5 text-center"},"Hobby Pro",-1)),YH={class:"justify-content-around d-flex mt-5"},XH={class:"border border-lg p-5"},JH=td(()=>v("h4",{class:"text-center"},"Forgot Password",-1)),ZH={class:"text-center text-danger"},eW={class:"mb-3"},tW=td(()=>v("label",{for:"email",class:"form-label"},"Email address",-1)),nW=td(()=>v("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1)),sW={class:"text-center"},iW={__name:"ForgotPasswordView",setup(t){let e=ze(""),n=ze("");const s=ci();function i(){const r=an();Ax(r,n.value).then(()=>{console.log("email: "+n.value),s.replace("/password-reset-success")}).catch(o=>{console.log(o.code),e.value=o.code})}return(r,o)=>(ke(),Me(Pt,null,[QH,v("div",YH,[v("form",XH,[JH,v("div",ZH,Vt(ht(e)),1),v("div",eW,[tW,gn(v("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>ut(n)?n.value=a:n=a),type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp"},null,512),[[En,ht(n)]]),nW]),v("div",sW,[v("button",{onClick:Na(i,["prevent"]),class:"btn btn-primary"},"Submit")])])])],64))}},rW=es(iW,[["__scopeId","data-v-554143c4"]]),Ki=t=>(jr("data-v-b8569284"),t=t(),Br(),t),oW=Ki(()=>v("h1",{class:"mt-5 text-center"},"Hobby Pro",-1)),aW={class:"justify-content-around d-flex mt-5"},lW={class:"border border-lg p-5"},cW={class:"text-danger text-center"},uW=Ki(()=>v("h4",{class:"text-center"},"Register",-1)),hW={class:"d-flex"},dW={class:"mb-3 me-2"},fW=Ki(()=>v("label",{for:"firstname",class:"form-label"},"First Name",-1)),pW={class:"mb-3"},mW=Ki(()=>v("label",{for:"lastname",class:"form-label"},"Last Name",-1)),gW={class:"mb-3"},_W=Ki(()=>v("label",{for:"email",class:"form-label"},"Email address",-1)),yW=Ki(()=>v("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1)),vW={class:"mb-3"},wW=Ki(()=>v("label",{for:"password",class:"form-label"},"Password",-1)),EW={class:"mb-3"},TW=Ki(()=>v("label",{for:"confirm-password",class:"form-label"},"Confirm Password",-1)),bW={class:"text-center mb-5"},IW={__name:"RegisterView",setup(t){let e=ze(""),n=ze(""),s=ze(""),i=ze(""),r=ze("");const o=ca(),a=an(),l=ci(),u=ze("");function h(C){C.preventDefault(),u.value="",b(e.value)&&b(n.value)&&_(i.value,r.value)?Cx(a,s.value,i.value).then(I=>{m();const O=an();Px(O.currentUser,{displayName:e.value+" "+n.value}).then(()=>{}).catch(D=>{}),l.replace("/login")}).catch(I=>{u.value=f(I.code),i.value="",r.value=""}):setTimeout(function(){b(e.value)?b(n.value)?i.value!==r.value?u.value="passwords do not match":_(i.value,r.value)||(u.value="password must not be blank and must be 8-20 characters long"):u.value="last name cannot be blank and must be an alphabetic character":u.value="first name cannot be blank and must be an alphabetic character",i.value="",r.value=""},250)}function f(C){return C.substring(C.indexOf("/")+1,C.length)}function m(){nB(Jh(o,"users",s.value),{firstname:e.value,lastname:n.value,email:s.value,password:i.value})}function _(C,I){return/^\S{8,25}/.test(C)&&C===I}function b(C){return/[a-zA-Z]+/.test(C)}return(C,I)=>{const O=Bi("router-link");return ke(),Me(Pt,null,[oW,v("div",aW,[v("form",lW,[v("p",cW,Vt(u.value),1),uW,v("div",hW,[v("div",dW,[fW,gn(v("input",{"onUpdate:modelValue":I[0]||(I[0]=D=>ut(e)?e.value=D:e=D),type:"text",class:"form-control",id:"firstname"},null,512),[[En,ht(e)]])]),v("div",pW,[mW,gn(v("input",{"onUpdate:modelValue":I[1]||(I[1]=D=>ut(n)?n.value=D:n=D),type:"text",class:"form-control",id:"lastname"},null,512),[[En,ht(n)]])])]),v("div",gW,[_W,gn(v("input",{"onUpdate:modelValue":I[2]||(I[2]=D=>ut(s)?s.value=D:s=D),type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp"},null,512),[[En,ht(s)]]),yW]),v("div",vW,[wW,gn(v("input",{"onUpdate:modelValue":I[3]||(I[3]=D=>ut(i)?i.value=D:i=D),type:"password",class:"form-control",id:"password"},null,512),[[En,ht(i)]])]),v("div",EW,[TW,gn(v("input",{"onUpdate:modelValue":I[4]||(I[4]=D=>ut(r)?r.value=D:r=D),type:"password",class:"form-control",id:"confirm-password"},null,512),[[En,ht(r)]])]),v("div",bW,[le(O,{to:"login",class:"text-decoration-none"},{default:Be(()=>[pt("Log In")]),_:1})]),v("div",{class:"text-center"},[v("button",{onClick:h,class:"btn btn-primary"},"Register")])])])],64)}}},AW=es(IW,[["__scopeId","data-v-b8569284"]]),CW={};function SW(t,e){return ke(),Me("h1",null,"Success, please check your email for link to reset your password")}const RW=es(CW,[["render",SW]]),PW={props:{uid:String,id:String,stageName:String},data(){return{stages:[{stageName:"stage_one",stageID:"2n1hb1h"},{stageName:"stage_two",stageID:"9cn93uv"},{stageName:"stage_three",stageID:"nnm956b9"}]}}},kW={class:"contentInternalWrapper"};function NW(t,e,n,s,i,r){return ke(),Me("div",kW,[v("h1",null,Vt(n.stageName),1),v("p",null,Vt(n.id),1)])}const OW=es(PW,[["render",NW]]),DW={class:"contentInternalWrapper"},xW={props:{uid:String},data(){return{stages:[{stageName:"stage_one",stageID:"2n1hb1h"},{stageName:"stage_two",stageID:"9cn93uv"},{stageName:"stage_three",stageID:"nnm956b9"}]}}},LW=Object.assign(xW,{__name:"Overview",props:{uid:String},setup(t){const e=t,n=an();ci();const s=ca(),i=n.currentUser.email+"_Projects",r=e.uid;let o=ze("");async function a(){try{const l=await iS(Jh(s,i,r));if(l.exists()){const u=l.data();return console.log("Document data:",u),u}else return console.log("No such document!"),null}catch(l){return console.error("Error fetching document:",l),null}}return Nl(async()=>{o.value=await a()}),(l,u)=>(ke(),Me("div",DW,[v("h1",null,Vt(ht(o).projectName),1),v("p",null,"Start-Date:"+Vt(ht(o).startDate),1),v("p",null,"Dead-Line:"+Vt(ht(o).deadline),1)]))}}),MW={data(){return{dropdownOpen:{1:!1,2:!1,3:!1,4:!1,5:!1},auth:an(),router:ci(),displayName:"Welcome, "+an().currentUser.displayName.toString(),stages:[{stageName:"stage_one",stageID:"2n1hb1h"},{stageName:"stage_two",stageID:"9cn93uv"},{stageName:"stage_three",stageID:"nnm956b9"}]}},methods:{toggleDropdown(t){for(let e in this.dropdownOpen)e!=t&&(this.dropdownOpen[e]=!1);this.dropdownOpen[t]=!this.dropdownOpen[t]},ToggleNavigation(){},log_out(t){t.preventDefault(),Hb(this.auth).then(()=>{this.router.replace("/login")}).catch(e=>{console.log("something went wrong")})}}},Vn=t=>(jr("data-v-cfd8126a"),t=t(),Br(),t),VW={class:"container-fluid"},FW={class:"row align-items-start"},UW=Vn(()=>v("div",{class:"logoColumn col-1"},[v("picture",null,[v("img",{src:TS,alt:"Hobby Pro Logo"})])],-1)),$W={class:"titleColumn col-1"},jW={class:"title text-left"},BW=Vn(()=>v("div",{class:"searchBarColumnFull col-3"},[v("div",{class:"searchBarFull"},[v("input",{type:"text",placeholder:"Search..."})])],-1)),HW={class:"displayNameFull col-3 ms-auto text-align-right"},WW={class:"displayNameFull"},qW={class:"text-end"},zW=Vn(()=>v("div",{class:"displayNameColumnSmall col-5 ms-auto text-align-right"},[v("div",{class:"displayNameSmall"})],-1)),KW=Vn(()=>v("div",{class:"profileIcon"},null,-1)),GW=Vn(()=>v("div",{class:"searchBarColumnShrink col-11"},[v("div",{class:"searchBarShrink"},[v("input",{type:"text",placeholder:"Search..."})])],-1)),QW=Vn(()=>v("button",{class:"hamburger"},"☰",-1)),YW=Vn(()=>v("div",null,"Main Dashboard",-1)),XW=Vn(()=>v("div",null,"Profile",-1)),JW=Vn(()=>v("div",null,"Completed Project",-1)),ZW=Vn(()=>v("div",null,"Library",-1)),eq=Vn(()=>v("li",null,"------------------",-1)),tq=["uid"],nq={key:0,class:"mainDropdownMenu"},sq={id:"mainList"},iq={class:"navButtons row"},rq={key:0,class:"OverviewDropdownMenu"},oq=Vn(()=>v("ul",{id:"overviewList"},[v("li",null,"Add Image")],-1)),aq=[oq],lq={class:"navButtons row"},cq=["onClick"],uq={key:0,class:"StageDropDownMenu"},hq=Vn(()=>v("ul",{id:"stageList"},[v("li",null,"Add Stage"),v("li",null,"Rename Stage"),v("li",null,"Delete Stage")],-1)),dq=[hq];function fq(t,e,n,s,i,r){const o=Bi("router-link");return ke(),Me(Pt,null,[v("header",null,[v("div",VW,[v("div",FW,[UW,v("div",$W,[v("h3",jW,[le(o,{to:"/dashboard/main"},{default:Be(()=>[pt("Hobby Pro")]),_:1})])]),BW,v("div",HW,[v("div",WW,[v("p",qW,Vt(i.displayName),1)])]),zW,v("div",{class:"profileColumn col-1",onMouseover:e[3]||(e[3]=a=>i.dropdownOpen[2]=!0),onMouseleave:e[4]||(e[4]=a=>i.dropdownOpen[2]=!1)},[KW,i.dropdownOpen[2]?(ke(),Me("div",{key:0,class:"dropDownProfileMenu",onMouseover:e[1]||(e[1]=a=>i.dropdownOpen[2]=!0),onMouseleave:e[2]||(e[2]=a=>i.dropdownOpen[2]=!1)},[v("ul",null,[v("li",null,[le(o,{to:"/dashboard/profile"},{default:Be(()=>[pt("Profile")]),_:1})]),v("li",null,[v("button",{onClick:e[0]||(e[0]=(...a)=>r.log_out&&r.log_out(...a)),class:"btn btnPrimary"},"Sign Out")])])],32)):hr("",!0)],32),GW,v("div",{class:"hamburgerColumn col-1",onMouseover:e[7]||(e[7]=a=>i.dropdownOpen[1]=!0),onMouseleave:e[8]||(e[8]=a=>i.dropdownOpen[1]=!1)},[QW,i.dropdownOpen[1]?(ke(),Me("div",{key:0,class:"dropDownRouterMenu",onMouseover:e[5]||(e[5]=a=>i.dropdownOpen[1]=!0),onMouseleave:e[6]||(e[6]=a=>i.dropdownOpen[1]=!1)},[v("ul",null,[v("li",null,[le(o,{to:"/dashboard/main"},{default:Be(()=>[YW]),_:1})]),v("li",null,[le(o,{to:"/dashboard/profile"},{default:Be(()=>[XW]),_:1})]),v("li",null,[le(o,{to:"/dashboard/completed_projects"},{default:Be(()=>[JW]),_:1})]),v("li",null,[le(o,{to:"/dashboard/library"},{default:Be(()=>[ZW]),_:1})]),v("li",null,[le(o,{to:"/dashboard/create_project"},{default:Be(()=>[pt("Create Project")]),_:1})]),eq,v("li",null,[le(o,{to:{name:"Overview",params:{uid:t.uid}}},{default:Be(()=>[pt("Overview")]),_:1},8,["to"])]),(ke(!0),Me(Pt,null,hu(i.stages,a=>(ke(),Me("li",{uid:i.stages.stageID},[le(o,{to:{name:"StageDetails",params:{id:a.stageID,stageName:a.stageName}}},{default:Be(()=>[pt(Vt(a.stageName),1)]),_:2},1032,["to"])],8,tq))),256))])],32)):hr("",!0)],32)])])]),v("nav",null,[v("div",{class:"mainDropdownButton",onClick:e[9]||(e[9]=a=>r.toggleDropdown(3))},"Main"),i.dropdownOpen[3]?(ke(),Me("div",nq,[v("ul",sq,[v("li",null,[le(o,{to:"/dashboard/main"},{default:Be(()=>[pt("Main Dashboard")]),_:1})]),v("li",null,[le(o,{to:"/dashboard/profile"},{default:Be(()=>[pt("Profile")]),_:1})]),v("li",null,[le(o,{to:"/dashboard/completed_projects"},{default:Be(()=>[pt("Completed Project")]),_:1})]),v("li",null,[le(o,{to:"/dashboard/library"},{default:Be(()=>[pt("Library")]),_:1})])])])):hr("",!0),v("ul",null,[v("li",iq,[le(o,{class:"navItem col-8",to:{name:"Overview",params:{uid:t.uid}}},{default:Be(()=>[pt("Overview")]),_:1},8,["to"]),v("div",{class:"OverviewDropdownButton col-4",onClick:e[10]||(e[10]=a=>r.toggleDropdown(4))},"V")]),i.dropdownOpen[4]?(ke(),Me("div",rq,aq)):hr("",!0),(ke(!0),Me(Pt,null,hu(i.stages,a=>(ke(),Me("div",{key:a.stageID},[v("li",lq,[le(o,{class:"navItem col-8",to:{name:"StageDetails",params:{id:a.stageID,stageName:a.stageName,uid:t.uid}}},{default:Be(()=>[pt(Vt(a.stageName),1)]),_:2},1032,["to"]),v("div",{class:"StageDropdownButton col-4",onClick:l=>r.toggleDropdown(a.stageID)}," V ",8,cq)]),i.dropdownOpen[a.stageID]?(ke(),Me("div",uq,dq)):hr("",!0)]))),128))]),le(o,{class:"SettingsButton",to:{name:"EditOverview",params:{uid:t.uid}}},{default:Be(()=>[pt("Edit Overview")]),_:1},8,["to"])])],64)}const pq=es(MW,[["render",fq],["__scopeId","data-v-cfd8126a"]]),mq={class:"content"},gq={__name:"ProjectDashboardView",setup(t){return(e,n)=>{const s=Bi("router-view");return ke(),Me("div",null,[le(pq),v("div",mq,[le(s)])])}}},_q=es(gq,[["__scopeId","data-v-d80affdf"]]),yq={class:"contentInternalWrapper"},vq=v("h1",null,"the edit overview Page",-1),wq={props:{uid:String},data(){return{stages:[{stageName:"stage_one",stageID:"2n1hb1h"},{stageName:"stage_two",stageID:"9cn93uv"},{stageName:"stage_three",stageID:"nnm956b9"}]}}},Eq=Object.assign(wq,{__name:"EditOverview",props:{uid:String},setup(t){const e=t,n=an();ci();const s=ca(),i=n.currentUser.email+"_Projects",r=e.uid;let o=ze("");async function a(){try{const l=await iS(Jh(s,i,r));if(l.exists()){const u=l.data();return console.log("Document data:",u),u}else return console.log("No such document!"),null}catch(l){return console.error("Error fetching document:",l),null}}return Nl(async()=>{o.value=await a()}),(l,u)=>(ke(),Me("div",yq,[vq,v("p",null,Vt(t.uid),1)]))}}),Tq=an(),bS=KN({history:cN(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"login",component:j9},{path:"/forgot-password",name:"forgot-password",component:rW},{path:"/register",name:"register",component:AW},{path:"/password-reset-success",name:"password-reset-success",component:RW},{path:"/dashboard",component:U6,redirect:"/dashboard/main",children:[{path:"main",component:n6},{path:"profile",component:o6},{path:"completed_projects",component:u6},{path:"create_project",component:hH},{path:"library",component:GH}]},{path:"/projectDashboard",component:_q,redirect:"/projectDashboard/overview/:uid",children:[{path:"stage/:id/:stageName/:uid",name:"StageDetails",component:OW,props:!0},{path:"overview/:uid",name:"Overview",component:LW,props:!0},{path:"editOverview/:uid",name:"EditOverview",component:Eq,props:!0}]}]});bS.beforeEach((t,e,n)=>{Ox(Tq,s=>{s||t.name==="forgot-password"||t.name==="register"||t.name==="password-reset-success"?n():t.name!=="login"?n({path:"/login"}):n()})});const bq={};function Iq(t,e){const n=Bi("router-view");return ke(),$T(n)}const Aq=es(bq,[["render",Iq]]);var Cq=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Sq={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,s){t.exports=s()})(Cq,function(){const n=new Map,s={set(p,c,d){n.has(p)||n.set(p,new Map);const g=n.get(p);g.has(c)||g.size===0?g.set(c,d):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`)},get:(p,c)=>n.has(p)&&n.get(p).get(c)||null,remove(p,c){if(!n.has(p))return;const d=n.get(p);d.delete(c),d.size===0&&n.delete(p)}},i="transitionend",r=p=>(p&&window.CSS&&window.CSS.escape&&(p=p.replace(/#([^\s"#']+)/g,(c,d)=>`#${CSS.escape(d)}`)),p),o=p=>{p.dispatchEvent(new Event(i))},a=p=>!(!p||typeof p!="object")&&(p.jquery!==void 0&&(p=p[0]),p.nodeType!==void 0),l=p=>a(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(r(p)):null,u=p=>{if(!a(p)||p.getClientRects().length===0)return!1;const c=getComputedStyle(p).getPropertyValue("visibility")==="visible",d=p.closest("details:not([open])");if(!d)return c;if(d!==p){const g=p.closest("summary");if(g&&g.parentNode!==d||g===null)return!1}return c},h=p=>!p||p.nodeType!==Node.ELEMENT_NODE||!!p.classList.contains("disabled")||(p.disabled!==void 0?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false"),f=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const c=p.getRootNode();return c instanceof ShadowRoot?c:null}return p instanceof ShadowRoot?p:p.parentNode?f(p.parentNode):null},m=()=>{},_=p=>{p.offsetHeight},b=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,C=[],I=()=>document.documentElement.dir==="rtl",O=p=>{var c;c=()=>{const d=b();if(d){const g=p.NAME,E=d.fn[g];d.fn[g]=p.jQueryInterface,d.fn[g].Constructor=p,d.fn[g].noConflict=()=>(d.fn[g]=E,p.jQueryInterface)}},document.readyState==="loading"?(C.length||document.addEventListener("DOMContentLoaded",()=>{for(const d of C)d()}),C.push(c)):c()},D=(p,c=[],d=p)=>typeof p=="function"?p(...c):d,B=(p,c,d=!0)=>{if(!d)return void D(p);const g=(S=>{if(!S)return 0;let{transitionDuration:L,transitionDelay:j}=window.getComputedStyle(S);const Z=Number.parseFloat(L),ee=Number.parseFloat(j);return Z||ee?(L=L.split(",")[0],j=j.split(",")[0],1e3*(Number.parseFloat(L)+Number.parseFloat(j))):0})(c)+5;let E=!1;const T=({target:S})=>{S===c&&(E=!0,c.removeEventListener(i,T),D(p))};c.addEventListener(i,T),setTimeout(()=>{E||o(c)},g)},J=(p,c,d,g)=>{const E=p.length;let T=p.indexOf(c);return T===-1?!d&&g?p[E-1]:p[0]:(T+=d?1:-1,g&&(T=(T+E)%E),p[Math.max(0,Math.min(T,E-1))])},Ae=/[^.]*(?=\..*)\.|.*/,W=/\..*/,me=/::\d+$/,ue={};let qe=1;const bt={mouseenter:"mouseover",mouseleave:"mouseout"},Fn=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ps(p,c){return c&&`${c}::${qe++}`||p.uidEvent||qe++}function An(p){const c=ps(p);return p.uidEvent=c,ue[c]=ue[c]||{},ue[c]}function fi(p,c,d=null){return Object.values(p).find(g=>g.callable===c&&g.delegationSelector===d)}function qs(p,c,d){const g=typeof c=="string",E=g?d:c||d;let T=Un(p);return Fn.has(T)||(T=p),[g,E,T]}function It(p,c,d,g,E){if(typeof c!="string"||!p)return;let[T,S,L]=qs(c,d,g);c in bt&&(S=(ge=>function(he){if(!he.relatedTarget||he.relatedTarget!==he.delegateTarget&&!he.delegateTarget.contains(he.relatedTarget))return ge.call(this,he)})(S));const j=An(p),Z=j[L]||(j[L]={}),ee=fi(Z,S,T?d:null);if(ee)return void(ee.oneOff=ee.oneOff&&E);const Y=ps(S,c.replace(Ae,"")),Te=T?function(ae,ge,he){return function _e(Ze){const it=ae.querySelectorAll(ge);for(let{target:Ie}=Ze;Ie&&Ie!==this;Ie=Ie.parentNode)for(const je of it)if(je===Ie)return vn(Ze,{delegateTarget:Ie}),_e.oneOff&&x.off(ae,Ze.type,ge,he),he.apply(Ie,[Ze])}}(p,d,S):function(ae,ge){return function he(_e){return vn(_e,{delegateTarget:ae}),he.oneOff&&x.off(ae,_e.type,ge),ge.apply(ae,[_e])}}(p,S);Te.delegationSelector=T?d:null,Te.callable=S,Te.oneOff=E,Te.uidEvent=Y,Z[Y]=Te,p.addEventListener(L,Te,T)}function Ve(p,c,d,g,E){const T=fi(c[d],g,E);T&&(p.removeEventListener(d,T,!!E),delete c[d][T.uidEvent])}function Fe(p,c,d,g){const E=c[d]||{};for(const[T,S]of Object.entries(E))T.includes(g)&&Ve(p,c,d,S.callable,S.delegationSelector)}function Un(p){return p=p.replace(W,""),bt[p]||p}const x={on(p,c,d,g){It(p,c,d,g,!1)},one(p,c,d,g){It(p,c,d,g,!0)},off(p,c,d,g){if(typeof c!="string"||!p)return;const[E,T,S]=qs(c,d,g),L=S!==c,j=An(p),Z=j[S]||{},ee=c.startsWith(".");if(T===void 0){if(ee)for(const Y of Object.keys(j))Fe(p,j,Y,c.slice(1));for(const[Y,Te]of Object.entries(Z)){const ae=Y.replace(me,"");L&&!c.includes(ae)||Ve(p,j,S,Te.callable,Te.delegationSelector)}}else{if(!Object.keys(Z).length)return;Ve(p,j,S,T,E?d:null)}},trigger(p,c,d){if(typeof c!="string"||!p)return null;const g=b();let E=null,T=!0,S=!0,L=!1;c!==Un(c)&&g&&(E=g.Event(c,d),g(p).trigger(E),T=!E.isPropagationStopped(),S=!E.isImmediatePropagationStopped(),L=E.isDefaultPrevented());const j=vn(new Event(c,{bubbles:T,cancelable:!0}),d);return L&&j.preventDefault(),S&&p.dispatchEvent(j),j.defaultPrevented&&E&&E.preventDefault(),j}};function vn(p,c={}){for(const[d,g]of Object.entries(c))try{p[d]=g}catch{Object.defineProperty(p,d,{configurable:!0,get:()=>g})}return p}function $t(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function ms(p){return p.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const Gt={setDataAttribute(p,c,d){p.setAttribute(`data-bs-${ms(c)}`,d)},removeDataAttribute(p,c){p.removeAttribute(`data-bs-${ms(c)}`)},getDataAttributes(p){if(!p)return{};const c={},d=Object.keys(p.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of d){let E=g.replace(/^bs/,"");E=E.charAt(0).toLowerCase()+E.slice(1,E.length),c[E]=$t(p.dataset[g])}return c},getDataAttribute:(p,c)=>$t(p.getAttribute(`data-bs-${ms(c)}`))};class gs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,d){const g=a(d)?Gt.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...a(d)?Gt.getDataAttributes(d):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,d=this.constructor.DefaultType){for(const[E,T]of Object.entries(d)){const S=c[E],L=a(S)?"element":(g=S)==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(T).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${L}" but expected type "${T}".`)}var g}}class Je extends gs{constructor(c,d){super(),(c=l(c))&&(this._element=c,this._config=this._getConfig(d),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),x.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,d,g=!0){B(c,d,g)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return s.get(l(c),this.DATA_KEY)}static getOrCreateInstance(c,d={}){return this.getInstance(c)||new this(c,typeof d=="object"?d:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const k=p=>{let c=p.getAttribute("data-bs-target");if(!c||c==="#"){let d=p.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),c=d&&d!=="#"?d.trim():null}return c?c.split(",").map(d=>r(d)).join(","):null},R={find:(p,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,p)),findOne:(p,c=document.documentElement)=>Element.prototype.querySelector.call(c,p),children:(p,c)=>[].concat(...p.children).filter(d=>d.matches(c)),parents(p,c){const d=[];let g=p.parentNode.closest(c);for(;g;)d.push(g),g=g.parentNode.closest(c);return d},prev(p,c){let d=p.previousElementSibling;for(;d;){if(d.matches(c))return[d];d=d.previousElementSibling}return[]},next(p,c){let d=p.nextElementSibling;for(;d;){if(d.matches(c))return[d];d=d.nextElementSibling}return[]},focusableChildren(p){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(c,p).filter(d=>!h(d)&&u(d))},getSelectorFromElement(p){const c=k(p);return c&&R.findOne(c)?c:null},getElementFromSelector(p){const c=k(p);return c?R.findOne(c):null},getMultipleElementsFromSelector(p){const c=k(p);return c?R.find(c):[]}},q=(p,c="hide")=>{const d=`click.dismiss${p.EVENT_KEY}`,g=p.NAME;x.on(document,d,`[data-bs-dismiss="${g}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),h(this))return;const T=R.getElementFromSelector(this)||this.closest(`.${g}`);p.getOrCreateInstance(T)[c]()})},ne=".bs.alert",Ue=`close${ne}`,st=`closed${ne}`;class y extends Je{static get NAME(){return"alert"}close(){if(x.trigger(this._element,Ue).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),x.trigger(this._element,st),this.dispose()}static jQueryInterface(c){return this.each(function(){const d=y.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}q(y,"close"),O(y);const w='[data-bs-toggle="button"]';class A extends Je{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const d=A.getOrCreateInstance(this);c==="toggle"&&d[c]()})}}x.on(document,"click.bs.button.data-api",w,p=>{p.preventDefault();const c=p.target.closest(w);A.getOrCreateInstance(c).toggle()}),O(A);const N=".bs.swipe",P=`touchstart${N}`,$=`touchmove${N}`,Q=`touchend${N}`,U=`pointerdown${N}`,H=`pointerup${N}`,F={endCallback:null,leftCallback:null,rightCallback:null},X={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ie extends gs{constructor(c,d){super(),this._element=c,c&&ie.isSupported()&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return F}static get DefaultType(){return X}static get NAME(){return"swipe"}dispose(){x.off(this._element,N)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),D(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const d=c/this._deltaX;this._deltaX=0,d&&D(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(x.on(this._element,U,c=>this._start(c)),x.on(this._element,H,c=>this._end(c)),this._element.classList.add("pointer-event")):(x.on(this._element,P,c=>this._start(c)),x.on(this._element,$,c=>this._move(c)),x.on(this._element,Q,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const te=".bs.carousel",ce=".data-api",we="next",Re="prev",$e="left",_t="right",Cn=`slide${te}`,_s=`slid${te}`,ac=`keydown${te}`,Gi=`mouseenter${te}`,lc=`mouseleave${te}`,cn=`dragstart${te}`,$n=`load${te}${ce}`,cc=`click${te}${ce}`,Xg="carousel",uc="active",Jg=".active",Zg=".carousel-item",IS=Jg+Zg,AS={ArrowLeft:_t,ArrowRight:$e},CS={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},SS={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Qr extends Je{constructor(c,d){super(c,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=R.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Xg&&this.cycle()}static get Default(){return CS}static get DefaultType(){return SS}static get NAME(){return"carousel"}next(){this._slide(we)}nextWhenVisible(){!document.hidden&&u(this._element)&&this.next()}prev(){this._slide(Re)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?x.one(this._element,_s,()=>this.cycle()):this.cycle())}to(c){const d=this._getItems();if(c>d.length-1||c<0)return;if(this._isSliding)return void x.one(this._element,_s,()=>this.to(c));const g=this._getItemIndex(this._getActive());if(g===c)return;const E=c>g?we:Re;this._slide(E,d[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&x.on(this._element,ac,c=>this._keydown(c)),this._config.pause==="hover"&&(x.on(this._element,Gi,()=>this.pause()),x.on(this._element,lc,()=>this._maybeEnableCycle())),this._config.touch&&ie.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const d of R.find(".carousel-item img",this._element))x.on(d,cn,g=>g.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder($e)),rightCallback:()=>this._slide(this._directionToOrder(_t)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new ie(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const d=AS[c.key];d&&(c.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const d=R.findOne(Jg,this._indicatorsElement);d.classList.remove(uc),d.removeAttribute("aria-current");const g=R.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);g&&(g.classList.add(uc),g.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const d=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(c,d=null){if(this._isSliding)return;const g=this._getActive(),E=c===we,T=d||J(this._getItems(),g,E,this._config.wrap);if(T===g)return;const S=this._getItemIndex(T),L=Y=>x.trigger(this._element,Y,{relatedTarget:T,direction:this._orderToDirection(c),from:this._getItemIndex(g),to:S});if(L(Cn).defaultPrevented||!g||!T)return;const j=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(S),this._activeElement=T;const Z=E?"carousel-item-start":"carousel-item-end",ee=E?"carousel-item-next":"carousel-item-prev";T.classList.add(ee),_(T),g.classList.add(Z),T.classList.add(Z),this._queueCallback(()=>{T.classList.remove(Z,ee),T.classList.add(uc),g.classList.remove(uc,ee,Z),this._isSliding=!1,L(_s)},g,this._isAnimated()),j&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return R.findOne(IS,this._element)}_getItems(){return R.find(Zg,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return I()?c===$e?Re:we:c===$e?we:Re}_orderToDirection(c){return I()?c===Re?$e:_t:c===Re?_t:$e}static jQueryInterface(c){return this.each(function(){const d=Qr.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}}else d.to(c)})}}x.on(document,cc,"[data-bs-slide], [data-bs-slide-to]",function(p){const c=R.getElementFromSelector(this);if(!c||!c.classList.contains(Xg))return;p.preventDefault();const d=Qr.getOrCreateInstance(c),g=this.getAttribute("data-bs-slide-to");return g?(d.to(g),void d._maybeEnableCycle()):Gt.getDataAttribute(this,"slide")==="next"?(d.next(),void d._maybeEnableCycle()):(d.prev(),void d._maybeEnableCycle())}),x.on(window,$n,()=>{const p=R.find('[data-bs-ride="carousel"]');for(const c of p)Qr.getOrCreateInstance(c)}),O(Qr);const ha=".bs.collapse",RS=`show${ha}`,PS=`shown${ha}`,kS=`hide${ha}`,NS=`hidden${ha}`,OS=`click${ha}.data-api`,nd="show",Yr="collapse",hc="collapsing",DS=`:scope .${Yr} .${Yr}`,sd='[data-bs-toggle="collapse"]',xS={parent:null,toggle:!0},LS={parent:"(null|element)",toggle:"boolean"};class Xr extends Je{constructor(c,d){super(c,d),this._isTransitioning=!1,this._triggerArray=[];const g=R.find(sd);for(const E of g){const T=R.getSelectorFromElement(E),S=R.find(T).filter(L=>L===this._element);T!==null&&S.length&&this._triggerArray.push(E)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return xS}static get DefaultType(){return LS}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(E=>E!==this._element).map(E=>Xr.getOrCreateInstance(E,{toggle:!1}))),c.length&&c[0]._isTransitioning||x.trigger(this._element,RS).defaultPrevented)return;for(const E of c)E.hide();const d=this._getDimension();this._element.classList.remove(Yr),this._element.classList.add(hc),this._element.style[d]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const g=`scroll${d[0].toUpperCase()+d.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(hc),this._element.classList.add(Yr,nd),this._element.style[d]="",x.trigger(this._element,PS)},this._element,!0),this._element.style[d]=`${this._element[g]}px`}hide(){if(this._isTransitioning||!this._isShown()||x.trigger(this._element,kS).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,_(this._element),this._element.classList.add(hc),this._element.classList.remove(Yr,nd);for(const d of this._triggerArray){const g=R.getElementFromSelector(d);g&&!this._isShown(g)&&this._addAriaAndCollapsedClass([d],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(hc),this._element.classList.add(Yr),x.trigger(this._element,NS)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(nd)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=l(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(sd);for(const d of c){const g=R.getElementFromSelector(d);g&&this._addAriaAndCollapsedClass([d],this._isShown(g))}}_getFirstLevelChildren(c){const d=R.find(DS,this._config.parent);return R.find(c,this._config.parent).filter(g=>!d.includes(g))}_addAriaAndCollapsedClass(c,d){if(c.length)for(const g of c)g.classList.toggle("collapsed",!d),g.setAttribute("aria-expanded",d)}static jQueryInterface(c){const d={};return typeof c=="string"&&/show|hide/.test(c)&&(d.toggle=!1),this.each(function(){const g=Xr.getOrCreateInstance(this,d);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}x.on(document,OS,sd,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const c of R.getMultipleElementsFromSelector(this))Xr.getOrCreateInstance(c,{toggle:!1}).toggle()}),O(Xr);var un="top",Sn="bottom",Rn="right",hn="left",dc="auto",Jr=[un,Sn,Rn,hn],Qi="start",Zr="end",e_="clippingParents",id="viewport",eo="popper",t_="reference",rd=Jr.reduce(function(p,c){return p.concat([c+"-"+Qi,c+"-"+Zr])},[]),od=[].concat(Jr,[dc]).reduce(function(p,c){return p.concat([c,c+"-"+Qi,c+"-"+Zr])},[]),n_="beforeRead",s_="read",i_="afterRead",r_="beforeMain",o_="main",a_="afterMain",l_="beforeWrite",c_="write",u_="afterWrite",h_=[n_,s_,i_,r_,o_,a_,l_,c_,u_];function ys(p){return p?(p.nodeName||"").toLowerCase():null}function Pn(p){if(p==null)return window;if(p.toString()!=="[object Window]"){var c=p.ownerDocument;return c&&c.defaultView||window}return p}function Yi(p){return p instanceof Pn(p).Element||p instanceof Element}function jn(p){return p instanceof Pn(p).HTMLElement||p instanceof HTMLElement}function ad(p){return typeof ShadowRoot<"u"&&(p instanceof Pn(p).ShadowRoot||p instanceof ShadowRoot)}const ld={name:"applyStyles",enabled:!0,phase:"write",fn:function(p){var c=p.state;Object.keys(c.elements).forEach(function(d){var g=c.styles[d]||{},E=c.attributes[d]||{},T=c.elements[d];jn(T)&&ys(T)&&(Object.assign(T.style,g),Object.keys(E).forEach(function(S){var L=E[S];L===!1?T.removeAttribute(S):T.setAttribute(S,L===!0?"":L)}))})},effect:function(p){var c=p.state,d={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,d.popper),c.styles=d,c.elements.arrow&&Object.assign(c.elements.arrow.style,d.arrow),function(){Object.keys(c.elements).forEach(function(g){var E=c.elements[g],T=c.attributes[g]||{},S=Object.keys(c.styles.hasOwnProperty(g)?c.styles[g]:d[g]).reduce(function(L,j){return L[j]="",L},{});jn(E)&&ys(E)&&(Object.assign(E.style,S),Object.keys(T).forEach(function(L){E.removeAttribute(L)}))})}},requires:["computeStyles"]};function vs(p){return p.split("-")[0]}var Xi=Math.max,fc=Math.min,to=Math.round;function cd(){var p=navigator.userAgentData;return p!=null&&p.brands&&Array.isArray(p.brands)?p.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function d_(){return!/^((?!chrome|android).)*safari/i.test(cd())}function no(p,c,d){c===void 0&&(c=!1),d===void 0&&(d=!1);var g=p.getBoundingClientRect(),E=1,T=1;c&&jn(p)&&(E=p.offsetWidth>0&&to(g.width)/p.offsetWidth||1,T=p.offsetHeight>0&&to(g.height)/p.offsetHeight||1);var S=(Yi(p)?Pn(p):window).visualViewport,L=!d_()&&d,j=(g.left+(L&&S?S.offsetLeft:0))/E,Z=(g.top+(L&&S?S.offsetTop:0))/T,ee=g.width/E,Y=g.height/T;return{width:ee,height:Y,top:Z,right:j+ee,bottom:Z+Y,left:j,x:j,y:Z}}function ud(p){var c=no(p),d=p.offsetWidth,g=p.offsetHeight;return Math.abs(c.width-d)<=1&&(d=c.width),Math.abs(c.height-g)<=1&&(g=c.height),{x:p.offsetLeft,y:p.offsetTop,width:d,height:g}}function f_(p,c){var d=c.getRootNode&&c.getRootNode();if(p.contains(c))return!0;if(d&&ad(d)){var g=c;do{if(g&&p.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function zs(p){return Pn(p).getComputedStyle(p)}function MS(p){return["table","td","th"].indexOf(ys(p))>=0}function pi(p){return((Yi(p)?p.ownerDocument:p.document)||window.document).documentElement}function pc(p){return ys(p)==="html"?p:p.assignedSlot||p.parentNode||(ad(p)?p.host:null)||pi(p)}function p_(p){return jn(p)&&zs(p).position!=="fixed"?p.offsetParent:null}function da(p){for(var c=Pn(p),d=p_(p);d&&MS(d)&&zs(d).position==="static";)d=p_(d);return d&&(ys(d)==="html"||ys(d)==="body"&&zs(d).position==="static")?c:d||function(g){var E=/firefox/i.test(cd());if(/Trident/i.test(cd())&&jn(g)&&zs(g).position==="fixed")return null;var T=pc(g);for(ad(T)&&(T=T.host);jn(T)&&["html","body"].indexOf(ys(T))<0;){var S=zs(T);if(S.transform!=="none"||S.perspective!=="none"||S.contain==="paint"||["transform","perspective"].indexOf(S.willChange)!==-1||E&&S.willChange==="filter"||E&&S.filter&&S.filter!=="none")return T;T=T.parentNode}return null}(p)||c}function hd(p){return["top","bottom"].indexOf(p)>=0?"x":"y"}function fa(p,c,d){return Xi(p,fc(c,d))}function m_(p){return Object.assign({},{top:0,right:0,bottom:0,left:0},p)}function g_(p,c){return c.reduce(function(d,g){return d[g]=p,d},{})}const __={name:"arrow",enabled:!0,phase:"main",fn:function(p){var c,d=p.state,g=p.name,E=p.options,T=d.elements.arrow,S=d.modifiersData.popperOffsets,L=vs(d.placement),j=hd(L),Z=[hn,Rn].indexOf(L)>=0?"height":"width";if(T&&S){var ee=function(et,Qe){return m_(typeof(et=typeof et=="function"?et(Object.assign({},Qe.rects,{placement:Qe.placement})):et)!="number"?et:g_(et,Jr))}(E.padding,d),Y=ud(T),Te=j==="y"?un:hn,ae=j==="y"?Sn:Rn,ge=d.rects.reference[Z]+d.rects.reference[j]-S[j]-d.rects.popper[Z],he=S[j]-d.rects.reference[j],_e=da(T),Ze=_e?j==="y"?_e.clientHeight||0:_e.clientWidth||0:0,it=ge/2-he/2,Ie=ee[Te],je=Ze-Y[Z]-ee[ae],be=Ze/2-Y[Z]/2+it,Pe=fa(Ie,be,je),Ge=j;d.modifiersData[g]=((c={})[Ge]=Pe,c.centerOffset=Pe-be,c)}},effect:function(p){var c=p.state,d=p.options.element,g=d===void 0?"[data-popper-arrow]":d;g!=null&&(typeof g!="string"||(g=c.elements.popper.querySelector(g)))&&f_(c.elements.popper,g)&&(c.elements.arrow=g)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function so(p){return p.split("-")[1]}var VS={top:"auto",right:"auto",bottom:"auto",left:"auto"};function y_(p){var c,d=p.popper,g=p.popperRect,E=p.placement,T=p.variation,S=p.offsets,L=p.position,j=p.gpuAcceleration,Z=p.adaptive,ee=p.roundOffsets,Y=p.isFixed,Te=S.x,ae=Te===void 0?0:Te,ge=S.y,he=ge===void 0?0:ge,_e=typeof ee=="function"?ee({x:ae,y:he}):{x:ae,y:he};ae=_e.x,he=_e.y;var Ze=S.hasOwnProperty("x"),it=S.hasOwnProperty("y"),Ie=hn,je=un,be=window;if(Z){var Pe=da(d),Ge="clientHeight",et="clientWidth";Pe===Pn(d)&&zs(Pe=pi(d)).position!=="static"&&L==="absolute"&&(Ge="scrollHeight",et="scrollWidth"),(E===un||(E===hn||E===Rn)&&T===Zr)&&(je=Sn,he-=(Y&&Pe===be&&be.visualViewport?be.visualViewport.height:Pe[Ge])-g.height,he*=j?1:-1),E!==hn&&(E!==un&&E!==Sn||T!==Zr)||(Ie=Rn,ae-=(Y&&Pe===be&&be.visualViewport?be.visualViewport.width:Pe[et])-g.width,ae*=j?1:-1)}var Qe,At=Object.assign({position:L},Z&&VS),kn=ee===!0?function(ss,dn){var Hn=ss.x,Wn=ss.y,vt=dn.devicePixelRatio||1;return{x:to(Hn*vt)/vt||0,y:to(Wn*vt)/vt||0}}({x:ae,y:he},Pn(d)):{x:ae,y:he};return ae=kn.x,he=kn.y,j?Object.assign({},At,((Qe={})[je]=it?"0":"",Qe[Ie]=Ze?"0":"",Qe.transform=(be.devicePixelRatio||1)<=1?"translate("+ae+"px, "+he+"px)":"translate3d("+ae+"px, "+he+"px, 0)",Qe)):Object.assign({},At,((c={})[je]=it?he+"px":"",c[Ie]=Ze?ae+"px":"",c.transform="",c))}const dd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(p){var c=p.state,d=p.options,g=d.gpuAcceleration,E=g===void 0||g,T=d.adaptive,S=T===void 0||T,L=d.roundOffsets,j=L===void 0||L,Z={placement:vs(c.placement),variation:so(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:E,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,y_(Object.assign({},Z,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:S,roundOffsets:j})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,y_(Object.assign({},Z,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:j})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var mc={passive:!0};const fd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(p){var c=p.state,d=p.instance,g=p.options,E=g.scroll,T=E===void 0||E,S=g.resize,L=S===void 0||S,j=Pn(c.elements.popper),Z=[].concat(c.scrollParents.reference,c.scrollParents.popper);return T&&Z.forEach(function(ee){ee.addEventListener("scroll",d.update,mc)}),L&&j.addEventListener("resize",d.update,mc),function(){T&&Z.forEach(function(ee){ee.removeEventListener("scroll",d.update,mc)}),L&&j.removeEventListener("resize",d.update,mc)}},data:{}};var FS={left:"right",right:"left",bottom:"top",top:"bottom"};function gc(p){return p.replace(/left|right|bottom|top/g,function(c){return FS[c]})}var US={start:"end",end:"start"};function v_(p){return p.replace(/start|end/g,function(c){return US[c]})}function pd(p){var c=Pn(p);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function md(p){return no(pi(p)).left+pd(p).scrollLeft}function gd(p){var c=zs(p),d=c.overflow,g=c.overflowX,E=c.overflowY;return/auto|scroll|overlay|hidden/.test(d+E+g)}function w_(p){return["html","body","#document"].indexOf(ys(p))>=0?p.ownerDocument.body:jn(p)&&gd(p)?p:w_(pc(p))}function pa(p,c){var d;c===void 0&&(c=[]);var g=w_(p),E=g===((d=p.ownerDocument)==null?void 0:d.body),T=Pn(g),S=E?[T].concat(T.visualViewport||[],gd(g)?g:[]):g,L=c.concat(S);return E?L:L.concat(pa(pc(S)))}function _d(p){return Object.assign({},p,{left:p.x,top:p.y,right:p.x+p.width,bottom:p.y+p.height})}function E_(p,c,d){return c===id?_d(function(g,E){var T=Pn(g),S=pi(g),L=T.visualViewport,j=S.clientWidth,Z=S.clientHeight,ee=0,Y=0;if(L){j=L.width,Z=L.height;var Te=d_();(Te||!Te&&E==="fixed")&&(ee=L.offsetLeft,Y=L.offsetTop)}return{width:j,height:Z,x:ee+md(g),y:Y}}(p,d)):Yi(c)?function(g,E){var T=no(g,!1,E==="fixed");return T.top=T.top+g.clientTop,T.left=T.left+g.clientLeft,T.bottom=T.top+g.clientHeight,T.right=T.left+g.clientWidth,T.width=g.clientWidth,T.height=g.clientHeight,T.x=T.left,T.y=T.top,T}(c,d):_d(function(g){var E,T=pi(g),S=pd(g),L=(E=g.ownerDocument)==null?void 0:E.body,j=Xi(T.scrollWidth,T.clientWidth,L?L.scrollWidth:0,L?L.clientWidth:0),Z=Xi(T.scrollHeight,T.clientHeight,L?L.scrollHeight:0,L?L.clientHeight:0),ee=-S.scrollLeft+md(g),Y=-S.scrollTop;return zs(L||T).direction==="rtl"&&(ee+=Xi(T.clientWidth,L?L.clientWidth:0)-j),{width:j,height:Z,x:ee,y:Y}}(pi(p)))}function T_(p){var c,d=p.reference,g=p.element,E=p.placement,T=E?vs(E):null,S=E?so(E):null,L=d.x+d.width/2-g.width/2,j=d.y+d.height/2-g.height/2;switch(T){case un:c={x:L,y:d.y-g.height};break;case Sn:c={x:L,y:d.y+d.height};break;case Rn:c={x:d.x+d.width,y:j};break;case hn:c={x:d.x-g.width,y:j};break;default:c={x:d.x,y:d.y}}var Z=T?hd(T):null;if(Z!=null){var ee=Z==="y"?"height":"width";switch(S){case Qi:c[Z]=c[Z]-(d[ee]/2-g[ee]/2);break;case Zr:c[Z]=c[Z]+(d[ee]/2-g[ee]/2)}}return c}function io(p,c){c===void 0&&(c={});var d=c,g=d.placement,E=g===void 0?p.placement:g,T=d.strategy,S=T===void 0?p.strategy:T,L=d.boundary,j=L===void 0?e_:L,Z=d.rootBoundary,ee=Z===void 0?id:Z,Y=d.elementContext,Te=Y===void 0?eo:Y,ae=d.altBoundary,ge=ae!==void 0&&ae,he=d.padding,_e=he===void 0?0:he,Ze=m_(typeof _e!="number"?_e:g_(_e,Jr)),it=Te===eo?t_:eo,Ie=p.rects.popper,je=p.elements[ge?it:Te],be=function(dn,Hn,Wn,vt){var ws=Hn==="clippingParents"?function(nt){var fn=pa(pc(nt)),qn=["absolute","fixed"].indexOf(zs(nt).position)>=0&&jn(nt)?da(nt):nt;return Yi(qn)?fn.filter(function(gi){return Yi(gi)&&f_(gi,qn)&&ys(gi)!=="body"}):[]}(dn):[].concat(Hn),Es=[].concat(ws,[Wn]),ao=Es[0],Dt=Es.reduce(function(nt,fn){var qn=E_(dn,fn,vt);return nt.top=Xi(qn.top,nt.top),nt.right=fc(qn.right,nt.right),nt.bottom=fc(qn.bottom,nt.bottom),nt.left=Xi(qn.left,nt.left),nt},E_(dn,ao,vt));return Dt.width=Dt.right-Dt.left,Dt.height=Dt.bottom-Dt.top,Dt.x=Dt.left,Dt.y=Dt.top,Dt}(Yi(je)?je:je.contextElement||pi(p.elements.popper),j,ee,S),Pe=no(p.elements.reference),Ge=T_({reference:Pe,element:Ie,strategy:"absolute",placement:E}),et=_d(Object.assign({},Ie,Ge)),Qe=Te===eo?et:Pe,At={top:be.top-Qe.top+Ze.top,bottom:Qe.bottom-be.bottom+Ze.bottom,left:be.left-Qe.left+Ze.left,right:Qe.right-be.right+Ze.right},kn=p.modifiersData.offset;if(Te===eo&&kn){var ss=kn[E];Object.keys(At).forEach(function(dn){var Hn=[Rn,Sn].indexOf(dn)>=0?1:-1,Wn=[un,Sn].indexOf(dn)>=0?"y":"x";At[dn]+=ss[Wn]*Hn})}return At}function $S(p,c){c===void 0&&(c={});var d=c,g=d.placement,E=d.boundary,T=d.rootBoundary,S=d.padding,L=d.flipVariations,j=d.allowedAutoPlacements,Z=j===void 0?od:j,ee=so(g),Y=ee?L?rd:rd.filter(function(ge){return so(ge)===ee}):Jr,Te=Y.filter(function(ge){return Z.indexOf(ge)>=0});Te.length===0&&(Te=Y);var ae=Te.reduce(function(ge,he){return ge[he]=io(p,{placement:he,boundary:E,rootBoundary:T,padding:S})[vs(he)],ge},{});return Object.keys(ae).sort(function(ge,he){return ae[ge]-ae[he]})}const b_={name:"flip",enabled:!0,phase:"main",fn:function(p){var c=p.state,d=p.options,g=p.name;if(!c.modifiersData[g]._skip){for(var E=d.mainAxis,T=E===void 0||E,S=d.altAxis,L=S===void 0||S,j=d.fallbackPlacements,Z=d.padding,ee=d.boundary,Y=d.rootBoundary,Te=d.altBoundary,ae=d.flipVariations,ge=ae===void 0||ae,he=d.allowedAutoPlacements,_e=c.options.placement,Ze=vs(_e),it=j||(Ze!==_e&&ge?function(nt){if(vs(nt)===dc)return[];var fn=gc(nt);return[v_(nt),fn,v_(fn)]}(_e):[gc(_e)]),Ie=[_e].concat(it).reduce(function(nt,fn){return nt.concat(vs(fn)===dc?$S(c,{placement:fn,boundary:ee,rootBoundary:Y,padding:Z,flipVariations:ge,allowedAutoPlacements:he}):fn)},[]),je=c.rects.reference,be=c.rects.popper,Pe=new Map,Ge=!0,et=Ie[0],Qe=0;Qe<Ie.length;Qe++){var At=Ie[Qe],kn=vs(At),ss=so(At)===Qi,dn=[un,Sn].indexOf(kn)>=0,Hn=dn?"width":"height",Wn=io(c,{placement:At,boundary:ee,rootBoundary:Y,altBoundary:Te,padding:Z}),vt=dn?ss?Rn:hn:ss?Sn:un;je[Hn]>be[Hn]&&(vt=gc(vt));var ws=gc(vt),Es=[];if(T&&Es.push(Wn[kn]<=0),L&&Es.push(Wn[vt]<=0,Wn[ws]<=0),Es.every(function(nt){return nt})){et=At,Ge=!1;break}Pe.set(At,Es)}if(Ge)for(var ao=function(nt){var fn=Ie.find(function(qn){var gi=Pe.get(qn);if(gi)return gi.slice(0,nt).every(function(Ac){return Ac})});if(fn)return et=fn,"break"},Dt=ge?3:1;Dt>0&&ao(Dt)!=="break";Dt--);c.placement!==et&&(c.modifiersData[g]._skip=!0,c.placement=et,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function I_(p,c,d){return d===void 0&&(d={x:0,y:0}),{top:p.top-c.height-d.y,right:p.right-c.width+d.x,bottom:p.bottom-c.height+d.y,left:p.left-c.width-d.x}}function A_(p){return[un,Rn,Sn,hn].some(function(c){return p[c]>=0})}const C_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(p){var c=p.state,d=p.name,g=c.rects.reference,E=c.rects.popper,T=c.modifiersData.preventOverflow,S=io(c,{elementContext:"reference"}),L=io(c,{altBoundary:!0}),j=I_(S,g),Z=I_(L,E,T),ee=A_(j),Y=A_(Z);c.modifiersData[d]={referenceClippingOffsets:j,popperEscapeOffsets:Z,isReferenceHidden:ee,hasPopperEscaped:Y},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":ee,"data-popper-escaped":Y})}},S_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(p){var c=p.state,d=p.options,g=p.name,E=d.offset,T=E===void 0?[0,0]:E,S=od.reduce(function(ee,Y){return ee[Y]=function(Te,ae,ge){var he=vs(Te),_e=[hn,un].indexOf(he)>=0?-1:1,Ze=typeof ge=="function"?ge(Object.assign({},ae,{placement:Te})):ge,it=Ze[0],Ie=Ze[1];return it=it||0,Ie=(Ie||0)*_e,[hn,Rn].indexOf(he)>=0?{x:Ie,y:it}:{x:it,y:Ie}}(Y,c.rects,T),ee},{}),L=S[c.placement],j=L.x,Z=L.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=j,c.modifiersData.popperOffsets.y+=Z),c.modifiersData[g]=S}},yd={name:"popperOffsets",enabled:!0,phase:"read",fn:function(p){var c=p.state,d=p.name;c.modifiersData[d]=T_({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},R_={name:"preventOverflow",enabled:!0,phase:"main",fn:function(p){var c=p.state,d=p.options,g=p.name,E=d.mainAxis,T=E===void 0||E,S=d.altAxis,L=S!==void 0&&S,j=d.boundary,Z=d.rootBoundary,ee=d.altBoundary,Y=d.padding,Te=d.tether,ae=Te===void 0||Te,ge=d.tetherOffset,he=ge===void 0?0:ge,_e=io(c,{boundary:j,rootBoundary:Z,padding:Y,altBoundary:ee}),Ze=vs(c.placement),it=so(c.placement),Ie=!it,je=hd(Ze),be=je==="x"?"y":"x",Pe=c.modifiersData.popperOffsets,Ge=c.rects.reference,et=c.rects.popper,Qe=typeof he=="function"?he(Object.assign({},c.rects,{placement:c.placement})):he,At=typeof Qe=="number"?{mainAxis:Qe,altAxis:Qe}:Object.assign({mainAxis:0,altAxis:0},Qe),kn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,ss={x:0,y:0};if(Pe){if(T){var dn,Hn=je==="y"?un:hn,Wn=je==="y"?Sn:Rn,vt=je==="y"?"height":"width",ws=Pe[je],Es=ws+_e[Hn],ao=ws-_e[Wn],Dt=ae?-et[vt]/2:0,nt=it===Qi?Ge[vt]:et[vt],fn=it===Qi?-et[vt]:-Ge[vt],qn=c.elements.arrow,gi=ae&&qn?ud(qn):{width:0,height:0},Ac=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},py=Ac[Hn],my=Ac[Wn],Cc=fa(0,Ge[vt],gi[vt]),mP=Ie?Ge[vt]/2-Dt-Cc-py-At.mainAxis:nt-Cc-py-At.mainAxis,gP=Ie?-Ge[vt]/2+Dt+Cc+my+At.mainAxis:fn+Cc+my+At.mainAxis,Nd=c.elements.arrow&&da(c.elements.arrow),_P=Nd?je==="y"?Nd.clientTop||0:Nd.clientLeft||0:0,gy=(dn=kn==null?void 0:kn[je])!=null?dn:0,yP=ws+gP-gy,_y=fa(ae?fc(Es,ws+mP-gy-_P):Es,ws,ae?Xi(ao,yP):ao);Pe[je]=_y,ss[je]=_y-ws}if(L){var yy,vP=je==="x"?un:hn,wP=je==="x"?Sn:Rn,rr=Pe[be],Sc=be==="y"?"height":"width",vy=rr+_e[vP],wy=rr-_e[wP],Od=[un,hn].indexOf(Ze)!==-1,Ey=(yy=kn==null?void 0:kn[be])!=null?yy:0,Ty=Od?vy:rr-Ge[Sc]-et[Sc]-Ey+At.altAxis,by=Od?rr+Ge[Sc]+et[Sc]-Ey-At.altAxis:wy,Iy=ae&&Od?function(EP,TP,Dd){var Ay=fa(EP,TP,Dd);return Ay>Dd?Dd:Ay}(Ty,rr,by):fa(ae?Ty:vy,rr,ae?by:wy);Pe[be]=Iy,ss[be]=Iy-rr}c.modifiersData[g]=ss}},requiresIfExists:["offset"]};function jS(p,c,d){d===void 0&&(d=!1);var g,E,T=jn(c),S=jn(c)&&function(Y){var Te=Y.getBoundingClientRect(),ae=to(Te.width)/Y.offsetWidth||1,ge=to(Te.height)/Y.offsetHeight||1;return ae!==1||ge!==1}(c),L=pi(c),j=no(p,S,d),Z={scrollLeft:0,scrollTop:0},ee={x:0,y:0};return(T||!T&&!d)&&((ys(c)!=="body"||gd(L))&&(Z=(g=c)!==Pn(g)&&jn(g)?{scrollLeft:(E=g).scrollLeft,scrollTop:E.scrollTop}:pd(g)),jn(c)?((ee=no(c,!0)).x+=c.clientLeft,ee.y+=c.clientTop):L&&(ee.x=md(L))),{x:j.left+Z.scrollLeft-ee.x,y:j.top+Z.scrollTop-ee.y,width:j.width,height:j.height}}function BS(p){var c=new Map,d=new Set,g=[];function E(T){d.add(T.name),[].concat(T.requires||[],T.requiresIfExists||[]).forEach(function(S){if(!d.has(S)){var L=c.get(S);L&&E(L)}}),g.push(T)}return p.forEach(function(T){c.set(T.name,T)}),p.forEach(function(T){d.has(T.name)||E(T)}),g}var P_={placement:"bottom",modifiers:[],strategy:"absolute"};function k_(){for(var p=arguments.length,c=new Array(p),d=0;d<p;d++)c[d]=arguments[d];return!c.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function _c(p){p===void 0&&(p={});var c=p,d=c.defaultModifiers,g=d===void 0?[]:d,E=c.defaultOptions,T=E===void 0?P_:E;return function(S,L,j){j===void 0&&(j=T);var Z,ee,Y={placement:"bottom",orderedModifiers:[],options:Object.assign({},P_,T),modifiersData:{},elements:{reference:S,popper:L},attributes:{},styles:{}},Te=[],ae=!1,ge={state:Y,setOptions:function(_e){var Ze=typeof _e=="function"?_e(Y.options):_e;he(),Y.options=Object.assign({},T,Y.options,Ze),Y.scrollParents={reference:Yi(S)?pa(S):S.contextElement?pa(S.contextElement):[],popper:pa(L)};var it,Ie,je=function(be){var Pe=BS(be);return h_.reduce(function(Ge,et){return Ge.concat(Pe.filter(function(Qe){return Qe.phase===et}))},[])}((it=[].concat(g,Y.options.modifiers),Ie=it.reduce(function(be,Pe){var Ge=be[Pe.name];return be[Pe.name]=Ge?Object.assign({},Ge,Pe,{options:Object.assign({},Ge.options,Pe.options),data:Object.assign({},Ge.data,Pe.data)}):Pe,be},{}),Object.keys(Ie).map(function(be){return Ie[be]})));return Y.orderedModifiers=je.filter(function(be){return be.enabled}),Y.orderedModifiers.forEach(function(be){var Pe=be.name,Ge=be.options,et=Ge===void 0?{}:Ge,Qe=be.effect;if(typeof Qe=="function"){var At=Qe({state:Y,name:Pe,instance:ge,options:et});Te.push(At||function(){})}}),ge.update()},forceUpdate:function(){if(!ae){var _e=Y.elements,Ze=_e.reference,it=_e.popper;if(k_(Ze,it)){Y.rects={reference:jS(Ze,da(it),Y.options.strategy==="fixed"),popper:ud(it)},Y.reset=!1,Y.placement=Y.options.placement,Y.orderedModifiers.forEach(function(Qe){return Y.modifiersData[Qe.name]=Object.assign({},Qe.data)});for(var Ie=0;Ie<Y.orderedModifiers.length;Ie++)if(Y.reset!==!0){var je=Y.orderedModifiers[Ie],be=je.fn,Pe=je.options,Ge=Pe===void 0?{}:Pe,et=je.name;typeof be=="function"&&(Y=be({state:Y,options:Ge,name:et,instance:ge})||Y)}else Y.reset=!1,Ie=-1}}},update:(Z=function(){return new Promise(function(_e){ge.forceUpdate(),_e(Y)})},function(){return ee||(ee=new Promise(function(_e){Promise.resolve().then(function(){ee=void 0,_e(Z())})})),ee}),destroy:function(){he(),ae=!0}};if(!k_(S,L))return ge;function he(){Te.forEach(function(_e){return _e()}),Te=[]}return ge.setOptions(j).then(function(_e){!ae&&j.onFirstUpdate&&j.onFirstUpdate(_e)}),ge}}var HS=_c(),WS=_c({defaultModifiers:[fd,yd,dd,ld]}),vd=_c({defaultModifiers:[fd,yd,dd,ld,S_,b_,R_,__,C_]});const N_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:a_,afterRead:i_,afterWrite:u_,applyStyles:ld,arrow:__,auto:dc,basePlacements:Jr,beforeMain:r_,beforeRead:n_,beforeWrite:l_,bottom:Sn,clippingParents:e_,computeStyles:dd,createPopper:vd,createPopperBase:HS,createPopperLite:WS,detectOverflow:io,end:Zr,eventListeners:fd,flip:b_,hide:C_,left:hn,main:o_,modifierPhases:h_,offset:S_,placements:od,popper:eo,popperGenerator:_c,popperOffsets:yd,preventOverflow:R_,read:s_,reference:t_,right:Rn,start:Qi,top:un,variationPlacements:rd,viewport:id,write:c_},Symbol.toStringTag,{value:"Module"})),O_="dropdown",Ji=".bs.dropdown",wd=".data-api",qS="ArrowUp",D_="ArrowDown",zS=`hide${Ji}`,KS=`hidden${Ji}`,GS=`show${Ji}`,QS=`shown${Ji}`,x_=`click${Ji}${wd}`,L_=`keydown${Ji}${wd}`,YS=`keyup${Ji}${wd}`,ro="show",Zi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',XS=`${Zi}.${ro}`,yc=".dropdown-menu",JS=I()?"top-end":"top-start",ZS=I()?"top-start":"top-end",eR=I()?"bottom-end":"bottom-start",tR=I()?"bottom-start":"bottom-end",nR=I()?"left-start":"right-start",sR=I()?"right-start":"left-start",iR={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},rR={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ns extends Je{constructor(c,d){super(c,d),this._popper=null,this._parent=this._element.parentNode,this._menu=R.next(this._element,yc)[0]||R.prev(this._element,yc)[0]||R.findOne(yc,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return iR}static get DefaultType(){return rR}static get NAME(){return O_}toggle(){return this._isShown()?this.hide():this.show()}show(){if(h(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!x.trigger(this._element,GS,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const d of[].concat(...document.body.children))x.on(d,"mouseover",m);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ro),this._element.classList.add(ro),x.trigger(this._element,QS,c)}}hide(){if(h(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!x.trigger(this._element,zS,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const d of[].concat(...document.body.children))x.off(d,"mouseover",m);this._popper&&this._popper.destroy(),this._menu.classList.remove(ro),this._element.classList.remove(ro),this._element.setAttribute("aria-expanded","false"),Gt.removeDataAttribute(this._menu,"popper"),x.trigger(this._element,KS,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!a(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${O_.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(N_===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:a(this._config.reference)?c=l(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const d=this._getPopperConfig();this._popper=vd(c,this._menu,d)}_isShown(){return this._menu.classList.contains(ro)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return nR;if(c.classList.contains("dropstart"))return sR;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?d?ZS:JS:d?tR:eR}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Gt.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...D(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:d}){const g=R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(E=>u(E));g.length&&J(g,d,c===D_,!g.includes(d)).focus()}static jQueryInterface(c){return this.each(function(){const d=ns.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0)throw new TypeError(`No method named "${c}"`);d[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const d=R.find(XS);for(const g of d){const E=ns.getInstance(g);if(!E||E._config.autoClose===!1)continue;const T=c.composedPath(),S=T.includes(E._menu);if(T.includes(E._element)||E._config.autoClose==="inside"&&!S||E._config.autoClose==="outside"&&S||E._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const L={relatedTarget:E._element};c.type==="click"&&(L.clickEvent=c),E._completeHide(L)}}static dataApiKeydownHandler(c){const d=/input|textarea/i.test(c.target.tagName),g=c.key==="Escape",E=[qS,D_].includes(c.key);if(!E&&!g||d&&!g)return;c.preventDefault();const T=this.matches(Zi)?this:R.prev(this,Zi)[0]||R.next(this,Zi)[0]||R.findOne(Zi,c.delegateTarget.parentNode),S=ns.getOrCreateInstance(T);if(E)return c.stopPropagation(),S.show(),void S._selectMenuItem(c);S._isShown()&&(c.stopPropagation(),S.hide(),T.focus())}}x.on(document,L_,Zi,ns.dataApiKeydownHandler),x.on(document,L_,yc,ns.dataApiKeydownHandler),x.on(document,x_,ns.clearMenus),x.on(document,YS,ns.clearMenus),x.on(document,x_,Zi,function(p){p.preventDefault(),ns.getOrCreateInstance(this).toggle()}),O(ns);const M_="backdrop",V_="show",F_=`mousedown.bs.${M_}`,oR={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},aR={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class U_ extends gs{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return oR}static get DefaultType(){return aR}static get NAME(){return M_}show(c){if(!this._config.isVisible)return void D(c);this._append();const d=this._getElement();this._config.isAnimated&&_(d),d.classList.add(V_),this._emulateAnimation(()=>{D(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(V_),this._emulateAnimation(()=>{this.dispose(),D(c)})):D(c)}dispose(){this._isAppended&&(x.off(this._element,F_),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=l(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),x.on(c,F_,()=>{D(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){B(c,this._getElement(),this._config.isAnimated)}}const vc=".bs.focustrap",lR=`focusin${vc}`,cR=`keydown.tab${vc}`,$_="backward",uR={autofocus:!0,trapElement:null},hR={autofocus:"boolean",trapElement:"element"};class j_ extends gs{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return uR}static get DefaultType(){return hR}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),x.off(document,vc),x.on(document,lR,c=>this._handleFocusin(c)),x.on(document,cR,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,x.off(document,vc))}_handleFocusin(c){const{trapElement:d}=this._config;if(c.target===document||c.target===d||d.contains(c.target))return;const g=R.focusableChildren(d);g.length===0?d.focus():this._lastTabNavDirection===$_?g[g.length-1].focus():g[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?$_:"forward")}}const B_=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",H_=".sticky-top",wc="padding-right",W_="margin-right";class Ed{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,wc,d=>d+c),this._setElementAttributes(B_,wc,d=>d+c),this._setElementAttributes(H_,W_,d=>d-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,wc),this._resetElementAttributes(B_,wc),this._resetElementAttributes(H_,W_)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,d,g){const E=this.getWidth();this._applyManipulationCallback(c,T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+E)return;this._saveInitialAttribute(T,d);const S=window.getComputedStyle(T).getPropertyValue(d);T.style.setProperty(d,`${g(Number.parseFloat(S))}px`)})}_saveInitialAttribute(c,d){const g=c.style.getPropertyValue(d);g&&Gt.setDataAttribute(c,d,g)}_resetElementAttributes(c,d){this._applyManipulationCallback(c,g=>{const E=Gt.getDataAttribute(g,d);E!==null?(Gt.removeDataAttribute(g,d),g.style.setProperty(d,E)):g.style.removeProperty(d)})}_applyManipulationCallback(c,d){if(a(c))d(c);else for(const g of R.find(c,this._element))d(g)}}const Bn=".bs.modal",dR=`hide${Bn}`,fR=`hidePrevented${Bn}`,q_=`hidden${Bn}`,z_=`show${Bn}`,pR=`shown${Bn}`,mR=`resize${Bn}`,gR=`click.dismiss${Bn}`,_R=`mousedown.dismiss${Bn}`,yR=`keydown.dismiss${Bn}`,vR=`click${Bn}.data-api`,K_="modal-open",G_="show",Td="modal-static",wR={backdrop:!0,focus:!0,keyboard:!0},ER={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class er extends Je{constructor(c,d){super(c,d),this._dialog=R.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ed,this._addEventListeners()}static get Default(){return wR}static get DefaultType(){return ER}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||x.trigger(this._element,z_,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(K_),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(x.trigger(this._element,dR).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(G_),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){x.off(window,Bn),x.off(this._dialog,Bn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new U_({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new j_({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const d=R.findOne(".modal-body",this._dialog);d&&(d.scrollTop=0),_(this._element),this._element.classList.add(G_),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,x.trigger(this._element,pR,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){x.on(this._element,yR,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),x.on(window,mR,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),x.on(this._element,_R,c=>{x.one(this._element,gR,d=>{this._element===c.target&&this._element===d.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(K_),this._resetAdjustments(),this._scrollBar.reset(),x.trigger(this._element,q_)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(x.trigger(this._element,fR).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,d=this._element.style.overflowY;d==="hidden"||this._element.classList.contains(Td)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Td),this._queueCallback(()=>{this._element.classList.remove(Td),this._queueCallback(()=>{this._element.style.overflowY=d},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),g=d>0;if(g&&!c){const E=I()?"paddingLeft":"paddingRight";this._element.style[E]=`${d}px`}if(!g&&c){const E=I()?"paddingRight":"paddingLeft";this._element.style[E]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,d){return this.each(function(){const g=er.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c](d)}})}}x.on(document,vR,'[data-bs-toggle="modal"]',function(p){const c=R.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&p.preventDefault(),x.one(c,z_,g=>{g.defaultPrevented||x.one(c,q_,()=>{u(this)&&this.focus()})});const d=R.findOne(".modal.show");d&&er.getInstance(d).hide(),er.getOrCreateInstance(c).toggle(this)}),q(er),O(er);const Ks=".bs.offcanvas",Q_=".data-api",TR=`load${Ks}${Q_}`,Y_="show",X_="showing",J_="hiding",Z_=".offcanvas.show",bR=`show${Ks}`,IR=`shown${Ks}`,AR=`hide${Ks}`,ey=`hidePrevented${Ks}`,ty=`hidden${Ks}`,CR=`resize${Ks}`,SR=`click${Ks}${Q_}`,RR=`keydown.dismiss${Ks}`,PR={backdrop:!0,keyboard:!0,scroll:!1},kR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Gs extends Je{constructor(c,d){super(c,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return PR}static get DefaultType(){return kR}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||x.trigger(this._element,bR,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ed().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(X_),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Y_),this._element.classList.remove(X_),x.trigger(this._element,IR,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(x.trigger(this._element,AR).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(J_),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Y_,J_),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ed().reset(),x.trigger(this._element,ty)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new U_({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():x.trigger(this._element,ey)}:null})}_initializeFocusTrap(){return new j_({trapElement:this._element})}_addEventListeners(){x.on(this._element,RR,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():x.trigger(this._element,ey))})}static jQueryInterface(c){return this.each(function(){const d=Gs.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}x.on(document,SR,'[data-bs-toggle="offcanvas"]',function(p){const c=R.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),h(this))return;x.one(c,ty,()=>{u(this)&&this.focus()});const d=R.findOne(Z_);d&&d!==c&&Gs.getInstance(d).hide(),Gs.getOrCreateInstance(c).toggle(this)}),x.on(window,TR,()=>{for(const p of R.find(Z_))Gs.getOrCreateInstance(p).show()}),x.on(window,CR,()=>{for(const p of R.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(p).position!=="fixed"&&Gs.getOrCreateInstance(p).hide()}),q(Gs),O(Gs);const ny={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},NR=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),OR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,DR=(p,c)=>{const d=p.nodeName.toLowerCase();return c.includes(d)?!NR.has(d)||!!OR.test(p.nodeValue):c.filter(g=>g instanceof RegExp).some(g=>g.test(d))},xR={allowList:ny,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},LR={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},MR={entry:"(string|element|function|null)",selector:"(string|element)"};class VR extends gs{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return xR}static get DefaultType(){return LR}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[E,T]of Object.entries(this._config.content))this._setContent(c,T,E);const d=c.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&d.classList.add(...g.split(" ")),d}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[d,g]of Object.entries(c))super._typeCheckConfig({selector:d,entry:g},MR)}_setContent(c,d,g){const E=R.findOne(g,c);E&&((d=this._resolvePossibleFunction(d))?a(d)?this._putElementInTemplate(l(d),E):this._config.html?E.innerHTML=this._maybeSanitize(d):E.textContent=d:E.remove())}_maybeSanitize(c){return this._config.sanitize?function(d,g,E){if(!d.length)return d;if(E&&typeof E=="function")return E(d);const T=new window.DOMParser().parseFromString(d,"text/html"),S=[].concat(...T.body.querySelectorAll("*"));for(const L of S){const j=L.nodeName.toLowerCase();if(!Object.keys(g).includes(j)){L.remove();continue}const Z=[].concat(...L.attributes),ee=[].concat(g["*"]||[],g[j]||[]);for(const Y of Z)DR(Y,ee)||L.removeAttribute(Y.nodeName)}return T.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return D(c,[this])}_putElementInTemplate(c,d){if(this._config.html)return d.innerHTML="",void d.append(c);d.textContent=c.textContent}}const FR=new Set(["sanitize","allowList","sanitizeFn"]),bd="fade",Ec="show",sy=".modal",iy="hide.bs.modal",ma="hover",Id="focus",UR={AUTO:"auto",TOP:"top",RIGHT:I()?"left":"right",BOTTOM:"bottom",LEFT:I()?"right":"left"},$R={allowList:ny,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},jR={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class tr extends Je{constructor(c,d){if(N_===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return $R}static get DefaultType(){return jR}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),x.off(this._element.closest(sy),iy,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=x.trigger(this._element,this.constructor.eventName("show")),d=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!d)return;this._disposePopper();const g=this._getTipElement();this._element.setAttribute("aria-describedby",g.getAttribute("id"));const{container:E}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(E.append(g),x.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(g),g.classList.add(Ec),"ontouchstart"in document.documentElement)for(const T of[].concat(...document.body.children))x.on(T,"mouseover",m);this._queueCallback(()=>{x.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!x.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ec),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))x.off(c,"mouseover",m);this._activeTrigger.click=!1,this._activeTrigger[Id]=!1,this._activeTrigger[ma]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),x.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const d=this._getTemplateFactory(c).toHtml();if(!d)return null;d.classList.remove(bd,Ec),d.classList.add(`bs-${this.constructor.NAME}-auto`);const g=(E=>{do E+=Math.floor(1e6*Math.random());while(document.getElementById(E));return E})(this.constructor.NAME).toString();return d.setAttribute("id",g),this._isAnimated()&&d.classList.add(bd),d}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new VR({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(bd)}_isShown(){return this.tip&&this.tip.classList.contains(Ec)}_createPopper(c){const d=D(this._config.placement,[this,c,this._element]),g=UR[d.toUpperCase()];return vd(this._element,c,this._getPopperConfig(g))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_resolvePossibleFunction(c){return D(c,[this._element])}_getPopperConfig(c){const d={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...d,...D(this._config.popperConfig,[d])}}_setListeners(){const c=this._config.trigger.split(" ");for(const d of c)if(d==="click")x.on(this._element,this.constructor.eventName("click"),this._config.selector,g=>{this._initializeOnDelegatedTarget(g).toggle()});else if(d!=="manual"){const g=d===ma?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),E=d===ma?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");x.on(this._element,g,this._config.selector,T=>{const S=this._initializeOnDelegatedTarget(T);S._activeTrigger[T.type==="focusin"?Id:ma]=!0,S._enter()}),x.on(this._element,E,this._config.selector,T=>{const S=this._initializeOnDelegatedTarget(T);S._activeTrigger[T.type==="focusout"?Id:ma]=S._element.contains(T.relatedTarget),S._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},x.on(this._element.closest(sy),iy,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,d){clearTimeout(this._timeout),this._timeout=setTimeout(c,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const d=Gt.getDataAttributes(this._element);for(const g of Object.keys(d))FR.has(g)&&delete d[g];return c={...d,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:l(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[d,g]of Object.entries(this._config))this.constructor.Default[d]!==g&&(c[d]=g);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const d=tr.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0)throw new TypeError(`No method named "${c}"`);d[c]()}})}}O(tr);const BR={...tr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},HR={...tr.DefaultType,content:"(null|string|element|function)"};class Tc extends tr{static get Default(){return BR}static get DefaultType(){return HR}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const d=Tc.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0)throw new TypeError(`No method named "${c}"`);d[c]()}})}}O(Tc);const Ad=".bs.scrollspy",WR=`activate${Ad}`,ry=`click${Ad}`,qR=`load${Ad}.data-api`,oo="active",Cd="[href]",oy=".nav-link",zR=`${oy}, .nav-item > ${oy}, .list-group-item`,KR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},GR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ga extends Je{constructor(c,d){super(c,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return KR}static get DefaultType(){return GR}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=l(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(d=>Number.parseFloat(d))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(x.off(this._config.target,ry),x.on(this._config.target,ry,Cd,c=>{const d=this._observableSections.get(c.target.hash);if(d){c.preventDefault();const g=this._rootElement||window,E=d.offsetTop-this._element.offsetTop;if(g.scrollTo)return void g.scrollTo({top:E,behavior:"smooth"});g.scrollTop=E}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),c)}_observerCallback(c){const d=S=>this._targetLinks.get(`#${S.target.id}`),g=S=>{this._previousScrollData.visibleEntryTop=S.target.offsetTop,this._process(d(S))},E=(this._rootElement||document.documentElement).scrollTop,T=E>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=E;for(const S of c){if(!S.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(S));continue}const L=S.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(T&&L){if(g(S),!E)return}else T||L||g(S)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=R.find(Cd,this._config.target);for(const d of c){if(!d.hash||h(d))continue;const g=R.findOne(decodeURI(d.hash),this._element);u(g)&&(this._targetLinks.set(decodeURI(d.hash),d),this._observableSections.set(d.hash,g))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(oo),this._activateParents(c),x.trigger(this._element,WR,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))R.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(oo);else for(const d of R.parents(c,".nav, .list-group"))for(const g of R.prev(d,zR))g.classList.add(oo)}_clearActiveClass(c){c.classList.remove(oo);const d=R.find(`${Cd}.${oo}`,c);for(const g of d)g.classList.remove(oo)}static jQueryInterface(c){return this.each(function(){const d=ga.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}x.on(window,qR,()=>{for(const p of R.find('[data-bs-spy="scroll"]'))ga.getOrCreateInstance(p)}),O(ga);const nr=".bs.tab",QR=`hide${nr}`,YR=`hidden${nr}`,XR=`show${nr}`,JR=`shown${nr}`,ZR=`click${nr}`,eP=`keydown${nr}`,tP=`load${nr}`,nP="ArrowLeft",ay="ArrowRight",sP="ArrowUp",ly="ArrowDown",Sd="Home",cy="End",sr="active",uy="fade",Rd="show",hy=".dropdown-toggle",Pd=`:not(${hy})`,dy='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',kd=`.nav-link${Pd}, .list-group-item${Pd}, [role="tab"]${Pd}, ${dy}`,iP=`.${sr}[data-bs-toggle="tab"], .${sr}[data-bs-toggle="pill"], .${sr}[data-bs-toggle="list"]`;class ir extends Je{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),x.on(this._element,eP,d=>this._keydown(d)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const d=this._getActiveElem(),g=d?x.trigger(d,QR,{relatedTarget:c}):null;x.trigger(c,XR,{relatedTarget:d}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(d,c),this._activate(c,d))}_activate(c,d){c&&(c.classList.add(sr),this._activate(R.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),x.trigger(c,JR,{relatedTarget:d})):c.classList.add(Rd)},c,c.classList.contains(uy)))}_deactivate(c,d){c&&(c.classList.remove(sr),c.blur(),this._deactivate(R.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),x.trigger(c,YR,{relatedTarget:d})):c.classList.remove(Rd)},c,c.classList.contains(uy)))}_keydown(c){if(![nP,ay,sP,ly,Sd,cy].includes(c.key))return;c.stopPropagation(),c.preventDefault();const d=this._getChildren().filter(E=>!h(E));let g;if([Sd,cy].includes(c.key))g=d[c.key===Sd?0:d.length-1];else{const E=[ay,ly].includes(c.key);g=J(d,c.target,E,!0)}g&&(g.focus({preventScroll:!0}),ir.getOrCreateInstance(g).show())}_getChildren(){return R.find(kd,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,d){this._setAttributeIfNotExists(c,"role","tablist");for(const g of d)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const d=this._elemIsActive(c),g=this._getOuterElement(c);c.setAttribute("aria-selected",d),g!==c&&this._setAttributeIfNotExists(g,"role","presentation"),d||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const d=R.getElementFromSelector(c);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,d){const g=this._getOuterElement(c);if(!g.classList.contains("dropdown"))return;const E=(T,S)=>{const L=R.findOne(T,g);L&&L.classList.toggle(S,d)};E(hy,sr),E(".dropdown-menu",Rd),g.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(c,d,g){c.hasAttribute(d)||c.setAttribute(d,g)}_elemIsActive(c){return c.classList.contains(sr)}_getInnerElement(c){return c.matches(kd)?c:R.findOne(kd,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const d=ir.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}x.on(document,ZR,dy,function(p){["A","AREA"].includes(this.tagName)&&p.preventDefault(),h(this)||ir.getOrCreateInstance(this).show()}),x.on(window,tP,()=>{for(const p of R.find(iP))ir.getOrCreateInstance(p)}),O(ir);const mi=".bs.toast",rP=`mouseover${mi}`,oP=`mouseout${mi}`,aP=`focusin${mi}`,lP=`focusout${mi}`,cP=`hide${mi}`,uP=`hidden${mi}`,hP=`show${mi}`,dP=`shown${mi}`,fy="hide",bc="show",Ic="showing",fP={animation:"boolean",autohide:"boolean",delay:"number"},pP={animation:!0,autohide:!0,delay:5e3};class _a extends Je{constructor(c,d){super(c,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return pP}static get DefaultType(){return fP}static get NAME(){return"toast"}show(){x.trigger(this._element,hP).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(fy),_(this._element),this._element.classList.add(bc,Ic),this._queueCallback(()=>{this._element.classList.remove(Ic),x.trigger(this._element,dP),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(x.trigger(this._element,cP).defaultPrevented||(this._element.classList.add(Ic),this._queueCallback(()=>{this._element.classList.add(fy),this._element.classList.remove(Ic,bc),x.trigger(this._element,uP)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(bc),super.dispose()}isShown(){return this._element.classList.contains(bc)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,d){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=d;break;case"focusin":case"focusout":this._hasKeyboardInteraction=d}if(d)return void this._clearTimeout();const g=c.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){x.on(this._element,rP,c=>this._onInteraction(c,!0)),x.on(this._element,oP,c=>this._onInteraction(c,!1)),x.on(this._element,aP,c=>this._onInteraction(c,!0)),x.on(this._element,lP,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const d=_a.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0)throw new TypeError(`No method named "${c}"`);d[c](this)}})}}return q(_a),O(_a),{Alert:y,Button:A,Carousel:Qr,Collapse:Xr,Dropdown:ns,Modal:er,Offcanvas:Gs,Popover:Tc,ScrollSpy:ga,Tab:ir,Toast:_a,Tooltip:tr}})})(Sq);const Yg=$1(Aq);Yg.use(q1());Yg.use(bS);Yg.mount("#app");
