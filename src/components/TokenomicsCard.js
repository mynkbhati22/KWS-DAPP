import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ImageList, ImageListItem, Typography } from '@mui/material';

import project from "./images/project.png";
import global from "./images/global.png";
import team from "./images/team.png";
import coffee from "./images/coffee.png";
import useStyles from "./TokenomicsCardStyle"

export default function Variants() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 250,
            height: 180,
            borderRadius: '10px',
            position: 'relative',
          },
        }}
      >
        <Paper variant="outlined">
        <ImageList sx={{width:"20%", display:"block", margin:"20px auto"}}>
            <ImageListItem>
                <img src={project} alt=''/>
            </ImageListItem>
        </ImageList>
          <Typography sx={{ position: 'absolute', top: '47%', left: '40%', textAlign: 'center', fontWeight:"700", fontSize:"35px", fontFamily: 'Poppins, sans-serif' }} className={classes.cardStyle}>60+</Typography>
          <Typography component='span' sx={{ position: 'absolute', top: '75%', left: '20%',fontSize:"18px", textAlign: 'center',  color: '#6C7989',}} className={classes.cardText}>Delivered Projects</Typography>
        </Paper>
        <Paper variant="outlined">
        <ImageList sx={{width:"20%", display:"block", margin:"20px auto"}}>
            <ImageListItem>
                <img src={global} alt=''/>
            </ImageListItem>
        </ImageList>
          <Typography sx={{ position: 'absolute', top: '47%', left: '40%', textAlign: 'center', fontWeight:"700", fontSize:"35px", fontFamily: 'Poppins, sans-serif' }} className={classes.cardStyle}>20+</Typography>
          <Typography component='span' sx={{ position: 'absolute', top: '75%', left: '15%',fontSize:"18px", textAlign: 'center', color: '#6C7989',}} className={classes.cardText}>Global, satisfied clients</Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 250,
            height: 180,
            borderRadius: '10px',
            position: 'relative',
          },
        }}
      >
        <Paper variant="outlined">
        <ImageList sx={{width:"20%", display:"block", margin:"20px auto"}}>
            <ImageListItem>
                <img src={team} alt=''/>
            </ImageListItem>
        </ImageList>
          <Typography sx={{ position: 'absolute', top: '47%', left: '40%', textAlign: 'center', fontWeight:"700", fontSize:"35px", fontFamily: 'Poppins, sans-serif' }} className={classes.cardStyle}>08</Typography>
          <Typography component='span' sx={{ position: 'absolute', top: '75%', left: '25%',fontSize:"18px", textAlign: 'center',  color: '#6C7989',}} className={classes.cardText2}>Team Members</Typography>
        </Paper>
        <Paper variant="outlined">
        <ImageList sx={{width:"20%", display:"block", margin:"20px auto"}}>
            <ImageListItem>
                <img src={coffee} alt=''/>
            </ImageListItem>
        </ImageList>
          <Typography sx={{ position: 'absolute', top: '47%', left: '40%', textAlign: 'center', fontWeight:"700", fontSize:"35px", fontFamily: 'Poppins, sans-serif' }} className={classes.cardStyle}>529+</Typography>
          <Typography component='span' sx={{ position: 'absolute', top: '75%', left: '5%',fontSize:"18px", textAlign: 'center',  color: '#6C7989',}} className={classes.cardText}>Cups of Coffee Consumed</Typography>
        </Paper>
      </Box>
    </>
  );
}
