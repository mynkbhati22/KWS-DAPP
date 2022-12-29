import { Container, Grid, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import Page from '../components/Page';
import './portfoliodetailpage.css';
import PortfolioSlider from './PortfolioSlider';

export default function PortfolioDetailpage() {
  return (
    <div>
      <Page title="KWS || Portfolio Detail Page">
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
            Gaming Platform
          </Typography>
          <Typography
            variant="h3"
            sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
          >
            BRAVO! – ESPORT
          </Typography>

          <Grid container spacing={2}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="positon-relative">
              <div className="portfolio-description">
                <p className="portdescription">
                  Appropriately enable error-free growth strategies through economically sound intellectual capital.
                  Quickly monetize granular communities after prospective testing procedures. Holisticly transition
                  corporate materials and diverse partnerships. Completely revolutionize standards compliant imperatives
                  for technically sound partnerships. Synergistically maintain cooperative web services without scalable
                  experiences. Intrinsicly monetize corporate collaboration and idea-sharing through standards compliant
                  solutions. Professionally architect team driven schemas and interoperable content. Proactively
                  revolutionize professional meta-services whereas intuitive information. Competently synergize
                  functional web services whereas tactical meta-services. Rapidiously scale prospective intellectual
                  capital whereas flexible initiatives. Intrinsicly transform error-free opportunities whereas equity
                  invested niches.
                </p>
              </div>
              <div className="project-detail">
                <h6 className="details">
                  Published On : <span className="detail">2022-11-30</span>
                </h6>
                <h6 className="details">
                  Requirements :{' '}
                  <span className="detail">
                    Solidity, React Js, Node Js , Javascript, Html , Css , Bootstrap and MUI.
                  </span>
                </h6>
                <h6 className="details">
                  Solutions Provided :{' '}
                  <span className="detail">
                    Appropriately enable error-free growth strategies through economically sound intellectual capital.
                    Quickly monetize granular communities after prospective testing procedures.
                  </span>
                </h6>
                <h6 className="details">
                  Team Involved : <span className="detail">Nikhil Rana , Saurabh , Mayank Bhati.</span>
                </h6>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="protfolioimage">
                <img
                  src="https://app.bravoarena.gg/static/media/bravo-home1.56f961c412bc0cd2822b.jpeg"
                  alt=""
                  className="portimage"
                />
              </div>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xl" sx={{ marginTop: '150px' }}>
          <Typography variant="h4" sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'left' }}>
            Related Projects
          </Typography>

          <PortfolioSlider />
        </Container>
      </Page>
    </div>
  );
}
