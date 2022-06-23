import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
export function CC_01_Tween() {
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
        animate={{ rotate: 360 }}
        transition="2s ease-in-out"
      >
        CC_01_Tween
      </Box>
    </div>
  );
}

export default CC_01_Tween;
