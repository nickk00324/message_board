import { connect } from 'react-redux';
import { fetchCommentsByPostID } from '../../actions/comment_actions';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => ({
    comments: state.comment.comments,
    post_id: ownProps.post_id
})

const mapDispatchToProps = dispatch => ({
    fetchCommentsByPostID: comments => dispatch(fetchCommentsByPostID(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);