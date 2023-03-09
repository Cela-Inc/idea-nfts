import { Box } from "@chakra-ui/react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";
import MyColorPicker from "./MyColorPicker";

const ColorPicker = ({ pickerVisible, setPickerVisible }) => {
  const { paintBrush } = usePainterStore();

  const changeMaterialColor = (colorway) => {
    usePainterStore.setState({
      paintBrush: {
        ...paintBrush,
        color: [
          colorway[0] / 255,
          colorway[1] / 255,
          colorway[2] / 255,
          colorway[3] / 255,
        ],
        colorRGB: colorway,
      },
    });
  };

  return (
    <>
      <div
        style={{
          background: `rgb(${paintBrush.colorRGB[0]},${paintBrush.colorRGB[1]},${paintBrush.colorRGB[2]})`,
        }}
        className={"colorPickerIcon"}
        onClick={() => {
          setPickerVisible("picker");
        }}
      ></div>
      {pickerVisible && (
        <Box
          position='absolute'
          height={"16.5rem"}
          width={"15rem"}
          right={16}
          bottom={[24, 24, 24, null]}
          top={[null, null, null, 24]}
          zIndex={10}
          background={"#aaaaaa"}
          borderRadius={10}
        >
          <MyColorPicker
            changeMaterialColor={(colors) => changeMaterialColor(colors)}
          />
        </Box>
      )}
    </>
  );
};

export default ColorPicker;
