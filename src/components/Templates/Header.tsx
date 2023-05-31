import { Box, Flex, Image, Text } from "@chakra-ui/react";
import icon from "../../asset/icon.png";

function Header() {
  return (
    <>
      <Box flex="1" position="sticky" top="0">
        <Flex
          sx={{ bg: "secondary.500", h: "12", pl: "3" }}
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
