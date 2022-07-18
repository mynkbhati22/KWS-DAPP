import { makeStyles } from '@material-ui/core';
import { height } from '@mui/system';

export default makeStyles((theme) => {
  return {
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
    defidev: {
      position: 'relative',
      width: '80%',
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
    box: {
      [theme.breakpoints.up('xl')]: {
        position: 'absolute',
        left: 'auto',
        right: '80px',
        width: '29%',
        top: '19%',
        height: '34%',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        borderRadius: '0.25rem',
        zIndex: '-1',
      },
      [theme.breakpoints.down('lg')]: {
        position: 'absolute',
        left: 'auto',
        right: '60px',
        width: '29%',
        top: '30%',
        height: '30%',
        background: 'linear-gradient(45deg,#f68733,#a54500)',
        borderRadius: '0.25rem',
        zIndex: '-1',
      },
    },
  };
});
