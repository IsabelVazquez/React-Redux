import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const ImageList = ({children}) => (
  <Grid>
    <Row>
      {children}
    </Row>
  </Grid>
)

export default ImageList;
