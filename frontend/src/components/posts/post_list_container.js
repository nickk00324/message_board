import { connect } from 'react-redux';
import { fetchAllPosts, fetchAllTopicPosts } from '../../actions/post_actions';
import PostList from './post_list';

const mapStateToProps = state => ({
    currentTopic: state.topic.currentTopic,
    posts: state.post.posts
})

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllTopicPosts: topic => dispatch(fetchAllTopicPosts(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);