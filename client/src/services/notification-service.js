import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();
class NotificationService {
  static dispatchNotification = (title, description, status) => {
    toast({
      title,
      description,
      status,
      isClosable: true,
      duration: 4000,
    });
  };

  static errorNotification = (title, description) => {
    this.dispatchNotification(title, description, "error");
  };

  static successNotification = (title, description) => {
    this.dispatchNotification(title, description, "success");
  };
}

export default NotificationService;
