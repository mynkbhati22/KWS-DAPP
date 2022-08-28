import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system';
import React from 'react';
import avatar from '../components/images/avatar_1.jpg';

export default function UploadImages() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ marginTop: '70px' }}>
          <Box className="wrapper">
            <ImageList className="d-block m-auto w-50">
              <ImageListItem>
                <img src={avatar} alt="" />
              </ImageListItem>
            </ImageList>
            <Box className="cloud-icon">
              <CloudUploadIcon className="d-block m-auto" />
            </Box>
            <Box className="text-center">
              <Typography paragraph>No File Choosen!</Typography>
            </Box>
            <Box className="cancel-icon">
              <CloseIcon className="d-block m-auto"/>
            </Box>
            <Box className="text-center">
              <Typography paragraph>File Name Here</Typography>
            </Box>
            <Box className='fileChoosen'>
              <input id="default-btn" type="file"/>
            </Box>
            
          </Box>
        </Box>
      </Container>
    </>
  );
}
