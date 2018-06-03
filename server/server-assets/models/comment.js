var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'comment'


let comment = new Schema({
    body: { type: String, required: true },
    username: {
        type: String,
        
    },
    authorId: {
        type: ObjectId,
        
        required: true
    }
    ,
    taskId: {
        type: ObjectId,
        required: true
    },
    boardId: {
        type: ObjectId,
       
        required: true
    },
    listId: {
        type: ObjectId,
    
        required: true
    }
})



module.exports = mongoose.model(schemaName, comment)