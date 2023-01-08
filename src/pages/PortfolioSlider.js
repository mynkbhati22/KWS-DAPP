import { Box, Button, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// eslint-disable-next-line react/prefer-stateless-function
export default function PortfolioSlider() {
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

  return (
    <div>
      <Container maxWidth="xl">
        <Slider
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          infinite
          autoplay
          autoplaySpeed={2500}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {portfolio && portfolio.length > 0 ? (
            portfolio.map((res, index) => (
              <Grid items xxl={4} xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
                <div className="card-portfolio" style={{ maxWidth: '300px', display: 'block', margin: 'auto' }}>
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
                      <Grid item xs={6}>
                        <div className="portfolio-title">
                          <Button
                            href={`/portfolio-detail/${res.generateslug}/${res._id}`}
                            target="_blank"
                            className="view-button"
                          >
                            VIEW
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            ))
          ) : (
            <div className="nodata">
              <p className="data">NO DATA TO SHOW</p>
            </div>
          )}
        </Slider>
      </Container>
    </div>
  );
}
