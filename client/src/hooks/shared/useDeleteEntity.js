import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiService from "../../services/api-service.js";
import { privateApiClient } from "../../services/clients/private-api-client.js";

const useDeleteEntity = (endpoint, CACHE_KEY, onDelete, onSuccess, onError) => {
  const apiService = new ApiService(endpoint, privateApiClient);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiService.delete,
    onMutate: onDelete,
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries({ queryKey: CACHE_KEY });
    },
    onError: onError,
  });
};

export default useDeleteEntity;
