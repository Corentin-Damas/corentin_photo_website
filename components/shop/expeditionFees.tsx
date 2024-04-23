import React, { useCallback, useEffect, useState } from "react";
import styles from "../shop/ExpeditionFees.module.css";
import { useExpeditionInfo } from "../../providers/expedition-provider";
import { queryExpedition } from "../../providers/utils/getQueryOutput";
import { useCartProduct } from "../../providers/cart-provider";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ExpeditionFees = ({
  allCountries,
  qtyThreshold,
  maxW_Mounted_threshold,
  maxW_Tirage_threshold,
  mountedType,
  expeditionData,
  totalProduct,
}: {
  allCountries: string[];
  qtyThreshold: number;
  maxW_Mounted_threshold: number;
  maxW_Tirage_threshold: number;
  mountedType: string;
  expeditionData: null | expeditionResType;
  totalProduct: number;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (prm: paramsChoice) => {
      const params = new URLSearchParams(searchParams);
      Object.entries(prm).map(
        ([key, el]) => el != "0" && el != "" && params.set(key, el)
      );
      return params.toString();
    },
    [searchParams]
  );

  function getMaxPrice(): number {
    if (expeditionData !== null) {
      return expeditionData.tiragePrice > expeditionData.mountedPrice
        ? expeditionData.tiragePrice
        : expeditionData.mountedPrice;
    }
    return 0;
  }

  const maxPrice: number = getMaxPrice();
  const totalPrice: number = totalProduct + maxPrice;

  const selectedCountry: string | null = searchParams.get("dest");

  function onCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const pToadd: paramsChoice = {
      dest: e.target.value,
      qty: qtyThreshold as unknown as string,
      tTh: maxW_Tirage_threshold as unknown as string,
      mTh: maxW_Mounted_threshold as unknown as string,
      ty: mountedType,
    };

    router.replace(`/cart?${createQueryString(pToadd)}`, {
      scroll: false,
    });
  }

  return (
    <div className={styles.form_countainer}>
      <form action="" id={"country__form"}>
        <select
          id={"country"}
          name={"destination country"}
          className={styles.option_txt}
          onChange={(e) => onCountryChange(e)}
        >
          <option value="">Select destination country</option>
          {allCountries !== undefined &&
            allCountries.map((cnt: any) => (
              <option key={cnt} value={cnt}>
                {cnt}
              </option>
            ))}
        </select>
      </form>
      <div>
        {expeditionData !== null && (
          <div className={styles.exportationInfo}>
            <div className={styles.infoLigne}>
              <p className={`detail_02 ${styles.details}`}>Expedition:</p>
              <p>{maxPrice}€</p>
            </div>
            <div className={styles.infoLigne}>
              <p className={`detail_02 ${styles.details}`}>
                Expected expedition time:{" "}
              </p>
              <p>
                {expeditionData.tirageTime > expeditionData.mountedTime
                  ? expeditionData.tirageTime
                  : expeditionData.mountedTime}{" "} days
              </p>
            </div>
            <div className={styles.infoLigne}>
              <p className={`detail_02 ${styles.details}`}>All artwork:</p>
              <p>{totalProduct.toFixed(2)}€</p>
            </div>
          </div>
        )}
        <h5 className={styles.totalPrice}>
          <span className={styles.totalTxt}>total:</span>{" "}
          {totalPrice.toFixed(2)}€
        </h5>
      </div>
    </div>
  );
};

export default ExpeditionFees;
