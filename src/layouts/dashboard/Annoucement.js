/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Box, Container, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import $ from 'jquery';
import Client from '../../Client';
import fifa from '../../components/images/fifa inu.png';
import metfx from '../../components/images/metfx (2).png';
import CustodyW from '../../components/images/Custody.png';
import smartath from '../../components/images/smartath.png';

//   $(document).ready(() => {
//    function handleMarquee() {
//     const marquee = document.querySelectorAll('.marquee-js');
//     var windowsize = $(window).width();
//     const mobileSpeed = 2;
//     const desktopSpeed = 1;
//     let speed;

//     if (windowsize <= 768) {
//       speed = mobileSpeed;
//     } else {
//       speed = desktopSpeed;
//     }

//     // let speed = s;

//     // let timer;
//     marquee.forEach((el) => {
//       const container = el.querySelector('.marquee-inner');
//       const content = el.querySelector('.marquee-inner > *');
//       // Get total width
//       const elWidth = content.offsetWidth;

//       // Duplicate content
//       let clone = content.cloneNode(true);
//       container.appendChild(clone);
//       clone = content.cloneNode(true);
//       container.appendChild(clone);

//       let progress = 1;
//       function loop() {
//         progress -= speed;
//         if (progress <= elWidth * -1) {
//           progress = 0;
//         }
//         container.style.transform = `translateX(${progress}px)`;
//         container.style.transform += `skewX(${speed * 0.4}deg)`;
//         window.requestAnimationFrame(loop);
//       }
//       loop();
//     });
//   }

//   $(window).on('resize', () => {
//     handleMarquee();
//   });

//   handleMarquee();
// });

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
      {/* <Typography variant="body1" color="#fff">
        Partnered Project
      </Typography> */}
      <Box className="Marquee">
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
      </Box>
      {/* <section className="marquee-js">
        <div className="marquee-inner">
          <div className="marquee-content">
            <div className="marquee-text">WEDDINGS</div>
            <div className="marquee-text">CORPORATE EVENTS</div>
            <div className="marquee-text">STREET MARKETS</div>
            <div className="marquee-text">BIRTHDAY PARTIES</div>
            <div className="marquee-text">GALAS</div>
            <div className="marquee-text">FUNDRAISERS</div>
            <div className="marquee-text">PICNICS</div>
          </div>
        </div>
      </section> */}
    </Container>
  );
}
