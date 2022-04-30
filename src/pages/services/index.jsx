import { VStack } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack spacing={0} w={"100vw"} h={"100vh"}>
        <NavBar />
        <VStack h={"2000px"}></VStack>
      </VStack>
    </motion.div>
  );
};

export default Services;
