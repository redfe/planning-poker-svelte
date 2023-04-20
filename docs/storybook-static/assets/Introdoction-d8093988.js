import{r as a,M as f}from"./index-2d98af3c.js";import{u as p}from"./index-fb464077.js";import"./iframe-810f3b98.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2b324287.js";import"./index-356e4a49.js";var r={},h={get exports(){return r},set exports(n){r=n}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=a,x=Symbol.for("react.element"),j=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function d(n,t,o){var e,s={},l=null,c=null;o!==void 0&&(l=""+o),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(e in t)m.call(t,e)&&!g.hasOwnProperty(e)&&(s[e]=t[e]);if(n&&n.defaultProps)for(e in t=n.defaultProps,t)s[e]===void 0&&(s[e]=t[e]);return{$$typeof:x,type:n,key:l,ref:c,props:s,_owner:_.current}}i.Fragment=j;i.jsx=d;i.jsxs=d;(function(n){n.exports=i})(h);function P(n={}){const{wrapper:t}=Object.assign({},p(),n.components);return t?r.jsx(t,Object.assign({},n,{children:r.jsx(o,{})})):o();function o(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",ul:"ul",li:"li"},p(),n.components);return r.jsxs(r.Fragment,{children:[r.jsx(f,{title:"Introduction"}),`
`,r.jsx(e.h1,{id:"はじめに",children:"はじめに"}),`
`,r.jsxs(e.p,{children:["このサイトでは ",r.jsx(e.a,{href:"https://github.com/redfe/planning-poker-svelte",target:"_blank",rel:"nofollow noopener noreferrer",children:"Planning Poker"})," で構築されたコンポーネントのカタログを閲覧することができます。"]}),`
`,r.jsx(e.h1,{id:"使い方",children:"使い方"}),`
`,r.jsx(e.p,{children:"左メニューからメニューから閲覧したいコンポーネントを選択してください。"}),`
`,r.jsx(e.h1,{id:"開発",children:"開発"}),`
`,r.jsxs(e.p,{children:["以下のルールで ",r.jsx(e.code,{children:"[コンポーネント名].stories.ts"})," ファイルを実装します。"]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["作成対象の ",r.jsx(e.code,{children:"[コンポーネント名].svelte"})," ファイルと同じフォルダに、同じコンポーネント名で作成する。"]}),`
`,r.jsxs(e.li,{children:["Storybook の",r.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/get-started/install",target:"_blank",rel:"nofollow noopener noreferrer",children:"Guides"})," や ",r.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/get-started/install",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tutorials"}),"を参考にして実装する。"]}),`
`]})]})}}export{P as default};
//# sourceMappingURL=Introdoction-d8093988.js.map
