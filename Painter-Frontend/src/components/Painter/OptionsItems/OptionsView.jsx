import { Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import OptionContainer from "./OptionContainer";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";
import { MdChevronRight } from "react-icons/md";
import Timer from "./Timer";
import { useEffect, useRef } from "react";

const OptionsView = ({ setView }) => {
  const { timerOptions, paintOptions, gameStart, gameFinished, showRemix } =
    usePainterStore();
  const containerRef = useRef();

  const selectTime = (timeOption) => {
    usePainterStore.setState({
      timerOptions: {
        ...timerOptions,
        selected: timeOption,
      },
    });
  };

  useEffect(() => {
    if (document.body.clientWidth < 1000) {
      containerRef.current.scrollTo(0, 50);
    }
  }, []);

  return (
    <Flex
      ref={containerRef}
      height={["10rem", "10rem", "100%", "100%"]}
      width={"100%"}
      flexDir={"column"}
      overflowY={[
        "scroll",
        "scroll",
        "scroll",
        "hidden",
        "hidden",
        "hidden",
        "hidden",
      ]}
    >
      <OptionContainer
        paddingY={!gameStart ? [1, 1, 1, 10, 10, 14] : [1, 1, 1, 1, 2, 2, 2]}
        background={
          timerOptions.timeLeft < 30 && gameStart
            ? "red"
            : gameStart
            ? "#2745E2"
            : ""
        }
        _hover={{ background: "#fff" }}
      >
        {!gameStart ? (
          <>
            <Text>Choose Time</Text>
            <SimpleGrid
              columns={[4, 4, 4, 2, 4, 4]}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
            >
              {timerOptions.timeSlots.map((item) => (
                <Button
                  width={"3.5rem"}
                  key={item.title}
                  fontWeight={
                    timerOptions.selected.title === item.title
                      ? "bold"
                      : "normal"
                  }
                  padding={"0 0.5rem 0 0.5rem"}
                  borderRadius={10}
                  height={7}
                  onClick={() => selectTime(item)}
                  background={
                    timerOptions.selected.title === item.title
                      ? "green.success"
                      : ""
                  }
                  variant={
                    timerOptions.selected.title === item.title
                      ? "ideaButton"
                      : "timeOutline"
                  }
                >
                  {item.title}
                </Button>
              ))}
            </SimpleGrid>
          </>
        ) : (
          <Timer />
        )}
      </OptionContainer>
      <OptionContainer
        paddingY={[0, 1, 4, 8]}
        minHeight={"5rem"}
        onClick={() => {
          setView("CANVAS_OPTIONS");
          usePainterStore.setState({ gameStart: false });
        }}
      >
        {!paintOptions.selected && !gameStart ? (
          <>
            <Text>Choose what to draw</Text>
            <Flex
              width={"100%"}
              justifyContent={"space-between"}
              fontWeight={"bold"}
            >
              <Text>Select</Text>
              <MdChevronRight
                fontSize={"1.75em"}
                style={{ position: "relative", bottom: "1rem" }}
              />
            </Flex>
          </>
        ) : (
          <>
            <Text>
              You're drawing {paintOptions.selected?.remix && "a Remix"}
            </Text>
            {paintOptions.selected?.remix ? (
              <Button
                minW={"2rem"}
                padding={0}
                w={"4.5rem"}
                background={"#9747FF"}
                borderRadius={5}
                color={"#fff"}
                fontSize={"1em"}
                paddingTop={0}
                height={"1.75rem"}
                variant={"ideaButton"}
              >
                change
              </Button>
            ) : (
              <Flex
                width={"100%"}
                justifyContent={"space-between"}
                fontWeight={"bold"}
              >
                <Text noOfLines={1}>{paintOptions.selected?.title}</Text>
                <MdChevronRight
                  fontSize={"1.75em"}
                  style={{ position: "relative", bottom: "1rem" }}
                />
              </Flex>
            )}
          </>
        )}
      </OptionContainer>
      {/* <OptionContainer
        onClick={() => {
          setView("TEXT_IMAGE");
          usePainterStore.setState({ currentPage: "TEXT_IMAGE" });
        }}
      >
        <Text fontWeight={"semibold"}>Text to Image</Text>
      </OptionContainer>
      <OptionContainer>
        <Text fontWeight={"semibold"}>Text to 3D</Text>
      </OptionContainer> */}
      {paintOptions.selected?.remix && (
        <Flex
          marginTop={2}
          width={"100%"}
          padding={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            height={["5rem", "8rem", "12rem", "15rem"]}
            src={
              paintOptions.selected.base64
                ? "data:image/png;base64," + paintOptions.selected.base64
                : import.meta.env.VITE_ASSETS_PATH +
                  "paintings/" +
                  paintOptions.selected?.fileName
            }
          />
        </Flex>
      )}
      <Button
        onClick={() => setView("OPTIONS")}
        marginLeft={5}
        variant={"ideaButton"}
        background={"transparent"}
        marginTop={5}
        width={"25%"}
        isDisabled={gameStart}
      >
        Back
      </Button>
      {/* Talk to me link btn */}

      {/* //TODO: Talk to me button removed for now, Also needs to be its own component */}
      {/* <Button
        backgroundImage={
          import.meta.env.VITE_ASSETS_PATH + "images/talk_to_me.png"
        }
        variant={"talkToMe"}
        display={["none", "none", "none", "block"]}
      >
        Talk to me!
      </Button> */}

      {/* Audio Button */}
    </Flex>
  );
};

export default OptionsView;
