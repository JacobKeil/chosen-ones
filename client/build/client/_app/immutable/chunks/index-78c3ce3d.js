function g(){}const Q=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function b(t){t.forEach(U)}function D(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function qt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function zt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,l){if(r){const s=W(e,n,i,l);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window<"u";let X=V?()=>window.performance.now():()=>Date.now(),L=V?t=>requestAnimationFrame(t):g;const x=new Set;function Y(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&L(Y)}function Z(t){let e;return x.size===0&&L(Y),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function mt(){O=!0}function pt(){O=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:yt(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function xt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=nt("style");return $t(tt(t),e),e.sheet}function $t(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(O){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){O&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Gt(){return F(" ")}function Jt(){return F("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function rt(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return rt(t,e,n,nt)}function Wt(t,e,n){return rt(t,e,n,vt)}function kt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Vt(t){return kt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zt(t,e){return new t(e)}const M=new Map;let P=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function ct(t,e,n,i,r,l,s,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const k=e+(n-e)*l(m);o+=m*100+`%{${s(k,1-k)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${u}`,_=tt(t),{stylesheet:d,rules:h}=M.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,P+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||Ct())}function Ct(){L(()=>{P||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),M.clear())})}let E;function v(t){E=t}function H(){if(!E)throw new Error("Function called outside component initialization");return E}function te(t){H().$$.on_mount.push(t)}function ee(t){H().$$.after_update.push(t)}function ne(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=st(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const w=[],J=[],C=[],K=[],ot=Promise.resolve();let B=!1;function lt(){B||(B=!0,ot.then(ut))}function ie(){return lt(),ot}function N(t){C.push(t)}const R=new Set;let S=0;function ut(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];R.has(n)||(R.add(n),n())}C.length=0}while(w.length);for(;K.length;)K.pop()();B=!1,R.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let $;function at(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function T(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function re(){y={r:0,c:[],p:y}}function se(){y.r||b(y.c),y=y.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ft={duration:0};function oe(t,e,n){let i=e(t,n),r=!1,l,s,u=0;function c(){l&&z(t,l)}function o(){const{delay:a=0,duration:_=300,easing:d=Q,tick:h=g,css:p}=i||ft;p&&(l=ct(t,0,1,_,a,d,p,u++)),h(0,1);const m=X()+a,k=m+_;s&&s.abort(),r=!0,N(()=>T(t,!0,"start")),s=Z(q=>{if(r){if(q>=k)return h(1,0),T(t,!0,"end"),c(),r=!1;if(q>=m){const I=d((q-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),D(i)?(i=i(),at().then(o)):o())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function le(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function u(){const{delay:c=0,duration:o=300,easing:f=Q,tick:a=g,css:_}=i||ft;_&&(l=ct(t,1,0,o,c,f,_));const d=X()+c,h=d+o;N(()=>T(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),T(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return D(i)?at().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&z(t,l),r=!1)}}}const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const s=t.$$.on_mount.map(U).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),l.forEach(N)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,l,s,u=[-1]){const c=E;v(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Dt(t,a)),_}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){mt();const a=Et(e.target);o.fragment&&o.fragment.l(a),a.forEach(et)}else o.fragment&&o.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),ut()}v(c)}class de{$destroy(){Tt(this,1),this.$destroy=g}$on(e,n){if(!D(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ie as A,g as B,N as C,vt as D,Wt as E,qt as F,wt as G,Kt as H,b as I,ne as J,oe as K,le as L,ue as M,zt as N,Lt as O,Ft as P,Bt as Q,Rt as R,de as S,It as T,ht as U,Gt as a,Ht as b,Vt as c,se as d,Jt as e,Mt as f,re as g,et as h,_e as i,ee as j,nt as k,Ut as l,Et as m,Qt as n,te as o,Yt as p,F as q,kt as r,Ot as s,ce as t,Xt as u,Zt as v,ae as w,fe as x,Pt as y,Tt as z};