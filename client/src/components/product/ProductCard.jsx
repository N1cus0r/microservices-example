import {Box, chakra, Flex, HStack, Icon, Image, Tooltip, useColorModeValue,} from "@chakra-ui/react";
import useCartStore from "../../store/cart-store.js";
import {FiShoppingCart} from "react-icons/fi";
import LocalstorageService from "../../services/localstorage-service.js";
import DeleteProductButton from "./DeleteProductButton.jsx";
import UpdateProductButton from "./UpdateProductButton.jsx";

const ProductCard = ({ product }) => {
  const token = LocalstorageService.getLocalStorageToken();

  const cartStore = useCartStore();
  const handleClick = (product) => {
    cartStore.addToCart(product);
  };

  return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={`https://picsum.photos/id/${product.id}/600/300`}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            {!token && (
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon
                    as={FiShoppingCart}
                    h={7}
                    w={7}
                    alignSelf={"center"}
                    onClick={() => handleClick(product)}
                  />
                </chakra.a>
              </Tooltip>
            )}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {product.price.toFixed(2)}
            </Box>
          </Flex>
          {token && (
            <HStack spacing={2}>
              <UpdateProductButton product={product}/>
              <DeleteProductButton product={product} />
            </HStack>
          )}
        </Box>
      </Box>
    </Flex>
  );
};
export default ProductCard;
