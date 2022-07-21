import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack, ImageList, ImageListItem } from '@mui/material';
// mock
// import account from '../../_mock/account';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';

import NavSection from '../../components/NavSection';

//
import kwsbird from '../../components/images/kwsbird.png';
import NFT from '../../components/images/NFT.jpg';
import navConfig from './NavConfig';
import useStyles from '../../components/style';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const classes = useStyles();
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 4 }}>
        <Button href="https://t.me/arrnayacommunity" target="_blank" className={classes.button}>
          <Avatar sx={{ width: 40, height: 40 }} src={NFT} />
          <Box sx={{ display: 'flex', marginLeft: '7px' }}>
            <Typography>Arrnaya's</Typography>
            <Typography sx={{ paddingLeft: '7px' }}>Community</Typography>
          </Box>
        </Button>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative', filter: 'none ' }}>
          <Button href="/" target="_blank" className={classes.birdButton}>
            <Box component="img" src={kwsbird} sx={{ width: 70, position: 'absolute', top: -50 }} />
          </Button>
          <Box>
            <Typography sx={{ marginBottom: '7px' }}>
              <Link
                href="mailto:info@kesaviwebsolutions.com"
                target="_blank"
                sx={{ textDecoration: 'none', color: '#6C7989', transition: '0.5s' }}
                className={classes.footerHover}
              >
                info@kesaviwebsolutions.com
              </Link>
            </Typography>
            <Typography sx={{ textAlign: 'center', color: '#6C7989', cursor: 'pointer', transition: '0.5s' }}>
              <Link
                href="tel:+918700212323"
                target="_blank"
                className={classes.footerHover}
                sx={{ textDecoration: 'none', color: '#6C7989', transition: '0.5s' }}
              >
                {' '}
                +91 8700212323
              </Link>
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Link
              fullwidth="true"
              size="large"
              color="inherit"
              variant="outlined"
              href="https://api.whatsapp.com/send/?phone=918700212323&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Iconify icon="logos:whatsapp-icon" color="#DF3E30" width={22} height={22} />
            </Link>

            <Link fullwidth="true" size="large" color="inherit" variant="outlined" href="https://t.me/ARRN4YA"  target="_blank">
              <Iconify icon="logos:telegram" color="#1877F2" width={22} height={22} />
            </Link>

            <Link
              fullwidth="true"
              size="large"
              color="inherit"
              variant="outlined"
              href="https://twitter.com/KesaviS"
              target="_blank"
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
            </Link>
          </Stack>

          <Button href="https://t.me/ARRN4YA" target="_blank" className={classes.button}>
            Get Instant Quote
          </Button>
          <ImageList sx={{ display: 'block', margin: '20px auto' }}>
            <ImageListItem>
              <Link href="https://www.coinpayments.net/index.php" target="_blank">
                <img src="https://www.coinpayments.net/images/pub/buynow-blue2.png" alt="" />
              </Link>
            </ImageListItem>
          </ImageList>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
