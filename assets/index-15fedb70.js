import{g as e,_ as a,s,a as t}from"./plugin-vue_export-helper-806773bb.js";import{u as l,G as o,a as r,R as n,C as u}from"./index-986ef25a.js";import{d as p,t as c,c as f,r as i,as as m,p as d,o as v,a as y,f as b,n as x,b as w,a4 as j,ac as O,L as g}from"./runtime-core.esm-bundler-808dc7a8.js";import{u as I}from"./use-index-d903ce97.js";var $=a(p({name:"Grid",props:{cols:{type:[Number,Object],default:24},rowGap:{type:[Number,Object],default:0},colGap:{type:[Number,Object],default:0},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}},setup(a){const{cols:s,rowGap:t,colGap:n,collapsedRows:u,collapsed:p}=c(a),v=l(s,24),y=l(n,0),b=l(t,0),x=e("grid"),w=f((()=>[x])),j=f((()=>[{gap:`${b.value}px ${y.value}px`,"grid-template-columns":`repeat(${v.value}, minmax(0px, 1fr))`}])),O=i(new Map),g=f((()=>{const e=[];for(const[a,s]of O.entries())e[a]=s;return e})),I=i({overflow:!1,displayIndexList:[],cols:v.value,colGap:y.value});return m((()=>{I.cols=v.value,I.colGap=y.value})),m((()=>{const e=function({cols:e,collapsed:a,collapsedRows:s,itemDataList:t}){let l=!1,o=[];function r(a){return Math.ceil(a/e)>s}if(a){let e=0;for(let a=0;a<t.length;a++)t[a].suffix&&(e+=t[a].span,o.push(a));if(!r(e)){let a=0;for(;a<t.length;){const s=t[a];if(!s.suffix){if(e+=s.span,r(e))break;o.push(a)}a++}}l=t.some(((e,a)=>!e.suffix&&!o.includes(a)))}else o=t.map(((e,a)=>a));return{overflow:l,displayIndexList:o}}({cols:v.value,collapsed:p.value,collapsedRows:u.value,itemDataList:g.value});I.overflow=e.overflow,I.displayIndexList=e.displayIndexList})),d(o,I),d(r,{collectItemData(e,a){O.set(e,a)},removeItemData(e){O.delete(e)}}),{classNames:w,style:j}}}),[["render",function(e,a,s,t,l,o){return v(),y("div",{class:x(e.classNames),style:w(e.style)},[b(e.$slots,"default")],6)}]]),G=Object.defineProperty,N=Object.defineProperties,h=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,P=(e,a,s)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;var M=a(p({name:"GridItem",props:{span:{type:[Number,Object],default:1},offset:{type:[Number,Object],default:0},suffix:{type:Boolean,default:!1}},setup(a){const s=e("grid-item"),t=j(),{computedIndex:n}=I({itemRef:t,selector:`.${s}`}),u=O(o,{overflow:!1,displayIndexList:[],cols:24,colGap:0}),p=O(r),i=f((()=>{var e;return null==(e=null==u?void 0:u.displayIndexList)?void 0:e.includes(n.value)})),{span:d,offset:v}=c(a),y=l(d,1),b=l(v,0),x=f((()=>{return function(e,a){var s,t;const l=null!=(s=a.span)?s:1,o=null!=(t=a.offset)?t:0,r=Math.min(o,e);return{span:Math.min(r>0?l+o:l,e),offset:r,suffix:"suffix"in a&&!1!==a.suffix}}(u.cols,(e=((e,a)=>{for(var s in a||(a={}))R.call(a,s)&&P(e,s,a[s]);if(L)for(var s of L(a))D.call(a,s)&&P(e,s,a[s]);return e})({},a),s={span:y.value,offset:b.value},N(e,h(s))));var e,s})),w=f((()=>[s])),$=f((()=>{const{offset:e,span:a}=x.value,{colGap:s}=u;if(e>0){return{"margin-left":`calc((${`(100% - ${s*(a-1)}px) / ${a}`} * ${e}) + ${s*e}px)`}}return{}})),G=f((()=>{const{suffix:e,span:a}=x.value,{cols:s}=u;return e?""+(s-a+1):`span ${a}`})),M=f((()=>{const{span:e}=x.value;return[{"grid-column":`${G.value} / span ${e}`},$.value,i.value&&0!==e?{}:{display:"none"}]}));return m((()=>{-1!==n.value&&(null==p||p.collectItemData(n.value,x.value))})),g((()=>{-1!==n.value&&(null==p||p.removeItemData(n.value))})),{classNames:w,style:M,domRef:t,overflow:f((()=>u.overflow))}}}),[["render",function(e,a,s,t,l,o){return v(),y("div",{ref:"domRef",class:x(e.classNames),style:w(e.style)},[b(e.$slots,"default",{overflow:e.overflow})],6)}]]);const B=Object.assign($,{Row:n,Col:u,Item:M,install:(e,a)=>{s(e,a);const l=t(a);e.component(l+n.name,n),e.component(l+u.name,u),e.component(l+$.name,$),e.component(l+M.name,M)}});export{B as G,M as a};