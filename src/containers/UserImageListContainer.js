import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';

import { fetchUserImages } from '../actions/image';
import ImageList from '../components/ImageList';

class UserImageListContainer extends Component {
  componentWillMount() {
    this.props.fetchUserImages({
      user_id: JSON.parse(localStorage.getItem('user')).id
    });
  }

  renderList() {
    if (this.props.images.user_images) {
      const children = this.props.images.user_images.map((user_image) => (
        <Col md={2}>
          <div class="post">
            <a class="image-list-link" title={user_image.data.title} href={user_image.data.link} target="_blank" rel="noopener noreferrer">
              <img alt={"Click to view"} src={'http://imgur.com/' + user_image.data.id + 't' + '.jpg'} />
            </a>
          </div>
        </Col>
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
