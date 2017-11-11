import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imgur';
import ImageList from '../components/ImageList';

class ImageListContainer extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
    }
  }

  // componentDidMount() {
  //   fetch("/API_URL")
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }))
  // }

  render() {
    return <ImageList images={this.state.images} />;
  }
}

function mapStateToProps(state) {
  return {
    //must be in store from reducers
    images: state.images
  };
}

export default connect(mapStateToProps)(ImageListContainer);
