import React, { Component } from 'react';
import { fetchImages } from './actions/imgur';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchImages();
  // }

  render() {
    return (
      <div className="App">
        <h1>Photo Viewing App</h1>
      </div>
    );
  }
}

export default App;
