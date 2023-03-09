import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomModal from "./CustomisationMenu/CustomModal";
import axios from "axios";
import { useCookies } from "react-cookie";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { useCreateToast } from "../hooks/use-create-toast-hook";
import SVG_Icon from "./SVG_Icon";

const LoginMenu = ({ changeMenuHandler, onClose, createToast }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["token"]);

  const loginHandler = () => {
    axios
      .post("/api/login", {
        ...userInfo,
      })
      .then((res) => {
        setCookie("token", res.data.token, { path: "/" });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        userUserInfoStore.setState({ user: res.data.user });
        createToast("Successfully Logged in.", "success", res.data.message);
        onClose();
      })
      .catch((err) => {
        createToast("Log in failed.", "error", err.message);
      });
  };

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
      gap={5}
    >
      <Heading>Log in to IDEA-NFT</Heading>
      <Flex
        width={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, email: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='email'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, password: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='password'
          />
        </FormControl>
        <Button
          onClick={loginHandler}
          variant={"solid"}
          colorScheme={"blue"}
          alignSelf={"flex-end"}
        >
          Login
        </Button>
        <Text>
          Not a member yet?{" "}
          <Button
            padding={0}
            fontWeight={"normal"}
            color={"blue.discord"}
            onClick={() => changeMenuHandler("SIGNUP")}
          >
            Sign up!
          </Button>
        </Text>
      </Flex>
      <Divider borderColor={"black"} width={"100%"} orientation='horizontal' />
      <SVG_Icon fileName={"logoV2.svg"} width={"32"} />
    </Flex>
  );
};

const SignupMenu = ({ changeMenuHandler, onClose, createToast }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  // const [createWallet, setCreateWallet] = useState(true);
  const [walletCode, setWalletCode] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);
  // const [walletCreationClicked, setWalletCreationClicked] = useState(false);

  const registerHandler = async () => {
    axios
      .post("/api/register", {
        ...userInfo,
        paper_token: walletCode,
        wallet_address: walletAddress,
      })
      .then((res) => {
        setCookie("token", res.data.token, { path: "/" });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        userUserInfoStore.setState({ user: res.data.user });

        createToast("Successfully Logged in.", "success");

        onClose();
      })
      .catch((err) => {
        createToast("Error please try again.", err.message, "success");
      });
  };

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
      gap={5}
    >
      <Heading>Sign up to IDEA-NFT</Heading>
      <Flex
        width={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, name: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='text'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, email: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='email'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, password: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='password'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) =>
              setUserInfo((curr) => {
                return { ...curr, password_confirmation: e.target.value };
              })
            }
            borderColor={"blue.200"}
            type='password'
          />
        </FormControl>

        <Button
          onClick={registerHandler}
          variant={"solid"}
          colorScheme={"blue"}
          alignSelf={"flex-end"}
        >
          Sign up
        </Button>
        <Text>
          Already a member?{" "}
          <Button
            padding={0}
            fontWeight={"normal"}
            color={"blue.discord"}
            onClick={() => changeMenuHandler("LOGIN")}
          >
            Login!
          </Button>
        </Text>
      </Flex>
    </Flex>
  );
};

const LoginSignup = ({ isOpen, onClose }) => {
  const [menuType, setMenuType] = useState("LOGIN");
  const createToast = useCreateToast();

  const changeMenuHandler = (menuType) => {
    setMenuType(menuType);
  };

  return (
    <>
      <CustomModal
        size={["sm", "sm", "md", "xl"]}
        isOpen={isOpen}
        onClose={onClose}
        content={
          menuType === "LOGIN" ? (
            <LoginMenu
              createToast={createToast}
              onClose={onClose}
              changeMenuHandler={changeMenuHandler}
            />
          ) : (
            <SignupMenu
              createToast={createToast}
              onClose={onClose}
              changeMenuHandler={changeMenuHandler}
            />
          )
        }
      />
    </>
  );
};

export default LoginSignup;
