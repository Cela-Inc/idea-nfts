import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { Help } from "@carbon/icons-react";
import { AiOutlineBulb, AiOutlineShareAlt } from "react-icons/ai";
import SocialModal from "../CardView/SocialModal";
import { memo } from "react";

const HelpBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHelper = (e) => {
    console.log("clicked");
  };

  return (
    <Flex
      display={"flex"}
      margin={["", "", "", "0 auto"]}
      width={"10rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button onClick={onClickHelper} border={"none"} variant={"roundOutline"}>
        <Help style={{ width: "2.1rem", height: "2.1rem", color: "grey" }} />
      </Button>
      <Button
        onClick={onClickHelper}
        color={"gray"}
        minWidth={"2rem"}
        height={"2rem"}
        borderWidth={"2px"}
        borderColor={"gray"}
        variant={"roundOutline"}
      >
        <AiOutlineBulb />
      </Button>
      <Button
        onClick={onOpen}
        minWidth={"2rem"}
        height={"2rem"}
        borderWidth={"2px"}
        borderColor={"gray"}
        color={"gray"}
        variant={"roundOutline"}
      >
        <AiOutlineShareAlt />
      </Button>
      <SocialModal isOpen={isOpen} onClose={() => onClose()} />
    </Flex>
  );
};

export default memo(HelpBar);
