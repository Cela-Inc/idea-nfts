import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Switch,
  Text,
} from "@chakra-ui/react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import UnderlinedInput from "../Inputs/UnderlinedInput";
import { HiTrendingUp } from "react-icons/hi/";
import { BsTwitter } from "react-icons/bs";
import { Plus } from "akar-icons";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import useGenerationStore from "../../hooks/use-generation-store.hook";
import { useCreateNft } from "../../hooks/use-create-nft.hook";
import axios from "axios";
import { useCookies } from "react-cookie";
import { takeScreenshot } from "../../utils/takeScreenshot.utils";
import { useCreateToast } from "../../hooks/use-create-toast-hook";

const SaveForm = () => {
  const {
    savedProjects,
    currentProject,
    updateCurrentProjectInfo,
    setProjects,
  } = useCreatorStore();
  const { optionsView, paintingImage, painter } = usePainterStore();
  const { generationText } = useGenerationStore();
  const { createProjectFormParams } = useCreateNft();
  const { selectedImageData } = useGenerationStore();
  const createToast = useCreateToast();
  const [cookies] = useCookies(["token"]);

  const saveHandler = async () => {
    if (!cookies.token) {
      return createToast("Log in to submit project", "error", err.message);
    }

    if (
      currentProject.title !== "" &&
      currentProject.description != "" &&
      currentProject.problem != "" &&
      currentProject.solution != "" &&
      currentProject.track != "" &&
      currentProject.twitter != ""
    ) {
      setProjects({
        id: currentProject.id ? currentProject.id : savedProjects.length,
      });

      let type = "Paint";
      let image = painter?.save();
      switch (optionsView) {
        case "TEXT_IMAGE":
          type = "AI Paint";
          image = selectedImageData?.base64();
          break;
        case "CONFIGURATOR":
          type = "3D Experience";
          image = await takeScreenshot();
          console.log(image);
          image = image.toDataURL();
          break;
        default:
          break;
      }

      const formData = await createProjectFormParams(
        currentProject.title,
        currentProject.title.trim(),
        image,
        currentProject.description,
        currentProject.problem,
        currentProject.solution,
        "ethereum",
        0,
        0,
        0,
        currentProject.twitter,
        currentProject.track
      );

      return await axios
        .post("/api/project/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .then((res) => {
          return createToast(
            "Successfully Submited Project.",
            "success",
            res.data.message
          );
        })
        .catch((err) => {
          return createToast("Failed to Submit Project", "error", err.message);
        });
    }

    return createToast(
      "Failed to Submit Project, be sure to fill all fields in",
      "error"
    );
  };

  return (
    <>
      {optionsView === "TEXT_IMAGE" && (
        <Flex gap={5} width={"115%"} flexDir={"column"}>
          <Box padding={2} textAlign={"center"} backgroundColor={"#F3F3F3"}>
            <Text fontSize={"14px"}>
              {generationText ||
                "A gentleman chihuahua in a 19th century portrait"}
            </Text>
          </Box>

          <Box paddingLeft={14}>
            <Text fontSize={"14px"} mb={2} fontWeight={"bold"} width={"100%"}>
              Drawing Type
            </Text>
            <Box alignSelf={"start"}>
              <Button
                fontWeight={500}
                borderRadius={10}
                background={"white"}
                fontSize={"12px"}
                border={"1px solid rgba(170, 170, 170, 1)"}
              >
                Painting
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
      <Flex
        flexDir={"column"}
        justifyItems={"flex-start"}
        alignItems={"center"}
        gap={"2rem"}
        height={"100%"}
        width={"100%"}
      >
        <UnderlinedInput
          inputText={currentProject.title}
          setInputText={(e) => updateCurrentProjectInfo("title", e)}
          placeHolder='Project Name'
        />
        <UnderlinedInput
          inputText={currentProject.description}
          setInputText={(e) => updateCurrentProjectInfo("description", e)}
          placeHolder='Project Description'
        />
        <UnderlinedInput
          inputText={currentProject.problem}
          setInputText={(e) => updateCurrentProjectInfo("problem", e)}
          placeHolder='Problem'
        />
        <UnderlinedInput
          inputText={currentProject.solution}
          setInputText={(e) => updateCurrentProjectInfo("solution", e)}
          placeHolder='Solution'
        />
        <UnderlinedInput
          isDisabled
          inputText={currentProject.utility}
          setInputText={(e) => updateCurrentProjectInfo("utility", e)}
          placeHolder='Utility'
        />
        <UnderlinedInput
          isDisabled
          inputText={currentProject.supply}
          setInputText={(e) => updateCurrentProjectInfo("supply", e)}
          placeHolder='Supply'
        />
        <Flex
          justifyContent='space-between'
          width={"90%"}
          alignItems={"center"}
          marginBottom={1}
          borderBottom={"1px"}
          borderColor={"gray.icon"}
          borderStyle={"solid"}
          paddingBottom={2}
          opacity={"0.5"}
          _hover={{ cursor: "not-allowed" }}
        >
          <Heading paddingLeft={4} fontWeight={400} fontSize={"lg"}>
            Members
          </Heading>
          {/* <UnderlinedInput
          inputText={currentProject.supply}
          setInputText={(e) => updateCurrentProjectInfo("supply", e)}
          placeHolder='Members'
          isDisabled
          isReadOnly
          _hover={{ cursor: "not-allowed" }}
        /> */}
          <Plus color={"#AAAAAA"} height={"1.25em"} />
        </Flex>
        <Flex
          _hover={{ cursor: "pointer" }}
          width={"90%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={1}
          paddingLeft={4}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            updateCurrentProjectInfo("contest", !currentProject.contest);
          }}
        >
          <Heading fontWeight={400} fontSize={"lg"}>
            Contest
          </Heading>
          <Switch
            isChecked={HiTrendingUp}
            // onChange={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            //   updateCurrentProjectInfo("contest", !currentProject.contest);
            // }}
            colorScheme={"green"}
          />
        </Flex>

        <Accordion width={"90%"} allowToggle>
          <AccordionItem
            borderBottom={"1px"}
            borderBottomColor={"gray.icon"}
            borderTop={"none"}
            marginBottom={8}
          >
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' fontSize={"18px"} textAlign='left'>
                  Track: {currentProject.track}
                </Box>
                <AccordionIcon color={"#aaa"} />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                Defiy
              </Button>
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                Impact
              </Button>
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                NFT
              </Button>
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                Tooling
              </Button>
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                DAO
              </Button>
              <Button
                variant={"trackButton"}
                onClick={(e) =>
                  updateCurrentProjectInfo("track", e.target.textContent)
                }
              >
                Gaming
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem isDisabled marginTop={3} borderTop={"none"}>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' fontSize={"18px"} textAlign='left'>
                  Chain
                </Box>
                <AccordionIcon marginLeft={5} color={"#aaa"} />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            ></AccordionPanel>
          </AccordionItem>
        </Accordion>

        <InputGroup paddingLeft={8}>
          <InputLeftElement
            textAlign={"right"}
            width={"15%"}
            paddingLeft={10}
            pointerEvents={"none"}
            children={<BsTwitter fontSize={"1.25em"} color={"#1D9BF0"} />}
          />
          <UnderlinedInput
            inputText={currentProject.twitter}
            setInputText={(e) => updateCurrentProjectInfo("twitter", e)}
            placeHolder='@'
            paddingLeft={10}
          />
        </InputGroup>

        <Box width={"85%"}>
          <Button
            paddingY={5}
            paddingX={7}
            variant={"ideaButton"}
            onClick={() => saveHandler()}
          >
            Save Changes
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SaveForm;
