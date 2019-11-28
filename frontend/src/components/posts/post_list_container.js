import { connect } from 'react-redux';
import { fetchAllPosts, fetchAllTopicPosts, fetchPostByID, refreshPosts } from '../../actions/post_actions';
import PostList from './post_list';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    currentTopic: state.topic.currentTopic,
    posts: state.post.posts,
    topic: ownProps.match.params.topic,
    dataFetched: state.post.dataFetched
})

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllTopicPosts: topic => dispatch(fetchAllTopicPosts(topic)),
    fetchPostByID: post => dispatch(fetchPostByID(post)),
    refreshPosts: () => dispatch(refreshPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(PostList);