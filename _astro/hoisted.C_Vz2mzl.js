import"./hoisted.CHOC_zEJ.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.DImtQWSj.js";import"./preload-helper.BiBI96sQ.js";class c extends HTMLElement{constructor(){super()}}customElements.define("home-introduce",c);class r extends HTMLElement{constructor(){super()}}customElements.define("choose-reason",r);class i extends HTMLElement{constructor(){super()}}customElements.define("nacos-ebook",i);class u extends HTMLElement{constructor(){super()}}customElements.define("explore-features",u);class l extends HTMLElement{constructor(){super()}}customElements.define("use-companies",l);class a extends HTMLElement{constructor(){super(),this.currentInputid="c0",this.flag=!0}connectedCallback(){var s=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(n){s.selectedLabel(n)})}selectedLabel(s){var n=this,t=s.target.getAttribute("input-id");if(this.flag&&t&&t!==this.currentInputid){this.currentInputid=t,this.flag=!1,setTimeout(function(){n.flag=!0},200);var o=this.querySelector("input[type=radio]#"+t);o&&!o.checked&&(o.checked=!0)}}}customElements.define("card-solution",a);