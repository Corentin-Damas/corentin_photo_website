import React from "react";
import styles from "./section_03.module.css";
import Image from "next/image";
import Link from "next/link";

function section_03() {
  return (
    <div className={styles.section03__Grid}>
      <Link href={"/gallery/earth_and_sky"} className={styles.img__link_earth}>
        <Image
          src="/earth_and_sky/L/13-earth_and_sky.jpg"
          alt="Photography of a Beach with a natural rock arch at night time"
          className={`${styles.imgLandPreview}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div className={styles.legend__Landscape}>
        <Link href={"/gallery/earth_and_sky"} className={styles.link_txt}>
          <h6 className={styles.legend__Landscape_txt}>
            Between earth and sky
          </h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>
      <Link href={"/gallery/infrared"} className={styles.img__link_infra}>
        <Image
          src="/infrared/L/01-infrared.jpg"
          alt="Infrared photoghaphy of a tree near the sea. The tree has pink leaves "
          className={`${styles.imgInfraPreview}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div className={styles.legend__infra}>
        <Link href={"/gallery/infrared"} className={styles.link_txt}>
          <h6 className={styles.legend__infra_txt}>World in Infrared</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>
      <Link
        href={"/gallery/black_and_white"}
        className={styles.img__link_bandwhite}
      >
        <Image
          src="/black_and_white/L/02-black_and_white.jpg"
          alt="Black and white photography with three trunk in the snow in front of a beach and the sea"
          className={`${styles.imgBandWPreview}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div className={styles.legend__BandW}>
        <Link href={"/gallery/black_and_white"} className={styles.link_txt}>
          <h6 className={styles.legend__BandW_txt}>Black and White</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>

      <Link href={"/gallery"} className={`${styles.part03__link} gallery_Link`}>
        See Gallery _<span className="main-Color">&gt;</span>
      </Link>
    </div>
  );
}

export default section_03;
