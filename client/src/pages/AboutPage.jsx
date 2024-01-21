import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const AboutPage = () => {
  return (
    <Container>
      <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Text fontSize="md">API Gateway </Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              The initial step involves the request reaching the API Gateway.
              Where it is authorized and forwarded to the appropriate
              microservice.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Text fontSize="md">Authentication & Authorization</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              Subsequently, the request undergoes an authorization process,
              wherein the presence of an Authorization header is verified. This
              authorization is accomplished by making an HTTP request to
              validate the token using Authentication Microservice.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Text fontSize="md">Placing An Order</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              When a user initiates a request to place an order, specifying the
              desired quantity of products, the products undergo validation
              through an HTTP request to the products microservice. Following
              successful product validation, an event is published to the
              "save-order" topic, managing the process of saving the order to
              the database. Simultaneously, another event is published to the
              "order-notification" topic, overseeing the notification
              functionality of the application.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Text fontSize="md">Customers & Admin</Text>
            <ChevronDownIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text color="gray.600">
              The app is designed to be user-friendly, allowing customers to
              easily browse through all available products and add them to the
              cart for placing an order. Additionally, the app offers
              administrative functionalities, enabling admins to create, update,
              and delete products. Admins can also mark orders as complete,
              enhancing the overall management capabilities of the application.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
export default AboutPage;
