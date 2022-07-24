import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
  return {
    '@keyframes marquee': {
      '0%': {
        marginLeft: '100%',
        transform: 'translateX(0%)',
      },
      '100%': {
        marginLeft: '0',
        transform: 'translateX(-100%)',
      },
    },
    marquee: {
      animation: '$marquee 15s linear infinite',
      display: 'inline-block',
      fontSize:'20px',
      whiteSpace: 'nowrap',
      '&:hover': {
        animationPlayState: 'paused',
      },
    },
  };
});
