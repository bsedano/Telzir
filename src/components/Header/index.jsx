import { HStack } from "@chakra-ui/react";
import { Icon, Text } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai/";
const Header = () => {
  return (
    <HStack
      as={"header"}
      p={2}
      bgColor={"blackAlpha.900"}
      w={"100%"}
      justify={"space-evenly"}
      display={["none", "flex"]}
    >
      <HStack spacing={3} display={"flex"} flexDir={"row"} fontWeight={"700"}>
        <Icon as={AiFillPhone} w={4} h={4} color={"white"} />
        <Text
          fontFamily={"Nunito"}
          color={"white"}
          textShadow={"0px 0px 5px orange"}
        >
          +55 21 99999-9999
        </Text>
        <Icon as={AiOutlineMail} w={4} h={4} color={"white"} />
        <Text
          fontFamily={"Nunito"}
          color={"white"}
          textShadow={"0px 0px 5px orange"}
        >
          contato@contato.com
        </Text>
      </HStack>
      <HStack>
        <Icon
          as={AiFillFacebook}
          w={6}
          h={6}
          color={"white"}
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={AiFillTwitterSquare}
          w={6}
          h={6}
          color={"white"}
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={AiFillLinkedin}
          w={6}
          h={6}
          color={"white"}
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={AiFillInstagram}
          w={6}
          h={6}
          color={"white"}
          _hover={{ cursor: "pointer" }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
