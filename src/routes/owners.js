const express = require('express')
const { getOwnersById } = require('../actions')

const router = express.Router()

router.get('/', (req, res, next) => {
  getOwnersById()
    .then(owners => res.render('owners/index', {owners}))
    .catch(next)
})

module.exports = router