import { connect } from 'react-redux';
import CreateComment from './create_comment';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    post_id: ownProps.post_id
})

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);