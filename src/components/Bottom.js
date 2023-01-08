import * as React from 'react';
import { Grid, Container, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material';

import { Link } from 'react-router-dom';
import useStyles from './bottomStyle';
import websiteDev from './images/website-dev.jpg';
import backend from './images/backend.jpg';

export default function Bottom() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ marginTop: '70px' }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h1" className={classes.number}>
              1
            </Typography>
            <Typography component="span" className={classes.span}>
              FRONTEND DEVELOPER
            </Typography>
            <Typography variant="h3" className={classes.uiux}>
              UNIQUE USER EXPERIENCE FOR YOUR CUSTOMERS
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We at KWS build uniqe UI/UX for your website/app users to help create your brand/business identity.
            </Typography>
            <Link to="/portfolio" target="_blank" className={classes.portfolioButton}>
              Browse Portfolio
            </Link>
          </Box>
          <Box>
            <ImageList sx={{ marginTop: '50px' }} className={classes.bottomImage}>
              <ImageListItem>
                <img src={websiteDev} alt="" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <ImageList className={classes.bottomImage}>
              <ImageListItem>
                <img src={backend} alt="" />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h1" className={classes.number}>
              2
            </Typography>
            <Typography component="span" className={classes.span}>
              BACKEND/IPFS DEVELOPMENT
            </Typography>
            <Typography variant="h3" className={classes.uiux}>
              DATA INTENSIVE SOLUTIONS FOR YOUR BUSINESS NEEDS
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Blockchains are not an ideal place to store a large chunk of data. We at KWS can build customized
              solutions for off-chain storage of your data.
            </Typography>
            <Button href="https://t.me/ARRN4YA" target="_blank" className={classes.portfolioButton}>
              Get Instant Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
