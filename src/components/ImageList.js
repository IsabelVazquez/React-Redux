import React, { Component } from 'react';
import Image from './Image';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ImageList extends Component {
  render () {
    return (
       <Grid class="post-gallery">
          <Row>
            <Col md={2}><Image /></Col>
            <Col md={2}><Image /></Col>
            <Col md={2}><Image /></Col>
            <Col md={2}><Image /></Col>
            <Col md={2}><Image /></Col>
            <Col md={2}><Image /></Col>
          </Row>
       </Grid>
    )
  }
}
