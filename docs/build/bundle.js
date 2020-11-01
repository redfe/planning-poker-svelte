var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n){t.classList[n?"add":"remove"](e)}let v;function b(t){v=t}function y(){const t=function(){if(!v)throw new Error("Function called outside component initialization");return v}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const w=[],_=[],x=[],k=[],C=Promise.resolve();let E=!1;function S(t){x.push(t)}let j=!1;const A=new Set;function L(){if(!j){j=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),T(e.$$)}for(b(null),w.length=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];A.has(e)||(A.add(e),e())}x.length=0}while(w.length);for(;k.length;)k.pop()();E=!1,j=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const N=new Set;let P;function R(){P={r:0,c:[],p:P}}function V(){P.r||o(P.c),P=P.p}function B(t,e){t&&t.i&&(N.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),P.c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function D(t){t&&t.c()}function U(t,n,c){const{fragment:s,on_mount:l,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),S((()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,r,c,s,l,i,a=[-1]){const f=v;b(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let m=!1;if(p.ctx=c?c(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&q(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&B(e.$$.fragment),U(e,r.target,r.anchor),L()}b(f)}class F{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const M=[];function G(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!M.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),M.push(n,e)}if(t){for(let t=0;t<M.length;t+=2)M[t][0](M[t+1]);M.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var H="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),J=new Uint8Array(16);function K(){if(!H)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return H(J)}var Q=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function W(t){return"string"==typeof t&&Q.test(t)}for(var X=[],Y=0;Y<256;++Y)X.push((Y+256).toString(16).substr(1));function Z(t,e,n){var o=(t=t||{}).random||(t.rng||K)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(X[t[e+0]]+X[t[e+1]]+X[t[e+2]]+X[t[e+3]]+"-"+X[t[e+4]]+X[t[e+5]]+"-"+X[t[e+6]]+X[t[e+7]]+"-"+X[t[e+8]]+X[t[e+9]]+"-"+X[t[e+10]]+X[t[e+11]]+X[t[e+12]]+X[t[e+13]]+X[t[e+14]]+X[t[e+15]]).toLowerCase();if(!W(n))throw TypeError("Stringified UUID is invalid");return n}(o)}const tt=function(){const{subscribe:t,set:e,update:n}=G([]);return{subscribe:t,append:(t,e)=>{nt.emit("do event",{type:"append",name:t,point:e})},_append:(t,e)=>{n((n=>{let o=new Array,r=!1;for(const c of n)o.push(c),c.name===t&&(r=!0,c.point=e);return r||o.push({name:t,point:e}),o}))},remove:t=>{nt.emit("do event",{type:"remove",name:t})},_remove:t=>{n((e=>{let n=[];for(const o of e)o.name!==t&&n.push(o);return n}))},clear:()=>{nt.emit("do event",{type:"clear"})},_clear:()=>{n((t=>[]))}}}(),et=function(){const{subscribe:t,set:e,update:n}=G({closed:!0});return{subscribe:t,open:()=>{nt.emit("do event",{type:"open"})},_open:()=>{n((()=>({closed:!1})))},close:()=>{nt.emit("do event",{type:"close"})},_close:()=>{n((()=>({closed:!0})))}}}();let nt;!function(t,e){let n=document.getElementsByTagName("head")[0],o=document.createElement("script");o.src=t,n.appendChild(o);let r=!1;o.onload=o.onreadystatechange=()=>{r||(r=!0,e(),o.onload=o.onreadystatechange=null,n&&o.parentNode&&n.removeChild(o))}}("https://simple-websocket-server.herokuapp.com/socket.io/socket.io.js",(()=>{var t;t=function(){const t=window.location.search;let e;if(t)e=t.substring(1);else{const t=Z();window.location.hash=t,window.history.replaceState("","","?"+t),e=t}return e}(),nt=window.io("https://simple-websocket-server.herokuapp.com/?roomId="+t),nt.on("do event",(t=>{const e=ot[t.type];e&&e(t)}))}));const ot={append:t=>{tt._append(t.name,t.point)},remove:t=>{tt._remove(t.name)},clear:t=>{tt._clear()},open:t=>{et._open()},close:t=>{et._close()}};function rt(e){let n,o,r,c,s=(e[2]?"":e[0])+"";return{c(){n=f("div"),o=d(s),h(n,"class","card svelte-1h5x69a"),$(n,"closed",e[2]),$(n,"selected",e[1])},m(t,s){i(t,n,s),l(n,o),r||(c=m(n,"click",e[3]),r=!0)},p(t,[e]){5&e&&s!==(s=(t[2]?"":t[0])+"")&&g(o,s),4&e&&$(n,"closed",t[2]),2&e&&$(n,"selected",t[1])},i:t,o:t,d(t){t&&u(n),r=!1,c()}}}function ct(t,e,n){let{point:o}=e,{selected:r=!1}=e,{closed:c=!1}=e;const s=y();return t.$$set=t=>{"point"in t&&n(0,o=t.point),"selected"in t&&n(1,r=t.selected),"closed"in t&&n(2,c=t.closed)},[o,r,c,function(){s("selectCard",{point:o})}]}class st extends F{constructor(t){super(),z(this,t,ct,rt,c,{point:0,selected:1,closed:2})}}function lt(t,e,n){const o=t.slice();return o[5]=e[n],o}function it(t){let e,n,o,r,c,s,a,m=t[5].name+"";return n=new st({props:{point:t[5].point,closed:t[0].closed}}),{c(){e=f("div"),D(n.$$.fragment),o=p(),r=f("div"),c=d(m),s=p(),h(r,"class","name svelte-1i3m1i5"),h(e,"class","estimate svelte-1i3m1i5")},m(t,u){i(t,e,u),U(n,e,null),l(e,o),l(e,r),l(r,c),l(e,s),a=!0},p(t,e){const o={};2&e&&(o.point=t[5].point),1&e&&(o.closed=t[0].closed),n.$set(o),(!a||2&e)&&m!==(m=t[5].name+"")&&g(c,m)},i(t){a||(B(n.$$.fragment,t),a=!0)},o(t){O(n.$$.fragment,t),a=!1},d(t){t&&u(e),I(n)}}}function ut(t){let e,n,o,r,c=t[0].closed?"open":"return";return{c(){e=f("div"),n=d(c),h(e,"class","open-button svelte-1i3m1i5")},m(c,s){i(c,e,s),l(e,n),o||(r=m(e,"click",t[2]),o=!0)},p(t,e){1&e&&c!==(c=t[0].closed?"open":"return")&&g(n,c)},d(t){t&&u(e),o=!1,r()}}}function at(e){let n,o,r;return{c(){n=f("div"),n.textContent="Copy",h(n,"class","copy-button svelte-1i3m1i5")},m(t,c){i(t,n,c),o||(r=m(n,"click",e[3]),o=!0)},p:t,d(t){t&&u(n),o=!1,r()}}}function ft(t){let e,n,o,r,c,s=t[1],d=[];for(let e=0;e<s.length;e+=1)d[e]=it(lt(t,s,e));const m=t=>O(d[t],1,1,(()=>{d[t]=null}));let g=t[1].length>0&&ut(t),$=!t[0].closed&&at(t);return{c(){e=f("div"),n=f("div");for(let t=0;t<d.length;t+=1)d[t].c();o=p(),g&&g.c(),r=p(),$&&$.c(),h(n,"class","estimates svelte-1i3m1i5"),h(e,"class","table svelte-1i3m1i5")},m(t,s){i(t,e,s),l(e,n);for(let t=0;t<d.length;t+=1)d[t].m(n,null);l(e,o),g&&g.m(e,null),l(e,r),$&&$.m(e,null),c=!0},p(t,[o]){if(3&o){let e;for(s=t[1],e=0;e<s.length;e+=1){const r=lt(t,s,e);d[e]?(d[e].p(r,o),B(d[e],1)):(d[e]=it(r),d[e].c(),B(d[e],1),d[e].m(n,null))}for(R(),e=s.length;e<d.length;e+=1)m(e);V()}t[1].length>0?g?g.p(t,o):(g=ut(t),g.c(),g.m(e,r)):g&&(g.d(1),g=null),t[0].closed?$&&($.d(1),$=null):$?$.p(t,o):($=at(t),$.c(),$.m(e,null))},i(t){if(!c){for(let t=0;t<s.length;t+=1)B(d[t]);c=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)O(d[t]);c=!1},d(t){t&&u(e),a(d,t),g&&g.d(),$&&$.d()}}}function dt(t,e,n){let o,r;return s(t,et,(t=>n(0,o=t))),s(t,tt,(t=>n(1,r=t))),[o,r,function(t){o.closed?r.length>0&&et.open():(tt.clear(),et.close())},function(t){const e=function(){if(0===r.length)return"empty.";const t=new Date;return"["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"] "+r.sort(((t,e)=>t.name>e.name?1:-1)).reduce(((t,e)=>(t?t+" ":"")+`${e.name}(${e.point})`),null)}();navigator.clipboard.writeText(e)}]}class pt extends F{constructor(t){super(),z(this,t,dt,ft,c,{})}}function mt(t,e,n){const o=t.slice();return o[5]=e[n],o}function ht(t){let e,n;return e=new st({props:{point:t[5],selected:t[1]===t[5]}}),e.$on("selectCard",t[3]),{c(){D(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.selected=t[1]===t[5]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function gt(t){let e,n,o,r,c,s=t[2],m=[];for(let e=0;e<s.length;e+=1)m[e]=ht(mt(t,s,e));const $=t=>O(m[t],1,1,(()=>{m[t]=null}));return{c(){e=f("div"),n=f("div"),o=d(t[0]),r=p();for(let t=0;t<m.length;t+=1)m[t].c();h(n,"class","user-name svelte-165jvai"),h(e,"class","svelte-165jvai")},m(t,s){i(t,e,s),l(e,n),l(n,o),l(e,r);for(let t=0;t<m.length;t+=1)m[t].m(e,null);c=!0},p(t,[n]){if((!c||1&n)&&g(o,t[0]),14&n){let o;for(s=t[2],o=0;o<s.length;o+=1){const r=mt(t,s,o);m[o]?(m[o].p(r,n),B(m[o],1)):(m[o]=ht(r),m[o].c(),B(m[o],1),m[o].m(e,null))}for(R(),o=s.length;o<m.length;o+=1)$(o);V()}},i(t){if(!c){for(let t=0;t<s.length;t+=1)B(m[t]);c=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)O(m[t]);c=!1},d(t){t&&u(e),a(m,t)}}}function $t(t,e,n){let o;s(t,tt,(t=>n(4,o=t)));let r,c;for(;!(r=window.prompt("your name")););return t.$$.update=()=>{17&t.$$.dirty&&n(1,c=o.filter((t=>t.name===r)).map((t=>t.point)).pop())},[r,c,["0","1","2","3","5","8","13","21","34","55","?","∞"],function(t){c===t.detail.point?tt.remove(r):tt.append(r,t.detail.point)}]}class vt extends F{constructor(t){super(),z(this,t,$t,gt,c,{})}}function bt(t){let e,n,o,r,c,s,a,d,m;return document.title=e=t[0],s=new pt({}),d=new vt({}),{c(){n=p(),o=f("main"),r=f("h1"),r.textContent="Planning Poker",c=p(),D(s.$$.fragment),a=p(),D(d.$$.fragment),h(r,"class","svelte-1wtnb6"),h(o,"class","svelte-1wtnb6")},m(t,e){i(t,n,e),i(t,o,e),l(o,r),l(o,c),U(s,o,null),l(o,a),U(d,o,null),m=!0},p(t,[n]){(!m||1&n)&&e!==(e=t[0])&&(document.title=e)},i(t){m||(B(s.$$.fragment,t),B(d.$$.fragment,t),m=!0)},o(t){O(s.$$.fragment,t),O(d.$$.fragment,t),m=!1},d(t){t&&u(n),t&&u(o),I(s),I(d)}}}function yt(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends F{constructor(t){super(),z(this,t,yt,bt,c,{name:0})}}({target:document.body,props:{name:"Planning Poker"}})}();
//# sourceMappingURL=bundle.js.map
