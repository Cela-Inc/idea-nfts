import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import OptionContainer from "./OptionContainer";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";
import axios from "axios";
import useGenerationStore from "../../../hooks/use-generation-store.hook";
import { useState } from "react";

const TextImageView = ({ setView }) => {
  const { generationText } = useGenerationStore();
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      if (generationText.length < 0) {
        return;
      }

      const res = await axios.post("/api/nfts/textToImage", {
        userInput: generationText,
      });

      useGenerationStore.setState({
        generatedImages: [...res.data.images.artifacts],
        selectedImageData: res.data.images.artifacts[0],
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Flex flexDir={"column"} width={"100%"} height={"100%"}>
      <OptionContainer>
        <Text fontWeight={"semibold"}>Text to Image</Text>
      </OptionContainer>
      {/* generation container */}
      <Flex
        marginTop={10}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Textarea
          padding={10}
          resize={"none"}
          width={["90%", "", "", ""]}
          borderRadius={0}
          placeholder='A gentleman chihuahua in a 19th century portrait'
          height={48}
          marginBottom={1}
          onChange={(e) =>
            useGenerationStore.setState({ generationText: e.target.value })
          }
        />
        <Text
          mt={[2, 0, 0, 0]}
          fontWeight={"bold"}
          width={"100%"}
          paddingLeft={5}
        >
          Drawing Type
        </Text>
        <Box padding={5} alignSelf={"start"}>
          <Button
            fontWeight={500}
            borderRadius={10}
            border={"1px solid rgba(170, 170, 170, 1)"}
          >
            Painting
          </Button>
        </Box>
      </Flex>
      <Button
        marginLeft={5}
        marginTop={10}
        paddingY={5}
        paddingX={8}
        alignSelf={"start"}
        variant={"ideaButton"}
        onClick={generate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </Button>
      {/* Go back to painter*/}
      <Button
        onClick={() => {
          if (setView) {
            usePainterStore.setState({ currentPage: "PAINTER" });
            return setView("OPTIONS");
          }
        }}
        marginTop={"4.5rem"}
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

export default TextImageView;
