"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CompletCartResum.module.css";
import { useCartProduct } from "../../providers/cart-provider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "../main_section/Form";
import { useSearchParams } from "next/navigation";
import ExpeditionInfos from "../shop/ExpeditionInfos";
import LocalStorage from "../LocalStorage";

function CompletCartResum({
  allCountries,
  expeditionData,
}: {
  allCountries: string[];
  expeditionData: null | expeditionResType;
}) {
  const cartList = useCartProduct((state) => state.cartOfProduct);
  const remFromCart = useCartProduct((state) => state.removeFromCart);

  const searchParams = useSearchParams();
  const selectedCountry: string | null = searchParams.get("dest");
  const [is_AskAdvice, setIs_AskAdvice] = useState<boolean>(false);

  LocalStorage();

  function getMaxPrice(): number {
    if (expeditionData !== null) {
      if (expeditionData.tiragePrice == undefined) {
        return expeditionData.mountedPrice;
      } else if (expeditionData.mountedPrice == undefined) {
        return expeditionData.tiragePrice;
      }
      return expeditionData.tiragePrice > expeditionData.mountedPrice
        ? expeditionData.tiragePrice
        : expeditionData.mountedPrice;
    }
    return 0;
  }
  // form

  const coutryTable: coutryTableType = {
    germany: "DE",
    austria: "AT",
    france: "FR",
    guernesey: "GG",
    "honk-kong": "HK",
    india: "IN",
    ireland: "IE",
    italy: "IT",
    japan: "JP",
    jersey: "JE",
    finland: "FI",
    iceland: "IS",
    switzerland: "CH",
    latvia: "LV",
    liechtenstein: "LI",
    lithuania: "LT",
    luxembourg: "LU",
    malta: "MT",
    monaco: "MC",
    netherlands: "NL",
    norway: "NO",
    poland: "PL",
    portugal: "PT",
    czechia: "CZ",
    romania: "RO",
    denmark: "DK",
    greece: "GR",
    "united-kingdom": "GB",
    slovakia: "SK",
    slovenia: "SI",
    spain: "ES",
    belgium: "BE",
    bulgaria: "BG",
    canada: "CA",
    "united-states": "US",
    korea: "KR",
    china: "CN",
    croatia: "HR",
    estonia: "EE",
    sweden: "SE",
  };

  const router = useRouter();

  let total: number = 0;
  let qty: number = 0;

  const tirage_Arr: number[] = [0];
  const dibon_Arr: number[] = [0];
  const frame_Arr: number[] = [0];

  cartList.map((el) => {
    total += el.totalPrice * el.quantity;
    qty += el.quantity;
    if (el.prodType == "tirage") {
      tirage_Arr.push(el.maxSize);
    } else if (el.prodType == "frame") {
      frame_Arr.push(el.maxSize);
    } else if (el.prodType == "dibon") {
      dibon_Arr.push(el.maxSize);
    }
  });

  function getThreshold(arr: number[]): number {
    if (arr.length == 1) {
      return 0;
    }
    const maxW = Math.max(...arr);
    const maxW_threshold: number =
      maxW <= 25
        ? 25
        : maxW <= 60
        ? 60
        : maxW <= 100
        ? 100
        : maxW <= 125
        ? 125
        : maxW <= 180
        ? 180
        : 220;
    return maxW_threshold;
  }

  // Tirage threshold
  const qtyThreshold = qty < 1 ? 0 : qty < 3 ? 1 : qty <= 5 && qty > 2 ? 3 : 6;
  const maxW_Tirage_threshold: number = getThreshold(tirage_Arr);
  const maxW_dibon_threshold: number = getThreshold(dibon_Arr);
  const maxW_frame_threshold: number = getThreshold(frame_Arr);

  let maxW_Mounted_threshold: number = 0;
  let mountedType: string = "";

  if (maxW_dibon_threshold > maxW_frame_threshold) {
    maxW_Mounted_threshold = maxW_dibon_threshold;
    mountedType = "dibon";
  } else if (maxW_dibon_threshold <= maxW_frame_threshold) {
    maxW_Mounted_threshold = maxW_frame_threshold;
    mountedType = "frame";
  }

  const maxPrice: number = getMaxPrice();
  const allowedCountry: string =
    selectedCountry !== null ? coutryTable[selectedCountry as kCountry] : "FR";

  const minimumExp: number =
    expeditionData !== null ? expeditionData.tirageTime : 7;
  const maximumExp: number =
    expeditionData !== null ? expeditionData.tirageTime : 15;

  const checkout = async () => {
    await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cartList,
        price: total,
        countryCode: allowedCountry,
        shippingCoast: maxPrice,
        minExp: minimumExp,
        maxExp: maximumExp,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          router.push(response.url);
        }
      });
  };

  useEffect(() => {
    if (selectedCountry == null || cartList.length < 1) {
      router.push("/cart", { scroll: false });
    }
  }, [selectedCountry, cartList, router]);

  return (
    <section className={styles.cart__section}>
      <div className={styles.cart__container}>
        {cartList.length == 0 && (
          <h5>
            You don&apos;t have anything yet in your cart, visite the{" "}
            <Link href="/gallery" className={styles.links}>
              Gallery
            </Link>{" "}
            or the{" "}
            <Link href="./shop" className={styles.links}>
              Shop
            </Link>{" "}
            and come back later
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
                        Frame size: {el.frameSize} mm
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
                      Picture Long edge: {el.imgSize} cm
                    </p>
                    <p className={`detail_02 ${styles.res_detail}`}>
                      Total Long edge: {el.maxSize} cm
                    </p>
                    <p className={`detail_02 ${styles.res_price}`}>
                      unity: {el.totalPrice.toFixed(2)}€
                    </p>
                    <div className={styles.actions_btn}>
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
                      el.nameDisplayMethod ==
                        "Solid Wood Frame With Passe_Partout" &&
                      el.passePartoutSize == 3
                        ? styles.passSizeSmall
                        : el.nameDisplayMethod ==
                            "Solid Wood Frame With Passe_Partout" &&
                          styles.passSizeBig
                    }
 
                  ${
                    el.nameDisplayMethod ==
                      "Solid Wood Frame With Passe_Partout" &&
                    el.passePartoutColor == "black"
                      ? styles.blackPass
                      : ""
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
              <div className={styles.expedition}>
                {cartList.length > 0 && (
                  <ExpeditionInfos
                    allCountries={allCountries}
                    qtyThreshold={qtyThreshold}
                    maxW_Mounted_threshold={maxW_Mounted_threshold}
                    maxW_Tirage_threshold={maxW_Tirage_threshold}
                    mountedType={mountedType}
                    expeditionData={expeditionData}
                    totalProduct={total}
                  />
                )}
              </div>

              <button
                className={`${styles.majorLink} ${styles.orderLink} `}
                onClick={checkout}
              >
                Order now
              </button>
              <div className={styles.advice_section}>
                <button
                  className={`${styles.majorLink} ${styles.adviceLink} `}
                  onClick={() => setIs_AskAdvice(!is_AskAdvice)}
                >
                  {!is_AskAdvice
                    ? "Ask for an advice"
                    : "Please fill the form bellow"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {is_AskAdvice && (
        <div className={styles.form__container}>
          <Form context={"advice"} />
        </div>
      )}
    </section>
  );
}

export default CompletCartResum;
