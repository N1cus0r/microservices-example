import {useQuery} from "@tanstack/react-query";
import ApiService from "../../services/api-service.js";
import {publicApiClient} from "../../services/clients/public-api-client.js";

const useProducts = () => {
  const apiService = new ApiService("/products", publicApiClient);
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiService.getAll(),
  });
};

export default useProducts;
