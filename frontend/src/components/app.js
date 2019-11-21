import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import MainContainer from '../components/main/main_container';

const App = () => (
  <Fragment>
    <NavBarContainer />
    <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignupFormContainer} />
    </Switch>
  </Fragment>
);

export default App;