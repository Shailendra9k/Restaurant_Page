import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { color } from "../util/globalTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${color.Soft_red}`,
    },
  },
});

const useStyledTextField = makeStyles((theme) => ({
  textFieldWrapper: {
    marginBottom: theme.spacing(2),
    opacity: "0.6",
    letterSpacing: "1.5px",
    width: "100%",
  },
}));

const StyledTextField = (props) => {
  const classes = useStyledTextField();
  const { variant, label, name, type } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Field
          disabled={false}
          fullWidth
          className={classes.textFieldWrapper}
          component={TextField}
          type={type}
          name={name}
          label={label}
          variant={variant}
          // value={value}
          // onChange={(e) => setFieldValue(name, e)}
        />
      </ThemeProvider>
    </>
  );
};

export default StyledTextField;
