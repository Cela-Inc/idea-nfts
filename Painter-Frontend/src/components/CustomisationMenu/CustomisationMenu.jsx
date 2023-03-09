import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import CustomisationMenuList from "./CustomisationMenuList";
import Pagination from "../Pagination";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import CustomMenu from "../CustomMenu";

let PageSize = 6;

const CustomisationMenu = () => {
  const {
    model: { customisableOptions },
  } = useCreatorStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayNum, setArrayNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState(customisableOptions);

  // userCollection === array for pagination
  // const currentList = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return model.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, userCollection]);

  useEffect(() => {
    setSelectedOption(customisableOptions);
  }, [customisableOptions]);

  const onArrowClick = (direction) => {
    if (direction === "left") {
      if (arrayNum - 1 >= 0) return setArrayNum(arrayNum - 1);
    }

    if (arrayNum + 1 <= customisableOptions.length - 1) {
      return setArrayNum(arrayNum + 1);
    }
  };

  return (
    <CustomMenu zIndex={5} variant={"customisation"}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box
          padding={1}
          borderRadius={24}
          _hover={{
            background: "black",
            cursor: "pointer",
          }}
          _active={{
            opacity: 0.75,
          }}
          opacity={arrayNum === 0 ? 0.6 : 1}
          pointerEvents={arrayNum === 0 ? "none" : "all"}
          onClick={() => onArrowClick("left")}
        >
          <HiChevronLeft color={"#AAA"} />
        </Box>
        <Heading
          minWidth={"6rem"}
          userSelect={"none"}
          marginX={6}
          fontSize={"13px"}
          textAlign={"center"}
        >
          {selectedOption[arrayNum].title}
        </Heading>
        <Box
          padding={1}
          borderRadius={24}
          _hover={{
            background: "black",
            cursor: "pointer",
          }}
          _active={{
            opacity: 0.75,
          }}
          opacity={arrayNum === customisableOptions.length - 1 ? 0.6 : 1}
          pointerEvents={
            arrayNum === customisableOptions.length - 1 ? "none" : "all"
          }
          onClick={() => onArrowClick("right")}
        >
          <HiChevronRight color={"#AAA"} />
        </Box>
      </Flex>
      {/* <Pagination
          currentPage={currentPage}
          totalCount={userCollection.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
      <CustomisationMenuList
        optionsList={selectedOption[arrayNum].colors}
        materialName={selectedOption[arrayNum].materialName}
      />
    </CustomMenu>
  );
};

export default CustomisationMenu;
