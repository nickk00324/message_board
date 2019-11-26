import {
    RECEIVE_USER
} from '../actions/user_actions';

const initialState = {
    user: {id: null}
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_USER:
            return {
                ...state,
                user: action.user.data
            }
        default:
            return state;
    }
}

export default userReducer;