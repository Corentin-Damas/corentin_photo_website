import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartProduct } from "../../providers/cart-provider";
import Link from "next/link";

import styles from "./CartNavBtn.module.css";
import Image from "next/image";

function CartNavBtn() {
  const cartList = useCartProduct((state) => state.cartOfProduct);
  const remFromCart = useCartProduct((state) => state.removeFromCart);
  const [isOpen, setIsOpen] = useState(false);

  let total: number = 0;
  cartList.map((el) => (total += el.totalPrice * el.quantity));

  return (
    <div className={styles.cart__container}>
      {cartList.length > 0 && (
        <div className={styles.redDote}>
          <p className={`detail_02 ${styles.txt}`}>{cartList.length}</p>
        </div>
      )}
      <MdOutlineShoppingCart
        className={`${styles.cartIcone}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className={styles.cartNav__container}>
          <div className={styles.cartMainContent}>
            {cartList.map((el) => (
              <div key={el.totalPrice} className={styles.resume}>
                <div className={styles.res_Left}>
                  <div className={`detail_01 ${styles.res_head}`}>
                    <p>{el.nameDisplayMethod.replaceAll("_", "-")}</p>
                    <p>x{el.quantity}</p>
                  </div>

                  <p className={`detail_02 ${styles.res_detail}`}>
                    long edge: {el.imgSize} cm
                  </p>
                  <p className={`detail_02 ${styles.res_price}`}>
                    unity: {el.totalPrice}€
                  </p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => {
                      if (cartList.length == 1) {
                        localStorage.removeItem("cart");
                      }
                      remFromCart(el);
                    }}
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
          {cartList.length <= 0 ? (
            <div>
              <h5>
                You have nothing yet in your cart, check the gallery or the shop
              </h5>
            </div>
          ) : (
            <div className={styles.cartFooter}>
              <h5 className={styles.totalPrice}>
                <span className={styles.totalTxt}>total :</span>{" "}
                {total.toFixed(2)}
                €* <br />{" "}
                <span className={styles.priceDetail}>
                  *without transport fee
                </span>
              </h5>
              <Link
                className={`${styles.majorLink}`}
                href="/cart"
                onClick={() => setIsOpen(false)}
              >
                <p className={`${styles.linkTxt} `}>Order now</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartNavBtn;
