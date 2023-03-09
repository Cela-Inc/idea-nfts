import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import SVG_Icon from "./SVG_Icon";
import { FiCheck, FiX } from "react-icons/fi";
import SocialModal from "./CardView/SocialModal";
import MintModal from "./MintButton/MintModal";
import useGenerationStore from "../hooks/use-generation-store.hook";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import ProjectsBtn from "./ProjectsMenu/ProjectsBtn";

const TextToImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenMint,
    onOpen: onOpenMint,
    onClose: onCloseMint,
  } = useDisclosure();
  const toast = useToast();

  const { generatedImages, selectedImageData } = useGenerationStore();
  const { generatedRemixOptions } = usePainterStore();

  return (
    <Grid
      height={"100%"}
      width={"100%"}
      paddingTop={36}
      gap={5}
      templateColumns={["1fr", "1fr", "1fr", "0.75fr 1fr"]}
    >
      <GridItem
        display={"flex"}
        justifyContent={"center"}
        height={"fit-content"}
        colSpan={[2, 2, 2, 1]}
      >
        <Box
          width={"fit-content"}
          boxShadow={"3px 3px 0px #1A1A1A"}
          border={"1px solid black"}
          padding={12}
        >
          <Image
            minHeight={!selectedImageData?.base64 && "25rem"}
            width={["15.5rem", "15rem", "20rem", "22.5rem"]}
            src={
              selectedImageData?.base64 &&
              "data:image/png;base64," + selectedImageData.base64
            }
          />
          <Box
            background={"white"}
            paddingX={[2, 4, 4, 4]}
            paddingY={2}
            borderRadius={6}
            border={"1px solid black"}
            position={"relative"}
            bottom={5}
            left={"70%"}
            width={[20, 24, 24, 32]}
          >
            <SVG_Icon fileName={"logoV2.svg"} />
          </Box>
        </Box>
      </GridItem>
      <GridItem padding={[5, 5, 0, 0]}>
        <Box top={32} position={"absolute"}>
          <ProjectsBtn />
        </Box>
        <Flex flexDir={"column"} gap={5}>
          <Text>Variations</Text>
          <SimpleGrid columns={[2, 3, 4, 5]} gap={[5, 5, 3, 5]}>
            {generatedImages.map((item, index) => {
              return (
                <Box
                  key={index}
                  _hover={{ borderWidth: "2px", cursor: "pointer" }}
                  border={"1px solid black"}
                  padding={[5, 5, 5, 3, 5]}
                  onClick={() => {
                    useGenerationStore.setState({ selectedImageData: item });
                  }}
                >
                  <Image src={"data:image/png;base64," + item.base64} />
                </Box>
              );
            })}
          </SimpleGrid>
          <Flex marginTop={10} alignItems='center' gap={5}>
            <Text>Are you satisfied with this result?</Text>
            <Button
              radius={"50%"}
              padding={0}
              minWidth={5}
              height={5}
              border={"1px solid gray"}
            >
              <FiCheck color={"green"} />
            </Button>
            <Button
              radius={"50%"}
              padding={0}
              minWidth={5}
              height={5}
              border={"1px solid gray"}
            >
              <FiX color={"red"} />
            </Button>
          </Flex>
        </Flex>
        <Button
          marginTop={10}
          variant={"ideaButton"}
          background={"white"}
          paddingY={1}
          paddingX={5}
          borderRadius={8}
          onClick={onOpen}
        >
          Share
        </Button>
        <Flex marginTop={10} gap={8} alignItems={"center"}>
          <Button
            disabled={!selectedImageData?.base64}
            onClick={onOpenMint}
            variant={"ideaButton"}
            paddingY={5}
          >
            Mint Now
          </Button>
          <Button
            paddingY={5}
            variant={"ideaButton"}
            color={"white"}
            background={"purple.light"}
            disabled={!selectedImageData?.base64}
            onClick={() => {
              const index = generatedRemixOptions.findIndex((item) => {
                return item.seed === selectedImageData.seed;
              });

              if (index === -1) {
                usePainterStore.setState({
                  generatedRemixOptions: [
                    ...generatedRemixOptions,
                    selectedImageData,
                  ],
                });

                localStorage.setItem(
                  "generatedImages",
                  JSON.stringify([...generatedRemixOptions, selectedImageData])
                );

                return toast({
                  title: "Image added to generated remix options",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }

              toast({
                title: "Image already added",
                status: "warning",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            Remix
          </Button>
        </Flex>
      </GridItem>
      <SocialModal
        isOpen={isOpen}
        onClose={onClose}
        projectDetails={{
          projectName: "Ai Generated Art",
          projectDescription:
            "A gentleman chihuahua in a 19th century portrait",
          paintingImage: "data:image/png;base64," + selectedImageData.base64,
        }}
      />
      <MintModal
        isOpen={isOpenMint && selectedImageData.base64}
        onClose={onCloseMint}
        nftDraft={{
          image: "data:image/png;base64," + selectedImageData.base64,
          name: "AI Generated Image",
          imageNft: {
            paintingImage: "data:image/png;base64," + selectedImageData.base64,
            projectName: "AI Generated Image",
            projectDescription: "",
          },
        }}
        isAIGenerated={true}
      />
    </Grid>
  );
};

export default TextToImage;
