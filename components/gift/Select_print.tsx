import React from "react";
import { queryImg } from "../../providers/utils/getQueryOutput";
import Select_img from "./Select_img";

const Select_print = async ({ searchParams }: { searchParams: any }) => {
  const imgQuery = await queryImg(searchParams.img);
  const imgStringify = JSON.stringify(imgQuery);
  const productQuery = await queryImg(searchParams.product);
  const productStringify = JSON.stringify(productQuery);
  console.log(imgStringify);
  // console.log("searchParams ->" + JSON.stringify(searchParams));
  return <Select_img objImg={imgStringify} />;
};

export default Select_print;
