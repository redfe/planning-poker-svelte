var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(t){return null==t?"":t}const l="undefined"!=typeof window;let h=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&u(f)}function p(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=E("style");return function(t,e){p(t.head||t,e)}(g(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function T(){return b(" ")}function I(){return b("")}function C(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function _(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function D(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const L=new Map;let x,O=0;function M(t,e,n,s,i,r,o,a=0){const c=16.666/s;let l="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*r(t);l+=100*t+`%{${o(s,1-s)}}\n`}const h=l+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(h)}_${a}`,d=g(t),{stylesheet:f,rules:p}=L.get(d)||function(t,e){const n={stylesheet:m(e),rules:{}};return L.set(t,n),n}(d,t);p[u]||(p[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${s}ms linear ${i}ms 1 both`,O+=1,u}function F(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-s.length;i&&(t.style.animation=s.join(", "),O-=i,O||u((()=>{O||(L.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),L.clear())})))}function P(t){x=t}function V(){if(!x)throw new Error("Function called outside component initialization");return x}function U(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const $=[],q=[],j=[],B=[],H=Promise.resolve();let K=!1;function z(t){j.push(t)}const G=new Set;let W,Q=0;function X(){const t=x;do{for(;Q<$.length;){const t=$[Q];Q++,P(t),Y(t.$$)}for(P(null),$.length=0,Q=0;q.length;)q.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];G.has(e)||(G.add(e),e())}j.length=0}while($.length);for(;B.length;)B.pop()();K=!1,G.clear(),P(t)}function Y(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function J(t,e,n){t.dispatchEvent(R(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||i(tt.c),tt=tt.p}function st(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function it(t,e,n,s){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const rt={duration:0};function ot(n,s,o,a){let c=s(n,o),l=a?0:1,p=null,g=null,m=null;function y(){m&&F(n,m)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:r=0,duration:o=300,easing:a=e,tick:w=t,css:E}=c||rt,b={start:h()+r,b:s};s||(b.group=tt,tt.r+=1),p||g?g=b:(E&&(y(),m=M(n,l,s,o,r,a,E)),s&&w(0,1),p=v(b,o),z((()=>J(n,s,"start"))),function(t){let e;0===d.size&&u(f),new Promise((n=>{d.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(p=v(g,o),g=null,J(n,p.b,"start"),E&&(y(),m=M(n,l,p.b,p.duration,0,a,c.css))),p)if(t>=p.end)w(l=p.b,1-l),J(n,p.b,"end"),g||(p.b?y():--p.group.r||i(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;l=p.a+p.d*a(e/p.duration),w(l,1-l)}return!(!p&&!g)})))}return{run(t){r(c)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{c=c(),w(t)})):w(t)},end(){y(),p=g=null}}}function at(t,e){it(t,1,1,(()=>{e.delete(t.key)}))}function ct(t){t&&t.c()}function lt(t,e,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:h}=t.$$;a&&a.m(e,s),o||z((()=>{const e=c.map(n).filter(r);l?l.push(...e):i(e),t.$$.on_mount=[]})),h.forEach(z)}function ht(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&($.push(t),K||(K=!0,H.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,r,o,a,c,l,h=[-1]){const u=x;P(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};l&&l(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&ut(e,t)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&st(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),X()}P(u)}class ft{$destroy(){ht(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function gt(e,n=t){let s;const i=new Set;function r(t){if(o(e,t)&&(e=t,s)){const t=!pt.length;for(const t of i)t[1](),pt.push(t,e);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(s=n(r)||t),o(e),()=>{i.delete(c),0===i.size&&(s(),s=null)}}}}var mt,yt=new Uint8Array(16);function vt(){if(!mt&&!(mt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return mt(yt)}var wt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Et(t){return"string"==typeof t&&wt.test(t)}for(var bt=[],Tt=0;Tt<256;++Tt)bt.push((Tt+256).toString(16).substr(1));function It(t,e,n){var s=(t=t||{}).random||(t.rng||vt)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=s[i];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(bt[t[e+0]]+bt[t[e+1]]+bt[t[e+2]]+bt[t[e+3]]+"-"+bt[t[e+4]]+bt[t[e+5]]+"-"+bt[t[e+6]]+bt[t[e+7]]+"-"+bt[t[e+8]]+bt[t[e+9]]+"-"+bt[t[e+10]]+bt[t[e+11]]+bt[t[e+12]]+bt[t[e+13]]+bt[t[e+14]]+bt[t[e+15]]).toLowerCase();if(!Et(n))throw TypeError("Stringified UUID is invalid");return n}(s)}
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
     */class Ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function St(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class At extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(Nt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new At(s,o,n)}}const Nt=/\{\$([^}]+)}/g;function _t(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(Dt(n)&&Dt(r)){if(!_t(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function Dt(t){return null!==t&&"object"==typeof t}
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
     */function Rt(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const xt="[DEFAULT]";
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
     */class Ot{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Ct;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===xt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:xt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Mt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ot(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var Ft;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ft||(Ft={}));const Pt={debug:Ft.DEBUG,verbose:Ft.VERBOSE,info:Ft.INFO,warn:Ft.WARN,error:Ft.ERROR,silent:Ft.SILENT},Vt=Ft.INFO,Ut={[Ft.DEBUG]:"log",[Ft.VERBOSE]:"log",[Ft.INFO]:"info",[Ft.WARN]:"warn",[Ft.ERROR]:"error"},$t=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Ut[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class qt{constructor(t){this.name=t,this._logLevel=Vt,this._logHandler=$t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Pt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ft.DEBUG,...t),this._logHandler(this,Ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ft.VERBOSE,...t),this._logHandler(this,Ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ft.INFO,...t),this._logHandler(this,Ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ft.WARN,...t),this._logHandler(this,Ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ft.ERROR,...t),this._logHandler(this,Ft.ERROR,...t)}}
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
     */class jt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Bt="@firebase/app",Ht="0.7.16",Kt=new qt("@firebase/app"),zt="[DEFAULT]",Gt={[Bt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Wt=new Map,Qt=new Map;function Xt(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Qt.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const e of Wt.values())Xt(e,t);return!0}
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
const Jt=new kt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Zt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Lt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}
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
     */function te(t,e,n){var s;let i=null!==(s=Gt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Kt.warn(t.join(" "))}Yt(new Lt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */var ee;ee="",Yt(new Lt("platform-logger",(t=>new jt(t)),"PRIVATE")),te(Bt,Ht,ee),te(Bt,Ht,"esm2017"),te("fire-js","");
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
te("firebase","9.6.6","app");var ne,se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ie=ie||{},re=se||self;function oe(){}function ae(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ce(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var le="closure_uid_"+(1e9*Math.random()>>>0),he=0;function ue(t,e,n){return t.call.apply(t.bind,arguments)}function de(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function fe(t,e,n){return(fe=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ue:de).apply(null,arguments)}function pe(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ge(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function me(){this.s=this.s,this.o=this.o}var ye={};me.prototype.s=!1,me.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,le)&&t[le]||(t[le]=++he)}(this);delete ye[t]}},me.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ve=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},we=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Ee(t){return Array.prototype.concat.apply([],arguments)}function be(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Te(t){return/^[\s\xa0]*$/.test(t)}var Ie,Ce=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Se(t,e){return-1!=t.indexOf(e)}function Ae(t,e){return t<e?-1:t>e?1:0}t:{var ke=re.navigator;if(ke){var Ne=ke.userAgent;if(Ne){Ie=Ne;break t}}Ie=""}function _e(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function De(t){const e={};for(const n in t)e[n]=t[n];return e}var Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Le(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Re.length;e++)n=Re[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xe(t){return xe[" "](t),t}xe[" "]=oe;var Oe,Me,Fe=Se(Ie,"Opera"),Pe=Se(Ie,"Trident")||Se(Ie,"MSIE"),Ve=Se(Ie,"Edge"),Ue=Ve||Pe,$e=Se(Ie,"Gecko")&&!(Se(Ie.toLowerCase(),"webkit")&&!Se(Ie,"Edge"))&&!(Se(Ie,"Trident")||Se(Ie,"MSIE"))&&!Se(Ie,"Edge"),qe=Se(Ie.toLowerCase(),"webkit")&&!Se(Ie,"Edge");function je(){var t=re.document;return t?t.documentMode:void 0}t:{var Be="",He=(Me=Ie,$e?/rv:([^\);]+)(\)|;)/.exec(Me):Ve?/Edge\/([\d\.]+)/.exec(Me):Pe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Me):qe?/WebKit\/(\S+)/.exec(Me):Fe?/(?:Version)[ \/]?(\S+)/.exec(Me):void 0);if(He&&(Be=He?He[1]:""),Pe){var Ke=je();if(null!=Ke&&Ke>parseFloat(Be)){Oe=String(Ke);break t}}Oe=Be}var ze,Ge={};function We(){return function(t){var e=Ge;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ce(String(Oe)).split("."),n=Ce("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Ae(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Ae(0==i[2].length,0==r[2].length)||Ae(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(re.document&&Pe){var Qe=je();ze=Qe||(parseInt(Oe,10)||void 0)}else ze=void 0;var Xe=ze,Ye=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",oe,e),re.removeEventListener("test",oe,e)}catch(t){}return t}();function Je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ze(t,e){if(Je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($e){t:{try{xe(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:tn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ze.Z.h.call(this)}}Je.prototype.h=function(){this.defaultPrevented=!0},ge(Ze,Je);var tn={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),nn=0;function sn(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++nn,this.ca=this.fa=!1}function rn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function on(t){this.src=t,this.g={},this.h=0}function an(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ve(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(rn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function cn(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}on.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=cn(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new sn(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var ln="closure_lm_"+(1e6*Math.random()|0),hn={};function un(t,e,n,s,i){if(s&&s.once)return fn(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)un(t,e[r],n,s,i);return null}return n=En(n),t&&t[en]?t.N(e,n,ce(s)?!!s.capture:!!s,i):dn(t,e,n,!1,s,i)}function dn(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ce(i)?!!i.capture:!!i,a=vn(t);if(a||(t[ln]=a=new on(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=yn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ye||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(mn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function fn(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)fn(t,e[r],n,s,i);return null}return n=En(n),t&&t[en]?t.O(e,n,ce(s)?!!s.capture:!!s,i):dn(t,e,n,!0,s,i)}function pn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)pn(t,e[r],n,s,i);else s=ce(s)?!!s.capture:!!s,n=En(n),t&&t[en]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=cn(r=t.g[e],n,s,i))&&(rn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=vn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cn(e,n,s,i)),(n=-1<t?e[t]:null)&&gn(n))}function gn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[en])an(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(mn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vn(e))?(an(n,t),0==n.h&&(n.src=null,e[ln]=null)):rn(t)}}}function mn(t){return t in hn?hn[t]:hn[t]="on"+t}function yn(t,e){if(t.ca)t=!0;else{e=new Ze(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&gn(t),t=n.call(s,e)}return t}function vn(t){return(t=t[ln])instanceof on?t:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function En(t){return"function"==typeof t?t:(t[wn]||(t[wn]=function(e){return t.handleEvent(e)}),t[wn])}function bn(){me.call(this),this.i=new on(this),this.P=this,this.I=null}function Tn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Je(e,t);else if(e instanceof Je)e.target=e.target||t;else{var i=e;Le(e=new Je(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=In(o,s,!0,e)&&i}if(i=In(o=e.g=t,s,!0,e)&&i,i=In(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=In(o=e.g=n[r],s,!1,e)&&i}function In(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&an(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}ge(bn,me),bn.prototype[en]=!0,bn.prototype.removeEventListener=function(t,e,n,s){pn(this,t,e,n,s)},bn.prototype.M=function(){if(bn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rn(n[s]);delete e.g[t],e.h--}}this.I=null},bn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},bn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Cn=re.JSON.stringify;function Sn(){var t=Ln;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var An,kn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Nn),(t=>t.reset()));class Nn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function _n(t){re.setTimeout((()=>{throw t}),0)}function Dn(t,e){An||function(){var t=re.Promise.resolve(void 0);An=function(){t.then(xn)}}(),Rn||(An(),Rn=!0),Ln.add(t,e)}var Rn=!1,Ln=new class{constructor(){this.h=this.g=null}add(t,e){const n=kn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function xn(){for(var t;t=Sn();){try{t.h.call(t.g)}catch(t){_n(t)}var e=kn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rn=!1}function On(t,e){bn.call(this),this.h=t||1,this.g=e||re,this.j=fe(this.kb,this),this.l=Date.now()}function Mn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Fn(t,e,n){if("function"==typeof t)n&&(t=fe(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=fe(t.handleEvent,t)}return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Pn(t){t.g=Fn((()=>{t.g=null,t.i&&(t.i=!1,Pn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ge(On,bn),(ne=On.prototype).da=!1,ne.S=null,ne.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Tn(this,"tick"),this.da&&(Mn(this),this.start()))}},ne.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ne.M=function(){On.Z.M.call(this),Mn(this),delete this.g};class Vn extends me{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Pn(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(t){me.call(this),this.h=t,this.g={}}ge(Un,me);var $n=[];function qn(t,e,n,s){Array.isArray(n)||(n&&($n[0]=n.toString()),n=$n);for(var i=0;i<n.length;i++){var r=un(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function jn(t){_e(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gn(t)}),t),t.g={}}function Bn(){this.g=!0}function Hn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Cn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Un.prototype.M=function(){Un.Z.M.call(this),jn(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Bn.prototype.Aa=function(){this.g=!1},Bn.prototype.info=function(){};var Kn={},zn=null;function Gn(){return zn=zn||new bn}function Wn(t){Je.call(this,Kn.Ma,t)}function Qn(t){const e=Gn();Tn(e,new Wn(e,t))}function Xn(t,e){Je.call(this,Kn.STAT_EVENT,t),this.stat=e}function Yn(t){const e=Gn();Tn(e,new Xn(e,t))}function Jn(t,e){Je.call(this,Kn.Na,t),this.size=e}function Zn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return re.setTimeout((function(){t()}),e)}Kn.Ma="serverreachability",ge(Wn,Je),Kn.STAT_EVENT="statevent",ge(Xn,Je),Kn.Na="timingevent",ge(Jn,Je);var ts={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},es={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ns(){}function ss(t){return t.h||(t.h=t.i())}function is(){}ns.prototype.h=null;var rs,os={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function as(){Je.call(this,"d")}function cs(){Je.call(this,"c")}function ls(){}function hs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Un(this),this.P=ds,t=Ue?125:void 0,this.W=new On(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new us}function us(){this.i=null,this.g="",this.h=!1}ge(as,Je),ge(cs,Je),ge(ls,ns),ls.prototype.g=function(){return new XMLHttpRequest},ls.prototype.i=function(){return{}},rs=new ls;var ds=45e3,fs={},ps={};function gs(t,e,n){t.K=1,t.v=Vs(Ls(e)),t.s=n,t.U=!0,ms(t,null)}function ms(t,e){t.F=Date.now(),Es(t),t.A=Ls(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ys(n.h,"t",s),t.C=0,n=t.l.H,t.h=new us,t.g=Yi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Vn(fe(t.Ia,t,t.g),t.O)),qn(t.V,t.g,"readystatechange",t.gb),e=t.H?De(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qn(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+l+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ys(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function vs(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=ws(t,n),s==ps){4==e&&(t.o=4,Yn(14),i=!1),Hn(t.j,t.m,null,"[Incomplete Response]");break}if(s==fs){t.o=4,Yn(15),Hn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Hn(t.j,t.m,s,null),Ss(t,s)}ys(t)&&s!=ps&&s!=fs&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Yn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bi(e),e.L=!0,Yn(11))):(Hn(t.j,t.m,n,"[Invalid Chunked Response]"),Cs(t),Is(t))}function ws(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ps:(n=Number(e.substring(n,s)),isNaN(n)?fs:(s+=1)+n>e.length?ps:(e=e.substr(s,n),t.C=s+n,e))}function Es(t){t.Y=Date.now()+t.P,bs(t,t.P)}function bs(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Zn(fe(t.eb,t),e)}function Ts(t){t.B&&(re.clearTimeout(t.B),t.B=null)}function Is(t){0==t.l.G||t.I||zi(t.l,t)}function Cs(t){Ts(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Mn(t.W),jn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ss(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||si(n.i,t)))if(n.I=t.N,!t.J&&si(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ki(n),Oi(n)}ji(n),Yn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Zn(fe(n.ab,n),6e3));if(1>=ni(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Wi(n,11)}else if((t.J||n.g==t)&&Ki(n),!Te(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=l[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Se(t,"spdy")||Se(t,"quic")||Se(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ii(r,r.h),r.h=null))}if(s.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Ps(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Xi(s,s.H?s.la:null,s.W),o.J){ri(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ts(a),Es(a)),s.g=o}else qi(s);0<n.l.length&&Pi(n)}else"stop"!=l[0]&&"close"!=l[0]||Wi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Wi(n,7):xi(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Qn(4)}catch(t){}}function As(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ae(t)||"string"==typeof t)we(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ae(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ae(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ks(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ks)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ns(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];_s(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)_s(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function _s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(ne=hs.prototype).setTimeout=function(t){this.P=t},ne.gb=function(t){t=t.target;const e=this.L;e&&3==Ni(t)?e.l():this.Ia(t)},ne.Ia=function(t){try{if(t==this.g)t:{const h=Ni(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>h)&&(3!=h||Ue||this.g&&(this.h.h||this.g.ga()||_i(this.g)))){this.I||4!=h||7==e||Qn(8==e||0>=u?3:2),Ts(this);var n=this.g.ba();this.N=n;e:if(ys(this)){var s=_i(this.g);t="";var i=s.length,r=4==Ni(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Cs(this),Is(this);var o="";break e}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Te(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Yn(12),Cs(this),Is(this);break t}Hn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ss(this,n)}this.U?(vs(this,h,o),Ue&&this.i&&3==h&&(qn(this.V,this.W,"tick",this.fb),this.W.start())):(Hn(this.j,this.m,o,null),Ss(this,o)),4==h&&Cs(this),this.i&&!this.I&&(4==h?zi(this.l,this):(this.i=!1,Es(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Yn(12)):(this.o=0,Yn(13)),Cs(this),Is(this)}}}catch(t){}},ne.fb=function(){if(this.g){var t=Ni(this.g),e=this.g.ga();this.C<e.length&&(Ts(this),vs(this,t,e),this.i&&4!=t&&Es(this))}},ne.cancel=function(){this.I=!0,Cs(this)},ne.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Qn(3),Yn(17)),Cs(this),this.o=2,Is(this)):bs(this,this.Y-t)},(ne=ks.prototype).R=function(){Ns(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},ne.T=function(){return Ns(this),this.g.concat()},ne.get=function(t,e){return _s(this.h,t)?this.h[t]:e},ne.set=function(t,e){_s(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},ne.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Ds=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Rs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Rs){this.g=void 0!==e?e:t.g,xs(this,t.j),this.s=t.s,Os(this,t.i),Ms(this,t.m),this.l=t.l,e=t.h;var n=new Gs;n.i=e.i,e.g&&(n.g=new ks(e.g),n.h=e.h),Fs(this,n),this.o=t.o}else t&&(n=String(t).match(Ds))?(this.g=!!e,xs(this,n[1]||"",!0),this.s=Us(n[2]||""),Os(this,n[3]||"",!0),Ms(this,n[4]),this.l=Us(n[5]||"",!0),Fs(this,n[6]||"",!0),this.o=Us(n[7]||"")):(this.g=!!e,this.h=new Gs(null,this.g))}function Ls(t){return new Rs(t)}function xs(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Os(t,e,n){t.i=n?Us(e,!0):e}function Ms(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fs(t,e,n){e instanceof Gs?(t.h=e,function(t,e){e&&!t.j&&(Ws(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qs(this,e),Ys(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=$s(e,Ks)),t.h=new Gs(e,t.g))}function Ps(t,e,n){t.h.set(e,n)}function Vs(t){return Ps(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $s(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,qs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push($s(e,js,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push($s(e,js,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push($s(n,"/"==n.charAt(0)?Hs:Bs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$s(n,zs)),t.join("")};var js=/[#\/\?@]/g,Bs=/[#\?:]/g,Hs=/[#\?]/g,Ks=/[#\?@]/g,zs=/#/g;function Gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ws(t){t.g||(t.g=new ks,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qs(t,e){Ws(t),e=Js(t,e),_s(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,_s((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ns(t)))}function Xs(t,e){return Ws(t),e=Js(t,e),_s(t.g.h,e)}function Ys(t,e,n){Qs(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),be(n)),t.h+=n.length)}function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ne=Gs.prototype).add=function(t,e){Ws(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ne.forEach=function(t,e){Ws(this),this.g.forEach((function(n,s){we(n,(function(n){t.call(e,n,s,this)}),this)}),this)},ne.T=function(){Ws(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},ne.R=function(t){Ws(this);var e=[];if("string"==typeof t)Xs(this,t)&&(e=Ee(e,this.g.get(Js(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ee(e,t[n])}return e},ne.set=function(t,e){return Ws(this),this.i=null,Xs(this,t=Js(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ne.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},ne.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Zs(t){this.l=t||ti,re.PerformanceNavigationTiming?t=0<(t=re.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(re.g&&re.g.Ea&&re.g.Ea()&&re.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ti=10;function ei(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ni(t){return t.h?1:t.g?t.g.size:0}function si(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ii(t,e){t.g?t.g.add(e):t.h=e}function ri(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function oi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return be(t.i)}function ai(){}function ci(){this.g=new ai}function li(t,e,n){const s=n||"";try{As(t,(function(t,n){let i=t;ce(t)&&(i=Cn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function hi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function ui(t){this.l=t.$b||null,this.j=t.ib||!1}function di(t,e){bn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zs.prototype.cancel=function(){if(this.i=oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ai.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)},ai.prototype.parse=function(t){return re.JSON.parse(t,void 0)},ge(ui,ns),ui.prototype.g=function(){return new di(this.l,this.j)},ui.prototype.i=function(t){return function(){return t}}({}),ge(di,bn);var fi=0;function pi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mi(t)}function mi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ne=di.prototype).open=function(t,e){if(this.readyState!=fi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mi(this)},ne.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},ne.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,gi(this)),this.readyState=fi},ne.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==re.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},ne.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gi(this):mi(this),3==this.readyState&&pi(this)}},ne.Ua=function(t){this.g&&(this.response=this.responseText=t,gi(this))},ne.Ta=function(t){this.g&&(this.response=t,gi(this))},ne.ha=function(){this.g&&gi(this)},ne.setRequestHeader=function(t,e){this.v.append(t,e)},ne.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ne.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(di.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var yi=re.JSON.parse;function vi(t){bn.call(this),this.headers=new ks,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wi,this.K=this.L=!1}ge(vi,bn);var wi="",Ei=/^https?$/i,bi=["POST","PUT"];function Ti(t){return"content-type"==t.toLowerCase()}function Ii(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ci(t),Ai(t)}function Ci(t){t.D||(t.D=!0,Tn(t,"complete"),Tn(t,"error"))}function Si(t){if(t.h&&void 0!==ie&&(!t.C[1]||4!=Ni(t)||2!=t.ba()))if(t.v&&4==Ni(t))Fn(t.Fa,0,t);else if(Tn(t,"readystatechange"),4==Ni(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Ds)[1]||null;if(!i&&re.self&&re.self.location){var r=re.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ei.test(i?i.toLowerCase():"")}n=s}if(n)Tn(t,"complete"),Tn(t,"success");else{t.m=6;try{var o=2<Ni(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Ci(t)}}finally{Ai(t)}}}function Ai(t,e){if(t.g){ki(t);const n=t.g,s=t.C[0]?oe:null;t.g=null,t.C=null,e||Tn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function ki(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function Ni(t){return t.g?t.g.readyState:0}function _i(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Di(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return _e(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ps(t,e,n))}function Ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Li(t){this.za=0,this.l=[],this.h=new Bn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ri("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ri("baseRetryDelayMs",5e3,t),this.$a=Ri("retryDelaySeedMs",1e4,t),this.Ya=Ri("forwardChannelMaxRetries",2,t),this.ra=Ri("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Zs(t&&t.concurrentRequestLimit),this.Ca=new ci,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function xi(t){if(Mi(t),3==t.G){var e=t.V++,n=Ls(t.F);Ps(n,"SID",t.J),Ps(n,"RID",e),Ps(n,"TYPE","terminate"),Ui(t,n),(e=new hs(t,t.h,e,void 0)).K=2,e.v=Vs(Ls(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&((new Image).src=e.v,n=!0),n||(e.g=Yi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Es(e)}Qi(t)}function Oi(t){t.g&&(Bi(t),t.g.cancel(),t.g=null)}function Mi(t){Oi(t),t.u&&(re.clearTimeout(t.u),t.u=null),Ki(t),t.i.cancel(),t.m&&("number"==typeof t.m&&re.clearTimeout(t.m),t.m=null)}function Fi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Pi(t)}function Pi(t){ei(t.i)||t.m||(t.m=!0,Dn(t.Ha,t),t.C=0)}function Vi(t,e){var n;n=e?e.m:t.V++;const s=Ls(t.F);Ps(s,"SID",t.J),Ps(s,"RID",n),Ps(s,"AID",t.U),Ui(t,s),t.o&&t.s&&Di(s,t.o,t.s),n=new hs(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$i(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ii(t.i,n),gs(n,s,e)}function Ui(t,e){t.j&&As({},(function(t,n){Ps(e,n,t)}))}function $i(t,e,n){n=Math.min(t.l.length,n);var s=t.j?fe(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{li(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function qi(t){t.g||t.u||(t.Y=1,Dn(t.Ga,t),t.A=0)}function ji(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Zn(fe(t.Ga,t),Gi(t,t.A)),t.A++,!0)}function Bi(t){null!=t.B&&(re.clearTimeout(t.B),t.B=null)}function Hi(t){t.g=new hs(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ls(t.oa);Ps(e,"RID","rpc"),Ps(e,"SID",t.J),Ps(e,"CI",t.N?"0":"1"),Ps(e,"AID",t.U),Ui(t,e),Ps(e,"TYPE","xmlhttp"),t.o&&t.s&&Di(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Vs(Ls(e)),n.s=null,n.U=!0,ms(n,t)}function Ki(t){null!=t.v&&(re.clearTimeout(t.v),t.v=null)}function zi(t,e){var n=null;if(t.g==e){Ki(t),Bi(t),t.g=null;var s=2}else{if(!si(t.i,e))return;n=e.D,ri(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Tn(s=Gn(),new Jn(s,n,e,i)),Pi(t)}else qi(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(ni(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Zn(fe(t.Ha,t,e),Gi(t,t.C)),t.C++,0)))}(t,e)||2==s&&ji(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}function Gi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Wi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=fe(t.jb,t);n||(n=new Rs("//www.google.com/images/cleardot.gif"),re.location&&"http"==re.location.protocol||xs(n,"https"),Vs(n)),function(t,e){const n=new Bn;if(re.Image){const s=new Image;s.onload=pe(hi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=pe(hi,n,s,"TestLoadImage: error",!1,e),s.onabort=pe(hi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=pe(hi,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Yn(2);t.G=0,t.j&&t.j.va(e),Qi(t),Mi(t)}function Qi(t){t.G=0,t.I=-1,t.j&&(0==oi(t.i).length&&0==t.l.length||(t.i.i.length=0,be(t.l),t.l.length=0),t.j.ua())}function Xi(t,e,n){let s=function(t){return t instanceof Rs?Ls(t):new Rs(t,void 0)}(n);if(""!=s.i)e&&Os(s,e+"."+s.i),Ms(s,s.m);else{const t=re.location;s=function(t,e,n,s){var i=new Rs(null,void 0);return t&&xs(i,t),e&&Os(i,e),n&&Ms(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&_e(t.aa,(function(t,e){Ps(s,e,t)})),e=t.D,n=t.sa,e&&n&&Ps(s,e,n),Ps(s,"VER",t.ma),Ui(t,s),s}function Yi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new vi(new ui({ib:!0})):new vi(t.qa)).L=t.H,e}function Ji(){}function Zi(){if(Pe&&!(10<=Number(Xe)))throw Error("Environmental error: no available transport.")}function tr(t,e){bn.call(this),this.g=new Li(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Te(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Te(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new sr(this)}function er(t){as.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nr(){cs.call(this),this.status=1}function sr(t){this.g=t}(ne=vi.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rs.g(),this.C=this.u?ss(this.u):ss(rs),this.g.onreadystatechange=fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ii(this,t)}t=n||"";const i=new ks(this.headers);s&&As(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=Ti;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=re.FormData&&t instanceof re.FormData,!(0<=ve(bi,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ki(this),0<this.B&&((this.K=function(t){return Pe&&We()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fe(this.pa,this)):this.A=Fn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ii(this,t)}},ne.pa=function(){void 0!==ie&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tn(this,"timeout"),this.abort(8))},ne.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tn(this,"complete"),Tn(this,"abort"),Ai(this))},ne.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ai(this,!0)),vi.Z.M.call(this)},ne.Fa=function(){this.s||(this.F||this.v||this.l?Si(this):this.cb())},ne.cb=function(){Si(this)},ne.ba=function(){try{return 2<Ni(this)?this.g.status:-1}catch(t){return-1}},ne.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ne.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),yi(e)}},ne.Da=function(){return this.m},ne.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ne=Li.prototype).ma=8,ne.G=1,ne.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},ne.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new hs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=De(r),Le(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$i(this,i,e),Ps(n=Ls(this.F),"RID",t),Ps(n,"CVER",22),this.D&&Ps(n,"X-HTTP-Session-Id",this.D),Ui(this,n),this.o&&r&&Di(n,this.o,r),ii(this.i,i),this.Ra&&Ps(n,"TYPE","init"),this.ja?(Ps(n,"$req",e),Ps(n,"SID","null"),i.$=!0,gs(i,n,null)):gs(i,n,e),this.G=2}}else 3==this.G&&(t?Vi(this,t):0==this.l.length||ei(this.i)||Vi(this))},ne.Ga=function(){if(this.u=null,Hi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Zn(fe(this.bb,this),t)}},ne.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Yn(10),Oi(this),Hi(this))},ne.ab=function(){null!=this.v&&(this.v=null,Oi(this),ji(this),Yn(19))},ne.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Yn(2)):(this.h.info("Failed to ping google.com"),Yn(1))},(ne=Ji.prototype).xa=function(){},ne.wa=function(){},ne.va=function(){},ne.ua=function(){},ne.Oa=function(){},Zi.prototype.g=function(t,e){return new tr(t,e)},ge(tr,bn),tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Dn(fe(t.hb,t,e))),Yn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Xi(t,null,t.W),Pi(t)},tr.prototype.close=function(){xi(this.g)},tr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Fi(this.g,e)}else this.v?((e={}).__data__=Cn(t),Fi(this.g,e)):Fi(this.g,t)},tr.prototype.M=function(){this.g.j=null,delete this.j,xi(this.g),delete this.g,tr.Z.M.call(this)},ge(er,as),ge(nr,cs),ge(sr,Ji),sr.prototype.xa=function(){Tn(this.g,"a")},sr.prototype.wa=function(t){Tn(this.g,new er(t))},sr.prototype.va=function(t){Tn(this.g,new nr(t))},sr.prototype.ua=function(){Tn(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,tr.prototype.send=tr.prototype.u,tr.prototype.open=tr.prototype.m,tr.prototype.close=tr.prototype.close,ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,es.COMPLETE="complete",is.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",bn.prototype.listen=bn.prototype.N,vi.prototype.listenOnce=vi.prototype.O,vi.prototype.getLastError=vi.prototype.La,vi.prototype.getLastErrorCode=vi.prototype.Da,vi.prototype.getStatus=vi.prototype.ba,vi.prototype.getResponseJson=vi.prototype.Qa,vi.prototype.getResponseText=vi.prototype.ga,vi.prototype.send=vi.prototype.ea;var ir=ts,rr=es,or=Kn,ar=10,cr=11,lr=ui,hr=is,ur=vi;const dr="@firebase/firestore";
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
     */class fr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}fr.UNAUTHENTICATED=new fr(null),fr.GOOGLE_CREDENTIALS=new fr("google-credentials-uid"),fr.FIRST_PARTY=new fr("first-party-uid"),fr.MOCK_USER=new fr("mock-user");
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
let pr="9.6.5";
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
     */const gr=new qt("@firebase/firestore");function mr(){return gr.logLevel}function yr(t,...e){if(gr.logLevel<=Ft.DEBUG){const n=e.map(Er);gr.debug(`Firestore (${pr}): ${t}`,...n)}}function vr(t,...e){if(gr.logLevel<=Ft.ERROR){const n=e.map(Er);gr.error(`Firestore (${pr}): ${t}`,...n)}}function wr(t,...e){if(gr.logLevel<=Ft.WARN){const n=e.map(Er);gr.warn(`Firestore (${pr}): ${t}`,...n)}}function Er(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function br(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function Tr(t,e){t||br()}function Ir(t,e){return t}
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
     */const Cr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Sr extends At{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Ar{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class kr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(fr.UNAUTHENTICATED)))}shutdown(){}}class _r{constructor(t){this.t=t,this.currentUser=fr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ar,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{yr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(yr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ar)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(yr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Tr("string"==typeof e.accessToken),new kr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Tr(null===t||"string"==typeof t),new fr(t)}}class Dr{constructor(t,e,n){this.type="FirstParty",this.user=fr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Rr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Dr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(fr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&yr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{yr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):yr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Tr("string"==typeof t.token),new Lr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class Or{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
     */function Mr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */Or.I=-1;class Fr{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Mr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Pr(t,e){return t<e?-1:t>e?1:0}function Vr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class Ur{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Sr(Cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Sr(Cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Sr(Cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Sr(Cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ur.fromMillis(Date.now())}static fromDate(t){return Ur.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ur(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pr(this.nanoseconds,t.nanoseconds):Pr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class $r{constructor(t){this.timestamp=t}static fromTimestamp(t){return new $r(t)}static min(){return new $r(new Ur(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function qr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Br(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */class Hr{constructor(t,e,n){void 0===e?e=0:e>t.length&&br(),void 0===n?n=t.length-e:n>t.length-e&&br(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Hr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Hr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Kr extends Hr{construct(t,e,n){return new Kr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Sr(Cr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Kr(e)}static emptyPath(){return new Kr([])}}const zr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gr extends Hr{construct(t,e,n){return new Gr(t,e,n)}static isValidIdentifier(t){return zr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Gr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Sr(Cr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Sr(Cr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Sr(Cr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Sr(Cr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Gr(e)}static emptyPath(){return new Gr([])}}
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
     */class Wr{constructor(t){this.fields=t,t.sort(Gr.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class Qr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Qr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Qr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qr.EMPTY_BYTE_STRING=new Qr("");const Xr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(Tr(!!t),"string"==typeof t){let e=0;const n=Xr.exec(t);if(Tr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Jr(t.seconds),nanos:Jr(t.nanos)}}function Jr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Zr(t){return"string"==typeof t?Qr.fromBase64String(t):Qr.fromUint8Array(t)}
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
     */function to(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eo(t){const e=t.mapValue.fields.__previous_value__;return to(e)?eo(e):e}function no(t){const e=Yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ur(e.seconds,e.nanos)}
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
     */function so(t){return null==t}function io(t){return 0===t&&1/t==-1/0}
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
class ro{constructor(t){this.path=t}static fromPath(t){return new ro(Kr.fromString(t))}static fromName(t){return new ro(Kr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Kr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Kr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ro(new Kr(t.slice()))}}
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
     */function oo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?to(t)?4:10:br()}function ao(t,e){if(t===e)return!0;const n=oo(t);if(n!==oo(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Yr(t.timestampValue),s=Yr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Zr(t.bytesValue).isEqual(Zr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Jr(t.geoPointValue.latitude)===Jr(e.geoPointValue.latitude)&&Jr(t.geoPointValue.longitude)===Jr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Jr(t.integerValue)===Jr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Jr(t.doubleValue),s=Jr(e.doubleValue);return n===s?io(n)===io(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Vr(t.arrayValue.values||[],e.arrayValue.values||[],ao);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(qr(n)!==qr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!ao(n[t],s[t])))return!1;return!0}(t,e);default:return br()}}function co(t,e){return void 0!==(t.values||[]).find((t=>ao(t,e)))}function lo(t,e){if(t===e)return 0;const n=oo(t),s=oo(e);if(n!==s)return Pr(n,s);switch(n){case 0:return 0;case 1:return Pr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Jr(t.integerValue||t.doubleValue),s=Jr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ho(t.timestampValue,e.timestampValue);case 4:return ho(no(t),no(e));case 5:return Pr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Zr(t),s=Zr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Pr(n[t],s[t]);if(0!==e)return e}return Pr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Pr(Jr(t.latitude),Jr(e.latitude));return 0!==n?n:Pr(Jr(t.longitude),Jr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=lo(n[t],s[t]);if(e)return e}return Pr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Pr(s[t],r[t]);if(0!==e)return e;const o=lo(n[s[t]],i[r[t]]);if(0!==o)return o}return Pr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw br()}}function ho(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Pr(t,e);const n=Yr(t),s=Yr(e),i=Pr(n.seconds,s.seconds);return 0!==i?i:Pr(n.nanos,s.nanos)}function uo(t){return fo(t)}function fo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Yr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ro.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=fo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${fo(t.fields[i])}`;return n+"}"}(t.mapValue):br();var e,n}function po(t){return!!t&&"integerValue"in t}function go(t){return!!t&&"arrayValue"in t}function mo(t){return!!t&&"nullValue"in t}function yo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=wo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class Eo{constructor(t){this.value=t}static empty(){return new Eo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wo(e)}setAll(t){let e=Gr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=wo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());vo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ao(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){jr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Eo(wo(this.value))}}function bo(t){const e=[];return jr(t.fields,((t,n)=>{const s=new Gr([t]);if(vo(n)){const t=bo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Wr(e)
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
     */}class To{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new To(t,0,$r.min(),Eo.empty(),0)}static newFoundDocument(t,e,n){return new To(t,1,e,n,0)}static newNoDocument(t,e){return new To(t,2,e,Eo.empty(),0)}static newUnknownDocument(t,e){return new To(t,3,e,Eo.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Eo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Eo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof To&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new To(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Io{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function Co(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Io(t,e,n,s,i,r,o)}function So(t){const e=Ir(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+uo(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),so(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Vo(e.startAt)),e.endAt&&(t+="|ub:",t+=Vo(e.endAt)),e.R=t}return e.R}function Ao(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$o(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ao(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jo(t.startAt,e.startAt)&&jo(t.endAt,e.endAt)}function ko(t){return ro.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class No extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new _o(t,e,n):"array-contains"===e?new xo(t,n):"in"===e?new Oo(t,n):"not-in"===e?new Mo(t,n):"array-contains-any"===e?new Fo(t,n):new No(t,e,n)}static P(t,e,n){return"in"===e?new Do(t,n):new Ro(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(lo(e,this.value)):null!==e&&oo(this.value)===oo(e)&&this.v(lo(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return br()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _o extends No{constructor(t,e,n){super(t,e,n),this.key=ro.fromName(n.referenceValue)}matches(t){const e=ro.comparator(t.key,this.key);return this.v(e)}}class Do extends No{constructor(t,e){super(t,"in",e),this.keys=Lo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ro extends No{constructor(t,e){super(t,"not-in",e),this.keys=Lo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Lo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ro.fromName(t.referenceValue)))}class xo extends No{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return go(e)&&co(e.arrayValue,this.value)}}class Oo extends No{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&co(this.value.arrayValue,e)}}class Mo extends No{constructor(t,e){super(t,"not-in",e)}matches(t){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!co(this.value.arrayValue,e)}}class Fo extends No{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!go(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>co(this.value.arrayValue,t)))}}class Po{constructor(t,e){this.position=t,this.before=e}}function Vo(t){return`${t.before?"b":"a"}:${t.position.map((t=>uo(t))).join(",")}`}class Uo{constructor(t,e="asc"){this.field=t,this.dir=e}}function $o(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ro.comparator(ro.fromName(o.referenceValue),n.key):lo(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function jo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ao(t.position[n],e.position[n]))return!1;return!0}
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
     */class Bo{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ho(t){return new Bo(t)}function Ko(t){return!so(t.limit)&&"F"===t.limitType}function zo(t){return!so(t.limit)&&"L"===t.limitType}function Go(t){const e=Ir(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Uo(t)),e.S.push(new Uo(Gr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Uo(Gr.keyField(),t))}}}return e.S}function Wo(t){const e=Ir(t);if(!e.D)if("F"===e.limitType)e.D=Co(e.path,e.collectionGroup,Go(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Go(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Uo(n.field,e))}const n=e.endAt?new Po(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Po(e.startAt.position,!e.startAt.before):null;e.D=Co(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function Qo(t,e){return Ao(Wo(t),Wo(e))&&t.limitType===e.limitType}function Xo(t){return`${So(Wo(t))}|lt:${t.limitType}`}function Yo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${uo(e.value)}`;var e})).join(", ")}]`),so(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+Vo(t.startAt)),t.endAt&&(e+=", endAt: "+Vo(t.endAt)),`Target(${e})`}(Wo(t))}; limitType=${t.limitType})`}function Jo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ro.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!qo(t.startAt,Go(t),e))&&(!t.endAt||!qo(t.endAt,Go(t),e))}(t,e)}function Zo(t){return(e,n)=>{let s=!1;for(const i of Go(t)){const t=ta(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ta(t,e,n){const s=t.field.isKeyField()?ro.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?lo(s,i):br()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return br()}}
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
     */function ea(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function na(t){return{integerValue:""+t}}function sa(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?na(e):ea(t,e)}
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
     */class ia{constructor(){this._=void 0}}function ra(t,e,n){return t instanceof ca?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof la?ha(t,e):t instanceof ua?da(t,e):function(t,e){const n=aa(t,e),s=pa(n)+pa(t.N);return po(n)&&po(t.N)?na(s):ea(t.k,s)}(t,e)}function oa(t,e,n){return t instanceof la?ha(t,e):t instanceof ua?da(t,e):n}function aa(t,e){return t instanceof fa?po(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ca extends ia{}class la extends ia{constructor(t){super(),this.elements=t}}function ha(t,e){const n=ga(e);for(const e of t.elements)n.some((t=>ao(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ua extends ia{constructor(t){super(),this.elements=t}}function da(t,e){let n=ga(e);for(const e of t.elements)n=n.filter((t=>!ao(t,e)));return{arrayValue:{values:n}}}class fa extends ia{constructor(t,e){super(),this.k=t,this.N=e}}function pa(t){return Jr(t.integerValue||t.doubleValue)}function ga(t){return go(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
     */class ma{constructor(t,e){this.field=t,this.transform=e}}class ya{constructor(t,e){this.version=t,this.transformResults=e}}class va{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new va}static exists(t){return new va(void 0,t)}static updateTime(t){return new va(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ea{}function ba(t,e,n){t instanceof Aa?function(t,e,n){const s=t.value.clone(),i=_a(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof ka?function(t,e,n){if(!wa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=_a(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Na(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n){t instanceof Aa?function(t,e,n){if(!wa(t.precondition,e))return;const s=t.value.clone(),i=Da(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Sa(e),s).setHasLocalMutations()}(t,e,n):t instanceof ka?function(t,e,n){if(!wa(t.precondition,e))return;const s=Da(t.fieldTransforms,n,e),i=e.data;i.setAll(Na(t)),i.setAll(s),e.convertToFoundDocument(Sa(e),i).setHasLocalMutations()}(t,e,n):function(t,e){wa(t.precondition,e)&&e.convertToNoDocument($r.min())}(t,e)}function Ia(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=aa(s.transform,t||null);null!=i&&(null==n&&(n=Eo.empty()),n.set(s.field,i))}return n||null}function Ca(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Vr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof la&&e instanceof la||t instanceof ua&&e instanceof ua?Vr(t.elements,e.elements,ao):t instanceof fa&&e instanceof fa?ao(t.N,e.N):t instanceof ca&&e instanceof ca}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Sa(t){return t.isFoundDocument()?t.version:$r.min()}class Aa extends Ea{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class ka extends Ea{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Na(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function _a(t,e,n){const s=new Map;Tr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,oa(o,a,n[i]))}return s}function Da(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,ra(t,r,e))}return s}class Ra extends Ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class La extends Ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
     */class xa{constructor(t){this.count=t}}
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
     */var Oa,Ma;function Fa(t){if(void 0===t)return vr("GRPC error has no .code"),Cr.UNKNOWN;switch(t){case Oa.OK:return Cr.OK;case Oa.CANCELLED:return Cr.CANCELLED;case Oa.UNKNOWN:return Cr.UNKNOWN;case Oa.DEADLINE_EXCEEDED:return Cr.DEADLINE_EXCEEDED;case Oa.RESOURCE_EXHAUSTED:return Cr.RESOURCE_EXHAUSTED;case Oa.INTERNAL:return Cr.INTERNAL;case Oa.UNAVAILABLE:return Cr.UNAVAILABLE;case Oa.UNAUTHENTICATED:return Cr.UNAUTHENTICATED;case Oa.INVALID_ARGUMENT:return Cr.INVALID_ARGUMENT;case Oa.NOT_FOUND:return Cr.NOT_FOUND;case Oa.ALREADY_EXISTS:return Cr.ALREADY_EXISTS;case Oa.PERMISSION_DENIED:return Cr.PERMISSION_DENIED;case Oa.FAILED_PRECONDITION:return Cr.FAILED_PRECONDITION;case Oa.ABORTED:return Cr.ABORTED;case Oa.OUT_OF_RANGE:return Cr.OUT_OF_RANGE;case Oa.UNIMPLEMENTED:return Cr.UNIMPLEMENTED;case Oa.DATA_LOSS:return Cr.DATA_LOSS;default:return br()}}(Ma=Oa||(Oa={}))[Ma.OK=0]="OK",Ma[Ma.CANCELLED=1]="CANCELLED",Ma[Ma.UNKNOWN=2]="UNKNOWN",Ma[Ma.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ma[Ma.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ma[Ma.NOT_FOUND=5]="NOT_FOUND",Ma[Ma.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ma[Ma.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ma[Ma.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ma[Ma.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ma[Ma.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ma[Ma.ABORTED=10]="ABORTED",Ma[Ma.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ma[Ma.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ma[Ma.INTERNAL=13]="INTERNAL",Ma[Ma.UNAVAILABLE=14]="UNAVAILABLE",Ma[Ma.DATA_LOSS=15]="DATA_LOSS";
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
class Pa{constructor(t,e){this.comparator=t,this.root=e||Ua.EMPTY}insert(t,e){return new Pa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ua.BLACK,null,null))}remove(t){return new Pa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ua.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Va(this.root,t,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Va(this.root,t,this.comparator,!0)}}class Va{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ua{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ua.RED,this.left=null!=s?s:Ua.EMPTY,this.right=null!=i?i:Ua.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ua(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ua.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ua.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ua.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ua.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw br();if(this.right.isRed())throw br();const t=this.left.check();if(t!==this.right.check())throw br();return t+(this.isRed()?0:1)}}Ua.EMPTY=null,Ua.RED=!0,Ua.BLACK=!1,Ua.EMPTY=new class{constructor(){this.size=0}get key(){throw br()}get value(){throw br()}get color(){throw br()}get left(){throw br()}get right(){throw br()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ua(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class $a{constructor(t){this.comparator=t,this.data=new Pa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qa(this.data.getIterator())}getIteratorFrom(t){return new qa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof $a))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new $a(this.comparator);return e.data=t,e}}class qa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const ja=new Pa(ro.comparator);function Ba(){return ja}const Ha=new Pa(ro.comparator);function Ka(){return Ha}const za=new Pa(ro.comparator);const Ga=new $a(ro.comparator);function Wa(...t){let e=Ga;for(const n of t)e=e.add(n);return e}const Qa=new $a(Pr);function Xa(){return Qa}
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
     */class Ya{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ja.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ya($r.min(),n,Xa(),Ba(),Wa())}}class Ja{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ja(Qr.EMPTY_BYTE_STRING,e,Wa(),Wa(),Wa())}}
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
     */class Za{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.O=s}}class tc{constructor(t,e){this.targetId=t,this.M=e}}class ec{constructor(t,e,n=Qr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class nc{constructor(){this.F=0,this.L=rc(),this.B=Qr.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Wa(),e=Wa(),n=Wa();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:br()}})),new Ja(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=rc()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class sc{constructor(t){this.et=t,this.nt=new Map,this.st=Ba(),this.it=ic(),this.rt=new $a(Pr)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:br()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.M.count,s=this.wt(e);if(s){const t=s.target;if(ko(t))if(0===n){const n=new ro(t.path);this.at(e,n,To.newNoDocument(n,$r.min()))}else Tr(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&ko(i.target)){const e=new ro(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.at(s,e,To.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=Wa();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new Ya(t,e,this.rt,this.st,n);return this.st=Ba(),this.it=ic(),this.rt=new $a(Pr),s}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new nc,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new $a(Pr),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||yr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new nc),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function ic(){return new Pa(ro.comparator)}function rc(){return new Pa(ro.comparator)}
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
     */const oc={asc:"ASCENDING",desc:"DESCENDING"},ac={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class cc{constructor(t,e){this.databaseId=t,this.C=e}}function lc(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hc(t,e){return t.C?e.toBase64():e.toUint8Array()}function uc(t,e){return lc(t,e.toTimestamp())}function dc(t){return Tr(!!t),$r.fromTimestamp(function(t){const e=Yr(t);return new Ur(e.seconds,e.nanos)}(t))}function fc(t,e){return function(t){return new Kr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pc(t){const e=Kr.fromString(t);return Tr(Oc(e)),e}function gc(t,e){return fc(t.databaseId,e.path)}function mc(t,e){const n=pc(e);if(n.get(1)!==t.databaseId.projectId)throw new Sr(Cr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Sr(Cr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ro(wc(n))}function yc(t,e){return fc(t.databaseId,e)}function vc(t){return new Kr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wc(t){return Tr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ec(t,e,n){return{name:gc(t,e),fields:n.value.mapValue.fields}}function bc(t,e){return{documents:[yc(t,e.path)]}}function Tc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=yc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(yo(t.value))return{unaryFilter:{field:_c(t.field),op:"IS_NAN"}};if(mo(t.value))return{unaryFilter:{field:_c(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(yo(t.value))return{unaryFilter:{field:_c(t.field),op:"IS_NOT_NAN"}};if(mo(t.value))return{unaryFilter:{field:_c(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_c(t.field),op:Nc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:_c(t.field),direction:kc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||so(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Sc(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Sc(e.endAt)),n}function Ic(t){let e=function(t){const e=pc(t);return 4===e.length?Kr.emptyPath():wc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Tr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Cc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Uo(Dc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,so(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ac(n.startAt));let l=null;return n.endAt&&(l=Ac(n.endAt)),function(t,e,n,s,i,r,o,a){return new Bo(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,l)}function Cc(t){return t?void 0!==t.unaryFilter?[Lc(t)]:void 0!==t.fieldFilter?[Rc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Cc(t))).reduce(((t,e)=>t.concat(e))):br():[]}function Sc(t){return{before:t.before,values:t.position}}function Ac(t){const e=!!t.before,n=t.values||[];return new Po(n,e)}function kc(t){return oc[t]}function Nc(t){return ac[t]}function _c(t){return{fieldPath:t.canonicalString()}}function Dc(t){return Gr.fromServerFormat(t.fieldPath)}function Rc(t){return No.create(Dc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return br()}}(t.fieldFilter.op),t.fieldFilter.value)}function Lc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Dc(t.unaryFilter.field);return No.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Dc(t.unaryFilter.field);return No.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dc(t.unaryFilter.field);return No.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Dc(t.unaryFilter.field);return No.create(i,"!=",{nullValue:"NULL_VALUE"});default:return br()}}function xc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Oc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Mc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&br(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Mc(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Mc?e:Mc.resolve(e)}catch(t){return Mc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Mc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Mc.reject(e)}static resolve(t){return new Mc(((e,n)=>{e(t)}))}static reject(t){return new Mc(((e,n)=>{n(t)}))}static waitFor(t){return new Mc(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Mc.resolve(!1);for(const n of t)e=e.next((t=>t?Mc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function Fc(t){return"IndexedDbTransactionError"===t.name}
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
     */class Pc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&ba(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ta(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ta(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument($r.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Wa())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,((t,e)=>Ca(t,e)))&&Vr(this.baseMutations,t.baseMutations,((t,e)=>Ca(t,e)))}}class Vc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Tr(t.mutations.length===n.length);let s=za;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Vc(t,e,n,s)}}
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
     */class Uc{constructor(t,e,n,s,i=$r.min(),r=$r.min(),o=Qr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Uc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Uc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Uc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class $c{constructor(t){this.Gt=t}}function qc(t){const e=Ic({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class jc{constructor(){this.zt=new Bc}addToCollectionParentIndex(t,e){return this.zt.add(e),Mc.resolve()}getCollectionParents(t,e){return Mc.resolve(this.zt.getEntries(e))}}class Bc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new $a(Kr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new $a(Kr.comparator)).toArray()}}
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
     */class Hc{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Hc(0)}static re(){return new Hc(-1)}}
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
     */async function Kc(t){if(t.code!==Cr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;yr("LocalStore","Unexpectedly lost primary lease")}
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
     */class zc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){jr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Br(this.inner)}}
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
class Gc{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ro.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new ro(e)).next((t=>{let e=Ka();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=Ka();return this.Jt.getCollectionParents(t,s).next((r=>Mc.forEach(r,(r=>{const o=function(t,e){return new Bo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=To.newInvalidDocument(n),s=s.insert(n,i)),Ta(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{Jo(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=Wa();for(const t of e)for(const e of t.mutations)e instanceof ka&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
     */class Wc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=Wa(),s=Wa();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Wc(t,e.fromCache,n,s)}}
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
     */class Qc{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual($r.min())?this.Fn(t,e):this.Mn.vn(t,s).next((i=>{const r=this.Ln(e,i);return(Ko(e)||zo(e))&&this.Bn(e.limitType,r,s,n)?this.Fn(t,e):(mr()<=Ft.DEBUG&&yr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yo(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new $a(Zo(t));return e.forEach(((e,s)=>{Jo(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(t,e){return mr()<=Ft.DEBUG&&yr("QueryEngine","Using full collection scan to execute query:",Yo(e)),this.Mn.getDocumentsMatchingQuery(t,e,$r.min())}}
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
     */class Xc{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new Pa(Pr),this.Kn=new zc((t=>So(t)),Ao),this.jn=$r.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Gc(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function Yc(t,e){const n=Ir(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new Gc(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=Wa();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function Jc(t){const e=Ir(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function Zc(t,e){const n=Ir(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Qr.EMPTY_BYTE_STRING,$r.min()).withLastLimboFreeSnapshotVersion($r.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,s)),i=i.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&o.push(n.He.updateTargetData(t,l))}));let a=Ba();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=Wa();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ba();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual($r.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):yr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual($r.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Mc.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}function tl(t,e){const n=Ir(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e))))}async function el(t,e,n){const s=Ir(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Fc(t))throw t;yr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function nl(t,e,n){const s=Ir(t);let i=$r.min(),r=Wa();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Ir(t),i=s.Kn.get(n);return void 0!==i?Mc.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,Wo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:$r.min(),n?r:Wa()))).next((t=>({documents:t,zn:r})))))}
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
     */class sl{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Mc.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:dc(n.createTime)}),Mc.resolve()}getNamedQuery(t,e){return Mc.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:qc(t.bundledQuery),readTime:dc(t.readTime)}}(e)),Mc.resolve()}}
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
     */class il{constructor(){this.ts=new $a(rl.es),this.ns=new $a(rl.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new rl(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new rl(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ro(new Kr([])),n=new rl(e,t),s=new rl(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new ro(new Kr([])),n=new rl(e,t),s=new rl(e,t+1);let i=Wa();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new rl(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rl{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return ro.comparator(t.key,e.key)||Pr(t.fs,e.fs)}static ss(t,e){return Pr(t.fs,e.fs)||ro.comparator(t.key,e.key)}}
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
     */class ol{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new $a(rl.es)}checkEmpty(t){return Mc.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new Pc(i,e,n,s);this.An.push(r);for(const e of s)this.ws=this.ws.add(new rl(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Mc.resolve(r)}lookupMutationBatch(t,e){return Mc.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Mc.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Mc.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Mc.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rl(e,0),s=new rl(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),Mc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $a(Pr);return e.forEach((t=>{const e=new rl(t,0),s=new rl(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),Mc.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ro.isDocumentKey(i)||(i=i.child(""));const r=new rl(new ro(i),0);let o=new $a(Pr);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),Mc.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Tr(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Mc.forEach(e.mutations,(s=>{const i=new rl(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new rl(e,0),s=this.ws.firstAfterOrEqual(n);return Mc.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Mc.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
     */class al{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Pa(ro.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Mc.resolve(n?n.document.mutableCopy():To.newInvalidDocument(e))}getEntries(t,e){let n=Ba();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():To.newInvalidDocument(t))})),Mc.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=Ba();const i=new ro(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Jo(e,i)&&(s=s.insert(i.key,i.mutableCopy()))}return Mc.resolve(s)}Es(t,e){return Mc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new cl(this)}getSize(t){return Mc.resolve(this.size)}}class cl extends class{constructor(){this.changes=new zc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:$r.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:To.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Mc.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),Mc.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
     */class ll{constructor(t){this.persistence=t,this.Is=new zc((t=>So(t)),Ao),this.lastRemoteSnapshotVersion=$r.min(),this.highestTargetId=0,this.As=0,this.Rs=new il,this.targetCount=0,this.bs=Hc.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Mc.resolve()}getLastRemoteSnapshotVersion(t){return Mc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Mc.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Mc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Mc.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Hc(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Mc.resolve()}updateTargetData(t,e){return this.ae(e),Mc.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Mc.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Mc.waitFor(i).next((()=>s))}getTargetCount(t){return Mc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Mc.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Mc.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Mc.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Mc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Mc.resolve(n)}containsKey(t,e){return Mc.resolve(this.Rs.containsKey(e))}}
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
     */class hl{constructor(t,e){this.Ps={},this.Be=new Or(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new ll(this),this.Jt=new jc,this.Je=function(t,e){return new al(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new $c(e),this.Ye=new sl(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new ol(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){yr("MemoryPersistence","Starting transaction:",t);const s=new ul(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return Mc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class ul extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class dl{constructor(t){this.persistence=t,this.Cs=new il,this.Ns=null}static ks(t){return new dl(t)}get xs(){if(this.Ns)return this.Ns;throw br()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Mc.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Mc.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Mc.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mc.forEach(this.xs,(n=>{const s=ro.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Mc.or([()=>Mc.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class fl{constructor(){this.activeTargetIds=Xa()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pl{constructor(){this.pi=new fl,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new fl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
     */class gl{Ei(t){}shutdown(){}}
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
     */class ml{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){yr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){yr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const yl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class vl{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
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
     */class wl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);yr("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>(yr("RestConnection","Received: ",t),t)),(e=>{throw wr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+pr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=yl[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new ur;o.listenOnce(rr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ir.NO_ERROR:const e=o.getResponseJson();yr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case ir.TIMEOUT:yr("Connection",'RPC "'+t+'" timed out'),r(new Sr(Cr.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const n=o.getStatus();if(yr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Cr).indexOf(e)>=0?e:Cr.UNKNOWN}(t.status);r(new Sr(e,t.message))}else r(new Sr(Cr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Sr(Cr.UNAVAILABLE,"Connection failed."));break;default:br()}}finally{yr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Zi,r=Gn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new lr({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())||"object"==typeof navigator&&"ReactNative"===navigator.product||St().indexOf("Electron/")>=0||function(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||St().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");yr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,h=!1;const u=new vl({Vi:t=>{h?yr("Connection","Not sending because WebChannel is closed:",t):(l||(yr("Connection","Opening WebChannel transport."),c.open(),l=!0),yr("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,hr.EventType.OPEN,(()=>{h||yr("Connection","WebChannel transport opened.")})),d(c,hr.EventType.CLOSE,(()=>{h||(h=!0,yr("Connection","WebChannel transport closed"),u.Oi())})),d(c,hr.EventType.ERROR,(t=>{h||(h=!0,wr("Connection","WebChannel transport errored:",t),u.Oi(new Sr(Cr.UNAVAILABLE,"The operation could not be completed")))})),d(c,hr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Tr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){yr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Oa[t];if(void 0!==e)return Fa(e)}(t),n=i.message;void 0===e&&(e=Cr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,u.Oi(new Sr(e,n)),c.close()}else yr("Connection","WebChannel received:",n),u.Mi(n)}})),d(r,or.STAT_EVENT,(t=>{t.stat===ar?yr("Connection","Detected buffering proxy"):t.stat===cr&&yr("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.$i()}),0),u}}function El(){return"undefined"!=typeof document?document:null}
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
     */function bl(t){return new cc(t,!0)}class Tl{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&yr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Il{constructor(t,e,n,s,i,r,o,a){this.Me=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Tl(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===Cr.RESOURCE_EXHAUSTED?(vr(e.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===Cr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new Sr(Cr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return yr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget((()=>this.rr===t?e():(yr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cl extends Il{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:br()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(Tr(void 0===e||"string"==typeof e),Qr.fromBase64String(e||"")):(Tr(void 0===e||e instanceof Uint8Array),Qr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Cr.UNKNOWN:Fa(t.code);return new Sr(e,t.message||"")}(o);n=new ec(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mc(t,s.document.name),r=dc(s.document.updateTime),o=new Eo({mapValue:{fields:s.document.fields}}),a=To.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Za(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mc(t,s.document),r=s.readTime?dc(s.readTime):$r.min(),o=To.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mc(t,s.document),r=s.removedTargetIds||[];n=new Za([],r,i,null)}else{if(!("filter"in e))return br();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new xa(s),r=t.targetId;n=new tc(r,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return $r.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?$r.min():e.readTime?dc(e.readTime):$r.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=vc(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=ko(s)?{documents:bc(t,s)}:{query:Tc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=hc(t,e.resumeToken):e.snapshotVersion.compareTo($r.min())>0&&(n.readTime=lc(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return br()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=vc(this.k),e.removeTarget=t,this.gr(e)}}class Sl extends Il{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(Tr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=function(t,e){return t&&t.length>0?(Tr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?dc(t.updateTime):dc(e);return n.isEqual($r.min())&&(n=dc(e)),new ya(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=dc(t.commitTime);return this.listener.Cr(n,e)}return Tr(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=vc(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Aa)n={update:Ec(t,e.key,e.value)};else if(e instanceof Ra)n={delete:gc(t,e.key)};else if(e instanceof ka)n={update:Ec(t,e.key,e.data),updateMask:xc(e.fieldMask)};else{if(!(e instanceof La))return br();n={verify:gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ca)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof la)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ua)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fa)return{fieldPath:e.field.canonicalString(),increment:n.N};throw br()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:uc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:br()}(t,e.precondition)),n}(this.k,t)))};this.gr(e)}}
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
     */class Al extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Or(){if(this.$r)throw new Sr(Cr.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sr(Cr.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sr(Cr.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class kl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(vr(e),this.Lr=!1):yr("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
     */class Nl{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Pl(this)&&(yr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ir(t);e.Gr.add(4),await Dl(e),e.Jr.set("Unknown"),e.Gr.delete(4),await _l(e)}(this))}))})),this.Jr=new kl(n,s)}}async function _l(t){if(Pl(t))for(const e of t.zr)await e(!0)}async function Dl(t){for(const e of t.zr)await e(!1)}function Rl(t,e){const n=Ir(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Fl(n)?Ml(n):th(n).lr()&&xl(n,e))}function Ll(t,e){const n=Ir(t),s=th(n);n.Wr.delete(e),s.lr()&&Ol(n,e),0===n.Wr.size&&(s.lr()?s._r():Pl(n)&&n.Jr.set("Unknown"))}function xl(t,e){t.Yr.X(e.targetId),th(t).Pr(e)}function Ol(t,e){t.Yr.X(e),th(t).vr(e)}function Ml(t){t.Yr=new sc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),th(t).start(),t.Jr.Br()}function Fl(t){return Pl(t)&&!th(t).hr()&&t.Wr.size>0}function Pl(t){return 0===Ir(t).Gr.size}function Vl(t){t.Yr=void 0}async function Ul(t){t.Wr.forEach(((e,n)=>{xl(t,e)}))}async function $l(t,e){Vl(t),Fl(t)?(t.Jr.Kr(e),Ml(t)):t.Jr.set("Unknown")}async function ql(t,e,n){if(t.Jr.set("Online"),e instanceof ec&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){yr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await jl(t,n)}else if(e instanceof Za?t.Yr.ot(e):e instanceof tc?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual($r.min()))try{const e=await Jc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Qr.EMPTY_BYTE_STRING,n.snapshotVersion)),Ol(t,e);const s=new Uc(n.target,e,1,n.sequenceNumber);xl(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){yr("RemoteStore","Failed to raise snapshot:",e),await jl(t,e)}}async function jl(t,e,n){if(!Fc(e))throw e;t.Gr.add(1),await Dl(t),t.Jr.set("Offline"),n||(n=()=>Jc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{yr("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await _l(t)}))}function Bl(t,e){return e().catch((n=>jl(t,n,e)))}async function Hl(t){const e=Ir(t),n=eh(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Kl(e);)try{const t=await tl(e.localStore,s);if(null===t){0===e.Qr.length&&n._r();break}s=t.batchId,zl(e,t)}catch(t){await jl(e,t)}Gl(e)&&Wl(e)}function Kl(t){return Pl(t)&&t.Qr.length<10}function zl(t,e){t.Qr.push(e);const n=eh(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Gl(t){return Pl(t)&&!eh(t).hr()&&t.Qr.length>0}function Wl(t){eh(t).start()}async function Ql(t){eh(t).kr()}async function Xl(t){const e=eh(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Yl(t,e,n){const s=t.Qr.shift(),i=Vc.from(s,e,n);await Bl(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Hl(t)}async function Jl(t,e){e&&eh(t).Sr&&await async function(t,e){if(function(t){switch(t){default:return br();case Cr.CANCELLED:case Cr.UNKNOWN:case Cr.DEADLINE_EXCEEDED:case Cr.RESOURCE_EXHAUSTED:case Cr.INTERNAL:case Cr.UNAVAILABLE:case Cr.UNAUTHENTICATED:return!1;case Cr.INVALID_ARGUMENT:case Cr.NOT_FOUND:case Cr.ALREADY_EXISTS:case Cr.PERMISSION_DENIED:case Cr.FAILED_PRECONDITION:case Cr.ABORTED:case Cr.OUT_OF_RANGE:case Cr.UNIMPLEMENTED:case Cr.DATA_LOSS:return!0}}(n=e.code)&&n!==Cr.ABORTED){const n=t.Qr.shift();eh(t).wr(),await Bl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Hl(t)}var n}(t,e),Gl(t)&&Wl(t)}async function Zl(t,e){const n=Ir(t);n.asyncQueue.verifyOperationInProgress(),yr("RemoteStore","RemoteStore received new credentials");const s=Pl(n);n.Gr.add(3),await Dl(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await _l(n)}function th(t){return t.Xr||(t.Xr=function(t,e,n){const s=Ir(t);return s.Or(),new Cl(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
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
     */}(t.datastore,t.asyncQueue,{Di:Ul.bind(null,t),Ni:$l.bind(null,t),br:ql.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Fl(t)?Ml(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Vl(t))}))),t.Xr}function eh(t){return t.Zr||(t.Zr=function(t,e,n){const s=Ir(t);return s.Or(),new Sl(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)}(t.datastore,t.asyncQueue,{Di:Ql.bind(null,t),Ni:Jl.bind(null,t),Nr:Xl.bind(null,t),Cr:Yl.bind(null,t)}),t.zr.push((async e=>{e?(t.Zr.wr(),await Hl(t)):(await t.Zr.stop(),t.Qr.length>0&&(yr("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
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
     */}class nh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new nh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Sr(Cr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sh(t,e){if(vr("AsyncQueue",`${e}: ${t}`),Fc(t))return new Sr(Cr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class ih{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ro.comparator(e.key,n.key):(t,e)=>ro.comparator(t.key,e.key),this.keyedMap=Ka(),this.sortedSet=new Pa(this.comparator)}static emptySet(t){return new ih(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ih))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ih;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class rh{constructor(){this.eo=new Pa(ro.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):br():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class oh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new oh(t,e,ih.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class ah{constructor(){this.so=void 0,this.listeners=[]}}class ch{constructor(){this.queries=new zc((t=>Xo(t)),Qo),this.onlineState="Unknown",this.io=new Set}}async function lh(t,e){const n=Ir(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ah),i)try{r.so=await n.onListen(s)}catch(t){const n=sh(t,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&fh(n)}async function hh(t,e){const n=Ir(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function uh(t,e){const n=Ir(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(s=!0);i.so=t}}s&&fh(n)}function dh(t,e,n){const s=Ir(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function fh(t){t.io.forEach((t=>{t.next()}))}class ph{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new oh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=oh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
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
     */class gh{constructor(t){this.key=t}}class mh{constructor(t){this.key=t}}class yh{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Wa(),this.mutatedKeys=Wa(),this.Ao=Zo(t),this.Ro=new ih(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new rh,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Ko(this.query)&&s.size===this.query.limit?s.last():null,c=zo(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const l=s.get(t),h=Jo(this.query,e)?e:null,u=!!l&&this.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;l&&h?l.data.isEqual(h.data)?u!==d&&(n.track({type:3,doc:h}),f=!0):this.Vo(l,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ao(h,a)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!l&&h?(n.track({type:0,doc:h}),f=!0):l&&!h&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Ko(this.query)||zo(this.query))for(;r.size>this.query.limit;){const t=Ko(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return br()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new oh(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new rh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Wa(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new mh(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new gh(n))})),e}ko(t){this.To=t.zn,this.Io=Wa();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return oh.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class vh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wh{constructor(t){this.key=t,this.$o=!1}}class Eh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new zc((t=>Xo(t)),Qo),this.Fo=new Map,this.Lo=new Set,this.Bo=new Pa(ro.comparator),this.Uo=new Map,this.qo=new il,this.Ko={},this.jo=new Map,this.Qo=Hc.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function bh(t,e){const n=function(t){const e=Ir(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ch.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ah.bind(null,e),e.Oo.br=uh.bind(null,e.eventManager),e.Oo.zo=dh.bind(null,e.eventManager),e}(t);let s,i;const r=n.Mo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=Ir(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,Mc.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new Uc(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,Wo(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.Po(n);i.Bn&&(i=await nl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return xh(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await nl(t.localStore,e,!0),r=new yh(e,i.zn),o=r.Po(i.documents),a=Ja.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);xh(t,n,c.Co);const l=new vh(e,n,r);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&Rl(n.remoteStore,t)}return i}async function Th(t,e){const n=Ir(t),s=n.Mo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter((t=>!Qo(t,e)))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await el(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Ll(n.remoteStore,s.targetId),Rh(n,s.targetId)})).catch(Kc)):(Rh(n,s.targetId),await el(n.localStore,s.targetId,!0))}async function Ih(t,e,n){const s=function(t){const e=Ir(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nh.bind(null,e),e}(t);try{const t=await function(t,e){const n=Ir(t),s=Ur.now(),i=e.reduce(((t,e)=>t.add(e.key)),Wa());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Wn.vn(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=Ia(t,r.get(t.key));null!=e&&o.push(new ka(t.key,e,bo(e.value.mapValue),va.exists(!0)))}return n.An.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Ko[t.currentUser.toKey()];s||(s=new Pa(Pr)),s=s.insert(e,n),t.Ko[t.currentUser.toKey()]=s}(s,t.batchId,n),await Fh(s,t.changes),await Hl(s.remoteStore)}catch(t){const e=sh(t,"Failed to persist write");n.reject(e)}}async function Ch(t,e){const n=Ir(t);try{const t=await Zc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(Tr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?Tr(s.$o):t.removedDocuments.size>0&&(Tr(s.$o),s.$o=!1))})),await Fh(n,t,e)}catch(t){await Kc(t)}}function Sh(t,e,n){const s=Ir(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Mo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ir(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(s=!0)})),s&&fh(n)}(s.eventManager,e),t.length&&s.Oo.br(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ah(t,e,n){const s=Ir(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new Pa(ro.comparator);t=t.insert(r,To.newNoDocument(r,$r.min()));const n=Wa().add(r),i=new Ya($r.min(),new Map,new $a(Pr),t,n);await Ch(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),Mh(s)}else await el(s.localStore,e,!1).then((()=>Rh(s,e,n))).catch(Kc)}async function kh(t,e){const n=Ir(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Ir(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Mc.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Tr(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&s.addEntry(e,n.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(n.localStore,e);Dh(n,s,null),_h(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fh(n,t)}catch(t){await Kc(t)}}async function Nh(t,e,n){const s=Ir(t);try{const t=await function(t,e){const n=Ir(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.An.lookupMutationBatch(t,e).next((e=>(Tr(null!==e),s=e.keys(),n.An.removeMutationBatch(t,e)))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(s.localStore,e);Dh(s,e,n),_h(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fh(s,t)}catch(n){await Kc(n)}}function _h(t,e){(t.jo.get(e)||[]).forEach((t=>{t.resolve()})),t.jo.delete(e)}function Dh(t,e,n){const s=Ir(t);let i=s.Ko[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Ko[s.currentUser.toKey()]=i}}function Rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||Lh(t,e)}))}function Lh(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Ll(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Mh(t))}function xh(t,e,n){for(const s of n)s instanceof gh?(t.qo.addReference(s.key,e),Oh(t,s)):s instanceof mh?(yr("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||Lh(t,s.key)):br()}function Oh(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(yr("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Mh(t))}function Mh(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new ro(Kr.fromString(e)),s=t.Qo.next();t.Uo.set(s,new wh(n)),t.Bo=t.Bo.insert(n,s),Rl(t.remoteStore,new Uc(Wo(Ho(n.path)),s,2,Or.I))}}async function Fh(t,e,n){const s=Ir(t),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Wc.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Oo.br(i),await async function(t,e){const n=Ir(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Mc.forEach(e,(e=>Mc.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Mc.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Fc(t))throw t;yr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(e,i)}}}(s.localStore,r))}async function Ph(t,e){const n=Ir(t);if(!n.currentUser.isEqual(e)){yr("SyncEngine","User change. New user:",e.toKey());const t=await Yc(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new Sr(Cr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Fh(n,t.Gn)}}function Vh(t,e){const n=Ir(t),s=n.Uo.get(e);if(s&&s.$o)return Wa().add(s.key);{let t=Wa();const s=n.Fo.get(e);if(!s)return t;for(const e of s){const s=n.Mo.get(e);t=t.unionWith(s.view.bo)}return t}}class Uh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=bl(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new Xc(t,e,n,s)}(this.persistence,new Qc,t.initialUser,this.k)}Yo(t){return new hl(dl.ks,this.k)}Jo(t){return new pl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $h{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Sh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ph.bind(null,this.syncEngine),await async function(t,e){const n=Ir(t);e?(n.Gr.delete(2),await _l(n)):e||(n.Gr.add(2),await Dl(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ch}createDatastore(t){const e=bl(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new wl(s));var s;return function(t,e,n,s){return new Al(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Sh(this.syncEngine,t,0),r=ml.Pt()?new ml:new gl,new Nl(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Eh(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ir(t);yr("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Dl(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class qh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class jh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=fr.UNAUTHENTICATED,this.clientId=Fr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{yr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(yr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Sr(Cr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(yr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),yr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Yc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Uh)),t.offlineComponents}(t);yr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Zl(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zl(e.remoteStore,n))),t.onlineComponents=e}async function Hh(t){return t.onlineComponents||(yr("FirestoreClient","Using default OnlineComponentProvider"),await Bh(t,new $h)),t.onlineComponents}async function Kh(t){const e=await Hh(t),n=e.eventManager;return n.onListen=bh.bind(null,e.syncEngine),n.onUnlisten=Th.bind(null,e.syncEngine),n}class zh{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Gh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Gh&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Wh=new Map;
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
     */function Qh(t,e,n){if(!n)throw new Sr(Cr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xh(t){if(!ro.isDocumentKey(t))throw new Sr(Cr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yh(t){if(ro.isDocumentKey(t))throw new Sr(Cr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":br()}function Zh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Sr(Cr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new Sr(Cr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class tu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Sr(Cr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Sr(Cr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Sr(Cr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class eu{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tu({}),this._settingsFrozen=!1,t instanceof Gh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Sr(Cr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gh(t.options.projectId)}(t))}get app(){if(!this._app)throw new Sr(Cr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Sr(Cr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Nr;switch(t.type){case"gapi":const e=t.client;return Tr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Rr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Sr(Cr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Wh.get(t);e&&(yr("ComponentProvider","Removing Datastore"),Wh.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class nu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nu(this.firestore,t,this._key)}}class su{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new su(this.firestore,t,this._query)}}class iu extends su{constructor(t,e,n){super(t,e,Ho(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nu(this.firestore,null,new ro(t))}withConverter(t){return new iu(this.firestore,t,this._path)}}
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
class ru{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Tl(this,"async_queue_retry"),this.bc=()=>{const t=El();t&&yr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=El();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=El();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const e=new Ar;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Fc(t))throw t;yr("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const e=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw vr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ic=!1,t))))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const s=nh.createAndSchedule(this,t,e,n,(t=>this.Sc(t)));return this.Tc.push(s),s}Pc(){this.Ec&&br()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function ou(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
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
     */(t)}class au extends eu{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ru,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||lu(this),this._firestoreClient.terminate()}}function cu(t){return t._firestoreClient||lu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lu(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new zh(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
     */class hu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Sr(Cr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class uu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new uu(Qr.fromBase64String(t))}catch(t){throw new Sr(Cr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new uu(Qr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class du{constructor(t){this._methodName=t}}
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
     */class fu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Sr(Cr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Sr(Cr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pr(this._lat,t._lat)||Pr(this._long,t._long)}}
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
     */const pu=/^__.*__$/;class gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ka(t,this.data,this.fieldMask,e,this.fieldTransforms):new Aa(t,this.data,e,this.fieldTransforms)}}class mu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ka(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw br()}}class vu{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=s,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new vu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Oc({path:n,Fc:!1});return s.Lc(t),s}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Oc({path:n,Fc:!1});return s.xc(),s}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return xu(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(yu(this.$c)&&pu.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class wu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||bl(t)}Qc(t,e,n,s=!1){return new vu({$c:t,methodName:e,jc:n,path:Gr.emptyPath(),Fc:!1,Kc:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Eu(t){const e=t._freezeSettings(),n=bl(t._databaseId);return new wu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bu(t,e,n,s,i,r={}){const o=t.Qc(r.merge||r.mergeFields?2:0,e,n,i);_u("Data must be an object, but it was:",o,s);const a=ku(s,o);let c,l;if(r.merge)c=new Wr(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Du(e,s,n);if(!o.contains(i))throw new Sr(Cr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ou(t,i)||t.push(i)}c=new Wr(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new gu(new Eo(a),c,l)}class Tu extends du{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(`${this._methodName}() can only appear at the top level of your update data`):t.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Tu}}function Iu(t,e,n){return new vu({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Cu extends du{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Iu(this,t,!0),n=this.Wc.map((t=>Au(t,e))),s=new la(n);return new ma(t.path,s)}isEqual(t){return this===t}}class Su extends du{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Iu(this,t,!0),n=this.Wc.map((t=>Au(t,e))),s=new ua(n);return new ma(t.path,s)}isEqual(t){return this===t}}function Au(t,e){if(Nu(t=Rt(t)))return _u("Unsupported field value:",e,t),ku(t,e);if(t instanceof du)return function(t,e){if(!yu(e.$c))throw e.qc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Au(i,e.Uc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Rt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return sa(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ur.fromDate(t);return{timestampValue:lc(e.k,n)}}if(t instanceof Ur){const n=new Ur(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:lc(e.k,n)}}if(t instanceof fu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof uu)return{bytesValue:hc(e.k,t._byteString)};if(t instanceof nu){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc(`Unsupported field value: ${Jh(t)}`)}(t,e)}function ku(t,e){const n={};return Br(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,((t,s)=>{const i=Au(s,e.Mc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Nu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ur||t instanceof fu||t instanceof uu||t instanceof nu||t instanceof du)}function _u(t,e,n){if(!Nu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Jh(n);throw"an object"===s?e.qc(t+" a custom object"):e.qc(t+" "+s)}}function Du(t,e,n){if((e=Rt(e))instanceof hu)return e._internalPath;if("string"==typeof e)return Lu(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ru=new RegExp("[~\\*/\\[\\]]");function Lu(t,e,n){if(e.search(Ru)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch(s){throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Sr(Cr.INVALID_ARGUMENT,a+t+c)}function Ou(t,e){return t.some((t=>t.isEqual(e)))}
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
     */class Mu{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Fu extends Mu{data(){return super.data()}}function Pu(t,e){return"string"==typeof e?Lu(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}
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
     */class Vu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uu extends Mu{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $u extends Uu{data(t={}){return super.data(t)}}class qu{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Vu(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new $u(this._firestore,this._userDataWriter,n.key,n,new Vu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Sr(Cr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new $u(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new $u(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ju(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ju(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return br()}}
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
function Bu(t){t=Zh(t,nu);const e=Zh(t.firestore,au);return function(t,e,n={}){const s=new Ar;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new qh({next:r=>{e.enqueueAndForget((()=>hh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Sr(Cr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Sr(Cr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new ph(Ho(n.path),r,{includeMetadataChanges:!0,wo:!0});return lh(t,o)}(await Kh(t),t.asyncQueue,e,n,s))),s.promise}(cu(e),t._key).then((n=>Xu(e,t,n)))}class Hu extends
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
class{convertValue(t,e="none"){switch(oo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Jr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw br()}}convertObject(t,e){const n={};return jr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new fu(Jr(t.latitude),Jr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=eo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const e=Yr(t);return new Ur(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Kr.fromString(t);Tr(Oc(n));const s=new Gh(n.get(1),n.get(3)),i=new ro(n.popFirst(5));return s.isEqual(e)||vr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new uu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nu(this.firestore,null,e)}}function Ku(t,e,n){t=Zh(t,nu);const s=Zh(t.firestore,au),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);return Qu(s,[bu(Eu(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,va.none())])}function zu(t,e,n,...s){t=Zh(t,nu);const i=Zh(t.firestore,au),r=Eu(i);let o;return o="string"==typeof(e=Rt(e))||e instanceof hu?function(t,e,n,s,i,r){const o=t.Qc(1,e,n),a=[Du(e,s,n)],c=[i];if(r.length%2!=0)throw new Sr(Cr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Du(e,r[t])),c.push(r[t+1]);const l=[],h=Eo.empty();for(let t=a.length-1;t>=0;--t)if(!Ou(l,a[t])){const e=a[t];let n=c[t];n=Rt(n);const s=o.Bc(e);if(n instanceof Tu)l.push(e);else{const t=Au(n,s);null!=t&&(l.push(e),h.set(e,t))}}const u=new Wr(l);return new mu(h,u,o.fieldTransforms)}(r,"updateDoc",t._key,e,n,s):function(t,e,n,s){const i=t.Qc(1,e,n);_u("Data must be an object, but it was:",i,s);const r=[],o=Eo.empty();jr(s,((t,s)=>{const a=Lu(e,t,n);s=Rt(s);const c=i.Bc(a);if(s instanceof Tu)r.push(a);else{const t=Au(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Wr(r);return new mu(o,a,i.fieldTransforms)}(r,"updateDoc",t._key,e),Qu(i,[o.toMutation(t._key,va.exists(!0))])}function Gu(t){return Qu(Zh(t.firestore,au),[new Ra(t._key,va.none())])}function Wu(t,...e){var n,s,i;t=Rt(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ou(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ou(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,l,h;if(t instanceof nu)l=Zh(t.firestore,au),h=Ho(t._key.path),c={next:n=>{e[o]&&e[o](Xu(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Zh(t,su);l=Zh(n.firestore,au),h=n._query;const s=new Hu(l);c={next:t=>{e[o]&&e[o](new qu(l,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(zo(t)&&0===t.explicitOrderBy.length)throw new Sr(Cr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,s){const i=new qh(s),r=new ph(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>lh(await Kh(t),r))),()=>{i.nc(),t.asyncQueue.enqueueAndForget((async()=>hh(await Kh(t),r)))}}(cu(l),h,a,c)}function Qu(t,e){return function(t,e){const n=new Ar;return t.asyncQueue.enqueueAndForget((async()=>Ih(await function(t){return Hh(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(cu(t),e)}function Xu(t,e,n){const s=n.docs.get(e._key),i=new Hu(t);return new Uu(t,i,e._key,s,new Vu(n.hasPendingWrites,n.fromCache),e.converter)}function Yu(...t){return new Cu("arrayUnion",t)}function Ju(...t){return new Su("arrayRemove",t)}!function(t,e=!0){pr="9.6.6",Yt(new Lt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new au(s,new _r(t.getProvider("auth-internal")),new xr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),te(dr,"3.4.4",t),te(dr,"3.4.4","esm2017")}();const Zu=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:zt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Jt.create("bad-app-name",{appName:String(s)});const i=Wt.get(s);if(i){if(_t(t,i.options)&&_t(n,i.config))return i;throw Jt.create("duplicate-app",{appName:s})}const r=new Mt(s);for(const t of Qt.values())r.addComponent(t);const o=new Zt(t,n,r);return Wt.set(s,o),o}({projectId:"sample-project-294713"}),td=function(){const t=window.location.search;let e;if(t)e=t.substring(1);else{const t=It();window.location.hash=t,window.history.replaceState("","","?"+t),e=t}return e}(),ed=function(t=function(t="[DEFAULT]"){const e=Wt.get(t);if(!e)throw Jt.create("no-app",{appName:t});return e}()){return function(t,e){return t.container.getProvider(e)}(t,"firestore").getImmediate()}(Zu),nd=function(t,e,...n){if(t=Rt(t),Qh("collection","path",e),t instanceof eu){const s=Kr.fromString(e,...n);return Yh(s),new iu(t,null,s)}{if(!(t instanceof nu||t instanceof iu))throw new Sr(Cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Kr.fromString(e,...n));return Yh(s),new iu(t.firestore,null,s)}}(ed,"rooms"),sd=function(t,e,...n){if(t=Rt(t),1===arguments.length&&(e=Fr.A()),Qh("doc","path",e),t instanceof eu){const s=Kr.fromString(e,...n);return Xh(s),new nu(t,null,new ro(s))}{if(!(t instanceof nu||t instanceof iu))throw new Sr(Cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Kr.fromString(e,...n));return Xh(s),new nu(t.firestore,t instanceof iu?t.converter:null,new ro(s))}}(nd,td),id=function(){const{subscribe:t,set:e}=gt([]);return{subscribe:t,set:e,append:(t,e)=>{Bu(sd).then((n=>{if(n&&n.exists())zu(sd,{estimates:Yu({name:t,point:e,appendedAt:Ur.now()})});else{let n=[],s={closed:!0};n.push({name:t,point:e,appendedAt:Ur.now()}),Ku(sd,{estimates:n,tableState:s})}}))},remove:(t,e=null)=>{Bu(sd).then((n=>{if(n&&n.exists()){const s=n.data().estimates.filter((e=>e.name===t)).shift();if(s)return void zu(sd,{estimates:Ju(s)}).then(e)}e&&e()}))},clear:()=>{Gu(sd)}}}(),rd=function(){const{subscribe:t,set:e}=gt({closed:!0});return{subscribe:t,set:e,open:()=>{Bu(sd).then((t=>{if(t&&t.exists()){const e=t.data();e.tableState={closed:!1},Ku(sd,e)}}))},close:()=>{Gu(sd)}}}(),od=new Promise((t=>{Wu(sd,(t=>{if(t&&t.exists()){const e=t.data(),n=(t,e)=>t.appendedAt.seconds-e.appendedAt.seconds;id.set(e.estimates.sort(n)),rd.set(e.tableState)}else id.set([]),rd.set({closed:!0})})),t()}));function ad(t){const e=t-1;return e*e*e+1}function cd(t,{delay:e=0,duration:n=400,easing:s=ad,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,l="none"===a.transform?"":a.transform,h=c*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-h*e}`}}function ld(e){let n,s,i,o,a,l=(e[3]?"":e[0])+"";return{c(){n=E("div"),s=b(l),A(n,"class",i=c("card "+e[4])+" svelte-1lt9def"),D(n,"selectable",e[1]),D(n,"closed",e[3]),D(n,"selected",e[2])},m(t,i){y(t,n,i),p(n,s),o||(a=C(n,"click",(function(){r(e[1]?e[5]:void 0)&&(e[1]?e[5]:void 0).apply(this,arguments)})),o=!0)},p(t,[r]){e=t,9&r&&l!==(l=(e[3]?"":e[0])+"")&&k(s,l),16&r&&i!==(i=c("card "+e[4])+" svelte-1lt9def")&&A(n,"class",i),18&r&&D(n,"selectable",e[1]),24&r&&D(n,"closed",e[3]),20&r&&D(n,"selected",e[2])},i:t,o:t,d(t){t&&v(n),o=!1,a()}}}function hd(t,e,n){let{point:s}=e,{selectable:i=!1}=e,{selected:r=!1}=e,{closed:o=!1}=e,{size:a="medium"}=e;const c=function(){const t=V();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=R(e,n);s.slice().forEach((e=>{e.call(t,i)}))}}}();return t.$$set=t=>{"point"in t&&n(0,s=t.point),"selectable"in t&&n(1,i=t.selectable),"selected"in t&&n(2,r=t.selected),"closed"in t&&n(3,o=t.closed),"size"in t&&n(4,a=t.size)},[s,i,r,o,a,function(){c("selectCard",{point:s})}]}class ud extends ft{constructor(t){super(),dt(this,t,hd,ld,o,{point:0,selectable:1,selected:2,closed:3,size:4})}}function dd(e){let n,s,i,r,o=e[0]?"OPEN":"RETURN";return{c(){n=E("button"),s=b(o),A(n,"class",c("open-button")+" svelte-1i6cetj")},m(t,o){y(t,n,o),p(n,s),i||(r=C(n,"click",e[1]),i=!0)},p(t,[e]){1&e&&o!==(o=t[0]?"OPEN":"RETURN")&&k(s,o)},i:t,o:t,d(t){t&&v(n),i=!1,r()}}}function fd(t,e,n){let{isClosed:s=!0}=e;return t.$$set=t=>{"isClosed"in t&&n(0,s=t.isClosed)},[s,function(e){U.call(this,t,e)}]}class pd extends ft{constructor(t){super(),dt(this,t,fd,dd,o,{isClosed:0})}}function gd(e){let n,s,i,r,o,a,l=e[0]?"COPIED":"COPY";return{c(){n=E("button"),s=b(l),A(n,"class",i=c(["copy-button",e[0]?"copied":""].join(" "))+" svelte-96r1p3"),n.disabled=r=!!e[0]},m(t,i){y(t,n,i),p(n,s),o||(a=C(n,"click",e[1]),o=!0)},p(t,[e]){1&e&&l!==(l=t[0]?"COPIED":"COPY")&&k(s,l),1&e&&i!==(i=c(["copy-button",t[0]?"copied":""].join(" "))+" svelte-96r1p3")&&A(n,"class",i),1&e&&r!==(r=!!t[0])&&(n.disabled=r)},i:t,o:t,d(t){t&&v(n),o=!1,a()}}}function md(t,e,n){let{isCopied:s=!1}=e;return t.$$set=t=>{"isCopied"in t&&n(0,s=t.isCopied)},[s,function(e){U.call(this,t,e)}]}class yd extends ft{constructor(t){super(),dt(this,t,md,gd,o,{isCopied:0})}}function vd(t,e,n){const s=t.slice();return s[6]=e[n],s}function wd(t,e){let n,s,i,r,o,a,c,l,h=e[6].name+"";return s=new ud({props:{point:e[6].point,size:"large",selectable:!1,closed:e[1]}}),{key:t,first:null,c(){n=E("div"),ct(s.$$.fragment),i=T(),r=E("div"),o=b(h),a=T(),A(r,"class","name svelte-1gnv68y"),A(n,"class","estimate svelte-1gnv68y"),this.first=n},m(t,e){y(t,n,e),lt(s,n,null),p(n,i),p(n,r),p(r,o),p(n,a),l=!0},p(t,n){e=t;const i={};1&n&&(i.point=e[6].point),2&n&&(i.closed=e[1]),s.$set(i),(!l||1&n)&&h!==(h=e[6].name+"")&&k(o,h)},i(t){l||(st(s.$$.fragment,t),z((()=>{c||(c=ot(n,cd,{y:100},!0)),c.run(1)})),l=!0)},o(t){it(s.$$.fragment,t),c||(c=ot(n,cd,{y:100},!1)),c.run(0),l=!1},d(t){t&&v(n),ht(s),t&&c&&c.end()}}}function Ed(t){let e,n,s;return n=new pd({props:{isClosed:t[1]}}),n.$on("click",(function(){r(t[2])&&t[2].apply(this,arguments)})),{c(){e=E("div"),ct(n.$$.fragment),A(e,"class","open-button-area svelte-1gnv68y")},m(t,i){y(t,e,i),lt(n,e,null),s=!0},p(e,s){t=e;const i={};2&s&&(i.isClosed=t[1]),n.$set(i)},i(t){s||(st(n.$$.fragment,t),s=!0)},o(t){it(n.$$.fragment,t),s=!1},d(t){t&&v(e),ht(n)}}}function bd(t){let e,n;return e=new yd({props:{isCopied:t[3]}}),e.$on("click",t[4]),{c(){ct(e.$$.fragment)},m(t,s){lt(e,t,s),n=!0},p(t,n){const s={};8&n&&(s.isCopied=t[3]),e.$set(s)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Td(t){let e,n,s,i,r,o=[],a=new Map,c=t[0];const l=t=>t[6].name;for(let e=0;e<c.length;e+=1){let n=vd(t,c,e),s=l(n);a.set(s,o[e]=wd(s,n))}let h=(t[0].length>0||!t[1])&&Ed(t),u=!t[1]&&bd(t);return{c(){e=E("div"),n=E("div");for(let t=0;t<o.length;t+=1)o[t].c();s=T(),h&&h.c(),i=T(),u&&u.c(),A(n,"class","estimates svelte-1gnv68y"),A(e,"class","table svelte-1gnv68y")},m(t,a){y(t,e,a),p(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);p(e,s),h&&h.m(e,null),p(e,i),u&&u.m(e,null),r=!0},p(t,[s]){3&s&&(c=t[0],et(),o=function(t,e,n,s,i,r,o,a,c,l,h,u){let d=t.length,f=r.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=u(i,r,p),a=n(t);let c=o.get(a);c?s&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,E=new Set;function b(t){st(t,1),t.m(a,h),o.set(t.key,t),h=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],s=e.key,i=n.key;e===n?(h=e.first,d--,f--):y.has(i)?!o.has(s)||w.has(s)?b(e):E.has(i)?d--:v.get(s)>v.get(i)?(E.add(s),b(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)b(m[f-1]);return m}(o,s,l,1,t,c,a,n,at,wd,null,vd),nt()),t[0].length>0||!t[1]?h?(h.p(t,s),3&s&&st(h,1)):(h=Ed(t),h.c(),st(h,1),h.m(e,i)):h&&(et(),it(h,1,1,(()=>{h=null})),nt()),t[1]?u&&(et(),it(u,1,1,(()=>{u=null})),nt()):u?(u.p(t,s),2&s&&st(u,1)):(u=bd(t),u.c(),st(u,1),u.m(e,null))},i(t){if(!r){for(let t=0;t<c.length;t+=1)st(o[t]);st(h),st(u),r=!0}},o(t){for(let t=0;t<o.length;t+=1)it(o[t]);it(h),it(u),r=!1},d(t){t&&v(e);for(let t=0;t<o.length;t+=1)o[t].d();h&&h.d(),u&&u.d()}}}function Id(t,e,n){let{estimates:s=[]}=e,{isClosed:i=!0}=e,{handleOpenButtonClick:r=(()=>{})}=e;s=s||[];let o=!1;return t.$$set=t=>{"estimates"in t&&n(0,s=t.estimates),"isClosed"in t&&n(1,i=t.isClosed),"handleOpenButtonClick"in t&&n(2,r=t.handleOpenButtonClick)},[s,i,r,o,function(){const t=function(){if(0===s.length)return"empty.";const t=new Date;return"["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"] "+s.sort(((t,e)=>t.name>e.name?1:-1)).reduce(((t,e)=>(t?t+" ":"")+`${e.name}(${e.point})`),null)}();navigator.clipboard.writeText(t),n(3,o=!0),setTimeout((()=>{n(3,o=!1)}),1e3)}]}class Cd extends ft{constructor(t){super(),dt(this,t,Id,Td,o,{estimates:0,isClosed:1,handleOpenButtonClick:2})}}function Sd(e){let n,s,i;return{c(){n=E("button"),n.textContent="OK",A(n,"class",c("ok-button")+" svelte-rmf0e0")},m(t,r){y(t,n,r),s||(i=C(n,"click",function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}(S(e[0]))),s=!0)},p:t,i:t,o:t,d(t){t&&v(n),s=!1,i()}}}function Ad(t){return[function(e){U.call(this,t,e)}]}class kd extends ft{constructor(t){super(),dt(this,t,Ad,Sd,o,{})}}function Nd(t,e,n){const s=t.slice();return s[15]=e[n],s}function _d(t,e,n){const s=t.slice();return s[18]=e[n],s}function Dd(t){let e,n,s,r,o,a,c,l=t[0]&&Ld(t);return{c(){e=E("div"),n=E("form"),s=E("input"),r=T(),l&&l.c(),A(s,"placeholder","your name"),s.autofocus=!0,A(s,"class","svelte-y3ory"),A(e,"class","user-name svelte-y3ory")},m(i,h){y(i,e,h),p(e,n),p(n,s),N(s,t[0]),p(n,r),l&&l.m(n,null),o=!0,s.focus(),a||(c=[C(s,"input",t[10]),C(n,"submit",S(t[12]))],a=!0)},p(t,e){1&e&&s.value!==t[0]&&N(s,t[0]),t[0]?l?(l.p(t,e),1&e&&st(l,1)):(l=Ld(t),l.c(),st(l,1),l.m(n,null)):l&&(et(),it(l,1,1,(()=>{l=null})),nt())},i(t){o||(st(l),o=!0)},o(t){it(l),o=!1},d(t){t&&v(e),l&&l.d(),a=!1,i(c)}}}function Rd(t){let e,n,s,i,r,o,a,c,l,h,u=t[7],d=[];for(let e=0;e<u.length;e+=1)d[e]=xd(_d(t,u,e));let f=t[5],g=[];for(let e=0;e<f.length;e+=1)g[e]=Od(Nd(t,f,e));const m=t=>it(g[t],1,1,(()=>{g[t]=null}));return{c(){e=E("div"),n=b(t[0]),s=T(),i=E("div"),r=E("select");for(let t=0;t<d.length;t+=1)d[t].c();o=T();for(let t=0;t<g.length;t+=1)g[t].c();a=I(),A(e,"class","user-name svelte-y3ory"),void 0===t[4]&&z((()=>t[9].call(r))),A(i,"class","svelte-y3ory")},m(u,f){y(u,e,f),p(e,n),y(u,s,f),y(u,i,f),p(i,r);for(let t=0;t<d.length;t+=1)d[t].m(r,null);_(r,t[4]),y(u,o,f);for(let t=0;t<g.length;t+=1)g[t].m(u,f);y(u,a,f),c=!0,l||(h=C(r,"change",t[9]),l=!0)},p(t,e){if((!c||1&e)&&k(n,t[0]),128&e){let n;for(u=t[7],n=0;n<u.length;n+=1){const s=_d(t,u,n);d[n]?d[n].p(s,e):(d[n]=xd(s),d[n].c(),d[n].m(r,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}if(144&e&&_(r,t[4]),100&e){let n;for(f=t[5],n=0;n<f.length;n+=1){const s=Nd(t,f,n);g[n]?(g[n].p(s,e),st(g[n],1)):(g[n]=Od(s),g[n].c(),st(g[n],1),g[n].m(a.parentNode,a))}for(et(),n=f.length;n<g.length;n+=1)m(n);nt()}},i(t){if(!c){for(let t=0;t<f.length;t+=1)st(g[t]);c=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)it(g[t]);c=!1},d(t){t&&v(e),t&&v(s),t&&v(i),w(d,t),t&&v(o),w(g,t),t&&v(a),l=!1,h()}}}function Ld(e){let n,s;return n=new kd({}),n.$on("click",e[11]),{c(){ct(n.$$.fragment)},m(t,e){lt(n,t,e),s=!0},p:t,i(t){s||(st(n.$$.fragment,t),s=!0)},o(t){it(n.$$.fragment,t),s=!1},d(t){ht(n,t)}}}function xd(e){let n,s,i,r=e[18].id+"";return{c(){n=E("option"),s=b(r),n.__value=i=e[18].id,n.value=n.__value},m(t,e){y(t,n,e),p(n,s)},p:t,d(t){t&&v(n)}}}function Od(t){let e,n;return e=new ud({props:{point:t[15],selectable:!0,size:"medium",selected:t[6]===t[15]}}),e.$on("selectCard",(function(){r(t[2])&&t[2].apply(this,arguments)})),{c(){ct(e.$$.fragment)},m(t,s){lt(e,t,s),n=!0},p(n,s){t=n;const i={};32&s&&(i.point=t[15]),96&s&&(i.selected=t[6]===t[15]),e.$set(i)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Md(t){let e,n,s,i;const r=[Rd,Dd],o=[];function a(t,e){return t[0]&&t[1]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=E("div"),s.c(),A(e,"class",c("user-selection")+" svelte-y3ory")},m(t,s){y(t,e,s),o[n].m(e,null),i=!0},p(t,[i]){let c=n;n=a(t),n===c?o[n].p(t,i):(et(),it(o[c],1,1,(()=>{o[c]=null})),nt(),s=o[n],s?s.p(t,i):(s=o[n]=r[n](t),s.c()),st(s,1),s.m(e,null))},i(t){i||(st(s),i=!0)},o(t){it(s),i=!1},d(t){t&&v(e),o[n].d()}}}function Fd(t,e,n){let s,i,{userName:r=""}=e,{isFixedUserName:o=!1}=e,{estimates:a=[]}=e,{handleSelectCard:c}=e,{handleFixName:l}=e;a=a||[];const h=[{id:"fibonacci",points:["0","1","2","3","5","8","13","21","34","55","?","∞"]},{id:"ten",points:["0","10","20","30","40","50","60","70","80","90","100","?","∞"]}];let u=h[0].id;return t.$$set=t=>{"userName"in t&&n(0,r=t.userName),"isFixedUserName"in t&&n(1,o=t.isFixedUserName),"estimates"in t&&n(8,a=t.estimates),"handleSelectCard"in t&&n(2,c=t.handleSelectCard),"handleFixName"in t&&n(3,l=t.handleFixName)},t.$$.update=()=>{257&t.$$.dirty&&n(6,s=a.filter((t=>t.name===r)).map((t=>t.point)).pop()),16&t.$$.dirty&&n(5,i=h.filter((t=>u===t.id))[0].points)},[r,o,c,l,u,i,s,h,a,function(){u=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(4,u),n(7,h)},function(){r=this.value,n(0,r)},()=>l(r),()=>l(r)]}class Pd extends ft{constructor(t){super(),dt(this,t,Fd,Md,o,{userName:0,isFixedUserName:1,estimates:8,handleSelectCard:2,handleFixName:3})}}function Vd(e){let n;return{c(){n=E("div"),n.innerHTML='<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" title="Photo by Unsplash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></a>',A(n,"class","unsplash-credit svelte-1vmngv8")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Ud extends ft{constructor(t){super(),dt(this,t,null,Vd,o,{})}}function $d(t){let e,n,s,i,r,o,a,c,l,h,u,d,f,g,m;return c=new Cd({props:{isClosed:t[2],estimates:t[0],handleOpenButtonClick:t[5]}}),h=new Pd({props:{userName:t[3],isFixedUserName:t[4],estimates:t[0],handleFixName:t[6],handleSelectCard:t[7]}}),g=new Ud({}),{c(){e=E("div"),n=E("main"),s=E("h1"),i=b(t[1]),r=T(),o=E("p"),o.textContent="share the URL of this page with your team members.",a=T(),ct(c.$$.fragment),l=T(),ct(h.$$.fragment),u=T(),d=E("div"),d.innerHTML='development: <a href="https://github.com/redfe/planning-poker-svelte" target="_blank" rel="noopener noreferrer" class="svelte-1d2g647">Source code</a>,<a href="./storybook-static/" target="_blank" rel="noopener noreferrer" class="svelte-1d2g647">Storybook</a>.',f=T(),ct(g.$$.fragment),A(s,"class","svelte-1d2g647"),A(o,"class","svelte-1d2g647"),A(d,"class","devinfo svelte-1d2g647"),A(n,"class","svelte-1d2g647"),A(e,"class","container svelte-1d2g647")},m(t,v){y(t,e,v),p(e,n),p(n,s),p(s,i),p(n,r),p(n,o),p(n,a),lt(c,n,null),p(n,l),lt(h,n,null),p(n,u),p(n,d),p(e,f),lt(g,e,null),m=!0},p(t,[e]){(!m||2&e)&&k(i,t[1]);const n={};4&e&&(n.isClosed=t[2]),1&e&&(n.estimates=t[0]),32&e&&(n.handleOpenButtonClick=t[5]),c.$set(n);const s={};8&e&&(s.userName=t[3]),16&e&&(s.isFixedUserName=t[4]),1&e&&(s.estimates=t[0]),64&e&&(s.handleFixName=t[6]),128&e&&(s.handleSelectCard=t[7]),h.$set(s)},i(t){m||(st(c.$$.fragment,t),st(h.$$.fragment,t),st(g.$$.fragment,t),m=!0)},o(t){it(c.$$.fragment,t),it(h.$$.fragment,t),it(g.$$.fragment,t),m=!1},d(t){t&&v(e),ht(c),ht(h),ht(g)}}}function qd(t,e,n){let{name:s}=e,{isTableClosed:i=!0}=e,{estimates:r=[]}=e,{userName:o=""}=e,{isFixedUserName:a=!1}=e,{handleOpenButtonClick:c}=e,{handleFixName:l}=e,{handleSelectCard:h}=e;return r=r||[],t.$$set=t=>{"name"in t&&n(1,s=t.name),"isTableClosed"in t&&n(2,i=t.isTableClosed),"estimates"in t&&n(0,r=t.estimates),"userName"in t&&n(3,o=t.userName),"isFixedUserName"in t&&n(4,a=t.isFixedUserName),"handleOpenButtonClick"in t&&n(5,c=t.handleOpenButtonClick),"handleFixName"in t&&n(6,l=t.handleFixName),"handleSelectCard"in t&&n(7,h=t.handleSelectCard)},[r,s,i,o,a,c,l,h]}class jd extends ft{constructor(t){super(),dt(this,t,qd,$d,o,{name:1,isTableClosed:2,estimates:0,userName:3,isFixedUserName:4,handleOpenButtonClick:5,handleFixName:6,handleSelectCard:7})}}function Bd(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Hd(t){let e,n;return e=new jd({props:{name:t[0],isTableClosed:t[4].closed,estimates:t[2],userName:t[1],isFixedUserName:t[3],handleOpenButtonClick:t[5],handleFixName:t[6],handleSelectCard:t[7]}}),{c(){ct(e.$$.fragment)},m(t,s){lt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.name=t[0]),16&n&&(s.isTableClosed=t[4].closed),4&n&&(s.estimates=t[2]),2&n&&(s.userName=t[1]),8&n&&(s.isFixedUserName=t[3]),e.$set(s)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Kd(e){let n;return{c(){n=E("p"),n.textContent="...waiting"},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function zd(t){let e,n,s,i,r;document.title=e=t[0];let o={ctx:t,current:null,token:null,hasCatch:!1,pending:Kd,then:Hd,catch:Bd,blocks:[,,,]};return function(t,e){const n=e.token={};function s(t,s,i,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==i&&(o=o.slice(),o[i]=r);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(et(),it(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),nt())})):e.block.d(1),a.c(),st(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[s]=a),c&&X()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=V();if(t.then((t=>{P(n),s(e.then,1,e.value,t),P(null)}),(t=>{if(P(n),s(e.catch,2,e.error,t),P(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var i}(od,o),{c(){n=E("link"),s=T(),i=I(),o.block.c(),A(n,"href","https://fonts.googleapis.com/css?family=M+PLUS+1p"),A(n,"rel","stylesheet")},m(t,e){p(document.head,n),y(t,s,e),y(t,i,e),o.block.m(t,o.anchor=e),o.mount=()=>i.parentNode,o.anchor=i,r=!0},p(n,[s]){t=n,(!r||1&s)&&e!==(e=t[0])&&(document.title=e),function(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}(o,t,s)},i(t){r||(st(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){it(o.blocks[t])}r=!1},d(t){v(n),t&&v(s),t&&v(i),o.block.d(t),o.token=null,o=null}}}function Gd(t,e,n){let s,i,r;a(t,id,(t=>n(2,i=t))),a(t,rd,(t=>n(4,r=t)));let{name:o}=e,c=window.localStorage.name||"",l=!1;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},t.$$.update=()=>{6&t.$$.dirty&&(s=i.filter((t=>t.name===c)).map((t=>t.point)).pop())},[o,c,i,l,r,function(){r.closed?i.length>0&&rd.open():(id.clear(),rd.close())},function(t){t&&(n(1,c=t),window.localStorage.setItem("name",c),n(3,l=!0))},function(t){const e=()=>id.append(c,t.detail.point);s?id.remove(c,s===t.detail.point?null:()=>setTimeout(e,450)):e()}]}return new class extends ft{constructor(t){super(),dt(this,t,Gd,zd,o,{name:0})}}({target:document.body,props:{name:"Planning Poker"}})}();
//# sourceMappingURL=bundle.js.map
