import {
  Button,
  Flex,
  Box,
  useDisclosure,
  Collapse,
  useMediaQuery,
  Text,
  Heading,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useCreatorStore } from "../hooks/use-creator-store.hook";
import { useMenuStore } from "../hooks/use-menu-store.hook";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import BrushSizeSlider from "./Painter/BrushSizeSlider";
import ColorPicker from "./Painter/ColorPicker";
import SCG_Icon from "./SVG_Icon";
import { Save } from "@carbon/icons-react";
import HelpBar from "./Painter/HelpBar";
import MintButton from "./MintButton/MintButton";
import UndoRedoButtons from "./Painter/UndoRedoButtons";
import AudioPlayer from "./AudioPlayer";
import { useLocation } from "react-router-dom";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { useCreateNft } from "../hooks/use-create-nft.hook";
import axios from "axios";
import { useCookies } from "react-cookie";
// import { RiSpaceShipFill } from "react-icons/ri";
import CustomModal from "./CustomisationMenu/CustomModal";
import IdeaButton from "./Inputs/IdeaButton";

const painterMenuBtns = [
  {
    title: "painter",
    element: <SCG_Icon minWidth={"30px"} fileName={"/PaintBrush.svg"} />,
  },
];

const createBtns = [
  {
    title: "assets",
    element: <SCG_Icon fileName={"/assets_icon.svg"} alt='Assets' />,
  },
  {
    title: "background",
    element: <SCG_Icon fileName={"/backgrounds_icon.svg"} alt='Backgrounds' />,
  },
  {
    title: "music",
    element: <SCG_Icon fileName={"/music_icon.svg"} alt='Music' />,
  },
  // {
  //   title: "animations",
  //   element: <SCG_Icon fileName={"/animations_icon.svg"} alt='Animations' />,
  // },
  // {
  //   title: "blockchain",
  //   element: <SCG_Icon fileName={"/blockchain_icon.svg"} alt='Blockchains' />,
  // },
  // {
  //   title: "Humanity Rocks",
  //   element: <RiSpaceShipFill />,
  // },
];

const SideBar = (props) => {
  const { setMenu, menu } = useMenuStore();
  const { setUsePainter, usePainter } = useCreatorStore();
  const {
    pickerVisible,
    sliderVisible,
    handleSideMenus,
    gameStart,
    paintingImage,
    projectDetails,
    gameFinished,
    optionsView,
  } = usePainterStore();
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: saveDraftModalIsOpen, onClose, onOpen } = useDisclosure();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { user } = userUserInfoStore();
  const { createFormParams } = useCreateNft();
  const [cookies] = useCookies(["token"]);
  const location = useLocation();

  const getBtns = () => {
    if (optionsView === "CONFIGURATOR") {
      return createBtns;
    }

    return painterMenuBtns;
  };

  const saveHandler = async () => {
    try {
      if (!paintingImage) {
        throw new Error("Complete a painting to save to drafts");
      }

      const formParams = await createFormParams(
        paintingImage,
        projectDetails.paintingName,
        projectDetails.paintingDescription
      );

      const data = await axios.post("/api/nfts/draft", formParams, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      usePainterStore.setState({
        alertOptions: {
          type: "success",
          message: "Draft Saved",
          showAlert: true,
        },
      });
    } catch (error) {
      usePainterStore.setState({
        alertOptions: {
          type:
            error.message === "Complete a painting to save to drafts"
              ? "warning"
              : "error",
          message: error.message || "Failed to save draft",
          showAlert: true,
        },
      });
    }
  };

  return (
    <>
      <Flex
        height={"100%"}
        width={"100%"}
        flexDir={"column"}
        justifyContent={["center", "center", "center", "flex-start"]}
        alignItems={"center"}
        gap={[7, 7, 7, 10]}
        borderLeft={[0, 0, 0, "1px"]}
        paddingTop={["1.5rem", "1.5rem", "1.5rem", 24]}
        borderTop={["1px", "1px", "1px", 0]}
        borderStyle={"solid"}
        borderColor={"rgb(0, 0, 0)"}
      >
        <Flex
          flexDir={["row", "row", "row", "column"]}
          justifyContent={["center", "center", "center", "flex-start"]}
          alignItems={"center"}
          gap={8}
          width={"100%"}
        >
          {getBtns().map((item) => (
            <Button
              display={
                !isLargerThan1000 && item.title === "painter"
                  ? "none"
                  : "initial"
              }
              padding={0}
              minWidth={"1.75rem"}
              variant={"iconBtn"}
              key={uuidv4()}
              onClick={() => {
                if (usePainter && item.title !== "painter") {
                  return;
                }

                if (item.title === "painter") {
                  onToggle();
                  setMenu("");
                  return setUsePainter(!usePainter);
                }

                if (menu === item.title) {
                  return setMenu("");
                }

                setMenu(item.title);
              }}
            >
              {item.element}
            </Button>
          ))}
          <Collapse in={isLargerThan1000 ? isOpen : true} animateOpacity>
            <Flex
              flexDir={["row", "row", "row", "column"]}
              justifyContent={["center", "center", "center", "flex-start"]}
              alignItems={"center"}
              gap={8}
              marginRight={["2.25rem", "2.25rem", "2.25rem", "0"]}
            >
              {(pickerVisible || sliderVisible) && (
                <Box
                  position={"absolute"}
                  top={["", 0]}
                  right={0}
                  bottom={[0, ""]}
                  width={"100vw"}
                  height={"100vh"}
                  zIndex={1}
                  display={"block"}
                  onMouseDown={() => {
                    if (pickerVisible || sliderVisible) handleSideMenus();
                  }}
                  onTouchStart={() => {
                    if (pickerVisible || sliderVisible) handleSideMenus();
                  }}
                ></Box>
              )}
              <ColorPicker
                pickerVisible={pickerVisible}
                setPickerVisible={handleSideMenus}
              />
              <BrushSizeSlider
                showSlider={sliderVisible}
                setShowSlider={handleSideMenus}
              />
              <UndoRedoButtons display={["none", "none", "none", "flex"]} />
              <Button
                width={"2rem"}
                height={"2rem"}
                padding={"0.25rem"}
                fontSize={"0.75em"}
                variant={"roundOutline"}
                borderColor={"rgba(170, 170, 170, 1)"}
                transform={"matrix(-1, 0, 0, 1, 0, 0)"}
                disabled={!gameStart}
                onClick={() => {
                  if (!user) {
                    usePainterStore.setState({
                      alertOptions: {
                        type: "warning",
                        message: "Log in or sign up to save a draft!",
                        showAlert: true,
                      },
                    });
                  }
                  usePainterStore.setState({
                    timerPaused: true,
                  });
                  onOpen();
                }}
              >
                <Save
                  style={{
                    width: "2.1rem",
                    height: "2.1rem",
                    color: "rgba(170, 170, 170, 1)",
                  }}
                />
              </Button>
            </Flex>
          </Collapse>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          display={["flex", "flex", "flex", "none"]}
          gap={10}
          borderTop={"solid"}
          borderTopWidth={"1px"}
          borderTopColor={"gray"}
          paddingY={5}
          width={"100%"}
        >
          {/* Audio Button */}
          <AudioPlayer
            autoPlay={gameStart}
            song={"/CO__House_Idea_NFT__.mp3"}
            position={"relative"}
            bottom={"none"}
            left={"none"}
            paddingX={4}
            paddingY={4}
          />
          <HelpBar />
          <MintButton />
        </Flex>
        {/* Save draft handler  */}
        <CustomModal
          isOpen={saveDraftModalIsOpen}
          onClose={() => {
            usePainterStore.setState({
              timerPaused: false,
            });

            onClose();
          }}
          content={<Heading>Are you sure ?</Heading>}
          description={
            <Text>
              {!gameFinished
                ? "Your IDEA is still unfinished !"
                : "Your draft will be viewable in your profile page"}
            </Text>
          }
          footer={
            <>
              <IdeaButton
                paddingY={1}
                width={"6rem"}
                marginRight={5}
                onClick={() => {
                  usePainterStore.setState({
                    timerPaused: false,
                  });

                  onClose();
                }}
              >
                Resume
              </IdeaButton>
              <IdeaButton
                paddingY={1}
                width={"5rem"}
                backgroundColor={"transparent"}
                onClick={saveHandler}
              >
                Save
                <Save
                  style={{
                    width: "2.1rem",
                    height: "2.1rem",
                    color: "rgba(170, 170, 170, 1)",
                  }}
                />
              </IdeaButton>
            </>
          }
        />
      </Flex>
    </>
  );
};

export default SideBar;
