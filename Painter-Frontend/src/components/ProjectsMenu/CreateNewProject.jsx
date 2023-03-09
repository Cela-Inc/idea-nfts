import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import ConfirmationWindow from "../ConfirmationWindow";

const CreateNewProject = ({ createNewProject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        onClick={() => onOpen()}
        _hover={{ background: "gray.400", cursor: "pointer" }}
        _active={{ background: "gray.300" }}
        borderRadius={14}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={5}
      >
        <Box
          height={12}
          width={14}
          borderRadius={14}
          background={"gray.300"}
        ></Box>
        <Flex
          flexDir={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={1}
          width={"100%"}
        >
          <Heading fontSize={"16px"}>Create new project</Heading>
        </Flex>
      </Flex>
      <ConfirmationWindow
        confirmCB={() => createNewProject()}
        isOpen={isOpen}
        onClose={() => onClose()}
        title={"Are you sure?"}
        message={"All progress on the current idea will be lost"}
      />
    </>
  );
};

export default CreateNewProject;
