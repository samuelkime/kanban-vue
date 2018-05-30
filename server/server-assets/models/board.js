var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'board'


let board = new Schema ({
    title: {type: String, required: true},
    author: {type: String, required: true},
})


module.exports = mongoose.model(schemaName, board)