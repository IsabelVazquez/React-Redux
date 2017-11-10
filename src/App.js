import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';

import './App.css';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchImages();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
