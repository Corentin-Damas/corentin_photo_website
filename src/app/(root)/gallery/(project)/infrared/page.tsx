import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../page.module.css";
import Images_grid_container from "../../../../../../components/gallery/Images_grid_container";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import Project_Story from "../../../../../../components/gallery/Project_Story";
import InfraredTxt from "../../../../../../components/gallery/project_text/InfraredTxt";
import Save_description from "../../../../../../components/gallery/Save_description";

const date = new Date().getFullYear();

function page() {
  return (
    <>
      <div className={styles.page}>
        <Hero_gallery
          title="The world in Infrared"
          c1="New eyes"
          c2={`2019 - ${date}`}
          c3="Planet earth"
        />
        <Project_Story txt={<InfraredTxt />} />

        <Images_grid_container currentDir="infrared" />
        <h4 className={styles.seeMore__title}>Also recommended:</h4>
        <div className={styles.seeMore__container}>
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
        </div>
        <Save_description />
      </div>
    </>
  );
}

export default page;
