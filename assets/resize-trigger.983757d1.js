import{d as e,v as s,c as a,aI as l,T as r,o as i,z as n,Q as o,R as t,t as u,U as c,aJ as v,aK as z,_ as d,E as f,e as p,G as m,H as R,A as b,C as g,h as D,n as $}from"./index.bcb9938a.js";import{i as x}from"./ResizeObserver.es.bd9ff68d.js";var C=e({name:"ResizeObserver",emits:["resize"],setup(e,{emit:u,slots:c}){let v;const z=s(),d=a((()=>l(z.value)?z.value.$el:z.value)),f=e=>{e&&(v=new x((e=>{const s=e[0];u("resize",s)})),v.observe(e))},p=()=>{v&&(v.disconnect(),v=null)};return r(d,(e=>{v&&p(),e&&f(e)})),i((()=>{d.value&&f(d.value)})),n((()=>{p()})),()=>{var e,s;const a=o(null!=(s=null==(e=c.default)?void 0:e.call(c))?s:[]);return a?t(a,{ref:z},!0):null}}});function I(e,l){const{value:i}=u(l),[n,o]=function(e){const a=s(e);return[a,e=>{a.value=e}]}(c(i.value)?e:i.value);r(i,(e=>{c(e)&&o(void 0)}));return[a((()=>c(i.value)?n.value:i.value)),o,n]}var h=d(e({name:"ResizeTrigger",components:{ResizeObserver:C,IconDragDot:v,IconDragDotVertical:z},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:s}){const{direction:l,prefixCls:r}=u(e),i=a((()=>"horizontal"===(null==l?void 0:l.value)));return{classNames:a((()=>[r.value,{[`${r.value}-horizontal`]:i.value,[`${r.value}-vertical`]:!i.value}])),onResize:e=>{s("resize",e)},isHorizontal:i}}}),[["render",function(e,s,a,l,r,i){const n=f("IconDragDot"),o=f("IconDragDotVertical"),t=f("ResizeObserver");return p(),m(t,{onResize:e.onResize},{default:R((()=>[b("div",{class:$(e.classNames)},[g(" @slot 自定义内容 "),D(e.$slots,"default",{},(()=>[b("div",{class:$(`${e.prefixCls}-icon-wrapper`)},[g(" @slot 自定义 icon "),D(e.$slots,"icon",{},(()=>[e.isHorizontal?(p(),m(n,{key:0,class:$(`${e.prefixCls}-icon`)},null,8,["class"])):(p(),m(o,{key:1,class:$(`${e.prefixCls}-icon`)},null,8,["class"]))]))],2)]))],2)])),_:3},8,["onResize"])}]]);export{h as R,C as a,I as u};