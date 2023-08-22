const express = require('express')
const daftarDrip = require('./controllers/daftarDrip/daftardrip')

const app = express()
app.use(express.json())



app.get('/api/daftar', async (req, res) => {
    const codeRef = req.body.refCode
    const pharse = await daftarDrip(codeRef)
    res.json(pharse)
})



 









app.listen(3000, () => {
    console.log('konek di port 3000')
})