const actionP = require('puppeteer_handles')


const garap = async (chrome, refCode) => {
    let kerja = chrome.page
    const browser = chrome.browser
    await kerja.goto('https://drip.haus', { waitUntil: 'networkidle2' })

    const phantom = await actionP.switchToSecondTab(browser, 'chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > div > div.sc-llYSUQ.sc-jHkVzv.cqBDfb.dyVEVs > button.sc-eCImPb.fgwvjA')

    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/input', 'wallupai')
    await actionP.inputToXpath(phantom, '/html/body/div/main/div[2]/form/div[1]/div[2]/div/div/input', 'wallupai')

    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-cxpSdN.sc-caiLqq.sc-fbyfCU.dcZihx.gQDEA-d.jnxXJu > span > input[type=checkbox]')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')

    const selector = '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-llYSUQ.sc-kLwhqv.eRDBMJ > div.sc-llYSUQ.sc-hmjpVf.hdxA-DF.fuVUXo > div > div.sc-cCcXHH.bIbmDp';
    const pharse = await actionP.readPharse(phantom, selector)

    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > div.sc-cxpSdN.sc-caiLqq.sc-dtMgUX.dcZihx.gQDEA-d.fmewbM > span > input[type=checkbox]')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')


    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')
    await actionP.clickSelector(phantom, '#root > main > div.sc-jlRLRk.ittrOY > form > button')




    kerja = await actionP.ifTabDestroy(kerja)
    await actionP.clickSelector(kerja, '#app > div > nav > div > div > div:nth-child(2) > div > div > button')
    await actionP.clickSelector(kerja, 'body > div.wallet-adapter-modal.wallet-adapter-modal-fade-in > div.wallet-adapter-modal-container > div > ul > li > button')

    const popup = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup, '#root > div > div.sc-fpyFWH.giXzZU > div.sc-bZSZLb.sc-faIbUi.jUgnQR.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')
    const popup2 = await actionP.handlePopUpExtansion(browser);
    await actionP.clickSelector(popup2, '#root > div > div.sc-bdvvtL.dvIiel > div > div.sc-bZSZLb.sc-faIbUi.dpOAcL.gIfJjz > div > button.sc-hKwDye.ljaZWs.sc-jRQBWg.kHmDzY')

    await actionP.fillInputsArry(kerja, '.mb-16 input', refCode)

    // await actionP.clickSelector(kerja, '#app > div > div.max-w-2xl.text-center > form > button')
    // await kerja.waitForSelector("#headlessui-dialog-panel-\\:ra\\: > div")

    return pharse


}

module.exports = garap