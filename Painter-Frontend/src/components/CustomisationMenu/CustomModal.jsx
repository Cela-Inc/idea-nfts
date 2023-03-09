import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Switch,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const CustomModal = ({
  isOpen,
  onClose,
  content,
  title,
  description,
  show3DSwitch,
  footer,
  size = "lg",
}) => {
  const [sceneType, setSceneType] = useState(true);

  return (
    <Modal
      isCentered
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={onClose}
      closeOnEsc={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius={20}>
        <ModalCloseButton
          borderRadius={"50%"}
          color={"white"}
          background={"black"}
          top={-10}
          right={[2, 0, 0, -8]}
        />
        <ModalBody
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={5}
        >
          {content}
          <Heading fontSize={"20px"} fontWeight={500} marginY={5}>
            <Flex justifyContent={"flex-end"} alignItems={"center"} gap={4}>
              <Text textAlign={"left"} width={"100%"}>
                {title}
              </Text>
              {show3DSwitch && (
                <>
                  <Text fontSize={"13px"} fontWeight={400}>
                    2D
                  </Text>
                  <Switch
                    colorScheme={"gray"}
                    isChecked={sceneType}
                    onChange={() => setSceneType(!sceneType)}
                  />
                  <Text fontSize={"13px"} fontWeight={400}>
                    3D
                  </Text>
                </>
              )}
            </Flex>
          </Heading>
          <Text color={"#707070"} fontSize='14px' fontWeight={400}>
            {description}
          </Text>
        </ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
