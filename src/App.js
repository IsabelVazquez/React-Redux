import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ImageListContainer from './containers/ImageListContainer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ImageListContainer />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signout' component={SignOut} />
        <Footer />
      </div>
    );
  }
}

export default App;
