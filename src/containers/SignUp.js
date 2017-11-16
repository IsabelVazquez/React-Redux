import React, { Component } from 'react';
import { ControlLabel, FormControl, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//TBD: new action for handling API to users
import { fetchImages } from '../actions/imgur';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  render() {
    return (
      <form class="user-form" onChange={(event) => this.handleUserInput(event)}>
        <h1>Sign Up</h1>
        <ControlLabel>Name</ControlLabel>
          <FormControl
            type="name"
            name="name"
            value={this.state.name}
          />
        <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            name="email"
            value={this.state.email}
          />
        <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
          />
        <Button
          type="submit">
          Sign Up
        </Button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    //TBD:different props
    images: state.images,
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchImages: fetchImages}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
