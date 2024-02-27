import React from "react";
import styles from "../gallery/Hero_gallery.module.css";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
function Hero_gallery({
  title,
  c1,
  c2,
  c3,
}: {
  title: string;
  c1: string;
  c2: string;
  c3: string;
}) {
  return (
    <>
      <div className={styles.heroSection}>
        <h2>{title}</h2>
        <div className={styles.keywords}>
          <p className={`${styles.presentation__sub_txt} body_02`}>{c1}</p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>{c2}</p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>{c3}</p>
        </div>
        <div className={styles.theme_container}>
          <ThemeSwitch />
          <p className={`${styles.theme_txt} light_mode_only`}>dark mode</p>
          <p className={`${styles.theme_txt} dark_mode_only`}>light mode</p>
        </div>
      </div>
    </>
  );
}

export default Hero_gallery;
