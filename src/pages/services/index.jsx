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
} from "@chakra-ui/react";
import { AiFillCalculator } from "react-icons/ai";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
const Services = () => {
  const [price, setPrice] = useState({
    from: "11",
    to: "16",
    time: 5,
    price: 0,
    promoPrice: 0,
    plan: "Fale Mais 30",
  });
  const diff = Number(price.from);
  const [show, setShow] = useState(false);
  const handlePrice = () => {
    const origem = price.from;
    const destino = price.to;
    setShow(true);

    if (
      (origem === "11" && destino === "16") ||
      (origem === "18" && destino === "11")
    ) {
      setPrice({ ...price, price: price.time * 1.9 });
    }
    if (origem === "16" && destino === "11") {
      setPrice({ ...price, price: price.time * 2.9 });
    }
    if (origem === "11" && destino === "17") {
      setPrice({ ...price, price: price.time * 1.7 });
    }
    if (origem === "17" && destino === "11") {
      setPrice({ ...price, price: price.time * 2.7 });
    }
    if (origem === "11" && destino === "18") {
      setPrice({ ...price, price: price.time * 0.9 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack spacing={0} w={"100vw"} h={"100vh"}>
        <NavBar />

        <VStack borderBottom={"2px solid orange"} w={"100%"} p={4}>
          <Heading fontFamily={"Roboto"}>
            Já conhece o serviço Fale mais?
          </Heading>
          <Text fontFamily={"Roboto"}>
            Nosso mais novo serviço para chamadas de longa distância nacional,
            com ele você fala mais pagando menos.
          </Text>
          <Text>Faça uma comparação de preços abaixo.</Text>
        </VStack>
        <VStack>
          <TableContainer>
            <Table variant="striped">
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
                  <Td>
                    <Select
                      variant={"flushed"}
                      borderRadius={"0px"}
                      onChange={(e) =>
                        setPrice({ ...price, from: e.target.value })
                      }
                    >
                      <option value={11}>11</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                    </Select>
                  </Td>
                  <Td>
                    <Select
                      borderRadius={"0px"}
                      variant={"flushed"}
                      onChange={(e) =>
                        setPrice({ ...price, to: e.target.value })
                      }
                    >
                      <option value={11} disabled={diff === 11 ? true : false}>
                        11
                      </option>
                      <option
                        value={16}
                        disabled={
                          diff === 16
                            ? true
                            : diff === 17
                            ? true
                            : diff === 18
                            ? true
                            : false
                        }
                      >
                        16
                      </option>
                      <option
                        value={17}
                        disabled={
                          diff === 17
                            ? true
                            : diff === 18
                            ? true
                            : diff === 16
                            ? true
                            : false
                        }
                      >
                        17
                      </option>
                      <option
                        value={18}
                        disabled={
                          diff === 18
                            ? true
                            : diff === 17
                            ? true
                            : diff === 16
                            ? true
                            : false
                        }
                      >
                        18
                      </option>
                    </Select>
                  </Td>
                  <Td>
                    <Input
                      value={price.time}
                      variant={"flushed"}
                      type={"number"}
                      onChange={(e) =>
                        setPrice({ ...price, time: e.target.value })
                      }
                    />
                  </Td>
                  <Td>
                    <Select
                      variant={"flushed"}
                      borderRadius={"0px"}
                      onChange={(e) =>
                        setPrice({ ...price, from: e.target.value })
                      }
                    >
                      <option value={"Fale mais 30"}>Fale mais 30</option>
                      <option value={"Fale mais 60"}>Fale mais 60</option>
                      <option value={"Fale mais 120"}>Fale mais 120</option>
                    </Select>
                  </Td>
                </Tr>
                {show && (
                  <>
                    <Tr>
                      <Th>Preço sem plano</Th>
                      <Th>Preço com o plano</Th>
                      <Th>Total economizado</Th>
                      <Th>Plano escolhido</Th>
                    </Tr>
                    <Td>{price.price}</Td>
                    <Td>{price.promoPrice}</Td>
                    <Td>{price.price - price.promoPrice}</Td>
                    <Td>{price.plan}</Td>
                  </>
                )}
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
            _hover={{ transform: "scale(1.1)" }}
            rightIcon={<AiFillCalculator />}
          >
            Calcular preço
          </Button>
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default Services;
