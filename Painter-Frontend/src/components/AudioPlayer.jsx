import { Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSettingsStore } from "../hooks/use-settings-store.hook";
import SVG_Icon from "./SVG_Icon";
import { isMobile } from "react-device-detect";

let attached = false;

const AudioPlayer = (props) => {
  const { children, ...rest } = props;
  const [isPlaying, setIsPlaying] = useState(true);
  const audioPlayer = useRef();
  const { audioPlayedOnce } = useSettingsStore();

  useEffect(() => {
    if (!audioPlayedOnce) {
      const autoPlay = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!audioPlayedOnce) {
          audioPlayer.current.play();
        }

        useSettingsStore.setState({ audioPlayedOnce: true });
      };

      if (!attached) {
        if (isMobile) {
          window.addEventListener("touchstart", autoPlay);

          window.addEventListener("touchend", () => {
            window.removeEventListener("touchstart", autoPlay);
          });
        } else {
          window.addEventListener("mousedown", autoPlay);

          window.addEventListener("mouseup", () => {
            window.removeEventListener("mousedown", autoPlay);
          });
        }

        attached = true;
      }
    }
  }, []);

  const audioHandler = async () => {
    if (!props.song) {
      return;
    }

    if (!isPlaying) {
      audioPlayer.current.play();
      return setIsPlaying(true);
    }

    audioPlayer.current.pause();
    document.querySelectorAll("audio").forEach((el) => el.pause());
    return setIsPlaying(false);
  };

  return (
    <Button
      variant={"mintButton"}
      border={"1px"}
      width={14}
      marginTop={[0, 0, 10, 10]}
      marginLeft={10}
      borderStyle={"solid"}
      borderColor={"black"}
      padding={"1rem 1rem 1rem 1rem"}
      background={"blue.discord"}
      borderRadius={24}
      boxShadow={"3px 3px 0px #1A1A1A"}
      _active={{ background: "blue.discord", opacity: 0.5 }}
      _hover={{ background: "blue.discord", opacity: 0.8 }}
      onClick={() => audioHandler()}
      {...rest}
    >
      <audio
        src={import.meta.env.VITE_ASSETS_PATH + "songs/" + props.song}
        ref={audioPlayer}
        loop={"loop"}
        id={"audio"}
      ></audio>
      <SVG_Icon fileName={isPlaying ? "sound_on.svg" : "sound_off.svg"} />
    </Button>
  );
};

export default AudioPlayer;
