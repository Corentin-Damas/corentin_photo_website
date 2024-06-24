import React from "react";
import styles from "./Section_Japan.module.css";
import Link from "next/link";
import Image from "next/image";

// img_caption__containeur

function Section_Japan() {
  return (
    <section className={styles.japan__grid}>
      <div className={styles.transparency}></div>
      <Link href={"/gallery/a_year_in_japan"} className={styles.japan__projectLink}>
        <Image
          src="/a_year_in_japan/L/01-a_year_in_japan.jpg"
          alt="Couples sitting by the Kamo River at night Kyoto, Japan"
          className={`${styles.japan__projectLink_img} dark_mode_only`}
          sizes="(max-width: 768px) 100vw, 85vw"
          width={1280}
          height={853}
          quality={80}
          loading="lazy"
        />

        <Image
          src="/a_year_in_japan/L/24-a_year_in_japan.jpg"
          alt="View on the arbor of Kobe (Japan) with his landmark: the red kobe port tower"
          className={`${styles.japan__projectLink_img} ${styles.japan__projectLink_img_pos}  light_mode_only`}
          sizes="(max-width: 768px) 100vw, 85vw"
          width={1280}
          height={853}
          quality={80}
          loading="lazy"
        />
      </Link>

      <div className={styles.japan__kanji}>
        <h1 className={`japanese`}>
          日 <br /> 本
        </h1>
      </div>

      <div className={styles.title__box}>
          <h1
            className={`${styles.title__box_mobile} ${styles.title__box_line01}`}
          >
            A year in japan
          </h1>
          <h1
            className={`${styles.title__box_txt} ${styles.title__box_line01} `}
          >
            A year
          </h1>

          <h1
            className={`${styles.title__box_txt} ${styles.title__box_line02} `}
          >
            In
          </h1>
          <div className={styles.title__box_line}></div>

          <h1 className={` ${styles.title__box_txt} ${styles.title__box_L3} `}>
            Japan
          </h1>

          <div className={styles.p1__link__containeur}>
            <Link
              href={"/gallery/a_year_in_japan"}
              className="gallery_Link"
            >
              See Gallery _<span className="main-Color">&gt;</span>
            </Link>
          </div>
        </div>
    </section>
  );
}

export default Section_Japan;
