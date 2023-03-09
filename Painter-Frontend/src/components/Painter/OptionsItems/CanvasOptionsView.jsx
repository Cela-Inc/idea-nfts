import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";
import OptionContainer from "./OptionContainer";

const CanvasOptionsView = ({ setView, onClose }) => {
  const { paintOptions, gameStart, generatedRemixOptions } = usePainterStore();
  const [showRemixOptions, setShowRemixOptions] = useState(false);

  const paintSelectionHandler = (selection) => {
    usePainterStore.setState({
      paintOptions: {
        ...paintOptions,
        selected: {
          ...selection,
        },
      },
    });

    if (gameStart) {
      usePainterStore.setState({ gameStart: false });
    }

    usePainterStore.setState({ gameStart: true });
    if (setView) {
      return setView("PAINT_OPTIONS");
    }
  };

  return (
    <Flex height={"100%"} width={"100%"} flexDir={"column"}>
      {!showRemixOptions && (
        <>
          <OptionContainer
            onClick={() => {
              paintSelectionHandler({
                title: "Blank Canvas",
                blankCanvas: true,
              });
            }}
          >
            <Text fontWeight={"semibold"}>Start with Blank Canvas</Text>
          </OptionContainer>
          {/* <OptionContainer paddingX={7} minH={"25%"} overflow={"auto"}>
            <Text color={"#373737"} fontWeight={"semibold"}>
              IDEA EXCHANGE
            </Text>
            {paintOptions.phrase.map((item) => (
              <Text
                marginLeft={5}
                key={item}
                onClick={() => {
                  paintSelectionHandler({ title: item, phrase: true });
                }}
                _hover={{ textDecor: "underline", cursor: "pointer" }}
                overflow={"visible"}
                noOfLines={1}
                minH={"1.5rem"}
              >
                {item}
              </Text>
            ))}
          </OptionContainer> */}
        </>
      )}
      <OptionContainer onClick={() => setShowRemixOptions(!showRemixOptions)}>
        <Text fontWeight={"semibold"}>Remix</Text>
      </OptionContainer>
      {showRemixOptions && (
        <Box overflowY={"scroll"}>
          <SimpleGrid padding={5} columns={2} gap={5}>
            {paintOptions.remixOptions.map((item) => (
              <Box
                key={item.title}
                onClick={() => {
                  paintSelectionHandler({ ...item, remix: true });
                }}
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Image
                  src={
                    import.meta.env.VITE_ASSETS_PATH +
                    "paintings/" +
                    item.fileName
                  }
                  alt={item.title}
                />
              </Box>
            ))}
          </SimpleGrid>
          <OptionContainer borderTop={"1px solid black"}>
            Generated Remix
          </OptionContainer>
          <SimpleGrid padding={5} columns={2} gap={5}>
            {generatedRemixOptions.map((item) => (
              <Box
                key={item.seed}
                onClick={() => {
                  paintSelectionHandler({ ...item, remix: true });
                }}
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Image
                  src={"data:image/png;base64," + item.base64}
                  alt={"AI Generated Image"}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
      <Button
        onClick={() => {
          if (showRemixOptions) {
            return setShowRemixOptions(!showRemixOptions);
          }

          if (setView) {
            return setView("OPTIONS");
          }

          onClose();
        }}
        marginTop={"2rem"}
        marginBottom={28}
        marginLeft={"1rem"}
        width={24}
        variant={"ideaButton"}
        background={"transparent"}
        _hover={{
          background: "green.success",
        }}
      >
        Back
      </Button>
    </Flex>
  );
};

export default CanvasOptionsView;
