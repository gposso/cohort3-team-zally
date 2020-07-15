const express = require('express')
const config = require('../config')

const countries = require('./components/countries/network')

const app = express()

app.use(express.json())

// ROUTER
app.get('/', (req, res) => {
  res.status(200).send({
    countries: `http://${config.api.host}:${config.api.port}/api/countries`
  })
})
app.use('/api/countries', countries)

app.listen(config.api.port, () => {
  console.log('Listening on port ', config.api.port)
})
