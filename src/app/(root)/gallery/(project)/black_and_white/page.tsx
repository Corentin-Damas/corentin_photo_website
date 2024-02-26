import React from "react";
import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

function page() {
  const date = new Date().getFullYear();
  return (
    <div>
      <Hero_gallery
        title="Work in Black and white"
        c1="Experience"
        c2={`2016 - ${date}`}
        c3="Planet earth"
      />
      <Image_grid currentDir="black_and_white" />
    </div>
  );
}

export default page;
