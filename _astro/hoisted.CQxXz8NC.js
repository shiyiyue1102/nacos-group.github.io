function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var be=Object.defineProperty;var Ae=(b,E,A)=>E in b?be(b,E,{enumerable:!0,configurable:!0,writable:!0,value:A}):b[E]=A;var h=(b,E,A)=>(Ae(b,typeof E!="symbol"?E+"":E,A),A);import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import{i as Le}from"./index.DImtQWSj.js";let Y,Se=(async()=>{window.dataLayer=window.dataLayer||[];function b(){dataLayer.push(arguments)}b("js",new Date),b("config","G-0YDFJ7LX7F"),function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?e3a5cec56ef8619cf9d7c2abebd509e3";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),function(t,e,n,o,s){t[o]=t[o]||[];var i=e.getElementsByTagName(n)[0],c=e.createElement(n);c.async=!0,c.id="beacon-aplus",c.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),c.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",c.crossorigin="anonymous",i.parentNode.insertBefore(c,i)}(window,document,"script","aplus_queue"),function(t){var e=t.createElement("script");e.type="text/javascript",e.async=!0,e.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",e.onload=function(){window.location.hostname==="nacos.io"&&(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"e7WQkK",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){t.getElementsByTagName("body")[0].appendChild(e)},800)}(document);let E,A,H;E="modulepreload",A=function(t){return"/"+t},H={},Y=function(t,e,n){let o=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");o=Promise.all(e.map(i=>{if(i=A(i),i in H)return;H[i]=!0;const c=i.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(n)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===i&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${m}`))return;const r=document.createElement("link");if(r.rel=c?"stylesheet":E,c||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),c)return new Promise((d,f)=>{r.addEventListener("load",d),r.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};class Q extends HTMLElement{constructor(){super();h(this,"ifscroll");h(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-gray-14/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-gray-14/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",Q);const z={appId:"1QV814950M",apiKey:"7445da3dec050d45d29f3fe93ed45af3",indexName:"nacos"};let q="";class Z extends HTMLElement{constructor(){super(),setTimeout(()=>{q&&q!==window.location.href&&this.initDocSearch(),q=window.location.href},0),window.addEventListener("DOMContentLoaded",this.initDocSearch)}async initDocSearch(){const{default:e}=await Y(()=>import("./index.cIJltFLe.js"),__vite__mapDeps([])),n={...z,container:"sl-doc-search"};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}e(n)}}customElements.define("sl-doc-search",Z);let ee=class extends HTMLElement{constructor(){super();h(this,"toggleLanguage",()=>{var e;/^(\/en).+/.test((e=window==null?void 0:window.location)==null?void 0:e.pathname)?window.location.pathname=window.location.pathname.replace("/en/","/"):window.location.pathname=window.location.pathname.replace("/","/en/")});const e=document.querySelectorAll("input[data-switch]")[0],n=document.querySelectorAll("div[data-switch]")[0];e.addEventListener("click",()=>{this.toggleLanguage()}),n.addEventListener("click",()=>{this.toggleLanguage()})}};customElements.define("toggle-content",ee);class te extends HTMLElement{constructor(){super();const e=this.querySelector("button");e.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,e))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e,n){e.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",te);const ne="astro:before-preparation",oe="astro:after-preparation",re="astro:before-swap",se="astro:after-swap",ie=t=>document.dispatchEvent(new Event(t));class O extends Event{constructor(n,o,s,i,c,m,r,d,f){super(n,o);h(this,"from");h(this,"to");h(this,"direction");h(this,"navigationType");h(this,"sourceElement");h(this,"info");h(this,"newDocument");this.from=s,this.to=i,this.direction=c,this.navigationType=m,this.sourceElement=r,this.info=d,this.newDocument=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ae extends O{constructor(n,o,s,i,c,m,r,d,f){super(ne,{cancelable:!0},n,o,s,i,c,m,r);h(this,"formData");h(this,"loader");this.formData=d,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ce extends O{constructor(n,o,s){super(re,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument);h(this,"direction");h(this,"viewTransition");h(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=s.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function le(t,e,n,o,s,i,c,m){const r=new ae(t,e,n,o,s,i,window.document,c,m);return document.dispatchEvent(r)&&(await r.loader(),r.defaultPrevented||(ie(oe),r.navigationType!=="traverse"&&C({scrollX,scrollY}))),r}async function de(t,e,n){const o=new ce(t,e,n);return document.dispatchEvent(o),o.swap(),o}const ue=history.pushState.bind(history),T=history.replaceState.bind(history),C=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},R=!!document.startViewTransition,j=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),X=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let P,S,D=!1,N;const _=t=>document.dispatchEvent(new Event(t)),U=()=>_("astro:page-load"),me=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{var n;let e=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;t.textContent=e},60)},L="data-astro-transition-persist",$="data-astro-transition",I="data-astro-transition-fallback";let k,x=0;history.state?(x=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):j()&&(T({index:x,scrollX,scrollY},""),history.scrollRestoration="manual");async function fe(t,e){var n;try{const o=await fetch(t,e),s=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return s!=="text/html"&&s!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:s}}catch{return null}}function V(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function he(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const s of e.attributes){if(s.name==="src"){const i=new Promise(c=>{o.onload=o.onerror=c});t=t.then(()=>i)}o.setAttribute(s.name,s.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const F=(t,e,n,o,s)=>{const i=X(e,t),c=document.title;document.title=o;let m=!1;if(t.href!==location.href&&!s)if(n.history==="replace"){const r=history.state;T({...n.state,index:r.index,scrollX:r.scrollX,scrollY:r.scrollY},"",t.href)}else ue({...n.state,index:++x,scrollX:0,scrollY:0},"",t.href);if(P=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),m=!0),s)scrollTo(s.scrollX,s.scrollY);else{if(t.hash){history.scrollRestoration="auto";const r=history.state;location.href=t.href,history.state||T(r,"")}else m||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=c};function pe(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${L}="${n.getAttribute(L)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(s=>{["load","error"].forEach(i=>o.addEventListener(i,s)),document.head.append(o)}))}return e}async function K(t,e,n,o){const s=(a,u)=>{const p=a.getAttribute(L),g=p&&u.head.querySelector(`[${L}="${p}"]`);if(g)return g;if(a.matches("link[rel=stylesheet]")){const v=a.getAttribute("href");return u.head.querySelector(`link[rel=stylesheet][href="${v}"]`)}return null},i=()=>{const a=document.activeElement;if(a!=null&&a.closest(`[${L}]`)){if(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement){const u=a.selectionStart,p=a.selectionEnd;return{activeElement:a,start:u,end:p}}return{activeElement:a}}else return{activeElement:null}},c=({activeElement:a,start:u,end:p})=>{a&&(a.focus(),(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&(a.selectionStart=u,a.selectionEnd=p))},m=a=>{const u=a.dataset.astroTransitionPersistProps;return u==null||u==="false"},r=a=>{const u=document.documentElement,p=[...u.attributes].filter(({name:l})=>(u.removeAttribute(l),l.startsWith("data-astro-")));[...a.newDocument.documentElement.attributes,...p].forEach(({name:l,value:w})=>u.setAttribute(l,w));for(const l of document.scripts)for(const w of a.newDocument.scripts)if(!w.hasAttribute("data-astro-rerun")&&(!l.src&&l.textContent===w.textContent||l.src&&l.type===w.type&&l.src===w.src)){w.dataset.astroExec="";break}for(const l of Array.from(document.head.children)){const w=s(l,a.newDocument);w?w.remove():l.remove()}document.head.append(...a.newDocument.head.children);const g=document.body,v=i();document.body.replaceWith(a.newDocument.body);for(const l of g.querySelectorAll(`[${L}]`)){const w=l.getAttribute(L),M=document.querySelector(`[${L}="${w}"]`);M&&(M.replaceWith(l),M.localName==="astro-island"&&m(l)&&(l.setAttribute("ssr",""),l.setAttribute("props",M.getAttribute("props"))))}c(v)};async function d(a){function u(v){const l=v.effect;return!l||!(l instanceof KeyframeEffect)||!l.target?!1:window.getComputedStyle(l.target,l.pseudoElement).animationIterationCount==="infinite"}const p=document.getAnimations();document.documentElement.setAttribute(I,a);const g=document.getAnimations().filter(v=>!p.includes(v)&&!u(v));return Promise.all(g.map(v=>v.finished))}if(!D)document.documentElement.setAttribute($,t.direction),o==="animate"&&await d("old");else throw new DOMException("Transition was skipped");const f=document.title,y=await de(t,S,r);F(y.to,y.from,e,f,n),_(se),o==="animate"&&!D&&d("new").then(()=>N())}async function W(t,e,n,o,s){if(!j()||location.origin!==n.origin){location.href=n.href;return}const i=s?"traverse":o.history==="replace"?"replace":"push";if(i!=="traverse"&&C({scrollX,scrollY}),X(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){F(n,e,o,document.title,s);return}const c=await le(e,n,t,i,o.sourceElement,o.info,o.formData,m);if(c.defaultPrevented){location.href=n.href;return}async function m(r){var u,p;const d=r.to.href,f={};if(r.formData){f.method="POST";const g=r.sourceElement instanceof HTMLFormElement?r.sourceElement:r.sourceElement instanceof HTMLElement&&"form"in r.sourceElement?r.sourceElement.form:(u=r.sourceElement)==null?void 0:u.closest("form");f.body=((p=g==null?void 0:g.attributes.getNamedItem("enctype"))==null?void 0:p.value)==="application/x-www-form-urlencoded"?new URLSearchParams(r.formData):r.formData}const y=await fe(d,f);if(y===null){r.preventDefault();return}if(y.redirected&&(r.to=new URL(y.redirected)),k!=null||(k=new DOMParser),r.newDocument=k.parseFromString(y.html,y.mediaType),r.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const a=pe(r.newDocument);a.length&&await Promise.all(a)}if(D=!1,R)S=document.startViewTransition(async()=>await K(c,o,s));else{const r=(async()=>{await new Promise(d=>setTimeout(d)),await K(c,o,s,V())})();S={updateCallbackDone:r,ready:r,finished:new Promise(d=>N=d),skipTransition:()=>{D=!0}}}S.ready.then(async()=>{await he(),U(),me()}),S.finished.then(()=>{document.documentElement.removeAttribute($),document.documentElement.removeAttribute(I)}),await S.ready}async function B(t,e){await W("forward",P,new URL(t,location.href),e!=null?e:{})}function ge(t){if(!j()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>x?"forward":"back";x=n,W(o,P,new URL(location.href),{},e)}const G=()=>{(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&C({scrollX,scrollY})};{if(R||V()!=="none")if(P=new URL(location.href),addEventListener("popstate",ge),addEventListener("load",U),"onscrollend"in window)addEventListener("scrollend",G);else{let t,e,n,o;const s=()=>{var i;if(o!==((i=history.state)==null?void 0:i.index)){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,G();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(s,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}function we(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function J(t){return t.dataset.astroReload!==void 0}(R||we()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,s=new URL(o,location.href).origin;J(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||s!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),B(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{var r,d,f;let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||J(e))return;const n=e,o=t.submitter,s=new FormData(n,o);let i=(d=(r=o==null?void 0:o.getAttribute("formaction"))!=null?r:n.action)!=null?d:location.pathname;const c=(f=o==null?void 0:o.getAttribute("formmethod"))!=null?f:n.method;if(c==="dialog"||location.origin!==new URL(i,location.href).origin)return;const m={sourceElement:o!=null?o:n};if(c==="get"){const y=new URLSearchParams(s),a=new URL(i);a.search=y.toString(),i=a.toString()}else m.formData=s;t.preventDefault(),B(i,m)}),Le({prefetchAll:!0}));class Ee extends HTMLElement{constructor(){super();const e=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(e==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):e==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(e){e.classList.remove("toggle-trigger-down"),e.classList.add("toggle-trigger-up")}toggleDown(e){e.classList.remove("toggle-trigger-up"),e.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",Ee);class ye extends HTMLElement{constructor(){super()}}customElements.define("docs-menu",ye);class ve extends HTMLElement{constructor(){super();const e=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{e.classList.remove("toggle-dropdown-active"),e.classList.add("toggle-dropdown-notactive")})}}customElements.define("community-menu",ve)})();export{Y as _,Se as __tla};