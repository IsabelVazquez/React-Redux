import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Search extends Component {
  render() {
    return(
      <DropdownButton title="Categories" id="bg-nested-dropdown">
        <MenuItem eventKey="The More You Know">The More You Know</MenuItem>
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
