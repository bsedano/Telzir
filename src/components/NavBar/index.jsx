import {
  Heading,
  HStack,
  Img,
  ListItem,
  UnorderedList,
  Menu,
  MenuItem,
  Button,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import Header from "../Header";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/header.png";
import Contact from "../Contact";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Header />
      <HStack
        w={"100%"}
        h={"120px"}
        minH={"120px"}
        bgColor={"blackAlpha.800"}
        justify={"space-around"}
        as={"nav"}
        borderBottom={"2px solid orange"}
        position={"sticky"}
        top={"0"}
      >
        <HStack>
          <Img
            src={logo}
            h={"80px"}
            _hover={{ cursor: "pointer", transform: "rotate(360deg)" }}
            transition={"transform 0.7s ease-in-out"}
          />
          <Heading
            fontFamily={"nunito"}
            color={"orange"}
            fontSize={["2xl", "5xl"]}
          >
            Telzir
          </Heading>
        </HStack>
        <HStack>
          <Menu>
            <MenuButton
              as={Button}
              bgColor={"blackAlpha.500"}
              size={"lg"}
              _focus={{ cursor: "pointer" }}
              display={["block", "none"]}
            >
              <HamburgerIcon color={"orange"} />
            </MenuButton>
            <MenuList
              color={"white"}
              bgColor={"blackAlpha.500"}
              fontFamily={"Nunito"}
              as={UnorderedList}
              styleType={"none"}
            >
              <MenuItem
                _hover={{ bgColor: "orange" }}
                _focus={{ bgColor: "orange" }}
              >
                <Link to={"/"}>Home</Link>
              </MenuItem>
              <MenuItem
                _hover={{ bgColor: "orange" }}
                _focus={{ bgColor: "orange" }}
              >
                <Link to={"/about-us"}>Sobre Nós</Link>
              </MenuItem>
              <MenuItem
                _hover={{ bgColor: "orange" }}
                _focus={{ bgColor: "orange" }}
              >
                <Link to={"/services"}>Serviços</Link>
              </MenuItem>
              <MenuItem
                _hover={{ bgColor: "orange" }}
                _focus={{ bgColor: "orange" }}
              >
                <Contact />
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <UnorderedList
          fontFamily={"Nunito"}
          color={"white"}
          w={"300px"}
          styleType={"none"}
          display={["none", "flex"]}
          justifyContent={"space-between"}
        >
          <ListItem
            _hover={{
              color: "orange",
              cursor: "pointer",
              transform: "scale(1.1)",
            }}
          >
            <Link to={"/"}> Home</Link>
          </ListItem>
          <ListItem
            _hover={{
              color: "orange",
              cursor: "pointer",
              transform: "scale(1.1)",
            }}
          >
            <Link to={"/about-us"}>Sobre Nós</Link>
          </ListItem>
          <ListItem
            _hover={{
              color: "orange",
              cursor: "pointer",
              transform: "scale(1.1)",
            }}
          >
            <Link to={"/services"}>Serviços</Link>
          </ListItem>
          <Contact />
        </UnorderedList>
      </HStack>
    </>
  );
};

export default NavBar;
