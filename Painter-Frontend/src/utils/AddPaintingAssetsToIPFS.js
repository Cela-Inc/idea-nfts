import { addToIpfs } from "./add-to-ipfs";
import { getImageHtml } from "./GetImageHtml";

export const AddPaintingAssetsToIPFS = async (image, ipfs) => {
  try {
    // Create image for nft cover
    const blob = await (await fetch(image)).blob();
    const imageCID = await addToIpfs(ipfs, blob);

    // Create HTML page for animation_url in NFT
    const htmlBlob = await new Blob(
      [getImageHtml(`https://ipfs.io/ipfs/${imageCID.cid.toString()}/`)],
      {
        type: "text/html",
      },
      "index.html"
    );
    const htmlCID = await addToIpfs(ipfs, htmlBlob);

    return { imageCID, htmlCID };
  } catch (error) {
    console.error(error);
  }
};
