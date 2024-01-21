import {Flex} from "@chakra-ui/react";
import LoginForm from "../components/auth/LoginForm.jsx";

const LoginPage = () => {
  return (
      <Flex justifyContent={"center"} alignItems={"center"}>
          <LoginForm />
      </Flex>
  );
};
export default LoginPage;
