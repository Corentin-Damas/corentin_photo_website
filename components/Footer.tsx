import React from "react";
import Link from "next/link";
import styles from "../components/Footer.module.css";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer} id="footer_id">
      <div className={styles.columnsContainer}>
        <div className={styles.left}>
          <h2 className={styles.footer__columnHead}>Corentin Damas</h2>
          <div>
            <p className={styles.footer__text}>
              Fra _<span className="main-Color">&gt;</span> 0668911893
            </p>
            <p className={styles.footer__text}>
              Int _<span className="main-Color">&gt;</span> +33668911893
            </p>
            <p className={styles.footer__text}>corentin.damasphoto@gmail.com</p>
          </div>
          <Link href="/contact">
            <button className={`${styles.footer__btn} btn`}>Contact me</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h5
            className={`${styles.footer__Nav} ${styles.footer__columnHead}  ${styles.grey}`}
          >
            Navigation
          </h5>
          <div className={styles.links__container}>
            <ul className={styles.links}>
              <Link href="/gallery/tsuzukitai">Trapped Memories</Link>
              <Link href="/gallery/a_year_in_japan">A year in japan</Link>
              <Link href="/gallery/infrared">Infrared</Link>
              <Link href="/about">About</Link>
            </ul>
            <ul className={styles.links}>
              <Link href="/gallery/morning_shadows">Morning shadows</Link>
              <Link href="/gallery/earth_and_sky">Earth & sky</Link>
              <Link href="/gallery/black_and_white">Black & white</Link>
              <Link href="/gallery">Gallery</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; {date} Corentin Damas | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
