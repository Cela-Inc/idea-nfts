import { Divider, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Countdown from "react-countdown";
import CustomDrawer from "../CustomisationMenu/CustomDrawer";
import CustomMenu from "../CustomMenu";
import RarityDrawerContent from "./RarityDrawerContent";
import RarityMenuItem from "./RarityMenuItem";
import IdeaButton from "../Inputs/IdeaButton";

const RarityMenu = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [defaultIndex, setDefaultIndex] = useState(0);

  const clickHandler = (index) => {
    return () => {
      setDefaultIndex(index);
      onOpen();
    };
  };

  return (
    <CustomMenu zIndex={5} variant='rarityMenu'>
      <RarityMenuItem onClick={clickHandler(1)}>
        <Heading variant={"rarityHeading"}>2.5%</Heading>
        <Text variant={"rarityText"}>Rarity</Text>
      </RarityMenuItem>
      <Flex width={"100%"} justifyContent='center' alignItems={"center"}>
        <Divider margin={"0"} borderColor={"black.bodyLight"} width={"85%"} />
      </Flex>
      <RarityMenuItem onClick={clickHandler(0)}>
        <Heading variant={"rarityHeading"}>
          <Countdown daysInHours={true} date={Date.now() + 5000000}>
            <Text>Unavailable</Text>
          </Countdown>
        </Heading>
        <Text variant={"rarityText"}>Time Left</Text>
      </RarityMenuItem>
      <CustomDrawer
        size={"sm"}
        isOpen={isOpen}
        onClose={() => onClose()}
        placement={"left"}
        body={<RarityDrawerContent defaultIndex={defaultIndex} />}
        footer={<IdeaButton children={"Save Changes"} />}
      />
    </CustomMenu>
  );
};

export default RarityMenu;
