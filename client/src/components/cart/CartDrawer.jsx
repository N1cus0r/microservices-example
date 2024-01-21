import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import useCartStore from "../../store/cart-store.js";
import CreateOrderForm from "../order/CreateOrderForm.jsx";

const CartDrawer = ({ isOpen, onClose }) => {
  const cartStore = useCartStore();
  const cartItems = cartStore.cartState;

  return (
    <Drawer size={"md"} placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Cart Items</DrawerHeader>

        <DrawerBody>
          {cartItems.length !== 0 ? (
            <UnorderedList>
              {cartItems.map((cartItem) => (
                <ListItem key={cartItem.product.id} p={1}>
                  <Flex alignItems={"spaceBetween"}>
                    <Text>
                      {cartItem.quantity} x {cartItem.product.name}
                    </Text>
                    <Spacer />
                    <HStack spacing={2}>
                      <IconButton
                        icon={<AddIcon />}
                        size={"xs"}
                        aria-label={"add-button"}
                        onClick={() => cartStore.addToCart(cartItem.product)}
                      />
                      <IconButton
                        icon={<MinusIcon />}
                        size={"xs"}
                        aria-label={"remove-button"}
                        onClick={() =>
                          cartStore.removeFromCart(cartItem.product)
                        }
                      />
                    </HStack>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Text color={"gray.500"}>
              The cart is empty, add some items to proceed to checkout.
            </Text>
          )}
        </DrawerBody>

        <DrawerFooter justifyContent={"center"}>
          {cartItems.length !== 0 && (
            <Box width={"100%"}>
              <CreateOrderForm orderItems={cartItems} onSuccess={onClose}/>
            </Box>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default CartDrawer;
