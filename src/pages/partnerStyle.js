import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => {
    return {
        partnersCard: {
          [theme.breakpoints.dowm('md')]:{
            display:"block",
            margin:"auto"
          }
      }
    };
  });