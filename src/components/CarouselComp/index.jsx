import { Center, HStack, Img, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about from "../../assets/images/about.jpg";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
const CarouselComp = () => {
  return (
    <Center w={"90%"} maxW={"800px"}>
      <Carousel>
        <Img src={about} h={"100%"} w={"100%"} />

        <Img src={about1} h={"100%"} w={"100%"} />

        <Img src={about2} h={"100%"} w={"100%"} />
      </Carousel>
    </Center>
  );
};

export default CarouselComp;
