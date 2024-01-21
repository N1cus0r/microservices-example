import React from "react";
import { Badge, HStack, Text } from "@chakra-ui/react";

const DeliveryTimeBadge = ({ deliveryTime }) => {
  const dateObj = new Date(deliveryTime);
  const dateString = `${dateObj.getDate().toString().padStart(2, "0")}-${(
    dateObj.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateObj.getFullYear()}`;

  const color =
    dateObj.getDate() > new Date().getDate() + 1
      ? "green"
      : dateObj.getDate() > new Date().getDate()
      ? "yellow"
      : "red";

  return (
    <HStack spacing={2}>
      <Text fontSize="xl" fontWeight="bold">
        By:
      </Text>
      <Badge colorScheme={color} fontSize="xl">
        {dateString}
      </Badge>
    </HStack>
  );
};
export default DeliveryTimeBadge;
