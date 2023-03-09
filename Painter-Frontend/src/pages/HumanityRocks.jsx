import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import HumanityRocksConfig from "../components/HumanityRocks/HumanityRocksConfig";
import SceneCanvas from "../components/SceneCanvas";
import { useHumanityRocksStore } from "../hooks/use-humanity-rocks-store.hook";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import SVG_Icon from "../components/SVG_Icon";
import { IoIosUndo, IoIosRedo, IoIosShare } from "react-icons/io";
import { BiExitFullscreen } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const shuttles = [
  {
    title: "Black Shuttle",
    shipNumber: "HR-SHIP-256",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/black_shuttle.png`,
  },
  {
    title: "White Shuttle",
    shipNumber: "HR-SHIP-257",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/white_shuttle.png`,
  },
  {
    title: "Green Shuttle",
    shipNumber: "HR-SHIP-258",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/green_shuttle.png`,
  },
  {
    title: "Lava Shuttle",
    shipNumber: "HR-SHIP-259",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/lava_shuttle.png`,
  },
];

const rockets = [
  {
    title: "orange",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/orange_flame.png`,
  },
  {
    title: "blue",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/blue_flame.png`,
  },
];

const manneqiuns = [
  {
    title: "chris_1",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/chris_1.png`,
  },
  {
    title: "chris_2",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/chris_2.png`,
  },
  {
    title: "chris_3",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }/humanityRocks/images/chris_3.png`,
  },
];

const customizeMenu = [
  {
    title: "Spaceship",
    element: <SVG_Icon fileName={"spaceship.svg"} />,
  },
  {
    title: "Rocket",
    element: <SVG_Icon fileName={"rocket.svg"} />,
  },
  {
    title: "Mannequin",
    element: <SVG_Icon fileName={"mannequin_head.svg"} />,
  },
];

const HumanityRocks = () => {
  const {
    selectedMesh,
    selectedFlame,
    activeCustomizeMenu,
    stateSnapshot,
    snapshotIndex,
  } = useHumanityRocksStore();
  const navigate = useNavigate();
  const page = useRef();

  const utils = [
    {
      title: "Undo",
      element: <IoIosUndo color={"#fff"} />,
      clickHandler: () => {
        if (snapshotIndex - 1 >= 0) {
          useHumanityRocksStore.setState({
            selectedMesh: { ...stateSnapshot[snapshotIndex - 1].selectedMesh },
            selectedFlame: {
              ...stateSnapshot[snapshotIndex - 1].selectedFlame,
            },
            activeCustomizeMenu:
              stateSnapshot[snapshotIndex - 1].activeCustomizeMenu,
            snapshotIndex: snapshotIndex - 1,
          });
        }
      },
    },
    {
      title: "Redo",
      element: <IoIosRedo color={"#fff"} />,
      clickHandler: () => {
        if (snapshotIndex + 1 <= 3 && stateSnapshot.length > 1) {
          useHumanityRocksStore.setState({
            selectedMesh: { ...stateSnapshot[snapshotIndex + 1].selectedMesh },
            selectedFlame: {
              ...stateSnapshot[snapshotIndex + 1].selectedFlame,
            },
            activeCustomizeMenu:
              stateSnapshot[snapshotIndex + 1].activeCustomizeMenu,
            snapshotIndex: snapshotIndex + 1,
          });
        }
      },
    },
    {
      title: "Share",
      element: <IoIosShare color={"#fff"} />,
      clickHandler: () => {},
    },
    {
      title: "Fullscreen",
      element: <BiExitFullscreen color={"#fff"} />,
      clickHandler: () => {
        if (document.fullscreenElement) {
          return document.exitFullscreen();
        }
        page.current.requestFullscreen();
      },
    },
  ];

  const saveStateSnapshot = () => {
    let index = snapshotIndex + 1;

    useHumanityRocksStore.setState({ snapshotIndex: index >= 3 ? 3 : index });

    stateSnapshot.push({
      selectedFlame: { ...selectedFlame },
      selectedMesh: { ...selectedMesh },
      activeCustomizeMenu: activeCustomizeMenu,
    });

    if (stateSnapshot.length > 3) {
      stateSnapshot.shift();
    }
  };

  const changeShuttleWithArrow = async (direction) => {
    saveStateSnapshot();
    if (activeCustomizeMenu === "Spaceship") {
      const index = Number(direction) + selectedMesh.index;

      if (index >= shuttles.length) {
        await useHumanityRocksStore.setState({
          selectedMesh: { ...shuttles[0], index: 0 },
        });
      } else if (index < 0) {
        await useHumanityRocksStore.setState({
          selectedMesh: {
            ...shuttles[shuttles.length - 1],
            index: shuttles.length - 1,
          },
        });
      } else {
        await useHumanityRocksStore.setState({
          selectedMesh: { ...shuttles[index], index },
        });
      }
    } else if (activeCustomizeMenu === "Rocket") {
      const index = Number(direction) + selectedFlame.index;

      if (index >= rockets.length) {
        await useHumanityRocksStore.setState({
          selectedFlame: { ...rockets[0], index: 0 },
        });
      } else if (index < 0) {
        await useHumanityRocksStore.setState({
          selectedFlame: {
            ...rockets[rockets.length - 1],
            index: rockets.length - 1,
          },
        });
      } else {
        await useHumanityRocksStore.setState({
          selectedFlame: { ...rockets[index], index },
        });
      }
    }
  };

  return (
    <Grid
      ref={page}
      background={`url(${
        import.meta.env.VITE_ASSETS_PATH
      }/humanityRocks/images/Background.png)`}
      backgroundColor={"black"}
      paddingTop={24}
      height={"100%"}
      width={"100%"}
      templateColumns={"1fr 1fr 1fr"}
      paddingX={24}
      paddingY={24}
    >
      {/* Navbar */}
      <Flex
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        paddingX={36}
        paddingY={10}
        color={"#fff"}
      >
        <Image
          src={`${
            import.meta.env.VITE_ASSETS_PATH
          }/humanityRocks/images/h_1.png`}
          alt={"logo"}
        />
      </Flex>
      {/* Scene */}
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        top={0}
        left={0}
      >
        <SceneCanvas>
          <HumanityRocksConfig />
        </SceneCanvas>
      </Box>
      {/* UI */}
      <GridItem
        height={"100%"}
        alignItems={"flex-start"}
        colStart={1}
        colEnd={1}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"#fff"}
          gap={4}
          height={"100%"}
        >
          {/* Text info */}
          <Heading textAlign={"left"} width={"100%"} fontSize={"lg"}>
            {selectedMesh.shipNumber}
          </Heading>
          <Text paddingEnd={24} fontSize={"xs"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptas quas at magnam. Nisi debitis deserunt earum, facere
            delectus nemo. Alias in, voluptas temporibus ut dolorum nihil
            dolorem quidem rerum?
          </Text>
          <Text paddingRight={24} fontSize={"xs"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptas quas at magnam. Nisi debitis deserunt earum, facere
            delectus nemo. Alias in, voluptas temporibus ut dolorum nihil
            dolorem quidem rerum?
          </Text>
          <Text
            _hover={{ cursor: "pointer", opacity: 1 }}
            _active={{ cursor: "pointer", opacity: 0.5 }}
            zIndex={3}
            textAlign={"left"}
            width={"100%"}
            fontSize={"xs"}
            textDecor={"underline"}
            onClick={() => {
              navigate("/humanity/about");
            }}
          >
            How it Works
          </Text>
        </Flex>
      </GridItem>
      <GridItem height={"100%"} colStart={2} colEnd={2}>
        <Flex
          flexDir={"column"}
          height={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* top nav */}
          <Flex gap={5}>
            {customizeMenu.map((item) => {
              return (
                <Box
                  _hover={{ cursor: "pointer", opacity: 1 }}
                  _active={{ cursor: "pointer", opacity: 0.5 }}
                  background={"rgba(255,255,255,0.3)"}
                  zIndex={3}
                  bottom={5}
                  position={"relative"}
                  padding={2}
                  opacity={activeCustomizeMenu === item.title ? 1 : 0.5}
                  onClick={async () => {
                    saveStateSnapshot();
                    await useHumanityRocksStore.setState({
                      activeCustomizeMenu: item.title,
                    });
                  }}
                >
                  {item.element}
                </Box>
              );
            })}
          </Flex>
          {/* model select */}
          <Flex gap={5} justifyContent={"center"} alignItems={"center"}>
            <Box
              _hover={{ cursor: "pointer", opacity: 0.5 }}
              _active={{ cursor: "pointer", opacity: 0.8 }}
              zIndex={2}
              width={"2rem"}
              height={"2rem"}
              onClick={() => changeShuttleWithArrow(-1)}
            >
              <MdOutlineArrowBackIos color={"#fff"} fontSize={"1.5em"} />
            </Box>
            {/* flames */}
            {activeCustomizeMenu === "Spaceship" &&
              shuttles.map((item, index) => {
                return (
                  <Flex
                    _hover={{ cursor: "pointer", opacity: 0.5 }}
                    _active={{ cursor: "pointer", opacity: 0.8 }}
                    pointerEvents={"all"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"rgba(255,255,255,0.3)"}
                    width={"5rem"}
                    height={"5rem"}
                    zIndex={2}
                    onClick={async () => {
                      saveStateSnapshot();
                      await useHumanityRocksStore.setState({
                        selectedMesh: { ...item, index: index },
                      });
                    }}
                    flexDir={"column"}
                  >
                    <Image src={item.image} alt={item.title} />
                    {item.title === selectedMesh.title && (
                      <SVG_Icon
                        position={"relative"}
                        top={2}
                        fileName={"selected-active-mode.svg"}
                      />
                    )}
                  </Flex>
                );
              })}
            {/* rockets */}
            {activeCustomizeMenu === "Rocket" &&
              rockets.map((item, index) => {
                return (
                  <Flex
                    _hover={{ cursor: "pointer", opacity: 0.5 }}
                    _active={{ cursor: "pointer", opacity: 0.8 }}
                    pointerEvents={"all"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"rgba(255,255,255,0.3)"}
                    width={"5rem"}
                    height={"5rem"}
                    zIndex={2}
                    onClick={async () => {
                      saveStateSnapshot();
                      if (selectedFlame.title === item.title) {
                        await useHumanityRocksStore.setState({
                          selectedFlame: { title: "", image: "", index: index },
                        });
                      } else {
                        await useHumanityRocksStore.setState({
                          selectedFlame: { ...item, index: index },
                        });
                      }
                    }}
                    flexDir={"column"}
                  >
                    <Image src={item.image} alt={item.title} />
                    {item.title === selectedFlame.title && (
                      <SVG_Icon
                        position={"relative"}
                        top={2}
                        fileName={"selected-active-mode.svg"}
                      />
                    )}
                  </Flex>
                );
              })}
            {/* mannequin */}
            {activeCustomizeMenu === "Mannequin" &&
              manneqiuns.map((item, index) => {
                return (
                  <Flex
                    _hover={{ cursor: "pointer", opacity: 0.5 }}
                    _active={{ cursor: "pointer", opacity: 0.8 }}
                    pointerEvents={"all"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"rgba(255,255,255,0.3)"}
                    width={"5rem"}
                    height={"5rem"}
                    zIndex={2}
                    onClick={() => {}}
                    flexDir={"column"}
                  >
                    <Image src={item.image} alt={item.title} />
                    {item.title === selectedFlame.title && (
                      <SVG_Icon
                        position={"relative"}
                        top={2}
                        fileName={"selected-active-mode.svg"}
                      />
                    )}
                  </Flex>
                );
              })}
            <Box
              _hover={{ cursor: "pointer", opacity: 0.5 }}
              _active={{ cursor: "pointer", opacity: 0.8 }}
              zIndex={2}
              width={"2rem"}
              height={"2rem"}
              onClick={() => {
                saveStateSnapshot();
                changeShuttleWithArrow(1);
              }}
            >
              <MdArrowForwardIos color={"#fff"} fontSize={"1.5em"} />
            </Box>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colStart={3} colEnd={3}>
        <Flex
          flexDir={"column"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            height={"100%"}
          >
            <Box>
              <Text
                width={"100%"}
                textAlign={"center"}
                color={"#fff"}
                fontSize={"xs"}
                fontWeight={"bold"}
              >
                Rarity
              </Text>
              <Heading color={"yellow.500"} fontSize={"4xl"}>
                0.5%
              </Heading>
            </Box>
            <Flex flexDir={"column"}>
              {utils.map((item, index) => {
                return (
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"rgba(255,255,255,0.2)"}
                    borderTopRadius={index === 0 && 5}
                    borderBottomRadius={index === 3 && 5}
                    zIndex={3}
                    _hover={{ cursor: "pointer", opacity: 0.5 }}
                    _active={{ cursor: "pointer", opacity: 0.8 }}
                    padding={4}
                    onClick={() => {
                      item.clickHandler();
                    }}
                  >
                    {item.element}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          <Button
            justifySelf={"end"}
            background={"yellow.500"}
            paddingX={8}
            paddingY={6}
          >
            Continue > > >
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default HumanityRocks;
