import React from "react";
import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import InfosBubble from "../../../../../../components/gallery/InfosBubble";
import styles from "../../layout.module.css";
import Link from "next/link";
import Image from "next/image";
import YearInJapanTxt from "../../../../../../components/gallery/project_text/aYearInJapanTxt";


function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="A year in japan"
        c1="Wandering"
        c2="2016 - 2018"
        c3="Japan"
      />
      <aside className={styles.project_info_bubble}>
        <InfosBubble txt={<YearInJapanTxt/>}/>
      </aside>
      <Image_grid currentDir="a_year_in_japan" />

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
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            Trapped <br /> memories
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
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>
            Morning <br /> shadows
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
