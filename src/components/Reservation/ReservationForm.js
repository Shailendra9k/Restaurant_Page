import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import StyledTextField from "../../resuableComponent/StyledTextField";
import Grid from "@material-ui/core/Grid";
import StyledButton from "../../resuableComponent/StyledButton";
import { reservationFromValidation } from "../../util/Validation";
import StyledDatePicker from "../../resuableComponent/StyledDatePicker";
import StyledAutoSizeTextarea from "../../resuableComponent/StyledAutoSizeTextarea";
import StyledTimePicker from "../../resuableComponent/StyledTimePicker";

const useReservationStyle = makeStyles((theme) => ({
  formWrapper: {
    marginTop: "1rem",
  },
}));

const currentTime = () => {
  const date = new Date();
  date.toLocaleString("en-NP", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  // console.log(date);
};

const formInitialValue = {
  name: "",
  email: "",
  phone: "",
  revDate: new Date().toDateString(),
  revTime: currentTime(),
  persons: 1,
  message: "",
};

const ReservationForm = () => {
  const classes = useReservationStyle();

  return (
    <>
      <Formik
        initialValues={formInitialValue}
        validationSchema={reservationFromValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <>
            <Form>
              <Grid container spacing={2} className={classes.formWrapper}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledTextField
                    label="Name"
                    name="name"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledTextField
                    label="E-mail"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledTextField
                    label="Phone"
                    name="phone"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledDatePicker
                    label="Date "
                    name="revDate"
                    value={values.revDate}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledTimePicker
                    name="revTime"
                    value={values.revDate}
                    setFieldValue={setFieldValue}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <StyledTextField
                    label="Person"
                    name="persons"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <StyledAutoSizeTextarea
                    name="message"
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <StyledButton
                    type="submit"
                    text="Make Reservation"
                    style={{ height: "3rem", borderRadius: "4px" }}
                  />
                </Grid>
              </Grid>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ReservationForm;
