const m="modulepreload",h=function(o){return"/"+o},g={},v=function(c,d,f){if(!d||d.length===0)return c();const a=document.getElementsByTagName("link");return Promise.all(d.map(e=>{if(e=h(e),e in g)return;g[e]=!0;const r=e.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!f)for(let i=a.length-1;i>=0;i--){const s=a[i];if(s.href===e&&(!r||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":m,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((i,s)=>{t.addEventListener("load",i),t.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>c())};function R(o={}){const{immediate:c=!1,onNeedRefresh:d,onOfflineReady:f,onRegistered:a,onRegisteredSW:e,onRegisterError:r}=o;let l,u;const t=async(s=!0)=>{await u};async function i(){if("serviceWorker"in navigator){const{Workbox:s}=await v(()=>import("./workbox-window.prod.es5.295a6886.js"),[]);l=new s("/sw.js",{scope:"/",type:"classic"}),l.addEventListener("activated",n=>{(n.isUpdate||n.isExternal)&&window.location.reload()}),l.addEventListener("installed",n=>{n.isUpdate||f?.()}),l.register({immediate:c}).then(n=>{e?e("/sw.js",n):a?.(n)}).catch(n=>{r?.(n)})}}return u=i(),t}R({immediate:!0,onRegisteredSW(o){console.log("SW registered: ",o)},onOfflineReady(){console.log("PWA application ready to work offline")}});