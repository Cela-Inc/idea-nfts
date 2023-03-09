import { Box, Button, DrawerCloseButton, Link } from "@chakra-ui/react";
import SVG_Icon from "../SVG_Icon";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import CustomDrawer from "../CustomisationMenu/CustomDrawer";
import { userUserInfoStore } from "../../hooks/use-userInfo-store.hook";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import { useEffect, useState } from "react";
import {
  useAddress,
  useCoinbaseWallet,
  useDisconnect,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { useCreateToast } from "../../hooks/use-create-toast-hook";

const Body = ({ onClose }) => {
  const { user, Paper } = userUserInfoStore();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [paperUserDetails, setPaperUserDetails] = useState();
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbase = useCoinbaseWallet();
  const disconnect = useDisconnect();
  const createToast = useCreateToast();

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
    forceUpdate();
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
  }, []);

  return (
    <>
      <Link
        onClick={() => {
          usePainterStore.setState({
            currentPage: "PAINTER",
            optionsView: "OPTIONS",
          });
          navigate("/");
          onClose();
        }}
      >
        Play
      </Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/leaderboard"} marginRight={10}>
        Leaderboard
      </Link>
      {/* Login sign up */}
      {!user && (
        <Button
          fontWeight={"hairline"}
          fontSize={"1em"}
          padding={0}
          background={"transparent"}
          marginRight={10}
          onClick={() => {
            navigate("/auth/login");
            onClose();
          }}
        >
          Login|Signup
        </Button>
      )}
      {user && (
        <>
          <Button
            background={"transparent"}
            fontWeight={"hairline"}
            fontSize={"1em"}
            padding={0}
            marginRight={10}
            onClick={() => {
              navigate("/user");
              onClose();
            }}
          >
            Profile
          </Button>
          {!address && (
            <>
              <Button
                background={"transparent"}
                fontWeight={"hairline"}
                fontSize={"1em"}
                padding={0}
                marginRight={10}
                onClick={connectWithMetamask}
              >
                Connect Metamask
              </Button>
              <Button
                background={"transparent"}
                fontWeight={"hairline"}
                fontSize={"1em"}
                padding={0}
                marginRight={10}
                onClick={connectWithMetamask}
              >
                Metamask
              </Button>
              <Button
                background={"transparent"}
                fontWeight={"hairline"}
                fontSize={"1em"}
                padding={0}
                marginRight={10}
                onClick={connectWithWalletConnect}
              >
                Wallet Connect
              </Button>
              <Button
                background={"transparent"}
                fontWeight={"hairline"}
                fontSize={"1em"}
                padding={0}
                marginRight={10}
                onClick={connectWithCoinbase}
              >
                Coinbase
              </Button>
            </>
          )}
          {address && (
            <Button
              background={"transparent"}
              fontWeight={"hairline"}
              fontSize={"1em"}
              padding={0}
              marginRight={10}
              onClick={async () => {
                await disconnect();
                createToast("EVM Wallet Disconnected", "warning");

                onClose();
                navigate("/");
              }}
            >
              Disconnect Wallet
            </Button>
          )}
          {/* 
          {paperUserDetails?.status ===
            UserStatus.LOGGED_IN_WALLET_INITIALIZED && (
            <Button
              background={"transparent"}
              fontWeight={"hairline"}
              fontSize={"1em"}
              padding={0}
              marginRight={10}
              onClick={() =>
                window.open("https://paper.xyz/wallet", "_blank").focus()
              }
            >
              View Paper Wallet
            </Button>
          )} */}

          {/* {paperUserDetails?.status === UserStatus.LOGGED_OUT && (
            <Button
              background={"transparent"}
              fontWeight={"hairline"}
              fontSize={"1em"}
              padding={0}
              marginRight={10}
              onClick={async () => {
                onClose();

                await Paper.auth.loginWithOtp();

                setTimeout(async () => {
                  const userStatus = await Paper.getUserStatus();

                  setPaperUserDetails(userStatus);

                  createToast("Paper wallet connected", "success");
                }, 250);
              }}
            >
              Connnect Wallet
            </Button>
          )} */}
          {paperUserDetails?.status === UserStatus.LOGGED_IN_NEW_DEVICE && (
            <Button
              background={"transparent"}
              fontWeight={"hairline"}
              fontSize={"1em"}
              padding={0}
              marginRight={10}
              onClick={async () => {
                onClose();

                await Paper.initializeUser();

                const userStatus = await Paper.getUserStatus();

                setPaperUserDetails(userStatus);
              }}
            >
              initialize Wallet
            </Button>
          )}
          {(paperUserDetails?.status ===
            UserStatus.LOGGED_IN_WALLET_INITIALIZED ||
            paperUserDetails?.status === UserStatus.LOGGED_IN_NEW_DEVICE) && (
            <Button
              background={"transparent"}
              fontWeight={"hairline"}
              fontSize={"1em"}
              padding={0}
              marginRight={10}
              onClick={async () => {
                onClose();

                await Paper.auth.logout();

                const userStatus = await Paper.getUserStatus();

                setPaperUserDetails(userStatus);
              }}
            >
              Disconnect Wallet
            </Button>
          )}
          <Button
            background={"transparent"}
            fontWeight={"hairline"}
            fontSize={"1em"}
            padding={0}
            marginRight={10}
            onClick={logout}
          >
            Logout
          </Button>
        </>
      )}
      <Box>
        <Button
          _hover={{ background: "#1DA1F2" }}
          variant={"roundOutline"}
          width={10}
          height={10}
          onClick={() => {
            window
              .open(
                "https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw",
                "_blank"
              )
              .focus();
          }}
        >
          <AiOutlineTwitter fontSize={"1.5em"} />

          <script async src='https://platform.twitter.com/widgets.js'></script>
        </Button>
        <Button
          _hover={{ background: "#7289DA" }}
          variant={"roundOutline"}
          marginX={8}
          width={10}
          height={10}
          onClick={() =>
            window.open("https://discord.gg/TtGm2vWw", "_blank").focus()
          }
        >
          <FaDiscord fontSize={"1.5em"} />
        </Button>
      </Box>
    </>
  );
};

const MobileNav = ({ onClose, isOpen }) => {
  return (
    <CustomDrawer
      body={<Body onClose={onClose} />}
      bodyStyles={{
        display: "flex",
        flexDir: "column",
        py: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        fontSize: "40px",
        fontWeight: "thin",
      }}
      headerStyles={{
        p: 8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "solid",
        borderWidth: "1px",
      }}
      header={
        <>
          <SVG_Icon fileName={"logoV2.svg"} maxHeight={7} />
          <DrawerCloseButton
            display={"block"}
            pos={"inherit"}
            border={"solid"}
            borderWidth={"1px"}
            borderRadius={"50%"}
          />
        </>
      }
      onClose={onClose}
      isOpen={isOpen}
      size={"full"}
    />
  );
};

export default MobileNav;
