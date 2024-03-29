import { Button, Container, Grid, ImageListItem, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import DetailCards from './detailCards';
import './portfoliodetailpage.css';
import PortfolioSlider from './PortfolioSlider';

// import PortfolioSlider from './PortfolioSlider';

export default function PortfolioDetailpage() {
  const [portcatogery, setPortCatogery] = useState();
  const [porttile, setPorttile] = useState();
  const [portdescription, setPortDescription] = useState();
  const [websiteLink, setWebsiteLink] = useState();
  const [portImage, setPortImage] = useState();
  const [portdeliver, setPortDeliver] = useState();
  const [portrequirements, setPortRequirements] = useState();
  const [portsolution, setPortSolution] = useState();
  const [portteaminvolved, setTeamInvolved] = useState();

  const { generateslug } = useParams();
  console.log('showingslug', generateslug);

  useEffect(() => {
    getPortfolioDeatils();
  }, []);

  const getPortfolioDeatils = () => {
    axios.post(`${window.URL}/api/detail`, { generateslug }).then((res) => {
      console.log('responsingPortfolioDetail', res);
      setPortCatogery(res.data.portfoliocatogery);
      setWebsiteLink(res.data.portfoliolink);
      setPorttile(res.data.portfoliotitle);
      setPortDescription(res.data.portfoliodescription);
      setPortImage(res.data.portbackgroundimage);
      setPortDeliver(res.data.portfoliodeveleron);
      setPortRequirements(res.data.portfoliorequirements);
      setPortSolution(res.data.portfoliosolutionprovider);
      setTeamInvolved(res.data.portfoliteaminvolved);
    });
  };

  return (
    <div>
      <Page title={`KWS || ${generateslug}`}>
        <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
          <Grid container spacing={2}>
            <Grid item xl={6} lg={12} md={12} sm={12} xs={12} className="">
              <div className="">
                {/*    <div
                  className="protfolioimage"
                  style={{
                    background: 'url(' + portImage + ')',
                  }}
                ></div> */}
                <div className="image-section-detail-page mt-5">
                  <img src={portImage} alt="" className="back-blur-image" />
                  <img src={portImage} alt="" className="upper-normal-image" />
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={12} md={12} sm={12} xs={12} className="">
              <div className="portfolio-details">
                <Typography
                  sx={{
                    fontWeight: '900',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '20px',
                    textAlign: 'center !important',
                    color: '#27ADE3',
                  }}
                >
                  {/* {portcatogery} */}
                  DEFI APP
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
                >
                  {porttile}
                </Typography>
                <div className="portfolio-description">
                  <p className="portdescription">{portdescription}</p>
                </div>
                <div className="project-detail">
                  <h6 className="details">
                    DELIVERED ON : <span className="detail">{portdeliver}</span>
                  </h6>
                  <h6 className="details my-3">
                    REQUIREMENTS : <span className="detail">{portrequirements}</span>
                  </h6>
                  <h6 className="details">
                    SOLUTIONS PROVIDED : <span className="detail">{portsolution}</span>
                  </h6>
                  <h6 className="details my-3">
                    TEAM INVOLVED : <span className="detail">{portteaminvolved ? portteaminvolved : 'TBW'}</span>
                  </h6>
                  <h6 className="details mt-5">
                    <a href={websiteLink} target="blank" className="viewprojectdetails">
                      VIEW PROJECT
                    </a>
                  </h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

        {/* <Container maxWidth="xl" sx={{ marginTop: '150px' }}>
          <Typography variant="h4" sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'left' }}>
            More Images of the project : -
          </Typography>

          <DetailCards />
        </Container> */}

        <Typography
          variant="h4"
          sx={{ marginTop: '5rem', marginBottom: '15px', fontFamily: 'Poppins, sans-serif', marginLeft: '1.7rem' }}
        >
          Related Project : -
        </Typography>
        <PortfolioSlider />
      </Page>
    </div>
  );
}
