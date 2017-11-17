import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imgur';
import Image from '../components/Image';
import ImageList from '../components/ImageList';

class ImageListContainer extends Component {
  renderList() {
    // must wrap .map block with conditional statement
    if (this.props.images.images.items) {
      const children = this.props.images.images.items.map((image) => (
        <Image key={image.id} image={image} />
      ));
      return (
        <div>
          <h1>{this.props.images.images.display_name}</h1>
          <ImageList>
            {children}
          </ImageList>
        </div>
      );
    }
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
  return { images: state.images };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchImages: fetchImages}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ImageListContainer);
