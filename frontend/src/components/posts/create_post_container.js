import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { fetchAllTopics } from '../../actions/topic_actions';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    topics: state.topic.topics
})

const mapDispatchToProps = dispatch => ({
    fetchAllTopics: () => dispatch(fetchAllTopics()),
    createPost: post => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);