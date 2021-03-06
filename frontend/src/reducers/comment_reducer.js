import {
    RECEIVE_COMMENTS_FOR_POST, 
    RECEIVE_USER_COMMENTS,
    RECEIVE_NEW_COMMENT,
    RECEIVE_REFRESH_COMMENTS
} from '../actions/comment_actions';

const initialState = {
    comments: [],
    dataFetched: false
}

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_COMMENTS_FOR_POST:
            return {
                ...state,
                comments: action.comments.data,
                dataFetched: true
            }
        case RECEIVE_USER_COMMENTS:
            return {
                ...state,
                comments: action.comments.data
            }
        case RECEIVE_NEW_COMMENT:
            return {
                ...state,
                new: action.comment.data
            }
        case RECEIVE_REFRESH_COMMENTS:
            return {
                ...state,
                dataFetched: false
            }
        default:
            return state;
    }
}

export default commentReducer;