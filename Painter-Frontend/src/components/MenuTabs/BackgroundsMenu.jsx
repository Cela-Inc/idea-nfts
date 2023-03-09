import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import MenuItem from "./MenuItem";
import Countdown from "react-countdown";
import { v4 as uuidv4 } from "uuid";

const BackgroundsMenu = () => {
  const { background, setBackground, availableBackgrounds } = useCreatorStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MenuItem
      searchTerm={searchTerm}
      setSearchTerm={(e) => setSearchTerm(e)}
      placeholder={"Search backgrounds"}
      columns={[2]}
    >
      {availableBackgrounds.map((item) => (
        <Flex
          key={uuidv4()}
          flexDir={"column"}
          justifyContent='center'
          alignItems={"center"}
          gap={2}
          marginBottom={5}
          marginRight={3}
          display={
            searchTerm === ""
              ? "flex"
              : item.title.includes(searchTerm)
              ? "flex"
              : "none"
          }
          onClick={() => setBackground(item)}
        >
          {item?.isCustom ? (
            <Box
              backgroundImage={item.image}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              height={"5rem"}
              width={"7rem"}
              border={background.title === item.title && 1}
              borderColor={background.title === item.title && "#00AAFF"}
              borderStyle={background.title === item.title && "solid"}
              borderRadius={10}
              _hover={{
                opacity: "0.75",
                cursor: "pointer",
              }}
              _active={{
                opacity: "0.5",
              }}
            ></Box>
          ) : (
            <Image
              border={background.title === item.title && 1}
              borderColor={background.title === item.title && "#00AAFF"}
              borderStyle={background.title === item.title && "solid"}
              borderRadius={10}
              height={"5rem"}
              width={"7rem"}
              _hover={{
                opacity: "0.75",
                cursor: "pointer",
              }}
              _active={{
                opacity: "0.5",
              }}
              alt={item.title}
              src={
                import.meta.env.VITE_ASSETS_PATH +
                "/backgrounds" +
                item.image +
                ".jpg"
              }
            />
          )}

          <Text
            fontSize={"sm"}
            opacity={background.title === item.title ? 1 : 0.5}
          >
            <Countdown date={Date.now() + 5000000}>
              <Text>Unavailable</Text>
            </Countdown>
          </Text>
        </Flex>
      ))}
    </MenuItem>
  );
};

export default BackgroundsMenu;
