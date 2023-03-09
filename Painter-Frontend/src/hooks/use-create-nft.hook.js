import { AddPaintingAssetsToIPFS } from "../utils/AddPaintingAssetsToIPFS";
import { usePainterStore } from "./use-painter-store.hook";

export const useCreateNft = () => {
  const { ipfs } = usePainterStore();

  const createNFT = async (paintingImage, projectName, projectDescription) => {
    const { imageCID, htmlCID } = await AddPaintingAssetsToIPFS(
      paintingImage,
      ipfs
    );

    return {
      name: projectName,
      description: projectDescription,
      image: `https://ipfs.io/ipfs/${imageCID.cid.toString()}/`,
      animation_url: `https://ipfs.io/ipfs/${htmlCID.cid.toString()}/`,
    };
  };

  const getImageBlob = async (image) => {
    const blob = await (await fetch(image)).blob();

    return blob;
  };

  const createFormParams = async (
    paintingImage,
    projectName,
    projectDescription
  ) => {
    const formData = new FormData();

    formData.append("image", await getImageBlob(paintingImage), "image.png");
    formData.append("name", projectName);
    formData.append("description", projectDescription);
    formData.append("blockchain", import.meta.env.VITE_CHAIN_ID);

    return formData;
  };

  const createProjectFormParams = async (
    title,
    slug,
    cover_image,
    description,
    problem,
    solution,
    supported_blockchains,
    items,
    collections,
    supply,
    owners,
    twitter,
    track
  ) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append(
      "cover_image",
      await getImageBlob(cover_image),
      "cover_image.png"
    );
    formData.append("description", description);
    formData.append("problem", problem);
    formData.append("solution", solution);
    formData.append("supported_blockchains", ["ethereum"]);
    formData.append("items", 0);
    formData.append("collections", 0);
    formData.append("owners", 0);
    formData.append("supply", 0);
    formData.append("utility", "");
    formData.append("twitter", twitter);
    formData.append("track", track);

    return formData;
  };

  return { createNFT, createFormParams, createProjectFormParams };
};
