const express = require('express');
const router = express.Router();
const Topic = require('../../models/Topic');

router.get('/', (req, res) => {
    Topic.find()
    .sort({ date: -1 })
    .then( allTopics => res.json(allTopics))
    .catch( err => console.log(err));
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    Topic.findOne({name})
    .then( topic => {
        if(!topic){
            res.status(404).json({err: 'topic doesnt exist'})
        } else {
            res.json(topic);
        }
    })
})

router.post('/', (req, res) => {
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
            Topic.save()
            .then( topic => res.json(topic))
            .catch( err => console.log(err))   
        }
    })
})

module.exports = router;