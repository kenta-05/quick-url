import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AccountButton() {
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);

  return (
    <HStack
      onClick={() => {
        navigate("/account");
      }}
      spacing={1}
      bg={location.pathname === "/account" ? "primary.600" : "primary.500"}
      sx={{
        w: "100%",
        py: "6",
        px: "4",
        cursor: "pointer",
        _hover: {
          bg: "primary.600",
        },
      }}
      boxShadow="0px 0px 6px -2px #777777"
    >
      {!user ? (
        <Avatar boxSize={9} bg="gray" />
      ) : (
        <Avatar boxSize={9} src={user.photoURL!} />
      )}
      <Text variant="secondary" pl="1" fontFamily="Roboto">
        {isLargerThan580 ? "Account" : ""}
      </Text>
    </HStack>
  );
}

export default AccountButton;
