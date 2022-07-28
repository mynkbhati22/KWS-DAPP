import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    cardStyle: {
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        top: '45%',
        left: '37%',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '35px',
        fontFamily: 'Poppins, sans-serif',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '45%',
        left: '36%',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '30px',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    cardText: {
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        top: '70%',
        left: '15%',
        fontSize: '16px',
        textAlign: 'center',
        color: '#6C7989',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '70%',
        left: '10%',
        fontSize: '14px',
        textAlign: 'center',
        color: '#6C7989',
      },
    },
    cardText2: {
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        top: '70%',
        left: '15%',
        fontSize: '16px',
        textAlign: 'center',
        color: '#6C7989',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '70%',
        left: '15%',
        fontSize: '14px',
        textAlign: 'center',
        color: '#6C7989',
      },
    },
  };
});
