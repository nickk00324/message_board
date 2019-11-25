import axios from 'axios';


export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_ALL_TOPIC_POSTS = 'RECEIVE_ALL_TOPIC_POSTS';
export const RECEIVE_CURRENT_POST = 'RECEIVE_CURRENT_POST';

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const receiveAllTopicPosts = posts => ({
    type: RECEIVE_ALL_TOPIC_POSTS,
    posts
})

const receiveCurrentPost = post => ({
    type: RECEIVE_CURRENT_POST,
    post
})

export const fetchAllPosts = () => dispatch => (
    axios.get('/api/posts')
    .then( posts => dispatch(receiveAllPosts(posts)))
    .catch( err => console.log(err))
)

export const fetchAllTopicPosts = topic => dispatch => (
    axios.get(`/api/posts/${topic}`)
    .then( posts => dispatch(receiveAllTopicPosts(posts)))
    .catch( err => console.log(err))
)

export const fetchPostByID = post_id => dispatch => (
    axios.get(`/api/posts/id/${post_id}`)
    .then( post => dispatch(receiveCurrentPost(post)))
    .catch( err => console.log(err))
)