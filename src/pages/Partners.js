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
import useStyles from './serviceStyle';

// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [partners, setPartners] = useState();
  useEffect(() => {
    Client.fetch(
      `*[_type == "partners"]{
       mainImage{
         asset ->{
           _id,
           url
         },
         alt, 
        },
        title,
        description,
        link
    }`
    ).then((data) => setPartners(data));
  }, []);
  const classes = useStyles();
  return (
    <Page title="KWS: Partners">
      <Container maxWidth="xl">
        <Grid container spacing={2} textAlign="center" sx={{ paddingTop: '50px' }}>
          {partners &&
            partners.map((partners, index) => (
              <Grid item xs={12} sm={6} md={6} xl={3} key={index}>
                <Card sx={{ maxWidth: 280, height: 350, marginBottom: '50px', boxShadow: '0px 0px 7px 1px rgb(34, 171, 227, 0.3)' }}>
                  <Link href={partners.link} target="_blank" sx={{textDecoration:"none"}}>
                    <CardContent>
                      <Label
                        gutterBottom
                        component="div"
                        sx={{ marginTop: '7px',marginBottom:"7px", background: '#F58632', color: '#fff', fontSize:"15px" }}
                      >
                        {partners.title}
                      </Label>
                      <Typography variant="body2" color="text.secondary" align='left'>
                        {partners.description}
                      </Typography>
                    </CardContent>
                    <CardMedia sx={{ height: '300px' }}>
                      {partners.mainImage && partners.mainImage.asset && (
                        <ImageList sx={{ maxWidth: '40%', margin: '20px auto 0px', display: 'block' }}>
                          <ImageListItem>
                            <img src={partners.mainImage.asset.url} alt="" />
                          </ImageListItem>
                        </ImageList>
                      )}
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
