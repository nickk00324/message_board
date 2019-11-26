import axios from 'axios';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_ALL_TOPIC_POSTS = 'RECEIVE_ALL_TOPIC_POSTS';
export const RECEIVE_CURRENT_POST = 'RECEIVE_CURRENT_POST';
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';

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

const receiveUserPosts = posts => ({
    type: RECEIVE_USER_POSTS,
    posts
})

const receiveNewPost = post => ({
    type: RECEIVE_NEW_POST,
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

export const fetchPostsByUserID = user_id => dispatch => (
    axios.get(`/api/users/${user_id}/posts`)
    .then( posts => dispatch(receiveUserPosts(posts)))
    .catch( err => console.log(err))
)

export const createPost = post => dispatch => (
    axios.post('api/posts/', post)
    .then( post => dispatch(receiveNewPost(post)))
    .catch( err => console.log(err))
)