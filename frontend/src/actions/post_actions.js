import axios from 'axios';


export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_ALL_TOPIC_POSTS = 'RECEIVE_ALL_TOPIC_POSTS'

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const receiveAllTopicPosts = posts => ({
    type: RECEIVE_ALL_TOPIC_POSTS,
    posts
})

export const fetchAllPosts = () => dispatch => (
    axios.get('/api/posts')
    .then( posts => dispatch(receiveAllPosts(posts)))
    .catch( err => console.log(err))
)

export const fetchAllTopicPosts = topic_id => dispatch => (
    axios.get(`/api/posts/${topic_id}`)
    .then( posts => dispatch(receiveAllTopicPosts(posts)))
    .catch( err => console.log(err))
)