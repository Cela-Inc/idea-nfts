import React from "react";
import { Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import SVG_Icon from "../../SVG_Icon";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";
import { BsArrowUpRight } from "react-icons/bs";

const IdeaLetter = ({ fileName, title, showText, onClose }) => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Grid
      templateColumns={"1fr"}
      _hover={{ cursor: "pointer" }}
      onClick={() => {
        if (title === "Experiences") title = "EXP.NFT";
        usePainterStore.setState({ ideaView: title.toUpperCase() });

        if (!isLargerThan1000) {
          onClose();
        }
      }}
      width={"100%"}
      borderBottom={!isLargerThan1000 && "solid"}
      borderBottomWidth={!isLargerThan1000 && "1px"}
    >
      <GridItem
        paddingLeft={!isLargerThan1000 && "2rem"}
        display={"flex"}
        alignSelf={"center"}
        alignItems={!isLargerThan1000 ? "flex-end" : "center"}
        paddingY={!isLargerThan1000 ? 10 : 5}
        width={"100%"}
      >
        <SVG_Icon
          height={!isLargerThan1000 ? "5rem" : "initial"}
          fileName={fileName}
          marginRight={5}
        />
        {showText && (
          <Text
            color={"rgba(112, 112, 112, 1)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            fontSize={!isLargerThan1000 ? "2.5em" : "initial"}
          >
            {title}
            {!isLargerThan1000 && (
              <BsArrowUpRight
                color={"rgba(112, 112, 112, 1)"}
                display={"inline"}
              />
            )}
          </Text>
        )}
      </GridItem>
    </Grid>
  );
};

export default IdeaLetter;
