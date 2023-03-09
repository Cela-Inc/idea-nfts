import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { ChainId } from "@thirdweb-dev/react";
import MenuItem from "./MenuItem";

const chains = [
  // { title: "Goerli", image: "/ethereum_logo.svg", chain: ChainId.Goerli },
  { title: "Mumbai", image: "/polygon_logo.svg", chain: ChainId.Mumbai },
  // { title: "Fuji", image: "/fuji_logo.svg", chain: ChainId.Avalanche },
];
const BlockchainMenu = () => {
  const { blockchain, setBlockchain } = useCreatorStore();
  const [searchTerm, setSearchTerm] = useState("");
  // const [, switchNetwork] = useNetwork();
  // const connectWithMetamask = useMetamask();
  // const address = useAddress();

  return (
    <MenuItem
      searchTerm={searchTerm}
      setSearchTerm={(e) => setSearchTerm(e)}
      placeholder={"Search chains"}
      columns={[2]}
    >
      {chains.map((item) => (
        <Flex
          key={uuidv4()}
          flexDir={"column"}
          justifyContent='center'
          alignItems={"center"}
          gap={7}
          margin={5}
          display={
            searchTerm === ""
              ? "flex"
              : item.title.includes(searchTerm)
              ? "flex"
              : "none"
          }
          _hover={{
            opacity: "0.75",
            cursor: "pointer",
          }}
          _active={{
            opacity: "0.5",
          }}
          onClick={() => {
            // if (!address) {
            //   connectWithMetamask();
            // }

            // switchNetwork(item.chain);
            setBlockchain({ title: item.title, chainId: item.chain });
          }}
        >
          <Image
            borderRadius={10}
            height={"5rem"}
            width={"8rem"}
            alt={item.title}
            src={import.meta.env.VITE_ASSETS_PATH + "/svgs" + item.image}
          />
          <Text
            fontSize={"smaller"}
            fontWeight={blockchain === item.title ? 400 : 300}
            opacity={blockchain === item.title ? 1 : 0.5}
          >
            {item.title}
          </Text>
        </Flex>
      ))}
    </MenuItem>
  );
};

export default BlockchainMenu;
