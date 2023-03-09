import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import MobileIdeaOptions from "../MobileViews/MobileIdeaOptions";
import IdeaView from "./OptionsItems/IdeaView";

const IdeaOptions = () => {
  const { optionsView } = usePainterStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const setViewHandler = () => {
    return (view) => {
      usePainterStore.setState({ optionsView: view });
    };
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      borderRight={[0, 0, 0, "1px"]}
      borderStyle={"solid"}
      borderColor={"black"}
      height={"100%"}
      background={"#fff"}
      paddingTop={["5.5rem"]}
      width={"100%"}
    >
      {isLargerThan1000 ? (
        <IdeaView />
      ) : (
        <MobileIdeaOptions
          isOpen={isOpen && optionsView === "IDEA"}
          onClose={() => {
            onClose();
          }}
          setView={setViewHandler()}
        />
      )}
    </Flex>
  );
};

export default IdeaOptions;
