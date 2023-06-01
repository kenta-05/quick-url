import { Flex, FlexProps, HStack, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SubHeaderProps extends FlexProps {
  children?: ReactNode;
}

function SubHeader({ children, ...props }: SubHeaderProps) {
  const nomal500 = useColorModeValue("nomal.500.light", "nomal.500.dark");
  return (
    <Flex
      sx={{
        bg: nomal500,
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
