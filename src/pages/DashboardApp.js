import * as React from 'react';
// @mui
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, ImageList, ImageListItem } from '@mui/material';
// components
import Page from '../components/Page';

// sections

import defidev from '../components/images/defidev.jpeg';
// STYLES

const useStyles = makeStyles((theme) => {
  return {
    kwsHeading: {
      fontSize: '2.2rem',
      fontFamily: 'Poppins, sans-serif',
      [theme.breakpoints.down('md')]: {
        fontSize: '20px !important',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '30px',
      },
    },
    headertext: {
      color: '#6C7989',
      fontSize: '17px',
      width: '90%',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
    defidev: {
      position: 'relative',
      width: '80%',
      display: 'block',
      margin: 'auto',
      borderRadius: '0.25rem',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        display: 'block',
        margin: 'auto',
      },
      [theme.breakpoints.down('lg')]: {
        width: '80%',
        display: 'block',
        margin: 'auto',
      },
    },
    box: {
      [theme.breakpoints.up('xl')]: {
        position: 'absolute',
        top: '25%',
        right: '100px',
        zIndex: '-1',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        height: '300px',
        width: '25%',
        borderRadius: '0.25rem',
      },
      [theme.breakpoints.down('xl')]: {
        position: 'absolute',
        top: '25%',
        right: '60px',
        zIndex: '-1',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        height: '180px',
        width: '25%',
        borderRadius: '0.25rem',
      },
      [theme.breakpoints.down('lg')]: {
        position: 'absolute',
        top: '25%',
        right: '50px',
        zIndex: '-1',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        height: '210px',
        width: '25%',
        borderRadius: '0.25rem',
      },
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        top: '14%',
        right: '40px',
        zIndex: '-1',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        height: '150px',
        width: '25%',
        borderRadius: '0.25rem',
      },
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '37%',
        right: '40px',
        zIndex: '-1',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        height: '170px',
        width: '20%',
        borderRadius: '0.25rem',
      },
    },
  };
});

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
