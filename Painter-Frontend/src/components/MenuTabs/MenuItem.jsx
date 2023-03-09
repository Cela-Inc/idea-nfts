import { Flex, SimpleGrid } from "@chakra-ui/react";
import SearchBar from "../Inputs/SearchBar";

const MenuItem = ({
  searchTerm,
  setSearchTerm,
  placeholder,
  children,
  columns,
}) => {
  return (
    <Flex
      marginTop={8}
      gap={10}
      flexDir={"column"}
      justifyContent='center'
      alignItems={"center"}
      width={"20rem"}
    >
      <SearchBar
        placeholder={placeholder}
        searchTerm={searchTerm}
        setSearchTerm={(e) => setSearchTerm(e)}
      />
      <SimpleGrid columns={columns} gap={5}>
        {children}
      </SimpleGrid>
    </Flex>
  );
};

export default MenuItem;
