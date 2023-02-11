import{g as e,b as s,_ as l,s as a,a as n}from"./plugin-vue_export-helper-806773bb.js";import{I as t,u as o}from"./use-size-9fed8212.js";import{ac as i,c as r,am as d,d as u,t as p,q as c,o as m,a as g,n as y,j as f,f as b,a8 as v,p as $,r as h}from"./runtime-core.esm-bundler-808dc7a8.js";const k=Symbol("ArcoFormItemContext"),C=Symbol("ArcoFormContext"),S=({size:e,disabled:s,error:l,uninject:a}={})=>{const n=a?{}:i(k,{}),t=r((()=>{var s;return null!=(s=null==e?void 0:e.value)?s:n.size})),o=r((()=>(null==s?void 0:s.value)||n.disabled)),u=r((()=>(null==l?void 0:l.value)||n.error)),p=d(n,"feedback"),c=d(n,"eventHandlers");return{formItemCtx:n,mergedSize:t,mergedDisabled:o,mergedError:u,feedback:p,eventHandlers:c}},z=Symbol("ArcoButtonGroup"),x=u({name:"Button",components:{IconLoading:t},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(l,{emit:a}){const{size:n,disabled:t}=p(l),d=e("btn"),u=i(z,void 0),c=r((()=>{var e;return null!=(e=n.value)?e:null==u?void 0:u.size})),m=r((()=>Boolean(t.value||(null==u?void 0:u.disabled)))),{mergedSize:g,mergedDisabled:y}=S({size:c,disabled:m}),{mergedSize:f}=o(g),b=r((()=>{var e,a,n,t,o,i;return[d,`${d}-${null!=(a=null!=(e=l.type)?e:null==u?void 0:u.type)?a:"secondary"}`,`${d}-shape-${null!=(t=null!=(n=l.shape)?n:null==u?void 0:u.shape)?t:"square"}`,`${d}-size-${f.value}`,`${d}-status-${null!=(i=null!=(o=l.status)?o:null==u?void 0:u.status)?i:"normal"}`,{[`${d}-long`]:l.long,[`${d}-loading`]:l.loading,[`${d}-disabled`]:y.value,[`${d}-link`]:s(l.href)}]}));return{prefixCls:d,cls:b,mergedDisabled:y,handleClick:e=>{l.disabled||l.loading?e.preventDefault():a("click",e)}}}}),B=["href"],j=["type","disabled"];var D=l(x,[["render",function(e,s,l,a,n,t){const o=c("icon-loading");return e.href?(m(),g("a",{key:0,class:y([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:s[0]||(s[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.loading||e.$slots.icon?(m(),g("span",{key:0,class:y(`${e.prefixCls}-icon`)},[e.loading?(m(),f(o,{key:0,spin:"true"})):b(e.$slots,"icon",{key:1})],2)):v("v-if",!0),b(e.$slots,"default")],10,B)):(m(),g("button",{key:1,class:y([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:s[1]||(s[1]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.loading||e.$slots.icon?(m(),g("span",{key:0,class:y(`${e.prefixCls}-icon`)},[e.loading?(m(),f(o,{key:0,spin:!0})):b(e.$slots,"icon",{key:1})],2)):v("v-if",!0),b(e.$slots,"default")],10,j))}]]);var I=l(u({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(s){const{type:l,size:a,status:n,disabled:t,shape:o}=p(s),i=e("btn-group");return $(z,h({type:l,size:a,shape:o,status:n,disabled:t})),{prefixCls:i}}}),[["render",function(e,s,l,a,n,t){return m(),g("div",{class:y(e.prefixCls)},[b(e.$slots,"default")],2)}]]);const A=Object.assign(D,{Group:I,install:(e,s)=>{a(e,s);const l=n(s);e.component(l+D.name,D),e.component(l+I.name,I)}});export{A as B,k as a,I as b,C as f,S as u};