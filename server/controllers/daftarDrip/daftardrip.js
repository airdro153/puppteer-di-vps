const Chrome = require('../../../chrome/index.js')
const daftar = require('./sDaftar.js')
const subscribe = require('./sSubscribe.js')
const path = require('path');
const phantom = path.join(__dirname, '..', '..', '..', 'Extensions', 'bfnaelmomeimhlpmgjnjophhpkkoljpa', '23.10.0_0');



const daftarDrip = async (refCode) => {
    const chrome = await Chrome(phantom)
    const pharse = await daftar(chrome, refCode)

    return pharse

}


module.exports = daftarDrip