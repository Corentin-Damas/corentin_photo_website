import React from "react";

import {
  queryCountries,
  queryExpedition,
} from "../../providers/utils/getQueryOutput";
import { useExpeditionInfo } from "../../providers/expedition-provider";
import ExpeditionFees from "../shop/ExpeditionInfos";
import CompletCartResum from "./CompletCartResum";

// RESWITCH TOO DANS UN COMPOSANT SERVEUR

const CartFetching = async ({ searchParams }: { searchParams: any }) => {
  // const expeditionInfo = await queryExpedition();

  const allCountries = await queryCountries();
  const coutrySet = new Set<string>();
  allCountries?.map((el) => coutrySet.add(el.country));
  const countryArr: string[] = Array.from(coutrySet);

  const destination: string | null = searchParams.dest;
  const quantity: string | null = searchParams.qty;
  const tirage_threshold: string | null = searchParams.tTh;
  const montage_threshold: string | null = searchParams.mTh;
  const prodTypeMax_mounted: string | null = searchParams.ty;

  let data: expeditionInfoType | undefined | null;
  if (destination !== null && quantity !== null) {
    data = await queryExpedition(destination, quantity);
  }

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
