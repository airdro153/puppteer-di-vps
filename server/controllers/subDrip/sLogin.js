const actionP = require('puppeteer_handles')

const loginWithPharse = async (chrome) => {
    let page = chrome.page
    const browser = chrome.browser
    await page.goto('https://drip.haus/')

    const phantom = await actionP.switchToSecondTab(browser, 'chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > div > div.sc-llYSUQ.sc-jHkVzv.cqBDfb.dyVEVs > button.sc-eCImPb.fajfuv')

    const pharse = "ripple venue shove master wheat one tourist license very attend enact minor";
    await actionP.impotPharsePhantom(phantom, pharse, '#root > main > div.sc-jlRLRk.ittrOY > form > div > div.sc-cCcXHH.cdwAbJ > div:nth-child(1) > input')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button.sc-eCImPb.fajfuv.sc-XxNYO.wqvHD')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')

    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/input', 'wallupai')
    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/div/div/input', 'wallupai')

    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-cxpSdN.sc-caiLqq.sc-fbyfCU.dcZihx.gQDEA-d.jnxXJu > span > input[type=checkbox]')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')

    page = await actionP.switchToBackTab(phantom)
    await actionP.clickSelector(page, '#app > div > nav > div > div > div:nth-child(2) > div > div > button')
    await actionP.clickSelector(page, 'body > div.wallet-adapter-modal.wallet-adapter-modal-fade-in > div.wallet-adapter-modal-container > div > ul > li > button')

    const popup = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup, '#root > div > div.sc-fpyFWH.giXzZU > div.sc-bZSZLb.sc-faIbUi.jUgnQR.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')
    const popup2 = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup2, '#root > div > div.sc-bdvvtL.dvIiel > div > div.sc-bZSZLb.sc-faIbUi.dpOAcL.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')


}


const loginWithPrivateKey = async (chrome, PrivateKey) => {
    let page = chrome.page
    const browser = chrome.browser
    await page.goto('https://drip.haus/')

    const phantom = await actionP.switchToSecondTab(browser, 'chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > div > div.sc-llYSUQ.sc-jHkVzv.cqBDfb.dyVEVs > button.sc-eCImPb.fgwvjA')

    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/input', 'wallupai')
    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/div/div/input', 'wallupai')

    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-cxpSdN.sc-caiLqq.sc-fbyfCU.dcZihx.gQDEA-d.jnxXJu > span > input[type=checkbox]')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')

    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-cxpSdN.sc-caiLqq.sc-dtMgUX.dcZihx.gQDEA-d.fmewbM > span > input[type=checkbox]')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')
    
    await phantom.goto('chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/popup.html')
    await actionP.clickSelector(phantom, '#root > div > div.sc-gaLNVN.cYDNWL > button')

    await actionP.clickSelector(phantom, '#root > div > section > div.sc-bCloLd.knkQNw > div')
    await actionP.clickSelector(phantom, '#root > div > div.sc-bXkJLp.cvYuDr > div > div.sc-jTNsyj.fIGvep > div:nth-child(1) > div > div')
    await actionP.clickSelector(phantom, '#root > div > div.sc-hgJWpk.fSUspp > div > div > div > div:nth-child(4) > div > div:nth-child(2) > p.sc-bqiRlB.hpszvU')
    
    await actionP.inputToXpath(phantom, '//*[@id="root"]/div/div[5]/div/div/form/div/section/div[2]/input','drip 1')
    await actionP.inputToXpath(phantom, '//*[@id="root"]/div/div[5]/div/div/form/div/section/div[3]/textarea',PrivateKey)
    await actionP.clickSelector(phantom, '#root > div > div.sc-hgJWpk.fSUspp > div > div > form > button')

    page = await actionP.switchToBackTab(phantom)
    await actionP.clickSelector(page, '#app > div > nav > div > div > div:nth-child(2) > div > div > button')
    await actionP.clickSelector(page, 'body > div.wallet-adapter-modal.wallet-adapter-modal-fade-in > div.wallet-adapter-modal-container > div > ul > li > button')

    const popup = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup, '#root > div > div.sc-fpyFWH.giXzZU > div.sc-bZSZLb.sc-faIbUi.jUgnQR.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')
    const popup2 = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup2, '#root > div > div.sc-bdvvtL.dvIiel > div > div.sc-bZSZLb.sc-faIbUi.dpOAcL.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')

    const text = await actionP.extractTextFromSelector(page, '#app > div > main > div.mx-auto.rounded.p-3.animate-gradient.bg-gradient-animation.bg-\\[length\\:200\\%_200\\%\\].mb-8 > div > div.text-left.md\\:ml-6.md\\:flex-1 > p.text-xl.mb-2.leading-tight')
    if (text === 'Have you thanked a creator today?') {
        return true
    } else {
        return false
    }
}

module.exports = { loginWithPharse, loginWithPrivateKey }