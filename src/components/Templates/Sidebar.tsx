import { VStack, useMediaQuery } from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import Section from "../Molecules/Section";
import AccountButton from "../Molecules/Account";
import UrlSwitch from "../Molecules/urlSwitch";

function Sidebar() {
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const [isLargerThan380] = useMediaQuery("(min-width: 380px)");

  return (
    <VStack
      display={isLargerThan380 ? "flex" : "none"}
      sx={{
        bg: "primary.500",
        h: "calc(100vh - 3rem)",
        w: isLargerThan580 ? "56" : "20",
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
        title={isLargerThan580 ? "Home" : ""}
        url={"/"}
      />
      <Section
        icon={FaRegPaperPlane}
        title={isLargerThan580 ? "Feedback" : ""}
        url={"/feedback"}
      />
      <AccountButton />
      {isLargerThan580 && <UrlSwitch />}
    </VStack>
  );
}

export default Sidebar;
