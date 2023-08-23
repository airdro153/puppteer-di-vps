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
//     const privateKey = '3pqqYjx3an5NycWpvCWxXAo6xu7bNburDgn4eVGSTBDuC9m3yi3F2PNMb2RvmxMKBBgy12a6U4b2qsUhEKEQsznm'
//     const pharse = 'ripple venue shove master wheat one tourist license very attend enact minor'
//     const hasil = await loginSubscribe(privateKey)
//     console.log(hasil)

// }

// test()
module.exports = loginSubscribe