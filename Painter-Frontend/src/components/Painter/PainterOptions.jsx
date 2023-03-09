import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import AudioPlayer from "../AudioPlayer";
import MobileCanvasOptions from "../MobileViews/MobileCanvasOptions";
import CanvasOptionsView from "./OptionsItems/CanvasOptionsView";
import OptionContainer from "./OptionsItems/OptionContainer";
import OptionsView from "./OptionsItems/OptionsView";
import TextImageView from "./OptionsItems/TextImageView";

const PainterOptions = () => {
  const { optionsView, gameStart } = usePainterStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const setViewHandler = () => {
    return (view) => {
      usePainterStore.setState({ optionsView: view });
    };
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"start"}
      alignItems={"flex-start"}
      borderRight={[0, 0, 0, "1px"]}
      borderStyle={"solid"}
      borderColor={"black"}
      height={"100%"}
      background={"#fff"}
      paddingTop={["5.5rem"]}
      width={"100%"}
      fontWeight={600}
    >
      {optionsView === "OPTIONS" && (
        <>
          <OptionContainer
            onClick={() => {
              usePainterStore.setState({ optionsView: "PAINT_OPTIONS" });
              useCreatorStore.setState({ projectType: "PAINT" });
            }}
            minHeight={"auto"}
            paddingY={3}
            textAlign={"left"}
          >
            3D Paint
          </OptionContainer>
          <OptionContainer
            onClick={() => {
              usePainterStore.setState({
                optionsView: "TEXT_IMAGE",
                currentPage: "TEXT_IMAGE",
              });
              useCreatorStore.setState({ projectType: "AI" });
            }}
            minHeight={"auto"}
            paddingY={3}
            textAlign={"left"}
          >
            AI Paint
          </OptionContainer>
          <OptionContainer
            onClick={() => {
              usePainterStore.setState({ optionsView: "CONFIGURATOR" });
              useCreatorStore.setState({ projectType: "3D" });
            }}
            minHeight={"auto"}
            paddingY={3}
            textAlign={"left"}
          >
            3D Experience
          </OptionContainer>
        </>
      )}
      {optionsView === "PAINT_OPTIONS" && (
        <OptionsView setView={setViewHandler()} />
      )}
      {optionsView === "CONFIGURATOR" && (
        <>
          <Button
            onClick={() => usePainterStore.setState({ optionsView: "OPTIONS" })}
            marginLeft={5}
            variant={"ideaButton"}
            background={"transparent"}
            marginTop={5}
            width={"25%"}
          >
            Back
          </Button>
        </>
      )}
      {optionsView === "TEXT_IMAGE" && (
        <TextImageView setView={setViewHandler()} />
      )}
      {optionsView === "CANVAS_OPTIONS" ? (
        isLargerThan1000 ? (
          <CanvasOptionsView setView={setViewHandler()} />
        ) : (
          <MobileCanvasOptions
            isOpen={() => {
              return optionsView === "CANVAS_OPTIONS";
            }}
            setView={setViewHandler()}
          />
        )
      ) : (
        <></>
      )}
      <AudioPlayer
        autoPlay={gameStart}
        song={"/CO__House_Idea_NFT__.mp3"}
        display={["none", "none", "none", "flex"]}
        position={"absolute"}
        bottom={12}
      />
    </Flex>
  );
};

export default PainterOptions;
