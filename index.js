const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/hook', (req, res) => {
    console.log(req.body, req.headers)
    res.status(200)
})

const secret = "afgsfjblbkhafgsdmjgmfdhghdhfd"

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))