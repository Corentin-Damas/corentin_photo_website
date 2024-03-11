import { create } from "zustand";

interface ImgSelected {
  imgSelected: string[];
  addImgSelected: (img: string) => void;
  removeImgSelected: (img: string) => void;
}

export const useImgSelected = create<ImgSelected>()((set) => ({
  imgSelected: [],
  addImgSelected: (img: string) =>
    set((state) => ({
      imgSelected: [...state.imgSelected, img],
    })),

  removeImgSelected: (img: string) =>
    set((state) => ({
      imgSelected: state.imgSelected.filter((el) => el !== img),
    })),
}));
