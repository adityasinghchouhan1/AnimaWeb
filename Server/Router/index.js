const express = require('express')
const router = express.Router()

const {
  ContectusControllerdata,
  getContectusdata,
  UpdateContectForm,
  DeleteContectForm,
} = require('../Controllers/ContectusController')

router.post('/contectus', ContectusControllerdata)
router.get('/getcontectusdata', getContectusdata)
router.put('/updatecontect', UpdateContectForm)
router.delete('/deletecontect', DeleteContectForm)

module.exports = router
