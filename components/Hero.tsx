"use client";
import React from "react";
import Link from "next/link";
import styles from "../components/Hero.module.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className={styles.presentation}>
      <motion.div
        className={styles.presentation__containeur}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
      >
        <div className={styles.presentation__sub}>
          <p className={`${styles.presentation__sub_txt} body_02`}>Wondering</p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>Travel</p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>Culture</p>
        </div>
        <h3 className={`${styles.presentation__main} geologicaRom`}>
          Project Base Photographer
        </h3>
        <Link
          href={"/gallery"}
          tabIndex={0}
          className="gallery_Link presentation_sp_link"
        >
          See Gallery _<span className="main-Color">&gt;</span>
        </Link>
      </motion.div>
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
  );
}

export default Hero;
