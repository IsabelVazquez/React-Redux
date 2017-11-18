import React from 'react';
import { Col, Button } from 'react-bootstrap';

const Image = (props) => {
    return (
      <Col md={2}>
        <div class="post">
          <Button class="favorite" bsSize="xsmall"><span class="glyphicon glyphicon-heart"></span></Button>
          <a class="image-list-link" title={props.image.title} href={props.image.link} target="_blank" rel="noopener noreferrer">
            <img id={props.image.id} alt={"Click to view"} src={'http://imgur.com/' + props.image.cover + 't' + '.jpg'} />
          </a>
        </div>
      </Col>
    )
}
export default Image;
