import { Container, Grid } from '@mui/material';
import React from 'react';
import TokenomicsSlider from './TokenomicsSlider';
import TokenomicsCard from './TokenomicsCard';

export default function TokenomicsInfo() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TokenomicsSlider />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TokenomicsCard />
        </Grid>
      </Grid>
    </Container>
  );
}
