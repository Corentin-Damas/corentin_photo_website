import React from "react";

import CompletCartResum from "./CompletCartResum";
import { expeditionInfos } from "../shop/expedition";

const CartFetching = ({ searchParams }: { searchParams: any }) => {
  const allCountries: string[] = [];
  Object.values(expeditionInfos).map((el) => {
    allCountries.push(el.country);
  });

  const coutrySet = new Set<string>();
  allCountries.map((el) => coutrySet.add(el));
  const countryArr: string[] = Array.from(coutrySet);

  const destination: string | null = searchParams.dest;
  const quantity: string | null = searchParams.qty;
  const tirage_threshold: string | null = searchParams.tTh;
  const montage_threshold: string | null = searchParams.mTh;
  const prodTypeMax_mounted: string | null = searchParams.ty;

  if (destination !== null && quantity != null) {
  }
  const data: expeditionInfoType | undefined | null =
    expeditionInfos[`${destination}_${quantity}` as keyof expeditionObjectType];

  let finalData: expeditionResType | null = null;

  if (data !== undefined && data !== null && tirage_threshold !== null) {
    finalData = {
      tiragePrice: data[
        `tirage_${tirage_threshold}` as keyof expeditionInfoType
      ] as number,
      tirageTime: data.delay_tirage,
      mountedPrice: data[
        `${prodTypeMax_mounted}_${montage_threshold}` as keyof expeditionInfoType
      ] as number,
      mountedTime: data[
        `delay_${prodTypeMax_mounted}` as keyof expeditionInfoType
      ] as number,
    };
  }

  return (
    <CompletCartResum allCountries={countryArr} expeditionData={finalData} />
  );
};

export default CartFetching;
