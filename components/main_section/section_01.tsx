import React from "react";
import styles from "../main_section/section_01.module.css";
import Image from "next/image";
function section_01() {
  return (
    <>
      <section className={styles.section01__Grid}>
        <hr className={styles.horizontalRule}/>
        <Image
          src="/02_a_year_in_japan/1-Kamogawa_River-XL.jpg"
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.imgJapPreview} dark_mode_only`}
          fill
          quality={80}
        />

        <h1 className={`${styles.kanji} japanese`}>
          日 <br /> 本
        </h1>

        <div className={styles.title__box}>
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
          <hr className={styles.title__box_line} />

          <h1 className={styles.title__box_L3}>Japan</h1>
        </div>

        <h4 className={styles.shadows__title}>
          Morning
          <br />
          Shadow <hr className={styles.shadows__underline} />
        </h4>
        <Image
          src="/04_shadows/06-Morning_Shadows-XL.jpg"
          alt="View on the city of london in the morning light"
          className={`${styles.imgCityPreview} dark_mode_only`}
          fill
          quality={80}
        />
        <div className={styles.legend__shadows}>
          <h6 className={styles.legend__shadows_txt}> The city</h6>
          <div className={styles.verticalRule}></div>
        </div>
      </section>
    </>
  );
}

export default section_01;
