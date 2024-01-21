import {useQuery} from "@tanstack/react-query";
import ApiService from "../../services/api-service.js";
import {privateApiClient} from "../../services/clients/private-api-client.js";

const useOrders = () => {
    const apiService = new ApiService("/orders", privateApiClient);
    return useQuery({
        queryKey: ["orders"],
        queryFn: () => apiService.getAll(),
    })
}

export default useOrders
