import { Grid, GridItem, useMediaQuery, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSettingsStore } from "../hooks/use-settings-store.hook";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import IdeaView from "../components/IdeaView";
import CookiesToast from "../components/CookiesToast";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { isMobile } from "react-device-detect";
import IdeaOptions from "../components/Painter/IdeaOptions";

const IdeaPage = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  const { acceptCookies } = useSettingsStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    usePainterStore.setState({ optionsView: "IDEA" });

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
      templateColumns={".25fr 1fr "}
      height={isMobile && !isLargerThan1000 ? "" : "100%"}
      width={"100%"}
    >
      <GridItem colStart={[1, 1, 1, 1]} colEnd={[4, 4, 4, 2]} rowStart={1}>
        <IdeaOptions />
      </GridItem>

      <GridItem
        alignSelf={"flex-end"}
        colStart={[1, 1, 1, 2]}
        colEnd={[4, 4, 4, 3]}
        height={"100%"}
      >
        <IdeaView />
      </GridItem>
    </Grid>
  );
};
export default IdeaPage;
