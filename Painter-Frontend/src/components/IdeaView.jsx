import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import IdeaExperience from "./IdeaExperience";
import AudioPlayer from "./AudioPlayer";
import { memo } from "react";

const ideaViews = ["INVISIBLY", "DOAP", "EXP.NFT", "AUDIO"];

const IdeaView = () => {
  const ideaView = usePainterStore((state) => state.ideaView);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  // Rotates around ideaViews index to choose correct ideaView
  const moveArrow = (direction) => {
    const currentIndex = ideaViews.findIndex((item) => item === ideaView);

    if (direction + currentIndex > ideaViews.length - 1) {
      direction = 0;
    } else if (direction + currentIndex < 0) {
      direction = 3;
    } else {
      direction += currentIndex;
    }

    usePainterStore.setState({ ideaView: ideaViews[direction] });
  };

  return (
    <Flex
      height={"100%"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        position={"fixed"}
        width={["20rem", "20rem", "22rem", "24rem"]}
        left={["10vw", "10vw", "10vw", "24vw", "24vw"]}
        top={"10rem"}
        flexDir={"column"}
        gap={5}
        zIndex={2}
      >
        <Heading
          fontSize={["2xl", "3xl", "5xl", "7xl"]}
          letterSpacing={"0.025em"}
          fontWeight={"extrabold"}
          color={ideaView === "EXP.NFT" ? "#fff" : "#000"}
        >
          {ideaView}
        </Heading>
        <Flex flexDir={"column"} alignItems={"flex-start"} gap={5}>
          {ideaView === "INVISIBLY" && (
            <>
              <Text>
                Community Funding with a focus on privacy, identity &
                trustlessness. Schedule a meeting to learn more.
              </Text>
              <Button
                variant={"outline"}
                onClick={() =>
                  window.open(
                    "https://calendly.com/ideanfts/30-minute",
                    "_blank"
                  )
                }
                colorScheme={"blackAlpha.500"}
              >
                MEETING
              </Button>
            </>
          )}
          {ideaView === "DOAP" && (
            <>
              <Text>
                Cookin up the dopest Web3 projects. Hit us up for collaboration
                opportunities. Book a call below 👇
              </Text>
              <Button
                variant={"outline"}
                onClick={() =>
                  window.open(
                    "https://calendly.com/ideanfts/30-minute",
                    "_blank"
                  )
                }
                colorScheme={"blackAlpha.500"}
              >
                CONTACT US
              </Button>
            </>
          )}
          {ideaView === "EXP.NFT" && (
            <>
              <Text color={"#fff"}>
                From holographic displays to metaverse galleries, NFT Ticketing
                & AI Driven event insights. We partner with the brights minds to
                host Immerside Real Life events to create experience that unlock
                value. Got event IDEAs? Lets chat!
              </Text>
              <Button
                variant={"outline"}
                onClick={() =>
                  window.open(
                    "https://calendly.com/ideanfts/30-minute",
                    "_blank"
                  )
                }
                color={"#fff"}
                colorScheme={"whiteAlpha.500"}
              >
                MEETING
              </Button>
            </>
          )}
          {ideaView === "AUDIO" && (
            <>
              <Text>
                All vibes are better with music. At IDEA NFT sound is at the
                core of our soul. We’re building some amazing music products in
                the web3 space and can’t wait to share with the world! Dropping
                our first project Q1 2023
              </Text>
              <Button
                variant={"outline"}
                onClick={() =>
                  window.open(
                    "https://calendly.com/ideanfts/30-minute",
                    "_blank"
                  )
                }
                colorScheme={"blackAlpha.500"}
              >
                MEETING
              </Button>
              <AudioPlayer
                position={"fixed"}
                width={20}
                bottom={[20, 20, 20, 10]}
                right={10}
                left={"none"}
                song={"/Y2Mate-is-Larry-June-Corte-Madera.mp3"}
                autoPlay={ideaView === "AUDIO"}
              />
            </>
          )}
        </Flex>
      </Flex>
      {!isLargerThan1000 && (
        <Flex
          zIndex={100}
          position={"fixed"}
          justify={"space-around"}
          bottom={"2rem"}
          width={"100vw"}
        >
          <Button
            background={"transparent"}
            onClick={() => moveArrow(-1)}
            color={"gray"}
          >
            <BsArrowLeft fontSize={"2rem"} />
          </Button>
          <Button
            background={"transparent"}
            onClick={() => moveArrow(1)}
            color={"gray"}
          >
            <BsArrowRight fontSize={"2rem"} />
          </Button>
        </Flex>
      )}
      {ideaView === "DOAP" && (
        <Box
          position={["absolute", "absolute", "absolute", "initial"]}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
        >
          <iframe
            style={{ height: "100%", width: "100%" }}
            title='Cocaine Pack (1)'
            frameborder='0'
            allowfullscreen
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
            allow='autoplay; fullscreen; xr-spatial-tracking'
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src='https://sketchfab.com/models/5aaeecba237a41379abdd8d88b3a697e/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0'
          ></iframe>
        </Box>
      )}
      {ideaView === "EXP.NFT" && (
        <Box
          position={["absolute", "absolute", "absolute", "initial"]}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
        >
          <iframe
            style={{ height: "100%", width: "100%" }}
            frameborder='0'
            allowfullscreen
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
            allow='autoplay; fullscreen; xr-spatial-tracking'
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src='https://sketchfab.com/models/3a6f56b9ec7c45e687c5e93bc948d95d/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0'
          ></iframe>
        </Box>
      )}
      {ideaView !== "DOAP" && ideaView !== "EXP.NFT" && (
        <Box
          position={["absolute", "absolute", "absolute", "initial"]}
          top={0}
          width={ideaView === "AUDIO" ? "100%" : "75%"}
          paddingTop={ideaView === "INVISIBLY" ? 32 : 0}
          height={"100%"}
        >
          <Canvas shadows>
            <IdeaExperience ideaView={ideaView} />
          </Canvas>
        </Box>
      )}
    </Flex>
  );
};

export default memo(IdeaView);
