import { Box, Center, Image, useColorModeValue } from "@chakra-ui/react";

const CardContainer = ({ children }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={4}>{children}</Box>
      </Box>
    </Center>
  );
};
export default CardContainer;
