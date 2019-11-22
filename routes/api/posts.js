const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

//get all posts
router.get('/', (req, res) => {
    Post.find()
    .sort({date: -1 })
    .then( posts => res.json(posts))
    .catch( err => console.log(err))
})

//get all posts under a topic
router.get('/:topic_id', (req,res) => {
    const { topic_id } = req.params;
    Post.findById(topic_id)
    .then( posts => res.json(posts));
})

//add post to topic
router.post('/:topic_id', (req, res) => {
    const { topic_id } = req.params;
    const { title, body, author } = req.body;
    const newPost = new Post({
        title,
        body,
        author,
        topic: topic_id
    });
    newPost.save()
    .then ( post => res.json(post))
})

//get post by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
    .then( post => res.json(post))
})


module.exports = router;