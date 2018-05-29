var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds064188.mlab.com:64188/kanban-vue'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})