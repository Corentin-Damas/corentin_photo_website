import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartProduct } from "../providers/cart-provider";
import styles from "./CartNavBtn.module.css";
import Image from "next/image";

function CartNavBtn() {
  const cartList = useCartProduct((state) => state.cartOfProduct);
  const remFromCart = useCartProduct((state) => state.removeFromCart);

  return (
    <div className={styles.cart__container}>
      {cartList.length > 0 && (
        <div className={styles.redDote}>
          <p className="detail_02">{cartList.length}</p>
        </div>
      )}
      <MdOutlineShoppingCart
        className={`${styles.cartIcone} ${
          cartList.length < 1 && styles.cart__lock
        }  `}
      />

      {cartList.length > 0 && (
        <div className={styles.cartNav__container}>
          {cartList.map((el) => (
            <div key={el.totalPrice} className={styles.resume}>
              <div className={styles.res_Left}>
                <p className={`detail_01 ${styles.res_head}`}>
                  {el.nameDisplayMethod}
                </p>

                <p className={`detail_02 ${styles.res_detail}`}>
                  long edge: {el.imgSize} cm
                </p>
                <p className={`detail_02 ${styles.res_price}`}>
                  total: {el.totalPrice}€
                </p>
                <button
                  className={styles.removeBtn}
                  onClick={() => remFromCart(el)}
                >
                  remove
                </button>
              </div>
              <div className={styles.res_Right}>
                <Image
                  src={`/${el.img.slice(3)}/S/${el.img}.jpg`}
                  className={styles.imgPreview}
                  alt="Actual selected pîcture"
                  sizes="100vw"
                  width={0}
                  height={0}
                  quality={80}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartNavBtn;
