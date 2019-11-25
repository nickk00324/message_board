const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('Post', PostSchema);