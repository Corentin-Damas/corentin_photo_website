import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import MuseumsTxt from "../../../../../../components/gallery/project_text/MuseumsTxt";

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="Museums"
        c1="Tsuzukitai"
        c2="2018"
        c3="England - Netherlands"
      />

      <Project_Story txt={<MuseumsTxt />} />

      <Images_grid_container currentDir="museums" />
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
            3/ Morning <br /> shadows
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
           5/ Earth & <br /> sky
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
