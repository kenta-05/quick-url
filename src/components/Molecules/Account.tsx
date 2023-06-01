import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  HStack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AccountButton() {
  const primary500 = useColorModeValue("primary.500.light", "primary.500.dark");
  const primary600 = useColorModeValue("primary.600.light", "primary.600.dark");
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );
  const [isLargerMd] = useMediaQuery("(min-width: 592px)");
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);

  return (
    <HStack
      onClick={() => {
        navigate("/account");
      }}
      spacing={1}
      bg={location.pathname === "/account" ? primary600 : primary500}
      sx={{
        w: "100%",
        py: "6",
        px: "4",
        cursor: "pointer",
        _hover: {
          bg: primary600,
        },
      }}
      boxShadow="0px 0px 6px -2px #777777"
    >
      {!user ? (
        <Avatar boxSize={9} bg="gray" />
      ) : (
        <Avatar boxSize={9} src={user.photoURL!} />
      )}
      <Text variant="secondary" pl="1" fontWeight="bold" color={secondary500}>
        {isLargerMd ? "アカウント" : ""}
      </Text>
    </HStack>
  );
}

export default AccountButton;
