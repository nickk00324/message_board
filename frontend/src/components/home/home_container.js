import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    params: ownProps.match.params
})

export default connect(mapStateToProps)(Home);