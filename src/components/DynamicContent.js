import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useStyles from './dynamicStyle';

export default function DynamicContent() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography className={classes.dynamicHeading} variant="h2">
            KWS has a dynamic team of blockchain, frontend & backend developers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography className={classes.dynamicPara}>
            We take care of all your token launch needs. Creation of UI/UX and landing page for your token, Smart
            Contract, ICO/IDO launchpad, NFT Minting & Marketplace, various DAPPs, and more.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
