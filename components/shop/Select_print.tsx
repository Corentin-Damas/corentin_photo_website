import React from "react";
import { queryImg, queryFrame } from "../../providers/utils/getQueryOutput";
import Select_img from "./Select_img";

const Select_print = async ({ searchParams }: { searchParams: any }) => {
  if (typeof searchParams.img !== "string") {
    return <Select_img objImg={null} objProduct={null} />;
  }

  let imgQuery: pictureInfoType | undefined | null;
  if (searchParams.img == null || searchParams.img == undefined) {
    imgQuery = await queryImg("04-earth_and_sky.jpg");
  } else {
    imgQuery = await queryImg(searchParams.img);
  }
  // console.log(imgQuery);
  const imgStringify = JSON.stringify(imgQuery);

  let productQuery: null | undefined | productInfoType;

  if (imgQuery !== null && imgQuery !== undefined) {
    productQuery = await queryFrame(searchParams.product, imgQuery.format);
  }
  const productStringify = JSON.stringify(productQuery);

  console.log(imgStringify);
  console.log(productStringify);
  // console.log("searchParams ->" + JSON.stringify(searchParams));
  return <Select_img objImg={imgStringify} objProduct={productStringify} />;
};

export default Select_print;
