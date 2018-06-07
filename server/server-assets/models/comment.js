 var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'comment'


let comment = new Schema({
    body: { type: String, required: true},
    author: { type: String, required: true},
    taskId: { type: String, required: true}
})



module.exports = mongoose.model(schemaName, comment)