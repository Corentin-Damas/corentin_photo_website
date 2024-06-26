import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../page.module.css";
import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import YearInJapanTxt from "../../../../../../components/gallery/project_text/YearInJapanTxt";

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="A year in japan"
        c1="Wandering"
        c2="2016 - 2018"
        c3="Japan"
      />

      <Project_Story txt={<YearInJapanTxt />} />
      <Images_grid_container currentDir="a_year_in_japan" />

      <h4 className={styles.seeMore__title}>Also recommended:</h4>
      <div className={styles.seeMore__container}>
        <Link
          href="/gallery/morning_shadows"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/tsuzukitai/S/10-tsuzukitai.jpg"
            alt="Deer head in a blurry badckground"
            sizes="100vw"
            loading="lazy"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            1/ Trapped <br /> memories
          </h5>
        </Link>
        <Link
          href="/gallery/morning_shadows"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/morning_shadows/S/20-morning_shadows.jpg"
            alt="Rush hour on London bridge, shadows of people going toward the city"
            sizes="100vw"
            loading="lazy"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            3/ Morning <br /> shadows
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
