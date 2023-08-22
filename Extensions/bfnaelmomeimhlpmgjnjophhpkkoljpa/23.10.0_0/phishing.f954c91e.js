(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire1d24;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire1d24=r);var o=r("lDSNw"),a=r("ef4Zh");r("1KK14");var l,s,c,d,u=r("4yY1D"),g=r("kBpKb"),m={};l=m,s="BlocklistOrigin",c=function(){return I},d=function(e){return I=e},Object.defineProperty(l,s,{get:c,set:d,enumerable:!0,configurable:!0});var f=r("lMzyG"),h=r("1uUV4"),b=(o=r("lDSNw"),r("NQvFB")),p=r("lrTw9"),w=r("6R6dI"),y=r("cZIbv"),v=r("aanFI"),S=r("kn91D"),x=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function l(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((i=i.apply(e,t||[])).next())}))};const O="#ca3214",E=y.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fffdf8;
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,T=y.default.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,k=y.default.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,U=y.default.a`
  text-decoration: underline;
  color: ${O};
`,I=({origin:t,subdomain:n})=>{const{t:i}=(0,f.useTranslation)(),r=t?(0,p.removeSubdomainFromDomain)(t):"",a=new URL(null!=t?t:"").hostname,l="true"===n?a:r;return e(o).createElement(E,null,e(o).createElement(k,null,e(o).createElement(T,null,e(o).createElement(v.IconPhantomWordmark,{width:128,fill:"#bbb9b6"})),e(o).createElement(S.Text,{size:30,color:O,weight:"600"},i("blocklistOriginDomainIsBlocked",{domainName:l||i("blocklistOriginThisDomain")})),e(o).createElement(S.Text,{color:O},i("blocklistOriginSiteIsMalicious")),e(o).createElement(S.Text,{color:O},e(o).createElement(f.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(o).createElement(U,{href:b.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(o).createElement(U,{href:b.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),l?e(o).createElement(S.Text,{color:O,onClick:()=>x(void 0,void 0,void 0,(function*(){if("true"===n){const e=yield(0,w.getStorageValue)(h.StorageKeys.UserWhitelistSubdomains);let t=JSON.parse(`${e}`);t?t.push(a):t=[a],t=[...new Set(t)],(0,w.setStorageValue)(h.StorageKeys.UserWhitelistSubdomains,JSON.stringify(t))}else{const e=yield(0,w.getStorageValue)(h.StorageKeys.UserWhitelistedOrigins);let t=JSON.parse(`${e}`);t?t.push(r):t=[r],t=[...new Set(t)],(0,w.setStorageValue)(h.StorageKeys.UserWhitelistedOrigins,JSON.stringify(t))}window.location.href=t})),hoverUnderline:!0},i("blocklistOriginIgnoreWarning",{domainName:t})):e(o).createElement(e(o).Fragment,null)))};var D=r("h5kyv"),L=r("8DCD7"),N=r("1wI6a");u.fileLogger.init({provider:N.FileLoggerProvider}),u.telemetry.init(),u.telemetry.setUser({id:D.analytics.getDeviceId()}),(0,L.initializeFeatureFlags)();const _=()=>{let e;try{e=new URLSearchParams(window.location.search).get("origin")||"",new URL(e)}catch(t){e=""}return e},B=()=>new URLSearchParams(window.location.search).get("subdomain")||"",K=()=>{const t=(0,o.useMemo)(_,[]),n=(0,o.useMemo)(B,[]);return e(o).createElement(g.ErrorBoundary,null,e(o).createElement(m.BlocklistOrigin,{origin:t,subdomain:n}))};(0,a.render)(e(o).createElement(K,null),document.getElementById("root"));
//# sourceMappingURL=phishing.f954c91e.js.map
define=__define;})(window.define);