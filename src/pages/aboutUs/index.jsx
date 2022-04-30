import { VStack } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import about from "../../assets/images/about.jpg";
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
        w={"100vw"}
        h={"100vh"}
        bgImage={about}
        bgPos={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <NavBar />
        <VStack></VStack>
      </VStack>
    </motion.div>
  );
};

export default AboutUs;
