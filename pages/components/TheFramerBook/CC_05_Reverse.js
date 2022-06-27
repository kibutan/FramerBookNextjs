import { Container, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export function CC_05_Reverse() {
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
          duration: 2,
          // repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        CC_05_Reverse
      </ChakraBox>
    </Container>
  );
}

export default CC_05_Reverse;
