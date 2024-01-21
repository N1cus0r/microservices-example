import {useFormik} from "formik";
import * as Yup from "yup";
import {PRODUCT_SCHEMA} from "../../schemas/product-schema.js";
import useCreateProduct from "./useCreateProduct.js";

const useCreateProductForm = (onSuccess) => {
  const createProduct = useCreateProduct(["products"], onSuccess);

  return useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
    },
    validationSchema: Yup.object(PRODUCT_SCHEMA),
    onSubmit: (values, { resetForm }) => {
      createProduct.mutate(values)
        resetForm();
    },
  });
};

export default useCreateProductForm;
