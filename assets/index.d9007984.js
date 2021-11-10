import{_ as u}from"./index.05c0275c.js";import{d as r,r as o,o as i,c as p,w as t,a as e,p as x,k,j as n,i as s,h as b,m as C,F as S}from"./vendor.c117a6c6.js";const L="_layout_1ys5w_1",D="_layoutNavbar_1ys5w_5",H="_layoutSider_1ys5w_14",W="_collapseBtn_1ys5w_35",j="_menuWrapper_1ys5w_52",F="_layoutContent_1ys5w_56",T="_spin_1ys5w_63";var V={layout:L,layoutNavbar:D,layoutSider:H,collapseBtn:W,menuWrapper:j,layoutContent:F,spin:T};const E={headerSetting:{headerHeight:"60px"}};var K="/arco-design-pro-vue/assets/logo.f6830a7d.svg";const O=r({name:"Logo",setup(){return{collapsed:!1}}}),P=a=>(x("data-v-563900b5"),a=a(),k(),a),z=P(()=>s("img",{src:K,alt:""},null,-1)),A=n("Arco Design Pro");function q(a,y,m,f,v,h){const c=o("a-typography-title"),d=o("a-space");return i(),p(d,{size:8,class:"logo"},{default:t(()=>[z,e(c,{class:"title",heading:5},{default:t(()=>[A]),_:1})]),_:1})}var G=u(O,[["render",q],["__scopeId","data-v-563900b5"]]);const J=r({name:"DropContent",setup(){return{tabList:[{key:"message",title:"message",titleIcon:""},{key:"notice",title:"notice",titleIcon:""},{key:"approve",title:"approve",titleIcon:"",avatar:""}]}}}),Q=n(" Content of Tab Panel 1 ");function R(a,y,m,f,v,h){const c=o("a-tab-pane"),d=o("a-tabs"),_=o("a-spin");return i(),p(_,{loading:!1,style:{width:"100%"}},{default:t(()=>[e(d,{type:"rounded","default-active-key":"message",destroyOnHide:""},{default:t(()=>[(i(!0),b(S,null,C(a.tabList,l=>(i(),p(c,{key:l.key,title:l.title},{default:t(()=>[Q]),_:2},1032,["title"]))),128))]),_:1})]),_:1})}var U=u(J,[["render",R]]);const X=r({name:"MessageBox",components:{DropContent:U},setup(){return{}}}),Y={class:"messageBoxTrigger"},Z={class:"messageBox"};function ee(a,y,m,f,v,h){const c=o("icon-notification"),d=o("a-badge"),_=o("drop-content"),l=o("a-dropdown");return i(),p(l,{trigger:"click",position:"br"},{content:t(()=>[s("div",Z,[e(_)])]),default:t(()=>[s("div",Y,[e(d,{count:9,dot:""},{default:t(()=>[e(c)]),_:1})])]),_:1})}var te=u(X,[["render",ee],["__scopeId","data-v-2306eef7"]]);const oe=r({name:"NavBar",components:{Logo:G,MessageBox:te},setup(){return{}}}),ne=a=>(x("data-v-5195c1ea"),a=a(),k(),a),ae={class:"navbar"},_e={class:"left"},se={class:"right"},ce=ne(()=>s("li",null,[s("a",null,"\u6587\u6863\u4E2D\u5FC3")],-1));function de(a,y,m,f,v,h){const c=o("Logo"),d=o("MessageBox");return i(),b("div",ae,[s("div",_e,[e(c)]),s("ul",se,[s("li",null,[e(d)]),ce])])}var le=u(oe,[["render",de],["__scopeId","data-v-5195c1ea"]]);const ie=r({name:"Layout",components:{NavBar:le},setup(){const{headerSetting:a}=E;return{styles:V,headerSetting:a}}}),ue={class:"layoutNavbar"},re={class:"menuWrapper"},pe=n(" Menu 1 "),ye=n(" Menu 2 "),me=n("Navigation 1"),fe=n("Menu 1"),ve=n("Menu 2"),he=n("Menu 1"),ge=n("Menu 2"),$e=n("Menu 1"),xe=n("Menu 2"),ke=n("Menu 3"),be=n("Navigation 4"),we=n("Menu 1"),Be=n("Menu 2"),Me=n("Menu 3"),Ie=n("1111");function Ne(a,y,m,f,v,h){const c=o("NavBar"),d=o("IconHome"),_=o("a-menu-item"),l=o("IconCalendar"),g=o("a-sub-menu"),w=o("a-menu"),B=o("a-sider"),M=o("router-view"),I=o("a-layout-content"),N=o("a-layout-footer"),$=o("a-layout");return i(),p($,{class:"layout"},{default:t(()=>[s("div",ue,[e(c)]),e($,null,{default:t(()=>[e(B,{class:"layoutSider",style:{width:"220px","padding-top":"60px"},width:"200"},{default:t(()=>[s("div",re,[e(w,{defaultOpenKeys:["1"],defaultSelectedKeys:["0_2"]},{default:t(()=>[e(_,{key:"0_1",disabled:""},{default:t(()=>[e(d),pe]),_:1}),e(_,{key:"0_2"},{default:t(()=>[e(l),ye]),_:1}),e(g,{key:"1"},{title:t(()=>[s("span",null,[e(l),me])]),default:t(()=>[e(_,{key:"1_1"},{default:t(()=>[fe]),_:1}),e(_,{key:"1_2"},{default:t(()=>[ve]),_:1}),e(g,{key:"2",title:"Navigation 2"},{default:t(()=>[e(_,{key:"2_1"},{default:t(()=>[he]),_:1}),e(_,{key:"2_2"},{default:t(()=>[ge]),_:1})]),_:1}),e(g,{key:"3",title:"Navigation 3"},{default:t(()=>[e(_,{key:"3_1"},{default:t(()=>[$e]),_:1}),e(_,{key:"3_2"},{default:t(()=>[xe]),_:1}),e(_,{key:"3_3"},{default:t(()=>[ke]),_:1})]),_:1})]),_:1}),e(g,{key:"4"},{title:t(()=>[s("span",null,[e(l),be])]),default:t(()=>[e(_,{key:"4_1"},{default:t(()=>[we]),_:1}),e(_,{key:"4_2"},{default:t(()=>[Be]),_:1}),e(_,{key:"4_3"},{default:t(()=>[Me]),_:1})]),_:1})]),_:1})])]),_:1}),e($,{class:"layoutContent",style:{"padding-left":"220px","padding-top":"60px"}},{default:t(()=>[e(I,null,{default:t(()=>[e(M)]),_:1}),e(N,null,{default:t(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1})}var Le=u(ie,[["render",Ne],["__scopeId","data-v-b1723ad2"]]);export{Le as default};