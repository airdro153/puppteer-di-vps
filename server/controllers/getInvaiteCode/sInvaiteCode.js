const actionP = require('puppeteer_handles')

const getInviteCode = async (chrome) => {
    let page = chrome.page
    await actionP.clickSelector(page, '#app > div > nav > div > div > div:nth-child(2) > div > button')

    await page.waitForSelector("#headlessui-dialog-panel-\\:r9\\: > div")
    const code = await actionP.extractTextFromSelector(page, "#headlessui-dialog-panel-\\:r9\\: > div > div > div.font-bit.grow.basis-0.text-center.flex.justify-center.items-center.mb-4.md\\:mb-2 > p", 1000)
    if (code) {
        return code
    } else {
        const code = await actionP.extractTextFromSelector(page, "#headlessui-dialog-panel-\\:r9\\: > div > div > p")
        return code
    }

}

module.exports = getInviteCode