import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Search from './Search';

export default class Header extends Component {
  render() {
    const obj = JSON.parse(localStorage.getItem('user'));
    var navButtons;
    if (obj && obj.hasOwnProperty('name')) {
      navButtons = <div>
        <Button href="/profile">User Profile</Button>
        <Button href="/signout">Sign Out</Button>
        <Search />
      </div>
    } else {
      navButtons = <div>
        <Button href="/signup">Sign Up</Button>
        <Button href="/signin">Sign In</Button>
        <Search />
      </div>
    }
    return(
      <Navbar>
        <Navbar.Brand>
          <Link to="/">Photo Viewing App</Link>
        </Navbar.Brand>
        <Nav pullRight>
          {navButtons}
        </Nav>
      </Navbar>
    )
  }
}
