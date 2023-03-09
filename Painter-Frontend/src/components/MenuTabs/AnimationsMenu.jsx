import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import Countdown from "react-countdown";
import MenuItem from "./MenuItem";
import { v4 as uuidv4 } from "uuid";

const songList = [
  {
    title: "Dance",
    animation: "animation_one",
  },
  {
    title: "Wave",
    animation: "animation_one",
  },
  {
    title: "Jumping",
    animation: "animation_one",
  },
];

const AnimationsMenu = () => {
  const { animation, setAnimation } = useCreatorStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MenuItem
      placeholder={"Search animations"}
      searchTerm={searchTerm}
      setSearchTerm={(e) => setSearchTerm(e)}
      columns={[1]}
    >
      {songList.map((item) => (
        <Flex
          key={uuidv4()}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"20rem"}
          gap={6}
          display={
            searchTerm === ""
              ? "flex"
              : item.title.includes(searchTerm)
              ? "flex"
              : "none"
          }
          _hover={{
            opacity: "0.75",
            cursor: "pointer",
          }}
          _active={{
            opacity: "0.5",
          }}
          onClick={() => setAnimation(item.title)}
        >
          <Flex
            flexDir={"column"}
            justifyContent='center'
            alignItems={"flex-start"}
            flex={1}
            gap={2}
          >
            <Text
              fontSize={"md"}
              fontWeight={animation === item.title ? 500 : 400}
              opacity={animation === item.title ? 1 : 0.5}
            >
              {item.title}
            </Text>
            <Text
              fontWeight={400}
              textAlign={"right"}
              opacity={0.5}
              fontSize={"x-small"}
            >
              <Countdown date={Date.now() + 5000000}>
                <Text>Unavailable</Text>
              </Countdown>
            </Text>{" "}
          </Flex>
          <Text textAlign={"right"} opacity={0.5} fontSize={"x-small"}>
            0.02%
          </Text>
        </Flex>
      ))}
    </MenuItem>
  );
};

export default AnimationsMenu;
