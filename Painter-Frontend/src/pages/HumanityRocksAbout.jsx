import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import HumanityNavBar from "../components/HumanityRocks/HumanityNavBar";

const HumanityRocksAbout = () => {
  return (
    <>
      <HumanityNavBar />
      <Grid
        background={`url(${
          import.meta.env.VITE_ASSETS_PATH
        }/humanityRocks/images/Background.png)`}
        backgroundColor={"black"}
        paddingX={36}
        paddingTop={56}
        height={"100%"}
        width={"100%"}
        templateColumns={"1fr 1fr"}
      >
        <GridItem colStart={1} colEnd={1} color={"white"}>
          <Image
            position={"fixed"}
            top={32}
            right={"60%"}
            src={
              import.meta.env.VITE_ASSETS_PATH +
              "/humanityRocks/images/ship_black.png"
            }
          />
          <Image
            position={"absolute"}
            src={
              import.meta.env.VITE_ASSETS_PATH +
              "/humanityRocks/images/ship_lava.png"
            }
          />
          <Image
            position={"relative"}
            top={310}
            left={410}
            src={
              import.meta.env.VITE_ASSETS_PATH +
              "/humanityRocks/images/ship_white.png"
            }
          />
          <Image
            bottom={10}
            position={"absolute"}
            src={
              import.meta.env.VITE_ASSETS_PATH +
              "/humanityRocks/images/ship_black_blur.png"
            }
          />
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          color={"white"}
          display={"flex"}
          flexDir={"column"}
          gap={10}
        >
          <Heading
            textShadow={
              "-1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray, 1px 1px 0 gray"
            }
            color={"black"}
            fontSize={"7xl"}
          >
            How it works
          </Heading>
          <Heading
            textShadow={
              "-1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray, 1px 1px 0 gray"
            }
            color={"black"}
            fontSize={"7xl"}
          >
            01
          </Heading>
          <Text fontSize={"sm"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            totam unde rerum, earum vitae aliquam quia aut maiores consectetur
            iste delectus asperiores sint perferendis illum aspernatur voluptate
            nisi exercitationem quam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo nihil qui, itaque adipisci at quos
            nesciunt error vel! Enim rem omnis aut atque saepe, unde molestiae
            ullam doloribus praesentium ad.
          </Text>
          <Heading
            textShadow={
              "-1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray, 1px 1px 0 gray"
            }
            color={"black"}
            fontSize={"7xl"}
          >
            02
          </Heading>
          <Text fontSize={"sm"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nihil qui, itaque adipisci at quos nesciunt error vel! Enim rem
            omnis aut atque saepe, unde molestiae ullam doloribus praesentium
            ad. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo nihil qui, itaque adipisci at quos nesciunt error vel!
            Enim rem omnis aut atque saepe, unde molestiae ullam doloribus
            praesentium ad.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default HumanityRocksAbout;
