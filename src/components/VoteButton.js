import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteImage } from '../actions/image';

const API_URL = process.env.REACT_APP_API_URL;

class VoteButton extends Component {
  handleClick = () => {
    this.props.upvoteImage({
      imgur_id: this.props.imgur,
    });
  }

  callApi = () => {
    console.log('a')
    const credentials = {
      user_id: JSON.parse(localStorage.getItem('user')).id
    }
    const request = new Request(API_URL+'images', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({image: credentials})
    });
     fetch(request)
      .then(response => {
        console.log('b')
        return response.json()
      })
      .then(data => console.log('c',data))
      console.log('d')

      // .catch(error => {
      //   return error;
      // })
  }

  render() {
    return (
      <div>
        <Button onClick={ this.handleClick }>{ this.props.upvote }</Button>
        <Button onClick={ this.callApi }>Call Api</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({upvoteImage: upvoteImage}, dispatch)
}

export default connect(null, mapDispatchToProps)(VoteButton);
