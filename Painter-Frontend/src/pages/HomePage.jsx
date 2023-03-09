import SideBar from "../components/SideBar";
import MintButton from "../components/MintButton/MintButton";
import Painter from "../components/Painter/Painter";
import HelpBar from "../components/Painter/HelpBar";
import PainterOptions from "../components/Painter/PainterOptions";
import { Box, Grid, GridItem, useMediaQuery, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSettingsStore } from "../hooks/use-settings-store.hook";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import CookiesToast from "../components/CookiesToast";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { isMobile } from "react-device-detect";
import { lazy } from "react";
import Snackbar from "../components/Snackbar";
import ProjectsBtn from "../components/ProjectsMenu/ProjectsBtn";

const TextToImage = lazy(() => import("../components/TextToImage"));

const HomePage = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  const { acceptCookies } = useSettingsStore();
  const { currentPage, optionsView } = usePainterStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    usePainterStore.setState({
      optionsView: "OPTIONS",
      currentPage: "PAINTER",
    });

    if (!acceptCookies && !toastIdRef.current) {
      toastIdRef.current = toast({
        duration: null,
        position: "bottom-right",
        render: () => <CookiesToast toast={toast} />,
      });
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      userUserInfoStore.setState({ user: JSON.parse(storedUser) });
    }

    const generatedImages = JSON.parse(localStorage.getItem("generatedImages"));
    if (generatedImages?.length > 0) {
      usePainterStore.setState({ generatedRemixOptions: generatedImages });
    }
  }, []);

  return (
    <Grid
      templateColumns={
        currentPage === "PAINTER" ? ".265fr 1fr 0.06fr" : ".25fr 1fr "
      }
      height={isMobile && !isLargerThan1000 ? "" : "100%"}
      width={"100%"}
    >
      <Snackbar />

      <GridItem
        overflowY={optionsView === "CANVAS_OPTIONS" && "scroll"}
        colStart={[1, 1, 1, 1]}
        colEnd={[4, 4, 4, 2]}
        rowStart={1}
      >
        <PainterOptions />
      </GridItem>

      <GridItem
        paddingBottom={[0, 0, 0, 0, 0, 0, 0, "3rem"]}
        paddingX={[0, 0, 0, 10]}
        paddingY={[0, 0, 0, 0, 0, 5, 10]}
        alignSelf={"flex-end"}
        colStart={[1, 1, 1, 2]}
        colEnd={[4, 4, 4, 3]}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={currentPage === "TEXT_IMAGE" && "100%"}
      >
        <ProjectsBtn />
        {currentPage === "TEXT_IMAGE" && <TextToImage></TextToImage>}
        {currentPage === "PAINTER" && (
          <>
            <Painter />
            <Box display={["none", "none", "none", "flex"]} marginTop={[10]}>
              <HelpBar />
              <MintButton />
            </Box>
          </>
        )}
      </GridItem>

      <GridItem
        colStart={[1, 1, 1, 3]}
        colEnd={[4, 4, 4, 3]}
        rowStart={[3, 3, 3, 1]}
      >
        {currentPage === "PAINTER" && <SideBar />}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
