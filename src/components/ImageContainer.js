import React, { Component } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  //function to add Images
  addImages = (image) => {
    this.setState({
      images: [this.state.images, ...image],
    })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
