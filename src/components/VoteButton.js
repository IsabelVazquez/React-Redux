import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL;

export default class VoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
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
        <Button onClick={(ev) => this.handleClick(ev)}>{this.state.counter}</Button>
        <Button onClick={this.callApi}>Call Api</Button>
      </div>
    )
  }
}
