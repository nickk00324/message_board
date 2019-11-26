import {
    RECEIVE_TOPICS,
    RECEIVE_CURRENT_TOPIC
} from '../actions/topic_actions';

const initialState = {
    //for useEffect later on
    topics: [{name: null}],
    currentTopic: undefined
}

const topicReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_TOPICS:
            return {
                ...state,
                topics: action.topics.data
            }
        case RECEIVE_CURRENT_TOPIC:
            return {
                ...state,
                currentTopic: action.topic.data
            }
        default:
            return state
    }
}

export default topicReducer;