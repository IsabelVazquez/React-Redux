import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Search from './Search';

export default class Header extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Brand>
          Photo Viewing App
        </Navbar.Brand>
        <Nav pullRight>
          <Search />
        </Nav>
      </Navbar>
    )
  }
}
