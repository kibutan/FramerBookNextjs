import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
function CC_11_Drag_Constraints() {
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
      dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.05}
      whileTap={{ cursor: "grabbing" }}
    >
      CC_11_Drag_Constraints
    </Box>
  );
}

export default CC_11_Drag_Constraints;
