import{g as e,i as t,_ as n}from"./plugin-vue_export-helper-806773bb.js";import{d as r,c as s,o as i,a as o,n as l,b as a,e as c}from"./runtime-core.esm-bundler-808dc7a8.js";const u=r({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(n,{emit:r}){const i=e("icon");return{cls:s((()=>[i,`${i}-plus`,{[`${i}-spin`]:n.spin}])),innerStyle:s((()=>{const e={};return n.size&&(e.fontSize=t(n.size)?`${n.size}px`:n.size),n.rotate&&(e.transform=`rotate(${n.rotate}deg)`),e})),onClick:e=>{r("click",e)}}}}),p=["stroke-width","stroke-linecap","stroke-linejoin"],d=[c("path",{d:"M5 24h38M24 5v38"},null,-1)];var k=n(u,[["render",function(e,t,n,r,s,c){return i(),o("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:l(e.cls),style:a(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},d,14,p)}]]);const m=Object.assign(k,{install:(e,t)=>{var n;const r=null!=(n=null==t?void 0:t.iconPrefix)?n:"";e.component(r+k.name,k)}});export{m as I};