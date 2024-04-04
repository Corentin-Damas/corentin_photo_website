"use client";
import React from "react";
import Link from "next/link";
import styles from "./CompletCartResum.module.css";
import { useCartProduct } from "../../providers/cart-provider";
import Image from "next/image";

function CompletCartResum() {
  const cartList = useCartProduct((state) => state.cartOfProduct);
  const remFromCart = useCartProduct((state) => state.removeFromCart);

  let total: number = 0;
  cartList.map((el) => (total += el.totalPrice * el.quantity));

  return (
    <div className={styles.cart__container}>
      {cartList.length == 0 && (
        <h5>
          You don&apos;t have anything yet in your cart, visite the{" "}
          <Link href="/gallery">Gallery</Link> or the{" "}
          <Link href="./gift">Gift</Link> and come back latter or check bellow
          for the FAQ{" "}
        </h5>
      )}
      {cartList.length > 0 && (
        <div className={styles.cartNav__container}>
          <div className={styles.cartMainContent}>
            {cartList.map((el) => (
              <div key={el.totalPrice} className={styles.resume}>
                <div className={styles.res_Left}>
                  <div className={`detail_01 ${styles.res_head}`}>
                    <p>{el.nameDisplayMethod.replaceAll("_", "-")}</p>
                    <p>x{el.quantity}</p>
                  </div>
                  {el.color !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Frame material: {el.color}
                    </p>
                  )}
                  {el.frameSize !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Frame size: {el.frameSize} cm
                    </p>
                  )}
                  {el.passePartoutColor !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Passe-Partout Color: {el.passePartoutColor}
                    </p>
                  )}
                  {el.passePartoutSize !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Passe-Partout Size: {el.passePartoutSize}
                    </p>
                  )}
                  {el.border !== 0 && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Border size: {el.border} cm
                    </p>
                  )}
                  {el.paper !== null && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Paper: {el.paper}
                    </p>
                  )}
                  {el.glass !== null && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Protection type: {el.glass}
                    </p>
                  )}
                  {el.hanging !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Hanging element: {el.hanging == true ? "Yes": "No"}
                    </p>
                  )}
                  {el.glassThickness !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Glass thickness: {el.glassThickness} mm
                    </p>
                  )}
                  {el.protection !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Protective layer: {el.protection}
                    </p>
                  )}

                  <p className={`detail_02 ${styles.res_detail}`}>
                    Long edge: {el.imgSize} cm
                  </p>
                  <p className={`detail_02 ${styles.res_price}`}>
                    unity: {el.totalPrice}€
                  </p>
                  <div className={styles.actions_btn}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => remFromCart(el)}
                    >
                      remove one
                    </button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => remFromCart(el)}
                    >
                      remove all
                    </button>
                  </div>
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
          <div className={styles.cartFooter}>
            <h5 className={styles.totalPrice}>
              <span className={styles.totalTxt}>total:</span> {total.toFixed(2)}
              €
            </h5>
            <p
              className={`${styles.majorLink} ${styles.orderLink} ${styles.finalOrderLink}`}
            >
              Order now
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompletCartResum;
