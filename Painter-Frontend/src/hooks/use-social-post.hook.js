import axios from "axios";
import { useCreateToast } from "./use-create-toast-hook";
import html2canvas from "html2canvas";
import { usePainterStore } from "./use-painter-store.hook";
import { addToIpfs } from "../utils/add-to-ipfs";

export const useSocialPost = () => {
  const createToast = useCreateToast();
  const { ipfs } = usePainterStore();

  const takeScreenshot = async (screenshotRef) => {
    const image = await html2canvas(screenshotRef.current);

    return image;
  };

  const postToDiscord = async (elementRef, refImage) => {
    try {
      if (!refImage) {
        throw new Error("Paint an Image, or Generate to share!");
      }

      const image = await takeScreenshot(elementRef).toDataURL("image/png");
      const buf = new Buffer.from(image.split(",")[1], "base64");
      const file = new File([buf], "image.png");

      const form = new FormData();
      form.append("image", file);

      axios.post("/api/nfts/share/discord", form, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      createToast("Shared to discord", "success");
    } catch (error) {
      createToast(error.message, "warning");
    }
  };

  const copyToClipboard = async (elementRef) => {
    try {
      if (!elementRef) {
        throw new Error("Paint an Image, or Generate to share!");
      }

      const image = await (
        await takeScreenshot(elementRef)
      ).toDataURL("image/png");

      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
        });

      createToast("Copied image to clipboard", "success");
    } catch (error) {
      createToast("failed to copy", "error");
      console.log(error);
      console.error("Failed to copy: ", error.message);
    }
  };

  const postToTikTok = (elementRef) => {};

  const postToTwitter = async (elementRef) => {
    try {
      const image = await (
        await takeScreenshot(elementRef)
      ).toDataURL("image/png");

      const res = await fetch(image);
      const blob = await res.blob();

      const imageCID = await addToIpfs(ipfs, blob);

      const imageLink = "https://ipfs.io/ipfs/" + imageCID.path;

      window.open(
        `https://twitter.com/intent/tweet?text=IDEA%20created%20on%20www.idea-nfts.com&url=${imageLink}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const postToLinkedin = async (elementRef) => {
    try {
      const image = await (
        await takeScreenshot(elementRef)
      ).toDataURL("image/png");

      const res = await fetch(image);
      const blob = await res.blob();

      const imageCID = await addToIpfs(ipfs, blob);

      const imageLink = "https://ipfs.io/ipfs/" + imageCID.path;

      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${imageLink}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const postToReddit = async (elementRef) => {
    try {
      const image = await (
        await takeScreenshot(elementRef)
      ).toDataURL("image/png");

      const res = await fetch(image);
      const blob = await res.blob();

      const imageCID = await addToIpfs(ipfs, blob);

      const imageLink = "https://ipfs.io/ipfs/" + imageCID.path;

      window.open(
        `http://www.reddit.com/submit?url=${imageLink}&title=My%20IDEA!`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const postToFacebook = async (elementRef) => {
    try {
      const image = await (
        await takeScreenshot(elementRef)
      ).toDataURL("image/png");

      const res = await fetch(image);
      const blob = await res.blob();

      const imageCID = await addToIpfs(ipfs, blob);

      const imageLink = "https://ipfs.io/ipfs/" + imageCID.path;

      window.open(
        `https://www.facebook.com/sharer.php?href=${imageLink}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    postToDiscord,
    copyToClipboard,
    postToTikTok,
    postToTwitter,
    postToLinkedin,
    postToReddit,
    postToFacebook,
  };
};
