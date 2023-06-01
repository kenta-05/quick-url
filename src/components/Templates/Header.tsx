import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import icon1 from "../../asset/icon-light.png";
import icon2 from "../../asset/icon-dark.png";

function Header() {
  const secondary500 = useColorModeValue("secondary.500.light", "#454545");
  const { colorMode } = useColorMode();
  const icon = colorMode === "light" ? icon1 : icon2;
  return (
    <>
      <Box flex="1" position="sticky" top="0">
        <Flex
          sx={{ bg: secondary500, h: "12", pl: "3" }}
          align="center"
          zIndex="10"
        >
          <Image src={icon} w="10" h="10" />
          <Text
            variant="primary"
            sx={{ fontSize: "28", pl: "1", fontFamily: "Roboto" }}
          >
            QuickURL
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
