import React from "react";
import { Icon, VStack, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import SettingModal from "./SettingModal";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function AddCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isLargerThan430] = useMediaQuery("(min-width: 430px)");
  const [isLargerThan380] = useMediaQuery("(min-width: 380px)");

  return (
    <>
      <VStack
        bg="rgba(255,255,255,0.4)"
        position="relative"
        border="3px dashed"
        borderColor="secondary.500"
        justify="center"
        sx={{
          cursor: "pointer",
          borderRadius: "xl",
          p: "1",
          minH: "36",
          mx: isLargerThan380 && "4",
          my: "3",
          w: isLargerThan430 || !isLargerThan380 ? "17.4rem" : "14rem",
          transition: "bg 2s",
          _hover: { bg: "white" },
        }}
        onClick={() => {
          if (!user) {
            navigate("/account");
          }
          onOpen();
        }}
      >
        <Icon
          as={IoIosAddCircleOutline}
          sx={{ color: "secondary.500", boxSize: "20" }}
        />
      </VStack>

      <SettingModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default AddCard;
