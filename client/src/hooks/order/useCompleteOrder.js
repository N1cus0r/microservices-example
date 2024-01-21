import useUpdateEntity from "../shared/useUpdateEntity.js";

const useCompleteOrder = (CACHE_KEY, onSuccess) =>
  useUpdateEntity("/orders/complete", "Order status", CACHE_KEY, onSuccess);

export default useCompleteOrder;
