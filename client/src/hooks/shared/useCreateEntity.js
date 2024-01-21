import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "../../services/notification-service.js";
import ApiService from "../../services/api-service.js";

const useCreateEntity = (
  endpoint,
  entityName,
  apiClient,
  CACHE_KEY,
  onSuccess,
) => {
  const apiService = new ApiService(endpoint, apiClient);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiService.post,
    onSuccess: () => {
      onSuccess();
      NotificationService.successNotification(
        "Success",
        `${entityName} created successfully`,
      );
      queryClient.invalidateQueries({ queryKey: CACHE_KEY });
    },
    onError: (error) => {
      NotificationService.errorNotification(
        "Error",
        error.response.data.message,
      );
    },
  });
};

export default useCreateEntity;
