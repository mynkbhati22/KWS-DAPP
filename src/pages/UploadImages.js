import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Grid, Box, Container, Card, CardMediaStyle, CardMedia, CardContent, Typography } from '@mui/material';
import './upload.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import Page from '../components/Page';
import avtarportfolio from '../components/images/amm.png';
import portfolioimg from '../components/images/portfolioimg.png';
import Label from '../components/Label';

const URL = 'http://localhost:7777';

export default function UploadImages() {
  const [images, setImages] = useState([]);

  const [portfolio, setPortfolio] = useState([]);

  const maxNumber = 69;

  // API FOR GETTING PORTFOLIO DATA

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${window.URL}/api/gettingportfolios`).then((res) => {
        setPortfolio(res.data);
        // console.log('gettingportfoliodata', res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  function createdata(title, desc, link) {
    return { title, desc, link };
  }
  const rows = [
    createdata(
      'metfx',
      'Customised marketplace for Watch-2-Earn Membership NFTs for MetFx Project on BSC.',
      'https://google.com'
    ),
    createdata(
      'metfx',
      'Customised marketplace for Watch-2-Earn Membership NFTs for MetFx Project on BSC.',
      'https://google.com'
    ),
  ];

  return (
    <>
      <Page title="KWS || Portfolios">
        <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
          <Typography
            sx={{
              marginBottom: '5px',
              fontWeight: '900',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              textAlign: 'center !important',
              color: '#27ADE3',
            }}
          >
            PORTFOLIOS
          </Typography>
          <Box className="container-portfolio">
            <Grid container spacing={1} className="portfolio-box">
              {portfolio && portfolio.length > 0 ? (
                portfolio.map((res, index) => (
                  <Grid items xxl={3} xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
                    <Link to={`/portfolio-detail/${res.generateslug}/${res._id}`} rel="noreferrer">
                      <Card
                        sx={{
                          maxWidth: 280,
                          height: 350,
                          display: 'block',
                          margin: '0px auto 50px',
                          boxShadow: '0px 0px 7px 1px rgb(34, 171, 227, 0.3)',
                          position: 'relative',
                        }}
                      >
                        <CardMedia sx={{ height: '180px' }}>
                          <div className="card0">
                            <img src={res.portfolioimage} alt="" className="teamimage" />
                          </div>
                        </CardMedia>
                        <CardContent>
                          {/* <Label gutterBottom sx={{ background: '#F58632', color: '#fff', fontSize: '15px' }}>
                          {res.portfoliocatogery}
                        </Label> */}
                          <h1 className="porrtheading">{res.portfoliotitle}</h1>
                          {/* <Typography sx={{ color: '#6C7989' }}>
                            <Label>{res.portfoliotitle}</Label>
                          </Typography> */}
                          {/* <Typography
                            sx={{
                              fontSize: '0.75rem',
                              textAlign: 'start',
                              marginTop: '7px',
                              width: '100%',
                              color: '#6C7989',
                            }}
                          >
                            {res.portfoliodetail.slice(700)}
                          </Typography> */}
                        </CardContent>
                      </Card>
                    </Link>
                    {/* <Link to={`/portfolio-detail/${res.generateslug}/${res._id}`} rel="noreferrer">
                      <Box className="portfolio-image-box">
                        <img src={res.portfolioimage} alt="" className="portfolio-background-image" />
                        <img src={res.portavatarlink} alt="" className="avtar-portfolio" />
                        <div className="portfolio-card-heading">{res.portfoliotitle}</div>
                        <div className="portfolio-card-title">{res.portfoliodescription}</div>
                        <div className="portfolio-card-link">Look IN</div>
                      </Box>
                    </Link> */}
                  </Grid>
                ))
              ) : (
                <div className="nodata">
                  <p className="data">Loading...</p>
                </div>
              )}
            </Grid>
          </Box>
        </Container>
      </Page>
    </>
  );
}
