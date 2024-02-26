import React from "react";
import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

function page() {
  return (
    <div>
      <Hero_gallery
        title="A year in japan"
        c1="Wondering"
        c2="2016 - 2018"
        c3="Japan"
      />
      <Image_grid currentDir="a_year_in_japan" />
    </div>
  );
}

export default page;
