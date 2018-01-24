const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

function start() { // eslint-disable-line import/prefer-default-export
  const PORT = process.env.PORT || 3000
  const ROOT_DIR = path.resolve(__dirname, '../')

  const app = express()

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))

  app.use(express.static(`${ROOT_DIR}/public`))
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  app.use(routes)

  app.use((req, res) => {
    res.status(404).render('common/not_found')
  })

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(404).render('common/error', {error: err})
  })

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`) // eslint-disable-line no-console
  })
}

module.exports = {
  start
}