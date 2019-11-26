const express = require('express');
const router = express.Router();

const Topic = require('../../models/Topic');
const Post = require('../../models/Post');

//get all posts
router.get('/', (req, res) => {
    Post.find()
    .sort({date: -1 })
    .populate('topic', 'name')
    .populate('author', 'name')
    .then( posts => res.json(posts))

})

//get all posts under a topic
router.get('/:topic', (req,res) => {
    const { topic } = req.params;
    Topic.findOne({ name: topic})
    .then( topic => {
        Post.find( {topic: topic.id})
        .populate('topic', 'name')
        .populate('author', 'name')
        .then( posts => res.json(posts))
        .catch( err => console.log(err))
    })
    .catch( err => console.log(err))
})

//add post to topic
router.post('/', (req, res) => {
    const { title, body, author, topic_id } = req.body;
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
router.get('/id/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
    .populate('topic', 'name')
    .populate('author', 'name')
    .then( post => res.json(post))
})


module.exports = router;