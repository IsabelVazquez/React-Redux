import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { likeImage } from '../actions/image';

const Image = (props) => {
  var obj = JSON.parse(localStorage.getItem('user'));
  var likeButton;
  if (obj && obj.hasOwnProperty('name')) {
    likeButton = <Button id={props.image.id} class="favorite" bsSize="xsmall" onClick={handleClick}><span class="glyphicon glyphicon-heart"></span></Button>
  }
  
  function handleClick(ev) {
    ev.preventDefault();
    likeImage({
      imgur_id: props.image.id,
      user_id: obj.id
    });
  }

  return (
    <Col md={2}>
      <div class="post">
        {likeButton}
        <a class="image-list-link" title={props.image.title} href={props.image.link} target="_blank" rel="noopener noreferrer">
          <img alt={"Click to view"} src={'http://imgur.com/' + props.image.cover + 't' + '.jpg'} />
        </a>
      </div>
    </Col>
  )
}
export default Image;
