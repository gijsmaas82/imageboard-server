const express = require('express')
const db = require('./db')
const Image = require('./image/model')

const app = express()

const port = process.env.PORT || 4000

app.listen(port, () => console.log('PORT on:', port))