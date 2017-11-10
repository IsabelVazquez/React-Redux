import React, { Component } from 'react';
import Image from './Image';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ImageList extends Component {
  render () {
    return (
       <Grid class="post-gallery">
          <Row>
            <Image />
          </Row>
       </Grid>
    )
  }
}
