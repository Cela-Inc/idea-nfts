import { Input } from "@chakra-ui/react";

const SearchBar = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <Input
      fontSize={"smaller"}
      fontWeight={400}
      color={"black.body"}
      background='white'
      borderRadius={24}
      textAlign='center'
      size='md'
      _placeholder={{ color: "black.body", opacity: 1 }}
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    ></Input>
  );
};

export default SearchBar;
