import { Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { takeScreenshot } from "../../utils/takeScreenshot.utils";

const CardViewImage = () => {
  const { cameraRef, sceneRef } = useCreatorStore();

  useEffect(() => {
    cameraRef.current.position.set([0, 30, 50]);
  }, []);

  const getImage = async () => {
    return await takeScreenshot(sceneRef);
  };

  return <>{}</>;
};

export default CardViewImage;
