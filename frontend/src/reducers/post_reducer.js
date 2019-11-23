import {
    RECEIVE_ALL_POSTS,
    RECEIVE_ALL_TOPIC_POSTS
} from '../actions/post_actions';

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return {
                ...state,
                posts: action.posts.data
            }
        case RECEIVE_ALL_TOPIC_POSTS:
            return {
                ...state,
                posts: action.posts.data
            }
        default:
            return state;
    }
}

export default postReducer;