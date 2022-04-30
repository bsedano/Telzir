import { Center, Heading, VStack, Text, Button } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import background from "../../assets/images/background.jpg";
import divhome from "../../assets/images/divhome.png";
import { useNavigate } from "react-router-dom";
import { InfoIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack
        w={"100vw"}
        h={"100vh"}
        spacing={0}
        bgImage={background}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
      >
        <NavBar />
        <Center w={"100%"} h={"100%"}>
          <VStack
            w={"80%"}
            h={"80%"}
            maxW={"1000px"}
            minW={"350px"}
            bgColor={"blackAlpha.800"}
            boxShadow={"0px 0px 20px black"}
            p={4}
            justify={"space-evenly"}
            bgImage={divhome}
            bgSize={["500px", "700px", "680px"]}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          >
            <Heading
              fontFamily={"Roboto"}
              fontSize={["xl", "3xl", "4xl"]}
              color={"white"}
              textTransform={"uppercase"}
              textShadow={"0px 0px 10px black"}
            >
              Soluções em telefonia
            </Heading>
            <Text
              color={"white"}
              fontFamily={"Roboto"}
              textAlign={"center"}
              fontSize={["xl", "2xl"]}
              textShadow={"0px 0px 5px black"}
              width={["90%", "50%"]}
            >
              Conheça a nossa mais nova solução para quem precisa falar mais
              pagando menos.
            </Text>
            <Button
              colorScheme={"orange"}
              fontFamily={"Roboto"}
              w={"50%"}
              _hover={{ transform: "scale(1.1)" }}
              boxShadow={"0px 0px 20px black"}
              onClick={() => navigate("/services")}
              borderRadius={"0px"}
              rightIcon={<InfoIcon />}
              textShadow={"0px 0px 5px black"}
            >
              Saiba mais
            </Button>
          </VStack>
        </Center>
      </VStack>
    </motion.div>
  );
};

export default Home;
