import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    number: {
      position: 'absolute',
      top: '-1rem',
      left: '0px',
      fontFamily: 'Poppins, sans-serif',
      color: '#2b90d9',
      fontSize: '6rem',
      fontWeight: 700,
      opacity: 0.2,
      zIndex: -1,
      lineHeight: 1,
    },
    span: {
      color: '#6C7989',
    },
    uiux: {
      fontSize: '1.75rem',
      width: '75%',
      lineHeight: '35px',
      fontFamily: 'Poppins, sans-serif',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
    text: {
      color: '#6C7989',
      fontSize: '17px',
      width: '70%',
      fontWeight: '400',
      marginTop: '20px',
      marginBottom: '20px',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
    portfolioButton: {
      backgroundColor: '#22abe3',
      borderColor: '#22abe3',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '700',
      padding: '10px',
      borderRadius: '10px',
      transition: '0.5s',
      '&:hover': {
        background: '#F68733',
        color: '#000',
      },
    },
    bottomImage: {
      [theme.breakpoints.up('xl')]: {
        width: '100%',
        marginBottom: '50px',
      },
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        marginBottom: '50px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'block',
        marign: 'auto',
      },
    },
  };
});
