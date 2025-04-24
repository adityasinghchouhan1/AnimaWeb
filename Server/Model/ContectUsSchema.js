const mongoose = require('mongoose')

const ContectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    contact: {
      type: Number,
      require: true,
    },
    mail: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

const Contectus = mongoose.model('contectformData', ContectSchema)

module.exports = Contectus
