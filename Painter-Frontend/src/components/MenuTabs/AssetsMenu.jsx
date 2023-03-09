import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import { useState } from "react";
import MenuItem from "./MenuItem";

const models = [
  {
    title: "mannequin",
    image: "/mannequin_screenshot.png",
    materialColors: {
      Mannequin: {
        color: "white",
        title: "Original",
      },
      cloth: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Mannequin Color",
        materialName: "Mannequin",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
      {
        title: "Shirt Color",
        materialName: "cloth",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "orange",
            title: "Orange",
          },
          {
            color: "purple",
            title: "Purple",
          },
          {
            color: "red",
            title: "Red",
          },
        ],
      },
    ],
  },
  {
    title: "knight",
    image: "/knight_screenshot.png",
    materialColors: {
      Knight_MAT: {
        color: "white",
        title: "Original",
      },
      "Knight_MAT.001": {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Knight MAT",
        materialName: "Knight_MAT",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
      {
        title: "Knight MAT 001",
        materialName: "Knight_MAT.001",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Basquiat Graffiti Art Wall",
    image: "/graffiti_screenshot.png",
    materialColors: {
      cropped_textured_mesh_0: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Material One",
        materialName: "cropped_textured_mesh_0",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Christmas Balls",
    image: "/christmasballs_screenshot.png",
    materialColors: {
      Materiale_220: {
        color: "white",
        title: "Original",
      },
      Materiale_221: {
        color: "white",
        title: "Original",
      },
      Materiale_223: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Base Coat #1",
        materialName: "Materiale_220",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
      {
        title: "Hangers #1",
        materialName: "Materiale_221",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
      {
        title: "Spiral Ball #1",
        materialName: "Materiale_223",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Christmas Hat",
    image: "/christmashat_screenshot.png",
    materialColors: {
      material: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Hat Color",
        materialName: "material",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Christmas Tree",
    image: "/christmastree_screenshot.png",
    materialColors: {
      christmas_tree: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Christmas Tree",
        materialName: "christmas_tree",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Rubiks Cube",
    image: "/rubikscube_screenshot.png",
    materialColors: {
      Rubik: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Base Color",
        materialName: "Rubik",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Solar System",
    image: "/solarSystem_screenshot.png",
    materialColors: {
      sol_2: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Sun",
        materialName: "sol_2",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Medical Brain",
    image: "/brain_screenshot.png",
    materialColors: {
      "08_-_Default": {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Color Way",
        materialName: "08_-_Default",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
  {
    title: "Halloween",
    image: import.meta.env.BASE_URL + "halloween_screenshot.png",
    materialColors: {
      Halloween: {
        color: "white",
        title: "Original",
      },
    },
    customisableOptions: [
      {
        title: "Halloween",
        materialName: "Halloween",
        colors: [
          {
            color: "white",
            title: "Original",
          },
          {
            color: "yellow",
            title: "Yellow",
          },
          {
            color: "pink",
            title: "Pink",
          },
          {
            color: "green",
            title: "Green",
          },
        ],
      },
    ],
  },
];

const AssetsMenu = () => {
  const { setModel } = useCreatorStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MenuItem
      placeholder={"Search assets"}
      searchTerm={searchTerm}
      setSearchTerm={(e) => setSearchTerm(e)}
      columns={[2]}
    >
      {models.map((item) => (
        <Flex
          key={uuidv4()}
          flexDir={"column"}
          justifyContent='center'
          alignItems={"center"}
          gap={2}
          display={
            searchTerm === ""
              ? "flex"
              : item.model.includes(searchTerm)
              ? "flex"
              : "none"
          }
          onClick={() => setModel({ ...item })}
          _hover={{ cursor: "pointer" }}
        >
          <Image
            height={"auto"}
            width={"10rem"}
            _hover={{
              opacity: "0.75",
            }}
            _active={{
              opacity: "0.5",
            }}
            alt={item.title}
            src={import.meta.env.VITE_ASSETS_PATH + "/images" + item.image}
          />
        </Flex>
      ))}
    </MenuItem>
  );
};

export default AssetsMenu;
