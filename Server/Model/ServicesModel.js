const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  Title: { type: String, required: true },
})

const Service = mongoose.model('Service', ServicesSchema)

module.exports = Service
