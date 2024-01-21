import React from "react";
import {Button} from "@chakra-ui/react";

const EditButton = ({ onClick }) => {
  return (
    <Button
      w={"full"}
      mt={8}
      bg={"yellow.300"}
      color={"black"}
      rounded={"md"}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      onClick={onClick}
    >
      Edit
    </Button>
  );
};
export default EditButton;
