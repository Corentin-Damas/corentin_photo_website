import React from "react";
import styles from "../gallery/Hero_gallery.module.css";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import Nav_gallerySmallSize from "./nav_gallerySmallSize";

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
        <Link href="/gallery" className={styles.myNameLink}>
          Corentin Damas
        </Link>
        <div className={styles.title_container}>
          <h2 className={styles.title_txt}>{title}</h2>
          <div className={styles.keywords}>
            <p className={`${styles.presentation__sub_txt} body_02`}>{c1}</p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>{c2}</p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>{c3}</p>
          </div>
        </div>
        <div className={styles.theme_container}>
          <ThemeSwitch context={"gallery"} />
        </div>
        <div className={styles.navSmall_container}>
          <Nav_gallerySmallSize />
        </div>
      </div>
    </>
  );
}

export default Hero_gallery;
