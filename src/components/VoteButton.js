import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteImage } from '../actions/image';

class VoteButton extends Component {
  handleClick = () => {
    this.props.upvoteImage({
      imgur_id: this.props.imgur,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={ this.handleClick }>{ this.props.upvote }</Button>
      </div>
    )
  }
}

// Get apps state and pass it as props to VoteButton
//      > whenever state changes, the VoteButton will automatically re-render
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({upvoteImage: upvoteImage}, dispatch)
}

export default connect(null, mapDispatchToProps)(VoteButton);
