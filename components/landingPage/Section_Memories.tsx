import React from "react";
import styles from "./Section_Memories.module.css";
import Image from "next/image";
import Link from "next/link";

// img__link

function Section_Memories() {
  return (
    <section className={`${styles.memories} full-width`}>
      <div className={styles.memories__left}>
        <div className={`${styles.rule_vl} ${styles.rule_first}`}></div>
        <Link href={"gallery/tsuzukitai"}>
          <h1 className={` ${styles.memories__title_main}  japanese`}>
            <span className={styles.char_first}>続</span>きたい
          </h1>
        </Link>

        <Link href={"gallery/tsuzukitai"}>
          <p className={` ${styles.memories__title_sec} `}>Trapped Memories</p>
        </Link>
        <div className={styles.rule_vl}></div>
      </div>
      <div className={styles.memories__img_container}>
        <Link href={"gallery/tsuzukitai"}>
          <Image
            src="/tsuzukitai/XL/37-tsuzukitai.jpg"
            alt="Abstract image in black and white of a white fish."
            className={`${styles.memories__img}`}
            width={1920}
            height={1080}
            quality={100}
            sizes="100vw"
          />
        </Link>
      </div>
      <Link
        href={"/gallery/tsuzukitai"}
        className={`${styles.memories__link_gal} gallery_Link`}
      >
        See Gallery _<span className="main-Color light_mode_only">&gt;</span>
        <span className="prim-100 dark_mode_only">&gt;</span>
      </Link>
    </section>
  );
}

export default Section_Memories;
