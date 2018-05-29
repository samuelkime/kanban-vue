var router = require('express').Router()
var Boards = require('../models/board')

router.get('/api/boards/:id?', (req, res) =>{
    if (req.params.id ){
        Boards.findById
    }
})



module.exports = {router}