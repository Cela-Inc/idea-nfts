import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { Divider, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidV4 } from "uuid";
import ModalItem from "./ModalItem";

const MintModalBody = () => {
  const { model, animation, music, background, blockchain } = useCreatorStore();

  const buildRecipt = () => {
    let items = [];

    items.push({
      title: `Model: ${model.title}`,
      price: "0",
    });

    for (const material in model.materialColors) {
      items.push({
        title: `ColorWay: ${material}`,
        price: "0",
      });
    }

    items.push({
      title: `Background: ${background.title}`,
      price: "0",
    });

    if (music.title) {
      items.push({
        title: `Sound Track: ${music.title}`,
        price: "0",
      });
    }

    if (animation.title) {
      items.push({
        title: `Animation: ${animation.title}`,
        price: "0",
      });
    }

    items.push({
      title: `Blockchain: ${blockchain}`,
      price: "0",
    });

    return items;
  };

  return (
    <Flex flexDir={"column"} padding={5} gap={5} paddingRight={24}>
      <Text marginBottom={5} color={"#707070"} fontSize={"14px"}>
        All assets minted will be aadded to your project. Customization adds to
        the uniqueness of your project and assets. All transactions secured
        through blockchain.
      </Text>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        {buildRecipt().map((item) => (
          <ModalItem key={uuidV4()} title={item.title} price={item.price} />
        ))}
      </Flex>
      <Divider position={"relative"} width={"110%"} borderColor={"#707070"} />
      <ModalItem title={"Total Price in USD"} price={245.52} />
      <ModalItem title={"Equivalent Approx. Price in ETH"} price={"0.1 ETH"} />
    </Flex>
  );
};

export default MintModalBody;
