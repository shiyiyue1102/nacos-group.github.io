const __vite__fileDeps=["_astro/ui-core.Br10NvTk.js","_astro/preload-helper.BiBI96sQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var I=(i,l,m)=>{if(!l.has(i))throw TypeError("Cannot "+m)};var x=(i,l,m)=>(I(i,l,"read from private field"),m?m.call(i):l.get(i)),y=(i,l,m)=>{if(l.has(i))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(i):l.set(i,m)};var E=(i,l,m)=>(I(i,l,"access private method"),m);import{__tla as V}from"./hoisted.M3UbOn5r.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import{_ as J}from"./preload-helper.BiBI96sQ.js";import{s as K}from"./sendFetch.vEaXT8pP.js";import"./index.CTbVEFV3.js";import"./index.BWYDb4aq.js";let j=Promise.all([(()=>{try{return V}catch{}})()]).then(async()=>{var S,b,_,k,C,w,M,q,A,T,P;const i=Symbol("key");let l=class extends HTMLElement{constructor(){super(),this[i]="starlight-theme",this.onThemeChange("light")}parseTheme(a){return a==="auto"||a==="dark"||a==="light"?a:"auto"}getPreferredColorScheme(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}onThemeChange(a){document.documentElement.dataset.theme=a==="auto"?this.getPreferredColorScheme():a,console.log("00000",document.documentElement.dataset.theme),this.storeTheme(a)}storeTheme(a){typeof localStorage<"u"&&(a==="light"||a==="dark"?localStorage.setItem(this[i],a):localStorage.removeItem(this[i]))}loadTheme(){const a=typeof localStorage<"u"&&localStorage.getItem(this[i]);return this.parseTheme(a)}};customElements.define("starlight-theme-select-nacos",l),customElements.define("blog-theme",l);class m extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",m);class R extends HTMLElement{constructor(){super();const t=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),h=this.querySelector(".dialog-frame"),u=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!h.contains(o.target))&&d()},r=o=>{var n;s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),(n=this.querySelector("input"))==null||n.focus(),o==null||o.stopPropagation(),window.addEventListener("click",u)},d=()=>s.close();t.addEventListener("click",r),t.disabled=!1,e.addEventListener("click",d),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",u)}),window.addEventListener("keydown",o=>{const n=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);o.metaKey===!0&&o.key==="k"?(s.open?d():r(),o.preventDefault()):o.key==="/"&&!s.open&&!n&&(r(),o.preventDefault())});let f={};try{f=JSON.parse(this.dataset.translations||"{}")}catch{}window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(o=>setTimeout(o,1)))(async()=>{const{PagefindUI:o}=await J(()=>import("./ui-core.Br10NvTk.js").then(async n=>(await n.__tla,n)),__vite__mapDeps([0,1]));new o({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:f,showSubResults:!0})})})}}customElements.define("site-search",R);class $ extends HTMLElement{constructor(){super();y(this,b);y(this,k);y(this,w);y(this,q);y(this,T);y(this,S,"starlight-theme");E(this,w,M).call(this,E(this,T,P).call(this));const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&E(this,w,M).call(this,E(this,b,_).call(this,s.currentTarget.value))})}}S=new WeakMap,b=new WeakSet,_=function(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"},k=new WeakSet,C=function(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"},w=new WeakSet,M=function(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?E(this,k,C).call(this):e,E(this,q,A).call(this,e)},q=new WeakSet,A=function(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(x(this,S),e):localStorage.removeItem(x(this,S)))},T=new WeakSet,P=function(){const e=typeof localStorage<"u"&&localStorage.getItem(x(this,S));return E(this,b,_).call(this,e)},customElements.define("starlight-theme-select",$);class O extends HTMLElement{constructor(){super();const t=this.querySelector("select");t&&t.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=e.currentTarget.value)})}}customElements.define("starlight-lang-select",O);const D="_top";class H extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],e=n=>{if(n instanceof HTMLHeadingElement){if(n.id===D)return!0;const g=n.tagName[1];if(g){const p=parseInt(g,10);if(p>=this.minH&&p<=this.maxH)return!0}}return!1},s=n=>{if(!n)return null;const g=n;for(;n;){if(e(n))return n;for(n=n.previousElementSibling;n!=null&&n.lastElementChild;)n=n.lastElementChild;const p=s(n);if(p)return p}return s(g.parentElement)},h=n=>{for(const{isIntersecting:g,target:p}of n){if(!g)continue;const L=s(p);if(!L)continue;const c=t.find(v=>v.hash==="#"+encodeURIComponent(L.id));if(c){this.current=c;break}}},u=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let r;const d=()=>{r&&r.disconnect(),r=new IntersectionObserver(h,{rootMargin:this.getRootMargin()}),u.forEach(n=>r.observe(n))};d();const f=window.requestIdleCallback||(n=>setTimeout(n,1));let o;window.addEventListener("resize",()=>{r&&r.disconnect(),clearTimeout(o),o=setTimeout(()=>f(d),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var r,d;const t=((r=document.querySelector("header"))==null?void 0:r.getBoundingClientRect().height)||0,e=((d=this.querySelector("summary"))==null?void 0:d.getBoundingClientRect().height)||0,s=t+e+32,h=s+24,u=document.documentElement.clientHeight;return`-${s}px 0% ${h-u}px`}}customElements.define("starlight-toc",H);class N extends H{set current(t){super.current=t;const e=this.querySelector(".display-current");e&&(e.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const e=()=>{t.open=!1};t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",e)}),window.addEventListener("click",s=>{t.contains(s.target)||e()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&t.open){const h=t.contains(document.activeElement);if(e(),h){const u=t.querySelector("summary");u&&u.focus()}}})}}customElements.define("mobile-starlight-toc",N);class U extends HTMLElement{constructor(){super();const t=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),s=this.querySelector('button[type="submit"]'),h=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),r=this.querySelector("form"),d=this.querySelector("div.success-pane"),f=this.querySelector("div.err-pane"),o=c=>{r.hidden=c,d.hidden=!c,c&&d.focus()},n=c=>{r.hidden=c,f.hidden=!c,c&&f.focus()},g=c=>{u.contains(c.target)||L()},p=c=>{var v;o(!1),n(!1),h.showModal(),(v=r.querySelector("input:checked"))==null||v.focus(),c.stopPropagation(),window.addEventListener("click",g)},L=()=>{h.close(),window.removeEventListener("click",g)};t.addEventListener("click",p),e.addEventListener("click",L),r.addEventListener("submit",async c=>{c.preventDefault(),s.disabled=!0;const v=r.type.value,z=r.description.value,B=r.phone.value;(await K(`https://goat.cn-hangzhou.log.aliyuncs.com/logstores/feedback/track?APIVersion=0.6.0&type=${v}&description=${z}&phone=${B}&url=${location.href}`)).errorCode?n(!0):o(!0),s.disabled=!1,r.reset()}),t.disabled=!1}}customElements.define("feedback-form",U)});export{j as __tla};