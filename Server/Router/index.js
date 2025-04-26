const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})

const upload = multer({ storage: storage })

const {
  ContectusControllerdata,
  getContectusdata,
  UpdateContectForm,
  DeleteContectForm,
} = require('../Controllers/ContectusController')

const { ServicesData } = require('../Controllers/ServicesController')

router.post('/contectus', ContectusControllerdata)
router.get('/getcontectusdata', getContectusdata)
router.put('/updatecontect/:id', UpdateContectForm)
router.delete('/deletecontect/:id', DeleteContectForm)

//
router.post('/Servicesupload', upload.single('file'), ServicesData)

module.exports = router
