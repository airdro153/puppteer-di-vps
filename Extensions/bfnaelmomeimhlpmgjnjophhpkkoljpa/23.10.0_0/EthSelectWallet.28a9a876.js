(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,l,n){Object.defineProperty(e,t,{get:l,set:n,enumerable:!0,configurable:!0})}var l=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;l.register("9U7iG",(function(n,a){var r;r=n.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(n.exports,"EthSelectWallet",(function(){return w})),t(n.exports,"default",(function(){return b}));var i=l("43063"),o=l("cFUcx"),s=l("29o0l"),u=l("gkfw3"),c=l("fxXaZ"),d=l("hFkH3"),p=l("lLNMU"),m=l("3mrWC"),f=l("j81qC"),x=l("27SDj"),g=l("aklgB");const h=u.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,E=u.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,_=u.default.div`
  background: #2a2a2a;
  border-radius: 6px;
  padding: 12px 16px;
`,y=u.default.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 8px;
  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,k=u.default.div`
  display: flex;
  gap: 16px;
`,w=e(s).memo((({requestId:t})=>{const{t:l}=(0,i.useTranslation)(),n=(0,c.usePostOutgoingBackgroundResponse)(),[a,r]=(0,s.useState)(!1);let u;null!==t&&(u=t);const w=(0,s.useCallback)((()=>{n({jsonrpc:"2.0",id:u,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})}),[u,n,a]),b=(0,s.useCallback)((()=>{n({jsonrpc:"2.0",id:u,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})}),[u,n,a]);return e(s).createElement(g.Container,null,e(s).createElement(g.Body,{style:{display:"flex",alignItems:"center"}},e(s).createElement(g.TopGroup,null,e(s).createElement(m.IconHeader,{icon:e(s).createElement(k,null,e(s).createElement(f.IconPhantomLogo,{width:64}),e(s).createElement(f.IconMetaMask,{width:64,height:64})),primaryText:l("whichExtensionToConnectWith"),headerStyle:m.IconHeaderStyle.Small}))),e(s).createElement(g.Footer,{plain:!0,style:{padding:"0px 16px 16px"}},e(s).createElement(h,null,e(s).createElement(E,null,e(s).createElement(d.Button,{onClick:b,"data-testid":"select_wallet--metamask"},l("useMetaMask"))),e(s).createElement(E,null,e(s).createElement(d.Button,{theme:"primary",onClick:w,"data-testid":"select_wallet--phantom"},l("usePhantom"))),e(s).createElement(_,{"data-testid":"select_wallet--dont_ask_me_again",onClick:()=>r(!a)},e(s).createElement(y,null,e(s).createElement(p.Checkbox,{checked:a})," ",l("dontAskMeAgain")),e(s).createElement(x.Text,{color:"#777777",size:13,weight:500,lineHeight:16,textAlign:"left"},l("configureInSettings"))))))}));var b=w}))}();
//# sourceMappingURL=EthSelectWallet.28a9a876.js.map
define=__define;})(window.define);