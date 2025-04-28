const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Router = require('./Router/index')
require('dotenv').config() // <--- Load environment variables

// Middlewares
server.use(
  cors({
    origin: [process.env.CLIENT, 'http://localhost:5174'],
    credentials: true,
  })
)
server.use('/uploads', express.static('uploads'))
server.use(bodyParser.json())
server.use(express.json())
server.use('/api', Router)

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('Server is running')
      console.log('DB connected')
    })
  })
  .catch((err) => {
    console.log('Error:', err)
  })
