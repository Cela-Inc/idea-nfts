import create from "zustand";

const useGenerationStore = create((set, get) => ({
  generatedImages: [],
  selectedImageData: {},
  generationText: "",
}));

export default useGenerationStore;
