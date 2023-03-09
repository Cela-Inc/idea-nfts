import { Flex, Progress, Text } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import React from "react";
import SVG_Icon from "./SVG_Icon";

const Loader = ({ progress }) => {
  return (
    <Html center>
      <Flex
        width={"20rem"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        height={"10rem"}
      >
        <SVG_Icon fileName={"logoV2.svg"} />
        <Text>Loading In Progress</Text>
        <Progress width={"10rem"} height={"5rem"} value={progress} />
      </Flex>
    </Html>
  );
};

export default Loader;
