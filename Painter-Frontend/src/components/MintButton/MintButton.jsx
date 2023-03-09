import { Button, useDisclosure } from "@chakra-ui/react";
import IdeaButton from "../Inputs/IdeaButton";
import MintModal from "./MintModal";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import { userUserInfoStore } from "../../hooks/use-userInfo-store.hook";
import { useCreateToast } from "../../hooks/use-create-toast-hook";
import { useState } from "react";

const MintButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [warningToast, setWarningToast] = useState(false);
  const { gameFinished } = usePainterStore();
  const { user } = userUserInfoStore();
  const createToast = useCreateToast();

  const clickHandler = () => {
    if (!user) {
      return createToast("Log in or Sign up to mint", "warning");
    }

    onOpen();
  };

  return (
    <>
      {gameFinished && (
        <>
          <IdeaButton
            padding={["1rem 1rem 1rem 1rem", "1rem 2rem 1rem 2rem"]}
            bg={"green.success"}
            onClick={() => clickHandler()}
          >
            Mint
          </IdeaButton>
          <Button
            variant={"ideaButton"}
            padding={["1rem 1rem 1rem 1rem", "1rem 2rem 1rem 2rem"]}
            marginLeft={5}
            onClick={() => {
              if (!warningToast) {
                setWarningToast(true);
                return createToast(
                  "You will lose all data about the current painting, are you sure?"
                );
              }

              usePainterStore.setState({
                gameStart: false,
                gameFinished: false,
                paintingImage: null,
                projectDetails: {
                  projectName: "",
                  projectDescription: "",
                },
              });
            }}
          >
            Reset Game
          </Button>
        </>
      )}
      <MintModal
        onOpen={() => onOpen()}
        isOpen={isOpen}
        onClose={() => onClose()}
      />
    </>
  );
};

export default MintButton;
