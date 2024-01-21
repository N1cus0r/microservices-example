import * as Yup from "yup";
import { useFormik } from "formik";
import { PRODUCT_SCHEMA } from "../../schemas/product-schema.js";
import useUpdateProduct from "./useUpdateProduct.js";
const useUpdateProductForm = (product, onSuccess) => {
  const updateProduct = useUpdateProduct(["products"], onSuccess);

  return useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      price: product.price,
    },
    validationSchema: Yup.object(PRODUCT_SCHEMA),
    onSubmit: (values) => updateProduct.mutate([product.id, values]),
  });
};

export default useUpdateProductForm;
