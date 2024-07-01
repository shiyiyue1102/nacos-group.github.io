import{x as un,A as W,q as dt,P as cn,y as ln,_ as sn,h as Ct}from"./hooks.module.6Mr8QjZg.js";import{b as X,l as g,_ as xt,k as Dt,H as pt,G as fn}from"./preact.module.LHOPIhyX.js";function _n(t,e){for(var n in e)t[n]=e[n];return t}function It(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Lt(t,e){this.props=t,this.context=e}(Lt.prototype=new X).isPureReactComponent=!0,Lt.prototype.shouldComponentUpdate=function(t,e){return It(this.props,t)||It(this.state,e)};var At=g.__b;g.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),At&&At(t)};var dn=g.__e;g.__e=function(t,e,n,i){if(t.then){for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}dn(t,e,n,i)};var Nt=g.unmount;function Ft(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),t.__c.__H=null),(t=_n({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(i){return Ft(i,e,n)})),t}function Mt(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(i){return Mt(i,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function vt(){this.__u=0,this.t=null,this.__b=null}function Ut(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function et(){this.u=null,this.o=null}g.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Nt&&Nt(t)},(vt.prototype=new X).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Ut(i.__v),r=!1,a=function(){r||(r=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--i.__u){if(i.state.__a){var s=i.state.__a;i.__v.__k[0]=Mt(s,s.__c.__P,s.__c.__O)}var u;for(i.setState({__a:i.__b=null});u=i.t.pop();)u.forceUpdate()}};i.__u++||32&e.__u||i.setState({__a:i.__b=i.__v.__k[0]}),t.then(a,a)},vt.prototype.componentWillUnmount=function(){this.t=[]},vt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Ft(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__a&&xt(Dt,null,t.fallback);return o&&(o.__u&=-33),[xt(Dt,null,e.__a?null:t.children),o]};var Wt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(et.prototype=new X).__a=function(t){var e=this,n=Ut(e.__v),i=e.o.get(t);return i[0]++,function(o){var r=function(){e.props.revealOrder?(i.push(o),Wt(e,t,i)):o()};n?n(r):r()}},et.prototype.render=function(t){this.u=null,this.o=new Map;var e=pt(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},et.prototype.componentDidUpdate=et.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Wt(t,n,e)})};var pn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,vn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,hn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,yn=/[A-Z0-9]/g,gn=typeof document<"u",mn=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};X.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(X.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var jt=g.event;function bn(){}function wn(){return this.cancelBubble}function kn(){return this.defaultPrevented}g.event=function(t){return jt&&(t=jt(t)),t.persist=bn,t.isPropagationStopped=wn,t.isDefaultPrevented=kn,t.nativeEvent=t};var On={enumerable:!1,configurable:!0,get:function(){return this.class}},Ht=g.vnode;g.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,i=e.type,o={};for(var r in n){var a=n[r];if(!(r==="value"&&"defaultValue"in n&&a==null||gn&&r==="children"&&i==="noscript"||r==="class"||r==="className")){var l=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&a===!0?a="":l==="translate"&&a==="no"?a=!1:l==="ondoubleclick"?r="ondblclick":l!=="onchange"||i!=="input"&&i!=="textarea"||mn(n.type)?l==="onfocus"?r="onfocusin":l==="onblur"?r="onfocusout":hn.test(r)?r=l:i.indexOf("-")===-1&&vn.test(r)?r=r.replace(yn,"-$&").toLowerCase():a===null&&(a=void 0):l=r="oninput",l==="oninput"&&o[r=l]&&(r="oninputCapture"),o[r]=a}}i=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=pt(n.children).forEach(function(s){s.props.selected=o.value.indexOf(s.props.value)!=-1})),i=="select"&&o.defaultValue!=null&&(o.value=pt(n.children).forEach(function(s){s.props.selected=o.multiple?o.defaultValue.indexOf(s.props.value)!=-1:o.defaultValue==s.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",On)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=pn,Ht&&Ht(t)};var $t=g.__r;g.__r=function(t){$t&&$t(t),t.__c};var qt=g.diffed;g.diffed=function(t){qt&&qt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value)};/*! *****************************************************************************
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
***************************************************************************** */function zt(t,e,n,i){function o(r){return r instanceof n?r:new n(function(a){a(r)})}return new(n||(n=Promise))(function(r,a){function l(f){try{u(i.next(f))}catch(d){a(d)}}function s(f){try{u(i.throw(f))}catch(d){a(d)}}function u(f){f.done?r(f.value):o(f.value).then(l,s)}u((i=i.apply(t,[])).next())})}function Bt(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(f){return s([u,f])}}function s(u){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,o&&(r=u[0]&2?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){n.label=u[1];break}if(u[0]===6&&n.label<r[1]){n.label=r[1],r=u;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(u);break}r[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(f){u=[6,f],o=0}finally{i=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var V=function(){},m=V(),rt=Object,y=function(t){return t===m},L=function(t){return typeof t=="function"},A=function(t,e){return rt.assign({},t,e)},ht="undefined",yt=function(){return typeof window!=ht},En=function(){return typeof document!=ht},Rn=function(){return yt()&&typeof window.requestAnimationFrame!=ht},it=new WeakMap,Sn=0,Y=function(t){var e=typeof t,n=t&&t.constructor,i=n==Date,o,r;if(rt(t)===t&&!i&&n!=RegExp){if(o=it.get(t),o)return o;if(o=++Sn+"~",it.set(t,o),n==Array){for(o="@",r=0;r<t.length;r++)o+=Y(t[r])+",";it.set(t,o)}if(n==rt){o="#";for(var a=rt.keys(t).sort();!y(r=a.pop());)y(t[r])||(o+=r+":"+Y(t[r])+",");it.set(t,o)}}else o=i?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return o},gt=!0,Pn=function(){return gt},Jt=yt(),mt=En(),bt=Jt&&window.addEventListener?window.addEventListener.bind(window):V,Vn=mt?document.addEventListener.bind(document):V,wt=Jt&&window.removeEventListener?window.removeEventListener.bind(window):V,Tn=mt?document.removeEventListener.bind(document):V,Cn=function(){var t=mt&&document.visibilityState;return y(t)||t!=="hidden"},xn=function(t){return Vn("visibilitychange",t),bt("focus",t),function(){Tn("visibilitychange",t),wt("focus",t)}},Dn=function(t){var e=function(){gt=!0,t()},n=function(){gt=!1};return bt("online",e),bt("offline",n),function(){wt("online",e),wt("offline",n)}},In={isOnline:Pn,isVisible:Cn},Ln={initFocus:xn,initReconnect:Dn},ot=!yt()||"Deno"in window,An=function(t){return Rn()?window.requestAnimationFrame(t):setTimeout(t,1)},at=ot?ln:sn,kt=typeof navigator<"u"&&navigator.connection,Zt=!ot&&kt&&(["slow-2g","2g"].includes(kt.effectiveType)||kt.saveData),Kt=function(t){if(L(t))try{t=t()}catch{t=""}var e=[].concat(t);t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Y(t):"";var n=t?"$swr$"+t:"";return[t,e,n]},j=new WeakMap,Xt=0,Yt=1,Qt=2,Q=function(t,e,n,i,o,r,a){a===void 0&&(a=!0);var l=j.get(t),s=l[0],u=l[1],f=l[3],d=s[e],_=u[e];if(a&&_)for(var T=0;T<_.length;++T)_[T](n,i,o);return r&&(delete f[e],d&&d[0])?d[0](Qt).then(function(){return t.get(e)}):t.get(e)},Nn=0,Ot=function(){return++Nn},Gt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return zt(void 0,void 0,void 0,function(){var n,i,o,r,a,l,s,u,f,d,_,T,G,b,p,c,q,N,C,R,F;return Bt(this,function(D){switch(D.label){case 0:if(n=t[0],i=t[1],o=t[2],r=t[3],a=typeof r=="boolean"?{revalidate:r}:r||{},l=y(a.populateCache)?!0:a.populateCache,s=a.revalidate!==!1,u=a.rollbackOnError!==!1,f=a.optimisticData,d=Kt(i),_=d[0],T=d[2],!_)return[2];if(G=j.get(n),b=G[2],t.length<3)return[2,Q(n,_,n.get(_),m,m,s,!0)];if(p=o,q=Ot(),b[_]=[q,0],N=!y(f),C=n.get(_),N&&(R=L(f)?f(C):f,n.set(_,R),Q(n,_,R)),L(p))try{p=p(n.get(_))}catch(M){c=M}return p&&L(p.then)?[4,p.catch(function(M){c=M})]:[3,2];case 1:if(p=D.sent(),q!==b[_][0]){if(c)throw c;return[2,p]}else c&&N&&u&&(l=!0,p=C,n.set(_,C));D.label=2;case 2:return l&&(c||(L(l)&&(p=l(p,C)),n.set(_,p)),n.set(T,A(n.get(T),{error:c}))),b[_][1]=Ot(),[4,Q(n,_,p,c,m,s,!!l)];case 3:if(F=D.sent(),c)throw c;return[2,l?F:p]}})})},tn=function(t,e){for(var n in t)t[n][0]&&t[n][0](e)},Fn=function(t,e){if(!j.has(t)){var n=A(Ln,e),i={},o=Gt.bind(m,t),r=V;if(j.set(t,[i,{},{},{},o]),!ot){var a=n.initFocus(setTimeout.bind(m,tn.bind(m,i,Xt))),l=n.initReconnect(setTimeout.bind(m,tn.bind(m,i,Yt)));r=function(){a&&a(),l&&l(),j.delete(t)}}return[t,o,r]}return[t,j.get(t)[4]]},Mn=function(t,e,n,i,o){var r=n.errorRetryCount,a=o.retryCount,l=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!y(r)&&a>r||setTimeout(i,l,o)},nn=Fn(new Map),Un=nn[0],Wn=nn[1],jn=A({onLoadingSlow:V,onSuccess:V,onError:V,onErrorRetry:Mn,onDiscarded:V,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Zt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Zt?5e3:3e3,compare:function(t,e){return Y(t)==Y(e)},isPaused:function(){return!1},cache:Un,mutate:Wn,fallback:{}},In),Hn=function(t,e){var n=A(t,e);if(e){var i=t.use,o=t.fallback,r=e.use,a=e.fallback;i&&r&&(n.use=i.concat(r)),o&&a&&(n.fallback=A(o,a))}return n},$n=fn({}),qn=function(t,e){var n=Ct({})[1],i=W(t),o=W({data:!1,error:!1,isValidating:!1}),r=dt(function(a){var l=!1,s=i.current;for(var u in a){var f=u;s[f]!==a[f]&&(s[f]=a[f],o.current[f]&&(l=!0))}l&&!e.current&&n({})},[]);return at(function(){i.current=t}),[i,o.current,r]},zn=function(t){return L(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}]},Bn=function(){return A(jn,un($n))},Jn=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=Bn(),o=zn(e),r=o[0],a=o[1],l=o[2],s=Hn(i,l),u=t,f=s.use;if(f)for(var d=f.length;d-- >0;)u=f[d](u);return u(r,a||s.fetcher,s)}},en=function(t,e,n){var i=e[t]||(e[t]=[]);return i.push(n),function(){var o=i.indexOf(n);o>=0&&(i[o]=i[i.length-1],i.pop())}},Et={dedupe:!0},Zn=function(t,e,n){var i=n.cache,o=n.compare,r=n.fallbackData,a=n.suspense,l=n.revalidateOnMount,s=n.refreshInterval,u=n.refreshWhenHidden,f=n.refreshWhenOffline,d=j.get(i),_=d[0],T=d[1],G=d[2],b=d[3],p=Kt(t),c=p[0],q=p[1],N=p[2],C=W(!1),R=W(!1),F=W(c),D=W(e),M=W(n),v=function(){return M.current},ut=function(){return v().isVisible()&&v().isOnline()},tt=function(O){return i.set(N,A(i.get(N),O))},Rt=i.get(c),rn=y(r)?n.fallback[c]:r,x=y(Rt)?rn:Rt,St=i.get(N)||{},z=St.error,Pt=!C.current,Vt=function(){return Pt&&!y(l)?l:v().isPaused()?!1:a?y(x)?!1:n.revalidateIfStale:y(x)||n.revalidateIfStale},on=function(){return!c||!e?!1:St.isValidating?!0:Pt&&Vt()},ct=on(),lt=qn({data:x,error:z,isValidating:ct},R),H=lt[0],st=lt[1],nt=lt[2],U=dt(function(O){return zt(void 0,void 0,void 0,function(){var w,k,E,B,J,S,h,I,P,ft,Z,$,_t;return Bt(this,function(K){switch(K.label){case 0:if(w=D.current,!c||!w||R.current||v().isPaused())return[2,!1];B=!0,J=O||{},S=!b[c]||!J.dedupe,h=function(){return!R.current&&c===F.current&&C.current},I=function(){var Tt=b[c];Tt&&Tt[1]===E&&delete b[c]},P={isValidating:!1},ft=function(){tt({isValidating:!1}),h()&&nt(P)},tt({isValidating:!0}),nt({isValidating:!0}),K.label=1;case 1:return K.trys.push([1,3,,4]),S&&(Q(i,c,H.current.data,H.current.error,!0),n.loadingTimeout&&!i.get(c)&&setTimeout(function(){B&&h()&&v().onLoadingSlow(c,n)},n.loadingTimeout),b[c]=[w.apply(void 0,q),Ot()]),_t=b[c],k=_t[0],E=_t[1],[4,k];case 2:return k=K.sent(),S&&setTimeout(I,n.dedupingInterval),!b[c]||b[c][1]!==E?(S&&h()&&v().onDiscarded(c),[2,!1]):(tt({error:m}),P.error=m,Z=G[c],!y(Z)&&(E<=Z[0]||E<=Z[1]||Z[1]===0)?(ft(),S&&h()&&v().onDiscarded(c),[2,!1]):(o(H.current.data,k)?P.data=H.current.data:P.data=k,o(i.get(c),k)||i.set(c,k),S&&h()&&v().onSuccess(k,c,n),[3,4]));case 3:return $=K.sent(),I(),v().isPaused()||(tt({error:$}),P.error=$,S&&h()&&(v().onError($,c,n),(typeof n.shouldRetryOnError=="boolean"&&n.shouldRetryOnError||L(n.shouldRetryOnError)&&n.shouldRetryOnError($))&&ut()&&v().onErrorRetry($,c,n,U,{retryCount:(J.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return B=!1,ft(),h()&&S&&Q(i,c,P.data,P.error,!1),[2,!0]}})})},[c]),an=dt(Gt.bind(m,i,function(){return F.current}),[]);if(at(function(){D.current=e,M.current=n}),at(function(){if(c){var O=c!==F.current,w=U.bind(m,Et),k=function(h,I,P){nt(A({error:I,isValidating:P},o(H.current.data,h)?m:{data:h}))},E=0,B=function(h){if(h==Xt){var I=Date.now();v().revalidateOnFocus&&I>E&&ut()&&(E=I+v().focusThrottleInterval,w())}else if(h==Yt)v().revalidateOnReconnect&&ut()&&w();else if(h==Qt)return U()},J=en(c,T,k),S=en(c,_,B);return R.current=!1,F.current=c,C.current=!0,O&&nt({data:x,error:z,isValidating:ct}),Vt()&&(y(x)||ot?w():An(w)),function(){R.current=!0,J(),S()}}},[c,U]),at(function(){var O;function w(){var E=L(s)?s(x):s;E&&O!==-1&&(O=setTimeout(k,E))}function k(){!H.current.error&&(u||v().isVisible())&&(f||v().isOnline())?U(Et).then(w):w()}return w(),function(){O&&(clearTimeout(O),O=-1)}},[s,u,f,U]),cn(x),a&&y(x)&&c)throw D.current=e,M.current=n,R.current=!1,y(z)?U(Et):z;return{mutate:an,get data(){return st.data=!0,x},get error(){return st.error=!0,z},get isValidating(){return st.isValidating=!0,ct}}},Kn=Jn(Zn);const Xn=(...t)=>fetch(...t).then(e=>e.json()),Yn=t=>{const[e,n]=Ct(!1),{data:i,error:o}=Kn(e?t:null,Xn,{dedupingInterval:36e5,revalidateOnFocus:!1});return{swrData:i||{},error:o,isLoading:!o&&!i,fetchData:()=>{n(!0)}}};export{Yn as u};
