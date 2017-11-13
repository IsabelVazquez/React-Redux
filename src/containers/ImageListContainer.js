import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imgur';
import Image from '../components/Image';
import ImageList from '../components/ImageList';

class ImageListContainer extends Component {
  renderList() {
    return (
      <div>Hello</div>
      // <ImageList>
      //   {this.props.images.map((image) => (
      //     <Image image={image} />
      //   ))}
      // </ImageList>
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
    images: state.images
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchImages: fetchImages}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImageListContainer);
