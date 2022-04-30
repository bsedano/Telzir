import {
  VStack,
  Select,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
const Services = () => {
  const [from, setFrom] = useState(0);
  const [where, setWhere] = useState(0);
  const [priceMinute, setPriceMinute] = useState(0);
  const [promoPrice, setPromoPrice] = useState(0);
  const [time, setTime] = useState(0);
  console.log(where);
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack spacing={0} w={"100vw"} h={"100vh"}>
        <NavBar />

        <VStack border={"2px solid black"} w={"100%"} p={4}>
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
          <Heading>Veja as vantagens de ser um cliente Fale mais.</Heading>
          <HStack>
            <VStack>
              <Heading>De</Heading>
              <Select
                onChange={() => (e) => console.log(e)}
                borderRadius={"0px"}
                w={"150px"}
              >
                <option>11</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
              </Select>
            </VStack>
            <VStack>
              <Heading>Para</Heading>
              <Select
                onChange={() => (e) => console.log(e)}
                borderRadius={"0px"}
                w={"150px"}
              >
                <option>11</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
              </Select>
            </VStack>
            <Button>Calcular preço </Button>
          </HStack>
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default Services;
