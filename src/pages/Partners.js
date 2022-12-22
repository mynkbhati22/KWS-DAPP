import React, { useEffect, useState } from 'react';

// material
import {
  Grid,
  Container,
  Link,
  ImageList,
  ImageListItem,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
// components

import axios from 'axios';
import Label from '../components/Label';
import Client from '../Client';
import Page from '../components/Page';
import useStyles from './partnerStyle';

// mock

// ----------------------------------------------------------------------

const URL = 'http://localhost:7777';

export default function EcommerceShop() {
  const [partners, setPartners] = useState();

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${URL}/api/gettingpartners`).then((res) => {
        console.log('gettingpartners', res.data);
        setPartners(res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);

  // useEffect(() => {
  //   Client.fetch(
  //     `*[_type == "partners"]{
  //      mainImage{
  //        asset ->{
  //          _id,
  //          url
  //        },
  //        alt,
  //       },
  //       title,
  //       description,
  //       link
  //   }`
  //   ).then((data) => setPartners(data));
  // }, []);

  return (
    <Page title="KWS: Partners">
      <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
        <Typography
          sx={{
            marginBottom: '5px',
            fontWeight: '900',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            textAlign: 'center',
            color: '#27ADE3',
          }}
        >
          PARTNERS
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          Expanding Boundaries Every Day
        </Typography>
        <Grid container spacing={2} textAlign="center">
          {partners &&
            partners.map((res, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 280,
                    height: 350,
                    display: 'block',
                    margin: '0px auto 50px',
                    boxShadow: '0px 0px 7px 1px rgb(34, 171, 227, 0.3)',
                  }}
                  className={`${res.partnername === 'Safubets' ? 'background' : ''}`}
                >
                  <Link href={res.partnerlink} target="_blank" sx={{ textDecoration: 'none' }}>
                    <CardContent>
                      <Label
                        gutterBottom
                        className={`${res.partnername === 'Safubets' ? 'labelbg' : ''}`}
                        sx={{
                          marginTop: '7px',
                          marginBottom: '7px',
                          background: '#F58632',
                          color: '#fff',
                          fontSize: '15px',
                        }}
                      >
                        {res.partnername}
                      </Label>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                        className={`${res.partnername === 'Safubets' ? 'text' : ''}`}
                      >
                        {res.partnerdescription}
                      </Typography>
                    </CardContent>
                    <CardMedia sx={{ height: '300px' }}>
                      <ImageList sx={{ maxWidth: '40%', margin: '20px auto 0px', display: 'block' }}>
                        <ImageListItem>
                          <img src={res.partnerimage} alt="" />
                        </ImageListItem>
                      </ImageList>
                    </CardMedia>

                    {/* <CardMedia sx={{ height: '300px' }}>
                    {partners.mainImage && partners.mainImage.asset && (
                      <Link href={partners.link} target="_blank">
                        <ImageList sx={{ maxWidth: '40%', margin: '20px auto 0px', display: 'block' }}>
                          <ImageListItem>
                            <img src={partners.mainImage.asset.url} alt="" />
                          </ImageListItem>
                        </ImageList>
                      </Link>
                    )}
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                     {partners.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {partners.description}
                    </Typography>
                  </CardContent> */}
                  </Link>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
