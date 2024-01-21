import React from "react";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const CompleteOrderModal = ({ isOpen, onClose, onClick }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={"600px"}>
        <ModalHeader>Complete Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={5}>
          <VStack spacing={1}>
            <Heading size="md" textAlign="center">
              Are you sure this order is completed ?
            </Heading>
            <Text color={"gray.500"}>(This operation is irreversible)</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
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
            onClick={onClick}
          >
            Complete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CompleteOrderModal;
