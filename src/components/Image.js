import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { likeImage } from '../actions/image';
import VoteButton from './VoteButton';

const Image = (props) => {
  const obj = JSON.parse(localStorage.getItem('user'));
  var likeButton, voteButton;
  if (obj && obj.hasOwnProperty('name')) {
    likeButton = <Button class="favorite" bsSize="small" onClick={handleClick}><span class="glyphicon glyphicon-heart"></span></Button>
  }
  if (window.location.pathname.includes('profile')) {
    voteButton = <VoteButton imgur={ props.image.cover } upvote={ props.image.upvotes }/>
  }

  function handleClick(ev) {
    ev.preventDefault();
    likeImage({
      imgur_id: props.image.cover,
      user_id: obj.id
    });
  }

  return (
    <Col md={2} id={props.image.id}>
      <div class="post">
        {likeButton}
        <a class="image-list-link" title={props.image.title} href={props.image.link} target="_blank" rel="noopener noreferrer">
          <img alt={"Click to view"} src={'http://imgur.com/' + props.image.cover + 't' + '.jpg'} />
        </a>
      </div>
      {voteButton}
    </Col>
  )
}
export default Image;
