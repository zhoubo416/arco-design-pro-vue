import{d as e,aX as s,aY as a,t as r,c as i,_ as o,a2 as l,w as t,x as n,y as c,E as u,H as p,M as z,q as v}from"./index.e00e4771.js";import{R as d}from"./resize-observer.0be7124b.js";var f=o(e({name:"ResizeTrigger",components:{ResizeObserver:d,IconDragDot:s,IconDragDotVertical:a},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:s}){const{direction:a,prefixCls:o}=r(e),l=i((()=>"horizontal"===(null==a?void 0:a.value)));return{classNames:i((()=>[o.value,{[`${o.value}-horizontal`]:l.value,[`${o.value}-vertical`]:!l.value}])),onResize:e=>{s("resize",e)},isHorizontal:l}}}),[["render",function(e,s,a,r,i,o){const d=l("IconDragDot"),f=l("IconDragDotVertical"),m=l("ResizeObserver");return t(),n(m,{onResize:e.onResize},{default:c((()=>[u("div",{class:p(e.classNames)},[z(" @slot 自定义内容 "),v(e.$slots,"default",{},(()=>[u("div",{class:p(`${e.prefixCls}-icon-wrapper`)},[z(" @slot 自定义 icon "),v(e.$slots,"icon",{},(()=>[e.isHorizontal?(t(),n(d,{key:0,class:p(`${e.prefixCls}-icon`)},null,8,["class"])):(t(),n(f,{key:1,class:p(`${e.prefixCls}-icon`)},null,8,["class"]))]))],2)]))],2)])),_:3},8,["onResize"])}]]);export{f as R};