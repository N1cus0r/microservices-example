import { useFormik } from "formik";
import * as Yup from "yup";
import { AUTH_SCHEMA } from "../../schemas/auth-schema.js";
import useAuth from "./useAuth.js";

const useLoginForm = () => {
  const {login} = useAuth()

  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(AUTH_SCHEMA),
    onSubmit: (values) => login(values),
  });
};

export default useLoginForm;
