import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import BlackAndWhiteTxt from "../../../../../../components/gallery/project_text/BlackAndWhiteTxt";
import Save_description from "../../../../../../components/gallery/Save_description";

function page() {
  const date = new Date().getFullYear();
  return (
    <>
      <div className={styles.page}>
        <Hero_gallery
          title="Work in Black and white"
          c1="Experience"
          c2={`2016 - ${date}`}
          c3="Planet earth"
        />

        <Project_Story txt={<BlackAndWhiteTxt />} />

        <Images_grid_container currentDir="black_and_white" />
        <h4 className={styles.seeMore__title}>Also recommended:</h4>
        <div className={styles.seeMore__container}>
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
          <Link
            href="/gallery/tsuzukitai"
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
              1/ Trapped <br /> memories
            </h5>
          </Link>
        </div>
        <Save_description />
      </div>
    </>
  );
}

export default page;
