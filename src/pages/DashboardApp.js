import * as React from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, ImageList, ImageListItem, Box } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@material-ui/core';

// components
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TokenomicsInfo from '../components/TokenomicsInfo';
import DynamicContent from '../components/DynamicContent';
import bbtlaunch from '../components/images/bbtlaunchapd.png';
import bbtproject from '../components/images/bbtproject.png';
import lottery from '../components/images/lottery.png';
import nftmarket from '../components/images/nftmarket.png';
import ryoshiproject from '../components/images/ryoshiproject.png';
import Bottom from '../components/Bottom';
import Page from '../components/Page';
import useStyles from '../components/style';

// sections

import defidev from '../components/images/defidev.jpeg';

export default function DashboardApp() {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Page title="Kesavi Web Solutions - Digital Wings to your business!">
      <Container maxWidth="xl" sx={{marginTop:"50px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" className={classes.kwsHeading}>
              Leading{' '}
              <Typography  component={'span'} variant="h2" color="#22ABE3" className={classes.kwsHeading}>
                Blockchain
              </Typography>
            </Typography>
            <Typography variant="h2" gutterBottom className={classes.kwsHeading}>
              <Typography  component={'span'} variant="h2" color="#22ABE3" className={classes.kwsHeading}>
                Development{' '}
              </Typography>
              Services
            </Typography>
            <Typography className={classes.headertext}>
              One-stop solution for all your blockchain development needs. Smart contracts (ERC-20/ERC-721), DAPPs,
              ICO/IDOs, Launchpads, and more. Customised Solutions for every need.
            </Typography>
            <Button onClick={handleOpen} className={classes.playiconButton}>
              <Grid>
                <PlayCircleIcon
                  sx={{
                    color: blue[300],
                    fontSize: 60,
                    marginTop: '20px',
                    cursor: 'pointer',
                    display: 'block',
                    marginRight: 'auto',
                  }}
                />
              </Grid>
              <Typography sx={{ display: 'grid', marginTop: '25px', marginLeft: '18px' }}>
                <Typography  component={'span'} sx={{ textAlign: 'left', color: '#6C7989', fontWeight: 300 }}>
                  Watch
                </Typography>
                <Typography
                   component={'span'}
                  sx={{ letterSpacing: '2px', fontFamily: 'Poppins, sans-serif', color: '#343A40' }}
                >
                  INTRO VIDEO
                </Typography>
              </Typography>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={classes.modalStyle}>
                <CardMedia
                  component="iframe"
                  title="test"
                  src="https://www.youtube.com/embed/yubzJw0uiE4"
                  className={classes.iframeVideo}
                />
              </Box>
            </Modal>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <ImageList className={classes.defidev}>
              <ImageListItem>
                <img src={defidev} alt="" />
              </ImageListItem>
            </ImageList>
            {/* <Typography className={classes.box} /> */}
          </Grid>
        </Grid>
      </Container>

      <DynamicContent />
      <Bottom />
      <TokenomicsInfo />
    </Page>
  );
}
