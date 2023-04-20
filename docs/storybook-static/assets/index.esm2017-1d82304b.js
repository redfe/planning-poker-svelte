/**
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
 */const dn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Di=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],h=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,h=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=r>>2,I=(r&3)<<4|h>>4;let O=(h&15)<<2|l>>6,R=l&63;c||(R=64,o||(O=64)),i.push(n[d],n[I],n[O],n[R])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Di(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],h=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const I=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||h==null||l==null||I==null)throw new bi;const O=r<<2|h>>4;if(i.push(O),l!==64){const R=h<<4&240|l>>2;if(i.push(R),I!==64){const F=l<<6&192|I;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ri=function(t){const e=dn(t);return _i.encodeByteArray(e,!0)},mn=function(t){return Ri(t).replace(/\./g,"")};function Ni(){try{return typeof indexedDB=="object"}catch{return!1}}function Oi(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Li="FirebaseError";class G extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Li,Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pi(r,i):"Error",h=`${this.serviceName}: ${o} (${s}).`;return new G(s,h,i)}}function Pi(t,e){return t.replace(Mi,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mi=/\{\$([^}]+)}/g;class vt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var p;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(p||(p={}));const Bi={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},ki=p.INFO,xi={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},ji=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=xi[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vn{constructor(e){this.name=e,this._logLevel=ki,this._logHandler=ji,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const $i=(t,e)=>e.some(n=>t instanceof n);let Ge,Xe;function Ui(){return Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fi(){return Xe||(Xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const En=new WeakMap,ne=new WeakMap,Tn=new WeakMap,Gt=new WeakMap,ye=new WeakMap;function Hi(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(M(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&En.set(n,t)}).catch(()=>{}),ye.set(e,t),e}function Vi(t){if(ne.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ne.set(t,e)}let ie={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ne.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gi(t){ie=t(ie)}function Xi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Xt(this),e,...n);return Tn.set(i,e.sort?e.sort():[e]),M(i)}:Fi().includes(t)?function(...e){return t.apply(Xt(this),e),M(En.get(this))}:function(...e){return M(t.apply(Xt(this),e))}}function Wi(t){return typeof t=="function"?Xi(t):(t instanceof IDBTransaction&&Vi(t),$i(t,Ui())?new Proxy(t,ie):t)}function M(t){if(t instanceof IDBRequest)return Hi(t);if(Gt.has(t))return Gt.get(t);const e=Wi(t);return e!==t&&(Gt.set(t,e),ye.set(e,t)),e}const Xt=t=>ye.get(t);function Ki(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),h=M(o);return i&&o.addEventListener("upgradeneeded",c=>{i(M(o.result),c.oldVersion,c.newVersion,M(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),h.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),h}const qi=["get","getKey","getAll","getAllKeys","count"],zi=["put","add","delete","clear"],Wt=new Map;function We(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wt.get(e))return Wt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=zi.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||qi.includes(n)))return;const r=async function(o,...h){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(h.shift())),(await Promise.all([l[n](...h),s&&c.done]))[0]};return Wt.set(e,r),r}Gi(t=>({...t,get:(e,n,i)=>We(e,n)||t.get(e,n,i),has:(e,n)=>!!We(e,n)||t.has(e,n)}));/**
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
 */class Yi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ji(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ji(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const se="@firebase/app",Ke="0.9.7";/**
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
 */const U=new vn("@firebase/app"),Qi="@firebase/app-compat",Zi="@firebase/analytics-compat",ts="@firebase/analytics",es="@firebase/app-check-compat",ns="@firebase/app-check",is="@firebase/auth",ss="@firebase/auth-compat",rs="@firebase/database",os="@firebase/database-compat",hs="@firebase/functions",as="@firebase/functions-compat",cs="@firebase/installations",ls="@firebase/installations-compat",us="@firebase/messaging",fs="@firebase/messaging-compat",ps="@firebase/performance",gs="@firebase/performance-compat",ds="@firebase/remote-config",ms="@firebase/remote-config-compat",ys="@firebase/storage",vs="@firebase/storage-compat",Es="@firebase/firestore",Ts="@firebase/firestore-compat",ws="firebase",As="9.19.1",Is={[se]:"fire-core",[Qi]:"fire-core-compat",[ts]:"fire-analytics",[Zi]:"fire-analytics-compat",[ns]:"fire-app-check",[es]:"fire-app-check-compat",[is]:"fire-auth",[ss]:"fire-auth-compat",[rs]:"fire-rtdb",[os]:"fire-rtdb-compat",[hs]:"fire-fn",[as]:"fire-fn-compat",[cs]:"fire-iid",[ls]:"fire-iid-compat",[us]:"fire-fcm",[fs]:"fire-fcm-compat",[ps]:"fire-perf",[gs]:"fire-perf-compat",[ds]:"fire-rc",[ms]:"fire-rc-compat",[ys]:"fire-gcs",[vs]:"fire-gcs-compat",[Es]:"fire-fst",[Ts]:"fire-fst-compat","fire-js":"fire-js",[ws]:"fire-js-all"};/**
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
 */const Cs=new Map,qe=new Map;function Ss(t,e){try{t.container.addComponent(e)}catch(n){U.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(qe.has(e))return U.debug(`There were multiple attempts to register component ${e}.`),!1;qe.set(e,t);for(const n of Cs.values())Ss(n,t);return!0}/**
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
 */const Ds={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new yn("app","Firebase",Ds);/**
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
 */const _s=As;function J(t,e,n){var i;let s=(i=Is[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const h=[`Unable to register library "${s}" with version "${e}":`];r&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&h.push("and"),o&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),U.warn(h.join(" "));return}Et(new vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bs="firebase-heartbeat-database",Rs=1,Z="firebase-heartbeat-store";let Kt=null;function wn(){return Kt||(Kt=Ki(bs,Rs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}}).catch(t=>{throw ve.create("idb-open",{originalErrorMessage:t.message})})),Kt}async function Ns(t){try{return(await wn()).transaction(Z).objectStore(Z).get(An(t))}catch(e){if(e instanceof G)U.warn(e.message);else{const n=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});U.warn(n.message)}}}async function ze(t,e){try{const i=(await wn()).transaction(Z,"readwrite");return await i.objectStore(Z).put(e,An(t)),i.done}catch(n){if(n instanceof G)U.warn(n.message);else{const i=ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});U.warn(i.message)}}}function An(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Os=1024,Ls=30*24*60*60*1e3;class Ps{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bs(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ye();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Ls}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ye(),{heartbeatsToSend:n,unsentEntries:i}=Ms(this._heartbeatsCache.heartbeats),s=mn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ye(){return new Date().toISOString().substring(0,10)}function Ms(t,e=Os){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Je(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Je(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Bs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ni()?Oi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ns(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Je(t){return mn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ks(t){Et(new vt("platform-logger",e=>new Yi(e),"PRIVATE")),Et(new vt("heartbeat",e=>new Ps(e),"PRIVATE")),J(se,Ke,t),J(se,Ke,"esm2017"),J("fire-js","")}ks("");var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a,Ee=Ee||{},u=xs||self;function Tt(){}function bt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ot(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function js(t){return Object.prototype.hasOwnProperty.call(t,qt)&&t[qt]||(t[qt]=++$s)}var qt="closure_uid_"+(1e9*Math.random()>>>0),$s=0;function Us(t,e,n){return t.call.apply(t.bind,arguments)}function Fs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T=Us:T=Fs,T.apply(null,arguments)}function gt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),h=2;h<arguments.length;h++)o[h-2]=arguments[h];return e.prototype[s].apply(i,o)}}function B(){this.s=this.s,this.o=this.o}var Hs=0;B.prototype.s=!1;B.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hs!=0)&&js(this)};B.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const In=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Te(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Qe(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(bt(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function w(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var Vs=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",Tt,e),u.removeEventListener("test",Tt,e)}catch{}return t}();function wt(t){return/^[\s\xa0]*$/.test(t)}var Ze=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zt(t,e){return t<e?-1:t>e?1:0}function Rt(){var t=u.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return Rt().indexOf(t)!=-1}function we(t){return we[" "](t),t}we[" "]=Tt;function Gs(t){var e=Ks;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Xs=N("Opera"),tt=N("Trident")||N("MSIE"),Cn=N("Edge"),re=Cn||tt,Sn=N("Gecko")&&!(Rt().toLowerCase().indexOf("webkit")!=-1&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),Ws=Rt().toLowerCase().indexOf("webkit")!=-1&&!N("Edge");function Dn(){var t=u.document;return t?t.documentMode:void 0}var oe;t:{var Yt="",Jt=function(){var t=Rt();if(Sn)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cn)return/Edge\/([\d\.]+)/.exec(t);if(tt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ws)return/WebKit\/(\S+)/.exec(t);if(Xs)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jt&&(Yt=Jt?Jt[1]:""),tt){var Qt=Dn();if(Qt!=null&&Qt>parseFloat(Yt)){oe=String(Qt);break t}}oe=Yt}var Ks={};function qs(){return Gs(function(){let t=0;const e=Ze(String(oe)).split("."),n=Ze("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=zt(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||zt(s[2].length==0,r[2].length==0)||zt(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}u.document&&tt&&Dn();function et(t,e){if(w.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sn){t:{try{we(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.X.h.call(this)}}E(et,w);var zs={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),Ys=0;function Js(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Ys,this.ba=this.ea=!1}function Nt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ae(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function _n(t){const e={};for(const n in t)e[n]=t[n];return e}const tn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bn(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<tn.length;r++)n=tn[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ot(t){this.src=t,this.g={},this.h=0}Ot.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ae(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Js(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function he(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=In(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Nt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ae(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Ie="closure_lm_"+(1e6*Math.random()|0),Zt={};function Rn(t,e,n,i,s){if(i&&i.once)return On(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rn(t,e[r],n,i,s);return null}return n=De(n),t&&t[ht]?t.N(e,n,ot(i)?!!i.capture:!!i,s):Nn(t,e,n,!1,i,s)}function Nn(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ot(s)?!!s.capture:!!s,h=Se(t);if(h||(t[Ie]=h=new Ot(t)),n=h.add(e,n,i,o,r),n.proxy)return n;if(i=Qs(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Vs||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Pn(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qs(){function t(n){return e.call(t.src,t.listener,n)}const e=Zs;return t}function On(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)On(t,e[r],n,i,s);return null}return n=De(n),t&&t[ht]?t.O(e,n,ot(i)?!!i.capture:!!i,s):Nn(t,e,n,!0,i,s)}function Ln(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ln(t,e[r],n,i,s);else i=ot(i)?!!i.capture:!!i,n=De(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ae(r,n,i,s),-1<n&&(Nt(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Se(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ae(e,n,i,s)),(n=-1<t?e[t]:null)&&Ce(n))}function Ce(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ht])he(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Pn(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Se(e))?(he(n,t),n.h==0&&(n.src=null,e[Ie]=null)):Nt(t)}}}function Pn(t){return t in Zt?Zt[t]:Zt[t]="on"+t}function Zs(t,e){if(t.ba)t=!0;else{e=new et(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ce(t),t=n.call(i,e)}return t}function Se(t){return t=t[Ie],t instanceof Ot?t:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(t){return typeof t=="function"?t:(t[te]||(t[te]=function(e){return t.handleEvent(e)}),t[te])}function y(){B.call(this),this.i=new Ot(this),this.P=this,this.I=null}E(y,B);y.prototype[ht]=!0;y.prototype.removeEventListener=function(t,e,n,i){Ln(this,t,e,n,i)};function v(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new w(e,t);else if(e instanceof w)e.target=e.target||t;else{var s=e;e=new w(i,t),bn(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=dt(o,i,!0,e)&&s}if(o=e.g=t,s=dt(o,i,!0,e)&&s,s=dt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=dt(o,i,!1,e)&&s}y.prototype.M=function(){if(y.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Nt(n[i]);delete t.g[e],t.h--}}this.I=null};y.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};y.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function dt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var h=o.listener,c=o.ha||o.src;o.ea&&he(t.i,o),s=h.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var _e=u.JSON.stringify;function tr(){var t=kn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class er{constructor(){this.h=this.g=null}add(e,n){const i=Mn.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Mn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nr,t=>t.reset());class nr{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ir(t){u.setTimeout(()=>{throw t},0)}function Bn(t,e){ce||sr(),le||(ce(),le=!0),kn.add(t,e)}var ce;function sr(){var t=u.Promise.resolve(void 0);ce=function(){t.then(rr)}}var le=!1,kn=new er;function rr(){for(var t;t=tr();){try{t.h.call(t.g)}catch(n){ir(n)}var e=Mn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}le=!1}function Lt(t,e){y.call(this),this.h=t||1,this.g=e||u,this.j=T(this.lb,this),this.l=Date.now()}E(Lt,y);a=Lt.prototype;a.ca=!1;a.R=null;a.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),v(this,"tick"),this.ca&&(be(this),this.start()))}};a.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function be(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}a.M=function(){Lt.X.M.call(this),be(this),delete this.g};function Re(t,e,n){if(typeof t=="function")n&&(t=T(t,n));else if(t&&typeof t.handleEvent=="function")t=T(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function xn(t){t.g=Re(()=>{t.g=null,t.i&&(t.i=!1,xn(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class or extends B{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xn(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(t){B.call(this),this.h=t,this.g={}}E(nt,B);var en=[];function jn(t,e,n,i){Array.isArray(n)||(n&&(en[0]=n.toString()),n=en);for(var s=0;s<n.length;s++){var r=Rn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $n(t){Ae(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ce(e)},t),t.g={}}nt.prototype.M=function(){nt.X.M.call(this),$n(this)};nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pt(){this.g=!0}Pt.prototype.Aa=function(){this.g=!1};function hr(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",h=r.split("&"),c=0;c<h.length;c++){var l=h[c].split("=");if(1<l.length){var d=l[0];l=l[1];var I=d.split("_");o=2<=I.length&&I[1]=="type"?o+(d+"="+l+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ar(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function H(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lr(t,n)+(i?" "+i:"")})}function cr(t,e){t.info(function(){return"TIMEOUT: "+e})}Pt.prototype.info=function(){};function lr(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _e(n)}catch{return e}}var X={},nn=null;function Ne(){return nn=nn||new y}X.Pa="serverreachability";function Un(t){w.call(this,X.Pa,t)}E(Un,w);function it(t){const e=Ne();v(e,new Un(e))}X.STAT_EVENT="statevent";function Fn(t,e){w.call(this,X.STAT_EVENT,t),this.stat=e}E(Fn,w);function A(t){const e=Ne();v(e,new Fn(e,t))}X.Qa="timingevent";function Hn(t,e){w.call(this,X.Qa,t),this.size=e}E(Hn,w);function at(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){t()},e)}var Oe={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ur={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Le(){}Le.prototype.h=null;function sn(t){return t.h||(t.h=t.i())}function fr(){}var ct={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pe(){w.call(this,"d")}E(Pe,w);function Me(){w.call(this,"c")}E(Me,w);var ue;function Mt(){}E(Mt,Le);Mt.prototype.g=function(){return new XMLHttpRequest};Mt.prototype.i=function(){return{}};ue=new Mt;function lt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new nt(this),this.O=pr,t=re?125:void 0,this.T=new Lt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vn}function Vn(){this.i=null,this.g="",this.h=!1}var pr=45e3,fe={},At={};a=lt.prototype;a.setTimeout=function(t){this.O=t};function pe(t,e,n){t.K=1,t.v=kt(P(e)),t.s=n,t.P=!0,Gn(t,null)}function Gn(t,e){t.F=Date.now(),ut(t),t.A=P(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Qn(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Vn,t.g=Ei(t.l,n?e:null,!t.s),0<t.N&&(t.L=new or(T(t.La,t,t.g),t.N)),jn(t.S,t.g,"readystatechange",t.ib),e=t.H?_n(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),it(),hr(t.j,t.u,t.A,t.m,t.U,t.s)}a.ib=function(t){t=t.target;const e=this.L;e&&L(t)==3?e.l():this.La(t)};a.La=function(t){try{if(t==this.g)t:{const d=L(this.g);var e=this.g.Ea();const I=this.g.aa();if(!(3>d)&&(d!=3||re||this.g&&(this.h.h||this.g.fa()||an(this.g)))){this.I||d!=4||e==7||(e==8||0>=I?it(3):it(2)),Bt(this);var n=this.g.aa();this.Y=n;e:if(Xn(this)){var i=an(this.g);t="";var s=i.length,r=L(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){x(this),Q(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ar(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var h,c=this.g;if((h=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wt(h)){var l=h;break e}}l=null}if(n=l)H(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ge(this,n);else{this.i=!1,this.o=3,A(12),x(this),Q(this);break t}}this.P?(Wn(this,d,o),re&&this.i&&d==3&&(jn(this.S,this.T,"tick",this.hb),this.T.start())):(H(this.j,this.m,o,null),ge(this,o)),d==4&&x(this),this.i&&!this.I&&(d==4?di(this.l,this):(this.i=!1,ut(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,A(12)):(this.o=0,A(13)),x(this),Q(this)}}}catch{}finally{}};function Xn(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wn(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=gr(t,n),s==At){e==4&&(t.o=4,A(14),i=!1),H(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fe){t.o=4,A(15),H(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else H(t.j,t.m,s,null),ge(t,s);Xn(t)&&s!=At&&s!=fe&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,A(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fe(e),e.K=!0,A(11))):(H(t.j,t.m,n,"[Invalid Chunked Response]"),x(t),Q(t))}a.hb=function(){if(this.g){var t=L(this.g),e=this.g.fa();this.C<e.length&&(Bt(this),Wn(this,t,e),this.i&&t!=4&&ut(this))}};function gr(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?At:(n=Number(e.substring(n,i)),isNaN(n)?fe:(i+=1,i+n>e.length?At:(e=e.substr(i,n),t.C=i+n,e)))}a.cancel=function(){this.I=!0,x(this)};function ut(t){t.V=Date.now()+t.O,Kn(t,t.O)}function Kn(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=at(T(t.gb,t),e)}function Bt(t){t.B&&(u.clearTimeout(t.B),t.B=null)}a.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cr(this.j,this.A),this.K!=2&&(it(),A(17)),x(this),this.o=2,Q(this)):Kn(this,this.V-t)};function Q(t){t.l.G==0||t.I||di(t.l,t)}function x(t){Bt(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,be(t.T),$n(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ge(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||de(n.h,t))){if(!t.J&&de(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)St(n),Ut(n);else break t;Ue(n),A(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=at(T(n.cb,n),6e3));if(1>=ei(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else j(n,11)}else if((t.J||n.g==t)&&St(n),!wt(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const d=l[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const I=l[4];I!=null&&(n.Ca=I,n.j.info("SVER="+n.Ca));const O=l[5];O!=null&&typeof O=="number"&&0<O&&(i=1.5*O,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const R=t.g;if(R){const F=R.g?R.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(F){var r=i.h;r.g||F.indexOf("spdy")==-1&&F.indexOf("quic")==-1&&F.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Be(r,r.h),r.h=null))}if(i.D){const Vt=R.g?R.g.getResponseHeader("X-HTTP-Session-Id"):null;Vt&&(i.za=Vt,g(i.F,i.D,Vt))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=vi(i,i.H?i.ka:null,i.V),o.J){ni(i.h,o);var h=o,c=i.J;c&&h.setTimeout(c),h.B&&(Bt(h),ut(h)),i.g=o}else pi(i);0<n.i.length&&Ft(n)}else l[0]!="stop"&&l[0]!="close"||j(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?j(n,7):$e(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}it(4)}catch{}}function dr(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function mr(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function qn(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mr(t),i=dr(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var zn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yr(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $){this.h=e!==void 0?e:t.h,It(this,t.j),this.s=t.s,this.g=t.g,Ct(this,t.m),this.l=t.l,e=t.i;var n=new st;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),rn(this,n),this.o=t.o}else t&&(n=String(t).match(zn))?(this.h=!!e,It(this,n[1]||"",!0),this.s=z(n[2]||""),this.g=z(n[3]||"",!0),Ct(this,n[4]),this.l=z(n[5]||"",!0),rn(this,n[6]||"",!0),this.o=z(n[7]||"")):(this.h=!!e,this.i=new st(null,this.h))}$.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Y(e,on,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Y(e,on,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Y(n,n.charAt(0)=="/"?Tr:Er,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Y(n,Ar)),t.join("")};function P(t){return new $(t)}function It(t,e,n){t.j=n?z(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ct(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rn(t,e,n){e instanceof st?(t.i=e,Ir(t.i,t.h)):(n||(e=Y(e,wr)),t.i=new st(e,t.h))}function g(t,e,n){t.i.set(e,n)}function kt(t){return g(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function z(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Y(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var on=/[#\/\?@]/g,Er=/[#\?:]/g,Tr=/[#\?]/g,wr=/[#\?@]/g,Ar=/#/g;function st(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function k(t){t.g||(t.g=new Map,t.h=0,t.i&&yr(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}a=st.prototype;a.add=function(t,e){k(this),this.i=null,t=W(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yn(t,e){k(t),e=W(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jn(t,e){return k(t),e=W(t,e),t.g.has(e)}a.forEach=function(t,e){k(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};a.oa=function(){k(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};a.W=function(t){k(this);let e=[];if(typeof t=="string")Jn(this,t)&&(e=e.concat(this.g.get(W(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};a.set=function(t,e){return k(this),this.i=null,t=W(this,t),Jn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};a.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qn(t,e,n){Yn(t,e),0<n.length&&(t.i=null,t.g.set(W(t,e),Te(n)),t.h+=n.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function W(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ir(t,e){e&&!t.j&&(k(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Yn(this,i),Qn(this,s,n))},t)),t.j=e}var Cr=class{constructor(t,e){this.h=t,this.g=e}};function Zn(t){this.l=t||Sr,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(u.g&&u.g.Ga&&u.g.Ga()&&u.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sr=10;function ti(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ei(t){return t.h?1:t.g?t.g.size:0}function de(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Be(t,e){t.g?t.g.add(e):t.h=e}function ni(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Zn.prototype.cancel=function(){if(this.i=ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ii(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Te(t.i)}function ke(){}ke.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)};ke.prototype.parse=function(t){return u.JSON.parse(t,void 0)};function Dr(){this.g=new ke}function _r(t,e,n){const i=n||"";try{qn(t,function(s,r){let o=s;ot(s)&&(o=_e(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function br(t,e){const n=new Pt;if(u.Image){const i=new Image;i.onload=gt(mt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=gt(mt,n,i,"TestLoadImage: error",!1,e),i.onabort=gt(mt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=gt(mt,n,i,"TestLoadImage: timeout",!1,e),u.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function mt(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function xt(t){this.l=t.ac||null,this.j=t.jb||!1}E(xt,Le);xt.prototype.g=function(){return new jt(this.l,this.j)};xt.prototype.i=function(t){return function(){return t}}({});function jt(t,e){y.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xe,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}E(jt,y);var xe=0;a=jt.prototype;a.open=function(t,e){if(this.readyState!=xe)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rt(this)};a.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=xe};a.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rt(this)),this.g&&(this.readyState=3,rt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;si(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function si(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}a.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ft(this):rt(this),this.readyState==3&&si(this)}};a.Va=function(t){this.g&&(this.response=this.responseText=t,ft(this))};a.Ua=function(t){this.g&&(this.response=t,ft(this))};a.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rt(t)}a.setRequestHeader=function(t,e){this.v.append(t,e)};a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Rr=u.JSON.parse;function m(t){y.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ri,this.K=this.L=!1}E(m,y);var ri="",Nr=/^https?$/i,Or=["POST","PUT"];a=m.prototype;a.Ka=function(t){this.L=t};a.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ue.g(),this.C=this.u?sn(this.u):sn(ue),this.g.onreadystatechange=T(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){hn(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=u.FormData&&t instanceof u.FormData,!(0<=In(Or,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ai(this),0<this.B&&((this.K=Lr(this.g))?(this.g.timeout=this.B,this.g.ontimeout=T(this.qa,this)):this.A=Re(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){hn(this,r)}};function Lr(t){return tt&&qs()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}a.qa=function(){typeof Ee<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,v(this,"timeout"),this.abort(8))};function hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oi(t),$t(t)}function oi(t){t.D||(t.D=!0,v(t,"complete"),v(t,"error"))}a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,v(this,"complete"),v(this,"abort"),$t(this))};a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$t(this,!0)),m.X.M.call(this)};a.Ha=function(){this.s||(this.F||this.v||this.l?hi(this):this.fb())};a.fb=function(){hi(this)};function hi(t){if(t.h&&typeof Ee<"u"&&(!t.C[1]||L(t)!=4||t.aa()!=2)){if(t.v&&L(t)==4)Re(t.Ha,0,t);else if(v(t,"readystatechange"),L(t)==4){t.h=!1;try{const h=t.aa();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=h===0){var s=String(t.H).match(zn)[1]||null;if(!s&&u.self&&u.self.location){var r=u.self.location.protocol;s=r.substr(0,r.length-1)}i=!Nr.test(s?s.toLowerCase():"")}n=i}if(n)v(t,"complete"),v(t,"success");else{t.m=6;try{var o=2<L(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",oi(t)}}finally{$t(t)}}}}function $t(t,e){if(t.g){ai(t);const n=t.g,i=t.C[0]?Tt:null;t.g=null,t.C=null,e||v(t,"ready");try{n.onreadystatechange=i}catch{}}}function ai(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function L(t){return t.g?t.g.readyState:0}a.aa=function(){try{return 2<L(this)?this.g.status:-1}catch{return-1}};a.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};a.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Rr(e)}};function an(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ri:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}a.Ea=function(){return this.m};a.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ci(t){let e="";return Ae(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function je(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ci(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):g(t,e,n))}function q(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function li(t){this.Ca=0,this.i=[],this.j=new Pt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=q("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=q("baseRetryDelayMs",5e3,t),this.bb=q("retryDelaySeedMs",1e4,t),this.$a=q("forwardChannelMaxRetries",2,t),this.ta=q("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Zn(t&&t.concurrentRequestLimit),this.Fa=new Dr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}a=li.prototype;a.ma=8;a.G=1;function $e(t){if(ui(t),t.G==3){var e=t.U++,n=P(t.F);g(n,"SID",t.I),g(n,"RID",e),g(n,"TYPE","terminate"),pt(t,n),e=new lt(t,t.j,e,void 0),e.K=2,e.v=kt(P(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ei(e.l,null),e.g.da(e.v)),e.F=Date.now(),ut(e)}yi(t)}function Ut(t){t.g&&(Fe(t),t.g.cancel(),t.g=null)}function ui(t){Ut(t),t.u&&(u.clearTimeout(t.u),t.u=null),St(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&u.clearTimeout(t.m),t.m=null)}function Ft(t){ti(t.h)||t.m||(t.m=!0,Bn(t.Ja,t),t.C=0)}function Pr(t,e){return ei(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=at(T(t.Ja,t,e),mi(t,t.C)),t.C++,!0)}a.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new lt(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=_n(r),bn(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fi(this,s,e),n=P(this.F),g(n,"RID",t),g(n,"CVER",22),this.D&&g(n,"X-HTTP-Session-Id",this.D),pt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ci(r)))+"&"+e:this.o&&je(n,this.o,r)),Be(this.h,s),this.Ya&&g(n,"TYPE","init"),this.O?(g(n,"$req",e),g(n,"SID","null"),s.Z=!0,pe(s,n,null)):pe(s,n,e),this.G=2}}else this.G==3&&(t?cn(this,t):this.i.length==0||ti(this.h)||cn(this))};function cn(t,e){var n;e?n=e.m:n=t.U++;const i=P(t.F);g(i,"SID",t.I),g(i,"RID",n),g(i,"AID",t.T),pt(t,i),t.o&&t.s&&je(i,t.o,t.s),n=new lt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=fi(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Be(t.h,n),pe(n,i,e)}function pt(t,e){t.ia&&Ae(t.ia,function(n,i){g(e,i,n)}),t.l&&qn({},function(n,i){g(e,i,n)})}function fi(t,e,n){n=Math.min(t.i.length,n);var i=t.l?T(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let h=!0;for(let c=0;c<n;c++){let l=s[c].h;const d=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),h=!1;else try{_r(d,o,"req"+l+"_")}catch{i&&i(d)}}if(h){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function pi(t){t.g||t.u||(t.Z=1,Bn(t.Ia,t),t.A=0)}function Ue(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=at(T(t.Ia,t),mi(t,t.A)),t.A++,!0)}a.Ia=function(){if(this.u=null,gi(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=at(T(this.eb,this),t)}};a.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,A(10),Ut(this),gi(this))};function Fe(t){t.B!=null&&(u.clearTimeout(t.B),t.B=null)}function gi(t){t.g=new lt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=P(t.sa);g(e,"RID","rpc"),g(e,"SID",t.I),g(e,"CI",t.L?"0":"1"),g(e,"AID",t.T),g(e,"TYPE","xmlhttp"),pt(t,e),t.o&&t.s&&je(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=kt(P(e)),n.s=null,n.P=!0,Gn(n,t)}a.cb=function(){this.v!=null&&(this.v=null,Ut(this),Ue(this),A(19))};function St(t){t.v!=null&&(u.clearTimeout(t.v),t.v=null)}function di(t,e){var n=null;if(t.g==e){St(t),Fe(t),t.g=null;var i=2}else if(de(t.h,e))n=e.D,ni(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Ne(),v(i,new Hn(i,n)),Ft(t)}else pi(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Pr(t,e)||i==2&&Ue(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:j(t,5);break;case 4:j(t,10);break;case 3:j(t,6);break;default:j(t,2)}}}function mi(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function j(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=T(t.kb,t);n||(n=new $("//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||It(n,"https"),kt(n)),br(n.toString(),i)}else A(2);t.G=0,t.l&&t.l.va(e),yi(t),ui(t)}a.kb=function(t){t?(this.j.info("Successfully pinged google.com"),A(2)):(this.j.info("Failed to ping google.com"),A(1))};function yi(t){if(t.G=0,t.la=[],t.l){const e=ii(t.h);(e.length!=0||t.i.length!=0)&&(Qe(t.la,e),Qe(t.la,t.i),t.h.i.length=0,Te(t.i),t.i.length=0),t.l.ua()}}function vi(t,e,n){var i=n instanceof $?P(n):new $(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Ct(i,i.m);else{var s=u.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new $(null,void 0);i&&It(r,i),e&&(r.g=e),s&&Ct(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&g(i,n,e),g(i,"VER",t.ma),pt(t,i),i}function Ei(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new m(new xt({jb:!0})):new m(t.ra),e.Ka(t.H),e}function Ti(){}a=Ti.prototype;a.xa=function(){};a.wa=function(){};a.va=function(){};a.ua=function(){};a.Ra=function(){};function b(t,e){y.call(this),this.g=new li(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new K(this)}E(b,y);b.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;A(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=vi(t,null,t.V),Ft(t)};b.prototype.close=function(){$e(this.g)};b.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_e(t),t=n);e.i.push(new Cr(e.ab++,t)),e.G==3&&Ft(e)};b.prototype.M=function(){this.g.l=null,delete this.j,$e(this.g),delete this.g,b.X.M.call(this)};function wi(t){Pe.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}E(wi,Pe);function Ai(){Me.call(this),this.status=1}E(Ai,Me);function K(t){this.g=t}E(K,Ti);K.prototype.xa=function(){v(this.g,"a")};K.prototype.wa=function(t){v(this.g,new wi(t))};K.prototype.va=function(t){v(this.g,new Ai)};K.prototype.ua=function(){v(this.g,"b")};b.prototype.send=b.prototype.u;b.prototype.open=b.prototype.m;b.prototype.close=b.prototype.close;Oe.NO_ERROR=0;Oe.TIMEOUT=8;Oe.HTTP_ERROR=6;ur.COMPLETE="complete";fr.EventType=ct;ct.OPEN="a";ct.CLOSE="b";ct.ERROR="c";ct.MESSAGE="d";y.prototype.listen=y.prototype.N;m.prototype.listenOnce=m.prototype.O;m.prototype.getLastError=m.prototype.Oa;m.prototype.getLastErrorCode=m.prototype.Ea;m.prototype.getStatus=m.prototype.aa;m.prototype.getResponseJson=m.prototype.Sa;m.prototype.getResponseText=m.prototype.fa;m.prototype.send=m.prototype.da;m.prototype.setWithCredentials=m.prototype.Ka;const ln="@firebase/firestore";/**
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
 */class C{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");/**
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
 */let Ht="9.19.0";/**
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
 */const Dt=new vn("@firebase/firestore");function _(t,...e){if(Dt.logLevel<=p.DEBUG){const n=e.map(Ii);Dt.debug(`Firestore (${Ht}): ${t}`,...n)}}function He(t,...e){if(Dt.logLevel<=p.ERROR){const n=e.map(Ii);Dt.error(`Firestore (${Ht}): ${t}`,...n)}}function Ii(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ci(t="Unexpected state"){const e=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function me(t,e){t||Ci()}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends G{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class V{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mr{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Br{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(C.UNAUTHENTICATED))}shutdown(){}}class kr{constructor(e){this.t=e,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new V;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new V,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},h=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new V)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(me(typeof i.accessToken=="string"),new Mr(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new C(e)}}class xr{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=C.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jr{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new xr(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $r{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ur{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.T=n.token,new $r(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fr(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Hr{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Fr(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function un(t,e){return t<e?-1:t>e?1:0}/**
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
 */class yt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new yt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?un(this.nanoseconds,e.nanoseconds):un(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function Si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vr{constructor(e,n,i,s,r,o,h,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=h,this.useFetchStreams=c}}class _t{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _t&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var fn,f;(f=fn||(fn={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";function ee(){return typeof document<"u"?document:null}/**
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
 */class Gr{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Ve{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new V,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,h=new Ve(e,n,o,s,r);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xr(t,e){if(He("AsyncQueue",`${e}: ${t}`),Si(t))return new D(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wr{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=C.UNAUTHENTICATED,this.clientId=Hr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new V;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Xr(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */const pn=new Map;function Kr(t,e,n,i){if(e===!0&&i===!0)throw new D(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class gn{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Kr("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class qr{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gn(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Br;switch(n.type){case"firstParty":return new jr(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pn.get(e);n&&(_("ComponentProvider","Removing Datastore"),pn.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class zr{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Gr(this,"async_queue_retry"),this.qc=()=>{const n=ee();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ee();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ee();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new V;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Si(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw He("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=Ve.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&Ci()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Yr extends qr{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new zr,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jr(this),this._firestoreClient.terminate()}}function Jr(t){var e,n,i;const s=t._freezeSettings(),r=function(o,h,c,l){return new Vr(o,h,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Wr(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Ht=n})(_s),Et(new vt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Yr(new kr(n.getProvider("auth-internal")),new Ur(n.getProvider("app-check-internal")),function(h,c){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _t(h.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),J(ln,"3.10.0",t),J(ln,"3.10.0","esm2017")})();export{yt as n};
//# sourceMappingURL=index.esm2017-1d82304b.js.map
