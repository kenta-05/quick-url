import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface ModalProps {
  text: string;
}

const ModalBox: React.FC<ModalProps> = ({ text }) => {
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );

  return (
    <Box
      color="white"
      p={3}
      bg={secondary500}
      fontFamily="Noto Sans JP"
      fontSize="md"
      borderRadius="sm"
      cursor="default"
    >
      {text}
    </Box>
  );
};

export default ModalBox;
