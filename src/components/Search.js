import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { fetchGalleries } from '../actions/image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component {
  handleSelect = (eventKey) => {
    this.props.fetchGalleries({
      section: eventKey
    });
  }

  render() {
    return(
      <Link to="/">
        <DropdownButton title={this.props.images.images.display_name} id="bg-nested-dropdown" onSelect={ this.handleSelect }>
          <MenuItem eventKey="Viral">Viral</MenuItem>
          <MenuItem eventKey="The_More_You_Know">The More You Know</MenuItem>
          <MenuItem eventKey="Science_and_Tech">Science and Tech</MenuItem>
          <MenuItem eventKey="Gaming">Gaming</MenuItem>
          <MenuItem eventKey="Eat_What_You_Want">Eat What You Want</MenuItem>
          <MenuItem eventKey="Aww">Aww</MenuItem>
          <MenuItem eventKey="Inspiring">Inspiring</MenuItem>
          <MenuItem eventKey="Awesome">Awesome</MenuItem>
          <MenuItem eventKey="Creativity">Creativity</MenuItem>
          <MenuItem eventKey="The_Great_Outdoors">The Great Outdoors</MenuItem>
          <MenuItem eventKey="Storytime">Storytime</MenuItem>
          <MenuItem eventKey="Movies_and_TV">Movies and TV</MenuItem>
          <MenuItem eventKey="Reaction">Reaction</MenuItem>
          <MenuItem eventKey="Current_Events">Current Events</MenuItem>
          <MenuItem eventKey="Funny">Funny</MenuItem>
        </DropdownButton>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

// Get actions and pass them as props to Search
//      > now Search has this.props.fetchGalleries
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchGalleries: fetchGalleries}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);
