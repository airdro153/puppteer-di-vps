const express = require('express')
const daftarDrip = require('./controllers/daftarDrip/daftardrip')
const subscribeDrip = require('./controllers/subDrip/subscribe')
const getCodeInvite = require('./controllers/getInvaiteCode/getcode')

const app = express()
app.use(express.json())



app.post('/api/daftar', async (req, res) => {
    const codeRef = req.body.refCode
    const pharse = await daftarDrip(codeRef)
    if (pharse.status === 'success') {
        res.json(pharse)
    } else {
        res.status(500).json(pharse)
    }
})

app.post('/api/subscribe', async (req, res) => {
    const Wallet = req.body.privateKeyOrPharse
    const result = await subscribeDrip(Wallet)
    if (result) {
        res.json(result)
    } else {
        res.status(500).json(result)
    }

})

app.post('/api/getcode', async (req, res) => {
    const Wallet = req.body.privateKeyOrPharse
    const code = await getCodeInvite(Wallet)
    res.json(code)
})










app.listen(3000, () => {
    console.log('konek di port 3000')
})