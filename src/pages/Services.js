import React, { useEffect, useState } from 'react';

// material
import { Grid, Container, Typography, ImageList, ImageListItem, Box } from '@mui/material';
// components
import axios from 'axios';
import Client from '../Client';
import Page from '../components/Page';
import useStyles from './serviceStyle';

// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [services, setServices] = useState();

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${window.URL}/api/gettingservices`).then((res) => {
        setServices(res.data);
        // console.log('gettign', res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);
  // useEffect(() => {
  //   Client.fetch(
  //     `*[_type == "services"]{
  //      title,
  //      description,
  //      mainImage{
  //        asset ->{
  //          _id,
  //          url
  //        },
  //        alt,
  //       },
  //   }`
  //   ).then((data) => setServices(data));
  // }, []);
  const classes = useStyles();

  return (
    <Page title="KWS || Services">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box sx={{ marginBottom: '5px' }}>
              <Typography
                sx={{
                  marginBottom: '5px',
                  fontWeight: '900',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  color: '#27ADE3',
                  paddingTop: '50px',
                }}
              >
                SERVICES
              </Typography>
              <Typography variant="h3" sx={{ marginBottom: '5px', fontFamily: 'Poppins, sans-serif' }}>
                Customized DeFi Solutions
              </Typography>
              <Typography variant="body1" gutterBottom component="div" className={classes.servicepara}>
                Boss the decentralized finance with our Customized DeFi development services.
                <Typography variant="body1" gutterBottom component="div" className={classes.servicepara}>
                  Build platforms with features such as staking, NFT Marketplace, and more.
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} textAlign="center" sx={{ paddingTop: '50px' }}>
          {services && services.length > 0 ? (
            services.map((res, index) => (
              <Grid item xs={12} sm={6} md={6} xl={4} key={index}>
                <ImageList sx={{ maxWidth: '60px', margin: '50px auto 0px', display: 'block' }}>
                  <ImageListItem>
                    <img src={res.serviceimage} alt="" />
                  </ImageListItem>
                </ImageList>
                <Typography variant="h4">{res.serviceheading}</Typography>
                <Typography variant="body1" sx={{ padding: '0px 25px', color: '#6C7989' }}>
                  {res.servicedescriptions}
                </Typography>
              </Grid>
            ))
          ) : (
            <div className="nodata">
              <p className="data">NO DATA TO SHOW</p>
            </div>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
