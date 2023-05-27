import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  icon: IconType;
  title: string;
  url: string;
}

const Section: React.FC<Props> = ({ icon, title, url }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HStack
      onClick={() => {
        navigate(url);
      }}
      spacing={1}
      bg={location.pathname === url ? "primary.600" : "primary.500"}
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
      <Icon as={icon} boxSize={9} color="secondary.500" />
      <Text variant="secondary" cursor="pointer" pl="1" fontFamily="Roboto">
        {title}
      </Text>
    </HStack>
  );
};

export default Section;
