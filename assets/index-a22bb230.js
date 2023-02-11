/* empty css              */import{C as e}from"./index-6d823d09.js";import"./index-986ef25a.js";import{u as t}from"./index-e0167883.js";import{T as a}from"./index-d2a04271.js";import{S as r}from"./index-81b78d20.js";import{u as s}from"./loading-d2316485.js";import{u as i}from"./echarts-d7dbb8d3.js";import{S as o}from"./index-0a51ce0a.js";import{d as l,a4 as d,o as n,j as m,k as p,l as c,e as u,a9 as y,s as g,b as x,u as f,q as h,at as j,au as v}from"./runtime-core.esm-bundler-808dc7a8.js";import{_ as b}from"./_plugin-vue_export-helper-1b428a4d.js";import{G as _,a as S}from"./index-15fedb70.js";import"./plugin-vue_export-helper-806773bb.js";import"./vue-utils-fe41050b.js";import"./use-size-9fed8212.js";import"./responsive-observe-aeb39d08.js";import"./pick-c9d12df4.js";import"./vue-router-70dc2cad.js";import"./_commonjsHelpers-157f59fb.js";import"./axios-eb37b58d.js";import"./index-b302753c.js";import"./index-952d7730.js";import"./use-popup-manager-c09cb0b2.js";import"./dom-68e13361.js";import"./index-f2c4e0e2.js";import"./index-b9a37dad.js";import"./use-teleport-container-9329eb06.js";import"./index-25db428f.js";import"./index-69460413.js";import"./index-b9112127.js";import"./input-search-fb4b71d0.js";import"./index-83b30376.js";import"./index-c5318d5c.js";import"./index-b22601c3.js";import"./index-39ecde43.js";import"./ResizeObserver.es-fe095dfb.js";import"./index-277ef83a.js";import"./resize-observer-aef80884.js";import"./use-merge-state-ed08ed92.js";import"./index-15ee7962.js";import"./index.es-d9b928a1.js";import"./use-index-d903ce97.js";const w={class:"content-wrap"},F={class:"content"},C={class:"desc"},A=b(l({__name:"DataItem",props:{title:{type:String,default:""},chartType:{type:String,default:""},cardStyle:{type:Object,default:()=>({})}},setup(t){const l=t,j=d({}),{loading:v,setLoading:b}=s(!0);"line"===l.chartType?j.value={grid:{left:0,right:0,top:10,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis"},series:[{name:"2001",data:[10,24,100,32,40,55,66,77,11,23,45,14],type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#165DFF",width:3}},{name:"2002",data:[46,12,20,33,27,11,79,99,82,44,66,88],type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#6AA1FF",width:3,type:"dashed"}}]}:"bar"===l.chartType?j.value={grid:{left:0,right:0,top:10,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis"},series:{name:"total",data:[{value:22,itemStyle:{color:"#2CAB40"}},{value:88,itemStyle:{color:"#86DF6C"}},{value:30,itemStyle:{color:"#2CAB40"}},{value:24,itemStyle:{color:"#86DF6C"}},{value:39,itemStyle:{color:"#2CAB40"}},{value:24,itemStyle:{color:"#86DF6C"}},{value:64,itemStyle:{color:"#2CAB40"}},{value:93,itemStyle:{color:"#86DF6C"}}],type:"bar",barWidth:7,itemStyle:{borderRadius:2}}}:j.value={grid:{left:0,right:0,top:0,bottom:0},legend:{show:!0,top:"center",right:"0",orient:"vertical",icon:"circle",itemWidth:6,itemHeight:6,textStyle:{color:"#4E5969"}},tooltip:{show:!0},series:[{name:"总计",type:"pie",radius:["50%","70%"],label:{show:!1},data:[{value:1024,name:"微信"},{value:1024,name:"抖音"},{value:1024,name:"知乎"}]}]},b(!1);const{domRef:_}=i(j);return(s,i)=>{const l=r,d=a,j=h("icon-arrow-rise"),b=e,S=o;return n(),m(S,{loading:f(v),style:{width:"100%"}},{default:p((()=>[c(b,{bordered:!1,style:x(t.cardStyle)},{default:p((()=>[u("div",w,[u("div",F,[c(l,{title:t.title,value:1024,"value-from":0,animation:"","show-group-separator":""},null,8,["title"]),u("div",C,[c(d,{type:"secondary",class:"label"},{default:p((()=>[y(g(s.$t("dashboard.analysis.data-card.yesterday")),1)])),_:1}),c(d,{type:"danger"},{default:p((()=>[y(" 1024 "),c(j)])),_:1})])]),u("div",{ref_key:"chartRef",ref:_,class:"chart"},null,512)])])),_:1},8,["style"])])),_:1},8,["loading"])}}}),[["__scopeId","data-v-c522fbbf"]]),E=(e=>(j("data-v-88528060"),e=e(),v(),e))((()=>u("div",null,null,-1))),k=b(l({__name:"index",setup(a){const{darkMode:r}=t();return(t,a)=>{const s=S,i=_,o=e;return n(),m(o,{class:"general-card mb-15px","header-style":{paddingBottom:"15px"}},{default:p((()=>[c(i,{cols:24,"col-gap":12,"row-gap":12},{default:p((()=>[c(s,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:p((()=>[c(f(A),{title:t.$t("dashboard.analysis.data-card.visits"),"chart-type":"line","card-style":{background:f(r)?"linear-gradient(180deg, #284991 0%, #122B62 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"}},null,8,["title","card-style"])])),_:1}),c(s,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:p((()=>[c(f(A),{title:t.$t("dashboard.analysis.data-card.downloads"),"chart-type":"bar","card-style":{background:f(r)?" linear-gradient(180deg, #3D492E 0%, #263827 100%)":"linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)"}},null,8,["title","card-style"])])),_:1}),c(s,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:p((()=>[c(f(A),{title:t.$t("dashboard.analysis.data-card.comments"),quota:"comment","chart-type":"line","card-style":{background:f(r)?"linear-gradient(180deg, #294B94 0%, #0F275C 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"}},null,8,["title","card-style"]),E])),_:1}),c(s,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:p((()=>[c(f(A),{title:t.$t("dashboard.analysis.data-card.sharing"),"chart-type":"pie","card-style":{background:f(r)?"linear-gradient(180deg, #312565 0%, #201936 100%)":"linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)"}},null,8,["title","card-style"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-88528060"]]);export{k as default};