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
        <Link to="/profile"><Button>User Profile</Button></Link>
        <Link to="/signout"><Button>Sign Out</Button></Link>
        <Search />
      </div>
    } else {
      navButtons = <div>
        <Link to="/signup"><Button>Sign Up</Button></Link>
        <Link to="/signin"><Button>Sign In</Button></Link>
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
