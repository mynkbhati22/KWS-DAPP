import * as React from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import useStyles from '../components/style';

// components
import Page from '../components/Page';

// sections

import defidev from '../components/images/defidev.jpeg';
// STYLES

export default function DashboardApp() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" className={classes.kwsHeading}>
              Leading{' '}
              <Typography component="span" variant="h2" color="#22ABE3" className={classes.kwsHeading}>
                Blockchain
              </Typography>
            </Typography>
            <Typography variant="h2" gutterBottom className={classes.kwsHeading}>
              <Typography component="span" variant="h2" color="#22ABE3" className={classes.kwsHeading}>
                Development{' '}
              </Typography>
              Services
            </Typography>
            <Typography className={classes.headertext}>
              One-stop solution for all your blockchain development needs. Smart contracts (ERC-20/ERC-721), DAPPs,
              ICO/IDOs, Launchpads, and more. Customised Solutions for every need.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <ImageList className={classes.defidev}>
              <ImageListItem>
                <img src={defidev} alt="" />
              </ImageListItem>
            </ImageList>
            <Typography className={classes.box} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
