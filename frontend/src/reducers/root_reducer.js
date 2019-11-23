import { combineReducers } from 'redux';
import session from './session_reducer';
import topic from './topic_reducer';
import post from './post_reducer';

const rootReducer = combineReducers({
    session,
    topic,
    post
})

export default rootReducer;