import {
  Box,
  Button,
  HStack,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import SubModalBox from "../Molecules/SubModalBox";
import SubHeader from "../Templates/SubHeader";

const Feedback = () => {
  const secondary400 = useColorModeValue(
    "secondary.400.light",
    "secondary.400.dark"
  );
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );
  const buttonBg = useColorModeValue("secondary.500.light", "#363636");
  const nomal500 = useColorModeValue("nomal.500.light", "nomal.500.dark");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [feedbackText, setFeedbackText] = useState<string>("");
  const toast = useToast();

  type FormData = {
    feedback: string;
  };

  const submitMail: SubmitHandler<FormData> = async (data) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
    if (serviceId && templateId && publicId) {
      try {
        await emailjs.send(serviceId, templateId, data, publicId);
        toast({
          position: "top-left",
          render: () => <SubModalBox text={"ご協力に感謝します！"} />,
        });
        setFeedbackText("");
      } catch (error) {
        toast({
          position: "top-left",
          render: () => <SubModalBox text={"メールの送信に失敗しました"} />,
        });
      }
    }
  };

  return (
    <>
      {/* 画面上部のヘッダー */}
      <SubHeader />
      <form onSubmit={handleSubmit(submitMail)}>
        <VStack
          bg={nomal500}
          align="center"
          mx="auto"
          minH="calc(100vh - 6rem)"
          px="4"
        >
          {/* タイトル部分 */}
          <Box borderBottom="2px solid" borderColor={secondary500} px="8">
            <Text
              sx={{
                fontSize: "4xl",
                mt: "16",
                color: secondary500,
                pb: "1",
              }}
            >
              皆様のフィードバックが必要です!
            </Text>
          </Box>
          {/* 内容部分 */}
          <Box ml="12">
            <Text fontSize="xl" pt="7">
              当サイトは個人で開発されていて、開発者はまだ未熟であるため
              <br />
              利用者様からのご意見を求めています
              <br />
              <br />
              どんな小さなアドバイスでも結構です!
              <br />
              よりよいサービスの実現のためにフィードバックをお願いします
            </Text>
            <Text fontSize="xl" pt="12">
              送信されたフィールドバックは全て開発者が受け取り検討します
            </Text>
          </Box>
          <VStack align="end" spacing={10} pt="10">
            <Textarea
              {...register("feedback", { required: true })}
              value={feedbackText}
              onChange={(e) => {
                setFeedbackText(e.target.value);
              }}
              sx={{
                bg: "white",
                border: "2px solid",
                borderColor: secondary400,
                w: { base: "15rem", sm: "17rem", md: "22rem", lg: "37rem" },
                h: "12rem",
                cursor: "pointer",
                _focus: {
                  border: "2px solid",
                  borderColor: secondary400,
                },
              }}
              resize="none"
              placeholder="(例)～の使い方が分かりにくかった
(例)～といった機能があれば便利だと思う
(例)～のページでのテキストの色やサイズが不適切"
            />
            <Button
              type="submit"
              variant="primary"
              sx={{
                bg: buttonBg,
                fontSize: "1xl",
                borderRadius: "md",
              }}
            >
              フィードバックを送信する
            </Button>
          </VStack>
        </VStack>
      </form>
    </>
  );
};

export default Feedback;
