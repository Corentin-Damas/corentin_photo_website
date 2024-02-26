import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

const date = new Date().getFullYear();

function page() {
  return (
    <div>
      <Hero_gallery
        title="The world in Infrared"
        c1="New eyes"
        c2={`2019 - ${date}`}
        c3="Planet earth"
      />
      <Image_grid currentDir="infrared" />
    </div>
  );
}

export default page;
