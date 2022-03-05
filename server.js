const express = require('express')
const app = express()
const port = 80

const album = require('./routes/album/album')

app.use('/album',album)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})