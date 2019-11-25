import {
    RECEIVE_COMMENTS_FOR_POST
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
        default:
            return state;
    }
}

export default commentReducer;