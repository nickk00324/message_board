import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

const NavBar = props =>
  props.isLoggedIn ? (
    <Logo />
  ) : (
    <div className="nav-bar">
      <Logo />
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
    </div>
  );

export default NavBar;