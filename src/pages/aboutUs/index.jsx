import { VStack, Heading, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import about from "../../assets/images/about.jpg";
import { motion } from "framer-motion";
import CarouselComp from "../../components/CarouselComp";
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack spacing={0} w={"100%"} h={"100vh"} bgColor={"orange.100"}>
        <NavBar />
        <VStack w={"100%"}>
          <VStack p={3} spacing={6} bgColor={"grey"}>
            <Heading
              color={"white"}
              fontFamily={"Roboto"}
              textShadow={"0px 0px 5px black"}
            >
              Cultura da empresa:
            </Heading>
            <Text
              color={"white"}
              fontFamily={"Roboto"}
              textShadow={"0px 0px 5px black"}
              w={"50%"}
              textAlign={"center"}
              minW={"300px"}
              fontSize={["lg", "xl"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              aperiam ducimus perspiciatis nihil illum corporis, molestias
              labore, amet similique natus accusamus, nulla maiores molestiae.
              Deleniti beatae labore laborum veritatis sed?
            </Text>
          </VStack>
          <CarouselComp />
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default AboutUs;
