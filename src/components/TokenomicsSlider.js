import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, Button, Container, ImageList, ImageListItem, Tooltip, Typography } from '@mui/material';

// IMAGES

import cryptokidfinance from './images/cryptokidfinance.png';
import metfx from './images/metfx.png';
import ryoshilogo from './images/ryoshilogo.svg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'metfx img',
    imgPath: [metfx],
    name: 'Alvin',
    subDiscription: 'Owner & CEO of Multiple Crypto Projects',
    description:
      'Excellent guidance for all my projects! Whenever I get stuck I come back to them and they always have a solution ready. Great company to partner with!',
  },
  {
    label: 'ryoshi img',
    imgPath: [ryoshilogo],
    name: 'Toshiro',
    subDiscription: 'Owner of Multiple Crypto Projects',
    description:
      'Most reliable! Been working with them on my last three projects. Professional attitude and on time delivery of services. Will do many projects with them for sure!',
  },
  {
    label: 'cryptokidfinance img',
    imgPath: [cryptokidfinance],
    name: 'Crypto Kid Finance',
    subDiscription: 'Crypto Marketer & Promoter',
    description:
      'Best services to  sell in Crypto space. I can sell only what I can trust. My clients are happy with KWS services and I could never be happier!',
  },
];

const styles = (theme) => ({
  root2: {
    maxWidth: '100vh',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  box: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  partners: {
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      marginBottom: '20px',
      marginLeft: '-45px',
    },
  },
  img: {
    height: '50px',
    display: 'block',
    maxWidth: '9vh',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '50%',
  },
  buttonDescription: {
    position: 'relative',
    color: '#6C7989',
    fontWeight: '400',
    cursor: 'text',
    border: '1px solid #b9b9b0',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '0px !important',
    marginTop: '50px',
    marginBottom: '25px',
    '&::before': {
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderTop: '0px solid',
      borderRight: '2px solid',
      borderBottom: '2px solid',
      borderLeft: '0px solid',
      color: ' #b9b9b0',
      top: ' 100%',
      left: '42%',
      marginLeft: '-230px',
      content: '""',
      transform: 'rotate(45deg)',
      marginTop: '-8px',
      background: 'white',
      zIndex: 1,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('lg')]: {
      '&::before': {
        left: '70%',
      },
    },
    '@media(max-width: 540px)': {
      '&::before': {
        left: '10%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&::before': {
        left: '97%',
      },
    },
  },
  partnersName: {
    fontSize: '27px',
    fontWeight: '700',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 };
  }

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <Container maxWidth="xl" className={classes.root2}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <Container key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Tooltip title="" placement="top">
                    <Button className={classes.buttonDescription}>{step.description}</Button>
                  </Tooltip>

                  <Box className={classes.box}>
                    <ImageList>
                      <ImageListItem>
                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                      </ImageListItem>
                    </ImageList>
                    <Box className={classes.partners}>
                      <Typography className={classes.partnersName}>{step.name}</Typography>
                      <Typography sx={{ color: '#6C7989' }}>{step.subDiscription}</Typography>
                    </Box>
                  </Box>
                </>
              ) : null}
            </Container>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper steps={maxSteps} position="static" activeStep={activeStep} className={classes.mobileStepper} />
      </Container>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
