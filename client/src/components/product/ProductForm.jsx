import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const ProductForm = ({ formType, form }) => {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input
            type="number"
            name="price"
            placeholder="Enter amount"
            value={form.values.price}
            onChange={form.handleChange}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="grade">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Meaningful name"
          value={form.values.name}
          onChange={form.handleChange}
        />
        {form.touched.name && form.errors.name && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {form.errors.name}
          </Text>
        )}
      </FormControl>
      <FormControl id="text">
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          placeholder="Some text describing the product"
          rows={6}
          resize="none"
          value={form.values.description}
          onChange={form.handleChange}
        />
        {form.touched.description && form.errors.description && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {form.errors.description}
          </Text>
        )}
      </FormControl>
      <Button
        colorScheme={"blue"}
        variant={"solid"}
        isDisabled={!form.dirty || !form.isValid}
        onClick={form.handleSubmit}
      >
        {formType === "CREATE" ? "Create" : "Edit"}
      </Button>
    </Stack>
  );
};
export default ProductForm;
