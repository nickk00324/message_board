import { connect } from 'react-redux';
import { fetchCommentsByPostID } from '../../actions/comment_actions';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => ({
    comments: state.comment.comments,
    dataFetched: state.comment.dataFetched,
    post_id: ownProps.post_id
})

const mapDispatchToProps = dispatch => ({
    fetchCommentsByPostID: post_id => dispatch(fetchCommentsByPostID(post_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);