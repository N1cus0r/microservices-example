import ApiService from "../../services/api-service.js";
import { privateApiClient } from "../../services/clients/private-api-client.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "../../services/notification-service.js";

const useUpdateEntity = (endpoint, entityName, CACHE_KEY, onSuccess) => {
  const apiService = new ApiService(endpoint, privateApiClient);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ([id, data]) => apiService.put(id, data),
    onSuccess: () => {
      onSuccess();
      NotificationService.successNotification(
        "Success",
        `${entityName} edited successfully`,
      );
      queryClient.invalidateQueries({ queryKey: CACHE_KEY });
    },
    onError: (error) =>
      NotificationService.errorNotification(
        "Error",
        error.response.data.message,
      ),
  });
};

export default useUpdateEntity;
