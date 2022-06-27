import { Box } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTransition } from "react";
function CC_13_Drag_Transform() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
  const rotate = useTransform(x, [-150, 150], [-90, 90]);
  const background = useTransform(
    x,
    [-150, 0, 150],
    ["#ff008c", "#FFF", "rgb(230, 255, 0)"]
  );

  return (
    <Box
      as={motion.div}
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        x: x,
        scale: scale,
        rotate: rotate,
        background: background,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileTap={{ cursor: "grabbing" }}
    >
      CC_13_Drag_Transform
    </Box>
  );
}

export default CC_13_Drag_Transform;
