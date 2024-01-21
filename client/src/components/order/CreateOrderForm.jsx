import React from "react";
import {Button, FormControl, FormLabel, Input, Select, Stack, Text,} from "@chakra-ui/react";
import useCreateOrderForm from "../../hooks/order/useCreateOrderForm.js";

const CreateOrderForm = ({ orderItems, onSuccess }) => {
  const createOrderForm = useCreateOrderForm(orderItems, onSuccess);

  return (
    <Stack p={4} spacing={4}>
      <FormControl id="address">
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          placeholder="Papers St."
          value={createOrderForm.values.address}
          onChange={createOrderForm.handleChange}
          disabled={orderItems.length === 0}
        />
        {createOrderForm.touched.address && createOrderForm.errors.address && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {createOrderForm.errors.address}
          </Text>
        )}
      </FormControl>
      <FormControl id="deliverySpeed">
        <FormLabel>Delivery Speed</FormLabel>
        <Select
          name="deliverySpeed"
          value={createOrderForm.values.deliverySpeed}
          onChange={createOrderForm.handleChange}
          disabled={orderItems.length === 0}
        >
          <option value="STANDARD">Standard</option>
          <option value="EXPRESS">Express</option>
        </Select>
        {createOrderForm.touched.deliverySpeed &&
          createOrderForm.errors.deliverySpeed && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {createOrderForm.errors.deliverySpeed}
            </Text>
          )}
      </FormControl>
      <Button
        background={"blue.400"}
        onClick={createOrderForm.handleSubmit}
      >
        Checkout
      </Button>
    </Stack>
  );
};
export default CreateOrderForm;
