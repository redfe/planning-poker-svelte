var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(t){return null==t?"":t}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),h=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&h(f)}function p(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=E("style");return function(t,e){p(t.head||t,e)}(g(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function T(){return b(" ")}function I(){return b("")}function C(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function _(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function D(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function R(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const x=new Map;let O,M=0;function F(t,e,n,s,i,r,o,a=0){const c=16.666/s;let l="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*r(t);l+=100*t+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=g(t),{stylesheet:f,rules:p}=x.get(d)||function(t,e){const n={stylesheet:m(e),rules:{}};return x.set(t,n),n}(d,t);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${h} ${s}ms linear ${i}ms 1 both`,M+=1,h}function P(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-s.length;i&&(t.style.animation=s.join(", "),M-=i,M||h((()=>{M||(x.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),x.clear())})))}function V(t){O=t}function U(){if(!O)throw new Error("Function called outside component initialization");return O}function $(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const q=[],j=[],B=[],H=[],K=Promise.resolve();let z=!1;function G(t){B.push(t)}const W=new Set;let Q,X=0;function Y(){const t=O;do{for(;X<q.length;){const t=q[X];X++,V(t),J(t.$$)}for(V(null),q.length=0,X=0;j.length;)j.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];W.has(e)||(W.add(e),e())}B.length=0}while(q.length);for(;H.length;)H.pop()();z=!1,W.clear(),V(t)}function J(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function Z(t,e,n){t.dispatchEvent(L(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function st(){et.r||i(et.c),et=et.p}function it(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function rt(t,e,n,s){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const ot={duration:0};function at(n,s,o,a){let c=s(n,o),l=a?0:1,p=null,g=null,m=null;function y(){m&&P(n,m)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:r=0,duration:o=300,easing:a=e,tick:w=t,css:E}=c||ot,b={start:u()+r,b:s};s||(b.group=et,et.r+=1),p||g?g=b:(E&&(y(),m=F(n,l,s,o,r,a,E)),s&&w(0,1),p=v(b,o),G((()=>Z(n,s,"start"))),function(t){let e;0===d.size&&h(f),new Promise((n=>{d.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(p=v(g,o),g=null,Z(n,p.b,"start"),E&&(y(),m=F(n,l,p.b,p.duration,0,a,c.css))),p)if(t>=p.end)w(l=p.b,1-l),Z(n,p.b,"end"),g||(p.b?y():--p.group.r||i(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;l=p.a+p.d*a(e/p.duration),w(l,1-l)}return!(!p&&!g)})))}return{run(t){r(c)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{c=c(),w(t)})):w(t)},end(){y(),p=g=null}}}function ct(t,e){rt(t,1,1,(()=>{e.delete(t.key)}))}function lt(t){t&&t.c()}function ut(t,e,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),o||G((()=>{const e=c.map(n).filter(r);l?l.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(G)}function ht(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(q.push(t),z||(z=!0,K.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,r,o,a,c,l,u=[-1]){const h=O;V(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&dt(e,t)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&it(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),Y()}V(h)}class pt{$destroy(){ht(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt=[];function mt(e,n=t){let s;const i=new Set;function r(t){if(o(e,t)&&(e=t,s)){const t=!gt.length;for(const t of i)t[1](),gt.push(t,e);if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(s=n(r)||t),o(e),()=>{i.delete(c),0===i.size&&(s(),s=null)}}}}var yt,vt=new Uint8Array(16);function wt(){if(!yt&&!(yt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return yt(vt)}var Et=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function bt(t){return"string"==typeof t&&Et.test(t)}for(var Tt=[],It=0;It<256;++It)Tt.push((It+256).toString(16).substr(1));function Ct(t,e,n){var s=(t=t||{}).random||(t.rng||wt)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=s[i];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Tt[t[e+0]]+Tt[t[e+1]]+Tt[t[e+2]]+Tt[t[e+3]]+"-"+Tt[t[e+4]]+Tt[t[e+5]]+"-"+Tt[t[e+6]]+Tt[t[e+7]]+"-"+Tt[t[e+8]]+Tt[t[e+9]]+"-"+Tt[t[e+10]]+Tt[t[e+11]]+Tt[t[e+12]]+Tt[t[e+13]]+Tt[t[e+14]]+Tt[t[e+15]]).toLowerCase();if(!bt(n))throw TypeError("Stringified UUID is invalid");return n}(s)}
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
     */
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
     */class St{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function At(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class kt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nt.prototype.create)}}class Nt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(_t,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new kt(s,o,n)}}const _t=/\{\$([^}]+)}/g;function Dt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(Rt(n)&&Rt(r)){if(!Dt(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function Rt(t){return null!==t&&"object"==typeof t}
/**
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
     */function Lt(t){return t&&t._delegate?t._delegate:t}class xt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
     */const Ot="[DEFAULT]";
/**
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
     */class Mt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new St;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===Ot?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ft{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Mt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var Pt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Pt||(Pt={}));const Vt={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},Ut=Pt.INFO,$t={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},qt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=$t[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class jt{constructor(t){this.name=t,this._logLevel=Ut,this._logHandler=qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Vt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...t),this._logHandler(this,Pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...t),this._logHandler(this,Pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...t),this._logHandler(this,Pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...t),this._logHandler(this,Pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...t),this._logHandler(this,Pt.ERROR,...t)}}
/**
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
     */class Bt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Ht="@firebase/app",Kt="0.7.16",zt=new jt("@firebase/app"),Gt="[DEFAULT]",Wt={[Ht]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qt=new Map,Xt=new Map;function Yt(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(Xt.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Xt.set(e,t);for(const e of Qt.values())Yt(e,t);return!0}
/**
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
     */
const Zt=new Nt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
     */
class te{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}
/**
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
     */function ee(t,e,n){var s;let i=null!==(s=Wt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void zt.warn(t.join(" "))}Jt(new xt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
     */var ne;ne="",Jt(new xt("platform-logger",(t=>new Bt(t)),"PRIVATE")),ee(Ht,Kt,ne),ee(Ht,Kt,"esm2017"),ee("fire-js","");
/**
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
     */
ee("firebase","9.6.6","app");var se,ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},re=re||{},oe=ie||self;function ae(){}function ce(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function le(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ue="closure_uid_"+(1e9*Math.random()>>>0),he=0;function de(t,e,n){return t.call.apply(t.bind,arguments)}function fe(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function pe(t,e,n){return(pe=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?de:fe).apply(null,arguments)}function ge(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function ye(){this.s=this.s,this.o=this.o}var ve={};ye.prototype.s=!1,ye.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ue)&&t[ue]||(t[ue]=++he)}(this);delete ve[t]}},ye.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const we=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ee=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function be(t){return Array.prototype.concat.apply([],arguments)}function Te(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ie(t){return/^[\s\xa0]*$/.test(t)}var Ce,Se=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ae(t,e){return-1!=t.indexOf(e)}function ke(t,e){return t<e?-1:t>e?1:0}t:{var Ne=oe.navigator;if(Ne){var _e=Ne.userAgent;if(_e){Ce=_e;break t}}Ce=""}function De(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Re(t){const e={};for(const n in t)e[n]=t[n];return e}var Le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xe(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Le.length;e++)n=Le[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Oe(t){return Oe[" "](t),t}Oe[" "]=ae;var Me,Fe,Pe=Ae(Ce,"Opera"),Ve=Ae(Ce,"Trident")||Ae(Ce,"MSIE"),Ue=Ae(Ce,"Edge"),$e=Ue||Ve,qe=Ae(Ce,"Gecko")&&!(Ae(Ce.toLowerCase(),"webkit")&&!Ae(Ce,"Edge"))&&!(Ae(Ce,"Trident")||Ae(Ce,"MSIE"))&&!Ae(Ce,"Edge"),je=Ae(Ce.toLowerCase(),"webkit")&&!Ae(Ce,"Edge");function Be(){var t=oe.document;return t?t.documentMode:void 0}t:{var He="",Ke=(Fe=Ce,qe?/rv:([^\);]+)(\)|;)/.exec(Fe):Ue?/Edge\/([\d\.]+)/.exec(Fe):Ve?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Fe):je?/WebKit\/(\S+)/.exec(Fe):Pe?/(?:Version)[ \/]?(\S+)/.exec(Fe):void 0);if(Ke&&(He=Ke?Ke[1]:""),Ve){var ze=Be();if(null!=ze&&ze>parseFloat(He)){Me=String(ze);break t}}Me=He}var Ge,We={};function Qe(){return function(t){var e=We;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Se(String(Me)).split("."),n=Se("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ke(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ke(0==i[2].length,0==r[2].length)||ke(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(oe.document&&Ve){var Xe=Be();Ge=Xe||(parseInt(Me,10)||void 0)}else Ge=void 0;var Ye=Ge,Je=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",ae,e),oe.removeEventListener("test",ae,e)}catch(t){}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function tn(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qe){t:{try{Oe(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:en[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tn.Z.h.call(this)}}Ze.prototype.h=function(){this.defaultPrevented=!0},me(tn,Ze);var en={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),sn=0;function rn(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++sn,this.ca=this.fa=!1}function on(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function an(t){this.src=t,this.g={},this.h=0}function cn(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=we(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(on(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ln(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}an.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ln(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new rn(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var un="closure_lm_"+(1e6*Math.random()|0),hn={};function dn(t,e,n,s,i){if(s&&s.once)return pn(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)dn(t,e[r],n,s,i);return null}return n=bn(n),t&&t[nn]?t.N(e,n,le(s)?!!s.capture:!!s,i):fn(t,e,n,!1,s,i)}function fn(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=le(i)?!!i.capture:!!i,a=wn(t);if(a||(t[un]=a=new an(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=vn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Je||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(yn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function pn(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)pn(t,e[r],n,s,i);return null}return n=bn(n),t&&t[nn]?t.O(e,n,le(s)?!!s.capture:!!s,i):fn(t,e,n,!0,s,i)}function gn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)gn(t,e[r],n,s,i);else s=le(s)?!!s.capture:!!s,n=bn(n),t&&t[nn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ln(r=t.g[e],n,s,i))&&(on(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=wn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ln(e,n,s,i)),(n=-1<t?e[t]:null)&&mn(n))}function mn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[nn])cn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(yn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=wn(e))?(cn(n,t),0==n.h&&(n.src=null,e[un]=null)):on(t)}}}function yn(t){return t in hn?hn[t]:hn[t]="on"+t}function vn(t,e){if(t.ca)t=!0;else{e=new tn(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&mn(t),t=n.call(s,e)}return t}function wn(t){return(t=t[un])instanceof an?t:null}var En="__closure_events_fn_"+(1e9*Math.random()>>>0);function bn(t){return"function"==typeof t?t:(t[En]||(t[En]=function(e){return t.handleEvent(e)}),t[En])}function Tn(){ye.call(this),this.i=new an(this),this.P=this,this.I=null}function In(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;xe(e=new Ze(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Cn(o,s,!0,e)&&i}if(i=Cn(o=e.g=t,s,!0,e)&&i,i=Cn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Cn(o=e.g=n[r],s,!1,e)&&i}function Cn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&cn(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}me(Tn,ye),Tn.prototype[nn]=!0,Tn.prototype.removeEventListener=function(t,e,n,s){gn(this,t,e,n,s)},Tn.prototype.M=function(){if(Tn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)on(n[s]);delete e.g[t],e.h--}}this.I=null},Tn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Tn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Sn=oe.JSON.stringify;function An(){var t=xn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var kn,Nn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new _n),(t=>t.reset()));class _n{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dn(t){oe.setTimeout((()=>{throw t}),0)}function Rn(t,e){kn||function(){var t=oe.Promise.resolve(void 0);kn=function(){t.then(On)}}(),Ln||(kn(),Ln=!0),xn.add(t,e)}var Ln=!1,xn=new class{constructor(){this.h=this.g=null}add(t,e){const n=Nn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function On(){for(var t;t=An();){try{t.h.call(t.g)}catch(t){Dn(t)}var e=Nn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ln=!1}function Mn(t,e){Tn.call(this),this.h=t||1,this.g=e||oe,this.j=pe(this.kb,this),this.l=Date.now()}function Fn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Pn(t,e,n){if("function"==typeof t)n&&(t=pe(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=pe(t.handleEvent,t)}return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function Vn(t){t.g=Pn((()=>{t.g=null,t.i&&(t.i=!1,Vn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}me(Mn,Tn),(se=Mn.prototype).da=!1,se.S=null,se.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),In(this,"tick"),this.da&&(Fn(this),this.start()))}},se.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},se.M=function(){Mn.Z.M.call(this),Fn(this),delete this.g};class Un extends ye{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vn(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(t){ye.call(this),this.h=t,this.g={}}me($n,ye);var qn=[];function jn(t,e,n,s){Array.isArray(n)||(n&&(qn[0]=n.toString()),n=qn);for(var i=0;i<n.length;i++){var r=dn(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Bn(t){De(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mn(t)}),t),t.g={}}function Hn(){this.g=!0}function Kn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Sn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}$n.prototype.M=function(){$n.Z.M.call(this),Bn(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hn.prototype.Aa=function(){this.g=!1},Hn.prototype.info=function(){};var zn={},Gn=null;function Wn(){return Gn=Gn||new Tn}function Qn(t){Ze.call(this,zn.Ma,t)}function Xn(t){const e=Wn();In(e,new Qn(e,t))}function Yn(t,e){Ze.call(this,zn.STAT_EVENT,t),this.stat=e}function Jn(t){const e=Wn();In(e,new Yn(e,t))}function Zn(t,e){Ze.call(this,zn.Na,t),this.size=e}function ts(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return oe.setTimeout((function(){t()}),e)}zn.Ma="serverreachability",me(Qn,Ze),zn.STAT_EVENT="statevent",me(Yn,Ze),zn.Na="timingevent",me(Zn,Ze);var es={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ns={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ss(){}function is(t){return t.h||(t.h=t.i())}function rs(){}ss.prototype.h=null;var os,as={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function cs(){Ze.call(this,"d")}function ls(){Ze.call(this,"c")}function us(){}function hs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new $n(this),this.P=fs,t=$e?125:void 0,this.W=new Mn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ds}function ds(){this.i=null,this.g="",this.h=!1}me(cs,Ze),me(ls,Ze),me(us,ss),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},os=new us;var fs=45e3,ps={},gs={};function ms(t,e,n){t.K=1,t.v=Us(xs(e)),t.s=n,t.U=!0,ys(t,null)}function ys(t,e){t.F=Date.now(),bs(t),t.A=xs(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Js(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ds,t.g=Ji(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Un(pe(t.Ia,t,t.g),t.O)),jn(t.V,t.g,"readystatechange",t.gb),e=t.H?Re(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Xn(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function vs(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ws(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Es(t,n),s==gs){4==e&&(t.o=4,Jn(14),i=!1),Kn(t.j,t.m,null,"[Incomplete Response]");break}if(s==ps){t.o=4,Jn(15),Kn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Kn(t.j,t.m,s,null),As(t,s)}vs(t)&&s!=gs&&s!=ps&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Jn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hi(e),e.L=!0,Jn(11))):(Kn(t.j,t.m,n,"[Invalid Chunked Response]"),Ss(t),Cs(t))}function Es(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?gs:(n=Number(e.substring(n,s)),isNaN(n)?ps:(s+=1)+n>e.length?gs:(e=e.substr(s,n),t.C=s+n,e))}function bs(t){t.Y=Date.now()+t.P,Ts(t,t.P)}function Ts(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ts(pe(t.eb,t),e)}function Is(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}function Cs(t){0==t.l.G||t.I||Gi(t.l,t)}function Ss(t){Is(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fn(t.W),Bn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function As(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ii(n.i,t)))if(n.I=t.N,!t.J&&ii(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;zi(n),Mi(n)}Bi(n),Jn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ts(pe(n.ab,n),6e3));if(1>=si(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Qi(n,11)}else if((t.J||n.g==t)&&zi(n),!Ie(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Ae(t,"spdy")||Ae(t,"quic")||Ae(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ri(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Vs(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Yi(s,s.H?s.la:null,s.W),o.J){oi(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Is(a),bs(a)),s.g=o}else ji(s);0<n.l.length&&Vi(n)}else"stop"!=l[0]&&"close"!=l[0]||Qi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Qi(n,7):Oi(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Xn(4)}catch(t){}}function ks(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ce(t)||"string"==typeof t)Ee(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ce(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ce(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Ns(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ns)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function _s(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ds(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Ds(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Ds(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(se=hs.prototype).setTimeout=function(t){this.P=t},se.gb=function(t){t=t.target;const e=this.L;e&&3==_i(t)?e.l():this.Ia(t)},se.Ia=function(t){try{if(t==this.g)t:{const u=_i(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||$e||this.g&&(this.h.h||this.g.ga()||Di(this.g)))){this.I||4!=u||7==e||Xn(8==e||0>=h?3:2),Is(this);var n=this.g.ba();this.N=n;e:if(vs(this)){var s=Di(this.g);t="";var i=s.length,r=4==_i(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ss(this),Cs(this);var o="";break e}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ie(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Jn(12),Ss(this),Cs(this);break t}Kn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,As(this,n)}this.U?(ws(this,u,o),$e&&this.i&&3==u&&(jn(this.V,this.W,"tick",this.fb),this.W.start())):(Kn(this.j,this.m,o,null),As(this,o)),4==u&&Ss(this),this.i&&!this.I&&(4==u?Gi(this.l,this):(this.i=!1,bs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Jn(12)):(this.o=0,Jn(13)),Ss(this),Cs(this)}}}catch(t){}},se.fb=function(){if(this.g){var t=_i(this.g),e=this.g.ga();this.C<e.length&&(Is(this),ws(this,t,e),this.i&&4!=t&&bs(this))}},se.cancel=function(){this.I=!0,Ss(this)},se.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Xn(3),Jn(17)),Ss(this),this.o=2,Cs(this)):Ts(this,this.Y-t)},(se=Ns.prototype).R=function(){_s(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},se.T=function(){return _s(this),this.g.concat()},se.get=function(t,e){return Ds(this.h,t)?this.h[t]:e},se.set=function(t,e){Ds(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},se.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Rs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ls(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ls){this.g=void 0!==e?e:t.g,Os(this,t.j),this.s=t.s,Ms(this,t.i),Fs(this,t.m),this.l=t.l,e=t.h;var n=new Ws;n.i=e.i,e.g&&(n.g=new Ns(e.g),n.h=e.h),Ps(this,n),this.o=t.o}else t&&(n=String(t).match(Rs))?(this.g=!!e,Os(this,n[1]||"",!0),this.s=$s(n[2]||""),Ms(this,n[3]||"",!0),Fs(this,n[4]),this.l=$s(n[5]||"",!0),Ps(this,n[6]||"",!0),this.o=$s(n[7]||"")):(this.g=!!e,this.h=new Ws(null,this.g))}function xs(t){return new Ls(t)}function Os(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ms(t,e,n){t.i=n?$s(e,!0):e}function Fs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ps(t,e,n){e instanceof Ws?(t.h=e,function(t,e){e&&!t.j&&(Qs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Xs(this,e),Js(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=qs(e,zs)),t.h=new Ws(e,t.g))}function Vs(t,e,n){t.h.set(e,n)}function Us(t){return Vs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,js),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function js(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qs(e,Bs,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qs(e,Bs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(qs(n,"/"==n.charAt(0)?Ks:Hs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qs(n,Gs)),t.join("")};var Bs=/[#\/\?@]/g,Hs=/[#\?:]/g,Ks=/[#\?]/g,zs=/[#\?@]/g,Gs=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qs(t){t.g||(t.g=new Ns,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Xs(t,e){Qs(t),e=Zs(t,e),Ds(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Ds((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&_s(t)))}function Ys(t,e){return Qs(t),e=Zs(t,e),Ds(t.g.h,e)}function Js(t,e,n){Xs(t,e),0<n.length&&(t.i=null,t.g.set(Zs(t,e),Te(n)),t.h+=n.length)}function Zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(se=Ws.prototype).add=function(t,e){Qs(this),this.i=null,t=Zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},se.forEach=function(t,e){Qs(this),this.g.forEach((function(n,s){Ee(n,(function(n){t.call(e,n,s,this)}),this)}),this)},se.T=function(){Qs(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},se.R=function(t){Qs(this);var e=[];if("string"==typeof t)Ys(this,t)&&(e=be(e,this.g.get(Zs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=be(e,t[n])}return e},se.set=function(t,e){return Qs(this),this.i=null,Ys(this,t=Zs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},se.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},se.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function ti(t){this.l=t||ei,oe.PerformanceNavigationTiming?t=0<(t=oe.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(oe.g&&oe.g.Ea&&oe.g.Ea()&&oe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ei=10;function ni(t){return!!t.h||!!t.g&&t.g.size>=t.j}function si(t){return t.h?1:t.g?t.g.size:0}function ii(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ri(t,e){t.g?t.g.add(e):t.h=e}function oi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ai(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Te(t.i)}function ci(){}function li(){this.g=new ci}function ui(t,e,n){const s=n||"";try{ks(t,(function(t,n){let i=t;le(t)&&(i=Sn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function hi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function di(t){this.l=t.$b||null,this.j=t.ib||!1}function fi(t,e){Tn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ti.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ci.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)},ci.prototype.parse=function(t){return oe.JSON.parse(t,void 0)},me(di,ss),di.prototype.g=function(){return new fi(this.l,this.j)},di.prototype.i=function(t){return function(){return t}}({}),me(fi,Tn);var pi=0;function gi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(se=fi.prototype).open=function(t,e){if(this.readyState!=pi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)},se.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},se.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,mi(this)),this.readyState=pi},se.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==oe.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},se.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mi(this):yi(this),3==this.readyState&&gi(this)}},se.Ua=function(t){this.g&&(this.response=this.responseText=t,mi(this))},se.Ta=function(t){this.g&&(this.response=t,mi(this))},se.ha=function(){this.g&&mi(this)},se.setRequestHeader=function(t,e){this.v.append(t,e)},se.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},se.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(fi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var vi=oe.JSON.parse;function wi(t){Tn.call(this),this.headers=new Ns,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ei,this.K=this.L=!1}me(wi,Tn);var Ei="",bi=/^https?$/i,Ti=["POST","PUT"];function Ii(t){return"content-type"==t.toLowerCase()}function Ci(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Si(t),ki(t)}function Si(t){t.D||(t.D=!0,In(t,"complete"),In(t,"error"))}function Ai(t){if(t.h&&void 0!==re&&(!t.C[1]||4!=_i(t)||2!=t.ba()))if(t.v&&4==_i(t))Pn(t.Fa,0,t);else if(In(t,"readystatechange"),4==_i(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Rs)[1]||null;if(!i&&oe.self&&oe.self.location){var r=oe.self.location.protocol;i=r.substr(0,r.length-1)}s=!bi.test(i?i.toLowerCase():"")}n=s}if(n)In(t,"complete"),In(t,"success");else{t.m=6;try{var o=2<_i(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Si(t)}}finally{ki(t)}}}function ki(t,e){if(t.g){Ni(t);const n=t.g,s=t.C[0]?ae:null;t.g=null,t.C=null,e||In(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Ni(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function _i(t){return t.g?t.g.readyState:0}function Di(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ei:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ri(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return De(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Vs(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xi(t){this.za=0,this.l=[],this.h=new Hn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Li("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Li("baseRetryDelayMs",5e3,t),this.$a=Li("retryDelaySeedMs",1e4,t),this.Ya=Li("forwardChannelMaxRetries",2,t),this.ra=Li("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ti(t&&t.concurrentRequestLimit),this.Ca=new li,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Oi(t){if(Fi(t),3==t.G){var e=t.V++,n=xs(t.F);Vs(n,"SID",t.J),Vs(n,"RID",e),Vs(n,"TYPE","terminate"),$i(t,n),(e=new hs(t,t.h,e,void 0)).K=2,e.v=Us(xs(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ji(e.l,null),e.g.ea(e.v)),e.F=Date.now(),bs(e)}Xi(t)}function Mi(t){t.g&&(Hi(t),t.g.cancel(),t.g=null)}function Fi(t){Mi(t),t.u&&(oe.clearTimeout(t.u),t.u=null),zi(t),t.i.cancel(),t.m&&("number"==typeof t.m&&oe.clearTimeout(t.m),t.m=null)}function Pi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Vi(t)}function Vi(t){ni(t.i)||t.m||(t.m=!0,Rn(t.Ha,t),t.C=0)}function Ui(t,e){var n;n=e?e.m:t.V++;const s=xs(t.F);Vs(s,"SID",t.J),Vs(s,"RID",n),Vs(s,"AID",t.U),$i(t,s),t.o&&t.s&&Ri(s,t.o,t.s),n=new hs(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=qi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ri(t.i,n),ms(n,s,e)}function $i(t,e){t.j&&ks({},(function(t,n){Vs(e,n,t)}))}function qi(t,e,n){n=Math.min(t.l.length,n);var s=t.j?pe(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{ui(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function ji(t){t.g||t.u||(t.Y=1,Rn(t.Ga,t),t.A=0)}function Bi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ts(pe(t.Ga,t),Wi(t,t.A)),t.A++,!0)}function Hi(t){null!=t.B&&(oe.clearTimeout(t.B),t.B=null)}function Ki(t){t.g=new hs(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=xs(t.oa);Vs(e,"RID","rpc"),Vs(e,"SID",t.J),Vs(e,"CI",t.N?"0":"1"),Vs(e,"AID",t.U),$i(t,e),Vs(e,"TYPE","xmlhttp"),t.o&&t.s&&Ri(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Us(xs(e)),n.s=null,n.U=!0,ys(n,t)}function zi(t){null!=t.v&&(oe.clearTimeout(t.v),t.v=null)}function Gi(t,e){var n=null;if(t.g==e){zi(t),Hi(t),t.g=null;var s=2}else{if(!ii(t.i,e))return;n=e.D,oi(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;In(s=Wn(),new Zn(s,n,e,i)),Vi(t)}else ji(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(si(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ts(pe(t.Ha,t,e),Wi(t,t.C)),t.C++,0)))}(t,e)||2==s&&Bi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Qi(t,5);break;case 4:Qi(t,10);break;case 3:Qi(t,6);break;default:Qi(t,2)}}function Wi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Qi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=pe(t.jb,t);n||(n=new Ls("//www.google.com/images/cleardot.gif"),oe.location&&"http"==oe.location.protocol||Os(n,"https"),Us(n)),function(t,e){const n=new Hn;if(oe.Image){const s=new Image;s.onload=ge(hi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ge(hi,n,s,"TestLoadImage: error",!1,e),s.onabort=ge(hi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ge(hi,n,s,"TestLoadImage: timeout",!1,e),oe.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Jn(2);t.G=0,t.j&&t.j.va(e),Xi(t),Fi(t)}function Xi(t){t.G=0,t.I=-1,t.j&&(0==ai(t.i).length&&0==t.l.length||(t.i.i.length=0,Te(t.l),t.l.length=0),t.j.ua())}function Yi(t,e,n){let s=function(t){return t instanceof Ls?xs(t):new Ls(t,void 0)}(n);if(""!=s.i)e&&Ms(s,e+"."+s.i),Fs(s,s.m);else{const t=oe.location;s=function(t,e,n,s){var i=new Ls(null,void 0);return t&&Os(i,t),e&&Ms(i,e),n&&Fs(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&De(t.aa,(function(t,e){Vs(s,e,t)})),e=t.D,n=t.sa,e&&n&&Vs(s,e,n),Vs(s,"VER",t.ma),$i(t,s),s}function Ji(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new wi(new di({ib:!0})):new wi(t.qa)).L=t.H,e}function Zi(){}function tr(){if(Ve&&!(10<=Number(Ye)))throw Error("Environmental error: no available transport.")}function er(t,e){Tn.call(this),this.g=new xi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ie(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ie(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ir(this)}function nr(t){cs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){ls.call(this),this.status=1}function ir(t){this.g=t}(se=wi.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():os.g(),this.C=this.u?is(this.u):is(os),this.g.onreadystatechange=pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ci(this,t)}t=n||"";const i=new Ns(this.headers);s&&ks(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=Ii;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=oe.FormData&&t instanceof oe.FormData,!(0<=we(Ti,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ni(this),0<this.B&&((this.K=function(t){return Ve&&Qe()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.pa,this)):this.A=Pn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ci(this,t)}},se.pa=function(){void 0!==re&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,In(this,"timeout"),this.abort(8))},se.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,In(this,"complete"),In(this,"abort"),ki(this))},se.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ki(this,!0)),wi.Z.M.call(this)},se.Fa=function(){this.s||(this.F||this.v||this.l?Ai(this):this.cb())},se.cb=function(){Ai(this)},se.ba=function(){try{return 2<_i(this)?this.g.status:-1}catch(t){return-1}},se.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},se.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),vi(e)}},se.Da=function(){return this.m},se.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(se=xi.prototype).ma=8,se.G=1,se.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},se.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new hs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Re(r),xe(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=qi(this,i,e),Vs(n=xs(this.F),"RID",t),Vs(n,"CVER",22),this.D&&Vs(n,"X-HTTP-Session-Id",this.D),$i(this,n),this.o&&r&&Ri(n,this.o,r),ri(this.i,i),this.Ra&&Vs(n,"TYPE","init"),this.ja?(Vs(n,"$req",e),Vs(n,"SID","null"),i.$=!0,ms(i,n,null)):ms(i,n,e),this.G=2}}else 3==this.G&&(t?Ui(this,t):0==this.l.length||ni(this.i)||Ui(this))},se.Ga=function(){if(this.u=null,Ki(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ts(pe(this.bb,this),t)}},se.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Jn(10),Mi(this),Ki(this))},se.ab=function(){null!=this.v&&(this.v=null,Mi(this),Bi(this),Jn(19))},se.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Jn(2)):(this.h.info("Failed to ping google.com"),Jn(1))},(se=Zi.prototype).xa=function(){},se.wa=function(){},se.va=function(){},se.ua=function(){},se.Oa=function(){},tr.prototype.g=function(t,e){return new er(t,e)},me(er,Tn),er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rn(pe(t.hb,t,e))),Jn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Yi(t,null,t.W),Vi(t)},er.prototype.close=function(){Oi(this.g)},er.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Pi(this.g,e)}else this.v?((e={}).__data__=Sn(t),Pi(this.g,e)):Pi(this.g,t)},er.prototype.M=function(){this.g.j=null,delete this.j,Oi(this.g),delete this.g,er.Z.M.call(this)},me(nr,cs),me(sr,ls),me(ir,Zi),ir.prototype.xa=function(){In(this.g,"a")},ir.prototype.wa=function(t){In(this.g,new nr(t))},ir.prototype.va=function(t){In(this.g,new sr(t))},ir.prototype.ua=function(){In(this.g,"b")},tr.prototype.createWebChannel=tr.prototype.g,er.prototype.send=er.prototype.u,er.prototype.open=er.prototype.m,er.prototype.close=er.prototype.close,es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,ns.COMPLETE="complete",rs.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",Tn.prototype.listen=Tn.prototype.N,wi.prototype.listenOnce=wi.prototype.O,wi.prototype.getLastError=wi.prototype.La,wi.prototype.getLastErrorCode=wi.prototype.Da,wi.prototype.getStatus=wi.prototype.ba,wi.prototype.getResponseJson=wi.prototype.Qa,wi.prototype.getResponseText=wi.prototype.ga,wi.prototype.send=wi.prototype.ea;var rr=es,or=ns,ar=zn,cr=10,lr=11,ur=di,hr=rs,dr=wi;const fr="@firebase/firestore";
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
     */class pr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pr.UNAUTHENTICATED=new pr(null),pr.GOOGLE_CREDENTIALS=new pr("google-credentials-uid"),pr.FIRST_PARTY=new pr("first-party-uid"),pr.MOCK_USER=new pr("mock-user");
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
     */
let gr="9.6.5";
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
     */const mr=new jt("@firebase/firestore");function yr(){return mr.logLevel}function vr(t,...e){if(mr.logLevel<=Pt.DEBUG){const n=e.map(br);mr.debug(`Firestore (${gr}): ${t}`,...n)}}function wr(t,...e){if(mr.logLevel<=Pt.ERROR){const n=e.map(br);mr.error(`Firestore (${gr}): ${t}`,...n)}}function Er(t,...e){if(mr.logLevel<=Pt.WARN){const n=e.map(br);mr.warn(`Firestore (${gr}): ${t}`,...n)}}function br(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
     */var e}
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
     */function Tr(t="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+t;throw wr(e),new Error(e)}function Ir(t,e){t||Tr()}function Cr(t,e){return t}
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
     */const Sr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ar extends kt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class kr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Nr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pr.UNAUTHENTICATED)))}shutdown(){}}class Dr{constructor(t){this.t=t,this.currentUser=pr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{vr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(vr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(vr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ir("string"==typeof e.accessToken),new Nr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ir(null===t||"string"==typeof t),new pr(t)}}class Rr{constructor(t,e,n){this.type="FirstParty",this.user=pr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Lr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Rr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(pr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Or{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&vr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{vr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):vr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ir("string"==typeof t.token),new xr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
     */class Mr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
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
     */function Fr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */Mr.I=-1;class Pr{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Fr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Vr(t,e){return t<e?-1:t>e?1:0}function Ur(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class $r{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ar(Sr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ar(Sr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ar(Sr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ar(Sr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $r.fromMillis(Date.now())}static fromDate(t){return $r.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new $r(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Vr(this.nanoseconds,t.nanoseconds):Vr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class qr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new qr(t)}static min(){return new qr(new $r(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function jr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */class Kr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Tr(),void 0===n?n=t.length-e:n>t.length-e&&Tr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Kr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Kr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class zr extends Kr{construct(t,e,n){return new zr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ar(Sr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new zr(e)}static emptyPath(){return new zr([])}}const Gr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wr extends Kr{construct(t,e,n){return new Wr(t,e,n)}static isValidIdentifier(t){return Gr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Wr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Ar(Sr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Ar(Sr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ar(Sr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Ar(Sr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wr(e)}static emptyPath(){return new Wr([])}}
/**
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
     */class Qr{constructor(t){this.fields=t,t.sort(Wr.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ur(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
     */class Xr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Xr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Xr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xr.EMPTY_BYTE_STRING=new Xr("");const Yr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(Ir(!!t),"string"==typeof t){let e=0;const n=Yr.exec(t);if(Ir(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Zr(t.seconds),nanos:Zr(t.nanos)}}function Zr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function to(t){return"string"==typeof t?Xr.fromBase64String(t):Xr.fromUint8Array(t)}
/**
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
     */function eo(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function no(t){const e=t.mapValue.fields.__previous_value__;return eo(e)?no(e):e}function so(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new $r(e.seconds,e.nanos)}
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
     */function io(t){return null==t}function ro(t){return 0===t&&1/t==-1/0}
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
     */
class oo{constructor(t){this.path=t}static fromPath(t){return new oo(zr.fromString(t))}static fromName(t){return new oo(zr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===zr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new oo(new zr(t.slice()))}}
/**
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
     */function ao(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eo(t)?4:10:Tr()}function co(t,e){if(t===e)return!0;const n=ao(t);if(n!==ao(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return so(t).isEqual(so(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Jr(t.timestampValue),s=Jr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return to(t.bytesValue).isEqual(to(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Zr(t.geoPointValue.latitude)===Zr(e.geoPointValue.latitude)&&Zr(t.geoPointValue.longitude)===Zr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Zr(t.integerValue)===Zr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Zr(t.doubleValue),s=Zr(e.doubleValue);return n===s?ro(n)===ro(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Ur(t.arrayValue.values||[],e.arrayValue.values||[],co);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(jr(n)!==jr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!co(n[t],s[t])))return!1;return!0}(t,e);default:return Tr()}}function lo(t,e){return void 0!==(t.values||[]).find((t=>co(t,e)))}function uo(t,e){if(t===e)return 0;const n=ao(t),s=ao(e);if(n!==s)return Vr(n,s);switch(n){case 0:return 0;case 1:return Vr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Zr(t.integerValue||t.doubleValue),s=Zr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ho(t.timestampValue,e.timestampValue);case 4:return ho(so(t),so(e));case 5:return Vr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=to(t),s=to(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Vr(n[t],s[t]);if(0!==e)return e}return Vr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Vr(Zr(t.latitude),Zr(e.latitude));return 0!==n?n:Vr(Zr(t.longitude),Zr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=uo(n[t],s[t]);if(e)return e}return Vr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Vr(s[t],r[t]);if(0!==e)return e;const o=uo(n[s[t]],i[r[t]]);if(0!==o)return o}return Vr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Tr()}}function ho(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Vr(t,e);const n=Jr(t),s=Jr(e),i=Vr(n.seconds,s.seconds);return 0!==i?i:Vr(n.nanos,s.nanos)}function fo(t){return po(t)}function po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Jr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?to(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oo.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=po(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${po(t.fields[i])}`;return n+"}"}(t.mapValue):Tr();var e,n}function go(t){return!!t&&"integerValue"in t}function mo(t){return!!t&&"arrayValue"in t}function yo(t){return!!t&&"nullValue"in t}function vo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function Eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Eo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class bo{constructor(t){this.value=t}static empty(){return new bo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!wo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Eo(e)}setAll(t){let e=Wr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Eo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());wo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return co(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Br(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new bo(Eo(this.value))}}function To(t){const e=[];return Br(t.fields,((t,n)=>{const s=new Wr([t]);if(wo(n)){const t=To(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Qr(e)
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
     */}class Io{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new Io(t,0,qr.min(),bo.empty(),0)}static newFoundDocument(t,e,n){return new Io(t,1,e,n,0)}static newNoDocument(t,e){return new Io(t,2,e,bo.empty(),0)}static newUnknownDocument(t,e){return new Io(t,3,e,bo.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Io&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Io(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
     */class Co{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function So(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Co(t,e,n,s,i,r,o)}function Ao(t){const e=Cr(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+fo(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),io(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Uo(e.startAt)),e.endAt&&(t+="|ub:",t+=Uo(e.endAt)),e.R=t}return e.R}function ko(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!co(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bo(t.startAt,e.startAt)&&Bo(t.endAt,e.endAt)}function No(t){return oo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _o extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Do(t,e,n):"array-contains"===e?new Oo(t,n):"in"===e?new Mo(t,n):"not-in"===e?new Fo(t,n):"array-contains-any"===e?new Po(t,n):new _o(t,e,n)}static P(t,e,n){return"in"===e?new Ro(t,n):new Lo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(uo(e,this.value)):null!==e&&ao(this.value)===ao(e)&&this.v(uo(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Tr()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Do extends _o{constructor(t,e,n){super(t,e,n),this.key=oo.fromName(n.referenceValue)}matches(t){const e=oo.comparator(t.key,this.key);return this.v(e)}}class Ro extends _o{constructor(t,e){super(t,"in",e),this.keys=xo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Lo extends _o{constructor(t,e){super(t,"not-in",e),this.keys=xo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>oo.fromName(t.referenceValue)))}class Oo extends _o{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mo(e)&&lo(e.arrayValue,this.value)}}class Mo extends _o{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&lo(this.value.arrayValue,e)}}class Fo extends _o{constructor(t,e){super(t,"not-in",e)}matches(t){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lo(this.value.arrayValue,e)}}class Po extends _o{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>lo(this.value.arrayValue,t)))}}class Vo{constructor(t,e){this.position=t,this.before=e}}function Uo(t){return`${t.before?"b":"a"}:${t.position.map((t=>fo(t))).join(",")}`}class $o{constructor(t,e="asc"){this.field=t,this.dir=e}}function qo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?oo.comparator(oo.fromName(o.referenceValue),n.key):uo(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Bo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!co(t.position[n],e.position[n]))return!1;return!0}
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
     */class Ho{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ko(t){return new Ho(t)}function zo(t){return!io(t.limit)&&"F"===t.limitType}function Go(t){return!io(t.limit)&&"L"===t.limitType}function Wo(t){const e=Cr(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new $o(t)),e.S.push(new $o(Wr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new $o(Wr.keyField(),t))}}}return e.S}function Qo(t){const e=Cr(t);if(!e.D)if("F"===e.limitType)e.D=So(e.path,e.collectionGroup,Wo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Wo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new $o(n.field,e))}const n=e.endAt?new Vo(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Vo(e.startAt.position,!e.startAt.before):null;e.D=So(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function Xo(t,e){return ko(Qo(t),Qo(e))&&t.limitType===e.limitType}function Yo(t){return`${Ao(Qo(t))}|lt:${t.limitType}`}function Jo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${fo(e.value)}`;var e})).join(", ")}]`),io(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+Uo(t.startAt)),t.endAt&&(e+=", endAt: "+Uo(t.endAt)),`Target(${e})`}(Qo(t))}; limitType=${t.limitType})`}function Zo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):oo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!jo(t.startAt,Wo(t),e))&&(!t.endAt||!jo(t.endAt,Wo(t),e))}(t,e)}function ta(t){return(e,n)=>{let s=!1;for(const i of Wo(t)){const t=ea(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ea(t,e,n){const s=t.field.isKeyField()?oo.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?uo(s,i):Tr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Tr()}}
/**
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
     */function na(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function sa(t){return{integerValue:""+t}}function ia(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?sa(e):na(t,e)}
/**
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
     */class ra{constructor(){this._=void 0}}function oa(t,e,n){return t instanceof la?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ua?ha(t,e):t instanceof da?fa(t,e):function(t,e){const n=ca(t,e),s=ga(n)+ga(t.N);return go(n)&&go(t.N)?sa(s):na(t.k,s)}(t,e)}function aa(t,e,n){return t instanceof ua?ha(t,e):t instanceof da?fa(t,e):n}function ca(t,e){return t instanceof pa?go(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class la extends ra{}class ua extends ra{constructor(t){super(),this.elements=t}}function ha(t,e){const n=ma(e);for(const e of t.elements)n.some((t=>co(t,e)))||n.push(e);return{arrayValue:{values:n}}}class da extends ra{constructor(t){super(),this.elements=t}}function fa(t,e){let n=ma(e);for(const e of t.elements)n=n.filter((t=>!co(t,e)));return{arrayValue:{values:n}}}class pa extends ra{constructor(t,e){super(),this.k=t,this.N=e}}function ga(t){return Zr(t.integerValue||t.doubleValue)}function ma(t){return mo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
     */class ya{constructor(t,e){this.field=t,this.transform=e}}class va{constructor(t,e){this.version=t,this.transformResults=e}}class wa{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wa}static exists(t){return new wa(void 0,t)}static updateTime(t){return new wa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ea(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ba{}function Ta(t,e,n){t instanceof ka?function(t,e,n){const s=t.value.clone(),i=Da(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Na?function(t,e,n){if(!Ea(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Da(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(_a(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n){t instanceof ka?function(t,e,n){if(!Ea(t.precondition,e))return;const s=t.value.clone(),i=Ra(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Aa(e),s).setHasLocalMutations()}(t,e,n):t instanceof Na?function(t,e,n){if(!Ea(t.precondition,e))return;const s=Ra(t.fieldTransforms,n,e),i=e.data;i.setAll(_a(t)),i.setAll(s),e.convertToFoundDocument(Aa(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ea(t.precondition,e)&&e.convertToNoDocument(qr.min())}(t,e)}function Ca(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=ca(s.transform,t||null);null!=i&&(null==n&&(n=bo.empty()),n.set(s.field,i))}return n||null}function Sa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ur(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ua&&e instanceof ua||t instanceof da&&e instanceof da?Ur(t.elements,e.elements,co):t instanceof pa&&e instanceof pa?co(t.N,e.N):t instanceof la&&e instanceof la}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Aa(t){return t.isFoundDocument()?t.version:qr.min()}class ka extends ba{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Na extends ba{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function _a(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Da(t,e,n){const s=new Map;Ir(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,aa(o,a,n[i]))}return s}function Ra(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,oa(t,r,e))}return s}class La extends ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class xa extends ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
     */class Oa{constructor(t){this.count=t}}
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
     */var Ma,Fa;function Pa(t){if(void 0===t)return wr("GRPC error has no .code"),Sr.UNKNOWN;switch(t){case Ma.OK:return Sr.OK;case Ma.CANCELLED:return Sr.CANCELLED;case Ma.UNKNOWN:return Sr.UNKNOWN;case Ma.DEADLINE_EXCEEDED:return Sr.DEADLINE_EXCEEDED;case Ma.RESOURCE_EXHAUSTED:return Sr.RESOURCE_EXHAUSTED;case Ma.INTERNAL:return Sr.INTERNAL;case Ma.UNAVAILABLE:return Sr.UNAVAILABLE;case Ma.UNAUTHENTICATED:return Sr.UNAUTHENTICATED;case Ma.INVALID_ARGUMENT:return Sr.INVALID_ARGUMENT;case Ma.NOT_FOUND:return Sr.NOT_FOUND;case Ma.ALREADY_EXISTS:return Sr.ALREADY_EXISTS;case Ma.PERMISSION_DENIED:return Sr.PERMISSION_DENIED;case Ma.FAILED_PRECONDITION:return Sr.FAILED_PRECONDITION;case Ma.ABORTED:return Sr.ABORTED;case Ma.OUT_OF_RANGE:return Sr.OUT_OF_RANGE;case Ma.UNIMPLEMENTED:return Sr.UNIMPLEMENTED;case Ma.DATA_LOSS:return Sr.DATA_LOSS;default:return Tr()}}(Fa=Ma||(Ma={}))[Fa.OK=0]="OK",Fa[Fa.CANCELLED=1]="CANCELLED",Fa[Fa.UNKNOWN=2]="UNKNOWN",Fa[Fa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fa[Fa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fa[Fa.NOT_FOUND=5]="NOT_FOUND",Fa[Fa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fa[Fa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fa[Fa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fa[Fa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fa[Fa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fa[Fa.ABORTED=10]="ABORTED",Fa[Fa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fa[Fa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fa[Fa.INTERNAL=13]="INTERNAL",Fa[Fa.UNAVAILABLE=14]="UNAVAILABLE",Fa[Fa.DATA_LOSS=15]="DATA_LOSS";
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
     */
class Va{constructor(t,e){this.comparator=t,this.root=e||$a.EMPTY}insert(t,e){return new Va(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$a.BLACK,null,null))}remove(t){return new Va(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$a.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ua(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ua(this.root,t,this.comparator,!0)}}class Ua{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $a{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:$a.RED,this.left=null!=s?s:$a.EMPTY,this.right=null!=i?i:$a.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new $a(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $a.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return $a.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$a.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$a.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tr();if(this.right.isRed())throw Tr();const t=this.left.check();if(t!==this.right.check())throw Tr();return t+(this.isRed()?0:1)}}$a.EMPTY=null,$a.RED=!0,$a.BLACK=!1,$a.EMPTY=new class{constructor(){this.size=0}get key(){throw Tr()}get value(){throw Tr()}get color(){throw Tr()}get left(){throw Tr()}get right(){throw Tr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new $a(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
     */
class qa{constructor(t){this.comparator=t,this.data=new Va(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof qa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new qa(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const Ba=new Va(oo.comparator);function Ha(){return Ba}const Ka=new Va(oo.comparator);function za(){return Ka}const Ga=new Va(oo.comparator);const Wa=new qa(oo.comparator);function Qa(...t){let e=Wa;for(const n of t)e=e.add(n);return e}const Xa=new qa(Vr);function Ya(){return Xa}
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
     */class Ja{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Za.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ja(qr.min(),n,Ya(),Ha(),Qa())}}class Za{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Za(Xr.EMPTY_BYTE_STRING,e,Qa(),Qa(),Qa())}}
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
     */class tc{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.O=s}}class ec{constructor(t,e){this.targetId=t,this.M=e}}class nc{constructor(t,e,n=Xr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class sc{constructor(){this.F=0,this.L=oc(),this.B=Xr.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Qa(),e=Qa(),n=Qa();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Tr()}})),new Za(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=oc()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class ic{constructor(t){this.et=t,this.nt=new Map,this.st=Ha(),this.it=rc(),this.rt=new qa(Vr)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:Tr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.M.count,s=this.wt(e);if(s){const t=s.target;if(No(t))if(0===n){const n=new oo(t.path);this.at(e,n,Io.newNoDocument(n,qr.min()))}else Ir(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&No(i.target)){const e=new oo(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.at(s,e,Io.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=Qa();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new Ja(t,e,this.rt,this.st,n);return this.st=Ha(),this.it=rc(),this.rt=new qa(Vr),s}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new sc,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new qa(Vr),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||vr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new sc),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function rc(){return new Va(oo.comparator)}function oc(){return new Va(oo.comparator)}
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
     */const ac={asc:"ASCENDING",desc:"DESCENDING"},cc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class lc{constructor(t,e){this.databaseId=t,this.C=e}}function uc(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hc(t,e){return t.C?e.toBase64():e.toUint8Array()}function dc(t,e){return uc(t,e.toTimestamp())}function fc(t){return Ir(!!t),qr.fromTimestamp(function(t){const e=Jr(t);return new $r(e.seconds,e.nanos)}(t))}function pc(t,e){return function(t){return new zr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function gc(t){const e=zr.fromString(t);return Ir(Mc(e)),e}function mc(t,e){return pc(t.databaseId,e.path)}function yc(t,e){const n=gc(e);if(n.get(1)!==t.databaseId.projectId)throw new Ar(Sr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ar(Sr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oo(Ec(n))}function vc(t,e){return pc(t.databaseId,e)}function wc(t){return new zr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ec(t){return Ir(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function bc(t,e,n){return{name:mc(t,e),fields:n.value.mapValue.fields}}function Tc(t,e){return{documents:[vc(t,e.path)]}}function Ic(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=vc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(vo(t.value))return{unaryFilter:{field:Dc(t.field),op:"IS_NAN"}};if(yo(t.value))return{unaryFilter:{field:Dc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vo(t.value))return{unaryFilter:{field:Dc(t.field),op:"IS_NOT_NAN"}};if(yo(t.value))return{unaryFilter:{field:Dc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dc(t.field),op:_c(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Dc(t.field),direction:Nc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||io(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ac(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ac(e.endAt)),n}function Cc(t){let e=function(t){const e=gc(t);return 4===e.length?zr.emptyPath():Ec(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ir(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Sc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new $o(Rc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,io(e)?null:e}(n.limit));let c=null;n.startAt&&(c=kc(n.startAt));let l=null;return n.endAt&&(l=kc(n.endAt)),function(t,e,n,s,i,r,o,a){return new Ho(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,l)}function Sc(t){return t?void 0!==t.unaryFilter?[xc(t)]:void 0!==t.fieldFilter?[Lc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Sc(t))).reduce(((t,e)=>t.concat(e))):Tr():[]}function Ac(t){return{before:t.before,values:t.position}}function kc(t){const e=!!t.before,n=t.values||[];return new Vo(n,e)}function Nc(t){return ac[t]}function _c(t){return cc[t]}function Dc(t){return{fieldPath:t.canonicalString()}}function Rc(t){return Wr.fromServerFormat(t.fieldPath)}function Lc(t){return _o.create(Rc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Tr()}}(t.fieldFilter.op),t.fieldFilter.value)}function xc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rc(t.unaryFilter.field);return _o.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rc(t.unaryFilter.field);return _o.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rc(t.unaryFilter.field);return _o.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rc(t.unaryFilter.field);return _o.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Tr()}}function Oc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Mc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */
class Fc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Tr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fc(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fc?e:Fc.resolve(e)}catch(t){return Fc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fc.reject(e)}static resolve(t){return new Fc(((e,n)=>{e(t)}))}static reject(t){return new Fc(((e,n)=>{n(t)}))}static waitFor(t){return new Fc(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Fc.resolve(!1);for(const n of t)e=e.next((t=>t?Fc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function Pc(t){return"IndexedDbTransactionError"===t.name}
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
     */class Vc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Ta(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ia(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ia(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(qr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Qa())}isEqual(t){return this.batchId===t.batchId&&Ur(this.mutations,t.mutations,((t,e)=>Sa(t,e)))&&Ur(this.baseMutations,t.baseMutations,((t,e)=>Sa(t,e)))}}class Uc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ir(t.mutations.length===n.length);let s=Ga;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Uc(t,e,n,s)}}
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
     */class $c{constructor(t,e,n,s,i=qr.min(),r=qr.min(),o=Xr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new $c(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class qc{constructor(t){this.Gt=t}}function jc(t){const e=Cc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
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
     */class Bc{constructor(){this.zt=new Hc}addToCollectionParentIndex(t,e){return this.zt.add(e),Fc.resolve()}getCollectionParents(t,e){return Fc.resolve(this.zt.getEntries(e))}}class Hc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new qa(zr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new qa(zr.comparator)).toArray()}}
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
     */class Kc{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Kc(0)}static re(){return new Kc(-1)}}
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
     */async function zc(t){if(t.code!==Sr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;vr("LocalStore","Unexpectedly lost primary lease")}
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
     */class Gc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){Br(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Hr(this.inner)}}
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
     */
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
     */
class Wc{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return oo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new oo(e)).next((t=>{let e=za();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=za();return this.Jt.getCollectionParents(t,s).next((r=>Fc.forEach(r,(r=>{const o=function(t,e){return new Ho(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=Io.newInvalidDocument(n),s=s.insert(n,i)),Ia(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{Zo(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=Qa();for(const t of e)for(const e of t.mutations)e instanceof Na&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
     */class Qc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=Qa(),s=Qa();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Qc(t,e.fromCache,n,s)}}
/**
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
     */class Xc{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(qr.min())?this.Fn(t,e):this.Mn.vn(t,s).next((i=>{const r=this.Ln(e,i);return(zo(e)||Go(e))&&this.Bn(e.limitType,r,s,n)?this.Fn(t,e):(yr()<=Pt.DEBUG&&vr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Jo(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new qa(ta(t));return e.forEach(((e,s)=>{Zo(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(t,e){return yr()<=Pt.DEBUG&&vr("QueryEngine","Using full collection scan to execute query:",Jo(e)),this.Mn.getDocumentsMatchingQuery(t,e,qr.min())}}
/**
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
     */class Yc{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new Va(Vr),this.Kn=new Gc((t=>Ao(t)),ko),this.jn=qr.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Wc(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function Jc(t,e){const n=Cr(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new Wc(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=Qa();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function Zc(t){const e=Cr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function tl(t,e){const n=Cr(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Xr.EMPTY_BYTE_STRING,qr.min()).withLastLimboFreeSnapshotVersion(qr.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,s)),i=i.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&o.push(n.He.updateTargetData(t,l))}));let a=Ha();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=Qa();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ha();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(qr.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):vr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(qr.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Fc.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}function el(t,e){const n=Cr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e))))}async function nl(t,e,n){const s=Cr(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pc(t))throw t;vr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function sl(t,e,n){const s=Cr(t);let i=qr.min(),r=Qa();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Cr(t),i=s.Kn.get(n);return void 0!==i?Fc.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,Qo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:qr.min(),n?r:Qa()))).next((t=>({documents:t,zn:r})))))}
/**
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
     */class il{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Fc.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:fc(n.createTime)}),Fc.resolve()}getNamedQuery(t,e){return Fc.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:jc(t.bundledQuery),readTime:fc(t.readTime)}}(e)),Fc.resolve()}}
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
     */class rl{constructor(){this.ts=new qa(ol.es),this.ns=new qa(ol.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new ol(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new ol(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new oo(new zr([])),n=new ol(e,t),s=new ol(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new oo(new zr([])),n=new ol(e,t),s=new ol(e,t+1);let i=Qa();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ol(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ol{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return oo.comparator(t.key,e.key)||Vr(t.fs,e.fs)}static ss(t,e){return Vr(t.fs,e.fs)||oo.comparator(t.key,e.key)}}
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
     */class al{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new qa(ol.es)}checkEmpty(t){return Fc.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new Vc(i,e,n,s);this.An.push(r);for(const e of s)this.ws=this.ws.add(new ol(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Fc.resolve(r)}lookupMutationBatch(t,e){return Fc.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Fc.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Fc.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Fc.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ol(e,0),s=new ol(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),Fc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qa(Vr);return e.forEach((t=>{const e=new ol(t,0),s=new ol(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),Fc.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;oo.isDocumentKey(i)||(i=i.child(""));const r=new ol(new oo(i),0);let o=new qa(Vr);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),Fc.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ir(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Fc.forEach(e.mutations,(s=>{const i=new ol(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new ol(e,0),s=this.ws.firstAfterOrEqual(n);return Fc.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Fc.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
     */class cl{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Va(oo.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fc.resolve(n?n.document.mutableCopy():Io.newInvalidDocument(e))}getEntries(t,e){let n=Ha();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Io.newInvalidDocument(t))})),Fc.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=Ha();const i=new oo(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Zo(e,i)&&(s=s.insert(i.key,i.mutableCopy()))}return Fc.resolve(s)}Es(t,e){return Fc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ll(this)}getSize(t){return Fc.resolve(this.size)}}class ll extends class{constructor(){this.changes=new Gc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:qr.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Io.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fc.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),Fc.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
     */class ul{constructor(t){this.persistence=t,this.Is=new Gc((t=>Ao(t)),ko),this.lastRemoteSnapshotVersion=qr.min(),this.highestTargetId=0,this.As=0,this.Rs=new rl,this.targetCount=0,this.bs=Kc.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Fc.resolve()}getLastRemoteSnapshotVersion(t){return Fc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fc.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Fc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Fc.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Kc(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Fc.resolve()}updateTargetData(t,e){return this.ae(e),Fc.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Fc.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Fc.waitFor(i).next((()=>s))}getTargetCount(t){return Fc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Fc.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Fc.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Fc.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Fc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Fc.resolve(n)}containsKey(t,e){return Fc.resolve(this.Rs.containsKey(e))}}
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
     */class hl{constructor(t,e){this.Ps={},this.Be=new Mr(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new ul(this),this.Jt=new Bc,this.Je=function(t,e){return new cl(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new qc(e),this.Ye=new il(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new al(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){vr("MemoryPersistence","Starting transaction:",t);const s=new dl(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return Fc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class dl extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class fl{constructor(t){this.persistence=t,this.Cs=new rl,this.Ns=null}static ks(t){return new fl(t)}get xs(){if(this.Ns)return this.Ns;throw Tr()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Fc.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Fc.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Fc.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fc.forEach(this.xs,(n=>{const s=oo.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Fc.or([()=>Fc.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class pl{constructor(){this.activeTargetIds=Ya()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gl{constructor(){this.pi=new pl,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new pl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
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
     */class ml{Ei(t){}shutdown(){}}
/**
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
     */class yl{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){vr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){vr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
     */const vl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class wl{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
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
     */class El extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);vr("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>(vr("RestConnection","Received: ",t),t)),(e=>{throw Er("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+gr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=vl[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new dr;o.listenOnce(or.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case rr.NO_ERROR:const e=o.getResponseJson();vr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case rr.TIMEOUT:vr("Connection",'RPC "'+t+'" timed out'),r(new Ar(Sr.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const n=o.getStatus();if(vr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Sr).indexOf(e)>=0?e:Sr.UNKNOWN}(t.status);r(new Ar(e,t.message))}else r(new Ar(Sr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Ar(Sr.UNAVAILABLE,"Connection failed."));break;default:Tr()}}finally{vr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new tr,r=Wn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ur({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())||"object"==typeof navigator&&"ReactNative"===navigator.product||At().indexOf("Electron/")>=0||function(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||At().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");vr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new wl({Vi:t=>{u?vr("Connection","Not sending because WebChannel is closed:",t):(l||(vr("Connection","Opening WebChannel transport."),c.open(),l=!0),vr("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,hr.EventType.OPEN,(()=>{u||vr("Connection","WebChannel transport opened.")})),d(c,hr.EventType.CLOSE,(()=>{u||(u=!0,vr("Connection","WebChannel transport closed"),h.Oi())})),d(c,hr.EventType.ERROR,(t=>{u||(u=!0,Er("Connection","WebChannel transport errored:",t),h.Oi(new Ar(Sr.UNAVAILABLE,"The operation could not be completed")))})),d(c,hr.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Ir(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){vr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ma[t];if(void 0!==e)return Pa(e)}(t),n=i.message;void 0===e&&(e=Sr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,h.Oi(new Ar(e,n)),c.close()}else vr("Connection","WebChannel received:",n),h.Mi(n)}})),d(r,ar.STAT_EVENT,(t=>{t.stat===cr?vr("Connection","Detected buffering proxy"):t.stat===lr&&vr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function bl(){return"undefined"!=typeof document?document:null}
/**
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
     */function Tl(t){return new lc(t,!0)}class Il{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&vr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Cl{constructor(t,e,n,s,i,r,o,a){this.Me=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Il(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===Sr.RESOURCE_EXHAUSTED?(wr(e.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===Sr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new Ar(Sr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return vr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget((()=>this.rr===t?e():(vr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sl extends Cl{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Tr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(Ir(void 0===e||"string"==typeof e),Xr.fromBase64String(e||"")):(Ir(void 0===e||e instanceof Uint8Array),Xr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Sr.UNKNOWN:Pa(t.code);return new Ar(e,t.message||"")}(o);n=new nc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=yc(t,s.document.name),r=fc(s.document.updateTime),o=new bo({mapValue:{fields:s.document.fields}}),a=Io.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new tc(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=yc(t,s.document),r=s.readTime?fc(s.readTime):qr.min(),o=Io.newNoDocument(i,r),a=s.removedTargetIds||[];n=new tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=yc(t,s.document),r=s.removedTargetIds||[];n=new tc([],r,i,null)}else{if(!("filter"in e))return Tr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Oa(s),r=t.targetId;n=new ec(r,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return qr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?qr.min():e.readTime?fc(e.readTime):qr.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=wc(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=No(s)?{documents:Tc(t,s)}:{query:Ic(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=hc(t,e.resumeToken):e.snapshotVersion.compareTo(qr.min())>0&&(n.readTime=uc(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Tr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=wc(this.k),e.removeTarget=t,this.gr(e)}}class Al extends Cl{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(Ir(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=function(t,e){return t&&t.length>0?(Ir(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?fc(t.updateTime):fc(e);return n.isEqual(qr.min())&&(n=fc(e)),new va(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=fc(t.commitTime);return this.listener.Cr(n,e)}return Ir(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=wc(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof ka)n={update:bc(t,e.key,e.value)};else if(e instanceof La)n={delete:mc(t,e.key)};else if(e instanceof Na)n={update:bc(t,e.key,e.data),updateMask:Oc(e.fieldMask)};else{if(!(e instanceof xa))return Tr();n={verify:mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof la)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ua)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof da)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pa)return{fieldPath:e.field.canonicalString(),increment:n.N};throw Tr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:dc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Tr()}(t,e.precondition)),n}(this.k,t)))};this.gr(e)}}
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
     */class kl extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Or(){if(this.$r)throw new Ar(Sr.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Sr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ar(Sr.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Sr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ar(Sr.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class Nl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(wr(e),this.Lr=!1):vr("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
     */class _l{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Vl(this)&&(vr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Cr(t);e.Gr.add(4),await Rl(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Dl(e)}(this))}))})),this.Jr=new Nl(n,s)}}async function Dl(t){if(Vl(t))for(const e of t.zr)await e(!0)}async function Rl(t){for(const e of t.zr)await e(!1)}function Ll(t,e){const n=Cr(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Pl(n)?Fl(n):eu(n).lr()&&Ol(n,e))}function xl(t,e){const n=Cr(t),s=eu(n);n.Wr.delete(e),s.lr()&&Ml(n,e),0===n.Wr.size&&(s.lr()?s._r():Vl(n)&&n.Jr.set("Unknown"))}function Ol(t,e){t.Yr.X(e.targetId),eu(t).Pr(e)}function Ml(t,e){t.Yr.X(e),eu(t).vr(e)}function Fl(t){t.Yr=new ic({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),eu(t).start(),t.Jr.Br()}function Pl(t){return Vl(t)&&!eu(t).hr()&&t.Wr.size>0}function Vl(t){return 0===Cr(t).Gr.size}function Ul(t){t.Yr=void 0}async function $l(t){t.Wr.forEach(((e,n)=>{Ol(t,e)}))}async function ql(t,e){Ul(t),Pl(t)?(t.Jr.Kr(e),Fl(t)):t.Jr.set("Unknown")}async function jl(t,e,n){if(t.Jr.set("Online"),e instanceof nc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){vr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Bl(t,n)}else if(e instanceof tc?t.Yr.ot(e):e instanceof ec?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(qr.min()))try{const e=await Zc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Xr.EMPTY_BYTE_STRING,n.snapshotVersion)),Ml(t,e);const s=new $c(n.target,e,1,n.sequenceNumber);Ol(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){vr("RemoteStore","Failed to raise snapshot:",e),await Bl(t,e)}}async function Bl(t,e,n){if(!Pc(e))throw e;t.Gr.add(1),await Rl(t),t.Jr.set("Offline"),n||(n=()=>Zc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{vr("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Dl(t)}))}function Hl(t,e){return e().catch((n=>Bl(t,n,e)))}async function Kl(t){const e=Cr(t),n=nu(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;zl(e);)try{const t=await el(e.localStore,s);if(null===t){0===e.Qr.length&&n._r();break}s=t.batchId,Gl(e,t)}catch(t){await Bl(e,t)}Wl(e)&&Ql(e)}function zl(t){return Vl(t)&&t.Qr.length<10}function Gl(t,e){t.Qr.push(e);const n=nu(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Wl(t){return Vl(t)&&!nu(t).hr()&&t.Qr.length>0}function Ql(t){nu(t).start()}async function Xl(t){nu(t).kr()}async function Yl(t){const e=nu(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Jl(t,e,n){const s=t.Qr.shift(),i=Uc.from(s,e,n);await Hl(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Kl(t)}async function Zl(t,e){e&&nu(t).Sr&&await async function(t,e){if(function(t){switch(t){default:return Tr();case Sr.CANCELLED:case Sr.UNKNOWN:case Sr.DEADLINE_EXCEEDED:case Sr.RESOURCE_EXHAUSTED:case Sr.INTERNAL:case Sr.UNAVAILABLE:case Sr.UNAUTHENTICATED:return!1;case Sr.INVALID_ARGUMENT:case Sr.NOT_FOUND:case Sr.ALREADY_EXISTS:case Sr.PERMISSION_DENIED:case Sr.FAILED_PRECONDITION:case Sr.ABORTED:case Sr.OUT_OF_RANGE:case Sr.UNIMPLEMENTED:case Sr.DATA_LOSS:return!0}}(n=e.code)&&n!==Sr.ABORTED){const n=t.Qr.shift();nu(t).wr(),await Hl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Kl(t)}var n}(t,e),Wl(t)&&Ql(t)}async function tu(t,e){const n=Cr(t);n.asyncQueue.verifyOperationInProgress(),vr("RemoteStore","RemoteStore received new credentials");const s=Vl(n);n.Gr.add(3),await Rl(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Dl(n)}function eu(t){return t.Xr||(t.Xr=function(t,e,n){const s=Cr(t);return s.Or(),new Sl(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
/**
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
     */}(t.datastore,t.asyncQueue,{Di:$l.bind(null,t),Ni:ql.bind(null,t),br:jl.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Pl(t)?Fl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ul(t))}))),t.Xr}function nu(t){return t.Zr||(t.Zr=function(t,e,n){const s=Cr(t);return s.Or(),new Al(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)}(t.datastore,t.asyncQueue,{Di:Xl.bind(null,t),Ni:Zl.bind(null,t),Nr:Yl.bind(null,t),Cr:Jl.bind(null,t)}),t.zr.push((async e=>{e?(t.Zr.wr(),await Kl(t)):(await t.Zr.stop(),t.Qr.length>0&&(vr("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
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
     */}class su{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new su(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ar(Sr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(wr("AsyncQueue",`${e}: ${t}`),Pc(t))return new Ar(Sr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class ru{constructor(t){this.comparator=t?(e,n)=>t(e,n)||oo.comparator(e.key,n.key):(t,e)=>oo.comparator(t.key,e.key),this.keyedMap=za(),this.sortedSet=new Va(this.comparator)}static emptySet(t){return new ru(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ru))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ru;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class ou{constructor(){this.eo=new Va(oo.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):Tr():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class au{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new au(t,e,ru.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class cu{constructor(){this.so=void 0,this.listeners=[]}}class lu{constructor(){this.queries=new Gc((t=>Yo(t)),Xo),this.onlineState="Unknown",this.io=new Set}}async function uu(t,e){const n=Cr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cu),i)try{r.so=await n.onListen(s)}catch(t){const n=iu(t,`Initialization of query '${Jo(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&pu(n)}async function hu(t,e){const n=Cr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function du(t,e){const n=Cr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(s=!0);i.so=t}}s&&pu(n)}function fu(t,e,n){const s=Cr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function pu(t){t.io.forEach((t=>{t.next()}))}class gu{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new au(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=au.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
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
     */class mu{constructor(t){this.key=t}}class yu{constructor(t){this.key=t}}class vu{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Qa(),this.mutatedKeys=Qa(),this.Ao=ta(t),this.Ro=new ru(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new ou,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=zo(this.query)&&s.size===this.query.limit?s.last():null,c=Go(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const l=s.get(t),u=Zo(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),zo(this.query)||Go(this.query))for(;r.size>this.query.limit;){const t=zo(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tr()}};return n(t)-n(e)}
/**
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
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new au(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ou,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Qa(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new yu(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new mu(n))})),e}ko(t){this.To=t.zn,this.Io=Qa();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return au.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class wu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eu{constructor(t){this.key=t,this.$o=!1}}class bu{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new Gc((t=>Yo(t)),Xo),this.Fo=new Map,this.Lo=new Set,this.Bo=new Va(oo.comparator),this.Uo=new Map,this.qo=new rl,this.Ko={},this.jo=new Map,this.Qo=Kc.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Tu(t,e){const n=function(t){const e=Cr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Su.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ku.bind(null,e),e.Oo.br=du.bind(null,e.eventManager),e.Oo.zo=fu.bind(null,e.eventManager),e}(t);let s,i;const r=n.Mo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=Cr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,Fc.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new $c(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,Qo(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.Po(n);i.Bn&&(i=await sl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Ou(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await sl(t.localStore,e,!0),r=new vu(e,i.zn),o=r.Po(i.documents),a=Za.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Ou(t,n,c.Co);const l=new wu(e,n,r);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&Ll(n.remoteStore,t)}return i}async function Iu(t,e){const n=Cr(t),s=n.Mo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter((t=>!Xo(t,e)))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await nl(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),xl(n.remoteStore,s.targetId),Lu(n,s.targetId)})).catch(zc)):(Lu(n,s.targetId),await nl(n.localStore,s.targetId,!0))}async function Cu(t,e,n){const s=function(t){const e=Cr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_u.bind(null,e),e}(t);try{const t=await function(t,e){const n=Cr(t),s=$r.now(),i=e.reduce(((t,e)=>t.add(e.key)),Qa());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Wn.vn(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=Ca(t,r.get(t.key));null!=e&&o.push(new Na(t.key,e,To(e.value.mapValue),wa.exists(!0)))}return n.An.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Ko[t.currentUser.toKey()];s||(s=new Va(Vr)),s=s.insert(e,n),t.Ko[t.currentUser.toKey()]=s}(s,t.batchId,n),await Pu(s,t.changes),await Kl(s.remoteStore)}catch(t){const e=iu(t,"Failed to persist write");n.reject(e)}}async function Su(t,e){const n=Cr(t);try{const t=await tl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(Ir(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?Ir(s.$o):t.removedDocuments.size>0&&(Ir(s.$o),s.$o=!1))})),await Pu(n,t,e)}catch(t){await zc(t)}}function Au(t,e,n){const s=Cr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Mo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Cr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(s=!0)})),s&&pu(n)}(s.eventManager,e),t.length&&s.Oo.br(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ku(t,e,n){const s=Cr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new Va(oo.comparator);t=t.insert(r,Io.newNoDocument(r,qr.min()));const n=Qa().add(r),i=new Ja(qr.min(),new Map,new qa(Vr),t,n);await Su(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),Fu(s)}else await nl(s.localStore,e,!1).then((()=>Lu(s,e,n))).catch(zc)}async function Nu(t,e){const n=Cr(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Cr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Fc.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ir(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&s.addEntry(e,n.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(n.localStore,e);Ru(n,s,null),Du(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pu(n,t)}catch(t){await zc(t)}}async function _u(t,e,n){const s=Cr(t);try{const t=await function(t,e){const n=Cr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.An.lookupMutationBatch(t,e).next((e=>(Ir(null!==e),s=e.keys(),n.An.removeMutationBatch(t,e)))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(s.localStore,e);Ru(s,e,n),Du(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pu(s,t)}catch(n){await zc(n)}}function Du(t,e){(t.jo.get(e)||[]).forEach((t=>{t.resolve()})),t.jo.delete(e)}function Ru(t,e,n){const s=Cr(t);let i=s.Ko[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Ko[s.currentUser.toKey()]=i}}function Lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||xu(t,e)}))}function xu(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(xl(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Fu(t))}function Ou(t,e,n){for(const s of n)s instanceof mu?(t.qo.addReference(s.key,e),Mu(t,s)):s instanceof yu?(vr("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||xu(t,s.key)):Tr()}function Mu(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(vr("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Fu(t))}function Fu(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new oo(zr.fromString(e)),s=t.Qo.next();t.Uo.set(s,new Eu(n)),t.Bo=t.Bo.insert(n,s),Ll(t.remoteStore,new $c(Qo(Ko(n.path)),s,2,Mr.I))}}async function Pu(t,e,n){const s=Cr(t),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Qc.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Oo.br(i),await async function(t,e){const n=Cr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fc.forEach(e,(e=>Fc.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Fc.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Pc(t))throw t;vr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(e,i)}}}(s.localStore,r))}async function Vu(t,e){const n=Cr(t);if(!n.currentUser.isEqual(e)){vr("SyncEngine","User change. New user:",e.toKey());const t=await Jc(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new Ar(Sr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pu(n,t.Gn)}}function Uu(t,e){const n=Cr(t),s=n.Uo.get(e);if(s&&s.$o)return Qa().add(s.key);{let t=Qa();const s=n.Fo.get(e);if(!s)return t;for(const e of s){const s=n.Mo.get(e);t=t.unionWith(s.view.bo)}return t}}class $u{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Tl(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new Yc(t,e,n,s)}(this.persistence,new Xc,t.initialUser,this.k)}Yo(t){return new hl(fl.ks,this.k)}Jo(t){return new gl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Au(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vu.bind(null,this.syncEngine),await async function(t,e){const n=Cr(t);e?(n.Gr.delete(2),await Dl(n)):e||(n.Gr.add(2),await Rl(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lu}createDatastore(t){const e=Tl(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new El(s));var s;return function(t,e,n,s){return new kl(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Au(this.syncEngine,t,0),r=yl.Pt()?new yl:new ml,new _l(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new bu(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Cr(t);vr("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Rl(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
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
     */
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
     */class ju{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class Bu{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pr.UNAUTHENTICATED,this.clientId=Pr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{vr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(vr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ar(Sr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=iu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Hu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(vr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),vr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Jc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new $u)),t.offlineComponents}(t);vr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>tu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>tu(e.remoteStore,n))),t.onlineComponents=e}async function Ku(t){return t.onlineComponents||(vr("FirestoreClient","Using default OnlineComponentProvider"),await Hu(t,new qu)),t.onlineComponents}async function zu(t){const e=await Ku(t),n=e.eventManager;return n.onListen=Tu.bind(null,e.syncEngine),n.onUnlisten=Iu.bind(null,e.syncEngine),n}class Gu{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wu{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wu&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
     */const Qu=new Map;
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
     */function Xu(t,e,n){if(!n)throw new Ar(Sr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yu(t){if(!oo.isDocumentKey(t))throw new Ar(Sr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ju(t){if(oo.isDocumentKey(t))throw new Ar(Sr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Tr()}function th(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ar(Sr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new Ar(Sr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
     */class eh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ar(Sr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ar(Sr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Ar(Sr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
     */class nh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1,t instanceof Wu?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ar(Sr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wu(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ar(Sr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ar(Sr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _r;switch(t.type){case"gapi":const e=t.client;return Ir(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Lr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ar(Sr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Qu.get(t);e&&(vr("ComponentProvider","Removing Datastore"),Qu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
     */class sh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sh(this.firestore,t,this._key)}}class ih{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ih(this.firestore,t,this._query)}}class rh extends ih{constructor(t,e,n){super(t,e,Ko(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sh(this.firestore,null,new oo(t))}withConverter(t){return new rh(this.firestore,t,this._path)}}
/**
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
     */
class oh{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Il(this,"async_queue_retry"),this.bc=()=>{const t=bl();t&&vr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=bl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=bl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const e=new kr;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Pc(t))throw t;vr("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const e=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw wr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ic=!1,t))))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const s=su.createAndSchedule(this,t,e,n,(t=>this.Sc(t)));return this.Tc.push(s),s}Pc(){this.Ec&&Tr()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function ah(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
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
     */(t)}class ch extends nh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new oh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||uh(this),this._firestoreClient.terminate()}}function lh(t){return t._firestoreClient||uh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uh(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Gu(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Bu(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
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
     */
/**
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
     */class hh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ar(Sr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
     */class dh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dh(Xr.fromBase64String(t))}catch(t){throw new Ar(Sr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dh(Xr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
     */class fh{constructor(t){this._methodName=t}}
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
     */class ph{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ar(Sr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ar(Sr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Vr(this._lat,t._lat)||Vr(this._long,t._long)}}
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
     */const gh=/^__.*__$/;class mh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Na(t,this.data,this.fieldMask,e,this.fieldTransforms):new ka(t,this.data,e,this.fieldTransforms)}}class yh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Na(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function vh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tr()}}class wh{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=s,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new wh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Oc({path:n,Fc:!1});return s.Lc(t),s}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Oc({path:n,Fc:!1});return s.xc(),s}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return Oh(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(vh(this.$c)&&gh.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Eh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Tl(t)}Qc(t,e,n,s=!1){return new wh({$c:t,methodName:e,jc:n,path:Wr.emptyPath(),Fc:!1,Kc:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function bh(t){const e=t._freezeSettings(),n=Tl(t._databaseId);return new Eh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Th(t,e,n,s,i,r={}){const o=t.Qc(r.merge||r.mergeFields?2:0,e,n,i);Dh("Data must be an object, but it was:",o,s);const a=Nh(s,o);let c,l;if(r.merge)c=new Qr(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Rh(e,s,n);if(!o.contains(i))throw new Ar(Sr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Mh(t,i)||t.push(i)}c=new Qr(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new mh(new bo(a),c,l)}class Ih extends fh{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(`${this._methodName}() can only appear at the top level of your update data`):t.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ih}}function Ch(t,e,n){return new wh({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Sh extends fh{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Ch(this,t,!0),n=this.Wc.map((t=>kh(t,e))),s=new ua(n);return new ya(t.path,s)}isEqual(t){return this===t}}class Ah extends fh{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Ch(this,t,!0),n=this.Wc.map((t=>kh(t,e))),s=new da(n);return new ya(t.path,s)}isEqual(t){return this===t}}function kh(t,e){if(_h(t=Lt(t)))return Dh("Unsupported field value:",e,t),Nh(t,e);if(t instanceof fh)return function(t,e){if(!vh(e.$c))throw e.qc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=kh(i,e.Uc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Lt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ia(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=$r.fromDate(t);return{timestampValue:uc(e.k,n)}}if(t instanceof $r){const n=new $r(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:uc(e.k,n)}}if(t instanceof ph)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dh)return{bytesValue:hc(e.k,t._byteString)};if(t instanceof sh){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:pc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc(`Unsupported field value: ${Zu(t)}`)}(t,e)}function Nh(t,e){const n={};return Hr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,((t,s)=>{const i=kh(s,e.Mc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function _h(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof $r||t instanceof ph||t instanceof dh||t instanceof sh||t instanceof fh)}function Dh(t,e,n){if(!_h(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Zu(n);throw"an object"===s?e.qc(t+" a custom object"):e.qc(t+" "+s)}}function Rh(t,e,n){if((e=Lt(e))instanceof hh)return e._internalPath;if("string"==typeof e)return xh(t,e);throw Oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lh=new RegExp("[~\\*/\\[\\]]");function xh(t,e,n){if(e.search(Lh)>=0)throw Oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch(s){throw Oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oh(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Ar(Sr.INVALID_ARGUMENT,a+t+c)}function Mh(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
     */class Fh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ph(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ph extends Fh{data(){return super.data()}}function Vh(t,e){return"string"==typeof e?xh(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}
/**
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
     */class Uh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $h extends Fh{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Vh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qh extends $h{data(t={}){return super.data(t)}}class jh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Uh(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new qh(this._firestore,this._userDataWriter,n.key,n,new Uh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ar(Sr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new qh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Uh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new qh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Uh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Bh(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Bh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tr()}}
/**
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
     */
/**
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
     */
/**
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
     */
function Hh(t){t=th(t,sh);const e=th(t.firestore,ch);return function(t,e,n={}){const s=new kr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new ju({next:r=>{e.enqueueAndForget((()=>hu(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Ar(Sr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Ar(Sr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new gu(Ko(n.path),r,{includeMetadataChanges:!0,wo:!0});return uu(t,o)}(await zu(t),t.asyncQueue,e,n,s))),s.promise}(lh(e),t._key).then((n=>Xh(e,t,n)))}class Kh extends
/**
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
     */
class{convertValue(t,e="none"){switch(ao(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Zr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(to(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Tr()}}convertObject(t,e){const n={};return Br(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new ph(Zr(t.latitude),Zr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=no(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(so(t));default:return null}}convertTimestamp(t){const e=Jr(t);return new $r(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=zr.fromString(t);Ir(Mc(n));const s=new Wu(n.get(1),n.get(3)),i=new oo(n.popFirst(5));return s.isEqual(e)||wr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new dh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sh(this.firestore,null,e)}}function zh(t,e,n,...s){t=th(t,sh);const i=th(t.firestore,ch),r=bh(i);let o;return o="string"==typeof(e=Lt(e))||e instanceof hh?function(t,e,n,s,i,r){const o=t.Qc(1,e,n),a=[Rh(e,s,n)],c=[i];if(r.length%2!=0)throw new Ar(Sr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Rh(e,r[t])),c.push(r[t+1]);const l=[],u=bo.empty();for(let t=a.length-1;t>=0;--t)if(!Mh(l,a[t])){const e=a[t];let n=c[t];n=Lt(n);const s=o.Bc(e);if(n instanceof Ih)l.push(e);else{const t=kh(n,s);null!=t&&(l.push(e),u.set(e,t))}}const h=new Qr(l);return new yh(u,h,o.fieldTransforms)}(r,"updateDoc",t._key,e,n,s):function(t,e,n,s){const i=t.Qc(1,e,n);Dh("Data must be an object, but it was:",i,s);const r=[],o=bo.empty();Br(s,((t,s)=>{const a=xh(e,t,n);s=Lt(s);const c=i.Bc(a);if(s instanceof Ih)r.push(a);else{const t=kh(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Qr(r);return new yh(o,a,i.fieldTransforms)}(r,"updateDoc",t._key,e),Qh(i,[o.toMutation(t._key,wa.exists(!0))])}function Gh(t){return Qh(th(t.firestore,ch),[new La(t._key,wa.none())])}function Wh(t,...e){var n,s,i;t=Lt(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ah(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ah(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,l,u;if(t instanceof sh)l=th(t.firestore,ch),u=Ko(t._key.path),c={next:n=>{e[o]&&e[o](Xh(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=th(t,ih);l=th(n.firestore,ch),u=n._query;const s=new Kh(l);c={next:t=>{e[o]&&e[o](new jh(l,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Go(t)&&0===t.explicitOrderBy.length)throw new Ar(Sr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,s){const i=new ju(s),r=new gu(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>uu(await zu(t),r))),()=>{i.nc(),t.asyncQueue.enqueueAndForget((async()=>hu(await zu(t),r)))}}(lh(l),u,a,c)}function Qh(t,e){return function(t,e){const n=new kr;return t.asyncQueue.enqueueAndForget((async()=>Cu(await function(t){return Ku(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(lh(t),e)}function Xh(t,e,n){const s=n.docs.get(e._key),i=new Kh(t);return new $h(t,i,e._key,s,new Uh(n.hasPendingWrites,n.fromCache),e.converter)}function Yh(...t){return new Sh("arrayUnion",t)}function Jh(...t){return new Ah("arrayRemove",t)}!function(t,e=!0){gr="9.6.6",Jt(new xt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new ch(s,new Dr(t.getProvider("auth-internal")),new Or(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),ee(fr,"3.4.4",t),ee(fr,"3.4.4","esm2017")}();const Zh=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Gt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Zt.create("bad-app-name",{appName:String(s)});const i=Qt.get(s);if(i){if(Dt(t,i.options)&&Dt(n,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const r=new Ft(s);for(const t of Xt.values())r.addComponent(t);const o=new te(t,n,r);return Qt.set(s,o),o}({projectId:"sample-project-294713"}),td=function(){const t=window.location.search;let e;if(t)e=t.substring(1);else{const t=Ct();window.location.hash=t,window.history.replaceState("","","?"+t),e=t}return e}(),ed=function(t=function(t="[DEFAULT]"){const e=Qt.get(t);if(!e)throw Zt.create("no-app",{appName:t});return e}()){return function(t,e){return t.container.getProvider(e)}(t,"firestore").getImmediate()}(Zh),nd=function(t,e,...n){if(t=Lt(t),Xu("collection","path",e),t instanceof nh){const s=zr.fromString(e,...n);return Ju(s),new rh(t,null,s)}{if(!(t instanceof sh||t instanceof rh))throw new Ar(Sr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(zr.fromString(e,...n));return Ju(s),new rh(t.firestore,null,s)}}(ed,"rooms"),sd=function(t,e,...n){if(t=Lt(t),1===arguments.length&&(e=Pr.A()),Xu("doc","path",e),t instanceof nh){const s=zr.fromString(e,...n);return Yu(s),new sh(t,null,new oo(s))}{if(!(t instanceof sh||t instanceof rh))throw new Ar(Sr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(zr.fromString(e,...n));return Yu(s),new sh(t.firestore,t instanceof rh?t.converter:null,new oo(s))}}(nd,td),id=function(){const{subscribe:t,set:e}=mt([]);return{subscribe:t,set:e,append:(t,e)=>{Hh(sd).then((n=>{if(n&&n.exists())zh(sd,{estimates:Yh({name:t,point:e,appendedAt:$r.now()})});else{const n=[],s={closed:!0};n.push({name:t,point:e,appendedAt:$r.now()}),function(t,e,n){t=th(t,sh);const s=th(t.firestore,ch),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);Qh(s,[Th(bh(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,wa.none())])}(sd,{estimates:n,tableState:s})}}))},remove:(t,e=null)=>{Hh(sd).then((n=>{if(n&&n.exists()){const s=n.data().estimates.filter((e=>e.name===t)).shift();if(s)return void zh(sd,{estimates:Jh(s)}).then(e)}e&&e()}))},clear:()=>{Gh(sd)}}}(),rd=function(){const{subscribe:t,set:e}=mt({closed:!0});return{subscribe:t,set:e,open:()=>{zh(sd,{"tableState.closed":!1})},close:()=>{Gh(sd)}}}(),od=new Promise((t=>{Wh(sd,(t=>{if(t&&t.exists()){const e=t.data(),n=(t,e)=>t.appendedAt.seconds-e.appendedAt.seconds;id.set(e.estimates.sort(n)),rd.set(e.tableState)}else id.set([]),rd.set({closed:!0})})),t()}));function ad(t){const e=t-1;return e*e*e+1}function cd(t,{delay:e=0,duration:n=400,easing:s=ad,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-u*e}`}}function ld(e){let n,s,i,o,a,l=(e[3]?"":e[0])+"";return{c(){n=E("div"),s=b(l),A(n,"class",i=c("card "+e[4])+" svelte-1lt9def"),R(n,"selectable",e[1]),R(n,"closed",e[3]),R(n,"selected",e[2])},m(t,i){y(t,n,i),p(n,s),o||(a=C(n,"click",(function(){r(e[1]?e[5]:void 0)&&(e[1]?e[5]:void 0).apply(this,arguments)})),o=!0)},p(t,[r]){e=t,9&r&&l!==(l=(e[3]?"":e[0])+"")&&k(s,l),16&r&&i!==(i=c("card "+e[4])+" svelte-1lt9def")&&A(n,"class",i),18&r&&R(n,"selectable",e[1]),24&r&&R(n,"closed",e[3]),20&r&&R(n,"selected",e[2])},i:t,o:t,d(t){t&&v(n),o=!1,a()}}}function ud(t,e,n){let{point:s}=e,{selectable:i=!1}=e,{selected:r=!1}=e,{closed:o=!1}=e,{size:a="medium"}=e;const c=function(){const t=U();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=L(e,n);s.slice().forEach((e=>{e.call(t,i)}))}}}();return t.$$set=t=>{"point"in t&&n(0,s=t.point),"selectable"in t&&n(1,i=t.selectable),"selected"in t&&n(2,r=t.selected),"closed"in t&&n(3,o=t.closed),"size"in t&&n(4,a=t.size)},[s,i,r,o,a,function(){c("selectCard",{point:s})}]}class hd extends pt{constructor(t){super(),ft(this,t,ud,ld,o,{point:0,selectable:1,selected:2,closed:3,size:4})}}function dd(e){let n,s,i,r,o=e[0]?"OPEN":"RETURN";return{c(){n=E("button"),s=b(o),A(n,"class",c("open-button")+" svelte-1i6cetj")},m(t,o){y(t,n,o),p(n,s),i||(r=C(n,"click",e[1]),i=!0)},p(t,[e]){1&e&&o!==(o=t[0]?"OPEN":"RETURN")&&k(s,o)},i:t,o:t,d(t){t&&v(n),i=!1,r()}}}function fd(t,e,n){let{isClosed:s=!0}=e;return t.$$set=t=>{"isClosed"in t&&n(0,s=t.isClosed)},[s,function(e){$.call(this,t,e)}]}class pd extends pt{constructor(t){super(),ft(this,t,fd,dd,o,{isClosed:0})}}function gd(e){let n,s,i,r,o,a,l=e[0]?"COPIED":"COPY";return{c(){n=E("button"),s=b(l),A(n,"class",i=c(["copy-button",e[0]?"copied":""].join(" "))+" svelte-96r1p3"),n.disabled=r=!!e[0]},m(t,i){y(t,n,i),p(n,s),o||(a=C(n,"click",e[1]),o=!0)},p(t,[e]){1&e&&l!==(l=t[0]?"COPIED":"COPY")&&k(s,l),1&e&&i!==(i=c(["copy-button",t[0]?"copied":""].join(" "))+" svelte-96r1p3")&&A(n,"class",i),1&e&&r!==(r=!!t[0])&&(n.disabled=r)},i:t,o:t,d(t){t&&v(n),o=!1,a()}}}function md(t,e,n){let{isCopied:s=!1}=e;return t.$$set=t=>{"isCopied"in t&&n(0,s=t.isCopied)},[s,function(e){$.call(this,t,e)}]}class yd extends pt{constructor(t){super(),ft(this,t,md,gd,o,{isCopied:0})}}function vd(t,e,n){const s=t.slice();return s[6]=e[n],s}function wd(t,e){let n,s,i,r,o,a,c,l,u=e[6].name+"";return s=new hd({props:{point:e[6].point,size:"large",selectable:!1,closed:e[1]}}),{key:t,first:null,c(){n=E("div"),lt(s.$$.fragment),i=T(),r=E("div"),o=b(u),a=T(),A(r,"class","name svelte-1gnv68y"),A(n,"class","estimate svelte-1gnv68y"),this.first=n},m(t,e){y(t,n,e),ut(s,n,null),p(n,i),p(n,r),p(r,o),p(n,a),l=!0},p(t,n){e=t;const i={};1&n&&(i.point=e[6].point),2&n&&(i.closed=e[1]),s.$set(i),(!l||1&n)&&u!==(u=e[6].name+"")&&k(o,u)},i(t){l||(it(s.$$.fragment,t),G((()=>{c||(c=at(n,cd,{y:100},!0)),c.run(1)})),l=!0)},o(t){rt(s.$$.fragment,t),c||(c=at(n,cd,{y:100},!1)),c.run(0),l=!1},d(t){t&&v(n),ht(s),t&&c&&c.end()}}}function Ed(t){let e,n,s;return n=new pd({props:{isClosed:t[1]}}),n.$on("click",(function(){r(t[2])&&t[2].apply(this,arguments)})),{c(){e=E("div"),lt(n.$$.fragment),A(e,"class","open-button-area svelte-1gnv68y")},m(t,i){y(t,e,i),ut(n,e,null),s=!0},p(e,s){t=e;const i={};2&s&&(i.isClosed=t[1]),n.$set(i)},i(t){s||(it(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){t&&v(e),ht(n)}}}function bd(t){let e,n;return e=new yd({props:{isCopied:t[3]}}),e.$on("click",t[4]),{c(){lt(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};8&n&&(s.isCopied=t[3]),e.$set(s)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Td(t){let e,n,s,i,r,o=[],a=new Map,c=t[0];const l=t=>t[6].name;for(let e=0;e<c.length;e+=1){let n=vd(t,c,e),s=l(n);a.set(s,o[e]=wd(s,n))}let u=(t[0].length>0||!t[1])&&Ed(t),h=!t[1]&&bd(t);return{c(){e=E("div"),n=E("div");for(let t=0;t<o.length;t+=1)o[t].c();s=T(),u&&u.c(),i=T(),h&&h.c(),A(n,"class","estimates svelte-1gnv68y"),A(e,"class","table svelte-1gnv68y")},m(t,a){y(t,e,a),p(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);p(e,s),u&&u.m(e,null),p(e,i),h&&h.m(e,null),r=!0},p(t,[s]){3&s&&(c=t[0],nt(),o=function(t,e,n,s,i,r,o,a,c,l,u,h){let d=t.length,f=r.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=h(i,r,p),a=n(t);let c=o.get(a);c?s&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,E=new Set;function b(t){it(t,1),t.m(a,u),o.set(t.key,t),u=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],s=e.key,i=n.key;e===n?(u=e.first,d--,f--):y.has(i)?!o.has(s)||w.has(s)?b(e):E.has(i)?d--:v.get(s)>v.get(i)?(E.add(s),b(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)b(m[f-1]);return m}(o,s,l,1,t,c,a,n,ct,wd,null,vd),st()),t[0].length>0||!t[1]?u?(u.p(t,s),3&s&&it(u,1)):(u=Ed(t),u.c(),it(u,1),u.m(e,i)):u&&(nt(),rt(u,1,1,(()=>{u=null})),st()),t[1]?h&&(nt(),rt(h,1,1,(()=>{h=null})),st()):h?(h.p(t,s),2&s&&it(h,1)):(h=bd(t),h.c(),it(h,1),h.m(e,null))},i(t){if(!r){for(let t=0;t<c.length;t+=1)it(o[t]);it(u),it(h),r=!0}},o(t){for(let t=0;t<o.length;t+=1)rt(o[t]);rt(u),rt(h),r=!1},d(t){t&&v(e);for(let t=0;t<o.length;t+=1)o[t].d();u&&u.d(),h&&h.d()}}}function Id(t,e,n){let{estimates:s=[]}=e,{isClosed:i=!0}=e,{handleOpenButtonClick:r=(()=>{})}=e;s=s||[];let o=!1;return t.$$set=t=>{"estimates"in t&&n(0,s=t.estimates),"isClosed"in t&&n(1,i=t.isClosed),"handleOpenButtonClick"in t&&n(2,r=t.handleOpenButtonClick)},[s,i,r,o,function(){const t=function(){if(0===s.length)return"empty.";const t=new Date;return"["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"] "+s.sort(((t,e)=>t.name>e.name?1:-1)).reduce(((t,e)=>(t?t+" ":"")+`${e.name}(${e.point})`),null)}();navigator.clipboard.writeText(t),n(3,o=!0),setTimeout((()=>{n(3,o=!1)}),1e3)}]}class Cd extends pt{constructor(t){super(),ft(this,t,Id,Td,o,{estimates:0,isClosed:1,handleOpenButtonClick:2})}}function Sd(e){let n,s,i;return{c(){n=E("button"),n.textContent="OK",A(n,"class",c("ok-button")+" svelte-rmf0e0")},m(t,r){y(t,n,r),s||(i=C(n,"click",function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}(S(e[0]))),s=!0)},p:t,i:t,o:t,d(t){t&&v(n),s=!1,i()}}}function Ad(t){return[function(e){$.call(this,t,e)}]}class kd extends pt{constructor(t){super(),ft(this,t,Ad,Sd,o,{})}}function Nd(t,e,n){const s=t.slice();return s[15]=e[n],s}function _d(t,e,n){const s=t.slice();return s[18]=e[n],s}function Dd(t){let e,n,s,r,o,a,c,l=t[0]&&Ld(t);return{c(){e=E("div"),n=E("form"),s=E("input"),r=T(),l&&l.c(),A(s,"placeholder","your name"),s.autofocus=!0,A(s,"class","svelte-y3ory"),A(e,"class","user-name svelte-y3ory")},m(i,u){y(i,e,u),p(e,n),p(n,s),N(s,t[0]),p(n,r),l&&l.m(n,null),o=!0,s.focus(),a||(c=[C(s,"input",t[10]),C(n,"submit",S(t[12]))],a=!0)},p(t,e){1&e&&s.value!==t[0]&&N(s,t[0]),t[0]?l?(l.p(t,e),1&e&&it(l,1)):(l=Ld(t),l.c(),it(l,1),l.m(n,null)):l&&(nt(),rt(l,1,1,(()=>{l=null})),st())},i(t){o||(it(l),o=!0)},o(t){rt(l),o=!1},d(t){t&&v(e),l&&l.d(),a=!1,i(c)}}}function Rd(t){let e,n,s,i,r,o,a,c,l,u,h=t[7],d=[];for(let e=0;e<h.length;e+=1)d[e]=xd(_d(t,h,e));let f=t[5],g=[];for(let e=0;e<f.length;e+=1)g[e]=Od(Nd(t,f,e));const m=t=>rt(g[t],1,1,(()=>{g[t]=null}));return{c(){e=E("div"),n=b(t[0]),s=T(),i=E("div"),r=E("select");for(let t=0;t<d.length;t+=1)d[t].c();o=T();for(let t=0;t<g.length;t+=1)g[t].c();a=I(),A(e,"class","user-name svelte-y3ory"),void 0===t[4]&&G((()=>t[9].call(r))),A(i,"class","svelte-y3ory")},m(h,f){y(h,e,f),p(e,n),y(h,s,f),y(h,i,f),p(i,r);for(let t=0;t<d.length;t+=1)d[t].m(r,null);D(r,t[4]),y(h,o,f);for(let t=0;t<g.length;t+=1)g[t].m(h,f);y(h,a,f),c=!0,l||(u=C(r,"change",t[9]),l=!0)},p(t,e){if((!c||1&e)&&k(n,t[0]),128&e){let n;for(h=t[7],n=0;n<h.length;n+=1){const s=_d(t,h,n);d[n]?d[n].p(s,e):(d[n]=xd(s),d[n].c(),d[n].m(r,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=h.length}if(144&e&&D(r,t[4]),100&e){let n;for(f=t[5],n=0;n<f.length;n+=1){const s=Nd(t,f,n);g[n]?(g[n].p(s,e),it(g[n],1)):(g[n]=Od(s),g[n].c(),it(g[n],1),g[n].m(a.parentNode,a))}for(nt(),n=f.length;n<g.length;n+=1)m(n);st()}},i(t){if(!c){for(let t=0;t<f.length;t+=1)it(g[t]);c=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)rt(g[t]);c=!1},d(t){t&&v(e),t&&v(s),t&&v(i),w(d,t),t&&v(o),w(g,t),t&&v(a),l=!1,u()}}}function Ld(e){let n,s;return n=new kd({}),n.$on("click",e[11]),{c(){lt(n.$$.fragment)},m(t,e){ut(n,t,e),s=!0},p:t,i(t){s||(it(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ht(n,t)}}}function xd(e){let n,s,i,r=e[18].id+"";return{c(){n=E("option"),s=b(r),n.__value=i=e[18].id,n.value=n.__value},m(t,e){y(t,n,e),p(n,s)},p:t,d(t){t&&v(n)}}}function Od(t){let e,n;return e=new hd({props:{point:t[15],selectable:!0,size:"medium",selected:t[6]===t[15]}}),e.$on("selectCard",(function(){r(t[2])&&t[2].apply(this,arguments)})),{c(){lt(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},p(n,s){t=n;const i={};32&s&&(i.point=t[15]),96&s&&(i.selected=t[6]===t[15]),e.$set(i)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Md(t){let e,n,s,i;const r=[Rd,Dd],o=[];function a(t,e){return t[0]&&t[1]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=E("div"),s.c(),A(e,"class",c("user-selection")+" svelte-y3ory")},m(t,s){y(t,e,s),o[n].m(e,null),i=!0},p(t,[i]){let c=n;n=a(t),n===c?o[n].p(t,i):(nt(),rt(o[c],1,1,(()=>{o[c]=null})),st(),s=o[n],s?s.p(t,i):(s=o[n]=r[n](t),s.c()),it(s,1),s.m(e,null))},i(t){i||(it(s),i=!0)},o(t){rt(s),i=!1},d(t){t&&v(e),o[n].d()}}}function Fd(t,e,n){let s,i,{userName:r=""}=e,{isFixedUserName:o=!1}=e,{estimates:a=[]}=e,{handleSelectCard:c}=e,{handleFixName:l}=e;a=a||[];const u=[{id:"fibonacci",points:["0","1","2","3","5","8","13","21","34","55","?","∞"]},{id:"ten",points:["0","10","20","30","40","50","60","70","80","90","100","?","∞"]}];let h=u[0].id;return t.$$set=t=>{"userName"in t&&n(0,r=t.userName),"isFixedUserName"in t&&n(1,o=t.isFixedUserName),"estimates"in t&&n(8,a=t.estimates),"handleSelectCard"in t&&n(2,c=t.handleSelectCard),"handleFixName"in t&&n(3,l=t.handleFixName)},t.$$.update=()=>{257&t.$$.dirty&&n(6,s=a.filter((t=>t.name===r)).map((t=>t.point)).pop()),16&t.$$.dirty&&n(5,i=u.filter((t=>h===t.id))[0].points)},[r,o,c,l,h,i,s,u,a,function(){h=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(4,h),n(7,u)},function(){r=this.value,n(0,r)},()=>l(r),()=>l(r)]}class Pd extends pt{constructor(t){super(),ft(this,t,Fd,Md,o,{userName:0,isFixedUserName:1,estimates:8,handleSelectCard:2,handleFixName:3})}}function Vd(e){let n;return{c(){n=E("div"),n.innerHTML='<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" title="Photo by Unsplash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></a>',A(n,"class","unsplash-credit svelte-1vmngv8")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Ud extends pt{constructor(t){super(),ft(this,t,null,Vd,o,{})}}function $d(t){let e,n,s,r,o,a,c,l,u,h,d,f,g,m,w,I,S;return l=new Cd({props:{isClosed:t[2],estimates:t[0],handleOpenButtonClick:t[5]}}),h=new Pd({props:{userName:t[3],isFixedUserName:t[4],estimates:t[0],handleFixName:t[6],handleSelectCard:t[7]}}),m=new Ud({}),{c(){e=E("div"),n=E("main"),s=E("h1"),r=b(t[1]),o=T(),a=E("p"),a.textContent="share the URL of this page with your team members.",c=T(),lt(l.$$.fragment),u=T(),lt(h.$$.fragment),d=T(),f=E("div"),f.innerHTML='development: <a href="https://github.com/redfe/planning-poker-svelte" target="_blank" rel="noopener noreferrer" class="svelte-1ycu1w5">Source code</a>,<a href="./storybook-static/" target="_blank" rel="noopener noreferrer" class="svelte-1ycu1w5">Storybook</a>.',g=T(),lt(m.$$.fragment),A(s,"class","svelte-1ycu1w5"),A(a,"class","svelte-1ycu1w5"),A(f,"class","devinfo svelte-1ycu1w5"),A(n,"class","svelte-1ycu1w5"),A(e,"class","container svelte-1ycu1w5"),_(e,"height",t[8])},m(i,v){y(i,e,v),p(e,n),p(n,s),p(s,r),p(n,o),p(n,a),p(n,c),ut(l,n,null),p(n,u),ut(h,n,null),p(n,d),p(n,f),p(e,g),ut(m,e,null),w=!0,I||(S=[C(window,"resize",t[9]),C(window,"load",t[9])],I=!0)},p(t,[n]){(!w||2&n)&&k(r,t[1]);const s={};4&n&&(s.isClosed=t[2]),1&n&&(s.estimates=t[0]),32&n&&(s.handleOpenButtonClick=t[5]),l.$set(s);const i={};8&n&&(i.userName=t[3]),16&n&&(i.isFixedUserName=t[4]),1&n&&(i.estimates=t[0]),64&n&&(i.handleFixName=t[6]),128&n&&(i.handleSelectCard=t[7]),h.$set(i),(!w||256&n)&&_(e,"height",t[8])},i(t){w||(it(l.$$.fragment,t),it(h.$$.fragment,t),it(m.$$.fragment,t),w=!0)},o(t){rt(l.$$.fragment,t),rt(h.$$.fragment,t),rt(m.$$.fragment,t),w=!1},d(t){t&&v(e),ht(l),ht(h),ht(m),I=!1,i(S)}}}function qd(t,e,n){let{name:s}=e,{isTableClosed:i=!0}=e,{estimates:r=[]}=e,{userName:o=""}=e,{isFixedUserName:a=!1}=e,{handleOpenButtonClick:c}=e,{handleFixName:l}=e,{handleSelectCard:u}=e;r=r||[];let h=null;return t.$$set=t=>{"name"in t&&n(1,s=t.name),"isTableClosed"in t&&n(2,i=t.isTableClosed),"estimates"in t&&n(0,r=t.estimates),"userName"in t&&n(3,o=t.userName),"isFixedUserName"in t&&n(4,a=t.isFixedUserName),"handleOpenButtonClick"in t&&n(5,c=t.handleOpenButtonClick),"handleFixName"in t&&n(6,l=t.handleFixName),"handleSelectCard"in t&&n(7,u=t.handleSelectCard)},[r,s,i,o,a,c,l,u,h,()=>{n(8,h=document.documentElement.offsetHeight<document.documentElement.scrollHeight?"auto":"100%")}]}class jd extends pt{constructor(t){super(),ft(this,t,qd,$d,o,{name:1,isTableClosed:2,estimates:0,userName:3,isFixedUserName:4,handleOpenButtonClick:5,handleFixName:6,handleSelectCard:7})}}function Bd(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Hd(t){let e,n;return e=new jd({props:{name:t[0],isTableClosed:t[4].closed,estimates:t[2],userName:t[1],isFixedUserName:t[3],handleOpenButtonClick:t[5],handleFixName:t[6],handleSelectCard:t[7]}}),{c(){lt(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.name=t[0]),16&n&&(s.isTableClosed=t[4].closed),4&n&&(s.estimates=t[2]),2&n&&(s.userName=t[1]),8&n&&(s.isFixedUserName=t[3]),e.$set(s)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Kd(e){let n;return{c(){n=E("p"),n.textContent="...waiting"},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function zd(t){let e,n,s,i,r;document.title=e=t[0];let o={ctx:t,current:null,token:null,hasCatch:!1,pending:Kd,then:Hd,catch:Bd,blocks:[,,,]};return function(t,e){const n=e.token={};function s(t,s,i,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==i&&(o=o.slice(),o[i]=r);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(nt(),rt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),st())})):e.block.d(1),a.c(),it(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[s]=a),c&&Y()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=U();if(t.then((t=>{V(n),s(e.then,1,e.value,t),V(null)}),(t=>{if(V(n),s(e.catch,2,e.error,t),V(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var i}(od,o),{c(){n=E("link"),s=T(),i=I(),o.block.c(),A(n,"href","https://fonts.googleapis.com/css?family=M+PLUS+1p"),A(n,"rel","stylesheet")},m(t,e){p(document.head,n),y(t,s,e),y(t,i,e),o.block.m(t,o.anchor=e),o.mount=()=>i.parentNode,o.anchor=i,r=!0},p(n,[s]){t=n,(!r||1&s)&&e!==(e=t[0])&&(document.title=e),function(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}(o,t,s)},i(t){r||(it(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){rt(o.blocks[t])}r=!1},d(t){v(n),t&&v(s),t&&v(i),o.block.d(t),o.token=null,o=null}}}function Gd(t,e,n){let s,i,r;a(t,id,(t=>n(2,i=t))),a(t,rd,(t=>n(4,r=t)));let{name:o}=e,c=window.localStorage.name||"",l=!1;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},t.$$.update=()=>{6&t.$$.dirty&&(s=i.filter((t=>t.name===c)).map((t=>t.point)).pop())},[o,c,i,l,r,function(){r.closed?i.length>0&&rd.open():(id.clear(),rd.close())},function(t){t&&(n(1,c=t),window.localStorage.setItem("name",c),n(3,l=!0))},function(t){const e=()=>id.append(c,t.detail.point);s?id.remove(c,s===t.detail.point?null:()=>setTimeout(e,450)):e()}]}return new class extends pt{constructor(t){super(),ft(this,t,Gd,zd,o,{name:0})}}({target:document.body,props:{name:"Planning Poker"}})}();
//# sourceMappingURL=bundle.js.map
