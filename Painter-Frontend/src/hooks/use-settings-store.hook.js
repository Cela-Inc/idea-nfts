import create from "zustand";

export const useSettingsStore = create((set, get) => ({
  acceptCookies: localStorage.getItem("acceptCookies"),
  audioPlayedOnce: false,
}));
