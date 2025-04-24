const express = require('express')
const router = express.Router()

const {
  ContectusControllerdata,
  getContectusdata,
} = require('../Controllers/ContectusController')

router.post('/contectus', ContectusControllerdata)
router.get('/getcontectusdata', getContectusdata)

module.exports = router
