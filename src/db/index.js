const Promise = require('bluebird')
const pg = require('pg-promise')

const connect = pg({promiseLib: Promise})
const db = connect(process.env.DATABASE_URL)

module.exports = db