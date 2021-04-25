import React from 'react';
import {Formik, Form} from "formik";
import StyledTextField from "../../resuableComponent/StyledTextField";
import Grid from "@material-ui/core/Grid";
import StyledButton from "../../resuableComponent/StyledButton";
import {Link, makeStyles, Typography} from "@material-ui/core";
import {background} from '../../util/globalTheme';
import {loginFromValidation} from "../../util/Validation";

const useLoginForm = makeStyles(theme => ({
  button: {
    marginTop: '0',
    borderRadius: '4px',
    backgroundColor: `${background.fb_bg}`,
    transition: ".2s ease-in all",
    letterSpacing: ".1rem",
    "&:hover": {
      backgroundColor: `${background.fb_bg_hover}`,
    },
  }
}))

const formInitialValue = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const classes = useLoginForm();
  return (
    <>
      <Formik
        initialValues={formInitialValue}
        validationSchema={loginFromValidation}
        onSubmit={(values) => console.log(values)}>

        {({values}) => (
          <>
            <Form>
              <Grid container>
                <Grid item sm={12}>
                  <StyledTextField label="Email" name="email" type="email" variant="outlined"/>
                </Grid>
                <Grid item sm={12}>
                  <StyledTextField label="Password" name="password" type="password" variant="outlined"/>
                </Grid>

                <Grid item sm={12}>
                  <StyledButton type="submit"  text="Login" style={{height: '3rem', borderRadius: '4px'}}/>
                </Grid>

                <Grid item sm={12} style={{marginTop: '10px', cursor: 'pointer'}}>
                  <Link to="#">
                    <Typography>Register Here?</Typography>
                  </Link>
                  <Link to="#">
                    <Typography>Forget Password</Typography>
                  </Link>
                </Grid>

                <Grid item sm={12} style={{textAlign: 'center', marginTop: '15px'}}>
                  <Link to="#">
                    <StyledButton text="Login With Facebook" className={classes.button}/>
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </>
        )}


      </Formik>
    </>
  );
};

export default LoginForm;
