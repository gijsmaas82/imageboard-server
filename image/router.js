const { Router } = require('express')
const Image = require('./model')
const auth = require('../auth/middleware')

const router = new Router()

router.get('/image', (req, res, next) => {
  Image.findAll()
    .then(images => res.json(images))
    .catch(next)
})

router.post('/image', auth, (req, res, next) => {
  Image.create(req.body)
    .then(image => res.json(image))
    .catch(next)
})

module.exports = router