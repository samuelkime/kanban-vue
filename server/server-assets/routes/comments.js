var router = require('express').Router()
var Comments = require('../models/comment')

// Get comment by id or get all comments
router.get('/api/comments/', (req, res) =>{
    Comments.find(req.query)
        .then(comments => {
            res.status(200).send(comments)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// Create comment
router.post('/api/comments', (req, res) =>{
    Comments.create(req.body)
        .then(newComment =>{
            res.status(200).send(newComment)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// Edit comment
router.put('/api/comments/:id', (req, res) =>{
    Comments.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment=>{
        res.status(200).send({message: 'successfully updated', comment})
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})

// Delete comment
router.delete('/api/comments/:id', (req, res) =>{
    Comments.findByIdAndRemove(req.params.id)
    .then(comment=>{
        res.status(200).send({message: 'successfully deleted'})
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})

router.get('/api/tasks/:taskId/comments', (req, res) =>{
    Comments.find({taskId: req.params.taskId})
        .then(comments => {
            res.send(comments)
        }).catch(err =>{
            res.status(400).send(err)
        })
})





module.exports = { router }