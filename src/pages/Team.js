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
import Label from '../components/Label';
import Client from '../Client';
import Page from '../components/Page';

// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [team, setTeam] = useState();
  useEffect(() => {
    Client.fetch(
      `*[_type == "team"]{
        title,
        designation,
        description,
        mainImage{
          asset ->{
            _id,
            url
          },
          alt, 
         },
    }`
    ).then((data) => setTeam(data));
  }, []);

  return (
    <Page title="KWS: Team">
      <Container maxWidth="xl">
        <Grid container spacing={2} textAlign="center" sx={{ paddingTop: '20px' }}>
          {team &&
            team.map((team, index) => (
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
                    {team.mainImage && team.mainImage.asset && (
                      <ImageList sx={{ maxWidth: '100%', margin: '0px auto 0px', display: 'block' }}>
                        <ImageListItem>
                          <img src={team.mainImage.asset.url} alt="" />
                        </ImageListItem>
                      </ImageList>
                    )}
                  </CardMedia>
                  <CardContent>
                    <Label  gutterBottom sx={{ background: '#F58632', color: '#fff', fontSize: '15px' }}>
                      {team.title}
                    </Label>
                    <Typography>
                      <Label variant="body2" color="text.secondary">
                        {team.designation}
                      </Label>
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: '0.75rem', textAlign: 'start', marginTop: '7px', width: '100%' }}
                    >
                      {team.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
