import * as React from 'react';
import { Grid, Container, Typography, ImageList, ImageListItem, Box } from '@mui/material';

import useStyles from './bottomStyle';


export default function Bottom() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ marginTop: '70px' }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography variant="h3" className={classes.uiux}>
              UNIQUE USER EXPERIENCE FOR YOUR CUSTOMERS
            </Typography>
            <Typography variant="body1">
              We at KWS build uniqe UI/UX for your website/app users to help create your brand/business identity.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography variant="h3">DATA INTENSIVE SOLUTIONS FOR YOUR BUSINESS NEEDS</Typography>
            <Typography variant="body1">
              Blockchains are not an ideal place to store a large chunk of data. We at KWS can build customized
              solutions for off-chain storage of your data.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
