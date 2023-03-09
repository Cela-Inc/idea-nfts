import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { SketchPicker } from "react-color";
import { useState } from "react";
import Countdown from "react-countdown";

const CustomisationMenuList = ({ optionsList, materialName }) => {
  const { model } = useCreatorStore();
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [pickerVisible, setPickerVisible] = useState(false);

  const changeMaterialColor = (colorway, title) => {
    model.glb.materials[materialName].color.set(colorway);
    model.materialColors[materialName] = { color: colorway, title };
  };

  return (
    <SimpleGrid
      columns={[3]}
      gap={5}
      marginY={4}
      paddingBottom={1}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Flex
        height={"100%"}
        width={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Button
          height={"100%"}
          width={"85%"}
          backgroundPosition={"top"}
          background={`url(${
            import.meta.env.VITE_ASSETS_PATH
          }/svgs/color_picker.svg)`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          alignSelf={"center"}
          key={uuidv4()}
          borderRadius={"50%"}
          onClick={() => {
            setPickerVisible(!pickerVisible);
          }}
        ></Button>
        <Text textAlign={"center"} position={"relative"} fontSize={"smaller"}>
          Custom
        </Text>
        {pickerVisible && (
          <Box position='absolute' top={24} zIndex={10} pointerEvents={"all"}>
            <SketchPicker
              color={color}
              onChange={(color) => {
                setColor({ ...color.rgb });
                changeMaterialColor(color.hex, "custom");
              }}
            />
          </Box>
        )}
      </Flex>
      {optionsList.map((item) => (
        <Flex
          overflow={"visible"}
          width={"3rem"}
          flexDir={"column"}
          justifyContent='center'
          alignItems={"center"}
          key={uuidv4()}
          gap={1}
        >
          <Button
            background={item.title === "Original" ? "gray" : item.color}
            borderRadius={"50%"}
            height={10}
            width={10}
            onClick={() => changeMaterialColor(item.color, item.title)}
          ></Button>
          <Text textAlign={"center"} position={"relative"} fontSize={"smaller"}>
            {item.title === "Original" ? (
              "Free"
            ) : (
              <Countdown daysInHours date={Date.now() + 5000000}>
                <Text>Unavailable</Text>
              </Countdown>
            )}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default CustomisationMenuList;
