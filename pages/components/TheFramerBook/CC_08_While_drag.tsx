import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
export function CC_08_While_drag() {
  return (
    <div>
      <Box
        as={motion.div}
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          opacity: 0.7,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 1, scale: 1.05 }}
        whileDrag={{ scale: 1.1, boxShadow: "0px 10px 16px #222" }}
        transition="0.2s linear"
        drag="x"
        dragConstraints={{ left: 10, right: 10 }}
      >
        CC_08_While_drag
      </Box>
    </div>
  );
}

export default CC_08_While_drag;
