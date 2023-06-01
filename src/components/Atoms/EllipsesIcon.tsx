import {
  HStack,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillGearFill } from "react-icons/bs";
import ChangingModal from "../Organisms/ChangingModal";
import { EllipsesIconProps } from "../../interfaces/Interface";

const EllipsesIcon: React.FC<EllipsesIconProps> = ({
  name,
  urlList,
  docId,
  icon,
}) => {
  const primary600 = useColorModeValue(
    "primary.600.light",
    "primary.600.light"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        position="absolute"
        right="2"
        top="2"
        cursor="pointer"
        sx={{
          justifyContent: "center",
          color: "white",
          borderRadius: "full",
          w: "6",
          h: "6",
          transition: "transform 0.2s",
          _hover: {
            color: primary600,
            transform: "rotate(75deg)",
          },
        }}
        onClick={onOpen}
      >
        <Icon as={BsFillGearFill} boxSize="6" />
      </HStack>

      <ChangingModal
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        urlList={urlList}
        docId={docId}
        icon={icon}
      />
    </>
  );
};

export default EllipsesIcon;
