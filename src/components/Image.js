import React, { Component } from 'react';

export default class Image extends Component {
    render () {
      return (
        <div class="post">
          <a class="image-list-link" href="http://www.imgur.com" target="_blank" rel="noopener noreferrer">
            <img alt="" src={process.env.PUBLIC_URL + '/test.jpg'} />
          </a>
        </div>
      )
    }
}
