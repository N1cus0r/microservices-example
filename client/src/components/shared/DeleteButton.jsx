import React from 'react'
import {Button} from "@chakra-ui/react";

const DeleteButton = ({onClick}) => {
    return (
        <Button
            w={"full"}
            mt={8}
            bg={"red.400"}
            color={"white"}
            rounded={"md"}
            _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
            }}
            onClick={onClick}
        >
            Delete
        </Button>
    )
}
export default DeleteButton
