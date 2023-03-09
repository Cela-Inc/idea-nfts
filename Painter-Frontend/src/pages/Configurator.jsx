import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Creator from "../components/Creator";
import SideBar from "../components/SideBar";
import MenuList from "../components/MenuList";
import AudioPlayer from "../components/AudioPlayer";
import Logo from "../components/Logo";
import RarityMenu from "../components/RarityMenu/RarityMenu";
import ProjectsBtn from "../components/ProjectsMenu/ProjectsBtn";
import CardView from "../components/CardView/CardView";
import CustomisationMenu from "../components/CustomisationMenu/CustomisationMenu";
import { useEffect } from "react";
import { useCreatorStore } from "../hooks/use-creator-store.hook";
import MintButton from "../components/MintButton/MintButton";
import NavBar from "../components/NavBar";

const Configurator = () => {
  const { getProjectsFromStorage, usePainter } = useCreatorStore();

  useEffect(() => {
    getProjectsFromStorage();
  }, []);

  return (
    <>
      <NavBar />
      <Grid templateColumns={"1fr 0.05fr"} height={"100%"} width={"100%"}>
        {/* <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      > */}
        {/* <Box paddingTop={24}> */}
        {/* <Logo /> */}
        {/* positioned absolutely */}
        {/* <RarityMenu /> */}
        <CustomisationMenu />
        <Box
          position={"absolute"}
          bottom={24}
          left={5}
          zIndex={10}
          width={"2rem"}
          height={"2rem"}
        >
          <AudioPlayer />
        </Box>
        {/* </Box> */}
        {/* </Flex> */}
        <GridItem height={"100%"} colStart={[1, 1, 1, 1]} colEnd={[2, 2, 2, 2]}>
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <ProjectsBtn />
            <Creator />
            <CardView />
          </Flex>
        </GridItem>
        <GridItem
          height={"100%"}
          width={"100%"}
          colStart={[1, 1, 1, 2]}
          // colEnd={[4, 4, 4, 3]}
          rowStart={[3, 3, 3, 1]}
        >
          <MenuList />
          <SideBar />
          <MintButton />
        </GridItem>
      </Grid>
    </>
  );
};

export default Configurator;
