/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system';
import React from 'react';
import avatar from '../components/images/avatar_1.jpg';
import './upload.css';

export default function UploadImages() {
  return (
    <>
      <Container maxWidth="lg">
        <div className="container">
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
              <label hmtlFor="imageUpload" />
            </div>
            <div className="avatar-preview">
              <div id="imagePreview" style={{ backgroundImage: "url('');" }} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
