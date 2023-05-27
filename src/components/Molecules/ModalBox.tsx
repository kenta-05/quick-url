import { Box } from "@chakra-ui/react";
import React from "react";

interface ModalProps {
  text: string;
}

const ModalBox: React.FC<ModalProps> = ({ text }) => {
  return (
    <Box
      color="white"
      p={3}
      bg="secondary.500"
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
