const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.CcZnrQM0.js","_astro/preact.module.LHOPIhyX.js","_astro/hooks.module.6Mr8QjZg.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper.BiBI96sQ.js";import{_ as s,B as m,D as v}from"./preact.module.LHOPIhyX.js";let p,y=(async()=>{const u=({value:t,name:l,hydrate:a=!0})=>t?s(a?"astro-slot":"astro-static-slot",{name:l,dangerouslySetInnerHTML:{__html:t}}):null;u.shouldComponentUpdate=()=>!1;var f=u;const o=new Map;p=t=>async(l,a,{default:r,..._},{client:d})=>{if(t.hasAttribute("ssr")){for(const[e,i]of Object.entries(_))a[e]=s(f,{value:i,name:e});if(t.dataset.preactSignals){const{signal:e}=await h(async()=>{const{signal:n}=await import("./signals.module.CcZnrQM0.js");return{signal:n}},__vite__mapDeps([0,1,2]));let i=JSON.parse(t.dataset.preactSignals);for(const[n,c]of Object.entries(i)){if(!o.has(c)){const g=e(a[n]);o.set(c,g)}a[n]=o.get(c)}}(d!=="only"?v:m)(s(l,a,r!=null?s(f,{value:r}):r),t),t.addEventListener("astro:unmount",()=>m(null,t),{once:!0})}}})();export{y as __tla,p as default};
