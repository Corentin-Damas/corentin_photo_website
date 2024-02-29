import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

import InfosBubble from "../../../../../../components/gallery/InfosBubble";
import MuseumsTxt from "../../../../../../components/gallery/project_text/museumsTxt";

import styles from "../../layout.module.css";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="Museums"
        c1="Tsuzukitai"
        c2="2018"
        c3="England - Netherlands"
      />
      <aside className={styles.project_info_bubble}>
        <InfosBubble txt={<MuseumsTxt />} />
      </aside>
      <Image_grid currentDir="museums" />
      <h4 className={styles.seeMore__title}>Also recommended:</h4>
      <div className={styles.seeMore__container}>
        <Link
          href="/gallery/morning_shadows"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/morning_shadows/S/20-morning_shadows.jpg"
            alt="Rush hour on London bridge, shadows of people going toward the city"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            Morning <br /> shadows
          </h5>
        </Link>
        <Link
          href="/gallery/earth_and_sky"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/earth_and_sky/S/01-earth_and_sky.jpg"
            alt="Landscape at sunrise of a valley bathing in pink clouds, in the middle the ruine of a old japanese castle"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            Earth & <br /> sky
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
