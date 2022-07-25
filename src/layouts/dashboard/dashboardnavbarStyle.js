import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    '@keyframes marquee': {
      '0%': {
        transform: 'translate(0, 0)',
      },
      '100%': {
        transform: 'translate(-100%, 0)',
      },
    },
    marquee: {
      animation: '$marquee 10s linear infinite',
      fontSize: '18px',
      '&:hover': {
        animationPlayState: 'paused',
      },
    },
    marqueeJjj: {
      paddingLeft: '0%',
      cursor: 'default',
    },
    bSlider__slide: {
      margin: ' 0 50px',
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    },
  };
});
