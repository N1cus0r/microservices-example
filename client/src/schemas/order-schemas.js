import * as Yup from "yup";

export const CREATE_ORDER_SCHEMA = {
  address: Yup.string().required("This field is required"),
  deliverySpeed: Yup.string()
      .oneOf([
        "STANDARD",
        "EXPRESS"
      ])
      .required("This field is required"),
};
