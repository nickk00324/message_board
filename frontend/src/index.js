import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import jwt_decode from 'jwt-decode';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;

    //check if user has a token 
    if(localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {
          session: { isAuthenticated: true, user: decodedUser }
        };
        store = configureStore(preloadedState);
    
        const currentTime = Date.now() / 1000;

        //check if token is expired
        if(decodedUser.exp < currentTime){
            store.dispatch(logout());
        }
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root)
})