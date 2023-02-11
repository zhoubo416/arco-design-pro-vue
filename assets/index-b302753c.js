import{d as e,I as s,b as t,a as o,e as a,r as n}from"./index-952d7730.js";import{u as l,M as i}from"./use-popup-manager-c09cb0b2.js";import{d as r}from"./dom-68e13361.js";import{g as c,_ as p,b as u,j as d,d as m}from"./plugin-vue_export-helper-806773bb.js";import{I as f}from"./index-f2c4e0e2.js";import{I as h}from"./index-b9a37dad.js";import{I as g}from"./use-size-9fed8212.js";import{d as v,K as y,T as b,L as C,q as O,o as j,a as x,n as I,f as k,j as w,a8 as M,e as $,l as _,k as L,al as E,r as H,a4 as P}from"./runtime-core.esm-bundler-808dc7a8.js";import{g as S}from"./vue-utils-fe41050b.js";var U=p(v({name:"Message",components:{AIconHover:e,IconInfoCircleFill:h,IconCheckCircleFill:s,IconExclamationCircleFill:t,IconCloseCircleFill:o,IconClose:f,IconLoading:g},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:s}){const t=c("message");let o=0;const a=()=>{s("close")},n=()=>{e.duration>0&&(o=window.setTimeout(a,e.duration))},l=()=>{o&&(window.clearTimeout(o),o=0)};y((()=>{n()})),b((()=>{e.resetOnUpdate&&(l(),n())})),C((()=>{l()}));return{handleMouseEnter:()=>{e.resetOnHover&&l()},handleMouseLeave:()=>{e.resetOnHover&&n()},prefixCls:t,handleClose:a}}}),[["render",function(e,s,t,o,a,n){const l=O("icon-info-circle-fill"),i=O("icon-check-circle-fill"),r=O("icon-exclamation-circle-fill"),c=O("icon-close-circle-fill"),p=O("icon-loading"),u=O("icon-close"),d=O("a-icon-hover");return j(),x("li",{role:"alert",class:I([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:s[1]||(s[1]=(...s)=>e.handleMouseEnter&&e.handleMouseEnter(...s)),onMouseleave:s[2]||(s[2]=(...s)=>e.handleMouseLeave&&e.handleMouseLeave(...s))},[e.showIcon&&("normal"!==e.type||e.$slots.icon)?(j(),x("span",{key:0,class:I(`${e.prefixCls}-icon`)},[k(e.$slots,"icon",{},(()=>["info"===e.type?(j(),w(l,{key:0})):"success"===e.type?(j(),w(i,{key:1})):"warning"===e.type?(j(),w(r,{key:2})):"error"===e.type?(j(),w(c,{key:3})):"loading"===e.type?(j(),w(p,{key:4})):M("v-if",!0)]))],2)):M("v-if",!0),$("span",{class:I(`${e.prefixCls}-content`)},[k(e.$slots,"default")],2),e.closable?(j(),x("span",{key:1,class:I(`${e.prefixCls}-close-btn`),onClick:s[0]||(s[0]=(...s)=>e.handleClose&&e.handleClose(...s))},[_(d,null,{default:L((()=>[_(u)])),_:1})],2)):M("v-if",!0)],34)}]]);var A=v({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,s){const t=c("message-list"),{zIndex:o}=l("message",{runOnMounted:!0});return()=>{let n;return _(a,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:o.value},onAfterLeave:()=>s.emit("afterClose")},"function"==typeof(l=n=e.messages.map((e=>{const t={default:S(e.content),icon:S(e.icon)};return _(U,{key:e.id,type:e.type,duration:e.duration,closable:e.closable,resetOnUpdate:e.resetOnUpdate,resetOnHover:e.resetOnHover,onClose:()=>s.emit("close",e.id)},t)})))||"[object Object]"===Object.prototype.toString.call(l)&&!E(l)?n:{default:()=>[n]});var l}}}),B=Object.defineProperty,F=Object.defineProperties,z=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,K=(e,s,t)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,N=(e,s)=>{for(var t in s||(s={}))q.call(s,t)&&K(e,t,s[t]);if(T)for(var t of T(s))D.call(s,t)&&K(e,t,s[t]);return e},G=(e,s)=>F(e,z(s));class J{constructor(e,s){this.messageCount=0,this.add=e=>{var s;this.messageCount++;const t=null!=(s=e.id)?s:`__arco_message_${this.messageCount}`;if(this.messageIds.has(t))return this.update(t,e);const o=H(N({id:t},e));return this.messages.value.push(o),this.messageIds.add(t),{close:()=>this.remove(t)}},this.update=(e,s)=>{for(let t=0;t<this.messages.value.length;t++)if(this.messages.value[t].id===e){const o=!d(s.duration);Object.assign(this.messages.value[t],G(N({},s),{id:e,resetOnUpdate:o}));break}return{close:()=>this.remove(e)}},this.remove=e=>{for(let s=0;s<this.messages.value.length;s++){const t=this.messages.value[s];if(t.id===e){m(t.onClose)&&t.onClose(e),this.messages.value.splice(s,1),this.messageIds.delete(e);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{0===this.messages.value.length&&this.container&&(n(null,this.container),document.body.removeChild(this.container),this.container=null,Q[this.position]=void 0)};const{position:t="top"}=e;this.container=r("message"),this.messageIds=new Set,this.messages=P([]),this.position=t;const o=_(A,{messages:this.messages.value,position:t,onClose:this.remove,onAfterClose:this.destroy});(null!=s?s:W._context)&&(o.appContext=null!=s?s:W._context),n(o,this.container),document.body.appendChild(this.container)}}const Q={},R=[...i,"loading","normal"],V=R.reduce(((e,s)=>(e[s]=(e,t)=>{u(e)&&(e={content:e});const o=N({type:s},e),{position:a="top"}=o;return Q[a]||(Q[a]=new J(o,t)),Q[a].add(o)},e)),{});V.clear=e=>{var s;e?null==(s=Q[e])||s.clear():Object.values(Q).forEach((e=>null==e?void 0:e.clear()))};const W=G(N({},V),{install:e=>{const s={clear:V.clear};for(const t of R)s[t]=(s,o=e._context)=>V[t](s,o);e.config.globalProperties.$message=s},_context:null});export{W as M};