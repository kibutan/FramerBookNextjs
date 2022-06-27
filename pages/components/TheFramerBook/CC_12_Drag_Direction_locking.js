import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function CC_12_Drag_Direction_locking() {
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
      drag
      dragDirectionLock
      dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.05}
      whileTap={{ cursor: "grabbing" }}
    >
      CC_12_Drag_Direction_locking
    </Box>
  );
}

export default CC_12_Drag_Direction_locking;
