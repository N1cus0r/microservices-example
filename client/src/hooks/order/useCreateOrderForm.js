import { useFormik } from "formik";
import * as Yup from "yup";
import { CREATE_ORDER_SCHEMA } from "../../schemas/order-schemas.js";
import useCreateOrder from "./useCreateOrder.js";
import useCartStore from "../../store/cart-store.js";
import LocalstorageService from "../../services/localstorage-service.js";
const useCreateOrderForm = (orderItems, onSuccess) => {
  const cartStore = useCartStore();
  const createOrder = useCreateOrder(["orders"], () => {
    onSuccess();
    cartStore.emptyCart();
    LocalstorageService.setLocalStorageCart([]);
    // + navigate to about
  });

  return useFormik({
    initialValues: {
      orderItems: orderItems.map((item) => ({
        quantity: item.quantity,
        productId: item.product.id,
      })),
      address: "",
      deliverySpeed: "STANDARD",
    },
    validationSchema: Yup.object(CREATE_ORDER_SCHEMA),
    onSubmit: (values) => createOrder.mutate(values),
  });
};

export default useCreateOrderForm;
