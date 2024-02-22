import React from "react";
import styles from "../gallery/Hero_gallery.module.css";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
function Hero_gallery() {
  return (
    <>

      <div className={styles.heroSection}>
        <h2>Project base photographer</h2>
        <div className={styles.keywords}>
          <p className={`${styles.presentation__sub_txt} body_02`}> Travel</p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>Culture </p>
          <div className={styles.dot}></div>
          <p className={`${styles.presentation__sub_txt} body_02`}>
            {" "}
            Wondering{" "}
          </p>
        </div>
        <div className={styles.switchTheme}>

          <ThemeSwitch/>
        </div>
      </div>
    </>
  );
}

export default Hero_gallery;
