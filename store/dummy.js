const countries = require('./countries')

const db = {
  countries
}

async function list (tabla) {
  return db[tabla] || []
}

module.exports = {
  list
}
