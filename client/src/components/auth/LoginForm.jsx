import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import useLoginForm from "../../hooks/auth/useLoginForm.jsx";
import PasswordInput from "./PasswordInput.jsx";

const LoginForm = () => {
  const loginForm = useLoginForm();

  return (
    <Flex p={8} flex={1} align={"center"} justify={"center"}>
      <Stack spacing={4} w={"full"} maxW={"sm"}>
        <Heading fontSize={"2xl"}>Sign in to your account</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
          />
          {loginForm.touched.email && loginForm.errors.email && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {loginForm.errors.email}
            </Text>
          )}
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <PasswordInput
            name="password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
          />
          {loginForm.touched.password && loginForm.errors.password && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {loginForm.errors.password}
            </Text>
          )}
        </FormControl>
        <Button
          colorScheme={"blue"}
          variant={"solid"}
          onClick={loginForm.handleSubmit}
        >
          Sign in
        </Button>
      </Stack>
    </Flex>
  );
};
export default LoginForm;
