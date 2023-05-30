import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Icon,
  VStack,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  HStack,
  Flex,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineClose, AiFillPlusCircle } from "react-icons/ai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { EmojiData } from "../../interfaces/mainInterface";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";
import ModalBox from "../Molecules/ModalBox";
import { useAuthState } from "react-firebase-hooks/auth";

interface SettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingModal: React.FC<SettingModalProps> = ({ isOpen, onClose }) => {
  const [selectedIcon, setSelectedIcon] = useState<EmojiData>({
    emoji: "✨",
    names: [],
    originalUnified: "",
    unified: "",
    group: "",
    subGroup: "",
    skinTone: undefined,
  });
  const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
    const newSelectedIcon: EmojiData = {
      emoji: emoji.emoji,
      names: emoji.names,
      originalUnified: "",
      unified: "",
      group: "",
      subGroup: "",
      skinTone: undefined,
    };
    setSelectedIcon(newSelectedIcon);
  };
  const {
    isOpen: isOpenEmoji,
    onOpen: onOpenEmoji,
    onClose: onCloseEmoji,
  } = useDisclosure();

  const inputStyle = {
    borderRadius: "md",
    cursor: "pointer",
    border: "2px solid",
    borderColor: "secondary.400",
    _focus: {
      border: "1.5px solid",
      borderColor: "secondary.400",
    },
  };
  const [urlsArray, setUrlsArray] = useState<string[]>([]);
  const [nameValue, setNameValue] = useState<string>("");
  const [urlValue, setUrlValue] = useState<string>("");
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputUrlRef = useRef<HTMLInputElement>(null);
  const [user] = useAuthState(auth);

  const addUrl = () => {
    if (!urlValue) {
      return;
    }
    if (urlsArray.includes(urlValue)) {
      return;
    }
    setUrlsArray((prev) => [...prev, urlValue]);
    setUrlValue("");
  };

  const toast = useToast();
  const saveData = () => {
    if (!nameValue) {
      toast({
        position: "top-left",
        render: () => <ModalBox text={"リストの名前を入力してください"} />,
      });
      return;
    }
    if (urlsArray.length === 0) {
      toast({
        position: "top-left",
        render: () => <ModalBox text={"URLをリストに追加してください"} />,
      });
      return;
    }
    addDoc(collection(db, `users/${user!.uid}/lists`), {
      id: nanoid(),
      name: nameValue,
      list: urlsArray,
      icon: selectedIcon.emoji,
      createdAt: serverTimestamp(),
    });
    setUrlValue("");
    setNameValue("");
    setUrlsArray([]);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent border="4px solid" borderColor="secondary.500">
          <ModalCloseButton />
          <ModalBody>
            <Box mb="1" pt="4">
              <Text
                variant="tertiary"
                display="inline"
                cursor="pointer"
                onClick={() => {
                  if (inputNameRef.current) {
                    inputNameRef.current.focus();
                  }
                }}
              >
                name
              </Text>
              <Input
                ref={inputNameRef}
                sx={inputStyle}
                value={nameValue}
                onChange={(e) => {
                  setNameValue(e.target.value);
                }}
              />
            </Box>

            <Box mt="3">
              <Text
                variant="tertiary"
                display="inline"
                cursor="pointer"
                onClick={() => {
                  if (inputUrlRef.current) {
                    inputUrlRef.current.focus();
                  }
                }}
              >
                url
              </Text>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addUrl();
                }}
              >
                <InputGroup>
                  <Input
                    ref={inputUrlRef}
                    sx={inputStyle}
                    value={urlValue}
                    onChange={(e) => {
                      setUrlValue(e.target.value);
                    }}
                  />
                  <InputRightElement>
                    <Icon
                      onClick={addUrl}
                      cursor="pointer"
                      as={AiFillPlusCircle}
                      sx={{
                        w: "9",
                        h: "9",
                        color: "secondary.400",
                        _hover: {
                          color: "secondary.500",
                        },
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
              </form>
            </Box>

            <Box mt="9">
              <Button
                onClick={onOpenEmoji}
                sx={{
                  borderRadius: "md",
                  fontSize: "20",
                  color: "secondary.400",
                  bg: "white",
                  border: "2px solid",
                  borderColor: "secondary.400",
                  _hover: { bg: "#ececec" },
                }}
              >
                {selectedIcon.emoji}アイコンを変更する
              </Button>
            </Box>

            <Text variant="tertiary" mt="10">
              {"<"}list{">"}
            </Text>
            <VStack
              align="start"
              boxShadow="0px 0px 4px -1px #777777"
              cursor={urlsArray.length === 0 ? "not-allowed" : "auto"}
              sx={{ h: "36", borderRadius: "md", bg: "#f1f3f9" }}
              overflowY="scroll"
            >
              {urlsArray.map((url) => {
                return (
                  <HStack w="100%" spacing={1} pl="1" key={url}>
                    <Icon
                      onClick={() => {
                        const newUrlsArray = urlsArray.filter(
                          (item) => item !== url
                        );
                        setUrlsArray(newUrlsArray);
                      }}
                      as={AiOutlineClose}
                      sx={{
                        p: "1px",
                        borderRadius: "sm",
                        fontSize: "lg",
                        color: "white",
                        cursor: "pointer",
                        bg: "secondary.400",
                        _hover: {
                          bg: "secondary.500",
                        },
                      }}
                    />
                    <Text
                      userSelect="text"
                      fontSize="lg"
                      whiteSpace="nowrap"
                      // overflow="hidden"
                      // textOverflow="ellipsis"
                    >
                      {url}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
            <Flex justify="end">
              <Button
                variant="primary"
                sx={{ mt: "8", px: "8" }}
                onClick={saveData}
              >
                Save
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenEmoji} onClose={onCloseEmoji} isCentered>
        <ModalOverlay />
        <ModalContent
          w="100%"
          h="50%"
          justifyContent="center"
          alignContent="center"
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingModal;
