const Chrome = require('../../../chrome/index.js')
const { loginWithPrivateKey, loginWithPharse } = require('../subDrip/sLogin.js')
const getCodeInvite = require('./sInvaiteCode.js')
const path = require('path');
const phantom = path.join(__dirname, '..', '..', '..', 'Extensions', 'bfnaelmomeimhlpmgjnjophhpkkoljpa', '23.10.0_0');


const getCodeRef = async (privateKey) => {
    const chrome = await Chrome(phantom)
    if (privateKey.includes(' ')) {
        const login = await loginWithPharse(chrome, privateKey)
        if (login === 'Your account has been banned.') {
            return { status: login }

        } else {
            const code = await getCodeInvite(chrome)
            if (code) {
                return { status: 'success', InviteCode: code }

            } else {
                return { status: 'failed' }

            }

        }

    } else {
        const login = await loginWithPrivateKey(chrome, privateKey)
        if (login === 'Your account has been banned.') {
            return { status: login }

        } else {
            const code = await getCodeInvite(chrome)
            if (code) {
                return { status: 'success', InviteCode: code }

            } else {
                return { status: 'failed' }

            }

        }
    }
}

module.exports = getCodeRef