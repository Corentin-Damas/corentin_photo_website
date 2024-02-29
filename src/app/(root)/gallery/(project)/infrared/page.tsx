import React from "react";

import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";

import InfosBubble from "../../../../../../components/gallery/InfosBubble";
import InfraredTxt from "../../../../../../components/gallery/project_text/infraredTxt";
import styles from "../../layout.module.css";
import Link from "next/link";
import Image from "next/image";

const date = new Date().getFullYear();

function page() {
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="The world in Infrared"
        c1="New eyes"
        c2={`2019 - ${date}`}
        c3="Planet earth"
      />
      <aside className={styles.project_info_bubble}>
        <InfosBubble txt={<InfraredTxt />} />
      </aside>
      <Image_grid currentDir="infrared" />
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
            Earth & <br /> sky
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
            Black & <br /> white
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default page;
