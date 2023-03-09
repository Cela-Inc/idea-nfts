import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import IdeaButton from "./Inputs/IdeaButton";

const ConnectWalletButton = () => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {!address ? (
        <IdeaButton
          onClick={() => {
            return connectWithMetamask();
          }}
          marginLeft={isLargerThan800 ? 5 : 0}
          padding={"0.25rem 2.25rem 0.25rem 2.25rem"}
          variant={"saveBtn"}
        >
          Connect Wallet
        </IdeaButton>
      ) : (
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
              <Text>{address.slice(0, 15)}...</Text> <IoChevronDownOutline />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>My Projects</MenuItem>
            <MenuItem
              onClick={() => {
                disconnect();
              }}
            >
              Disconnect Wallet
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default ConnectWalletButton;
