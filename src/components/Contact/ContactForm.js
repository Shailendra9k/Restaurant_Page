import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import StyledTextField from "../../resuableComponent/StyledTextField";
import Grid from "@material-ui/core/Grid";
import StyledButton from "../../resuableComponent/StyledButton";
import { contactFromValidation } from "../../util/Validation";
import StyledAutoSizeTextarea from "../../resuableComponent/StyledAutoSizeTextarea";

const formInitialValue = {
  name: "",
  email: "",
  telephone: "",
  message: "",
};

const ContactForm = (props) => {
  const classes = useContactStyles;

  return (
    <>
      <Formik
        initialValues={formInitialValue}
        validationSchema={contactFromValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <>
            <Form>
              <Grid container spacing={2} className={classes.formWrapper}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <StyledTextField
                    label="Name"
                    name="name"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <StyledTextField
                    label="E-mail"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <StyledTextField
                    label="Phone"
                    name="phone"
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
                    text="Contact Us"
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

const useContactStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: "1rem",
  },
}));

export default ContactForm;
