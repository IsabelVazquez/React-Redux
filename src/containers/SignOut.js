import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutUser } from '../actions/user';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <Redirect to='/' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signOutUser: signOutUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignOut);
