import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imgur';
import Image from '../components/Image';
import ImageList from '../components/ImageList';

class ImageListContainer extends Component {
  renderList() {
    const children = this.props.images.map((image) => (
      <Image image={image} />
    ));
    return (
      <ImageList>
        {children}
      </ImageList>
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //must be in store from reducers
    images: state.images
  };
}

export default connect(mapStateToProps)(ImageListContainer);
