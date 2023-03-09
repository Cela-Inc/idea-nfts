import { Grid } from "@chakra-ui/react";
import React from "react";
import HumanityNavBar from "../components/HumanityRocks/HumanityNavBar";

const HumanityRocksCharacters = () => {
  return (
    <>
      <HumanityNavBar />
      <Grid
        background={`url(${
          import.meta.env.VITE_ASSETS_PATH
        }/humanityRocks/images/Background.png)`}
        backgroundColor={"black"}
        paddingTop={24}
        height={"100%"}
        width={"100%"}
      ></Grid>
    </>
  );
};

export default HumanityRocksCharacters;
