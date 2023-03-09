import create from "zustand";

export const useMenuStore = create((set) => ({
  menu: "",
  setMenu: (input) => {
    set((state) => ({ menu: input }));
  },
}));
