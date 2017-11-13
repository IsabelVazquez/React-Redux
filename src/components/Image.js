import React from 'react';
import { Col } from 'react-bootstrap';

const Image = (props) => {
    return (
      <Col md={2}>
        <div class="post" id={props.image.id}>
          <a class="image-list-link" id={props.image.id} title={props.image.title} href={props.image.link} target="_blank" rel="noopener noreferrer">
            <img alt="" src={'http://imgur.com/' + props.image.cover + 't' + '.jpg'} />
          </a>
        </div>
      </Col>
    )
}
export default Image;
