import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Image from '../components/Image';
import ImageList from '../components/ImageList';

class ImageListContainer extends Component {
  renderList() {
    // must wrap .map block with conditional statement
    if (this.props.images.images.items) {
      const children = this.props.images.images.items.map((image) => (
        <Image key={image.id} image={image} />
      ));
      var obj = JSON.parse(localStorage.getItem('user'));
      var welcome;
      if (obj && obj.hasOwnProperty('name')) {
        welcome = <h1>Welcome, {obj.name}</h1>
      }
      return (
        <div>
          {welcome}
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

// Get apps state and pass it as props to ImageListContainer
//      > whenever state changes, the ImageListContainer will automatically re-render
const mapStateToProps = (state) => {
  return {
    images: state.images
  };
}

export default withRouter(
  connect(mapStateToProps, null)(ImageListContainer)
);
