import{l as h,b as K,_ as Ct,k as xt,H as dt,G as an}from"./preact.module.DjWlRcrZ.js";import{P as cn,F as W,x as pt,V as ln,_ as fn,A as sn,p as Dt}from"./hooks.module.Due7yweL.js";var _n=0;function dn(t,e,n,o,i,r){e||(e={});var u,a,f=e;if("ref"in f)for(a in f={},e)a=="ref"?u=e[a]:f[a]=e[a];var c={type:t,props:f,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--_n,__i:-1,__u:0,__source:i,__self:r};if(typeof t=="function"&&(u=t.defaultProps))for(a in u)f[a]===void 0&&(f[a]=u[a]);return h.vnode&&h.vnode(c),c}function pn(t,e){for(var n in e)t[n]=e[n];return t}function It(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var o in e)if(o!=="__source"&&t[o]!==e[o])return!0;return!1}function Lt(t,e){this.props=t,this.context=e}(Lt.prototype=new K).isPureReactComponent=!0,Lt.prototype.shouldComponentUpdate=function(t,e){return It(this.props,t)||It(this.state,e)};var At=h.__b;h.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),At&&At(t)};var vn=h.__e;h.__e=function(t,e,n,o){if(t.then){for(var i,r=e;r=r.__;)if((i=r.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}vn(t,e,n,o)};var Nt=h.unmount;function Ft(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),t.__c.__H=null),(t=pn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(o){return Ft(o,e,n)})),t}function Ut(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(o){return Ut(o,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function vt(){this.__u=0,this.t=null,this.__b=null}function Mt(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function et(){this.u=null,this.o=null}h.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Nt&&Nt(t)},(vt.prototype=new K).__c=function(t,e){var n=e.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var i=Mt(o.__v),r=!1,u=function(){r||(r=!0,n.__R=null,i?i(a):a())};n.__R=u;var a=function(){if(!--o.__u){if(o.state.__a){var f=o.state.__a;o.__v.__k[0]=Ut(f,f.__c.__P,f.__c.__O)}var c;for(o.setState({__a:o.__b=null});c=o.t.pop();)c.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),t.then(u,u)},vt.prototype.componentWillUnmount=function(){this.t=[]},vt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Ft(this.__b,n,o.__O=o.__P)}this.__b=null}var i=e.__a&&Ct(xt,null,t.fallback);return i&&(i.__u&=-33),[Ct(xt,null,e.__a?null:t.children),i]};var Wt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(et.prototype=new K).__a=function(t){var e=this,n=Mt(e.__v),o=e.o.get(t);return o[0]++,function(i){var r=function(){e.props.revealOrder?(o.push(i),Wt(e,t,o)):i()};n?n(r):r()}},et.prototype.render=function(t){this.u=null,this.o=new Map;var e=dt(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},et.prototype.componentDidUpdate=et.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Wt(t,n,e)})};var hn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,yn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,bn=/[A-Z0-9]/g,mn=typeof document<"u",wn=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};K.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(K.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ht=h.event;function kn(){}function On(){return this.cancelBubble}function En(){return this.defaultPrevented}h.event=function(t){return Ht&&(t=Ht(t)),t.persist=kn,t.isPropagationStopped=On,t.isDefaultPrevented=En,t.nativeEvent=t};var Pn={enumerable:!1,configurable:!0,get:function(){return this.class}},jt=h.vnode;h.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,o=e.type,i={};for(var r in n){var u=n[r];if(!(r==="value"&&"defaultValue"in n&&u==null||mn&&r==="children"&&o==="noscript"||r==="class"||r==="className")){var a=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&u===!0?u="":a==="translate"&&u==="no"?u=!1:a==="ondoubleclick"?r="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||wn(n.type)?a==="onfocus"?r="onfocusin":a==="onblur"?r="onfocusout":gn.test(r)?r=a:o.indexOf("-")===-1&&yn.test(r)?r=r.replace(bn,"-$&").toLowerCase():u===null&&(u=void 0):a=r="oninput",a==="oninput"&&i[r=a]&&(r="oninputCapture"),i[r]=u}}o=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=dt(n.children).forEach(function(f){f.props.selected=i.value.indexOf(f.props.value)!=-1})),o=="select"&&i.defaultValue!=null&&(i.value=dt(n.children).forEach(function(f){f.props.selected=i.multiple?i.defaultValue.indexOf(f.props.value)!=-1:i.defaultValue==f.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Pn)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=hn,jt&&jt(t)};var $t=h.__r;h.__r=function(t){$t&&$t(t),t.__c};var qt=h.diffed;h.diffed=function(t){qt&&qt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function zt(t,e,n,o){function i(r){return r instanceof n?r:new n(function(u){u(r)})}return new(n||(n=Promise))(function(r,u){function a(s){try{c(o.next(s))}catch(d){u(d)}}function f(s){try{c(o.throw(s))}catch(d){u(d)}}function c(s){s.done?r(s.value):i(s.value).then(a,f)}c((o=o.apply(t,[])).next())})}function Bt(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(c){return function(s){return f([c,s])}}function f(c){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(s){c=[6,s],i=0}finally{o=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var V=function(){},b=V(),rt=Object,g=function(t){return t===b},L=function(t){return typeof t=="function"},A=function(t,e){return rt.assign({},t,e)},ht="undefined",yt=function(){return typeof window!=ht},Rn=function(){return typeof document!=ht},Sn=function(){return yt()&&typeof window.requestAnimationFrame!=ht},ot=new WeakMap,Vn=0,Q=function(t){var e=typeof t,n=t&&t.constructor,o=n==Date,i,r;if(rt(t)===t&&!o&&n!=RegExp){if(i=ot.get(t),i)return i;if(i=++Vn+"~",ot.set(t,i),n==Array){for(i="@",r=0;r<t.length;r++)i+=Q(t[r])+",";ot.set(t,i)}if(n==rt){i="#";for(var u=rt.keys(t).sort();!g(r=u.pop());)g(t[r])||(i+=r+":"+Q(t[r])+",");ot.set(t,i)}}else i=o?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return i},gt=!0,Tn=function(){return gt},Jt=yt(),bt=Rn(),mt=Jt&&window.addEventListener?window.addEventListener.bind(window):V,Cn=bt?document.addEventListener.bind(document):V,wt=Jt&&window.removeEventListener?window.removeEventListener.bind(window):V,xn=bt?document.removeEventListener.bind(document):V,Dn=function(){var t=bt&&document.visibilityState;return g(t)||t!=="hidden"},In=function(t){return Cn("visibilitychange",t),mt("focus",t),function(){xn("visibilitychange",t),wt("focus",t)}},Ln=function(t){var e=function(){gt=!0,t()},n=function(){gt=!1};return mt("online",e),mt("offline",n),function(){wt("online",e),wt("offline",n)}},An={isOnline:Tn,isVisible:Dn},Nn={initFocus:In,initReconnect:Ln},it=!yt()||"Deno"in window,Fn=function(t){return Sn()?window.requestAnimationFrame(t):setTimeout(t,1)},ut=it?fn:sn,kt=typeof navigator<"u"&&navigator.connection,Zt=!it&&kt&&(["slow-2g","2g"].includes(kt.effectiveType)||kt.saveData),Yt=function(t){if(L(t))try{t=t()}catch{t=""}var e=[].concat(t);t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Q(t):"";var n=t?"$swr$"+t:"";return[t,e,n]},H=new WeakMap,Kt=0,Qt=1,Xt=2,X=function(t,e,n,o,i,r,u){u===void 0&&(u=!0);var a=H.get(t),f=a[0],c=a[1],s=a[3],d=f[e],_=c[e];if(u&&_)for(var T=0;T<_.length;++T)_[T](n,o,i);return r&&(delete s[e],d&&d[0])?d[0](Xt).then(function(){return t.get(e)}):t.get(e)},Un=0,Ot=function(){return++Un},Gt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return zt(void 0,void 0,void 0,function(){var n,o,i,r,u,a,f,c,s,d,_,T,G,m,p,l,q,N,C,P,F;return Bt(this,function(D){switch(D.label){case 0:if(n=t[0],o=t[1],i=t[2],r=t[3],u=typeof r=="boolean"?{revalidate:r}:r||{},a=g(u.populateCache)?!0:u.populateCache,f=u.revalidate!==!1,c=u.rollbackOnError!==!1,s=u.optimisticData,d=Yt(o),_=d[0],T=d[2],!_)return[2];if(G=H.get(n),m=G[2],t.length<3)return[2,X(n,_,n.get(_),b,b,f,!0)];if(p=i,q=Ot(),m[_]=[q,0],N=!g(s),C=n.get(_),N&&(P=L(s)?s(C):s,n.set(_,P),X(n,_,P)),L(p))try{p=p(n.get(_))}catch(U){l=U}return p&&L(p.then)?[4,p.catch(function(U){l=U})]:[3,2];case 1:if(p=D.sent(),q!==m[_][0]){if(l)throw l;return[2,p]}else l&&N&&c&&(a=!0,p=C,n.set(_,C));D.label=2;case 2:return a&&(l||(L(a)&&(p=a(p,C)),n.set(_,p)),n.set(T,A(n.get(T),{error:l}))),m[_][1]=Ot(),[4,X(n,_,p,l,b,f,!!a)];case 3:if(F=D.sent(),l)throw l;return[2,a?F:p]}})})},tn=function(t,e){for(var n in t)t[n][0]&&t[n][0](e)},Mn=function(t,e){if(!H.has(t)){var n=A(Nn,e),o={},i=Gt.bind(b,t),r=V;if(H.set(t,[o,{},{},{},i]),!it){var u=n.initFocus(setTimeout.bind(b,tn.bind(b,o,Kt))),a=n.initReconnect(setTimeout.bind(b,tn.bind(b,o,Qt)));r=function(){u&&u(),a&&a(),H.delete(t)}}return[t,i,r]}return[t,H.get(t)[4]]},Wn=function(t,e,n,o,i){var r=n.errorRetryCount,u=i.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!g(r)&&u>r||setTimeout(o,a,i)},nn=Mn(new Map),Hn=nn[0],jn=nn[1],$n=A({onLoadingSlow:V,onSuccess:V,onError:V,onErrorRetry:Wn,onDiscarded:V,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Zt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Zt?5e3:3e3,compare:function(t,e){return Q(t)==Q(e)},isPaused:function(){return!1},cache:Hn,mutate:jn,fallback:{}},An),qn=function(t,e){var n=A(t,e);if(e){var o=t.use,i=t.fallback,r=e.use,u=e.fallback;o&&r&&(n.use=o.concat(r)),i&&u&&(n.fallback=A(i,u))}return n},zn=an({}),Bn=function(t,e){var n=Dt({})[1],o=W(t),i=W({data:!1,error:!1,isValidating:!1}),r=pt(function(u){var a=!1,f=o.current;for(var c in u){var s=c;f[s]!==u[s]&&(f[s]=u[s],i.current[s]&&(a=!0))}a&&!e.current&&n({})},[]);return ut(function(){o.current=t}),[o,i.current,r]},Jn=function(t){return L(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}]},Zn=function(){return A($n,cn(zn))},Yn=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=Zn(),i=Jn(e),r=i[0],u=i[1],a=i[2],f=qn(o,a),c=t,s=f.use;if(s)for(var d=s.length;d-- >0;)c=s[d](c);return c(r,u||f.fetcher,f)}},en=function(t,e,n){var o=e[t]||(e[t]=[]);return o.push(n),function(){var i=o.indexOf(n);i>=0&&(o[i]=o[o.length-1],o.pop())}},Et={dedupe:!0},Kn=function(t,e,n){var o=n.cache,i=n.compare,r=n.fallbackData,u=n.suspense,a=n.revalidateOnMount,f=n.refreshInterval,c=n.refreshWhenHidden,s=n.refreshWhenOffline,d=H.get(o),_=d[0],T=d[1],G=d[2],m=d[3],p=Yt(t),l=p[0],q=p[1],N=p[2],C=W(!1),P=W(!1),F=W(l),D=W(e),U=W(n),v=function(){return U.current},at=function(){return v().isVisible()&&v().isOnline()},tt=function(O){return o.set(N,A(o.get(N),O))},Pt=o.get(l),rn=g(r)?n.fallback[l]:r,x=g(Pt)?rn:Pt,Rt=o.get(N)||{},z=Rt.error,St=!C.current,Vt=function(){return St&&!g(a)?a:v().isPaused()?!1:u?g(x)?!1:n.revalidateIfStale:g(x)||n.revalidateIfStale},on=function(){return!l||!e?!1:Rt.isValidating?!0:St&&Vt()},ct=on(),lt=Bn({data:x,error:z,isValidating:ct},P),j=lt[0],ft=lt[1],nt=lt[2],M=pt(function(O){return zt(void 0,void 0,void 0,function(){var w,k,E,B,J,R,y,I,S,st,Z,$,_t;return Bt(this,function(Y){switch(Y.label){case 0:if(w=D.current,!l||!w||P.current||v().isPaused())return[2,!1];B=!0,J=O||{},R=!m[l]||!J.dedupe,y=function(){return!P.current&&l===F.current&&C.current},I=function(){var Tt=m[l];Tt&&Tt[1]===E&&delete m[l]},S={isValidating:!1},st=function(){tt({isValidating:!1}),y()&&nt(S)},tt({isValidating:!0}),nt({isValidating:!0}),Y.label=1;case 1:return Y.trys.push([1,3,,4]),R&&(X(o,l,j.current.data,j.current.error,!0),n.loadingTimeout&&!o.get(l)&&setTimeout(function(){B&&y()&&v().onLoadingSlow(l,n)},n.loadingTimeout),m[l]=[w.apply(void 0,q),Ot()]),_t=m[l],k=_t[0],E=_t[1],[4,k];case 2:return k=Y.sent(),R&&setTimeout(I,n.dedupingInterval),!m[l]||m[l][1]!==E?(R&&y()&&v().onDiscarded(l),[2,!1]):(tt({error:b}),S.error=b,Z=G[l],!g(Z)&&(E<=Z[0]||E<=Z[1]||Z[1]===0)?(st(),R&&y()&&v().onDiscarded(l),[2,!1]):(i(j.current.data,k)?S.data=j.current.data:S.data=k,i(o.get(l),k)||o.set(l,k),R&&y()&&v().onSuccess(k,l,n),[3,4]));case 3:return $=Y.sent(),I(),v().isPaused()||(tt({error:$}),S.error=$,R&&y()&&(v().onError($,l,n),(typeof n.shouldRetryOnError=="boolean"&&n.shouldRetryOnError||L(n.shouldRetryOnError)&&n.shouldRetryOnError($))&&at()&&v().onErrorRetry($,l,n,M,{retryCount:(J.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return B=!1,st(),y()&&R&&X(o,l,S.data,S.error,!1),[2,!0]}})})},[l]),un=pt(Gt.bind(b,o,function(){return F.current}),[]);if(ut(function(){D.current=e,U.current=n}),ut(function(){if(l){var O=l!==F.current,w=M.bind(b,Et),k=function(y,I,S){nt(A({error:I,isValidating:S},i(j.current.data,y)?b:{data:y}))},E=0,B=function(y){if(y==Kt){var I=Date.now();v().revalidateOnFocus&&I>E&&at()&&(E=I+v().focusThrottleInterval,w())}else if(y==Qt)v().revalidateOnReconnect&&at()&&w();else if(y==Xt)return M()},J=en(l,T,k),R=en(l,_,B);return P.current=!1,F.current=l,C.current=!0,O&&nt({data:x,error:z,isValidating:ct}),Vt()&&(g(x)||it?w():Fn(w)),function(){P.current=!0,J(),R()}}},[l,M]),ut(function(){var O;function w(){var E=L(f)?f(x):f;E&&O!==-1&&(O=setTimeout(k,E))}function k(){!j.current.error&&(c||v().isVisible())&&(s||v().isOnline())?M(Et).then(w):w()}return w(),function(){O&&(clearTimeout(O),O=-1)}},[f,c,s,M]),ln(x),u&&g(x)&&l)throw D.current=e,U.current=n,P.current=!1,g(z)?M(Et):z;return{mutate:un,get data(){return ft.data=!0,x},get error(){return ft.error=!0,z},get isValidating(){return ft.isValidating=!0,ct}}},Qn=Yn(Kn);const Xn=(...t)=>fetch(...t).then(e=>e.json()),Gn=t=>{const[e,n]=Dt(!1),{data:o,error:i}=Qn(e?t:null,Xn,{dedupingInterval:36e5,revalidateOnFocus:!1});return{swrData:o||{},error:i,isLoading:!i&&!o,fetchData:()=>{n(!0)}}};export{Gn as a,dn as u};