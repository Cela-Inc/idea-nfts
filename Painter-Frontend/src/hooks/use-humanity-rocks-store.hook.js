import create from "zustand";

export const useHumanityRocksStore = create((set, get) => ({
  selectedMesh: {
    title: "Black Shuttle",
    shipNumber: "HR-SHIP-256",
    image: `${
      import.meta.env.VITE_ASSETS_PATH
    }humanityRocks/images/black_shuttle.png`,
    index: 0,
  },
  selectedFlame: {
    title: "",
    image: ``,
    index: 0,
  },
  activeCustomizeMenu: "Spaceship",
  stateSnapshot: [
    {
      selectedMesh: {
        title: "Black Shuttle",
        shipNumber: "HR-SHIP-256",
        image: `${
          import.meta.env.VITE_ASSETS_PATH
        }humanityRocks/images/black_shuttle.png`,
        index: 0,
      },
      selectedFlame: {
        title: "",
        image: ``,
        index: 0,
      },
      activeCustomizeMenu: "Spaceship",
    },
  ],
  snapshotIndex: 0,
}));
