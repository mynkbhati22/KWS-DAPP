import React, { useState, useEffect } from 'react';
import { Box, Container, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import Client from '../../Client';
import fifa from '../../components/images/fifa inu.png';
import metfx from '../../components/images/metfx (2).png';
import CustodyW from '../../components/images/Custody.png';
import smartath from '../../components/images/smartath.png';

export default function Annoucement() {
  const annoucementInfo = [
    {
      Logo: [fifa],
      Name: 'FIFA INU',
      Link: 'https://poocoin.app/tokens/0x4182a8fa344a59b7bf813e29954e4ca07701571c',
    },
    {
      Logo: [metfx],
      Name: 'METFX',
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
    },
    {
      Logo: [smartath],
      Name: 'SMARTATH',
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
    },
    {
      Logo: [CustodyW],
      Name: 'CUSTODIY',
      Link: 'https://www.custodiy.com/',
    },
    {
      Logo: [fifa],
      Name: 'FIFA INU',
      Link: 'https://poocoin.app/tokens/0x4182a8fa344a59b7bf813e29954e4ca07701571c',
    },
    {
      Logo: [metfx],
      Name: 'METFX',
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
    },
    {
      Logo: [smartath],
      Name: 'SMARTATH',
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
    },
    {
      Logo: [CustodyW],
      Name: 'CUSTODIY',
      Link: 'https://www.custodiy.com/',
    },
    {
      Logo: [fifa],
      Name: 'FIFA INU',
      Link: 'https://poocoin.app/tokens/0x4182a8fa344a59b7bf813e29954e4ca07701571c',
    },
    {
      Logo: [metfx],
      Name: 'METFX',
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
    },
    {
      Logo: [smartath],
      Name: 'SMARTATH',
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
    },
    {
      Logo: [CustodyW],
      Name: 'CUSTODIY',
      Link: 'https://www.custodiy.com/',
    },
    {
      Logo: [fifa],
      Name: 'FIFA INU',
      Link: 'https://poocoin.app/tokens/0x4182a8fa344a59b7bf813e29954e4ca07701571c',
    },
    {
      Logo: [metfx],
      Name: 'METFX',
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
    },
    {
      Logo: [smartath],
      Name: 'SMARTATH',
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
    },
    {
      Logo: [CustodyW],
      Name: 'CUSTODIY',
      Link: 'https://www.custodiy.com/',
    },
  ];

  // const [annoucement, setAnnouncement] = useState();
  // useEffect(() => {
  //   Client.fetch(
  //     `*[_type == "annuoncement"]{
  //      title,
  //      mainImage{
  //        asset ->{
  //          _id,
  //          url
  //        },
  //        alt,
  //       },
  //      link
  //   }`
  //   )
  //     .then((data) => setAnnouncement(data))
  //     .catch(console.error);
  // }, []);

  const renderAnnouncement = (annoucementInfo, index) => {
    return (
      <Link
        href={annoucementInfo.Link}
        target="_blank"
        sx={{ textDecoration: 'none', color: '#fff', marginLeft: '30px' }}
        key={index}
      >
        <Box className="Marquee-tag">
          <ImageList sx={{ display: 'flex !important', marginLeft: '-15px', padding: '0px 15px' }}>
            <ImageListItem>
              <img src={annoucementInfo.Logo} alt="" style={{ width: '50px', height: '50px' }} />
            </ImageListItem>
          </ImageList>
          <Typography sx={{ paddingLeft: '-20px' }}>{annoucementInfo.Name}</Typography>
        </Box>
      </Link>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      {/* <Typography variant="body1" color="#fff">
        Partnered Project
      </Typography> */}
      <Box className="Marquee">
        <Box className="Marquee-content">
          {/* {annoucementInfo &&
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
            ))} */}
          {annoucementInfo.map(renderAnnouncement)}
        </Box>
      </Box>
    </Container>
  );
}
