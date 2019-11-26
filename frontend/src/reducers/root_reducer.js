import { combineReducers } from 'redux';
import session from './session_reducer';
import topic from './topic_reducer';
import post from './post_reducer';
import comment from './comment_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    session,
    topic,
    post,
    comment,
    user
})

export default rootReducer;