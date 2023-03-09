import create from "zustand";

export const userUserInfoStore = create((set, get) => ({
  user: null,
  Paper: null,
  paperUserDetails: null,
  setPaperUserDetails: (input) => {
    set((state) => ({ paperUserDetails: { ...input } }));
  },
}));
