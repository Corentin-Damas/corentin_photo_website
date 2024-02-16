import React from 'react'
import styles from "../main_section/section_03.module.css";
import Image from "next/image";
import Link from "next/link";

function section_03() {
  return (
    <div className={styles.section03__Grid}>
        <Image
          src="/01_between_land&sky/13-sky and earth-XL.jpg"
          alt="Photography of a Beach with a natural rock arch at night time"
          className={`${styles.imgLandPreview}`}
          fill
          quality={80}
        />
        <div className={styles.legend__Landscape}>
          <h6 className={styles.legend__Landscape_txt}>Between earth and sky</h6>
          <div className={styles.verticalRule}></div>
        </div>
        <Image
          src="/03_infra/01-infrared-XL.jpg"
          alt="Infrared photoghaphy of a tree near the sea. The tree has pink leaves "
          className={`${styles.imgInfraPreview}`}
          fill
          quality={80}
        />
        <div className={styles.legend__infra}>
          <h6 className={styles.legend__infra_txt}>World in Infrared</h6>
          <div className={styles.verticalRule}></div>
        </div>
        <Image
          src="/07_black_and_white/02-black_and_white-XL.jpg"
          alt="Black and white photography with three trunk in the snow in front of a beach and the sea"
          className={`${styles.imgBandWPreview}`}
          fill
          quality={80}
        />
        <div className={styles.legend__BandW}>
          <h6 className={styles.legend__BandW_txt}>Black and White</h6>
          <div className={styles.verticalRule}></div>
        </div>

        <Link href={"/gallerie"} className={`${styles.part03__link} gallery_Link`}>
          See Gallery _<span className="main-Color">&gt;</span>
        </Link>

    </div>
  )
}

export default section_03