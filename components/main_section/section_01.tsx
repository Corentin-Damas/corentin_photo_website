import React from "react";
import styles from "../main_section/section_01.module.css";
import Image from "next/image";
import Link from "next/link";
function section_01() {
  return (
    <>
      <section className={styles.section01__Grid}>
        <hr className={styles.horizontalRule} />
        {/* Part 1 JAPAN */}
        <Link href={"/gallery/a_year_in_japan"} className={styles.link__img}>
          <Image
            src="/a_year_in_japan/XL/01-a_year_in_japan-XL.jpg"
            alt="Couples sitting by the Kamo River at night Kyoto, Japan"
            className={`${styles.imgJapPreview} dark_mode_only`}
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
          />

          <Image
            src="/a_year_in_japan/XL/24-a_year_in_japan-XL.jpg"
            alt="View on the arbor of Kobe (Japan) with his landmark: the red kobe port tower"
            className={`${styles.imgJapPreview} ${styles.imgJapPreview__position}  light_mode_only`}
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
          />
        </Link>
        <div className={`${styles.img_caption__containeur} dark_mode_only`}>
          <div className={styles.img_caption__left}></div>
          <div className={styles.img_caption__right}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Kamo-gawa</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                鴨川
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                Kyoto
                <br />
                Kyoto Prefecture
                <br />
                Japan
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.img_caption__containeur} light_mode_only`}>
          <div className={styles.img_caption__left}></div>
          <div className={styles.img_caption__right}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Red kobe port tower</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                神戸ポートタワー
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                Kobe
                <br />
                Hyōgo Prefecture
                <br />
                Japan
              </p>
            </div>
          </div>
        </div>

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

          <div className={styles.p1__link__containeur}></div>
          <Link
            href={"/gallery/a_year_in_japan"}
            tabIndex={9}
            className="gallery_Link"
          >
            See Gallery _<span className="main-Color">&gt;</span>
          </Link>
        </div>

        {/* Part 2 The city */}
        <h4 className={styles.shadows__title}>
          Morning
          <br />
          Shadow <hr className={styles.underline} />
        </h4>
        <Link href={"/gallery/morning_shadows"} className={styles.link__city}>
          <div className={styles.img__container_city}>
            <Image
              src="/morning_shadows/L/06-Morning_Shadows.jpg"
              alt="View on the city of london in the morning light"
              className={`${styles.imgCityPreview}`}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          </div>
        </Link>
        <div className={`${styles.img_caption__containeur_city}`}>
          <div className={styles.img_caption__right}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Old Father Thames</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                Ten Trinity Square
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                The City of London
                <br />
                London
                <br />
                England
              </p>
            </div>
          </div>
          <div className={styles.img_caption__left}></div>
        </div>
        <div className={styles.legend__city}>
          <Link href={"/gallery/morning_shadows"} className={styles.link_txt}>
            <h6 className={styles.legend__city_txt}> The city</h6>
          </Link>
          <div className={styles.verticalRule}></div>
        </div>

        {/* Part 3 museums */}
        <h4 className={styles.museums__title}>
          Museums
          <hr className={styles.underline} />
        </h4>
        <Link href={"/gallery/museums"} className={styles.link__museum}>
          <div className={styles.img__container_museum}>
            <Image
              src="/museums/L/03-museums.jpg"
              alt="Entrance of the Natural History Museum of London (UK), statue of Charles Darwin"
              className={`${styles.imgMuseumPreview}`}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          </div>
        </Link>
        <div className={`${styles.img_caption__containeur_museum}`}>
          <div className={styles.img_caption__left}></div>
          <div className={styles.img_caption__right}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Charles Darwin</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                Natural History Museum
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                London
                <br />
                England
              </p>
            </div>
          </div>
        </div>
        <div className={styles.legend__museums}>
          <Link href={"/gallery/museums"} className={styles.link_txt}>
            <h6 className={styles.legend__museums_txt}> London & Amsterdam</h6>
          </Link>
          <div className={styles.verticalRule}></div>
        </div>
      </section>
    </>
  );
}

export default section_01;
