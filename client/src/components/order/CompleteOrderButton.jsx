import React from "react";
import {Button, useDisclosure} from "@chakra-ui/react";
import CompleteOrderModal from "./CompleteOrderModal.jsx";
import useCompleteOrder from "../../hooks/order/useCompleteOrder.js";

const CompleteOrderButton = ({ order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const completeOrder = useCompleteOrder(["orders"], onClose)

  return (
    <>
      <Button
        w={"full"}
        mt={8}
        bg={"green.500"}
        color={"white"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        onClick={onOpen}
      >
        Complete
      </Button>
      <CompleteOrderModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={() => completeOrder.mutate([order.id, {}])}
      />
    </>
  );
};
export default CompleteOrderButton;
