import { Button, Flex, HStack, Switch } from "@chakra-ui/react";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function UrlSwitch() {
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
        py: "5",
        justifyContent: "center",
      }}
    >
      <HStack
        bg="#a0abd3"
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
            color: "secondary.500",
            bg: "primary.500",
            _hover: {
              bg: "primary.600",
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
