import"./hoisted.UyCPU4nv.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.CTbVEFV3.js";import"./preload-helper.BiBI96sQ.js";import"./consts.DNMxLmKy.js";class o extends HTMLElement{constructor(){super()}}customElements.define("home-introduce",o);class c extends HTMLElement{constructor(){super()}}customElements.define("choose-reason",c);class r extends HTMLElement{constructor(){super()}}customElements.define("nacos-ebook",r);class u extends HTMLElement{constructor(){super()}}customElements.define("explore-features",u);class a extends HTMLElement{constructor(){super()}}customElements.define("use-companies",a);class d extends HTMLElement{constructor(){super(),this.currentInputid="c0",this.flag=!0}connectedCallback(){var t=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(s){t.selectedLabel(s)})}selectedLabel(t){var s=this,e=t.target.getAttribute("input-id");if(this.flag&&e&&e!==this.currentInputid){this.currentInputid=e,this.flag=!1,setTimeout(function(){s.flag=!0},200);var i=this.querySelector("input[type=radio]#"+e);i&&!i.checked&&(i.checked=!0)}}}customElements.define("card-solution",d);class h extends HTMLElement{constructor(){super(),this.currentId="i0",this.flagState=!0}toggleFullScreen(t){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement?t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}connectedCallback(){var t=this;this.cardSolution=this.querySelector(".media-container"),this.videoPlayButtons=this.querySelector(".video-play-bt");const s=this.querySelectorAll("video");t.setInitialCheckedState(),this.cardSolution&&this.cardSolution.addEventListener("click",function(e){t.selectedLabel(e)}),s.forEach(e=>{e.addEventListener("play",i=>this.onPlay(i)),e.addEventListener("pause",i=>this.onPause(i))}),this.cardSolution.addEventListener("click",e=>{e.target.closest(".video-play-bt")?(e.stopPropagation(),this.toggleVideoPlay(e)):e.target.tagName==="LABEL"&&this.selectedLabel(e)}),this.cardSolution.addEventListener("click",e=>{if(e.target.closest(".fullscreen-btn")){e.stopPropagation();const i=e.target.closest("[video-id]").getAttribute("video-id"),l=this.querySelector(`#${i}`);l&&this.toggleFullScreen(l)}})}setInitialCheckedState(){let t=this.querySelector("input[type=radio]#i0");t&&(t.checked=!0)}toggleVideoPlay(t){const s=t.target.closest("[video-id]").getAttribute("video-id"),e=this.querySelector(`#${s}`);e&&(e.paused?(this.pauseOtherVideos(s),e.play(),this.onPlay(t)):(e.pause(),this.onPause(t)))}pauseOtherVideos(t){this.querySelectorAll("video").forEach(s=>{s.id!==t&&(s.pause(),this.onPause({target:s}))})}onPlay(t){const s=t.target.id,e=this.querySelector(`[video-id='${s}'] .play-icon`),i=this.querySelector(`[video-id='${s}'] .pause-icon`);e&&i&&(e.style.display="none",i.style.display="inline")}onPause(t){const s=t.target.id,e=this.querySelector(`[video-id='${s}'] .play-icon`),i=this.querySelector(`[video-id='${s}'] .pause-icon`);e&&i&&(e.style.display="inline",i.style.display="none")}selectedLabel(t){var s=this,e=t.target.getAttribute("input-id");if(this.flagState&&e&&e!==this.currentId){this.currentId=e,this.flagState=!1,setTimeout(function(){s.flagState=!0},200);var i=this.querySelector("input[type=radio]#"+e);i&&!i.checked&&(i.checked=!0)}}}customElements.define("card-player",h);
