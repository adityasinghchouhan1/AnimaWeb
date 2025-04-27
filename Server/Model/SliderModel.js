const mongoose = require('mongoose')

const SliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const SliderData = mongoose.model('Sliderdata', SliderSchema)
module.exports = SliderData
