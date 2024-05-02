import React from "react";
import { queryImg, queryFrame } from "../../providers/utils/getQueryOutput";
import Select_img from "./Select_img";

const Select_print = async ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams)
  if (typeof searchParams.img !== "string") {
    return <Select_img objImg={null} objProduct={null} />;
  }

  let imgQuery: pictureInfoType | undefined | null;
  if (searchParams.img == null || searchParams.img == undefined) {
    return undefined
  } else {
    imgQuery = await queryImg(searchParams.img);
    console.log(imgQuery)
  }
  // console.log(imgQuery);
  const imgStringify = JSON.stringify(imgQuery);

  let productQuery: null | undefined | productInfoType;

  if (imgQuery !== null && imgQuery !== undefined) {
    productQuery = await queryFrame(searchParams.product, imgQuery.format);
  }
  const productStringify = JSON.stringify(productQuery);

  // console.log("selected print", imgStringify);
  // console.log("selected print", productStringify);
  // console.log("searchParams ->" + JSON.stringify(searchParams));
  return <Select_img objImg={imgStringify} objProduct={productStringify} />;
};

export default Select_print;
