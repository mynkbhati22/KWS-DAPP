import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import safushield from '../components/images/safu-shield2.png';
import useStyles from '../components/style';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  const classes = useStyles();
  return (
    <Page title="Coming Soon">
      <Container maxWidth="xl">
        <ContentStyle className={classes.safu}>
          <Typography variant="h4" width="100%">SAFU Reports By Arrnaya (SAFU DEV)</Typography>

          <Box
            component="img"
            src={safushield}
            sx={{ height: 500, mx: 'auto', my: { xs: 5, sm: 10 }, width: '100%' }}
            className={classes.safureports}
          />

          <Button href="https://github.com/kesaviwebsolutions/Safu-report" target="_blank" className={classes.buttonSafu}>
            Go to Github
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
