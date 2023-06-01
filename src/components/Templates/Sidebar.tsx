import { VStack, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import Section from "../Molecules/Section";
import AccountButton from "../Molecules/Account";
import UrlSwitch from "../Molecules/UrlSwitch";
import ColorModeButton from "../Molecules/DarkModeButton";

function Sidebar() {
  const primary500 = useColorModeValue("primary.500.light", "primary.500.dark");
  const [isLargerMd] = useMediaQuery("(min-width: 592px)");

  return (
    <VStack
      display={{ base: "none", sm: "flex" }}
      sx={{
        bg: primary500,
        h: "calc(100vh - 3rem)",
        w: { base: "20", md: "56" },
        pt: "12",
        boxShadow: "0px 0px 15px -5px #777777",
        zIndex: "10",
      }}
      align="start"
      spacing={0}
      position="sticky"
      top="12"
    >
      <Section
        icon={AiOutlineHome}
        title={isLargerMd ? "ホーム" : ""}
        url={"/"}
      />
      <Section
        icon={AiOutlineQuestionCircle}
        title={isLargerMd ? "使い方" : ""}
        url={"/howtouse"}
      />
      <Section
        icon={FaRegPaperPlane}
        title={isLargerMd ? "フィードバック" : ""}
        url={"/feedback"}
      />
      <AccountButton />
      {isLargerMd && <UrlSwitch />}
      {isLargerMd && <ColorModeButton />}
    </VStack>
  );
}

export default Sidebar;
