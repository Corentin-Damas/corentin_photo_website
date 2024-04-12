import { create } from "zustand";

interface CartProduct {
  cartOfProduct: productResumeType[];
  addToCart: (prod: productResumeType) => void;
  removeFromCart: (prod: productResumeType) => void;
}

export const useCartProduct = create<CartProduct>()((set) => ({
  cartOfProduct: [],
  addToCart: (prod: productResumeType) =>
    set((state) => ({
      cartOfProduct: [...state.cartOfProduct, prod],
    })),

  removeFromCart: (prod: productResumeType) =>
    set((state) => ({
      cartOfProduct: state.cartOfProduct.filter((el) => el !== prod),
    })),
}));
