import { Box } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function CC_14_Drag_3D_transform() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [-60, 60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  return (
    <Box>
      <Box
        w={"100px"}
        h={"100px"}
        bgGradient="radial(green.200,pink.500)"
        borderRadius="full"
      >
        <Box
          as={motion.div}
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            x: x,
            y: y,
            rotateX: rotateX,
            rotateY: rotateY,
            cursor: "grab",
          }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.6}
          whileTap={{ cursor: "grabbing" }}
        >
          CC_14_Drag_3D_transform
        </Box>
      </Box>
    </Box>
  );
}

export default CC_14_Drag_3D_transform;
