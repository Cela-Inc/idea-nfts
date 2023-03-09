import { useEffect, useRef, useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import { useCreateToast } from "../../hooks/use-create-toast-hook";
import { undoPainting } from "../../utils/undoPainting";
import { redoPainting } from "../../utils/Redopainting";
import { Button, Flex, Heading } from "@chakra-ui/react";

const PainterGame = () => {
  const { setPaintedImage } = useCreatorStore();
  const { paintBrush, timerOptions, gameStart, gameFinished } =
    usePainterStore();
  const canvasRef = useRef();
  const wgl = useRef();
  const painter = useRef();
  const [enableScreenshot, setEnableScreenshot] = useState(true);
  const [canvasDataUrl, setCanvasDataUrl] = useState(null);
  const [isUnsupported, setIsUnsupported] = useState(false);
  const createToast = useCreateToast();

  useEffect(() => {
    if (!painter.current && WrappedGL) {
      // TODO: Test if this still takes the correct screenshot
      wgl.current = WrappedGL.create(canvasRef.current);

      if (wgl.current !== null && wgl.current !== undefined) {
        if (wgl.current.hasFloatTextureSupport()) {
          // required features are supported
          const paintObj = new Paint(
            canvasRef.current,
            wgl.current,
            enableScreenshot,
            setCanvasDataUrl,
            [...paintBrush.color],
            paintBrush.brushSize
          );

          painter.current = paintObj;

          usePainterStore.setState({
            useUndo: () => undoPainting(painter),
            useRedo: () => redoPainting(painter),
            painter: painter.current,
          });
        } else {
          setIsUnsupported(true);
          createToast("Error, webGL unsupported", "error");
        }
      } else {
        setIsUnsupported(true);
        createToast("Error, webGL unsupported", "error");
      }
    }
  }, [gameStart]);

  // ! painter.brushColorHSVA <--- use this to change brush color. Its an array
  useEffect(() => {
    if (painter.current) {
      painter.current.brushColorHSVA = [...paintBrush.color];
      painter.current.brushScale = paintBrush.brushSize;
    }
  }, [paintBrush]);

  useEffect(() => {
    if (gameFinished && painter.current?.brush) {
      painter.current.brush.bristleCount = 0;
      usePainterStore.setState({ paintingImage: painter.current.save() });
    }

    return () => {
      if (painter.current?.brush) {
        painter.current.brush.bristleCount = 100;
      }
    };
  }, [gameFinished]);

  useEffect(() => {
    if (canvasDataUrl) {
      setPaintedImage(canvasDataUrl);
    }
  }, [canvasDataUrl]);

  //! clean up useEffect
  useEffect(() => {
    return () => {
      if (gameFinished) {
        usePainterStore.setState({
          gameStart: false,
          gameFinished: false,
          paintingImage: null,
          projectDetails: {
            projectName: "",
            projectDescription: "",
          },
        });
      }
    };
  }, []);

  return (
    <>
      {/* Main Painting Game canvas */}
      {isUnsupported && (
        <Flex
          height={"100%"}
          width={"100%"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          paddingX={24}
        >
          <Heading>Device Unsupported,</Heading>
          <Heading>check out our 3D experience</Heading>
          <Heading>or AI text-to-image</Heading>
          <Button
            onClick={() =>
              usePainterStore.setState({
                optionsView: "OPTIONS",
                gameFinished: false,
                gameStart: false,
              })
            }
            marginLeft={5}
            variant={"ideaButton"}
            background={"transparent"}
            marginTop={5}
            width={"25%"}
          >
            Back
          </Button>
        </Flex>
      )}
      {!isUnsupported && (
        <canvas
          style={{
            width: "100%",
            pointerEvents: timerOptions.paused ? "none" : "initial",
          }}
          ref={canvasRef}
          id={"canvas"}
        ></canvas>
      )}
    </>
  );
};

export default PainterGame;
