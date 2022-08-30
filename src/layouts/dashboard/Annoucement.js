import React, { useState, useEffect } from 'react';
import { Box, Container, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import $ from 'jquery';
import Client from '../../Client';

export default function Annoucement() {
  const [annoucement, setAnnouncement] = useState();
  useEffect(() => {
    Client.fetch(
      `*[_type == "annuoncement"]{
       title,
       mainImage{
         asset ->{
           _id,
           url
         },
         alt,
        },
       link
    }`
    )
      .then((data) => setAnnouncement(data))
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Box className="MuiBox-root css-19idom">
        <Box className="marquee-container">
          <Box className="marquee">
            {annoucement &&
              annoucement.map((annoucement, index) => (
                <Link
                  href={annoucement.link}
                  target="_blank"
                  sx={{ textDecoration: 'none', color: '#fff', marginLeft: '30px' }}
                  key={index}
                >
                  <Box className="Marquee-tag">
                    <ImageList sx={{ display: 'flex !important', marginLeft: '-15px', padding: '0px 15px' }}>
                      <ImageListItem>
                        <img src={annoucement.mainImage.asset.url} alt="" style={{ width: '50px', height: '50px' }} />
                      </ImageListItem>
                    </ImageList>
                    <Typography sx={{ paddingLeft: '-20px' }}>{annoucement.title}</Typography>
                  </Box>
                </Link>
              ))}
          </Box>
          <Box className="marquee">
            {annoucement &&
              annoucement.map((annoucement, index) => (
                <Link
                  href={annoucement.link}
                  target="_blank"
                  sx={{ textDecoration: 'none', color: '#fff', marginLeft: '30px' }}
                  key={index}
                >
                  <Box className="Marquee-tag">
                    <ImageList sx={{ display: 'flex !important', marginLeft: '-15px', padding: '0px 15px' }}>
                      <ImageListItem>
                        <img src={annoucement.mainImage.asset.url} alt="" style={{ width: '50px', height: '50px' }} />
                      </ImageListItem>
                    </ImageList>
                    <Typography sx={{ paddingLeft: '-20px' }}>{annoucement.title}</Typography>
                  </Box>
                </Link>
              ))}
          </Box>
        </Box>
        {/* <Box className="Marquee">
        <Box className="Marquee-content">
          {annoucement &&
            annoucement.map((annoucement, index) => (
              <Link
                href={annoucement.link}
                target="_blank"
                sx={{ textDecoration: 'none', color: '#fff', marginLeft: '30px' }}
                key={index}
              >
                <Box className="Marquee-tag">
                  <ImageList sx={{ display: 'flex !important', marginLeft: '-15px', padding: '0px 15px' }}>
                    <ImageListItem>
                      <img src={annoucement.mainImage.asset.url} alt="" style={{ width: '50px', height: '50px' }} />
                    </ImageListItem>
                  </ImageList>
                  <Typography sx={{ paddingLeft: '-20px' }}>{annoucement.title}</Typography>
                </Box>
              </Link>
            ))}
        </Box>
      </Box> */}
      </Box>
    </Container>
  );
}
