var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'comments'


let comments = new Schema({
    body: { type: String, required: true },
    username: {
        type: String,
        ref: 'User'
    },
    authorId: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
    ,
    taskId: {
        type: ObjectId,
        ref: 'task',
        required: true
    },
    boardId: {
        type: ObjectId,
        ref: 'board',
        required: true
    },
    listId: {
        type: ObjectId,
        ref: 'list',
        required: true
    }
})



module.exports = mongoose.model(schemaName, comments)