import React from "react";
import { queryExpedition } from "../../providers/utils/getQueryOutput";

const expeditionFees = async ({
  country,
  qty,
}: {
  country: string;
  qty: number;
}) => {
  let expeditionInfo: expeditionInfoType | undefined | null;

  let expeditionTime: number | undefined | null;

  expeditionInfo = await queryExpedition(country, qty);

  return <div>expeditionFees</div>;
};
