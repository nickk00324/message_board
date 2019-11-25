import axios from 'axios';

export const RECEIVE_COMMENTS_FOR_POST = 'RECEIVE_COMMENTS_FOR_POST';

const receiveCommentsForPost = comments => ({
    type: RECEIVE_COMMENTS_FOR_POST,
    comments
})

export const fetchCommentsByPostID = post_id => dispatch => (
    axios.get(`/api/comments/${post_id}`)
    .then( comments => dispatch(receiveCommentsForPost(comments)))
    .catch( err => console.log(err))
)