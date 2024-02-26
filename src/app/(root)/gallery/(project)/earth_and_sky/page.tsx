import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

const date = new Date().getFullYear();

function page() {
  return (
    <div>
      <Hero_gallery
        title="Between earth and sky"
        c1="Time"
        c2={`2016 - ${date}`}
        c3="Planet earth"
      />
      <Image_grid currentDir="earth_and_sky" />
    </div>
  );
}

export default page;
