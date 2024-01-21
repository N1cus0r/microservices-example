import { SimpleGrid } from "@chakra-ui/react";

const CardsContainer = ({ children }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}>{children}</SimpleGrid>
  );
};
export default CardsContainer;
