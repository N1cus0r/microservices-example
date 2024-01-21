import CustomDrawer from "../shared/CustomDrawer.jsx";
import CreateButton from "../shared/CreateButton.jsx";
import { useDisclosure } from "@chakra-ui/react";
import ProductForm from "./ProductForm.jsx";
import useCreateProductForm from "../../hooks/product/useCreateProductForm.js";

const CreateProductButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createProductForm = useCreateProductForm(onClose);

  return (
    <>
      <CreateButton onClick={onOpen}>Add Product</CreateButton>
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        heading={"Create a Product"}
      >
        <ProductForm formType={"CREATE"} form={createProductForm} />
      </CustomDrawer>
    </>
  );
};
export default CreateProductButton;
