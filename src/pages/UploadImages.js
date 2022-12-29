import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Grid, Box, Container, Card, CardMediaStyle } from '@mui/material';
import './upload.css';

import axios from 'axios';

import avtarportfolio from '../components/images/amm.png';
import portfolioimg from '../components/images/portfolioimg.png';

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
        console.log('gettingportfoliodata', res.data);
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
      <Box className="container-portfolio">
        <Grid container spacing={1} className="portfolio-box">
          {portfolio && portfolio.length > 0 ? (
            portfolio.map((res, index) => (
              <Grid items xxl={4} xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
                <a href={res.portfoliolink} target="_blank" rel="noreferrer">
                  <Box className="portfolio-image-box">
                    <img src={res.portfolioimage} alt="" className="portfolio-background-image" />
                    <img src={res.portavatarlink} alt="" className="avtar-portfolio" />
                    <div className="portfolio-card-heading">{res.portfoliotitle}</div>
                    <div className="portfolio-card-title">{res.portfoliodescription}</div>
                    <div className="portfolio-card-link">
                      <p>{res.portfoliolink}</p>
                    </div>
                  </Box>
                </a>
              </Grid>
            ))
          ) : (
            <div className="nodata">
              <p className="data">NO DATA TO SHOW</p>
            </div>
          )}
        </Grid>
      </Box>
    </>
  );
}
