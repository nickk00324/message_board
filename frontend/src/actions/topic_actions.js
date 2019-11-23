import axios from 'axios';

export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_CURRENT_TOPIC = 'RECEIVE_CURRENT_TOPIC';

const receiveTopics = topics => ({
    type: RECEIVE_TOPICS,
    topics
})

const receiveCurrentTopic = topic => ({
    type: RECEIVE_CURRENT_TOPIC,
    topic
})

export const fetchAllTopics = () => dispatch => (
    axios.get('/api/topics')
    .then( topics => dispatch(receiveTopics(topics)))
    .catch( err => console.log(err))
)

export const fetchTopic = topic_id => dispatch => (
    axios.get(`/api/topics/${topic_id}`)
    .then( topic => dispatch(receiveCurrentTopic(topic)))
    .catch( err => console.log(err))
)
