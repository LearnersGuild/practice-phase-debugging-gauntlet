const express = require('express')
const pets = require('./pets')
const owners = require('./owners')

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/pets'))
routes.use('/pets', pets)
routes.use('/owners', owners)

module.exports = routes
