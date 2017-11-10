import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Brand>
          Photo Viewing App
        </Navbar.Brand>
      </Navbar>
    )
  }
}
