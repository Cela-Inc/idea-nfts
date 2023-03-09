import { Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import Countdown from "react-countdown";
import { v4 as uuidV4 } from "uuid";
import CreateNewProject from "./CreateNewProject";
import ConfirmationWindow from "../ConfirmationWindow";

const SavedProjects = ({ closeDrawer }) => {
  const { savedProjects, loadProject, createNewProject } = useCreatorStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      width={"100%"}
    >
      <Heading fontSize={"lg"} marginBottom={5}>
        My Projects
      </Heading>
      {savedProjects.map((item) => (
        <Flex
          onClick={() => onOpen()}
          _hover={{ background: "gray.400", cursor: "pointer" }}
          _active={{ background: "gray.300" }}
          borderRadius={14}
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={5}
          key={uuidV4()}
        >
          <ConfirmationWindow
            confirmCB={() => {
              loadProject(item);
              closeDrawer();
            }}
            title={"Are you sure?"}
            message={"All current progress will be lost"}
            onClose={() => onClose()}
            isOpen={isOpen}
          />
          <Image
            height={16}
            borderRadius={14}
            src={import.meta.env.VITE_ASSETS_PATH + "images" + item.model.image}
          />
          <Flex
            flexDir={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={1}
            width={"100%"}
          >
            <Heading fontSize={"16px"}>{item.title}</Heading>
            <Text fontSize={"14px"}>{item.description}</Text>
          </Flex>
          <Text
            textAlign={"end"}
            paddingRight={2}
            justifySelf={"flex-end"}
            width={"100%"}
          >
            <Countdown date={Date.now() + 5000000}>
              <Text>Unavailable</Text>
            </Countdown>
          </Text>
        </Flex>
      ))}
      <CreateNewProject
        createNewProject={() => {
          createNewProject();
          closeDrawer();
        }}
      />
    </Flex>
  );
};

export default SavedProjects;
