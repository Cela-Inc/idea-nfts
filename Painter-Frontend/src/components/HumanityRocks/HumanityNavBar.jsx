import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import SVG_Icon from "../SVG_Icon";
import { Link, useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const HumanityNavBar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      paddingX={36}
      paddingTop={12}
      position={"absolute"}
      top={0}
      left={0}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <SVG_Icon
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate("/humanity")}
        fileName={"HR_Logo.svg"}
      />
      <Flex alignItems={"center"} gap={10} color={"whiteAlpha.800"}>
        <Link to={"/humanity/about"}>About</Link>
        <Link to={"/humanity/finance"}>Financing</Link>
        <Link to={"/humanity/characters"}>Company</Link>
        <Link>Docs</Link>
        <Link>FAQ</Link>
        <Link to={"/humanity/spaceships"}>Community</Link>
      </Flex>
      <Flex gap={5}>
        <Button
          background={"transparent"}
          borderRadius={"50%"}
          height={"2.5rem"}
          border={"1px solid gray"}
          padding={0}
        >
          <FaDiscord color={"gray"} />
        </Button>
        <Button background={"yellow.500"}>Connect Wallet</Button>
      </Flex>
    </Flex>
  );
};

export default HumanityNavBar;
