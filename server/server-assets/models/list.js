var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'list'



let list = new Schema ({
    title: {type: String, required: true},
    boardId: {type: ObjectId,
               ref: 'board',
               required: true}
})



module.exports = mongoose.model(schemaName, list)