import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  keyframes,
  useDisclosure,
} from "@chakra-ui/react";
import { Suspense, useRef } from "react";
import ProjectModal from "./ProjectModal";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import UndoRedoButtons from "./UndoRedoButtons";
import PainterGame from "./PainterGame";
import Creator from "../Creator";
import MenuList from "../MenuList";
import CustomisationMenu from "../CustomisationMenu/CustomisationMenu";
import SVG_Icon from "../SVG_Icon";

const animation = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0)
  }
`;

const Painter = () => {
  const screenshotRef = useRef();
  const { gameStart, gameFinshed, optionsView } = usePainterStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loadingAnimation = `${animation} 1.5s steps(4) infinite`;

  const onModalClose = () => {
    onClose();
  };

  return (
    <Box
      border={"1px"}
      borderStyle={["none", "none", "none", "solid"]}
      borderColor={"black"}
      boxShadow={["none", "none", "none", "3px 3px 0px #1A1A1A"]}
      height={["55vh", "50vh", "50vh", "73vh"]}
      width={"100%"}
      ref={screenshotRef}
      id={"threeCanvas"}
    >
      {optionsView === "CONFIGURATOR" ? (
        <Grid templateColumns={"1fr"} height={"100%"} width={"100%"}>
          <CustomisationMenu />
          <MenuList />
          <GridItem
            height={"100%"}
            colStart={[1, 1, 1, 1]}
            colEnd={[2, 2, 2, 2]}
          >
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Suspense
                fallback={
                  <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={10}
                  >
                    <SVG_Icon fileName={"logoV2.svg"} width={"10rem"} />
                    <Heading
                      fontSize={"2xl"}
                      clipPath={"inset(0 2ch 0 0)"}
                      transitionTimingFunction={"ease"}
                      animation={loadingAnimation}
                    >
                      Loading. . .
                    </Heading>
                  </Flex>
                }
              >
                <Creator />
              </Suspense>
            </Flex>
          </GridItem>
        </Grid>
      ) : (
        <Grid
          templateColumns={"repeat(5, 1fr)"}
          templateRows={[
            "1fr 1.5fr .5fr",
            "1fr 1.5fr .5fr",
            "1fr 1.5fr .5fr",
            "1fr .5fr 1fr",
          ]}
          height={"100%"}
        >
          {!gameFinshed && gameStart && (
            <GridItem
              colStart={1}
              colEnd={6}
              rowStart={1}
              rowEnd={[3, 3, 3, 4]}
            >
              <PainterGame screenshotRef={screenshotRef} />
            </GridItem>
          )}
          {!gameStart && !gameFinshed && (
            <>
              <GridItem
                colStart={1}
                colEnd={6}
                rowStart={1}
                rowEnd={[2, 2, 3, 3]}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              ></GridItem>
            </>
          )}
          <GridItem
            colStart={[1, 1, 1, 3]}
            colEnd={[6, 6, 6, 4]}
            rowStart={3}
            paddingX={["1rem", "1rem", "1rem", ""]}
            alignSelf={"center"}
            width={"100%"}
            display={"flex"}
            justifyContent={["center", "center", "center", "center"]}
          >
            {!gameStart && !gameFinshed ? (
              <></>
            ) : (
              <>
                <Flex
                  gap={5}
                  marginBottom={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <UndoRedoButtons display={["flex", "flex", "flex", "none"]} />
                </Flex>
              </>
            )}
          </GridItem>
        </Grid>
      )}

      <ProjectModal isOpen={isOpen} onClose={onModalClose} />
    </Box>
  );
};

export default Painter;
