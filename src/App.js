import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';

import './App.css';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchImages();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Image />
        <Footer />
      </div>
    );
  }
}

export default App;
