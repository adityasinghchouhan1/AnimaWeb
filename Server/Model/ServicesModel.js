import mongoose from 'mongoose'

const ServicesSchema = mongoose.schema({
  file: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  Title: { type: String, required: true },
})
