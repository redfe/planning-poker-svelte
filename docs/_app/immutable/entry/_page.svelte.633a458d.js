import{J as Br,S as Ue,i as Be,s as $e,k as P,q as ye,l as F,m as V,r as ve,h as C,n as I,K as ft,L as bt,b as X,G as R,M as Re,N as Bi,u as qt,H as B,O as $i,P as ju,Q as ji,a as _e,c as be,v as At,R as qu,f as kt,g as U,d as K,y as Oe,z as Le,A as Me,T as aa,U as $r,B as xe,V as zu,W as Hu,X as ca,Y as Ku,Z as jr,e as Wn,_ as qr,$ as zr,a0 as Hr,a1 as Kr,p as Gr,a2 as Gu,a3 as Qu,a4 as Wu,a5 as Yu,I as Qr}from"../chunks/index.2a5a61f6.js";import{w as ua}from"../chunks/index.87536d91.js";/**
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
 */const la=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(la(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Ju;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ju extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zu=function(t){const e=la(t);return ha.encodeByteArray(e,!0)},Yn=function(t){return Zu(t).replace(/\./g,"")},el=function(t){try{return ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nl=()=>tl().__FIREBASE_DEFAULTS__,sl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},il=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},da=()=>{try{return nl()||sl()||il()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rl=t=>{var e,n;return(n=(e=da())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ol=t=>{const e=rl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},al=()=>{var t;return(t=da())===null||t===void 0?void 0:t.config};/**
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
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ul(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yn(JSON.stringify(n)),Yn(JSON.stringify(o)),a].join(".")}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function hl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const dl="FirebaseError";class zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=dl,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?fl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,s)}}function fl(t,e){return t.replace(ml,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ml=/\{\$([^}]+)}/g;function ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Wr(r)&&Wr(o)){if(!ui(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wr(t){return t!==null&&typeof t=="object"}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const at="[DEFAULT]";/**
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
 */class gl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yl(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pl(t){return t===at?void 0:t}function yl(t){return t.instantiationMode==="EAGER"}/**
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
 */class vl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const wl={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},El=M.INFO,Tl={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},_l=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Tl[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=El,this._logHandler=_l,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const bl=(t,e)=>e.some(n=>t instanceof n);let Yr,Xr;function Cl(){return Yr||(Yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Il(){return Xr||(Xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ga=new WeakMap,li=new WeakMap,pa=new WeakMap,Ks=new WeakMap,qi=new WeakMap;function Sl(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Xe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ga.set(n,t)}).catch(()=>{}),qi.set(e,t),e}function Dl(t){if(li.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});li.set(t,e)}let hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Al(t){hi=t(hi)}function kl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gs(this),e,...n);return pa.set(s,e.sort?e.sort():[e]),Xe(s)}:Il().includes(t)?function(...e){return t.apply(Gs(this),e),Xe(ga.get(this))}:function(...e){return Xe(t.apply(Gs(this),e))}}function Nl(t){return typeof t=="function"?kl(t):(t instanceof IDBTransaction&&Dl(t),bl(t,Cl())?new Proxy(t,hi):t)}function Xe(t){if(t instanceof IDBRequest)return Sl(t);if(Ks.has(t))return Ks.get(t);const e=Nl(t);return e!==t&&(Ks.set(t,e),qi.set(e,t)),e}const Gs=t=>qi.get(t);function Rl(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Xe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xe(o.result),c.oldVersion,c.newVersion,Xe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ol=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],Qs=new Map;function Jr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qs.get(e))return Qs.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ll.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ol.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Qs.set(e,r),r}Al(t=>({...t,get:(e,n,s)=>Jr(e,n)||t.get(e,n,s),has:(e,n)=>!!Jr(e,n)||t.has(e,n)}));/**
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
 */class Ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Zr="0.9.7";/**
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
 */const mt=new ma("@firebase/app"),Pl="@firebase/app-compat",Fl="@firebase/analytics-compat",Vl="@firebase/analytics",Ul="@firebase/app-check-compat",Bl="@firebase/app-check",$l="@firebase/auth",jl="@firebase/auth-compat",ql="@firebase/database",zl="@firebase/database-compat",Hl="@firebase/functions",Kl="@firebase/functions-compat",Gl="@firebase/installations",Ql="@firebase/installations-compat",Wl="@firebase/messaging",Yl="@firebase/messaging-compat",Xl="@firebase/performance",Jl="@firebase/performance-compat",Zl="@firebase/remote-config",eh="@firebase/remote-config-compat",th="@firebase/storage",nh="@firebase/storage-compat",sh="@firebase/firestore",ih="@firebase/firestore-compat",rh="firebase",oh="9.19.1";/**
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
 */const fi="[DEFAULT]",ah={[di]:"fire-core",[Pl]:"fire-core-compat",[Vl]:"fire-analytics",[Fl]:"fire-analytics-compat",[Bl]:"fire-app-check",[Ul]:"fire-app-check-compat",[$l]:"fire-auth",[jl]:"fire-auth-compat",[ql]:"fire-rtdb",[zl]:"fire-rtdb-compat",[Hl]:"fire-fn",[Kl]:"fire-fn-compat",[Gl]:"fire-iid",[Ql]:"fire-iid-compat",[Wl]:"fire-fcm",[Yl]:"fire-fcm-compat",[Xl]:"fire-perf",[Jl]:"fire-perf-compat",[Zl]:"fire-rc",[eh]:"fire-rc-compat",[th]:"fire-gcs",[nh]:"fire-gcs-compat",[sh]:"fire-fst",[ih]:"fire-fst-compat","fire-js":"fire-js",[rh]:"fire-js-all"};/**
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
 */const Xn=new Map,mi=new Map;function ch(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(mi.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of Xn.values())ch(n,t);return!0}function uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new fa("app","Firebase",lh);/**
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
 */class hh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
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
 */const dh=oh;function ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Je.create("bad-app-name",{appName:String(i)});if(n||(n=al()),!n)throw Je.create("no-options");const r=Xn.get(i);if(r){if(ui(n,r.options)&&ui(s,r.config))return r;throw Je.create("duplicate-app",{appName:i})}const o=new vl(i);for(const c of mi.values())o.addComponent(c);const a=new hh(n,s,o);return Xn.set(i,a),a}function fh(t=fi){const e=Xn.get(t);if(!e&&t===fi)return ya();if(!e)throw Je.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=(s=ah[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}Jn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",gh=1,ln="firebase-heartbeat-store";let Ws=null;function va(){return Ws||(Ws=Rl(mh,gh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ln)}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),Ws}async function ph(t){try{return(await va()).transaction(ln).objectStore(ln).get(wa(t))}catch(e){if(e instanceof zt)mt.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(n.message)}}}async function eo(t,e){try{const s=(await va()).transaction(ln,"readwrite");return await s.objectStore(ln).put(e,wa(t)),s.done}catch(n){if(n instanceof zt)mt.warn(n.message);else{const s=Je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(s.message)}}}function wa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yh=1024,vh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Th(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=to();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=to(),{heartbeatsToSend:n,unsentEntries:s}=Eh(this._heartbeatsCache.heartbeats),i=Yn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function to(){return new Date().toISOString().substring(0,10)}function Eh(t,e=yh){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),no(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),no(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?hl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ph(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function no(t){return Yn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _h(t){Jn(new un("platform-logger",e=>new Ml(e),"PRIVATE")),Jn(new un("heartbeat",e=>new wh(e),"PRIVATE")),Nt(di,Zr,t),Nt(di,Zr,"esm2017"),Nt("fire-js","")}_h("");var bh="firebase",Ch="9.19.1";/**
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
 */Nt(bh,Ch,"app");var Ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,zi=zi||{},A=Ih||self;function Zn(){}function gs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function En(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Sh(t){return Object.prototype.hasOwnProperty.call(t,Ys)&&t[Ys]||(t[Ys]=++Dh)}var Ys="closure_uid_"+(1e9*Math.random()>>>0),Dh=0;function Ah(t,e,n){return t.call.apply(t.bind,arguments)}function kh(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?fe=Ah:fe=kh,fe.apply(null,arguments)}function Pn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function it(){this.s=this.s,this.o=this.o}var Nh=0;it.prototype.s=!1;it.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Nh!=0)&&Sh(this)};it.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ea=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hi(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function so(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(gs(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Rh=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{A.addEventListener("test",Zn,e),A.removeEventListener("test",Zn,e)}catch{}return t}();function es(t){return/^[\s\xa0]*$/.test(t)}var io=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xs(t,e){return t<e?-1:t>e?1:0}function ps(){var t=A.navigator;return t&&(t=t.userAgent)?t:""}function Ne(t){return ps().indexOf(t)!=-1}function Ki(t){return Ki[" "](t),t}Ki[" "]=Zn;function Oh(t){var e=xh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Lh=Ne("Opera"),Lt=Ne("Trident")||Ne("MSIE"),Ta=Ne("Edge"),gi=Ta||Lt,_a=Ne("Gecko")&&!(ps().toLowerCase().indexOf("webkit")!=-1&&!Ne("Edge"))&&!(Ne("Trident")||Ne("MSIE"))&&!Ne("Edge"),Mh=ps().toLowerCase().indexOf("webkit")!=-1&&!Ne("Edge");function ba(){var t=A.document;return t?t.documentMode:void 0}var ts;e:{var Js="",Zs=function(){var t=ps();if(_a)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ta)return/Edge\/([\d\.]+)/.exec(t);if(Lt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Mh)return/WebKit\/(\S+)/.exec(t);if(Lh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zs&&(Js=Zs?Zs[1]:""),Lt){var ei=ba();if(ei!=null&&ei>parseFloat(Js)){ts=String(ei);break e}}ts=Js}var xh={};function Ph(){return Oh(function(){let t=0;const e=io(String(ts)).split("."),n=io("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Xs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Xs(i[2].length==0,r[2].length==0)||Xs(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var pi;if(A.document&&Lt){var ro=ba();pi=ro||parseInt(ts,10)||void 0}else pi=void 0;var Fh=pi;function hn(t,e){if(me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_a){e:{try{Ki(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hn.X.h.call(this)}}ce(hn,me);var Vh={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),Uh=0;function Bh(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Uh,this.ba=this.ea=!1}function ys(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ca(t){const e={};for(const n in t)e[n]=t[n];return e}const oo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ia(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<oo.length;r++)n=oo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function vs(t){this.src=t,this.g={},this.h=0}vs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=vi(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Bh(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function yi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ea(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ys(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Qi="closure_lm_"+(1e6*Math.random()|0),ti={};function Sa(t,e,n,s,i){if(s&&s.once)return Aa(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Sa(t,e[r],n,s,i);return null}return n=Xi(n),t&&t[Tn]?t.N(e,n,En(s)?!!s.capture:!!s,i):Da(t,e,n,!1,s,i)}function Da(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=En(i)?!!i.capture:!!i,a=Yi(t);if(a||(t[Qi]=a=new vs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=$h(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Rh||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Na(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $h(){function t(n){return e.call(t.src,t.listener,n)}const e=jh;return t}function Aa(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Aa(t,e[r],n,s,i);return null}return n=Xi(n),t&&t[Tn]?t.O(e,n,En(s)?!!s.capture:!!s,i):Da(t,e,n,!0,s,i)}function ka(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ka(t,e[r],n,s,i);else s=En(s)?!!s.capture:!!s,n=Xi(n),t&&t[Tn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=vi(r,n,s,i),-1<n&&(ys(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vi(e,n,s,i)),(n=-1<t?e[t]:null)&&Wi(n))}function Wi(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Tn])yi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Na(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Yi(e))?(yi(n,t),n.h==0&&(n.src=null,e[Qi]=null)):ys(t)}}}function Na(t){return t in ti?ti[t]:ti[t]="on"+t}function jh(t,e){if(t.ba)t=!0;else{e=new hn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Wi(t),t=n.call(s,e)}return t}function Yi(t){return t=t[Qi],t instanceof vs?t:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(t){return typeof t=="function"?t:(t[ni]||(t[ni]=function(e){return t.handleEvent(e)}),t[ni])}function ne(){it.call(this),this.i=new vs(this),this.P=this,this.I=null}ce(ne,it);ne.prototype[Tn]=!0;ne.prototype.removeEventListener=function(t,e,n,s){ka(this,t,e,n,s)};function ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new me(e,t);else if(e instanceof me)e.target=e.target||t;else{var i=e;e=new me(s,t),Ia(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Fn(o,s,!0,e)&&i}if(o=e.g=t,i=Fn(o,s,!0,e)&&i,i=Fn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Fn(o,s,!1,e)&&i}ne.prototype.M=function(){if(ne.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ys(n[s]);delete t.g[e],t.h--}}this.I=null};ne.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ne.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Fn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&yi(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ji=A.JSON.stringify;function qh(){var t=La;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zh{constructor(){this.h=this.g=null}add(e,n){const s=Ra.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ra=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Hh,t=>t.reset());class Hh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kh(t){A.setTimeout(()=>{throw t},0)}function Oa(t,e){wi||Gh(),Ei||(wi(),Ei=!0),La.add(t,e)}var wi;function Gh(){var t=A.Promise.resolve(void 0);wi=function(){t.then(Qh)}}var Ei=!1,La=new zh;function Qh(){for(var t;t=qh();){try{t.h.call(t.g)}catch(n){Kh(n)}var e=Ra;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ei=!1}function ws(t,e){ne.call(this),this.h=t||1,this.g=e||A,this.j=fe(this.lb,this),this.l=Date.now()}ce(ws,ne);E=ws.prototype;E.ca=!1;E.R=null;E.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ae(this,"tick"),this.ca&&(Zi(this),this.start()))}};E.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zi(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}E.M=function(){ws.X.M.call(this),Zi(this),delete this.g};function er(t,e,n){if(typeof t=="function")n&&(t=fe(t,n));else if(t&&typeof t.handleEvent=="function")t=fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(t,e||0)}function Ma(t){t.g=er(()=>{t.g=null,t.i&&(t.i=!1,Ma(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Wh extends it{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ma(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(t){it.call(this),this.h=t,this.g={}}ce(dn,it);var ao=[];function xa(t,e,n,s){Array.isArray(n)||(n&&(ao[0]=n.toString()),n=ao);for(var i=0;i<n.length;i++){var r=Sa(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Pa(t){Gi(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wi(e)},t),t.g={}}dn.prototype.M=function(){dn.X.M.call(this),Pa(this)};dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Es(){this.g=!0}Es.prototype.Aa=function(){this.g=!1};function Yh(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Xh(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function St(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Zh(t,n)+(s?" "+s:"")})}function Jh(t,e){t.info(function(){return"TIMEOUT: "+e})}Es.prototype.info=function(){};function Zh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ji(n)}catch{return e}}var vt={},co=null;function Ts(){return co=co||new ne}vt.Pa="serverreachability";function Fa(t){me.call(this,vt.Pa,t)}ce(Fa,me);function fn(t){const e=Ts();ae(e,new Fa(e))}vt.STAT_EVENT="statevent";function Va(t,e){me.call(this,vt.STAT_EVENT,t),this.stat=e}ce(Va,me);function we(t){const e=Ts();ae(e,new Va(e,t))}vt.Qa="timingevent";function Ua(t,e){me.call(this,vt.Qa,t),this.size=e}ce(Ua,me);function _n(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){t()},e)}var _s={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ba={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function tr(){}tr.prototype.h=null;function uo(t){return t.h||(t.h=t.i())}function $a(){}var bn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function nr(){me.call(this,"d")}ce(nr,me);function sr(){me.call(this,"c")}ce(sr,me);var Ti;function bs(){}ce(bs,tr);bs.prototype.g=function(){return new XMLHttpRequest};bs.prototype.i=function(){return{}};Ti=new bs;function Cn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new dn(this),this.O=ed,t=gi?125:void 0,this.T=new ws(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ja}function ja(){this.i=null,this.g="",this.h=!1}var ed=45e3,_i={},ns={};E=Cn.prototype;E.setTimeout=function(t){this.O=t};function bi(t,e,n){t.K=1,t.v=Is(Ke(e)),t.s=n,t.P=!0,qa(t,null)}function qa(t,e){t.F=Date.now(),In(t),t.A=Ke(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Xa(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ja,t.g=vc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Wh(fe(t.La,t,t.g),t.N)),xa(t.S,t.g,"readystatechange",t.ib),e=t.H?Ca(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fn(),Yh(t.j,t.u,t.A,t.m,t.U,t.s)}E.ib=function(t){t=t.target;const e=this.L;e&&ze(t)==3?e.l():this.La(t)};E.La=function(t){try{if(t==this.g)e:{const l=ze(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||gi||this.g&&(this.h.h||this.g.fa()||mo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?fn(3):fn(2)),Cs(this);var n=this.g.aa();this.Y=n;t:if(za(this)){var s=mo(this.g);t="";var i=s.length,r=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ct(this),nn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Xh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!es(a)){var u=a;break t}}u=null}if(n=u)St(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ci(this,n);else{this.i=!1,this.o=3,we(12),ct(this),nn(this);break e}}this.P?(Ha(this,l,o),gi&&this.i&&l==3&&(xa(this.S,this.T,"tick",this.hb),this.T.start())):(St(this.j,this.m,o,null),Ci(this,o)),l==4&&ct(this),this.i&&!this.I&&(l==4?mc(this.l,this):(this.i=!1,In(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),ct(this),nn(this)}}}catch{}finally{}};function za(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ha(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=td(t,n),i==ns){e==4&&(t.o=4,we(14),s=!1),St(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_i){t.o=4,we(15),St(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else St(t.j,t.m,i,null),Ci(t,i);za(t)&&i!=ns&&i!=_i&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.K=!0,we(11))):(St(t.j,t.m,n,"[Invalid Chunked Response]"),ct(t),nn(t))}E.hb=function(){if(this.g){var t=ze(this.g),e=this.g.fa();this.C<e.length&&(Cs(this),Ha(this,t,e),this.i&&t!=4&&In(this))}};function td(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ns:(n=Number(e.substring(n,s)),isNaN(n)?_i:(s+=1,s+n>e.length?ns:(e=e.substr(s,n),t.C=s+n,e)))}E.cancel=function(){this.I=!0,ct(this)};function In(t){t.V=Date.now()+t.O,Ka(t,t.O)}function Ka(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_n(fe(t.gb,t),e)}function Cs(t){t.B&&(A.clearTimeout(t.B),t.B=null)}E.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Jh(this.j,this.A),this.K!=2&&(fn(),we(17)),ct(this),this.o=2,nn(this)):Ka(this,this.V-t)};function nn(t){t.l.G==0||t.I||mc(t.l,t)}function ct(t){Cs(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zi(t.T),Pa(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ci(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ii(n.h,t))){if(!t.J&&Ii(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rs(n),As(n);else break e;ur(n),we(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_n(fe(n.cb,n),6e3));if(1>=ec(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ut(n,11)}else if((t.J||n.g==t)&&rs(n),!es(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ir(r,r.h),r.h=null))}if(s.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,q(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=yc(s,s.H?s.ka:null,s.V),o.J){tc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Cs(a),In(a)),s.g=o}else dc(s);0<n.i.length&&ks(n)}else u[0]!="stop"&&u[0]!="close"||ut(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ut(n,7):cr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}fn(4)}catch{}}function nd(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sd(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ga(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sd(t),s=nd(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ht(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ht){this.h=e!==void 0?e:t.h,ss(this,t.j),this.s=t.s,this.g=t.g,is(this,t.m),this.l=t.l,e=t.i;var n=new mn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),lo(this,n),this.o=t.o}else t&&(n=String(t).match(Qa))?(this.h=!!e,ss(this,n[1]||"",!0),this.s=Jt(n[2]||""),this.g=Jt(n[3]||"",!0),is(this,n[4]),this.l=Jt(n[5]||"",!0),lo(this,n[6]||"",!0),this.o=Jt(n[7]||"")):(this.h=!!e,this.i=new mn(null,this.h))}ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zt(e,ho,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zt(e,ho,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zt(n,n.charAt(0)=="/"?ad:od,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zt(n,ud)),t.join("")};function Ke(t){return new ht(t)}function ss(t,e,n){t.j=n?Jt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lo(t,e,n){e instanceof mn?(t.i=e,ld(t.i,t.h)):(n||(e=Zt(e,cd)),t.i=new mn(e,t.h))}function q(t,e,n){t.i.set(e,n)}function Is(t){return q(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ho=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,cd=/[#\?@]/g,ud=/#/g;function mn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rt(t){t.g||(t.g=new Map,t.h=0,t.i&&id(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}E=mn.prototype;E.add=function(t,e){rt(this),this.i=null,t=Ht(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wa(t,e){rt(t),e=Ht(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ya(t,e){return rt(t),e=Ht(t,e),t.g.has(e)}E.forEach=function(t,e){rt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};E.oa=function(){rt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};E.W=function(t){rt(this);let e=[];if(typeof t=="string")Ya(this,t)&&(e=e.concat(this.g.get(Ht(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};E.set=function(t,e){return rt(this),this.i=null,t=Ht(this,t),Ya(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};E.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Xa(t,e,n){Wa(t,e),0<n.length&&(t.i=null,t.g.set(Ht(t,e),Hi(n)),t.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ht(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ld(t,e){e&&!t.j&&(rt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Wa(this,s),Xa(this,i,n))},t)),t.j=e}var hd=class{constructor(e,n){this.h=e,this.g=n}};function Ja(t){this.l=t||dd,A.PerformanceNavigationTiming?(t=A.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dd=10;function Za(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ec(t){return t.h?1:t.g?t.g.size:0}function Ii(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ir(t,e){t.g?t.g.add(e):t.h=e}function tc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ja.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hi(t.i)}function rr(){}rr.prototype.stringify=function(t){return A.JSON.stringify(t,void 0)};rr.prototype.parse=function(t){return A.JSON.parse(t,void 0)};function fd(){this.g=new rr}function md(t,e,n){const s=n||"";try{Ga(t,function(i,r){let o=i;En(i)&&(o=Ji(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function gd(t,e){const n=new Es;if(A.Image){const s=new Image;s.onload=Pn(Vn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Pn(Vn,n,s,"TestLoadImage: error",!1,e),s.onabort=Pn(Vn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Pn(Vn,n,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Vn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Sn(t){this.l=t.ac||null,this.j=t.jb||!1}ce(Sn,tr);Sn.prototype.g=function(){return new Ss(this.l,this.j)};Sn.prototype.i=function(t){return function(){return t}}({});function Ss(t,e){ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=or,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Ss,ne);var or=0;E=Ss.prototype;E.open=function(t,e){if(this.readyState!=or)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gn(this)};E.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||A).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=or};E.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sc(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function sc(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}E.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):gn(this),this.readyState==3&&sc(this)}};E.Va=function(t){this.g&&(this.response=this.responseText=t,Dn(this))};E.Ua=function(t){this.g&&(this.response=t,Dn(this))};E.ga=function(){this.g&&Dn(this)};function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gn(t)}E.setRequestHeader=function(t,e){this.v.append(t,e)};E.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pd=A.JSON.parse;function G(t){ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ic,this.K=this.L=!1}ce(G,ne);var ic="",yd=/^https?$/i,vd=["POST","PUT"];E=G.prototype;E.Ka=function(t){this.L=t};E.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ti.g(),this.C=this.u?uo(this.u):uo(Ti),this.g.onreadystatechange=fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){fo(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=A.FormData&&t instanceof A.FormData,!(0<=Ea(vd,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ac(this),0<this.B&&((this.K=wd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fe(this.qa,this)):this.A=er(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){fo(this,r)}};function wd(t){return Lt&&Ph()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}E.qa=function(){typeof zi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ae(this,"timeout"),this.abort(8))};function fo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rc(t),Ds(t)}function rc(t){t.D||(t.D=!0,ae(t,"complete"),ae(t,"error"))}E.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ae(this,"complete"),ae(this,"abort"),Ds(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ds(this,!0)),G.X.M.call(this)};E.Ha=function(){this.s||(this.F||this.v||this.l?oc(this):this.fb())};E.fb=function(){oc(this)};function oc(t){if(t.h&&typeof zi<"u"&&(!t.C[1]||ze(t)!=4||t.aa()!=2)){if(t.v&&ze(t)==4)er(t.Ha,0,t);else if(ae(t,"readystatechange"),ze(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Qa)[1]||null;if(!i&&A.self&&A.self.location){var r=A.self.location.protocol;i=r.substr(0,r.length-1)}s=!yd.test(i?i.toLowerCase():"")}n=s}if(n)ae(t,"complete"),ae(t,"success");else{t.m=6;try{var o=2<ze(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",rc(t)}}finally{Ds(t)}}}}function Ds(t,e){if(t.g){ac(t);const n=t.g,s=t.C[0]?Zn:null;t.g=null,t.C=null,e||ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function ac(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(A.clearTimeout(t.A),t.A=null)}function ze(t){return t.g?t.g.readyState:0}E.aa=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}};E.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pd(e)}};function mo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ic:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}E.Ea=function(){return this.m};E.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cc(t){let e="";return Gi(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ar(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=cc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):q(t,e,n))}function Xt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uc(t){this.Ca=0,this.i=[],this.j=new Es,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xt("baseRetryDelayMs",5e3,t),this.bb=Xt("retryDelaySeedMs",1e4,t),this.$a=Xt("forwardChannelMaxRetries",2,t),this.ta=Xt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ja(t&&t.concurrentRequestLimit),this.Fa=new fd,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}E=uc.prototype;E.ma=8;E.G=1;function cr(t){if(lc(t),t.G==3){var e=t.U++,n=Ke(t.F);q(n,"SID",t.I),q(n,"RID",e),q(n,"TYPE","terminate"),An(t,n),e=new Cn(t,t.j,e,void 0),e.K=2,e.v=Is(Ke(n)),n=!1,A.navigator&&A.navigator.sendBeacon&&(n=A.navigator.sendBeacon(e.v.toString(),"")),!n&&A.Image&&(new Image().src=e.v,n=!0),n||(e.g=vc(e.l,null),e.g.da(e.v)),e.F=Date.now(),In(e)}pc(t)}function As(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function lc(t){As(t),t.u&&(A.clearTimeout(t.u),t.u=null),rs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&A.clearTimeout(t.m),t.m=null)}function ks(t){Za(t.h)||t.m||(t.m=!0,Oa(t.Ja,t),t.C=0)}function Ed(t,e){return ec(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=_n(fe(t.Ja,t,e),gc(t,t.C)),t.C++,!0)}E.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Cn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ca(r),Ia(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hc(this,i,e),n=Ke(this.F),q(n,"RID",t),q(n,"CVER",22),this.D&&q(n,"X-HTTP-Session-Id",this.D),An(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(cc(r)))+"&"+e:this.o&&ar(n,this.o,r)),ir(this.h,i),this.Ya&&q(n,"TYPE","init"),this.O?(q(n,"$req",e),q(n,"SID","null"),i.Z=!0,bi(i,n,null)):bi(i,n,e),this.G=2}}else this.G==3&&(t?go(this,t):this.i.length==0||Za(this.h)||go(this))};function go(t,e){var n;e?n=e.m:n=t.U++;const s=Ke(t.F);q(s,"SID",t.I),q(s,"RID",n),q(s,"AID",t.T),An(t,s),t.o&&t.s&&ar(s,t.o,t.s),n=new Cn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=hc(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ir(t.h,n),bi(n,s,e)}function An(t,e){t.ia&&Gi(t.ia,function(n,s){q(e,s,n)}),t.l&&Ga({},function(n,s){q(e,s,n)})}function hc(t,e,n){n=Math.min(t.i.length,n);var s=t.l?fe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{md(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function dc(t){t.g||t.u||(t.Z=1,Oa(t.Ia,t),t.A=0)}function ur(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=_n(fe(t.Ia,t),gc(t,t.A)),t.A++,!0)}E.Ia=function(){if(this.u=null,fc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=_n(fe(this.eb,this),t)}};E.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,we(10),As(this),fc(this))};function lr(t){t.B!=null&&(A.clearTimeout(t.B),t.B=null)}function fc(t){t.g=new Cn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ke(t.sa);q(e,"RID","rpc"),q(e,"SID",t.I),q(e,"CI",t.L?"0":"1"),q(e,"AID",t.T),q(e,"TYPE","xmlhttp"),An(t,e),t.o&&t.s&&ar(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Is(Ke(e)),n.s=null,n.P=!0,qa(n,t)}E.cb=function(){this.v!=null&&(this.v=null,As(this),ur(this),we(19))};function rs(t){t.v!=null&&(A.clearTimeout(t.v),t.v=null)}function mc(t,e){var n=null;if(t.g==e){rs(t),lr(t),t.g=null;var s=2}else if(Ii(t.h,e))n=e.D,tc(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ts(),ae(s,new Ua(s,n)),ks(t)}else dc(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ed(t,e)||s==2&&ur(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ut(t,5);break;case 4:ut(t,10);break;case 3:ut(t,6);break;default:ut(t,2)}}}function gc(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ut(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=fe(t.kb,t);n||(n=new ht("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||ss(n,"https"),Is(n)),gd(n.toString(),s)}else we(2);t.G=0,t.l&&t.l.va(e),pc(t),lc(t)}E.kb=function(t){t?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function pc(t){if(t.G=0,t.la=[],t.l){const e=nc(t.h);(e.length!=0||t.i.length!=0)&&(so(t.la,e),so(t.la,t.i),t.h.i.length=0,Hi(t.i),t.i.length=0),t.l.ua()}}function yc(t,e,n){var s=n instanceof ht?Ke(n):new ht(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),is(s,s.m);else{var i=A.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ht(null,void 0);s&&ss(r,s),e&&(r.g=e),i&&is(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&q(s,n,e),q(s,"VER",t.ma),An(t,s),s}function vc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new G(new Sn({jb:!0})):new G(t.ra),e.Ka(t.H),e}function wc(){}E=wc.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Ra=function(){};function os(){if(Lt&&!(10<=Number(Fh)))throw Error("Environmental error: no available transport.")}os.prototype.g=function(t,e){return new Ie(t,e)};function Ie(t,e){ne.call(this),this.g=new uc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!es(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!es(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Kt(this)}ce(Ie,ne);Ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=yc(t,null,t.V),ks(t)};Ie.prototype.close=function(){cr(this.g)};Ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ji(t),t=n);e.i.push(new hd(e.ab++,t)),e.G==3&&ks(e)};Ie.prototype.M=function(){this.g.l=null,delete this.j,cr(this.g),delete this.g,Ie.X.M.call(this)};function Ec(t){nr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ce(Ec,nr);function Tc(){sr.call(this),this.status=1}ce(Tc,sr);function Kt(t){this.g=t}ce(Kt,wc);Kt.prototype.xa=function(){ae(this.g,"a")};Kt.prototype.wa=function(t){ae(this.g,new Ec(t))};Kt.prototype.va=function(t){ae(this.g,new Tc)};Kt.prototype.ua=function(){ae(this.g,"b")};os.prototype.createWebChannel=os.prototype.g;Ie.prototype.send=Ie.prototype.u;Ie.prototype.open=Ie.prototype.m;Ie.prototype.close=Ie.prototype.close;_s.NO_ERROR=0;_s.TIMEOUT=8;_s.HTTP_ERROR=6;Ba.COMPLETE="complete";$a.EventType=bn;bn.OPEN="a";bn.CLOSE="b";bn.ERROR="c";bn.MESSAGE="d";ne.prototype.listen=ne.prototype.N;G.prototype.listenOnce=G.prototype.O;G.prototype.getLastError=G.prototype.Oa;G.prototype.getLastErrorCode=G.prototype.Ea;G.prototype.getStatus=G.prototype.aa;G.prototype.getResponseJson=G.prototype.Sa;G.prototype.getResponseText=G.prototype.fa;G.prototype.send=G.prototype.da;G.prototype.setWithCredentials=G.prototype.Ka;var Td=function(){return new os},_d=function(){return Ts()},si=_s,bd=Ba,Cd=vt,po={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Id=Sn,Un=$a,Sd=G;const yo="@firebase/firestore";/**
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
 */class le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");/**
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
 */let Gt="9.19.0";/**
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
 */const gt=new ma("@firebase/firestore");function vo(){return gt.logLevel}function T(t,...e){if(gt.logLevel<=M.DEBUG){const n=e.map(hr);gt.debug(`Firestore (${Gt}): ${t}`,...n)}}function Ge(t,...e){if(gt.logLevel<=M.ERROR){const n=e.map(hr);gt.error(`Firestore (${Gt}): ${t}`,...n)}}function as(t,...e){if(gt.logLevel<=M.WARN){const n=e.map(hr);gt.warn(`Firestore (${Gt}): ${t}`,...n)}}function hr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function D(t="Unexpected state"){const e=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: `+t;throw Ge(e),new Error(e)}function $(t,e){t||D()}function N(t,e){return t}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _c{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(le.UNAUTHENTICATED))}shutdown(){}}class Ad{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kd{constructor(e){this.t=e,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new _c(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new le(e)}}class Nd{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rd{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Nd(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ld{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new Od(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Md(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class bc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Md(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function x(t,e){return t<e?-1:t>e?1:0}function Mt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Q{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new Q(0,0))}static max(){return new k(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pn{constructor(e,n,s){n===void 0?n=0:n>e.length&&D(),s===void 0?s=e.length-n:s>e.length-n&&D(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class z extends pn{construct(e,n,s){return new z(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new z(n)}static emptyPath(){return new z([])}}const xd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends pn{construct(e,n,s){return new de(e,n,s)}static isValidIdentifier(e){return xd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new de(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(n)}static emptyPath(){return new de([])}}/**
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
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(z.fromString(e))}static fromName(e){return new b(z.fromString(e).popFirst(5))}static empty(){return new b(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new z(e.slice()))}}function Pd(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=k.fromTimestamp(s===1e9?new Q(n+1,0):new Q(n,s));return new tt(i,b.empty(),e)}function Fd(t){return new tt(t.readTime,t.key,-1)}class tt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new tt(k.min(),b.empty(),-1)}static max(){return new tt(k.max(),b.empty(),-1)}}function Vd(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:x(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function kn(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==Ud)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Nn(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}dr.ct=-1;function Ns(t){return t==null}function cs(t){return t===0&&1/t==-1/0}function $d(t){return typeof t=="number"&&Number.isInteger(t)&&!cs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function wo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ee{constructor(e,n){this.comparator=e,this.root=n||oe.EMPTY}insert(e,n){return new ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bn(this.root,e,this.comparator,!0)}}class Bn{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??oe.RED,this.left=i??oe.EMPTY,this.right=r??oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new oe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return oe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,n,s,i){return this}insert(t,e,n){return new oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Z{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(e){return new Eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Z(this.comparator);return n.data=e,n}}class Eo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ce{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Ce([])}unionWith(e){let n=new Z(de.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ce(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jd("Invalid base64 string: "+i):i}}(e);return new ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const qd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nt(t){if($(!!t),typeof t=="string"){let e=0;const n=qd.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Y(t.seconds),nanos:Y(t.nanos)}}function Y(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xt(t){return typeof t=="string"?ge.fromBase64String(t):ge.fromUint8Array(t)}/**
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
 */function Ic(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sc(t){const e=t.mapValue.fields.__previous_value__;return Ic(e)?Sc(e):e}function yn(t){const e=nt(t.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
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
 */class zd{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $n={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ic(t)?4:Hd(t)?9007199254740991:10:D()}function Fe(t,e){if(t===e)return!0;const n=pt(t);if(n!==pt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yn(t).isEqual(yn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=nt(s.timestampValue),o=nt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xt(s.bytesValue).isEqual(xt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Y(s.geoPointValue.latitude)===Y(i.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Y(s.integerValue)===Y(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Y(s.doubleValue),o=Y(i.doubleValue);return r===o?cs(r)===cs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Mt(t.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(wo(r)!==wo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fe(r[a],o[a])))return!1;return!0}(t,e);default:return D()}}function wn(t,e){return(t.values||[]).find(n=>Fe(n,e))!==void 0}function Pt(t,e){if(t===e)return 0;const n=pt(t),s=pt(e);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Y(i.integerValue||i.doubleValue),a=Y(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return To(t.timestampValue,e.timestampValue);case 4:return To(yn(t),yn(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(i,r){const o=xt(i),a=xt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=x(Y(i.latitude),Y(r.latitude));return o!==0?o:x(Y(i.longitude),Y(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Pt(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===$n.mapValue&&r===$n.mapValue)return 0;if(i===$n.mapValue)return 1;if(r===$n.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=x(a[l],u[l]);if(h!==0)return h;const f=Pt(o[a[l]],c[u[l]]);if(f!==0)return f}return x(a.length,u.length)}(t.mapValue,e.mapValue);default:throw D()}}function To(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return x(t,e);const n=nt(t),s=nt(e),i=x(n.seconds,s.seconds);return i!==0?i:x(n.nanos,s.nanos)}function Ft(t){return Si(t)}function Si(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=nt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Si(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Si(s.fields[a])}`;return r+"}"}(t.mapValue):D();var e,n}function Di(t){return!!t&&"integerValue"in t}function fr(t){return!!t&&"arrayValue"in t}function _o(t){return!!t&&"nullValue"in t}function bo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hn(t){return!!t&&"mapValue"in t}function sn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=sn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hd(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Hn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sn(n)}setAll(e){let n=de.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=sn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Hn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Hn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){wt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Te(sn(this.value))}}function Dc(t){const e=[];return wt(t.fields,(n,s)=>{const i=new de([n]);if(Hn(s)){const r=Dc(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ce(e)}/**
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
 */class he{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new he(e,0,k.min(),k.min(),k.min(),Te.empty(),0)}static newFoundDocument(e,n,s,i){return new he(e,1,n,k.min(),s,i,0)}static newNoDocument(e,n){return new he(e,2,n,k.min(),k.min(),Te.empty(),0)}static newUnknownDocument(e,n){return new he(e,3,n,k.min(),k.min(),Te.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof he&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class us{constructor(e,n){this.position=e,this.inclusive=n}}function Co(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),n.key):s=Pt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Io(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kd(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ac{}class J extends Ac{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Qd(e,n,s):n==="array-contains"?new Xd(e,s):n==="in"?new Jd(e,s):n==="not-in"?new Zd(e,s):n==="array-contains-any"?new ef(e,s):new J(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Wd(e,s):new Yd(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pt(n,this.value)):n!==null&&pt(this.value)===pt(n)&&this.matchesComparison(Pt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ve extends Ac{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ve(e,n)}matches(e){return kc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kc(t){return t.op==="and"}function Nc(t){return Gd(t)&&kc(t)}function Gd(t){for(const e of t.filters)if(e instanceof Ve)return!1;return!0}function Ai(t){if(t instanceof J)return t.field.canonicalString()+t.op.toString()+Ft(t.value);if(Nc(t))return t.filters.map(e=>Ai(e)).join(",");{const e=t.filters.map(n=>Ai(n)).join(",");return`${t.op}(${e})`}}function Rc(t,e){return t instanceof J?function(n,s){return s instanceof J&&n.op===s.op&&n.field.isEqual(s.field)&&Fe(n.value,s.value)}(t,e):t instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Rc(r,s.filters[o]),!0):!1}(t,e):void D()}function Oc(t){return t instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${Ft(e.value)}`}(t):t instanceof Ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Oc).join(" ,")+"}"}(t):"Filter"}class Qd extends J{constructor(e,n,s){super(e,n,s),this.key=b.fromName(s.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wd extends J{constructor(e,n){super(e,"in",n),this.keys=Lc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yd extends J{constructor(e,n){super(e,"not-in",n),this.keys=Lc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>b.fromName(s.referenceValue))}class Xd extends J{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fr(n)&&wn(n.arrayValue,this.value)}}class Jd extends J{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wn(this.value.arrayValue,n)}}class Zd extends J{constructor(e,n){super(e,"not-in",n)}matches(e){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wn(this.value.arrayValue,n)}}class ef extends J{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>wn(this.value.arrayValue,s))}}/**
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
 */class tf{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function So(t,e=null,n=[],s=[],i=null,r=null,o=null){return new tf(t,e,n,s,i,r,o)}function mr(t){const e=N(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ai(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ns(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ft(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ft(s)).join(",")),e.ft=n}return e.ft}function gr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kd(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Io(t.startAt,e.startAt)&&Io(t.endAt,e.endAt)}function ki(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function nf(t,e,n,s,i,r,o,a){return new Rs(t,e,n,s,i,r,o,a)}function Os(t){return new Rs(t)}function Do(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function of(t){return t.collectionGroup!==null}function Rt(t){const e=N(t);if(e.dt===null){e.dt=[];const n=rf(e),s=sf(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new rn(n)),e.dt.push(new rn(de.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new rn(de.keyField(),r))}}}return e.dt}function Qe(t){const e=N(t);if(!e.wt)if(e.limitType==="F")e.wt=So(e.path,e.collectionGroup,Rt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Rt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new rn(r.field,o))}const s=e.endAt?new us(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new us(e.startAt.position,e.startAt.inclusive):null;e.wt=So(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Ni(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ls(t,e){return gr(Qe(t),Qe(e))&&t.limitType===e.limitType}function Mc(t){return`${mr(Qe(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Oc(s)).join(", ")}]`),Ns(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ft(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ft(s)).join(",")),`Target(${n})`}(Qe(t))}; limitType=${t.limitType})`}function Ms(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Rt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Co(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Rt(n),s)||n.endAt&&!function(i,r,o){const a=Co(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Rt(n),s))}(t,e)}function af(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xc(t){return(e,n)=>{let s=!1;for(const i of Rt(t)){const r=cf(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cf(t,e,n){const s=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Pt(a,c):D()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}/**
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
 */class Qt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Cc(this.inner)}size(){return this.innerSize}}/**
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
 */const uf=new ee(b.comparator);function We(){return uf}const Pc=new ee(b.comparator);function en(...t){let e=Pc;for(const n of t)e=e.insert(n.key,n);return e}function Fc(t){let e=Pc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function lt(){return on()}function Vc(){return on()}function on(){return new Qt(t=>t.toString(),(t,e)=>t.isEqual(e))}const lf=new ee(b.comparator),hf=new Z(b.comparator);function O(...t){let e=hf;for(const n of t)e=e.add(n);return e}const df=new Z(x);function Uc(){return df}/**
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
 */function Bc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(e)?"-0":e}}function $c(t){return{integerValue:""+t}}function ff(t,e){return $d(e)?$c(e):Bc(t,e)}/**
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
 */class xs{constructor(){this._=void 0}}function mf(t,e,n){return t instanceof ls?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Vt?qc(t,e):t instanceof Ut?zc(t,e):function(s,i){const r=jc(s,i),o=Ao(r)+Ao(s._t);return Di(r)&&Di(s._t)?$c(o):Bc(s.serializer,o)}(t,e)}function gf(t,e,n){return t instanceof Vt?qc(t,e):t instanceof Ut?zc(t,e):n}function jc(t,e){return t instanceof hs?Di(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ls extends xs{}class Vt extends xs{constructor(e){super(),this.elements=e}}function qc(t,e){const n=Hc(e);for(const s of t.elements)n.some(i=>Fe(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ut extends xs{constructor(e){super(),this.elements=e}}function zc(t,e){let n=Hc(e);for(const s of t.elements)n=n.filter(i=>!Fe(i,s));return{arrayValue:{values:n}}}class hs extends xs{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ao(t){return Y(t.integerValue||t.doubleValue)}function Hc(t){return fr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Kc{constructor(e,n){this.field=e,this.transform=n}}function pf(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Vt&&s instanceof Vt||n instanceof Ut&&s instanceof Ut?Mt(n.elements,s.elements,Fe):n instanceof hs&&s instanceof hs?Fe(n._t,s._t):n instanceof ls&&s instanceof ls}(t.transform,e.transform)}class yf{constructor(e,n){this.version=e,this.transformResults=n}}class Se{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Se}static exists(e){return new Se(void 0,e)}static updateTime(e){return new Se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ps{}function Gc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pr(t.key,Se.none()):new Rn(t.key,t.data,Se.none());{const n=t.data,s=Te.empty();let i=new Z(de.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ot(t.key,s,new Ce(i.toArray()),Se.none())}}function vf(t,e,n){t instanceof Rn?function(s,i,r){const o=s.value.clone(),a=No(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ot?function(s,i,r){if(!Kn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=No(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Qc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function an(t,e,n,s){return t instanceof Rn?function(i,r,o,a){if(!Kn(i.precondition,r))return o;const c=i.value.clone(),u=Ro(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ot?function(i,r,o,a){if(!Kn(i.precondition,r))return o;const c=Ro(i.fieldTransforms,a,r),u=r.data;return u.setAll(Qc(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return Kn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function wf(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=jc(s.transform,i||null);r!=null&&(n===null&&(n=Te.empty()),n.set(s.field,r))}return n||null}function ko(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Mt(n,s,(i,r)=>pf(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rn extends Ps{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ot extends Ps{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function No(t,e,n){const s=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gf(o,a,n[i]))}return s}function Ro(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,mf(r,o,e))}return s}class pr extends Ps{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ef extends Ps{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tf{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vf(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=an(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=an(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vc();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Gc(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&Mt(this.mutations,e.mutations,(n,s)=>ko(n,s))&&Mt(this.baseMutations,e.baseMutations,(n,s)=>ko(n,s))}}class yr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){$(e.mutations.length===s.length);let i=lf;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new yr(e,n,s,i)}}/**
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
 */class _f{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bf{constructor(e){this.count=e}}/**
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
 */var W,L;function Cf(t){switch(t){default:return D();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Wc(t){if(t===void 0)return Ge("GRPC error has no .code"),g.UNKNOWN;switch(t){case W.OK:return g.OK;case W.CANCELLED:return g.CANCELLED;case W.UNKNOWN:return g.UNKNOWN;case W.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case W.INTERNAL:return g.INTERNAL;case W.UNAVAILABLE:return g.UNAVAILABLE;case W.UNAUTHENTICATED:return g.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case W.NOT_FOUND:return g.NOT_FOUND;case W.ALREADY_EXISTS:return g.ALREADY_EXISTS;case W.PERMISSION_DENIED:return g.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case W.ABORTED:return g.ABORTED;case W.OUT_OF_RANGE:return g.OUT_OF_RANGE;case W.UNIMPLEMENTED:return g.UNIMPLEMENTED;case W.DATA_LOSS:return g.DATA_LOSS;default:return D()}}(L=W||(W={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class vr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return jn}static getOrCreateInstance(){return jn===null&&(jn=new vr),jn}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let jn=null;/**
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
 */class Fs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,On.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Fs(k.min(),i,Uc(),We(),O())}}class On{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new On(s,n,O(),O(),O())}}/**
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
 */class Gn{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Yc{constructor(e,n){this.targetId=e,this.Et=n}}class Xc{constructor(e,n,s=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Oo{constructor(){this.At=0,this.Rt=Mo(),this.vt=ge.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=O(),n=O(),s=O();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:D()}}),new On(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Mo()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class If{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=We(),this.qt=Lo(),this.Ut=new Z(x)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:D()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(ki(o))if(i===0){const a=new b(o.path);this.Qt(s,a,he.newNoDocument(a,k.min()))}else $(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=vr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ki(a.target)){const c=new b(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,he.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=O();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Fs(e,n,this.Ut,this.Lt,s);return this.Lt=We(),this.qt=Lo(),this.Ut=new Z(x),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Oo,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Z(x),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Oo),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Lo(){return new ee(b.comparator)}function Mo(){return new ee(b.comparator)}/**
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
 */const Sf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Df=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Af=(()=>({and:"AND",or:"OR"}))();class kf{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ds(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Nf(t,e){return ds(t,e.toTimestamp())}function Pe(t){return $(!!t),k.fromTimestamp(function(e){const n=nt(e);return new Q(n.seconds,n.nanos)}(t))}function wr(t,e){return function(n){return new z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Zc(t){const e=z.fromString(t);return $(su(e)),e}function Oi(t,e){return wr(t.databaseId,e.path)}function ii(t,e){const n=Zc(e);if(n.get(1)!==t.databaseId.projectId)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(eu(n))}function Li(t,e){return wr(t.databaseId,e)}function Rf(t){const e=Zc(t);return e.length===4?z.emptyPath():eu(e)}function Mi(t){return new z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eu(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xo(t,e,n){return{name:Oi(t,e),fields:n.value.mapValue.fields}}function Of(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?($(u===void 0||typeof u=="string"),ge.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:Wc(c.code);return new _(u,c.message||"")}(o);n=new Xc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ii(t,s.document.name),r=Pe(s.document.updateTime),o=s.document.createTime?Pe(s.document.createTime):k.min(),a=new Te({mapValue:{fields:s.document.fields}}),c=he.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Gn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ii(t,s.document),r=s.readTime?Pe(s.readTime):k.min(),o=he.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Gn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ii(t,s.document),r=s.removedTargetIds||[];n=new Gn([],r,i,null)}else{if(!("filter"in e))return D();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new bf(i),o=s.targetId;n=new Yc(o,r)}}return n}function Lf(t,e){let n;if(e instanceof Rn)n={update:xo(t,e.key,e.value)};else if(e instanceof pr)n={delete:Oi(t,e.key)};else if(e instanceof ot)n={update:xo(t,e.key,e.data),updateMask:jf(e.fieldMask)};else{if(!(e instanceof Ef))return D();n={verify:Oi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ls)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ut)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof hs)return{fieldPath:r.field.canonicalString(),increment:o._t};throw D()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Nf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:D()}(t,e.precondition)),n}function Mf(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Pe(s.updateTime):Pe(i);return r.isEqual(k.min())&&(r=Pe(i)),new yf(r,s.transformResults||[])}(n,e))):[]}function xf(t,e){return{documents:[Li(t,e.path)]}}function Pf(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Li(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Li(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return nu(Ve.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ct(l.field),direction:Uf(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||Ns(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Ff(t){let e=Rf(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){$(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=tu(l);return h instanceof Ve&&Nc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new rn(It(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ns(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new us(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new us(f,h)}(n.endAt)),nf(e,i,o,r,a,"F",c,u)}function Vf(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return D()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function tu(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=It(e.unaryFilter.field);return J.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=It(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=It(e.unaryFilter.field);return J.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=It(e.unaryFilter.field);return J.create(r,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(t):t.fieldFilter!==void 0?function(e){return J.create(It(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ve.create(e.compositeFilter.filters.map(n=>tu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return D()}}(e.compositeFilter.op))}(t):D()}function Uf(t){return Sf[t]}function Bf(t){return Df[t]}function $f(t){return Af[t]}function Ct(t){return{fieldPath:t.canonicalString()}}function It(t){return de.fromServerFormat(t.fieldPath)}function nu(t){return t instanceof J?function(e){if(e.op==="=="){if(bo(e.value))return{unaryFilter:{field:Ct(e.field),op:"IS_NAN"}};if(_o(e.value))return{unaryFilter:{field:Ct(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(bo(e.value))return{unaryFilter:{field:Ct(e.field),op:"IS_NOT_NAN"}};if(_o(e.value))return{unaryFilter:{field:Ct(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ct(e.field),op:Bf(e.op),value:e.value}}}(t):t instanceof Ve?function(e){const n=e.getFilters().map(s=>nu(s));return n.length===1?n[0]:{compositeFilter:{op:$f(e.op),filters:n}}}(t):D()}function jf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function su(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dt{constructor(e,n,s,i,r=k.min(),o=k.min(),a=ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class qf{constructor(e){this.se=e}}function zf(t){const e=Ff({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
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
 */class Hf{constructor(){this.He=new Kf}addToCollectionParentIndex(e,n){return this.He.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(tt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(tt.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Kf{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Z(z.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Z(z.comparator)).toArray()}}/**
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
 */class Bt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Bt(0)}static bn(){return new Bt(-1)}}/**
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
 */class Gf{constructor(){this.changes=new Qt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,he.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Qf{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Wf{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&an(s.mutation,i,Ce.empty(),Q.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,O()).next(()=>s))}getLocalViewOfDocuments(e,n,s=O()){const i=lt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=en();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=lt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,O()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=We();const o=on(),a=on();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ot)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),an(l.mutation,u,l.mutation.getFieldMask(),Q.now())):o.set(u.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Qf(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=on();let i=new ee((o,a)=>o-a),r=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ce.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||O()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Vc();l.forEach(f=>{if(!r.has(f)){const d=Gc(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):of(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(lt());let a=-1,c=r;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,O())).next(l=>({batchId:a,changes:Fc(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(s=>{let i=en();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=en();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Rs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,he.newInvalidDocument(u)))});let o=en();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&an(u.mutation,c,Ce.empty(),Q.now()),Ms(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Yf{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Pe(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:zf(s.bundledQuery),readTime:Pe(s.readTime)}}(n)),y.resolve()}}/**
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
 */class Xf{constructor(){this.overlays=new ee(b.comparator),this.ts=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=lt();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=lt(),r=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ee((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=lt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=lt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _f(n,s));let r=this.ts.get(n);r===void 0&&(r=O(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class Er{constructor(){this.es=new Z(te.ns),this.ss=new Z(te.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new te(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new te(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new b(new z([])),s=new te(n,e),i=new te(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new b(new z([])),s=new te(n,e),i=new te(n,e+1);let r=O();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new te(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class te{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return b.comparator(e.key,n.key)||x(e.ds,n.ds)}static rs(e,n){return x(e.ds,n.ds)||b.comparator(e.key,n.key)}}/**
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
 */class Jf{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Z(te.ns)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tf(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new te(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new te(n,0),i=new te(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Z(x);return n.forEach(i=>{const r=new te(i,0),o=new te(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),y.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;b.isDocumentKey(r)||(r=r.child(""));const o=new te(new b(r),0);let a=new Z(x);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return y.forEach(n.mutations,i=>{const r=new te(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new te(n,0),i=this._s.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Zf{constructor(e){this.Ts=e,this.docs=new ee(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():he.newInvalidDocument(n))}getEntries(e,n){let s=We();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():he.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=We();const o=n.path,a=new b(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vd(Fd(l),s)<=0||(i.has(l.key)||Ms(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){D()}Es(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new em(this)}getSize(e){return y.resolve(this.size)}}class em extends Gf{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class tm{constructor(e){this.persistence=e,this.As=new Qt(n=>mr(n),gr),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Er,this.targetCount=0,this.bs=Bt.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),y.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Bt(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Sn(n),y.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.vs.containsKey(n))}}/**
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
 */class nm{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new dr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new tm(this),this.indexManager=new Hf,this.remoteDocumentCache=function(s){return new Zf(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new qf(n),this.xs=new Yf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xf,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new Jf(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){T("MemoryPersistence","Starting transaction:",e);const i=new sm(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return y.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class sm extends Bd{constructor(e){super(),this.currentSequenceNumber=e}}class Tr{constructor(e){this.persistence=e,this.$s=new Er,this.Ms=null}static Fs(e){return new Tr(e)}get Bs(){if(this.Ms)return this.Ms;throw D()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),y.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,s=>{const i=b.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,k.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return y.or([()=>y.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class _r{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=O(),i=O();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new _r(e,n.fromCache,s,i)}}/**
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
 */class im{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Do(n))return y.resolve(null);let s=Qe(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ni(n,null,"F"),s=Qe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=O(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,Ni(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,i){return Do(n)||i.isEqual(k.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(vo()<=M.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ri(n)),this.Fi(e,o,n,Pd(i,-1)))})}$i(e,n){let s=new Z(xc(e));return n.forEach((i,r)=>{Ms(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return vo()<=M.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.xi.getDocumentsMatchingQuery(e,n,tt.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class rm{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new ee(x),this.qi=new Qt(r=>mr(r),gr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wf(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function om(t,e,n,s){return new rm(t,e,n,s)}async function iu(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=O();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function am(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(m=>{const w=c.docVersions.get(d);$(w!==null),m.version.compareTo(w)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=O();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function ru(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function cm(t,e){const n=N(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(ge.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(m,w,p){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(f,d,l)&&a.push(n.Ds.updateTargetData(r,d))});let c=We(),u=O();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(um(r,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(k.min())){const l=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Li=i,r))}function um(t,e,n){let s=O(),i=O();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=We();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function lm(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function hm(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new dt(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function xi(t,e,n){const s=N(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Nn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Po(t,e,n){const s=N(t);let i=k.min(),r=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Qe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:k.min(),n?r:O())).next(a=>(dm(s,af(e),a),{documents:a,Wi:r})))}function dm(t,e,n){let s=t.Ui.get(e)||k.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Fo{constructor(){this.activeTargetIds=Uc()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fm{constructor(){this.Br=new Fo,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Fo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mm{qr(e){}shutdown(){}}/**
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
 */class Vo{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qn=null;function ri(){return qn===null?qn=268435456+Math.round(2147483648*Math.random()):qn++,"0x"+qn.toString(16)}/**
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
 */const gm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pm{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const ue="WebChannelConnection";class ym extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=ri(),a=this.ao(e,n);T("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(u=>(T("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw as("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=gm[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=ri();return new Promise((o,a)=>{const c=new Sd;c.setWithCredentials(!0),c.listenOnce(bd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case si.NO_ERROR:const l=c.getResponseJson();T(ue,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case si.TIMEOUT:T(ue,`RPC '${e}' ${r} timed out`),a(new _(g.DEADLINE_EXCEEDED,"Request time out"));break;case si.HTTP_ERROR:const h=c.getStatus();if(T(ue,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(p)>=0?p:g.UNKNOWN}(d.status);a(new _(m,d.message))}else a(new _(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(g.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{T(ue,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);T(ue,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}wo(e,n,s){const i=ri(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Td(),a=_d(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Id({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");T(ue,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const d=new pm({Wr:w=>{f?T(ue,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(T(ue,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),T(ue,`RPC '${e}' stream ${i} sending:`,w),l.send(w))},Hr:()=>l.close()}),m=(w,p,S)=>{w.listen(p,v=>{try{S(v)}catch(H){setTimeout(()=>{throw H},0)}})};return m(l,Un.EventType.OPEN,()=>{f||T(ue,`RPC '${e}' stream ${i} transport opened.`)}),m(l,Un.EventType.CLOSE,()=>{f||(f=!0,T(ue,`RPC '${e}' stream ${i} transport closed`),d.so())}),m(l,Un.EventType.ERROR,w=>{f||(f=!0,as(ue,`RPC '${e}' stream ${i} transport errored:`,w),d.so(new _(g.UNAVAILABLE,"The operation could not be completed")))}),m(l,Un.EventType.MESSAGE,w=>{var p;if(!f){const S=w.data[0];$(!!S);const v=S,H=v.error||((p=v[0])===null||p===void 0?void 0:p.error);if(H){T(ue,`RPC '${e}' stream ${i} received error:`,H);const se=H.status;let je=function(Ye){const Tt=W[Ye];if(Tt!==void 0)return Wc(Tt)}(se),Ae=H.message;je===void 0&&(je=g.INTERNAL,Ae="Unknown error status: "+se+" with message "+H.message),f=!0,d.so(new _(je,Ae)),l.close()}else T(ue,`RPC '${e}' stream ${i} received:`,S),d.io(S)}}),m(a,Cd.STAT_EVENT,w=>{w.stat===po.PROXY?T(ue,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===po.NOPROXY&&T(ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function oi(){return typeof document<"u"?document:null}/**
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
 */function Vs(t){return new kf(t,!0)}/**
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
 */class ou{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class au{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ou(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Ge(n.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new _(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vm extends au{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Of(this.serializer,e),s=function(i){if(!("targetChange"in i))return k.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?k.min():r.readTime?Pe(r.readTime):k.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Mi(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=ki(a)?{documents:xf(i,a)}:{query:Pf(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Jc(i,r.resumeToken):r.snapshotVersion.compareTo(k.min())>0&&(o.readTime=ds(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Vf(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Mi(this.serializer),n.removeTarget=e,this.Fo(n)}}class wm extends au{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Mf(e.writeResults,e.commitTime),s=Pe(e.commitTime);return this.listener.Zo(s,n)}return $(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Mi(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Lf(this.serializer,s))};this.Fo(n)}}/**
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
 */class Em extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(g.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(g.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class Tm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ge(n),this.ru=!1):T("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class _m{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Et(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.du.add(4),await Ln(c),c.mu.set("Unknown"),c.du.delete(4),await Us(c)}(this))})}),this.mu=new Tm(s,i)}}async function Us(t){if(Et(t))for(const e of t.wu)await e(!0)}async function Ln(t){for(const e of t.wu)await e(!1)}function cu(t,e){const n=N(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ir(n)?Cr(n):Wt(n).No()&&br(n,e))}function uu(t,e){const n=N(t),s=Wt(n);n.fu.delete(e),s.No()&&lu(n,e),n.fu.size===0&&(s.No()?s.$o():Et(n)&&n.mu.set("Unknown"))}function br(t,e){t.gu.Ot(e.targetId),Wt(t).jo(e)}function lu(t,e){t.gu.Ot(e),Wt(t).Wo(e)}function Cr(t){t.gu=new If({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Wt(t).start(),t.mu.ou()}function Ir(t){return Et(t)&&!Wt(t).xo()&&t.fu.size>0}function Et(t){return N(t).du.size===0}function hu(t){t.gu=void 0}async function bm(t){t.fu.forEach((e,n)=>{br(t,e)})}async function Cm(t,e){hu(t),Ir(t)?(t.mu.au(e),Cr(t)):t.mu.set("Unknown")}async function Im(t,e,n){if(t.mu.set("Online"),e instanceof Xc&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fs(t,s)}else if(e instanceof Gn?t.gu.Kt(e):e instanceof Yc?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(k.min()))try{const s=await ru(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ge.EMPTY_BYTE_STRING,c.snapshotVersion)),lu(i,a);const u=new dt(c.target,a,1,c.sequenceNumber);br(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){T("RemoteStore","Failed to raise snapshot:",s),await fs(t,s)}}async function fs(t,e,n){if(!Nn(e))throw e;t.du.add(1),await Ln(t),t.mu.set("Offline"),n||(n=()=>ru(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Us(t)})}function du(t,e){return e().catch(n=>fs(t,n,e))}async function Bs(t){const e=N(t),n=st(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Sm(e);)try{const i=await lm(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,Dm(e,i)}catch(i){await fs(e,i)}fu(e)&&mu(e)}function Sm(t){return Et(t)&&t.lu.length<10}function Dm(t,e){t.lu.push(e);const n=st(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function fu(t){return Et(t)&&!st(t).xo()&&t.lu.length>0}function mu(t){st(t).start()}async function Am(t){st(t).tu()}async function km(t){const e=st(t);for(const n of t.lu)e.Yo(n.mutations)}async function Nm(t,e,n){const s=t.lu.shift(),i=yr.from(s,e,n);await du(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bs(t)}async function Rm(t,e){e&&st(t).Jo&&await async function(n,s){if(i=s.code,Cf(i)&&i!==g.ABORTED){const r=n.lu.shift();st(n).Oo(),await du(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Bs(n)}var i}(t,e),fu(t)&&mu(t)}async function Uo(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const s=Et(n);n.du.add(3),await Ln(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Us(n)}async function Om(t,e){const n=N(t);e?(n.du.delete(2),await Us(n)):e||(n.du.add(2),await Ln(n),n.mu.set("Unknown"))}function Wt(t){return t.yu||(t.yu=function(e,n,s){const i=N(e);return i.nu(),new vm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:bm.bind(null,t),Zr:Cm.bind(null,t),zo:Im.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ir(t)?Cr(t):t.mu.set("Unknown")):(await t.yu.stop(),hu(t))})),t.yu}function st(t){return t.pu||(t.pu=function(e,n,s){const i=N(e);return i.nu(),new wm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:Am.bind(null,t),Zr:Rm.bind(null,t),Xo:km.bind(null,t),Zo:Nm.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Bs(t)):(await t.pu.stop(),t.lu.length>0&&(T("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Sr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Sr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dr(t,e){if(Ge("AsyncQueue",`${e}: ${t}`),Nn(t))return new _(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ot{constructor(e){this.comparator=e?(n,s)=>e(n,s)||b.comparator(n.key,s.key):(n,s)=>b.comparator(n.key,s.key),this.keyedMap=en(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new Ot(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ot;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Bo{constructor(){this.Iu=new ee(b.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):D():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $t{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $t(e,n,Ot.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ls(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Lm{constructor(){this.Eu=void 0,this.listeners=[]}}class Mm{constructor(){this.queries=new Qt(e=>Mc(e),Ls),this.onlineState="Unknown",this.Au=new Set}}async function gu(t,e){const n=N(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Lm),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Dr(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Ar(n)}async function pu(t,e){const n=N(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function xm(t,e){const n=N(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Ar(n)}function Pm(t,e,n){const s=N(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ar(t){t.Au.forEach(e=>{e.next()})}class yu{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $t(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=$t.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class vu{constructor(e){this.key=e}}class wu{constructor(e){this.key=e}}class Fm{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=O(),this.mutatedKeys=O(),this.Ku=xc(e),this.Gu=new Ot(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Bo,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),d=Ms(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let p=!1;f&&d?f.data.isEqual(d.data)?m!==w&&(s.track({type:3,doc:d}),p=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),p=!0,(c&&this.Ku(d,c)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),p=!0):f&&!d&&(s.track({type:1,doc:f}),p=!0,(c||u)&&(a=!0)),p&&(d?(o=o.add(d),r=w?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((u,l)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return d(h)-d(f)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new $t(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Bo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=O(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new wu(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new vu(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=O();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return $t.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Vm{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Um{constructor(e){this.key=e,this.ec=!1}}class Bm{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Qt(a=>Mc(a),Ls),this.ic=new Map,this.rc=new Set,this.oc=new ee(b.comparator),this.uc=new Map,this.cc=new Er,this.ac={},this.hc=new Map,this.lc=Bt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function $m(t,e){const n=Xm(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await hm(n.localStore,Qe(e));n.isPrimaryClient&&cu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await jm(n,e,s,a==="current",o.resumeToken)}return i}async function jm(t,e,n,s,i){t.dc=(h,f,d)=>async function(m,w,p,S){let v=w.view.zu(p);v.Mi&&(v=await Po(m.localStore,w.query,!1).then(({documents:je})=>w.view.zu(je,v)));const H=S&&S.targetChanges.get(w.targetId),se=w.view.applyChanges(v,m.isPrimaryClient,H);return jo(m,w.targetId,se.Yu),se.snapshot}(t,h,f,d);const r=await Po(t.localStore,e,!0),o=new Fm(e,r.Wi),a=o.zu(r.documents),c=On.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);jo(t,n,u.Yu);const l=new Vm(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function qm(t,e){const n=N(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ls(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),uu(n.remoteStore,s.targetId),Pi(n,s.targetId)}).catch(kn)):(Pi(n,s.targetId),await xi(n.localStore,s.targetId,!0))}async function zm(t,e,n){const s=Jm(t);try{const i=await function(r,o){const a=N(r),c=Q.now(),u=o.reduce((f,d)=>f.add(d.key),O());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=We(),m=O();return a.Ki.getEntries(f,u).next(w=>{d=w,d.forEach((p,S)=>{S.isValidDocument()||(m=m.add(p))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(w=>{l=w;const p=[];for(const S of o){const v=wf(S,l.get(S.key).overlayedDocument);v!=null&&p.push(new ot(S.key,v,Dc(v.value.mapValue),Se.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,p,o)}).next(w=>{h=w;const p=w.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,w.batchId,p)})}).then(()=>({batchId:h.batchId,changes:Fc(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new ee(x)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await Mn(s,i.changes),await Bs(s.remoteStore)}catch(i){const r=Dr(i,"Failed to persist write");n.reject(r)}}async function Eu(t,e){const n=N(t);try{const s=await cm(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?$(o.ec):i.removedDocuments.size>0&&($(o.ec),o.ec=!1))}),await Mn(n,s,e)}catch(s){await kn(s)}}function $o(t,e,n){const s=N(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Ar(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Hm(t,e,n){const s=N(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new ee(b.comparator);o=o.insert(r,he.newNoDocument(r,k.min()));const a=O().add(r),c=new Fs(k.min(),new Map,new Z(x),o,a);await Eu(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),kr(s)}else await xi(s.localStore,e,!1).then(()=>Pi(s,e,n)).catch(kn)}async function Km(t,e){const n=N(t),s=e.batch.batchId;try{const i=await am(n.localStore,e);_u(n,s,null),Tu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Mn(n,i)}catch(i){await kn(i)}}async function Gm(t,e,n){const s=N(t);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>($(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);_u(s,e,n),Tu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Mn(s,i)}catch(i){await kn(i)}}function Tu(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function _u(t,e,n){const s=N(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Pi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||bu(t,s)})}function bu(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(uu(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),kr(t))}function jo(t,e,n){for(const s of n)s instanceof vu?(t.cc.addReference(s.key,e),Qm(t,s)):s instanceof wu?(T("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||bu(t,s.key)):D()}function Qm(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(T("SyncEngine","New document in limbo: "+n),t.rc.add(s),kr(t))}function kr(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new b(z.fromString(e)),s=t.lc.next();t.uc.set(s,new Um(n)),t.oc=t.oc.insert(n,s),cu(t.remoteStore,new dt(Qe(Os(n.path)),s,2,dr.ct))}}async function Mn(t,e,n){const s=N(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=_r.Di(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Nn(l))throw l;T("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,m)}}}(s.localStore,r))}async function Wm(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const s=await iu(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new _(g.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mn(n,s.Qi)}}function Ym(t,e){const n=N(t),s=n.uc.get(e);if(s&&s.ec)return O().add(s.key);{let i=O();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Xm(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Eu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ym.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hm.bind(null,e),e.nc.zo=xm.bind(null,e.eventManager),e.nc.wc=Pm.bind(null,e.eventManager),e}function Jm(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Km.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gm.bind(null,e),e}class qo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return om(this.persistence,new im,e.initialUser,this.serializer)}createPersistence(e){return new nm(Tr.Fs,this.serializer)}createSharedClientState(e){return new fm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$o(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wm.bind(null,this.syncEngine),await Om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Mm}createDatastore(e){const n=Vs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ym(i));var i;return function(r,o,a,c){return new Em(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>$o(this.syncEngine,a,0),o=Vo.D()?new Vo:new mm,new _m(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new Bm(s,i,r,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=N(e);T("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ln(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Cu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eg{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=le.UNAUTHENTICATED,this.clientId=bc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{T("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(T("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Dr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ai(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await iu(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ng(t);T("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Uo(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Uo(e.remoteStore,r)),t._onlineComponents=e}function tg(t){return t.name==="FirebaseError"?t.code===g.FAILED_PRECONDITION||t.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ng(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await ai(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tg(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await ai(t,new qo)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await ai(t,new qo);return t._offlineComponents}async function Iu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await zo(t,t._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await zo(t,new Zm))),t._onlineComponents}function sg(t){return Iu(t).then(e=>e.syncEngine)}async function Fi(t){const e=await Iu(t),n=e.eventManager;return n.onListen=$m.bind(null,e.syncEngine),n.onUnlisten=qm.bind(null,e.syncEngine),n}function ig(t,e,n={}){const s=new Ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new Cu({next:h=>{r.enqueueAndForget(()=>pu(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new _(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new yu(Os(o.path),u,{includeMetadataChanges:!0,xu:!0});return gu(i,l)}(await Fi(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Ho=new Map;/**
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
 */function Su(t,e,n){if(!n)throw new _(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rg(t,e,n,s){if(e===!0&&s===!0)throw new _(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ko(t){if(!b.isDocumentKey(t))throw new _(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Go(t){if(b.isDocumentKey(t))throw new _(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":D()}function De(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nr(t);throw new _(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $s{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dd;switch(n.type){case"firstParty":return new Rd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ho.get(e);n&&(T("ComponentProvider","Removing Datastore"),Ho.delete(e),n.terminate())}(this),Promise.resolve()}}function og(t,e,n,s={}){var i;const r=(t=De(t,$s))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&as("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=le.MOCK_USER;else{o=ul(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new le(c)}t._authCredentials=new Ad(new _c(o,a))}}/**
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
 */class Ee{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ee(this.firestore,e,this._key)}}class js{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class et extends js{constructor(e,n,s){super(e,n,Os(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new b(e))}withConverter(e){return new et(this.firestore,e,this._path)}}function ag(t,e,...n){if(t=He(t),Su("collection","path",e),t instanceof $s){const s=z.fromString(e,...n);return Go(s),new et(t,null,s)}{if(!(t instanceof Ee||t instanceof et))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(z.fromString(e,...n));return Go(s),new et(t.firestore,null,s)}}function cg(t,e,...n){if(t=He(t),arguments.length===1&&(e=bc.A()),Su("doc","path",e),t instanceof $s){const s=z.fromString(e,...n);return Ko(s),new Ee(t,null,new b(s))}{if(!(t instanceof Ee||t instanceof et))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(z.fromString(e,...n));return Ko(s),new Ee(t.firestore,t instanceof et?t.converter:null,new b(s))}}/**
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
 */class ug{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ou(this,"async_queue_retry"),this.qc=()=>{const n=oi();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=oi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ze;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Nn(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ge("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Sr.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&D()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Wo(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yt extends $s{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ug,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Du(this),this._firestoreClient.terminate()}}function lg(t,e){const n=typeof t=="object"?t:fh(),s=typeof t=="string"?t:e||"(default)",i=uh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ol("firestore");r&&og(i,...r)}return i}function Rr(t){return t._firestoreClient||Du(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Du(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,u){return new zd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new eg(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ge.fromBase64String(e))}catch(n){throw new _(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xn{constructor(e){this._methodName=e}}/**
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
 */class Or{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
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
 */const hg=/^__.*__$/;class dg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rn(e,this.data,n,this.fieldTransforms)}}class Au{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ot(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ku(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class zs{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new zs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ms(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(ku(this.Yc)&&hg.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class fg{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Vs(e)}ua(e,n,s,i=!1){return new zs({Yc:e,methodName:n,oa:s,path:de.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nu(t){const e=t._freezeSettings(),n=Vs(t._databaseId);return new fg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mg(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);Lr("Data must be an object, but it was:",o,s);const a=Ou(s,o);let c,u;if(r.merge)c=new Ce(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const f=Vi(e,h,n);if(!o.contains(f))throw new _(g.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Mu(l,f)||l.push(f)}c=new Ce(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new dg(new Te(a),c,u)}class Hs extends xn{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hs}}function Ru(t,e,n){return new zs({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gg extends xn{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=Ru(this,e,!0),s=this.ca.map(r=>Yt(r,n)),i=new Vt(s);return new Kc(e.path,i)}isEqual(e){return this===e}}class pg extends xn{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=Ru(this,e,!0),s=this.ca.map(r=>Yt(r,n)),i=new Ut(s);return new Kc(e.path,i)}isEqual(e){return this===e}}function yg(t,e,n,s){const i=t.ua(1,e,n);Lr("Data must be an object, but it was:",i,s);const r=[],o=Te.empty();wt(s,(c,u)=>{const l=Mr(e,c,n);u=He(u);const h=i.na(l);if(u instanceof Hs)r.push(l);else{const f=Yt(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new Ce(r);return new Au(o,a,i.fieldTransforms)}function vg(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[Vi(e,s,n)],c=[i];if(r.length%2!=0)throw new _(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Vi(e,r[f])),c.push(r[f+1]);const u=[],l=Te.empty();for(let f=a.length-1;f>=0;--f)if(!Mu(u,a[f])){const d=a[f];let m=c[f];m=He(m);const w=o.na(d);if(m instanceof Hs)u.push(d);else{const p=Yt(m,w);p!=null&&(u.push(d),l.set(d,p))}}const h=new Ce(u);return new Au(l,h,o.fieldTransforms)}function Yt(t,e){if(Lu(t=He(t)))return Lr("Unsupported field value:",e,t),Ou(t,e);if(t instanceof xn)return function(n,s){if(!ku(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Yt(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ff(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Q.fromDate(n);return{timestampValue:ds(s.serializer,i)}}if(n instanceof Q){const i=new Q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ds(s.serializer,i)}}if(n instanceof Or)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jt)return{bytesValue:Jc(s.serializer,n._byteString)};if(n instanceof Ee){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Nr(n)}`)}(t,e)}function Ou(t,e){const n={};return Cc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(t,(s,i)=>{const r=Yt(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Lu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Q||t instanceof Or||t instanceof jt||t instanceof Ee||t instanceof xn)}function Lr(t,e,n){if(!Lu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Nr(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Vi(t,e,n){if((e=He(e))instanceof qs)return e._internalPath;if(typeof e=="string")return Mr(t,e);throw ms("Field path arguments must be of type string or ",t,!1,void 0,n)}const wg=new RegExp("[~\\*/\\[\\]]");function Mr(t,e,n){if(e.search(wg)>=0)throw ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qs(...e.split("."))._internalPath}catch{throw ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ms(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(g.INVALID_ARGUMENT,a+t+c)}function Mu(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xu{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Eg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Eg extends xu{data(){return super.data()}}function Pu(t,e){return typeof e=="string"?Mr(t,e):e instanceof qs?e._internalPath:e._delegate._internalPath}/**
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
 */function Tg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{convertValue(e,n="none"){switch(pt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw D()}}convertObject(e,n){const s={};return wt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Or(Y(e.latitude),Y(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yn(e));default:return null}}convertTimestamp(e){const n=nt(e);return new Q(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=z.fromString(e);$(su(s));const i=new vn(s.get(1),s.get(3)),r=new b(s.popFirst(5));return i.isEqual(n)||Ge(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function bg(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class tn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fu extends xu{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Pu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qn extends Fu{data(e={}){return super.data(e)}}class Cg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Qn(this._firestore,this._userDataWriter,s.key,s,new tn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Ig(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ig(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
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
 */function Yo(t){t=De(t,Ee);const e=De(t.firestore,yt);return ig(Rr(e),t._key).then(n=>Bu(e,t,n))}class Vu extends _g{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}function Sg(t,e,n){t=De(t,Ee);const s=De(t.firestore,yt),i=bg(t.converter,e,n);return xr(s,[mg(Nu(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Se.none())])}function Ui(t,e,n,...s){t=De(t,Ee);const i=De(t.firestore,yt),r=Nu(i);let o;return o=typeof(e=He(e))=="string"||e instanceof qs?vg(r,"updateDoc",t._key,e,n,s):yg(r,"updateDoc",t._key,e),xr(i,[o.toMutation(t._key,Se.exists(!0))])}function Uu(t){return xr(De(t.firestore,yt),[new pr(t._key,Se.none())])}function Dg(t,...e){var n,s,i;t=He(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wo(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wo(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Ee)u=De(t.firestore,yt),l=Os(t._key.path),c={next:h=>{e[o]&&e[o](Bu(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=De(t,js);u=De(h.firestore,yt),l=h._query;const f=new Vu(u);c={next:d=>{e[o]&&e[o](new Cg(u,f,h,d))},error:e[o+1],complete:e[o+2]},Tg(t._query)}return function(h,f,d,m){const w=new Cu(m),p=new yu(f,w,d);return h.asyncQueue.enqueueAndForget(async()=>gu(await Fi(h),p)),()=>{w.yc(),h.asyncQueue.enqueueAndForget(async()=>pu(await Fi(h),p))}}(Rr(u),l,a,c)}function xr(t,e){return function(n,s){const i=new Ze;return n.asyncQueue.enqueueAndForget(async()=>zm(await sg(n),s,i)),i.promise}(Rr(t),e)}function Bu(t,e,n){const s=n.docs.get(e._key),i=new Vu(t);return new Fu(t,i,e._key,s,new tn(n.hasPendingWrites,n.fromCache),e.converter)}function Ag(...t){return new gg("arrayUnion",t)}function kg(...t){return new pg("arrayRemove",t)}(function(t,e=!0){(function(n){Gt=n})(dh),Jn(new un("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new yt(new kd(n.getProvider("auth-internal")),new Ld(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Nt(yo,"3.10.0",t),Nt(yo,"3.10.0","esm2017")})();const Ng={projectId:"sample-project-294713"},Rg=ya(Ng),Og=lg(Rg);let ke;const Dt=Mg(),cn=xg(),Lg=t=>new Promise(e=>{const n=ag(Og,"rooms");ke=cg(n,t),Dg(ke,s=>{if(s&&s.exists()){const i=s.data(),r=(o,a)=>o.appendedAt.seconds-a.appendedAt.seconds;Dt.set(i.estimates.sort(r)),cn.set(i.tableState)}else Dt.set([]),cn.set({closed:!0})}),e()});function Mg(){const{subscribe:t,set:e}=ua([]);return{subscribe:t,set:e,append:(n,s)=>{Yo(ke).then(i=>{if(i&&i.exists())Ui(ke,{estimates:Ag({name:n,point:s,appendedAt:Q.now()})});else{const r=[],o={closed:!0};r.push({name:n,point:s,appendedAt:Q.now()}),Sg(ke,{estimates:r,tableState:o})}})},remove:(n,s)=>{Yo(ke).then(i=>{if(i&&i.exists()){const o=i.data().estimates.filter(a=>a.name===n).shift();if(o){Ui(ke,{estimates:kg(o)}).then(s);return}}s&&s()})},clear:()=>{Uu(ke)}}}function xg(){const{subscribe:t,set:e}=ua({closed:!0});return{subscribe:t,set:e,open:()=>{Ui(ke,{"tableState.closed":!1})},close:()=>{Uu(ke)}}}function Pg(t){const e=t-1;return e*e*e+1}function Xo(t,{delay:e=0,duration:n=400,easing:s=Pg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=Br(i),[d,m]=Br(r);return{delay:e,duration:n,easing:s,css:(w,p)=>`
			transform: ${u} translate(${(1-w)*h}${f}, ${(1-w)*d}${m});
			opacity: ${c-l*p}`}}function Fg(t){let e,n=(t[3]?"":t[0])+"",s,i,r,o;return{c(){e=P("div"),s=ye(n),this.h()},l(a){e=F(a,"DIV",{class:!0});var c=V(e);s=ve(c,n),c.forEach(C),this.h()},h(){I(e,"class",i=ft("card "+t[4])+" svelte-1kamdln"),bt(e,"selectable",t[1]),bt(e,"closed",t[3]),bt(e,"selected",t[2])},m(a,c){X(a,e,c),R(e,s),r||(o=[Re(e,"click",function(){Bi(t[1]?t[5]:void 0)&&(t[1]?t[5]:void 0).apply(this,arguments)}),Re(e,"keyup",Vg),Re(e,"keypress",Ug)],r=!0)},p(a,[c]){t=a,c&9&&n!==(n=(t[3]?"":t[0])+"")&&qt(s,n),c&16&&i!==(i=ft("card "+t[4])+" svelte-1kamdln")&&I(e,"class",i),c&18&&bt(e,"selectable",t[1]),c&24&&bt(e,"closed",t[3]),c&20&&bt(e,"selected",t[2])},i:B,o:B,d(a){a&&C(e),r=!1,$i(o)}}}const Vg=()=>{},Ug=()=>{};function Bg(t,e,n){let{point:s}=e,{selectable:i=!1}=e,{selected:r=!1}=e,{closed:o=!1}=e,{size:a="medium"}=e;const c=ju();function u(){c("selectCard",{point:s})}return t.$$set=l=>{"point"in l&&n(0,s=l.point),"selectable"in l&&n(1,i=l.selectable),"selected"in l&&n(2,r=l.selected),"closed"in l&&n(3,o=l.closed),"size"in l&&n(4,a=l.size)},[s,i,r,o,a,u]}class $u extends Ue{constructor(e){super(),Be(this,e,Bg,Fg,$e,{point:0,selectable:1,selected:2,closed:3,size:4})}}function $g(t){let e,n=t[0]?"OPEN":"RETURN",s,i,r;return{c(){e=P("button"),s=ye(n),this.h()},l(o){e=F(o,"BUTTON",{class:!0});var a=V(e);s=ve(a,n),a.forEach(C),this.h()},h(){I(e,"class",ft("open-button")+" svelte-1i6cetj")},m(o,a){X(o,e,a),R(e,s),i||(r=Re(e,"click",t[1]),i=!0)},p(o,[a]){a&1&&n!==(n=o[0]?"OPEN":"RETURN")&&qt(s,n)},i:B,o:B,d(o){o&&C(e),i=!1,r()}}}function jg(t,e,n){let{isClosed:s=!0}=e;function i(r){ji.call(this,t,r)}return t.$$set=r=>{"isClosed"in r&&n(0,s=r.isClosed)},[s,i]}class qg extends Ue{constructor(e){super(),Be(this,e,jg,$g,$e,{isClosed:0})}}function zg(t){let e,n=t[0]?"COPIED":"COPY",s,i,r,o,a;return{c(){e=P("button"),s=ye(n),this.h()},l(c){e=F(c,"BUTTON",{class:!0});var u=V(e);s=ve(u,n),u.forEach(C),this.h()},h(){I(e,"class",i=ft(["copy-button",t[0]?"copied":""].join(" "))+" svelte-96r1p3"),e.disabled=r=!!t[0]},m(c,u){X(c,e,u),R(e,s),o||(a=Re(e,"click",t[1]),o=!0)},p(c,[u]){u&1&&n!==(n=c[0]?"COPIED":"COPY")&&qt(s,n),u&1&&i!==(i=ft(["copy-button",c[0]?"copied":""].join(" "))+" svelte-96r1p3")&&I(e,"class",i),u&1&&r!==(r=!!c[0])&&(e.disabled=r)},i:B,o:B,d(c){c&&C(e),o=!1,a()}}}function Hg(t,e,n){let{isCopied:s=!1}=e;function i(r){ji.call(this,t,r)}return t.$$set=r=>{"isCopied"in r&&n(0,s=r.isCopied)},[s,i]}class Kg extends Ue{constructor(e){super(),Be(this,e,Hg,zg,$e,{isCopied:0})}}function Jo(t,e,n){const s=t.slice();return s[6]=e[n],s}function Zo(t,e){let n,s,i,r,o=e[6].name+"",a,c,u,l;return s=new $u({props:{point:e[6].point,size:"large",selectable:!1,closed:e[1]}}),{key:t,first:null,c(){n=P("div"),Oe(s.$$.fragment),i=_e(),r=P("div"),a=ye(o),c=_e(),this.h()},l(h){n=F(h,"DIV",{class:!0});var f=V(n);Le(s.$$.fragment,f),i=be(f),r=F(f,"DIV",{class:!0});var d=V(r);a=ve(d,o),d.forEach(C),c=be(f),f.forEach(C),this.h()},h(){I(r,"class","name svelte-39cx3a"),I(n,"class","estimate svelte-39cx3a"),this.first=n},m(h,f){X(h,n,f),Me(s,n,null),R(n,i),R(n,r),R(r,a),R(n,c),l=!0},p(h,f){e=h;const d={};f&1&&(d.point=e[6].point),f&2&&(d.closed=e[1]),s.$set(d),(!l||f&1)&&o!==(o=e[6].name+"")&&qt(a,o)},i(h){l||(U(s.$$.fragment,h),aa(()=>{l&&(u||(u=$r(n,Xo,{y:100},!0)),u.run(1))}),l=!0)},o(h){K(s.$$.fragment,h),u||(u=$r(n,Xo,{y:100},!1)),u.run(0),l=!1},d(h){h&&C(n),xe(s),h&&u&&u.end()}}}function ea(t){let e,n,s;return n=new qg({props:{isClosed:t[1]}}),n.$on("click",function(){Bi(t[2])&&t[2].apply(this,arguments)}),{c(){e=P("div"),Oe(n.$$.fragment),this.h()},l(i){e=F(i,"DIV",{class:!0});var r=V(e);Le(n.$$.fragment,r),r.forEach(C),this.h()},h(){I(e,"class","open-button-area svelte-39cx3a")},m(i,r){X(i,e,r),Me(n,e,null),s=!0},p(i,r){t=i;const o={};r&2&&(o.isClosed=t[1]),n.$set(o)},i(i){s||(U(n.$$.fragment,i),s=!0)},o(i){K(n.$$.fragment,i),s=!1},d(i){i&&C(e),xe(n)}}}function ta(t){let e,n;return e=new Kg({props:{isCopied:t[3]}}),e.$on("click",t[4]),{c(){Oe(e.$$.fragment)},l(s){Le(e.$$.fragment,s)},m(s,i){Me(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.isCopied=s[3]),e.$set(r)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){xe(e,s)}}}function Gg(t){let e,n,s=[],i=new Map,r,o,a,c=t[0];const u=f=>f[6].name;for(let f=0;f<c.length;f+=1){let d=Jo(t,c,f),m=u(d);i.set(m,s[f]=Zo(m,d))}let l=(t[0].length>0||!t[1])&&ea(t),h=!t[1]&&ta(t);return{c(){e=P("div"),n=P("div");for(let f=0;f<s.length;f+=1)s[f].c();r=_e(),l&&l.c(),o=_e(),h&&h.c(),this.h()},l(f){e=F(f,"DIV",{class:!0});var d=V(e);n=F(d,"DIV",{class:!0});var m=V(n);for(let w=0;w<s.length;w+=1)s[w].l(m);m.forEach(C),r=be(d),l&&l.l(d),o=be(d),h&&h.l(d),d.forEach(C),this.h()},h(){I(n,"class","estimates svelte-39cx3a"),I(e,"class","table svelte-39cx3a")},m(f,d){X(f,e,d),R(e,n);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(n,null);R(e,r),l&&l.m(e,null),R(e,o),h&&h.m(e,null),a=!0},p(f,[d]){d&3&&(c=f[0],At(),s=qu(s,d,u,1,f,c,i,n,zu,Zo,null,Jo),kt()),f[0].length>0||!f[1]?l?(l.p(f,d),d&3&&U(l,1)):(l=ea(f),l.c(),U(l,1),l.m(e,o)):l&&(At(),K(l,1,1,()=>{l=null}),kt()),f[1]?h&&(At(),K(h,1,1,()=>{h=null}),kt()):h?(h.p(f,d),d&2&&U(h,1)):(h=ta(f),h.c(),U(h,1),h.m(e,null))},i(f){if(!a){for(let d=0;d<c.length;d+=1)U(s[d]);U(l),U(h),a=!0}},o(f){for(let d=0;d<s.length;d+=1)K(s[d]);K(l),K(h),a=!1},d(f){f&&C(e);for(let d=0;d<s.length;d+=1)s[d].d();l&&l.d(),h&&h.d()}}}function Qg(t,e,n){let{estimates:s=[]}=e,{isClosed:i=!0}=e,{handleOpenButtonClick:r=()=>{}}=e;s=s||[];let o=!1;function a(){const u=c();navigator.clipboard.writeText(u),n(3,o=!0),setTimeout(()=>{n(3,o=!1)},1e3)}function c(){if(s.length===0)return"empty.";const u=new Date;return"["+u.toLocaleDateString()+" "+u.toLocaleTimeString()+"] "+s.sort((l,h)=>l.name>h.name?1:-1).reduce((l,h)=>(l?l+" ":"")+`${h.name}(${h.point})`,"")}return t.$$set=u=>{"estimates"in u&&n(0,s=u.estimates),"isClosed"in u&&n(1,i=u.isClosed),"handleOpenButtonClick"in u&&n(2,r=u.handleOpenButtonClick)},[s,i,r,o,a]}class Wg extends Ue{constructor(e){super(),Be(this,e,Qg,Gg,$e,{estimates:0,isClosed:1,handleOpenButtonClick:2})}}function Yg(t){let e,n,s,i;return{c(){e=P("button"),n=ye("OK"),this.h()},l(r){e=F(r,"BUTTON",{class:!0});var o=V(e);n=ve(o,"OK"),o.forEach(C),this.h()},h(){I(e,"class",ft("ok-button")+" svelte-rmf0e0")},m(r,o){X(r,e,o),R(e,n),s||(i=Re(e,"click",Hu(ca(t[0]))),s=!0)},p:B,i:B,o:B,d(r){r&&C(e),s=!1,i()}}}function Xg(t){function e(n){ji.call(this,t,n)}return[e]}class Jg extends Ue{constructor(e){super(),Be(this,e,Xg,Yg,$e,{})}}function na(t,e,n){const s=t.slice();return s[15]=e[n],s}function sa(t,e,n){const s=t.slice();return s[18]=e[n],s}function Zg(t){let e,n,s,i,r,o,a,c=t[0]&&ia(t);return{c(){e=P("div"),n=P("form"),s=P("input"),i=_e(),c&&c.c(),this.h()},l(u){e=F(u,"DIV",{class:!0});var l=V(e);n=F(l,"FORM",{});var h=V(n);s=F(h,"INPUT",{placeholder:!0,class:!0}),i=be(h),c&&c.l(h),h.forEach(C),l.forEach(C),this.h()},h(){I(s,"placeholder","your name"),s.autofocus=!0,I(s,"class","svelte-1rz0oca"),I(e,"class","user-name svelte-1rz0oca")},m(u,l){X(u,e,l),R(e,n),R(n,s),jr(s,t[0]),R(n,i),c&&c.m(n,null),r=!0,s.focus(),o||(a=[Re(s,"input",t[10]),Re(n,"submit",ca(t[12]))],o=!0)},p(u,l){l&1&&s.value!==u[0]&&jr(s,u[0]),u[0]?c?(c.p(u,l),l&1&&U(c,1)):(c=ia(u),c.c(),U(c,1),c.m(n,null)):c&&(At(),K(c,1,1,()=>{c=null}),kt())},i(u){r||(U(c),r=!0)},o(u){K(c),r=!1},d(u){u&&C(e),c&&c.d(),o=!1,$i(a)}}}function ep(t){let e,n,s,i,r,o,a,c,u,l,h=t[7],f=[];for(let p=0;p<h.length;p+=1)f[p]=ra(sa(t,h,p));let d=t[5],m=[];for(let p=0;p<d.length;p+=1)m[p]=oa(na(t,d,p));const w=p=>K(m[p],1,1,()=>{m[p]=null});return{c(){e=P("div"),n=ye(t[0]),s=_e(),i=P("div"),r=P("select");for(let p=0;p<f.length;p+=1)f[p].c();o=_e();for(let p=0;p<m.length;p+=1)m[p].c();a=Wn(),this.h()},l(p){e=F(p,"DIV",{class:!0});var S=V(e);n=ve(S,t[0]),S.forEach(C),s=be(p),i=F(p,"DIV",{class:!0});var v=V(i);r=F(v,"SELECT",{});var H=V(r);for(let se=0;se<f.length;se+=1)f[se].l(H);H.forEach(C),v.forEach(C),o=be(p);for(let se=0;se<m.length;se+=1)m[se].l(p);a=Wn(),this.h()},h(){I(e,"class","user-name svelte-1rz0oca"),t[4]===void 0&&aa(()=>t[9].call(r)),I(i,"class","svelte-1rz0oca")},m(p,S){X(p,e,S),R(e,n),X(p,s,S),X(p,i,S),R(i,r);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(r,null);qr(r,t[4],!0),X(p,o,S);for(let v=0;v<m.length;v+=1)m[v]&&m[v].m(p,S);X(p,a,S),c=!0,u||(l=Re(r,"change",t[9]),u=!0)},p(p,S){if((!c||S&1)&&qt(n,p[0]),S&128){h=p[7];let v;for(v=0;v<h.length;v+=1){const H=sa(p,h,v);f[v]?f[v].p(H,S):(f[v]=ra(H),f[v].c(),f[v].m(r,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=h.length}if(S&144&&qr(r,p[4]),S&100){d=p[5];let v;for(v=0;v<d.length;v+=1){const H=na(p,d,v);m[v]?(m[v].p(H,S),U(m[v],1)):(m[v]=oa(H),m[v].c(),U(m[v],1),m[v].m(a.parentNode,a))}for(At(),v=d.length;v<m.length;v+=1)w(v);kt()}},i(p){if(!c){for(let S=0;S<d.length;S+=1)U(m[S]);c=!0}},o(p){m=m.filter(Boolean);for(let S=0;S<m.length;S+=1)K(m[S]);c=!1},d(p){p&&C(e),p&&C(s),p&&C(i),zr(f,p),p&&C(o),zr(m,p),p&&C(a),u=!1,l()}}}function ia(t){let e,n;return e=new Jg({}),e.$on("click",t[11]),{c(){Oe(e.$$.fragment)},l(s){Le(e.$$.fragment,s)},m(s,i){Me(e,s,i),n=!0},p:B,i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){xe(e,s)}}}function ra(t){let e,n=t[18].id+"",s;return{c(){e=P("option"),s=ye(n),this.h()},l(i){e=F(i,"OPTION",{});var r=V(e);s=ve(r,n),r.forEach(C),this.h()},h(){e.__value=t[18].id,e.value=e.__value},m(i,r){X(i,e,r),R(e,s)},p:B,d(i){i&&C(e)}}}function oa(t){let e,n;return e=new $u({props:{point:t[15],selectable:!0,size:"medium",selected:t[6]===t[15]}}),e.$on("selectCard",function(){Bi(t[2])&&t[2].apply(this,arguments)}),{c(){Oe(e.$$.fragment)},l(s){Le(e.$$.fragment,s)},m(s,i){Me(e,s,i),n=!0},p(s,i){t=s;const r={};i&32&&(r.point=t[15]),i&96&&(r.selected=t[6]===t[15]),e.$set(r)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){xe(e,s)}}}function tp(t){let e,n,s,i;const r=[ep,Zg],o=[];function a(c,u){return c[0]&&c[1]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=P("div"),s.c(),this.h()},l(c){e=F(c,"DIV",{class:!0});var u=V(e);s.l(u),u.forEach(C),this.h()},h(){I(e,"class",ft("user-selection")+" svelte-1rz0oca")},m(c,u){X(c,e,u),o[n].m(e,null),i=!0},p(c,[u]){let l=n;n=a(c),n===l?o[n].p(c,u):(At(),K(o[l],1,1,()=>{o[l]=null}),kt(),s=o[n],s?s.p(c,u):(s=o[n]=r[n](c),s.c()),U(s,1),s.m(e,null))},i(c){i||(U(s),i=!0)},o(c){K(s),i=!1},d(c){c&&C(e),o[n].d()}}}function np(t,e,n){let s,i,{userName:r=""}=e,{isFixedUserName:o=!1}=e,{estimates:a=[]}=e,{handleSelectCard:c}=e,{handleFixName:u}=e;a=a||[];const f=[{id:"fibonacci",points:["0","1","2","3","5","8","13","21","34","55","?","∞"]},{id:"ten",points:["0","10","20","30","40","50","60","70","80","90","100","?","∞"]}];let d=f[0].id;function m(){d=Ku(this),n(4,d),n(7,f)}function w(){r=this.value,n(0,r)}const p=()=>u(r),S=()=>u(r);return t.$$set=v=>{"userName"in v&&n(0,r=v.userName),"isFixedUserName"in v&&n(1,o=v.isFixedUserName),"estimates"in v&&n(8,a=v.estimates),"handleSelectCard"in v&&n(2,c=v.handleSelectCard),"handleFixName"in v&&n(3,u=v.handleFixName)},t.$$.update=()=>{t.$$.dirty&257&&n(6,s=a.filter(v=>v.name===r).map(v=>v.point).pop()),t.$$.dirty&16&&n(5,i=f.filter(v=>d===v.id)[0].points)},[r,o,c,u,d,i,s,f,a,m,w,p,S]}class sp extends Ue{constructor(e){super(),Be(this,e,np,tp,$e,{userName:0,isFixedUserName:1,estimates:8,handleSelectCard:2,handleFixName:3})}}function ip(t){let e,n,s,i;return{c(){e=P("div"),n=P("a"),s=Hr("svg"),i=Hr("path"),this.h()},l(r){e=F(r,"DIV",{class:!0});var o=V(e);n=F(o,"A",{href:!0,target:!0,rel:!0,title:!0});var a=V(n);s=Kr(a,"svg",{xmlns:!0,width:!0,height:!0,class:!0,version:!0,viewBox:!0,"aria-labelledby":!0,"aria-hidden":!0});var c=V(s);i=Kr(c,"path",{d:!0}),V(i).forEach(C),c.forEach(C),a.forEach(C),o.forEach(C),this.h()},h(){I(i,"d","M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"),I(s,"xmlns","http://www.w3.org/2000/svg"),I(s,"width","20"),I(s,"height","20"),I(s,"class","_1Jlgk"),I(s,"version","1.1"),I(s,"viewBox","0 0 32 32"),I(s,"aria-labelledby","unsplash-home"),I(s,"aria-hidden","false"),I(n,"href","https://unsplash.com"),I(n,"target","_blank"),I(n,"rel","noopener noreferrer"),I(n,"title","Photo by Unsplash"),I(e,"class","unsplash-credit svelte-1vmngv8")},m(r,o){X(r,e,o),R(e,n),R(n,s),R(s,i)},p:B,i:B,o:B,d(r){r&&C(e)}}}class rp extends Ue{constructor(e){super(),Be(this,e,null,ip,$e,{})}}function op(t){let e,n,s,i,r,o,a,c,u,l,h,f,d,m,w,p,S,v,H,se,je,Ae,Ye,Tt,Pr;return u=new Wg({props:{isClosed:t[2],estimates:t[0],handleOpenButtonClick:t[5]}}),h=new sp({props:{userName:t[3],isFixedUserName:t[4],estimates:t[0],handleFixName:t[6],handleSelectCard:t[7]}}),Ae=new rp({}),{c(){e=P("div"),n=P("main"),s=P("h1"),i=ye(t[1]),r=_e(),o=P("p"),a=ye("share the URL of this page with your team members."),c=_e(),Oe(u.$$.fragment),l=_e(),Oe(h.$$.fragment),f=_e(),d=P("div"),m=ye("development: "),w=P("a"),p=ye("Source code"),S=ye(","),v=P("a"),H=ye("Storybook"),se=ye("."),je=_e(),Oe(Ae.$$.fragment),this.h()},l(j){e=F(j,"DIV",{class:!0,style:!0});var ie=V(e);n=F(ie,"MAIN",{class:!0});var pe=V(n);s=F(pe,"H1",{class:!0});var qe=V(s);i=ve(qe,t[1]),qe.forEach(C),r=be(pe),o=F(pe,"P",{class:!0});var Fr=V(o);a=ve(Fr,"share the URL of this page with your team members."),Fr.forEach(C),c=be(pe),Le(u.$$.fragment,pe),l=be(pe),Le(h.$$.fragment,pe),f=be(pe),d=F(pe,"DIV",{class:!0});var _t=V(d);m=ve(_t,"development: "),w=F(_t,"A",{href:!0,target:!0,rel:!0,class:!0});var Vr=V(w);p=ve(Vr,"Source code"),Vr.forEach(C),S=ve(_t,","),v=F(_t,"A",{href:!0,target:!0,rel:!0,class:!0});var Ur=V(v);H=ve(Ur,"Storybook"),Ur.forEach(C),se=ve(_t,"."),_t.forEach(C),pe.forEach(C),je=be(ie),Le(Ae.$$.fragment,ie),ie.forEach(C),this.h()},h(){I(s,"class","svelte-1g0cdz3"),I(o,"class","svelte-1g0cdz3"),I(w,"href","https://github.com/redfe/planning-poker-svelte"),I(w,"target","_blank"),I(w,"rel","noopener noreferrer"),I(w,"class","svelte-1g0cdz3"),I(v,"href","./storybook-static/"),I(v,"target","_blank"),I(v,"rel","noopener noreferrer"),I(v,"class","svelte-1g0cdz3"),I(d,"class","devinfo svelte-1g0cdz3"),I(n,"class","svelte-1g0cdz3"),I(e,"class","container svelte-1g0cdz3"),Gr(e,"height",t[8])},m(j,ie){X(j,e,ie),R(e,n),R(n,s),R(s,i),R(n,r),R(n,o),R(o,a),R(n,c),Me(u,n,null),R(n,l),Me(h,n,null),R(n,f),R(n,d),R(d,m),R(d,w),R(w,p),R(d,S),R(d,v),R(v,H),R(d,se),R(e,je),Me(Ae,e,null),Ye=!0,Tt||(Pr=[Re(window,"resize",t[9]),Gu(t[9].call(null,e))],Tt=!0)},p(j,[ie]){(!Ye||ie&2)&&qt(i,j[1]);const pe={};ie&4&&(pe.isClosed=j[2]),ie&1&&(pe.estimates=j[0]),ie&32&&(pe.handleOpenButtonClick=j[5]),u.$set(pe);const qe={};ie&8&&(qe.userName=j[3]),ie&16&&(qe.isFixedUserName=j[4]),ie&1&&(qe.estimates=j[0]),ie&64&&(qe.handleFixName=j[6]),ie&128&&(qe.handleSelectCard=j[7]),h.$set(qe),(!Ye||ie&256)&&Gr(e,"height",j[8])},i(j){Ye||(U(u.$$.fragment,j),U(h.$$.fragment,j),U(Ae.$$.fragment,j),Ye=!0)},o(j){K(u.$$.fragment,j),K(h.$$.fragment,j),K(Ae.$$.fragment,j),Ye=!1},d(j){j&&C(e),xe(u),xe(h),xe(Ae),Tt=!1,$i(Pr)}}}function ap(t,e,n){let{name:s}=e,{isTableClosed:i=!0}=e,{estimates:r=[]}=e,{userName:o=""}=e,{isFixedUserName:a=!1}=e,{handleOpenButtonClick:c}=e,{handleFixName:u}=e,{handleSelectCard:l}=e;r=r||[];let h="";const f=d=>{n(8,h=document.documentElement.offsetHeight<document.documentElement.scrollHeight?"auto":"100%")};return t.$$set=d=>{"name"in d&&n(1,s=d.name),"isTableClosed"in d&&n(2,i=d.isTableClosed),"estimates"in d&&n(0,r=d.estimates),"userName"in d&&n(3,o=d.userName),"isFixedUserName"in d&&n(4,a=d.isFixedUserName),"handleOpenButtonClick"in d&&n(5,c=d.handleOpenButtonClick),"handleFixName"in d&&n(6,u=d.handleFixName),"handleSelectCard"in d&&n(7,l=d.handleSelectCard)},[r,s,i,o,a,c,u,l,h,f]}let cp=class extends Ue{constructor(e){super(),Be(this,e,ap,op,$e,{name:1,isTableClosed:2,estimates:0,userName:3,isFixedUserName:4,handleOpenButtonClick:5,handleFixName:6,handleSelectCard:7})}};var zn,up=new Uint8Array(16);function lp(){if(!zn&&(zn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!zn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return zn(up)}const hp=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function dp(t){return typeof t=="string"&&hp.test(t)}var re=[];for(var ci=0;ci<256;++ci)re.push((ci+256).toString(16).substr(1));function fp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(re[t[e+0]]+re[t[e+1]]+re[t[e+2]]+re[t[e+3]]+"-"+re[t[e+4]]+re[t[e+5]]+"-"+re[t[e+6]]+re[t[e+7]]+"-"+re[t[e+8]]+re[t[e+9]]+"-"+re[t[e+10]]+re[t[e+11]]+re[t[e+12]]+re[t[e+13]]+re[t[e+14]]+re[t[e+15]]).toLowerCase();if(!dp(n))throw TypeError("Stringified UUID is invalid");return n}function mp(t,e,n){t=t||{};var s=t.random||(t.rng||lp)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=s[i];return e}return fp(s)}function gp(t){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function pp(t){let e,n;return e=new cp({props:{name:t[0],isTableClosed:t[4].closed,estimates:t[2],userName:t[1],isFixedUserName:t[3],handleOpenButtonClick:t[5],handleFixName:t[6],handleSelectCard:t[7]}}),{c(){Oe(e.$$.fragment)},l(s){Le(e.$$.fragment,s)},m(s,i){Me(e,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),i&16&&(r.isTableClosed=s[4].closed),i&4&&(r.estimates=s[2]),i&2&&(r.userName=s[1]),i&8&&(r.isFixedUserName=s[3]),e.$set(r)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){xe(e,s)}}}function yp(t){let e,n;return{c(){e=P("p"),n=ye("...waiting"),this.h()},l(s){e=F(s,"P",{class:!0});var i=V(e);n=ve(i,"...waiting"),i.forEach(C),this.h()},h(){I(e,"class","svelte-133mhn7")},m(s,i){X(s,e,i),R(e,n)},p:B,i:B,o:B,d(s){s&&C(e)}}}function vp(t){let e,n,s,i,r;document.title=e=t[0];let o={ctx:t,current:null,token:null,hasCatch:!1,pending:yp,then:pp,catch:gp,blocks:[,,,]};return Qu(Lg(t[8]()),o),{c(){n=P("link"),s=_e(),i=Wn(),o.block.c(),this.h()},l(a){const c=Wu("svelte-6ehmhx",document.head);n=F(c,"LINK",{href:!0,rel:!0}),c.forEach(C),s=be(a),i=Wn(),o.block.l(a),this.h()},h(){I(n,"href","https://fonts.googleapis.com/css?family=M+PLUS+1p"),I(n,"rel","stylesheet")},m(a,c){R(document.head,n),X(a,s,c),X(a,i,c),o.block.m(a,o.anchor=c),o.mount=()=>i.parentNode,o.anchor=i,r=!0},p(a,[c]){t=a,(!r||c&1)&&e!==(e=t[0])&&(document.title=e),Yu(o,t,c)},i(a){r||(U(o.block),r=!0)},o(a){for(let c=0;c<3;c+=1){const u=o.blocks[c];K(u)}r=!1},d(a){C(n),a&&C(s),a&&C(i),o.block.d(a),o.token=null,o=null}}}function wp(t,e,n){let s,i,r;Qr(t,Dt,d=>n(2,i=d)),Qr(t,cn,d=>n(4,r=d));let{name:o}=e,a=window.localStorage.name||"",c=!1;function u(){r.closed?i.length>0&&cn.open():(Dt.clear(),cn.close())}function l(d){d&&(n(1,a=d),window.localStorage.setItem("name",a),n(3,c=!0))}function h(d){const m=()=>Dt.append(a,d.detail.point);s?Dt.remove(a,s===d.detail.point?()=>{}:()=>setTimeout(m,450)):m()}function f(){const d=window.location.search;let m;if(d)m=d.substring(1);else{const w=mp();window.history.replaceState("","","?"+w),m=w}return m}return t.$$set=d=>{"name"in d&&n(0,o=d.name)},t.$$.update=()=>{t.$$.dirty&6&&(s=i.filter(d=>d.name===a).map(d=>d.point).pop())},[o,a,i,c,r,u,l,h,f]}class Ep extends Ue{constructor(e){super(),Be(this,e,wp,vp,$e,{name:0})}}function Tp(t){let e,n;return e=new Ep({props:{name:"Planning Poker"}}),{c(){Oe(e.$$.fragment)},l(s){Le(e.$$.fragment,s)},m(s,i){Me(e,s,i),n=!0},p:B,i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){xe(e,s)}}}class Sp extends Ue{constructor(e){super(),Be(this,e,null,Tp,$e,{})}}export{Sp as default};
