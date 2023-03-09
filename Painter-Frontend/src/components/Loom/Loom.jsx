import { setup, isSupported } from "@loomhq/record-sdk";
import { oembed } from "@loomhq/loom-embed";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import SVG_Icon from "../SVG_Icon";

// loom account info
const PUBLIC_APP_ID = "";
const BUTTON_ID = "loom-record-sdk-button";

const Loom = () => {
  const [videoHTML, setVideoHTML] = useState("");

  useEffect(() => {
    async function setupLoom() {
      const { supported, error } = await isSupported();

      if (!supported) {
        console.warn(`Error setting up Loom: ${error}`);
        return;
      }

      const button = document.getElementById(BUTTON_ID);

      if (!button) {
        return;
      }

      const { configureButton } = await setup({
        publicAppId: PUBLIC_APP_ID,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on("insert-click", async (video) => {
        const { html } = await oembed(video.sharedUrl, { width: 400 });
        setVideoHTML(html);
      });
    }

    setupLoom();
  }, []);

  return (
    <>
      <Button
        isDisabled
        background={"transparent"}
        _hover={{ background: "transparent" }}
        _active={{ background: "transparent" }}
        fontWeight={"light"}
        id={BUTTON_ID}
      >
        <SVG_Icon fileName={"record.svg"} marginRight={5} /> Record Pitch
      </Button>
      <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
    </>
  );
};

export default Loom;
