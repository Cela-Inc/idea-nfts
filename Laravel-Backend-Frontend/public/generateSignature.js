const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

async function generateSignature() {
    try {
        const contract = process.argv[3];
        const data = JSON.parse(process.argv[2]);
        const price = process.argv[4];

        // Connect to thirdweb SDK
        const sdk = ThirdwebSDK.fromPrivateKey(
            // Your wallet private key
            "",
            // RPC URL
            "polygon"
        );

        const queryContract = await sdk.getContract(contract, "edition");
        if (contract === "0xF3EaEC549474DD9a3861472694B60B13e1a22cCA") {
            const nfts = await queryContract.getOwned(data.to);

            if (nfts.length >= 2) {
                return;
            }
        }

        const Totalnfts = await queryContract.getAll();

        if (Totalnfts.length === 3000) {
            return;
        }

        // Initialize the NFT collection with the contract address
        const nftContract = await sdk.getContract(contract, "edition");

        // Allow the minting to happen anytime from now
        const startTime = new Date(0);
        const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);

        // Set up the NFT metadata for signature generation
        const metadata = {
            metadata: { ...data.metadata },
            price: Number(price),
            mintStartTime: startTime,
            mintEndTime: endTime,
            to: data.to,
            quantity: data.quantity,
        };

        const signature = await nftContract.erc1155.signature.generate(
            metadata
        );

        // Respond with the payload and signature which will be used in the frontend to mint the NFT
        return JSON.stringify({
            payload: signature.payload,
            signature: signature.signature,
        });
    } catch (error) {
        return error;
    }
}

generateSignature().then((data) => {
    console.log(data);
});
