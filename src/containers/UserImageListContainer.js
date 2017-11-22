import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserImages } from '../actions/image';
import ImageList from '../components/ImageList';
import Image from '../components/Image';

class UserImageListContainer extends Component {
  componentWillMount() {
    this.props.fetchUserImages({
      user_id: JSON.parse(localStorage.getItem('user')).id
    });
  }

  renderList() {
    if (this.props.images.user_images) {
      const children = this.props.images.user_images.map((user_image) => (
        <Image key={user_image.id} image={user_image} />
      ));
      return (
        <ImageList>
          {children}
        </ImageList>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {this.renderList()}
      </div>
    )
  }
}

// Get apps state and pass it as props to UserImageListContainer
//      > whenever state changes, the UserImageListContainer will automatically re-render
const mapStateToProps = (state) => {
  return {
    images: state.images,
    user_images: state.user_images
  }
}

// Get actions and pass them as props to UserImageListContainer
//      > now UserImageListContainer has this.props.fetchUserImages
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchUserImages: fetchUserImages}, dispatch);
}

export default withRouter(
  connect(mapStateToProps, matchDispatchToProps)(UserImageListContainer)
);
