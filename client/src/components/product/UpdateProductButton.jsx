import { useDisclosure } from "@chakra-ui/react";
import CustomDrawer from "../shared/CustomDrawer.jsx";
import EditButton from "../shared/EditButton.jsx";
import ProductForm from "./ProductForm.jsx";
import useUpdateProductForm from "../../hooks/product/useUpdateProductForm.js";

const UpdateProductButton = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateProductForm = useUpdateProductForm(product, onClose);

  return (
    <>
      <EditButton onClick={onOpen} />
      <CustomDrawer isOpen={isOpen} onClose={onClose} heading={"Edit Product"}>
        <ProductForm formType={"UPDATE"} form={updateProductForm} />
      </CustomDrawer>
    </>
  );
};
export default UpdateProductButton;
