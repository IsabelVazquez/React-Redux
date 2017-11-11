import React, { Component } from 'react';
import ImageList from './components/ImageList';

export default class Image extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    fetch("/API_URL")
      .then(res => res.json())
      .then(images => this.setState({ images }))
  }

  render() {
    return <ImageList images={this.state.images} />;
  }
}
