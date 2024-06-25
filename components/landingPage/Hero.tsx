import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

import bgDark from "../../public/landingpage/XL/rainbow-bridge-XL.jpg";
import bgLight from "../../public/landingpage/XL/landscapes-Landing-XL.png";

function Hero() {
  return (
    <>
      <div className={styles.landing__bg}>
        <Image
          src={bgDark}
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.bgDark} dark_mode_only`}
          quality={100}
          placeholder="blur"
          fill
          priority
        />
        <Image
          src={bgLight}
          alt="Floating torii from Miyajima, Japan"
          className={`${styles.bglight} light_mode_only`}
          quality={100}
          placeholder="blur"
          fill
          priority
        />
      </div>
      <section className={styles.landing__hero}>
        <div className={styles.presentation}>
          <div className={styles.presentation__sub}>
            <p className={`${styles.presentation__sub_txt} body_02`}>
              Wandering
            </p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>Travel</p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>Culture</p>
          </div>
          <h3 className={`${styles.presentation__main} geologicaRom`}>
            Project Base Photographer
          </h3>
          <Link href={"/gallery"} className="gallery_Link">
            See Gallery _<span className="main-Color">&gt;</span>
          </Link>
        </div>
        <div className={`${styles.img_caption__containeur} dark_mode_only`}>
          <div className={styles.img_caption__left}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Rainbow Bridge</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                東京港連絡橋 - レインボーブリッジ
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                Minato
                <br />
                Tokyo Metropolis
                <br />
                Japan
              </p>
            </div>
          </div>
          <div className={styles.img_caption__right}></div>
        </div>
        <div className={`${styles.img_caption__containeur} light_mode_only`}>
          <div className={styles.img_caption__left}>
            <div className={styles.img_caption__up}>
              <p className="detail_01">Itsukushima-jinja</p>
              <p className={`${styles.sec_color_txt} detail_02 japanese`}>
                厳島神社
              </p>
            </div>
            <div className={styles.img_caption__down}>
              <p className="detail_01">
                Itsukushima (Miyajima)
                <br />
                Hiroshima Prefecture
                <br />
                Japan
              </p>
            </div>
          </div>
          <div className={styles.img_caption__right}></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
