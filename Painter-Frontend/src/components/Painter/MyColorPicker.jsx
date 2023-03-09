import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";

let mousePositions = {
  positionX: 262.5,
  positionY: 49,
};

// for displaying each circle
const mousePresetPositions = [
  {
    color: [239, 50, 145, 255],
    positions: { positionX: 208, positionY: 3.08 },
  },
  { color: [73, 194, 255, 255], positions: { positionX: 51, positionY: 62 } },
  {
    color: [0, 229, 153, 255],
    positions: { positionX: 36, positionY: 101.7 },
  },
  { color: [220, 69, 55, 255], positions: { positionX: 288, positionY: 4 } },
  { color: [243, 186, 47, 255], positions: { positionX: 261, positionY: 45 } },
];

// SVG for each color button
const SVG_Element = ({ color }) => {
  return (
    <svg
      width='28'
      height='32'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.2021 7.02176C13.1282 7.02176 13.0544 7.05339 12.9806 7.05339C11.7108 7.21141 10.3819 7.51147 9.05302 7.93805C9.98326 7.3377 10.943 6.80059 11.9766 6.35825C12.9511 5.94753 12.5671 4.24136 11.5336 4.62042C9.77647 5.25228 8.07847 5.99482 6.36569 6.73732C8.09324 5.55247 9.87985 4.49401 11.7698 3.59353C12.6262 3.18281 12.0061 1.57139 11.1201 1.9506C9.62884 2.59834 8.13751 3.24609 6.66097 3.89372C7.56166 3.11959 8.47709 2.34555 9.36304 1.5398C10.0127 0.955303 9.31875 -0.229542 8.55091 0.0390224C5.73072 1.01847 3.07295 2.39294 0.429944 3.79893C-0.544599 4.32026 0.311807 5.86843 1.27162 5.3471C2.1133 4.90476 2.94014 4.46244 3.78172 4.05161C2.82191 4.84174 1.89174 5.61575 0.946759 6.37414C0.267498 6.92712 0.636633 8.44364 1.59646 8.01706C1.72933 7.95392 1.87703 7.89067 2.00989 7.84328C1.47834 8.26985 0.961498 8.7122 0.444788 9.17028C-0.219628 9.75478 0.503805 10.9239 1.25691 10.6711C2.1576 10.3709 3.02873 10.0549 3.91468 9.69161C3.23542 10.2761 2.57101 10.8765 1.89185 11.4926C1.16832 12.1561 2.11329 13.4515 2.91069 12.8986C4.15096 12.0613 5.64229 11.2398 7.20742 10.5605C6.46915 11.1609 5.76044 11.8085 5.05162 12.4879C4.25434 13.262 5.43549 14.5416 6.23288 13.7517C8.37383 11.6506 10.6773 9.89704 13.4089 8.79119C14.2356 8.45937 14.2208 6.9112 13.202 7.02173L13.2021 7.02176Z'
        fill={color}
      />
    </svg>
  );
};

const createRGBColor = (arr) => {
  return "rgba(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ")";
};

const MyColorPicker = ({ changeMaterialColor }) => {
  const pickerRef = useRef();
  const isPicking = useRef(false);
  const { paintBrush } = usePainterStore();

  const image = new Image(300, 150);
  image.src = import.meta.env.VITE_ASSETS_PATH + "/svgs/color_picker.svg";

  // Handles re-drawing the circle picker on the canvas
  const drawCircle = () => {
    const canvasContext = pickerRef.current.getContext("2d", {
      willReadFrequently: true,
    });

    clearCanvas(canvasContext);
    canvasContext.drawImage(image, 0, 0, 300, 150);
    canvasContext.beginPath();
    canvasContext.arc(
      mousePositions.positionX,
      mousePositions.positionY,
      4,
      0,
      2 * Math.PI,
      false
    );
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "#000";
    canvasContext.stroke();
  };

  // helper to completely remove everything on the canvas
  const clearCanvas = (canvasContext) => {
    canvasContext.clearRect(
      0,
      0,
      pickerRef.current.clientWidth,
      pickerRef.current.clientHeight
    );
  };

  // init color picker canvas and handlers
  useEffect(() => {
    const canvasContext = pickerRef.current.getContext("2d", {
      willReadFrequently: true,
    });

    image.onload = () => canvasContext.drawImage(image, 0, 0, 300, 150);

    // Helper functions
    const setColorEvent = (mouseEvent) => {
      clearCanvas(canvasContext);

      canvasContext.drawImage(image, 0, 0, 300, 150);

      mousePositions = {
        positionX:
          (mouseEvent.offsetX / pickerRef.current.clientWidth) *
          pickerRef.current.width,
        positionY:
          (mouseEvent.offsetY / pickerRef.current.clientHeight) *
          pickerRef.current.height,
      };

      const imgData = canvasContext.getImageData(
        mousePositions.positionX,
        mousePositions.positionY,
        1,
        1
      );
      const rgba = imgData.data;

      changeMaterialColor([rgba[0], rgba[1], rgba[2], rgba[3]]);
      drawCircle(canvasContext);
    };

    // event functions
    function mouseDown(mouseEvent) {
      if (!isPicking.current) {
        setColorEvent(mouseEvent);
      }

      isPicking.current = true;
    }

    function mouseMove(mouseEvent) {
      if (isPicking.current) {
        setColorEvent(mouseEvent);
      }
    }

    function mouseUp() {
      isPicking.current = false;
    }

    pickerRef.current.addEventListener("mousedown", mouseDown);
    pickerRef.current.addEventListener("mousemove", mouseMove);
    pickerRef.current.addEventListener("touchstart", mouseDown);
    pickerRef.current.addEventListener("touchmove", mouseMove);
    pickerRef.current.addEventListener("mouseup", mouseUp);

    return () => {
      if (pickerRef.current) {
        clearCanvas(canvasContext);
        pickerRef.current.removeEventListener("mousedown", mouseDown);
        pickerRef.current.removeEventListener("mousemove", mouseMove);
        pickerRef.current.removeEventListener("touchstart", mouseDown);
        pickerRef.current.removeEventListener("touchmove", mouseMove);
        pickerRef.current.removeEventListener("mouseup", mouseUp);
      }
    };
  }, []);

  // clears canvas and positions the picker circle
  const presetClickHandler = (color, positions) => {
    changeMaterialColor(color);
    mousePositions = positions;
    drawCircle();
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={4}
      paddingY={4}
      paddingX={5}
      overflow={"hidden"}
      height={"100%"}
    >
      <Flex gap={4} marginBottom={1}>
        {mousePresetPositions.map((preset) => (
          <Button
            key={preset.color}
            onClick={() => presetClickHandler(preset.color, preset.positions)}
            padding={0}
            margin={0}
            background={"transparent"}
            minW={"1rem"}
          >
            <SVG_Element color={createRGBColor(preset.color)} />
          </Button>
        ))}
      </Flex>
      <canvas
        style={{ display: "block", height: "100%", width: "100%" }}
        ref={pickerRef}
      ></canvas>
      <div
        style={{ background: createRGBColor(paintBrush.colorRGB) }}
        className={"colorPickerBar"}
      ></div>
    </Flex>
  );
};

export default MyColorPicker;
