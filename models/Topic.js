const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    posts: {
        type: [{
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        }]
    }
})

module.exports = Topic = mongoose.model('Topic', TopicSchema)