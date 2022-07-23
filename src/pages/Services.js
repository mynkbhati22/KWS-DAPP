import React, { useEffect, useState } from 'react';

// material
import { Grid, Container, Typography, ImageList, ImageListItem, Box } from '@mui/material';
// components
import Client from '../Client';
import Page from '../components/Page';
import useStyles from './serviceStyle';

// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [services, setServices] = useState();
  useEffect(() => {
    Client.fetch(
      `*[_type == "services"]{
       title,
       description,
       mainImage{
         asset ->{
           _id,
           url
         },
         alt, 
        },
    }`
    ).then((data) => setServices(data));
  }, []);
  const classes = useStyles();
  return (
    <Page title="KWS: Services">
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
          {services &&
            services.map((services, index) => (
              <Grid item xs={12} sm={6} md={6} xl={4} key={index}>
                {services.mainImage && services.mainImage.asset && (
                  <ImageList sx={{ maxWidth: '60px', margin: '50px auto 0px', display: 'block' }}>
                    <ImageListItem>
                      <img src={services.mainImage.asset.url} alt="" />
                    </ImageListItem>
                  </ImageList>
                )}
                <Typography variant="h4">{services.title}</Typography>
                <Typography variant="body1" sx={{ padding: '0px 25px', color:"#6C7989" }}>
                  {services.description}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
