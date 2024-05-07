import { create } from "zustand";

interface CartProduct {
  cartOfProduct: productResumeType[];
  addToCart: (prod: productResumeType) => void;
  removeFromCart: (prod: productResumeType) => void;
  modifyQuantity: (prod: productResumeType, qty: number) => void;
  localStorageCart: (storageProd: productResumeType[]) => void;
}

function modifyQuant(
  toChange: productResumeType,
  arr: productResumeType[],
  newQty: number
): productResumeType[] {
  arr.map((el: productResumeType) => {
    if (el.date === toChange.date) {
      el.quantity = newQty ;
    }
    return el;
  });
  return arr;
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

  modifyQuantity: (prod: productResumeType, qty: number) =>
    set((state) => ({
      cartOfProduct: [...modifyQuant(prod, state.cartOfProduct, qty)],
    })),
}));
