import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const ConfirmationWindow = ({ confirmCB, title, message, isOpen, onClose }) => {
  const acceptHandler = () => {
    onClose();
    confirmCB();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
            Close
          </Button>
          <Button variant='ghost' onClick={() => acceptHandler()}>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationWindow;
