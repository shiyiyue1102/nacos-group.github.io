import"./hoisted.CVJg6k9j.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.CTbVEFV3.js";import"./preload-helper.BiBI96sQ.js";import"./consts.DNMxLmKy.js";class l extends HTMLElement{constructor(){var t;super();const e=/^(\/en).+/,s=document.querySelector(".earth-background-title");e.test((t=window==null?void 0:window.location)==null?void 0:t.pathname)?s&&(s.classList.remove("text-[23px]"),s.classList.add("text-lg")):s&&(s.classList.remove("text-lg"),s.classList.add("text-[23px]"))}}customElements.define("earth-background",l);class c extends HTMLElement{constructor(){super()}}customElements.define("choose-reason",c);class r extends HTMLElement{constructor(){super()}}customElements.define("nacos-ebook",r);class a extends HTMLElement{constructor(){super()}}customElements.define("explore-features",a);class u extends HTMLElement{constructor(){super()}}customElements.define("use-companies",u);class d extends HTMLElement{constructor(){super(),this.currentInputid="c0",this.flag=!0}connectedCallback(){var e=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(s){e.selectedLabel(s)})}selectedLabel(e){var s=this,t=e.target.getAttribute("input-id");if(this.flag&&t&&t!==this.currentInputid){this.currentInputid=t,this.flag=!1,setTimeout(function(){s.flag=!0},200);var n=this.querySelector("input[type=radio]#"+t);n&&!n.checked&&(n.checked=!0)}}}customElements.define("card-solution",d),document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".lazy-video");if("IntersectionObserver"in window){let e=new IntersectionObserver((s,t)=>{s.forEach(n=>{if(n.isIntersecting){const o=n.target;o.src=o.getAttribute("data-src"),o.load(),o.classList.remove("lazy-video"),e.unobserve(o)}})});i.forEach(s=>{e.observe(s)})}else i.forEach(e=>{e.src=e.getAttribute("data-src"),e.load()})});class h extends HTMLElement{constructor(){super(),this.currentId="i0",this.flagState=!0}toggleFullScreen(e){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}connectedCallback(){var e=this;this.cardSolution=this.querySelector(".media-container"),this.videoPlayButtons=this.querySelector(".video-play-bt");const s=this.querySelectorAll("video");e.setInitialCheckedState(),this.cardSolution&&this.cardSolution.addEventListener("click",function(t){e.selectedLabel(t)}),s.forEach(t=>{t.addEventListener("play",n=>this.onPlay(n)),t.addEventListener("pause",n=>this.onPause(n))}),this.cardSolution.addEventListener("click",t=>{t.target.closest(".video-play-bt")?(t.stopPropagation(),this.toggleVideoPlay(t)):t.target.tagName==="LABEL"&&this.selectedLabel(t)}),this.cardSolution.addEventListener("click",t=>{if(t.target.closest(".fullscreen-btn")){t.stopPropagation();const n=t.target.closest("[video-id]").getAttribute("video-id"),o=this.querySelector(`#${n}`);o&&this.toggleFullScreen(o)}})}setInitialCheckedState(){let e=this.querySelector("input[type=radio]#i0");e&&(e.checked=!0)}toggleVideoPlay(e){const s=e.target.closest("[video-id]").getAttribute("video-id"),t=this.querySelector(`#${s}`);t&&(t.paused?(this.pauseOtherVideos(s),t.play(),this.onPlay(e)):(t.pause(),this.onPause(e)))}pauseOtherVideos(e){this.querySelectorAll("video").forEach(s=>{s.id!==e&&(s.pause(),this.onPause({target:s}))})}onPlay(e){const s=e.target.id,t=this.querySelector(`[video-id='${s}'] .play-icon`),n=this.querySelector(`[video-id='${s}'] .pause-icon`);t&&n&&(t.style.display="none",n.style.display="inline")}onPause(e){const s=e.target.id,t=this.querySelector(`[video-id='${s}'] .play-icon`),n=this.querySelector(`[video-id='${s}'] .pause-icon`);t&&n&&(t.style.display="inline",n.style.display="none")}selectedLabel(e){var s=this,t=e.target.getAttribute("input-id");if(this.flagState&&t&&t!==this.currentId){this.currentId=t,this.flagState=!1,setTimeout(function(){s.flagState=!0},200);var n=this.querySelector("input[type=radio]#"+t);n&&!n.checked&&(n.checked=!0)}}}customElements.define("card-player",h);