import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import '../../styles/navbar.css';

const NavBar = props =>
  props.isLoggedIn ? (
    <div className="nav-bar">
      <Logo />
      <div className="nav-bar-links">
        <Link to="/submit">create post</Link>
        <Link to="/">
          <button onClick={props.logout}>logout</button>
        </Link>
        <Link to={`/user/${props.user.name}`}>{props.user.name}</Link>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <Logo />
      <div className="nav-bar-links">
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </div>
    </div>
  );

export default NavBar;