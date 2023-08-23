const actionP = require('puppeteer_handles')

const subscribe = async (chrome) => {
    const page = chrome.page
    await page.goto('https://drip.haus/', { waitUntil: 'networkidle2' })
    await actionP.clickSelector(page, '#headlessui-menu-button-\\:r1\\:')

    const validSubscribe = []
    for (let i = 1; i <= 25; i++) {
        await actionP.clickSelector(page, `#headlessui-menu-items-\\:r5\\: > a:nth-child(${i})`) //buka link subscribe
        await actionP.extractTextFromSelector(page, "#app > div > main > div > div > h1 > span")
        const textxSub = await actionP.extractTextFromSelector(page, "#app > div > main > div > div > div.relative.leading-\\[0\\.75\\].mb-6.md\\:mb-10 > div > div.text-sm.md\\:text-lg.leading-tight.md\\:flex-1.md\\:ml-6.text-left.lg\\:ml-12.md\\:flex.md\\:flex-col.justify-center.md\\:max-w-xl > div.flex.gap-3.flex-wrap.mb-6 > div", 150)//extract text subscribe
        if (textxSub !== 'Subscribed') {
            await actionP.clickSelector(page, "#app > div > main > div > div > div.relative.leading-\\[0\\.75\\].mb-6.md\\:mb-10 > div > div.text-sm.md\\:text-lg.leading-tight.md\\:flex-1.md\\:ml-6.text-left.lg\\:ml-12.md\\:flex.md\\:flex-col.justify-center.md\\:max-w-xl > button")//click subscribe
            validSubscribe.push('Subscribed')
        } else if (textxSub === 'Subscribed') {
            validSubscribe.push(textxSub)
        }
    }
    return validSubscribe
}

module.exports = subscribe