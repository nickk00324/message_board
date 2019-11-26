import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = user_name => dispatch => (
    axios.get(`/api/users/${user_name}`)
    .then( user => dispatch(receiveUser(user)))
    .catch( err => console.log(err))
)