const express = require('express')
const { getPets, getOwnersById } = require('../actions')

const router = express.Router()

router.get('/', (req, res, next) => {
  getPets()
    .then(pets => res.render('pets/index', {pets}))
    .catch(next)
})

router.get('/:petId/owners', (req, res, next) => {
  const { petId } = req.query

  getOwnersById()
    .then(owners => res.json(owners))
    .catch(next)
})

module.exports = router