(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequire1d24;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire1d24=o),o.register("5PVn1",(function(n,r){t(n.exports,"ConnectHardwareContainer",(function(){return K}),(function(e){return K=e})),t(n.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return Z}),(function(e){return Z=e})),t(n.exports,"ConnectHardwareStepContainer",(function(){return Q}),(function(e){return Q=e}));var a=o("d0go3"),i=o("7dqns"),l=o("c1thM"),c=o("90BMT"),u=o("lDSNw"),s=o("ef4Zh"),d=o("5oL59"),p=o("6TGHh"),f=o("LqQFk"),m=o("cZIbv");o("1KK14");var h=o("6Tvfa"),g=o("lMzyG"),v=o("4yY1D"),y=o("4y59b"),x=o("NQvFB"),E=o("HLcoo"),S=o("gmVmN"),w=o("cGB0F"),T=o("laYjG"),b=o("5ftLv"),C=o("kBpKb"),H=o("3olS2"),P=o("kpxNY"),I=o("aanFI"),k=o("dyeVQ"),A=o("02iAW"),F=o("03gS4"),L=o("4EOrh"),D=o("5Doro"),N=o("44z5p"),R=o("bSZtF"),B=o("ifZdO"),O=o("hvlNY"),_=o("h5kyv"),j=o("8DCD7"),M=o("1wI6a"),V=o("bcqzL"),W=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const $=e(u).lazy((()=>o("k28kd")));v.fileLogger.init({provider:M.FileLoggerProvider}),v.telemetry.init(),v.telemetry.setUser({id:_.analytics.getDeviceId()}),(0,j.initializeFeatureFlags)();const K=m.default.main`
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
`,z=m.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,G=m.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,U=()=>{const t=new URLSearchParams((0,p.useLocation)().search),{data:n}=(0,R.useIsMultiChainEnabled)(),r=t.get("permission");return n?e(u).createElement(e(u).Fragment,null,e(u).createElement(V.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(u).createElement(H.FullPageHeader,null),e(u).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,e(u).createElement(u.Suspense,{fallback:null},e(u).createElement($,null)))):e(u).createElement(e(u).Fragment,null,e(u).createElement(V.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(u).createElement(H.FullPageHeader,null),e(u).createElement(L.HardwareWalletProvider,null,e(u).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,r?e(u).createElement(K,null,e(u).createElement(q,{onFinish:()=>window.close(),pushStep:x.NOOP,popStep:x.NOOP})):e(u).createElement(Y,null))))},Z=3,Y=()=>{const[t,n]=(0,u.useState)([]),r=(0,f.default)(t,((e,t)=>(null==e?void 0:e.length)===t.length)),a=(0,y.getLast)(t),o=e=>{n((t=>(0,c.default)(t,(t=>{t.push(e)}))))},s=()=>{n((e=>(0,c.default)(e,(e=>{e.pop()}))))};(0,u.useEffect)((()=>{n([e(u).createElement(q,{pushStep:o,popStep:s})])}),[]);const d=t.length,p=t.length>(null!=r?r:[]).length,m=0===(null==r?void 0:r.length),h={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(u).createElement(K,null,e(u).createElement(F.StepHeader,{totalSteps:Z,onBackClick:s,currentStepIndex:d-1}),e(u).createElement(i.AnimatePresence,{exitBeforeEnter:!0},e(u).createElement(l.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${t.length}_${null==r?void 0:r.length}`},h),a)))},Q=m.default.div`
  padding: 55px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`,q=t=>{const{t:n}=(0,g.useTranslation)(),{ledgerTransportState:r,transport:a,getPermission:o}=(0,L.useLedgerTransport)();let i,l,c=b.ConfirmationIconType.Default,s=e(u).createElement(A.SpinnerIcon,null),d=n("commandContinue"),p=!1,f=x.NOOP;switch(r){case L.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),l=n("connectHardwareSearchingSecondaryText"),p=!0;break;case L.LedgerTransportState.NeedsPermission:s=e(u).createElement(I.IconAdd,null),i=n("connectHardwareNeedsPermissionPrimaryText"),l=n("connectHardwareNeedsPermissionSecondaryText"),f=o;break;case L.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),l=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case L.LedgerTransportState.WaitingForApplication:s=e(u).createElement(I.IconTokenSolana,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),l=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case L.LedgerTransportState.Connected:c=b.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),l=n("connectHardwareConnectedSecondaryText"),f=()=>{if(!a)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(u).createElement(X,Object.assign({transport:a},t)))};break;case L.LedgerTransportState.Failed:c=b.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),l=n("connectHardwareFailedSecondaryText"),d=n("commandRetry"),f=o}return e(u).createElement(Q,null,e(u).createElement(P.IconHeader,{icon:e(u).createElement(b.ConfirmationIcon,{defaultIcon:s,type:c}),primaryText:i,secondaryText:l,headerStyle:P.IconHeaderStyle.Large}),e(u).createElement(T.Button,{onClick:f,theme:"primary",disabled:p},d))},J=[a.DerivationPathType.Bip44RootSolana,a.DerivationPathType.Bip44Solana,a.DerivationPathType.Bip44ChangeSolana],X=t=>{var n;const{t:r}=(0,g.useTranslation)(),[o,i]=(0,u.useState)(0),[l,s]=(0,u.useState)(void 0),[d,p]=(0,u.useState)([]),[f,m]=(0,u.useState)({}),[x,b]=(0,u.useState)(!1),C=null===(n=(0,N.useFetchConnection)())||void 0===n?void 0:n.data,H=null==C?void 0:C.connection,[A,F,L]=(0,B.useStorage)(h.StorageKeyAccounts.AccountMetas,[]),D=(0,u.useMemo)((()=>{const e=A.filter((e=>e.type===h.AccountType.Ledger)).map((e=>e.publicKey.toString()));return d.filter((t=>!e.includes(t.toString())))}),[d,A]),R=void 0!==o?J[o]:void 0,_=(0,u.useMemo)((()=>R?R===a.DerivationPathType.Bip44RootSolana?[(0,w.solanaDerivationPath)(0,0,a.DerivationPathType.Bip44RootSolana)]:(0,y.range)(10).map((e=>(0,w.solanaDerivationPath)(e,0,R))):[]),[R]),j=J.map((e=>({value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]})));(0,u.useEffect)((()=>{W(void 0,void 0,void 0,(function*(){if(!F&&H){b(!0);try{const e=[];for(const n of _){const r=yield(0,w.getPublicKeyAsync)(t.transport,n);e.push(r)}p(e);const n=yield(0,E.getMultipleAccountsAsync)(H,e,"finalized");m(n)}catch(e){v.telemetry.captureError(e,v.FeatureTag.Ledger)}finally{b(!1)}}}))}),[t.transport,F,_,H]),(0,u.useEffect)((()=>{p([])}),[_]),(0,u.useEffect)((()=>{1===D.length&&s(0)}),[D]);const M=D.map((t=>{var n;const r=t.toString(),a=null===(n=f[t.toString()])||void 0===n?void 0:n.lamports,o=void 0!==a?(0,S.formatTokenAmount)((0,S.lamportsToSolana)(a)):"0";return{displayValue:e(u).createElement(G,null,e(u).createElement("span",null,(0,S.formatHashMedium)(r,7)),e(u).createElement("label",null,o," SOL")),value:r}})),V=void 0===o||void 0===l,$=void 0!==l?D[l]:void 0;return e(u).createElement(Q,null,e(u).createElement(P.IconHeader,{icon:e(u).createElement(I.IconAdd,null),primaryText:r("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:P.IconHeaderStyle.Large}),e(u).createElement(z,null,e(u).createElement(k.Select,{placeholderText:r("connectHardwareSelectAddressDerivationPath"),options:j,value:R,onChange:(e,t)=>{i(t)}}),e(u).createElement(k.Select,{placeholderText:x?r("connectHardwareSelectAddressSearching"):0===D.length?r("connectHardwareSelectAddressAllAddressesImported"):r("connectHardwareSelectAddressWalletAddress"),options:M,value:null==$?void 0:$.toString(),onChange:(e,t)=>{s(t)}}),e(u).createElement(T.Button,{onClick:()=>{if(void 0===l)return;const n=D[l],r=d.map((e=>e.toString())).indexOf(n.toString());var a,o;a=n.toString(),o=r,W(void 0,void 0,void 0,(function*(){if(F)return;const e=(0,c.default)(A,(e=>{const t=e.filter((e=>e.type===h.AccountType.Ledger)).length+1,n=_[o].toString("hex");e.push({type:h.AccountType.Ledger,name:`Ledger ${t}`,publicKey:a,derivationPath:n})})),t=e.length-1;L(e);const n=new(0,O.LocalStorage);yield(0,h.setSelectedAccountIndex)(n,t)})),t.pushStep(e(u).createElement(ee,Object.assign({},t)))},theme:"primary",disabled:V},r("connectHardwareAddAccountButton"))))},ee=()=>{const{t:t}=(0,g.useTranslation)();return e(u).createElement(Q,null,e(u).createElement(P.IconHeader,{icon:e(u).createElement(b.ConfirmationIcon,{defaultIcon:e(u).createElement("div",null),type:b.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:P.IconHeaderStyle.Large}),e(u).createElement(T.Button,{onClick:()=>{window.close()},theme:"primary"},t("pastParticipleDone")))};(0,s.render)(e(u).createElement(d.BrowserRouter,null,e(u).createElement(D.QueryProvider,null,e(u).createElement(U,null))),document.getElementById("root")),_.analytics.capture("connectHardwareOpen")})),o.register("5oL59",(function(n,r){t(n.exports,"BrowserRouter",(function(){return p})),t(n.exports,"Link",(function(){return y})),t(n.exports,"matchPath",(function(){return o("6TGHh").matchPath}));var a=o("6TGHh"),i=(a=o("6TGHh"),o("blvhM")),l=o("lDSNw"),c=o("edxNJ"),u=o("7ZS2X"),s=o("jw7LZ"),d=o("lw78t"),p=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.createBrowserHistory)(e.props),e}return(0,i.default)(n,t),n.prototype.render=function(){return e(l).createElement(a.Router,{history:this.history,children:this.props.children})},n}(e(l).Component),f=(e(l).Component,function(e,t){return"function"==typeof e?e(t):e}),m=function(e,t){return"string"==typeof e?(0,c.createLocation)(e,null,null,t):e},h=function(e){return e},g=e(l).forwardRef;void 0===g&&(g=h);var v=g((function(t,n){var r=t.innerRef,a=t.navigate,o=t.onClick,i=(0,s.default)(t,["innerRef","navigate","onClick"]),c=i.target,d=(0,u.default)({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return d.ref=h!==g&&n||r,e(l).createElement("a",d)})),y=g((function(t,n){var r=t.component,o=void 0===r?v:r,i=t.replace,p=t.to,y=t.innerRef,x=(0,s.default)(t,["component","replace","to","innerRef"]);return e(l).createElement(a.__RouterContext.Consumer,null,(function(t){!t&&(0,d.default)(!1);var r=t.history,a=m(f(p,t.location),t.location),s=a?r.createHref(a):"",v=(0,u.default)({},x,{href:s,navigate:function(){var e=f(p,t.location),n=(0,c.createPath)(t.location)===(0,c.createPath)(m(e));(i||n?r.replace:r.push)(e)}});return h!==g?v.ref=n||y:v.innerRef=y,e(l).createElement(o,v)}))})),x=function(e){return e},E=e(l).forwardRef;void 0===E&&(E=x);E((function(t,n){var r=t["aria-current"],o=void 0===r?"page":r,i=t.activeClassName,c=void 0===i?"active":i,p=t.activeStyle,h=t.className,g=t.exact,v=t.isActive,S=t.location,w=t.sensitive,T=t.strict,b=t.style,C=t.to,H=t.innerRef,P=(0,s.default)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return e(l).createElement(a.__RouterContext.Consumer,null,(function(t){!t&&(0,d.default)(!1);var r=S||t.location,i=m(f(C,r),r),s=i.pathname,I=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=I?(0,a.matchPath)(r.pathname,{path:I,exact:g,sensitive:w,strict:T}):null,A=!!(v?v(k,r):k),F="function"==typeof h?h(A):h,L="function"==typeof b?b(A):b;A&&(F=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(F,c),L=(0,u.default)({},L,p));var D=(0,u.default)({"aria-current":A&&o||null,className:F,style:L,to:i},P);return x!==E?D.ref=n||H:D.innerRef=H,e(l).createElement(y,D)}))}))})),o.register("3olS2",(function(n,r){t(n.exports,"FullPageHeader",(function(){return m}));var a=o("lMzyG"),i=o("lDSNw"),l=o("NQvFB"),c=o("cZIbv"),u=o("aanFI"),s=o("kn91D");const d=c.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,p=c.default.a`
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
`,f=c.default.a`
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
`,m=()=>{const{t:t}=(0,a.useTranslation)();return e(i).createElement(d,null,e(i).createElement(f,{href:l.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(u.IconPhantomLogo,{width:32})),e(i).createElement(p,{"data-testid":"full-page-header-support-link",href:l.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(i).createElement(u.IconHelp,null),e(i).createElement(s.Text,{color:"currentColor",size:16,weight:500,margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}})),o.register("dyeVQ",(function(n,r){t(n.exports,"Select",(function(){return p}));var a=o("bpFkY"),i=o("lDSNw"),l=o("cZIbv"),c=o("aanFI"),u=o("2t4fc");const s=(0,l.default)(a.ListboxInput)`
  position: relative;
  width: 100%;
`,d=l.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,p=({value:t,placeholderText:n,options:r,onChange:a})=>{var o;const l=r.map((e=>e.value)),p=0===r.length,f=null===(o=r.find((e=>e.value===t)))||void 0===o?void 0:o.displayValue;return e(i).createElement(s,{value:null!=t?t:"__none",onChange:e=>a(e,l.indexOf(e)),tabIndex:0,disabled:p},(()=>e(i).createElement(e(i).Fragment,null,e(i).createElement(u.SelectButton,{arrow:e(i).createElement(d,null,e(i).createElement(c.IconChevronDown,null))},void 0===t?n:f),!p&&e(i).createElement(u.SelectPopover,null,e(i).createElement(u.SelectList,null,r.map((t=>{var n;return e(i).createElement(u.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))}})),o.register("03gS4",(function(n,r){t(n.exports,"StepHeader",(function(){return h}));var a=o("4y59b"),i=o("lDSNw"),l=o("cZIbv"),c=o("gR1av"),u=o("miiws"),s=o("aanFI"),d=o("6l2nq");const p=(0,l.default)(d.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,f=l.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,m=l.default.div`
  width: 24px;
  height: 24px;
`,h=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:o,showBackButtonOnFirstStep:l,showBackButton:d=!0})=>{const h=d&&(l||0!==r);return e(i).createElement(p,{opacity:o?0:1},h?e(i).createElement(c.ChevronCircle,{right:1,onClick:t},e(i).createElement(s.IconChevronLeft,null)):e(i).createElement(m,null),e(i).createElement(f,null,(0,a.range)(n).map((t=>{const n=t<=r?"#AB9FF2":"#333";return e(i).createElement(u.Circle,{key:t,diameter:12,color:n})}))),e(i).createElement(m,null))}})),o.register("gR1av",(function(e,n){t(e.exports,"ChevronCircle",(function(){return i}));var r=o("cZIbv"),a=o("miiws");const i=(0,r.default)(a.Circle)`
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
`})),o.register("k28kd",(function(e,t){e.exports=Promise.all([import("./"+o("5V6iE").resolve("gDC41")),o("22S8I")(new URL(o("5V6iE").resolve("1JCWp"),import.meta.url).toString()),import("./"+o("5V6iE").resolve("hs9g8")),import("./"+o("5V6iE").resolve("7Yz5u"))]).then((()=>o("7CSQK")))})),o.register("22S8I",(function(e,t){var n=o("bDExm");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("link");if([].concat(r).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onerror=function(e){a.onerror=a.onload=null,a.remove(),n(e)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),o.register("bDExm",(function(e,t){var n={},r={},a={};e.exports=function(e,t){return function(o){var i=function(e){switch(e){case"preload":return r;case"prefetch":return a;default:return n}}(t);return i[o]?i[o]:i[o]=e.apply(null,arguments).catch((function(e){throw delete i[o],e}))}}})),o("5V6iE").register(JSON.parse('{"8iUX0":"connect_hardware.efe29100.js","7Yz5u":"ConnectHardwareMultichainFlow.f0a3e674.js","hs9g8":"ConnectHardwareMultichainFlow.21b84578.js","1JCWp":"notification.e371f99c.css","gDC41":"ConnectHardwareMultichainFlow.97ce7578.js","gmATR":"notification.9cf4c952.css","l9rAP":"phishing.518dcbc3.js","7OHNh":"connect_hardware.7f48e07c.js","h3t8x":"TransportWebHID.6ce3c950.js","2UKlV":"semver.8ccfa2da.js","gHa2i":"connect_hardware.e1be65a0.js"}')),o("5PVn1");
//# sourceMappingURL=connect_hardware.efe29100.js.map
define=__define;})(window.define);