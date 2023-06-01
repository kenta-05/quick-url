import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import EllipsesIcon from "../Atoms/EllipsesIcon";
import { UrlCardProps } from "../../interfaces/Interface";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface userDataInterface {
  urlDisplay: boolean;
}

const UrlCard: React.FC<UrlCardProps> = ({ listData }) => {
  const secondary400 = useColorModeValue("secondary.400.light", "#575757");
  const tertiary500 = useColorModeValue(
    "tertiary.500.light",
    "tertiary.500.dark"
  );
  const tertiary600 = useColorModeValue(
    "tertiary.600.light",
    "tertiary.600.dark"
  );
  const [isLargerThan430] = useMediaQuery("(min-width: 430px)");
  const [isLargerThan380] = useMediaQuery("(min-width: 380px)");
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<userDataInterface>();

  const openUrl = () => {
    listData.list?.map((url) => {
      window.open(url, "_blank");
    });
  };

  useEffect(() => {
    if (user) {
      const documentRef = doc(db, "users", user.uid);
      onSnapshot(documentRef, (snapshot) => {
        const data = snapshot.data() as userDataInterface;
        setUserData(data);
      });
    }
  }, []);

  return (
    <>
      <Box
        boxShadow="0px 0px 6px 1px #777777"
        bg={secondary400}
        sx={{
          borderRadius: "xl",
          p: "1",
          mx: isLargerThan380 && "3",
          my: "3",
          w: isLargerThan430 || !isLargerThan380 ? "17.4rem" : "14rem",
        }}
        position="relative"
      >
        <EllipsesIcon
          name={listData.name}
          urlList={listData.list}
          docId={listData.docId}
          icon={listData.icon}
        />
        <HStack align="end" justify="start" spacing={3} p="1">
          <Flex
            sx={{
              mr: "1",
              pb: "2",
              boxSize: "20",
              bg: "white",
              fontSize: "56",
              borderRadius: "lg",
              transition: "filter 0.2s",
            }}
            justify="center"
            align="center"
          >
            {listData.icon}
          </Flex>
          <Button
            variant="secondary"
            onClick={openUrl}
            sx={{
              bg: tertiary500,
              _hover: {
                bg: tertiary600,
              },
            }}
          >
            OPEN
          </Button>
        </HStack>
        <HStack pl="1">
          <Text
            variant="primary"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "M PLUS 1p",
              fontWeight: "bold",
              fontSize: "2.1rem",
            }}
          >
            {listData.name || "----------"}
          </Text>
        </HStack>
        {userData?.urlDisplay && (
          <VStack
            align="start"
            pl="1"
            py="1"
            mt="2"
            spacing={-1}
            borderTop="1px solid white"
          >
            {listData.list?.map((url) => {
              return (
                <Link
                  key={url}
                  href={url}
                  isExternal
                  sx={{
                    color: "#e9e9e9",
                    fontSize: "lg",
                    w: "100%",
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Fira Sans",
                  }}
                >
                  {url}
                </Link>
              );
            })}
          </VStack>
        )}
      </Box>
    </>
  );
};

export default UrlCard;
