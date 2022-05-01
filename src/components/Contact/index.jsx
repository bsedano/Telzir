import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  ListItem,
  Heading,
  Icon,
  Text,
  VStack,
  HStack,
  InputGroup,
} from "@chakra-ui/react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ListItem
        onClick={onOpen}
        _hover={{
          color: "orange",
          cursor: "pointer",
          borderBottom: "2px solid orange",
        }}
      >
        Contato
      </ListItem>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent bgColor={"blackAlpha.900"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader>
            <Heading color={"white"} fontFamily={"Roboto"}>
              Fale conosco
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              p={3}
              border={"2px solid orange"}
              spacing={6}
              fontFamily={"Roboto"}
              marginBottom={"40px"}
            >
              <HStack color={"white"}>
                <Icon as={AiFillPhone} w={6} h={6} />
                <Text fontSize={"xl"} textShadow={"0px 0px 2px orange"}>
                  +55 21 99999-9999
                </Text>
              </HStack>
              <HStack color={"white"}>
                <Icon as={AiOutlineMail} w={6} h={6} />
                <Text fontSize={"xl"} textShadow={"0px 0px 2px orange"}>
                  contato@contato.com
                </Text>
              </HStack>
              <HStack color={"white"}>
                <Icon as={TiLocation} w={6} h={6} />
                <Text fontSize={"xl"} textShadow={"0px 0px 2px orange"}>
                  +55 21 99999-9999
                </Text>
              </HStack>
            </VStack>
            <VStack
              h={"70%"}
              justify={"space-evenly"}
              p={6}
              border={"2px solid orange"}
            >
              <InputGroup>
                <Input
                  placeholder="Nome"
                  variant={"flushed"}
                  _focus={{ borderBottom: "2px solid orange" }}
                  rounded={"lg"}
                  color={"white"}
                  p={3}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="E-mail"
                  variant={"flushed"}
                  _focus={{ borderBottom: "2px solid orange" }}
                  rounded={"lg"}
                  color={"white"}
                  p={3}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="WhatsApp / Cel"
                  variant={"flushed"}
                  _focus={{ borderBottom: "2px solid orange" }}
                  rounded={"lg"}
                  color={"white"}
                  p={3}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Assunto"
                  variant={"flushed"}
                  _focus={{ borderBottom: "2px solid orange" }}
                  rounded={"lg"}
                  p={3}
                  color={"white"}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Empresa"
                  variant={"flushed"}
                  _focus={{ borderBottom: "2px solid orange" }}
                  rounded={"lg"}
                  color={"white"}
                  p={3}
                />
              </InputGroup>
              <Button
                minH={"35px"}
                margin={"0 auto"}
                onClick={onClose}
                w={"50%"}
                textShadow={"0px 0px 5px black"}
                borderRadius={"0px"}
                boxShadow={"0px 0px 20px black"}
                colorScheme={"orange"}
                fontFamily={"Roboto"}
                _hover={{ transform: "scale(1.1)" }}
                rightIcon={<AiOutlineMail />}
              >
                Enviar
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Contact;
