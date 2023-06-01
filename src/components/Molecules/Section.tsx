import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  icon: IconType;
  title: string;
  url: string;
}

const Section: React.FC<Props> = ({ icon, title, url }) => {
  const primary500 = useColorModeValue("primary.500.light", "primary.500.dark");
  const primary600 = useColorModeValue("primary.600.light", "primary.600.dark");
  const secondary500 = useColorModeValue(
    "secondary.500.light",
    "secondary.500.dark"
  );
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HStack
      onClick={() => {
        navigate(url);
      }}
      spacing={1}
      bg={location.pathname === url ? primary600 : primary500}
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
      <Icon as={icon} boxSize={9} color={secondary500} />
      <Text
        variant="secondary"
        cursor="pointer"
        pl="1"
        fontWeight="bold"
        color={secondary500}
      >
        {title}
      </Text>
    </HStack>
  );
};

export default Section;
