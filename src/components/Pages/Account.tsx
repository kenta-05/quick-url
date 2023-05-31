import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SubModalBox from "../Molecules/SubModalBox";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Switch } from "@chakra-ui/react";
import SubHeader from "../Templates/SubHeader";
import AccountButton from "../Molecules/Account";

function Account() {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);

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

  return (
    <>
      <SubHeader>
        <Text
          variant="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Text>
      </SubHeader>
      <Flex w="100%" h="calc(100% - 48px)" justify="center" align="center">
        <VStack
          w="70%"
          h="70%"
          bg="rgba(255, 255, 255, 0.6)"
          spacing="4.2rem"
          borderRadius="lg"
          justify="center"
          pb="3"
        >
          {!user ? (
            <>
              <Text
                variant="secondary"
                fontFamily="Noto Sans JP"
                sx={{ fontSize: "5rem", fontWeight: "bold" }}
              >
                QuickURLを始めましょう
              </Text>
              <Button variant="account" onClick={googleLogin}>
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
