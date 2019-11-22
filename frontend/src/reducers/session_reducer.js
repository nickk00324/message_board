import {
    RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';


const initialState = {
    isAuthenticated: false,
    user: undefined
}

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.user,
                user: action.user
            }
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            }
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        default:
            return state
    }
}

export default sessionReducer;