import { connect } from 'react-redux';
import Post from './post';

const mapStateToProps = state => ({
    topic: state.topic.topic
})

export default connect(mapStateToProps)(Post);