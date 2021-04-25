import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const numberRegExp = /(?:\b|-)([1-9]{1,2}[0]?|99)\b/;

export const loginFromValidation = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const reservationFromValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email().required("email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  revDate: Yup.date().required("Date required").nullable(),
  revTime: Yup.string().required("Time required").nullable(),
  persons: Yup.string()
    .matches(numberRegExp, "Enter positive number")
    .required("required"),
});

export const contactFromValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  email: Yup.string().email().required("email is required"),
});
