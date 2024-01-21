import {Link} from "react-router-dom";
import {Text} from "@chakra-ui/react";

const NavbarLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.label} to={link.href}>
          <Text
            fontWeight={location.pathname === link.href ? "bold" : "normal"}
            _hover={{
              textDecoration: "underline",
            }}
          >
            {link.label}
          </Text>
        </Link>
      ))}
    </>
  );
};
export default NavbarLinks;
