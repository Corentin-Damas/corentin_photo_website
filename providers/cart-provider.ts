import { create } from "zustand";

type product = {
    img: string
    imgSize: string
    totalPrice: number
    paper?: string | null
    border:number
    nameDisplayMethod: string
    frameSize?: number
    color?: string
    passePartoutColor?: string
    passePartoutSize?: number
    hanging?: boolean | null
    glass?: string
    glassThickness?: number
    protection?: string
}


interface CartProduct {
  cartOfProduct: product[];
  addToCart: (prod: product) => void;
  removeFromCart: (prod: product) => void;
}

export const useCartProduct = create<CartProduct>()((set) => ({
  cartOfProduct: [],
  addToCart: (prod: product) =>
    set((state) => ({
        cartOfProduct: [...state.cartOfProduct, prod],
    })),

    removeFromCart: (prod: product) =>
    set((state) => ({
        cartOfProduct: state.cartOfProduct.filter((el) => el !== prod),
    })),
}));
