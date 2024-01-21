import useDeleteEntity from "../shared/useDeleteEntity.js";

const useDeleteProduct = (CACHE_KEY, onDelete, onSuccess, onError) =>
  useDeleteEntity("/products", CACHE_KEY, onDelete, onSuccess, onError);

export default useDeleteProduct;
