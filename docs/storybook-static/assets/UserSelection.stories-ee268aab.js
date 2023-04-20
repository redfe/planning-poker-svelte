import{U as A}from"./UserSelection-788d5f61.js";import{S as y,i as U,s as $,r as b,u as C,v as D,w as F,d as l,x as T,a as x,y as I,z as k,A as E,b as q,t as z}from"./index-b82910e3.js";import{n as i}from"./index.esm2017-1d82304b.js";import"./Card-c33f4e88.js";import"./OkButton-95da6a4b.js";function O(r){let t,a;const o=r[1].default,s=b(o,r,r[0],null);return{c(){t=C("div"),s&&s.c(),this.h()},l(e){t=D(e,"DIV",{class:!0});var n=F(t);s&&s.l(n),n.forEach(l),this.h()},h(){T(t,"class","svelte-1l0736r")},m(e,n){x(e,t,n),s&&s.m(t,null),a=!0},p(e,[n]){s&&s.p&&(!a||n&1)&&I(s,o,e,e[0],a?E(o,e[0],n,null):k(e[0]),null)},i(e){a||(q(s,e),a=!0)},o(e){z(s,e),a=!1},d(e){e&&l(t),s&&s.d(e)}}}function V(r,t,a){let{$$slots:o={},$$scope:s}=t;return r.$$set=e=>{"$$scope"in e&&a(0,s=e.$$scope)},[s,o]}class w extends y{constructor(t){super(),U(this,t,V,O,$,{})}}w.__docgen={version:3,name:"UserSelectionDecorator.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const K={component:A,tags:["autodocs"],args:{userName:void 0,isFixedUserName:!1,estimates:[{name:"鈴木",point:"8",appendedAt:i.now()},{name:"田中",point:"13",appendedAt:i.now()}],handleSelectCard:()=>{},handleFixName:()=>{}},argTypes:{},decorators:[()=>w]},m={},d={args:{userName:"山田"}},p={args:{userName:"山田",isFixedUserName:!0,estimates:[{name:"山田",point:"55",appendedAt:i.now()},{name:"鈴木",point:"8",appendedAt:i.now()},{name:"田中",point:"13",appendedAt:i.now()}]}};var c,u,_;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(_=(u=m.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var f,g,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userName: '山田'
  }
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var v,h,S;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    userName: '山田',
    isFixedUserName: true,
    estimates: [{
      name: '山田',
      point: '55',
      appendedAt: Timestamp.now()
    }, {
      name: '鈴木',
      point: '8',
      appendedAt: Timestamp.now()
    }, {
      name: '田中',
      point: '13',
      appendedAt: Timestamp.now()
    }]
  }
}`,...(S=(h=p.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const L=["NoName","NameInputed","CardSelected"];export{p as CardSelected,d as NameInputed,m as NoName,L as __namedExportsOrder,K as default};
//# sourceMappingURL=UserSelection.stories-ee268aab.js.map
