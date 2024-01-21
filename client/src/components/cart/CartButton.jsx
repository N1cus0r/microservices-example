import React from "react";
import {Button, useDisclosure} from "@chakra-ui/react";

import {IoCart} from "react-icons/io5";
import CartDrawer from "./CartDrawer.jsx";

const CartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <IoCart />
      </Button>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default CartButton;
