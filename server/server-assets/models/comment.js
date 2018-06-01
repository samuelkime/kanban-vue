var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'comment'


let comment = new Schema ({
    body: {type: String, required: true},
    authorName: {type: String, required: true},
    UserId: {
             type: ObjectId, 
             ref: 'User', 
             required: true}
             ,
    taskId: {
             type: ObjectId, 
             ref: 'task', 
             required: true 
            }
})



module.exports = mongoose.model(schemaName, comment)