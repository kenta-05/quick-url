import {
  Button,
  Flex,
  HStack,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function UrlSwitch() {
  const primary500 = useColorModeValue("primary.500.light", "primary.500.dark");
  const primary600 = useColorModeValue("primary.600.light", "primary.600.dark");
  const secondary400 = useColorModeValue(
    "secondary.400.light",
    "secondary.400.dark"
  );
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [user] = useAuthState(auth);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };
  const updateDisplay = () => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      updateDoc(docRef, {
        urlDisplay: isChecked,
      });
    }
  };

  return (
    <Flex
      sx={{
        w: "100%",
        pt: "7",
        pb: "3",
        justifyContent: "center",
      }}
    >
      <HStack
        bg={secondary400}
        justify="center"
        h="16"
        sx={{ w: "93%", borderRadius: "md" }}
        spacing={6}
      >
        <Switch
          size="lg"
          isChecked={isChecked}
          onChange={handleToggle}
          colorScheme="blackAlpha"
        />
        <Button
          onClick={updateDisplay}
          sx={{
            borderRadius: "full",
            w: "20",
            h: "8",
            color: secondary500,
            bg: primary500,
            _hover: {
              bg: primary600,
            },
          }}
        >
          Switch
        </Button>
      </HStack>
    </Flex>
  );
}

export default UrlSwitch;
