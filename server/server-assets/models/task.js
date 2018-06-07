var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'task'

let task = new Schema ({
    title: { type: String, required: true },
    author: {type: String, required: true},
    listId: { type: String, required: true }
})


module.exports = mongoose.model(schemaName, task)
