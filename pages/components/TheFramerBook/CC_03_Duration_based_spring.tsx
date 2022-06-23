import { Container, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

function CC_03_Duration_based_spring() {
  return (
    <Container>
      <ChakraBox
        backgroundColor="white"
        display={"flex"}
        width="150px"
        height="150px"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded="30px"
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 5, bounce: 0.6 }}
      >
        CC_03_Duration_based_spring
      </ChakraBox>
    </Container>
  );
}

export default CC_03_Duration_based_spring;
