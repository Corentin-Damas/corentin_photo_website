import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import EathAndSkyTxt from "../../../../../../components/gallery/project_text/EathAndSkyTxt";
import Save_description from "../../../../../../components/gallery/Save_description";
const date = new Date().getFullYear();

function page() {
  return (
    <>
      <div className={styles.page}>
        <Hero_gallery
          title="Between earth and sky"
          c1="Time"
          c2={`2016 - ${date}`}
          c3="Planet earth"
        />

        <Project_Story txt={<EathAndSkyTxt />} />

        <Images_grid_container currentDir="earth_and_sky" />
        <h4 className={styles.seeMore__title}>Also recommended:</h4>
        <div className={styles.seeMore__container}>
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
          <Link href="/gallery/infrared" className={`${styles.projectPreview}`}>
            <Image
              src="/infrared/S/12-infrared.jpg"
              alt="Infrared picture of a field with few Menhir standing up and others on the ground "
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
              className={`${styles.projectPreview_img} ${styles.project_img} `}
            />
            <h5 className={styles.project_title}>
              6/ World in <br /> Infrared
            </h5>
          </Link>
        </div>
        <Save_description />
      </div>
    </>
  );
}

export default page;
