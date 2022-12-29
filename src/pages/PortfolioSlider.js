import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      <Slider
        dots={false}
        slidesToShow={2}
        slidesToScroll={1}
        infinite
        autoplay
        autoplaySpeed={2500}
        responsive={[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {portfolio && portfolio.length > 0 ? (
          portfolio.map((res, index) => (
            <Grid items xxl={4} xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
              <Link to="/portfolio-detail-page" rel="noreferrer">
                <Box className="portfolio-image-box">
                  <img src={res.portfolioimage} alt="" className="portfolio-background-image" />
                  <img src={res.portavatarlink} alt="" className="avtar-portfolio" />
                  <div className="portfolio-card-heading">{res.portfoliotitle}</div>
                  <div className="portfolio-card-title">{res.portfoliodescription}</div>
                  <div className="portfolio-card-link">Look IN</div>
                </Box>
              </Link>
            </Grid>
          ))
        ) : (
          <div className="nodata">
            <p className="data">NO DATA TO SHOW</p>
          </div>
        )}
      </Slider>
    </div>
  );
}
