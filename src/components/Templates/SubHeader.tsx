import { Flex, FlexProps, HStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SubHeaderProps extends FlexProps {
  children?: ReactNode;
}

function SubHeader({ children, ...props }: SubHeaderProps) {
  return (
    <Flex
      sx={{
        bg: "white",
        h: "12",
        px: "3",
        boxShadow: "0px 0px 15px -5px #777777",
        alignItems: "center",
        zIndex: "1",
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default SubHeader;
