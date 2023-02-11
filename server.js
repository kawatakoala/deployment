const { response } = require('express')
const express = require('express')
const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    response.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

module.exports = app