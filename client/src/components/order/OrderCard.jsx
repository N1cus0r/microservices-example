import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import DeliveryTimeBadge from "./DeliveryTimeBadge.jsx";
import CompleteOrderButton from "./CompleteOrderButton.jsx";

const OrderCard = ({ order }) => {
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
        <Box p="6" w={380}>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              To: {order.address}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <DeliveryTimeBadge deliveryTime={order.deliveryTime} />
          </Flex>
            <CompleteOrderButton order={order} />
        </Box>
      </Box>
    </Flex>
  );
};
export default OrderCard;
