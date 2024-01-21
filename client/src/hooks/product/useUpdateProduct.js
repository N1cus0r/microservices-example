import useUpdateEntity from "../shared/useUpdateEntity.js";

const useUpdateProduct = (CACHE_KEY, onSuccess) =>
  useUpdateEntity("/products", "Product", CACHE_KEY, onSuccess);

export default useUpdateProduct;
