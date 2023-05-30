import { VStack } from "@chakra-ui/react";
import { FaHammer, FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import Section from "../Molecules/Section";
import AccountButton from "../Molecules/Account";
import UrlSwitch from "../Molecules/urlSwitch";

function Sidebar() {
  return (
    <VStack
      sx={{
        bg: "primary.500",
        h: "calc(100vh - 3rem)",
        w: "56",
        pt: "12",
        boxShadow: "0px 0px 15px -5px #777777",
        zIndex: "10",
      }}
      align="start"
      spacing={0}
      position="sticky"
      top="12"
    >
      <Section icon={AiOutlineHome} title={"URL"} url={"/"} />
      <Section icon={FaRegPaperPlane} title={"Feedback"} url={"/feedback"} />
      <AccountButton />
      <UrlSwitch />
    </VStack>
  );
}

export default Sidebar;
