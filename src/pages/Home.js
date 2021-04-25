import React from "react";
import Carousel from "../components/Carousel/FooterCarousel";
import HeaderCarousel from "../components/Carousel/HeaderCarousel";
import nameLogo from "../assets/images/namelogoO.png";
import {Link} from "react-router-dom";

import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Icon2 from "../assets/icons/icon-2.png";
import Icon3 from "../assets/icons/icon-3.png";
import Icon4 from "../assets/icons/icon-4.png";
import Icon1 from "../assets/icons/icon-1.png";
import WelcomeImge from "../assets/images/welcome.jpg";
import StyledButton from "../resuableComponent/StyledButton";
import Testimonial from "../components/Testimonial";

const FeatureSection = () => {
  const classes = useFeatureSection();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Link to={"/alacarte"} style={{textDecoration: 'none'}}>
            <Paper className={classes.paper}>
              <img src={Icon2} alt="A-LA CARTE"/>
              <Typography component="div">
                A-LA CARTE
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to={"/lunch"} style={{textDecoration: 'none'}}>
            <Paper className={classes.paper}>
              <img src={Icon3} alt="A-LA CARTE"/>
              <Typography component="div">
                LUNCH
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to={"/drink"} style={{textDecoration: 'none'}}>
            <Paper className={classes.paper}>
              <img src={Icon4} alt="A-LA CARTE"/>
              <Typography component="div">
                DRINKS
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to={"/dessert"} style={{textDecoration: 'none'}}>
            <Paper className={classes.paper}>
              <img src={Icon1} alt="A-LA CARTE"/>
              <Typography component="div">
                DESSERT
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

const useFeatureSection = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      color: "red",
      fontWeight: "550",
      letterSpacing: "0.8px",
    },
  },
}));

const WelComeSection = () => {
  const classes = useWelComeSection();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography component="div" className={classes.Header}>
            WELCOME
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} className={classes.WelComeMessage}>
          <Typography component="p">
            The entire Shubha Kamana team welcomes you to enjoy our restaurant’s
            authentic and delectable flavours of the Nepalese spices. We are
            passionate about creating a dining experience that goes beyond just
            good food, and focus on high quality service.We want to offer you a
            wide range of tastes from our menu of delicious and varied dishes,
            made from high quality ingredients. Great honour is in addition to
            good service.
          </Typography>
          <Typography component="p">
            The kitchen has professionals with 25+ years of experience in food
            preparation from Nepal, India and Japan. Thus, we offer dishes
            including Asian influence. If you have any hopes for the kitchen, we
            can customize the dishes to your wishes. Our staffs also prepare
            allergy-friendly dishes if asked! We have well managed bar providing
            large selection of Finnish and foreign beers, wines, hard-drinks and
            soft-drinks within reasonable prices.Our restaurant has 40 seats.
            Our lunch time is from 10:30 am to 3:00 PM and the restaurant is
            fully licensed. We can also arrange for private and corporate
            parties. We are open 363 days a year.
          </Typography>
          <Typography component="p">
            Our dishes have drawn people from all over to come experience the
            flavours of the Nepal. Come into Shubha Kamana today, we guarantee
            you the best experience!
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={WelcomeImge} alt="" style={{width: "100%"}}/>
        </Grid>
      </Grid>
      <div style={{textAlign: 'center'}}>
        <Typography component="div" className={classes.Header}>
          Gallery
        </Typography>
      </div>
    </Container>
  );
};

const useWelComeSection = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  Header: {
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: "0.8px",
    fontSize: theme.spacing(4),
    margin: theme.spacing(4),
    color: "red",
    opacity: "0.6",
  },
  WelComeMessage: {
    textAlign: "justify",
  },
}));

const AboutAuthor = () => {
  const classes = useAboutAuthor();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography component="div" className={classes.Header}>
            About The Founder
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={nameLogo} alt="" style={{width: "100%"}}/>
        </Grid>
        <Grid item xs={12} md={7} className={classes.WelComeMessage}>
          <Typography component="p">
            Mr Bhola Aryal has been working in the restaurant industry for over
            two decades. He has also successfully operated Nepalese restaurants
            in Japan, Nepal and India. He intends to serve different flavor of
            Nepalese spices through Shubha Kamana, a family owned restaurant
            established in 2014. Most significantly, Mr Aryal has deep passion
            and respect for profession and is recognized for creating great
            value through his services.
          </Typography>
          <Link to="/menu" style={{textDecoration: "none"}}>
            <StyledButton
              text="Check Menu"
              size="large"
              style={{borderRadius: "4px", marginTop: "30px"}}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

const useAboutAuthor = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  Header: {
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: "0.8px",
    fontSize: theme.spacing(4),
    margin: theme.spacing(4),
    color: "red",
    opacity: "0.6",
  },
  WelComeMessage: {
    textAlign: "justify",
  },
}));

const Home = () => {
  return (
    <div>
      <HeaderCarousel/>
      <FeatureSection/>
      <WelComeSection/>
      <Carousel/>
      <AboutAuthor/>
      <Testimonial/>
    </div>
  );
};

export default Home;
