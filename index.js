const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Good job ♥️")
})

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))