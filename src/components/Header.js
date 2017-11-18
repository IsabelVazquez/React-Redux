import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import Search from './Search';

export default class Header extends Component {
  render() {
    var obj = JSON.parse(localStorage.getItem('user'));
    var navButtons;
    if (obj && obj.hasOwnProperty('name')) {
      navButtons = <Button href="/signout">Sign Out</Button>
    } else {
      navButtons = <div><Button href="/signup">Sign Up</Button><Button href="/signin">Sign In</Button></div>
    }
    return(
      <Navbar>
        <Navbar.Brand>
          Photo Viewing App
        </Navbar.Brand>
        <Nav pullRight>
          {navButtons}
          <Search />
        </Nav>
      </Navbar>
    )
  }
}
