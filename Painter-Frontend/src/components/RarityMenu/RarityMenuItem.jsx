import { Box, Flex } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

const RarityMenuItem = ({ children, onClick }) => {
  return (
    <Flex
      _hover={{ opacity: 0.7, cursor: "pointer" }}
      _active={{ opacity: 0.5 }}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={5}
      onClick={() => onClick()}
    >
      <Box>{children}</Box>
      <HiChevronRight fontSize={"1.25em"} color={"#707070"} />
    </Flex>
  );
};

export default RarityMenuItem;
