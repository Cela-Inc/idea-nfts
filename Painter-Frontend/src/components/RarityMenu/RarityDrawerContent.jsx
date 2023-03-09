import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Countdown from "react-countdown";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { upperFirst } from "lodash";
import { v4 as uuidV4 } from "uuid";

const RarityDrawerContent = ({ defaultIndex }) => {
  const { model, animation, music, background } = useCreatorStore();

  const getMaterialColors = (version) => {
    const components = [];

    for (const material in model.materialColors) {
      components.push(
        <Flex
          key={uuidV4()}
          width={"20rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex gap={4} alignItems='center'>
            <Box
              border={"1px"}
              borderColor={"gray.400"}
              borderWidth={1}
              height={"2rem"}
              width={"2rem"}
              borderRadius={5}
              background={model.materialColors[material].color}
            ></Box>
            <Text fontSize='14px'>{material}</Text>
          </Flex>
          <Text>
            {version === "time" ? (
              <>
                <Countdown daysInHours={true} date={Date.now() + 5000000}>
                  <Text>Unavailable</Text>
                </Countdown>
              </>
            ) : (
              "2.5%"
            )}
          </Text>
        </Flex>
      );
    }

    return components;
  };

  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <Tabs
        defaultIndex={defaultIndex}
        isLazy
        lazyBehavior='unmount'
        width={"100%"}
        align='center'
        colorScheme={"black"}
      >
        <TabList marginTop={10}>
          <Tab
            color={"black.tabHeader"}
            fontSize={"16"}
            fontWeight={600}
            borderBottomWidth={"3px"}
            borderRadius={"2"}
            width={"10rem"}
          >
            Time
          </Tab>
          <Tab
            color={"black.tabHeader"}
            fontSize={"16"}
            fontWeight={600}
            borderBottomWidth={"3px"}
            borderRadius={"2"}
            width={"10rem"}
          >
            Rarity
          </Tab>
        </TabList>

        <TabPanels>
          {/* Time */}
          <TabPanel>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems='center'
              height={"100%"}
            >
              <Box marginTop={10} marginBottom={20}>
                <Heading marginBottom={6}>
                  <Countdown daysInHours={true} date={Date.now() + 5000000}>
                    <Text>Unavailable</Text>
                  </Countdown>
                </Heading>
                <Text color={"black.tabHeader"} fontSize={"smaller"}>
                  TIME LEFT
                </Text>
              </Box>

              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={7}
              >
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/backgrounds" +
                        `${background.image}.jpg`
                      }
                    />
                    <Text fontSize='14px'>{background.title}</Text>
                  </Flex>
                  <Text fontSize='14px'>
                    <Countdown daysInHours={true} date={Date.now() + 5000000}>
                      <Text>Unavailable</Text>
                    </Countdown>
                  </Text>
                </Flex>
                {/* Material colors */}
                {getMaterialColors("time")}
                {/* Music */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/svgs/music_icon.svg"
                      }
                    />
                    <Text fontSize='14px'>
                      {music.title ? music.title : "Empty"}
                    </Text>
                  </Flex>
                  <Text>
                    {music.title ? (
                      <>
                        <Countdown
                          daysInHours={true}
                          date={Date.now() + 5000000}
                        >
                          <Text>Unavailable</Text>
                        </Countdown>
                      </>
                    ) : (
                      ""
                    )}
                  </Text>
                </Flex>
                {/* animations */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/svgs/animations_icon.svg"
                      }
                    />
                    <Text fontSize='14px'>
                      {animation ? animation : "Empty"}
                    </Text>
                  </Flex>
                  <Text>
                    {animation ? (
                      <>
                        <Countdown
                          daysInHours={true}
                          date={Date.now() + 5000000}
                        >
                          <Text>Unavailable</Text>
                        </Countdown>
                      </>
                    ) : (
                      ""
                    )}
                  </Text>
                </Flex>
                {/* MODEL */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        `/images/${model.image}`
                      }
                    />
                    <Text fontSize='14px'>{upperFirst(model.title)}</Text>
                  </Flex>
                  <Text>
                    <Countdown daysInHours={true} date={Date.now() + 5000000}>
                      <Text>Unavailable</Text>
                    </Countdown>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </TabPanel>
          {/* Rarity */}
          <TabPanel>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems='center'
              height={"100%"}
            >
              <Box marginTop={10} marginBottom={20}>
                <Heading marginBottom={6}>2.5%</Heading>
                <Text color={"black.tabHeader"} fontSize={"smaller"}>
                  RARITY
                </Text>
              </Box>

              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={7}
              >
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/backgrounds" +
                        `${background.image}.jpg`
                      }
                    />
                    <Text fontSize='14px'>{background.title}</Text>
                  </Flex>
                  <Text>{"0.5%"}</Text>
                </Flex>
                {/* Material colors */}
                {getMaterialColors("")}
                {/* Music */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/svgs/music_icon.svg"
                      }
                    />
                    <Text fontSize='14px'>
                      {music.title ? music.title : "Empty"}
                    </Text>
                  </Flex>
                  <Text>{music.title ? "1.5%" : ""}</Text>
                </Flex>
                {/*  */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        "/svgs/animations_icon.svg"
                      }
                    />
                    <Text fontSize='14px'>
                      {animation ? animation : "Empty"}
                    </Text>
                  </Flex>
                  <Text>{animation ? "1.25%" : ""}</Text>
                </Flex>
                {/*  */}
                <Flex
                  width={"20rem"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex gap={4} alignItems='center'>
                    <Image
                      height={"2rem"}
                      width={"2rem"}
                      borderRadius={5}
                      src={
                        import.meta.env.VITE_ASSETS_PATH +
                        `/images/${model.image}`
                      }
                    />
                    <Text fontSize='14px'>{upperFirst(model.title)}</Text>
                  </Flex>
                  <Text>2%</Text>
                </Flex>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default RarityDrawerContent;
