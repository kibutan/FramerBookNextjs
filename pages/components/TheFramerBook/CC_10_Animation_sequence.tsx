import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

function CC_10_Animation_sequence() {
  const animation = useAnimation();
  async function sequence() {
    await animation.start({ rotate: 90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    await animation.start({ scale: 1 });
  }
  return (
    <Box
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
      animate={animation}
      onTap={sequence}
    >
      CC_10_Animation_sequence
    </Box>
  );
}

export default CC_10_Animation_sequence;
