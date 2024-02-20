import React from "react";
import styles from "../main_section/section_01.module.css";
import Image from "next/image";
import Link from "next/link";
function section_01() {
  return (
    <>
      <section className={styles.section01__Grid}>
        <hr className={styles.horizontalRule}/>
        {/* Part 1 JAPAN */}
        <Image
          src="/a_year_in_japan/01-a_year_in_japan-XL.jpg"
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

        {/* Part 2 The city */}
        <h4 className={styles.shadows__title}>
          Morning
          <br />
          Shadow <hr className={styles.underline} />
        </h4>
        <Image
          src="/morning_shadows/06-Morning_Shadows-XL.jpg"
          alt="View on the city of london in the morning light"
          className={`${styles.imgCityPreview}`}
          fill
          quality={80}
        />
        <div className={styles.legend__shadows}>
          <h6 className={styles.legend__shadows_txt}> The city</h6>
          <div className={styles.verticalRule}></div>
        </div>

        {/* Part 3 museums */}
        <h4 className={styles.museums__title}>
          Museums
          <br />
          <hr className={styles.underline} />
        </h4>
        <Image
          src="/museums/03-Museum-XL.jpg"
          alt="Entrance of the Natural History Museum of London (UK), statue of Charles Darwin"
          className={`${styles.imgMuseumPreview}`}
          fill
          quality={80}
        />
        <div className={styles.legend__museums}>
          <h6 className={styles.legend__museums_txt}> London & Amsterdam</h6>
          <div className={styles.verticalRule}></div>
        </div>
        <Link href={"/gallerie"} className={`${styles.grid__link} gallery_Link`}>
          See Gallery _<span className="main-Color">&gt;</span>
        </Link>
      </section>
    </>
  );
}

export default section_01;
