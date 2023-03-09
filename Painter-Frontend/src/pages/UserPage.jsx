import {
  Button,
  CircularProgress,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { userUserInfoStore } from "../hooks/use-userInfo-store.hook";
import { useCookies } from "react-cookie";
import {
  useAddress,
  useCoinbaseWallet,
  useContract,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { AiOutlineShareAlt } from "react-icons/ai";
import MintModal from "../components/MintButton/MintModal";
import SocialModal from "../components/CardView/SocialModal";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import IdeaButton from "../components/Inputs/IdeaButton";

const UserPage = () => {
  const navigate = useNavigate();
  const [selectCards, setSelectCards] = useState("MINTED");
  const { user, Paper, paperUserDetails, setPaperUserDetails } =
    userUserInfoStore();
  const [cookies, setCookie] = useCookies(["token"]);
  const [nfts, setNfts] = useState(null);
  const [drafts, setDrafts] = useState(null);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbase = useCoinbaseWallet();

  const { contract } = useContract(
    import.meta.env.VITE_PAINTER_CONTRACT,
    "edition"
  );
  const { contract: generatedImagesContract } = useContract(
    import.meta.env.VITE_AI_CONTRACT,
    "edition"
  );
  const [selectedDraft, setSelectedDraft] = useState();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onOpenSocial,
    isOpen: isOpenSocial,
    onClose: onCloseSocial,
  } = useDisclosure();

  const getContracts = async () => {
    try {
      const userStatus = await Paper.getUserStatus();

      setPaperUserDetails(userStatus);
      if (!address && userStatus.status === UserStatus.LOGGED_OUT) {
        return;
      }

      const nfts = await contract.getOwned(
        address || userStatus.data.walletAddress
      );

      const genNfts = await generatedImagesContract.getOwned(
        address || userStatus.data.walletAddress
      );

      setNfts([...nfts, ...genNfts]);
    } catch (error) {
      console.log(error);
    }
  };

  const getDrafts = async () => {
    try {
      const data = await axios.get(`/api/nfts/`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      const drafts = [];
      data.data.drafts.forEach((item) => {
        drafts.push(item);
      });
      setDrafts(drafts);
    } catch (error) {
      setDrafts([]);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (contract && !nfts) {
      getContracts();
    }

    if (!drafts) {
      getDrafts();
    }
  }, [contract]);

  return (
    <Flex flexDir={"column"} height={"100%"} paddingTop={14}>
      <Heading
        borderBottom={"solid"}
        borderBottomColor={"black"}
        borderWidth={"1px"}
        paddingTop={10}
        paddingBottom={4}
        paddingX={[0, 0, 44, 44]}
        width={"100%"}
        color={"blue.dark"}
        fontSize={["2xl", "2xl", "4xl", "4xl"]}
        fontWeight={"normal"}
        fontFamily={"Sequel"}
        textAlign={["center", "center", "left", "left"]}
      >
        My IDEAs
      </Heading>
      <Flex
        top={"11rem"}
        position={"absolute"}
        marginX={[0, 0, 32, 32]}
        justifySelf={"start"}
        gridColumnStart={1}
        gridColumnEnd={[2, 2, 3, 4, 5]}
      >
        <Button
          fontWeight={selectCards === "MINTED" ? "500" : "normal"}
          opacity={selectCards === "MINTED" ? 1 : 0.5}
          onClick={() => setSelectCards("MINTED")}
          background={"transparent"}
        >
          Minted
        </Button>
        <Button
          fontWeight={selectCards === "DRAFTS" ? "500" : "normal"}
          opacity={selectCards === "DRAFTS" ? 1 : 0.5}
          onClick={() => setSelectCards("DRAFTS")}
          background={"transparent"}
        >
          Drafts
        </Button>
      </Flex>

      <SimpleGrid
        minH={"100vh"}
        borderY={"none"}
        borderX={["none", "none", "solid 1px black", "solid 1px black"]}
        marginX={[10, 10, 24, 24]}
        padding={5}
        paddingX={[0, 0, 20, 20]}
        columns={[1, 1, 2, 3, 4]}
        gap={10}
        justifyItems={"center"}
        paddingY={[24, 24, 20, 20]}
        alignContent={["start", "start", "", ""]}
      >
        {!address && (
          <>
            <IdeaButton onClick={connectWithMetamask}>
              Connect with Metamask
            </IdeaButton>
            <IdeaButton onClick={connectWithWalletConnect}>
              Connect with Wallet connect
            </IdeaButton>
            <IdeaButton onClick={connectWithCoinbase}>
              Connect with Coinbase
            </IdeaButton>
          </>
        )}
        {/* {(!address || paperUserDetails?.status === UserStatus.LOGGED_OUT) && (
          <Button
            variant={"ideaButton"}
            onClick={async () => {
              await Paper.auth.loginWithOtp();

              setTimeout(async () => {
                await Paper.initializeUser();

                const userStatus = await Paper.getUserStatus();

                setPaperUserDetails(userStatus);

                getContracts();
              }, [500]);
            }}
          >
            Connect Wallet
          </Button>
        )} */}
        {selectCards === "MINTED" && (
          <>
            {nfts ? (
              nfts.map((item) => {
                return (
                  <Flex
                    height={"20rem"}
                    flexDir={"column"}
                    width={"100%"}
                    borderRadius={10}
                    borderColor={"black"}
                    borderWidth={"1px"}
                    boxShadow={"3px 3px 0px #1A1A1A"}
                    padding={5}
                    alignItems={"center"}
                  >
                    <object
                      style={{ minHeight: "10rem", width: "100%" }}
                      type={"text/html"}
                      data={
                        "https://ipfs.io/ipfs/" +
                        item?.metadata.animation_url.slice(7)
                      }
                    />
                    <Text
                      fontWeight={500}
                      alignSelf={"start"}
                      marginBottom={3}
                      fontSize={"lg"}
                    >
                      {item?.metadata.title || item?.metadata.name}
                    </Text>
                    <Text
                      color={"rgba(112, 112, 112, 1)"}
                      alignSelf={"start"}
                      marginBottom={3}
                    >
                      {item?.metadata.description}
                    </Text>
                    <Button
                      variant={"roundOutline"}
                      minWidth={"2rem"}
                      height={"2rem"}
                      borderWidth={"2px"}
                      borderColor={"rgba(112, 112, 112, 1)"}
                      color={"rgba(112, 112, 112, 1)"}
                      alignSelf={"start"}
                      onClick={() => {
                        setSelectedDraft({
                          projectName:
                            item.metadata.title || item.metadata.name,
                          projectDescription: item.metadata.description,
                          paintingImage: item.metadata.image,
                        });
                        onOpenSocial();
                      }}
                    >
                      <AiOutlineShareAlt />
                    </Button>
                  </Flex>
                );
              })
            ) : (
              <CircularProgress isIndeterminate color='green.300' />
            )}
          </>
        )}
        {selectCards === "DRAFTS" && (
          <>
            {drafts ? (
              drafts.map((item) => {
                return (
                  <>
                    <Flex
                      flexDir={"column"}
                      height={"60%"}
                      width={"100%"}
                      borderRadius={10}
                      borderColor={"black"}
                      borderWidth={"1px"}
                      boxShadow={"3px 3px 0px #1A1A1A"}
                      padding={5}
                      alignItems={"center"}
                    >
                      <object
                        style={{ height: "100%", width: "100%" }}
                        type={"text/html"}
                        data={item.html_cid}
                      />
                      <Text
                        fontWeight={500}
                        alignSelf={"start"}
                        marginBottom={3}
                        fontSize={"lg"}
                      >
                        {item?.title || item?.name}
                      </Text>
                      <Text
                        color={"rgba(112, 112, 112, 1)"}
                        alignSelf={"start"}
                        marginBottom={3}
                      >
                        {item?.description}
                      </Text>
                      <Button
                        minWidth={"2rem"}
                        height={"2rem"}
                        borderWidth={"2px"}
                        borderColor={"rgba(112, 112, 112, 1)"}
                        color={"rgba(112, 112, 112, 1)"}
                        alignSelf={"end"}
                        onClick={() => {
                          setSelectedDraft({
                            animation_url: item.html_cid,
                            image: item.image_cid,
                            name: item.name,
                            description: item.description,
                          });
                          onOpen();
                        }}
                      >
                        Mint
                      </Button>
                    </Flex>
                  </>
                );
              })
            ) : (
              <CircularProgress isIndeterminate color='green.300' />
            )}
          </>
        )}
        <MintModal isOpen={isOpen} onClose={onClose} nftDraft={selectedDraft} />
        {/* Todo: Find a better way to hide and show this. Errs out if conditional is removed {projectDetails problem} */}
        {selectedDraft && isOpenSocial && (
          <SocialModal
            isOpen={isOpenSocial}
            onClose={() => onCloseSocial()}
            projectDetails={selectedDraft}
          />
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default UserPage;
