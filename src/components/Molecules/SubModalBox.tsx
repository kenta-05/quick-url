import { Box } from "@chakra-ui/react";
import React from "react";

interface SubModalProps {
  text: string;
}

const SubModalBox: React.FC<SubModalProps> = ({ text }) => {
  return (
    <Box
      whiteSpace="pre-line"
      color="white"
      p={3}
      bg="tertiary.500"
      fontFamily="Noto Sans JP"
      fontSize="lg"
      borderRadius="sm"
      fontWeight="bold"
      cursor="default"
    >
      {text}
    </Box>
  );
};

export default SubModalBox;
