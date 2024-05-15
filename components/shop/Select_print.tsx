import React from "react";
import Select_img from "./Select_img";
import {imagesInfos} from "./images"
import {framesInfos} from "./frames"

const Select_print = async ({ searchParams }: { searchParams: any }) => {
  if (typeof searchParams.img !== "string") {
    return <Select_img objImg={null} objProduct={null} />;
  }

  // Retrive image informations
  let imgQuery: pictureInfoType | undefined | null;
  if (searchParams.img !== null || searchParams.img !== undefined) {
    imgQuery = imagesInfos[`${searchParams.img}`]

  }
  const imgStringify = JSON.stringify(imgQuery);
  

  // Retrive Product informations
  let productQuery: null | undefined | productInfoType;
  if (imgQuery !== null && imgQuery !== undefined) {
    productQuery = framesInfos[`${searchParams.product}_${imgQuery.format.replace('/', ":")}`];
  }
  const productStringify = JSON.stringify(productQuery);



  return <Select_img objImg={imgStringify} objProduct={productStringify} />;
};

export default Select_print;
