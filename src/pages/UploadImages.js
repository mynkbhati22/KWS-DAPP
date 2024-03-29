import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Grid, Box, Container, Card, CardMediaStyle, CardMedia, CardContent, Typography, Button } from '@mui/material';
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
      <Page title="KWS || Dapps Built By Us">
        <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
          <Typography
            variant="h3"
            sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
          >
            DAPPS BUILT BY US
          </Typography>

          <Box className="container-portfolio mt-5">
            <Grid container spacing={4}>
              {portfolio && portfolio.length > 0 ? (
                portfolio.map((res, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                      <div className="card-portfolio">
                        <div className="card-image">
                          <img src={res.portfolioimage} alt="" className="image-portfolio" />
                        </div>
                        <div className="card-detail">
                          <div className="portfolio-name">{res.portfoliotitle}</div>
                          <Grid container className="portfolio-title-grid">
                            <Grid item xs={6}>
                              <div className="portfolio-title">
                                <span className="title-text">CATOGERY</span>
                                <br />
                                <span className="title-text-value">DEFI APP</span>
                              </div>
                            </Grid>
                            {/* <Grid item xs={6}>
                              <div className="portfolio-title">
                                <Button
                                  href={`/portfolio-detail/${res.generateslug}/${res._id}`}
                                  className="view-button"
                                >
                                  VIEW
                                </Button>
                              </div>
                            </Grid> */}
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                  );
                })
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

// {/* <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
//                 <div className="card-portfolio">
//                   <div className="card-image">
//                     <img src={portfolioimg} alt="" className="image-portfolio" />
//                   </div>
//                   <div className="card-detail">
//                     <div className="portfolio-name">NAME</div>
//                     <Grid container className="portfolio-title-grid">
//                       <Grid item xs={6}>
//                         <div className="portfolio-title">
//                           <span className="title-text">Title</span>
//                           <br />
//                           <span className="title-text-value">abc</span>
//                         </div>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <div className="portfolio-title">
//                           <span className="title-text">Title</span>
//                           <br />
//                           <span className="title-text-value">abc</span>
//                         </div>
//                       </Grid>
//                     </Grid>
//                   </div>
//                 </div>
//               </Grid> */}
