import { exportGLTF } from "./exportGLTF";
import html2canvas from "html2canvas";
import { addToIpfs } from "./add-to-ipfs";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { getHtmlFile } from "./getHtmlFile";

//! not used
export const AddToChain = async (req) => {
  // Get ID of the NFT to mint and address of the user from request body
  const {
    id,
    address,
    scene,
    ipfs,
    ref,
    length,
    name,
    properties,
    description,
    attributes,
    blockchain,
    background,
    song,
  } = req.body;

  // Connect to thirdweb SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    // Your wallet private key
    import.meta.env.VITE_react_app,
    // RPC URL
    blockchain.toLowerCase()
  );
  const storage = new ThirdwebStorage();

  // // Set variable for the NFT collection contract address which can be found after creating an NFT collection in the dashboard
  let nftCollectionAddress;

  if (blockchain === "Goerli") {
    nftCollectionAddress = import.meta.env.VITE_goerli_contract;
  } else if (blockchain === "Mumbai") {
    nftCollectionAddress = import.meta.env.VITE_mumbai_contract;
  } else {
    nftCollectionAddress = import.meta.env.VITE_fuji_contract;
  }

  // Initialize the NFT collection with the contract address
  const nftCollection = await sdk.getContract(nftCollectionAddress, "edition");

  const getBackgroundLink = (background) => {
    switch (background) {
      case "Original":
        return "https://ipfs.io/ipfs/QmYPNXqk6Jv7YoFDDaVW3T5oDtWDTzpbaTHHLzT7AxnUii?filename=original.jpg";
      case "Dark Blue":
        return "https://ipfs.io/ipfs/Qmcc37T9KPs5Cy735THTSZyMYmRcQJCQApsPALP7JrisKv?filename=dark_blue.jpg";
      case "Pink Gradient":
        return "https://ipfs.io/ipfs/Qmd25Wes48xLw5dT4ndRGzsaeZexxE3Xi3csjZQqXfV7RT?filename=pink_gradient.jpg";
      default:
        return "";
    }
  };

  const getSongLink = (song) => {
    switch (song) {
      case "Song One":
        return "https://ipfs.io/ipfs/QmNW5jT9zuMMbqtjY8pKCz37Hy2oKHxgNyUJrQw1NMhgNi?filename=fun-life-112188.mp3";
      case "Song Two":
        return "https://ipfs.io/ipfs/QmdnQooqmm1VTqfqqmWULBfLQT5hnYXMz3tw647r3qyAC2?filename=lofi-study-112191.mp3";
      case "Song Three":
        return "https://ipfs.io/ipfs/QmRQqCVgdhzym1RAQpke5V2CojT4qtqGddvgjKv3Ab4nYa?filename=soft-beat-115017.mp3";
      default:
        return "";
    }
  };

  // export customised gltf
  let file;
  // await exportGLTF(scene).then((gltf) => {
  //   file = gltf;
  // });

  try {
    // add gltf to ipfs
    // const GltfCid = await addToIpfs(ipfs, file, true);

    // const animation_url = `https://ipfs.io/ipfs/${GltfCid.cid.toString()}/`;

    // create png image from screenshot of webGL canvas using html2canvas
    // Used for the nft poster while its loading
    // let canvasImage;
    // await html2canvas(document.querySelector("#threeCanvas")).then((canvas) => {
    //   canvasImage = canvas;
    // });

    // // Convert canvasImage to blog format
    // const blobImage = await new Promise((resolve) => {
    //   canvasImage.toBlob(resolve);
    // });

    // console.log(blobImage);

    // // add image to ipfs
    // const imageCid = await addToIpfs(ipfs, blobImage);
    // const image = `https://ipfs.io/ipfs/${imageCid.cid.toString()}/`;

    // Create HTML page for animation_url in NFT
    const htmlBlob = new Blob(
      [
        getHtmlFile(
          // animation_url,
          getBackgroundLink(background),
          getSongLink(song)
        ),
      ],
      { text: "text/html" },
      "index.html"
    );

    // const htmlCid = await addToIpfs(ipfs, htmlBlob);
    // const htmlNFT = `https://ipfs.io/ipfs/${htmlCid.cid.toString()}/`;

    // Allow the minting to happen anytime from now
    const startTime = new Date(0);

    const uri = await storage.upload({
      name,
      description,
      // image,
      // animation_url: htmlNFT,
      attributes,
    });

    const data = await storage.downloadJSON(uri);

    console.log(data);

    // // Set up the NFT metadata for signature generation
    // const metadata = {
    //   price: 0.005,
    //   mintStartTime: startTime,
    //   to: address,
    //   quantity: 1,
    // };

    // const response = await nftCollection.signature.generate(metadata);

    // // Respond with the payload and signature which will be used in the frontend to mint the NFT
    // return JSON.stringify({
    //   payload: response.payload,
    //   signature: response.signature,
    // });
  } catch (error) {
    console.error(error);
  }
};
