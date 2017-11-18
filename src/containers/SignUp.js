import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FormErrors from '../components/FormErrors';
import { signUpUser } from '../actions/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      formErrors: {name: '', email: '', password: ''},
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid: nameValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.signUpUser(this.state, this.history);
  }

  render() {
    return (
      <form class="user-form" onChange={ (event) => this.handleUserInput(event) }>
        <h1>Sign Up</h1>
        <div className="panel panel-default">
          <FormErrors formErrors={ this.state.formErrors } />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name</label>
          <input type="name" required className="form-control" name="name"
            placeholder="Name"
            value={ this.state.name }
            onChange={ this.handleUserInput }  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={ this.state.email }
            onChange={ this.handleUserInput }  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleUserInput }  />
        </div>
        <Button
          type="submit"
          disabled={!this.state.formValid}
          onClick={(ev) => this.onSubmit(ev)}>
          Sign Up
        </Button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signUpUser: signUpUser}, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUp)
);
