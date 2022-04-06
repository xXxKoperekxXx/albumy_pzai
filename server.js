const express = require('express')
let mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express()
const port = 4444

const album = require('./routes/album/album')

const photo = require('./routes/photo/photo')

app.use('/album',album)

app.use('/photo',photo)

app.use(express.json());
app.use(bodyParser);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
