import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HumanityNavBar from "../components/HumanityRocks/HumanityNavBar";

const HumanityRocksSpaceships = () => {
  return (
    <>
      <HumanityNavBar />
      <Grid
        background={`url(${
          import.meta.env.VITE_ASSETS_PATH
        }/humanityRocks/images/Background.png)`}
        backgroundColor={"black"}
        paddingTop={48}
        paddingX={36}
        height={"100%"}
        width={"100%"}
        templateRows={"0.3fr 1fr"}
      >
        <GridItem paddingX={12} color={"white"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Heading width={"70%"}>Explore Space</Heading>{" "}
            <Text width={"100%"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              voluptatem rem assumenda dicta quos, eveniet dolorum tempora?
              Obcaecati eos laborum, harum molestias nemo, quos consequuntur
              laudantium, eaque natus numquam id. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur perferendis porro
              eligendi eos dolor quo. Quam cumque officia voluptatem sit rerum
              quibusdam incidunt saepe odit nostrum, nam expedita voluptatibus
              mollitia?
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Grid
            height={"100%"}
            width={"100%"}
            templateColumns={"1fr 1fr 1fr 1fr"}
          >
            <GridItem marginX={10}>
              <Flex
                background={"rgba(255,255,255,0.1)"}
                flexDir={"column"}
                justifyContent={"center"}
                gap={5}
                borderRadius={10}
              >
                <Text color={"white"} fontWeight={"bold"}>
                  HR-SHIP-256
                </Text>
                <Image
                  src={
                    import.meta.env.VITE_ASSETS_PATH +
                    "/humanityRocks/images/ship_lava.png"
                  }
                />
                <Flex>
                  <Box borderBottom={"1px solid blavk"}></Box>
                  <Box borderRadius={"50%"}>-></Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem marginX={10}>
              <Flex flexDir={"column"} justifyContent={"center"} gap={5}>
                <Text color={"white"} fontWeight={"bold"}>
                  HR-SHIP-256
                </Text>
                <Image
                  src={
                    import.meta.env.VITE_ASSETS_PATH +
                    "/humanityRocks/images/ship_lava.png"
                  }
                />
                <Flex>
                  <Box borderBottom={"1px solid blavk"}></Box>
                  <Box borderRadius={"50%"}>-></Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem marginX={10}>
              <Flex flexDir={"column"} justifyContent={"center"} gap={5}>
                <Text color={"white"} fontWeight={"bold"}>
                  HR-SHIP-256
                </Text>
                <Image
                  src={
                    import.meta.env.VITE_ASSETS_PATH +
                    "/humanityRocks/images/ship_lava.png"
                  }
                />
                <Flex>
                  <Box borderBottom={"1px solid blavk"}></Box>
                  <Box borderRadius={"50%"}>-></Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem marginX={10}>
              <Flex flexDir={"column"} justifyContent={"center"} gap={5}>
                <Text color={"white"} fontWeight={"bold"}>
                  HR-SHIP-256
                </Text>
                <Image
                  src={
                    import.meta.env.VITE_ASSETS_PATH +
                    "/humanityRocks/images/ship_lava.png"
                  }
                />
                <Flex>
                  <Box borderBottom={"1px solid blavk"}></Box>
                  <Box borderRadius={"50%"}>-></Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HumanityRocksSpaceships;
