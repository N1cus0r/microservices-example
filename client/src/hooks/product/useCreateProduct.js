import useCreateEntity from "../shared/useCreateEntity.js";
import {privateApiClient} from "../../services/clients/private-api-client.js";

const useCreateProduct = (CACHE_KEY, onSuccess) =>
  useCreateEntity(
    "/products",
    "Product",
    privateApiClient,
    CACHE_KEY,
    onSuccess,
  );


export default useCreateProduct
