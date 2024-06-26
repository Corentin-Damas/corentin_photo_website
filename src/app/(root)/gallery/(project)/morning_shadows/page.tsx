import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import MorningShadowsTxt from "../../../../../../components/gallery/project_text/MorningShadowsTxt";

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="Morning shadows"
        c1="The city"
        c2="2018"
        c3="England"
      />

      <Project_Story txt={<MorningShadowsTxt />} />

      <Images_grid_container currentDir="morning_shadows" />
      <h4 className={styles.seeMore__title}>Also recommended:</h4>
      <div className={styles.seeMore__container}>
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
        <Link href="/gallery/museums" className={`${styles.projectPreview}`}>
          <Image
            src="/museums/S/02-museums.jpg"
            alt="Visitors in form of the painting called the Night Watch from Rembrandt in the rijksmuseum, Amsterdam, Netherlands"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview_img} ${styles.project_img} `}
          />
          <h5 className={styles.project_title}>4/ Museums</h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
