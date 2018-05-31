var mongoose = require('mongoose')
var connectionString = 'mongodb://samuel:test12345@ds056698.mlab.com:56698/kanbanvue'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})