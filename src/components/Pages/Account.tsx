import {
  Avatar,
  Button,
  Flex,
  HStack,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SubModalBox from "../Molecules/SubModalBox";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import SubHeader from "../Templates/SubHeader";

function Account() {
  const [isLargerMd] = useMediaQuery("(min-width: 380px)");
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const text = useBreakpointValue({
    base: "QuickURLを\n始めましょう",
    xl: "QuickURLを始めましょう",
  });

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        toast({
          position: "top-left",
          render: () => <SubModalBox text={"ログインに成功しました！"} />,
        });
        navigate("/");

        // ここから下はアカウント作成の処理↓
        if (user) {
          const userRef = doc(db, "users", user!.uid);
          const userDoc = await getDoc(userRef);

          if (!userDoc.exists()) {
            setDoc(doc(db, "users", user!.uid), {
              urlDisplay: true,
            });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const googleLogout = () => {
    signOut(auth);
  };
  const textSize = { base: "3rem", md: "3.4rem", lg: "4rem" };
  const buttonWidth = { base: "17rem", md: "21rem" };
  const buttonHeight = { base: "3.6rem", md: "4.1rem" };
  const buttonText = { base: "3xl", md: "4xl" };

  return (
    <>
      <SubHeader>
        {!isLargerMd && (
          <Text
            variant="secondary"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Text>
        )}
      </SubHeader>
      <Flex w="100%" h="calc(100% - 48px)" justify="center" align="center">
        <VStack
          w={{ base: "100%", lg: "70%" }}
          h={{ base: "100vh", sm: "100%", lg: "70%" }}
          bg="rgba(255, 255, 255, 0.6)"
          spacing="2.5rem"
          borderRadius="lg"
          justify="center"
          pb="3"
        >
          {!user ? (
            <>
              <Text
                variant="secondary"
                fontFamily="Noto Sans JP"
                sx={{
                  fontSize: textSize,
                  fontWeight: "bold",
                  whiteSpace: "pre-wrap",
                  px: "3",
                }}
              >
                {text}
              </Text>
              <Button
                variant="account"
                w={buttonWidth}
                h={buttonHeight}
                fontSize={buttonText}
                onClick={googleLogin}
              >
                Googleでログイン
              </Button>
            </>
          ) : (
            <>
              <Flex>
                <Avatar src={user.photoURL!} size="xl" />
                <HStack spacing={0}>
                  <Text
                    maxW="29.6rem"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    variant="secondary"
                    sx={{ fontWeight: "bold", fontSize: "5xl" }}
                  >
                    {user.displayName}
                  </Text>
                  <Text sx={{ fontSize: "5xl" }}>でログイン中です</Text>
                </HStack>
              </Flex>
              <Button variant="account" onClick={onOpen}>
                ログアウト
              </Button>
            </>
          )}
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml="56" mt="20rem">
          <ModalHeader>
            <Text fontSize="2xl">ログアウトしてもいいですか？</Text>
          </ModalHeader>
          <ModalFooter>
            <Button
              sx={{
                mt: "6",
                color: "white",
                borderRadius: "full",
                bg: "tertiary.500",
                _hover: {
                  bg: "tertiary.600",
                },
              }}
              onClick={() => {
                googleLogout();
                onClose();
              }}
            >
              ログアウト
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Account;
