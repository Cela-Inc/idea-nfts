import { Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import SaveForm from "./SaveForm";
import { useNavigate } from "react-router-dom";
import SVG_Icon from "../SVG_Icon";
import Loom from "../Loom/Loom";

const ProjectsDrawerContent = ({ onClose }) => {
  const [selectedView, setSelectedView] = useState("FORM");
  const navigate = useNavigate();

  const myProjectsBtnHandler = () => {
    if (!localStorage.getItem("user")) {
      return navigate("/auth/login");
    }

    navigate("/profile");
  };

  return (
    <Flex
      flexDir={"column"}
      justifyItems={"flex-start"}
      alignItems={"center"}
      gap={10}
      height={"100%"}
      width={"100%"}
    >
      <Flex width={"100%"} marginBottom={2}>
        <Button
          background={"transparent"}
          padding={"0"}
          fontSize={"lg"}
          onClick={() => onClose()}
          _hover={{ background: "gray.300" }}
          _active={{ background: "gray.400" }}
        >
          <Image src={import.meta.env.VITE_ASSETS_PATH + "svgs/close.svg"} />
        </Button>

        <SVG_Icon
          position={"relative"}
          top={7}
          left={5}
          src={import.meta.env.VITE_ASSETS_PATH + "svgs/logoV2.svg"}
          width={"7rem"}
        />
      </Flex>
      <SaveForm />
      <Flex width={"100%"} paddingLeft={10} gap={20}>
        <Button
          background={"transparent"}
          width={"100%"}
          _hover={{ background: "gray.300" }}
          fontWeight={400}
          fontSize={"16px"}
          onClick={() => myProjectsBtnHandler()}
        >
          My Projects
          <Image
            marginLeft={4}
            src={import.meta.env.VITE_ASSETS_PATH + "/svgs/right_arrow.svg"}
          />
        </Button>
        <Loom />
      </Flex>
    </Flex>
  );
};

export default ProjectsDrawerContent;
