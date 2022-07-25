import { Box, Container, Grid, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import React from 'react';
import useStyles from './dashboardnavbarStyle';
import fifa from '../../components/images/fifa inu.png';
import sm from '../../components/images/sm (3).png';
import metfx from '../../components/images/metfx (2).png';

export default function Annoucement() {
  const annoucementSliderInfo = [
    {
      Logo: [fifa],
      Link: 'https://www.pinksale.finance/launchpad/0xca8012f30f2Be6D05cae15644787579865d8b000?chain=BSC',
      Name: 'FIFA INU',
    },
    {
      Logo: [sm],
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
      Name: 'SMARTATH',
    },
    {
      Logo: [metfx],
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
      Name: 'METFX',
    },
    {
      Logo: [fifa],
      Link: 'https://www.pinksale.finance/launchpad/0xca8012f30f2Be6D05cae15644787579865d8b000?chain=BSC',
      Name: 'FIFA INU',
    },
    {
      Logo: [sm],
      Link: 'https://www.pinksale.finance/launchpad/0xE0B0c9c7164eef8A27584f0d35cC5e655a9970ba?chain=BSC',
      Name: 'SMARTATH',
    },
    {
      Logo: [metfx],
      Link: 'https://poocoin.app/tokens/0x6266a18f1605da94e8317232ffa634c74646ac40',
      Name: 'METFX',
    },
  ];

  const renderAnnoucement = (annoucementSliderInfo, index) => {
    return (
      <Grid item xs={2} sm={2} md={2} xl={2} key={index}>
        <Link
          href={annoucementSliderInfo.Link}
          target="_blank"
          sx={{
            textDecoration: 'none',
            margin: '10px 0px',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            color: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
        >
          <ImageList className={classes.bSlider__picture} sx={{ width: '50%' }}>
            <ImageListItem>
              <img src={annoucementSliderInfo.Logo} alt="" className="b-slider__img" />
            </ImageListItem>
          </ImageList>
          <Typography>{annoucementSliderInfo.Name}</Typography>
        </Link>
      </Grid>
    );
  };
  const classes = useStyles();
  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Typography>Partnered</Typography>
      <Box className={classes.marquee}>
        <Box className={classes.marqueeJjj}>
          {/* <Grid container spacing={2}>
            {annoucementSliderInfo.map(renderAnnoucement)}
          </Grid> */}
        </Box>
      </Box>
      <Typography>Projects</Typography>
    </Container>
  );
}
