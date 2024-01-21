import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavbarLinks from "./NavbarLinks.jsx";
import LocalstorageService from "../../services/localstorage-service.js";
import {
  ADMIN_NAVBAR_LINKS,
  USER_NAVBAR_LINKS,
} from "../../routing/navbar-links.js";
import useAuth from "../../hooks/auth/useAuth.js";
import { useNavigate } from "react-router-dom";
import CartButton from "../cart/CartButton.jsx";
import { RiAdminFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const token = LocalstorageService.getLocalStorageToken();
  const NAVBAR_LINKS = token ? ADMIN_NAVBAR_LINKS : USER_NAVBAR_LINKS;

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Heading size="md">MicroservicesHub</Heading>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <NavbarLinks links={NAVBAR_LINKS} />
          </HStack>
        </HStack>
        <HStack alignItems="center" spacing={4}>
          <CartButton />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {token ? (
            <IconButton
              aria-label={"Login button"}
              icon={<IoLogOut />}
              onClick={() => logout()}
            />
          ) : (
            <IconButton
              aria-label={"Logout button"}
              icon={<RiAdminFill />}
              onClick={() => navigate("/login")}
            />
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;
