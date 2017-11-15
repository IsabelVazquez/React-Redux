import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import Search from './Search';

export default class Header extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Brand>
          Photo Viewing App
        </Navbar.Brand>
        <Nav pullRight>
          <Button href="/signup">Sign Up</Button>
          <Button href="/signin">Sign In</Button>
          <Button href="/signout">Sign Out</Button>
          <Search />
        </Nav>
      </Navbar>
    )
  }
}
