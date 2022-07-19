import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    dynamicHeading: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '2rem',
      marginTop: '70px',
      width: '80%',
      [theme.breakpoints.down('md')]: {
        width: '90%',
        fontSize: '25px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        fontSize: '20px',
        marginTop: '45px',
      },
    },
    dynamicPara: {
      color: '#6C7989',
      fontSize: '20px',
      marginTop: '70px',
      width: '90%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: '17px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        fontSize: '16px',
        marginTop: '40px',
      },
    },

    checkIcon: {
      fontSize: '50px',
      color: 'rgba(43,144,217,.1)',
    },
  };
});
