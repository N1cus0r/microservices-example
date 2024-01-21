import * as Yup from "yup";

export const AUTH_SCHEMA = {
  email: Yup.string()
    .email("Must be a valid email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
};
