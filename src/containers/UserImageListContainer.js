import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';

class UserImageListContainer extends Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    )
  }
}

// Get apps state and pass it as props to UserImageListContainer
//      > whenever state changes, the UserImageListContainer will automatically re-render
const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default withRouter(
  connect(mapStateToProps, null)(UserImageListContainer)
);
