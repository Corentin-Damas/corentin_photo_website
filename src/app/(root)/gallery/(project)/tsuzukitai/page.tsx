import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import TsuzukitaiTxt from "../../../../../../components/gallery/project_text/TsuzukitaiTxt";

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="Trapped memories"
        c1="Tsuzukitai"
        c2="2016 - 2018"
        c3="Japan"
      />

      <Project_Story txt={<TsuzukitaiTxt />} />

      <Images_grid_container currentDir="tsuzukitai" />
      <h4 className={styles.seeMore__title}>Also recommended:</h4>
      <div className={styles.seeMore__container}>
        <Link
          href="/gallery/black_and_white"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/black_and_white/S/12-black_and_white.jpg"
            alt="Picture in black and white of the inside of a ruine of a Church"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            7/ Black & <br /> white
          </h5>
        </Link>
        <Link
          href="/gallery/a_year_in_japan"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/a_year_in_japan/S/02-a_year_in_japan.jpg"
            alt="Night cityscape of a Bridge named rainbow Bridge from Tokyo, Japan"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
           2/ A year in <br /> japan
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
