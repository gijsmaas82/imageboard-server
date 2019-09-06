const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const imageRouter = require('./image/router')
const loginRouter = require('./auth/router')
const userRouter = require('./user/router')

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

const port = process.env.PORT || 4000

app.use(imageRouter)
app.use(loginRouter)
app.use(userRouter)

app.listen(port, () => console.log('PORT on:', port))