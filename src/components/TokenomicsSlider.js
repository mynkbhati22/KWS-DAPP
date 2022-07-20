import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button, Container, ImageList, ImageListItem, Tooltip } from '@mui/material';

// IMAGES
import cryptokidfinance from './images/cryptokidfinance.png';
import metfx from './images/metfx.png';
import ryoshilogo from './images/ryoshilogo.svg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'cryptokidfinance img',
    imgPath: [cryptokidfinance],
    description:
      'Best services to  sell in Crypto space. I can sell only what I can trust. My clients are happy with KWS services and I could never be happier!',
  },
  {
    label: 'metfx img',
    imgPath: [metfx],
    description:
      'Excellent guidance for all my projects! Whenever I get stuck I come back to them and they always have a solution ready. Great company to partner with!',
  },
  {
    label: 'ryoshi img',
    imgPath: [ryoshilogo],
    description:
      'Most reliable! Been working with them on my last three projects. Professional attitude and on time delivery of services. Will do many projects with them for sure!',
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
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '50px',
    display: 'block',
    maxWidth: '12vh',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '50%',
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
                  <Typography>
                    <Tooltip title="" placement="top">
                      <Button sx={{ border: '1px solid' }}>{step.description}</Button>
                    </Tooltip>
                  </Typography>
                  <ImageList>
                    <ImageListItem>
                      <img className={classes.img} src={step.imgPath} alt={step.label} />
                    </ImageListItem>
                  </ImageList>
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
