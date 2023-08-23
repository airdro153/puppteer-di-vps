const Chrome = require('../../../chrome/index.js')
const login = require('./sLogin.js')
const { loginWithPrivateKey, loginWithPharse } = require('./sLogin.js')
const subscribe = require('../daftarDrip/sSubscribe.js')

const path = require('path');
const phantom = path.join(__dirname, '..', '..', '..', 'Extensions', 'bfnaelmomeimhlpmgjnjophhpkkoljpa', '23.10.0_0');


const loginSubscribe = async (privateKey) => {
    const chrome = await Chrome(phantom)

    if (privateKey.includes(' ')) {
        const succses = await loginWithPharse(chrome, privateKey)
        if (succses === true) {
            const valid = await subscribe(chrome)
            await chrome.browser.close()
            return { status: 'succeed', subscribe: valid.length }
        } else {
            return { status: 'failed' }
        }


    } else {
        const succses = await loginWithPrivateKey(chrome, privateKey)
        if (succses === true) {
            const valid = await subscribe(chrome)
            await chrome.browser.close()
            return { status: 'succeed', subscribe: valid.length }
        } else {
            return { status: 'failed' }
        }
    }
}

// const test = async () => {
//     const privateKey = 'RQzo1sksKWvVtdwUMsNrtAg4bovzhwJ17FeWmniYc8evRTEFthFU1ZYWhgYZRaC7YDXE4g4wPxTqhVjXkZG2wVM'
//     const pharse = 'ripple venue shove master wheat one tourist license very attend enact minor'
//     const hasil = await loginSubscribe(pharse)
//     console.log(hasil)

// }

// test()
module.exports = loginSubscribe