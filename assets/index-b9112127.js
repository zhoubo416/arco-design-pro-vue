import{_ as e,g as n,s,a as o}from"./plugin-vue_export-helper-806773bb.js";import{_ as i,I as a}from"./input-search-fb4b71d0.js";import{d as t,w as p}from"./index-952d7730.js";import{a as r,I as u}from"./index-c5318d5c.js";import{d as l,a4 as f,q as d,o as m,j as v,ap as c,k as b,f as x,a8 as I,a as y,n as h}from"./runtime-core.esm-bundler-808dc7a8.js";var $=e(l({name:"InputPassword",components:{IconEye:r,IconEyeInvisible:u,AIconHover:t,AInput:i},props:{invisibleButton:{type:Boolean,default:!0}},setup(){const e=f(),n=f(!0);return{inputRef:e,invisible:n,handleInvisible:()=>{n.value=!n.value}}},methods:{focus(){var e;null==(e=this.inputRef)||e.focus()},blur(){var e;null==(e=this.inputRef)||e.blur()}}}),[["render",function(e,n,s,o,i,a){const t=d("icon-eye"),r=d("icon-eye-invisible"),u=d("a-icon-hover"),l=d("a-input");return m(),v(l,{ref:"inputRef",type:e.invisible?"password":"text"},c({_:2},[e.$slots.prepend?{name:"prepend",fn:b((()=>[x(e.$slots,"prepend")]))}:void 0,e.$slots.prefix?{name:"prefix",fn:b((()=>[x(e.$slots,"prefix")]))}:void 0,e.invisibleButton||e.$slots.suffix?{name:"suffix",fn:b((()=>[e.invisibleButton?(m(),v(u,{key:0,onClick:e.handleInvisible,onMousedown:n[0]||(n[0]=p((()=>{}),["prevent"])),onMouseup:n[1]||(n[1]=p((()=>{}),["prevent"]))},{default:b((()=>[e.invisible?(m(),v(r,{key:1})):(m(),v(t,{key:0}))])),_:1},8,["onClick"])):I("v-if",!0),x(e.$slots,"suffix")]))}:void 0,e.$slots.append?{name:"append",fn:b((()=>[x(e.$slots,"append")]))}:void 0]),1032,["type"])}]]);var j=e(l({name:"InputGroup",setup:()=>({prefixCls:n("input-group")})}),[["render",function(e,n,s,o,i,a){return m(),y("div",{class:h(e.prefixCls)},[x(e.$slots,"default")],2)}]]);const k=Object.assign(i,{Search:a,Password:$,Group:j,install:(e,n)=>{s(e,n);const t=o(n);e.component(t+i.name,i),e.component(t+j.name,j),e.component(t+a.name,a),e.component(t+$.name,$)}});export{k as I,$ as a,j as b};