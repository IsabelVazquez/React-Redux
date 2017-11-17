import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { fetchImages } from '../actions/imgur';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component {
  handleSelect = (eventKey) => {
    this.props.fetchImages(eventKey);
  }

  render() {
    return(
      <DropdownButton title={this.props.images.images.display_name} id="bg-nested-dropdown" onSelect={ this.handleSelect }>
        <MenuItem eventKey="Viral">Viral</MenuItem>
        <MenuItem eventKey="The_More_You_Know">The More You Know</MenuItem>
        <MenuItem eventKey="Science and Tech">Science and Tech</MenuItem>
        <MenuItem eventKey="Gaming">Gaming</MenuItem>
        <MenuItem eventKey="Eat What You Want">Eat What You Want</MenuItem>
        <MenuItem eventKey="Aww">Aww</MenuItem>
        <MenuItem eventKey="Inspiring">Inspiring</MenuItem>
        <MenuItem eventKey="Awesome">Awesome</MenuItem>
        <MenuItem eventKey="Creativity">Creativity</MenuItem>
        <MenuItem eventKey="The Great Outdoors">The Great Outdoors</MenuItem>
        <MenuItem eventKey="Storytime">Storytime</MenuItem>
        <MenuItem eventKey="Movies and TV">Movies and TV</MenuItem>
        <MenuItem eventKey="Reaction">Reaction</MenuItem>
        <MenuItem eventKey="Current Events">Current Events</MenuItem>
        <MenuItem eventKey="Funny">Funny</MenuItem>
      </DropdownButton>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

// Get actions and pass them as props to Search
//      > now Search has this.props.fetchImages
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchImages: fetchImages}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);
