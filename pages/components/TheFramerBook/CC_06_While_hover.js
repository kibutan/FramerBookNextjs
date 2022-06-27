import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
export function CC_06_While_hover() {
  return (
    <div>
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
        whileHover={{ scale: 0.8 }}
        whileTap={{ rotate: 90, scale: 0.75 }}
        whileDrag={{ scale: 1.1, boxShadow: "0px 10px 16px #222" }}
      >
        CC_06_While_hover
        <br />
        CC_07_While_tap
      </Box>
    </div>
  );
}

export default CC_06_While_hover;
