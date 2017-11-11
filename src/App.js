import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageListContainer from './containers/ImageListContainer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ImageListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
