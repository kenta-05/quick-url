import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import notFound1 from "../../asset/notFound-1.png";
import React from "react";

function NotFound() {
  return (
    <Flex w="100%" h="calc(100% - 48px)" justify="center" align="center">
      <VStack
        w="70%"
        h="70%"
        bg="rgba(255, 255, 255, 0.6)"
        borderRadius="lg"
        justify="center"
        pb="3"
      >
        <Text
          variant="secondary"
          fontFamily="Noto Sans JP"
          sx={{ fontSize: "5rem", fontWeight: "bold" }}
        >
          404エラー…
        </Text>
        <Text variant="secondary" fontSize="2xl" pb="10">
          ページが見つかりませんでした
        </Text>
        <VStack
          sx={{
            borderRadius: "md",
            border: "2px gray solid",
            w: "36rem",
            px: "4",
            py: "3",
          }}
        >
          <Image src={notFound1} w="32rem" />
          <Text fontSize="xl">
            登録URLを全文に変更すると解決するかもしれません
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default NotFound;
