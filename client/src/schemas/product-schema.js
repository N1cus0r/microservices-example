import * as Yup from "yup";
export const PRODUCT_SCHEMA = {
  name: Yup.string().required("This field is required"),
  description: Yup.string().required("This field is required"),
  price: Yup.number()
    .required("This field is required")
    .positive("Price must be a positive number"),
};

