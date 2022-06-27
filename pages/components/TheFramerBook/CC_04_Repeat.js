import { Container, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export function CC_04_Repeat() {
  return (
    <Container>
      <ChakraBox
        as={motion.div}
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{ rotate: 360 }}
        transition={{
          ease: "linear",
          duration: 2,
          // repeat: Infinity
        }}
      >
        CC_04_Repeat
      </ChakraBox>
    </Container>
  );
}

export default CC_04_Repeat;
