import React from "react";
import Image_grid from "../../../../../../components/gallery/Image_grid";
import Hero_gallery from "../../../../../../components/gallery/Hero_gallery";
import styles from "../../layout.module.css";
import Link from "next/link";
import Image from "next/image";

function page() {
  const date = new Date().getFullYear();
  return (
    <div className={styles.page}>
      <Hero_gallery
        title="Work in Black and white"
        c1="Experience"
        c2={`2016 - ${date}`}
        c3="Planet earth"
      />
      <Image_grid currentDir="black_and_white" />
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
            World in <br /> Infrared
          </h5>
        </Link>
        <Link href="/gallery/tsuzukitai" className={`${styles.projectPreview}`}>
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
      </div>
    </div>
  );
}

export default page;
