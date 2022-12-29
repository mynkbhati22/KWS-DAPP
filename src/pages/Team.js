import React, { useEffect, useState } from 'react';

// material
import { Grid, Container, ImageList, ImageListItem, Card, CardMedia, CardContent, Typography } from '@mui/material';
// components

import axios from 'axios';

import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Label from '../components/Label';
import Client from '../Client';
import Page from '../components/Page';

// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${window.URL}/api/gettingteammembers`).then((res) => {
        setTeam(res.data);
        // console.log('gettingportfoliodata', res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);
  // useEffect(() => {
  //   Client.fetch(
  //     `*[_type == "team"]{
  //       title,
  //       designation,
  //       description,
  //       mainImage{
  //         asset ->{
  //           _id,
  //           url
  //         },
  //         alt,
  //        },
  //   }`
  //   ).then((data) => setTeam(data));
  // }, []);

  return (
    <Page title="KWS: Team">
      <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
        <Grid container spacing={2} textAlign="center" sx={{ paddingTop: '20px' }}>
          {team &&
            team.map((res, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 280,
                    height: 350,
                    display: 'block',
                    margin: '0px auto 50px',
                    boxShadow: '0px 0px 7px 1px rgb(34, 171, 227, 0.3)',
                  }}
                >
                  <CardMedia sx={{ height: '180px' }}>
                    <ImageList sx={{ maxWidth: '100%', margin: '0px auto 0px', display: 'block' }}>
                      <ImageListItem>
                        <img src={res.teammemberimage} alt="" />
                      </ImageListItem>
                    </ImageList>
                  </CardMedia>
                  <CardContent>
                    <Label gutterBottom sx={{ background: '#F58632', color: '#fff', fontSize: '15px' }}>
                      {res.teammembername}
                    </Label>
                    <Typography sx={{ color: '#6C7989' }}>
                      <Label>{res.teammemberdesignation}</Label>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        textAlign: 'start',
                        marginTop: '7px',
                        width: '100%',
                        color: '#6C7989',
                      }}
                    >
                      {res.teammemberdescription}
                    </Typography>
                    <a href={res.teammembersociallink} target="_blank" rel="noreferrer" className="sociallinkteam">
                      <AiFillLinkedin size={32} color="red" className="text-left" />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
