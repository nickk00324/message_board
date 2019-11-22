const express = require('express');
const router = express.Router();
const Topic = require('../../models/Topic');
const Post = require('../../models/Post');
const passport = require('passport');

//get all topics
router.get('/', (req, res) => {
    Topic.find()
    .sort({ date: -1 })
    .then( allTopics => res.json(allTopics))
    .catch( err => console.log(err));
})

//get a certain topic
router.get('/:topic_id', (req, res) => {
    const { topic_id } = req.params;
    Topic.findById(topic_id)
    .then( topic => res.json(topic))
})
//create a new topic
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { name } = req.body;
    Topic.findOne({ name })
    .then( topic => {
        if(topic){
            res.status(406).json({err: 'topic already exists, go post there'})
        } else {
            const newTopic = new Topic({
                name,
                posts: []
            });
            newTopic.save()
            .then( topic => res.json(topic))
            .catch( err => console.log(err))   
        }
    })
})


module.exports = router;