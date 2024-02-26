import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

function page() {
  return (
    <div>
      <Hero_gallery
        title="Morning shadows"
        c1="The city"
        c2="2018"
        c3="England"
      />
      <Image_grid currentDir="morning_shadows" />
    </div>
  );
}

export default page;
