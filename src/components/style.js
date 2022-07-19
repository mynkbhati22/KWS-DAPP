import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    // HEADING
    kwsHeading: {
      fontSize: '2.2rem',
      fontFamily: 'Poppins, sans-serif',
      [theme.breakpoints.down('md')]: {
        fontSize: '20px !important',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '30px',
      },
    },
    headertext: {
      color: '#6C7989',
      fontSize: '17px',
      width: '90%',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
    // HEADER IMAGE
    defidev: {
      position: 'relative',
      width: '65%',
      display: 'block',
      margin: 'auto',
      borderRadius: '0.25rem',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        display: 'block',
        margin: 'auto',
      },
      [theme.breakpoints.down('lg')]: {
        width: '80%',
        display: 'block',
        margin: 'auto',
      },
    },
    // PLAYICON :: HOVER
    playiconButton: {
      '&:hover': {
        background: 'none',
      },
    },
    // MODAL
    modalStyle: {
      [theme.breakpoints.up('xl')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: '24',
        p: '4',
      },
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: '24',
        p: '4',
      },
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: '24',
        p: '4',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        overflowX: 'hidden',
        height: '403px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: '24',
        p: '4',
      },
    },
    // IFRAME VIDEO
    iframeVideo: {
      marginTop: '0px',
      marginLeft: '0px',
      width: '497px',
      height: '399px',
      border: 'none',
    },
    // QUOTE/COMMUNITY BUTTON

    button: {
      backgroundColor: '#22abe3',
      color: '#fff',
      '&:hover': {
        background: '#F68733',
        color: '#000',
      },
    },
    birdButton: {
      '&:hover': {
        background: 'none',
      },
    },
  };
});
