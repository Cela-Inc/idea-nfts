import { Box } from "@chakra-ui/react";

const OptionContainer = (props) => {
  const { children, ...rest } = props;

  return (
    <Box
      minHeight={"5rem"}
      width={"100%"}
      borderBottomWidth={"1px"}
      borderBottomColor={"black"}
      display={"flex"}
      flexDir={"column"}
      paddingY={8}
      paddingX={4}
      gap={4}
      _hover={{ cursor: "pointer", background: "green.500" }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default OptionContainer;
