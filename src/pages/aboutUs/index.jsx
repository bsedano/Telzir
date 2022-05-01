import { VStack, Heading, Text, Img } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import about from "../../assets/images/about.jpg";
import about1 from "../../assets/images/about1.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack
        spacing={0}
        w={"100%"}
        h={"100vh"}
        bgImage={about}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
      >
        <NavBar />
        <VStack w={"100%"} spacing={6} p={3}>
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
            aperiam ducimus perspiciatis nihil illum corporis, molestias labore,
            amet similique natus accusamus, nulla maiores molestiae. Deleniti
            beatae labore laborum veritatis sed?
          </Text>

          <Img
            src={about1}
            w={["320px", "70%", "70%", "45%"]}
            rounded={"lg"}
            boxShadow={"0px 0px 20px black"}
          />
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default AboutUs;
