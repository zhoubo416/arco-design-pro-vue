import{h as e,d as t,g as o,c as l,s as r,a}from"./plugin-vue_export-helper-806773bb.js";import{T as n,v as s}from"./index-952d7730.js";import{i}from"./ResizeObserver.es-fe095dfb.js";import{d as u,e as c,m as p}from"./vue-utils-fe41050b.js";import{a4 as d,K as f,T as h,d as v,w as m,a5 as g,t as b,c as y,ac as w,p as O,r as C,ar as R,l as B,a6 as T,m as j,a7 as M,Q as S,F as P}from"./runtime-core.esm-bundler-808dc7a8.js";import{o as F,a as E}from"./dom-68e13361.js";import{o as x,u as A}from"./use-popup-manager-c09cb0b2.js";import{u as L,C as z}from"./use-teleport-container-9329eb06.js";const $="undefined"==typeof window?global:window,W=$.requestAnimationFrame,k=$.cancelAnimationFrame;var D=Object.defineProperty,V=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,I=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))H.call(t,o)&&I(e,o,t[o]);if(V)for(var o of V(t))N.call(t,o)&&I(e,o,t[o]);return e};const K=(e,t)=>{var o,l;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:null!=(o=e.offsetWidth)?o:e.clientWidth,height:null!=(l=e.offsetHeight)?l:e.clientHeight}},Q=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},U=(e,t,{containerRect:o,triggerRect:l,popupRect:r,offset:a,translate:n})=>{const s=(e=>{switch(e){case"top":case"tl":case"tr":default:return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right"}})(e),i={width:document.documentElement.clientWidth||window.innerWidth,height:document.documentElement.clientHeight||window.innerHeight},u=o.top+t.top,c=i.height-(o.top+t.top+r.height),p=o.left+t.left,d=i.width-(o.left+t.left+r.width);let f=e;if("top"===s&&u<0)if(l.top>r.height)t.top=-o.top;else{const s=X("bottom",l,r,{offset:a,translate:n});i.height-(o.top+s.top+r.height)>0&&(f=Q(e,"bottom"),t.top=s.top)}if("bottom"===s&&c<0)if(i.height-l.bottom>r.height)t.top=-o.top+(i.height-r.height);else{const s=X("top",l,r,{offset:a,translate:n});o.top+s.top>0&&(f=Q(e,"top"),t.top=s.top)}if("left"===s&&p<0)if(l.left>r.width)t.left=-o.left;else{const s=X("right",l,r,{offset:a,translate:n});i.width-(o.left+s.left+r.width)>0&&(f=Q(e,"right"),t.left=s.left)}if("right"===s&&d<0)if(i.width-l.right>r.width)t.left=-o.left+(i.width-r.width);else{const s=X("left",l,r,{offset:a,translate:n});o.left+s.left>0&&(f=Q(e,"left"),t.left=s.left)}return"top"!==s&&"bottom"!==s||(p<0?t.left=-o.left:d<0&&(t.left=-o.left+(i.width-r.width))),"left"!==s&&"right"!==s||(u<0?t.top=-o.top:c<0&&(t.top=-o.top+(i.height-r.height))),{popupPosition:t,position:f}},X=(t,o,l,{offset:r=0,translate:a=[0,0]}={})=>{var n;const s=null!=(n=e(a)?a:a[t])?n:[0,0];switch(t){case"top":return{left:o.scrollLeft+Math.round(o.width/2)-Math.round(l.width/2)+s[0],top:o.scrollTop-l.height-r+s[1]};case"tl":return{left:o.scrollLeft+s[0],top:o.scrollTop-l.height-r+s[1]};case"tr":return{left:o.scrollRight-l.width+s[0],top:o.scrollTop-l.height-r+s[1]};case"bottom":return{left:o.scrollLeft+Math.round(o.width/2)-Math.round(l.width/2)+s[0],top:o.scrollBottom+r+s[1]};case"bl":return{left:o.scrollLeft+s[0],top:o.scrollBottom+r+s[1]};case"br":return{left:o.scrollRight-l.width+s[0],top:o.scrollBottom+r+s[1]};case"left":return{left:o.scrollLeft-l.width-r+s[0],top:o.scrollTop+Math.round(o.height/2)-Math.round(l.height/2)+s[1]};case"lt":return{left:o.scrollLeft-l.width-r+s[0],top:o.scrollTop+s[1]};case"lb":return{left:o.scrollLeft-l.width-r+s[0],top:o.scrollBottom-l.height+s[1]};case"right":return{left:o.scrollRight+r+s[0],top:o.scrollTop+Math.round(o.height/2)-Math.round(l.height/2)+s[1]};case"rt":return{left:o.scrollRight+r+s[0],top:o.scrollTop+s[1]};case"rb":return{left:o.scrollRight+r+s[0],top:o.scrollBottom-l.height+s[1]};default:return{left:0,top:0}}},Y=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let o="0";return["left","right"].includes(e)?o="50%":["top","tl","tr","lt","rt"].includes(e)&&(o="100%"),`${t} ${o}`},_=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,G=e=>{var t;const o=[];let l=e;for(;l&&l!==document.documentElement;)_(l)&&o.push(l),l=null!=(t=l.parentElement)?t:void 0;return o},J=()=>{const e={},t=d(),o=()=>{const o=u(e.value);o!==t.value&&(t.value=o)};return f((()=>o())),h((()=>o())),{children:e,firstElement:t}};var Z=v({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:t,slots:o}){const{children:l,firstElement:r}=J();let a;const n=()=>{a&&(a.disconnect(),a=null)};return m(r,(e=>{var o;a&&n(),e&&(o=e)&&(a=new i((e=>{const o=e[0];t("resize",o)})),a.observe(o))})),g((()=>{a&&n()})),()=>{var e;return l.value=null==(e=o.default)?void 0:e.call(o),l.value}}});function ee(e,t){const o=d(e[t]);return h((()=>{const l=e[t];o.value!==l&&(o.value=l)})),o}const te=Symbol("ArcoTrigger");var oe=Object.defineProperty,le=Object.defineProperties,re=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ie=(e,t,o)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ue=(e,t)=>{for(var o in t||(t={}))ne.call(t,o)&&ie(e,o,t[o]);if(ae)for(var o of ae(t))se.call(t,o)&&ie(e,o,t[o]);return e};const ce=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var pe=v({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:r,slots:a,attrs:u}){const{popupContainer:v}=b(e),$=o("trigger"),D=y((()=>x(u,ce))),V=w(l,void 0),H=y((()=>[].concat(e.trigger))),N=new Set,I=w(te,void 0),{children:Q,firstElement:_}=J(),oe=d(),ae=d(e.defaultPopupVisible),ne=d(e.position),se=d({}),ie=d({}),pe=d({}),de=d(),fe=d({top:0,left:0}),he=y((()=>{var t;return null!=(t=e.popupVisible)?t:ae.value})),{teleportContainer:ve,containerRef:me}=L({popupContainer:v,visible:he,documentContainer:!0}),{zIndex:ge}=A("popup",{visible:he});let be=0,ye=!1;const we=t=>{if(e.alignPoint){const{pageX:e,pageY:o}=t;fe.value={top:o,left:e}}},Oe=()=>{if(!_.value||!oe.value||!me.value)return;const t=me.value.getBoundingClientRect(),o=e.alignPoint?{top:fe.value.top,bottom:fe.value.top,left:fe.value.left,right:fe.value.left,scrollTop:fe.value.top,scrollBottom:fe.value.top,scrollLeft:fe.value.left,scrollRight:fe.value.left,width:0,height:0}:K(_.value,t),l=()=>K(oe.value,t),r=l(),{style:a,position:n}=((e,t,o,l,{offset:r=0,translate:a=[0,0],customStyle:n={},autoFitPosition:s=!1}={})=>{let i=e,u=X(e,o,l,{offset:r,translate:a});if(s){const n=U(e,u,{containerRect:t,popupRect:l,triggerRect:o,offset:r,translate:a});u=n.popupPosition,i=n.position}return{style:q({left:`${u.left}px`,top:`${u.top}px`},n),position:i}})(e.position,t,o,r,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(ie.value={transformOrigin:Y(n)}),e.autoFitPopupMinWidth?a.minWidth=`${o.width}px`:e.autoFitPopupWidth&&(a.width=`${o.width}px`),ne.value!==n&&(ne.value=n),se.value=a,e.showArrow&&P((()=>{pe.value=((e,t,o,{customStyle:l={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let r=Math.abs(t.scrollLeft+t.width/2-o.scrollLeft);return r>o.width-8&&(r=t.width>o.width?o.width/2:o.width-8),["top","tl","tr"].includes(e)?q({left:`${r}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},l):q({left:`${r}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)}let r=Math.abs(t.scrollTop+t.height/2-o.scrollTop);return r>o.height-8&&(r=t.height>o.height?o.height/2:o.height-8),["left","lt","lb"].includes(e)?q({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},l):q({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)})(n,o,l(),{customStyle:e.arrowStyle})}))},Ce=(e,t)=>{if(e===he.value&&0===be)return;const o=()=>{ae.value=e,r("update:popupVisible",e),r("popupVisibleChange",e),e&&P((()=>{Oe()}))};t?(be&&(window.clearTimeout(be),be=0),e!==he.value&&(be=window.setTimeout(o,t))):o()},Re=t=>{var o;null==(o=u.onClick)||o.call(u,t),e.disabled||he.value&&!e.clickToClose||(H.value.includes("click")?(we(t),Ce(!he.value)):H.value.includes("contextMenu")&&he.value&&Ce(!1))},Be=t=>{var o;null==(o=u.onMouseenter)||o.call(u,t),!e.disabled&&H.value.includes("hover")&&(we(t),Ce(!0,e.mouseEnterDelay))},Te=e=>{null==I||I.onMouseenter(e),Be(e)},je=t=>{var o;null==(o=u.onMouseleave)||o.call(u,t),!e.disabled&&H.value.includes("hover")&&Ce(!1,e.mouseLeaveDelay)},Me=e=>{null==I||I.onMouseleave(e),je(e)},Se=t=>{var o;null==(o=u.onFocusin)||o.call(u,t),!e.disabled&&H.value.includes("focus")&&Ce(!0,e.focusDelay)},Pe=t=>{var o;null==(o=u.onFocusout)||o.call(u,t),!e.disabled&&H.value.includes("focus")&&e.blurToClose&&Ce(!1)},Fe=t=>{var o;null==(o=u.onContextmenu)||o.call(u,t),e.disabled||!H.value.includes("contextMenu")||he.value&&!e.clickToClose||(we(t),Ce(!he.value),t.preventDefault())};O(te,C({onMouseenter:Te,onMouseleave:Me,addChildRef:e=>{N.add(e),null==I||I.addChildRef(e)},removeChildRef:e=>{N.delete(e),null==I||I.removeChildRef(e)}}));const Ee=()=>{E(document.documentElement,"mousedown",Le),ye=!1},xe=ee(a,"content"),Ae=y((()=>{var t;return e.hideEmpty&&c(null==(t=xe.value)?void 0:t.call(xe))})),Le=e=>{var t,o,l;if(!(null==(t=_.value)?void 0:t.contains(e.target))&&!(null==(o=oe.value)?void 0:o.contains(e.target))){for(const t of N)if(null==(l=t.value)?void 0:l.contains(e.target))return;Ee(),Ce(!1)}},ze=function(e){let t=0;const o=(...o)=>{t&&k(t),t=W((()=>{e(...o),t=0}))};return o.cancel=()=>{k(t),t=0},o}((()=>{he.value&&Oe()})),$e=()=>{he.value&&Oe()},We=()=>{$e(),r("resize")},ke=t=>{e.preventFocus&&t.preventDefault()};null==I||I.addChildRef(oe);const De=y((()=>he.value?e.openedClass:void 0));let Ve;m(he,(t=>{if(e.clickOutsideToClose&&(!t&&ye?Ee():t&&!ye&&(F(document.documentElement,"mousedown",Le),ye=!0)),e.updateAtScroll||(null==V?void 0:V.updateAtScroll))if(t){Ve=G(_.value);for(const e of Ve)e.addEventListener("scroll",ze)}else if(Ve){for(const e of Ve)e.removeEventListener("scroll",ze);Ve=void 0}t&&(Ie.value=!0)})),m((()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth]),(()=>{he.value&&Oe()}));const{createResizeObserver:He,destroyResizeObserver:Ne}=(({elementRef:e,onResize:o})=>{let l;return{createResizeObserver:()=>{e.value&&(l=new i((e=>{const l=e[0];t(o)&&o(l)})),l.observe(e.value))},destroyResizeObserver:()=>{l&&(l.disconnect(),l=null)}}})({elementRef:me,onResize:$e});f((()=>{if(He(),he.value&&(Oe(),e.clickOutsideToClose&&!ye&&(F(document.documentElement,"mousedown",Le),ye=!0),e.updateAtScroll||(null==V?void 0:V.updateAtScroll))){Ve=G(_.value);for(const e of Ve)e.addEventListener("scroll",ze)}})),h((()=>{he.value&&Oe()})),R((()=>{Ce(!1)})),g((()=>{if(null==I||I.removeChildRef(oe),Ne(),ye&&Ee(),Ve){for(const e of Ve)e.removeEventListener("scroll",ze);Ve=void 0}}));const Ie=d(he.value),qe=d(!1),Ke=()=>{qe.value=!0},Qe=()=>{qe.value=!1,he.value&&r("show")},Ue=()=>{qe.value=!1,he.value||(Ie.value=!1,r("hide"))};return()=>{var t,o;return Q.value=null!=(o=null==(t=a.default)?void 0:t.call(a))?o:[],p(Q.value,{class:De.value,onClick:Re,onMouseenter:Be,onMouseleave:je,onFocusin:Se,onFocusout:Pe,onContextmenu:Fe}),B(S,null,[e.autoFixPosition?B(Z,{onResize:We},{default:()=>[Q.value]}):Q.value,B(z,null,{default:()=>[B(T,{to:ve.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||he.value||Ie.value)&&!Ae.value&&B(Z,{onResize:$e},{default:()=>{return[B("div",j({ref:oe,class:[`${$}-popup`,`${$}-position-${ne.value}`],style:(t=ue({},se.value),o={zIndex:ge.value,pointerEvents:qe.value?"none":"auto"},le(t,re(o))),"trigger-placement":ne.value,onMouseenter:Te,onMouseleave:Me,onMousedown:ke},D.value),[B(n,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:Ke,onAfterEnter:Qe,onBeforeLeave:Ke,onAfterLeave:Ue},{default:()=>{var t;return[M(B("div",{class:`${$}-popup-wrapper`,style:ie.value},[B("div",{class:[`${$}-content`,e.contentClass],style:e.contentStyle},[null==(t=a.content)?void 0:t.call(a)]),e.showArrow&&B("div",{ref:de,class:[`${$}-arrow`,e.arrowClass],style:pe.value},null)]),[[s,he.value]])]}})])];var t,o}})]})]})])}}});const de=Object.assign(pe,{install:(e,t)=>{r(e,t);const o=a(t);e.component(o+pe.name,pe)}});export{Z as R,de as T,k as c,W as r,ee as u};