import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import PostListContainer from '../components/posts/post_list_container';
import PostContainer from '../components/posts/post_container';
import CreatePostContainer from '../components/posts/create_post_container';
import ProfileContainer from '../components/profile/profile_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <Fragment>
    <NavBarContainer />
    <Switch>
        <Route exact path='/' component={PostListContainer} />
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignupFormContainer} />
        <ProtectedRoute exact path='/submit' component={CreatePostContainer} />
        <Route exact path='/topics/:topic' component={PostListContainer} />
        <Route path='/topics/:topic/:post_id' component={PostContainer} />
        <Route path="/user/:user_name" component={ProfileContainer} />
    </Switch>
  </Fragment>
);

export default App;