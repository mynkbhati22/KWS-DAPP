import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import useStyles from './dynamicStyle';

export default function DynamicContent() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <div className="dynamic-heading">
              <b className="heading">KWS has a dynamic team of blockchain, frontend & backend developers.</b>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography className={classes.dynamicPara}>
              We take care of all your token launch needs. Creation of UI/UX and landing page for your token, Smart
              Contract, ICO/IDO launchpad, NFT Minting & Marketplace, various DAPPs, and more.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: '70px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <CheckCircleIcon className={classes.checkIcon} />
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              100% Legit
            </Typography>
            <Typography variant="body1" sx={{ color: '#6C7989', fontSize: '17px', marginTop: '10px' }}>
              The volume of work we deliver each month speaks for itself. We have delivered high quality DeFi services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CheckCircleIcon className={classes.checkIcon} />
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Escrow Payments
            </Typography>
            <Typography variant="body2" sx={{ color: '#6C7989', fontSize: '17px', marginTop: '10px' }}>
              We believe in transparency. We offer escrow payment options to our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CheckCircleIcon className={classes.checkIcon} />
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Consultation & Support
            </Typography>
            <Typography variant="body2" sx={{ color: '#6C7989', fontSize: '17px', marginTop: '10px' }}>
              Our team of experts will guide you throughout the life of your projects.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
