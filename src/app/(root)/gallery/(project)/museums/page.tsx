import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

function page() {
  return (
    <div>
      <Hero_gallery
        title="Museums"
        c1="Tsuzukitai"
        c2="2018"
        c3="England - Netherlands"
      />
      <Image_grid currentDir="museums" />
    </div>
  );
}

export default page;
