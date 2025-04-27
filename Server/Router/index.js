const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

const {
  ContectusControllerdata,
  getContectusdata,
  UpdateContectForm,
  DeleteContectForm,
} = require('../Controllers/ContectusController')

const {
  ServicesData,
  Servisesget,
} = require('../Controllers/ServicesController')

const {
  SliderDatafunction,
  getSliderDatafunction,
} = require('../Controllers/SliderDataController')

router.post('/contectus', ContectusControllerdata)
router.get('/getcontectusdata', getContectusdata)
router.put('/updatecontect/:id', UpdateContectForm)
router.delete('/deletecontect/:id', DeleteContectForm)

//----------------- Services
router.post('/Servicesupload', upload.single('file'), ServicesData)
router.get('/Servisesget', Servisesget)

//----------------Slider

router.post('/SliderDatapost', upload.single('image'), SliderDatafunction)
router.get('/Sliderdataget', getSliderDatafunction)

module.exports = router
