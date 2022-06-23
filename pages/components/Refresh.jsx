import * as React from "react";
import { Box } from "@chakra-ui/react";

const Refresh = ({ onClick }) => {
  return (
    <Box
      position={"relative"}
      bgColor="blackAlpha.400"
      borderRadius="sm"
      w="60px"
      h="25px"
      top="5px"
      textAlign={"center"}
      className="refresh"
      onClick={onClick}
    >
      Reset
    </Box>
  );
};

export default Refresh;
