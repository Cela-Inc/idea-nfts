import { Box, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import {
  FaDiscord,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { LinkChain } from "akar-icons";
import SVG_Icon from "../SVG_Icon";
import CustomModal from "../CustomisationMenu/CustomModal";
import { useCreateToast } from "../../hooks/use-create-toast-hook.js";
import { useSocialPost } from "../../hooks/use-social-post.hook";
import { useRef } from "react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";

const SocialModal = ({ isOpen, onClose }) => {
  const {
    postToDiscord,
    copyToClipboard,
    postToTwitter,
    postToLinkedin,
    postToTikTok,
    postToReddit,
    postToFacebook,
  } = useSocialPost();
  const { paintOptions, paintingImage } = usePainterStore();
  const imageRef = useRef();

  return (
    <CustomModal
      size={["sm", "sm", "sm", "xl"]}
      isOpen={isOpen}
      onClose={onClose}
      title={paintOptions.projectName || "Untitled Project"}
      description={
        paintOptions.projectDescription ||
        "Set project description before starting"
      }
      content={
        <Box
          ref={imageRef}
          height={"20rem"}
          width={"fit-content"}
          minW={!paintingImage && ["20rem", "20rem", "20rem", "30rem"]}
          borderColor={!paintingImage && "black"}
          borderWidth={"1px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {paintingImage && <Image maxH={"20rem"} src={paintingImage} />}
          <SVG_Icon
            position={"absolute"}
            bottom={["47%", "45%", "45%", "45%", "45%", "45%", "45%", "45%"]}
            right={["10%", "15%", "15%", "15%", "12%", "12%", "25%"]}
            fileName={"logoV2.svg"}
          />

          <SVG_Icon
            position={"absolute"}
            top={"6%"}
            left={["10%", "15%", "15%", "15%", "12%", "12%", "12%"]}
            fileName={"headphones_line.svg"}
          />
          <SVG_Icon
            position={"absolute"}
            top={"5.5%"}
            right={["4%", "10%", "10%", "15%", "12%", "11%", "25%"]}
            fileName={"draft_not_minted.svg"}
          />
        </Box>
      }
      footer={
        <Flex width={"100%"} justifyContent={"center"}>
          <SimpleGrid
            columns={4}
            gap={4}
            paddingBottom={5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Copy to clipboard */}
            <Button
              variant={"socialButton"}
              background={"white"}
              onClick={() => {
                copyToClipboard(imageRef);
              }}
            >
              <LinkChain fontSize={"1.5em"} />
            </Button>
            {/* Post to twitter */}
            <Button
              variant={"socialButton"}
              background={"blue.twitter"}
              padding={0}
              height={"3rem"}
              width={"3.25rem"}
              onClick={() => {
                postToTwitter(imageRef);
              }}
            >
              <FaTwitter fontSize={"1.25em"} color={"white"} />
            </Button>
            {/* Discord link */}
            <Button
              variant={"socialButton"}
              background={"blue.discord"}
              onClick={() => postToDiscord(imageRef, paintingImage)}
            >
              <FaDiscord fontSize={"1.5em"} color={"white"} />
            </Button>
            {/* Linkedin */}
            <Button
              variant={"socialButton"}
              background={"blue.600"}
              onClick={() => {
                postToLinkedin(imageRef);
              }}
            >
              <FaLinkedinIn color={"white"} fontSize={"1.5em"} />
            </Button>
            {/* extra div to help positioning */}
            <Box></Box>
            {/* post to Instagram
            <Button
              variant={"socialButton"}
              background={"white"}
              onClick={() => postToFacebook(imageRef)}
            >
              <FaInstagram fontSize={"1.5em"} />
            </Button> */}
            {/* Reddit */}
            <Button
              variant={"socialButton"}
              background={"rgba(255, 69, 0, 1)"}
              onClick={() => {
                postToReddit(imageRef);
              }}
            >
              <FaRedditAlien color={"white"} fontSize={"1.5em"} />
            </Button>
            {/* Facebook */}
            <Button
              variant={"socialButton"}
              background={"blue.dark"}
              onClick={() => postToFacebook(imageRef)}
            >
              <FaFacebookF color={"white"} fontSize={"1.5em"} />
            </Button>
            {/* tiktok
            <Button
              variant={"socialButton"}
              background={"white"}
              onClick={console.log}
            >
              <SVG_Icon fileName={"logos_tiktok-icon.svg"} />
            </Button> */}
          </SimpleGrid>
        </Flex>
      }
    />
  );
};

export default SocialModal;
