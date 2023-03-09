import { Box, Button, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import CardViewCanvas from "./CardViewCanvas";
import CustomModal from "../CustomisationMenu/CustomModal";

const CardView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentProject } = useCreatorStore();
  const [sceneType, setSceneType] = useState(true);

  return (
    <>
      <Button
        onClick={onOpen}
        position={"absolute"}
        bottom={8}
        variant={"mintButton"}
      >
        <Image
          src={import.meta.env.VITE_ASSETS_PATH + `/svgs/card_view.svg`}
          marginRight={2}
        />
        Card View
      </Button>
      <CustomModal
        title={currentProject.title}
        description={currentProject.description}
        isOpen={isOpen}
        onClose={onClose}
        show3DSwitch
        content={
          <Box>
            <Image
              marginTop={2}
              marginBottom={2}
              src={
                import.meta.env.VITE_ASSETS_PATH + "/svgs/card_background.svg"
              }
            />
            <CardViewCanvas sceneType={sceneType} />
          </Box>
        }
      />
    </>
  );
};

export default CardView;
