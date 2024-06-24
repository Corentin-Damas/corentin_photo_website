"use client";
import { useEffect } from "react";
import { useCartProduct } from "../../providers/cart-provider";
const LocalStorage = () => {
  const retriveFromLocalStorage = useCartProduct(
    (state) => state.localStorageCart
  );
  const cartList = useCartProduct((state) => state.cartOfProduct);

  useEffect(() => {
    const cartFromLocalStorage: productResumeType[] = JSON.parse(
      window.localStorage.getItem("cart") || "[]"
    );
    if (cartList.length == 0 && cartFromLocalStorage.length > 0) {
      retriveFromLocalStorage(cartFromLocalStorage);
    } else {
      localStorage.setItem("cart", JSON.stringify(cartList))
    }
  });
};

export default LocalStorage;
