import { Box, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Maintenance() {
  return (
    <VStack pt="36">
      <Text variant="secondary" fontSize="5xl">
        現在メンテナンス中です
      </Text>
      <Text variant="secondary" fontSize="2xl">
        問題が生じたためメンテナンス中です
      </Text>
      <Text variant="secondary" fontSize="2xl">
        現在開発者が必死で問題を直している最中です
      </Text>
      <Text variant="secondary" fontSize="2xl">
        申し訳ありません、明日来てもらえると嬉しいです
      </Text>
      <Link
        href="https://twitter.com/sotetu79"
        fontSize="3xl"
        color="blue.500"
        pt="12"
      >
        開発者のTwitter
      </Link>
    </VStack>
  );
}

export default Maintenance;
