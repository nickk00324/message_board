const express = require('express');
const router = express.Router();

const Comment = require('../../models/Comment')

//get ALL comments :/
router.get('/', (req, res) => {
    Comment.find()
    .sort({date: -1 })
    .then( comments => res.json(comments))
})

//get all comments for a post
router.get('/:post_id', (req,res) => {
    const { post_id } = req.params; 
    Comment.find({ post: post_id})
    .then( comments => res.json(comments))
})

//get comment by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Comment.findById(id)
    .then( comment => res.json(comment))
})

module.exports = router;