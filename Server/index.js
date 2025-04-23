const express = require('express')
const server = express()
const Bodyparser = require('body-parser')
const core = require('cors')
const mongoose = require('mongoose')

server.use(core())
server.use(Bodyparser.json)
server.use(express.json)

const DBConnection = mongoose.connect(
  'mongodb+srv://adityasingh:adi7999@userdata.p1dmydp.mongodb.net/Animaweb?retryWrites=true&w=majority&appName=userdata'
)

DBConnection.then(() => {
  server.listen(8008, (res, req) => {
    console.log('server started')
    console.log('db connect')
  })
}).catch((err) => {
  console.log(err, 'error')
})
