import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import PostListContainer from '../components/posts/post_list_container';
import PostContainer from '../components/posts/post_container';

const App = () => (
  <Fragment>
    <NavBarContainer />
    <Switch>
        <Route exact path='/' component={PostListContainer} />
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/topics/:topic' component={PostListContainer} />
        <Route path='/topics/:topic/:post_id' component={PostContainer} />
    </Switch>
  </Fragment>
);

export default App;