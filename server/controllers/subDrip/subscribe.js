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
            return { status: 'success', subscribe: valid.length }
        } else {
            return { status: 'failed' }
        }


    } else {
        const succses = await loginWithPrivateKey(chrome, privateKey)
        if (succses === true) {
            const valid = await subscribe(chrome)
            await chrome.browser.close()
            return { status: 'success', subscribe: valid.length }
        } else {
            return { status: 'failed' }
        }
    }
}

module.exports = loginSubscribe