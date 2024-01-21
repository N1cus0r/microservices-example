import React from "react";
import useProducts from "../hooks/product/useProducts.js";
import ProductCards from "../components/product/ProductCards.jsx";
import CreateProductButton from "../components/product/CreateProductButton.jsx";
import { Flex } from "@chakra-ui/react";
import LocalstorageService from "../services/localstorage-service.js";

const ProductsPage = () => {
  const { data, isLoading } = useProducts();
  const token = LocalstorageService.getLocalStorageToken();

  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      {token && (
        <Flex justifyContent="center">
          <CreateProductButton />
        </Flex>
      )}
      <ProductCards products={data} />
    </>
  );
};
export default ProductsPage;
