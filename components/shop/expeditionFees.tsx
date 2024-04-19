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
}: {
  allCountries: string[];
  qtyThreshold: number;
  maxW_Mounted_threshold: number;
  maxW_Tirage_threshold: number;
  mountedType: string;
  expeditionData: null | expeditionResType;
}) => {
  const cartList = useCartProduct((state) => state.cartOfProduct);

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

  // function priceExtraction(data: any) {
  //   if (data !== undefined && data !== null) {
  //     return {
  //       tiragePrice: data[`tirage_${width_threshold_tirage}`],
  //       tirageTime: data.delay_tirage,
  //       mountedPrice: data[`${prodTypeMax_mounted}_${width_threshold_mounted}`],
  //       mountedTime: data[`delay_${prodTypeMax_mounted}`],
  //     };
  //   }
  // }

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
          <>
            <h5>
              price expedition{" "}
              {expeditionData.tiragePrice > expeditionData.mountedPrice
                ? expeditionData.tiragePrice
                : expeditionData.mountedPrice}
            </h5>
            <h5>
              expedition time{" "}
              {expeditionData.tirageTime > expeditionData.mountedTime
                ? expeditionData.tirageTime
                : expeditionData.mountedTime}
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpeditionFees;
