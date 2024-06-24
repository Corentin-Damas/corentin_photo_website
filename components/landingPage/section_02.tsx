import React from "react";
import styles from "./section_02.module.css";
import Image from "next/image";
import Link from "next/link";

function section_02() {
  return (
    <section className={styles.section02__Containeur}>
      <div className={styles.section02__left}>
        <div className={`${styles.verticalRule} ${styles.first_bar}`}></div>

        <h1 className={` ${styles.display_02}  japanese`}>
          <span className={styles.firstKanji}>続</span>きたい
        </h1>

        <p className={` ${styles.engTitle} `}>Trapped Memories</p>
        <div className={styles.verticalRule}></div>
      </div>
      <Link href={"gallery/tsuzukitai"} className={styles.img__link}>
        <Image
          src="/tsuzukitai/XL/37-tsuzukitai.jpg"
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.imgCovTsuzukitai}`}
          width={1920}
          height={1080}
          quality={100}
          sizes="100vw"
        />
      </Link>
      <Link
        href={"/gallery/tsuzukitai"}
        className={`${styles.section02__link} gallery_Link`}
      >
        See Gallery _<span className="main-Color light_mode_only">&gt;</span>
        <span className="prim-100 dark_mode_only">&gt;</span>
      </Link>
    </section>
  );
}

export default section_02;
