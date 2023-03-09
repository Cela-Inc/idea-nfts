import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CheckoutWithCard, PaperSDKProvider } from "@paperxyz/react-client-sdk";
import "@paperxyz/react-client-sdk/dist/index.css";
import { useEffect, useState } from "react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import IdeaButton from "../Inputs/IdeaButton";
import SVG_Icon from "../SVG_Icon";
import axios from "axios";
import { userUserInfoStore } from "../../hooks/use-userInfo-store.hook";
import { useCreateNft } from "../../hooks/use-create-nft.hook";
import { useCookies } from "react-cookie";
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import {
  ChainId,
  useAddress,
  useCoinbaseWallet,
  useContract,
  useDisconnect,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useSDK,
  useWalletConnect,
} from "@thirdweb-dev/react";

const MintModal = ({
  isOpen,
  onClose,
  onOpen,
  nftDraft = null,
  isAIGenerated = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [maticPrice, setMaticPrice] = useState(null);
  const { projectDetails, paintingImage } = usePainterStore();
  const [secret, setSecret] = useState();
  const toast = useToast();
  const [cookies] = useCookies(["token"]);
  const { Paper, paperUserDetails, setPaperUserDetails } = userUserInfoStore();
  const address = useAddress();
  const createNFT = useCreateNft();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbase = useCoinbaseWallet();
  const isMistmatched = useNetworkMismatch();
  const disconnect = useDisconnect();
  const [, switchNetwork] = useNetwork();
  const sdk = useSDK();
  const { contract } = useContract(
    isAIGenerated
      ? import.meta.env.VITE_AI_CONTRACT
      : import.meta.env.VITE_PAINTER_CONTRACT,
    "edition"
  );

  const getPaperUserStatus = async () => {
    const userStatus = await Paper.getUserStatus();

    if (userStatus) {
      setPaperUserDetails(userStatus);
    }
  };

  const initWallet = async () => {
    onClose();

    await Paper.auth.loginWithOtp();

    setTimeout(async () => {
      await Paper.initializeUser();

      getPaperUserStatus();

      onOpen();
    }, 500);
  };

  const getPrice = async () => {
    const data = await axios.get(
      "https://api.coinstats.app/public/v1/coins/matic-network?currency=DOL"
    );

    setMaticPrice(99.0 / data.data.coin.price);
  };

  useEffect(() => {
    getPaperUserStatus();

    getPrice();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSecret("");
    }

    getPaperUserStatus();
  }, [isOpen]);

  const mintPainting = async (thirdweb = null) => {
    setLoading(true);

    try {
      if (address) {
        const balance = await sdk.wallet.balance();
        if (thirdweb && Number(balance.displayValue) < maticPrice) {
          throw new Error("insufficient funds");
        }
      }

      if (nftDraft) {
        if (isAIGenerated) {
          const nftData = await createNFT(
            nftDraft.imageNft.paintingImage,
            nftDraft.imageNft.projectName,
            nftDraft.imageNft.projectDescription
          );

          return postMint(nftData, thirdweb);
        }
      } else {
        const nftData = await createNFT(
          paintingImage,
          projectDetails.projectName,
          projectDetails.projectDescription
        );

        postMint(nftData, thirdweb);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      return toast({
        title: error.message,
        description: maticPrice.toFixed(2) + " Matic needed for sale",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const postMint = async (nftData, thirdweb) => {
    try {
      const data = await axios.post(
        "/api/mintNft",
        {
          metadata: {
            metadata: {
              ...nftData,
            },
            price: 0.001,
            mintStartTime: new Date(0),
            to: address ? address : paperUserDetails.data.walletAddress,
            quantity: 1,
          },
          gen: nftDraft?.imageNft.paintingImage ? true : false,
          email: paperUserDetails?.data?.authDetails.email,
          address: address ? address : paperUserDetails.data.walletAddress,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (data.data.thirdweb_signature) {
        await contract.erc1155.signature.mint({
          signature: data.data.thirdweb_signature.signature,
          payload: data.data.thirdweb_signature.payload,
        });

        setLoading(false);
        onClose();
        toast({
          title: "IDEA-NFT",
          description: "NFT Minted, check your EVM wallet for confirmation",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setSecret(data.data.paper_secret);
      }
    } catch (error) {
      setLoading(false);
      if (error.message.startsWith("Contract transaction failed")) {
        return toast({
          title: "Payment rejected",
          description: "",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      toast({
        title: "Error Minting",
        description: "Error processing Mint, chain failure or limit reached",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      size={["sm", "sm", "xl", "xl", "xl", "2xl"]}
    >
      <ModalOverlay />
      <ModalContent borderRadius={32}>
        <ModalHeader marginLeft={5} marginTop={8} fontWeight={500}>
          Play Paint NFT
        </ModalHeader>
        <ModalCloseButton
          background={"#000"}
          borderRadius={"50%"}
          color={"white.offWhite"}
          position='absolute'
          right={[2, -10, -6 - 6]}
          top={[2, 0, 0, -2]}
          onClick={() => onClose()}
        />
        <ModalBody>
          <Box
            height={["", "", "20rem", "20rem"]}
            width={["", "", "25rem", "25rem"]}
          >
            <Image
              width={"auto"}
              height={"20rem"}
              src={nftDraft ? nftDraft.image : paintingImage}
            />
            <SVG_Icon
              position={"absolute"}
              bottom={["40%", "40%", "40%", "40%", "40%"]}
              right={["15%", "15%", "43%", "42%", "45%", "52%"]}
              fileName={"logoV2.svg"}
            />
            <SVG_Icon
              position={"absolute"}
              top={"20%"}
              left={"8%"}
              fileName={"headphones_line.svg"}
            />
            <SVG_Icon
              position={"absolute"}
              top={"20%"}
              right={["10%", "12%", "43%", "42%", "45%", "50%"]}
              fileName={"draft_not_minted.svg"}
            />
          </Box>
          <Flex flexDir={"column"}>
            <Text>{nftDraft ? nftDraft.name : projectDetails.projectName}</Text>
            <Text>
              {nftDraft
                ? nftDraft.description
                : projectDetails.projectDescription}
            </Text>
            <Text fontWeight={"bold"}>NFT Total in USD: $99</Text>
            <Text fontWeight={"bold"}>
              NFT Total in Matic: {maticPrice && maticPrice.toFixed(2)}
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <>
            <Box
              flexDirection={"column"}
              marginRight={[0, 0, 0, 24]}
              marginBottom={10}
            >
              {!address && (
                <>
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    marginBottom={2}
                    onClick={connectWithMetamask}
                  >
                    Connect Metamask
                  </IdeaButton>
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    marginBottom={2}
                    onClick={connectWithWalletConnect}
                  >
                    Connect with Wallet connect
                  </IdeaButton>
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    marginBottom={2}
                    onClick={connectWithCoinbase}
                  >
                    Connect with Coinbase
                  </IdeaButton>
                </>
              )}
              {/* {paperUserDetails?.status ===
                UserStatus.LOGGED_IN_WALLET_INITIALIZED && (
                <>
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    disabled={loading}
                    onClick={async () => {
                      onClose();

                      await Paper.auth.logout();

                      setPaperUserDetails(null);

                      toast({
                        title: "Disconnected Paper Wallet",
                        status: "warning",
                        duration: 9000,
                        isClosable: true,
                      });

                      onOpen();
                    }}
                  >
                    Disconnect Wallet
                  </IdeaButton>
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    disabled={loading}
                    onClick={() => mintPainting()}
                  >
                    {loading ? "Minting..." : "Mint Asset"}
                  </IdeaButton>
                </>
              )} */}
              {/* {paperUserDetails?.status === UserStatus.LOGGED_IN_NEW_DEVICE && (
                <IdeaButton
                  onClick={async () => {
                    onClose();

                    await Paper.initializeUser();

                    const userStatus = await Paper.getUserStatus();

                    setPaperUserDetails(userStatus);

                    onOpen();
                  }}
                >
                  Log into wallet
                </IdeaButton>
              )} */}
              {/* {!address &&
                paperUserDetails?.status === UserStatus.LOGGED_OUT && (
                  <IdeaButton
                    marginRight={5}
                    paddingY={1}
                    onClick={async () => {
                      initWallet();
                    }}
                  >
                    Initialize Paper Wallet
                  </IdeaButton>
                )} */}

              {address && (
                <>
                  <IdeaButton
                    disabled={loading}
                    paddingY={1}
                    marginRight={5}
                    onClick={disconnect}
                  >
                    Disconnect Wallet
                  </IdeaButton>
                  {isMistmatched ? (
                    <IdeaButton
                      onClick={() =>
                        switchNetwork(
                          import.meta.env.VITE_CHAIN_ID === "Polygon"
                            ? ChainId.Polygon
                            : ChainId.Mumbai
                        )
                      }
                    >
                      Switch Network
                    </IdeaButton>
                  ) : (
                    <IdeaButton
                      marginRight={5}
                      paddingY={1}
                      disabled={loading}
                      onClick={() => mintPainting(true)}
                    >
                      {loading ? "Minting..." : "Mint Asset"}
                    </IdeaButton>
                  )}
                </>
              )}
            </Box>
          </>
          {secret && !address && (
            <PaperSDKProvider chainName={import.meta.env.VITE_CHAIN_ID}>
              <CheckoutWithCard
                // Generate a client secret with the Create Checkout SDK Intent API.
                sdkClientSecret={secret}
                onPaymentSuccess={async (result) => {
                  setLoading(false);
                  onClose();
                  toast({
                    title: "IDEA-NFT",
                    description:
                      "NFT Minted. Check your email for confirmation",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                onReview={(result) => {}}
                onError={(error) => {}}
                options={{
                  colorBackground: "#121212",
                  colorPrimary: "#19A8D6",
                  colorText: "#f0f0f0",
                  borderRadius: 30,
                }}
              />
            </PaperSDKProvider>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MintModal;
