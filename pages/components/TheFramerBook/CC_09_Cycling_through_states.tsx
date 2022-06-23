import { Box } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";

function CC_09_Cycling_through_states() {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 }
  );
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
      animate={animate}
      onTap={cycle}
    >
      CC_09_Cycling_through_states
    </Box>
  );
}

export default CC_09_Cycling_through_states;
