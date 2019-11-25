import { connect } from 'react-redux';
import { fetchPostsByUserID } from '../../actions/post_actions';
import { fetchCommentsByUserID } from '../../actions/comment_actions';
import Profile from './profile';

const mapStateToProps = state => ({
    user: state.session.user
})

const mapDispatchToProps = dispatch => ({
    fetchCommentsByUserID: user_id => dispatch(fetchCommentsByUserID(user_id)),
    fetchPostsByUserID: user_id => dispatch(fetchPostsByUserID(user_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);