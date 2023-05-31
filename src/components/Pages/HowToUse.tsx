import { Box, Image, Text, VStack } from "@chakra-ui/react";
import SubHeader from "../Templates/SubHeader";
import useage1 from "../../asset/useage-1.png";
import useage2 from "../../asset/useage-2.gif";

function HowToUse() {
  return (
    <>
      <SubHeader />
      <VStack
        align="center"
        bg="rgba(255, 255, 255, 0.6)"
        mx="auto"
        minH="calc(100vh - 6rem)"
        px="4"
      >
        {/* タイトル部分 */}
        <Box borderBottom="2px solid" borderColor="secondary.500" px="8">
          <Text
            sx={{
              fontSize: "4xl",
              mt: "16",
              color: "secondary.500",
              pb: "1",
            }}
          >
            使い方説明
          </Text>
        </Box>
        {/* 内容部分 */}
        <Box ml="12">
          <Text fontSize="xl" pt="5">
            QuickURLは複数のURLをセットでブックマークすることで
            <br />
            同時開封できるようにするサイトです
          </Text>
          <Text sx={{ fontSize: "1.6rem", fontWeight: "bold", pt: "3.5rem" }}>
            1.ログイン
          </Text>
          <Text fontSize="xl" pt="5">
            QuickURLを使うためには、まずログインする必要があります
            <br />
            Googleアカウントでログインしてください
          </Text>
          <Text sx={{ fontSize: "1.6rem", fontWeight: "bold", pt: "3.5rem" }}>
            2.URLセットの作成
          </Text>
          <Text fontSize="xl" pt="5">
            ログインすると、ホームのプラスマークのボタンからセットを追加できます
            <br />
            「セットの名前」「セットに追加するURL」「セットのアイコン画像」
            <br />
            を設定してリストを作成しましょう！
          </Text>
          <Image w="40rem" mt="8" src={useage1} />
          <Text sx={{ fontSize: "1.6rem", fontWeight: "bold", pt: "3.5rem" }}>
            3.URLにアクセスする
          </Text>
          <Text fontSize="xl" pt="5">
            これで、作成したリストのURLにアクセスできます
            <br />
            OPENボタンを押すことで複数タブを一斉に開くことができます
            <br />
            個別で開きたいときは表示されているURL自体をクリックしてください
            <br />
            <Image w="40rem" mt="8" src={useage2} />
            <br />
            ※複数開封が上手くいかない場合は
            <br />
            ホーム画面の「Q.タブが複数個開かない場合はこちら」を見てみてください
          </Text>
        </Box>
        <VStack align="end" spacing={10} pt="10"></VStack>
      </VStack>
    </>
  );
}

export default HowToUse;
