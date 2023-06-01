import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

function ColorModeButton() {
  const secondary400 = useColorModeValue(
    "secondary.400.light",
    "secondary.400.dark"
  );
  const secondary500 = useColorModeValue("secondary.500.light", "#444444");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      sx={{
        w: "100%",
        pt: "5",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={toggleColorMode}
        sx={{
          borderRadius: "full",
          w: "48",
          h: "3.3rem",
          bg: secondary400,
          color: "white",
          fontSize: "xl",
          gap: "1",
          _hover: {
            bg: secondary500,
          },
        }}
      >
        {colorMode === "light" ? (
          <>
            <MoonIcon />
            ダークモード
          </>
        ) : (
          <>
            <SunIcon />
            ライトモード
          </>
        )}
      </Button>
    </Flex>
  );
}

export default ColorModeButton;
