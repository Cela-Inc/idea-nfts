import { Flex, Text } from "@chakra-ui/react";

const ModalItem = ({ title, price }) => {
  return (
    <Flex width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
      <Text fontSize={"14px"}>{title}</Text>
      <Text fontWeight={600}>${price}</Text>
    </Flex>
  );
};

export default ModalItem;
