import { create } from "zustand";

export interface Store {
    isSideMenuOpen: boolean;
    toggleSideMenu: () => void;
};

export const useStore = create<Store>((set) => ({
    isSideMenuOpen: false,
    toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}));