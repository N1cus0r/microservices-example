import useCreateEntity from "../shared/useCreateEntity.js";
import {publicApiClient} from "../../services/clients/public-api-client.js";

const useCreateOrder = (CACHE_KEY, onSuccess) =>
  useCreateEntity("/orders", "Order", publicApiClient, CACHE_KEY, onSuccess);

export default useCreateOrder;
