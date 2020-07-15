const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Set routes
router.get('/', list)

// Router functions
function list (req, res, next) {
  Controller.list()
    .then(post => {
      response.success(req, res, post, 200)
    })
    .catch(next)
}

module.exports = router
