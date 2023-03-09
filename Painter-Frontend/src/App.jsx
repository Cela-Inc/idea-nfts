import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { PaperSDKProvider } from "@paperxyz/react-client-sdk";
import { CookiesProvider } from "react-cookie";
import Snackbar from "./components/Snackbar";
import useIpfsFactory from "./hooks/use-ipfs-factory";
import { usePainterStore } from "./hooks/use-painter-store.hook";
import NavBar from "./components/NavBar";
import { theme } from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { PaperEmbeddedWalletSdk } from "@paperxyz/embedded-wallet-service-sdk";
import "./paint.css";
import { userUserInfoStore } from "./hooks/use-userInfo-store.hook";

// TODO: Humanity rocks and related pages to be re-introduced later

const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const IdeaPage = lazy(() => import("./pages/IdeaPage"));

const Configurator = lazy(() => import("./pages/Configurator"));
// const HumanityRocks = lazy(() => import("./pages/HumanityRocks"));
// const HumanityRocksCharacters = lazy(() =>
//   import("./pages/HumanityRocksCharacters")
// );
// const HumanityRocksAbout = lazy(() => import("./pages/HumanityRocksAbout"));
// const HumanityRocksFinance = lazy(() => import("./pages/HumanityRocksFinance"));
// const HumanityRocksSpaceships = lazy(() =>
//   import("./pages/HumanityRocksSpaceships")
// );

const App = () => {
  const { pathname } = useLocation();

  // ! Find a better way for IPFS link, possibly to server?
  const { ipfs } = useIpfsFactory({ commands: ["id"] });
  usePainterStore.setState({ ipfs: ipfs });

  // ! to be removed - forces chakra lightmode
  localStorage.setItem("chakra-ui-color-mode", "light");

  useEffect(() => {
    const Paper = new PaperEmbeddedWalletSdk({
      clientId: "",
      chain: "Polygon",
      // customize the styling for any UI that is displayed here
      styles: {
        colorBackground: "#232323",
        colorText: "#F5F5F5",
        colorPrimary: "#3E8CED",
        borderRadius: 24,
      },
    });

    userUserInfoStore.setState({ Paper: Paper });
  }, []);

  return (
    <Suspense>
      <ThirdwebProvider
        desiredChainId={
          import.meta.env.VITE_CHAIN_ID === "Polygon"
            ? ChainId.Polygon
            : ChainId.Mumbai
        }
      >
        <ChakraProvider theme={theme}>
          <CookiesProvider>
            <PaperSDKProvider
              chainName={import.meta.env.VITE_CHAIN_ID}
              clientId={""}
            >
              <Snackbar />
              {!pathname.includes("/humanity") && <NavBar />}
              <Routes>
                <Route element={<HomePage />} path={"/"} />
                <Route element={<UserPage />} path={"/user"} />
                <Route element={<IdeaPage />} path={"/idea"} />
                <Route element={<AuthPage />} path={"/auth/:authType"} />
                <Route element={<Configurator />} path={"/create"} />
                {/* <Route element={<HumanityRocks />} path={"/humanity"} />

                <Route
                  element={<HumanityRocksCharacters />}
                  path={"/humanity/characters"}
                />
                <Route
                  element={<HumanityRocksAbout />}
                  path={"/humanity/about"}
                />
                <Route
                  element={<HumanityRocksFinance />}
                  path={"/humanity/finance"}
                />
                <Route
                  element={<HumanityRocksSpaceships />}
                  path={"/humanity/spaceships"}
                /> */}
              </Routes>
            </PaperSDKProvider>
          </CookiesProvider>
        </ChakraProvider>
      </ThirdwebProvider>
    </Suspense>
  );
};

export default App;
