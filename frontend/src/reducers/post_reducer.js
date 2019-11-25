import {
    RECEIVE_ALL_POSTS,
    RECEIVE_ALL_TOPIC_POSTS,
    RECEIVE_CURRENT_POST
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
        case RECEIVE_CURRENT_POST:
            return {
                ...state,
                post: action.post.data
            }
        default:
            return state;
    }
}

export default postReducer;