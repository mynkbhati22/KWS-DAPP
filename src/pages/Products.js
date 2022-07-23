import { useState } from 'react';
// material
import { Container, CardMedia, CardActions, Card, CardContent, Button, Typography, Grid, Box } from '@mui/material';

// components
import { Label } from '@material-ui/icons';

import Page from '../components/Page';
import Partners from './Partners';

// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="KWS: Partners">
      <Partners />
    </Page>
  );
}
