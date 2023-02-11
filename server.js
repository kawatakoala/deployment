const express = require('express')
const PORT = process.env.PORT
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

module.exports = app