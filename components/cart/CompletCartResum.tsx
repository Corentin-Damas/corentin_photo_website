"use client";
import React from "react";
import Link from "next/link";
import styles from "./CompletCartResum.module.css";
import { useCartProduct } from "../../providers/cart-provider";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CompletCartResum() {
  const cartList = useCartProduct((state) => state.cartOfProduct);
  const remFromCart = useCartProduct((state) => state.removeFromCart);
  const router = useRouter();

  let total: number = 0;
  cartList.map((el) => (total += el.totalPrice * el.quantity));

  const checkout = async () => {
    await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: cartList }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("redicrect to", response);
        if (response.url) {
          router.push(response.url);
        }
      });
  };

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
              <div key={el.date} className={styles.resume}>
                <div className={`detail_01 ${styles.res_head}`}>
                  <p>{el.nameDisplayMethod.replaceAll("_", "-")}</p>
                  <p>x{el.quantity}</p>
                </div>
                <div className={styles.res_Left}>
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
                  {el.glass !== null && el.glass !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Protection type: {el.glass}
                    </p>
                  )}
                  {el.hanging !== undefined && (
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Hanging element: {el.hanging == true ? "Yes" : "No"}
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
                    unity: {el.totalPrice.toFixed(2)}€
                  </p>
                  <div className={styles.actions_btn}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => remFromCart(el)}
                    >
                      remove
                    </button>
                  </div>
                </div>
                <div className={styles.res_Right}>
                  <Image
                    src={`/${el.img.slice(3)}/S/${el.img}.jpg`}
                    className={`${styles.imgPreview}  ${
                      el?.nameDisplayMethod == ""
                        ? ""
                        : el?.nameDisplayMethod == "Gallery Frame"
                        ? styles.galleryFrame
                        : el?.nameDisplayMethod ==
                          "Solid Wood Frame With Passe_Partout"
                        ? styles.passePartout
                        : el?.nameDisplayMethod == "Artbox"
                        ? styles.artbox
                        : el?.nameDisplayMethod == "Floater Frame"
                        ? styles.floater
                        : ""
                    }

                  ${
                    el.frameSize !== undefined && el.frameSize > 25
                      ? styles.bigFrame
                      : el.frameSize !== undefined &&
                        el.frameSize <= 25 &&
                        el.frameSize > 10
                      ? styles.mediumFrame
                      : el.frameSize !== undefined && el.frameSize <= 10
                      ? styles.smallFrame
                      : ""
                  }
                  ${
                    el.border == 0
                      ? ""
                      : el.border == 1
                      ? styles.border01
                      : el.border == 2
                      ? styles.border02
                      : el.border == 3
                      ? styles.border03
                      : el.border == 5
                      ? styles.border05
                      : el.border == 8
                      ? styles.border08
                      : styles.border12
                  }
                  ${
                    el.passePartoutSize == 9
                      ? ""
                      : el.passePartoutSize == 3
                      ? styles.passSizeSmall
                      : styles.passSizeBig
                  }
                  ${
                    el.nameDisplayMethod ==
                      "Solid Wood Frame With Passe_Partout" &&
                    el.passePartoutColor == "white"
                      ? ""
                      : styles.blackPass
                  }
                  ${
                    el.color == "Alder brown"
                      ? styles.alderBrown
                      : el.color == "Black oak"
                      ? styles.blackOak
                      : el.color == "Natural oak"
                      ? styles.naturalOak
                      : el.color == "Maple white"
                      ? styles.mapleWhite
                      : ""
                  }
                   `}
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
            <button
              className={`${styles.majorLink} ${styles.orderLink} ${styles.finalOrderLink}`}
              onClick={checkout}
            >
              Order now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompletCartResum;
