import {
    RECEIVE_COMMENTS_FOR_POST, 
    RECEIVE_USER_COMMENTS
} from '../actions/comment_actions';

const initialState = {
    comments: []
}

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_COMMENTS_FOR_POST:
            return {
                ...state,
                comments: action.comments.data
            }
        case RECEIVE_USER_COMMENTS:
            return {
                ...state,
                comments: action.comments.data
            }
        default:
            return state;
    }
}

export default commentReducer;