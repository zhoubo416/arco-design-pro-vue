import{d as e,ad as a,ae as o,E,e as r,f as _,J as s,G as t}from"./index.bcb9938a.js";function n(){const{VITE_APP_NAME:e,VITE_APP_TITLE:a,VITE_APP_DESC:o}={VITE_BASE_URL:"/arco-design-pro-vue",VITE_DROP_CONSOLE:"false",VITE_VISUALIZER:"false",VITE_COMPRESS:"false",VITE_COMPRESS_TYPE:"gzip",VITE_API_URL_PREFIX:"/mock",VITE_APP_NAME:"ArcoDesignPro",VITE_APP_TITLE:"ArcoDesignProVue",VITE_APP_DESC:"这是一段不长不短刚刚好的vlog",VITE_AUTH_ROUTE_MODE:"dynamic",VITE_ROUTE_HOME_PATH:"/dashboard",BASE_URL:"/arco-design-pro-vue/",MODE:"production",DEV:!1,PROD:!0};return{name:e,title:a,desc:o}}const c=e({__name:"DarkModeSwitch",emits:["update:dark"],setup(e,{emit:n}){const c=a({selector:"body",attribute:"arco-theme",valueDark:"dark",valueLight:"light",storageKey:"arco-theme",onChanged(e){n("update:dark",e)}}),i=o(c),T=()=>{i()};return(e,a)=>{const o=E("icon-moon-fill"),n=E("icon-sun-fill");return r(),_("div",{class:"flex-center text-18px cursor-pointer",onClick:T},[s(c)?(r(),t(o,{key:0})):(r(),t(n,{key:1}))])}}});export{c as _,n as u};