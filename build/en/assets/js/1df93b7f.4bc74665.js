/*! For license information please see 1df93b7f.4bc74665.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3237,799,3591,1519,5707,8276],{91262:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(67294),s=a(72389);function i(e){let{children:t,fallback:a}=e;return(0,s.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},35138:(e,t,a)=>{"use strict";a.d(t,{$Q:()=>m,N$:()=>o,zx:()=>c,$_:()=>E,iR:()=>u});var n=a(67294),s=a(94184),i=a.n(s),l=a(81876);const r={type:"primary",link:"",target:"_self",customStyle:{}},c=function(e){return void 0===e&&(e=r),n.createElement("a",{className:i()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,l.Rg)(e.link,e.language),style:e.customStyle},e.children)},o=e=>n.createElement("div",{className:i()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:a}=e,s=i()({bar:!0});return n.createElement("div",{className:s},n.createElement("div",{className:"bar-body"},n.createElement("img",{src:a,className:"front-img"}),n.createElement("div",{className:"bar-title"},n.createElement("span",null,t),n.createElement(o,{type:"light"})),n.createElement("img",{src:a,className:"back-img"})))};var d=a(73935);class g extends n.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,l.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,a=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&a&&(e=Math.floor(t/a)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:a}=this.state,s=n.Children.count(t),i=Math.ceil(s/a);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*i}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:a}=this.state,s=[],i=n.Children.count(e),l=Math.ceil(i/a);for(let n=0;n<l;n++)s.push(Array.from(e).slice(n*a,(n+1)*a));return n.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>n.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>n.createElement("div",{className:"slider-item",key:s},n.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*a+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:a}=this.state,s=n.Children.count(e),l=Math.ceil(s/a),r=[];for(let c=0;c<l;c++)r.push(n.createElement("span",{key:c,className:i()({"slider-control-item":!0,"slider-control-item-active":c===t}),onClick:this.changeScreen.bind(this,c)}));return n.createElement("div",{className:"slider-control"},r)};render(){return n.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const u=g;n.Component;var p=a(95999),h=a(52263);const f={vision:{title:(0,p.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,p.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,p.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,p.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,p.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quickstart/quick-start",target:""},{text:(0,p.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contribution/contributing",target:""}]},resources:{title:(0,p.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,p.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community",target:""},{text:(0,p.I)({id:"homepage.footerResourcesListText2",message:"\u4e91\u670d\u52a1 MSE"}),link:"https://cn.aliyun.com/product/aliware/mse?from_alibabacloud=&spm=nacos.io.topbar.0.0.0",target:"_blank"},{text:(0,p.I)({id:"homepage.footerResourcesListText3",message:"\u4e91\u670d\u52a1 EDAS"}),link:"https://cn.aliyun.com/product/edas?from_alibabacloud=&source_type=nacos_pc_20181219",target:"_blank"},{text:(0,p.I)({id:"homepage.footerResourcesListText4",message:"\u4e91\u670d\u52a1 AHAS"}),link:"https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},E=e=>{const{logo:t}=e,{i18n:a}=(0,h.Z)(),s=a.currentLocale;return n.createElement("footer",{className:"footer-container"},n.createElement("div",{className:"footer-body"},n.createElement("img",{style:{marginTop:"4px",maxWidth:"120px",height:"auto"},src:t}),n.createElement("div",{className:"cols-container"},n.createElement("div",{className:"col col-12"},n.createElement("h3",null,f.vision.title),n.createElement("p",null,f.vision.content)),n.createElement("div",{className:"col col-6"},n.createElement("dl",null,n.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>n.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&n.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&n.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),n.createElement("div",{className:"col col-6"},n.createElement("dl",null,n.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>n.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&n.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&n.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),n.createElement("div",{className:"copyright"},n.createElement("span",null,f.copyright))))}},97685:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(67294),s=a(95999),i=a(35138),l=a(91262),r=a(81876);const c={list:[{icon:"img/feature_easy_to_use.png",title:(0,s.I)({id:"homepage.featureListTitle1",message:"\u6613\u4e8e\u4f7f\u7528"}),content:[(0,s.I)({id:"homepage.featureListContent1",message:"\u52a8\u6001\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u53d1\u73b0\u548c\u52a8\u6001\u7684\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent2",message:"20\u591a\u79cd\u5f00\u7bb1\u5373\u7528\u7684\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u7684\u67b6\u6784\u7279\u6027"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent3",message:"\u57fa\u672c\u7b26\u5408\u751f\u4ea7\u8981\u6c42\u7684\u8f7b\u91cf\u7ea7\u6613\u7528\u63a7\u5236\u53f0"})]},{icon:"img/feature_adaptable.png",title:(0,s.I)({id:"homepage.featureListTitle2",message:"\u66f4\u9002\u5e94\u4e91\u67b6\u6784"}),content:[(0,s.I)({id:"homepage.featureListContent4",message:"\u65e0\u7f1d\u652f\u6301Kubernetes\u548cSpring Cloud"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent5",message:"\u5728\u4e3b\u6d41\u516c\u5171\u4e91\u4e0a\u66f4\u5bb9\u6613\u90e8\u7f72\u548c\u8fd0\u884c\uff08\u4f8b\u5982\u963f\u91cc\u4e91\u548cAWS\uff09"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent6",message:"\u591a\u79df\u6237\u548c\u591a\u73af\u5883\u652f\u6301"})]},{icon:"img/feature_production_grade.png",title:(0,s.I)({id:"homepage.featureListTitle3",message:"\u751f\u4ea7\u7b49\u7ea7"}),content:[(0,s.I)({id:"homepage.featureListContent7",message:"\u8131\u80ce\u4e8e\u5386\u7ecf\u963f\u91cc\u5df4\u5df410\u5e74\u751f\u4ea7\u9a8c\u8bc1\u7684\u5185\u90e8\u4ea7\u54c1"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent8",message:"\u652f\u6301\u5177\u6709\u6570\u767e\u4e07\u670d\u52a1\u7684\u5927\u89c4\u6a21\u573a\u666f"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent9",message:"\u5177\u5907\u4f01\u4e1a\u7ea7SLA\u7684\u5f00\u6e90\u4ea7\u54c1"})]},{icon:"img/feature_rich.png",title:(0,s.I)({id:"homepage.featureListTitle4",message:"\u4e30\u5bcc\u7684\u5e94\u7528\u573a\u666f"}),content:[(0,s.I)({id:"homepage.featureListContent10",message:"\u652f\u6301\u9650\u6d41\u3001\u5927\u4fc3\u9500\u9884\u6848\u548c\u5f02\u5730\u591a\u6d3b"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent11",message:"\u76f4\u63a5\u652f\u6301\u6216\u7a0d\u4f5c\u6269\u5c55\u5373\u53ef\u652f\u6301\u5927\u91cf\u6709\u7528\u7684\u4e92\u8054\u7f51\u5e94\u7528\u573a\u666f"}),n.createElement("br",null),(0,s.I)({id:"homepage.featureListContent12",message:"\u6d41\u91cf\u8c03\u5ea6\u548c\u670d\u52a1\u6cbb\u7406"})]}],title:(0,s.I)({id:"homepage.featureTitle",message:"\u7279\u8272\u529f\u80fd"})},o=e=>{const{feature:t}=e;return n.createElement(l.Z,null,(()=>n.createElement("li",{className:"feature-list-item"},n.createElement("img",{src:(0,r.Rg)(t.icon)}),n.createElement("div",null,n.createElement("h4",null,t.title),n.createElement("ul",null,t.content)))))},m=()=>n.createElement(l.Z,null,(()=>n.createElement("section",{className:"feature-section"},n.createElement("div",{className:"feature-section-body"},n.createElement("h3",null,c.title),n.createElement(i.N$,{type:"light"}),n.createElement("ul",{className:"feature-list"},c.list.map(((e,t)=>n.createElement(o,{feature:e,key:t}))))))))},32567:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(67294),s=a(95999),i=a(35138),l=a(91262),r=a(81876);const c={list:[{icon:"img/dynamic_configuration.png",title:(0,s.I)({id:"homepage.functionListTitle1",message:"\u52a8\u6001\u914d\u7f6e\u670d\u52a1"}),content:[(0,s.I)({id:"homepage.functionListContent1",message:"\u52a8\u6001\u914d\u7f6e\u670d\u52a1\u8ba9\u60a8\u80fd\u591f\u4ee5\u4e2d\u5fc3\u5316\u3001\u5916\u90e8\u5316\u548c\u52a8\u6001\u5316\u7684\u65b9\u5f0f\u7ba1\u7406\u6240\u6709\u73af\u5883\u7684\u914d\u7f6e\u3002\u52a8\u6001\u914d\u7f6e\u6d88\u9664\u4e86\u914d\u7f6e\u53d8\u66f4\u65f6\u91cd\u65b0\u90e8\u7f72\u5e94\u7528\u548c\u670d\u52a1\u7684\u9700\u8981\u3002\u914d\u7f6e\u4e2d\u5fc3\u5316\u7ba1\u7406\u8ba9\u5b9e\u73b0\u65e0\u72b6\u6001\u670d\u52a1\u66f4\u7b80\u5355\uff0c\u4e5f\u8ba9\u6309\u9700\u5f39\u6027\u6269\u5c55\u670d\u52a1\u66f4\u5bb9\u6613\u3002"})]},{icon:"img/service_discovery.png",title:(0,s.I)({id:"homepage.functionListTitle2",message:"\u670d\u52a1\u53d1\u73b0\u53ca\u7ba1\u7406"}),content:[(0,s.I)({id:"homepage.functionListContent2",message:"\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u5bf9\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u7684\uff08\u4f8b\u5982\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\uff09\u5e94\u7528\u67b6\u6784\u65b9\u5f0f\u975e\u5e38\u5173\u952e\u3002Nacos\u652f\u6301DNS-Based\u548cRPC-Based\uff08Dubbo\u3001gRPC\uff09\u6a21\u5f0f\u7684\u670d\u52a1\u53d1\u73b0\u3002Nacos\u4e5f\u63d0\u4f9b\u5b9e\u65f6\u5065\u5eb7\u68c0\u67e5\uff0c\u4ee5\u9632\u6b62\u5c06\u8bf7\u6c42\u53d1\u5f80\u4e0d\u5065\u5eb7\u7684\u4e3b\u673a\u6216\u670d\u52a1\u5b9e\u4f8b\u3002\u501f\u52a9Nacos\uff0c\u60a8\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u4e3a\u60a8\u7684\u670d\u52a1\u5b9e\u73b0\u65ad\u8def\u5668\u3002"})]},{icon:"img/dynamic_DNS.png",title:(0,s.I)({id:"homepage.functionListTitle3",message:"\u52a8\u6001DNS\u670d\u52a1"}),content:(0,s.I)({id:"homepage.functionListContent3",message:"\u901a\u8fc7\u652f\u6301\u6743\u91cd\u8def\u7531\uff0c\u52a8\u6001DNS\u670d\u52a1\u80fd\u8ba9\u60a8\u8f7b\u677e\u5b9e\u73b0\u4e2d\u95f4\u5c42\u8d1f\u8f7d\u5747\u8861\u3001\u66f4\u7075\u6d3b\u7684\u8def\u7531\u7b56\u7565\u3001\u6d41\u91cf\u63a7\u5236\u4ee5\u53ca\u7b80\u5355\u6570\u636e\u4e2d\u5fc3\u5185\u7f51\u7684\u7b80\u5355DNS\u89e3\u6790\u670d\u52a1\u3002\u52a8\u6001DNS\u670d\u52a1\u8fd8\u80fd\u8ba9\u60a8\u66f4\u5bb9\u6613\u5730\u5b9e\u73b0\u4ee5DNS\u534f\u8bae\u4e3a\u57fa\u7840\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u4ee5\u6d88\u9664\u8026\u5408\u5230\u5382\u5546\u79c1\u6709\u670d\u52a1\u53d1\u73b0API\u4e0a\u7684\u98ce\u9669\u3002"})}],title:(0,s.I)({id:"homepage.functionTitle",message:"\u529f\u80fd"})},o=e=>{const{func:t,imgFirst:a}=e;return a?n.createElement(l.Z,null,(()=>n.createElement("div",{className:"func-item"},n.createElement("div",{className:"col img"},n.createElement("img",{src:(0,r.Rg)(t.icon)})),n.createElement("div",{className:"col"},n.createElement("div",{className:"vertical-middle"},n.createElement("h4",null,t.title),n.createElement("p",null,t.content)))))):n.createElement(l.Z,null,(()=>n.createElement("div",{className:"func-item"},n.createElement("div",{className:"col"},n.createElement("div",{className:"vertical-middle"},n.createElement("h4",null,t.title),n.createElement("p",null,t.content))),n.createElement("div",{className:"col img"},n.createElement("img",{src:(0,r.Rg)(t.icon)})))))},m=()=>n.createElement(l.Z,null,(()=>n.createElement("section",{className:"function-section"},n.createElement("h3",null,c.title),n.createElement(i.N$,{type:"dark"}),n.createElement("div",null,c.list.map(((e,t)=>n.createElement(o,{func:e,key:t})))))))},37954:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(67294),s=a(95999),i=a(35138),l=a(91262);const r={title:(0,s.I)({id:"homepage.msemapTitle",message:"\u5fae\u670d\u52a1\u5168\u666f\u56fe"})},c=()=>n.createElement(l.Z,null,(()=>n.createElement("section",{className:"msemap-section"},n.createElement("h3",null,r.title),n.createElement(i.N$,{type:"dark"}),n.createElement("div",{id:"mse-arc-container"}))))},68726:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(67294),s=a(95999),i=a(35138),l=a(81876),r=a(91262);const c={brandName:"Nacos",briefIntroduction:(0,s.I)({id:"homepage.briefIntroduction",message:"\u4e00\u4e2a\u66f4\u6613\u4e8e\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u3002"}),buttons:[{text:(0,s.I)({id:"homepage.togithubText",message:"\u524d\u5f80 Github"}),link:"https://github.com/alibaba/nacos",type:"primary",target:"_blank"},{text:(0,s.I)({id:"homepage.bookText",message:"\u624b\u518c"}),link:"/docs/v2/what-is-nacos.html",type:"normal"}],versionNote:{text:(0,s.I)({id:"homepage.latest-version",message:"V2.3.0-BETA \u7248\u672c\u8bf4\u660e"}),link:"https://github.com/alibaba/nacos/releases/tag/2.3.0"},versionNote2:{text:(0,s.I)({id:"homepage.1x-version",message:"V1.4.6"}),link:"https://github.com/alibaba/nacos/releases/tag/1.4.6"},releaseDate:{text:(0,s.I)({id:"homepage.pubTime",message:"2023\u5e7410\u670819\u65e5\u53d1\u5e03"})}},o=e=>{let{language:t}=e;const[a,s]=n.useState({starCount:"",forkCount:""}),{starCount:o,forkCount:m}=a;return n.useEffect((()=>{fetch("https://api.github.com/repos/alibaba/nacos").then((e=>e.json())).then((e=>{s({starCount:`${e.stargazers_count}`,forkCount:`${e.forks_count}`})}))}),[]),n.createElement(r.Z,null,(()=>n.createElement("section",{className:"top-section",style:{background:`url(${(0,l.Rg)("img/black_dot.png")}) repeat`,backgroundSize:"14px 14px"}},n.createElement("div",{className:"vertical-middle"},n.createElement("img",{className:"product-logo",src:(0,l.Rg)("img/nacos.png")}),n.createElement("p",{className:"product-desc"},c.briefIntroduction),n.createElement("div",{className:"button-area"},c.buttons.map((e=>n.createElement(i.zx,{type:e.type,key:e.type,link:e.link,target:e.target,language:t},e.text)))),n.createElement("div",{className:"github-buttons"},n.createElement("a",{href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"star"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),n.createElement("span",{className:"count"},o))),n.createElement("a",{href:"https://github.com/alibaba/nacos/fork",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"fork"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),n.createElement("span",{className:"count"},m)))),n.createElement("div",{className:"version-note"},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,l.Rg)(c.versionNote.link)},c.versionNote.text),n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,l.Rg)(c.versionNote2.link)},c.versionNote2.text)),n.createElement("div",{className:"release-date"},c.releaseDate.text)),n.createElement("div",{className:"animation animation1"}),n.createElement("div",{className:"animation animation2"}),n.createElement("div",{className:"animation animation3"}),n.createElement("div",{className:"animation animation4"}),n.createElement("div",{className:"animation animation5"}))))}},67065:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(67294),s=a(95999),i=a(35138),l=a(91262);const r={desc:n.createElement("span",null,n.createElement(s.Z,{id:"homepage.userDesc1"},"\u8bf7\u5728")," ",n.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/alibaba/nacos/issues/273"},n.createElement(s.Z,{id:"homepage.userDesc3"},"\u8c01\u5728\u4f7f\u7528Nacos"))," ",n.createElement(s.Z,{id:"homepage.userDesc2"},"\u4e0a\u63d0\u4f9b\u4fe1\u606f\u6765\u5e2e\u52a9 Nacos \u505a\u7684\u66f4\u597d\u3002")),list:["https://img.alicdn.com/imgextra/i1/O1CN01K5uyIV20KePaQtBXy_!!6000000006831-2-tps-280-160.png","https://img.alicdn.com/imgextra/i1/O1CN01GqMYP21Xjj7xttIj0_!!6000000002960-0-tps-700-383.jpg","https://img.alicdn.com/imgextra/i2/O1CN01SBhHkj1taxCPSZ2kW_!!6000000005919-0-tps-665-500.jpg","https://img.alicdn.com/imgextra/i1/O1CN01C5PCJR1KfyzrAISdq_!!6000000001192-0-tps-960-640.jpg","https://img.alicdn.com/tfs/TB1aB62OBr0gK0jSZFnXXbRRXXa-280-160.jpg","https://img.alicdn.com/imgextra/i2/O1CN01Wf09Sq1KuBH4BYwtQ_!!6000000001223-2-tps-212-89.png","https://img.alicdn.com/imgextra/i3/O1CN01F1xNSS1Dc8MGh5R8y_!!6000000000236-2-tps-212-48.png","https://img.alicdn.com/imgextra/i2/O1CN01Cno0oZ1qDe5LBjIhP_!!6000000005462-0-tps-349-217.jpg","https://img.alicdn.com/imgextra/i2/O1CN01FV8mYI23bXruklb4N_!!6000000007274-2-tps-280-160.png","https://img.alicdn.com/imgextra/i2/O1CN01YdQ8Yg1zC7Px0SzXW_!!6000000006677-2-tps-280-160.png","https://img.alicdn.com/tfs/TB1JK_GczMZ7e4jSZFOXXX7epXa-280-160.png","https://img.alicdn.com/tfs/TB1ghT_atTfau8jSZFwXXX1mVXa-280-160.jpg","https://img.alicdn.com/imgextra/i4/O1CN010NYWmb29l3n6oAwnE_!!6000000008107-2-tps-280-160.png","https://img.alicdn.com/imgextra/i4/O1CN01CrgaPR1Jn1T7LVfFy_!!6000000001072-0-tps-554-318.jpg","https://img.alicdn.com/tfs/TB1Xd4IOUY1gK0jSZFMXXaWcVXa-280-160.png","https://img.alicdn.com/tfs/TB1qhDSOrr1gK0jSZFDXXb9yVXa-280-160.png","https://img.alicdn.com/imgextra/i4/O1CN01GcDWkS1LjTdKVssP1_!!6000000001335-2-tps-280-160.png","https://img.alicdn.com/imgextra/i3/O1CN01yE3Vwi1MBPnBsenRG_!!6000000001396-2-tps-280-160.png","https://img.alicdn.com/imgextra/i3/O1CN019bHmh11kG2ZTgWvzP_!!6000000004655-2-tps-280-160.png","https://img.alicdn.com/imgextra/i3/O1CN017aL1Rk1NxKqnXFeDM_!!6000000001636-2-tps-735-406.png","https://img.alicdn.com/imgextra/i1/O1CN01CTgp0F1WFfW6nv8aV_!!6000000002759-2-tps-1660-712.png"],titleBefore:(0,s.I)({id:"homepage.userTitleBefore",message:"\u8c01\u5728\u4f7f\u7528"}),titleAfter:(0,s.I)({id:"homepage.userTitleAfter",message:" Nacos"})},c=()=>n.createElement(l.Z,null,(()=>n.createElement("section",{className:"users-section"},n.createElement("h3",null,r.titleBefore,n.createElement("span",null,r.titleAfter)),n.createElement(i.N$,{type:"dark"}),n.createElement("p",null,r.desc),n.createElement("div",{className:"users"},r.list.map(((e,t)=>n.createElement("div",{className:"user-item",key:t},n.createElement("img",{src:e,rel:"noopener noreferrer"}))))))))},69754:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(67294),s=a(52263),i=a(87340),l=a(68726),r=a(37954),c=a(97685),o=a(67065),m=a(35138),d=a(32567),g=a(81876);function u(){const{siteConfig:e,i18n:t}=(0,s.Z)(),a=t.currentLocale,u=n.useRef(null),p=(e,t)=>{if(e)if(t){e.style.backgroundColor="transparent",e.style.boxShadow="unset";const t=e?.childNodes[0]?.childNodes[1]?.childNodes;t?.forEach(((e,t)=>{2===t||8===t?e.childNodes[0].className="navbar__link text-white":"navbar__item navbar__link"===e?.className&&(e.className="navbar__item navbar__link text-white")})),e.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].src="img/nacos_white.png"}else{e.style.backgroundColor="#fff",e.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px";const t=e?.childNodes[0]?.childNodes[1]?.childNodes;t?.forEach(((e,t)=>{2===t||8===t?e.childNodes[0].className="navbar__link":"navbar__item navbar__link text-white"===e?.className&&(e.className="navbar__item navbar__link")})),e.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].src="img/nacos_colorful.png"}};return n.useEffect((()=>{u.current=document.getElementsByClassName("navbar")[0],u.current.style.position="fixed",u.current.style.width="100%",p(u.current,!0);window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;p(u.current,e<150)}))}),[]),n.createElement(i.Z,{title:"Nacos",description:"Nacos official site"},n.createElement("div",{ref:u,className:"home-page"},n.createElement(l.default,{language:a}),n.createElement(d.default,null),n.createElement(r.default,null),n.createElement(c.default,null),n.createElement(o.default,null),n.createElement(m.$_,{logo:(0,g.Rg)("https://img.alicdn.com/imgextra/i3/O1CN01rPQVls1KsLgvPZ6tf_!!6000000001219-2-tps-204-40.png")})))}},81876:(e,t,a)=>{"use strict";a.d(t,{P2:()=>n,Rg:()=>s});const n=(e,t)=>{let a=null;return function(){for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];const l=this;clearTimeout(a),a=setTimeout((()=>{e.apply(l,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=s.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()}}]);