import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = state => ({
    isLoggedIn: state.session.isAuthenticated,
    user: state.session.user
})

export default connect(mapStateToProps)(NavBar);