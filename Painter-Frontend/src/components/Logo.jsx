import { Button, Flex } from "@chakra-ui/react";
import SVG_Icon from "./SVG_Icon";
import { BsArrowLeft } from "react-icons/bs";

const Logo = () => {
  const arrowClickHandler = () => {
    return () => {
      window.location = "https://idea.thecela.com/";
    };
  };

  return (
    <Flex marginLeft={24} justifyItems={"center"} alignItems={"center"}>
      <Button
        onClick={arrowClickHandler()}
        variant={"iconBtn"}
        fontSize={"1.5em"}
      >
        <BsArrowLeft />
      </Button>
      <SVG_Icon fileName={"logoV2.svg"} alt={"Ideadao logo"} />
    </Flex>
  );
};

export default Logo;
