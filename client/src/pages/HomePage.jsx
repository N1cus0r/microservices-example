import {
  Box, Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAbout, FcFlowChart, FcKey, FcPaid, FcShipped } from "react-icons/fc";
import {useNavigate} from "react-router-dom";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={4}>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            MicroservicesHub
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            This project utilizes a Eureka server for service discovery,
            enabling seamless communication among services through HTTP requests
            and Kafka events.
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"API Gateway"}
              icon={<Icon as={FcFlowChart} w={10} h={10} />}
              description={
                "Orchestrates and manages microservices communication.."
              }
            />
            <Card
              heading={"Auth Microservice"}
              icon={<Icon as={FcKey} w={10} h={10} />}
              description={"Authenticates and authorizes requests."}
            />
            <Card
              heading={"Product Microservice"}
              icon={<Icon as={FcPaid} w={10} h={10} />}
              description={"Provides CRUD functionality for products."}
            />
            <Card
              heading={"Order Microservice"}
              icon={<Icon as={FcShipped} w={10} h={10} />}
              description={
                "Handles the order process and validates ordered products."
              }
            />
            <Card
              heading={"Notification Microservice"}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                "Notifies the user when his order is placed and completed."
              }
            />
          </Flex>
        </Container>
      </Box>
      <Button variant={"link"} colorScheme={"blue"} size={"md"}
      onClick={() => navigate("/products")}>
        Get Started
      </Button>
    </Stack>
  );
};

export default HomePage;
