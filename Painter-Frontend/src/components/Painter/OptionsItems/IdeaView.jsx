import { Button, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";
import SVG_Icon from "../../SVG_Icon";
import IdeaLetter from "./IdeaLetter";

const IdeaView = ({ onClose }) => {
  const { ideaView } = usePainterStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Flex flexDir={"column"} width={!isLargerThan1000 && "100%"}>
        {!isLargerThan1000 && (
          <Flex
            borderBottom={"solid"}
            borderBottomWidth={"1px"}
            borderBottomColor={"black"}
            width={"100%"}
            justifyContent={"flex-end"}
            alignContent={"flex-start"}
            height={"5rem"}
          >
            <Button
              border={"solid"}
              padding={0}
              marginRight={"2rem"}
              borderWidth={"1px"}
              borderRadius={"50%"}
              position={"relative"}
              height={8}
              minWidth={8}
              onClick={() => {
                onClose();
              }}
            >
              <SVG_Icon padding={0} margin={0} fileName={"closeButton.svg"} />
            </Button>
          </Flex>
        )}
        <IdeaLetter
          fileName={"idea_I.svg"}
          title={"Invisibly"}
          showText={ideaView === "INVISIBLY" || !isLargerThan1000}
          onClose={onClose}
        />
        <IdeaLetter
          fileName={"idea_D.svg"}
          title={"Doap"}
          showText={ideaView === "DOAP" || !isLargerThan1000}
          onClose={onClose}
        />
        <IdeaLetter
          fileName={"idea_E.svg"}
          title={"Experiences"}
          showText={ideaView === "EXP.NFT" || !isLargerThan1000}
          onClose={onClose}
        />
        <IdeaLetter
          fileName={"idea_A.svg"}
          title={"Audio"}
          showText={ideaView === "AUDIO" || !isLargerThan1000}
          onClose={onClose}
        />
      </Flex>
      {isLargerThan1000 && (
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Text>© IDEA NFTs 2023</Text>
          <Link href={"https://www.idea.thecela.com/terms"}>Terms of Use</Link>
          <Link href={"https://idea-nfts.com/privacy-policy"}>
            Privacy Policy
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default IdeaView;
