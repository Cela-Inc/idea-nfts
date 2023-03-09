import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { useCreateToast } from "../hooks/use-create-toast-hook";
import { useLocation, useNavigate } from "react-router-dom";

const LoginMenu = ({ createToast, setCookie, navigate }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
      const res = await axios.post("/api/login", {
        ...userInfo,
      });

      setCookie("token", res.data.token, { path: "/" });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      userUserInfoStore.setState({ user: res.data.user });
      createToast("Successfully Logged in.", "success", res.data.message);
      navigate("/");
    } catch (err) {
      createToast("Log in failed.", "error", err.message);
    }
  };

  return (
    <Flex width={"100%"} flexDir={"column"} gap={10}>
      <FormControl isRequired>
        <FormLabel margin={0} paddingLeft={8}>
          Email address
        </FormLabel>
        <Input
          variant={"flushed"}
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, email: e.target.value };
            })
          }
          type='email'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel margin={0} paddingLeft={8}>
          Password
        </FormLabel>
        <Input
          variant={"flushed"}
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, password: e.target.value };
            })
          }
          type='password'
        />
      </FormControl>
      <Button marginTop={10} onClick={loginHandler} variant={"ideaButton"}>
        Login
      </Button>
    </Flex>
  );
};

const SignupMenu = ({ createToast, setCookie, navigate }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [checkBoxEnabled, setCheckBoxEnabled] = useState(false);

  const registerHandler = async () => {
    try {
      if (!checkBoxEnabled) {
        throw new Error("Terms of Use and Privacy Policy must be accepted");
      }

      const res = await axios.post("/api/register", {
        ...userInfo,
      });

      setCookie("token", res.data.token, { path: "/" });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      userUserInfoStore.setState({ user: res.data.user });
      navigate("/");
    } catch (err) {
      createToast("Registration failed.", "error", err.message);
    }
  };

  return (
    <Flex width={"100%"} flexDir={"column"} gap={10}>
      <FormControl isRequired>
        <FormLabel paddingLeft={8} marginTop={10}>
          Username
        </FormLabel>
        <Input
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, name: e.target.value };
            })
          }
          variant={"flushed"}
          type='text'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel paddingLeft={8} marginTop={0}>
          Email address
        </FormLabel>
        <Input
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, email: e.target.value };
            })
          }
          variant={"flushed"}
          type='email'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel paddingLeft={8} marginTop={0}>
          Password
        </FormLabel>
        <Input
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, password: e.target.value };
            })
          }
          variant={"flushed"}
          type='password'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel paddingLeft={8} marginTop={0}>
          Password
        </FormLabel>
        <Input
          onChange={(e) =>
            setUserInfo((curr) => {
              return { ...curr, password_confirmation: e.target.value };
            })
          }
          variant={"flushed"}
          type='password'
        />
      </FormControl>

      <FormControl isRequired>
        <Checkbox
          onChange={(e) => {
            setCheckBoxEnabled(e.target.checked);
          }}
          colorScheme={"pink"}
        >
          I Agree to IDEA-NFT{" "}
          <Link
            href={"https://idea-nfts.com/privacy-policy"}
            fontWeight={"bold"}
            color={"pink.dark"}
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            href={"https://www.idea.thecela.com/terms"}
            fontWeight={"bold"}
            color={"pink.dark"}
          >
            Privacy Policy
          </Link>
        </Checkbox>
      </FormControl>

      <Button marginTop={10} onClick={registerHandler} variant={"ideaButton"}>
        Create Account
      </Button>
    </Flex>
  );
};

const AuthPage = () => {
  const [authMenu, setAuthMenu] = useState("LOGIN");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const createToast = useCreateToast();
  const { user } = userUserInfoStore();

  useEffect(() => {
    if (user) {
      return navigate("/");
    }

    if (pathname === "/auth/register") {
      setAuthMenu("REGISTER");
    }
  }, []);

  return (
    <Grid
      paddingTop={32}
      paddingX={[2, 5, 10, 20, 56]}
      height={"100%"}
      width={"100%"}
      templateColumns={"repeat(1fr 1fr)"}
      gridTemplateRows={"0.25fr 1fr"}
    >
      <GridItem
        alignSelf={"center"}
        colStart={1}
        colEnd={4}
        rowStart={1}
        rowEnd={1}
      >
        <Flex
          flexDir={["column", "row", "row", "row"]}
          justifyContent={"center"}
        >
          <Button
            color={authMenu === "REGISTER" ? "blue" : "gray"}
            borderColor={authMenu === "REGISTER" ? "blue" : "gray"}
            borderBottomWidth={authMenu === "REGISTER" ? "3px" : "2px"}
            variant={"authButton"}
            onClick={() => setAuthMenu("REGISTER")}
          >
            Create Account
          </Button>
          <Button
            color={authMenu === "LOGIN" ? "blue" : "gray"}
            borderColor={authMenu === "LOGIN" ? "blue" : "gray"}
            borderBottomWidth={authMenu === "LOGIN" ? "3px" : "2px"}
            variant={"authButton"}
            onClick={() => setAuthMenu("LOGIN")}
          >
            Login
          </Button>
        </Flex>
      </GridItem>
      <GridItem
        paddingX={[5, 10, 20, 20, 20]}
        paddingY={[5, 0, 0, 0, 0]}
        colStart={1}
        colEnd={4}
        rowStart={2}
        rowEnd={2}
      >
        {authMenu === "LOGIN" && (
          <LoginMenu
            navigate={navigate}
            createToast={createToast}
            setCookie={setCookie}
          />
        )}
        {authMenu === "REGISTER" && (
          <SignupMenu
            navigate={navigate}
            createToast={(i, j, k) => createToast(i, j, k)}
            setCookie={setCookie}
          />
        )}
      </GridItem>
    </Grid>
  );
};

export default AuthPage;
