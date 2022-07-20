import { Container, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import React from 'react';
import TokenomicsSlider from './TokenomicsSlider';

export default function TokenomicsInfo() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TokenomicsSlider/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          hello
        </Grid>
      </Grid>
    </Container>
  );
}
