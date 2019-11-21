import { setAuthToken } from '../util/session_api_util';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const receiveUserLogout = () => ({
    type: RECEIVE_USER_LOGOUT
})

const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
})

export const login = user => dispatch => (
    axios.post('/api/users/login', user)
    .then( res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decodedUser = jwt_decode(token);
        dispatch(receiveCurrentUser(decodedUser))
    })
    .catch( err => console.log(err))
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(receiveUserLogout());
}

export const signup = user => dispatch => (
    axios.post('/api/users/register', user)
    .then( () => dispatch(receiveUserSignIn()))
    .catch( err => console.log(err))
)
