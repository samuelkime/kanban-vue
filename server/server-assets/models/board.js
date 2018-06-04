var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'board'


let board = new Schema ({
    title: {
        type: String, 
        required: true
    },
    authorId: {
        type: ObjectId,     
        required: true
    }
})


module.exports = mongoose.model(schemaName, board)