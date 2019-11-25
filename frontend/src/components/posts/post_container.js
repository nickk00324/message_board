import { connect } from 'react-redux';
import Post from './post';
import { fetchPostByID } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    topic: state.topic.topic,
    post_id: ownProps.match.params.post_id,
    currentPost: state.post.post
})

const mapDispatchToProps = dispatch => ({
    fetchPostByID: id => dispatch(fetchPostByID(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);