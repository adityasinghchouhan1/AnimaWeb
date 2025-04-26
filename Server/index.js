const express = require('express')
const server = express()
const cors = require('cors')
const Bodyparser = require('body-parser')
const mongoose = require('mongoose')
const Router = require('./Router/index')

server.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // allow multiple origins
    credentials: true, // if you're using cookies or sessions
  })
)
server.use('/uploads', express.static('uploads'))

server.use(Bodyparser.json())
server.use(express.json())
server.use('/api', Router)

const DBConnection = mongoose.connect(
  'mongodb+srv://adityasingh:adi7999@userdata.p1dmydp.mongodb.net/Animaweb?retryWrites=true&w=majority&appName=userdata'
)

DBConnection.then(() => {
  server.listen(8008, (req, res) => {
    console.log('server is running')
    console.log('db connected')
  })
}).catch((err) => {
  console.log('error', err)
})
