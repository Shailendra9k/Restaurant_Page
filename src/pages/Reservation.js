import React from "react";
import Banner from "../components/Banner/Banner";
import ReservationImage from "../assets/images/booknow.jpg";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReservationForm from "../components/Reservation/ReservationForm";


const Reservation = () => {
  const classes = useReservation();
  return (
    <div>
      <Banner background={ReservationImage} text="Reservation" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 className={classes.categoryHeader}>Reservation Form</h1>
              <h3 className={classes.categoryHeader}>
                Please fill the blow form to perform registration
                <ReservationForm />
              </h3>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const useReservation = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  categoryHeader: {
    textAlign: "center",
  },
}));

export default Reservation;
