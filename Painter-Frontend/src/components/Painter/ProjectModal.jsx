import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";

const ProjectModal = ({ isOpen, onClose }) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const { paintOptions } = usePainterStore();
  const [error, setError] = useState(null);

  const submitHandler = () => {
    if (
      nameRef.current.value.length <= 0 &&
      descriptionRef.current.value.length <= 0
    ) {
      return setError("Title and Description is needed");
    }

    usePainterStore.setState({
      projectDetails: {
        projectName: nameRef.current.value,
        projectDescription: descriptionRef.current.value,
      },
      gameStart: true,
      gameFinished: false,
    });

    if (!paintOptions.selected) {
      usePainterStore.setState({
        paintOptions: {
          ...paintOptions,
          selected: {
            title: "Blank Canvas",
            blankCanvas: true,
          },
        },
      });
    }

    onClose();
  };

  return (
    <Modal
      isCentered
      size={["sm", "sm", "xl", "xl", "xl", "xl"]}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius={15} paddingY={10} paddingX={7}>
        <ModalCloseButton
          background={"#000"}
          borderRadius={"50%"}
          color={"white.offWhite"}
          position='absolute'
          right={[0, -5, -4, -8]}
          top={[-10, -8, -7 - 7]}
          onClick={() => onClose()}
        />
        <ModalBody>
          <Text fontWeight={"semibold"} fontSize={"1.5em"} marginBottom={3}>
            Name Your IDEA
          </Text>
          <Flex flexDir={"column"} gap={5}>
            <Input
              ref={nameRef}
              borderBottom={"2px"}
              borderColor={"#373737"}
              variant='flushed'
              placeholder='IDEA Name'
            />
            <Input
              ref={descriptionRef}
              borderBottom={"2px"}
              borderColor={"#373737"}
              variant='flushed'
              placeholder='IDEA Description'
            />
            {error && <Text color='red'>{error}</Text>}
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent={"flex-start"}>
          <Button
            paddingX={8}
            paddingY={5}
            height={"1.5rem"}
            onClick={() => submitHandler()}
            variant='ideaButton'
          >
            Start Drawing
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
