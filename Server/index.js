const express = require('express')
const server = express()
const core = require('cors')
const Bodyparser = require('body-parser')
const mongoose = require('mongoose')

server.use(core())
server.use(Bodyparser.json())
server.use(express.json())

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
