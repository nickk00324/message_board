import axios from 'axios';

export const RECEIVE_COMMENTS_FOR_POST = 'RECEIVE_COMMENTS_FOR_POST';
export const RECEIVE_USER_COMMENTS = 'RECEIVE_USER_COMMENTS';

const receiveCommentsForPost = comments => ({
    type: RECEIVE_COMMENTS_FOR_POST,
    comments
})

const receiveUserComments = comments => ({
    type: RECEIVE_USER_COMMENTS,
    comments
})

export const fetchCommentsByPostID = post_id => dispatch => (
    axios.get(`/api/comments/${post_id}`)
    .then( comments => dispatch(receiveCommentsForPost(comments)))
    .catch( err => console.log(err))
)

export const fetchCommentsByUserID = user_id => dispatch => (
    axios.get(`/api/users/${user_id}/comments`)
    .then( comments => dispatch(receiveUserComments(comments)))
    .catch( err => console.log(err))
)