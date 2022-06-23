import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

type AppProps = {
  message: string;
};

function MyBox({ message }: AppProps): JSX.Element {
  return (
    <Box
      w="100px"
      h="100px"
      bgColor="red.100"
      as={motion.div}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      {message}
    </Box>
  );
}

export default MyBox;
