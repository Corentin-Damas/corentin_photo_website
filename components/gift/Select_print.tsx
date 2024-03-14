import React from "react";
import { queryData } from "../../providers/utils/getQueryOutput";

const Select_print = async ({ searchParams }: { searchParams: any }) => {
  const queryOUtput = await queryData(searchParams.q);
  console.log(JSON.stringify(queryOUtput));
  console.log("searchParams ->" + JSON.stringify(searchParams));
  return <div>Hello</div>;
};

export default Select_print;
