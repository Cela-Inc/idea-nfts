import create from "zustand";

export const usePainterStore = create((set, get) => ({
  gameStart: false,
  gameFinished: false,
  paintingImage: null,
  paintBrush: {
    color: [0.94, 0.43, 0.06, 1],
    colorRGB: [241, 112, 19, 100],
    brushSize: 5,
  },
  painter: null,
  timerOptions: {
    timeSlots: [
      // "time" property is in minutes, the timer useEffect takes care of conversions
      { title: "1min", time: 1, text: "01:00" },
      { title: "3min", time: 3, text: "03:00" },
      { title: "5min", time: 5, text: "05:00" },
      { title: "10min", time: 10, text: "10:00" },
    ],
    selected: { title: "5min", time: 5, text: "05:00" },
    timeLeft: 60 * 5,
  },
  timerPaused: false,
  paintOptions: {
    phrase: [
      "2023",
      "House by the lake",
      "Sunset at the beach",
      "Basketballs on the moon",
      "FAANGS",
      "Hello Web3",
      "My IDEAs",
    ],
    remixOptions: [
      { title: "painting1", fileName: "1586467002.jpg" },
      {
        title: "painting2",
        fileName:
          "pop-culture-characters-parody-thrift-store-paintings-dave-pollot-3-5a97ba737ac25__880.jpg",
      },
      {
        title: "painting3",
        fileName:
          "pop-culture-characters-thrift-store-paintings-dave-pollot-6.jpg",
      },
      {
        title: "painting4",
        fileName:
          "pop-culture-characters-thrift-store-paintings-dave-pollot-7.jpg",
      },
      {
        title: "painting5",
        fileName:
          "pop-culture-characters-thrift-store-paintings-dave-pollot-11.jpg",
      },
      {
        title: "painting6",
        fileName:
          "pop-culture-characters-thrift-store-paintings-dave-pollot-20.jpg",
      },
      {
        title: "painting7",
        fileName:
          "pop-culture-characters-thrift-store-paintings-dave-pollot-28.jpg",
      },
      {
        title: "painting8",
        fileName:
          "re-directed-thrift-store-paintings-gnarled-branch-david-irvine-321.jpg",
      },
      { title: "painting9", fileName: "repaintings1.jpg" },
      { title: "painting10", fileName: "repaintings2.jpg" },
      { title: "painting11", fileName: "repaintings3.jpg" },
      { title: "painting12", fileName: "repaintings4.jpg" },
      { title: "painting13", fileName: "repaintings6.jpg" },
      { title: "painting14", fileName: "repaintings7.jpg" },
      { title: "painting15", fileName: "repaintings9.jpg" },
      { title: "painting16", fileName: "repaintings12.jpg" },
      { title: "painting17", fileName: "repaintings14.jpg" },
      { title: "painting18", fileName: "repaintings15.jpg" },
      { title: "painting19", fileName: "repaintings16.jpg" },
      { title: "painting20", fileName: "repaintings17.jpg" },
      { title: "painting21", fileName: "repaintings18.jpg" },
      { title: "painting22", fileName: "repaintings20.jpg" },
      { title: "painting23", fileName: "repaintings22.jpg" },
      { title: "painting24", fileName: "repaintings23.jpg" },
      { title: "painting25", fileName: "thriftstore-5.jpg" },
    ],
    selected: null,
  },
  generatedRemixOptions: [],
  projectDetails: {
    projectName: "",
    projectDescription: "",
  },
  showRemix: false,
  pickerVisible: false,
  sliderVisible: false,
  optionsView: "OPTIONS",
  currentPage: "PAINTER",
  ideaView: "INVISIBLY",
  alertOptions: {
    type: "error",
    message: "Failed to save draft",
    showAlert: false,
  },
  handleSideMenus: (option) => {
    if (option === "picker") {
      set((state) => ({
        pickerVisible: !state.pickerVisible,
        sliderVisible: false,
      }));
    } else if (option === "slider") {
      set((state) => ({
        pickerVisible: false,
        sliderVisible: !state.sliderVisible,
      }));
    } else {
      set(() => ({
        pickerVisible: false,
        sliderVisible: false,
      }));
    }
  },
  useUndo: undefined,
  useRedo: undefined,
}));
