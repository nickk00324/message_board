import {
    RECEIVE_ALL_POSTS,
    RECEIVE_ALL_TOPIC_POSTS,
    RECEIVE_CURRENT_POST,
    RECEIVE_USER_POSTS,
    RECEIVE_NEW_POST,
    RECEIVE_REFRESH_POSTS
} from '../actions/post_actions';

const initialState = {
    posts: [],
    dataFetched: false
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return {
                ...state,
                posts: action.posts.data,
                dataFetched: true
            }
        case RECEIVE_ALL_TOPIC_POSTS:
            return {
                ...state,
                posts: action.posts.data,
                dataFetched: true
            }
        case RECEIVE_CURRENT_POST:
            return {
                ...state,
                post: action.post.data,
                dataFetched: true
            }
        case RECEIVE_USER_POSTS:
            return {
                ...state,
                posts: action.posts.data,
                dataFetched: true
            }
        case RECEIVE_NEW_POST:
            return {
                ...state,
                new: action.post.data,
                dataFetched: true
            }
        case RECEIVE_REFRESH_POSTS:
            return {
                ...state,
                dataFetched: false
            }
        default:
            return state;
    }
}

export default postReducer;