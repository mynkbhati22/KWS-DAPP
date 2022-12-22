import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Grid, Box , Container, Card , CardMediaStyle } from '@mui/material';
import './upload.css';
import avtarportfolio from '../components/images/amm.png';
import portfolioimg from '../components/images/portfolioimg.png';



export default function UploadImages() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
    <Box className='container-portfolio'>
      <Grid container spacing={1} className="portfolio-box">
        <Grid items xxl={4} xl={6} lg={6} md={6} sm={6} xs={12} >
  

         <Box className="portfolio-image-box">
         <img src={portfolioimg} alt='' className="portfolio-background-image" />
            <img src={avtarportfolio} alt="" className="avtar-portfolio" />
            <div className="portfolio-card-heading">Metfx</div>
            <div className="portfolio-card-title">
              Customised marketplace for Watch-2-Earn Membership NFTs for MetFx Project on BSC.
            </div>
            <div className="portfolio-card-link">https://abc.com</div>
          </Box>
        </Grid>

      </Grid>
      </Box>
    </>
  );
}
