import { Box, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import question1 from "../../asset/question-1.png";
import question2 from "../../asset/question-2.png";

function Question() {
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );
  const nomal500 = useColorModeValue("nomal500.500.light", "nomal500.500.dark");
  return (
    <>
      {/* 画面上部のヘッダー */}

      <VStack align="center" bg={nomal500} mx="auto">
        <Box>
          {/* タイトル部分 */}
          <Box borderBottom="2px solid" borderColor={secondary500} px="8">
            <Text
              sx={{
                fontSize: "4xl",
                mt: "16",
                color: secondary500,
              }}
            >
              OPENを押しても複数のタブが開かない場合
            </Text>
          </Box>
          {/* 内容部分 */}
          <Box ml="10">
            <Text fontSize="xl" pt="7">
              ブラウザによってはセキュリティの観点から
              <br />
              複数タブの開封をブロックする場合があります
              <br />
              <br />
              その場合は皆様自身でブラウザの設定を変えてもらう必要があります
              <br />
              (非常に簡単です)
            </Text>
            <Text sx={{ fontWeight: "bold", fontSize: "2xl", mt: "28" }}>
              設定方法
            </Text>
            <Text fontSize="xl" pt="7">
              OPENボタンを押してもタブが一つしか開かなかった場合
              <br />
              QuickURLのタブに戻ると画面右上にこのように表示されていると思います
            </Text>
            <Image w="40rem" mt="8" src={question1} />
            <Text fontSize="xl" pt="7">
              これをクリックして…
            </Text>
            <Image w="40rem" mt="8" src={question2} />
            <Text fontSize="xl" pt="7" pb="16">
              リダイレクトを許可する設定にしてください
              <br />
              これでOPENから複数タブを同時に開けるようになります
              <br />
              <br />
              (基本的にどのブラウザでも同じような手順です)
            </Text>
          </Box>
        </Box>
      </VStack>
    </>
  );
}

export default Question;
