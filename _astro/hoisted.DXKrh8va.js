const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.DnQi6Uae.js","_astro/preload-helper.BiBI96sQ.js"])))=>i.map(i=>d[i]);
var x=a=>{throw TypeError(a)};var _=(a,i,d)=>i.has(a)||x("Cannot "+d);var S=(a,i,d)=>(_(a,i,"read from private field"),d?d.call(a):i.get(a)),b=(a,i,d)=>i.has(a)?x("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,d);var g=(a,i,d)=>(_(a,i,"access private method"),d);import{__tla as U}from"./hoisted.D5-ClOW8.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import{_ as D}from"./preload-helper.BiBI96sQ.js";import"./index.CTbVEFV3.js";import"./consts.DNMxLmKy.js";let N=Promise.all([(()=>{try{return U}catch{}})()]).then(async()=>{var f,c,v,q,w,I,H;const a=Symbol("key");let i=class extends HTMLElement{constructor(){super(),this[a]="starlight-theme",this.onThemeChange("light")}parseTheme(s){return s==="auto"||s==="dark"||s==="light"?s:"auto"}getPreferredColorScheme(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}onThemeChange(s){document.documentElement.dataset.theme=s==="auto"?this.getPreferredColorScheme():s,console.log("00000",document.documentElement.dataset.theme),this.storeTheme(s)}storeTheme(s){typeof localStorage<"u"&&(s==="light"||s==="dark"?localStorage.setItem(this[a],s):localStorage.removeItem(this[a]))}loadTheme(){const s=typeof localStorage<"u"&&localStorage.getItem(this[a]);return this.parseTheme(s)}};customElements.define("starlight-theme-select-nacos",i),customElements.define("blog-theme",i);class d extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",d);class M extends HTMLElement{constructor(){super();const t=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),p=this.querySelector(".dialog-frame"),u=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!p.contains(o.target))&&m()},l=o=>{var n;r.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),(n=this.querySelector("input"))==null||n.focus(),o==null||o.stopPropagation(),window.addEventListener("click",u)},m=()=>r.close();t.addEventListener("click",l),t.disabled=!1,e.addEventListener("click",m),r.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",u)}),window.addEventListener("keydown",o=>{const n=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);o.metaKey===!0&&o.key==="k"?(r.open?m():l(),o.preventDefault()):o.key==="/"&&!r.open&&!n&&(l(),o.preventDefault())});let y={};try{y=JSON.parse(this.dataset.translations||"{}")}catch{}window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(o=>setTimeout(o,1)))(async()=>{const{PagefindUI:o}=await D(async()=>{const{PagefindUI:n}=await import("./ui-core.DnQi6Uae.js").then(async h=>(await h.__tla,h));return{PagefindUI:n}},__vite__mapDeps([0,1]));new o({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:y,showSubResults:!0})})})}}customElements.define("site-search",M);class C extends HTMLElement{constructor(){super();b(this,c);b(this,f,"starlight-theme");g(this,c,w).call(this,g(this,c,H).call(this));const e=this.querySelector("select");e&&e.addEventListener("change",r=>{r.currentTarget instanceof HTMLSelectElement&&g(this,c,w).call(this,g(this,c,v).call(this,r.currentTarget.value))})}}f=new WeakMap,c=new WeakSet,v=function(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"},q=function(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"},w=function(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?g(this,c,q).call(this):e,g(this,c,I).call(this,e)},I=function(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(S(this,f),e):localStorage.removeItem(S(this,f)))},H=function(){const e=typeof localStorage<"u"&&localStorage.getItem(S(this,f));return g(this,c,v).call(this,e)},customElements.define("starlight-theme-select",C);class A extends HTMLElement{constructor(){super();const t=this.querySelector("select");t&&t.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=e.currentTarget.value)})}}customElements.define("starlight-lang-select",A);const P="_top";class L extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],e=n=>{if(n instanceof HTMLHeadingElement){if(n.id===P)return!0;const h=n.tagName[1];if(h){const E=parseInt(h,10);if(E>=this.minH&&E<=this.maxH)return!0}}return!1},r=n=>{if(!n)return null;const h=n;for(;n;){if(e(n))return n;for(n=n.previousElementSibling;n!=null&&n.lastElementChild;)n=n.lastElementChild;const E=r(n);if(E)return E}return r(h.parentElement)},p=n=>{for(const{isIntersecting:h,target:E}of n){if(!h)continue;const T=r(E);if(!T)continue;const k=t.find(O=>O.hash==="#"+encodeURIComponent(T.id));if(k){this.current=k;break}}},u=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let l;const m=()=>{l&&l.disconnect(),l=new IntersectionObserver(p,{rootMargin:this.getRootMargin()}),u.forEach(n=>l.observe(n))};m();const y=window.requestIdleCallback||(n=>setTimeout(n,1));let o;window.addEventListener("resize",()=>{l&&l.disconnect(),clearTimeout(o),o=setTimeout(()=>y(m),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var l,m;const t=((l=document.querySelector("header"))==null?void 0:l.getBoundingClientRect().height)||0,e=((m=this.querySelector("summary"))==null?void 0:m.getBoundingClientRect().height)||0,r=t+e+32,p=r+24,u=document.documentElement.clientHeight;return`-${r}px 0% ${p-u}px`}}customElements.define("starlight-toc",L);class R extends L{set current(t){super.current=t;const e=this.querySelector(".display-current");e&&(e.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const e=()=>{t.open=!1};t.querySelectorAll("a").forEach(r=>{r.addEventListener("click",e)}),window.addEventListener("click",r=>{t.contains(r.target)||e()}),window.addEventListener("keydown",r=>{if(r.key==="Escape"&&t.open){const p=t.contains(document.activeElement);if(e(),p){const u=t.querySelector("summary");u&&u.focus()}}})}}customElements.define("mobile-starlight-toc",R)});export{N as __tla};
