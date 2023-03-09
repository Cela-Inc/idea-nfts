import { Box, Fade } from "@chakra-ui/react";
import { useMenuStore } from "../hooks/use-menu-store.hook";
import {
  AnimationsMenu,
  AssetsMenu,
  BackgroundsMenu,
  BlockchainMenu,
  MusicMenu,
} from "./MenuTabs";

const MenuList = () => {
  const { menu, setMenu } = useMenuStore();

  return (
    <Box
      w={"100%"}
      h={"100%"}
      zIndex={100}
      onClick={() => {
        return setMenu("");
      }}
      position={"fixed"}
      bottom={0}
      top={0}
      left={0}
      display={menu === "" ? "none" : "initial"}
    >
      <Fade in={menu !== ""} unmountOnExit={menu === ""}>
        <Box
          background={"white"}
          position='fixed'
          width={"25%"}
          bottom={10}
          top={10}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          padding={10}
          boxShadow={"0px 2px 3px black"}
          right={"7rem"}
          onClick={(e) => e.stopPropagation()}
        >
          {menu === "animations" && <AnimationsMenu />}
          {menu === "assets" && <AssetsMenu />}
          {menu === "background" && <BackgroundsMenu />}
          {menu === "blockchain" && <BlockchainMenu />}
          {menu === "music" && <MusicMenu />}
        </Box>
      </Fade>
    </Box>
  );
};

export default MenuList;
