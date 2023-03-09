import { ChainId } from "@thirdweb-dev/sdk";
import create from "zustand";

export const useCreatorStore = create((set, get) => ({
  projectType: "PAINT",
  canvasRef: null,
  setCanvasRef: (input) => {
    set((state) => ({ canvasRef: input }));
  },
  cameraRef: null,
  setCameraRef: (input) => {
    set((state) => ({ cameraRef: input }));
  },
  model: {
    glb: {},
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
  setModel: (input) => {
    set((state) => ({ model: { ...state.model, ...input } }));
  },
  savedProjects: [],
  currentProject: {
    title: "Untitled Project",
    description: "",
    problem: "",
    solution: "",
    supply: "",
    utility: "",
    twitter: "",
    contest: false,
    track: "",
  },
  updateCurrentProjectInfo: (name, value) => {
    set((state) => ({
      currentProject: { ...state.currentProject, [name]: value },
    }));
  },
  setProjects: async (input) => {
    if (get().savedProjects[input.id]) {
      get().savedProjects[input.id] = {
        ...get().currentProject,
        ...input,
        model: { ...get().model, glb: {} },
        background: { ...get().background },
        music: { ...get().music },
        animation: get().animation,
        blockchain: get().blockchain,
      };

      set((state) => ({
        currentProject: {
          ...state.currentProject,
          model: { ...state.model, glb: {} },
          background: { ...state.background },
          music: { ...state.music },
          animation: state.animation,
          blockchain: state.blockchain,
        },
      }));
    } else {
      set((state) => ({
        savedProjects: [
          ...state.savedProjects,
          {
            ...state.currentProject,
            ...input,
            model: { ...state.model, glb: {} },
            background: state.background,
            music: state.music,
            animation: state.animation,
            blockchain: state.blockchain,
          },
        ],
      }));
    }
    localStorage.clear("projects");
    localStorage.setItem("projects", JSON.stringify(get().savedProjects));
  },
  loadProject: async (input) => {
    set((state) => ({
      currentProject: { ...input },
      model: { ...input.model },
      background: { ...input.background },
      music: { ...input.music },
      blockchain: input.blockchain,
      animation: input.animation,
    }));
  },
  getProjectsFromStorage: async () => {
    const projects = JSON.parse(localStorage.getItem("projects"));

    if (projects) {
      await set((state) => ({
        savedProjects: [...projects],
      }));
      return projects;
    }
  },
  createNewProject: () => {
    set((state) => ({
      currentProject: {
        title: "Untitled Project",
        description: "",
        problem: "",
        solution: "",
        supply: "",
        unlockableContent: false,
      },
      model: {
        glb: {},
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
      background: { title: "Original", image: "/original" },
      music: { title: "", song: "", artist: "", thumbnail: "" },
      animation: "",
      blockchain: "",
    }));
  },
  availableBackgrounds: [
    { title: "Original", image: "/original" },
    { title: "Dark Blue", image: "/dark_blue" },
    { title: "Pink Gradient", image: "/pink_gradient" },
  ],
  addToBackgrounds: (newBackground) => {
    set((state) => ({
      availableBackgrounds: [...get().availableBackgrounds, newBackground],
    }));
  },
  background: {
    title: "Original",
    image: "/original",
  },
  setBackground: (input) => {
    set((state) => ({ background: { ...input } }));
  },
  music: {
    title: "",
    song: "",
    artist: "",
    thumbnail: "",
  },
  setMusic: (input) => {
    set((state) => ({ music: input }));
  },
  animation: "",
  setAnimation: (input) => {
    set((state) => ({ animation: input }));
  },
  blockchain: import.meta.env.VITE_CHAIN_ID,
  chain: ChainId.Mumbai,
  setBlockchain: (input) => {
    set((state) => ({ blockchain: input.title, chain: input.chainId }));
  },
  usePainter: false,
  setUsePainter: (input) => {
    set((state) => ({ usePainter: input }));
  },
  paintedImage: "",
  setPaintedImage: (input) => {
    set((state) => ({ paintedImage: input }));
  },
}));
