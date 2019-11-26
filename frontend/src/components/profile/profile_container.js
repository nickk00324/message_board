import { connect } from 'react-redux';
import { fetchPostsByUserID } from '../../actions/post_actions';
import { fetchCommentsByUserID } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    comments: state.comment.comments,
    posts: state.post.posts,
    user: ownProps.match.params.user_name,
    viewUser: state.user.user
})

const mapDispatchToProps = dispatch => ({
    fetchCommentsByUserID: user_id => dispatch(fetchCommentsByUserID(user_id)),
    fetchPostsByUserID: user_id => dispatch(fetchPostsByUserID(user_id)),
    fetchUser: user_name => dispatch(fetchUser(user_name))
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);