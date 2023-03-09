import { useEffect, lazy } from "react";
import {
  Button,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  useMediaQuery,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuItemOption,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import SVG_Icon from "./SVG_Icon";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { useSettingsStore } from "../hooks/use-settings-store.hook";
import { usePainterStore } from "../hooks/use-painter-store.hook";
import { useCreateToast } from "../hooks/use-create-toast-hook";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
} from "@thirdweb-dev/react";

const MobileIdeaOptions = lazy(() => import("./MobileViews/MobileIdeaOptions"));
const MobileNav = lazy(() => import("./MobileViews/MobileNav"));

// TODO: Refactor NavBar and MobileNav.. DRY principles
const NavBar = () => {
  const { optionsView, currentPage } = usePainterStore();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: ideaIsOpen,
    onClose: ideaOnClose,
    onOpen: ideaOnOpen,
  } = useDisclosure();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { user, Paper, paperUserDetails, setPaperUserDetails } =
    userUserInfoStore();
  const navigate = useNavigate();
  const address = useAddress();
  const disconnect = useDisconnect();
  const createToast = useCreateToast();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbase = useCoinbaseWallet();

  const logout = async () => {
    try {
      await axios.post(
        "/api/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    removeCookie("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (address) {
      createToast("EVM Wallet Connected", "success");
    }
  }, [address]);

  useEffect(() => {
    const getPaperUserStatus = async () => {
      const userStatus = await Paper.getUserStatus();

      if (userStatus) {
        setPaperUserDetails(userStatus);
      }
    };

    getPaperUserStatus();
  }, [cookies, user]);

  // ! TODO: Swap out metamask for paper.xyz
  return (
    <Flex
      position={"absolute"}
      width={"100%"}
      zIndex={2}
      paddingX={"4.25rem"}
      height={"5.5rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px"}
      borderStyle={"solid"}
      borderColor={"black"}
      background={"#fff"}
    >
      <Button
        padding={0}
        onClick={() => {
          if (optionsView === "IDEA") {
            if (isLargerThan1000) {
              navigate("/");
              return usePainterStore.setState({
                optionsView: "OPTIONS",
                currentPage: "PAINTER",
              });
            }

            ideaOnOpen();
            return navigate("/");
          }

          useSettingsStore.setState({ audioPlayedOnce: false });
          usePainterStore.setState({
            optionsView: "IDEA",
          });
          navigate("/idea");
        }}
        background={"transparent"}
        _active={{ background: "transparent" }}
      >
        <SVG_Icon fileName={"logoV2.svg"} width={"10rem"} />
      </Button>
      {isLargerThan1000 ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Link
            onClick={() => {
              navigate("/");
              return usePainterStore.setState({
                optionsView: "OPTIONS",
                currentPage: "PAINTER",
              });
            }}
            marginRight={10}
          >
            Play
          </Link>

          <Link href={"/about"} marginRight={10}>
            About
          </Link>

          <Link href={"/leaderboard"} marginRight={10}>
            Leaderboard
          </Link>
          {/* Login sign up */}
          {user ? (
            <>
              <Text>Credits: {user.credits}</Text>
              <Menu>
                <MenuButton
                  marginX={4}
                  as={IconButton}
                  borderRadius={"50%"}
                  borderWidth={"1px"}
                  borderColor={"#000"}
                  padding={0}
                  height={"1.5rem"}
                  minWidth={"1.5rem"}
                  aria-label='Options'
                  icon={<SVG_Icon fileName={"person_outline.svg"} />}
                  _hover={{ background: "green" }}
                  _active={{ background: "green" }}
                  variant='outline'
                />
                <MenuList borderColor={"#000"}>
                  <MenuItem
                    onClick={() => {
                      navigate("/user");
                    }}
                  >
                    Profile
                  </MenuItem>
                  {!address && (
                    <MenuGroup defaultValue='asc' title={"Wallet Connection"}>
                      <MenuItemOption
                        value='metamask'
                        isChecked={false}
                        onClick={connectWithMetamask}
                      >
                        Metamask
                      </MenuItemOption>
                      <MenuItemOption
                        isChecked={false}
                        value='walletConnect'
                        onClick={connectWithWalletConnect}
                      >
                        Wallet Connect
                      </MenuItemOption>
                      <MenuItemOption
                        isChecked={false}
                        value='coinbase'
                        onClick={connectWithCoinbase}
                      >
                        Coinbase
                      </MenuItemOption>
                    </MenuGroup>
                  )}
                  {address && (
                    <MenuItem
                      onClick={async () => {
                        await disconnect();
                        createToast("EVM Wallet Disconnected", "warning");
                      }}
                    >
                      Disconnect Wallet
                    </MenuItem>
                  )}
                  {/* {paperUserDetails?.status ===
                    UserStatus.LOGGED_IN_WALLET_INITIALIZED && (
                    <MenuItem
                      onClick={() =>
                        window
                          .open("https://paper.xyz/wallet", "_blank")
                          .focus()
                      }
                    >
                      View Paper Wallet
                    </MenuItem>
                  )} */}

                  {/* {(paperUserDetails?.status === UserStatus.LOGGED_OUT ||
                    !address) && (
                    <MenuItem
                      onClick={async () => {
                        await Paper.auth.loginWithOtp();

                        setTimeout(async () => {
                          const userStatus = await Paper.getUserStatus();

                          setPaperUserDetails(userStatus);

                          createToast("Paper wallet connected", "success");
                        }, 250);
                      }}
                    >
                      Connnect Paper Wallet
                    </MenuItem>
                  )} */}
                  {paperUserDetails?.status ===
                    UserStatus.LOGGED_IN_NEW_DEVICE && (
                    <MenuItem
                      onClick={async () => {
                        await Paper.initializeUser();

                        const userStatus = await Paper.getUserStatus();

                        setPaperUserDetails(userStatus);

                        createToast("Paper wallet initialized", "success");
                      }}
                    >
                      initialize Paper Wallet
                    </MenuItem>
                  )}
                  {(paperUserDetails?.status ===
                    UserStatus.LOGGED_IN_WALLET_INITIALIZED ||
                    paperUserDetails?.status ===
                      UserStatus.LOGGED_IN_NEW_DEVICE) && (
                    <MenuItem
                      onClick={async () => {
                        await Paper.auth.logout();

                        setPaperUserDetails(null);

                        createToast("Disconnected Paper Wallet", "warning");
                      }}
                    >
                      Disconnect Wallet
                    </MenuItem>
                  )}
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
              fontWeight={"normal"}
              padding={0}
              marginRight={10}
              background={"transparent"}
              onClick={() => navigate("/auth/login")}
            >
              Login|Signup
            </Button>
          )}
          <Button
            _hover={{ background: "#1DA1F2" }}
            variant={"roundOutline"}
            onClick={() => {
              window.open("https://twitter.com/IDEA_NFTs", "_blank").focus();
            }}
          >
            <AiOutlineTwitter />

            <script
              async
              src='https://platform.twitter.com/widgets.js'
            ></script>
          </Button>
          <Button
            _hover={{ background: "#7289DA" }}
            variant={"roundOutline"}
            marginX={4}
            onClick={() =>
              window.open("https://discord.gg/TtGm2vWw", "_blank").focus()
            }
          >
            <FaDiscord />
          </Button>
          {paperUserDetails?.status ===
            UserStatus.LOGGED_IN_WALLET_INITIALIZED && (
            <Text>
              {paperUserDetails?.data?.walletAddress?.slice(0, 15)}...
            </Text>
          )}
          {address && <Text>{address.slice(0, 15)}...</Text>}
        </Flex>
      ) : currentPage !== "IDEA" ? (
        <>
          <Button
            _active={{ background: "transparent" }}
            background={"transparent"}
            onClick={onOpen}
          >
            Menu
          </Button>
          <MobileNav isOpen={isOpen} onClose={onClose} />
        </>
      ) : (
        <>
          <Button
            border={"solid"}
            padding={0}
            marginRight={"1rem"}
            borderWidth={"1px"}
            borderRadius={"50%"}
            position={"relative"}
            height={8}
            minWidth={8}
            onClick={() =>
              usePainterStore.setState({
                optionsView: "OPTIONS",
                currentPage: "PAINTER",
              })
            }
          >
            <SVG_Icon fileName={"closeButton.svg"} />
          </Button>
          <MobileIdeaOptions isOpen={ideaIsOpen} onClose={ideaOnClose} />
        </>
      )}
    </Flex>
  );
};

export default NavBar;
