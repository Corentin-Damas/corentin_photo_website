import { create } from "zustand";

interface CartProduct {
  cartOfProduct: productResumeType[];
  addToCart: (prod: productResumeType) => void;
  removeFromCart: (prod: productResumeType) => void;
  localStorageCart: (storageProd: productResumeType[]) => void;
}

export const useCartProduct = create<CartProduct>()((set) => ({
  cartOfProduct: [],


  localStorageCart: (storageProd: productResumeType[]) =>
    set(() => ({
      cartOfProduct: [...storageProd],
    })),

  addToCart: (prod: productResumeType) =>
    set((state) => ({
      cartOfProduct: [...state.cartOfProduct, prod],
    })),

  removeFromCart: (prod: productResumeType) =>
    set((state) => ({
      cartOfProduct: state.cartOfProduct.filter((el) => el !== prod),
    })),
}));
