import DeleteButton from "../shared/DeleteButton.jsx";
import DeleteModal from "../shared/DeleteModal.jsx";
import { useDisclosure } from "@chakra-ui/react";
import useDeleteProduct from "../../hooks/product/useDeleteProduct.js";
import notificationService from "../../services/notification-service.js";

const DeleteProductButton = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteProduct = useDeleteProduct(
    ["products"],
    onClose,
    () => {
      notificationService.successNotification(
        "Success",
        "Product was successfully deleted",
      );
    },
    () => {
      notificationService.errorNotification(
        "Error",
        "An error occurred while trying to delete product",
      );
    },
  );

  return (
    <>
      <DeleteButton onClick={onOpen} />
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={() => deleteProduct.mutate(product.id)}
        heading={"Deleting Product"}
        text={"Are you sure you want to delete this product ?"}
      />
    </>
  );
};
export default DeleteProductButton;
