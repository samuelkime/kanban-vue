var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'task'

let task = new Schema ({
    body: {type: String, required: true},
    author: {type: String, required: true},
    authorId: {type: ObjectId,
               ref: 'User',
               required: true
    },
    listId: {type: ObjectId, 
        ref: 'list', 
        required: true}
})


module.exports = mongoose.model(schemaName, task)
