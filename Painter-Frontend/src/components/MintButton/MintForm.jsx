import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import IdeaButton from "../Inputs/IdeaButton";
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import { userUserInfoStore } from "../../hooks/use-userInfo-store.hook";

const MintForm = ({ MintNft }) => {
  const { Paper } = userUserInfoStore();
  const [paperUserDetails, setPaperUserDetails] = useState();

  const getPaperUserStatus = async () => {
    const userStatus = await Paper.getUserStatus();

    if (userStatus) {
      setPaperUserDetails(userStatus);
    }
  };

  const initWallet = async () => {
    await Paper.initializeUser();

    const userStatus = await Paper.getUserStatus();

    setPaperUserDetails(userStatus);
  };

  useEffect(() => {
    getPaperUserStatus();
  }, []);

  return (
    <>
      <Box
        flexDirection={"column"}
        marginRight={[0, 0, 0, 24]}
        marginBottom={10}
      >
        {paperUserDetails?.status ===
          UserStatus.LOGGED_IN_WALLET_INITIALIZED && (
          <>
            <IdeaButton marginRight={5} paddingY={1} onClick={() => MintNft()}>
              Mint Asset
            </IdeaButton>
          </>
        )}
        {(paperUserDetails?.status ===
          UserStatus.LOGGED_IN_WALLET_UNINITIALIZED ||
          paperUserDetails?.status === UserStatus.LOGGED_IN_NEW_DEVICE) && (
          <IdeaButton marginRight={5} paddingY={1} onClick={() => initWallet()}>
            Initialize Paper Wallet
          </IdeaButton>
        )}
      </Box>
    </>
  );
};

export default MintForm;
