import {
  VStack,
  Select,
  Heading,
  Text,
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Img,
  HStack,
} from "@chakra-ui/react";
import { AiFillCalculator } from "react-icons/ai";
import bg from "../../assets/images/services.png";
import money from "../../assets/images/money.png";
import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
const Services = () => {
  const [price, setPrice] = useState({
    from: 11,
    to: 16,
    time: 5,
    price: 0,
    promoPrice: 0,
    plan: 30,
  });

  const handlePrice = () => {
    const from = price.from;
    const to = price.to;
    const promoTime =
      price.time - price.plan <= 0 ? 0 : price.time - price.plan;

    if ((from === 11 && to === 16) || (from === 18 && to === 11)) {
      if (promoTime === 0) {
        setPrice({ ...price, price: price.time * 1.9, promoPrice: 0 });
      } else {
        setPrice({
          ...price,
          price: price.time * 1.9,
          promoPrice: promoTime * 1.9 * 1.1,
        });
      }
    }

    if (from === 16 && to === 11) {
      if (promoTime === 0) {
        setPrice({ ...price, price: price.time * 2.9, promoPrice: 0 });
      } else {
        setPrice({
          ...price,
          price: price.time * 2.9,
          promoPrice: promoTime * 2.9 * 1.1,
        });
      }
    }
    if (from === 11 && to === 17) {
      if (promoTime === 0) {
        setPrice({ ...price, price: price.time * 1.7, promoPrice: 0 });
      } else {
        setPrice({
          ...price,
          price: price.time * 1.7,
          promoPrice: promoTime * 1.7 * 1.1,
        });
      }
    }
    if (from === 17 && to === 11) {
      if (promoTime === 0) {
        setPrice({ ...price, price: price.time * 2.7, promoPrice: 0 });
      } else {
        setPrice({
          ...price,
          price: price.time * 2.7,
          promoPrice: promoTime * 2.7 * 1.1,
        });
      }
    }
    if (from === 11 && to === 18) {
      if (promoTime === 0) {
        setPrice({ ...price, price: price.time * 0.9, promoPrice: 0 });
      } else {
        setPrice({
          ...price,
          price: price.time * 0.9,
          promoPrice: promoTime * 0.9 * 1.1,
        });
      }
    }
  };
  const formatMoney = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack spacing={0} w={"100%"} h={"100%"}>
        <NavBar />

        <VStack w={"100%"} p={4} bgColor={"orange.100"}>
          <Heading fontFamily={"Roboto"} textAlign={"center"}>
            Já conhece o serviço Fale Mais?
          </Heading>
          <Text
            fontFamily={"Roboto"}
            textAlign={"center"}
            fontSize={("md", "xl")}
          >
            Nosso mais novo serviço para chamadas de longa distância nacional,
            com ele você fala mais pagando menos.
          </Text>
          <Text
            fontFamily={"Roboto"}
            textAlign={"center"}
            fontSize={("md", "xl")}
          >
            Faça uma comparação de preços abaixo.
          </Text>
          <Img
            src={bg}
            w={"400px"}
            _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
          />
        </VStack>
        <VStack p={4} w={"100%"}>
          <TableContainer>
            <Table size={"sm"}>
              <TableCaption>
                Calcule e veja as vantagens do plano Fale Mais
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>De</Th>
                  <Th>Para</Th>
                  <Th>Minutos</Th>
                  <Th>Plano</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td w={"85px"}>
                    <Select
                      variant={"flushed"}
                      borderRadius={"0px"}
                      onChange={(e) =>
                        setPrice({ ...price, from: Number(e.target.value) })
                      }
                    >
                      <option value={11}>11</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                    </Select>
                  </Td>
                  <Td w={"85px"}>
                    <Select
                      borderRadius={"0px"}
                      variant={"flushed"}
                      onChange={(e) =>
                        setPrice({ ...price, to: Number(e.target.value) })
                      }
                    >
                      <option
                        value={11}
                        disabled={price.from === 11 ? true : false}
                      >
                        11
                      </option>
                      <option
                        value={16}
                        disabled={
                          price.from === 16
                            ? true
                            : price.from === 17
                            ? true
                            : price.from === 18
                            ? true
                            : false
                        }
                      >
                        16
                      </option>
                      <option
                        value={17}
                        disabled={
                          price.from === 17
                            ? true
                            : price.from === 18
                            ? true
                            : price.from === 16
                            ? true
                            : false
                        }
                      >
                        17
                      </option>
                      <option
                        value={18}
                        disabled={
                          price.from === 18
                            ? true
                            : price.from === 17
                            ? true
                            : price.from === 16
                            ? true
                            : false
                        }
                      >
                        18
                      </option>
                    </Select>
                  </Td>
                  <Td w={"80px"}>
                    <Input
                      value={Number(price.time)}
                      variant={"flushed"}
                      type={"number"}
                      onChange={(e) =>
                        setPrice({ ...price, time: Number(e.target.value) })
                      }
                    />
                  </Td>
                  <Td>
                    <Select
                      value={Number(price.plan)}
                      variant={"flushed"}
                      borderRadius={"0px"}
                      onChange={(e) =>
                        setPrice({ ...price, plan: Number(e.target.value) })
                      }
                    >
                      <option value={"30"}>Fale Mais 30</option>
                      <option value={"60"}>Fale Mais 60</option>
                      <option value={"120"}>Fale Mais 120</option>
                    </Select>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            onClick={handlePrice}
            colorScheme={"orange"}
            borderRadius={"0px"}
            fontFamily={"Roboto"}
            w={"250px"}
            maxW={"50%"}
            boxShadow={"0px 0px 10px black"}
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            rightIcon={<AiFillCalculator />}
            as={"a"}
          >
            Calcular preço
          </Button>

          <HStack
            p={4}
            fontSize={["md", "xl"]}
            w={"100%"}
            justify={"center"}
            textAlign={"left"}
            flexDir={["column-reverse", "row"]}
          >
            <VStack fontFamily={"Nunito"}>
              <Text>Preço sem Fale Mais: {formatMoney(price.price)}</Text>
              <Text>Preço com Fale Mais: {formatMoney(price.promoPrice)}</Text>
              <Text>
                Dinheiro economizado: {""}
                {formatMoney(price.price - price.promoPrice)}
              </Text>
            </VStack>

            <Img
              src={money}
              w={["150px", "200px"]}
              _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
            />
          </HStack>
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default Services;
