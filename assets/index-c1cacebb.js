import{g as e,i as t,_ as r}from"./plugin-vue_export-helper-806773bb.js";import{d as n,c as o,o as i,a as s,n as a,b as l,h as c}from"./runtime-core.esm-bundler-808dc7a8.js";const p=n({name:"IconImageClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(r,{emit:n}){const i=e("icon");return{cls:o((()=>[i,`${i}-image-close`,{[`${i}-spin`]:r.spin}])),innerStyle:o((()=>{const e={};return r.size&&(e.fontSize=t(r.size)?`${r.size}px`:r.size),r.rotate&&(e.transform=`rotate(${r.rotate}deg)`),e})),onClick:e=>{n("click",e)}}}}),u=["stroke-width","stroke-linecap","stroke-linejoin"],d=[c('<path d="M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"></path><path d="m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"></path><path d="M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z" fill="currentColor" stroke="none"></path><path d="M17 15h-2v2h2v-2Z"></path>',5)];var h=r(p,[["render",function(e,t,r,n,o,c){return i(),s("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:a(e.cls),style:l(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},d,14,u)}]]);const m=Object.assign(h,{install:(e,t)=>{var r;const n=null!=(r=null==t?void 0:t.iconPrefix)?r:"";e.component(n+h.name,h)}});export{m as I};