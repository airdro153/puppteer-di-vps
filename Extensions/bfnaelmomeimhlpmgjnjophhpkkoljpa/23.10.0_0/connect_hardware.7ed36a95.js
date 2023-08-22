(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire1d24;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire1d24=a),a.register("2CuFm",(function(n,r){t(n.exports,"ConnectHardwareContainer",(function(){return J}),(function(e){return J=e})),t(n.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return K}),(function(e){return K=e})),t(n.exports,"ConnectHardwareStepContainer",(function(){return Q}),(function(e){return Q=e}));var o=a("jZpRu"),i=a("1fwzV"),c=a("lz5BI"),l=a("1I4L6"),u=a("29o0l"),s=a("iuQtP"),f=a("9mJqB"),d=a("kUMJ9"),p=a("84vNm"),m=a("gkfw3");a("8gulk");var y=a("4xbAj"),g=a("43063"),h=a("csW2r"),v=a("RVqnc"),x=a("9CoSy"),S=a("lvcyB"),b=a("Nt4tV"),E=a("lWOdy"),w=a("hFkH3"),C=a("cb8KS"),T=a("8Ub2g"),P=a("clrPg"),k=a("3mrWC"),H=a("j81qC"),O=a("ivBd9"),F=a("bhnmm"),A=a("bQfjx"),j=a("1bJSJ"),R=a("41yT6"),$=a("2VUoB"),L=a("5Hnun"),B=a("5bJeo"),I=a("JepPo"),M=a("twk6W"),_=a("dNPkM"),N=a("cgbub"),D=a("ilZfT"),U=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))};const W=e(u).lazy((()=>a("cUqME")));h.fileLogger.init({provider:N.FileLoggerProvider}),h.telemetry.init(),h.telemetry.setUser({id:M.analytics.getDeviceId()}),(0,_.initializeFeatureFlags)();const J=m.default.main`
  width: 400px;
  min-height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,q=m.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,V=m.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,z=()=>{const t=new URLSearchParams((0,d.useLocation)().search),{data:n}=(0,L.useIsMultiChainEnabled)(),r=t.get("permission");return n?e(u).createElement(e(u).Fragment,null,e(u).createElement(D.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(u).createElement(P.FullPageHeader,null),e(u).createElement(T.OnboardingAndConnectHardwareErrorBoundary,null,e(u).createElement(u.Suspense,{fallback:null},e(u).createElement(W,null)))):e(u).createElement(e(u).Fragment,null,e(u).createElement(D.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(u).createElement(P.FullPageHeader,null),e(u).createElement(j.HardwareWalletProvider,null,e(u).createElement(T.OnboardingAndConnectHardwareErrorBoundary,null,r?e(u).createElement(J,null,e(u).createElement(G,{onFinish:()=>window.close(),pushStep:x.NOOP,popStep:x.NOOP})):e(u).createElement(Y,null))))},K=3,Y=()=>{const[t,n]=(0,u.useState)([]),r=(0,p.default)(t,((e,t)=>(null==e?void 0:e.length)===t.length)),o=(0,v.getLast)(t),a=e=>{n((t=>(0,l.default)(t,(t=>{t.push(e)}))))},s=()=>{n((e=>(0,l.default)(e,(e=>{e.pop()}))))};(0,u.useEffect)((()=>{n([e(u).createElement(G,{pushStep:a,popStep:s})])}),[]);const f=t.length,d=t.length>(null!=r?r:[]).length,m=0===(null==r?void 0:r.length),y={initial:{x:m?0:d?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(u).createElement(J,null,e(u).createElement(A.StepHeader,{totalSteps:K,onBackClick:s,currentStepIndex:f-1}),e(u).createElement(i.AnimatePresence,{exitBeforeEnter:!0},e(u).createElement(c.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${t.length}_${null==r?void 0:r.length}`},y),o)))},Q=m.default.div`
  padding: 55px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`,G=t=>{const{t:n}=(0,g.useTranslation)(),{ledgerTransportState:r,transport:o,getPermission:a}=(0,j.useLedgerTransport)();let i,c,l=C.ConfirmationIconType.Default,s=e(u).createElement(F.SpinnerIcon,null),f=n("commandContinue"),d=!1,p=x.NOOP;switch(r){case j.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),d=!0;break;case j.LedgerTransportState.NeedsPermission:s=e(u).createElement(H.IconAdd,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),p=a;break;case j.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),d=!0;break;case j.LedgerTransportState.WaitingForApplication:s=e(u).createElement(H.IconTokenSolana,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),d=!0;break;case j.LedgerTransportState.Connected:l=C.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),p=()=>{if(!o)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(u).createElement(X,Object.assign({transport:o},t)))};break;case j.LedgerTransportState.Failed:l=C.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),f=n("commandRetry"),p=a}return e(u).createElement(Q,null,e(u).createElement(k.IconHeader,{icon:e(u).createElement(C.ConfirmationIcon,{defaultIcon:s,type:l}),primaryText:i,secondaryText:c,headerStyle:k.IconHeaderStyle.Large}),e(u).createElement(w.Button,{onClick:p,theme:"primary",disabled:d},f))},Z=[o.DerivationPathType.Bip44RootSolana,o.DerivationPathType.Bip44Solana,o.DerivationPathType.Bip44ChangeSolana],X=t=>{var n;const{t:r}=(0,g.useTranslation)(),[a,i]=(0,u.useState)(0),[c,s]=(0,u.useState)(void 0),[f,d]=(0,u.useState)([]),[p,m]=(0,u.useState)({}),[x,C]=(0,u.useState)(!1),T=null===(n=(0,$.useFetchConnection)())||void 0===n?void 0:n.data,P=null==T?void 0:T.connection,[F,A,j]=(0,B.useStorage)(y.StorageKeyAccounts.AccountMetas,[]),R=(0,u.useMemo)((()=>{const e=F.filter((e=>e.type===y.AccountType.Ledger)).map((e=>e.publicKey.toString()));return f.filter((t=>!e.includes(t.toString())))}),[f,F]),L=void 0!==a?Z[a]:void 0,M=(0,u.useMemo)((()=>L?L===o.DerivationPathType.Bip44RootSolana?[(0,E.solanaDerivationPath)(0,0,o.DerivationPathType.Bip44RootSolana)]:(0,v.range)(10).map((e=>(0,E.solanaDerivationPath)(e,0,L))):[]),[L]),_=Z.map((e=>({value:e,displayValue:y.DERIVATION_PATH_TYPE_TO_VALUE[e]})));(0,u.useEffect)((()=>{U(void 0,void 0,void 0,(function*(){if(!A&&P){C(!0);try{const e=[];for(const n of M){const r=yield(0,E.getPublicKeyAsync)(t.transport,n);e.push(r)}d(e);const n=yield(0,S.getMultipleAccountsAsync)(P,e,"finalized");m(n)}catch(e){h.telemetry.captureError(e,h.FeatureTag.Ledger)}finally{C(!1)}}}))}),[t.transport,A,M,P]),(0,u.useEffect)((()=>{d([])}),[M]),(0,u.useEffect)((()=>{1===R.length&&s(0)}),[R]);const N=R.map((t=>{var n;const r=t.toString(),o=null===(n=p[t.toString()])||void 0===n?void 0:n.lamports,a=void 0!==o?(0,b.formatTokenAmount)((0,b.lamportsToSolana)(o)):"0";return{displayValue:e(u).createElement(V,null,e(u).createElement("span",null,(0,b.formatHashMedium)(r,7)),e(u).createElement("label",null,a," SOL")),value:r}})),D=void 0===a||void 0===c,W=void 0!==c?R[c]:void 0;return e(u).createElement(Q,null,e(u).createElement(k.IconHeader,{icon:e(u).createElement(H.IconAdd,null),primaryText:r("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:k.IconHeaderStyle.Large}),e(u).createElement(q,null,e(u).createElement(O.Select,{placeholderText:r("connectHardwareSelectAddressDerivationPath"),options:_,value:L,onChange:(e,t)=>{i(t)}}),e(u).createElement(O.Select,{placeholderText:x?r("connectHardwareSelectAddressSearching"):0===R.length?r("connectHardwareSelectAddressAllAddressesImported"):r("connectHardwareSelectAddressWalletAddress"),options:N,value:null==W?void 0:W.toString(),onChange:(e,t)=>{s(t)}}),e(u).createElement(w.Button,{onClick:()=>{if(void 0===c)return;const n=R[c],r=f.map((e=>e.toString())).indexOf(n.toString());var o,a;o=n.toString(),a=r,U(void 0,void 0,void 0,(function*(){if(A)return;const e=(0,l.default)(F,(e=>{const t=e.filter((e=>e.type===y.AccountType.Ledger)).length+1,n=M[a].toString("hex");e.push({type:y.AccountType.Ledger,name:`Ledger ${t}`,publicKey:o,derivationPath:n})})),t=e.length-1;j(e);const n=new(0,I.LocalStorage);yield(0,y.setSelectedAccountIndex)(n,t)})),t.pushStep(e(u).createElement(ee,Object.assign({},t)))},theme:"primary",disabled:D},r("connectHardwareAddAccountButton"))))},ee=()=>{const{t:t}=(0,g.useTranslation)();return e(u).createElement(Q,null,e(u).createElement(k.IconHeader,{icon:e(u).createElement(C.ConfirmationIcon,{defaultIcon:e(u).createElement("div",null),type:C.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:k.IconHeaderStyle.Large}),e(u).createElement(w.Button,{onClick:()=>{window.close()},theme:"primary"},t("pastParticipleDone")))};(0,s.render)(e(u).createElement(f.BrowserRouter,null,e(u).createElement(R.QueryProvider,null,e(u).createElement(z,null))),document.getElementById("root")),M.analytics.capture("connectHardwareOpen")})),a.register("9mJqB",(function(n,r){t(n.exports,"BrowserRouter",(function(){return d})),t(n.exports,"Link",(function(){return v})),t(n.exports,"matchPath",(function(){return a("kUMJ9").matchPath}));var o=a("kUMJ9"),i=(o=a("kUMJ9"),a("2r7ac")),c=a("29o0l"),l=a("7WvAR"),u=a("kwUt6"),s=a("hw1Ye"),f=a("4gVRx"),d=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,l.createBrowserHistory)(e.props),e}return(0,i.default)(n,t),n.prototype.render=function(){return e(c).createElement(o.Router,{history:this.history,children:this.props.children})},n}(e(c).Component),p=(e(c).Component,function(e,t){return"function"==typeof e?e(t):e}),m=function(e,t){return"string"==typeof e?(0,l.createLocation)(e,null,null,t):e},y=function(e){return e},g=e(c).forwardRef;void 0===g&&(g=y);var h=g((function(t,n){var r=t.innerRef,o=t.navigate,a=t.onClick,i=(0,s.default)(t,["innerRef","navigate","onClick"]),l=i.target,f=(0,u.default)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),o())}});return f.ref=y!==g&&n||r,e(c).createElement("a",f)})),v=g((function(t,n){var r=t.component,a=void 0===r?h:r,i=t.replace,d=t.to,v=t.innerRef,x=(0,s.default)(t,["component","replace","to","innerRef"]);return e(c).createElement(o.__RouterContext.Consumer,null,(function(t){!t&&(0,f.default)(!1);var r=t.history,o=m(p(d,t.location),t.location),s=o?r.createHref(o):"",h=(0,u.default)({},x,{href:s,navigate:function(){var e=p(d,t.location),n=(0,l.createPath)(t.location)===(0,l.createPath)(m(e));(i||n?r.replace:r.push)(e)}});return y!==g?h.ref=n||v:h.innerRef=v,e(c).createElement(a,h)}))})),x=function(e){return e},S=e(c).forwardRef;void 0===S&&(S=x);S((function(t,n){var r=t["aria-current"],a=void 0===r?"page":r,i=t.activeClassName,l=void 0===i?"active":i,d=t.activeStyle,y=t.className,g=t.exact,h=t.isActive,b=t.location,E=t.sensitive,w=t.strict,C=t.style,T=t.to,P=t.innerRef,k=(0,s.default)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return e(c).createElement(o.__RouterContext.Consumer,null,(function(t){!t&&(0,f.default)(!1);var r=b||t.location,i=m(p(T,r),r),s=i.pathname,H=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=H?(0,o.matchPath)(r.pathname,{path:H,exact:g,sensitive:E,strict:w}):null,F=!!(h?h(O,r):O),A="function"==typeof y?y(F):y,j="function"==typeof C?C(F):C;F&&(A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(A,l),j=(0,u.default)({},j,d));var R=(0,u.default)({"aria-current":F&&a||null,className:A,style:j,to:i},k);return x!==S?R.ref=n||P:R.innerRef=P,e(c).createElement(v,R)}))}))})),a.register("clrPg",(function(n,r){t(n.exports,"FullPageHeader",(function(){return m}));var o=a("43063"),i=a("29o0l"),c=a("9CoSy"),l=a("gkfw3"),u=a("j81qC"),s=a("27SDj");const f=l.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,d=l.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  color: #aaa;
  svg {
    fill: currentColor;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    color: #ab9ff2;
  }
`,p=l.default.a`
  display: flex;
  color: #aaa;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  svg {
    fill: currentColor;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    color: #ab9ff2;
  }
`,m=()=>{const{t:t}=(0,o.useTranslation)();return e(i).createElement(f,null,e(i).createElement(p,{href:c.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u.IconPhantomLogo,{width:32})),e(i).createElement(d,{"data-testid":"full-page-header-support-link",href:c.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(i).createElement(u.IconHelp,null),e(i).createElement(s.Text,{color:"currentColor",size:16,weight:500,margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}})),a.register("ivBd9",(function(n,r){t(n.exports,"Select",(function(){return d}));var o=a("j2ZvT"),i=a("29o0l"),c=a("gkfw3"),l=a("j81qC"),u=a("gdVh7");const s=(0,c.default)(o.ListboxInput)`
  position: relative;
  width: 100%;
`,f=c.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,d=({value:t,placeholderText:n,options:r,onChange:o})=>{var a;const c=r.map((e=>e.value)),d=0===r.length,p=null===(a=r.find((e=>e.value===t)))||void 0===a?void 0:a.displayValue;return e(i).createElement(s,{value:null!=t?t:"__none",onChange:e=>o(e,c.indexOf(e)),tabIndex:0,disabled:d},(()=>e(i).createElement(e(i).Fragment,null,e(i).createElement(u.SelectButton,{arrow:e(i).createElement(f,null,e(i).createElement(l.IconChevronDown,null))},void 0===t?n:p),!d&&e(i).createElement(u.SelectPopover,null,e(i).createElement(u.SelectList,null,r.map((t=>{var n;return e(i).createElement(u.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))}})),a.register("bQfjx",(function(n,r){t(n.exports,"StepHeader",(function(){return y}));var o=a("RVqnc"),i=a("29o0l"),c=a("gkfw3"),l=a("lSd3H"),u=a("6UMd8"),s=a("j81qC"),f=a("634r8");const d=(0,c.default)(f.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,p=c.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,m=c.default.div`
  width: 24px;
  height: 24px;
`,y=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:c,showBackButton:f=!0})=>{const y=f&&(c||0!==r);return e(i).createElement(d,{opacity:a?0:1},y?e(i).createElement(l.ChevronCircle,{right:1,onClick:t},e(i).createElement(s.IconChevronLeft,null)):e(i).createElement(m,null),e(i).createElement(p,null,(0,o.range)(n).map((t=>{const n=t<=r?"#AB9FF2":"#333";return e(i).createElement(u.Circle,{key:t,diameter:12,color:n})}))),e(i).createElement(m,null))}})),a.register("lSd3H",(function(e,n){t(e.exports,"ChevronCircle",(function(){return i}));var r=a("gkfw3"),o=a("6UMd8");const i=(0,r.default)(o.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`})),a.register("cUqME",(function(e,t){e.exports=Promise.all([a("j1yuj")(a("2FqAO").getBundleURL("gF3Ru")+a("eOkdY").resolve("6xViO")),a("gx8Ji")(a("2FqAO").getBundleURL("gF3Ru")+a("eOkdY").resolve("1JCWp")),a("j1yuj")(a("2FqAO").getBundleURL("gF3Ru")+a("eOkdY").resolve("8OC5d")),a("j1yuj")(a("2FqAO").getBundleURL("gF3Ru")+a("eOkdY").resolve("96tJ1"))]).then((()=>a("3qeW6")))})),a.register("gx8Ji",(function(e,t){"use strict";var n=a("hE0rk");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("link");if([].concat(r).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),n(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),a.register("iYyM4",(function(e,t){"use strict";e.exports=a("njou9")})),a.register("njou9",(function(e,n){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,o,a,i,c,l,u,s,f,d,p,m,y,g,h,v,x,S,b,E,w,C,T,P,k,H,O,F;t(e.exports,"AsyncMode",(function(){return r}),(function(e){return r=e})),t(e.exports,"ConcurrentMode",(function(){return o}),(function(e){return o=e})),t(e.exports,"ContextConsumer",(function(){return a}),(function(e){return a=e})),t(e.exports,"ContextProvider",(function(){return i}),(function(e){return i=e})),t(e.exports,"Element",(function(){return c}),(function(e){return c=e})),t(e.exports,"ForwardRef",(function(){return l}),(function(e){return l=e})),t(e.exports,"Fragment",(function(){return u}),(function(e){return u=e})),t(e.exports,"Lazy",(function(){return s}),(function(e){return s=e})),t(e.exports,"Memo",(function(){return f}),(function(e){return f=e})),t(e.exports,"Portal",(function(){return d}),(function(e){return d=e})),t(e.exports,"Profiler",(function(){return p}),(function(e){return p=e})),t(e.exports,"StrictMode",(function(){return m}),(function(e){return m=e})),t(e.exports,"Suspense",(function(){return y}),(function(e){return y=e})),t(e.exports,"isAsyncMode",(function(){return g}),(function(e){return g=e})),t(e.exports,"isConcurrentMode",(function(){return h}),(function(e){return h=e})),t(e.exports,"isContextConsumer",(function(){return v}),(function(e){return v=e})),t(e.exports,"isContextProvider",(function(){return x}),(function(e){return x=e})),t(e.exports,"isElement",(function(){return S}),(function(e){return S=e})),t(e.exports,"isForwardRef",(function(){return b}),(function(e){return b=e})),t(e.exports,"isFragment",(function(){return E}),(function(e){return E=e})),t(e.exports,"isLazy",(function(){return w}),(function(e){return w=e})),t(e.exports,"isMemo",(function(){return C}),(function(e){return C=e})),t(e.exports,"isPortal",(function(){return T}),(function(e){return T=e})),t(e.exports,"isProfiler",(function(){return P}),(function(e){return P=e})),t(e.exports,"isStrictMode",(function(){return k}),(function(e){return k=e})),t(e.exports,"isSuspense",(function(){return H}),(function(e){return H=e})),t(e.exports,"isValidElementType",(function(){return O}),(function(e){return O=e})),t(e.exports,"typeOf",(function(){return F}),(function(e){return F=e}));var A="function"==typeof Symbol&&Symbol.for,j=A?Symbol.for("react.element"):60103,R=A?Symbol.for("react.portal"):60106,$=A?Symbol.for("react.fragment"):60107,L=A?Symbol.for("react.strict_mode"):60108,B=A?Symbol.for("react.profiler"):60114,I=A?Symbol.for("react.provider"):60109,M=A?Symbol.for("react.context"):60110,_=A?Symbol.for("react.async_mode"):60111,N=A?Symbol.for("react.concurrent_mode"):60111,D=A?Symbol.for("react.forward_ref"):60112,U=A?Symbol.for("react.suspense"):60113,W=A?Symbol.for("react.suspense_list"):60120,J=A?Symbol.for("react.memo"):60115,q=A?Symbol.for("react.lazy"):60116,V=A?Symbol.for("react.block"):60121,z=A?Symbol.for("react.fundamental"):60117,K=A?Symbol.for("react.responder"):60118,Y=A?Symbol.for("react.scope"):60119;function Q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case j:switch(e=e.type){case _:case N:case $:case B:case L:case U:return e;default:switch(e=e&&e.$$typeof){case M:case D:case q:case J:case I:return e;default:return t}}case R:return t}}}function G(e){return Q(e)===N}r=_,o=N,a=M,i=I,c=j,l=D,u=$,s=q,f=J,d=R,p=B,m=L,y=U,g=function(e){return G(e)||Q(e)===_},h=G,v=function(e){return Q(e)===M},x=function(e){return Q(e)===I},S=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===j},b=function(e){return Q(e)===D},E=function(e){return Q(e)===$},w=function(e){return Q(e)===q},C=function(e){return Q(e)===J},T=function(e){return Q(e)===R},P=function(e){return Q(e)===B},k=function(e){return Q(e)===L},H=function(e){return Q(e)===U},O=function(e){return"string"==typeof e||"function"==typeof e||e===$||e===N||e===B||e===L||e===U||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===q||e.$$typeof===J||e.$$typeof===I||e.$$typeof===M||e.$$typeof===D||e.$$typeof===z||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===V)},F=Q})),a.register("9CNaJ",(function(e,t){"use strict";var n=a("iYyM4"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(e){return n.isMemo(e)?i:c[e.$$typeof]||r}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var i=s(n);f&&(i=i.concat(f(n)));for(var c=l(t),y=l(n),g=0;g<i.length;++g){var h=i[g];if(!(o[h]||r&&r[h]||y&&y[h]||c&&c[h])){var v=d(n,h);try{u(t,h,v)}catch(e){}}}}return t}})),a("eOkdY").register(JSON.parse('{"gF3Ru":"connect_hardware.7ed36a95.js","96tJ1":"ConnectHardwareMultichainFlow.727b05bc.js","8OC5d":"ConnectHardwareMultichainFlow.e9ea5cf5.js","1JCWp":"notification.e371f99c.css","6xViO":"ConnectHardwareMultichainFlow.6fcbc55e.js","gmATR":"notification.9cf4c952.css","iTtRH":"phishing.fff80503.js","452wq":"connect_hardware.4da4d79d.js","99t1D":"TransportWebHID.10460d8f.js","7vHWN":"Solana.8ff8b01a.js","4nmlj":"semver.339a6680.js","jen7J":"connect_hardware.ed11e8b8.js"}')),a("2CuFm")}();
//# sourceMappingURL=connect_hardware.7ed36a95.js.map
define=__define;})(window.define);