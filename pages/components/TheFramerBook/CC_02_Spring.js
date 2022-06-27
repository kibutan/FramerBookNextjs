import { chakra, Container } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
function CC_02_Spring() {
  return (
    <Container display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{ rotate: 180 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
        backgroundColor="white"
        display={"flex"}
        width="150px"
        height="150px"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded="30px"
      >
        CC_02_Spring
      </ChakraBox>
    </Container>
  );
}

export default CC_02_Spring;
