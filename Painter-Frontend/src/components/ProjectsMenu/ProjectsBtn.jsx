import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import CustomDrawer from "../CustomisationMenu/CustomDrawer";
import ProjectsDrawerContent from "./ProjectsDrawerContent";

const ProjectsBtn = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { currentProject } = useCreatorStore();

  return (
    <>
      <Button marginBottom={5} onClick={onOpen} variant={"mintButton"}>
        <Text fontSize={"14px"} marginRight={2}>
          {currentProject.title || "Untitled Project"}
        </Text>
        <HiChevronDown color={"#707070"} />
      </Button>
      <CustomDrawer
        size={"sm"}
        isOpen={isOpen}
        onClose={() => onClose()}
        body={
          <ProjectsDrawerContent
            currentProject={currentProject}
            onClose={() => onClose()}
          />
        }
        footer={<></>}
        placement={"left"}
      />
    </>
  );
};

export default ProjectsBtn;
