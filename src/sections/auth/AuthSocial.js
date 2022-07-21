// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined" href='https://api.whatsapp.com/send/?phone=918700212323&text&type=phone_number&app_absent=0' target='_blank'>
          <Iconify icon="logos:whatsapp-icon" color="#DF3E30" width={22} height={22} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined"  href="https://t.me/ARRN4YA" target='_blank'>
          <Iconify icon="logos:telegram" color="#1877F2" width={22} height={22} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined" href='https://twitter.com/KesaviS' target='_blank'>
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
