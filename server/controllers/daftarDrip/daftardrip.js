const Chrome = require('../../../chrome/index.js')
const daftar = require('./sDaftar.js')
const subscribe = require('./sSubscribe.js')
const path = require('path');
const phantom = path.join(__dirname, '..', '..', '..', 'Extensions', 'bfnaelmomeimhlpmgjnjophhpkkoljpa', '23.10.0_0');



const daftarDrip = async (refCode) => {
    const chrome = await Chrome(phantom)
    const pharse = await daftar(chrome, refCode)
    if (pharse.status === 'success') {
        const valid = await subscribe(chrome)
        if (valid) {
            await chrome.browser.close()
            return { status: 'success', subscribe: valid.length, pharse: pharse.pharse }
        } else {
            await chrome.browser.close()
            return { status: 'failed' }
        }
    }

}


module.exports = daftarDrip