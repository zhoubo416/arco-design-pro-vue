/* empty css              */import{C as a}from"./index.26358cac.js";import{S as e}from"./index.b93133fd.js";/* empty css               *//* empty css               */import{d as t,be as i,k as s,B as l,x as n,y as o,bc as u,w as d,b as r,D as m,aN as c,bf as f}from"./index.e00e4771.js";import{I as b,b as p}from"./index.66073913.js";import"./index.1b0c38eb.js";import"./input-search.7a505953.js";import"./pick.50d21532.js";const _=t({__name:"index",setup(t){const{routerPush:_}=u(),x=i(),j=s("");function v(){_({name:c("function_tab-detail"),query:{name:"abc"},hash:"#DEMO_HASH"})}function h(a){_({name:c("function_tab-multi-detail"),query:{name:"abc",num:a},hash:"#DEMO_HASH"})}function T(){j.value?x.setActiveTabTitle(j.value):f.warning("请输入要设置的标题名称")}return(t,i)=>{const s=l,u=b,c=p,f=e,_=a;return d(),n(_,{title:"Tab Home",bordered:!1,size:"small",class:"shadow-sm rounded-16px w-full"},{default:o((()=>[r(f,{direction:"vertical",size:12},{default:o((()=>[r(s,{onClick:v},{default:o((()=>[m("跳转Tab Detail")])),_:1}),r(s,{onClick:i[0]||(i[0]=a=>h(1))},{default:o((()=>[m("跳转Tab Multi Detail 1")])),_:1}),r(s,{onClick:i[1]||(i[1]=a=>h(2))},{default:o((()=>[m("跳转Tab Multi Detail 2")])),_:1}),r(c,null,{default:o((()=>[r(u,{"model-value":j.value,"onUpdate:modelValue":i[2]||(i[2]=a=>j.value=a)},null,8,["model-value"]),r(s,{type:"primary",onClick:T},{default:o((()=>[m("设置当前Tab页标题")])),_:1})])),_:1})])),_:1})])),_:1})}}});export{_ as default};